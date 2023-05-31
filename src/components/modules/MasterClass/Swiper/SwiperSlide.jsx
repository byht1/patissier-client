import { TitleH4, Text } from 'components/global/text';


import { Slide, SlideContent, Button } from "./Swiper.styled";


export const SwiperSlides = ({ type, startDate, from, to }) => {
  
  const month = new Date(startDate).toLocaleString('uk', {day: 'numeric', month: 'long'});
  const weekDay = new Date(startDate).toLocaleString('uk', { weekday: 'long'});
  return (
  
   
                    <Slide>
                        <SlideContent>
                            <TitleH4 color="at" mb={20}> {month}, {weekDay}</TitleH4>
                            <Text weight={700} size={20} lh='big' mb={20}>{from}-{to}</Text>
                            <Text color="t" mb={20}>{type}</Text>
                            <Button>Обрати</Button>
                        </SlideContent>
                    </Slide>
       

  );
};
