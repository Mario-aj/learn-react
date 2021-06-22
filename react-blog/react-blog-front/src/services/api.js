import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4321',
});

class API {
  authenticated() {
    const storagedData = localStorage.getItem('react-blog');

    return storagedData?.token ? true : true;
  }

  async posts() {
    const response = await api.get('/posts');

    return response.data;
  }

  async login(email, password) {
    try {
      console.log('dentro da api: ', email, password);
      const response = await api.get('/login', { email, password });
      // console.log(response);

      // if (response.error) throw new Error(response.error);

      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new API();
