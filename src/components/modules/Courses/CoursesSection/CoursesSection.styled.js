import styled from 'styled-components';
import { Text } from 'components/global/text';
import { devices } from 'components/global/styled';


export const TopText = styled(Text)`
  margin-bottom: 40px;

  ${devices.desktop} {
    margin-bottom: 24px;
  }
`;
