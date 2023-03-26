import { Box } from '@mui/system';
import { Button, Logo, Nav } from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';
import { LoginBlock } from './LoginBlock/LoginBlock';
import { CallMe } from './Pop-up/CallMe';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [showCallMe, setShowCallMe] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Nav>
          <Logo
            onClick={() => {
              navigate('/');
            }}
            src={LogoSvg}
          />

          <Button
            onClick={() => {
              navigate('/about-us');
            }}
          >
            Про нас
          </Button>

          <Button
            onClick={() => {
              navigate('/store');
            }}
          >
            Магазин
          </Button>

          <Button
            onClick={() => {
              navigate('/courses');
            }}
          >
            Курси
          </Button>

          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Блог
          </Button>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
