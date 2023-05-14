import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  &:nth-child(1n + 2) {
    margin-top: 16px;
  }
`;

export const Link = styled(NavLink)`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;

  width: 348px;
  height: 64px;

  border-radius: 12px;
  color: ${p => p.theme.colors.w};

  &:hover {
    background: #0f0908;
    border-bottom: 1px solid #ff852d;
    color: ${p => p.theme.colors.aBg};
  }

  &.active {
    background: #0f0908;
    border-bottom: 1px solid #ff852d;
    color: ${p => p.theme.colors.aBg};
  }
`;
