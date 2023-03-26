import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
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
  const navigate = useNavigate();

  return (
    <Div>
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
      <UserIc
        onClick={() => {
          navigate('/log-in');
        }}
      />
    </Div>
  );
}
