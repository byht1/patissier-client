// import { Container } from 'components/global';
import { StatisticItem } from './StatisticItem';
import {
  StaticSection,
  StatisticContainer, StatisticList,
} from './Statistics.styled';

import statistics1 from 'img/statistics/statistics1.svg';
import statistics2 from 'img/statistics/statistics2.svg';
import statistics3 from 'img/statistics/statistics3.svg';
import statistics4 from 'img/statistics/statistics4.svg';

export const Statistics = () => {
  return (
    <StaticSection>
      <StatisticContainer>
        <StatisticList>
          <StatisticItem
            src={statistics1}
            number="98.5 %"
            text="Позитивних відгуків"
          />
          <StatisticItem
            src={statistics2}
            number="+ 54"
            text="Проведених навчань"
          />
          <StatisticItem
            src={statistics3}
            number="+ 1658"
            text="Задоволених клієнтів"
          />
          <StatisticItem src={statistics4} number="7" text="Років успіху" />
        </StatisticList>
      </StatisticContainer>
    </StaticSection>
  );
};
