import { Button } from 'components/global/button';
import { useState } from 'react';
import {
  Div,
  Form,
  Input,
  Label,
  Span,
  ContextCover,
  CloseSVG,
  Text,
} from './CallMe.styled';

export function CallMe({ setShowCallMe }) {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const formInput = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        console.log('Name = ', name, 'Phone = ', phone);
        break;
      case 'phone':
        setPhone(e.target.value);
        console.log('Name = ', name, 'Phone = ', phone);
        break;

      default:
        break;
    }
  };
  return (
    <Div>
      <ContextCover>
        <CloseSVG
          onClick={() => {
            setShowCallMe(false);
          }}
        />
        {!isSent ? (
          <>
            <Span>
              Залиште свої контактні данні і менеджер зв’яжеться з вами
              найближчим часом!
            </Span>
            <Form
              onInput={e => {
                formInput(e);
              }}
            >
              <Label for="name">ПІБ</Label>
              <Input id="name" name="name" placeholder="Проскура Аліна" />
              <Label for="phone">Телефон</Label>
              <Input id="phone" name="phone" placeholder="+38 050 555 55 55" />
            </Form>
            <Button
              onClick={() => {
                setIsSent(true);
              }}
              p={'16px 40px'}
            >
              Відправити
            </Button>
          </>
        ) : (
          <Text family="marianna" weight={400} size="half">
            Очікуйте на дзвінок!
          </Text>
        )}
      </ContextCover>
    </Div>
  );
}
