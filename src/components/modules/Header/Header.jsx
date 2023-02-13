import { Box } from '@mui/system';
import { Button, Logo, Link, Nav } from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';
import { LoginBlock } from './LoginBlock/LoginBlock';
import { CallMe } from './Pop-up/CallMe';
import { useState } from 'react';

export function Header() {
  const [showCallMe, setShowCallMe] = useState(false);
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Nav>
          <Link href="http://localhost:3000/patissier-client">
            <Logo src={LogoSvg} />
          </Link>
          <Link href="http://localhost:3000/patissier-client/about-us">
            <Button>Про нас</Button>
          </Link>
          <Link href="http://localhost:3000/patissier-client/store">
            <Button>Магазин</Button>
          </Link>
          <Link href="http://localhost:3000/patissier-client/courses">
            <Button>Курси</Button>
          </Link>
          <Link href="http://localhost:3000/patissier-client/">
            <Button>Блог</Button>
          </Link>
          <Link href="http://localhost:3000/patissier-client/">
            <Button>Контакти</Button>
          </Link>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
