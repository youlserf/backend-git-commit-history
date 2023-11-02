import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { GithubModule } from './github/github.module';
import { JwtAuthModule } from './auth/jwt.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [GithubModule, JwtAuthModule],
  controllers: [AppController, GithubController, AuthController],
  providers: [AppService, GithubService, AuthService],
})
export class AppModule {}
