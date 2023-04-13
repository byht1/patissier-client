import styled from 'styled-components';

export const MainText = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.at};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SecondText = styled.p`
  color: ${p => p.theme.colors.t};
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const FormWrap = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  background-color: #101011;
  padding: 15px 14px;
  border-radius: 12px;
  outline: none;
  border: 1px solid transparent;
  flex-grow: 1;
  color: ${p => p.theme.colors.t};
  /* color: #070a23; */
  font-size: ${p => p.theme.fontSizes.min};
  line-height: ${p => p.theme.lineHeights.body};
  transition: var(--transition-border-color);

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.min};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.t};
  }

  &:hover {
    border: 1px solid ${p => p.theme.colors.aBg};
  }

  &:focus {
    border: 1px solid ${p => p.theme.colors.aBg};
    background-color: white;
    color: #070a23;

    &::placeholder {
      color: #717171;
    }
  }
`;
