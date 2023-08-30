import { TitleH3 } from 'components/global';
import { devices } from 'components/global/styled';
import styled from 'styled-components';

export const SectionTitle = styled(TitleH3)`
  margin-bottom: 40px;

  ${devices.desktop} {
    margin-bottom: 60px;
  }
`;