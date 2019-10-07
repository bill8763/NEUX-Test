/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class UIMainLeftComponent {
    /**
     * @param {?} changeDector
     * @param {?} elementRef
     */
    constructor(changeDector, elementRef) {
        this.changeDector = changeDector;
        this.elementRef = elementRef;
        this.moreTitle = '';
        this.menuHeaderTitle = '';
        this.updateTimeTitle = '';
        this.updateTime = null;
        this._isMoreOpen = false;
        this.isMoreOpenChange = new EventEmitter();
        this._isMenuHeaderOpen = false;
        this.isMenuHeaderOpenChange = new EventEmitter();
        this._mobileContentHeight = 0;
        this.mobileContentHeightChange = new EventEmitter();
        this.menuFooterHeight = 0;
    }
    /**
     * @return {?}
     */
    get isMoreOpen() {
        return this._isMoreOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isMoreOpen(val) {
        this._isMoreOpen = val;
        this.isMoreOpenChange.emit(this._isMoreOpen);
        // calculate menu footer height;
        /** @type {?} */
        let _this = this;
        if (val) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let menuFooter_ele = _this.menuFooter.nativeElement;
                /** @type {?} */
                let menuFooter_size = menuFooter_ele.getBoundingClientRect();
                _this.menuFooterHeight = menuFooter_size.height;
                _this.calculateHeight();
                // console.warn('menuFooterHeight', _this.menuFooterHeight);
            }), 100); // end setTimeout: calculate content height
        } // end if: more popup open
    } // end set isMoreOpen
    /**
     * @return {?}
     */
    get isMenuHeaderOpen() {
        return this._isMenuHeaderOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isMenuHeaderOpen(val) {
        this._isMenuHeaderOpen = val;
        this.isMenuHeaderOpenChange.emit(this._isMenuHeaderOpen);
    } // end set isMenuHeaderOpen
    /**
     * @return {?}
     */
    get mobileContentHeight() {
        return this._mobileContentHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set mobileContentHeight(val) {
        this._mobileContentHeight = val;
        this.mobileContentHeightChange.emit(this._mobileContentHeight);
    } // end set mobileContentHeight
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    } // end ngOnInit
    // end ngOnInit
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.changeDector.markForCheck();
        this.calculateHeight();
        console.warn('resize Width: ', this.windowWidth);
    }
    /**
     * @param {?} isOpen
     * @return {?}
     */
    closeMoreHandler(isOpen) {
        // isOpen: false
        this.isMoreOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    }
    /**
     * @param {?} isOpen
     * @return {?}
     */
    closeMenuHeaderHandler(isOpen) {
        // isOpen: false
        this.isMenuHeaderOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    }
    /**
     * @return {?}
     */
    calculateHeight() {
        /** @type {?} */
        var _this = this;
        if (this.windowWidth > 1023) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let pcMenuContainer_ele = _this.pcMenuContainer.nativeElement;
                /** @type {?} */
                let pcMenuContainer_size = pcMenuContainer_ele.getBoundingClientRect();
                /** @type {?} */
                let pcMenuContainer_h = pcMenuContainer_size.height;
                /** @type {?} */
                let menuLogo_ele = _this.menuLogo.nativeElement;
                /** @type {?} */
                let menuLogo_size = menuLogo_ele.getBoundingClientRect();
                /** @type {?} */
                let menuLogo_h = menuLogo_size.height;
                /** @type {?} */
                let pcMenuFooter_ele = _this.pcMenuFooter.nativeElement;
                /** @type {?} */
                let pcMenuFooter_size = pcMenuFooter_ele.getBoundingClientRect();
                /** @type {?} */
                let pcMenuFooter_h = pcMenuFooter_size.height;
                /** @type {?} */
                let pcMenuList_ele = _this.pcMenuList.nativeElement;
                pcMenuList_ele.style.height = (_this.windowHeight - menuLogo_h - pcMenuFooter_h - 20) + 'px';
                /** @type {?} */
                let pcLayout_ele = _this.pcLayout.nativeElement;
                pcLayout_ele.style.height = _this.windowHeight + 'px';
                pcLayout_ele.style.maxWidth = _this.windowWidth + 'px';
            }), 100);
        } // end if: >= 1024
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let mobileHeader_ele = _this.mobileHeader.nativeElement;
                /** @type {?} */
                let mobileHeader_size = mobileHeader_ele.getBoundingClientRect();
                /** @type {?} */
                let mobileHeader_h = mobileHeader_size.height;
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                if (_this.menuFooterHeight == 0) {
                    /** @type {?} */
                    let menuFooter_ele = _this.menuFooter.nativeElement;
                    /** @type {?} */
                    let menuFooter_size = menuFooter_ele.getBoundingClientRect();
                    _this.menuFooterHeight = menuFooter_size.height;
                    console.log("menuFooter_size:", menuFooter_size);
                }
                /** @type {?} */
                let contentBlock_ele = _this.contentBlock.nativeElement;
                _this.mobileContentHeight = (window.innerHeight - mobileHeader_h - _this.menuFooterHeight);
                console.log("window.innerHeight:", window.innerHeight);
                console.log("mobileHeader_h:", mobileHeader_h);
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                contentBlock_ele.style.height = _this.mobileContentHeight + 'px';
                // console.warn('mobile', _this.menuFooterHeight);
            }), 500);
        }
        this.changeDector.markForCheck();
    } // end calculateHeight
    // end calculateHeight
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.calculateHeight();
        console.log("calculateHeight");
    }
}
UIMainLeftComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-main-left',
                template: "<ng-template *ngIf=\"this.windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #lastUpdateTime>\n  <div *ngIf=\"updateTime\" class=\"last-update-time\">\n    <div class=\"icon-block\">\n      <img src=\"assets/img/last-update-time.svg\" alt=\"\">\n    </div>\n    <div class=\"descrp-block\">\n      <span>{{updateTimeTitle}} : </span>\n      <span>{{updateTime}}</span>\n      <!-- <span>24 Jun 2019 13:12</span> -->\n    </div>\n  </div>\n</ng-template>\n\n<!-- content template -->\n<ng-template #menuLogoContent>\n  <div #menuLogo class=\"ui-main-logo\">\n    <img [style.display]=\"this.windowWidth < 1024? 'none':'inline-block'\" src=\"assets/img/logo-w.svg\" />\n    <img [style.display]=\"this.windowWidth < 1024? 'inline-block':'none'\" src=\"assets/img/logo.svg\" />\n  </div>\n</ng-template>\n<!-- end template: menuLogoContent -->\n\n<ng-template #menuBtmContent>\n  <ng-content select=\"[menu-bottom]\"></ng-content>\n</ng-template>\n  <!-- end template: menuBtmContent -->\n\n<ng-template #mainContent>\n  <div #contentBlock class=\"ui-main-content\">\n      <ng-content select=\"[main]\"></ng-content>\n  </div>\n</ng-template>\n<!-- end template: mainContent -->\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n  <div #mobileHeader class=\"ui-main-header\">\n    <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n    <div class=\"ui-main-header-menu-btn\" (click)=\"isMenuHeaderOpen = true\">\n      <img src=\"./assets/img/nav-icon-btn.svg\" />\n    </div>\n  </div>\n  <!-- end: ui-main-header -->\n\n  <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n\n  <div #menuFooter class=\"ui-main-menu stop-scroll-block\" [ngClass]=\"_isMoreOpen ? 'menuMoreOpen':''\">\n    <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n    <ng-content select=\"[menu-footer]\"></ng-content>\n    <div class=\"safe-area-block\"></div>\n  </div>\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMenuHeaderOpen\" (close)=\"closeMenuHeaderHandler($event)\"\n    [isFull]=\"true\" [fadePos]=\"'right'\">\n    <ng-container popupBlock=popup-title>{{menuHeaderTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <div class=\"ui-main-header-nav\">\n        <ng-content select=\"[menu-header]\"></ng-content>\n      </div>\n    </ng-container>\n    <ng-container popupBlock=popup-btm>\n      <div class=\"ui-main-header-btm\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: ui-main-header-nav -->\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMoreOpen\" (close)=\"closeMoreHandler($event)\"\n    [outerMinusHeight]=\"menuFooterHeight\">\n    <ng-container popupBlock=popup-title>{{moreTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <ng-content select=\"[menu-footer-more]\"></ng-content>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: footer more -->\n</ng-template>\n<!-- end: mobile -->\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n  <div #pcLayout class='ui-row' >\n    <div #pcMenuContainer class='ui-main-left'>\n      <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n      <div #pcMenuList class=\"ui-main-menu stop-scroll-block\">\n        <ng-content select=\"[menu-list]\"></ng-content>\n      </div>\n      <div #pcMenuFooter class=\"ui-main-menu-footer\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </div>\n    <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n  </div>\n</ng-template>\n<!-- end: pc -->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.safe-area-block{background-color:#000}@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-bottom)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-bottom)}}.last-update-time{position:fixed;display:flex;align-items:center;justify-content:center;right:0;bottom:0;z-index:99;background-color:#c2c2c2;width:200px;height:24px}.last-update-time .icon-block{width:16px;margin-right:10px;font-size:0}.last-update-time .icon-block img{width:100%}.last-update-time .descrp-block span{color:#414141}.ui-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;overflow:hidden}.ui-main-left{width:10rem;min-width:160px;min-height:100%;padding:0;color:#fff;background:linear-gradient(to top,#0068b7,#003781)}.ui-main-logo{padding:15px 15px 0}.ui-main-logo img{max-width:90px;width:100%}@media screen and (min-width:1025px){.ui-main-logo img{max-width:9vw}}.ui-main-menu{max-height:100vh;margin-top:20px;overflow:hidden;overflow-y:auto;z-index:88}.ui-main-menu .last-update-time{position:relative;right:auto;bottom:0;padding-right:10px;justify-content:flex-end;width:100%}.ui-main-menu .last-update-time .icon-block{width:16px}.ui-main-menu .last-update-time .icon-block img{width:100%}.ui-main-menu .last-update-time .descrp-block span{color:#414141}.ui-main-content{flex:1;min-width:1px;overflow:visible;height:100%}.ui-main-header{display:flex;justify-content:space-between;align-items:center;padding:14px 15px;position:relative;border-bottom:1px solid #ececec}.ui-main-header .ui-main-logo{padding:0}.ui-main-header .ui-main-logo img{height:auto}.ui-main-menu-footer.ui-main-menu-overflow{background-color:rgba(255,255,255,.3)}@media screen and (max-width:1023px){.ui-main-content{overflow:hidden}.ui-main-menu{position:fixed;bottom:0;width:100%;margin:0}.ui-main-menu.menuMoreOpen{z-index:111}}"]
            }] }
];
UIMainLeftComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
UIMainLeftComponent.propDecorators = {
    moreTitle: [{ type: Input }],
    menuHeaderTitle: [{ type: Input }],
    updateTimeTitle: [{ type: Input }],
    updateTime: [{ type: Input }],
    isMoreOpen: [{ type: Input }],
    isMoreOpenChange: [{ type: Output }],
    isMenuHeaderOpen: [{ type: Input }],
    isMenuHeaderOpenChange: [{ type: Output }],
    mobileContentHeight: [{ type: Input }],
    mobileContentHeightChange: [{ type: Output }],
    contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
    menuFooter: [{ type: ViewChild, args: ['menuFooter',] }],
    menuLogo: [{ type: ViewChild, args: ['menuLogo',] }],
    mobileHeader: [{ type: ViewChild, args: ['mobileHeader',] }],
    pcMenuContainer: [{ type: ViewChild, args: ['pcMenuContainer',] }],
    pcMenuList: [{ type: ViewChild, args: ['pcMenuList',] }],
    pcMenuFooter: [{ type: ViewChild, args: ['pcMenuFooter',] }],
    pcLayout: [{ type: ViewChild, args: ['pcLayout',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UIMainLeftComponent.prototype.moreTitle;
    /** @type {?} */
    UIMainLeftComponent.prototype.menuHeaderTitle;
    /** @type {?} */
    UIMainLeftComponent.prototype.updateTimeTitle;
    /** @type {?} */
    UIMainLeftComponent.prototype.updateTime;
    /** @type {?} */
    UIMainLeftComponent.prototype._isMoreOpen;
    /** @type {?} */
    UIMainLeftComponent.prototype.isMoreOpenChange;
    /** @type {?} */
    UIMainLeftComponent.prototype._isMenuHeaderOpen;
    /** @type {?} */
    UIMainLeftComponent.prototype.isMenuHeaderOpenChange;
    /** @type {?} */
    UIMainLeftComponent.prototype._mobileContentHeight;
    /** @type {?} */
    UIMainLeftComponent.prototype.mobileContentHeightChange;
    /** @type {?} */
    UIMainLeftComponent.prototype.contentBlock;
    /** @type {?} */
    UIMainLeftComponent.prototype.menuFooter;
    /** @type {?} */
    UIMainLeftComponent.prototype.menuLogo;
    /** @type {?} */
    UIMainLeftComponent.prototype.mobileHeader;
    /** @type {?} */
    UIMainLeftComponent.prototype.pcMenuContainer;
    /** @type {?} */
    UIMainLeftComponent.prototype.pcMenuList;
    /** @type {?} */
    UIMainLeftComponent.prototype.pcMenuFooter;
    /** @type {?} */
    UIMainLeftComponent.prototype.pcLayout;
    /** @type {?} */
    UIMainLeftComponent.prototype.windowWidth;
    /** @type {?} */
    UIMainLeftComponent.prototype.windowHeight;
    /** @type {?} */
    UIMainLeftComponent.prototype.menuFooterHeight;
    /**
     * @type {?}
     * @private
     */
    UIMainLeftComponent.prototype.changeDector;
    /**
     * @type {?}
     * @private
     */
    UIMainLeftComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1sZWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91aS1tYWluLWxlZnQvdWktbWFpbi1sZWZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDOUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQ2hGLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU07Ozs7O0lBb0VKLFlBQW9CLFlBQStCLEVBQVMsVUFBc0I7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxFekUsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBRTVCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBc0JqQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQVNoQiwyQkFBc0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQVN2Qiw4QkFBeUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBY3pELHFCQUFnQixHQUFXLENBQUMsQ0FBQztJQUV5RCxDQUFDOzs7O0lBM0R2RixJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFVBQVUsQ0FBQyxHQUFHO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJ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QkFDdEIsU0FBUyxTQUFDLFVBQVU7MkJBQ3BCLFNBQVMsU0FBQyxjQUFjOzhCQUN4QixTQUFTLFNBQUMsaUJBQWlCO3lCQUMzQixTQUFTLFNBQUMsWUFBWTsyQkFDdEIsU0FBUyxTQUFDLGNBQWM7dUJBQ3hCLFNBQVMsU0FBQyxVQUFVO3VCQWFwQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBekV6Qyx3Q0FBZ0M7O0lBQ2hDLDhDQUFzQzs7SUFFdEMsOENBQXNDOztJQUN0Qyx5Q0FBbUM7O0lBRW5DLDBDQUEyQjs7SUFzQjNCLCtDQUFnRDs7SUFFaEQsZ0RBQTBCOztJQVMxQixxREFBc0Q7O0lBRXRELG1EQUFpQzs7SUFTakMsd0RBQXlEOztJQUd6RCwyQ0FBb0Q7O0lBQ3BELHlDQUFnRDs7SUFDaEQsdUNBQTRDOztJQUM1QywyQ0FBb0Q7O0lBQ3BELDhDQUEwRDs7SUFDMUQseUNBQWdEOztJQUNoRCwyQ0FBb0Q7O0lBQ3BELHVDQUE0Qzs7SUFFNUMsMENBQW9COztJQUNwQiwyQ0FBcUI7O0lBQ3JCLCtDQUE2Qjs7Ozs7SUFFakIsMkNBQXVDOzs7OztJQUFDLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tYWluLWxlZnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbWFpbi1sZWZ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbWFpbi1sZWZ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVJTWFpbkxlZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1vcmVUaXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1lbnVIZWFkZXJUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgdXBkYXRlVGltZVRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdXBkYXRlVGltZTogc3RyaW5nID0gbnVsbDtcblxuICBwdWJsaWMgX2lzTW9yZU9wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzTW9yZU9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTW9yZU9wZW47XG4gIH1cbiAgc2V0IGlzTW9yZU9wZW4odmFsKSB7XG4gICAgdGhpcy5faXNNb3JlT3BlbiA9IHZhbDtcbiAgICB0aGlzLmlzTW9yZU9wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc01vcmVPcGVuKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBtZW51IGZvb3RlciBoZWlnaHQ7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBpZiAodmFsKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG1lbnVGb290ZXJfZWxlID0gX3RoaXMubWVudUZvb3Rlci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgbWVudUZvb3Rlcl9zaXplID0gbWVudUZvb3Rlcl9lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIF90aGlzLm1lbnVGb290ZXJIZWlnaHQgPSBtZW51Rm9vdGVyX3NpemUuaGVpZ2h0O1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGVIZWlnaHQoKTtcblxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ21lbnVGb290ZXJIZWlnaHQnLCBfdGhpcy5tZW51Rm9vdGVySGVpZ2h0KTtcbiAgICAgIH0sIDEwMCk7IC8vIGVuZCBzZXRUaW1lb3V0OiBjYWxjdWxhdGUgY29udGVudCBoZWlnaHRcbiAgICB9IC8vIGVuZCBpZjogbW9yZSBwb3B1cCBvcGVuXG4gIH0gLy8gZW5kIHNldCBpc01vcmVPcGVuXG4gIEBPdXRwdXQoKSBpc01vcmVPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9pc01lbnVIZWFkZXJPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBpc01lbnVIZWFkZXJPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc01lbnVIZWFkZXJPcGVuO1xuICB9XG4gIHNldCBpc01lbnVIZWFkZXJPcGVuKHZhbCkge1xuICAgIHRoaXMuX2lzTWVudUhlYWRlck9wZW4gPSB2YWw7XG4gICAgdGhpcy5pc01lbnVIZWFkZXJPcGVuQ2hhbmdlLmVtaXQodGhpcy5faXNNZW51SGVhZGVyT3Blbik7XG4gIH0gLy8gZW5kIHNldCBpc01lbnVIZWFkZXJPcGVuXG4gIEBPdXRwdXQoKSBpc01lbnVIZWFkZXJPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9tb2JpbGVDb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICBnZXQgbW9iaWxlQ29udGVudEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlQ29udGVudEhlaWdodDtcbiAgfVxuICBzZXQgbW9iaWxlQ29udGVudEhlaWdodCh2YWwpIHtcbiAgICB0aGlzLl9tb2JpbGVDb250ZW50SGVpZ2h0ID0gdmFsO1xuICAgIHRoaXMubW9iaWxlQ29udGVudEhlaWdodENoYW5nZS5lbWl0KHRoaXMuX21vYmlsZUNvbnRlbnRIZWlnaHQpO1xuICB9IC8vIGVuZCBzZXQgbW9iaWxlQ29udGVudEhlaWdodFxuICBAT3V0cHV0KCkgbW9iaWxlQ29udGVudEhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRCbG9jaycpIGNvbnRlbnRCbG9jazogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWVudUZvb3RlcicpIG1lbnVGb290ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lbnVMb2dvJykgbWVudUxvZ286IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vYmlsZUhlYWRlcicpIG1vYmlsZUhlYWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGNNZW51Q29udGFpbmVyJykgcGNNZW51Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwY01lbnVMaXN0JykgcGNNZW51TGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGNNZW51Rm9vdGVyJykgcGNNZW51Rm9vdGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwY0xheW91dCcpIHBjTGF5b3V0OiBFbGVtZW50UmVmO1xuXG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xuICBtZW51Rm9vdGVySGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfSAvLyBlbmQgbmdPbkluaXRcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVIZWlnaHQoKTtcbiAgICBjb25zb2xlLndhcm4oJ3Jlc2l6ZSBXaWR0aDogJywgdGhpcy53aW5kb3dXaWR0aCk7XG4gIH1cblxuICBjbG9zZU1vcmVIYW5kbGVyKGlzT3Blbikge1xuICAgIC8vIGlzT3BlbjogZmFsc2VcbiAgICB0aGlzLmlzTW9yZU9wZW4gPSBpc09wZW47XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgLy8gdGhpcy5jbG9zZU1vcmUuZW1pdChpc09wZW4pO1xuICB9XG5cbiAgY2xvc2VNZW51SGVhZGVySGFuZGxlcihpc09wZW4pIHtcbiAgICAvLyBpc09wZW46IGZhbHNlXG4gICAgdGhpcy5pc01lbnVIZWFkZXJPcGVuID0gaXNPcGVuO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIC8vIHRoaXMuY2xvc2VNb3JlLmVtaXQoaXNPcGVuKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUhlaWdodCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwY01lbnVDb250YWluZXJfZWxlID0gX3RoaXMucGNNZW51Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBwY01lbnVDb250YWluZXJfc2l6ZSA9IHBjTWVudUNvbnRhaW5lcl9lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBwY01lbnVDb250YWluZXJfaCA9IHBjTWVudUNvbnRhaW5lcl9zaXplLmhlaWdodDtcblxuICAgICAgICBsZXQgbWVudUxvZ29fZWxlID0gX3RoaXMubWVudUxvZ28ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IG1lbnVMb2dvX3NpemUgPSBtZW51TG9nb19lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBtZW51TG9nb19oID0gbWVudUxvZ29fc2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IHBjTWVudUZvb3Rlcl9lbGUgPSBfdGhpcy5wY01lbnVGb290ZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHBjTWVudUZvb3Rlcl9zaXplID0gcGNNZW51Rm9vdGVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHBjTWVudUZvb3Rlcl9oID0gcGNNZW51Rm9vdGVyX3NpemUuaGVpZ2h0O1xuXG4gICAgICAgIGxldCBwY01lbnVMaXN0X2VsZSA9IF90aGlzLnBjTWVudUxpc3QubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcGNNZW51TGlzdF9lbGUuc3R5bGUuaGVpZ2h0ID0gKF90aGlzLndpbmRvd0hlaWdodCAtIG1lbnVMb2dvX2ggLSBwY01lbnVGb290ZXJfaCAtIDIwKSArICdweCc7XG5cbiAgICAgICAgbGV0IHBjTGF5b3V0X2VsZSA9IF90aGlzLnBjTGF5b3V0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHBjTGF5b3V0X2VsZS5zdHlsZS5oZWlnaHQgPSBfdGhpcy53aW5kb3dIZWlnaHQgKyAncHgnO1xuICAgICAgICBwY0xheW91dF9lbGUuc3R5bGUubWF4V2lkdGggPSBfdGhpcy53aW5kb3dXaWR0aCArICdweCc7XG5cblxuICAgICAgfSwgMTAwKTtcbiAgICB9IC8vIGVuZCBpZjogPj0gMTAyNFxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBtb2JpbGVIZWFkZXJfZWxlID0gX3RoaXMubW9iaWxlSGVhZGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBtb2JpbGVIZWFkZXJfc2l6ZSA9IG1vYmlsZUhlYWRlcl9lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBtb2JpbGVIZWFkZXJfaCA9IG1vYmlsZUhlYWRlcl9zaXplLmhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2coXCJfdGhpcy5tZW51Rm9vdGVySGVpZ2h0OlwiLCBfdGhpcy5tZW51Rm9vdGVySGVpZ2h0KTtcblxuICAgICAgICBpZiAoX3RoaXMubWVudUZvb3RlckhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgbGV0IG1lbnVGb290ZXJfZWxlID0gX3RoaXMubWVudUZvb3Rlci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGxldCBtZW51Rm9vdGVyX3NpemUgPSBtZW51Rm9vdGVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBfdGhpcy5tZW51Rm9vdGVySGVpZ2h0ID0gbWVudUZvb3Rlcl9zaXplLmhlaWdodDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnVGb290ZXJfc2l6ZTpcIiwgbWVudUZvb3Rlcl9zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250ZW50QmxvY2tfZWxlID0gX3RoaXMuY29udGVudEJsb2NrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIF90aGlzLm1vYmlsZUNvbnRlbnRIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gbW9iaWxlSGVhZGVyX2ggLSBfdGhpcy5tZW51Rm9vdGVySGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5kb3cuaW5uZXJIZWlnaHQ6XCIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlSGVhZGVyX2g6XCIsIG1vYmlsZUhlYWRlcl9oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJfdGhpcy5tZW51Rm9vdGVySGVpZ2h0OlwiLCBfdGhpcy5tZW51Rm9vdGVySGVpZ2h0KTtcbiAgICAgICAgY29udGVudEJsb2NrX2VsZS5zdHlsZS5oZWlnaHQgPSBfdGhpcy5tb2JpbGVDb250ZW50SGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ21vYmlsZScsIF90aGlzLm1lbnVGb290ZXJIZWlnaHQpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH0gLy8gZW5kIGNhbGN1bGF0ZUhlaWdodFxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2FsY3VsYXRlSGVpZ2h0XCIpO1xuICB9XG5cblxufVxuIl19