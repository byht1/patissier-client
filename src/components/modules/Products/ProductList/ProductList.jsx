import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AiOutlineReload } from 'react-icons/ai';
import { getAllProducts, getProductsByCategory } from 'api/products';
import { Box } from 'components/global/Box';
import { getProductCategory } from '../helpers/getProductCategory';
import { ProductItem } from '../ProductItem';
import { ProductFiltersAndSorting } from '../ProductFiltersAndSorting';
import { ProductListWrap, LoadMoreButton } from './ProductList.styled';
import { sortingParams } from '../ProductFiltersAndSorting/Sorting/sortingParams';

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
          sortMethod: 'Спочатку популярні',
        });
      } else {
        return getProductsByCategory({
          category: getProductCategory(pathname),
          page: pageParam,
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

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
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
                console.log(group);
                return <ProductItem product={product} key={product._id} />;
              })}
            </React.Fragment>
          );
        })}
      </ProductListWrap>
      {data.pages[0].length > 2 && (
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            'Заватаження...'
          ) : hasNextPage ? (
            <>
              Показати ще <AiOutlineReload size={25} />
            </>
          ) : (
            'Позицій більше немає'
          )}
        </LoadMoreButton>
      )}

      <div>{isFetching && !isFetchingNextPage ? 'Завантаження...' : null}</div>
    </Box>
  );
};
