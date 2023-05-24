import { useState } from 'react';
import signIn from '../../../../img/header/images/signIn.jpg';
import {
  Box,
  Button,
  ContentContainer,
  Cover,
  FormWrapper,
  Hint,
  Parameter,
  ParameterContent,
  PasswordStrictParameters,
  ResendLink,
  SignInImg,
  SubmitBlock,
  Title,
} from './SetNewPasswordContent.styled';

import { Container } from 'components/global/Container';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import { FormContext } from 'components/global/FormContext';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { newPassSchema } from './newPasswordSchema';

import { useMutation } from '@tanstack/react-query';
import { newPass } from 'api/auth';
import { FormInput } from 'components/global/FormInput/FormInput';
import { ToastContainer } from 'react-toastify';
// import { register } from 'redux/auth';

export function SetNewPasswordContent() {
  const [err, setErr] = useState(null);
  // const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

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
      // dispatch(register(newData));
      reset();
      navigate('/log-in');
    },
    onError: error => {
      setErr(error.response.data.message);
    },
  });

  const onSubmit = () => {
    const password = getValues('password');
    saveNewPass({ token, data: { newPassword: password } });
  };

  return (
    <>
      <Container>
        <ToastContainer />
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}

        <ContentContainer>
          <Title>Новий Пароль</Title>

          <Cover>
            <SignInImg src={signIn} />
            <FormWrapper>
              <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
                <Box>
                  <Hint>Придумайте та введіть новий пароль.</Hint>
                </Box>

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="password"
                  mt={40}
                  mb={8}
                  showhide={true}
                />
                {err && (
                  <Alert
                    style={{ marginBottom: 16 }}
                    severity="error"
                    onClose={() => setErr(null)}
                  >
                    {err}
                  </Alert>
                )}

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
                  <ResendLink to="/password-recovery">
                    Надіслати повторно
                  </ResendLink>
                </SubmitBlock>
              </FormContext>
            </FormWrapper>
          </Cover>
        </ContentContainer>
      </Container>
    </>
  );
}
