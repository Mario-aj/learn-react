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
      console.log(error.message);
      return {
        error:
          'There is no repo with this name, please, try again with another name',
      };
    }
  }
}

export default new Api();
