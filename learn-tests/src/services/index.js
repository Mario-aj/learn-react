import axios from 'axios';

export const httpClientBaseURL = 'https://api.github.com';

export const getReposByUsername = async ({ username }) => {
  const { data } = await axios.get(
    `${httpClientBaseURL}/users/${username}/repos`
  );

  return data;
};
