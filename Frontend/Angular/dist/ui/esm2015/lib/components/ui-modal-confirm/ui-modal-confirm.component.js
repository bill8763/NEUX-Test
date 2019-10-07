/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
export class UiModalConfirmComponent extends UiModalBaseComponent {
    /**
     * @param {?} alertController
     * @param {?} ModalManager
     * @param {?} changeDetector
     */
    constructor(alertController, ModalManager, changeDetector) {
        super(ModalManager, changeDetector);
        this.alertController = alertController;
        this.ModalManager = ModalManager;
        this.changeDetector = changeDetector;
        this.cancelBtnText = 'Cancel';
        this.confirmBtnText = 'Confirm';
        this.backdropDismiss = false;
        this.hasCancelBtn = true;
        this.hasConfirmBtn = true;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onConfirm = new EventEmitter();
        this.buttons = [];
        this.alert = null;
    }
    /**
     * @return {?}
     */
    get isPopupOpen() {
        return this._isPopupOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isPopupOpen(val) {
        this._isPopupOpen = val;
        this.checkModalOpenStatus(this._isPopupOpen);
        if (val) {
            this.presentAlertConfirm();
        }
    }
    /**
     * @return {?}
     */
    presentAlertConfirm() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                header: this.title,
                message: this.message,
                backdropDismiss: this.backdropDismiss,
                buttons: this.buttons
            });
            yield this.alert.present();
        });
    } // end presentAlertConfirm function
    // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        if (this.hasCancelBtn) {
            this.buttons.push({
                text: this.cancelBtnText,
                role: 'cancel',
                cssClass: 'secondary',
                handler: (/**
                 * @return {?}
                 */
                () => {
                    this.onCancel.emit();
                    this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasCancelBtn
        if (this.hasConfirmBtn) {
            this.buttons.push({
                text: this.confirmBtnText,
                handler: (/**
                 * @return {?}
                 */
                () => {
                    // console.log('Confirm:', this.confirmBtnText);
                    this.onConfirm.emit();
                    this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasConfirmBtn
    } // end ngOnInit
    // end ngOnInit
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    closeHandler() {
        this._isPopupOpen = false;
        this.isPopupOpenChange.emit(false);
        this.alert.dismiss();
    }
}
UiModalConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-modal-confirm',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}::ng-deep .alert-head.sc-ion-alert-ios{padding-top:20px;padding-bottom:15px}::ng-deep .alert-title.sc-ion-alert-ios{margin-top:0;line-height:1.5rem}::ng-deep .alert-message.sc-ion-alert-ios{word-break:break-word;overflow-x:hidden}::ng-deep .alert-button.sc-ion-alert-ios:last-child{font-weight:400}"]
            }] }
];
UiModalConfirmComponent.ctorParameters = () => [
    { type: AlertController },
    { type: ModalManager },
    { type: ChangeDetectorRef }
];
UiModalConfirmComponent.propDecorators = {
    title: [{ type: Input }],
    message: [{ type: Input }],
    cancelBtnText: [{ type: Input }],
    confirmBtnText: [{ type: Input }],
    backdropDismiss: [{ type: Input }],
    hasCancelBtn: [{ type: Input }],
    hasConfirmBtn: [{ type: Input }],
    isPopupOpen: [{ type: Input }],
    isPopupOpenChange: [{ type: Output }],
    onCancel: [{ type: Output }],
    onConfirm: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiModalConfirmComponent.prototype.title;
    /** @type {?} */
    UiModalConfirmComponent.prototype.message;
    /** @type {?} */
    UiModalConfirmComponent.prototype.cancelBtnText;
    /** @type {?} */
    UiModalConfirmComponent.prototype.confirmBtnText;
    /** @type {?} */
    UiModalConfirmComponent.prototype.backdropDismiss;
    /** @type {?} */
    UiModalConfirmComponent.prototype.hasCancelBtn;
    /** @type {?} */
    UiModalConfirmComponent.prototype.hasConfirmBtn;
    /**
     * @type {?}
     * @private
     */
    UiModalConfirmComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalConfirmComponent.prototype.isPopupOpenChange;
    /** @type {?} */
    UiModalConfirmComponent.prototype.onCancel;
    /** @type {?} */
    UiModalConfirmComponent.prototype.onConfirm;
    /** @type {?} */
    UiModalConfirmComponent.prototype.buttons;
    /** @type {?} */
    UiModalConfirmComponent.prototype.alert;
    /** @type {?} */
    UiModalConfirmComponent.prototype.alertController;
    /**
     * @type {?}
     * @private
     */
    UiModalConfirmComponent.prototype.ModalManager;
    /**
     * @type {?}
     * @private
     */
    UiModalConfirmComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLWNvbmZpcm0vdWktbW9kYWwtY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBUXpFLE1BQU0sOEJBQStCLFNBQVEsb0JBQW9COzs7Ozs7SUFpQy9ELFlBQ1MsZUFBZ0MsRUFDL0IsWUFBMEIsRUFDMUIsY0FBaUM7UUFFekMsS0FBSyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUo3QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBaENsQyxrQkFBYSxHQUFHLFFBQVEsQ0FBQztRQUN6QixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUMzQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUV0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWFuQixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLFlB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Qzs7SUFDakMsK0NBQTZCOztJQUM3QixnREFBOEI7Ozs7O0lBRTlCLCtDQUE2Qjs7SUFhN0Isb0RBQWlEOztJQUVqRCwyQ0FBd0M7O0lBQ3hDLDRDQUF5Qzs7SUFFekMsMENBQXlCOztJQUV6Qix3Q0FBYTs7SUFJWCxrREFBdUM7Ozs7O0lBQ3ZDLCtDQUFrQzs7Ozs7SUFDbEMsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVWlNb2RhbEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi91aS1tb2RhbC1iYXNlL3VpLW1vZGFsLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsTWFuYWdlciB9IGZyb20gJy4uL3VpLW1vZGFsLWNvbnRyb2wvbW9kYWwtbWFuYWdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1vZGFsLWNvbmZpcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbW9kYWwtY29uZmlybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLWNvbmZpcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbENvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBVaU1vZGFsQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbEJ0blRleHQgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgY29uZmlybUJ0blRleHQgPSAnQ29uZmlybSc7XG4gIEBJbnB1dCgpIGJhY2tkcm9wRGlzbWlzcyA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNDYW5jZWxCdG4gPSB0cnVlO1xuICBASW5wdXQoKSBoYXNDb25maXJtQnRuID0gdHJ1ZTtcblxuICBwcml2YXRlIF9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgaXNQb3B1cE9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUG9wdXBPcGVuO1xuICB9XG4gIHNldCBpc1BvcHVwT3Blbih2YWwpIHtcbiAgICB0aGlzLl9pc1BvcHVwT3BlbiA9IHZhbDtcbiAgICB0aGlzLmNoZWNrTW9kYWxPcGVuU3RhdHVzKHRoaXMuX2lzUG9wdXBPcGVuKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnByZXNlbnRBbGVydENvbmZpcm0oKTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgaXNQb3B1cE9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Db25maXJtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGJ1dHRvbnM6IEFycmF5PGFueT4gPSBbXTtcblxuICBhbGVydCA9IG51bGw7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBNb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihNb2RhbE1hbmFnZXIsIGNoYW5nZURldGVjdG9yKTtcbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRBbGVydENvbmZpcm0oKSB7XG4gICAgdGhpcy5hbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IHRoaXMudGl0bGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBiYWNrZHJvcERpc21pc3M6IHRoaXMuYmFja2Ryb3BEaXNtaXNzLFxuICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0aGlzLmFsZXJ0LnByZXNlbnQoKTtcbiAgfSAvLyBlbmQgcHJlc2VudEFsZXJ0Q29uZmlybSBmdW5jdGlvblxuXG4gIC8vIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5oYXNDYW5jZWxCdG4pIHtcbiAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgdGV4dDogdGhpcy5jYW5jZWxCdG5UZXh0LFxuICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgY3NzQ2xhc3M6ICdzZWNvbmRhcnknLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBlbmQgaWY6IGhhc0NhbmNlbEJ0blxuXG4gICAgaWYgKHRoaXMuaGFzQ29uZmlybUJ0bikge1xuICAgICAgdGhpcy5idXR0b25zLnB1c2goe1xuICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpcm1CdG5UZXh0LFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbmZpcm06JywgdGhpcy5jb25maXJtQnRuVGV4dCk7XG4gICAgICAgICAgdGhpcy5vbkNvbmZpcm0uZW1pdCgpO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gZW5kIGlmOiBoYXNDb25maXJtQnRuXG4gIH0gLy8gZW5kIG5nT25Jbml0XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgY2xvc2VIYW5kbGVyKCkge1xuICAgIHRoaXMuX2lzUG9wdXBPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLmFsZXJ0LmRpc21pc3MoKTtcbiAgfVxuXG59XG4iXX0=