import React, { useState } from 'react';
import { Box, EditingBtn, List } from './UserProfileContactsContent.styled';
import { PersonalUserDataItem } from '../UserProfilePersonalDataContent/PersonalUserDataItem/PersonalUserDataItem';

export function UserProfileContactsContent({ name, content, isEditing }) {
  const [editing, setEditing] = useState(false);
  const switchEditing = () => {
    switch (editing) {
      case false:
        setEditing(true);
        break;
      case true:
        setEditing(false);
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <List>
        <PersonalUserDataItem
          isEditing={editing}
          name={'Телефон:'}
          content={'+380(95) 111-00-00'}
        />
        <PersonalUserDataItem
          isEditing={editing}
          name={'E-mail:'}
          content={'alina@gmail.com'}
        />
      </List>
      {editing ? (
        <EditingBtn onClick={switchEditing}>Зберегти зміни</EditingBtn>
      ) : (
        <EditingBtn onClick={switchEditing}>Редагувати</EditingBtn>
      )}
    </Box>
  );
}
