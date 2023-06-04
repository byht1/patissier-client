import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';
import { getFavoritesArray } from 'redux/products';
import { getIsLogin } from 'redux/auth';
import { addToFavorite, removeFromFavorite } from 'redux/products';
import { updateProductFavorite } from 'api/products';
import {
  ProductWrap,
  ImageWrap,
  ProductImg,
  ProductPrice,
} from 'components/modules/Products/ProductItem/ProductItem.styled';

export const CourseItem = ({ course }) => {
  const theme = useTheme();
  const client = useQueryClient();
  const [isHovered, setIsHovered] = useState(false);
  console.log(course);
  const { _id, category, type, previewText, totalPlaces, groups, images } =
    course;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesArray);
  const isLoggedIn = useSelector(getIsLogin);

  return (
    <>
      <ProductWrap key={_id}>
        <ImageWrap>
          <ProductImg src={images[0]} alt="Фото десерту" />
        </ImageWrap>
        <Box p={21}>
          <TitleH2 size={20} mb={12} weight={600} family="montserrat">
            {type}
          </TitleH2>
          <Text color="t" lh="big">
            {previewText}
          </Text>
          <Box
            mt={27}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text size={20}>
              <ProductPrice>{100 + ',00'}</ProductPrice> грн/шт
            </Text>
            <ButtonsGhost width={152}>Купити</ButtonsGhost>
          </Box>
        </Box>
      </ProductWrap>
    </>
  );
};
