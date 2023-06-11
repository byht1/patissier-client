
import { CourseItem } from '../CourseItem/CourseItem';


import React from 'react';
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
  console.log(pathname);

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
    ({ pageParam = 1 }) => {
      if (!pathname) {
        console.log(pathname);
        return getCourses({
          skip: pageParam,
        });
      } else {
        console.log(pathname);

        return getCoursesByCategory({
          type: getCoursesCategory(pathname),
          skip: pageParam,
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
      {isLoadingInitialData && <p>Завантаження курсів...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <ProductListWrap>
            {data.pages.map((group, i) => {
              console.log(data.pages);
              console.log(group.courses);
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
