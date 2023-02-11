import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';
import { ReactComponent as close } from '../../../../img/headerIcons/close.svg';

export const Button = styled(ButtonsGhost)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  border-radius: 12px;
  color: ${p => p.theme.colors.w};
  border: 1px solid ${p => p.theme.colors.w};
  &:focus,
  &:hover {
    color: ${p => p.theme.colors.aBg};
    border: 1px solid ${p => p.theme.colors.aBg};
    background-color: black;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(3, 3, 5, 0.7);
      display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const Form = styled.div``;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  margin-bottom: 38px;
  width: 486px;
  height: 48px;
  border-radius: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: #030305;
`;

export const Label = styled.label`
  margin: 0 0 9px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5%;
`;

export const ContextCover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 792px;
  height: 522px;
  background: #030305;
  box-shadow: 0px 0px 209px -30px rgba(199, 103, 56, 0.2);
  border-radius: 12px;
`;

export const Span = styled.div`
  margin: 0 0 32px 0;
  width: 471px;
  height: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
`;

export const CloseSVG = styled(close)`
  top: 0;
  right: 0;
  margin: 20px;
  display: flex;
  position: absolute;
  cursor: pointer;
  & path {
    fill: ${({ color }) => color || 'white'};
  }
  &: hover path {
    fill: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  }
`;
