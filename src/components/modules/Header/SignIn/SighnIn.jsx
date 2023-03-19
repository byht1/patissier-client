import signIn from '../../../../img/header/images/signIn.jpg';
import { Header } from '../Header';
import {
  SignInImg,
  ContentContainer,
  Form,
  Input,
  Label,
  RegistryBlockCover,
  Title,
} from './SignIn.styled';

import { Container } from 'components/global/Container';

export function SignIn(params) {
  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <Title>Увійти в кабінет</Title>
          <RegistryBlockCover>
            <SignInImg src={signIn} />
            <Form action="">
              <Label>
                Email
                <Input type="email" />
              </Label>
              <Label>
                Пароль
                <Input type="password" />
              </Label>
            </Form>
          </RegistryBlockCover>
        </ContentContainer>
      </Container>
    </>
  );
}
