export class InitiateLoginDto {
  mobileNumber: string;
  name: string;
}

export class VerifyOtpDto {
  mobileNumber: string;
  otp: string;
}
