import axios from 'axios';

export const getReposByUsername = async ({ username }) => {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  const response = data.map(({ full_name }) => ({ name: full_name }));

  return response;
};
