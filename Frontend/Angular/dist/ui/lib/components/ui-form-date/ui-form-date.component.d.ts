import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { showRule, DateUtils } from '@allianzSND/core';
export declare class UiFormDateComponent implements OnInit {
    private changeDetecor;
    private elementRef;
    private dateUtils;
    private showRule;
    title: string;
    private _isDisable;
    isDisable: boolean;
    nxValueChange: EventEmitter<Date>;
    max: Date;
    private _nxValue;
    nxValue: Date;
    classError: string;
    classDisable: string;
    inputStatus: boolean;
    inputDate: any;
    isFocus: boolean;
    showDate: string;
    displayDate: string;
    maxDate: string;
    isError: boolean;
    isErrorChange: EventEmitter<any>;
    afterDatepickerOpen: EventEmitter<{}>;
    afterDatepickerClose: EventEmitter<{}>;
    input: ElementRef;
    inputEle: ElementRef;
    containerBlock: ElementRef;
    constructor(changeDetecor: ChangeDetectorRef, elementRef: ElementRef, dateUtils: DateUtils, showRule: showRule);
    ngOnInit(): void;
    dateChange(changeDateStr: any): void;
    convertShowDateToDate(): void;
    inputFocus(): void;
    convertDateToString(date: Date): string;
    convertDateByFormat(date: Date): string;
    checkMaxDate(): void;
}
