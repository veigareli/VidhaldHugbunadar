import { addDays, addMonths, addWeeks, addYears, addSeconds, addMinutes, isBefore, isSameDay as isSameDayFn, isWithinInterval, getYear } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return getYear(new Date());
}

export function add(date: Date, number: number, type: DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS): Date {
  switch (type) {
    case DATE_UNIT_TYPES.SECONDS:
      return addSeconds(date, number);
    case DATE_UNIT_TYPES.MINUTES:
      return addMinutes(date, number);
    case DATE_UNIT_TYPES.DAYS:
      return addDays(date, number);
    case DATE_UNIT_TYPES.WEEKS:
      return addWeeks(date, number);
    case DATE_UNIT_TYPES.MONTHS:
      return addMonths(date, number);
    case DATE_UNIT_TYPES.YEARS:
      return addYears(date, number);
    default:
      throw new Error("Invalid date unit type");
  }
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return isSameDayFn(date, compareDate);
}
