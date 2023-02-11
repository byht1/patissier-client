import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const Button = styled(ButtonsGhost)`
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
  color: ${p => p.theme.colors.w};
  border-bottom: 1px solid ${p => p.theme.colors.panelBg};
  &:focus,
  &:hover {
    font-weight: 700;
    color: ${p => p.theme.colors.aBg};
    background-color: ${p => p.theme.colors.panelBg};
    border-bottom: 1px solid ${p => p.theme.colors.aBg};
  }
  &:not(:last-child) {
  }
`;

export const Logo = styled.img`
  width: 166px;
  height: 66px;
`;

export const Link = styled.a``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
