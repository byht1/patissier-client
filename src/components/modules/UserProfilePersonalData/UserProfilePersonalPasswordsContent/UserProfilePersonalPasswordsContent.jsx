import React from 'react';
import {
  Box,
  EditingBtn,
  List,
} from './UserProfilePersonalPasswordsContent.styled';
import { UserPasswordListItem } from './UserPasswordListItem/UserPasswordListItem';

export function UserProfilePersonalPasswordsContent() {
  return (
    <Box>
      <List>
        <UserPasswordListItem
          name={'Старий пароль'}
          value={'qweqwettq123@#$'}
        />
        <UserPasswordListItem name={'Новий пароль'} value={'123#@!wqeqw'} />
        <UserPasswordListItem name={'Повторити пароль'} value={'123#@!wqeqw'} />
      </List>
      <EditingBtn>Зберегти зміни</EditingBtn>
    </Box>
  );
}
