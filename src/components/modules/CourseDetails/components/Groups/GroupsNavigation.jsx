import React from 'react';

import 'swiper/css';
import 'swiper/css/bundle';
//
import { NavButton, NavSwiper, NavSwiperSlide } from './Groups.styled';
import { Sizes } from 'components/global';

export const GroupsNavigation = () => {
  const breakpointStyles = {
    [Sizes.desktop]: {
      spaceBetween: 24,
    },
  };

  return (
    <NavSwiper
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
        <NavButton to="online">Онлайн</NavButton>
      </NavSwiperSlide>
      <NavSwiperSlide>
        <NavButton to="offline">Офлайн</NavButton>
      </NavSwiperSlide>
    </NavSwiper>
  );
};
