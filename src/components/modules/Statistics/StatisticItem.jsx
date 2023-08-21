import { Text } from 'components/global/text';
import {
  StatisticInfo,
  StatisticWrap,
  StatisticImg,
  StatisticInfoText,
} from './Statistics.styled';

export const StatisticItem = ({ src, number, text }) => {
  return (
    <StatisticWrap>
      <StatisticImg src={src} alt={text} />
      <StatisticInfo>
        <Text weight={500} size={36} color="at" lh="body">
          {number}
        </Text>
        <StatisticInfoText>
          {text}
        </StatisticInfoText>
      </StatisticInfo>
    </StatisticWrap>
  );
};
