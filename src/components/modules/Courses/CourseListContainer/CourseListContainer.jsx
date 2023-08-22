import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllCourses, getCoursesByCategory } from 'api';

import { getCoursesCategory } from '../helpers/getCoursesCategory';
import { getLoadMoreButtonProps } from '../helpers/getLoadMoreButtonProps';

import { Box } from 'components/global/Box';
import { LoadMoreButton } from 'components/global/LoadMoreBtn';
import { CourseListWrap } from './CourseListContainer.styled';
import { CourseList } from '../common/CourseList';

export const CourseListContainer = () => {
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
        return getAllCourses({
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

  return (
    <Box>
      {!isSuccess && !isError && <p>Завантаження курсів...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <CourseListWrap>
            {data.pages.map((courseSet, i) => {
              hits = courseSet.totalHits;
              return (
                <React.Fragment key={i}>
                  <CourseList courses={courseSet.courses} />
                </React.Fragment>
              );
            })}
          </CourseListWrap>
          {data.pages.length < Math.ceil(hits / hitsTotal) &&
            data.pages[0].courses.length > hitsTotal - 1 && (
              <LoadMoreButton
                {...getLoadMoreButtonProps(hasNextPage, isFetchingNextPage)}
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
