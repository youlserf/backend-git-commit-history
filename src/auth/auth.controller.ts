import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const token = await this.authService.validateUser(body.username, body.password);
    if (!token) {
      return { message: 'Invalid credentials' };
    }
    return token;
  }
}