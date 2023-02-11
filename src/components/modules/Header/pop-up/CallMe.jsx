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
        <Form>
          <Label for="name">ПІБ</Label>
          <Input id="name" name="name" placeholder="Проскура Аліна" />
          <Label for="phone">Телефон</Label>
          <Input id="phone" name="phone" placeholder="+38 050 555 55 55" />
        </Form>
      </ContextCover>
    </Div>
  );
}
