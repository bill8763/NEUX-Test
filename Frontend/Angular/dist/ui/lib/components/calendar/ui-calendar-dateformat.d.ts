import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
export declare class CustomDateFormatter extends CalendarDateFormatter {
    monthViewColumnHeader({ date, locale }: DateFormatterParams): string;
    monthViewTitle({ date, locale }: DateFormatterParams): string;
    weekViewColumnHeader({ date, locale }: DateFormatterParams): string;
    weekViewColumnSubHeader({ date, locale }: DateFormatterParams): string;
    weekViewHour({ date, locale }: DateFormatterParams): string;
    dayViewHour({ date, locale }: DateFormatterParams): string;
}
