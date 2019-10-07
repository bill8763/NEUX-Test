import { OnInit, EventEmitter } from '@angular/core';
export declare class UiFormCheckbox2Component implements OnInit {
    nxValue: any;
    nxValueChange: EventEmitter<{}>;
    onClick: EventEmitter<{}>;
    isDisable: boolean;
    private _isCheckSingle;
    isCheckSingle: boolean;
    checkedValue: boolean;
    id: string;
    classCheckboxSingle: string;
    checked: boolean;
    private generateId;
    constructor();
    ngOnInit(): void;
}
