import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { Box } from 'components/global';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { CourseHero } from 'components/modules/Courses/components/CourseHero/CourseHero';
import { CoursesNav } from 'components/modules/Courses/components/CoursesNav';
export default function Courses() {
  return (
    <>
      <CourseHero />
      <Box as="section" pt={76} pb={120}>
        <Statistics />{' '}
      </Box>
      <Box as="section" pt={76} pb={120}>
        <Container>
          <TitleH2 size={84} mb={48} color="at" textAlign="center">
            Курси та майстер-класи
          </TitleH2>
          <CoursesNav />
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
