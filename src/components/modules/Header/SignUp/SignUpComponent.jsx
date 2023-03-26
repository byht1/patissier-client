import React from 'react';
import { Container } from 'components/global/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  Button,
  SubmitBlock,
  SubmitAlreadyHaveAccount,
  LinkToLogin,
} from './SignUp.styled';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sigUpSchema } from 'components/schemas/auth/SignUp.schema';
import signUpImg from 'img/header/images/signUp.jpg';
import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';
import { register } from 'redux/auth';
import { FormContext } from 'components/global/FormContext';
import { toast, ToastContainer } from 'react-toastify';

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
    mutationKey: ['user'],
    mutationFn: data => signUp(data),
    onSuccess: signData => {
      setError(null);
      dispatch(register(signData));
      reset();
    },
    onError: error => {
      setError(error.response.data.message);
      console.log(
        '🚀 ~ file: SignUpComponent.jsx:65 ~ SignUpComponent ~ error.response.data.message:',
        error.response.data.message
      );
      toast.error(error.response.data.email, {
        hideProgressBar: true,
        autoClose: 5000,
      });
      toast.error(error.response.data.name, {
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
    console.log('🚀 ~ file: SignUpComponent.jsx:79 ~ onSubmit ~ data:', data);
    regUser(data);
  };

  return (
    <Container>
      <ToastContainer />
      <ContentContainer>
        <Title>Зареєструвтися</Title>
        <RegistryBlockCover>
          <SignUpImg src={signUpImg} />
          {/* <FormContext methods={method} submit={onSubmit}> */}
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <input type="submit" />
              <Button type={'submit'}>Зареєструватися</Button>
              <SubmitAlreadyHaveAccount>
                Вже маю аккаунт.
                <LinkToLogin
                  onClick={() => {
                    navigate('/log-in');
                  }}
                >
                  {' '}
                  Увійти
                </LinkToLogin>
              </SubmitAlreadyHaveAccount>
            </SubmitBlock>
          </Form>
          {/* </FormContext> */}
        </RegistryBlockCover>
      </ContentContainer>
    </Container>
  );
}
