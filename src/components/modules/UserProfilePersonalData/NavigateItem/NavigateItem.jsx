import { Item, Link } from './NavigateItem.styled';
import React from 'react';

export function NavigateItem({ name, to }) {
  return (
    <Item>
      <Link to={`${to}`}>{name}</Link>
    </Item>
  );
}
