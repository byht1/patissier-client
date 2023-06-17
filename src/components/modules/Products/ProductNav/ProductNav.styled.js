import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProductNav = styled.div`
  display: block;
  justify-content: space-between;
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
    font-weight: 700;
    background-color: ${p => p.theme.colors.panelBg};
  }
`;
