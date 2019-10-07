/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { animationModalOpen, animationModalClose } from '../../model/Animation/AnimationModal';
var UiModalStyleCustComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiModalStyleCustComponent, _super);
    function UiModalStyleCustComponent(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.isContnetFull = false;
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isHeightFix = false; // if true, popup height fix 600px
        _this.isTooHeight = false;
        _this._isPopupOpen = false;
        return _this;
    }
    Object.defineProperty(UiModalStyleCustComponent.prototype, "isPopupOpen", {
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
            this.checkModalOpenStatus(this._isPopupOpen);
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.styleHeightFix = this.isHeightFix ? 'style-fix-height' : '';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.close.emit(false);
    };
    UiModalStyleCustComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-cust',
                    template: "<div class=\"modal-component-block\"  [ngClass]=\"[(isPopupOpen ? ' modal-open': ' modal-close')]\">\n    <div *ngIf=\"isPopupOpen\" class=\"modal-backdrop\" (click)=\"closeHandler()\" ></div>\n    <div class=\"modal-all-block\">\n      <div #modalBlock class=\"modal-block\" [ngClass]=\"styleHeightFix\">\n          \n          <ng-content></ng-content> \n      </div>\n    </div>\n</div>",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-all-block .modal-block{padding:48px 0 0;overflow-y:auto;overflow-x:hidden}:host .modal-all-block .modal-block.style-fix-height{overflow-y:hidden}"]
                }] }
    ];
    UiModalStyleCustComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleCustComponent.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        isContnetFull: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isHeightFix: [{ type: Input }],
        styleHeightFix: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }]
    };
    return UiModalStyleCustComponent;
}(UiModalBaseComponent));
export { UiModalStyleCustComponent };
if (false) {
    /** @type {?} */
    UiModalStyleCustComponent.prototype.isPopupOpenChange;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.close;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.modalId;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.isContnetFull;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.typeBtn;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.isHasBtmBlock;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.isHeightFix;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.styleHeightFix;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.classContentFull;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.classModalOpen;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.classBtnFix;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.classBtmBlock;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.classContentFixStyle;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.isTooHeight;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.modalHeight;
    /**
     * @type {?}
     * @private
     */
    UiModalStyleCustComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalStyleCustComponent.prototype.modalBlock;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleCustComponent.prototype.changeDector;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleCustComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleCustComponent.prototype.modalManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLWN1c3QvdWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckssT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzlGO0lBUytDLHFEQUFvQjtJQW1DakUsbUNBQ1ksWUFBK0IsRUFDL0IsVUFBc0IsRUFDdEIsWUFBMEI7UUFIdEMsWUFJSSxrQkFBTSxZQUFZLEVBQUUsWUFBWSxDQUFDLFNBQ3BDO1FBSlcsa0JBQVksR0FBWixZQUFZLENBQW1CO1FBQy9CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBcEM1Qix1QkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLFdBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGFBQU8sR0FBVyxRQUFRLENBQUMsQ0FBRSw2SEFBNkg7UUFDMUosbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7UUFPbEUsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFNUIsa0JBQVksR0FBRyxLQUFLLENBQUM7O0lBcUI3QixDQUFDO0lBbkJELHNCQUNJLGtEQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixHQUFHO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLHNCQUFzQjs7OztPQUx2Qjs7OztJQWtCRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFDRCxnREFBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxrREFBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxnREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGlaQUFtRDtvQkFFbkQsVUFBVSxFQUFFO3dCQUNWLGtCQUFrQixFQUFFLG1CQUFtQjtxQkFDeEM7b0JBQ0QsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7O2dCQVpnSCxpQkFBaUI7Z0JBQTlELFVBQVU7Z0JBRXJFLFlBQVk7OztvQ0FhbEIsTUFBTTt3QkFDTixNQUFNOzBCQUdOLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQVVMLEtBQUs7NkJBVUwsU0FBUyxTQUFDLFlBQVk7O0lBMEJ6QixnQ0FBQztDQUFBLEFBbEVELENBUytDLG9CQUFvQixHQXlEbEU7U0F6RFkseUJBQXlCOzs7SUFFcEMsc0RBQWlEOztJQUNqRCwwQ0FBcUM7O0lBR3JDLDRDQUF5Qjs7SUFDekIsa0RBQXdDOztJQUN4Qyw0Q0FBb0M7O0lBQ3BDLGtEQUF1Qzs7SUFDdkMsZ0RBQXNDOztJQUN0QyxtREFBZ0M7O0lBQ2hDLHFEQUFnQzs7SUFDaEMsbURBQThCOztJQUM5QixnREFBMkI7O0lBQzNCLGtEQUE2Qjs7SUFDN0IseURBQW9DOztJQUNwQyxnREFBb0M7O0lBQ3BDLGdEQUFtQjs7Ozs7SUFDbkIsaURBQTZCOztJQVk3QiwrQ0FBZ0Q7Ozs7O0lBSzlDLGlEQUF5Qzs7Ozs7SUFDekMsK0NBQWdDOzs7OztJQUNoQyxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpTW9kYWxCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktbW9kYWwtYmFzZS91aS1tb2RhbC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbE1hbmFnZXIgfSBmcm9tICcuLi91aS1tb2RhbC1jb250cm9sL21vZGFsLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBhbmltYXRpb25Nb2RhbE9wZW4sIGFuaW1hdGlvbk1vZGFsQ2xvc2V9IGZyb20gJy4uLy4uL21vZGVsL0FuaW1hdGlvbi9BbmltYXRpb25Nb2RhbCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktbW9kYWwtc3R5bGUtY3VzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1tb2RhbC1zdHlsZS1jdXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgYW5pbWF0aW9uTW9kYWxPcGVuLCBhbmltYXRpb25Nb2RhbENsb3NlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbFN0eWxlQ3VzdENvbXBvbmVudCBleHRlbmRzIFVpTW9kYWxCYXNlQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBAT3V0cHV0KCkgaXNQb3B1cE9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG5cbiAgQElucHV0KCkgbW9kYWxJZDogc3RyaW5nO1xuICBASW5wdXQoKSBpc0NvbnRuZXRGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGVCdG46IHN0cmluZyA9ICdzdHlsZTEnOyAgLy8gc3R5bGUxID09IG5vcm1hbCAtLSBwYWRkaW5nLWJvdCB0b206IDMwcHggLCBzdHlsZTIgPT0gd2l0aCBncmV5IGJ0biAtIHBhZGRpbmctIGJ0bSAxOHB4ICwgc3R5bGUzID09IG5vIHBhZGRpbmcgLSBjdXN0b21pemVcbiAgQElucHV0KCkgaXNIYXNCdG1CbG9jazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzSGVpZ2h0Rml4OiBib29sZWFuID0gZmFsc2U7IC8vIGlmIHRydWUsIHBvcHVwIGhlaWdodCBmaXggNjAwcHhcbiAgQElucHV0KCkgc3R5bGVIZWlnaHRGaXg6IHN0cmluZztcbiAgcHVibGljIGNsYXNzQ29udGVudEZ1bGw6IHN0cmluZztcbiAgcHVibGljIGNsYXNzTW9kYWxPcGVuOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0J0bkZpeDogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NCdG1CbG9jazogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NDb250ZW50Rml4U3R5bGU6IHN0cmluZztcbiAgcHVibGljIGlzVG9vSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtb2RhbEhlaWdodDtcbiAgcHJpdmF0ZSBfaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgXG4gIEBJbnB1dCgpXG4gIGdldCBpc1BvcHVwT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW47XG4gIH1cbiAgc2V0IGlzUG9wdXBPcGVuKHZhbCkge1xuICAgIHRoaXMuX2lzUG9wdXBPcGVuID0gdmFsO1xuICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc1BvcHVwT3Blbik7XG4gICAgdGhpcy5jaGVja01vZGFsT3BlblN0YXR1cyh0aGlzLl9pc1BvcHVwT3Blbik7XG4gIH0gLy8gZW5kIHNldCBpc1BvcHVwT3BlblxuICAvLyBhbGwgbW9kYWwgXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQmxvY2snKSBtb2RhbEJsb2NrOiBFbGVtZW50UmVmO1xuXG4gIFxuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICBzdXBlcihtb2RhbE1hbmFnZXIsIGNoYW5nZURlY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsYXNzQ29udGVudEZ1bGwgPSB0aGlzLmlzQ29udG5ldEZ1bGwgPyAnIGxheW91dC1mdWxsJyA6ICcnOyBcbiAgICB0aGlzLnN0eWxlSGVpZ2h0Rml4ID0gdGhpcy5pc0hlaWdodEZpeCA/ICdzdHlsZS1maXgtaGVpZ2h0JyA6ICcnO1xuICB9XG4gIGlzT3BlblN0YXR1cygpe1xuICAgIHJldHVybiB0aGlzLmlzUG9wdXBPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG4gIH1cbiAgaXNCZ09wZW5TdGF0dXMoKXtcbiAgICByZXR1cm4gdGhpcy5pc1BvcHVwT3BlbiA/ICdiZ09wZW4nIDogJ2JnQ2xvc2VkJztcbiAgfVxuICBjbG9zZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2UuZW1pdChmYWxzZSk7XG4gIH1cbiAgXG59XG4iXX0=