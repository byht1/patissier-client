import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/global/Container';
import { TitleH1, Text } from 'components/global/text';
import { Box } from 'components/global/Box';

import { ProductNav } from 'components/modules/Products/ProductNav';

export default function Products() {
  return (
    <Box as="section">
      <Container pt={114} pb={100}>
        <TitleH1 size={84} mb={48} color="at" textAlign="center">
          Товари
        </TitleH1>
        <Text mb={60} textAlign="center" color="t" lh="big">
          Замовляйте вишукані десерти для свого свята! <br />В наявності та на
          замовлення
        </Text>
        <ProductNav />
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
}
