import { server } from './basic';
import { sortProductsMethod } from 'components/modules/Products/helpers/sortProductsMethod';

const UrlProducts = Object.freeze({
  all: '/store/product',
});

export const getAllProducts = async ({ page = 1, limit = 3, sortMethod }) => {
  try {
    const { data } = await server.get(
      UrlProducts.all +
        `?page=${page}&limit=${limit}&sort=${sortProductsMethod(sortMethod)}`
    );
    const { products } = data;
    console.log(sortMethod);
    console.log(
      `?page=${page}&limit=${limit}&sort=${sortProductsMethod(sortMethod)}`
    );
    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async ({
  category,
  page = 1,
  limit = 3,
  sortMethod,
}) => {
  console.log(
    `?page=${page}&limit=${limit}&category=${category}&sort=${sortProductsMethod(
      sortMethod
    )}`
  );
  try {
    const { data } = await server.get(
      UrlProducts.all +
        `?page=${page}&limit=${limit}&category=${category}&sort=${sortProductsMethod(
          sortMethod
        )}`
    );
    const { products } = data;
    return products;
  } catch (error) {
    throw error;
  }
};

export const addProductToFavorite = async productID => {
  try {
    const { data } = await server.get(
      UrlProducts.all + `/add-favorite/${productID}`
    );
    const { favorites } = data;
    console.log(favorites);
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const getFavoriteProducts = async () => {
  try {
    const { data } = await server.get(UrlProducts.all + `/user-favorite`);
    const { favorites } = data;
    console.log(favorites);
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const deleteProductFromFavorite = async productID => {
  try {
    const { data } = await server.get(
      UrlProducts.all + `/favorite/${productID}`
    );
    const { favorites } = data;
    console.log(favorites);
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const getProductCountByCategory = async () => {
  try {
    const { data } = await server.get(UrlProducts.all + `/category-records`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
