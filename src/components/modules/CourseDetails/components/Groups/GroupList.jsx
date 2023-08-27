import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getCourseGroups } from 'api';
import { Slider } from '../Swiper';
import { Text } from 'components/global';
import { GroupsSwiperContainer } from './Groups.styled';

export const GroupList = () => {
  const location = useLocation();
  const [courseId, format] = location.pathname.split('/').slice(2, 4);

  const { data, isLoading, isSuccess, isError } = useQuery(
    ['courses', courseId, format],
    () => getCourseGroups(courseId, format)
  );
  return (
    <>
      {isLoading && <Text textAlign="center">Завантаження груп...</Text>}
      {isError && <Text textAlign="center">Виникла помилка. Спробуйте пізніше</Text>}
      {isSuccess && data.length > 0 && (
        <GroupsSwiperContainer itemsQuantity={data?.length}>
          <Slider groups={data} />
        </GroupsSwiperContainer>
      )}
      {isSuccess && format && data.length <= 0 && (
        <Text size={20} textAlign="center">
          Групи {format} відсутні
        </Text>
      )}
    </>
  );
};
