import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class UiModalStyleMenuComponent implements OnInit {
    private changeDector;
    _isPopupOpen: boolean;
    isPopupOpen: boolean;
    isPopupOpenChange: EventEmitter<{}>;
    isFull: boolean;
    fadePos: string;
    outerMinusHeight: number;
    close: EventEmitter<{}>;
    containerBlock: ElementRef;
    contentBlock: ElementRef;
    headerBlock: ElementRef;
    detailBlock: ElementRef;
    btmBlock: ElementRef;
    windowHeight: number;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    onResize(event: any): void;
    closeHandler(): void;
}
