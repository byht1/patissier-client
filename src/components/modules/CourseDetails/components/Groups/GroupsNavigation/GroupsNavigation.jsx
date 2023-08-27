import React from 'react';
import { Swiper } from 'swiper/react';
import { GroupsNavContainer, NavButton, NavSwiperSlide } from './GroupsNavigation.styled';
import { Sizes } from 'components/global';

import 'swiper/css';
import 'swiper/css/bundle';

export const GroupsNavigation = () => {
  const breakpointStyles = {
    [Sizes.desktop]: {
      spaceBetween: 24,
    },
  };

  return (
    <GroupsNavContainer>
      <Swiper
        spaceBetween={16}
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
      </Swiper>
    </GroupsNavContainer>
  );
};
