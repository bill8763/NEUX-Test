/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiModalStyleFeedbackComponent = /** @class */ (function () {
    function UiModalStyleFeedbackComponent(changeDector) {
        this.changeDector = changeDector;
        this.hasAutoDisappear = true;
        this.isPopupOpenChange = new EventEmitter();
        this._isPopupOpen = false;
    }
    Object.defineProperty(UiModalStyleFeedbackComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isPopupOpen != value) {
                if (value) {
                    this.autoDisappear();
                    this._isPopupOpen = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // window.setTimeout(() => {
        //   this.modalBlockFeedback.nativeElement.style.visibility = 'visible';
        // }, 1100);
        var _this = this;
        setInterval((/**
         * @return {?}
         */
        function () {
            _this.changeDector.markForCheck();
        }), 200);
    };
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.autoDisappear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.log(_this);
            console.log('auto disapper timeout 2');
            _this._isPopupOpen = false;
            _this.changeDector.detectChanges();
            _this.isPopupOpenChange.emit(_this.isPopupOpen);
        }), 2000);
    };
    UiModalStyleFeedbackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-feedback',
                    template: "<div #modalBlockFeedback class=\"modal-block\" [ngClass]=\"[isPopupOpen ? 'animate-fadeInOut' : '']\">\n    <div class=\"modal-style-feedback\">\n        <div class=\"modal-img-block\">\n          <ng-content select=\"[textType=modal-img-detail]\"></ng-content>\n        </div>\n        <div class=\"modal-content-block\">\n          <p class=\"modal-desc\">\n            <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n          </p>\n        </div>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".modal-block{text-align:center;opacity:0;position:fixed;width:100vw;height:100vh;top:0;bottom:0;left:0;right:0;align-items:center;justify-content:center;visibility:hidden;z-index:-999}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.modal-block ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}.modal-block ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}.modal-block ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}.modal-block ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}.modal-block ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}.modal-block ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}.modal-block ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}.modal-block ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}.modal-block ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}.modal-block ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}.modal-block ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.modal-block ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}.modal-block ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}.modal-block ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.modal-block ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}.modal-block ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.modal-block ::ng-deep .modal-block{position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}.modal-block ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}.modal-block ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}.modal-block ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}.modal-block ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}.modal-block ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}.modal-block ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}.modal-block ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}.modal-block ::ng-deep .modal-block .modal-content-block>*{width:100%}.modal-block ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){.modal-block ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}.modal-block ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}.modal-block ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}.modal-block ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}.modal-block ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}.modal-block ::ng-deep .modal-header-block .modal-btn-close img{width:40px}.modal-block ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}.modal-block ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}.modal-block ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}.modal-block ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}.modal-block ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}.modal-block ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}.modal-block ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){.modal-block ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}.modal-block ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}.modal-block ::ng-deep .modal-btm-block:empty{display:none}.modal-block ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}.modal-block ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}.modal-block ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}.modal-block ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}.modal-block ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.modal-block ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}.modal-block ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}.modal-block ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}.modal-block ::ng-deep .ps-text{font-size:.75rem;color:#414141}.modal-block ::ng-deep .text-block .text-detail{display:inline-block}.modal-block ::ng-deep p{padding:0;margin:0}.modal-block ::ng-deep .desc,.modal-block ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}.modal-block ::ng-deep .desc{font-weight:700}.modal-block ::ng-deep p.desc{padding-bottom:0}.modal-block ::ng-deep .desc-normal{font-weight:400}.modal-block ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}.modal-block ::ng-deep .desc-line-lg{line-height:28px}.modal-block ::ng-deep .textarea-block{display:inline-block;width:100%}.modal-block ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}.modal-block ::ng-deep .textarea-block textarea:focus{outline:0}.modal-block ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}.modal-block ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}.modal-block ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block .modal-style-feedback{position:absolute;display:inline-block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(0,0,0,.7);color:#fff;min-width:120px;max-width:120px;min-height:120px;border-radius:10px;padding:30px 17px 17px}.modal-block .modal-style-feedback .modal-img-block{text-align:center}.modal-block .modal-style-feedback .modal-img-block img{display:inline-block;max-width:40px;max-height:40px;width:auto;height:auto}.modal-block .modal-style-feedback .modal-img-block ::ng-deep nx-icon{color:#fff;font-size:32px;font-weight:700}.modal-block .modal-style-feedback .modal-img-block ::ng-deep app-ui-refresh-icon .ui-refresh-spinner{top:0}.modal-block .modal-style-feedback .modal-img-block ::ng-deep app-ui-refresh-icon .ui-refresh-spinner>div:after{background-color:#fff!important}.modal-block .modal-style-feedback .modal-content-block{text-align:center;padding-top:10px}.modal-block .modal-style-feedback .modal-content-block .modal-desc{font-size:1rem;color:#fff;font-weight:700;padding:0;margin:0}.animate-fadeInOut{display:flex;animation:2.5s ease-out forwards fadeInOut;-webkit-animation:2.5s forwards fadeInOut;-webkit-delay:0s;z-index:100}@-webkit-keyframes fadeInOut{0%{visibility:visible;opacity:0}10%{opacity:1}95%{opacity:0}}@keyframes fadeInOut{0%{visibility:visible;opacity:0}10%{opacity:1}95%{opacity:0}}"]
                }] }
    ];
    UiModalStyleFeedbackComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalStyleFeedbackComponent.propDecorators = {
        hasAutoDisappear: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }],
        modalBlockFeedback: [{ type: ViewChild, args: ['modalBlockFeedback',] }]
    };
    return UiModalStyleFeedbackComponent;
}());
export { UiModalStyleFeedbackComponent };
if (false) {
    /** @type {?} */
    UiModalStyleFeedbackComponent.prototype.hasAutoDisappear;
    /** @type {?} */
    UiModalStyleFeedbackComponent.prototype.isPopupOpenChange;
    /**
     * @type {?}
     * @private
     */
    UiModalStyleFeedbackComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalStyleFeedbackComponent.prototype.modalBlockFeedback;
    /**
     * @type {?}
     * @private
     */
    UiModalStyleFeedbackComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS1mZWVkYmFjay91aS1tb2RhbC1zdHlsZS1mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaks7SUEyQkUsdUNBQW9CLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQW5CMUMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBY3ZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbEQsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFJMEIsQ0FBQztJQWpCeEQsc0JBQ0ksc0RBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUNELFVBQWdCLEtBQUs7WUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7YUFDRjtRQUNILENBQUM7OztPQVJBOzs7O0lBZ0JELGdEQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCx1REFBZTs7O0lBQWY7UUFDRSw0QkFBNEI7UUFDNUIsd0VBQXdFO1FBQ3hFLFlBQVk7UUFIZCxpQkFRQztRQUhDLFdBQVc7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQscURBQWE7OztJQUFiO1FBQUEsaUJBUUM7UUFQQyxVQUFVOzs7UUFBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QywwZkFBdUQ7b0JBRXZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OztnQkFQdUgsaUJBQWlCOzs7bUNBVXRJLEtBQUs7OEJBRUwsS0FBSztvQ0FZTCxNQUFNO3FDQUdOLFNBQVMsU0FBQyxvQkFBb0I7O0lBNEJqQyxvQ0FBQztDQUFBLEFBckRELElBcURDO1NBL0NZLDZCQUE2Qjs7O0lBRXhDLHlEQUFpQzs7SUFjakMsMERBQTBEOzs7OztJQUMxRCxxREFBNkI7O0lBRTdCLDJEQUFnRTs7Ozs7SUFFcEQscURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1vZGFsLXN0eWxlLWZlZWRiYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1vZGFsLXN0eWxlLWZlZWRiYWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbW9kYWwtc3R5bGUtZmVlZGJhY2suY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbFN0eWxlRmVlZGJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGhhc0F1dG9EaXNhcHBlYXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpc1BvcHVwT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW47XG4gIH1cbiAgc2V0IGlzUG9wdXBPcGVuKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNQb3B1cE9wZW4gIT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmF1dG9EaXNhcHBlYXIoKTtcbiAgICAgICAgdGhpcy5faXNQb3B1cE9wZW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIGlzUG9wdXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIF9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQmxvY2tGZWVkYmFjaycpIG1vZGFsQmxvY2tGZWVkYmFjazogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHRoaXMubW9kYWxCbG9ja0ZlZWRiYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAvLyB9LCAxMTAwKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sMjAwKTtcbiAgfVxuXG4gIGF1dG9EaXNhcHBlYXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhdXRvIGRpc2FwcGVyIHRpbWVvdXQgMicpO1xuICAgICAgdGhpcy5faXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzUG9wdXBPcGVuKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG59XG4iXX0=