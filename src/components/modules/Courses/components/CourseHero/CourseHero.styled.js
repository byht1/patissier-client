import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import heroCourses from 'img/courses/heroCourses.jpg';

export const ImageWrap = styled.section`
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
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.ah};
  }
`;
