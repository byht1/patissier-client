import { NavButton } from './SelectedProductNav.styled';

export const SelectedProductNav = () => {
  return (
    <div>
      <NavButton to="" end>
        {' '}
        Всі позиції
      </NavButton>
      <NavButton to="cakes">Торти</NavButton>
      <NavButton to="casseroles">Запіканки</NavButton>
      <NavButton to="biscuits">Печиво</NavButton>
      <NavButton to="buns">Булки</NavButton>
      <NavButton to="pies">Пироги</NavButton>
    </div>
  );
};
