import React from 'react';
import { Container } from 'components/global/Container';

// import { Box } from 'components/global/Box';

import { Section, SectionTitle, DownText, ReadMore } from './Catalog.styled';

export const Catalog = () => {
  return (
    <Section>
      <Container>
        <SectionTitle color="at" mb={32}>
          Магазин
        </SectionTitle>
        <DownText>
          Замовляйте вишукані десерти для свого свята! В наявності та на
          замовлення
        </DownText>
        <ReadMore to="/store">Дивитися всі позиції</ReadMore>
      </Container>
    </Section>
  );
};
