import { OnInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
export declare class UiModalBaseComponent implements OnInit, OnDestroy {
    protected modalManager: ModalManager;
    protected changeDector: ChangeDetectorRef;
    private _modalID;
    modalBlock: ElementRef;
    isScrollToTop: boolean;
    isContnetFull: boolean;
    isMobileBtmBtnFix: boolean;
    isModalBtmHasSpace: boolean;
    classMobileBtnNoFix: string;
    windowWidth: number;
    isShowFixBtmTemp: boolean;
    styleModelBtm: string;
    classContentFull: string;
    classModalFix: string;
    constructor(modalManager: ModalManager, changeDector: ChangeDetectorRef);
    renderBtmSpace(): void;
    checkModalOpenStatus(isPopupOpenStatus: any): void;
    ModalOpenGlobalControl(): void;
    ModalCloseGlobalControl(): void;
    onresize(event: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeHandler(): void;
}
