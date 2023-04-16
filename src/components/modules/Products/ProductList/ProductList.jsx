import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AiOutlineReload } from 'react-icons/ai';

import { getAllProducts, getProductsByCategory } from 'api/products';
import { Box } from 'components/global/Box';
import { getProductCategory } from '../helpers/getProductCategory';
import { ProductItem } from '../ProductItem';

import { ProductListWrap, LoadMoreButton } from './ProductList.styled';

export const ProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['products', pathname],
    ({ pageParam = 1 }) => {
      if (!pathname) {
        return getAllProducts({ page: pageParam });
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
      <ProductListWrap>
        {data.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.map(product => (
                <ProductItem product={product} key={product._id} />
              ))}
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
