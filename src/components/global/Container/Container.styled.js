import styled from 'styled-components';
import { Box } from '../Box';
import { devices } from '../styled';

export const ContainerBox = styled(Box)`
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;

  ${devices.mobile} {
    width: 480px;
  }
  
  ${devices.desktop} {
    width: 1224px;
  }
`;
