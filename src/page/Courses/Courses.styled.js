import styled from 'styled-components';
import { TitleH2, devices } from 'components/global';

export const Title = styled(TitleH2)`
  margin-bottom: 40px;
  ${devices.desktop} {
    margin-bottom: 60px;
  }
`;
