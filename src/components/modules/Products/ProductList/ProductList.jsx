import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getAllProducts, getProductsByCategory } from 'api/products';
import { Box } from 'components/global/Box';
import { getProductCategory } from '../helpers/getProductCategory';
import { getLoadMoreButtonProps } from '../helpers/getLoadMoreButtonProps';
import { getLoadingStatusText } from '../helpers/getLoadingStatusText';
import { sortingParams } from '../ProductFiltersAndSorting/Sorting/sortingParams';
import { ProductItem } from '../ProductItem';
import { ProductFiltersAndSorting } from '../ProductFiltersAndSorting';

import { ProductListWrap, LoadMoreButton } from './ProductList.styled';

export const ProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const [sortMethod, setSortMethod] = useState(sortingParams[0]);

  const applySortMethod = method => {
    setSortMethod(method);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['products', pathname, sortMethod],
    ({ pageParam = 1 }) => {
      if (!pathname) {
        return getAllProducts({
          page: pageParam,
          sortMethod: sortMethod,
        });
      } else {
        return getProductsByCategory({
          category: getProductCategory(pathname),
          page: pageParam,
          sortMethod: sortMethod,
        });
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        return allPages.length + 1;
      },
    }
  );

  const loadingStatusText = getLoadingStatusText(status, error);

  return (
    !loadingStatusText && (
      <Box>
        <ProductFiltersAndSorting
          applySortMethod={applySortMethod}
          sortMethod={sortMethod}
        />
        <ProductListWrap>
          {data.pages.map((group, i) => {
            return (
              <React.Fragment key={i}>
                {group.map(product => {
                  return <ProductItem product={product} key={product._id} />;
                })}
              </React.Fragment>
            );
          })}
        </ProductListWrap>
        {data.pages[0].length > 2 && (
          <LoadMoreButton
            {...getLoadMoreButtonProps(hasNextPage, isFetchingNextPage)}
            onClick={() => fetchNextPage()}
          />
        )}

        <div>
          {isFetching && !isFetchingNextPage ? 'Завантаження...' : null}
        </div>
      </Box>
    )
  );
};
