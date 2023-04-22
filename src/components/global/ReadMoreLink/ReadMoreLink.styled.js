import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { marginProps } from 'helpers';
import ArrowRight from 'img/arrow/arrow_forward.svg';

export const ReadMore = styled(NavLink)`
  display: inline-block;
  margin-bottom: 24px;
  ${p => marginProps(p)};
  padding: 12px 0;

  font-size: ${p => p.theme.fontSizes.normalMin};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.big};
  color: ${p => p.theme.colors.at};
  
  &::after {
    content: '';
    display: inline-block;
    opacity: 0;
    margin-left: 10px;
    background-image: url(${ArrowRight});
    background-repeat: no-repeat;
    background-size: cover;
    width: 33px;
    height: 13px;

    transition: opacity 250ms linear;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`;
