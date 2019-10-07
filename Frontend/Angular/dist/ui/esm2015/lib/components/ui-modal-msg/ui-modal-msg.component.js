/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
export class UiModalMsgComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.alertInit = false;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
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
        if (this.isPopupOpen != val && val) {
            this.alertInit = true;
            this.autoDisappear();
            this._isPopupOpen = val;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    autoDisappear() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._isPopupOpen = false;
            this.isPopupOpenChange.emit(this.isPopupOpen);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.alertInit = false;
                this.changeDetector.detectChanges();
            }), 2000);
        }), 1600);
    }
}
UiModalMsgComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-modal-msg',
                template: "<div class=\"alert-wrapper\" ng-init=\"alertInit\" [ngClass]=\"[(alertInit && isPopupOpen? 'getIn animating':'getOut animating'),(alertInit? '':'hide')]\">\n  <div class=\"alert-body\">\n    <span>\n      <ng-content></ng-content>\n    </span>\n  </div>\n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.alert-wrapper{width:100%;position:fixed;z-index:9999;top:20px;left:0;right:0;margin:0 auto;padding:17px 33px;text-align:center;max-width:411px;background-color:rgba(0,0,0,.55);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1s;animation-duration:1s}.alert-wrapper.hide{display:none}.alert-wrapper.getIn{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.alert-wrapper.getOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-delay:1s;animation-delay:1s}@media screen and (max-width:1023px){.alert-wrapper{top:0}}.alert-wrapper .alert-body span{color:#fff;font-size:.875rem}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"]
            }] }
];
UiModalMsgComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiModalMsgComponent.propDecorators = {
    isPopupOpen: [{ type: Input }],
    isPopupOpenChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiModalMsgComponent.prototype.alertInit;
    /**
     * @type {?}
     * @private
     */
    UiModalMsgComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalMsgComponent.prototype.isPopupOpenChange;
    /**
     * @type {?}
     * @private
     */
    UiModalMsgComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtbXNnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktbW9kYWwtbXNnL3VpLW1vZGFsLW1zZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0YsTUFBTTs7OztJQUVKLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUM5QyxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBY25CLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFoQlEsQ0FBQzs7OztJQUkxRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLFdBQVcsQ0FBQyxHQUFHO1FBQ2pCLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFBO1FBQ1QsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixpUkFBNEM7O2FBRTdDOzs7WUFOcUQsaUJBQWlCOzs7MEJBYXBFLEtBQUs7Z0NBWUwsTUFBTTs7OztJQWZQLHdDQUFpQzs7Ozs7SUFDakMsMkNBQTZCOztJQWM3QixnREFBaUQ7Ozs7O0lBaEJyQyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtdWktbW9kYWwtbXNnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1vZGFsLW1zZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLW1zZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kYWxNc2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuICBwdWJsaWMgYWxlcnRJbml0OmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgXG4gIEBJbnB1dCgpXG4gIGdldCBpc1BvcHVwT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW47XG4gIH1cbiAgc2V0IGlzUG9wdXBPcGVuKHZhbCkge1xuICAgIGlmKHRoaXMuaXNQb3B1cE9wZW4gIT0gdmFsICYmIHZhbCl7XG4gICAgICB0aGlzLmFsZXJ0SW5pdD10cnVlOyBcbiAgICAgIHRoaXMuYXV0b0Rpc2FwcGVhcigpO1xuICAgICAgdGhpcy5faXNQb3B1cE9wZW4gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIGlzUG9wdXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGF1dG9EaXNhcHBlYXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNQb3B1cE9wZW4pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWxlcnRJbml0PWZhbHNlOyBcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LDIwMDApXG4gICAgfSwgMTYwMCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==