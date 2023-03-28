import { server, token } from './basic';

const UrlRegister = Object.freeze({
  signUp: '/auth/sing-up',
  logIn: '/auth/log-in',
  logOut: '/auth/logout',
  active: '/auth/active',
  newPass: '/auth/new-password',
  forgottenPass: '/auth/forgotten-password',
});

export const signUp = async body => {
  const preparedUserData = {
    username: body.name,
    email: body.email,
    password: body.password,
  };

  try {
    const { data } = await server.post(UrlRegister.signUp, preparedUserData);

    token.set(data.token);
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    throw error.message;
  }
};

export const logIn = async body => {
  console.log('🚀 ~ file: auth.js:32 ~ logIn ~ body:', body);

  try {
    const { data } = await server.post(UrlRegister.logIn, body);

    token.set(data.token);
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    throw error.message;
  }
};

export const logOutUser = async () => {
  const body = { token: localStorage.getItem('token') };

  try {
    await server.get(UrlRegister.logOut, body);
    // token.unset();
    localStorage.removeItem('token');
  } catch (error) {
    throw error.message;
  }
};
