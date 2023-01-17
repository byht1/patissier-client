import { server } from './basic';

const UrlReviews = Object.freeze({ all: './reviewss' });

export const getReviews = async () => {
  try {
    const { data } = await server.get(UrlReviews.all);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
