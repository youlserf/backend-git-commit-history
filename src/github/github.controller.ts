import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Commit } from 'src/interfaces/commit.interface';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commit-history/:owner/:repo')
  async getCommitHistory(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ): Promise<Commit[]> {
    return this.githubService.getCommitHistory(owner, repo);
  }
}
