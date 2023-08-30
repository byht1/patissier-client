import styled from 'styled-components';
import { Box } from '../Box';

export const ContainerBox = styled(Box)`
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;
  max-width: 100%;

  @media (min-width: 480px) {
    max-width: 480px;
  }

  @media (min-width: 1224px) {
    max-width: 1224px;
  }
`;
