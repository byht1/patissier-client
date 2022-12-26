import styled from 'styled-components';

export const ContainerBox = styled.div`
  ${p => p.pt && `padding-top: ${p.pt}px`};
  ${p => p.pb && `padding-bottom: ${p.pb}px`};
  padding-left: 15px;
  padding-right: 15px;

  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    width: 1230px;
  }
`;
