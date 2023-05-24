import styled from 'styled-components';
import { Box } from '../Box';

export const ContainerBox = styled(Box)`
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1224px) {
    width: 1224px;
  }
`;
