import { server } from './basic';

export const getReviews = async () => {
  try {
    const response = await server.get('/reviews');
    const reviews = await response.data;
    console.log(reviews);
    return reviews;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
