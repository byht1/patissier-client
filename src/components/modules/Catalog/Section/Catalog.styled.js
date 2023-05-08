import styled from 'styled-components';
import { TitleH2, Text } from 'components/global/text';
import { NavLink } from 'react-router-dom';
import Vector from 'img/arrow/arrow_forward.svg';
export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const SectionTitle = styled(TitleH2)`
  text-align: center;
`;
export const DownText = styled(Text)`
  color: ${p => p.theme.colors.t};
  max-width: 345px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 16px;
`;

export const ReadMore = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.normalMin};
  line-height: ${p => p.theme.lineHeights.big};
  color: ${p => p.theme.colors.at};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: right;
  display: block;

  margin-left: auto;
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

  &:focus::after {
    opacity: 1;
  }
`;
