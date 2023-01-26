import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { WayItem } from './WayItem/WayItem';
import { Icon, ImgWrap, WayFoto, WayList } from './WayToSuccess.styled';

import { Text } from 'components/global/text';
import Image from 'img/aboutus/pie.jpg';
import Icon01 from 'img/aboutus/way01.png';
import Icon02 from 'img/aboutus/way02.png';
import Icon03 from 'img/aboutus/way03.png';
import Icon04 from 'img/aboutus/way04.png';
import Icon05 from 'img/aboutus/way05.png';

export const WayToSuccess = () => {
  return (
    <Container pt={100} pb={100}>
      <Box display="flex">
        <Box width={552}>
          <WayList>
            <WayItem>
              <Icon src={Icon01} alt="icon" />
              <Text lh={24} size={16} width={450}>
                Свій шлях я почала також з майстер-класу. З першого заняття я
                закохалася в мистецтво створення кондитерських виробів.
              </Text>
            </WayItem>
            <WayItem>
              <Text lh={24} size={16} width={450}>
                Вже за 3 місяці я повністю присвятила себе кондитерській справі
                та незабаром відкрила свою кондитерську
              </Text>
              <Icon src={Icon02} alt="icon" />
            </WayItem>
            <WayItem>
              <Icon src={Icon03} alt="icon" />
              <Text lh={24} size={16} width={450}>
                Під час карантину я зрозуміла, що майстер-класи потребують нових
                форматів та люди хочуть навчатися онлайн. Так я відкрила онлайн
                курси.
              </Text>
            </WayItem>
            <WayItem>
              <Text lh={24} size={16} width={450}>
                Потім беру участь у кулінарному шоу Мастер-шеф та Пекельна
                кухня. Паралельно продовжую навчатися та вести онлайн курси.
              </Text>
              <Icon src={Icon04} alt="icon" />
            </WayItem>
            <WayItem>
              <Icon src={Icon05} alt="icon" />
              <Text lh={24} size={16} width={450}>
                Укладаю контракт на створення десертної карти для мережі
                ресторанів “Мафія”
              </Text>
            </WayItem>
          </WayList>
        </Box>
        <ImgWrap>
          <WayFoto src={Image} alt="Pie"></WayFoto>
        </ImgWrap>
      </Box>
    </Container>
  );
};
