import { OnInit } from '@angular/core';
export declare class UiFormErrorMsgTitleComponent implements OnInit {
    styleType: string;
    showIcon: boolean;
    constructor();
    ngOnInit(): void;
    iconControl(): "exclamation-circle" | "info-circle" | "check-circle" | "exclamation-triangle";
}
