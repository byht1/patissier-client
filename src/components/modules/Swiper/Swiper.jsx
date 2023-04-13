import React from "react";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Slide } from "./Swiper.styled";
import { Container} from 'components/global/Container';
// import { Box } from 'components/global/Box';

import './styles.css'
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/css/pagination";


import { Pagination } from "swiper";


export const Slider = () => {
  return (
    <Container> 
        {/* <Box display="flex"> */}
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
                <SwiperSlide>
                    <Slide>Slide 1</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 2</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 3</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 4</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 5</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 6</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 7</Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide>Slide 8</Slide>
                </SwiperSlide>
               
        </Swiper>
        {/* </Box> */}
    </Container>
  );
};