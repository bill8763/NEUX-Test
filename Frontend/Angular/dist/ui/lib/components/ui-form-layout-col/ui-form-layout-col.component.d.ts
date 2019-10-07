import { OnInit, EventEmitter } from '@angular/core';
export declare class UiFormLayoutColComponent implements OnInit {
    colPC: number;
    colNB: number;
    colPad: number;
    colMobile: number;
    hasAdd: boolean;
    hasRemove: boolean;
    translateText: string;
    isGroupCol: boolean;
    id: string;
    add: EventEmitter<any>;
    remove: EventEmitter<any>;
    private classColPc;
    private classColNb;
    private classColPad;
    private classColMobile;
    private classColGroup;
    constructor();
    classColRender: any;
    ngOnInit(): void;
    addHandler(): void;
    removeHandler(): void;
}
