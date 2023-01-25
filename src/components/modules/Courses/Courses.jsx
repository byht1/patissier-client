import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { Text, TitleH2 } from 'components/global/text';
import { CourseList } from './CourseList';
// import { CourseItem } from './CourseList/CourseList.styled';
import { Button } from './Courses.styled';

import { getClosestCourses } from 'api/imdex';
import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';

export const Courses = () => {
  // const [courses, setCourses] = useState([]);
  const { data } = useQuery(
    ['closest courses'],
    () => {
      return getClosestCourses();
    }
    // {
    //   onSuccess: data => {
    //     if (data) {
    //       return setCourses(data);
    //     }
    //   },
    // }
  );
  // console.log('courses: ', data);
  return (
    <>
      {data && (
        <Container pt={114} pb={100}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TitleH2 mb={32} color="at">
              Курси та майстер-класи
            </TitleH2>
            <Text mb={30} color="t" lh="body" textAlign="center" width={272}>
              Перегляньте найближчі по даті події, авторські курси та
              майстер-класи
            </Text>
            <Button>Дивитись усі заходи</Button>
            <CourseList courses={data} />
          </Box>
        </Container>
      )}
    </>
  );
};

/* <Container pt={114} pb={100}>
  <Box display="flex" flexDirection="column" alignItems="center">
    <TitleH2 mb={32} color="at">
      Курси та майстер-класи
    </TitleH2>
    <Text mb={30} color="t" lh="body" textAlign="center" width={272}>
      Перегляньте найближчі по даті події, авторські курси та майстер-класи
    </Text>
    <Button>Дивитись усі заходи</Button>
    <CourseList>
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </CourseList>
  </Box>
</Container>; */
