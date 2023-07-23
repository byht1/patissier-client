import { ColumnHead, ColumnName, ColumnNameActive } from './Calendar.styled';

export function ColumnDayName({ name, calendarMode, activeDay, weekDay }) {
  return (
    <ColumnHead>
      {calendarMode === 'week' &&
      activeDay.format('YYYY') === weekDay.format('YYYY') &&
      activeDay.format('M') === weekDay.format('M') &&
      activeDay.format('D') === weekDay.format('D') ? (
        <ColumnNameActive>
          {name} <br />
          {calendarMode === 'week' ? weekDay.format('D') : null}
        </ColumnNameActive>
      ) : (
        <ColumnName>
          {name} <br />
          {calendarMode === 'week' ? weekDay.format('D') : null}
        </ColumnName>
      )}
    </ColumnHead>
  );
}
