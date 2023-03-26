import styled from 'styled-components';
import { ButtonsGhost } from 'components/global/button';
import { ReactComponent as PhoneSvg } from '../../../../img/header/icons/iphone.svg';
import { ReactComponent as ShoppingCartSvg } from '../../../../img/header/icons/basket.svg';
import { ReactComponent as HeartSvg } from '../../../../img/header/icons/Heart, Favorite.svg';
import { ReactComponent as UserSvg } from '../../../../img/header/icons/user-logout.svg';
import { ReactComponent as SearchSvg } from '../../../../img/header/icons/search-loupe.svg';
import { ReactComponent as closeXSvg } from '../../../../img/header/icons/closeX.svg';

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
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;

  margin-left: 12px;
  cursor: pointer;
  margin-top: 6px;
  /* width: ${({ width }) => width || '28px'};
  height: ${({ height }) => height || '35px'}; */
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &:hover path {
    stroke: ${({ hoverColor }) => hoverColor || 'var(--accent-bg)'};
  }
`;

export const ShoppingCartSVG = styled(ShoppingCartSvg)`
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  padding: 5px 0px 0px 6px;
  cursor: pointer;
  margin-top: 6px;
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &:hover path {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
  &:hover circle {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
`;

export const HeartIc = styled(HeartSvg)`
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  padding: 8px;
  cursor: pointer;
  margin-top: 6px;
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &:hover path {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
  &:hover circle {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
`;

export const UserIc = styled(UserSvg)`
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  padding: 8px;
  cursor: pointer;
  margin-top: 6px;
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &:hover path {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
  &:hover circle {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
`;

export const SearchIc = styled(SearchSvg)`
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  padding: 6px;
  cursor: pointer;
  margin-top: 6px;
  & path {
    fill: ${({ color }) => color || 'none'};
  }
  &:hover path {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
  &:hover circle {
    stroke: ${({ color }) => color || 'var(--accent-bg)'};
  }
`;

export const Search = styled.input`
  margin-top: 6px;

  width: 324px;
  height: 40px;
  padding: 12px 44px;
  border-radius: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  background: #ffffff;
  border-radius: 26px;

  outline: none;
`;

export const CloseXIc = styled(closeXSvg)`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 16px 10px 12px 0px;

  cursor: pointer;
  &:hover {
    background-color: rgb(0 0 0 / 10%);
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const SearchIcInput = styled(SearchSvg)`
  position: absolute;
  top: 2px;
  left: 2px;

  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 6px;
  cursor: pointer;
  margin-top: 6px;
  & path {
    stroke: ${({ color }) => color || 'black'};
  }
  & circle {
    stroke: ${({ color }) => color || 'black'};
  }
`;
