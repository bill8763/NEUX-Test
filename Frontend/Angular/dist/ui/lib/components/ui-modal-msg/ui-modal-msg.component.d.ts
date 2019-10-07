import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiModalMsgComponent implements OnInit {
    private changeDetector;
    constructor(changeDetector: ChangeDetectorRef);
    alertInit: boolean;
    private _isPopupOpen;
    isPopupOpen: boolean;
    isPopupOpenChange: EventEmitter<{}>;
    ngOnInit(): void;
    autoDisappear(): void;
}
