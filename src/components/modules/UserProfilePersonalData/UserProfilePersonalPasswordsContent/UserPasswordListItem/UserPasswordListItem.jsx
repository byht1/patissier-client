import React, { useState } from 'react';
import {
  Item,
  Label,
  EyeHiddenIc,
  EyeIc,
  Input,
} from './UserPasswordListItem.styled';

export function UserPasswordListItem({ name, value }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const SeeSymbols = () => {
    setInputType('text');
    setShowPassword(true);
  };
  const HideSymbols = () => {
    setInputType('password');
    setShowPassword(false);
  };
  return (
    <Item>
      <Label>
        {name}
        {showPassword ? (
          <EyeHiddenIc onClick={HideSymbols} />
        ) : (
          <EyeIc onClick={SeeSymbols} />
        )}
        <Input
          value={value}
          type={inputType}
          minLength={8}
          autoComplete="off"
        />
      </Label>
    </Item>
  );
}
