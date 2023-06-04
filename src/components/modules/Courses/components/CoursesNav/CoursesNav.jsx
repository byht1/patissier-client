import { Box } from 'components/global/Box';
import { NavButton } from 'components/modules/Products/ProductNav/ProductNav.styled';
export const CoursesNav = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={60}
    >
      <NavButton to="" end>
        Всі пропозиції
      </NavButton>
      <NavButton to="course">Курси</NavButton>
      <NavButton to="master-classes">Майстер-класи</NavButton>
    </Box>
  );
};
