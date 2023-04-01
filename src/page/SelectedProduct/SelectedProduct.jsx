import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SelectedProductNav } from 'components/modules/SelectedProduct/SelectedProductNav';
import { Container } from 'components/global/Container';
import { TitleH1 } from 'components/global/text';
import { Text } from 'components/global/text';

export default function SelectedProduct() {
  return (
    <>
      <Container pt={60} pb={54}>
        <TitleH1 size={84} mb={48} color="at" textAlign="center">
          Товари
        </TitleH1>
        <Text mb={60} textAlign="center" color="t" lh="big">
          Замовляйте вишукані десерти для свого свята! <br />В наявності та на
          замовлення
        </Text>
        <SelectedProductNav />
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
