import { FaInstagram } from 'react-icons/fa';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { SocialIcon, InstaIcon, IconsWrap } from './SocialNetworks.styled';

export const SocialNetworks = () => {
  return (
    <>
      <IconsWrap>
        <SocialIcon href="#" target="_black" rel="noreferrer noopener nofollow">
          <BsFacebook size="32" />
        </SocialIcon>
        <InstaIcon
          href="https://www.instagram.com/tuleneva.bakery/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <FaInstagram size="20" />
        </InstaIcon>
        <SocialIcon href="#" target="_black" rel="noreferrer noopener nofollow">
          <BsYoutube size="32" />
        </SocialIcon>
      </IconsWrap>
    </>
  );
};
