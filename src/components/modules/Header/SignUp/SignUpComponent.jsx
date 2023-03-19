import { Container } from 'components/global/Container';
import { useState } from 'react';
import signUp from '../../../../img/header/images/signUp.jpg';
import {
  ContentContainer,
  Form,
  Input,
  Label,
  RegistryBlockCover,
  SignUpImg,
  Title,
  PrivacyPolicy,
  CheckBoxDefaultIc,
  CheckBoxActiveIc,
} from './SignUp.styled';

export function SignUpComponent(params) {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  return (
    <Container>
      <ContentContainer>
        <Title>Зареєструвтися</Title>
        <RegistryBlockCover>
          <SignUpImg src={signUp} />
          <Form action="">
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
              {!privacyPolicy ? (
                <CheckBoxDefaultIc
                  onClick={() => {
                    setPrivacyPolicy(true);
                  }}
                />
              ) : (
                <CheckBoxActiveIc
                  onClick={() => {
                    setPrivacyPolicy(false);
                  }}
                />
              )}{' '}
              Погоджуюсь з правилами конфідеційності
            </PrivacyPolicy>
          </Form>
        </RegistryBlockCover>
      </ContentContainer>
    </Container>
  );
}
