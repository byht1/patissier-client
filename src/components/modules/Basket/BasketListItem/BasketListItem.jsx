import React from 'react';
import {
  ImgWrap,
  ItemPhoto,
  ItemWrap,
  ItemInfoWrap,
  ProductTitle,
  Text,
  PriceWrap,
  PriceValue,
  CounterWrap,
  CounterBtn,
  CounterValue,
  DelBtn,
  Svg,
  TotalPrice,
} from './BasketListItem.styled';

import Image from 'img/basket/tart.png';
import DelIcon from 'img/basket/icons.svg';
import { Box } from 'components/global/Box';

export const BasketListItem = () => {
  return (
    <>
      <ItemWrap>
        <ImgWrap>
          <ItemPhoto src={Image} alt="product foto" loading="lazy" />
        </ImgWrap>
        <ItemInfoWrap>
          <ProductTitle>Тарт з ганашем</ProductTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="20px"
          >
            <Text>Ціна</Text>
            <PriceWrap>
              <PriceValue>48,50</PriceValue>
            </PriceWrap>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="60px"
          >
            <Text>Кількість</Text>
            <CounterWrap>
              <CounterBtn>-</CounterBtn>
              <CounterValue>1</CounterValue>
              <CounterBtn>+</CounterBtn>
            </CounterWrap>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <DelBtn>
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlinkHref={DelIcon + '#icon-del'} />
              </Svg>
            </DelBtn>
            <TotalPrice>48,50 грн</TotalPrice>
          </Box>
        </ItemInfoWrap>
      </ItemWrap>
    </>
  );
};
