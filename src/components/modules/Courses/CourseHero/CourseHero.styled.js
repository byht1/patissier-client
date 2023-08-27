import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, Text, devices } from 'components/global';

import heroCoursesMob from 'img/courses/heroCoursesMob.jpg';
import heroCourses from 'img/courses/heroCourses.jpg';

export const ImageWrap = styled.section`
  padding-top: 120px;
  padding-bottom: 188px;

  width: 100%;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 479.98px) {
    background: linear-gradient(
        59deg,
        rgba(3, 3, 5, 0.52) 0%,
        rgba(95, 95, 95, 0) 98.39%
      ),
      url(${heroCoursesMob}) center / cover no-repeat;
  }

  background: linear-gradient(
      59deg,
      rgba(3, 3, 5, 0.52) 0%,
      rgba(95, 95, 95, 0) 98.39%
    ),
    url(${heroCourses}) center / cover no-repeat;

  ${devices.desktop} {
    padding-top: 160px;
    padding-bottom: 186px;
    background: url(${heroCourses}) center / cover no-repeat;
  }
`;

export const HeroContainer = styled(Container)`
  max-width: 375px;
  ${devices.desktop} {
    width: 100%;
    max-width: 1224px;
  }
`;

export const TopText = styled(Text)`
  font-size: 16px;
  line-height: 125%;
  margin-bottom: 72px;

  ${devices.desktop} {
    width: 460px;
    margin-bottom: 60px;

    font-size: 20px;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.big};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-align: center;
  ${devices.mobileDown} {
    max-width: 100%;
  }

  max-width: 336px;
  padding: 16px 57.5px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 12px;
  color: ${p => p.theme.colors.bg};
  background-color: ${p => p.theme.colors.at};
  transition: var(--transition-bg);
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.ah};
  }

  ${devices.desktop} {
    max-width: 216px;
  }
`;
