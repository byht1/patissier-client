import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  width: 184px;
  padding: 16px 40px;
  color: var(--accent-text);
  border: 2px solid var(--accent-text);
  border-radius: 12px;
  transition: var(--transition-bg), var(--transition-color);
  &:hover,
  &:focus {
    color: var(--background);
    background-color: var(--accent-text);
  }
`;

export const TotalPlaces = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
