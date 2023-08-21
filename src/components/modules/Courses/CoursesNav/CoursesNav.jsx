import { NavList, NavButton } from './CoursesNav.styled';

export const CoursesNav = () => {
  return (
    <NavList
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <li>
        <NavButton to="" end>
          Всі пропозиції
        </NavButton>
      </li>
      <li>
        <NavButton to="course">Курси</NavButton>
      </li>
      <li>
        <NavButton to="master-classes">Майстер-класи</NavButton>
      </li>
    </NavList>
  );
};
