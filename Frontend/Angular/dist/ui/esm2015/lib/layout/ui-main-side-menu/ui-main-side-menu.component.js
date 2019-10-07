/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { animationEnterLeavePage } from '../../model/Animation/AnimationEnterLeave';
export class UIMainSideMenuComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        // @Input() isShow: boolean = false;
        this.title = '';
        this.isShowChange = new EventEmitter();
        this._isShow = false;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isShow(val) {
        this._isShow = val;
    } // end set isShow
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        // console.warn('Width: ', this.windowWidth);
    }
    // 回上一頁
    /**
     * @return {?}
     */
    closeMain() {
        this._isShow = false;
        this.isShowChange.emit(this._isShow);
        this.changeDetector.markForCheck();
    }
}
UIMainSideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-main-side-menu',
                template: "<div class=\"ui-page-content\">\n  <ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n</div>\n\n<!-- content template -->\n<ng-template #sideMenuContent>\n  <ng-content select=\"[side-menu]\"></ng-content>\n</ng-template>\n<ng-template #mainContent>\n  <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContent($event)\" (refreshCallback)=\"refreshContent()\" [(loadingFinish)]=\"isLoadingFinishContent\" [lazyLoading]=\"false\"> -->\n    <ng-content select=\"[main]\"></ng-content>\n  <!-- </app-ui-infinite-scroll> -->\n</ng-template>\n<ng-template #mainGlobal>\n  <ng-content select=\"[global-main]\"></ng-content>\n</ng-template>\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n   <!-- fixarea -->\n   <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n   <!-- end of fixarea -->\n    <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n\n  <div class=\"ui-side-menu-lv2\" *ngIf=\"isShow\" [@enterAnimation] >\n    <div #sideMenuHeader class=\"ui-side-menu-header\">\n      <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n      </div>\n      <div class=ui-side-menu-title>\n        <p>{{title}}</p>\n      </div>\n    </div>\n    <!-- end: ui-side-menu-header -->\n\n\n      <!-- <div class=\"ui-side-main-content-mobile\"> -->\n          <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n      <!-- </div> -->\n  </div>\n</ng-template>\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <div class='layout-sub-block-pc'>\n    <div class=\"ui-side-menu layout-submenu\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n    </div>\n    <div class=\"ui-side-menu-content layout-content-main\">\n        <!-- fixarea -->\n      <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n      <!-- end of fixarea -->\n        <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n",
                animations: [
                    animationEnterLeavePage
                ],
                styles: [".ui-side-menu-header{display:flex;align-items:center;position:fixed;z-index:20;width:100%;height:44px;justify-content:center;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-side-menu-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-side-menu-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-side-menu-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-side-menu-header .header-back-btn{padding-left:20px}.ui-side-menu-header .header-back-btn .back-icon{width:12px}.ui-side-menu-header .ui-side-menu-title{color:#fff;font-size:1.125rem;width:calc(100% - 4rem);text-align:center}.ui-side-menu-header .ui-side-menu-title p{font-weight:700;margin:0}.ui-side-menu-lv2{z-index:15;position:absolute;top:0;width:100%;background-color:#f5f5f5;display:block}@supports (top:constant(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:env(safe-area-inset-top)}}.ui-page-content{height:100%}.ui-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start}.ui-side-menu-content{width:100vw}.layout-sub-block-pc{display:flex;background-color:#f5f5f5;min-height:100vh;height:100%}.layout-sub-block-pc .layout-submenu{display:inline-flex;margin-left:-40px;background-color:#fff;box-shadow:0 0 19px 0 rgba(0,41,95,.31);max-width:250px;min-width:250px;width:100%;margin-top:40px;z-index:80;height:calc(100% - (40px*2));position:relative}@media (min-width:1025px){.layout-sub-block-pc .layout-submenu{max-width:25vw}}.layout-sub-block-pc .layout-content-main{max-width:calc(100% - 250px - -40px);width:100%}.layout-sub-block-pc .ui-side-menu-content{height:100vh}"]
            }] }
];
UIMainSideMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UIMainSideMenuComponent.propDecorators = {
    title: [{ type: Input }],
    isShow: [{ type: Input }],
    isShowChange: [{ type: Output }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UIMainSideMenuComponent.prototype.windowWidth;
    /** @type {?} */
    UIMainSideMenuComponent.prototype.title;
    /** @type {?} */
    UIMainSideMenuComponent.prototype.isShowChange;
    /**
     * @type {?}
     * @private
     */
    UIMainSideMenuComponent.prototype._isShow;
    /**
     * @type {?}
     * @private
     */
    UIMainSideMenuComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1zaWRlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L3VpLW1haW4tc2lkZS1tZW51L3VpLW1haW4tc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlDLGlCQUFpQixFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUN4SyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQVNuRixNQUFNOzs7O0lBb0JKLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQWpCckQsb0NBQW9DO1FBQzNCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFTbEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFLd0IsQ0FBQzs7OztJQWQxRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQyxDQUFDLGlCQUFpQjs7OztJQVVuQixRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLDZDQUE2QztJQUMvQyxDQUFDOzs7OztJQUdELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDJsRUFBaUQ7Z0JBRWpELFVBQVUsRUFBRTtvQkFDVix1QkFBdUI7aUJBQ3hCOzthQUNGOzs7WUFUcUcsaUJBQWlCOzs7b0JBY3BILEtBQUs7cUJBRUwsS0FBSzsyQkFPTCxNQUFNO3VCQWFOLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUF4QnpDLDhDQUFvQjs7SUFFcEIsd0NBQTRCOztJQVM1QiwrQ0FBNEM7Ozs7O0lBRTVDLDBDQUFpQzs7Ozs7SUFLckIsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRpb25FbnRlckxlYXZlUGFnZX0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkVudGVyTGVhdmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1haW4tc2lkZS1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLW1haW4tc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbWFpbi1zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbkVudGVyTGVhdmVQYWdlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVUlNYWluU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIC8vIEBJbnB1dCgpIGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGlzU2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93O1xuICB9XG4gIHNldCBpc1Nob3codmFsKSB7XG4gICAgdGhpcy5faXNTaG93ID0gdmFsO1xuICB9IC8vIGVuZCBzZXQgaXNTaG93XG4gIEBPdXRwdXQoKSBpc1Nob3dDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAvLyBjb25zb2xlLndhcm4oJ1dpZHRoOiAnLCB0aGlzLndpbmRvd1dpZHRoKTtcbiAgfVxuXG4gIC8vIOWbnuS4iuS4gOmggVxuICBjbG9zZU1haW4oKSB7XG4gICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3dDaGFuZ2UuZW1pdCh0aGlzLl9pc1Nob3cpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==