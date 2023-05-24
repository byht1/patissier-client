import { useState } from 'react';
import signIn from '../../../../img/header/images/signIn.jpg';
import {
  SignInImg,
  ContentContainer,
  FormWrapper,
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

import { FormContext } from 'components/global/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';
import { newPassSchema } from './newPasswordSchema';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';
import { newPass } from 'api/auth';
import { register } from 'redux/auth';
import { FormInput } from 'components/global/FormInput/FormInput';
import { toast, ToastContainer } from 'react-toastify';

export function SetNewPasswordContent() {
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    '🚀 ~ file: SetNewPasswordContent.jsx:43 ~ SetNewPasswordContent ~ searchParams:',
    searchParams
  );
  const token = searchParams.get('token');

  const methods = useForm({
    resolver: yupResolver(newPassSchema),
    mode: 'onTouched',
  });
  const { reset, getValues, isLoading, handleSubmit } = methods;

  const { mutate: saveNewPass } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ token, data }) => {
      return newPass(token, data);
    },
    onSuccess: newData => {
      setErr(null);
      dispatch(register(newData));
      setSearchParams({});
      reset();
    },
    onError: error => {
      setErr(error.response.data.message);
    },
  });

  const onSubmit = () => {
    const password = getValues('password');
    saveNewPass({ token, data: { password } });
  };

  return (
    <>
      <Container>
        <ToastContainer />
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}
        {err && <h1>There is the error {err}</h1>}
        <ContentContainer>
          <Title>Новий Пароль</Title>
          <Cover>
            <SignInImg src={signIn} />
            <FormWrapper>
              <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
                <Box>
                  <Hint>Придумайте та введіть новий пароль.</Hint>
                </Box>

                {/* <Label>
                Пароль
                {showPassword ? (
                  <EyeHiddenIc onClick={HideSymbols} />
                ) : (
                  <EyeIc onClick={SeeSymbols} />
                )}
                <Input type={inputType} minLength={8} autoComplete="off" />
              </Label> */}

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="password"
                  mt={40}
                  mb={8}
                  showhide={true}
                />

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
                  <Button type="submit">Далі</Button>
                  <ResendLink>Надіслати повторно</ResendLink>
                </SubmitBlock>
              </FormContext>
            </FormWrapper>
          </Cover>
        </ContentContainer>
      </Container>
    </>
  );
}
