import moment from 'moment/moment';

// controller - мутує moment() за допомогою стрілок перемикачів які в залежності від вибраного режиму "month" "week" на відповідний період 1 місяць чи неділю вперед або назад

export const controller = (e, setToday) => {
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

//showModesOperator в залежності від "true"/"false" показує випадашку з можливостю кліка для зміни режиму відобреження календая по дням(місяць) чи неділя(по годинно)

export const showModesOperator = (showModes, setShowModes) => {
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

// monthNameTranslation - виводить назву місяця котрий зараз вибраний в календарі в не залежності від вибраного режиму роботи "month"/"week"

export const monthNameTranslation = (month, setMonth) => {
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

// modeToggler - перемикач режиму роботи календаря "month"/"week"

export const modeToggler = (e, setCalendarMode) => {
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

// calendarFilling наповнення масиву під назвою calendar для відобрашення сітки днів при вибранному режимі місяць

export const calendarFilling = (startDay, endDay, setCalendar) => {
  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  setCalendar(calendar);
};

// weekDaysArrFilling наповнення масиву під назвою weekDaysArr для відобрашення сітки днів тижня при вибранному режимі тиждень

export const weekDaysArrFilling = (currentWeek, setWeekDaysArr) => {
  const weekDaysArr = [];
  const startWeekDay = moment().week(currentWeek).weekday(0);

  while (!startWeekDay.isAfter(moment().week(currentWeek).weekday(6))) {
    weekDaysArr.push(startWeekDay.clone());
    startWeekDay.add(1, 'day');
  }

  setWeekDaysArr(weekDaysArr);
};
