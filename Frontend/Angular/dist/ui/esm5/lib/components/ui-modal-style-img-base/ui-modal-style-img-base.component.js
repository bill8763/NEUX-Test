/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { animationModalOpen, animationModalClose } from '../../model/Animation/AnimationModal';
var UiModalStyleImgBaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiModalStyleImgBaseComponent, _super);
    function UiModalStyleImgBaseComponent(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isBackdropClose = true; // is background click can close the popup
        _this.classBtnFix = '';
        _this.classContentFixStyle = '';
        _this.isTooHeight = false;
        _this._isPopupOpen = false;
        //detect if content area scroll to bottom add a class in modalblock
        _this.onScrollContentBtm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UiModalStyleImgBaseComponent.prototype, "isPopupOpen", {
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
            // let body fixed and stop scroll if popup open
            this.renderBtmSpace();
            this.checkModalOpenStatus(this._isPopupOpen);
            this.detectScroll(this);
            this.scrollContentToTop();
            if (this._isPopupOpen) {
                this.changeDector.markForCheck();
            }
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
        this.detectScroll(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.scrollContentToTop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var textContentBlock = document.body.getElementsByClassName('modal-content-block');
        setTimeout((/**
         * @return {?}
         */
        function () {
            // let content area which has scroll back to the top 
            [].forEach.bind(textContentBlock, (/**
             * @param {?} textContent
             * @return {?}
             */
            function (textContent) {
                textContent.scrollTop = 0;
            }))();
        }), 500); // end of settimeout
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.renderModalFixedStyle = /**
     * @return {?}
     */
    function () {
        this.modalHeight = this.elementRef.nativeElement.querySelector('.modal-block').offsetHeight;
        this.classBtnFix = this.modalHeight >= 600 ? 'btn-style-fixed' : '';
        this.classContentFixStyle = this.modalHeight >= 600 ? 'style-fixed' : '';
        this.classModalFix = this.modalHeight >= 600 ? 'style-modal-fixed' : '';
        this.changeDector.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.contentToTop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = event.target;
        if (element != undefined)
            element.scrollTop = 0;
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.isHasBtmBlock ? this.classBtmBlock = '' : this.classBtmBlock = ' style-no-btm';
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.contentBlock.nativeElement.addEventListener('touchmove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            //event.preventDefault();
            event.stopPropagation();
        }), { passive: false });
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.close.emit(false);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.backdropClose = /**
     * @return {?}
     */
    function () {
        if (this.isBackdropClose) {
            this.closeHandler();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.detectScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('in modal detetect scroll event', event);
        /** @type {?} */
        var element = event.target;
        /** @type {?} */
        var atBottom = false;
        if (element != undefined) {
            atBottom = element.scrollHeight - element.scrollTop <= (element.clientHeight + 50);
            // console.log('if atBottom', atBottom);
        }
        else {
            atBottom = false;
        }
        console.log('detect scroll atBottom', atBottom);
        this.onScrollContentBtm.emit(atBottom);
        if (atBottom) {
            //console.log('if atBottom', atBottom);
            if (this.modalBlock != null) {
                this.modalBlock.nativeElement.classList.add('style-scroll-on-btm');
            }
        }
    };
    UiModalStyleImgBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-img-base',
                    template: "<ng-template #btmTemplate>\n    <div class=\"modal-btm-block\" [ngClass]=\"[typeBtn, classBtnFix]\">\n        <ng-content select=\"[textType=modal-btm-detail]\"></ng-content>\n    </div>\n</ng-template>\n\n<div class=\"modal-component-block\"  [ngClass]=\"[(isPopupOpen ? ' modal-open': ' modal-close'), classContentFull, classBtmBlock, styleModelBtm, classModalFix]\">\n  <div *ngIf=\"isPopupOpen\" class=\"modal-backdrop\"  ></div>\n    <div class=\"modal-all-block\">\n        <div #modalBlock class=\"modal-block\">\n            <div class=\"modal-container-block\">\n                <!-- img -->\n                <div #imgBlock class=\"modal-img-block\">\n                <ng-content select=\"[textType=modal-img-detail]\"></ng-content>\n                </div>\n                <!-- end of img -->\n                <!-- title -->\n                <div #headerBlock class=\"modal-header-block\">\n                    <h2 class=\"modal-title\"><ng-content select=\"[textType=modal-title-detail]\"></ng-content></h2>\n                    <div *ngIf=\"isBackdropClose\" class=\"modal-btn-close\" (click)=\"closeHandler()\">\n                        <img src=\"./assets/img/icon-close-grey.svg\">\n                    </div>\n                </div>\n                <!-- end of title -->\n                <!-- content -->\n                <!-- (scroll)=\"detectScroll($event)\" -->\n                <div #contentBlock class=\"modal-content-block form-stop-scroll \" [ngClass]=\"[classContentFixStyle]\" (scroll)=\"detectScroll($event)\">\n                <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n                <ng-container *ngIf=\"!isShowFixBtmTemp\">\n                    <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n                </div>\n                <!-- end of content -->\n                <!-- btm -->\n                <ng-container *ngIf=\"isShowFixBtmTemp\">\n                    <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n                <!-- end of btm -->\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- modal -->\n\n",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-container-block{position:static}:host .modal-header-block .modal-title{font-size:1.125rem;font-weight:700;line-height:normal;padding:10px 20px 20px}:host .modal-header-block .modal-title .txt{font-weight:400;font-size:.75rem;margin-top:15px}:host ::ng-deep .modal-img-block{text-align:center;color:#007ab3}:host ::ng-deep .modal-img-block img{display:inline-block;width:40px;height:40px}:host ::ng-deep .modal-img-block nx-icon{color:#007ab3;font-size:40px;font-size:normal}:host ::ng-deep .modal-img-block .nx-icon--info-circle.icon-i{display:inline-block;width:40px;height:40px;border:none;font-size:40px;color:#007ab3;background-color:transparent;line-height:1em}:host .modal-header-block{text-align:center}:host .modal-content-block{overflow-x:hidden;margin-bottom:30px;text-align:center}:host .modal-content-block ::ng-deep app-ui-link-bg+app-ui-link-bg{margin-top:15px;display:inline-block}:host .modal-btm-block{text-align:center}@media (max-width:1023px){:host .modal-btm-block.fixed{position:absolute;bottom:-30px;text-align:center;box-shadow:none}}"]
                }] }
    ];
    UiModalStyleImgBaseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleImgBaseComponent.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isBackdropClose: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
        onScrollContentBtm: [{ type: Output }]
    };
    return UiModalStyleImgBaseComponent;
}(UiModalBaseComponent));
export { UiModalStyleImgBaseComponent };
if (false) {
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.isPopupOpenChange;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.close;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.modalId;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.typeBtn;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.isHasBtmBlock;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.isBackdropClose;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.classModalOpen;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.classBtnFix;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.classBtmBlock;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.classContentFixStyle;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.isTooHeight;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.modalHeight;
    /**
     * @type {?}
     * @private
     */
    UiModalStyleImgBaseComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.modalBlock;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.contentBlock;
    /** @type {?} */
    UiModalStyleImgBaseComponent.prototype.onScrollContentBtm;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleImgBaseComponent.prototype.changeDector;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleImgBaseComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleImgBaseComponent.prototype.modalManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtaW1nLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS1pbWctYmFzZS91aS1tb2RhbC1zdHlsZS1pbWctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQ3pNLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RjtJQVNrRCx3REFBb0I7SUFxRHBFLHNDQUNZLFlBQStCLEVBQy9CLFVBQXNCLEVBQ3RCLFlBQTBCO1FBSHRDLFlBSUUsa0JBQU0sWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUNsQztRQUpXLGtCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBWSxHQUFaLFlBQVksQ0FBYztRQXZENUIsdUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxXQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk1QixhQUFPLEdBQVcsUUFBUSxDQUFDLENBQUUsNkhBQTZIO1FBQzFKLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHFCQUFlLEdBQVksSUFBSSxDQUFDLENBQUUsMENBQTBDO1FBRzlFLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLDBCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyxp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eUM7O0lBQ3pDLG1EQUFvQzs7SUFDcEMsbURBQW1COzs7OztJQUluQixvREFBNkI7O0lBeUI3QixrREFBZ0Q7O0lBRWhELG9EQUFvRDs7SUErRXBELDBEQUFrRDs7Ozs7SUF2RWhELG9EQUF5Qzs7Ozs7SUFDekMsa0RBQWdDOzs7OztJQUNoQyxvREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpTW9kYWxCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktbW9kYWwtYmFzZS91aS1tb2RhbC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbE1hbmFnZXIgfSBmcm9tICcuLi91aS1tb2RhbC1jb250cm9sL21vZGFsLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBhbmltYXRpb25Nb2RhbE9wZW4sIGFuaW1hdGlvbk1vZGFsQ2xvc2V9IGZyb20gJy4uLy4uL21vZGVsL0FuaW1hdGlvbi9BbmltYXRpb25Nb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tb2RhbC1zdHlsZS1pbWctYmFzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1tb2RhbC1zdHlsZS1pbWctYmFzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLXN0eWxlLWltZy1iYXNlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25Nb2RhbE9wZW4sIGFuaW1hdGlvbk1vZGFsQ2xvc2VcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbFN0eWxlSW1nQmFzZUNvbXBvbmVudCBleHRlbmRzIFVpTW9kYWxCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBpc1BvcHVwT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgQElucHV0KCkgbW9kYWxJZDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlQnRuOiBzdHJpbmcgPSAnc3R5bGUxJzsgIC8vIHN0eWxlMSA9PSBub3JtYWwgLS0gcGFkZGluZy1ib3QgdG9tOiAzMHB4ICwgc3R5bGUyID09IHdpdGggZ3JleSBidG4gLSBwYWRkaW5nLSBidG0gMThweCAsIHN0eWxlMyA9PSBubyBwYWRkaW5nIC0gY3VzdG9taXplXG4gIEBJbnB1dCgpIGlzSGFzQnRtQmxvY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0JhY2tkcm9wQ2xvc2U6IGJvb2xlYW4gPSB0cnVlOyAgLy8gaXMgYmFja2dyb3VuZCBjbGljayBjYW4gY2xvc2UgdGhlIHBvcHVwXG5cbiAgcHVibGljIGNsYXNzTW9kYWxPcGVuOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0J0bkZpeDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjbGFzc0J0bUJsb2NrOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0NvbnRlbnRGaXhTdHlsZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpc1Rvb0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbW9kYWxIZWlnaHQ7XG5cblxuXG4gIHByaXZhdGUgX2lzUG9wdXBPcGVuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGlzUG9wdXBPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbjtcbiAgfVxuICBzZXQgaXNQb3B1cE9wZW4odmFsKSB7XG5cbiAgICB0aGlzLl9pc1BvcHVwT3BlbiA9IHZhbDtcbiAgICB0aGlzLmlzUG9wdXBPcGVuQ2hhbmdlLmVtaXQodGhpcy5faXNQb3B1cE9wZW4pO1xuICAgIC8vIGxldCBib2R5IGZpeGVkIGFuZCBzdG9wIHNjcm9sbCBpZiBwb3B1cCBvcGVuXG4gICAgdGhpcy5yZW5kZXJCdG1TcGFjZSgpO1xuICAgIHRoaXMuY2hlY2tNb2RhbE9wZW5TdGF0dXModGhpcy5faXNQb3B1cE9wZW4pO1xuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsQ29udGVudFRvVG9wKCk7XG4gICAgXG5cblxuICAgIGlmICh0aGlzLl9pc1BvcHVwT3Blbikge1xuICAgICAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG5cbiAgfSAvLyBlbmQgc2V0IGlzUG9wdXBPcGVuXG4gIC8vIGFsbCBtb2RhbCBcbiAgQFZpZXdDaGlsZCgnbW9kYWxCbG9jaycpIG1vZGFsQmxvY2s6IEVsZW1lbnRSZWY7XG4gIC8vIGNvbnRlbnQgbW9kYWxcbiAgQFZpZXdDaGlsZCgnY29udGVudEJsb2NrJykgY29udGVudEJsb2NrOiBFbGVtZW50UmVmO1xuXG5cblxuXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIpIHtcbiAgICBzdXBlcihtb2RhbE1hbmFnZXIsIGNoYW5nZURlY3Rvcik7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyTW9kYWxGaXhlZFN0eWxlKCk7XG4gICAgdGhpcy5kZXRlY3RTY3JvbGwodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgXG4gICAgdGhpcy5yZW5kZXJNb2RhbEZpeGVkU3R5bGUoKTtcbiAgfVxuXG5cbiAgc2Nyb2xsQ29udGVudFRvVG9wKCl7XG4gICAgbGV0IHRleHRDb250ZW50QmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLWNvbnRlbnQtYmxvY2snKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGxldCBjb250ZW50IGFyZWEgd2hpY2ggaGFzIHNjcm9sbCBiYWNrIHRvIHRoZSB0b3AgXG4gICAgICBbXS5mb3JFYWNoLmJpbmQodGV4dENvbnRlbnRCbG9jaywgZnVuY3Rpb24gKHRleHRDb250ZW50KSB7XG4gICAgICAgIHRleHRDb250ZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KSgpO1xuICAgIH0sIDUwMCkgIC8vIGVuZCBvZiBzZXR0aW1lb3V0XG5cbiAgfVxuXG4gIFxuICByZW5kZXJNb2RhbEZpeGVkU3R5bGUoKXtcbiAgICAgIHRoaXMubW9kYWxIZWlnaHQgPSAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJsb2NrJykub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5jbGFzc0J0bkZpeCA9IHRoaXMubW9kYWxIZWlnaHQgPj0gNjAwID8gJ2J0bi1zdHlsZS1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2xhc3NDb250ZW50Rml4U3R5bGUgPSB0aGlzLm1vZGFsSGVpZ2h0ID49IDYwMCA/ICdzdHlsZS1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2xhc3NNb2RhbEZpeCA9ICB0aGlzLm1vZGFsSGVpZ2h0ID49IDYwMCA/ICdzdHlsZS1tb2RhbC1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29udGVudFRvVG9wKGV2ZW50KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQgIT0gdW5kZWZpbmVkKSBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5pc0hhc0J0bUJsb2NrID8gdGhpcy5jbGFzc0J0bUJsb2NrID0gJycgOiB0aGlzLmNsYXNzQnRtQmxvY2sgPSAnIHN0eWxlLW5vLWJ0bSc7XG4gICAgdGhpcy5jbGFzc01vYmlsZUJ0bk5vRml4ID0gdGhpcy5pc01vYmlsZUJ0bUJ0bkZpeCA/ICcnIDogJ3N0eWxlLW1vYmlsZS1idG4tbm8tZml4JztcbiAgICB0aGlzLmNvbnRlbnRCbG9jay5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG4gIGlzT3BlblN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1BvcHVwT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuXG4gIH1cbiAgaXNCZ09wZW5TdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQb3B1cE9wZW4gPyAnYmdPcGVuJyA6ICdiZ0Nsb3NlZCc7XG4gIH1cbiAgY2xvc2VIYW5kbGVyKCkge1xuICAgIHRoaXMuaXNQb3B1cE9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoZmFsc2UpO1xuICB9XG4gIGJhY2tkcm9wQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNCYWNrZHJvcENsb3NlKSB7XG4gICAgICB0aGlzLmNsb3NlSGFuZGxlcigpO1xuICAgIH1cbiAgfVxuICAvL2RldGVjdCBpZiBjb250ZW50IGFyZWEgc2Nyb2xsIHRvIGJvdHRvbSBhZGQgYSBjbGFzcyBpbiBtb2RhbGJsb2NrXG4gIEBPdXRwdXQoKSBvblNjcm9sbENvbnRlbnRCdG0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRldGVjdFNjcm9sbChldmVudCkge1xuICAgIFxuICAgLy8gY29uc29sZS5sb2coJ2luIG1vZGFsIGRldGV0ZWN0IHNjcm9sbCBldmVudCcsIGV2ZW50KTtcbiAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgYXRCb3R0b20gPSBmYWxzZVxuICAgIGlmIChlbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgYXRCb3R0b20gPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDw9IChlbGVtZW50LmNsaWVudEhlaWdodCArIDUwKTtcbiAgICAgLy8gY29uc29sZS5sb2coJ2lmIGF0Qm90dG9tJywgYXRCb3R0b20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdEJvdHRvbSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGV0ZWN0IHNjcm9sbCBhdEJvdHRvbScsIGF0Qm90dG9tKTtcbiAgICB0aGlzLm9uU2Nyb2xsQ29udGVudEJ0bS5lbWl0KGF0Qm90dG9tKTtcblxuICAgIGlmIChhdEJvdHRvbSkge1xuICAgICAgLy9jb25zb2xlLmxvZygnaWYgYXRCb3R0b20nLCBhdEJvdHRvbSk7XG4gICAgICBpZiAodGhpcy5tb2RhbEJsb2NrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJsb2NrLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2Nyb2xsLW9uLWJ0bScpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==