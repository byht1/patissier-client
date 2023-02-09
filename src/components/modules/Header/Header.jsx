import { Box } from '@mui/system';
import { Button, Logo, Link, Nav } from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';

export function Header() {
  return (
    <Container>
      <Box display="flex" alignItems="center">
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
      </Box>
    </Container>
  );
}
