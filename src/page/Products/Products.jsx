import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/global/Container';
import { TitleH1, Text } from 'components/global/text';
import { Box } from 'components/global/Box';

import { ProductNav } from 'components/modules/Products/ProductNav';
import { ProductFilters } from 'components/modules/Products/ProductFilters';

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
        <ProductFilters />
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
}
