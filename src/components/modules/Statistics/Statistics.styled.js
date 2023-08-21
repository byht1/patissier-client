import { Text } from 'components/global';
import styled from 'styled-components';

export const StaticSection = styled.section`
  padding-bottom: 60px;

  @media screen and (min-width: 1224px) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const StatisticWrap = styled.li`
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 12px;
  display: flex;
  gap: 16px;
  &:not(:last-child) {
    border-right: 1px solid var(--text);
  }
`;

export const StatisticImg = styled.img`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
`;

export const StatisticInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 151px;
`;

export const StatisticInfoText = styled(Text)`
/* margin-bottom: 12px; */
  font-size: 16px;
  line-height: 125%;
  color: ${p => p.theme.colors.t};
  width: min-content;

`;
