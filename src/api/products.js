import { server } from './basic';

const UrlProducts = Object.freeze({
  all: '/store/product',
});

export const getAllProducts = async ({ page = 1, limit = 3 }) => {
  try {
    const { data } = await server.get(
      UrlProducts.all + `?page=${page}&limit=${limit}`
    );
    const { products } = data;
    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async ({ category, page = 1 }) => {
  try {
    const { data } = await server.get(
      UrlProducts.all + `?page=${page}&limit=3&category=${category}`
    );
    const { products } = data;
    console.log(products);
    return products;
  } catch (error) {
    throw error;
  }
};
