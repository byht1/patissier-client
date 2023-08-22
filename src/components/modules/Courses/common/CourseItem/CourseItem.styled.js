import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CourseWrap = styled.li`
  width: 360px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: var(--transition-border-color);
  box-shadow: var(--shadow);
`;

export const ImageWrap = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
  height: 270px;
  border-radius: 12px;
`;

export const CourseImg = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CourseInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

export const CoursePrice = styled.span`
  font-weight: 600;
`;

export const DetailsLink = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  min-width: 184px;
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