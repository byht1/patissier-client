import React from 'react';

import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { BasketTitle } from 'components/modules/Basket/BasketTitle';
import { BasketListItem } from 'components/modules/Basket/BasketListItem';
import { TotalOrder } from 'components/modules/Basket/TotalOrder';

export default function Basket() {
  return (
    <>
      <BackLinkRef />
      <BasketTitle />
      <BasketListItem />
      <TotalOrder />
    </>
  );
}
