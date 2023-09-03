import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductCountByCategory } from 'api/products';
import { Box } from 'components/global/Box';

import { getProductCount } from '../helpers/getProductCount';
import { Sorting } from './Sorting';
import { Filters } from './Filters';
import {
  SortingIcon,
  GlobalStyles,
  SortFilterBox,
} from './Sorting/Sorting.styled';
import { FilterIcon } from './Filters/Filters.styled';
import {
  FilterButton,
  FilterAndSortWrap,
} from './ProductFiltersAndSorting.styled';

export const ProductFiltersAndSorting = ({ applySortMethod, sortMethod }) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [productsCountArray, setProductsCountArray] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDocumentClick = event => {
    if (!event.target.closest('#sort-filter')) {
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
  };
  return (
    <>
      <GlobalStyles isSelected={selectedButton !== null} />
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
        {selectedButton === 'sorting' && (
          <SortFilterBox isSelected={selectedButton === 'sorting'}>
            <Sorting
              applySortMethod={applySortMethod}
              sortMethod={sortMethod}
            />{' '}
          </SortFilterBox>
        )}
        {selectedButton === 'filter' && (
          <SortFilterBox
            id="sort-filter"
            isSelected={selectedButton === 'filter'}
          >
            <Filters />
          </SortFilterBox>
        )}
      </Box>
    </>
  );
};
