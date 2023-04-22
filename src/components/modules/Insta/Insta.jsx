import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2, TitleH4 } from 'components/global/text';
import { FaInstagram } from 'react-icons/fa';
import image1 from 'img/Insta/insta-1.jpg';
import image2 from 'img/Insta/insta-2.jpg';
import image3 from 'img/Insta/insta-3.jpg';
import image1_2x from 'img/Insta/insta-1@2x.jpg';
import image2_2x from 'img/Insta/insta-2@2x.jpg';
import image3_2x from 'img/Insta/insta-3@2x.jpg';
import { SocialLink, SocialIcon, InstaList } from './Insta.styled';
import { InstaItem } from './InstaItem';

const instaPosts = [
  {
    id: 'insta-1',
    title: 'link-1',
    img: image1,
    img2x: image1_2x,
  },
  {
    id: 'insta-2',
    title: 'link-2',
    img: image2,
    img2x: image2_2x,
  },
  {
    id: 'insta-3',
    title: 'link-3',
    img: image3,
    img2x: image3_2x,
  },
];

export const Insta = () => {
  return (
    <Box as="section" pt={114} pb={100}>
      <Container>
        <TitleH2 mb={40} color="at" className="visually-hidden">
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
        <InstaList>
          {instaPosts.map(post => (
            <InstaItem key={post.id} post={post} />
          ))}
        </InstaList>
      </Container>
    </Box>
  );
};
