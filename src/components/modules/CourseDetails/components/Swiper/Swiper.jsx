import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'components/global/Container';
import { SwiperSlides } from './SwiperSlide';

import './styles.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export const Slider = ({ groups }) => {
  if (!groups) return;

  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="courseGroupsSwiper"
      >
        {groups.map(({ studyPeriod, time, format, _id }) => {
          return (
            <SwiperSlide key={_id}>
              <SwiperSlides
                studyPeriod={studyPeriod}
                time={time}
                format={format}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};
