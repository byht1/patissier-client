import { devices } from 'components/global';
import styled from 'styled-components';

export const CourseListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;

  ${devices.desktop} {
    justify-content: space-between;
    gap: 60px;
  }
`;
