import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const Button = styled(ButtonsGhost)`
  margin-right: auto;
  margin-bottom: 60px;
  padding: 18px 24px;
  background-color: var(--panel-bg);
  border: none;
  border-bottom: 1.5px solid #ff852d;
  border-radius: 12px;
`;

export const CourseList = styled.ul`
  display: flex;
  gap: 60px;
`;
