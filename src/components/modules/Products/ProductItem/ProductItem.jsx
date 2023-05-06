import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';
import { getFavoritesArray } from 'redux/products';
import { addToFavorite, removeFromFavorite } from 'redux/products';
import { addProductToFavorite, removeProductFromFavorite } from 'api/products';
import {
  ProductWrap,
  ImageWrap,
  ProductImg,
  ProductPrice,
  AddToFavBtn,
  RemoveFromFavBtn,
} from './ProductItem.styled';

export const ProductItem = ({ product }) => {
  const theme = useTheme();
  const client = useQueryClient();
  const [isHovered, setIsHovered] = useState(false);
  const { _id, picture, title, description, price } = product;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesArray);

  const onAddToFavorite = async _id => {
    // console.log(_id);
    // console.log(favorites.includes(_id));
    // console.log(favorites);
    // if (favorites.includes(_id)) {
    //   dispatch(removeFromFavorite(_id));
    //   await removeProductFromFavorite(_id);
    // } else {
    await addProductToFavorite(_id);
    dispatch(addToFavorite(_id));
  };

  const onRemoveFromFav = async _id => {
    await removeProductFromFavorite(_id);
    dispatch(removeFromFavorite(_id));
  };
  const { mutate: addToFav, isLoading: addToFavLoading } = useMutation({
    mutationFn: onAddToFavorite,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['products'] });
    },
  });
  const { mutate: removeFromFav, isLoading: removeFromFavLoading } =
    useMutation({
      mutationFn: onRemoveFromFav,
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['products'] });
      },
    });
  console.log(favorites.includes(_id));
  return (
    <ProductWrap key={_id}>
      <ImageWrap>
        {/* <AddToFavBtn
          onClick={() => addToFav(_id)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered || favorites.includes(product._id) ? (
            <AiFillHeart size={'24px'} fill={theme.colors.error} />
          ) : (
            <AiOutlineHeart size={'24px'} color={theme.colors.w} />
          )}
        </AddToFavBtn> */}
        {!addToFavLoading &&
        !removeFromFavLoading &&
        favorites.includes(_id) ? (
          <RemoveFromFavBtn onClick={() => removeFromFav(_id)}>
            <AiFillHeart size={'24px'} fill={theme.colors.error} />
          </RemoveFromFavBtn>
        ) : (
          <AddToFavBtn onClick={() => addToFav(_id)}>
            <AiOutlineHeart size={'24px'} color={theme.colors.w} />
          </AddToFavBtn>
        )}

        {/* <AddToFavBtn
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        {/* {isHovered || favorites.includes(product._id) ? (
          <AddToFavBtn
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          >
            <AiFillHeart size={'24px'} />
          </AddToFavBtn>
        ) : (
          <RemoveFromFavBtn
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AiOutlineHeart size={'24px'} color={theme.colors.w} />
          </RemoveFromFavBtn>
        )}
        </AddToFavBtn> */}
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
