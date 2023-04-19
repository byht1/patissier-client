import signIn from '../../../../img/header/images/signIn.jpg';
import { useState } from 'react';
import {
  SignInImg,
  ContentContainer,
  Form,
  Input,
  Label,
  RegistryBlockCover,
  Title,
  KeepOnline,
  CheckBoxDefaultIc,
  CheckBoxActiveIc,
  Button,
  SubmitBlock,
  LinkToSignUp,
  ForgotPassword,
  LoginIconsBox,
  GoogleIc,
  AppleIc,
  FacebookIc,
} from './SignIn.styled';

import { Container } from 'components/global/Container';
import { useNavigate } from 'react-router-dom';

export function SignIn(params) {
  const [keepOnline, setKeepOnline] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <ContentContainer>
          <Title>Увійти в кабінет</Title>
          <RegistryBlockCover>
            <SignInImg src={signIn} />
            <Form action="">
              <LoginIconsBox>
                <GoogleIc />
                <AppleIc />
                <FacebookIc />
              </LoginIconsBox>
              <Label>
                Email
                <Input type="email" />
              </Label>
              <Label>
                Пароль
                <Input type="password" />
                <ForgotPassword to="/password-recovery">
                  Я забув свій пароль
                </ForgotPassword>
              </Label>

              <KeepOnline>
                {keepOnline ? (
                  <CheckBoxActiveIc
                    onClick={() => {
                      setKeepOnline(false);
                    }}
                  />
                ) : (
                  <CheckBoxDefaultIc
                    onClick={() => {
                      setKeepOnline(true);
                    }}
                  />
                )}
                Залишатися в мережі
              </KeepOnline>
              <SubmitBlock>
                <Button>Увійти</Button>
                <LinkToSignUp
                  onClick={() => {
                    navigate('/sign-up');
                  }}
                >
                  Зареєструватися
                </LinkToSignUp>
              </SubmitBlock>
            </Form>
          </RegistryBlockCover>
        </ContentContainer>
      </Container>
    </>
  );
}