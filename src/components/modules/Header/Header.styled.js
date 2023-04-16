import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.w};
  height: 36px;
  display: flex;
  align-items: center;
  padding: 6px 24px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
  background-color: none;
  border: none;
  border-bottom: none;
  border-radius: none;
  color: inherit;
  border-bottom: 1px solid ${p => p.theme.colors.panelBg};
  &:focus,
  &:hover {
    color: ${p => p.theme.colors.aBg};
    background-color: ${p => p.theme.colors.panelBg};
    border-bottom: 1px solid ${p => p.theme.colors.aBg};
  }
  &:not(:last-child) {
  }
  &.active {
    color: orange;
    color: ${p => p.theme.colors.aBg};
    background-color: ${p => p.theme.colors.panelBg};
    border-bottom: 1px solid ${p => p.theme.colors.aBg};
    border-radius: 8px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 166px;
  height: 66px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li``;
