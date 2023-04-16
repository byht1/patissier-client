import styled from 'styled-components';
import { ReactComponent as PhoneSvg } from '../../../../img/header/icons/iphone.svg';
import { ReactComponent as ShoppingCartSvg } from '../../../../img/header/icons/basket.svg';
import { ReactComponent as HeartSvg } from '../../../../img/header/icons/Heart, Favorite.svg';
import { ReactComponent as UserSvg } from '../../../../img/header/icons/user-logout.svg';
import { ReactComponent as SearchSvg } from '../../../../img/header/icons/search-loupe.svg';
import { ReactComponent as closeXSvg } from '../../../../img/header/icons/closeX.svg';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 12px;
`;

export const PhoneSVG = styled(PhoneSvg)`
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;

  cursor: pointer;

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

  padding: 5px 0px 0px 6px;
  cursor: pointer;

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

  padding: 8px;
  cursor: pointer;

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

  padding: 8px;
  cursor: pointer;

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

  padding: 6px;
  cursor: pointer;

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
  width: 324px;
  height: 40px;
  padding: 12px 44px;
  border-radius: 12px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  background: ${p => p.theme.colors.w};
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

  & path {
    stroke: ${({ color }) => color || 'black'};
  }
  & circle {
    stroke: ${({ color }) => color || 'black'};
  }
`;

export const NavigateLinkStyled = styled(NavLink)`
  &.active {
    color: red;
    svg {
      path {
        fill: none;
      }
      path {
        stroke: ${p => p.theme.colors.aBg};
      }
      circle {
        stroke: ${p => p.theme.colors.aBg};
      }
    }
  }
`;
