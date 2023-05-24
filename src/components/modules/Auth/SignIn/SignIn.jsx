import signIn from 'img/header/images/signIn.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppleIc,
  Button,
  CheckBoxActiveIc,
  CheckBoxDefaultIc,
  ContentContainer,
  FacebookIc,
  ForgotPassword,
  FormWrapper,
  GoogleIc,
  KeepOnline,
  LinkToSignUp,
  LoginIconsBox,
  RegistryBlockCover,
  SignInImg,
  SubmitBlock,
  Title,
} from './SignIn.styled';

import { Container } from 'components/global/Container';

import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { logIn } from 'api/auth';
import { Box } from 'components/global/Box';
import { FormContext } from 'components/global/FormContext';
import { FormInput } from 'components/global/FormInput/FormInput';
import { signInSchema } from 'components/modules/Auth/SignIn/signIn.schema';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from 'redux/auth';

export function SignIn() {
  const [keepOnline, setKeepOnline] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onTouched',
  });

  const { reset, handleSubmit } = methods;

  const { mutate: logUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => {
      const res = logIn(data, keepOnline);
      return res;
    },
    onSuccess: logData => {
      setErr(null);
      dispatch(register(logData));
      reset();
    },

    onError: error => {
      setErr(error.response.data.message);
      toast.error(error.response.data.message, {
        hideProgressBar: true,
        autoClose: 5000,
      });
    },
  });

  const onSubmit = data => {
    logUser(data);
  };

  return (
    <>
      <Container>
        <ToastContainer />

        {/* TODO Змінити на лоадер */}
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}
        {err && <h1>There is the error {err}</h1>}

        <ContentContainer>
          <Title>Увійти в кабінет</Title>
          <RegistryBlockCover>
            <SignInImg src={signIn} />
            <FormWrapper>
              <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
                <LoginIconsBox>
                  <GoogleIc />
                  <AppleIc />
                  <FacebookIc />
                </LoginIconsBox>

                <FormInput
                  label="Email"
                  name="login"
                  type="email"
                  placeholder="email"
                  mt={40}
                />

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="password"
                  mt={40}
                  mb={8}
                  showhide={true}
                />

                <Box display="flex" justifyContent="right">
                  <ForgotPassword to="/password-recovery">
                    Я забув свій пароль
                  </ForgotPassword>
                </Box>

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
              </FormContext>
            </FormWrapper>
          </RegistryBlockCover>
        </ContentContainer>
      </Container>
    </>
  );
}
