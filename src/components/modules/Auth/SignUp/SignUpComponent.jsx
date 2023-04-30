import { Container } from 'components/global/Container';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';
import { FormContext } from 'components/global/FormContext';
import { FormInput } from 'components/global/FormInput/FormInput';
import { sigUpSchema } from 'components/modules/Auth/SignUp/signUp.schema';
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
  FormWrapper,
  GoogleIc,
  LinkToLogin,
  LoginIconsBox,
  PrivacyPolicy,
  RegistryBlockCover,
  SignUpImg,
  SubmitAlreadyHaveAccount,
  SubmitBlock,
  Title,
} from './SignUp.styled';

export function SignUpComponent() {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(sigUpSchema),
    mode: 'onTouched',
  });
  const { reset, handleSubmit } = methods;

  const { mutate: regUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => signUp(data),
    onSuccess: signData => {
      setErr(null);
      dispatch(register(signData));
      reset();
    },
    onError: error => {
      setErr(error.response.data.message);
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
      {err && <h1>There is the error {err}</h1>}

      <ContentContainer>
        <Title>Зареєструватись</Title>
        <RegistryBlockCover>
          <SignUpImg src={signUpImg} />
          <FormWrapper>
            <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
              <LoginIconsBox>
                <GoogleIc />
                <AppleIc />
                <FacebookIc />
              </LoginIconsBox>

              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="email"
                mt={40}
              />

              <FormInput
                label="Name"
                name="name"
                type="text"
                placeholder="login"
                mt={40}
              />

              <FormInput
                label="Phone"
                name="phone"
                type="phone"
                placeholder="phone"
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
            </FormContext>
          </FormWrapper>
        </RegistryBlockCover>
      </ContentContainer>
    </Container>
  );
}
