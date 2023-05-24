import { marginProps, widthTypeOf } from 'helpers';
import styled from 'styled-components';
import { sizes, weights } from '../helpers';

export const H1 = styled.h1`
  ${p => marginProps(p)}

  font-family: ${p => p.theme.fonts.marianna};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 72px;
  line-height: ${p => p.theme.lineHeights.normal};

  @media (min-width: 1224px) {
    font-size: 96px;
  }

  ${p => p.width && widthTypeOf(p.width)}

  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H2 = styled.h2`
  margin-bottom: 20px;

  font-family: ${p => p.theme.fonts.marianna};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 52px;
  line-height: ${p => p.theme.lineHeights.normal};
  text-align: center;

  @media (min-width: 1224px) {
    margin-bottom: 32px;
    font-size: 84px;
  }

  ${p => p.width && widthTypeOf(p.width)}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H3 = styled.h3`
  margin-bottom: 40px;

  font-family: ${p => p.theme.fonts.montserrat};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: 36px;
  line-height: calc(48px / 36px);
  text-align: center;

  @media (min-width: 1224px) {
    margin-bottom: 60px;
  }

  ${p => p.width && widthTypeOf(p.width)}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H4 = styled.h4`
  ${p => marginProps(p)}
  ${p => p.width && widthTypeOf(p.width)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;
