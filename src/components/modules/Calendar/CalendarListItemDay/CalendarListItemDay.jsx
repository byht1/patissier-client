import moment from 'moment';
import {
  ActiveDay,
  Day,
  Li,
  NotActiveMonthLi,
} from './CalendarListItemDay.styled';
import { useState } from 'react';

export function CalendarListItemDay({
  day,
  numberOfChoosedMonth,
  numberOfChoosedYear,
}) {
  // eslint-disable-next-line
  const [monthNuber, setMonthNubmer] = useState(moment(day).month());
  const todayNumber = moment().format('D');
  const todayMonth = moment().month();
  const todayYear = moment().year();
  const dayNumber = day.format('D');

  return (
    <>
      {numberOfChoosedMonth === monthNuber ? (
        <>
          {todayNumber === dayNumber &&
          todayMonth === numberOfChoosedMonth &&
          todayYear === numberOfChoosedYear ? (
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
