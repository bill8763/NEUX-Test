import { OnInit, AfterViewInit, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiModalStyleFeedbackComponent implements OnInit, AfterViewInit {
    private changeDector;
    hasAutoDisappear: boolean;
    isPopupOpen: boolean;
    isPopupOpenChange: EventEmitter<boolean>;
    private _isPopupOpen;
    modalBlockFeedback: ElementRef;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    autoDisappear(): void;
}
