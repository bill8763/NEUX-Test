import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UIMainSideMenuComponent implements OnInit {
    private changeDetector;
    windowWidth: number;
    title: string;
    isShow: boolean;
    isShowChange: EventEmitter<{}>;
    private _isShow;
    constructor(changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    onResize(event: any): void;
    closeMain(): void;
}
