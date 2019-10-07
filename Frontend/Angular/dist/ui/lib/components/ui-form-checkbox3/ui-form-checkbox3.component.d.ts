import { OnInit, EventEmitter } from '@angular/core';
export declare class UiFormCheckbox3Component implements OnInit {
    nxValue: any;
    nxValueChange: EventEmitter<{}>;
    onClick: EventEmitter<{}>;
    isDisable: boolean;
    styleWeight: string;
    styleAlign: string;
    classesStyle: string;
    private _checked;
    id: string;
    checked: boolean;
    private generateId;
    constructor();
    ngOnInit(): void;
}
