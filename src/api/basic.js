import axios from 'axios';

// https://patissier-server.onrender.com/docs Документаці як в 8 дз по React
// Первий запит може йти довго так як server безкоштовний і він "засинає"

const URL = 'https://patissier-server.onrender.com';

export const server = axios.create({
  baseURL: URL,
});
