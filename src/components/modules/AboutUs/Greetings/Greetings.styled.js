import styled from 'styled-components';
import { TextBox } from 'components/global/text';
import { NavLink } from 'react-router-dom';
import Vector from 'img/arrow/arrow_forward.svg';

export const ImgWrap = styled.div`
  width: 552px;
  height: 424px;
  margin-right: 60px;
  box-shadow: 0px -10px 246px -76px rgba(199, 103, 56, 0.37);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const OwnerPhoto = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 101%;
`;

export const SignPhoto = styled.img`
  position: absolute;

  bottom: ${p => (p.readmorelink ? '-5%' : '-30%')};
  right: -10%;
  display: block;
  width: 280px;
  height: 204px;
`;

export const GreetingsText = styled(TextBox)`
  font-size: ${p => p.theme.fontSizes.normalMin};
  line-height: ${p => p.theme.lineHeights.big};
`;

export const ReadMore = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.normalMin};
  line-height: ${p => p.theme.lineHeights.big};
  color: ${p => p.theme.colors.at};
  font-weight: ${p => p.theme.fontWeights.bold};
  display: inline-block;
  margin-top: 42px;

  &::after {
    content: '';
    display: inline-block;
    opacity: 0;
    margin-left: 10px;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: cover;
    width: 33px;
    height: 13px;

    transition: opacity 250ms linear;
  }

  &:hover::after {
    opacity: 1;
  }
`;
