import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StartMKSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 58px;

  color: ${p => p.theme.colors.wt};
  background-color: ${p => p.theme.colors.btnBg};
  border: ${p => p.theme.borders.none};
  border-bottom: 1.5px solid transparent;
  border-radius: 12px;
  transition: var(--transition-bg), var(--transition-color),
    var(--transition-border-color);

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.aBg};
    background-color: ${p => p.theme.colors.panelBg};
    border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 24px;
  margin-bottom: 60px;
`;

export const SwiperWrap = styled.div`
  position: relative;
`;
