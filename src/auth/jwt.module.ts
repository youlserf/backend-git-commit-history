// JwtAuthModule.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; // Import the JwtStrategy

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [JwtModule],
  providers: [JwtStrategy], // Include JwtStrategy in the providers
})
export class JwtAuthModule {}
