import React, { useState } from 'react';
import { Box, EditingBtn, List } from './UserProfilePersonalDataContent.styled';
import { PersonalUserDataItem } from './PersonalUserDataItem/PersonalUserDataItem';

export function UserProfilePersonalDataContent() {
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
          name={'Прізвище:'}
          content={'Проскура'}
        />
        <PersonalUserDataItem
          isEditing={editing}
          name={'Ім’я:'}
          content={'Аліна'}
        />
        <PersonalUserDataItem
          isEditing={editing}
          name={'Дата народження:'}
          content={'10 листопада 1988 року'}
        />
        <PersonalUserDataItem
          isEditing={editing}
          name={'Стать:'}
          content={'Жіноча'}
        />
      </List>
      <EditingBtn onClick={switchEditing}>Редагувати</EditingBtn>
    </Box>
  );
}
