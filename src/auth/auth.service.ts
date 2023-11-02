// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Your logic to validate user credentials (e.g., check against a database)
    if (username === 'user' && password === 'password') {
      const payload = { username, sub: 1 };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
