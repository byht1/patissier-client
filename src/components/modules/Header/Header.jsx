import {
  ListItem,
  Logo,
  Nav,
  NavLinkStyled,
  NavList,
  Box,
} from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';
import { LoginBlock } from './LoginBlock/LoginBlock';
import { useState } from 'react';
import { CallMe } from './Pop-up/CallMe';
import { Link } from 'react-router-dom';

export function Header() {
  const [showCallMe, setShowCallMe] = useState(false);
  return (
    <Container>
      <Box>
        <Nav>
          <NavList>
            <ListItem>
              <Link to={'/'}>
                <Logo src={LogoSvg} />
              </Link>
            </ListItem>
            <ListItem>
              <NavLinkStyled to={'/about-us'}>Про нас</NavLinkStyled>
            </ListItem>
            <ListItem>
              <NavLinkStyled to={'/store'}>Магазин</NavLinkStyled>
            </ListItem>
            <ListItem>
              <NavLinkStyled to={'/courses'}>Курси</NavLinkStyled>
            </ListItem>
            <ListItem>
              <NavLinkStyled to={'/blog'}>Блог</NavLinkStyled>
            </ListItem>
          </NavList>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
