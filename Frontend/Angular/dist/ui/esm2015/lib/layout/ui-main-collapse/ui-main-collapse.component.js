/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UIMainSideMenuComponent } from '../ui-main-side-menu/ui-main-side-menu.component';
import { animationEnterLeavePage } from '../../model/Animation/AnimationEnterLeave';
import { Language } from '@allianzSND/core';
export class UiMainCollapseComponent extends UIMainSideMenuComponent {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        super(changeDector);
        this.changeDector = changeDector;
        this.isHideCollapseBlock = false;
        this.language = new Language();
        this.isCollapsing = false;
        this.isCollapsed = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        console.log(this.uiPageContent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        // console.warn('Width: ', this.windowWidth);
        this.changeDector.markForCheck();
    }
    /**
     * @return {?}
     */
    setTimeOutCollapse() {
    }
    // 收合
    /**
     * @return {?}
     */
    collapseSideMenu() {
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
            () => {
                this.isCollapsed = true;
                this.isCollapsing = false;
                this.changeDector.markForCheck();
            }), 700);
        }
    }
    /**
     * @return {?}
     */
    isOpenSideMenu() {
        return this.isCollapsed;
    }
}
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
UiMainCollapseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiMainCollapseComponent.propDecorators = {
    isHideCollapseBlock: [{ type: Input }],
    firstTitle: [{ type: Input }],
    secondTitle: [{ type: Input }],
    pcMenuBlock: [{ type: ViewChild, args: ['pcMenuBlock',] }],
    uiPageContent: [{ type: ViewChild, args: ['uiPageContent',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1jb2xsYXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktbWFpbi1jb2xsYXBzZS91aS1tYWluLWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUF3QixTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hLLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVk1QyxNQUFNLDhCQUErQixTQUFRLHVCQUF1Qjs7OztJQTBCbEUsWUFBb0IsWUFBK0I7UUFDakQsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBREYsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBeEIxQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFJdkMsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFpQmpDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBSTdCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxrQkFBa0I7SUFFbEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNsQzthQUNJO1lBQ0gsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNuQyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUVILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOGlHQUFnRDtnQkFFaEQsSUFBSSxFQUFDLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQztnQkFDL0IsVUFBVSxFQUFFO29CQUNWLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFkc0gsaUJBQWlCOzs7a0NBaUJySSxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFjTCxTQUFTLFNBQUMsYUFBYTs0QkFDdkIsU0FBUyxTQUFDLGVBQWU7dUJBZ0J6QixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBakN6QyxzREFBOEM7O0lBQzlDLDZDQUE0Qjs7SUFDNUIsOENBQTZCOztJQUU3QiwyQ0FBaUM7O0lBWWpDLDhDQUFrRDs7SUFDbEQsZ0RBQXNEOztJQUd0RCw4Q0FBb0I7O0lBQ3BCLCtDQUE4Qjs7SUFDOUIsOENBQTZCOzs7OztJQUVqQiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSU1haW5TaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLW1haW4tc2lkZS1tZW51L3VpLW1haW4tc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBhbmltYXRpb25FbnRlckxlYXZlUGFnZX0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkVudGVyTGVhdmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLW1haW4tY29sbGFwc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbWFpbi1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1haW4tY29sbGFwc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDp7J1tjbGFzcy5zaG93bl0nOidpc1Nob3cnfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbkVudGVyTGVhdmVQYWdlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpTWFpbkNvbGxhcHNlQ29tcG9uZW50IGV4dGVuZHMgVUlNYWluU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzSGlkZUNvbGxhcHNlQmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmlyc3RUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzZWNvbmRUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBsYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIC8vIEBJbnB1dCgpXG4gIC8vIGdldCBpc1Nob3coKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2lzU2hvdztcbiAgLy8gfVxuICAvLyBzZXQgaXNTaG93KHZhbCkge1xuICAvLyAgIHRoaXMuX2lzU2hvdyA9IHZhbDtcbiAgLy8gICB0aGlzLmlzU2hvd0NoYW5nZS5lbWl0KHRoaXMuX2lzU2hvdyk7XG4gIC8vIH0gLy8gZW5kIHNldCBpc1Nob3dcbiAvLyBAT3V0cHV0KCkgaXNTaG93Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3BjTWVudUJsb2NrJykgcGNNZW51QmxvY2s6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3VpUGFnZUNvbnRlbnQnKSB1aVBhZ2VDb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vcHJpdmF0ZSBfaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIGlzQ29sbGFwc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGNoYW5nZURlY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2codGhpcy51aVBhZ2VDb250ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAvLyBjb25zb2xlLndhcm4oJ1dpZHRoOiAnLCB0aGlzLndpbmRvd1dpZHRoKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldFRpbWVPdXRDb2xsYXBzZSgpIHtcblxuICB9XG4gIC8vIOaUtuWQiFxuICBjb2xsYXBzZVNpZGVNZW51KCkge1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCA3MDApO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGlzT3BlblNpZGVNZW51KCl7XG4gICAgcmV0dXJuIHRoaXMuaXNDb2xsYXBzZWQ7XG4gIH1cbiAgXG4gIC8vIOWFp+WuueWIh+aPm1xuICAvLyBjbG9zZU1haW4odGFiSW5kZXgpIHtcbiAgLy8gICBzd2l0Y2ggKHRhYkluZGV4KSB7XG4gIC8vICAgICBjYXNlIDA6XG4gIC8vICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAxOlxuICAvLyAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgIH0gLy8gZW5kIHN3aXRjaDogdGFiSW5kZXhcbiAgLy8gICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgLy8gfSAvLyBlbmQgY2xvc2VNYWluXG5cbn1cbiJdfQ==