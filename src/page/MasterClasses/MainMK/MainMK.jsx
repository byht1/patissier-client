
import { Box } from 'components/global/Box';
import { TitleH4, Text  } from 'components/global/text';
import { BakeryItem } from './BakeryItem';
import { DrinkItem } from './DrinkItem';
import { BonusItem } from './BonusItem';
import {ImageWrap, MKImage, TextWrap, BakeryList, DrinkList, BonusList} from '../MasterClasses.styled';
import Image from 'img/mk/main.jpg';
export const MainMK = ({bakeryList, drinkList, bonusList}) => {
  return (
    <Box display="flex">
        <ImageWrap>
            <MKImage src={Image} alt="foto" loading="lazy" />
        </ImageWrap>
        <TextWrap>
        <TitleH4 mb={24}>Про майстер-клас</TitleH4>
        <Text size={16} lh='big'>Майстер-клас по різдвяній випічці</Text>
        <Text size={16} lh='big'>В програму курсу входить:</Text>

        <BakeryList>
        <Text size={16} lh='big'>Випічка</Text>
        {bakeryList.map(({bakery}) =>{
        return(
          <BakeryItem
          bakery={bakery}
        />
        )
      })}
        </BakeryList>

        <DrinkList>
        <Text size={16} lh='big'>Напої</Text>
        {drinkList.map(({drink}) =>{
        return(
          <DrinkItem
          drink={drink}
        />
        )
      })}
        </DrinkList>

        <BonusList>
        <TitleH4 mb={9}>Бонус</TitleH4>
        {bonusList.map(({bonus}) =>{
        return(
          <BonusItem
          bonus={bonus}
        />
        )
      })}
        </BonusList>
        </TextWrap>
    </Box>
  );
};
