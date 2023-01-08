import { marginProps } from 'helpers';
import styled from 'styled-components';
import { sizes, weights } from '../helpers';

export const TextBox = styled.p`
  ${p => marginProps(p)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;
