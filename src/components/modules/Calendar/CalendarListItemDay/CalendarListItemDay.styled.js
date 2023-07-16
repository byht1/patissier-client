import styled from 'styled-components';

export const Li = styled.li`
  height: 116px;

  background: #101011;
  border-radius: 12px;
`;

export const Day = styled.p`
  margin: 6px 0px 0px 6px;
`;

export const NotActiveMonthLi = styled(Li)`
  background: #030305;
  border: 1.5px solid #101011;
  border-radius: 12px;
`;

export const ActiveDay = styled(Li)`
  border: 1.5px solid #ff852d;
`;
