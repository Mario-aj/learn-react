import axios from 'axios'

type FetchProps = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

export const fetch = async({ url, method }: FetchProps) =>  await axios[method](url);
