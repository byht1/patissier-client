import { Container } from 'components/global/Container';
import { StatistItem } from './StatistItem';
import { StatisticsList } from './Statistics.styled';
import statistics1 from 'img/statistics/statistics1.svg';
import statistics2 from 'img/statistics/statistics2.svg';
import statistics3 from 'img/statistics/statistics3.svg';
import statistics4 from 'img/statistics/statistics4.svg';

export const Statistics = () => {
  return (
    <Container pb={40} pt={40}>
      <StatisticsList>
        <StatistItem
          src={statistics1}
          number="98.5 %"
          text="Позитивних відгуків"
        />
        <StatistItem
          src={statistics2}
          number="+ 54"
          text="Проведених навчань"
        />
        <StatistItem
          src={statistics3}
          number="+ 1658"
          text="Задоволених клієнтів"
        />
        <StatistItem src={statistics4} number="7" text="Років успіху" />
      </StatisticsList>
    </Container>
  );
};
