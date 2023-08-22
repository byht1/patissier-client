import { Text } from 'components/global/text';

import {
  Slide,
  SlideContent,
  Button,
  SlideTitle,
  FormatText,
} from './Swiper.styled';

export const SwiperSlides = ({ studyPeriod, time, format }) => {
  return (
    <Slide>
      <SlideContent>
        <SlideTitle color="at" mb={20}>
          {studyPeriod.startDate}
        </SlideTitle>
        <div>
          <Text weight={700} size={20} lh="big" mb={20}>
            {time.from} - {time.to}
          </Text>
          <FormatText color="t" mb={20}>
            {format}
          </FormatText>
          <Button>Обрати</Button>
        </div>
      </SlideContent>
    </Slide>
  );
};
