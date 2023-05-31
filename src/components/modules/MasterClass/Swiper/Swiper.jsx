import React from "react";

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {getCourseById} from 'api/courses';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Container} from 'components/global/Container';
import {SwiperSlides} from './SwiperSlide';

import './styles.css'
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/css/pagination";


import { Pagination } from "swiper";


export const Slider = () => {

        const {id: courseId } = useParams();

        const {data, isSuccess, isLoading, isError, error } = useQuery({
          queryKey: ['courses', courseId],
          queryFn: () => getCourseById(courseId),
          staleTime: 5 * 60 * 1000,
        });

          if (isLoading) {
              return "Loader...";
            }

        if (isError){
            return error
        }
  
  if (isSuccess){
    const {groups} = data;
            
            console.log(groups);
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
                    {groups.map(({format, _id, studyPeriod, time}) =>{
                          return(
                              <SwiperSlide>
                                  <SwiperSlides 
                                    key = {_id}
                                    startDate = {studyPeriod.startDate} 
                                    from={time.from} 
                                    to={time.to}
                                    type={format}
                                    />
                              </SwiperSlide>
                          )
                      })}
                    
                  
                    
              </Swiper>
          
          </Container> 
          
          );
        }
};