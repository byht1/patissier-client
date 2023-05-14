import React from 'react';
import { Content, Item, Name } from './PersonalUserDataItem.styled';

export function PersonalUserDataItem({ name, content, isEditing }) {
  return (
    <Item>
      <Name>{name}</Name>
      {isEditing ? 'qweqweqwe' : <Content>{content}</Content>}
    </Item>
  );
}
