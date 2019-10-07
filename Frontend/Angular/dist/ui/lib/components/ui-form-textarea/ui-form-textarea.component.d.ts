import { OnInit, EventEmitter } from '@angular/core';
export declare class UiFormTextareaComponent implements OnInit {
    maxLength: number;
    value: any;
    placeholder: string;
    onKeypress: EventEmitter<any>;
    height: string;
    id: string;
    nxValue: any;
    nxValueChange: EventEmitter<any>;
    result: any;
    constructor();
    ngOnInit(): void;
    onKeyDown(event: any): boolean;
    onKeyUp(event: any): void;
}
