import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';

import {
  ProductWrap,
  ImageWrap,
  ProductImg,
  ProductPrice,
  AddToFavBtn,
} from './ProductItem.styled';

export const ProductItem = ({ product }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const { _id, picture, title, description, price } = product;
  return (
    <ProductWrap key={_id}>
      <ImageWrap>
        <AddToFavBtn
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <AiFillHeart size={'24px'} fill={theme.colors.error} />
          ) : (
            <AiOutlineHeart size={'24px'} color={theme.colors.w} />
          )}
        </AddToFavBtn>
        <ProductImg src={picture} alt="Фото десерту" />
      </ImageWrap>
      <Box p={21}>
        <TitleH2 size={20} mb={12} weight={600} family="montserrat">
          {title}
        </TitleH2>
        <Text color="t" lh="big">
          {description}
        </Text>
        <Box
          mt={27}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text size={20}>
            <ProductPrice>{price + ',00'}</ProductPrice> грн/шт
          </Text>
          <ButtonsGhost width={152}>Купити</ButtonsGhost>
        </Box>
      </Box>
    </ProductWrap>
  );
};
