import React from 'react';

import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { BasketTitle } from 'components/modules/Basket/BasketTitle';
import { BasketListItem } from 'components/modules/Basket/BasketListItem';

export default function Basket() {
  return (
    <>
      <BackLinkRef />
      <BasketTitle />
      <BasketListItem />
    </>
  );
}
