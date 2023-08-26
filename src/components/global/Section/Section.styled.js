import styled from 'styled-components';
import { devices } from '../styled';

export const SectionBox = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  ${devices.desktop} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
