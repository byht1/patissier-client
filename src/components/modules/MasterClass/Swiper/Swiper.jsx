import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container} from 'components/global/Container';
import {SwiperSlides} from './SwiperSlide';

import './styles.css'
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/css/pagination";


import { Pagination } from "swiper";


export const Slider = ({startList}) => {
  return (
 
      <Container> 
      
      <Swiper
      spaceBetween={30}
      slidesPerView={4}
      pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
             {startList.map(({ date, time, isOnline, _id }) =>{
                  return(
                      <SwiperSlide>
                          <SwiperSlides 
                            key = {_id}
                            date = {date} 
                            time={time} 
                            isOnline={isOnline}/>
                      </SwiperSlide>
                  )
              })}
             
          
             
      </Swiper>
  
   </Container> 
  
  );
};