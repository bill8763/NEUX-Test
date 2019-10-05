import { OnInit, EventEmitter } from '@angular/core';
export declare class UiCalendarYearComponent implements OnInit {
    today: Date;
    displayMonthFormat: string;
    weekStartsOn: number;
    translateMap: Map<string, string>;
    private _viewYear;
    viewYear: number;
    viewYearChange: EventEmitter<{}>;
    viewDate: Date;
    viewDateChange: EventEmitter<{}>;
    calendarYearMonthClicked: EventEmitter<{}>;
    weekDays: Array<string>;
    viewWeekDays: string[];
    monthInYear: Date[];
    constructor();
    ngOnInit(): void;
    reorderWeekDays(): boolean;
    setMonthInYear(): Date[];
    monthClicked(date: any): void;
}
