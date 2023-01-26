import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { TitleH2, Text } from 'components/global/text';

import { ImgWrap, OwnerFoto, SignFoto } from './Greetings.styled';
import Image from 'img/aboutus/fotovlasnyka.jpg';
import Signature from 'img/aboutus/signature.png';

export const Greetings = () => {
  return (
    <Container pt={114} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 color="at" mb={60}>
          Про нас
        </TitleH2>
        <Box display="flex" alignItems="center">
          <ImgWrap>
            <OwnerFoto src={Image} alt="fotovlasnyka" />
          </ImgWrap>

          <Box width={588} position="relative">
            <Text size={20} lh={30} weight={700} mb={24}>
              Вітаю!
            </Text>
            <Text size={16} lh={24} mb={24}>
              Мене звати Дарія Тюлєнєва і я - твій провідник у солодкий світ
              вишуканих кондитерських виробів.
            </Text>
            <Text size={16} lh={24} mb={24}>
              Маю багаторічний досвід у кондитерській справі, являюсь
              бренд-шефом Kenwood в Україні, творцем найсмачніших десертів в
              мережі ресторанів Мафія, навчаю солодкому мистецтву.
            </Text>
            <Text size={16} lh={24}>
              На нашому сайті ви зможете не тільки замовити найсмачнішу
              <br /> випічку та десерти, а також записатися на цікаві та
              <br /> корисні майстер-класи, або курси з приготування
              <br /> найкращих солодощів.
            </Text>
            <SignFoto src={Signature} alt="Signature" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
