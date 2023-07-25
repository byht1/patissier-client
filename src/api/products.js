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

export const getProductCountByCategory = async () => {
  try {
    const { data } = await server.get(UrlProducts.all + `/category-records`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFavoriteProducts = async () => {
  try {
    const { data } = await server.get(UrlProducts.all + `/favorites`);
    const { favorites } = data;
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const updateProductFavorite = async (productID, action) => {
  try {
    const { data } = await server.patch(
      UrlProducts.all + `/favorite/${productID}?action=${action}`
    );
    const { favorites } = data;
    return favorites;
  } catch (error) {
    throw error;
  }
};

export const addProductToBasket = async productID => {
  try {
    const { data } = await server.patch(
      `store/order/basket/${productID}?action=add`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
