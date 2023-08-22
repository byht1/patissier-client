import React from 'react';
import { NavList, NavButton } from './Groups.styled';

export const GroupsNav = () => {
  return (
    <NavList>
      <li>
        <NavButton to="" end>
          Всі пропозиції
        </NavButton>
      </li>
      <li>
        <NavButton to="online">Онлайн</NavButton>
      </li>
      <li>
        <NavButton to="offline">Офлайн</NavButton>
      </li>
    </NavList>
  );
};
