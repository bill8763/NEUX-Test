/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UIMainLeftComponent = /** @class */ (function () {
    function UIMainLeftComponent(changeDector, elementRef) {
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
    Object.defineProperty(UIMainLeftComponent.prototype, "isMoreOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMoreOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isMoreOpen = val;
            this.isMoreOpenChange.emit(this._isMoreOpen);
            // calculate menu footer height;
            /** @type {?} */
            var _this = this;
            if (val) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var menuFooter_ele = _this.menuFooter.nativeElement;
                    /** @type {?} */
                    var menuFooter_size = menuFooter_ele.getBoundingClientRect();
                    _this.menuFooterHeight = menuFooter_size.height;
                    _this.calculateHeight();
                    // console.warn('menuFooterHeight', _this.menuFooterHeight);
                }), 100); // end setTimeout: calculate content height
            } // end if: more popup open
        } // end set isMoreOpen
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIMainLeftComponent.prototype, "isMenuHeaderOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMenuHeaderOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isMenuHeaderOpen = val;
            this.isMenuHeaderOpenChange.emit(this._isMenuHeaderOpen);
        } // end set isMenuHeaderOpen
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIMainLeftComponent.prototype, "mobileContentHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mobileContentHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._mobileContentHeight = val;
            this.mobileContentHeightChange.emit(this._mobileContentHeight);
        } // end set mobileContentHeight
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }; // end ngOnInit
    // end ngOnInit
    /**
     * @param {?} event
     * @return {?}
     */
    UIMainLeftComponent.prototype.onResize = 
    // end ngOnInit
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.changeDector.markForCheck();
        this.calculateHeight();
        console.warn('resize Width: ', this.windowWidth);
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    UIMainLeftComponent.prototype.closeMoreHandler = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        // isOpen: false
        this.isMoreOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    UIMainLeftComponent.prototype.closeMenuHeaderHandler = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        // isOpen: false
        this.isMenuHeaderOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    };
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.calculateHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
        if (this.windowWidth > 1023) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var pcMenuContainer_ele = _this.pcMenuContainer.nativeElement;
                /** @type {?} */
                var pcMenuContainer_size = pcMenuContainer_ele.getBoundingClientRect();
                /** @type {?} */
                var pcMenuContainer_h = pcMenuContainer_size.height;
                /** @type {?} */
                var menuLogo_ele = _this.menuLogo.nativeElement;
                /** @type {?} */
                var menuLogo_size = menuLogo_ele.getBoundingClientRect();
                /** @type {?} */
                var menuLogo_h = menuLogo_size.height;
                /** @type {?} */
                var pcMenuFooter_ele = _this.pcMenuFooter.nativeElement;
                /** @type {?} */
                var pcMenuFooter_size = pcMenuFooter_ele.getBoundingClientRect();
                /** @type {?} */
                var pcMenuFooter_h = pcMenuFooter_size.height;
                /** @type {?} */
                var pcMenuList_ele = _this.pcMenuList.nativeElement;
                pcMenuList_ele.style.height = (_this.windowHeight - menuLogo_h - pcMenuFooter_h - 20) + 'px';
                /** @type {?} */
                var pcLayout_ele = _this.pcLayout.nativeElement;
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
                var mobileHeader_ele = _this.mobileHeader.nativeElement;
                /** @type {?} */
                var mobileHeader_size = mobileHeader_ele.getBoundingClientRect();
                /** @type {?} */
                var mobileHeader_h = mobileHeader_size.height;
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                if (_this.menuFooterHeight == 0) {
                    /** @type {?} */
                    var menuFooter_ele = _this.menuFooter.nativeElement;
                    /** @type {?} */
                    var menuFooter_size = menuFooter_ele.getBoundingClientRect();
                    _this.menuFooterHeight = menuFooter_size.height;
                    console.log("menuFooter_size:", menuFooter_size);
                }
                /** @type {?} */
                var contentBlock_ele = _this.contentBlock.nativeElement;
                _this.mobileContentHeight = (window.innerHeight - mobileHeader_h - _this.menuFooterHeight);
                console.log("window.innerHeight:", window.innerHeight);
                console.log("mobileHeader_h:", mobileHeader_h);
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                contentBlock_ele.style.height = _this.mobileContentHeight + 'px';
                // console.warn('mobile', _this.menuFooterHeight);
            }), 500);
        }
        this.changeDector.markForCheck();
    }; // end calculateHeight
    // end calculateHeight
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.ngAfterContentInit = 
    // end calculateHeight
    /**
     * @return {?}
     */
    function () {
        this.calculateHeight();
        console.log("calculateHeight");
    };
    UIMainLeftComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-left',
                    template: "<ng-template *ngIf=\"this.windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #lastUpdateTime>\n  <div *ngIf=\"updateTime\" class=\"last-update-time\">\n    <div class=\"icon-block\">\n      <img src=\"assets/img/last-update-time.svg\" alt=\"\">\n    </div>\n    <div class=\"descrp-block\">\n      <span>{{updateTimeTitle}} : </span>\n      <span>{{updateTime}}</span>\n      <!-- <span>24 Jun 2019 13:12</span> -->\n    </div>\n  </div>\n</ng-template>\n\n<!-- content template -->\n<ng-template #menuLogoContent>\n  <div #menuLogo class=\"ui-main-logo\">\n    <img [style.display]=\"this.windowWidth < 1024? 'none':'inline-block'\" src=\"assets/img/logo-w.svg\" />\n    <img [style.display]=\"this.windowWidth < 1024? 'inline-block':'none'\" src=\"assets/img/logo.svg\" />\n  </div>\n</ng-template>\n<!-- end template: menuLogoContent -->\n\n<ng-template #menuBtmContent>\n  <ng-content select=\"[menu-bottom]\"></ng-content>\n</ng-template>\n  <!-- end template: menuBtmContent -->\n\n<ng-template #mainContent>\n  <div #contentBlock class=\"ui-main-content\">\n      <ng-content select=\"[main]\"></ng-content>\n  </div>\n</ng-template>\n<!-- end template: mainContent -->\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n  <div #mobileHeader class=\"ui-main-header\">\n    <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n    <div class=\"ui-main-header-menu-btn\" (click)=\"isMenuHeaderOpen = true\">\n      <img src=\"./assets/img/nav-icon-btn.svg\" />\n    </div>\n  </div>\n  <!-- end: ui-main-header -->\n\n  <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n\n  <div #menuFooter class=\"ui-main-menu stop-scroll-block\" [ngClass]=\"_isMoreOpen ? 'menuMoreOpen':''\">\n    <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n    <ng-content select=\"[menu-footer]\"></ng-content>\n    <div class=\"safe-area-block\"></div>\n  </div>\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMenuHeaderOpen\" (close)=\"closeMenuHeaderHandler($event)\"\n    [isFull]=\"true\" [fadePos]=\"'right'\">\n    <ng-container popupBlock=popup-title>{{menuHeaderTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <div class=\"ui-main-header-nav\">\n        <ng-content select=\"[menu-header]\"></ng-content>\n      </div>\n    </ng-container>\n    <ng-container popupBlock=popup-btm>\n      <div class=\"ui-main-header-btm\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: ui-main-header-nav -->\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMoreOpen\" (close)=\"closeMoreHandler($event)\"\n    [outerMinusHeight]=\"menuFooterHeight\">\n    <ng-container popupBlock=popup-title>{{moreTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <ng-content select=\"[menu-footer-more]\"></ng-content>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: footer more -->\n</ng-template>\n<!-- end: mobile -->\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n  <div #pcLayout class='ui-row' >\n    <div #pcMenuContainer class='ui-main-left'>\n      <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n      <div #pcMenuList class=\"ui-main-menu stop-scroll-block\">\n        <ng-content select=\"[menu-list]\"></ng-content>\n      </div>\n      <div #pcMenuFooter class=\"ui-main-menu-footer\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </div>\n    <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n  </div>\n</ng-template>\n<!-- end: pc -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.safe-area-block{background-color:#000}@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-bottom)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-bottom)}}.last-update-time{position:fixed;display:flex;align-items:center;justify-content:center;right:0;bottom:0;z-index:99;background-color:#c2c2c2;width:200px;height:24px}.last-update-time .icon-block{width:16px;margin-right:10px;font-size:0}.last-update-time .icon-block img{width:100%}.last-update-time .descrp-block span{color:#414141}.ui-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;overflow:hidden}.ui-main-left{width:10rem;min-width:160px;min-height:100%;padding:0;color:#fff;background:linear-gradient(to top,#0068b7,#003781)}.ui-main-logo{padding:15px 15px 0}.ui-main-logo img{max-width:90px;width:100%}@media screen and (min-width:1025px){.ui-main-logo img{max-width:9vw}}.ui-main-menu{max-height:100vh;margin-top:20px;overflow:hidden;overflow-y:auto;z-index:88}.ui-main-menu .last-update-time{position:relative;right:auto;bottom:0;padding-right:10px;justify-content:flex-end;width:100%}.ui-main-menu .last-update-time .icon-block{width:16px}.ui-main-menu .last-update-time .icon-block img{width:100%}.ui-main-menu .last-update-time .descrp-block span{color:#414141}.ui-main-content{flex:1;min-width:1px;overflow:visible;height:100%}.ui-main-header{display:flex;justify-content:space-between;align-items:center;padding:14px 15px;position:relative;border-bottom:1px solid #ececec}.ui-main-header .ui-main-logo{padding:0}.ui-main-header .ui-main-logo img{height:auto}.ui-main-menu-footer.ui-main-menu-overflow{background-color:rgba(255,255,255,.3)}@media screen and (max-width:1023px){.ui-main-content{overflow:hidden}.ui-main-menu{position:fixed;bottom:0;width:100%;margin:0}.ui-main-menu.menuMoreOpen{z-index:111}}"]
                }] }
    ];
    UIMainLeftComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
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
    return UIMainLeftComponent;
}());
export { UIMainLeftComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1sZWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91aS1tYWluLWxlZnQvdWktbWFpbi1sZWZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDOUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQ2hGLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBMEVFLDZCQUFvQixZQUErQixFQUFTLFVBQXNCO1FBQTlELGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsRXpFLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFXLElBQUksQ0FBQztRQUU1QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXNCakIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFTaEIsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RCx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFTdkIsOEJBQXlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWN6RCxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFFeUQsQ0FBQztJQTNEdkYsc0JBQ0ksMkNBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQUNELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUks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TTtzQ0FHTixLQUFLOzRDQVFMLE1BQU07K0JBR04sU0FBUyxTQUFDLGNBQWM7NkJBQ3hCLFNBQVMsU0FBQyxZQUFZOzJCQUN0QixTQUFTLFNBQUMsVUFBVTsrQkFDcEIsU0FBUyxTQUFDLGNBQWM7a0NBQ3hCLFNBQVMsU0FBQyxpQkFBaUI7NkJBQzNCLFNBQVMsU0FBQyxZQUFZOytCQUN0QixTQUFTLFNBQUMsY0FBYzsyQkFDeEIsU0FBUyxTQUFDLFVBQVU7MkJBYXBCLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBaUYzQywwQkFBQztDQUFBLEFBbEtELElBa0tDO1NBNUpZLG1CQUFtQjs7O0lBRTlCLHdDQUFnQzs7SUFDaEMsOENBQXNDOztJQUV0Qyw4Q0FBc0M7O0lBQ3RDLHlDQUFtQzs7SUFFbkMsMENBQTJCOztJQXNCM0IsK0NBQWdEOztJQUVoRCxnREFBMEI7O0lBUzFCLHFEQUFzRDs7SUFFdEQsbURBQWlDOztJQVNqQyx3REFBeUQ7O0lBR3pELDJDQUFvRDs7SUFDcEQseUNBQWdEOztJQUNoRCx1Q0FBNEM7O0lBQzVDLDJDQUFvRDs7SUFDcEQsOENBQTBEOztJQUMxRCx5Q0FBZ0Q7O0lBQ2hELDJDQUFvRDs7SUFDcEQsdUNBQTRDOztJQUU1QywwQ0FBb0I7O0lBQ3BCLDJDQUFxQjs7SUFDckIsK0NBQTZCOzs7OztJQUVqQiwyQ0FBdUM7Ozs7O0lBQUMseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1haW4tbGVmdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1tYWluLWxlZnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1tYWluLWxlZnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVUlNYWluTGVmdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbW9yZVRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWVudUhlYWRlclRpdGxlOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSB1cGRhdGVUaW1lVGl0bGU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB1cGRhdGVUaW1lOiBzdHJpbmcgPSBudWxsO1xuXG4gIHB1YmxpYyBfaXNNb3JlT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgaXNNb3JlT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb3JlT3BlbjtcbiAgfVxuICBzZXQgaXNNb3JlT3Blbih2YWwpIHtcbiAgICB0aGlzLl9pc01vcmVPcGVuID0gdmFsO1xuICAgIHRoaXMuaXNNb3JlT3BlbkNoYW5nZS5lbWl0KHRoaXMuX2lzTW9yZU9wZW4pO1xuXG4gICAgLy8gY2FsY3VsYXRlIG1lbnUgZm9vdGVyIGhlaWdodDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbWVudUZvb3Rlcl9lbGUgPSBfdGhpcy5tZW51Rm9vdGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBtZW51Rm9vdGVyX3NpemUgPSBtZW51Rm9vdGVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgX3RoaXMubWVudUZvb3RlckhlaWdodCA9IG1lbnVGb290ZXJfc2l6ZS5oZWlnaHQ7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignbWVudUZvb3RlckhlaWdodCcsIF90aGlzLm1lbnVGb290ZXJIZWlnaHQpO1xuICAgICAgfSwgMTAwKTsgLy8gZW5kIHNldFRpbWVvdXQ6IGNhbGN1bGF0ZSBjb250ZW50IGhlaWdodFxuICAgIH0gLy8gZW5kIGlmOiBtb3JlIHBvcHVwIG9wZW5cbiAgfSAvLyBlbmQgc2V0IGlzTW9yZU9wZW5cbiAgQE91dHB1dCgpIGlzTW9yZU9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX2lzTWVudUhlYWRlck9wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzTWVudUhlYWRlck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTWVudUhlYWRlck9wZW47XG4gIH1cbiAgc2V0IGlzTWVudUhlYWRlck9wZW4odmFsKSB7XG4gICAgdGhpcy5faXNNZW51SGVhZGVyT3BlbiA9IHZhbDtcbiAgICB0aGlzLmlzTWVudUhlYWRlck9wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc01lbnVIZWFkZXJPcGVuKTtcbiAgfSAvLyBlbmQgc2V0IGlzTWVudUhlYWRlck9wZW5cbiAgQE91dHB1dCgpIGlzTWVudUhlYWRlck9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX21vYmlsZUNvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpXG4gIGdldCBtb2JpbGVDb250ZW50SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb2JpbGVDb250ZW50SGVpZ2h0O1xuICB9XG4gIHNldCBtb2JpbGVDb250ZW50SGVpZ2h0KHZhbCkge1xuICAgIHRoaXMuX21vYmlsZUNvbnRlbnRIZWlnaHQgPSB2YWw7XG4gICAgdGhpcy5tb2JpbGVDb250ZW50SGVpZ2h0Q2hhbmdlLmVtaXQodGhpcy5fbW9iaWxlQ29udGVudEhlaWdodCk7XG4gIH0gLy8gZW5kIHNldCBtb2JpbGVDb250ZW50SGVpZ2h0XG4gIEBPdXRwdXQoKSBtb2JpbGVDb250ZW50SGVpZ2h0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgQFZpZXdDaGlsZCgnY29udGVudEJsb2NrJykgY29udGVudEJsb2NrOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtZW51Rm9vdGVyJykgbWVudUZvb3RlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWVudUxvZ28nKSBtZW51TG9nbzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbW9iaWxlSGVhZGVyJykgbW9iaWxlSGVhZGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwY01lbnVDb250YWluZXInKSBwY01lbnVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BjTWVudUxpc3QnKSBwY01lbnVMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwY01lbnVGb290ZXInKSBwY01lbnVGb290ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BjTGF5b3V0JykgcGNMYXlvdXQ6IEVsZW1lbnRSZWY7XG5cbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgd2luZG93SGVpZ2h0OiBudW1iZXI7XG4gIG1lbnVGb290ZXJIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9IC8vIGVuZCBuZ09uSW5pdFxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgIGNvbnNvbGUud2FybigncmVzaXplIFdpZHRoOiAnLCB0aGlzLndpbmRvd1dpZHRoKTtcbiAgfVxuXG4gIGNsb3NlTW9yZUhhbmRsZXIoaXNPcGVuKSB7XG4gICAgLy8gaXNPcGVuOiBmYWxzZVxuICAgIHRoaXMuaXNNb3JlT3BlbiA9IGlzT3BlbjtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyB0aGlzLmNsb3NlTW9yZS5lbWl0KGlzT3Blbik7XG4gIH1cblxuICBjbG9zZU1lbnVIZWFkZXJIYW5kbGVyKGlzT3Blbikge1xuICAgIC8vIGlzT3BlbjogZmFsc2VcbiAgICB0aGlzLmlzTWVudUhlYWRlck9wZW4gPSBpc09wZW47XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgLy8gdGhpcy5jbG9zZU1vcmUuZW1pdChpc09wZW4pO1xuICB9XG5cbiAgY2FsY3VsYXRlSGVpZ2h0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMud2luZG93V2lkdGggPiAxMDIzKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBjTWVudUNvbnRhaW5lcl9lbGUgPSBfdGhpcy5wY01lbnVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHBjTWVudUNvbnRhaW5lcl9zaXplID0gcGNNZW51Q29udGFpbmVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHBjTWVudUNvbnRhaW5lcl9oID0gcGNNZW51Q29udGFpbmVyX3NpemUuaGVpZ2h0O1xuXG4gICAgICAgIGxldCBtZW51TG9nb19lbGUgPSBfdGhpcy5tZW51TG9nby5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgbWVudUxvZ29fc2l6ZSA9IG1lbnVMb2dvX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG1lbnVMb2dvX2ggPSBtZW51TG9nb19zaXplLmhlaWdodDtcblxuICAgICAgICBsZXQgcGNNZW51Rm9vdGVyX2VsZSA9IF90aGlzLnBjTWVudUZvb3Rlci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgcGNNZW51Rm9vdGVyX3NpemUgPSBwY01lbnVGb290ZXJfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgcGNNZW51Rm9vdGVyX2ggPSBwY01lbnVGb290ZXJfc2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IHBjTWVudUxpc3RfZWxlID0gX3RoaXMucGNNZW51TGlzdC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwY01lbnVMaXN0X2VsZS5zdHlsZS5oZWlnaHQgPSAoX3RoaXMud2luZG93SGVpZ2h0IC0gbWVudUxvZ29faCAtIHBjTWVudUZvb3Rlcl9oIC0gMjApICsgJ3B4JztcblxuICAgICAgICBsZXQgcGNMYXlvdXRfZWxlID0gX3RoaXMucGNMYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcGNMYXlvdXRfZWxlLnN0eWxlLmhlaWdodCA9IF90aGlzLndpbmRvd0hlaWdodCArICdweCc7XG4gICAgICAgIHBjTGF5b3V0X2VsZS5zdHlsZS5tYXhXaWR0aCA9IF90aGlzLndpbmRvd1dpZHRoICsgJ3B4JztcblxuXG4gICAgICB9LCAxMDApO1xuICAgIH0gLy8gZW5kIGlmOiA+PSAxMDI0XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG1vYmlsZUhlYWRlcl9lbGUgPSBfdGhpcy5tb2JpbGVIZWFkZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IG1vYmlsZUhlYWRlcl9zaXplID0gbW9iaWxlSGVhZGVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG1vYmlsZUhlYWRlcl9oID0gbW9iaWxlSGVhZGVyX3NpemUuaGVpZ2h0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIl90aGlzLm1lbnVGb290ZXJIZWlnaHQ6XCIsIF90aGlzLm1lbnVGb290ZXJIZWlnaHQpO1xuXG4gICAgICAgIGlmIChfdGhpcy5tZW51Rm9vdGVySGVpZ2h0ID09IDApIHtcbiAgICAgICAgICBsZXQgbWVudUZvb3Rlcl9lbGUgPSBfdGhpcy5tZW51Rm9vdGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgbGV0IG1lbnVGb290ZXJfc2l6ZSA9IG1lbnVGb290ZXJfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIF90aGlzLm1lbnVGb290ZXJIZWlnaHQgPSBtZW51Rm9vdGVyX3NpemUuaGVpZ2h0O1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVudUZvb3Rlcl9zaXplOlwiLCBtZW51Rm9vdGVyX3NpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRlbnRCbG9ja19lbGUgPSBfdGhpcy5jb250ZW50QmxvY2submF0aXZlRWxlbWVudDtcbiAgICAgICAgX3RoaXMubW9iaWxlQ29udGVudEhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBtb2JpbGVIZWFkZXJfaCAtIF90aGlzLm1lbnVGb290ZXJIZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndpbmRvdy5pbm5lckhlaWdodDpcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2JpbGVIZWFkZXJfaDpcIiwgbW9iaWxlSGVhZGVyX2gpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIl90aGlzLm1lbnVGb290ZXJIZWlnaHQ6XCIsIF90aGlzLm1lbnVGb290ZXJIZWlnaHQpO1xuICAgICAgICBjb250ZW50QmxvY2tfZWxlLnN0eWxlLmhlaWdodCA9IF90aGlzLm1vYmlsZUNvbnRlbnRIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignbW9iaWxlJywgX3RoaXMubWVudUZvb3RlckhlaWdodCk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfSAvLyBlbmQgY2FsY3VsYXRlSGVpZ2h0XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY2FsY3VsYXRlSGVpZ2h0KCk7XG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVIZWlnaHRcIik7XG4gIH1cblxuXG59XG4iXX0=