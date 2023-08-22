import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCourseById } from 'api';
import { BackLinkRef } from 'components/global';
import { Reviews } from 'components/modules/Reviews';

import { About, Consists, Groups, Program } from './components';

export const CourseDetails = () => {
  const { id: courseId } = useParams();
  
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId),
  });

  const defineType = data?.type === 'courses' ? 'курс' : 'майстер-клас';

  return (
    <>
      {isLoading && <p>Завантаження...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && (
        <>
          <BackLinkRef />
          <About
            category={data.category}
            type={defineType}
            previewText={data.previewText}
            description={data.description}
            image={data.images[0]}
          />
          <Consists details={data.details} type={defineType} />
          <Program
            category={data.category}
            program={data.program}
            price={data?.groups[0]?.price}
            image={data.images[1]}
          />
          <Groups groups={data.groups} />
        </>
      )}

      <Reviews title={'Відгуки'} />
    </>
  );
};
