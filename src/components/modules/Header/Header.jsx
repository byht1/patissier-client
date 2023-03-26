import { Box } from '@mui/system';
import { Button, Logo, Nav, Link } from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';
import { LoginBlock } from './LoginBlock/LoginBlock';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallMe } from './Pop-up2/CallMe2';

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
          <Link>
            <Button
              onClick={() => {
                navigate('/about-us');
              }}
            >
              Про нас
            </Button>
          </Link>
          <Link>
            <Button
              onClick={() => {
                navigate('/store');
              }}
            >
              Магазин
            </Button>
          </Link>
          <Link>
            <Button
              onClick={() => {
                navigate('/courses');
              }}
            >
              Курси
            </Button>
          </Link>
          <Link>
            <Button
              onClick={() => {
                navigate('/');
              }}
            >
              Блог
            </Button>
          </Link>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
