import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from 'api';

import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { Text, TitleH2 } from 'components/global/text';
import { ReadMoreLink } from 'components/global/ReadMoreLink';

import { CourseList } from '../components/CourseList';

export const CoursesSection = () => {
  const [courses, setCourses] = useState([]);

  useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    onSuccess: data => {
      setCourses(data.courses);
    },
  });

  return (
    <Container pt={100} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 mb={32} color="at">
          Курси та майстер-класи
        </TitleH2>
        <Text mb={24} color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі події, авторські курси та майстер-класи
        </Text>
        <ReadMoreLink to="/courses" ml={'auto'}>
          Дивитись усі заходи
        </ReadMoreLink>
        <CourseList courses={courses} />
      </Box>
    </Container>
  );
};
