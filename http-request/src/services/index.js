import axios from "axios";

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/rn-api/",
});

export const getPosts = async () => {
  const response = await api.get("?api=posts");

  return response.data;
};
