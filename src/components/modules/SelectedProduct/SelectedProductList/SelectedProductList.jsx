import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';

import { AiOutlineReload } from 'react-icons/ai';
import {
  getAllProducts,
  getProductsByCategory,
  addProductToFavorite,
} from 'api/products';
import { Box } from 'components/global/Box';

import { SelectedProductItem } from '../SelectedProductItem';
import { ProductList, LoadMoreButton } from './SelectedProductList.styled';

export const SelectedProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];

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
        addProductToFavorite('6421e4f255b089d4969ee5b0');
        return getAllProducts({ page: pageParam });
      } else {
        return getProductsByCategory({
          category: categoryName,
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
      <ProductList>
        {data.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.map(product => (
                <SelectedProductItem product={product} key={product._id} />
              ))}
            </React.Fragment>
          );
        })}
      </ProductList>
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
