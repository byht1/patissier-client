import styled from 'styled-components';
import { devices } from 'components/global';

export const ConsistsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${devices.desktop} {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ConsistItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 384px;
  padding-right: 10px;

  ${devices.desktop} {
    gap: 16px;
  }
`;
