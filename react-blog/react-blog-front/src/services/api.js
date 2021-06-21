import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4321',
});

class API {
  authenticated() {
    const storagedData = localStorage.getItem('react-blog');

    return storagedData?.token ? true : false;
  }
}

export default new API();
