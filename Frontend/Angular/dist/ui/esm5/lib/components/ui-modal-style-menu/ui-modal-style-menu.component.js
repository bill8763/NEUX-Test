/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiModalStyleMenuComponent = /** @class */ (function () {
    function UiModalStyleMenuComponent(changeDector) {
        this.changeDector = changeDector;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
        this.isFull = false;
        this.fadePos = 'bottom';
        this.outerMinusHeight = 0;
        this.close = new EventEmitter();
    }
    Object.defineProperty(UiModalStyleMenuComponent.prototype, "isPopupOpen", {
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
            this.isPopupOpenChange.emit(this._isPopupOpen);
            /** @type {?} */
            var _this = this;
            if (val) {
                // calculate menu height;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var containerBlock_ele = _this.containerBlock.nativeElement;
                    containerBlock_ele.classList.remove('hidden');
                    // containerBlock_ele.style.height = (_this.windowHeight - _this.outerMinusHeight) + 'px';
                    // let contentBlock_ele = _this.contentBlock.nativeElement;
                    // let contentBlock_h = (_this.windowHeight - _this.outerMinusHeight - 50);
                    // contentBlock_ele.style.height = contentBlock_h + 'px';
                    // let headerBlock_ele = _this.headerBlock.nativeElement;
                    // let headerBlock_size = headerBlock_ele.getBoundingClientRect();
                    // let headerBlock_h = headerBlock_size.height;
                    // let btmBlock_ele = _this.btmBlock.nativeElement;
                    // let btmBlock_size = btmBlock_ele.getBoundingClientRect();
                    // let btmBlock_h = btmBlock_size.height;
                    // let detailBlock_ele = _this.detailBlock.nativeElement;
                    // if (_this.isFull) {
                    //   detailBlock_ele.style.height = (_this.windowHeight - headerBlock_h - btmBlock_h - 45) + 'px';
                    // } else {
                    //   detailBlock_ele.style.height = (contentBlock_h - headerBlock_h - btmBlock_h - 32) + 'px';
                    // }
                }), 100); // end setTimeout: calculate content height
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var containerBlock_ele = _this.containerBlock.nativeElement;
                    // containerBlock_ele.style.display = 'none';
                    containerBlock_ele.classList.add('hidden');
                }), 100); // 修復mantis-->漢堡條關閉後馬上再打開，會自己彈回去
            }
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.windowHeight = window.innerHeight;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.containerBlock.nativeElement.style.visibility = 'visible';
        }), 1100);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowHeight = event.target.innerHeight;
    };
    /**
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.changeDector.markForCheck();
        this.close.emit(false);
    }; // end closeHandler
    UiModalStyleMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-menu',
                    template: "<div #containerBlock class=\"ui-modal-block\"\n  [ngClass]=\"[this.isPopupOpen ? 'animate-fadeIn' : 'animate-fadeOut'\n    , this.isFull ? 'full' : ''\n    , this.fadePos ]\">\n  <div class=\"ui-modal-mask\" (click)=\"closeHandler()\"></div>\n  <div class=\"ui-modal-position\">\n      <div #contentBlock class=\"ui-modal-content-block\">\n        <!-- title -->\n        <div #headerBlock class=\"ui-modal-header\">\n          <button (click)=\"closeHandler()\" class=\"ui-modal-close-btn\" type=\"button\">\n            <nx-icon name=\"close-circle\"></nx-icon>\n          </button>\n          <h2 class=\"ui-modal-title\">\n            <ng-content select=\"[popupBlock=popup-title]\"></ng-content>\n          </h2>\n        </div>\n        <!-- end of title -->\n        <!-- content -->\n        <div #detailBlock class=\"ui-modal-content\">\n          <ng-content select=\"[popupBlock=popup-content]\"></ng-content>\n        </div>\n        <!-- end of content -->\n        <!-- btm -->\n        <div #btmBlock class=\"ui-modal-btm\">\n          <ng-content select=\"[popupBlock=popup-btm]\"></ng-content>\n        </div>\n        <!-- end of btm -->\n        <!-- <div class=\"safe-area-block\"></div> -->\n      </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-bottom)}.ui-modal-block .ui-modal-position{margin-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-bottom)}}.ui-modal-block{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;opacity:0;position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;visibility:hidden}.ui-modal-block.hidden{display:none}.ui-modal-block .ui-modal-mask{width:100%;height:100%;position:absolute;left:0;top:0;z-index:-1;background-color:rgba(0,0,0,.35)}.ui-modal-block .ui-modal-position{display:inline-block;width:100%;position:absolute;top:18px;left:50%;z-index:20;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@supports (top:env(safe-area-inset-top)){.ui-modal-block .ui-modal-position{margin-top:env(safe-area-inset-top)}}.ui-modal-block .ui-modal-content-block{max-width:calc(100vw - 20px);max-height:calc(100vh - 50px);height:calc(100vh - 55px - 18px - 30px);margin:0 auto;padding:15px;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:column;justify-content:space-between;position:relative;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:#fff;box-shadow:0 1px 16px 0 rgba(0,0,0,.2),0 2px 8px 0 rgba(0,0,0,.14),0 4px 8px -1px rgba(0,0,0,.12)}.ui-modal-block .ui-modal-header{padding-bottom:20px}.ui-modal-block .ui-modal-title{font-size:1rem;font-weight:700;line-height:1.75;letter-spacing:.2px;text-align:center;color:#414141}.ui-modal-block .ui-modal-close-btn{display:inline-block;margin:0;padding:0;border:0;position:absolute;top:5px;right:2px;font-size:24px;line-height:1rem;color:#007ab3;background:0 0}.ui-modal-block .ui-modal-content{overflow-y:auto;flex:2}.ui-modal-block.full .ui-modal-position{top:0;left:0;-webkit-transform:none;transform:none}.ui-modal-block.full .ui-modal-content-block{max-width:100vw;max-height:100vh;padding:25px 25px 20px;border:0;border-radius:0}@supports (top:constant(safe-area-inset-top)){.ui-modal-block.full .ui-modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))!important}}@supports (top:env(safe-area-inset-top)){.ui-modal-block.full .ui-modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))!important}}.ui-modal-block.full .ui-modal-close-btn{top:20px;right:15px}.animate-fadeIn{display:flex;animation:.3s forwards fadeIn;-webkit-animation:.3s forwards fadeIn;-webkit-delay:0s}.animate-fadeIn.bottom{animation:.3s forwards bottomToTop;-webkit-animation:.3s forwards bottomToTop;-webkit-delay:0s}.animate-fadeIn.right{animation:.3s forwards rightToleft;-webkit-animation:.3s forwards rightToleft;-webkit-delay:0s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes bottomToTop{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bottomToTop{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes rightToleft{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes rightToleft{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.animate-fadeOut{animation:.3s forwards fadeOut;-webkit-animation:.3s forwards fadeOut;-webkit-delay:0s}.animate-fadeOut.bottom{animation:.3s forwards topToBottom;-webkit-animation:.3s forwards topToBottom;-webkit-delay:0s}.animate-fadeOut.right{animation:.3s forwards leftToRight;-webkit-animation:.3s forwards leftToRight;-webkit-delay:0s}@-webkit-keyframes fadeOut{0%,100%{opacity:0}}@keyframes fadeOut{0%,100%{opacity:0}}@-webkit-keyframes topToBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes topToBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes leftToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes leftToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}"]
                }] }
    ];
    UiModalStyleMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalStyleMenuComponent.propDecorators = {
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }],
        isFull: [{ type: Input }],
        fadePos: [{ type: Input }],
        outerMinusHeight: [{ type: Input }],
        close: [{ type: Output }],
        containerBlock: [{ type: ViewChild, args: ['containerBlock',] }],
        contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
        headerBlock: [{ type: ViewChild, args: ['headerBlock',] }],
        detailBlock: [{ type: ViewChild, args: ['detailBlock',] }],
        btmBlock: [{ type: ViewChild, args: ['btmBlock',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalStyleMenuComponent;
}());
export { UiModalStyleMenuComponent };
if (false) {
    /** @type {?} */
    UiModalStyleMenuComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.isPopupOpenChange;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.isFull;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.fadePos;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.outerMinusHeight;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.close;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.containerBlock;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.contentBlock;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.headerBlock;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.detailBlock;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.btmBlock;
    /** @type {?} */
    UiModalStyleMenuComponent.prototype.windowHeight;
    /**
     * @type {?}
     * @private
     */
    UiModalStyleMenuComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLW1lbnUvdWktbW9kYWwtc3R5bGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEs7SUFtRUUsbUNBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQTNEM0MsaUJBQVksR0FBRyxLQUFLLENBQUM7UUE0Q2xCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixZQUFPLEdBQVcsUUFBUSxDQUFDO1FBQzNCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVVpQixDQUFDO0lBMUR2RCxzQkFDSSxrREFBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsR0FBRztZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Z0JBRTNDLEtBQUssR0FBRyxJQUFJO1lBQ2hCLElBQUksR0FBRyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsVUFBVTs7O2dCQUFDOzt3QkFDTCxrQkFBa0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWE7b0JBQzNELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLDBGQUEwRjtvQkFFMUYsMkRBQTJEO29CQUMzRCwyRUFBMkU7b0JBQzNFLHlEQUF5RDtvQkFFekQseURBQXlEO29CQUN6RCxrRUFBa0U7b0JBQ2xFLCtDQUErQztvQkFFL0MsbURBQW1EO29CQUNuRCw0REFBNEQ7b0JBQzVELHlDQUF5QztvQkFFekMseURBQXlEO29CQUN6RCxzQkFBc0I7b0JBQ3RCLGtHQUFrRztvQkFDbEcsV0FBVztvQkFDWCw4RkFBOEY7b0JBQzlGLElBQUk7Z0JBQ04sQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsMkNBQTJDO2FBQ3JEO2lCQUFNO2dCQUNMLFVBQVU7OztnQkFBQzs7d0JBQ0wsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhO29CQUMzRCw2Q0FBNkM7b0JBQzdDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdDQUFnQzthQUMxQztRQUNILENBQUMsQ0FBQyxzQkFBc0I7Ozs7T0F2Q3ZCOzs7O0lBeURELDRDQUFROzs7SUFBUjtRQUFBLG1CQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLFVBQVU7OztRQUFDO1lBQ1QsT0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDakUsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1YsQ0FBQzs7Ozs7SUFHRCw0Q0FBUTs7OztJQURSLFVBQ1MsS0FBSztRQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGdEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFDLG1CQUFtQjs7Z0JBckZ0QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMseXVDQUFtRDtvQkFFbkQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7O2dCQVBzSCxpQkFBaUI7Ozs4QkFXckksS0FBSztvQ0EyQ0wsTUFBTTt5QkFFTixLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSzt3QkFDTCxNQUFNO2lDQUVOLFNBQVMsU0FBQyxnQkFBZ0I7K0JBQzFCLFNBQVMsU0FBQyxjQUFjOzhCQUN4QixTQUFTLFNBQUMsYUFBYTs4QkFDdkIsU0FBUyxTQUFDLGFBQWE7MkJBQ3ZCLFNBQVMsU0FBQyxVQUFVOzJCQWFwQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWEzQyxnQ0FBQztDQUFBLEFBekZELElBeUZDO1NBbkZZLHlCQUF5Qjs7O0lBRXBDLGlEQUE0Qjs7SUE0QzVCLHNEQUFpRDs7SUFFakQsMkNBQWlDOztJQUNqQyw0Q0FBb0M7O0lBQ3BDLHFEQUFzQzs7SUFDdEMsMENBQXFDOztJQUVyQyxtREFBd0Q7O0lBQ3hELGlEQUFvRDs7SUFDcEQsZ0RBQWtEOztJQUNsRCxnREFBa0Q7O0lBQ2xELDZDQUE0Qzs7SUFFNUMsaURBQXFCOzs7OztJQUVULGlEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1vZGFsLXN0eWxlLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbW9kYWwtc3R5bGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLXN0eWxlLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaU1vZGFsU3R5bGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgX2lzUG9wdXBPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBpc1BvcHVwT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW47XG4gIH1cbiAgc2V0IGlzUG9wdXBPcGVuKHZhbCkge1xuICAgIHRoaXMuX2lzUG9wdXBPcGVuID0gdmFsO1xuICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc1BvcHVwT3Blbik7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIC8vIGNhbGN1bGF0ZSBtZW51IGhlaWdodDtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udGFpbmVyQmxvY2tfZWxlID0gX3RoaXMuY29udGFpbmVyQmxvY2submF0aXZlRWxlbWVudDtcbiAgICAgICAgY29udGFpbmVyQmxvY2tfZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAvLyBjb250YWluZXJCbG9ja19lbGUuc3R5bGUuaGVpZ2h0ID0gKF90aGlzLndpbmRvd0hlaWdodCAtIF90aGlzLm91dGVyTWludXNIZWlnaHQpICsgJ3B4JztcblxuICAgICAgICAvLyBsZXQgY29udGVudEJsb2NrX2VsZSA9IF90aGlzLmNvbnRlbnRCbG9jay5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyBsZXQgY29udGVudEJsb2NrX2ggPSAoX3RoaXMud2luZG93SGVpZ2h0IC0gX3RoaXMub3V0ZXJNaW51c0hlaWdodCAtIDUwKTtcbiAgICAgICAgLy8gY29udGVudEJsb2NrX2VsZS5zdHlsZS5oZWlnaHQgPSBjb250ZW50QmxvY2tfaCArICdweCc7XG5cbiAgICAgICAgLy8gbGV0IGhlYWRlckJsb2NrX2VsZSA9IF90aGlzLmhlYWRlckJsb2NrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIGxldCBoZWFkZXJCbG9ja19zaXplID0gaGVhZGVyQmxvY2tfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAvLyBsZXQgaGVhZGVyQmxvY2tfaCA9IGhlYWRlckJsb2NrX3NpemUuaGVpZ2h0O1xuXG4gICAgICAgIC8vIGxldCBidG1CbG9ja19lbGUgPSBfdGhpcy5idG1CbG9jay5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyBsZXQgYnRtQmxvY2tfc2l6ZSA9IGJ0bUJsb2NrX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy8gbGV0IGJ0bUJsb2NrX2ggPSBidG1CbG9ja19zaXplLmhlaWdodDtcblxuICAgICAgICAvLyBsZXQgZGV0YWlsQmxvY2tfZWxlID0gX3RoaXMuZGV0YWlsQmxvY2submF0aXZlRWxlbWVudDtcbiAgICAgICAgLy8gaWYgKF90aGlzLmlzRnVsbCkge1xuICAgICAgICAvLyAgIGRldGFpbEJsb2NrX2VsZS5zdHlsZS5oZWlnaHQgPSAoX3RoaXMud2luZG93SGVpZ2h0IC0gaGVhZGVyQmxvY2tfaCAtIGJ0bUJsb2NrX2ggLSA0NSkgKyAncHgnO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIGRldGFpbEJsb2NrX2VsZS5zdHlsZS5oZWlnaHQgPSAoY29udGVudEJsb2NrX2ggLSBoZWFkZXJCbG9ja19oIC0gYnRtQmxvY2tfaCAtIDMyKSArICdweCc7XG4gICAgICAgIC8vIH1cbiAgICAgIH0sIDEwMCk7IC8vIGVuZCBzZXRUaW1lb3V0OiBjYWxjdWxhdGUgY29udGVudCBoZWlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb250YWluZXJCbG9ja19lbGUgPSBfdGhpcy5jb250YWluZXJCbG9jay5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyBjb250YWluZXJCbG9ja19lbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29udGFpbmVyQmxvY2tfZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSwgMTAwKTsgLy8g5L+u5b6pbWFudGlzLS0+5ryi5aCh5qKd6Zec6ZaJ5b6M6aas5LiK5YaN5omT6ZaL77yM5pyD6Ieq5bex5b2I5Zue5Y67XG4gICAgfVxuICB9IC8vIGVuZCBzZXQgaXNQb3B1cE9wZW5cbiAgQE91dHB1dCgpIGlzUG9wdXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGlzRnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlUG9zOiBzdHJpbmcgPSAnYm90dG9tJztcbiAgQElucHV0KCkgb3V0ZXJNaW51c0hlaWdodDogbnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lckJsb2NrJykgY29udGFpbmVyQmxvY2s6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRCbG9jaycpIGNvbnRlbnRCbG9jazogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaGVhZGVyQmxvY2snKSBoZWFkZXJCbG9jazogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGV0YWlsQmxvY2snKSBkZXRhaWxCbG9jazogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYnRtQmxvY2snKSBidG1CbG9jazogRWxlbWVudFJlZjtcblxuICB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgdGhpcy5jb250YWluZXJCbG9jay5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfSwgMTEwMClcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gZXZlbnQudGFyZ2V0LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgY2xvc2VIYW5kbGVyKCkge1xuICAgIHRoaXMuaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoZmFsc2UpO1xuICB9IC8vIGVuZCBjbG9zZUhhbmRsZXJcbiAgXG4gIFxuXG59XG4iXX0=