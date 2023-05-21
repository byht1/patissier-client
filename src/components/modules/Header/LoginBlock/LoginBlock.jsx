import React, { useState } from 'react';
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
  NavigateLinkStyled,
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
      <NavigateLinkStyled to={'/select-product'}>
        <HeartIc />
      </NavigateLinkStyled>
      <NavigateLinkStyled to={'/basket'}>
        <ShoppingCartSVG />
      </NavigateLinkStyled>
      <PhoneSVG
        onClick={() => {
          setShowCallMe(true);
        }}
      />
      <NavigateLinkStyled to={'/log-in'}>
        <UserIc
          onClick={() => {
            navigate('/log-in');
          }}
        />
      </NavigateLinkStyled>
    </Div>
  );
}
