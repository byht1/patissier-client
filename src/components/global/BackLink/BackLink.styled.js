import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import VectorBack from 'img/aboutus/Vector_Back.png';

export const BackLink = styled(NavLink)`
  display: inline-block;

  font-size: ${p => p.theme.fontSizes.min};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.t};
  line-height: 1.42;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    background-image: url(${VectorBack});
    background-repeat: no-repeat;
    background-size: cover;
    width: 33px;
    height: 13px;
  }
`;
