import { Container } from 'components/global/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signUp from '../../../../img/header/images/signUp.jpg';
import { ContentContainer, Form, Input, Label, RegistryBlockCover, SignUpImg, Title, PrivacyPolicy, CheckBoxDefaultIc, CheckBoxActiveIc, Button, SubmitBlock, SubmitAlreadyHaveAccount, LinkToLogin, LoginIconsBox, GoogleIc, AppleIc, FacebookIc } from './SignUp.styled';

export function SignUpComponent(params) {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <ContentContainer>
        <Title>Зареєструвтися</Title>
        <RegistryBlockCover>
          <SignUpImg src={signUp} />
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
              ПІП
              <Input type="text" />
            </Label>
            <Label>
              Телефон
              <Input type="phone" />
            </Label>
            <Label>
              Пароль
              <Input type="password" />
            </Label>
            <PrivacyPolicy>
              {privacyPolicy ? (
                <CheckBoxActiveIc
                  onClick={() => {
                    setPrivacyPolicy(false);
                  }}
                />
              ) : (
                <CheckBoxDefaultIc
                  onClick={() => {
                    setPrivacyPolicy(true);
                  }}
                />
              )}
              Погоджуюсь з правилами конфідеційності
            </PrivacyPolicy>
            <SubmitBlock>
              <Button>Зареєструватися</Button>
              <SubmitAlreadyHaveAccount>
                Вже маю аккаунт.
                <LinkToLogin
                  onClick={() => {
                    navigate('/log-in');
                  }}
                >
                  Увійти
                </LinkToLogin>
              </SubmitAlreadyHaveAccount>
            </SubmitBlock>
          </Form>
        </RegistryBlockCover>
      </ContentContainer>
    </Container>
  );
}
