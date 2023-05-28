import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { Section } from 'components/global';
import { Box } from 'components/global';
import { Statistics } from 'components/modules/Statistics/Statistics';
import { CourseHero } from 'components/modules/Courses/components/CourseHero/CourseHero';

export default function Courses() {
  return (
    <>
      <CourseHero />
      <Box as="section" pt={60} pb={114}>
        <Statistics />
        <Container mt={200}>
          <TitleH2 size={84} mb={48} color="at" textAlign="center">
            Курси та майстер-класи
          </TitleH2>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
