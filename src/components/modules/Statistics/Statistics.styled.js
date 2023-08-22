import { Container, Text } from 'components/global';
import styled from 'styled-components';

export const StaticSection = styled.section`
  padding-bottom: 60px;

  @media screen and (min-width: 1224px) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
`;

export const StatisticContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 352px;
  max-width: 352px;
  padding: 0 35px;
  @media screen and (min-width: 1224px) {
    flex-direction: row;
    padding: 40px 0;
  }
`;

//
export const StatisticInfoText = styled(Text)`
  font-size: 16px;
  line-height: 125%;
  color: ${p => p.theme.colors.t};

  @media screen and (min-width: 1224px) {
    width: min-content;
  }
`;

export const StatisticWrap = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;

  &:not(:first-child) {
    padding-top: 40px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--text);
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1224px) {
    padding: 0 40px 12px;
    display: flex;
    gap: 16px;

    &:not(:first-child) {
      padding-top: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid var(--text);
      border-bottom: none;
      padding-bottom: 12px;
    }
  }
`;

export const StatisticContentWrap = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  max-width: 180px;
  gap: 12px;

  ${StatisticInfoText} {
    grid-column-start: 1;
    grid-column-end: 3;
    @media screen and (min-width: 1224px) {
      grid-column-start: 2;
    }
  }

  &:not(:first-child) {
    padding-top: 40px;
  }
  &:not(:last-child) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1224px) {
    width: 214px;
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
