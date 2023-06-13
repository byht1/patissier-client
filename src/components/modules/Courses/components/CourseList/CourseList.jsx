import { CourseItem } from '../CourseItem/CourseItem';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCoursesCategory } from '../../helpers/getCoursesCategory';
import { getCourses, getCoursesByCategory } from 'api';
import { Box } from 'components/global/Box';
import { getLoadMoreButtonProps } from 'components/modules/Products/helpers/getLoadMoreButtonProps';
import {
  ProductListWrap,
  LoadMoreButton,
} from 'components/modules/Products/ProductList/ProductList.styled';

export const CourseList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  // const [nextPage, setNextPage] = useState(true);

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
        return allPages.length + 2;
      },
    }
  );

  console.log(data);
  let nextPage = true;
  if (data && data.pages) {
    for (let i = 1; i < data.pages.length; i++) {
      if (data.pages[i] < data.pages[i - 1]) {
        nextPage = false;
        break;
      }
    }
  }
  console.log(nextPage);

  const isLoadingInitialData = !isSuccess && !isError;
  return (
    <Box>
      {isLoadingInitialData && <p>Завантаження курсів...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <ProductListWrap>
            {data.pages.map((group, i) => {
              return (
                <React.Fragment key={i}>
                  {group.map(course => {
                    return (
                      <CourseItem course={course} key={course._id}></CourseItem>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </ProductListWrap>
          {data.pages[0].length > 2 && (
            <LoadMoreButton
              {...getLoadMoreButtonProps(
                hasNextPage,
                isFetchingNextPage,
                nextPage
              )}
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
