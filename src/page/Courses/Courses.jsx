import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { CourseHero } from 'components/modules/Courses/components/CourseHero';
import { CoursesNav } from 'components/modules/Courses/components/CoursesNav';
import { Container } from 'components/global/Container';
import { Box } from 'components/global';
import { Title } from './Courses.styled';

export default function Courses() {
  return (
    <>
      <CourseHero />
      <Box as="section" pt={76} pb={120}>
        <Statistics />
      </Box>
      <Box as="section" pt={76} pb={120}>
        <Container>
          <Title size={84} mb={48} color="at" textAlign="center">
            Курси та майстер-класи
          </Title>
          <CoursesNav />
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
