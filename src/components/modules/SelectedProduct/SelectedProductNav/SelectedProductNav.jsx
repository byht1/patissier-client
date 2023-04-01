import { NavButton, ProductNav } from './SelectedProductNav.styled';
import { Box } from 'components/global/Box';
export const SelectedProductNav = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <NavButton to="" end>
        {' '}
        Всі позиції
      </NavButton>
      <NavButton to="cakes">Торти</NavButton>
      <NavButton to="casseroles">Запіканки</NavButton>
      <NavButton to="biscuits">Печиво</NavButton>
      <NavButton to="buns">Булки</NavButton>
      <NavButton to="pies">Пироги</NavButton>
    </Box>
  );
};
