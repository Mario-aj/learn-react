import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

class Api {
  async searchRepo(reposName) {
    try {
      const response = await api.get(`/repos/${reposName}`);

      return response.data;
    } catch (error) {
      return {
        error:
          'There is no repo with this name, please, try again with another name',
      };
    }
  }

  async getRepoInfo(repo, status = '') {
    try {
      const [repoInfo, issuesData] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            per_page: 5,
          },
        }),
      ]);

      return [repoInfo.data, issuesData.data];
    } catch (error) {
      return [
        {
          error:
            'The info that you are looking for was not found, try again later',
        },
      ];
    }
  }

  async loadIssuesPerPage(repository, page) {
    try {
      const response = await api.get(`/repos/${repository}/issues`, {
        params: {
          status: 'open',
          page,
          per_page: 5,
        },
      });

      return response.data;
    } catch (e) {
      return { error: 'The page that you requested was not found' };
    }
  }
}

export default new Api();
