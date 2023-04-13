import React from "react";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Slide, SlideContent } from "./Swiper.styled";
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
                    <Slide>
                        <SlideContent>Slide 1</SlideContent></Slide>
                </SwiperSlide>
            
            
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 2</SlideContent></Slide>
                </SwiperSlide>
           
            
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 3</SlideContent></Slide>
                </SwiperSlide>
          
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 4</SlideContent></Slide>
                </SwiperSlide>
         
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 5</SlideContent></Slide>
                </SwiperSlide>
          
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 6</SlideContent></Slide>
                </SwiperSlide>
          
                <SwiperSlide>
                    <Slide>
                        <SlideContent>Slide 7</SlideContent></Slide>
                </SwiperSlide>
         
            
               
        </Swiper>
        {/* </Box> */}
    </Container>
  );
};