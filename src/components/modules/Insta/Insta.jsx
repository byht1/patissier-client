import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2, TitleH4 } from 'components/global/text';
import { FaInstagram } from 'react-icons/fa';
import image1 from '../../../img/Insta/link-1.jpg';
import image2 from '../../../img/Insta/link-2.jpg';
import image3 from '../../../img/Insta/link-3.jpg';
import { SocialLink, SocialIcon } from './Insta.styled';

const instaPosts = [
  {
    id: 1,
    title: 'link-1',
    link: 'https://www.instagram.com/p/CnEy6bTt9le/',
    img: image1,
    img2x: 'img/Insta/link-1@2x.jpg',
  },
  {
    id: 2,
    title: 'link-2',
    link: 'https://www.instagram.com/p/CnChOO6NqBV/',
    img: image2,
    img2x: 'img/Insta/link-2@2x.jpg',
  },
  {
    id: 3,
    title: 'link-3',
    link: 'https://www.instagram.com/p/CmlXQncNwEm/',
    img: image3,
    img2x: 'img/Insta/link-3@2x.jpg',
  },
];

export const Insta = () => {
  return (
    <>
      <Container pt={114} pb={100}>
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
        <ul>
          {instaPosts.map(post => (
            <li key={post.id}>
              {post.title}
              <a
                href={post.link}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <img src={post.img} alt={post.title} width="360" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
