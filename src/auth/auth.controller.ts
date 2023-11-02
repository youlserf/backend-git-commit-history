import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

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

  @Get('validate-token')
  @UseGuards(JwtAuthGuard)
  async validateToken(@Req() request) {
    // If the request reaches this point, it means the token is valid and not expired
    return { message: 'Token is valid' };
  }
}