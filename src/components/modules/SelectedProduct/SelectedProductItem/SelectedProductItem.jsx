import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';
import {
  ProductItem,
  ImageWrap,
  ProductImg,
  ProductPrice,
} from './SelectedProductItem.styled';

export const SelectedProductItem = ({ product }) => {
  return (
    <ProductItem key={product._id}>
      <ImageWrap>
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
