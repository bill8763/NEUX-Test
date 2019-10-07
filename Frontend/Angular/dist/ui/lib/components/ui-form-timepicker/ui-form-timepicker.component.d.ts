import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare const MY_NATIVE_FORMATS: {
    fullPickerInput: {
        year: string;
        month: string;
        day: string;
        hour: string;
        minute: string;
        hour12: boolean;
    };
    datePickerInput: {
        year: string;
        month: string;
        day: string;
        hour12: boolean;
    };
    timePickerInput: {
        hour: string;
        minute: string;
        hour12: boolean;
    };
    monthYearLabel: {
        year: string;
        month: string;
    };
    dateA11yLabel: {
        year: string;
        month: string;
        day: string;
    };
    monthYearA11yLabel: {
        year: string;
        month: string;
    };
};
export declare class UiFormTimepickerComponent implements OnInit {
    private elementRef;
    private changeDetecor;
    nxValue: any;
    nxValueChange: EventEmitter<any>;
    blur: EventEmitter<{}>;
    private _time;
    showTime: string;
    time: Date;
    classError: string;
    inputStatus: boolean;
    dateTime: Date;
    isError: boolean;
    isErrorChange: EventEmitter<any>;
    afterTimepickerOpen: EventEmitter<{}>;
    afterTimepickerClose: EventEmitter<{}>;
    constructor(elementRef: ElementRef, changeDetecor: ChangeDetectorRef);
    ngOnInit(): void;
    afterOpen(): void;
    afterClose(): void;
    onFocus(): void;
    onBlur(): void;
}
