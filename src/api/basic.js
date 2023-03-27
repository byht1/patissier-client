import axios from 'axios';

// https://patissier-server.onrender.com/docs Документаці як в 8 дз по React
// Перший запит може йти довго так як server безкоштовний і він "засинає"

const URL = 'https://patissier-server.herokuapp.com';

export const server = axios.create({
  baseURL: URL,
});

export const token = {
  set(token) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = '';
  },
};
