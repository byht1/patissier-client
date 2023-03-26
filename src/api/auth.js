import { server, token } from './basic';

const UrlRegister = Object.freeze({
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
  logOut: '/auth/logout',
  active: '/auth/active',
  newPass: '/auth/new-password',
  forgottenPass: '/auth/forgotten-password',
});

export const signUp = async body => {
  try {
    const { data } = await server.post(UrlRegister.signUp, body);

    token.set(data.access_token);
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    throw error;
  }
};
