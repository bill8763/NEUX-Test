import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiTabPageComponent implements OnInit {
    private changeDector;
    tabSwitchFirst: string;
    tabSwitchSecond: string;
    openTab: number;
    onTabChildClick: EventEmitter<{}>;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    handleActive(): void;
}
