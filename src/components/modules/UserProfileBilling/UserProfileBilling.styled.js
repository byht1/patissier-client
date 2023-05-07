import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 60px;
`;

export const Cake = styled.img`
  width: 360px;
  height: 316px;
`;

export const TransactionList = styled.ul`
  list-style: none;
  padding: 20px;
  background: #030305;
  box-shadow: 0px 0px 209px -30px rgba(199, 103, 56, 0.2);
  border-radius: 12px;
`;
