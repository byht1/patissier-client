import styled from 'styled-components';
import { devices } from 'components/global';

export const CourseListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  
  ${devices.desktop} {
    justify-content: space-between;
    gap: 60px;
  }
`;
