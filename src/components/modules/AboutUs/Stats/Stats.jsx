import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { StatsList } from './Stats.styled';
import { StatsItem } from './StatsItem/StatsItem';

import Icon01 from 'img/aboutus/stat01.png';
import Icon02 from 'img/aboutus/stat02.png';
import Icon03 from 'img/aboutus/stat03.png';
import Icon04 from 'img/aboutus/stat04.png';

export const Stats = () => {
  return (
    <Container pt={100} pb={100}>
      <Box>
        <StatsList>
          <StatsItem info="98.5%" text="Позитивних відгуків" img={Icon01} />
          <StatsItem info="+ 54" text="Проведених навчань" img={Icon02} />
          <StatsItem info="+ 1658" text="Задоволених клієнтів" img={Icon03} />
          <StatsItem info="7" text="Років успіху" img={Icon04} />
        </StatsList>
      </Box>
    </Container>
  );
};
