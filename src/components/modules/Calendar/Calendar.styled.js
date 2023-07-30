import styled from 'styled-components';
import { ReactComponent as rightArrowSVG } from '../../../img/svg/arrowToRight.svg';
import { ReactComponent as leftArrowSVG } from '../../../img/svg/arrowToLeft.svg';
import { ReactComponent as openArrowSVG } from '../../../img/svg/openArrowForToogleMenu.svg';
import { ReactComponent as closeArrowSVG } from '../../../img/svg/closeArrowForToogleMenu.svg';

export const Display = styled.div`
  margin-top: 40px;
  background: #030305;
  box-shadow: 0px 0px 200px 30px rgba(199, 103, 56, 0.2);
  border-radius: 12px;
  padding: 0px 0px 20px 0px;
  margin-bottom: 200px;
`;

export const CalendarDisplayListDays = styled.ul`
  display: grid;

  justify-content: center;
  grid-template-columns: 158px 158px 158px 158px 158px 158px 158px;
  gap: 4px;
`;

export const CalendarDisplayListHours = styled.ul`
  display: grid;
  padding: 0px 0px 0px 24px;
  justify-content: center;
  grid-template-columns: 158px 158px 158px 158px 158px 158px 158px;
  gap: 4px;
  height: 596px;
  width: 1184px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }

  ::-webkit-scrollbar-track {
    background: #b5b5b520;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b5b5b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }
`;

export const NamesOfColums = styled.ul`
  display: grid;
  padding: 20px 0px 4px 0px;
  justify-content: center;
  grid-template-columns: 158px 158px 158px 158px 158px 158px 158px;
  gap: 4px;
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
  padding-bottom: 20px;

  justify-content: center;
  border-radius: 8px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export const ColumnNameActive = styled(ColumnName)`
  outline: 1.5px solid #ff852d;
  color: #ff852d;
`;

export const ControlPanel = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthCounterBtn = styled.button`
  background-color: inherit;
  /* padding: 4px; */
  /* margin-left: 20px;

  &:first-child {
    margin-left: 0px;
    margin-right: 20px;
  } */
`;

export const MonthName = styled.span`
  text-align: center;
`;

export const LeftIc = styled(leftArrowSVG)`
  &:hover {
    path {
      stroke: #ff852d;
    }
  }
`;

export const RightIc = styled(rightArrowSVG)`
  &:hover {
    path {
      stroke: #ff852d;
    }
  }
`;

export const CalendarManipulate = styled.span`
  display: grid;
  grid-template-columns: 45px 180px 45px;
`;

export const ModeSwitcher = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  gap: 12px;

  width: 180px;
  height: 56px;

  background-color: #ff852d9c;
  border-radius: 12px;
  cursor: pointer;
`;

export const ModeList = styled.ul`
  top: 57px;
  position: absolute;
  border-radius: 12px;
  background-color: #c3c3c38a;
`;

export const ModeListItem = styled.li`
  margin-top: 1px;
  &:first-child {
    margin-top: 0px;
  }
  &:hover {
    background-color: #ff852d9c;
    border-radius: 12px;
  }
`;

export const ModeName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 57px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
`;

export const CurrentMode = styled.span`
  display: flex;
`;

export const OpenArrowIc = styled(openArrowSVG)`
  margin-left: 12px;
`;

export const CloseArrowIc = styled(closeArrowSVG)`
  margin-left: 12px;
`;
