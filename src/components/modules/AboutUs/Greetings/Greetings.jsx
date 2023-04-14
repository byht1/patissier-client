import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';

import {
  GreetingsSection,
  ImgWrap,
  OwnerPhoto,
  SignPhoto,
  GreetingsText,
  ReadMore,
} from './Greetings.styled';
import Image from 'img/aboutus/fotovlasnyka.jpg';
import Signature from 'img/aboutus/signature.png';

export const Greetings = ({
  ReadMoreLink,
  paddingTop = '100px',
  paddingBottom = '100px',
}) => {
  return (
    <Container>
      <GreetingsSection pt={paddingTop} pb={paddingBottom}>
        <TitleH2 color="at" mb={60}>
          Про нас
        </TitleH2>
        <Box display="flex" alignItems={'flex-start'}>
          <ImgWrap>
            <OwnerPhoto src={Image} alt="fotovlasnyka" loading="lazy" />
          </ImgWrap>

          <Box width={588} position="relative">
            <Text size={20} lh={'big'} weight={600} mb={24}>
              Вітаю!
            </Text>
            <GreetingsText mb={24}>
              Мене звати Дарія Тюлєнєва, і я — ваш провідник у солодкий світ
              вишуканих кондитерських виробів.
            </GreetingsText>
            <GreetingsText mb={24}>
              Маю багаторічний досвід у кондитерській справі, працюю бренд-шефом
              “Kenwood” в Україні, створюю найсмачніші десерти у мережі
              ресторанів “Мафія”, навчаю солодкому мистецтву.
            </GreetingsText>
            <GreetingsText>
              На нашому сайті ви зможете не тільки замовити найсмачнішу
              <br /> випічку та десерти, а також записатися на цікаві й
              <br /> корисні майстер-класи або курси з приготування
              <br /> найкращих солодощів.
            </GreetingsText>
            {ReadMoreLink && <ReadMore to="/about-us">Читати далі</ReadMore>}

            <SignPhoto
              src={Signature}
              alt="Signature"
              readmorelink={ReadMoreLink}
            />
          </Box>
        </Box>
      </GreetingsSection>
    </Container>
  );
};
