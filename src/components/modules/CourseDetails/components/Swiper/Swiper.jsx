import React from 'react';
import { SwiperSlider } from './SwiperSlider';

import { Pagination } from 'swiper';
import {
  SwiperContainer,
  GroupsSwiper,
  GroupSwiperSlide as SwiperSlide,
  StyledPagination,
} from './Swiper.styled';

import { Sizes } from 'components/global';

export const Slider = ({ groups }) => {
  if (!groups) return;

  const breakpointStyles = {
    [Sizes.desktop]: {
      spaceBetween: 24,
    },
  };

  return (
    <StyledPagination>
      <SwiperContainer>
        <GroupsSwiper
          spaceBetween={12}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="courseGroupsSwiper"
          breakpoints={breakpointStyles}
        >
          {groups.map(({ studyPeriod, time, format, _id }) => {
            return (
              <SwiperSlide key={_id}>
                <SwiperSlider
                  studyPeriod={studyPeriod}
                  time={time}
                  format={format}
                />
              </SwiperSlide>
            );
          })}
        </GroupsSwiper>
      </SwiperContainer>
    </StyledPagination>
  );
};
