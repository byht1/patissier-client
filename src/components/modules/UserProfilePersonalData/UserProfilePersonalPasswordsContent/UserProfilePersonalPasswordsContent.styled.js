import styled from 'styled-components';

export const Box = styled.div``;

export const List = styled.ul``;

export const EditingBtn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  background: #030305;

  color: #b5b5b5;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 16px 40px;

  border: 1.5px solid #b5b5b5;
  border-radius: 12px;

  &:hover {
    background: #ff852d;
    color: #030305;
    border: 1.5px solid #ff852d;
  }
`;
