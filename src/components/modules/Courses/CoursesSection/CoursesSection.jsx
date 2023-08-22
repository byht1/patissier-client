import React from 'react';
import { getAllCourses } from 'api';
import { useQuery } from '@tanstack/react-query';
import { CourseList } from '../common/CourseList';

import { Container, ReadMoreLink, Section, TitleH2 } from 'components/global';
import { TopText } from './CoursesSection.styled';

export const CoursesSection = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getAllCourses({ skip: 0 }),
  });

  return (
    <Section>
      <Container display="flex" flexDirection="column" alignItems="center">
        <TitleH2 color="at">Курси та майстер-класи</TitleH2>
        <TopText color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі події, авторські курси та майстер-класи
        </TopText>
        <ReadMoreLink to="/courses">Дивитись усі заходи</ReadMoreLink>
        {isLoading && <p>Завантаження курсів...</p>}
        {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
        {isSuccess && <CourseList courses={data.courses} />}
      </Container>
    </Section>
  );
};
