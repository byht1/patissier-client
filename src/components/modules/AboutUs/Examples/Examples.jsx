import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { ExampleItem } from './ExampleItem/ExampleItem';
import { ExamplesList } from './Examples.styled';

import Photo01 from 'img/aboutus/work01.png';
import Photo02 from 'img/aboutus/work02.png';
import Photo03 from 'img/aboutus/work03.png';
import Photo04 from 'img/aboutus/work04.png';

export const Examples = () => {
  return (
    <Container pt={118} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 color="at" mb={60}>
          Роботи наших студентів
        </TitleH2>
        <ExamplesList>
          <ExampleItem img={Photo01} />
          <ExampleItem img={Photo02} />
          <ExampleItem img={Photo03} />
          <ExampleItem img={Photo04} />
        </ExamplesList>
      </Box>
    </Container>
  );
};
