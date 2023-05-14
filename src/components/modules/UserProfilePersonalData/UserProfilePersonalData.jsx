import { Container } from 'components/global/Container';
import { GridBox, NavigateList } from './UserProfilePersonalData.styled';
import { NavigateItem } from './NavigateItem/NavigateItem';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function UserProfilePersonalData() {
  return (
    <Container>
      <GridBox>
        <NavigateList>
          <Suspense fallback={<>Loader...</>}>
            <NavigateItem to="personal_data" name="Особисті данні" />
            <NavigateItem to="contacts" name="Контакти" />
            <NavigateItem to="passwords" name="Паролі" />
            <NavigateItem to="/" name="Вихід" />
          </Suspense>
        </NavigateList>
        <Outlet />
      </GridBox>
    </Container>
  );
}
