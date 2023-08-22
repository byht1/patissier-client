import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';
import { Text, TitleH4 } from 'components/global';

export const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: none;
  background: transparent;
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background: #030305;
  border-radius: 12px;
  padding: 20px;
`;

export const SlideTitle = styled(TitleH4)`
  flex-grow: 1;
`;

export const FormatText = styled(Text)`
  text-transform: capitalize;
`;

export const Button = styled(ButtonsGhost)`
  min-width: 184px;
  padding: 16px 40px;
`;
