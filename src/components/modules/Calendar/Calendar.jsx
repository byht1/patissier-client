import moment from 'moment/moment';
import {
  CalendarBox,
  CalendarDisplayListDays,
  ColumnHead,
  ColumnName,
  ColumnNameActive,
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
  CalendarDisplayListHours,
} from './Calendar.styled';
import { CalendarListItemDay } from './CalendarListItemDay/CalendarListItemDay';
import { useEffect, useState } from 'react';
import { CalendarListItemHour } from './CalendarListItemHour/CalendarListItemHour';
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
    setCurrentWeek(today.week());
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

  const controller = e => {
    switch (e.currentTarget.id) {
      case 'monthDecrement':
        setToday(prev => prev.clone().subtract(1, 'month'));
        break;
      case 'monthIncrement':
        setToday(prev => prev.clone().add(1, 'month'));
        break;
      case 'weekDecrement':
        setToday(prev => prev.clone().subtract(7, 'days'));
        break;
      case 'weekIncrement':
        setToday(prev => prev.clone().add(7, 'days'));
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
  const activeDay = moment();
  const [currentWeek, setCurrentWeek] = useState(today.week());
  const weekDaysArr = [];
  const startWeekDay = moment().week(currentWeek).weekday(0);
  while (!startWeekDay.isAfter(moment().week(currentWeek).weekday(6))) {
    weekDaysArr.push(startWeekDay.clone());
    startWeekDay.add(1, 'day');
  }
  console.log(weekDaysArr);
  console.log(
    today.format('YYYY'),
    today.format('M'),
    today.format('D'),
    weekDaysArr[6].format('YYYY'),
    weekDaysArr[6].format('M'),
    weekDaysArr[6].format('D')
  );

  return (
    <>
      <ControlPanel>
        <SwitchPanel>
          {calendarMode === 'month' ? (
            <>
              <MonthCounterBtn id="monthDecrement" onClick={controller}>
                <LeftIc />
              </MonthCounterBtn>
              <MonthName>{`${month} ${date}`}</MonthName>
              <MonthCounterBtn id="monthIncrement" onClick={controller}>
                <RightIc />
              </MonthCounterBtn>
            </>
          ) : (
            <>
              <MonthCounterBtn id="weekDecrement" onClick={controller}>
                <LeftIc />
              </MonthCounterBtn>
              <MonthName>{`${month} ${date}`}</MonthName>
              <MonthCounterBtn id="weekIncrement" onClick={controller}>
                <RightIc />
              </MonthCounterBtn>
            </>
          )}
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
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[0].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[0].format('M') &&
            activeDay.format('D') === weekDaysArr[0].format('D') ? (
              <ColumnNameActive>
                ПН <br />
                {calendarMode === 'week' ? weekDaysArr[0].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                ПН <br />
                {calendarMode === 'week' ? weekDaysArr[0].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[1].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[1].format('M') &&
            activeDay.format('D') === weekDaysArr[1].format('D') ? (
              <ColumnNameActive>
                ВТ <br />
                {calendarMode === 'week' ? weekDaysArr[1].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                ВТ <br />
                {calendarMode === 'week' ? weekDaysArr[1].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[2].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[2].format('M') &&
            activeDay.format('D') === weekDaysArr[2].format('D') ? (
              <ColumnNameActive>
                СР <br />
                {calendarMode === 'week' ? weekDaysArr[2].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                СР <br />
                {calendarMode === 'week' ? weekDaysArr[2].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[3].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[3].format('M') &&
            activeDay.format('D') === weekDaysArr[3].format('D') ? (
              <ColumnNameActive>
                ЧТ <br />
                {calendarMode === 'week' ? weekDaysArr[3].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                ЧТ <br />
                {calendarMode === 'week' ? weekDaysArr[3].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[4].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[4].format('M') &&
            activeDay.format('D') === weekDaysArr[4].format('D') ? (
              <ColumnNameActive>
                ПТ <br />
                {calendarMode === 'week' ? weekDaysArr[4].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                ПТ <br />
                {calendarMode === 'week' ? weekDaysArr[4].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[5].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[5].format('M') &&
            activeDay.format('D') === weekDaysArr[5].format('D') ? (
              <ColumnNameActive>
                СБ <br />
                {calendarMode === 'week' ? weekDaysArr[5].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                СБ <br />
                {calendarMode === 'week' ? weekDaysArr[5].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
          <ColumnHead>
            {calendarMode === 'week' &&
            activeDay.format('YYYY') === weekDaysArr[6].format('YYYY') &&
            activeDay.format('M') === weekDaysArr[6].format('M') &&
            activeDay.format('D') === weekDaysArr[6].format('D') ? (
              <ColumnNameActive>
                НД <br />
                {calendarMode === 'week' ? weekDaysArr[6].format('D') : null}
              </ColumnNameActive>
            ) : (
              <ColumnName>
                НД <br />
                {calendarMode === 'week' ? weekDaysArr[6].format('D') : null}
              </ColumnName>
            )}
          </ColumnHead>
        </NamesOfColums>
        {calendarMode === 'month' ? (
          <CalendarDisplayListDays>
            {calendar.map(day => {
              return (
                <CalendarListItemDay
                  key={day.format('DDD')}
                  day={day}
                  numberOfChoosedMonth={today.month()}
                  numberOfChoosedYear={today.year()}
                />
              );
            })}
          </CalendarDisplayListDays>
        ) : (
          <CalendarDisplayListHours>
            <CalendarListItemHour />
          </CalendarDisplayListHours>
        )}
      </CalendarBox>
    </>
  );
}
