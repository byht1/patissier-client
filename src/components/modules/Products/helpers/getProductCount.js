import { getProductCategory } from './getProductCategory';

export const getProductCount = (pathname, productsCountArray) => {
  let productCount = 0;

  if (pathname && productsCountArray.length > 0) {
    const currentCategory = productsCountArray.find(
      el => el._id === getProductCategory(pathname)
    );
    productCount = currentCategory.count;
  } else {
    productCount = productsCountArray.reduce((total, el) => {
      return total + el.count;
    }, 0);
  }

  return productCount;
};
