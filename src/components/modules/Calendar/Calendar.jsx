import moment from 'moment/moment';

import {
  controller,
  showModesOperator,
  monthNameTranslation,
  modeToggler,
  calendarFilling,
  weekDaysArrFilling,
} from './lib/opreators';

import {
  CalendarBox,
  CalendarDisplayListDays,
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
import { ColumnDayName } from './ColumnDayName';

moment.updateLocale('en', { week: { dow: 1 } }); // установлює параметри щоб тиждень починався з понеділка (дефолтні налаштування починається з неділі)

export function Calendar() {
  const [calendarMode, setCalendarMode] = useState('month');
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.clone().format('MMM'));
  const [showModes, setShowModes] = useState(false);
  const [calendar, setCalendar] = useState([]);

  const [startDay, setStartDay] = useState(
    today.clone().startOf('month').startOf('week')
  );

  const [endDay, setEndDay] = useState(
    today.clone().endOf('month').endOf('week')
  );

  const [date, setDate] = useState(today.clone().format('Y'));
  // eslint-disable-next-line
  useEffect(() => {
    monthNameTranslation(month, setMonth);
    calendarFilling(startDay, endDay, setCalendar);
    weekDaysArrFilling(currentWeek, setWeekDaysArr);
    console.log(weekDaysArr); // eslint-disable-next-line
  }, [startDay]);

  useEffect(() => {
    setMonth(today.clone().format('MMM'));
    setStartDay(today.clone().startOf('month').startOf('week'));
    setEndDay(today.clone().endOf('month').endOf('week'));

    setDate(today.clone().format('Y'));
    setCurrentWeek(today.week()); // eslint-disable-next-line
  }, [today]);

  //  week
  const activeDay = moment();
  const [currentWeek, setCurrentWeek] = useState(today.week());
  const [weekDaysArr, setWeekDaysArr] = useState([]);

  return (
    <>
      <ControlPanel>
        <SwitchPanel>
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
              <MonthName>{`${month} ${date}`}</MonthName>
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
              <MonthName>{`${month} ${date}`}</MonthName>
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
        </SwitchPanel>
        <ModeSwitcher
          onClick={() => {
            showModesOperator(showModes, setShowModes);
          }}
        >
          <CurrentMode>
            {calendarMode === 'month' ? 'Місяць' : 'Тиждень'}
          </CurrentMode>
          {showModes ? (
            <ModeList
              onClick={e => {
                modeToggler(e, setCalendarMode);
              }}
            >
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
          <>
            <ColumnDayName
              name={'ПН'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[0]}
            />
            <ColumnDayName
              name={'ВТ'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[1]}
            />
            <ColumnDayName
              name={'СР'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[2]}
            />
            <ColumnDayName
              name={'ЧТ'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[3]}
            />
            <ColumnDayName
              name={'ПТ'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[4]}
            />
            <ColumnDayName
              name={'СБ'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[5]}
            />
            <ColumnDayName
              name={'НД'}
              calendarMode={calendarMode}
              activeDay={activeDay}
              weekDay={weekDaysArr[6]}
            />
          </>
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
      </CalendarBox>
    </>
  );
}
