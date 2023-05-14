import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 170px auto;
  column-gap: 24px;

  &:nth-child(1n + 2) {
    margin-top: 20px;
  }
`;

export const Name = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  align-items: center;

  color: #ff852d;
`;

export const Content = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  color: #ffffff;
`;
