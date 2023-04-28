import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CourseCard = styled.li`
  width: 360px;

  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid transparent;
`;

export const ImageWpar = styled.div`
  /* width: 360px; */
  width: 100%;
  height: 266px;
  margin-bottom: 16px;
`;

export const CourseImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.panelBg};
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToDetailsLink = styled(NavLink)`
  padding: 16px 40px;
  height: 52px;

  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  background-color: transparent;
  color: ${p => p.theme.colors.aBg};
  border: 2px solid ${p => p.theme.colors.aBg};
  border-radius: ${p => p.theme.radii.normal};

  transition: var(--transition-bg), var(--transition-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.aBg};
    color: ${p => p.theme.colors.bg};
  }
`


