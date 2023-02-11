import { Button, Div, PhoneSVG, ShoppingCartSVG } from './LoginBlock.styled';

export function LoginBlock({ setShowCallMe }) {
  return (
    <Div>
      <Button>Увійти</Button>
      <Button ml={'10px'}>Реєстрація</Button>
      <ShoppingCartSVG />
      <PhoneSVG
        onClick={() => {
          setShowCallMe(true);
        }}
      />
    </Div>
  );
}
