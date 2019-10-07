import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiFormSwitcherComponent implements OnInit {
    private changeDector;
    nxValue: boolean;
    nxValueChange: EventEmitter<any>;
    labelTxt: string;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    private _isChecked;
    isChecked: boolean;
}
