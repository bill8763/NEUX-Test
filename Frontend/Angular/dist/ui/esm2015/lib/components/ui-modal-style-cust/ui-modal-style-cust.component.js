/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { animationModalOpen, animationModalClose } from '../../model/Animation/AnimationModal';
export class UiModalStyleCustComponent extends UiModalBaseComponent {
    /**
     * @param {?} changeDector
     * @param {?} elementRef
     * @param {?} modalManager
     */
    constructor(changeDector, elementRef, modalManager) {
        super(modalManager, changeDector);
        this.changeDector = changeDector;
        this.elementRef = elementRef;
        this.modalManager = modalManager;
        this.isPopupOpenChange = new EventEmitter();
        this.close = new EventEmitter();
        this.isContnetFull = false;
        this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        this.isHasBtmBlock = true;
        this.isHeightFix = false; // if true, popup height fix 600px
        this.isTooHeight = false;
        this._isPopupOpen = false;
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
        this.isPopupOpenChange.emit(this._isPopupOpen);
        this.checkModalOpenStatus(this._isPopupOpen);
    } // end set isPopupOpen
    /**
     * @return {?}
     */
    ngOnInit() {
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.styleHeightFix = this.isHeightFix ? 'style-fix-height' : '';
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this.isPopupOpen ? 'open' : 'closed';
    }
    /**
     * @return {?}
     */
    isBgOpenStatus() {
        return this.isPopupOpen ? 'bgOpen' : 'bgClosed';
    }
    /**
     * @return {?}
     */
    closeHandler() {
        this.isPopupOpen = false;
        this.close.emit(false);
    }
}
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
UiModalStyleCustComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: ModalManager }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLWN1c3QvdWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNySyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFVOUYsTUFBTSxnQ0FBaUMsU0FBUSxvQkFBb0I7Ozs7OztJQW1DakUsWUFDWSxZQUErQixFQUMvQixVQUFzQixFQUN0QixZQUEwQjtRQUNsQyxLQUFLLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSDFCLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBcEM1QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBVyxRQUFRLENBQUMsQ0FBRSw2SEFBNkg7UUFDMUosa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7UUFPbEUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFxQjdCLENBQUM7Ozs7SUFuQkQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsSUFBSSxXQUFXLENBQUMsR0FBRztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxzQkFBc0I7Ozs7SUFheEIsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbkUsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsaVpBQW1EO2dCQUVuRCxVQUFVLEVBQUU7b0JBQ1Ysa0JBQWtCLEVBQUUsbUJBQW1CO2lCQUN4QztnQkFDRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7OztZQVpnSCxpQkFBaUI7WUFBOUQsVUFBVTtZQUVyRSxZQUFZOzs7Z0NBYWxCLE1BQU07b0JBQ04sTUFBTTtzQkFHTixLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFVTCxLQUFLO3lCQVVMLFNBQVMsU0FBQyxZQUFZOzs7O0lBN0J2QixzREFBaUQ7O0lBQ2pELDBDQUFxQzs7SUFHckMsNENBQXlCOztJQUN6QixrREFBd0M7O0lBQ3hDLDRDQUFvQzs7SUFDcEMsa0RBQXVDOztJQUN2QyxnREFBc0M7O0lBQ3RDLG1EQUFnQzs7SUFDaEMscURBQWdDOztJQUNoQyxtREFBOEI7O0lBQzlCLGdEQUEyQjs7SUFDM0Isa0RBQTZCOztJQUM3Qix5REFBb0M7O0lBQ3BDLGdEQUFvQzs7SUFDcEMsZ0RBQW1COzs7OztJQUNuQixpREFBNkI7O0lBWTdCLCtDQUFnRDs7Ozs7SUFLOUMsaURBQXlDOzs7OztJQUN6QywrQ0FBZ0M7Ozs7O0lBQ2hDLGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlNb2RhbEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi91aS1tb2RhbC1iYXNlL3VpLW1vZGFsLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsTWFuYWdlciB9IGZyb20gJy4uL3VpLW1vZGFsLWNvbnRyb2wvbW9kYWwtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IGFuaW1hdGlvbk1vZGFsT3BlbiwgYW5pbWF0aW9uTW9kYWxDbG9zZX0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbk1vZGFsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tb2RhbC1zdHlsZS1jdXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1vZGFsLXN0eWxlLWN1c3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1tb2RhbC1zdHlsZS1jdXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25Nb2RhbE9wZW4sIGFuaW1hdGlvbk1vZGFsQ2xvc2VcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaU1vZGFsU3R5bGVDdXN0Q29tcG9uZW50IGV4dGVuZHMgVWlNb2RhbEJhc2VDb21wb25lbnQgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoKSBpc1BvcHVwT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcblxuICBASW5wdXQoKSBtb2RhbElkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzQ29udG5ldEZ1bGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZUJ0bjogc3RyaW5nID0gJ3N0eWxlMSc7ICAvLyBzdHlsZTEgPT0gbm9ybWFsIC0tIHBhZGRpbmctYm90IHRvbTogMzBweCAsIHN0eWxlMiA9PSB3aXRoIGdyZXkgYnRuIC0gcGFkZGluZy0gYnRtIDE4cHggLCBzdHlsZTMgPT0gbm8gcGFkZGluZyAtIGN1c3RvbWl6ZVxuICBASW5wdXQoKSBpc0hhc0J0bUJsb2NrOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNIZWlnaHRGaXg6IGJvb2xlYW4gPSBmYWxzZTsgLy8gaWYgdHJ1ZSwgcG9wdXAgaGVpZ2h0IGZpeCA2MDBweFxuICBASW5wdXQoKSBzdHlsZUhlaWdodEZpeDogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NDb250ZW50RnVsbDogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NNb2RhbE9wZW46IHN0cmluZztcbiAgcHVibGljIGNsYXNzQnRuRml4OiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0J0bUJsb2NrOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0NvbnRlbnRGaXhTdHlsZTogc3RyaW5nO1xuICBwdWJsaWMgaXNUb29IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG1vZGFsSGVpZ2h0O1xuICBwcml2YXRlIF9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICBcbiAgQElucHV0KClcbiAgZ2V0IGlzUG9wdXBPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbjtcbiAgfVxuICBzZXQgaXNQb3B1cE9wZW4odmFsKSB7XG4gICAgdGhpcy5faXNQb3B1cE9wZW4gPSB2YWw7XG4gICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZS5lbWl0KHRoaXMuX2lzUG9wdXBPcGVuKTtcbiAgICB0aGlzLmNoZWNrTW9kYWxPcGVuU3RhdHVzKHRoaXMuX2lzUG9wdXBPcGVuKTtcbiAgfSAvLyBlbmQgc2V0IGlzUG9wdXBPcGVuXG4gIC8vIGFsbCBtb2RhbCBcbiAgQFZpZXdDaGlsZCgnbW9kYWxCbG9jaycpIG1vZGFsQmxvY2s6IEVsZW1lbnRSZWY7XG5cbiAgXG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIpIHtcbiAgICAgIHN1cGVyKG1vZGFsTWFuYWdlciwgY2hhbmdlRGVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xhc3NDb250ZW50RnVsbCA9IHRoaXMuaXNDb250bmV0RnVsbCA/ICcgbGF5b3V0LWZ1bGwnIDogJyc7IFxuICAgIHRoaXMuc3R5bGVIZWlnaHRGaXggPSB0aGlzLmlzSGVpZ2h0Rml4ID8gJ3N0eWxlLWZpeC1oZWlnaHQnIDogJyc7XG4gIH1cbiAgaXNPcGVuU3RhdHVzKCl7XG4gICAgcmV0dXJuIHRoaXMuaXNQb3B1cE9wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcbiAgfVxuICBpc0JnT3BlblN0YXR1cygpe1xuICAgIHJldHVybiB0aGlzLmlzUG9wdXBPcGVuID8gJ2JnT3BlbicgOiAnYmdDbG9zZWQnO1xuICB9XG4gIGNsb3NlSGFuZGxlcigpIHtcbiAgICB0aGlzLmlzUG9wdXBPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGZhbHNlKTtcbiAgfVxuICBcbn1cbiJdfQ==