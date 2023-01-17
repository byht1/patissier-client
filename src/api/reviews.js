import { server } from './basic';

const REVIEWS_URL = '/reviews';

export const getReviews = async () => {
  try {
    const response = await server.get(REVIEWS_URL);
    const reviews = await response.data;
    return reviews;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
