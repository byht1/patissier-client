import { useLocation } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from 'api/products';
import { useState } from 'react';
import { useEffect } from 'react';
export const SelectedProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   async function getProductsList() {
  //     try {
  //       const products = await getAllProducts();
  //       setProductList(products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getReviewsList();
  // }, []);
  let categoryName = '';

  switch (pathname) {
    case 'cakes':
      categoryName = 'Торт';
      break;
    case 'casseroles':
      categoryName = '?????Запіканки';
      break;
    case 'biscuits':
      categoryName = 'Печиво';
      break;
    case 'buns':
      categoryName = 'Булка';
      break;
    case 'pies':
      categoryName = 'Пиріг';
      break;
    default:
      break;
  }
  console.log(categoryName);
  useEffect(() => {
    async function getProductsList() {
      // console.log(categoryName);
      // const categoryNamed = 'Торт';
      try {
        if (categoryName) {
          const products = await getProductsByCategory(categoryName);
          return products;
        }
        const products = await getAllProducts();
        setProductList(products);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsList();
  }, [categoryName]);
  return <div>LIST</div>;
};
