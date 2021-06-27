import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

class Api {
  async searchRepo(reposName) {
    const response = await api.get(`/repos/${reposName}`);

    if (response.error) return { error: response.error.message };

    return response.data;
  }
}

export default new Api();
