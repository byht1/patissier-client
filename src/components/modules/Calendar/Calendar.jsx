import moment from 'moment/moment';
import {
  CalendarBox,
  CalendarDaysList,
  ColumnHead,
  ColumnName,
  NamesOfColums,
  ControlPanel,
  LeftIc,
  RightIc,
  MonthCounterBtn,
  MonthName,
} from './Calendar.styled';
import { CalendarListItem } from './CalendarListItem/CalendarListItem';
import { useEffect, useState } from 'react';
moment.updateLocale('en', { week: { dow: 1 } });

export function Calendar() {
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.clone().format('MMM'));
  const [startDay, setStartDay] = useState(
    today.clone().startOf('month').startOf('week')
  );
  const [endDay, setEndDay] = useState(
    today.clone().endOf('month').endOf('week')
  );
  const [date, setDate] = useState(today.clone().format('Y'));

  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  useEffect(() => {
    monthNameTranslation(month);
  });

  useEffect(() => {
    monthNameTranslation(month);
    setMonth(today.clone().format('MMM'));
    setStartDay(today.clone().startOf('month').startOf('week'));
    setEndDay(today.clone().endOf('month').endOf('week'));
    setDate(today.clone().format('Y'));
    console.log('today===', today.format('M'));
  }, [today]);

  const monthNameTranslation = month => {
    switch (month) {
      case 'Jan':
        setMonth('Січень');
        break;
      case 'Feb':
        setMonth('Лютий');
        break;
      case 'Mar':
        setMonth('Березень');
        break;
      case 'Apr':
        setMonth('Квітень');
        break;
      case 'May':
        setMonth('Травень');
        break;
      case 'Jun':
        setMonth('Червень');
        break;
      case 'Jul':
        setMonth('Липень');
        break;
      case 'Aug':
        setMonth('Серпень');
        break;
      case 'Sep':
        setMonth('Вересень');
        break;
      case 'Oct':
        setMonth('Жовтень');
        break;
      case 'Nov':
        setMonth('Листопад');
        break;
      case 'Dec':
        setMonth('Грудень');
        break;

      default:
        break;
    }
  };

  const monthController = e => {
    switch (e.currentTarget.id) {
      case 'monthDecrement':
        setToday(prev => prev.clone().subtract(1, 'month'));
        break;
      case 'monthIncrement':
        setToday(prev => prev.clone().add(1, 'month'));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <ControlPanel>
        <MonthCounterBtn id="monthDecrement" onClick={monthController}>
          <LeftIc />
        </MonthCounterBtn>
        <MonthName>{`${month} ${date}`}</MonthName>
        <MonthCounterBtn id="monthIncrement" onClick={monthController}>
          <RightIc />
        </MonthCounterBtn>
      </ControlPanel>
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
            return (
              <CalendarListItem
                key={day.format('DDD')}
                day={day}
                numberOfChoosedMonth={today.month()}
                numberOfChoosedYear={today.year()}
              />
            );
          })}
        </CalendarDaysList>
      </CalendarBox>
    </>
  );
}
