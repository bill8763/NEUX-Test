import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
export declare class UiModalStyleCustComponent extends UiModalBaseComponent implements OnInit, OnDestroy {
    protected changeDector: ChangeDetectorRef;
    protected elementRef: ElementRef;
    protected modalManager: ModalManager;
    isPopupOpenChange: EventEmitter<{}>;
    close: EventEmitter<{}>;
    modalId: string;
    isContnetFull: boolean;
    typeBtn: string;
    isHasBtmBlock: boolean;
    isHeightFix: boolean;
    styleHeightFix: string;
    classContentFull: string;
    classModalOpen: string;
    classBtnFix: string;
    classBtmBlock: string;
    classContentFixStyle: string;
    isTooHeight: boolean;
    modalHeight: any;
    private _isPopupOpen;
    isPopupOpen: boolean;
    modalBlock: ElementRef;
    constructor(changeDector: ChangeDetectorRef, elementRef: ElementRef, modalManager: ModalManager);
    ngOnInit(): void;
    isOpenStatus(): "closed" | "open";
    isBgOpenStatus(): "bgOpen" | "bgClosed";
    closeHandler(): void;
}
