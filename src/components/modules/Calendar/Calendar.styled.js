import styled from 'styled-components';
import { ReactComponent as rightArrowSVG } from '../../../img/svg/arrowToRight.svg';
import { ReactComponent as leftArrowSVG } from '../../../img/svg/arrowToLeft.svg';

export const CalendarBox = styled.div`
  margin-top: 40px;
  background: #030305;
  box-shadow: 0px 0px 200px 30px rgba(199, 103, 56, 0.2);
  border-radius: 12px;
`;

export const CalendarDaysList = styled.ul`
  display: grid;
  padding: 8px 35px 20px 35px;
  justify-content: center;
  grid-template-columns: 158px 158px 158px 158px 158px 158px 158px;
  gap: 4px;
`;

export const NamesOfColums = styled(CalendarDaysList)`
  padding: 20px 0px 0px 0px;
  align-items: center;
  text-align: center;
`;

export const ColumnHead = styled.li`
  display: flex;
  justify-content: center;
`;

export const ColumnName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  width: fit-content;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export const ControlPanel = styled.div`
  margin-top: 40px;
`;

export const MonthCounterBtn = styled.button`
  background-color: inherit;
  padding: 4px;
  margin-left: 20px;

  &:first-child {
    margin-left: 0px;
    margin-right: 20px;
  }
`;

export const MonthName = styled.span``;

export const LeftIc = styled(leftArrowSVG)``;

export const RightIc = styled(rightArrowSVG)``;
