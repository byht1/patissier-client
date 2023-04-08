import { useState } from 'react';
import signIn from '../../../../img/header/images/signIn.jpg';
import {
  SignInImg,
  ContentContainer,
  Form,
  Input,
  Label,
  Cover,
  Title,
  Button,
  SubmitBlock,
  Box,
  Hint,
  ResendLink,
  PasswordStrictParameters,
  Parameter,
  ParameterContent,
  EyeHiddenIc,
  EyeIc,
} from './SetNewPasswordContent.styled';

import { Container } from 'components/global/Container';

export function SetNewPasswordContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const SeeSymbols = () => {
    setInputType('text');
    setShowPassword(true);
  };
  const HideSymbols = () => {
    setInputType('password');
    setShowPassword(false);
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <Title>Новий Пароль</Title>
          <Cover>
            <SignInImg src={signIn} />
            <Form action="">
              <Box>
                <Hint>Придумайте та введіть новий пароль.</Hint>
              </Box>
              <Label>
                Пароль
                {showPassword ? (
                  <EyeHiddenIc onClick={HideSymbols} />
                ) : (
                  <EyeIc onClick={SeeSymbols} />
                )}
                <Input type={inputType} minLength={8} autoComplete="off" />
              </Label>
              <PasswordStrictParameters>
                Пароль повинен містити:
                <Parameter>
                  <ParameterContent>Більш, ніж 7-м символів</ParameterContent>
                </Parameter>
                <Parameter>
                  <ParameterContent>Рядкові літери</ParameterContent>
                </Parameter>
                <Parameter>
                  <ParameterContent>Заголовні букви</ParameterContent>
                </Parameter>
                <Parameter>
                  <ParameterContent>Цифри</ParameterContent>
                </Parameter>
                <Parameter>
                  <ParameterContent>Спеціальні символи</ParameterContent>
                </Parameter>
              </PasswordStrictParameters>
              <SubmitBlock>
                <Button>Далі</Button>
                <ResendLink>Надіслати повторно</ResendLink>
              </SubmitBlock>
            </Form>
          </Cover>
        </ContentContainer>
      </Container>
    </>
  );
}
