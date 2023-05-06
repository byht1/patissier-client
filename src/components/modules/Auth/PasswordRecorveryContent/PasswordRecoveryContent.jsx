import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import signIn from '../../../../img/header/images/signIn.jpg';
import {
  Box,
  Button,
  ContentContainer,
  Cover,
  FormWrapper,
  Hint,
  SignInImg,
  SubmitBlock,
  Title,
} from './PasswordRecoveryContent.styled';

import { Container } from 'components/global/Container';
import { recoveryPass } from 'api/auth';
import { FormContext } from 'components/global/FormContext';
import { FormInput } from 'components/global/FormInput/FormInput';
import { passRecoverySchema } from './passRecoverySchema';

export function PasswordRecoveryContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(passRecoverySchema),
    mode: 'onTouched',
  });

  const { reset, getValues } = methods;

  const onSubmit = async () => {
    const { email } = getValues();
    console.log(
      '🚀 ~ file: PasswordRecoveryContent.jsx:42 ~ onSubmit ~ email:',
      email
    );
    setSuccess(true);
    setIsLoading(true);
    try {
      await recoveryPass(email);
      setSuccess(true);
    } catch (error) {
      toast.error(error.response.data.message, {
        hideProgressBar: true,
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timerId;
    if (success) {
      timerId = setTimeout(() => {
        navigate('/log-in');
      }, 5000);
    }
    return () => clearTimeout(timerId);
  }, [success, navigate]);

  return (
    <>
      <Container>
        <ToastContainer />
        {/* TODO Змінити на лоадер */}
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading ...</h1>}

        <ContentContainer>
          <Title>Відновлення Паролю</Title>
          <Cover>
            <SignInImg src={signIn} />

            <FormWrapper>
              <FormContext methods={methods} submit={() => {}}>
                {/*TODO  зробити сповіщення про відправлення листа для відновлення паролю - модалка?*/}
                {success ? (
                  <div>Лист для відновлення паролю відправлено</div>
                ) : (
                  <>
                    <Box>
                      <Hint>
                        Введіть ваш Email, який ви використовували для
                        реєстрації. Ви отримаєте посилання для скидання паролю.
                      </Hint>
                    </Box>

                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      mt={40}
                    />

                    <SubmitBlock>
                      <Button onClick={onSubmit}>Відправити лист</Button>
                    </SubmitBlock>
                  </>
                )}
              </FormContext>
            </FormWrapper>
          </Cover>
        </ContentContainer>
      </Container>
    </>
  );
}
