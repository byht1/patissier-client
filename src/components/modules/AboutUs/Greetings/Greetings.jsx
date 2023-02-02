import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';

import {
  ImgWrap,
  OwnerPhoto,
  SignPhoto,
  GreetingsText,
  ReadMore,
} from './Greetings.styled';
import Image from 'img/aboutus/fotovlasnyka.jpg';
import Signature from 'img/aboutus/signature.png';

export const Greetings = ({ ReadMoreLink }) => {
  return (
    <Container pt={114} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 color="at" mb={60}>
          Про нас
        </TitleH2>
        <Box display="flex" alignItems="center">
          <ImgWrap>
            <OwnerPhoto src={Image} alt="fotovlasnyka" loading="lazy" />
          </ImgWrap>

          <Box width={588} position="relative">
            <Text size={20} lh={'big'} weight={700} mb={24}>
              Вітаю!
            </Text>
            <GreetingsText mb={24}>
              Мене звати Дарія Тюлєнєва і я - твій провідник у солодкий світ
              вишуканих кондитерських виробів.
            </GreetingsText>
            <GreetingsText mb={24}>
              Маю багаторічний досвід у кондитерській справі, являюсь
              бренд-шефом Kenwood в Україні, творцем найсмачніших десертів в
              мережі ресторанів Мафія, навчаю солодкому мистецтву.
            </GreetingsText>
            <GreetingsText>
              На нашому сайті ви зможете не тільки замовити найсмачнішу
              <br /> випічку та десерти, а також записатися на цікаві та
              <br /> корисні майстер-класи, або курси з приготування
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
      </Box>
    </Container>
  );
};
