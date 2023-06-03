import moment from 'moment';
import {
  ActiveDay,
  Day,
  Li,
  NotActiveMonthLi,
} from './CalendarListItem.styled';
import { useState } from 'react';

export function CalendarListItem({ day }) {
  // eslint-disable-next-line
  const [numberOfCurrentMonth, setNumberOfCurrentMonth] = useState(
    moment().month()
  ); // eslint-disable-next-line
  const [monthNuber, setMonthNubmer] = useState(moment(day).month());
  const todayNumber = moment().format('D');
  const dayNumber = day.format('D');
  console.log(todayNumber);

  return (
    <>
      {numberOfCurrentMonth === monthNuber ? (
        <>
          {todayNumber === dayNumber ? (
            <ActiveDay>
              <Day>{day.format('D')}</Day>
            </ActiveDay>
          ) : (
            <Li>
              <Day>{day.format('D')}</Day>
            </Li>
          )}
        </>
      ) : (
        <NotActiveMonthLi>
          <Day>{day.format('D')}</Day>
        </NotActiveMonthLi>
      )}
    </>
  );
}
