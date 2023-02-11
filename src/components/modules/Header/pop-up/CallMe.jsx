import { Button } from 'components/global/button';
import {
  Div,
  Form,
  Input,
  Label,
  Span,
  ContextCover,
  CloseSVG,
} from './CallMe.styled';

export function CallMe({ setShowCallMe }) {
  const formInput = e => {
    console.log(e.target);
  };
  return (
    <Div>
      <ContextCover>
        <CloseSVG
          onClick={() => {
            setShowCallMe(false);
          }}
        />
        <Span>
          Залиште свої контактні данні і менеджер зв’яжеться з вами найближчим
          часом!
        </Span>
        <Form onInput={formInput}>
          <Label for="name">ПІБ</Label>
          <Input id="name" name="name" placeholder="Проскура Аліна" />
          <Label for="phone">Телефон</Label>
          <Input id="phone" name="phone" placeholder="+38 050 555 55 55" />
        </Form>
        <Button
          onClick={() => {
            setShowCallMe(false);
          }}
          p={'16px 40px'}
        >
          Відправити
        </Button>
      </ContextCover>
    </Div>
  );
}
