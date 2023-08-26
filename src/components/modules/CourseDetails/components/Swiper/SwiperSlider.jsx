import { Text } from 'components/global/text';

import { SlideContent, Button, SlideTitle, FormatText } from './Swiper.styled';
import { Box } from 'components/global';

export const SwiperSlider = ({ studyPeriod, time, format }) => {
  return (
    <SlideContent>
      <SlideTitle color="at" mb={20} textAlign="center">
        {studyPeriod.startDate}
      </SlideTitle>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text weight={700} size={20} lh="big" mb={20}>
          {time.from} - {time.to}
        </Text>
        <FormatText color="t" mb={20}>
          {format}
        </FormatText>
        <Button>Обрати</Button>
      </Box>
    </SlideContent>
  );
};
