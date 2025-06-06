import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient, User } from 'generated/prisma';
import * as crypto from 'crypto';

enum UserRole {
  CUSTOMER = 'CUSTOMER',
  RESTOWNER = 'RESTOWNER',
}

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.prisma = new PrismaClient();
  }

  private generateOTP(): string {
    const length = this.configService.get<number>('OTP_LENGTH', 6);
    return Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');
  }

  private hashOTP(otp: string): string {
    return crypto.createHash('sha256').update(otp).digest('hex');
  }

  async initiateLogin(mobileNumber: string): Promise<{ isNewUser: boolean }> {
    // Validate mobile number format (Indian format)
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      throw new BadRequestException('Invalid mobile number format');
    }

    // Check if user exists
    let user = await this.prisma.user.findFirst({
      where: { userMobile: mobileNumber },
    });

    const isNewUser = !user;

    // If new user, create account with a default name
    if (isNewUser) {
      user = await this.prisma.user.create({
        data: {
          userMobile: mobileNumber,
          userName: `User_${mobileNumber.slice(-4)}`, // Generate a default name using last 4 digits
          isRestOwner: false,
          userLocation: null,
          lastLoginAt: null,
        },
      });
    }

    if (!user) {
      throw new BadRequestException('Failed to create or find user');
    }

    // Generate and store OTP
    const otp = this.generateOTP();
    const hashedOTP = this.hashOTP(otp);
    const expiresIn = this.configService.get<string>('OTP_EXPIRES_IN', '5m');
    const expiresAt = new Date(Date.now() + this.parseDuration(expiresIn));

    await this.prisma.oTP.create({
      data: {
        userId: user.userId,
        mobileNumber,
        code: hashedOTP,
        expiresAt,
      },
    });

    // TODO: In production, send OTP via SMS service
    console.log(`OTP for ${mobileNumber}: ${otp}`);

    return { isNewUser };
  }

  async verifyOTP(
    mobileNumber: string,
    otp: string,
  ): Promise<{ token: string }> {
    const hashedOTP = this.hashOTP(otp);
    const now = new Date();

    // Find valid OTP
    const otpRecord = await this.prisma.oTP.findFirst({
      where: {
        mobileNumber,
        code: hashedOTP,
        isUsed: false,
        expiresAt: { gt: now },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otpRecord) {
      throw new UnauthorizedException('Invalid or expired OTP');
    }

    // Mark OTP as used
    await this.prisma.oTP.update({
      where: { id: otpRecord.id },
      data: { isUsed: true },
    });

    // Get user
    const user = await this.prisma.user.findFirst({
      where: { userMobile: mobileNumber },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Generate JWT token
    const token = this.jwtService.sign(
      {
        sub: user.userId,
        role: user.isRestOwner ? UserRole.RESTOWNER : UserRole.CUSTOMER,
        mobileNumber: user.userMobile,
      },
      {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN', '7d'),
      },
    );

    // Create session
    await this.prisma.session.create({
      data: {
        userId: user.userId,
        token,
        expiresAt: new Date(
          Date.now() +
            this.parseDuration(
              this.configService.get<string>('JWT_EXPIRES_IN', '7d'),
            ),
        ),
      },
    });

    // Update last login
    await this.prisma.user.update({
      where: { userId: user.userId },
      data: { lastLoginAt: new Date() },
    });
    console.log('Logged In');
    return { token };
  }

  private parseDuration(duration: string): number {
    const match = duration.match(/^(\d+)([mhd])$/);
    if (!match) return 0;

    const [, value, unit] = match;
    const num = parseInt(value, 10);

    switch (unit) {
      case 'm':
        return num * 60 * 1000;
      case 'h':
        return num * 60 * 60 * 1000;
      case 'd':
        return num * 24 * 60 * 60 * 1000;
      default:
        return 0;
    }
  }
}
