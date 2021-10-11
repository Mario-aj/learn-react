import axios from 'axios';

export const baseURL = 'https://api.github.com';
const httpClient = axios.create({
  baseURL,
});

export const getReposByUsername = async ({ username }) => {
  const { data } = await httpClient.get(`users/${username}/repos`);

  return data;
};
