import { ButtonsGhost } from 'components/global/button';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import { Text } from 'components/global/text';
import styled from 'styled-components';

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopTitle = styled(TitleH2)`
  margin-bottom: 32px;
  color: var(--accent-text);
`;

export const TopText = styled(Text)`
  width: 272px; 
  margin-bottom: 30px;
  text-align: center;
  line-height: 130%;
  color: var(--text);
`;

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
