import { OnInit } from '@angular/core';
import { DateObj } from './ui-calendar-year-month-date';
export declare class UiCalendarYearMonthComponent implements OnInit {
    monthFirstDate: Date;
    today: Date;
    weekDayList: string[];
    viewWeekDayList: string[];
    dateInMonth: DateObj[];
    constructor();
    ngOnInit(): void;
    setDateInMonth(): DateObj[];
}
