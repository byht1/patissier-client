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
} from './PasswordRecoveryContent.styled';

import { Container } from 'components/global/Container';

export function PasswordRecoveryContent() {
  return (
    <>
      <Container>
        <ContentContainer>
          <Title>Відновлення Паролю</Title>
          <Cover>
            <SignInImg src={signIn} />
            <Form action="">
              <Box>
                <Hint>
                  Введіть ваш Email, який ви використовували для реєстрації. Ви
                  отримаєте посилання для скидання паролю.
                </Hint>
              </Box>
              <Label>
                Email
                <Input placeholder="example@gmail.com" type="email" />
              </Label>
              <SubmitBlock>
                <Button>Далі</Button>
              </SubmitBlock>
            </Form>
          </Cover>
        </ContentContainer>
      </Container>
    </>
  );
}
