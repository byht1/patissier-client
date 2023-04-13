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

export const addProductToFavorite = async productID => {
  // try {
  //   const { data } = await server.get(
  //     UrlProducts.all + `/add-favorite/${productID}`
  //   );
  //   const { favorites } = data;
  //   console.log(favorites);
  //   return favorites;
  // } catch (error) {
  //   throw error;
  // }
  try {
    const { data } = await server.get(
      'https://patissier-server.onrender.com/store/product/add-favorite/6421e50e55b089d4969ee5b4'
    );
    const { favorites } = data;
    console.log(favorites);
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const getFavoriteProducts = async () => {};
