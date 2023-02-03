import { TitleH1, Text } from 'components/global/text';
import { Button } from 'components/global/button';
import { Box } from 'components/global/Box';
import Image from 'img/hero/hero.jpg';

import { HeroImage, ImgBlock, HeroInfo, HeroContainer } from './hero.styled';
export const Hero = () => {
  return (
    <HeroContainer>
      <Box display="flex" height="654px" justifyContent="center">
        <ImgBlock>
          <HeroImage src={Image} alt="" loading="lazy" />
        </ImgBlock>
        <HeroInfo>
          <TitleH1 mb={40}>Твій ідеальний десерт</TitleH1>
          <Text size={16} lh={'normal'} color="t">
            Замовляй вишукані десерти для свого свята!
          </Text>
          <Text size={16} lh={'normal'} color="t">
            Всі десерти створюються в ручну з якісних та свіжих продуктів
          </Text>
          <Button mt={60} p="16px 74px">
            Каталог
          </Button>
        </HeroInfo>
      </Box>
    </HeroContainer>
  );
};
