import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { CourseHero } from 'components/modules/Courses/CourseHero';
import { CoursesNav } from 'components/modules/Courses/CoursesNav';
import { Container } from 'components/global/Container';
import { Section } from 'components/global';
import { Title } from './Courses.styled';

export default function Courses() {
  return (
    <>
      <CourseHero />
      <Statistics />
      <Section>
        <Container>
          <Title color="at" textAlign="center">
            Курси та майстер-класи
          </Title>
        </Container>
        <CoursesNav />
        <Suspense>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
}
