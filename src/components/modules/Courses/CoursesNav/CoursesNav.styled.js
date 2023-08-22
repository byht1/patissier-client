import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 24px;

  @media screen and (min-width: 1224px) {
    margin-bottom: 200px;
  }
`;

export const NavButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: ${p => p.theme.lineHeights.big};
  width: 180px;
  height: 58px;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.wt};
  border-radius: 12px;
  transition: var(--transition-bg), var(--transition-color),
    var(--transition-border-color);
  border-bottom: 1.5px solid transparent;
  &:hover,
  &:focus,
  &.active {
    border-bottom: 1.5px solid ${p => p.theme.colors.at};
    color: ${p => p.theme.colors.at};
    background-color: ${p => p.theme.colors.panelBg};
  }
`;
