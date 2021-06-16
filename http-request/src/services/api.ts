import axios from 'axios';

export interface Response {
  id: number;
  titulo: string;
  capa: string;
  subtitulo: string;
  categoria: string;
}

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/rn-api/',
});

export const getPosts = async () => {
  const response: Response[] = await api.get('?api=posts');
  return response;
};
