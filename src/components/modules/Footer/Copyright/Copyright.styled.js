import styled from 'styled-components';

export const IconWrapper = styled.span`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 19px;

  & svg {
    fill: transparent;
    stroke-width: 1px;
  }
`;

export const TextCopyright = styled.p`
  font-size: ${p => p.theme.fontSizes.min};
  line-height: 1.71px;
  color: ${p => p.theme.colors.t};
`;

export const TeamLink = styled.a`
  margin-left: auto;
  font-size: ${p => p.theme.fontSizes.min};
  line-height: 1.71px;
  color: ${p => p.theme.colors.t};
  transition: var(--transition-color);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;
