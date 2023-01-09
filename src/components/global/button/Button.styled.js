import { marginProps, paddingProps, widthTypeOf } from 'helpers';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;

  padding: 16px;

  ${p => marginProps(p)}
  ${p => paddingProps(p)}
  ${p => p.width && `${widthTypeOf(p.width)}; text-align: center;`}

  border-radius: ${p => p.theme.radii.normal};

  font-family: ${p => p.theme.fonts.montserrat};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  transition: var(--transition-bg), var(--transition-color);
`;

export const Btn = styled(Button)`
  background-color: ${p => p.theme.colors.aBg};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.ah};
  }
`;

export const ButtonsGhostBox = styled(Button)`
  border: 2px solid ${p => p.theme.colors.aBg};

  line-height: ${p => p.theme.lineHeights.big};

  background-color: transparent;
  color: ${p => p.theme.colors.aBg};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.aBg};
    color: ${p => p.theme.colors.bg};
  }
`;