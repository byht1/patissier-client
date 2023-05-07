import styled from 'styled-components';

export const ItemBox = styled.li`
  height: 72px;
  display: grid;
  grid-template-columns: 88px 222px 140px 96px;
  column-gap: 60px;
  list-style: none;
  padding: 14px;
  background: #030305;
  box-shadow: 0px 0px 209px -30px rgba(199, 103, 56, 0.2);
  border-radius: 12px;

  &:nth-child(2n + 2) {
    background-color: #101011;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const Time = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  display: flex;
  align-items: center;

  color: #b5b5b5;
`;

export const ProductName = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const TransactionDetails = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  display: flex;
  align-items: center;

  color: #b5b5b5;
`;

export const Price = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;
  text-align: right;

  color: #ffffff;
`;
