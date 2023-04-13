import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signIn from '../../../../img/header/images/signIn.jpg';
<<<<<<< HEAD:src/components/modules/Header/SignIn/SignIn.jsx
import { Header } from '../Header';
=======
import { useState } from 'react';
>>>>>>> Header:src/components/modules/Header/SignIn/SighnIn.jsx
import {
  Button,
  CheckBoxActiveIc,
  CheckBoxDefaultIc,
  ContentContainer,
  ForgotPassword,
  Form,
  Input,
  KeepOnline,
  Label,
  LinkToSignUp,
<<<<<<< HEAD:src/components/modules/Header/SignIn/SignIn.jsx
  RegistryBlockCover,
  SignInImg,
  SubmitBlock,
  Title,
=======
  ForgotPassword,
  LoginIconsBox,
  GoogleIc,
  AppleIc,
  FacebookIc,
>>>>>>> Header:src/components/modules/Header/SignIn/SighnIn.jsx
} from './SignIn.styled';

import { Container } from 'components/global/Container';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from 'api/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginSchema } from 'components/schemas/auth/LoginSchema';
import { register } from 'redux/auth';

export function SignIn(params) {
  const [keepOnline, setKeepOnline] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const method = useForm({
    // resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const { reset, handleSubmit, register: registerField } = method;

  const { mutate: logUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => logIn(data),
    onSuccess: logData => {
      setError(null);
      dispatch(register(logData));
      reset();
    },

    onError: error => {
      setError(error.response.data.message);
      toast.error(error.response.data.message, { hideProgressBar: true });
    },
  });

  const onSubmit = data => {
    logUser(data);
  };

  return (
    <>
      <Container>
        {/* TODO Змінити на лоадер */}
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}
        {error && <h1>There is the error {error}</h1>}

        <ContentContainer>
          <Title>Увійти в кабінет</Title>
          <RegistryBlockCover>
            <SignInImg src={signIn} />
<<<<<<< HEAD:src/components/modules/Header/SignIn/SignIn.jsx
            <Form onSubmit={handleSubmit(onSubmit)}>
=======
            <Form action="">
              <LoginIconsBox>
                <GoogleIc />
                <AppleIc />
                <FacebookIc />
              </LoginIconsBox>
>>>>>>> Header:src/components/modules/Header/SignIn/SighnIn.jsx
              <Label>
                Email
                <Input type="text" {...registerField('login')} />
              </Label>
              <Label>
                Пароль
<<<<<<< HEAD:src/components/modules/Header/SignIn/SignIn.jsx
                <Input type="password" {...registerField('password')} />
                <ForgotPassword>Я забув свій пароль</ForgotPassword>
=======
                <Input type="password" />
                <ForgotPassword to="/password-recovery">
                  Я забув свій пароль
                </ForgotPassword>
>>>>>>> Header:src/components/modules/Header/SignIn/SighnIn.jsx
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
                <Button type="submit">Увійти</Button>
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
