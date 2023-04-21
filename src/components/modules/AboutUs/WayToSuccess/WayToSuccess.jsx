import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { WayItem } from './WayItem/WayItem';
import {
  SuccessSection,
  Icon,
  ImgWrap,
  WayPhoto,
  WayList,
  WayText,
} from './WayToSuccess.styled';

import Image from 'img/aboutus/pie.jpg';
import Icon01 from 'img/aboutus/way01.png';
import Icon02 from 'img/aboutus/way02.png';
import Icon03 from 'img/aboutus/way03.png';
import Icon04 from 'img/aboutus/way04.png';
import Icon05 from 'img/aboutus/way05.png';

export const WayToSuccess = () => {
  return (
    <Container>
      <SuccessSection>
        <Box width={552}>
          <WayList>
            <WayItem>
              <Icon src={Icon01} alt="icon" />
              <WayText>
                Свій шлях я також почала з майстер-класу — з першого заняття
                закохалася в мистецтво створення кондитерських виробів.
              </WayText>
            </WayItem>
            <WayItem>
              <WayText>
                Вже за 3 місяці я повністю присвятила себе кондитерській справі
                та незабаром відкрила власну кондитерську.
              </WayText>
              <Icon src={Icon02} alt="icon" />
            </WayItem>
            <WayItem>
              <Icon src={Icon03} alt="icon" />
              <WayText>
                Під час карантину зрозуміла, що майстер-класи потребують нових
                форматів, а люди хочуть навчатися онлайн. Так я відкрила
                онлайн-курси.
              </WayText>
            </WayItem>
            <WayItem>
              <WayText>
                Потім взяла участь у кулінарному шоу “Мастер-шеф” та “Пекельна
                кухня”. Паралельно продовжувала навчатися та проводити
                онлайн-курси.
              </WayText>
              <Icon src={Icon04} alt="icon" />
            </WayItem>
            <WayItem>
              <Icon src={Icon05} alt="icon" />
              <WayText>
                Уклала контракт на створення десертної карти для мережі
                ресторанів “Мафія”.
              </WayText>
            </WayItem>
          </WayList>
        </Box>
        <ImgWrap>
          <WayPhoto src={Image} alt="Pie" loading="lazy"></WayPhoto>
        </ImgWrap>
      </SuccessSection>
    </Container>
  );
};
