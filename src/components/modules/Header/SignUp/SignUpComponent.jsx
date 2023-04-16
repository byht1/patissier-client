import { Container } from 'components/global/Container';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';
import { sigUpSchema } from 'components/modules/Header/SignUp/signUp.schema';
import signUpImg from 'img/header/images/signUp.jpg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from 'redux/auth';
import {
  AppleIc,
  Button,
  CheckBoxActiveIc,
  CheckBoxDefaultIc,
  ContentContainer,
  FacebookIc,
  Form,
  GoogleIc,
  Input,
  Label,
  LinkToLogin,
  LoginIconsBox,
  PrivacyPolicy,
  RegistryBlockCover,
  SignUpImg,
  SubmitAlreadyHaveAccount,
  SubmitBlock,
  Title,
} from './SignUp.styled';

export function SignUpComponent(params) {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const method = useForm({
    resolver: yupResolver(sigUpSchema),
    mode: 'onTouched',
  });
  const { reset, handleSubmit, register: registerField } = method;

  const { mutate: regUser, isLoading } = useMutation({
    mutationKey: ['user1'],
    mutationFn: data => signUp(data),
    onSuccess: signData => {
      setError(null);
      dispatch(register(signData));
      reset();
    },
    onError: error => {
      setError(error.response.data.message);
      toast.error(error.response.data.email, {
        hideProgressBar: true,
        autoClose: 5000,
      });
      toast.error(error.response.data.username, {
        hideProgressBar: true,
        autoClose: 5000,
      });
      toast.error(error.response.data.password, {
        hideProgressBar: true,
        autoClose: 5000,
      });
      toast.error(error.response.data.phone, {
        hideProgressBar: true,
        autoClose: 5000,
      });
    },
  });

  const onSubmit = data => {
    regUser(data);
  };

  return (
    <Container>
      <ToastContainer />
      {/* TODO Змінити на лоадер */}
      {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}
      {error && <h1>There is the error {error}</h1>}

      <ContentContainer>
        <Title>Зареєструватись</Title>
        <RegistryBlockCover>
          <SignUpImg src={signUpImg} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <LoginIconsBox>
              <GoogleIc />
              <AppleIc />
              <FacebookIc />
            </LoginIconsBox>

            <Label>
              Email
              <Input type="email" {...registerField('email')} />
            </Label>
            <Label>
              ПІП
              <Input type="text" {...registerField('name')} />
            </Label>
            <Label>
              Телефон
              <Input type="phone" {...registerField('phone')} />
            </Label>
            <Label>
              Пароль
              <Input type="password" {...registerField('password')} />
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
              <Button type="submit" disabled={!privacyPolicy}>
                Зареєструватись
              </Button>
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
