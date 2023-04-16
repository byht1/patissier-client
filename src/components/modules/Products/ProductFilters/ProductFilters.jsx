import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductCountByCategory } from 'api/products';
import { Box } from 'components/global/Box';

import { getProductCount } from '../helpers/getProductCount';
import FilterIcon from '../../../../img/products/filter.svg';
import SortIcon from '../../../../img/products/sort.svg';

import { FilterButton, Filter, FilterWrap } from './ProductFilters.styled';

export const ProductFilters = () => {
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
        <span> {getProductCount(pathname, productsCountArray)} </span>
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
