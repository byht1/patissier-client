import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useInfiniteQuery } from '@tanstack/react-query';

import {
  getAllProducts,
  getProductsByCategory,
  getFavoriteProducts,
} from 'api/products';
import { getIsLogin } from 'redux/auth';
import { addToFavorite } from 'redux/products';
import { getProductCountByCategory } from 'api/products';

import { Box } from 'components/global/Box';
import { LoadMoreButton } from 'components/global/LoadMoreBtn';
import { getProductCategory } from '../helpers/getProductCategory';
import { getLoadMoreButtonProps } from '../helpers/getLoadMoreButtonProps';
import { getProductCount } from '../helpers/getProductCount';
import { sortingParams } from '../ProductFiltersAndSorting/Sorting/sortingParams';
import { ProductItem } from '../ProductItem';
import { ProductFiltersAndSorting } from '../ProductFiltersAndSorting';

import { ProductListWrap } from './ProductList.styled';

export const ProductList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pathname = location.pathname.split('/')[2];
  const isLoggedIn = useSelector(getIsLogin);
  const [sortMethod, setSortMethod] = useState(sortingParams[0]);
  const [productsCountArray, setProductsCountArray] = useState([]);
  let hitsPerPage = 0;
  let hitsTotal = 0;

  const applySortMethod = method => {
    setSortMethod(method);
  };

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
    if (!isLoggedIn) return;
    const setFavoritesArray = async () => {
      const favorites = await getFavoriteProducts();
      dispatch(addToFavorite(favorites));
    };
    setFavoritesArray();
  }, [isLoggedIn, dispatch]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    isSuccess,
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

  const isLoadingInitialData = !isSuccess && !isError;
  return (
    <Box>
      {isLoadingInitialData && <p>Завантаження товарів...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <ProductFiltersAndSorting
            applySortMethod={applySortMethod}
            sortMethod={sortMethod}
          />
          <ProductListWrap>
            {data.pages.map((group, i) => {
              hitsTotal = getProductCount(pathname, productsCountArray);
              hitsPerPage = data.pages[0].length;
              return (
                <React.Fragment key={i}>
                  {group.map(product => {
                    return <ProductItem product={product} key={product._id} />;
                  })}
                </React.Fragment>
              );
            })}
          </ProductListWrap>
          {data.pages.length < Math.ceil(hitsTotal / hitsPerPage) &&
            data.pages[0].length > 2 && (
              <LoadMoreButton
                {...getLoadMoreButtonProps(hasNextPage, isFetchingNextPage)}
                onClick={() => fetchNextPage()}
              />
            )}
          <div>
            {isFetching && !isFetchingNextPage ? 'Завантаження...' : null}
          </div>
        </>
      )}
    </Box>
  );
};
