import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2, TitleH4 } from 'components/global/text';
import { FaInstagram } from 'react-icons/fa';
import Image1 from 'img/Insta/link-1.jpg';
import Image2 from 'img/Insta/link-2.jpg';
import Image3 from 'img/Insta/link-3.jpg';
import { SocialLink, SocialIcon } from './Insta.styled';

export const Insta = () => {
  return (
    <Container pt={114} pb={100}>
      <TitleH2 mb={40} color="at">
        Наш інстаграмм
      </TitleH2>
      <TitleH4 mb={40} color="wt">
        <SocialLink
          href="https://www.instagram.com/tuleneva.bakery/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          @tuleneva.bakery
        </SocialLink>
      </TitleH4>
      <ul>
        <li>
          Link-1
          <a href="">
            <img src={Image1} alt="" width="360px" />
          </a>
        </li>
        <li>
          Link-2
          <a href="">
            <img src={Image2} alt="" width="360px" />
          </a>
        </li>
        <li>
          Link-3
          <a href="">
            <img src={Image3} alt="" width="360px" />
          </a>
        </li>
      </ul>
    </Container>
  );
};
