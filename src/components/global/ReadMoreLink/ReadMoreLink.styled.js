import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ArrowRight from 'img/arrow/arrow_forward.svg';

export const ReadMore = styled(NavLink)`
  display: inline-block;
  margin: 20px auto 0;
  padding: 16px 0;

  font-size: ${p => p.theme.fontSizes.normalMin};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.big};
  color: ${p => p.theme.colors.at};

  order: 1;

  @media (min-width: 1224px) {
    margin: 0 0 24px auto;
    order: 0;
  }

  &::after {
    content: '';
    display: inline-block;
    opacity: 0;
    margin-left: 12px;
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
