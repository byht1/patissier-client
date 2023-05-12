import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { Text, TitleH2 } from 'components/global/text';
import { CourseItem } from './CourseItem';
import { CourseList } from './Courses.styled';
import { ReadMoreLink } from 'components/global/ReadMoreLink';
import { CourseList } from '../components/CourseList';
import { getCourses } from 'api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const CoursesSection = () => {
  const [courses, setCourses] = useState([]);

  const { isLoading, isError, error } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    onSuccess: data => {
      setCourses(data.courses);
    },
    // onError: () => console.log(1, error),
  });
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <Container pt={100} pb={100}>
      <Box
        // @ts-ignore
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TitleH2 mb={32} color="at">
          Курси та майстер-класи
        </TitleH2>
        <Text mb={24} color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі події, авторські курси та майстер-класи
        </Text>
        <ReadMoreLink to="/courses" ml={'auto'}>
          Дивитись усі заходи
        </ReadMoreLink>
        {isLoading && <p>Loading...</p>}
        {isError &&
          [503].includes(
            // @ts-ignore
            error?.response?.status
          ) && <p>Waiting for server connection</p>}
        <CourseList courses={courses} />
      </Box>
    </Container>
  );
};
