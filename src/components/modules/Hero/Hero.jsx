import React from 'react';
import { HeroContainer, ImgBlock, HeroImage, HeroInfo } from './Hero.styled';
import { Box, Button, Text, TitleH1 } from 'components/global';

import Image from 'img/hero/hero.jpg';

export const Hero = () => {
  return (
    <HeroContainer>
      <Box display="flex" height="654px" justifyContent="center">
        <ImgBlock>
          <HeroImage src={Image} alt="" loading="lazy" />
        </ImgBlock>
        <HeroInfo>
          <TitleH1 mb={40} mt={137}>
            Ваш ідеальний десерт
          </TitleH1>
          <Text size={16} lh={'body'} color="t">
            Замовляйте вишукані десерти для свого свята!
          </Text>
          <Text size={16} lh={'body'} color="t">
            Усі десерти створюються власноруч з якісних та свіжих продуктів
          </Text>
          <Button mt={48} p="16px 70.5px">
            Магазин
          </Button>
        </HeroInfo>
      </Box>
    </HeroContainer>
  );
};
