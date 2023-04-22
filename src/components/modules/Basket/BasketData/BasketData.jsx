import React from 'react';
import { Container } from 'components/global/Container';

import { BasketDataWrap, BasketList } from './BasketData.styled';
import { TotalOrder } from '../TotalOrder';
import { BasketListItem } from '../BasketListItem';

import tempData from '../data.json';

export const BasketData = () => {
  return (
    <Container>
      <BasketDataWrap>
        <TotalOrder />
        <BasketList>
          {tempData.map(product => (
            <BasketListItem key={product.id} item={product} />
          ))}
        </BasketList>
      </BasketDataWrap>
    </Container>
  );
};
