import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled.a`
  display: block;
  width: 156px;
  height: 78px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.space[11]}px;
`;

export const ItemLink = styled(Link)`
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: var(--transition-color);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;
