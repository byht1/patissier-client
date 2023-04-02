import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';
import { Menu } from './Menu/Menu';
import { Contacts } from './Contacts/Contacts';
import { Subscription } from './Subscription/Subscription';
import { SocialNetworks } from './SocialNetworks/SocialNetworks';
import { Copyright } from './Copyright/Copyright';
import { FooterWrap } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <Container pt={60}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="start"
          justifyContent="space-between"
          marginBottom="60px"
        >
          <div>
            <Menu />
            <Contacts />
          </div>
          <div>
            <Subscription />
            <SocialNetworks />
          </div>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          borderTop="1px solid #5C5C5D"
          paddingTop="20px"
          paddingBottom="20px"
        >
          <Copyright />
        </Box>
      </Container>
    </FooterWrap>
  );
};
