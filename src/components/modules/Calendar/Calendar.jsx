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
  SwitchPanel,
  ModeSwitcher,
  ModeList,
  ModeListItem,
  ModeName,
  CurrentMode,
} from './Calendar.styled';
import { CalendarListItem } from './CalendarListItem/CalendarListItem';
import { useEffect, useState } from 'react';
moment.updateLocale('en', { week: { dow: 1 } });

export function Calendar() {
  const [calendarMode, setCalendarMode] = useState('month');
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.clone().format('MMM'));
  const [showModes, setShowModes] = useState(false);

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
    setDate(today.clone().format('Y')); // eslint-disable-next-line
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

  const showModesOperator = () => {
    switch (showModes) {
      case true:
        setShowModes(false);
        break;

      case false:
        setShowModes(true);
        break;

      default:
        break;
    }
  };

  const modeToggler = e => {
    switch (e.target.innerText) {
      case 'Mісяць':
        setCalendarMode('month');
        break;

      case 'Тиждень':
        setCalendarMode('week');
        break;

      default:
        break;
    }
  };

  //  week

  const [currentWeek, setCurrentWeek] = useState(moment().week());
  const weekDaysArr = [];
  const startWeekDay = moment().week(currentWeek).weekday(0);
  while (!startWeekDay.isAfter(moment().week(currentWeek).weekday(6))) {
    weekDaysArr.push(startWeekDay.clone());
    startWeekDay.add(1, 'day');
  }
  console.log(weekDaysArr);

  return (
    <>
      <ControlPanel>
        <SwitchPanel>
          <MonthCounterBtn id="monthDecrement" onClick={monthController}>
            <LeftIc />
          </MonthCounterBtn>
          <MonthName>{`${month} ${date}`}</MonthName>
          <MonthCounterBtn id="monthIncrement" onClick={monthController}>
            <RightIc />
          </MonthCounterBtn>
        </SwitchPanel>
        <ModeSwitcher onClick={showModesOperator}>
          <CurrentMode>
            {calendarMode === 'month' ? 'Місяць' : 'Тиждень'}
          </CurrentMode>
          {showModes ? (
            <ModeList onClick={modeToggler}>
              <ModeListItem>
                <ModeName modeName="month">Mісяць</ModeName>
              </ModeListItem>
              <ModeListItem>
                <ModeName modeName="week">Тиждень</ModeName>
              </ModeListItem>
            </ModeList>
          ) : null}
        </ModeSwitcher>
      </ControlPanel>
      <CalendarBox>
        <NamesOfColums>
          <ColumnHead>
            <ColumnName>
              ПН <br />
              {calendarMode === 'week' ? weekDaysArr[0].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              ВТ
              <br />
              {calendarMode === 'week' ? weekDaysArr[1].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              СР <br />
              {calendarMode === 'week' ? weekDaysArr[2].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              ЧТ <br />
              {calendarMode === 'week' ? weekDaysArr[3].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              ПТ <br />
              {calendarMode === 'week' ? weekDaysArr[4].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              СБ <br />
              {calendarMode === 'week' ? weekDaysArr[5].format('D') : null}
            </ColumnName>
          </ColumnHead>
          <ColumnHead>
            <ColumnName>
              НД <br />
              {calendarMode === 'week' ? weekDaysArr[6].format('D') : null}
            </ColumnName>
          </ColumnHead>
        </NamesOfColums>
        {calendarMode === 'month' ? (
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
        ) : null}
      </CalendarBox>
    </>
  );
}
