import { TitleH4, Text } from 'components/global/text';


import { Slide, SlideContent, Button } from "./Swiper.styled";
export const SwiperSlides = ({ date, time, isOnline }) => {
  return (
  
   
                    <Slide>
                        <SlideContent>
                        <TitleH4 color="at" mb={20}>{date}</TitleH4>
                        <Text weight={700} size={20} lh='big' mb={20}>{time}</Text>
                        <Text color="t" mb={20}>{isOnline}</Text>
                        <Button>Обрати</Button>
                        </SlideContent>
                    </Slide>
       

  );
};
