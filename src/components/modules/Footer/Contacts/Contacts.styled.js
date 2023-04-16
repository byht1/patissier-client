import styled from 'styled-components';

export const TelLink = styled.a`
  color: ${p => p.theme.colors.wt};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.normal};
  margin-bottom: 6px;
  transition: var(--transition-color);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;

export const AddressLink = styled.a`
  color: ${p => p.theme.colors.wt};
  transition: var(--transition-color);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.at};
  }
`;
