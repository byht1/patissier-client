import React from 'react';
import {
  OrderAmount,
  OrderText,
  OrderWrap,
  SertBtn,
  SertBtnText,
  SertWrap,
  TotalCoastSum,
  TotalCoastText,
  YourOrderTitle,
  TotalCoastWrap,
  ShopLink,
} from './TotalOrder.styled';
import { Box } from 'components/global/Box';
import { Button } from 'components/global/button';

export const TotalOrder = () => {
  return (
    <OrderWrap>
      <Box>
        <YourOrderTitle>Ваше замовлення</YourOrderTitle>
        <OrderText>В корзині 3 товари</OrderText>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="12px"
        >
          <OrderText>Сума замовлення</OrderText>
          <OrderAmount>194,00 грн</OrderAmount>
        </Box>
      </Box>
      <SertWrap>
        <SertBtn>
          <SertBtnText>Якщо є сертифікат</SertBtnText>
        </SertBtn>
      </SertWrap>
      <TotalCoastWrap>
        <TotalCoastText>Загальна вартість</TotalCoastText>
        <TotalCoastSum>194.00 грн</TotalCoastSum>
        <Button p="16px 61.5px">Оформити</Button>
      </TotalCoastWrap>
      <ShopLink>Продовжити покупки</ShopLink>
    </OrderWrap>
  );
};
