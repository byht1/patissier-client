import { Box } from 'components/global/Box';
import { Button } from 'components/global/button';
import { MainText, SecondText, FormWrap, Input } from './Subscription.styled';

export const Subscription = () => {
  return (
    <Box marginBottom="68px">
      <MainText>Підпишіться на розсилку</MainText>
      <SecondText>
        Отримуйте цікаву й актуальну інформацію про курси та знижки
      </SecondText>
      <FormWrap>
        <Input type="text" placeholder="Введіть ваш e-mail" />
        <Button type="submit" p="12px 24px">
          Відправити
        </Button>
      </FormWrap>
    </Box>
  );
};
