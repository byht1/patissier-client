import styled from 'styled-components';

const weights = {
  400: 'normal',
  500: 'average',
  600: 'semiBold',
  700: 'bold',
};

const sizes = {
  14: 'min',
  16: 'normalMin',
  20: 'normal',
  36: 'normalBig',
  82: 'normalMax',
  96: 'max',
};

export const TextBox = styled.p`
  ${p => p.mt && `margin-top: ${p.mt}px;`}
  ${p => p.mb && `margin-bottom: ${p.mb}px;`}
  ${p => p.ml && `margin-left: ${p.ml}px;`}
  ${p => p.mr && `margin-right: ${p.mr}px;`}
  ${p => p.m && `margin: ${p.m};`}
  
  font-family: ${p => p.theme.fonts[p.f]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.s]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.ta && `text-align: ${p.ta};`}
  ${p => p.c && `color: ${p.theme.colors[p.c]}`}
`;
