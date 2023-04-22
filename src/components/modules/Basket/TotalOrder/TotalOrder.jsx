import React, { useState } from 'react';
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
  FormWrap,
  Input,
} from './TotalOrder.styled';
import { Box } from 'components/global/Box';
import { Button, ButtonsGhost } from 'components/global/button';

export const TotalOrder = () => {
  const [haveSerf, setHaveSerf] = useState(false);

  const serfBtnClick = () => {
    setHaveSerf(!haveSerf);
  };

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
          <SertBtnText onClick={serfBtnClick}>Якщо є сертифікат</SertBtnText>
        </SertBtn>
        {haveSerf && (
          <FormWrap>
            <Input type="text" placeholder="Sale_2023" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <OrderText>Знижка</OrderText>
              <OrderAmount>34,00 грн</OrderAmount>
            </Box>
            <ButtonsGhost type="submit" p="12px 54.5px">
              Застосувати
            </ButtonsGhost>
          </FormWrap>
        )}
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
