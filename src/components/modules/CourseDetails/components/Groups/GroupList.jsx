import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getCourseGroups } from 'api';
import { Slider } from '../Swiper';
import { Text } from 'components/global';
import { GroupsContainer } from './Groups.styled';

export const GroupList = () => {
  const location = useLocation();
  const [courseId, format] = location.pathname.split('/').slice(2, 4);

  const { data, isLoading, isSuccess, isError } = useQuery(
    ['courses', courseId, format],
    () => getCourseGroups(courseId, format)
  );
  return (
    <>
      {isLoading && <p>Завантаження груп...</p>}
      {isError && <p>Виникла помилка. Спробуйте пізніше</p>}
      {isSuccess && data.length > 0 && (
        <GroupsContainer itemsQuantity={data.length}>
          <Slider groups={data} />
        </GroupsContainer>
      )}
      {isSuccess && format && data.length <= 0 && (
        <Text size={20} textAlign="center">
          Групи {format} відсутні
        </Text>
      )}
    </>
  );
};
