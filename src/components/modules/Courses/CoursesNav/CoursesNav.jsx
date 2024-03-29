import { Swiper } from 'swiper/react';
import { NavButton, NavContainer, NavSwiperSlide } from './CoursesNav.styled';
import { Sizes } from 'components/global';

import 'swiper/css';
import 'swiper/css/bundle';

export const CoursesNav = () => {
  const breakpointStyles = {
    [Sizes.desktop]: {
      spaceBetween: 24,
    },
  };
  return (
    <NavContainer>
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        breakpoints={breakpointStyles}
      >
        <NavSwiperSlide>
          <NavButton to="" end>
            Всі пропозиції
          </NavButton>
        </NavSwiperSlide>
        <NavSwiperSlide>
          <NavButton to="course" end>
            Курси
          </NavButton>
        </NavSwiperSlide>
        <NavSwiperSlide>
          <NavButton to="master-classes" end>
            Майстер-класи
          </NavButton>
        </NavSwiperSlide>
      </Swiper>
    </NavContainer>
  );
};
