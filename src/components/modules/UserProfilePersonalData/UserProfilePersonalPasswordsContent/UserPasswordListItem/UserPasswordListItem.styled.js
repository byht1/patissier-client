import styled from 'styled-components';
import { ReactComponent as EyeHiddenSvg } from '../../../../../img/header/icons/EyeHidden.svg';
import { ReactComponent as EyeSvg } from '../../../../../img/header/icons/Eye.svg';

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: #ff852d;

  &:nth-child(1n + 2) {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-top: 12px;

  width: 336px;
  height: 44px;

  background: #ffffff;
  border-radius: 12px;

  color: #070a23;
  border: 1px solid ${p => p.theme.colors.aBg};

  outline: none;
`;
export const EyeHiddenIc = styled(EyeHiddenSvg)`
  z-index: 3333;
  position: absolute;
  top: 40px;
  left: 296px;
  width: 26px;
  height: 26px;
  cursor: pointer;

  & path {
    stroke: ${p => p.theme.colors.t};
  }
`;
export const EyeIc = styled(EyeSvg)`
  z-index: 3333;
  position: absolute;
  top: 40px;
  left: 296px;
  width: 26px;
  height: 26px;
  cursor: pointer;

  & path {
    stroke: ${p => p.theme.colors.t};
  }
`;
