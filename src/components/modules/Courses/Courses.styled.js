import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';

export const Button = styled(ButtonsGhost)`
  margin-right: auto;
  margin-bottom: 60px;
  padding: 18px 24px;
  background-color: ${p => p.theme.colors.panelBg};
  border: ${p => p.theme.borders.none};
  border-bottom: 1.5px solid ${p => p.theme.colors.aBg};
  border-radius: ${p => p.theme.radii.normal};
`;

export const CourseList = styled.ul`
  display: flex;
  gap: 60px;
`;
