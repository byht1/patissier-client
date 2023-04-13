import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.min};
  color: ${p => p.theme.colors.t};
  text-align: center;
  line-height: 1.43;
  width: 450px;
`;
