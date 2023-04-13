import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';
import {
  ProductItem,
  ImageWrap,
  ProductImg,
  ProductPrice,
  AddToFavBtn,
} from './SelectedProductItem.styled';

export const SelectedProductItem = ({ product }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProductItem key={product._id}>
      <ImageWrap>
        {/* <AddToFavBtn>
          <AiOutlineHeart size={'24px'} color={theme.colors.w} />
        </AddToFavBtn> */}
        {/* <AddToFavBtn>
          <AiFillHeart size={'24px'} fill="red" />
        </AddToFavBtn> */}
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
        <ProductImg src={product.picture} alt="Фото десерту" />
      </ImageWrap>
      <Box p={21}>
        <TitleH2 size={20} mb={12} weight={600} family="montserrat">
          {product.title}
        </TitleH2>
        <Text color="t" lh="big">
          {product.description}
        </Text>
        <Box
          mt={27}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text size={20}>
            <ProductPrice>{product.price + ',00'}</ProductPrice> грн/шт
          </Text>
          <ButtonsGhost width={152}>Купити</ButtonsGhost>
        </Box>
      </Box>
    </ProductItem>
  );
};
