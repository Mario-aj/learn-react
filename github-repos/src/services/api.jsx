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
}

export default new Api();
