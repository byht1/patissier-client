import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${p => p.theme.fontSizes.min};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.t};
  line-height: 1.42;
  transition: var(--transition-color);

  &:hover {
    color: ${p => p.theme.colors.at};
  }
`;

export const Svg = styled.svg`
  path {
    stroke: currentColor;
  }
`;
