import React from 'react';
import {
  UserProfileNavButton,
  UserProfileNavItem,
  UserProfileNavList,
} from './PersonalOffice.styled';
import { Container } from 'components/global/Container';
import { BackLinkRef } from 'components/global/BackLink/BackLink';
import { Outlet } from 'react-router-dom';

export const PersonalOffice = () => {
  return (
    <Container>
      <BackLinkRef />
      <UserProfileNavList>
        <UserProfileNavItem>
          <UserProfileNavButton to="my_study">
            Моє навчання
          </UserProfileNavButton>
        </UserProfileNavItem>
        <UserProfileNavItem>
          <UserProfileNavButton to="billing_history">
            Історія оплат
          </UserProfileNavButton>
        </UserProfileNavItem>
        <UserProfileNavItem>
          <UserProfileNavButton to="calendar">Календар</UserProfileNavButton>
        </UserProfileNavItem>
        <UserProfileNavItem>
          <UserProfileNavButton to="my_profile">Профіль</UserProfileNavButton>
        </UserProfileNavItem>
        <UserProfileNavItem>
          <UserProfileNavButton to="support">Підтримка</UserProfileNavButton>
        </UserProfileNavItem>
      </UserProfileNavList>
      <Outlet />
    </Container>
  );
};
