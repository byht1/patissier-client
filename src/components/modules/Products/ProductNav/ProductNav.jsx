import { Box } from 'components/global/Box';
import { NavButton } from './ProductNav.styled';

export const ProductNav = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={60}
    >
      <NavButton to="" end>
        Всі позиції
      </NavButton>
      <NavButton to="cakes">Торти</NavButton>
      <NavButton to="pastries">Тістечка</NavButton>
      <NavButton to="cookies">Печиво</NavButton>
      <NavButton to="bakering">Випічка</NavButton>
      <NavButton to="pies">Пироги</NavButton>
    </Box>
  );
};
