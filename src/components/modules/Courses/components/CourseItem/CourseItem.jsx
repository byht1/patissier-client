import React from 'react';

import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import { LinkStyled, TotalPlaces } from './CourseItem.styled';
import {
  ProductWrap,
  ImageWrap,
  ProductImg,
  ProductPrice,
} from 'components/modules/Products/ProductItem/ProductItem.styled';

export const CourseItem = ({ course }) => {
  console.log(course);
  const { _id, category, type, previewText, totalPlaces, images, groups } =
    course;
  console.log(groups);
  return (
    <>
      <ProductWrap key={_id}>
        <ImageWrap>
          <ProductImg src={images[0]} alt="Фото десерту" />
        </ImageWrap>
        <Box p={21}>
          <Text
            textAlign="center"
            size={20}
            mb={12}
            weight={600}
            family="montserrat"
          >
            {category}
          </Text>
          <Text textAlign="center" mb={20} color="t" lh="big">
            {type === 'courses' ? 'Курс' : 'Майстер-клас'}
          </Text>
          <Text color="t" lh="big" mb={17}>
            {previewText}
          </Text>
          <Text size={16} weight={700} mb={15}>
            Група:
            <TotalPlaces> &nbsp;{totalPlaces} осіб</TotalPlaces>
          </Text>
          <Text size={16} weight={700}>
            Термін:
            <TotalPlaces> &nbsp; </TotalPlaces>
          </Text>
          <Box
            mt={27}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text size={20}>
              <ProductPrice>???? грн</ProductPrice>
            </Text>
            <LinkStyled>Детальніше</LinkStyled>
          </Box>
        </Box>
      </ProductWrap>
    </>
  );
};
