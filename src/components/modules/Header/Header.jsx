import { Box } from '@mui/system';
import { Button, Logo, Nav, Link } from './Header.styled';
import { Container } from 'components/global/Container';
import LogoSvg from '../../../img/logo/Logo.svg';
import { LoginBlock } from './LoginBlock/LoginBlock';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallMe } from './Pop-up/CallMe';

import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'api/auth';
import { logOut } from 'redux/auth';

export function Header() {
  const [showCallMe, setShowCallMe] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { mutate: logOutUserFn } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => logOutUser(),
    onSuccess: () => dispatch(logOut()),
    onError: error => {
      if (error.response.data.message === 'Invalid token') {
        dispatch(logOut());
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

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
          {/*Temporary LOGOUT */}
          <Link>
            <Button
              onClick={() => {
                logOutUserFn();
              }}
            >
              LogOut
            </Button>
          </Link>
        </Nav>
        <LoginBlock setShowCallMe={setShowCallMe} />
        {showCallMe ? <CallMe setShowCallMe={setShowCallMe} /> : null}
      </Box>
    </Container>
  );
}
