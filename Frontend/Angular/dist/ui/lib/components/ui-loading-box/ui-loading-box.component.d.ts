import { OnInit, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
export declare class UiLoadingBoxComponent implements OnInit, OnDestroy {
    private _changeDector;
    constructor(_changeDector: ChangeDetectorRef);
    styleIsOpen: string;
    private _isOpen;
    isOpen: boolean;
    isOpenChange: EventEmitter<{}>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadingStyleUpdate(): void;
    openGlobalControl(): void;
    closeGlobalControl(): void;
}
