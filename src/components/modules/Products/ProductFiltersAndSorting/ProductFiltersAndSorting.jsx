import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductCountByCategory } from 'api/products';
import { Box } from 'components/global/Box';

import { getProductCount } from '../helpers/getProductCount';
import SortIcon from '../../../../img/products/sort.svg';
import { Sorting } from './Sorting/Sorting';
import { SortingIcon } from './Sorting/Sorting.styled';
import { FilterIcon } from './Filters/Filters.styled';
import {
  FilterButton,
  Filter,
  FilterAndSortWrap,
} from './ProductFiltersAndSorting.styled';
import { Filters } from './Filters/Filters';

export const ProductFiltersAndSorting = ({ applySortMethod, sortMethod }) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [productsCountArray, setProductsCountArray] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  // const [sortMethod, setSortMethod] = useState(sortingParams[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDocumentClick = event => {
    if (!event.target.closest('#sort-filter')) {
      console.log('fjgkhjkhjkhj');
      setSelectedButton(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

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

  const onFilterSortButton = e => {
    setSelectedButton(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log(selectedButton);
    // if (
    //   e.currentTarget.value !== 'filter' &&
    //   e.currentTarget.value !== 'sorting'
    // ) {
    //   console.log(e.currentTarget.value);
    //   setSelectedButton(null);
    // }
  };

  return (
    <Box
      mb={60}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="t"
      position="relative"
    >
      <p>
        всього
        <span> {getProductCount(pathname, productsCountArray)} </span>
        варіантів
      </p>
      <FilterAndSortWrap>
        <FilterButton value="filter" onClick={onFilterSortButton}>
          <FilterIcon id="sort-filter" />
        </FilterButton>
        <FilterButton value="sorting" onClick={onFilterSortButton}>
          <SortingIcon id="sort-filter" />
        </FilterButton>
      </FilterAndSortWrap>
      {/* <Sorting
        applySortMethod={applySortMethod}
        sortMethod={sortMethod}
      ></Sorting>
      <Filters /> */}
      {selectedButton === 'sorting' && (
        <Sorting applySortMethod={applySortMethod} sortMethod={sortMethod} />
      )}
      {selectedButton === 'filter' && <Filters />}
    </Box>
  );
};
