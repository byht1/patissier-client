import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getCourses } from 'api';

import { Container, ReadMoreLink, Section, TitleH2 } from 'components/global';
import { CourseList } from '../components/CourseList';
import { TopText } from './CoursesSection.styled';

export const CoursesSection = () => {
  // const [courses, setCourses] = useState([]);

  // useQuery({
  //   queryKey: ['courses'],
  //   queryFn: () => getCourses(),
  //   onSuccess: data => {
  //     setCourses(data.courses);
  //   },
  // });

  return (
    <Section>
      <Container display="flex" flexDirection="column" alignItems="center">
        <TitleH2 color="at">Курси та майстер-класи</TitleH2>
        <TopText color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі події, авторські курси та майстер-класи
        </TopText>
        <ReadMoreLink to="/courses">Дивитись усі заходи</ReadMoreLink>
        <CourseList />
      </Container>
    </Section>
  );
};
