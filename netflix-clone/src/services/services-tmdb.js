import { api } from './axios';

class ServiceTMDB {
  constructor() {
    this.api_key = '8c768b3e2a9385ce50c50e1e683df109';
    this.language = 'pt-BR';
  }

  async _getMoveByEndpoint(endpoint) {
    const response = await api.get(`${endpoint}`);

    return response.data;
  }

  async getHomeMoveList() {
    return [
      {
        slug: 'originals',
        title: 'Originais da netflix',
        items: await this._getMoveByEndpoint(
          `/discover/tv?with_network=213&language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'trading',
        title: 'Recomendados para Você',
        items: await this._getMoveByEndpoint(
          `/trading/all/week?language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await this._getMoveByEndpoint(
          `movie/top_rated?language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await this._getMoveByEndpoint(
          `discover/movie?with_genres=28&language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await this._getMoveByEndpoint(
          `discover/movie?with_genres=35&language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await this._getMoveByEndpoint(
          `discover/movie?with_genres=27&language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await this._getMoveByEndpoint(
          `discover/movie?with_genres=10749&language=${this.language}&api_key=${this.api_key}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await this._getMoveByEndpoint(
          `discover/movie?with_genres=99&language=${this.language}&api_key=${this.api_key}`
        ),
      },
    ];
  }
}

export default new ServiceTMDB();
