import { describe, it, expect } from 'vitest';
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } from '../dateUtils';
import { DATE_UNIT_TYPES } from '../constants';

describe("Date Utils", () => {
  
  it("Returns current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  it("Adds seconds to a given date", () => {
    const date = new Date(2023, 0, 1, 12, 0, 0);
    const result = add(date, 30, DATE_UNIT_TYPES.SECONDS);
    expect(result.getSeconds()).toBe(30);
  });

  it("Adds minutes to a given date", () => {
    const date = new Date(2023, 0, 1, 12, 0, 0);
    const result = add(date, 45, DATE_UNIT_TYPES.MINUTES);
    expect(result.getMinutes()).toBe(45);
  });

  it("Adds days to a given date", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 1, 25);
    const date3 = new Date(2023, 11, 31);

    expect(add(date1, 5, DATE_UNIT_TYPES.DAYS).getDate()).toBe(6);
    expect(add(date2, 10, DATE_UNIT_TYPES.DAYS).getDate()).toBe(7);
    expect(add(date3, 1, DATE_UNIT_TYPES.DAYS).getFullYear()).toBe(2024);
  });

  it("Adds months to a given date", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 10, 30);
    const date3 = new Date(2023, 5, 15);

    expect(add(date1, 2, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(2);
    expect(add(date2, 3, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(1);
    expect(add(date3, 6, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(11);
  });

  it("Adds years to a given date", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2000, 6, 10);
    const date3 = new Date(1999, 11, 31);
    
    expect(add(date1, 3, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(2026);
    expect(add(date2, 20, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(2020);
    expect(add(date3, 1, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(2000);
  });


  it("Correctly determines if a date is within range", () => {
    const date1 = new Date(2023, 5, 15);
    const from1 = new Date(2023, 5, 10);
    const to1 = new Date(2023, 5, 20);

    const date2 = new Date(2023, 5, 10);
    const from2 = new Date(2023, 4, 10);
    const to2 = new Date(2023, 6, 10);

    const date3 = new Date(2023, 5, 15);
    const from3 = new Date(2022, 5, 10);
    const to3 = new Date(2024, 5, 20);

    expect(isWithinRange(date1, from1, to1)).toBe(true);
    expect(isWithinRange(date2, from2, to2)).toBe(true);
    expect(isWithinRange(date3, from3, to3)).toBe(true);
  });

  it("Correctly determines if a date is before another date", () => {
    const date1 = new Date(2023, 5, 10);
    const compareDate1 = new Date(2023, 5, 15);

    const date2 = new Date(2003, 3, 4);
    const compareDate2 = new Date(4003, 3, 4);

    const date3 = new Date(1979, 10, 12);
    const compareDate3 = new Date(1979, 11, 12);

    expect(isDateBefore(date1, compareDate1)).toBe(true);
    expect(isDateBefore(date2, compareDate2)).toBe(true);
    expect(isDateBefore(date3, compareDate3)).toBe(true);
  });

  it("Correctly determines if two dates are the same day", () => {
    const date1 = new Date(2023, 5, 10);
    const date2 = new Date(2023, 5, 10);

    const date3 = new Date(2003, 3, 4);
    const date4 = new Date(2003, 3, 4);

    const date5 = new Date(1979, 10, 12);
    const date6 = new Date(1979, 10, 12);

    expect(isSameDay(date1, date2)).toBe(true);
    expect(isSameDay(date3, date4)).toBe(true);
    expect(isSameDay(date5, date6)).toBe(true);
  });
});
