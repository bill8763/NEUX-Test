/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UIMainSideMenuComponent } from '../ui-main-side-menu/ui-main-side-menu.component';
import { animationEnterLeavePage } from '../../model/Animation/AnimationEnterLeave';
import { Language } from '@allianzSND/core';
var UiMainCollapseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiMainCollapseComponent, _super);
    function UiMainCollapseComponent(changeDector) {
        var _this = _super.call(this, changeDector) || this;
        _this.changeDector = changeDector;
        _this.isHideCollapseBlock = false;
        _this.language = new Language();
        _this.isCollapsing = false;
        _this.isCollapsed = false;
        return _this;
    }
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        console.log(this.uiPageContent);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiMainCollapseComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        // console.warn('Width: ', this.windowWidth);
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.setTimeOutCollapse = /**
     * @return {?}
     */
    function () {
    };
    // 收合
    // 收合
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.collapseSideMenu = 
    // 收合
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        if (this.isCollapsed) {
            this.isCollapsed = false;
            this.isCollapsing = false;
            this.changeDector.markForCheck();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isCollapsed = true;
                _this.isCollapsing = false;
                _this.changeDector.markForCheck();
            }), 700);
        }
    };
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.isOpenSideMenu = /**
     * @return {?}
     */
    function () {
        return this.isCollapsed;
    };
    UiMainCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-collapse',
                    template: "<div class=\"ui-page-content\" #uiPageContent>\n  <ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n</div>\n\n<!-- content template -->\n<ng-template #sideMenuContent>\n  <ng-content select=\"[side-menu]\"></ng-content>\n</ng-template>\n<ng-template #mainContent>\n  <ng-content select=\"[main]\"></ng-content>\n</ng-template>\n<ng-template #mainGlobal>\n  <ng-content select=\"[global-main]\"></ng-content>\n</ng-template>\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n  <div class=\"ui-main-block-mobile\">\n\n    <!-- ui main detail -->\n    <div class=\"ui-main-detail-block\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n      <div class=\"btn-block\">\n        <app-ui-btn-layout>\n            <app-ui-btn Action action=\"btn_ProgressSeeDetails\" (actionClick)=\"isShow = true\">\n                <ng-container TextType=\"cust\">{{language.progressSeeDetails | translate}}</ng-container>\n            </app-ui-btn>\n        </app-ui-btn-layout>\n      </div>\n    </div>\n    <!-- end of ui main detail -->\n    \n\n    <div class=\"ui-side-menu-lv2\" *ngIf=\"isShow\" [@enterAnimation] >\n        <div #sideMenuHeader class=\"ui-side-menu-header\">\n          <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n              <!-- <nx-icon name='chevron-left'></nx-icon> -->\n              <div class=\"header-back-btn\">\n                  <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n              </div>\n          </div>\n          <div class=ui-side-menu-title>\n            <p>{{title}}</p>\n          </div>\n        </div>\n        <!-- end: ui-side-menu-header -->\n    \n    \n          <!-- <div class=\"ui-side-main-content-mobile\"> -->\n              <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n          <!-- </div> -->\n    </div>\n      <!-- end of side menu -->\n  </div>\n  <!-- end: ui-main-block -->\n\n  <!-- fixarea -->\n  <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n  <!-- end of fixarea -->\n</ng-template>\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <div class=\"ui-main-block\" [ngClass]=\"{'isHideCollapseBlock':isHideCollapseBlock,\n                                         'isCollapsing':isCollapsing,\n                                         'isCollapsed':isCollapsed}\">\n\n    <div class=\"ui-main-collapse-btn\" (click)=\"collapseSideMenu()\">\n      <nx-icon name='chevron-left'></nx-icon>\n    </div>\n    <!-- end: ui-main-collapse-btn -->\n\n    <div #pcMenuBlock class=\"ui-main-collapse-menu\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n    </div>\n    <!-- end: ui-main-collapse-menu -->\n\n    <div class=\"ui-main-collapse-content\">\n      <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n\n      <!-- fixarea -->\n      <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n      <!-- end of fixarea -->\n    </div>\n    <!-- end: ui-main-collapse-content -->\n  </div>\n  <!-- end: ui-main-block -->\n</ng-template>\n",
                    host: { '[class.shown]': 'isShow' },
                    animations: [
                        animationEnterLeavePage
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["[class^=ui-main-block]{display:flex;align-items:flex-start;min-height:100vh;padding-top:40px;background-color:#f5f5f5}[class^=ui-main-block]>.ui-main-collapse-block,[class^=ui-main-block]>.ui-main-collapse-menu{display:inline-flex;width:100%;max-width:250px;margin-left:-40px}[class^=ui-main-block]>.ui-main-collapse-content{flex:1;padding:0}@media (min-width:1025px){[class^=ui-main-block]>.ui-main-collapse-block,[class^=ui-main-block]>.ui-main-collapse-menu{max-width:25vw}}.ui-main-block{position:relative}.ui-main-block .ui-main-collapse-btn{position:absolute;top:50px;left:-30px;z-index:1}.ui-main-block .ui-main-collapse-menu{height:calc(100vh - 80px);overflow:hidden;box-shadow:0 0 19px 0 rgba(0,41,95,.31);opacity:1}.ui-main-block .ui-main-collapse-content{width:1px;padding-bottom:100px;padding-left:40px}@media (max-width:767px){.ui-main-block{padding-left:0}}.ui-main-block.isHideCollapseBlock .ui-main-collapse-btn,.ui-main-block.isHideCollapseBlock .ui-main-collapse-menu{visibility:hidden}.ui-main-block.isHideCollapseBlock .ui-main-collapse-menu{width:40px}.ui-main-block.isHideCollapseBlock .ui-main-collapse-content{padding-left:50px;padding-right:50px}.ui-main-block .ui-main-collapse-btn,.ui-main-block .ui-main-collapse-menu{transition:transform .5s ease-in-out,width .5s ease-in-out,max-width .5s ease-in-out,opacity .2s ease-in-out,-webkit-transform .5s ease-in-out;transition-delay:0s,0s,0s,.4s,0s}.ui-main-block.isCollapsed .ui-main-collapse-btn,.ui-main-block.isCollapsing .ui-main-collapse-btn{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ui-main-block.isCollapsed .ui-main-collapse-menu,.ui-main-block.isCollapsing .ui-main-collapse-menu{max-width:40px;opacity:0;transition-delay:0s,0s,0s,0s,0s}.ui-main-block.isCollapsed .ui-main-collapse-content,.ui-main-block.isCollapsing .ui-main-collapse-content{padding-left:50px;padding-right:50px}.ui-main-block-mobile{display:inline-block;width:100vw;padding-top:30px;padding-bottom:55px}.ui-main-block-mobile .main-content{height:100vh;background-color:#fff;padding-left:5px;padding-right:5px;padding-bottom:155px}.ui-main-block-mobile .ui-side-menu-lv2 ::ng-deep.infiniti-scroll{margin-top:44px}.ui-main-block-mobile .ui-side-menu-lv2 ::ng-deep.infiniti-scroll .refresh-content>.scroll-content{padding:30px 5px 155px}.ui-main-block-mobile .ui-main-detail-block .btn-block{padding-top:20px;padding-bottom:10px;background-color:#fff}.ui-main-block-mobile .ui-main-collapse-tab{padding:0 5px;text-align:right}.ui-main-block-mobile .ui-main-collapse-menu{max-width:100%;margin:0}.ui-main-block-mobile.isHideCollapseBlock .ui-main-collapse-menu,.ui-main-block-mobile.isHideCollapseBlock .ui-main-collapse-tab{display:none}.ui-main-collapse-btn{display:inline-block;width:40px;height:40px;color:#007ab3;font-size:1.5rem;font-weight:100;box-shadow:0 0 19px 0 rgba(0,41,95,.31);background-color:#fff;text-align:center}.ui-main-collapse-btn nx-icon{line-height:40px}.ui-main-collapse-menu{width:100%;padding-top:20px;background-color:#fff}@media screen and (max-width:1023px){.ui-page-content{width:100%;height:100%}.ui-page-content .ui-main-collapse-content{padding-left:5px;padding-right:5px;padding-bottom:100px}}.ui-side-menu-header{display:flex;align-items:center;position:fixed;z-index:20;width:100%;height:44px;justify-content:center;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-side-menu-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-side-menu-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-side-menu-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-side-menu-header .header-back-btn{padding-left:20px}.ui-side-menu-header .header-back-btn .back-icon{width:12px}.ui-side-menu-header .ui-side-menu-title{color:#fff;font-size:1.125rem;width:calc(100% - 4rem);text-align:center}.ui-side-menu-header .ui-side-menu-title p{font-weight:700;margin:0}.ui-side-menu-lv2{z-index:15;position:absolute;top:0;width:100%;background-color:#f5f5f5;display:block}@supports (top:constant(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:env(safe-area-inset-top)}}"]
                }] }
    ];
    UiMainCollapseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiMainCollapseComponent.propDecorators = {
        isHideCollapseBlock: [{ type: Input }],
        firstTitle: [{ type: Input }],
        secondTitle: [{ type: Input }],
        pcMenuBlock: [{ type: ViewChild, args: ['pcMenuBlock',] }],
        uiPageContent: [{ type: ViewChild, args: ['uiPageContent',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiMainCollapseComponent;
}(UIMainSideMenuComponent));
export { UiMainCollapseComponent };
if (false) {
    /** @type {?} */
    UiMainCollapseComponent.prototype.isHideCollapseBlock;
    /** @type {?} */
    UiMainCollapseComponent.prototype.firstTitle;
    /** @type {?} */
    UiMainCollapseComponent.prototype.secondTitle;
    /** @type {?} */
    UiMainCollapseComponent.prototype.language;
    /** @type {?} */
    UiMainCollapseComponent.prototype.pcMenuBlock;
    /** @type {?} */
    UiMainCollapseComponent.prototype.uiPageContent;
    /** @type {?} */
    UiMainCollapseComponent.prototype.windowWidth;
    /** @type {?} */
    UiMainCollapseComponent.prototype.isCollapsing;
    /** @type {?} */
    UiMainCollapseComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @private
     */
    UiMainCollapseComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1jb2xsYXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktbWFpbi1jb2xsYXBzZS91aS1tYWluLWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLEtBQUssRUFBd0IsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUM7SUFVNkMsbURBQXVCO0lBMEJsRSxpQ0FBb0IsWUFBK0I7UUFBbkQsWUFDRSxrQkFBTSxZQUFZLENBQUMsU0FDcEI7UUFGbUIsa0JBQVksR0FBWixZQUFZLENBQW1CO1FBeEIxQyx5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFJdkMsY0FBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFpQmpDLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQUk3QixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsMENBQVE7Ozs7SUFEUixVQUNTLEtBQUs7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxvREFBa0I7OztJQUFsQjtJQUVBLENBQUM7SUFDRCxLQUFLOzs7OztJQUNMLGtEQUFnQjs7Ozs7SUFBaEI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ2xDO2FBQ0k7WUFDSCxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFFSCxDQUFDOzs7O0lBRUQsZ0RBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsOGlHQUFnRDtvQkFFaEQsSUFBSSxFQUFDLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQztvQkFDL0IsVUFBVSxFQUFFO3dCQUNWLHVCQUF1QjtxQkFDeEI7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O2dCQWRzSCxpQkFBaUI7OztzQ0FpQnJJLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQWNMLFNBQVMsU0FBQyxhQUFhO2dDQUN2QixTQUFTLFNBQUMsZUFBZTsyQkFnQnpCLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNkMzQyw4QkFBQztDQUFBLEFBMUZELENBVTZDLHVCQUF1QixHQWdGbkU7U0FoRlksdUJBQXVCOzs7SUFFbEMsc0RBQThDOztJQUM5Qyw2Q0FBNEI7O0lBQzVCLDhDQUE2Qjs7SUFFN0IsMkNBQWlDOztJQVlqQyw4Q0FBa0Q7O0lBQ2xELGdEQUFzRDs7SUFHdEQsOENBQW9COztJQUNwQiwrQ0FBOEI7O0lBQzlCLDhDQUE2Qjs7Ozs7SUFFakIsK0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlNYWluU2lkZU1lbnVDb21wb25lbnQgfSBmcm9tICcuLi91aS1tYWluLXNpZGUtbWVudS91aS1tYWluLXNpZGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRW50ZXJMZWF2ZVBhZ2V9IGZyb20gJy4uLy4uL21vZGVsL0FuaW1hdGlvbi9BbmltYXRpb25FbnRlckxlYXZlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tYWluLWNvbGxhcHNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1haW4tY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1tYWluLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6eydbY2xhc3Muc2hvd25dJzonaXNTaG93J30sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25FbnRlckxlYXZlUGFnZVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaU1haW5Db2xsYXBzZUNvbXBvbmVudCBleHRlbmRzIFVJTWFpblNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc0hpZGVDb2xsYXBzZUJsb2NrOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpcnN0VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc2Vjb25kVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAvLyBASW5wdXQoKVxuICAvLyBnZXQgaXNTaG93KCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9pc1Nob3c7XG4gIC8vIH1cbiAgLy8gc2V0IGlzU2hvdyh2YWwpIHtcbiAgLy8gICB0aGlzLl9pc1Nob3cgPSB2YWw7XG4gIC8vICAgdGhpcy5pc1Nob3dDaGFuZ2UuZW1pdCh0aGlzLl9pc1Nob3cpO1xuICAvLyB9IC8vIGVuZCBzZXQgaXNTaG93XG4gLy8gQE91dHB1dCgpIGlzU2hvd0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdwY01lbnVCbG9jaycpIHBjTWVudUJsb2NrOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd1aVBhZ2VDb250ZW50JykgdWlQYWdlQ29udGVudDogRWxlbWVudFJlZjtcblxuICAvL3ByaXZhdGUgX2lzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBpc0NvbGxhcHNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjaGFuZ2VEZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudWlQYWdlQ29udGVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgLy8gY29uc29sZS53YXJuKCdXaWR0aDogJywgdGhpcy53aW5kb3dXaWR0aCk7XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRUaW1lT3V0Q29sbGFwc2UoKSB7XG5cbiAgfVxuICAvLyDmlLblkIhcbiAgY29sbGFwc2VTaWRlTWVudSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpc09wZW5TaWRlTWVudSgpe1xuICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkO1xuICB9XG4gIFxuICAvLyDlhaflrrnliIfmj5tcbiAgLy8gY2xvc2VNYWluKHRhYkluZGV4KSB7XG4gIC8vICAgc3dpdGNoICh0YWJJbmRleCkge1xuICAvLyAgICAgY2FzZSAwOlxuICAvLyAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgMTpcbiAgLy8gICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICB9IC8vIGVuZCBzd2l0Y2g6IHRhYkluZGV4XG4gIC8vICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIC8vIH0gLy8gZW5kIGNsb3NlTWFpblxuXG59XG4iXX0=