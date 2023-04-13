import { Box } from '@mui/system';
import { Logo, Nav, NavLinkStyled } from './Header.styled';
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
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Nav>
          <Link to={'/'}>
            <Logo src={LogoSvg} />
          </Link>
          <NavLinkStyled to={'/about-us'}>Про нас</NavLinkStyled>
          <NavLinkStyled to={'/store'}>Магазин</NavLinkStyled>
          <NavLinkStyled to={'/courses'}>Курси</NavLinkStyled>
          <NavLinkStyled to={'/blog'}>Блог</NavLinkStyled>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
