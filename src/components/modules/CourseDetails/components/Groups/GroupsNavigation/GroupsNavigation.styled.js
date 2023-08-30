import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const NAV_BREAKPOINTS_SMALL = 572;

export const GroupsNavContainer = styled.div`
  margin: 0 auto 40px;

  @media (min-width: ${NAV_BREAKPOINTS_SMALL}px) {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 60px;
  }
`;

export const NavSwiperSlide = styled(SwiperSlide)`
  display: flex;
  max-width: max-content;
  /* -> 1. кнопки розташовані поруч; 2. кнопки не перекривають одна одну */
`;

export const NavButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  padding: 0 32px;
  height: 44px;
  font-size: 14px;

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

  @media (min-width: ${NAV_BREAKPOINTS_SMALL}px) {
    width: 180px;
    height: 58px;
    padding: 16px;
    font-size: 16px;
  }
`;