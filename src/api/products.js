import { server } from './basic';

const UrlProducts = Object.freeze({
  all: '/store/product',
});

export const getAllProducts = async () => {
  try {
    const { data } = await server.get(UrlProducts.all);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async category => {
  try {
    const { data } = await server.get(
      UrlProducts.all + `?category=${category}`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
