import { useState } from 'react';
import { Link } from '../Header.styled';
import {
  Button,
  Div,
  HeartIc,
  PhoneSVG,
  SearchIc,
  ShoppingCartSVG,
  UserIc,
  Search,
  CloseXIc,
  Label,
  SearchIcInput,
} from './LoginBlock.styled';

export function LoginBlock({ setShowCallMe }) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Div>
      <Link href="http://localhost:3000/patissier-client/log-in">
        <Button>Увійти</Button>
      </Link>

      <Link href="http://localhost:3000/patissier-client/sign-up">
        <Button ml={'10px'}>Реєстрація</Button>
      </Link>
      {!showSearch ? (
        <SearchIc
          onClick={() => {
            setShowSearch(true);
          }}
        />
      ) : (
        <Label>
          <Search placeholder="Пошук" />
          <CloseXIc
            onClick={() => {
              setShowSearch(false);
            }}
          />
          <SearchIcInput />
        </Label>
      )}
      <HeartIc />
      <ShoppingCartSVG />
      <PhoneSVG
        onClick={() => {
          setShowCallMe(true);
        }}
      />
      <UserIc />
    </Div>
  );
}
