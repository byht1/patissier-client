import moment from 'moment/moment';

import {
  controller,
  showModesOperator,
  monthNameTranslation,
  modeToggler,
  calendarFilling,
  weekDaysArrFilling,
  daysOfTheWeekTranslation,
  nameSeterDayOfTheWeek,
} from './lib/opreators';

import {
  Display,
  CalendarDisplayListDays,
  NamesOfColums,
  ControlPanel,
  LeftIc,
  RightIc,
  MonthCounterBtn,
  MonthName,
  CalendarManipulate,
  ModeSwitcher,
  ModeList,
  ModeListItem,
  ModeName,
  CurrentMode,
  CalendarDisplayListHours,
  OpenArrowIc,
  CloseArrowIc,
} from './Calendar.styled';

import { CalendarListItemDay } from './CalendarListItemDay/CalendarListItemDay';
import { useEffect, useState } from 'react';
import { CalendarListItemHour } from './CalendarListItemHour/CalendarListItemHour';
import { ColumnDayName } from './ColumnDayName';

moment.updateLocale('en', { week: { dow: 1 } }); // установлює параметри щоб тиждень починався з понеділка (дефолтні налаштування починається з неділі)

export function Calendar() {
  const [calendarMode, setCalendarMode] = useState('month'); // Вибраний режим роботи календарю в залежності від його значення будується інформативна панель відображення дисплею
  const [today, setToday] = useState(moment()); // Головний экземпляр моменту що мутується на оснві якого побудована логіка та ведуться обчислення всього календю в не залежності від вибраного режиму "місяць"/"тиждень"
  const [month, setMonth] = useState(today.clone().format('MMM')); // Забирає з моменту назву місяцю для відображення
  const [showModes, setShowModes] = useState(false); // Переключає випадашку зміни режиму роботи календаря "місяць"/"тиждень"
  const [calendar, setCalendar] = useState([]); // Масив з днів для відображення сітки днів

  const [startDay, setStartDay] = useState(
    today.clone().startOf('month').startOf('week')
  ); // клон моменту початкова дата тижню з якого починається новий місяць (відправна точка наповнення масиву днів данними)

  const [endDay, setEndDay] = useState(
    today.clone().endOf('month').endOf('week')
  ); // клон моменту кінцева дата тижню в якому закінчується місяць та з якого починається новий місяць (кінцева точка наповнення масиву днів данними)

  const [year, setYear] = useState(today.clone().format('Y')); // витягує з моменту рік для відображення
  // eslint-disable-next-line
  useEffect(() => {
    monthNameTranslation(month, setMonth);
    calendarFilling(startDay, endDay, setCalendar);
    weekDaysArrFilling(today, setWeekDaysArr); // eslint-disable-next-line
  }, [startDay]);

  useEffect(() => {
    setMonth(today.clone().format('MMM'));
    setStartDay(today.clone().startOf('month').startOf('week'));
    setEndDay(today.clone().endOf('month').endOf('week'));

    setYear(today.clone().format('Y')); // eslint-disable-next-line
  }, [today]);

  //  week
  const activeDay = moment(); // повертає сьогоднішній день (необхідний для виділення в поточній неділі активного дня)
  const [weekDaysArr, setWeekDaysArr] = useState([]); // Масив данних для режиму тиждень (буде необхідним для привязки функціоналу сайту(відображення активних курсів і т.д.))

  return (
    <>
      <ControlPanel>
        <CalendarManipulate>
          {calendarMode === 'month' ? (
            <>
              <MonthCounterBtn
                id="monthDecrement"
                onClick={e => {
                  controller(e, setToday);
                }}
              >
                <LeftIc />
              </MonthCounterBtn>
              <MonthName>{`${month} ${year}`}</MonthName>
              <MonthCounterBtn
                id="monthIncrement"
                onClick={e => {
                  controller(e, setToday);
                }}
              >
                <RightIc />
              </MonthCounterBtn>
            </>
          ) : (
            <>
              <MonthCounterBtn
                id="weekDecrement"
                onClick={e => {
                  controller(e, setToday);
                }}
              >
                <LeftIc />
              </MonthCounterBtn>
              <MonthName>{`${month} ${year}`}</MonthName>
              <MonthCounterBtn
                id="weekIncrement"
                onClick={e => {
                  controller(e, setToday);
                }}
              >
                <RightIc />
              </MonthCounterBtn>
            </>
          )}
        </CalendarManipulate>
        <ModeSwitcher
          onClick={() => {
            showModesOperator(showModes, setShowModes);
          }}
        >
          <CurrentMode>
            {calendarMode === 'month' ? 'Місяць' : 'Тиждень'}
            {showModes ? <CloseArrowIc /> : <OpenArrowIc />}
          </CurrentMode>
          {showModes ? (
            <ModeList
              onClick={e => {
                modeToggler(e, setCalendarMode);
              }}
            >
              {calendarMode === 'week' ? (
                <ModeListItem>
                  <ModeName modeName="month">Mісяць</ModeName>
                </ModeListItem>
              ) : null}
              {calendarMode === 'month' ? (
                <ModeListItem>
                  <ModeName modeName="week">Тиждень</ModeName>
                </ModeListItem>
              ) : null}
            </ModeList>
          ) : null}
        </ModeSwitcher>
      </ControlPanel>
      <Display>
        <NamesOfColums>
          {weekDaysArr.length !== 0
            ? weekDaysArr.map(day => {
                return (
                  <ColumnDayName
                    key={day.format('dd')}
                    name={daysOfTheWeekTranslation(
                      day.format('dd'),
                      nameSeterDayOfTheWeek
                    )}
                    calendarMode={calendarMode}
                    activeDay={activeDay}
                    weekDay={day}
                  />
                );
              })
            : null}
        </NamesOfColums>
        {calendarMode === 'month' ? (
          <CalendarDisplayListDays>
            {calendar.length !== 0
              ? calendar.map(day => {
                  return (
                    <CalendarListItemDay
                      key={day.format('DDD')}
                      day={day}
                      numberOfChoosedMonth={today.month()}
                      numberOfChoosedYear={today.year()}
                    />
                  );
                })
              : null}
          </CalendarDisplayListDays>
        ) : (
          <CalendarDisplayListHours>
            <CalendarListItemHour />
          </CalendarDisplayListHours>
        )}
      </Display>
    </>
  );
}
