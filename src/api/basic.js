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

// server.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 403) {
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (!refreshToken) return Promise.reject(error);

//       try {
//         const { data } = await server.post('/auth/refresh', {
//           refresh_token: refreshToken,
//         });

//         token.set(data);
//         error.config.headers.common.authorization = `Bearer ${data}`;

//         return server(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
