import styled from 'styled-components';

export const StatsItemWrap = styled.li`
  display: flex;
  /* align-items: center; */
  padding-top: 40px;
  padding-bottom: 40px;

  /* gap: 16px; */

  &:not(:last-child):after {
    content: '';
    width: 1px;
    height: 114px;
    background-color: ${p => p.theme.colors.t};
  }
  &:not(:last-child) {
    margin-right: 46px;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 152px;
  margin-right: 40px;
`;

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.normalBig};
  color: ${p => p.theme.colors.at};
  height: 47px;
  padding-top: 5px;
`;

export const InfoText = styled.p`
  font-size: ${p => p.theme.fontSizes.normal};
  color: ${p => p.theme.colors.t};
`;
