import moment from 'moment/moment';
import {
  CalendarBox,
  CalendarDaysList,
  ColumnHead,
  ColumnName,
  NamesOfColums,
} from './Calendar.styled';
import { CalendarListItem } from './CalendarListItem/CalendarListItem';
moment.updateLocale('en', { week: { dow: 1 } });

export function Calendar() {
  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }
  return (
    <CalendarBox>
      <NamesOfColums>
        <ColumnHead>
          <ColumnName>ПН</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>ВТ</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>СР</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>ЧТ</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>ПТ</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>СБ</ColumnName>
        </ColumnHead>
        <ColumnHead>
          <ColumnName>НД</ColumnName>
        </ColumnHead>
      </NamesOfColums>
      <CalendarDaysList>
        {calendar.map(day => {
          return <CalendarListItem key={day.format('DDD')} day={day} />;
        })}
      </CalendarDaysList>
    </CalendarBox>
  );
}
