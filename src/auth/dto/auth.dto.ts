import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class InitiateLoginDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[6-9]\d{9}$/, {
    message:
      'Mobile number must be a valid Indian mobile number starting with 6-9',
  })
  mobileNumber: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class VerifyOtpDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[6-9]\d{9}$/, {
    message:
      'Mobile number must be a valid Indian mobile number starting with 6-9',
  })
  mobileNumber: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{6}$/, {
    message: 'OTP must be a 6-digit number',
  })
  otp: string;
}
