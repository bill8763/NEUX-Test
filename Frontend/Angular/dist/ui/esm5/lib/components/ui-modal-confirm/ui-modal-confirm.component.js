/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
var UiModalConfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiModalConfirmComponent, _super);
    function UiModalConfirmComponent(alertController, ModalManager, changeDetector) {
        var _this = _super.call(this, ModalManager, changeDetector) || this;
        _this.alertController = alertController;
        _this.ModalManager = ModalManager;
        _this.changeDetector = changeDetector;
        _this.cancelBtnText = 'Cancel';
        _this.confirmBtnText = 'Confirm';
        _this.backdropDismiss = false;
        _this.hasCancelBtn = true;
        _this.hasConfirmBtn = true;
        _this._isPopupOpen = false;
        _this.isPopupOpenChange = new EventEmitter();
        _this.onCancel = new EventEmitter();
        _this.onConfirm = new EventEmitter();
        _this.buttons = [];
        _this.alert = null;
        return _this;
    }
    Object.defineProperty(UiModalConfirmComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isPopupOpen = val;
            this.checkModalOpenStatus(this._isPopupOpen);
            if (val) {
                this.presentAlertConfirm();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.presentAlertConfirm = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: this.title,
                                message: this.message,
                                backdropDismiss: this.backdropDismiss,
                                buttons: this.buttons
                            })];
                    case 1:
                        _a.alert = _b.sent();
                        return [4 /*yield*/, this.alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }; // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.ngOnInit = 
    // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasCancelBtn) {
            this.buttons.push({
                text: this.cancelBtnText,
                role: 'cancel',
                cssClass: 'secondary',
                handler: (/**
                 * @return {?}
                 */
                function () {
                    _this.onCancel.emit();
                    _this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasCancelBtn
        if (this.hasConfirmBtn) {
            this.buttons.push({
                text: this.confirmBtnText,
                handler: (/**
                 * @return {?}
                 */
                function () {
                    // console.log('Confirm:', this.confirmBtnText);
                    _this.onConfirm.emit();
                    _this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasConfirmBtn
    }; // end ngOnInit
    // end ngOnInit
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.ngOnDestroy = 
    // end ngOnInit
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this._isPopupOpen = false;
        this.isPopupOpenChange.emit(false);
        this.alert.dismiss();
    };
    UiModalConfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-confirm',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}::ng-deep .alert-head.sc-ion-alert-ios{padding-top:20px;padding-bottom:15px}::ng-deep .alert-title.sc-ion-alert-ios{margin-top:0;line-height:1.5rem}::ng-deep .alert-message.sc-ion-alert-ios{word-break:break-word;overflow-x:hidden}::ng-deep .alert-button.sc-ion-alert-ios:last-child{font-weight:400}"]
                }] }
    ];
    UiModalConfirmComponent.ctorParameters = function () { return [
        { type: AlertController },
        { type: ModalManager },
        { type: ChangeDetectorRef }
    ]; };
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
    return UiModalConfirmComponent;
}(UiModalBaseComponent));
export { UiModalConfirmComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLWNvbmZpcm0vdWktbW9kYWwtY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QixLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXpFO0lBTTZDLG1EQUFvQjtJQWlDL0QsaUNBQ1MsZUFBZ0MsRUFDL0IsWUFBMEIsRUFDMUIsY0FBaUM7UUFIM0MsWUFLRSxrQkFBTSxZQUFZLEVBQUUsY0FBYyxDQUFDLFNBQ3BDO1FBTFEscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQWhDbEMsbUJBQWEsR0FBRyxRQUFRLENBQUM7UUFDekIsb0JBQWMsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFFdEIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFhbkIsdUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2QyxjQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QyxhQUFPLEdBQWUsRUFBRSxD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TUFBTTs0QkFDTixNQUFNOztJQWtFVCw4QkFBQztDQUFBLEFBbEdELENBTTZDLG9CQUFvQixHQTRGaEU7U0E1RlksdUJBQXVCOzs7SUFFbEMsd0NBQXVCOztJQUN2QiwwQ0FBeUI7O0lBQ3pCLGdEQUFrQzs7SUFDbEMsaURBQW9DOztJQUNwQyxrREFBaUM7O0lBQ2pDLCtDQUE2Qjs7SUFDN0IsZ0RBQThCOzs7OztJQUU5QiwrQ0FBNkI7O0lBYTdCLG9EQUFpRDs7SUFFakQsMkNBQXdDOztJQUN4Qyw0Q0FBeUM7O0lBRXpDLDBDQUF5Qjs7SUFFekIsd0NBQWE7O0lBSVgsa0RBQXVDOzs7OztJQUN2QywrQ0FBa0M7Ozs7O0lBQ2xDLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFVpTW9kYWxCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktbW9kYWwtYmFzZS91aS1tb2RhbC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbE1hbmFnZXIgfSBmcm9tICcuLi91aS1tb2RhbC1jb250cm9sL21vZGFsLW1hbmFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tb2RhbC1jb25maXJtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1vZGFsLWNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1tb2RhbC1jb25maXJtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kYWxDb25maXJtQ29tcG9uZW50IGV4dGVuZHMgVWlNb2RhbEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxCdG5UZXh0ID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNvbmZpcm1CdG5UZXh0ID0gJ0NvbmZpcm0nO1xuICBASW5wdXQoKSBiYWNrZHJvcERpc21pc3MgPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzQ2FuY2VsQnRuID0gdHJ1ZTtcbiAgQElucHV0KCkgaGFzQ29uZmlybUJ0biA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzUG9wdXBPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbjtcbiAgfVxuICBzZXQgaXNQb3B1cE9wZW4odmFsKSB7XG4gICAgdGhpcy5faXNQb3B1cE9wZW4gPSB2YWw7XG4gICAgdGhpcy5jaGVja01vZGFsT3BlblN0YXR1cyh0aGlzLl9pc1BvcHVwT3Blbik7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5wcmVzZW50QWxlcnRDb25maXJtKCk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIGlzUG9wdXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBidXR0b25zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgYWxlcnQgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgTW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoTW9kYWxNYW5hZ2VyLCBjaGFuZ2VEZXRlY3Rvcik7XG4gIH1cblxuICBhc3luYyBwcmVzZW50QWxlcnRDb25maXJtKCkge1xuICAgIHRoaXMuYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiB0aGlzLnRpdGxlLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0aGlzLmJhY2tkcm9wRGlzbWlzcyxcbiAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9uc1xuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy5hbGVydC5wcmVzZW50KCk7XG4gIH0gLy8gZW5kIHByZXNlbnRBbGVydENvbmZpcm0gZnVuY3Rpb25cblxuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG5cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgaWYgKHRoaXMuaGFzQ2FuY2VsQnRuKSB7XG4gICAgICB0aGlzLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsQnRuVGV4dCxcbiAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgIGNzc0NsYXNzOiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gZW5kIGlmOiBoYXNDYW5jZWxCdG5cblxuICAgIGlmICh0aGlzLmhhc0NvbmZpcm1CdG4pIHtcbiAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgdGV4dDogdGhpcy5jb25maXJtQnRuVGV4dCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb25maXJtOicsIHRoaXMuY29uZmlybUJ0blRleHQpO1xuICAgICAgICAgIHRoaXMub25Db25maXJtLmVtaXQoKTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIGVuZCBpZjogaGFzQ29uZmlybUJ0blxuICB9IC8vIGVuZCBuZ09uSW5pdFxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGNsb3NlSGFuZGxlcigpIHtcbiAgICB0aGlzLl9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgdGhpcy5hbGVydC5kaXNtaXNzKCk7XG4gIH1cblxufVxuIl19