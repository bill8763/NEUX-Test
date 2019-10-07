import { OnInit } from '@angular/core';
export declare class UiFormErrorMsgListComponent implements OnInit {
    styleType: string;
    showIcon: boolean;
    constructor();
    ngOnInit(): void;
    iconControl(): "close" | "check";
}
