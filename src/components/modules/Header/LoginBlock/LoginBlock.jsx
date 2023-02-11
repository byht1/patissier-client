import { Button, Div, PhoneSVG, ShoppingCartSVG } from './LoginBlock.styled';

export function LoginBlock() {
  return (
    <Div>
      <Button>Увійти</Button>
      <Button ml={'10px'}>Реєстрація</Button>
      <ShoppingCartSVG />
      <PhoneSVG />
    </Div>
  );
}
