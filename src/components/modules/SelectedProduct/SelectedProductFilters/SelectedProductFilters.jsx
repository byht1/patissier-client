import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductCountByCategory } from 'api/products';
import { Box } from 'components/global/Box';

import FilterIcon from '../../../../img/products/filter.svg';
import SortIcon from '../../../../img/products/sort.svg';

import {
  FilterButton,
  Filter,
  FilterWrap,
} from './SelectedProductFilters.styled';

export const SelectedProductFilters = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [productsCountArray, setProductsCountArray] = useState([]);

  useEffect(() => {
    async function getProductCount() {
      try {
        const count = await getProductCountByCategory();
        setProductsCountArray(count);
      } catch (error) {
        console.log(error);
      }
    }
    getProductCount();
  }, []);

  let categoryName = '';
  switch (pathname) {
    case 'cakes':
      categoryName = 'Торти';
      break;
    case 'casseroles':
      categoryName = 'Тістечка';
      break;
    case 'biscuits':
      categoryName = 'Печиво';
      break;
    case 'buns':
      categoryName = 'Випічка';
      break;
    case 'pies':
      categoryName = 'Пироги';
      break;
    default:
      categoryName = '';
      break;
  }

  let productCount = 0;
  if (!pathname && productsCountArray.length > 0) {
    productCount = productsCountArray.reduce((total, el) => {
      return total + el.count;
    }, 0);
  } else {
    console.log(categoryName);
    if (productsCountArray.length > 0) {
      console.log(productsCountArray);

      const currentCategory = productsCountArray.find(
        el => el._id === categoryName
      );
      productCount = currentCategory.count;
    }
  }
  console.log(productCount);
  return (
    <Box
      mb={60}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="t"
    >
      <p>
        всього
        <span> {productCount} </span>
        варіантів
      </p>
      <FilterWrap>
        <FilterButton>
          <Filter src={FilterIcon}></Filter>
        </FilterButton>
        <FilterButton>
          <Filter src={SortIcon}></Filter>
        </FilterButton>
      </FilterWrap>
    </Box>
  );
};
