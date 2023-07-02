import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import heroCourses from 'img/courses/heroCourses.jpg';
// import heroCoursesMob from 'img/courses/heroCoursesMob';

export const ImageWrap = styled.section`
  /* @media (min-width: 1224px) {
    padding-top: 100px;
    padding-bottom: 100px;
  } */
  /* background-image: linear-gradient(rgba(3, 3, 5, 0.52), rgba(95, 95, 95, 0)); */
  padding-top: 160px;
  padding-bottom: 186px;
  margin: 0 auto;
  max-width: 1440px;
  height: 654px;
  background-image: url(${heroCourses});
  background-size: cover;
  background-position: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.bg};
  width: 216px;
  padding: 16px 57.5px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.at};
  transition: var(--transition-bg);
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.ah};
  }
`;
