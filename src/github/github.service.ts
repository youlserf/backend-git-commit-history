import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Commit } from 'src/interfaces/commit.interface';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  async getCommitHistory(owner: string, repo: string): Promise<Commit[]> {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

    try {
      const response = await this.httpService.get(apiUrl).pipe(map(({ data }) => this.mapCommitData(data))).toPromise();
      return response as Commit[];
    } catch (error) {
      throw new NotFoundException('Commits not found.');
    }
  }

  private mapCommitData(data: any): Commit[] {
    return data.map((commitData: any) => ({
      sha: commitData.sha,
      commit: {
        author: {
          name: commitData.commit.author.name,
          email: commitData.commit.author.email,
          date: commitData.commit.author.date,
        },
        message: commitData.commit.message,
      },
      html_url: commitData.html_url,
      author: {
        login: commitData.author.login,
        id: commitData.author.id,
        avatar_url: commitData.author.avatar_url,
        html_url: commitData.author.html_url,
      },
      committer: {
        login: commitData.committer.login,
        id: commitData.committer.id,
        avatar_url: commitData.committer.avatar_url,
        html_url: commitData.committer.html_url,
      },
    }));
  }
}
