import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';
import { ReactComponent as PhoneSvg } from '../../../../img/header/icons/phone.svg';
import { ReactComponent as ShoppingCartSvg } from '../../../../img/header/icons/shoppingCart.svg';

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
  display: flex;
`;

export const PhoneSVG = styled(PhoneSvg)`
  margin-left: 30px;
  cursor: pointer;
  margin-top: 6px;
  width: ${({ width }) => width || '21px'};
  height: ${({ height }) => height || '29px'};
  & path {
    fill: ${({ color }) => color || 'white'};
  }
  &: hover path {
    fill: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  }
`;

export const ShoppingCartSVG = styled(ShoppingCartSvg)`
  margin-left: 30px;
  cursor: pointer;
  margin-top: 6px;
  width: ${({ width }) => width || '31px'};
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &: hover path {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
  &: hover circle {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
`;
