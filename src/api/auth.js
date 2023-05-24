import { server, token } from './basic';

const UrlAuth = Object.freeze({
  signUp: '/auth/sing-up',
  logIn: '/auth/log-in',
  logOut: '/auth/logout',
  recoveryPass: '/auth/forgotten-password',
  newPass: '/auth/forgotten-password/new',
  current: '/auth/current',
});

export const signUp = async body => {
  const preparedUserData = {
    username: body.name,
    email: body.email,
    password: body.password,
  };

  try {
    const { data } = await server.post(UrlAuth.signUp, preparedUserData);

    token.set(data.token);
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const logIn = async (body, keepOnline) => {
  try {
    const { data } = await server.post(UrlAuth.logIn, body);

    token.set(data.token);
    if (keepOnline) {
      localStorage.setItem('token', data.token);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const current = async () => {
  try {
    const currnetToken = localStorage.getItem('token');
    token.set(currnetToken);
    const { data } = await server.get(UrlAuth.current);
    return data;
  } catch (error) {
    throw error;
  }
};

export const logOutUser = async () => {
  const body = { token: localStorage.getItem('token') };

  try {
    await server.get(UrlAuth.logOut, body);
    token.unset();
    localStorage.removeItem('token');
  } catch (error) {
    throw error;
  }
};

export const recoveryPass = async email => {
  try {
    await server.patch(UrlAuth.recoveryPass, { email });
  } catch (error) {
    throw error;
  }
};

export const newPass = async (userToken, body) => {
  try {
    token.set(userToken);
    const { data } = await server.post(UrlAuth.newPass, body);
  } catch (error) {
    throw error;
  }
};
