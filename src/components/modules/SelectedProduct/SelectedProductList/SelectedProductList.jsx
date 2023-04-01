import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from 'api/products';
import { ProductList } from './SelectedProduct.styled';
import { SelectedProductItem } from '../SelectedProductItem';

export const SelectedProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [productList, setProductList] = useState([]);

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
      try {
        if (categoryName) {
          const result = await getProductsByCategory(categoryName);
          setProductList(result.products);
        }
        const result = await getAllProducts();
        setProductList(result.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsList();
  }, [categoryName]);
  console.log(productList);
  return (
    <div>
      <ProductList>
        {productList.map(item => (
          <SelectedProductItem product={item} />
        ))}
      </ProductList>
    </div>
  );
};
