import { Controller,Get, Param, UseGuards } from '@nestjs/common'
import { GithubService } from './github.service';
import { Commit } from 'src/interfaces/commit.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commit-history/:owner/:repo')
  @UseGuards(JwtAuthGuard)
  async getCommitHistory(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ): Promise<Commit[]> {
    return this.githubService.getCommitHistory(owner, repo);
  }
}
