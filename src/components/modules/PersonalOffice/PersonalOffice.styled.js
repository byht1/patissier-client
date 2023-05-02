import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const UserProfileNavList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
export const UserProfileNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;
export const UserProfileNavButton = styled(NavLink)`
  color: ${p => p.theme.colors.w};
  height: 36px;
  display: flex;
  align-items: center;
  padding: 19px 30px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.btnBg};
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
