/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
//import { trigger, state, style, animate, transition } from '@angular/animations';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { animationModalOpen, animationModalClose } from '../../model/Animation/AnimationModal';
var UiModalStyleText1Component = /** @class */ (function (_super) {
    tslib_1.__extends(UiModalStyleText1Component, _super);
    function UiModalStyleText1Component(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isScrollToTop = false;
        _this.isBackdropClose = true; // is background click can close the popup
        _this.isMobileStyleFullPage = true; // true is mobile style is overlap; false is keep modal
        _this.isTooHeight = false;
        _this.classMobileStyleFull = 'type-full-page'; // style full page or not  in modal-all-block
        _this.classMobileStyleFullDetail = 'style-type-mobile-full'; // style full page or not in modal-block
        _this._isPopupOpen = false;
        _this.windowWidth = window.innerWidth;
        //detect if content area scroll to bottom add a class in modalblock
        _this.onScrollContentBtm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UiModalStyleText1Component.prototype, "isPopupOpen", {
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
            var _this = this;
            this._isPopupOpen = val;
            this.isPopupOpenChange.emit(this._isPopupOpen);
            this.renderBtmSpace();
            // let body fixed and stop scroll if popup open
            this.checkModalOpenStatus(this._isPopupOpen);
            if (this._isPopupOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    // need to scroll to top
                    /** @type {?} */
                    var modalContentBlock_ele = _this.modalBlock.nativeElement.querySelector('div.modal-content-block');
                    if (_this.isScrollToTop && modalContentBlock_ele !== null) {
                        modalContentBlock_ele.scrollTop = 0;
                    }
                    _this.changeDector.markForCheck();
                }), 500); // end of settimeout
            } // end if: popup open
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    // after get height render modal style
    // after get height render modal style
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.renderModalFixedStyle = 
    // after get height render modal style
    /**
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
     * @return {?}
     */
    UiModalStyleText1Component.prototype.renderModalBasicStyle = /**
     * @return {?}
     */
    function () {
        // mobile style
        this.classMobileStyleFull = this.isMobileStyleFullPage ? 'type-full-page' : '';
        this.classMobileStyleFullDetail = this.isMobileStyleFullPage ? 'style-type-mobile-full' : '';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.isHasBtmBlock ? this.classBtmBlock = '' : this.classBtmBlock = ' style-no-btm';
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.windowWidth = window.innerWidth;
        this.renderModalBasicStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpenChange.emit(false);
        this.close.emit(false);
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.backdropClose = /**
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
    UiModalStyleText1Component.prototype.detectScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('event', event);
        /** @type {?} */
        var element = event.target;
        /** @type {?} */
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            if (this.modalBlock != null) {
                this.modalBlock.nativeElement.classList.add('style-scroll-on-btm');
            }
        }
        this.onScrollContentBtm.emit(atBottom);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleText1Component.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = window.innerWidth;
    };
    UiModalStyleText1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-text1',
                    template: "<ng-template #btmTemplate>\n    <div #modalBtm class=\"modal-btm-block\" [ngClass]=\"[typeBtn, classBtnFix]\">\n        <ng-content select=\"[textType=modal-btm-detail]\"></ng-content>\n    </div>\n</ng-template>\n\n\n\n<div class=\"modal-component-block\" [ngClass]=\"[(_isPopupOpen ? ' modal-open': ' modal-close'), classContentFull, classBtmBlock, classMobileBtnNoFix, styleModelBtm, classModalFix]\" >\n  <div *ngIf=\"_isPopupOpen\" class=\"modal-backdrop\"></div>\n  <div class=\"modal-all-block type-full-page\" [ngClass]=\"classMobileStyleFull\">\n    <div #modalBlock class=\"modal-block style-type-mobile-full\" [ngClass]=\"classMobileStyleFullDetail\" >\n        <div class=\"modal-container-block\">\n          <div class=\"safe-area-block\"></div>\n          \n          <!-- title -->\n          <div class=\"modal-header-block\">\n            <div class=\"modal-btn-back show-mobile\">\n                <div class=\"back-icon-block\" (click)=\"closeHandler()\">\n                  <img src=\"./assets/img/icon-arrow-white.svg\" alt=\"back\">\n                </div>\n            </div>\n            <h2 #modalHeader class=\"modal-title\"><ng-content select=\"[textType=modal-title-detail]\"></ng-content></h2>\n            <div *ngIf=\"isBackdropClose && windowWidth >=768\" class=\"modal-btn-close\" (click)=\"closeHandler()\">\n                <img src=\"./assets/img/icon-close-grey.svg\">\n            </div>\n          </div>\n          <!-- end of title -->\n          <!-- content -->\n          <div #modalContent class=\"modal-content-block form-stop-scroll form-scroll-content\" [ngClass]=\"classContentFixStyle\" (scroll)=\"detectScroll($event)\">\n                <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n                <ng-container *ngIf=\"!isShowFixBtmTemp\">\n                  <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n          </div>\n          <!-- end of content -->\n          <!-- btm -->\n          <ng-container *ngIf=\"isShowFixBtmTemp\">\n              <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n          </ng-container>\n          \n          \n          <!-- end of btm -->\n          <div class=\"safe-area-block-bottom\"></div>\n        </div>\n    </div>\n  </div>\n</div>\n<!-- modal for normal btm-block -->\n\n\n",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-container-block{position:static}:host .modal-header-block{text-align:center}:host .modal-header-block .modal-title{font-size:1.125rem;font-weight:700;line-height:normal}@media (min-width:769px){:host .modal-header-block{padding-bottom:30px}}@media (max-width:767px){@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-top)}}:host ::ng-deep .modal-component-block{align-items:flex-start}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{left:0;opacity:0}:host ::ng-deep .modal-component-block.modal-open .modal-block{left:0;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:100vw;height:100vh;left:100vw;top:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{left:100vw;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.layout-full .modal-block.style-type-mobile-full{padding:0}:host ::ng-deep .modal-component-block.layout-full .modal-block.style-type-mobile-full .modal-content-block{padding:30px 0}@supports (top:constant(safe-area-inset-top)){.safe-area-block-bottom{height:constant(safe-area-inset-bottom)}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 44px)}}@supports (top:env(safe-area-inset-top)){.safe-area-block-bottom{height:env(safe-area-inset-bottom)}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 44px)}}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-btm-block{box-shadow:none}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-btm-block.style1 app-ui-btn-layout{box-shadow:none;margin-top:30px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - 44px)}:host ::ng-deep .modal-block{padding:0;max-height:100vh;height:100%;border-radius:0}:host ::ng-deep .modal-block.style-type-mobile-full{max-width:100vw}:host ::ng-deep .modal-block.style-type-mobile-full .modal-container-block{position:relative;max-width:100%;max-height:100%;margin:0;min-height:100vh;padding:0;background:linear-gradient(180deg,#000 30%,#fff 70%,#000 100%)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block{background:linear-gradient(to bottom,#0068b7,#003781);display:flex;width:100%;padding:0;align-items:center;min-height:44px;position:relative;justify-content:center}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-title{color:#fff;font-size:1.125rem;width:calc(100% - 62px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-btn-back{color:#fff;line-height:normal;height:100%;display:inline-block;width:44px;position:absolute;left:0}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-btn-back .back-icon-block{display:flex;height:100%;vertical-align:middle;width:100%;padding-left:20px;align-items:center}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .icon-back{display:inline-flex;justify-content:center;align-items:center;position:absolute;left:0;height:100%;top:0}:host ::ng-deep .modal-block.style-type-mobile-full .nx-modal__close{display:none}:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{padding:30px 20px 0;height:calc(100vh - 44px - 52px);overflow:hidden;overflow-y:auto;background-color:#fff}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{padding:0;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2);border-radius:0;z-index:10}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 44px - 52px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{margin-bottom:constant(safe-area-inset-bottom)}}@supports (top:env(safe-area-inset-top)){:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 44px - 52px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{margin-bottom:env(safe-area-inset-bottom)}}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style1 app-ui-btn-layout,:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style2 app-ui-btn-layout,:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0;padding-top:10px;padding-bottom:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}}"]
                }] }
    ];
    UiModalStyleText1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleText1Component.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isScrollToTop: [{ type: Input }],
        isBackdropClose: [{ type: Input }],
        isMobileStyleFullPage: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        onScrollContentBtm: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalStyleText1Component;
}(UiModalBaseComponent));
export { UiModalStyleText1Component };
if (false) {
    /** @type {?} */
    UiModalStyleText1Component.prototype.isPopupOpenChange;
    /** @type {?} */
    UiModalStyleText1Component.prototype.close;
    /** @type {?} */
    UiModalStyleText1Component.prototype.modalId;
    /** @type {?} */
    UiModalStyleText1Component.prototype.typeBtn;
    /** @type {?} */
    UiModalStyleText1Component.prototype.isHasBtmBlock;
    /** @type {?} */
    UiModalStyleText1Component.prototype.isScrollToTop;
    /** @type {?} */
    UiModalStyleText1Component.prototype.isBackdropClose;
    /** @type {?} */
    UiModalStyleText1Component.prototype.isMobileStyleFullPage;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classModalOpen;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classBtnFix;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classBtmBlock;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classContentFixStyle;
    /** @type {?} */
    UiModalStyleText1Component.prototype.isTooHeight;
    /** @type {?} */
    UiModalStyleText1Component.prototype.modalHeight;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classMobileStyleFull;
    /** @type {?} */
    UiModalStyleText1Component.prototype.classMobileStyleFullDetail;
    /** @type {?} */
    UiModalStyleText1Component.prototype._isPopupOpen;
    /** @type {?} */
    UiModalStyleText1Component.prototype.windowWidth;
    /** @type {?} */
    UiModalStyleText1Component.prototype.modalBlock;
    /** @type {?} */
    UiModalStyleText1Component.prototype.onScrollContentBtm;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleText1Component.prototype.changeDector;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleText1Component.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    UiModalStyleText1Component.prototype.modalManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtdGV4dDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS10ZXh0MS91aS1tb2RhbC1zdHlsZS10ZXh0MS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQTZCLFlBQVksRUFBb0MsTUFBTSxlQUFlLENBQUM7O0FBRXJPLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RjtJQVNnRCxzREFBb0I7SUFvRGxFLG9DQUNZLFlBQStCLEVBQy9CLFVBQXNCLEVBQ3RCLFlBQTBCO1FBSHRDLFlBSUksa0JBQU0sWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUNwQztRQUpXLGtCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBWSxHQUFaLFlBQVksQ0FBYztRQXBENUIsdUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxXQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk1QixhQUFPLEdBQVcsUUFBUSxDQUFDLENBQUUsNkhBQTZIO1FBQzFKLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHFCQUFlLEdBQVksSUFBSSxDQUFDLENBQUUsMENBQTBDO1FBQzVFLDJCQUFxQixHQUFZLElBQUksQ0FBQyxDQUFDLHVEQUF1RDtRQUtoRyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QiwwQkFBb0IsR0FBUyxnQkFBZ0IsQ0FBQyxDQUFDLDZDQUE2QztRQUM1RixnQ0FBMEIsR0FBUyx3QkFBd0IsQ0FBQyxDQUFDLHdDQUF3QztRQUVyRyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUErRnZDLG1FQUFtRTtRQUN6RCx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQTlEbEQsQ0FBQztJQWpDRCxzQkFDSSxtREFBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsR0FBRztZQUFuQixpQkFrQkM7WUFqQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLCtDQUErQztZQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTdDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFFckIsVUFBVTs7O2dCQUFDOzs7d0JBRUwscUJBQXFCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO29CQUNsRyxJQUFJLEtBQUksQ0FBQyxhQUFhLElBQUkscUJBQXFCLEtBQUssSUFBSSxFQUFFO3dCQUN4RCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNuQyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUEsQ0FBRSxvQkFBb0I7YUFDOUIsQ0FBQyxxQkFBcUI7UUFDekIsQ0FBQyxDQUFDLHNCQUFzQjs7OztPQW5CdkI7SUFnQ0Qsc0NBQXNDOzs7OztJQUN0QywwREFBcUI7Ozs7O0lBQXJCO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzdGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFckMsQ0FBQzs7OztJQUNELDBEQUFxQjs7O0lBQXJCO1FBQ0csZUFBZTtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEdBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUYsQ0FBQzs7OztJQUtELDZDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUNwRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO1FBQ2xGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUcvQixDQUFDOzs7O0lBQ0Qsb0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELDBEQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELGdEQUFXOzs7SUFBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFDRCxpREFBWTs7O0lBQVo7UUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRS9DLENBQUM7Ozs7SUFDRCxtREFBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxpREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxrREFBYTs7O0lBQWI7UUFDRSxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxpREFBWTs7OztJQUFaLFVBQWEsS0FBSzs7O1lBR1osT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNOztZQUN0QixRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxZQUFZO1FBQ2hGLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBR0QsNkNBQVE7Ozs7SUFEUixVQUNTLEtBQUs7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7Z0JBbEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyw4MEVBQW9EO29CQUVwRCxVQUFVLEVBQUU7d0JBQ1Ysa0JBQWtCLEVBQUUsbUJBQW1CO3FCQUN4QztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Z0JBYmdILGlCQUFpQjtnQkFBOUQsVUFBVTtnQkFHckUsWUFBWTs7O29DQWNsQixNQUFNO3dCQUNOLE1BQU07MEJBR04sS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3dDQUNMLEtBQUs7OEJBWUwsS0FBSzs2QkF3QkwsU0FBUyxTQUFDLFlBQVk7cUNBdUV0QixNQUFNOzJCQWVOLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSzNDLGlDQUFDO0NBQUEsQUFwSkQsQ0FTZ0Qsb0JBQW9CLEdBMkluRTtTQTNJWSwwQkFBMEI7OztJQUdyQyx1REFBaUQ7O0lBQ2pELDJDQUFxQzs7SUFHckMsNkNBQXlCOztJQUN6Qiw2Q0FBb0M7O0lBQ3BDLG1EQUF1Qzs7SUFDdkMsbURBQXdDOztJQUN4QyxxREFBeUM7O0lBQ3pDLDJEQUErQzs7SUFDL0Msb0RBQThCOztJQUM5QixpREFBMkI7O0lBQzNCLG1EQUE2Qjs7SUFDN0IsMERBQW9DOztJQUNwQyxpREFBb0M7O0lBQ3BDLGlEQUFtQjs7SUFDbkIsMERBQXFEOztJQUNyRCxnRUFBbUU7O0lBRW5FLGtEQUE0Qjs7SUFDNUIsaURBQXVDOztJQXlCdkMsZ0RBQWdEOztJQXVFaEQsd0RBQWtEOzs7OztJQWxFaEQsa0RBQXlDOzs7OztJQUN6QyxnREFBZ0M7Ozs7O0lBQ2hDLGtEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSxBZnRlclZpZXdDaGVja2VkLEhvc3RMaXN0ZW5lcixBZnRlclZpZXdJbml0LEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBVaU1vZGFsQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLW1vZGFsLWJhc2UvdWktbW9kYWwtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxNYW5hZ2VyIH0gZnJvbSAnLi4vdWktbW9kYWwtY29udHJvbC9tb2RhbC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgYW5pbWF0aW9uTW9kYWxPcGVuLCBhbmltYXRpb25Nb2RhbENsb3NlfSBmcm9tICcuLi8uLi9tb2RlbC9BbmltYXRpb24vQW5pbWF0aW9uTW9kYWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1vZGFsLXN0eWxlLXRleHQxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1vZGFsLXN0eWxlLXRleHQxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbW9kYWwtc3R5bGUtdGV4dDEuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbk1vZGFsT3BlbiwgYW5pbWF0aW9uTW9kYWxDbG9zZVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbFN0eWxlVGV4dDFDb21wb25lbnQgZXh0ZW5kcyBVaU1vZGFsQmFzZUNvbXBvbmVudCAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSxBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2Vke1xuXG5cbiAgQE91dHB1dCgpIGlzUG9wdXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBASW5wdXQoKSBtb2RhbElkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGVCdG46IHN0cmluZyA9ICdzdHlsZTEnOyAgLy8gc3R5bGUxID09IG5vcm1hbCAtLSBwYWRkaW5nLWJvdCB0b206IDMwcHggLCBzdHlsZTIgPT0gd2l0aCBncmV5IGJ0biAtIHBhZGRpbmctIGJ0bSAxOHB4ICwgc3R5bGUzID09IG5vIHBhZGRpbmcgLSBjdXN0b21pemVcbiAgQElucHV0KCkgaXNIYXNCdG1CbG9jazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU2Nyb2xsVG9Ub3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNCYWNrZHJvcENsb3NlOiBib29sZWFuID0gdHJ1ZTsgIC8vIGlzIGJhY2tncm91bmQgY2xpY2sgY2FuIGNsb3NlIHRoZSBwb3B1cFxuICBASW5wdXQoKSBpc01vYmlsZVN0eWxlRnVsbFBhZ2U6IGJvb2xlYW4gPSB0cnVlOyAvLyB0cnVlIGlzIG1vYmlsZSBzdHlsZSBpcyBvdmVybGFwOyBmYWxzZSBpcyBrZWVwIG1vZGFsXG4gIHB1YmxpYyBjbGFzc01vZGFsT3Blbjogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NCdG5GaXg6IHN0cmluZztcbiAgcHVibGljIGNsYXNzQnRtQmxvY2s6IHN0cmluZztcbiAgcHVibGljIGNsYXNzQ29udGVudEZpeFN0eWxlOiBzdHJpbmc7XG4gIHB1YmxpYyBpc1Rvb0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbW9kYWxIZWlnaHQ7XG4gIHB1YmxpYyBjbGFzc01vYmlsZVN0eWxlRnVsbDpzdHJpbmc9ICd0eXBlLWZ1bGwtcGFnZSc7IC8vIHN0eWxlIGZ1bGwgcGFnZSBvciBub3QgIGluIG1vZGFsLWFsbC1ibG9ja1xuICBwdWJsaWMgY2xhc3NNb2JpbGVTdHlsZUZ1bGxEZXRhaWw6c3RyaW5nPSAnc3R5bGUtdHlwZS1tb2JpbGUtZnVsbCc7IC8vIHN0eWxlIGZ1bGwgcGFnZSBvciBub3QgaW4gbW9kYWwtYmxvY2tcblxuICBwdWJsaWMgX2lzUG9wdXBPcGVuID0gZmFsc2U7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBASW5wdXQoKSBcbiAgZ2V0IGlzUG9wdXBPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbjtcbiAgfVxuICBzZXQgaXNQb3B1cE9wZW4odmFsKSB7XG4gICAgdGhpcy5faXNQb3B1cE9wZW4gPSB2YWw7XG4gICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZS5lbWl0KHRoaXMuX2lzUG9wdXBPcGVuKTtcbiAgICB0aGlzLnJlbmRlckJ0bVNwYWNlKCk7XG4gICAgLy8gbGV0IGJvZHkgZml4ZWQgYW5kIHN0b3Agc2Nyb2xsIGlmIHBvcHVwIG9wZW5cbiAgICB0aGlzLmNoZWNrTW9kYWxPcGVuU3RhdHVzKHRoaXMuX2lzUG9wdXBPcGVuKTtcblxuICAgIGlmICh0aGlzLl9pc1BvcHVwT3Blbikge1xuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gbmVlZCB0byBzY3JvbGwgdG8gdG9wXG4gICAgICAgIGxldCBtb2RhbENvbnRlbnRCbG9ja19lbGUgPSB0aGlzLm1vZGFsQmxvY2submF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubW9kYWwtY29udGVudC1ibG9jaycpO1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbFRvVG9wICYmIG1vZGFsQ29udGVudEJsb2NrX2VsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG1vZGFsQ29udGVudEJsb2NrX2VsZS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgNTAwKSAgLy8gZW5kIG9mIHNldHRpbWVvdXRcbiAgICB9IC8vIGVuZCBpZjogcG9wdXAgb3BlblxuICB9IC8vIGVuZCBzZXQgaXNQb3B1cE9wZW5cblxuICBAVmlld0NoaWxkKCdtb2RhbEJsb2NrJykgbW9kYWxCbG9jazogRWxlbWVudFJlZjtcblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICBzdXBlcihtb2RhbE1hbmFnZXIsIGNoYW5nZURlY3Rvcik7XG4gIH1cblxuICAvLyBhZnRlciBnZXQgaGVpZ2h0IHJlbmRlciBtb2RhbCBzdHlsZVxuICByZW5kZXJNb2RhbEZpeGVkU3R5bGUoKXtcblxuICAgICAgdGhpcy5tb2RhbEhlaWdodCA9ICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmxvY2snKS5vZmZzZXRIZWlnaHQ7XG4gICAgICB0aGlzLmNsYXNzQnRuRml4ID0gdGhpcy5tb2RhbEhlaWdodCA+PSA2MDAgPyAnYnRuLXN0eWxlLWZpeGVkJyA6ICcnO1xuICAgICAgdGhpcy5jbGFzc0NvbnRlbnRGaXhTdHlsZSA9IHRoaXMubW9kYWxIZWlnaHQgPj0gNjAwID8gJ3N0eWxlLWZpeGVkJyA6ICcnO1xuICAgICAgdGhpcy5jbGFzc01vZGFsRml4ID0gIHRoaXMubW9kYWxIZWlnaHQgPj0gNjAwID8gJ3N0eWxlLW1vZGFsLWZpeGVkJyA6ICcnO1xuICAgICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgXG4gIH1cbiAgcmVuZGVyTW9kYWxCYXNpY1N0eWxlKCl7XG4gICAgIC8vIG1vYmlsZSBzdHlsZVxuICAgIHRoaXMuY2xhc3NNb2JpbGVTdHlsZUZ1bGwgID0gdGhpcy5pc01vYmlsZVN0eWxlRnVsbFBhZ2UgPyAndHlwZS1mdWxsLXBhZ2UnOiAnJztcbiAgICB0aGlzLmNsYXNzTW9iaWxlU3R5bGVGdWxsRGV0YWlsID0gdGhpcy5pc01vYmlsZVN0eWxlRnVsbFBhZ2UgPyAnc3R5bGUtdHlwZS1tb2JpbGUtZnVsbCc6ICcnO1xuICB9XG5cblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgXG4gICAgdGhpcy5pc0hhc0J0bUJsb2NrID8gdGhpcy5jbGFzc0J0bUJsb2NrID0gJycgOiB0aGlzLmNsYXNzQnRtQmxvY2sgPSAnIHN0eWxlLW5vLWJ0bSc7XG4gICAgdGhpcy5jbGFzc01vYmlsZUJ0bk5vRml4ID0gdGhpcy5pc01vYmlsZUJ0bUJ0bkZpeCA/ICcnOiAnc3R5bGUtbW9iaWxlLWJ0bi1uby1maXgnO1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnJlbmRlck1vZGFsQmFzaWNTdHlsZSgpO1xuICAgIFxuXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5yZW5kZXJNb2RhbEZpeGVkU3R5bGUoKTtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgdGhpcy5yZW5kZXJNb2RhbEZpeGVkU3R5bGUoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpe1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG5cbiAgfVxuICBpc09wZW5TdGF0dXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcblxuICB9XG4gIGlzQmdPcGVuU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbiA/ICdiZ09wZW4nIDogJ2JnQ2xvc2VkJztcbiAgfVxuICBcbiAgY2xvc2VIYW5kbGVyKCkge1xuICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIGJhY2tkcm9wQ2xvc2UoKXtcbiAgICBpZih0aGlzLmlzQmFja2Ryb3BDbG9zZSl7XG4gICAgICB0aGlzLmNsb3NlSGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vZGV0ZWN0IGlmIGNvbnRlbnQgYXJlYSBzY3JvbGwgdG8gYm90dG9tIGFkZCBhIGNsYXNzIGluIG1vZGFsYmxvY2tcbiAgQE91dHB1dCgpIG9uU2Nyb2xsQ29udGVudEJ0bSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkZXRlY3RTY3JvbGwoZXZlbnQpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcbiAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgYXRCb3R0b20gPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wID09PSBlbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGlmIChhdEJvdHRvbSkge1xuICAgICAgaWYgKHRoaXMubW9kYWxCbG9jayAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMubW9kYWxCbG9jay5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0eWxlLXNjcm9sbC1vbi1idG0nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vblNjcm9sbENvbnRlbnRCdG0uZW1pdChhdEJvdHRvbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxufVxuIl19