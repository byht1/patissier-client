import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { TitleH2, TitleH4, Text  } from 'components/global/text';
import {ImageWrap, MKImage, TextWrap, MKSection} from './MainMK.styled';
import Image from 'img/mk/main.jpg';

export const MainMK = () => {
  return (
    <Container pt={58} pb={100}>
      <MKSection>
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
            </TextWrap>
        </Box>
      </MKSection>
    </Container>
    
   
  );
};
