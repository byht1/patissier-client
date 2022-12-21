import { marginProps } from 'helpers';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;

  ${p => marginProps(p)}

  padding: 16px;

  border-radius: ${p => p.theme.radii.normal};

  font-family: ${p => p.theme.fonts.montserrat};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  transition: var(--transition-bg), var(--transition-color);

  ${p => {
    if (!p.width) return;

    const type = typeof p.width;

    return type === 'string'
      ? `width: ${p.width}; text-align: center;`
      : `width: ${p.width}px; text-align: center;`;
  }}
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
