import { Text } from 'components/global/text';
import {
  StatisticWrap,
  StatisticContentWrap,
  StatisticImg,
  StatisticInfoText,
} from './Statistics.styled';

export const StatisticItem = ({ src, number, text }) => {
  return (
    <StatisticWrap>
      <StatisticContentWrap>
        <StatisticImg src={src} alt={text} />
        <Text weight={500} size={36} color="at" lh="body">
          {number}
        </Text>
        <StatisticInfoText>{text}</StatisticInfoText>
      </StatisticContentWrap>
    </StatisticWrap>
  );
};
