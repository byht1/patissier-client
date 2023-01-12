import axios from 'axios';

const URL = 'https://patissier-server.herokuapp.com';

export const server = axios.create({
  baseURL: URL,
});
