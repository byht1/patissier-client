import React from 'react';

import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { TitleH2 } from 'components/global/text';

import { Text } from './BasketTitle.styled';

export const BasketTitle = () => {
  return (
    <>
      <Container pt={60}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <TitleH2 color="at" mb={60}>
            Корзина
          </TitleH2>
          <Text>
            Оформіть замовлення на обраний товар, та насолоджуйтеся неймовірними
            десертами
          </Text>
        </Box>
      </Container>
    </>
  );
};
