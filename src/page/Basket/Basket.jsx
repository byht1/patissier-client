import { Header } from 'components/modules/Header/Header';
import React from 'react';

import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { BasketTitle } from 'components/modules/Basket/BasketTitle';

import { BasketData } from 'components/modules/Basket/BasketData';

export default function Basket() {
  return (
    <>
      <BackLinkRef />
      <BasketTitle />
      <BasketData />
    </>
  );
}
