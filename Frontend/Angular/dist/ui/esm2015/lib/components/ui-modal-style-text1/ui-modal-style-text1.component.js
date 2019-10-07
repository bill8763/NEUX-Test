/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
//import { trigger, state, style, animate, transition } from '@angular/animations';
import { UiModalBaseComponent } from '../ui-modal-base/ui-modal-base.component';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { animationModalOpen, animationModalClose } from '../../model/Animation/AnimationModal';
export class UiModalStyleText1Component extends UiModalBaseComponent {
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
        this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        this.isHasBtmBlock = true;
        this.isScrollToTop = false;
        this.isBackdropClose = true; // is background click can close the popup
        this.isMobileStyleFullPage = true; // true is mobile style is overlap; false is keep modal
        this.isTooHeight = false;
        this.classMobileStyleFull = 'type-full-page'; // style full page or not  in modal-all-block
        this.classMobileStyleFullDetail = 'style-type-mobile-full'; // style full page or not in modal-block
        this._isPopupOpen = false;
        this.windowWidth = window.innerWidth;
        //detect if content area scroll to bottom add a class in modalblock
        this.onScrollContentBtm = new EventEmitter();
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
        this.renderBtmSpace();
        // let body fixed and stop scroll if popup open
        this.checkModalOpenStatus(this._isPopupOpen);
        if (this._isPopupOpen) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // need to scroll to top
                /** @type {?} */
                let modalContentBlock_ele = this.modalBlock.nativeElement.querySelector('div.modal-content-block');
                if (this.isScrollToTop && modalContentBlock_ele !== null) {
                    modalContentBlock_ele.scrollTop = 0;
                }
                this.changeDector.markForCheck();
            }), 500); // end of settimeout
        } // end if: popup open
    } // end set isPopupOpen
    // after get height render modal style
    /**
     * @return {?}
     */
    renderModalFixedStyle() {
        this.modalHeight = this.elementRef.nativeElement.querySelector('.modal-block').offsetHeight;
        this.classBtnFix = this.modalHeight >= 600 ? 'btn-style-fixed' : '';
        this.classContentFixStyle = this.modalHeight >= 600 ? 'style-fixed' : '';
        this.classModalFix = this.modalHeight >= 600 ? 'style-modal-fixed' : '';
        this.changeDector.markForCheck();
    }
    /**
     * @return {?}
     */
    renderModalBasicStyle() {
        // mobile style
        this.classMobileStyleFull = this.isMobileStyleFullPage ? 'type-full-page' : '';
        this.classMobileStyleFullDetail = this.isMobileStyleFullPage ? 'style-type-mobile-full' : '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.isHasBtmBlock ? this.classBtmBlock = '' : this.classBtmBlock = ' style-no-btm';
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.windowWidth = window.innerWidth;
        this.renderModalBasicStyle();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderModalFixedStyle();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.renderModalFixedStyle();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this._isPopupOpen ? 'open' : 'closed';
    }
    /**
     * @return {?}
     */
    isBgOpenStatus() {
        return this._isPopupOpen ? 'bgOpen' : 'bgClosed';
    }
    /**
     * @return {?}
     */
    closeHandler() {
        this.isPopupOpenChange.emit(false);
        this.close.emit(false);
    }
    /**
     * @return {?}
     */
    backdropClose() {
        if (this.isBackdropClose) {
            this.closeHandler();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    detectScroll(event) {
        // console.log('event', event);
        /** @type {?} */
        let element = event.target;
        /** @type {?} */
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            if (this.modalBlock != null) {
                this.modalBlock.nativeElement.classList.add('style-scroll-on-btm');
            }
        }
        this.onScrollContentBtm.emit(atBottom);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = window.innerWidth;
    }
}
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
UiModalStyleText1Component.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: ModalManager }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtc3R5bGUtdGV4dDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS10ZXh0MS91aS1tb2RhbC1zdHlsZS10ZXh0MS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBNkIsWUFBWSxFQUFvQyxNQUFNLGVBQWUsQ0FBQzs7QUFFck8sT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBVTlGLE1BQU0saUNBQWtDLFNBQVEsb0JBQW9COzs7Ozs7SUFvRGxFLFlBQ1ksWUFBK0IsRUFDL0IsVUFBc0IsRUFDdEIsWUFBMEI7UUFDbEMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUgxQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXBENUIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk1QixZQUFPLEdBQVcsUUFBUSxDQUFDLENBQUUsNkhBQTZIO1FBQzFKLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLG9CQUFlLEdBQVksSUFBSSxDQUFDLENBQUUsMENBQTBDO1FBQzVFLDBCQUFxQixHQUFZLElB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksQWZ0ZXJWaWV3Q2hlY2tlZCxIb3N0TGlzdGVuZXIsQWZ0ZXJWaWV3SW5pdCxBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVWlNb2RhbEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi91aS1tb2RhbC1iYXNlL3VpLW1vZGFsLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsTWFuYWdlciB9IGZyb20gJy4uL3VpLW1vZGFsLWNvbnRyb2wvbW9kYWwtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IGFuaW1hdGlvbk1vZGFsT3BlbiwgYW5pbWF0aW9uTW9kYWxDbG9zZX0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbk1vZGFsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tb2RhbC1zdHlsZS10ZXh0MScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1tb2RhbC1zdHlsZS10ZXh0MS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLXN0eWxlLXRleHQxLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25Nb2RhbE9wZW4sIGFuaW1hdGlvbk1vZGFsQ2xvc2VcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kYWxTdHlsZVRleHQxQ29tcG9uZW50IGV4dGVuZHMgVWlNb2RhbEJhc2VDb21wb25lbnQgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZHtcblxuXG4gIEBPdXRwdXQoKSBpc1BvcHVwT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgQElucHV0KCkgbW9kYWxJZDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlQnRuOiBzdHJpbmcgPSAnc3R5bGUxJzsgIC8vIHN0eWxlMSA9PSBub3JtYWwgLS0gcGFkZGluZy1ib3QgdG9tOiAzMHB4ICwgc3R5bGUyID09IHdpdGggZ3JleSBidG4gLSBwYWRkaW5nLSBidG0gMThweCAsIHN0eWxlMyA9PSBubyBwYWRkaW5nIC0gY3VzdG9taXplXG4gIEBJbnB1dCgpIGlzSGFzQnRtQmxvY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc1Njcm9sbFRvVG9wOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQmFja2Ryb3BDbG9zZTogYm9vbGVhbiA9IHRydWU7ICAvLyBpcyBiYWNrZ3JvdW5kIGNsaWNrIGNhbiBjbG9zZSB0aGUgcG9wdXBcbiAgQElucHV0KCkgaXNNb2JpbGVTdHlsZUZ1bGxQYWdlOiBib29sZWFuID0gdHJ1ZTsgLy8gdHJ1ZSBpcyBtb2JpbGUgc3R5bGUgaXMgb3ZlcmxhcDsgZmFsc2UgaXMga2VlcCBtb2RhbFxuICBwdWJsaWMgY2xhc3NNb2RhbE9wZW46IHN0cmluZztcbiAgcHVibGljIGNsYXNzQnRuRml4OiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0J0bUJsb2NrOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0NvbnRlbnRGaXhTdHlsZTogc3RyaW5nO1xuICBwdWJsaWMgaXNUb29IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG1vZGFsSGVpZ2h0O1xuICBwdWJsaWMgY2xhc3NNb2JpbGVTdHlsZUZ1bGw6c3RyaW5nPSAndHlwZS1mdWxsLXBhZ2UnOyAvLyBzdHlsZSBmdWxsIHBhZ2Ugb3Igbm90ICBpbiBtb2RhbC1hbGwtYmxvY2tcbiAgcHVibGljIGNsYXNzTW9iaWxlU3R5bGVGdWxsRGV0YWlsOnN0cmluZz0gJ3N0eWxlLXR5cGUtbW9iaWxlLWZ1bGwnOyAvLyBzdHlsZSBmdWxsIHBhZ2Ugb3Igbm90IGluIG1vZGFsLWJsb2NrXG5cbiAgcHVibGljIF9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgQElucHV0KCkgXG4gIGdldCBpc1BvcHVwT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW47XG4gIH1cbiAgc2V0IGlzUG9wdXBPcGVuKHZhbCkge1xuICAgIHRoaXMuX2lzUG9wdXBPcGVuID0gdmFsO1xuICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc1BvcHVwT3Blbik7XG4gICAgdGhpcy5yZW5kZXJCdG1TcGFjZSgpO1xuICAgIC8vIGxldCBib2R5IGZpeGVkIGFuZCBzdG9wIHNjcm9sbCBpZiBwb3B1cCBvcGVuXG4gICAgdGhpcy5jaGVja01vZGFsT3BlblN0YXR1cyh0aGlzLl9pc1BvcHVwT3Blbik7XG5cbiAgICBpZiAodGhpcy5faXNQb3B1cE9wZW4pIHtcbiAgICAgIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgdG8gc2Nyb2xsIHRvIHRvcFxuICAgICAgICBsZXQgbW9kYWxDb250ZW50QmxvY2tfZWxlID0gdGhpcy5tb2RhbEJsb2NrLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1vZGFsLWNvbnRlbnQtYmxvY2snKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxUb1RvcCAmJiBtb2RhbENvbnRlbnRCbG9ja19lbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBtb2RhbENvbnRlbnRCbG9ja19lbGUuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDUwMCkgIC8vIGVuZCBvZiBzZXR0aW1lb3V0XG4gICAgfSAvLyBlbmQgaWY6IHBvcHVwIG9wZW5cbiAgfSAvLyBlbmQgc2V0IGlzUG9wdXBPcGVuXG5cbiAgQFZpZXdDaGlsZCgnbW9kYWxCbG9jaycpIG1vZGFsQmxvY2s6IEVsZW1lbnRSZWY7XG5cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgc3VwZXIobW9kYWxNYW5hZ2VyLCBjaGFuZ2VEZWN0b3IpO1xuICB9XG5cbiAgLy8gYWZ0ZXIgZ2V0IGhlaWdodCByZW5kZXIgbW9kYWwgc3R5bGVcbiAgcmVuZGVyTW9kYWxGaXhlZFN0eWxlKCl7XG5cbiAgICAgIHRoaXMubW9kYWxIZWlnaHQgPSAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJsb2NrJykub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5jbGFzc0J0bkZpeCA9IHRoaXMubW9kYWxIZWlnaHQgPj0gNjAwID8gJ2J0bi1zdHlsZS1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2xhc3NDb250ZW50Rml4U3R5bGUgPSB0aGlzLm1vZGFsSGVpZ2h0ID49IDYwMCA/ICdzdHlsZS1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2xhc3NNb2RhbEZpeCA9ICB0aGlzLm1vZGFsSGVpZ2h0ID49IDYwMCA/ICdzdHlsZS1tb2RhbC1maXhlZCcgOiAnJztcbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIFxuICB9XG4gIHJlbmRlck1vZGFsQmFzaWNTdHlsZSgpe1xuICAgICAvLyBtb2JpbGUgc3R5bGVcbiAgICB0aGlzLmNsYXNzTW9iaWxlU3R5bGVGdWxsICA9IHRoaXMuaXNNb2JpbGVTdHlsZUZ1bGxQYWdlID8gJ3R5cGUtZnVsbC1wYWdlJzogJyc7XG4gICAgdGhpcy5jbGFzc01vYmlsZVN0eWxlRnVsbERldGFpbCA9IHRoaXMuaXNNb2JpbGVTdHlsZUZ1bGxQYWdlID8gJ3N0eWxlLXR5cGUtbW9iaWxlLWZ1bGwnOiAnJztcbiAgfVxuXG5cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIFxuICAgIHRoaXMuaXNIYXNCdG1CbG9jayA/IHRoaXMuY2xhc3NCdG1CbG9jayA9ICcnIDogdGhpcy5jbGFzc0J0bUJsb2NrID0gJyBzdHlsZS1uby1idG0nO1xuICAgIHRoaXMuY2xhc3NNb2JpbGVCdG5Ob0ZpeCA9IHRoaXMuaXNNb2JpbGVCdG1CdG5GaXggPyAnJzogJ3N0eWxlLW1vYmlsZS1idG4tbm8tZml4JztcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5yZW5kZXJNb2RhbEJhc2ljU3R5bGUoKTtcbiAgICBcblxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMucmVuZGVyTW9kYWxGaXhlZFN0eWxlKCk7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMucmVuZGVyTW9kYWxGaXhlZFN0eWxlKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuXG4gIH1cbiAgaXNPcGVuU3RhdHVzKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuX2lzUG9wdXBPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG5cbiAgfVxuICBpc0JnT3BlblN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cE9wZW4gPyAnYmdPcGVuJyA6ICdiZ0Nsb3NlZCc7XG4gIH1cbiAgXG4gIGNsb3NlSGFuZGxlcigpIHtcbiAgICB0aGlzLmlzUG9wdXBPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBiYWNrZHJvcENsb3NlKCl7XG4gICAgaWYodGhpcy5pc0JhY2tkcm9wQ2xvc2Upe1xuICAgICAgdGhpcy5jbG9zZUhhbmRsZXIoKTtcbiAgICB9XG4gIH1cblxuICAvL2RldGVjdCBpZiBjb250ZW50IGFyZWEgc2Nyb2xsIHRvIGJvdHRvbSBhZGQgYSBjbGFzcyBpbiBtb2RhbGJsb2NrXG4gIEBPdXRwdXQoKSBvblNjcm9sbENvbnRlbnRCdG0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGV0ZWN0U2Nyb2xsKGV2ZW50KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IGF0Qm90dG9tID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gZWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBpZiAoYXRCb3R0b20pIHtcbiAgICAgIGlmICh0aGlzLm1vZGFsQmxvY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vZGFsQmxvY2submF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1zY3JvbGwtb24tYnRtJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25TY3JvbGxDb250ZW50QnRtLmVtaXQoYXRCb3R0b20pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbn1cbiJdfQ==