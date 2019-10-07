import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiFormSearchComponent implements OnInit {
    private changeDetecor;
    name: string;
    placeholder: string;
    isDisable: boolean;
    nxValue: any;
    nxValueChange: EventEmitter<any>;
    private _value;
    value: string;
    constructor(changeDetecor: ChangeDetectorRef);
    ngOnInit(): void;
}
