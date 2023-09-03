import { NavList, NavButton } from './CourseNav.styled';

export const CoursesNav = () => {
  return (
    <NavList
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width={588}
      m={'0 auto 200px'}
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
