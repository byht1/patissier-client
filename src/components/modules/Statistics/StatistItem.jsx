import { Text } from 'components/global/text';
import {
  StatisticsInfo,
  StatisticsItem,
  StatisticsImg,
} from './Statistics.styled';

export const StatistItem = ({ src, number, text }) => {
  return (
    <StatisticsItem>
      <StatisticsImg src={src} alt="icon-reviews" />
      <StatisticsInfo>
        <Text weight={500} size={36} color="at" lh="body">
          {number}
        </Text>
        <Text size={16} lh={'normal'} color="t">
          {text}
        </Text>
      </StatisticsInfo>
    </StatisticsItem>
  );
};
// 98.5 %
