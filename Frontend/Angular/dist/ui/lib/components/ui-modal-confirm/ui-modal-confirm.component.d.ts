import { OnInit, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
export declare class UiModalConfirmComponent extends UiModalBaseComponent implements OnInit, OnDestroy {
    alertController: AlertController;
    private ModalManager;
    private changeDetector;
    title: string;
    message: string;
    cancelBtnText: string;
    confirmBtnText: string;
    backdropDismiss: boolean;
    hasCancelBtn: boolean;
    hasConfirmBtn: boolean;
    private _isPopupOpen;
    isPopupOpen: boolean;
    isPopupOpenChange: EventEmitter<{}>;
    onCancel: EventEmitter<{}>;
    onConfirm: EventEmitter<{}>;
    buttons: Array<any>;
    alert: any;
    constructor(alertController: AlertController, ModalManager: ModalManager, changeDetector: ChangeDetectorRef);
    presentAlertConfirm(): Promise<void>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeHandler(): void;
}
