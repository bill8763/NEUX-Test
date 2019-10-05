import { OnInit, ChangeDetectorRef } from '@angular/core';
export declare class UiFormErrorMsgInfoComponent implements OnInit {
    private changeDetecor;
    styleType: string;
    messageShow: boolean;
    constructor(changeDetecor: ChangeDetectorRef);
    ngOnInit(): void;
    controlMsg(boolean: any): void;
    hideMsg(): void;
}
