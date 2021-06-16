import axios from 'axios';

interface Resp {
  data: Array<{}>;
}

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/rn-api/',
});

export const getPosts = async () => {
  const response: Resp = await api.get('?api=posts');
  return response;
};
