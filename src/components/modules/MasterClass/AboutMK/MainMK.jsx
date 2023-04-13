
import { Box } from 'components/global/Box';
import { TitleH2, TitleH4, Text  } from 'components/global/text';

// , BakeryList, DrinkList, BonusList
// {bakeryList, drinkList, bonusList}
import {ImageWrap, MKImage, TextWrap} from './MainMK.styled';
import Image from 'img/mk/main.jpg';
export const MainMK = () => {
  return (
    <Box display="flex" flexDirection='column' alignItems='center'>
       <TitleH2 mb={52} color="at">
       Різдвяний штолен
        </TitleH2>
        <Text color="t" mb={56} width={558} textAlign="center" lh='big'>Пройдіть майстер-клас та навчіться готувати неймовірно смачний різдвяний штолен</Text>
    
    <Box display="flex">
      
      <ImageWrap>
          <MKImage src={Image} alt="foto" loading="lazy" />
      </ImageWrap>
      <TextWrap>
      <TitleH4 mb={16}>Про майстер-клас</TitleH4>
      <Text size={16} lh='body'>Ласкаво просимо на наш кондитерський майстер-клас 
      "Різдвяний штолен" з обліпиховим глінтвейном. 
      </Text>
      <Text size={16} lh='body'>
      Штолен - це традиційний німецький різдвяний кекс з сухофруктами, 
      горіхами та спеціями, а обліпиховий глінтвейн - це теплий напій з 
      обліпихового вина з додаванням спецій, який ідеально підходить для 
      різдвяної атмосфери.
      </Text>
      <Text size={16} lh='body'>
      На нашому майстер-класі ви навчитеся випікати свій власний різдвяний
       штолен та приготувати обліпиховий глінтвейн.
       </Text>
       <Text size={16} lh='body'>
       Ми розпочнемо з випічки штолену, де ви навчитеся змішувати інгредієнти, 
       формувати тісто та додавати сухофрукти і горіхи. Потім ми покладемо 
       тісто у форму та запікатимемо його
       </Text>

    

      {/* <BakeryList>
      <Text size={16} lh='big'>Випічка</Text>
      {bakeryList.map(({bakery}) =>{
      return(
        <BakeryItem
        bakery={bakery}
      />
      )
    })}
      </BakeryList> */}

      {/* <DrinkList>
      <Text size={16} lh='big'>Напої</Text>
      {drinkList.map(({drink}) =>{
      return(
        <DrinkItem
        drink={drink}
      />
      )
    })}
      </DrinkList> */}

      {/* <BonusList>
      <TitleH4 mb={9}>Бонус</TitleH4>
      {bonusList.map(({bonus}) =>{
      return(
        <BonusItem
        bonus={bonus}
      />
      )
    })}
      </BonusList> */}
      </TextWrap>
  </Box>
    </Box>
   
  );
};
