import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Text, devices } from 'components/global';

export const CourseWrap = styled.li`
  width: 360px;
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: var(--shadow);

`;

export const ImageWrap = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
  height: 224px;
  border-radius: 12px;

  ${devices.mobile} {
    height: 270px;
  }
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

export const CoursePrice = styled(Text)`
  font-weight: 600;
`;

export const DetailsLink = styled(NavLink)`
  min-width: 184px;
  padding: 16px 40px;
  text-align: center;

  font-weight: 700;
  font-size: 16px;

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
