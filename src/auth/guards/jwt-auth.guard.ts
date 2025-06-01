import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(
      'Incoming Authorization header:',
      request.headers.authorization,
    );

    try {
      // Call the parent class's canActivate method which uses Passport's JWT strategy
      const result = await super.canActivate(context);
      return result as boolean;
    } catch (error) {
      console.error('Token verification error:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
