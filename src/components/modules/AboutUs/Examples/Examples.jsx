import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { ExampleItem } from './ExampleItem/ExampleItem';
import { ExamplesList } from './Examples.styled';

import Foto01 from 'img/aboutus/work01.png';
import Foto02 from 'img/aboutus/work02.png';
import Foto03 from 'img/aboutus/work03.png';
import Foto04 from 'img/aboutus/work04.png';

export const Examples = () => {
  return (
    <Container pt={100} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 mb={60}>Роботи наших студентів</TitleH2>
        <ExamplesList>
          <ExampleItem img={Foto01} />
          <ExampleItem img={Foto02} />
          <ExampleItem img={Foto03} />
          <ExampleItem img={Foto04} />
        </ExamplesList>
      </Box>
    </Container>
  );
};
