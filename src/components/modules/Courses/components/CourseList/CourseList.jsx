import { CourseItem } from '../CourseItem/CourseItem';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCoursesCategory } from '../../helpers/getCoursesCategory';
import { getCourses, getCoursesByCategory } from 'api';
import { Box } from 'components/global/Box';
import { getLoadMoreButtonProps } from '../../helpers/getLoadMoreButtonProps';

import {
  ProductListWrap,
  LoadMoreButton,
} from 'components/modules/Products/ProductList/ProductList.styled';

export const CourseList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  let hits = 0;
  let hitsTotal = 0;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    isSuccess,
  } = useInfiniteQuery(
    ['courses', pathname],
    ({ pageParam = 0 }) => {
      if (!pathname) {
        return getCourses({
          skip: pageParam,
        });
      } else {
        return getCoursesByCategory({
          type: getCoursesCategory(pathname),
          skip: pageParam,
        });
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        hitsTotal = allPages.length + 2;
        return allPages.length + 2;
      },
    }
  );
  let nextPage = true;
  if (data && data.pages) {
    for (let i = 1; i < data.pages.length; i++) {
      if (data.pages[i] < data.pages[i - 1] || data.pages[i].length < 3) {
        nextPage = false;
        break;
      }
    }
  }

  const isLoadingInitialData = !isSuccess && !isError;
  return (
    <Box>
      {isLoadingInitialData && <p>Завантаження курсів...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <ProductListWrap>
            {data.pages.map((group, i) => {
              hits = group.totalHits;
              return (
                <React.Fragment key={i}>
                  {group.courses.map(course => {
                    return (
                      <CourseItem course={course} key={course._id}></CourseItem>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </ProductListWrap>
          {hits % hitsTotal > 0 && data.pages[0].courses.length > 2 && (
            <LoadMoreButton
              {...getLoadMoreButtonProps(
                hasNextPage,
                isFetchingNextPage,
                nextPage
              )}
              onClick={() => fetchNextPage()}
            />
          )}

          <Box textAlign="center">
            {isFetching && !isFetchingNextPage ? 'Завантаження...' : null}
          </Box>
        </>
      )}
    </Box>
  );
};
