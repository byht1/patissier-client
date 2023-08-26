import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from 'components/global';
import { Swiper, SwiperSlide } from 'swiper/react';

// Groups.jsx components:
export const Container = styled.div`
  padding-left: 12px;

  ${devices.desktop} {
    width: 1224px;
    padding-right: 12px;
    margin: 0 auto;
  }
`;

export const GroupsNavContainer = styled.div`
  margin: 0 auto 40px;
  /* width: max-content; */

  @media (min-width: 564px) {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 60px;
  }
  /* ${devices.desktop} {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 60px;
  } */
`;

// GroupList.jsx components:
export const GroupsContainer = styled.div`
position: relative;
  width: ${p => (p.itemsQuantity > 3 ? '100%' : 'max-content')};

  border-radius: 12px;
  /* box-shadow: 0px 0px 104px -30px rgba(199, 103, 56, 0.1),
    inset 0px 0px 104px -30px rgba(199, 103, 56, 0.1); */
  box-shadow: 0px 0px 104px 15px rgba(199, 103, 56, 0.1),
    inset 0px 0px 104px 30px rgba(199, 103, 56, 0.1);

  /* box-shadow: 0px 0px 104px -3px rgba(199, 103, 56, 0.1),
    -0px -0px 104px -3px rgba(199, 103, 56, 0.1),
    -0px 0px 104px -3px rgba(199, 103, 56, 0.1),
    0px -0px 104px -3px rgba(199, 103, 56, 0.1),
    inset 0px 0px 104px -30px rgba(199, 103, 56, 0.1); */
`;

// GroupsNav.jsx components:
export const NavSwiper = styled(Swiper)`
  /* overflow-y: visible; //because of btn shadow */
`;

export const NavSwiperSlide = styled(SwiperSlide)`
  display: flex; // because of btn shadow
  max-width: fit-content;
`;

export const NavButton = styled(NavLink)`
  display: flex;
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
