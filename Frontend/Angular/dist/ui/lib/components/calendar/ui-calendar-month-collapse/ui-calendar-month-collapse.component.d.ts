import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { UiCalendarMonthComponent } from '../ui-calendar-month/ui-calendar-month.component';
import { showRule } from '@allianzSND/core';
export declare class UiCalendarMonthCollapseComponent extends UiCalendarMonthComponent {
    private _changeDetector;
    private showRule;
    statusOpenClose: string;
    yearFormat: string;
    monthFormat: string;
    dayFormat: string;
    weekFormat: string;
    _isCollapse: boolean;
    constructor(_changeDetector: ChangeDetectorRef, showRule: showRule);
    _markForCheck(): void;
    isCollapse: boolean;
    isCollapseStyle: boolean;
    isCollapseChange: EventEmitter<boolean>;
    onClickDate: EventEmitter<{}>;
    onSwitchMonth: EventEmitter<any>;
    goToToday(): void;
    prevClick(dateObj: any): void;
    nextClick(dateObj: any): void;
    toggleShowCalendar(): void;
    clickDate(dateObj: any): void;
    getMonth(date: any): number;
    convertDateWithoutYear(date: Date): string;
}
