import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  getFavoritesArray,
  addToFavorite,
  removeFromFavorite,
} from 'redux/products';
import { getIsLogin } from 'redux/auth';
import { updateProductFavorite, addProductToBasket } from 'api/products';
import { showLoginWarning } from '../helpers/showLoginWarning';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';

import {
  ProductWrap,
  ImageWrap,
  ProductImg,
  ProductPrice,
  AddToFavBtn,
  RemoveFromFavBtn,
  ButtonBuy,
} from './ProductItem.styled';

export const ProductItem = ({ product }) => {
  const theme = useTheme();
  const client = useQueryClient();
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesArray);
  const isLoggedIn = useSelector(getIsLogin);
  const [isHovered, setIsHovered] = useState(false);
  const [addedToBasket, setAddedToBasket] = useState(false);
  const { _id: id, picture, title, description, price } = product;

  const onAddToFavorite = async id => {
    if (!isLoggedIn) {
      showLoginWarning();
      return;
    }
    await updateProductFavorite(id, 'add');
    dispatch(addToFavorite(id));
  };

  const onRemoveFromFav = async id => {
    await updateProductFavorite(id, 'delete');
    dispatch(removeFromFavorite(id));
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

  const onButtonBuy = () => {
    addProductToBasket(id);
    setAddedToBasket(true);
  };
  return (
    <>
      <ProductWrap key={id}>
        <NavLink to="/">
          <ImageWrap>
            {!addToFavLoading &&
            !removeFromFavLoading &&
            favorites.includes(id) &&
            isLoggedIn ? (
              <RemoveFromFavBtn onClick={() => removeFromFav(id)}>
                <AiFillHeart size={'24px'} fill={theme.colors.error} />
              </RemoveFromFavBtn>
            ) : (
              <AddToFavBtn
                onClick={() => addToFav(id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <AiFillHeart size={'24px'} fill={theme.colors.error} />
                ) : (
                  <AiOutlineHeart size={'24px'} color={theme.colors.w} />
                )}
              </AddToFavBtn>
            )}
            <ProductImg src={picture} alt="Фото десерту" />
          </ImageWrap>
          <Box p={21} pt={23} pb={40}>
            <Text size={20} mb={12} weight={600} family="montserrat" color="wt">
              {title}
            </Text>
            <Text color="t" lh="big">
              {description}
            </Text>
            <Box
              mt={27}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text size={20} color="wt">
                <ProductPrice>{price + ',00'}</ProductPrice> грн/шт
              </Text>
            </Box>
          </Box>
        </NavLink>
        <ButtonBuy width={152} onClick={onButtonBuy}>
          {addedToBasket ? 'В кошику' : 'Купити'}
        </ButtonBuy>
      </ProductWrap>
    </>
  );
};
