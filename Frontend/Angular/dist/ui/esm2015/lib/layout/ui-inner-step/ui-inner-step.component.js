/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, Optional, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { AppRouter } from '@allianzSND/core';
export class UiInnerStepComponent {
    /**
     * @param {?} _location
     * @param {?} router
     */
    constructor(_location, router) {
        this._location = _location;
        this.router = router;
        this.isBackShow = true; // is show back arrow
        this.backUrl = null; // back url
        this.stepHeadingH = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.calculateHeight();
        console.warn('resize Width: ', this.windowWidth);
    }
    /**
     * @return {?}
     */
    closeMain() {
        if (this.backUrl) {
            this.router.navigate(this.backUrl);
        }
        else {
            if (this._location)
                this._location.back();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.stepHeadingH = window.innerWidth < 1024 ? this.stepHeading.nativeElement.offsetHeight + 'px' : '0px';
        }), 0);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.calculateHeight();
    }
    /**
     * @return {?}
     */
    calculateHeight() {
        if (this.windowWidth > 1023) {
            /** @type {?} */
            let _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let stepPage_ele = _this.stepPage.nativeElement;
                stepPage_ele.style.height = _this.windowHeight + 'px';
                // pcLayout_ele.style.maxWidth = this.windowWidth + 'px';
            }), 100);
        }
    }
}
UiInnerStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-inner-step',
                template: "<div #stepPage class=\"ui-page-content  {{ theme }}\">\n    <div class=\"ui-inner-step-header\">\n      <div *ngIf=\"isBackShow\" class=\"ui-layout-back-block\" (click)=\"closeMain()\">\n          <!-- <nx-icon name='chevron-left'></nx-icon> -->\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n      </div>\n      <div class=ui-inner-step-nav>\n      </div>\n    </div>\n    <!-- end: ui-inner-step-header -->\n\n    <div  class=\"ui-inner-step-content\">\n      <div class=\"ui-inner-step-main-container\">\n        <div class=\"ui-inner-step-heading stop-scroll-block\" #stepHeading>\n          <ng-content select=\"[heading]\"></ng-content>\n        </div>\n        <div class=\"ui-inner-step-main stop-scroll-block\" #stepMain>\n          <ng-content select=\"[main]\"></ng-content>\n        </div>\n      </div>\n\n      <div class=\"ui-inner-step-steps\">\n        <ng-content  select=\"[steps]\"></ng-content>\n      </div>\n\n      <div><ng-content select=\"[information]\"></ng-content></div>\n      \n      <ng-content select=\"[global-main]\"></ng-content>\n    </div>\n    <!-- end: ui-inner-step-content -->\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ui-page-content{min-height:100vh;position:relative;overflow:hidden;background-color:#f5f5f5}.ui-page-content.dark .ui-inner-step-header{background:linear-gradient(to bottom,#0068b7,#003781)}.ui-page-content.light .ui-inner-step-header{background:linear-gradient(to bottom,#b1dadd,#007d8c)}.ui-inner-step-header{display:flex;align-items:flex-start;width:100%;min-height:220px}.ui-inner-step-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-step-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-step-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-step-header .header-back-btn{padding-left:20px}.ui-inner-step-header .header-back-btn .back-icon{width:12px}.ui-inner-step-content{margin:-130px 0 0;height:100%}.ui-inner-step-content .ui-inner-step-main-container{display:flex;width:100%;height:calc(100% - 90px - 55px)}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{width:405px;height:100%;overflow:hidden;overflow-y:auto;margin-left:75px}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-main{width:100%;max-width:calc(100% - 405px - 80px);height:100%;overflow:hidden;overflow-y:auto}.ui-inner-step-content .ui-inner-step-steps{margin-top:20px;margin-bottom:10px;padding:0 45px}@media (max-width:1023px){.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{margin-left:0}.ui-inner-step-content .ui-inner-step-steps{padding:0}}@media screen and (max-width:1023px){.ui-inner-step-header{min-height:275px}.ui-inner-step-content{height:calc(100vh - 45px);margin-top:-231px;margin-left:5px;margin-right:5px}.ui-inner-step-content .ui-inner-step-main-container{display:inline-block;height:calc(100% - 55px - 1px)}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{width:100%;height:auto}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading:not(:last-child){padding-bottom:20px}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-main{max-width:100%;max-height:calc(100vh - 275px + 35px)}}"]
            }] }
];
UiInnerStepComponent.ctorParameters = () => [
    { type: Location, decorators: [{ type: Optional }] },
    { type: AppRouter }
];
UiInnerStepComponent.propDecorators = {
    stepHeading: [{ type: ViewChild, args: ['stepHeading',] }],
    stepMain: [{ type: ViewChild, args: ['stepMain',] }],
    stepPage: [{ type: ViewChild, args: ['stepPage',] }],
    theme: [{ type: Input }],
    isBackShow: [{ type: Input }],
    backUrl: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UiInnerStepComponent.prototype.stepHeading;
    /** @type {?} */
    UiInnerStepComponent.prototype.stepMain;
    /** @type {?} */
    UiInnerStepComponent.prototype.stepPage;
    /** @type {?} */
    UiInnerStepComponent.prototype.theme;
    /** @type {?} */
    UiInnerStepComponent.prototype.isBackShow;
    /** @type {?} */
    UiInnerStepComponent.prototype.backUrl;
    /** @type {?} */
    UiInnerStepComponent.prototype.stepHeadingH;
    /**
     * @type {?}
     * @private
     */
    UiInnerStepComponent.prototype.windowHeight;
    /**
     * @type {?}
     * @private
     */
    UiInnerStepComponent.prototype.windowWidth;
    /**
     * @type {?}
     * @private
     */
    UiInnerStepComponent.prototype._location;
    /**
     * @type {?}
     * @private
     */
    UiInnerStepComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5uZXItc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktaW5uZXItc3RlcC91aS1pbm5lci1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRN0MsTUFBTTs7Ozs7SUFXSixZQUNzQixTQUFtQixFQUMvQixNQUFpQjtRQURMLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVJsQixlQUFVLEdBQVksSUFBSSxDQUFDLENBQUMscUJBQXFCO1FBQ2pELFlBQU8sR0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXO1FBQ3JDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBT3JCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO2FBQ0k7WUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUcsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUNELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFOztnQkFDdkIsS0FBSyxHQUFHLElBQUk7WUFDaEIsVUFBVTs7O1lBQUM7O29CQUNMLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWE7Z0JBQy9DLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN0RCx5REFBeUQ7WUFDM0QsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBRVQ7SUFDSCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHF0Q0FBNkM7Z0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O1lBUlEsUUFBUSx1QkFxQlosUUFBUTtZQXBCSixTQUFTOzs7MEJBU2YsU0FBUyxTQUFDLGFBQWE7dUJBQ3ZCLFNBQVMsU0FBQyxVQUFVO3VCQUNwQixTQUFTLFNBQUMsVUFBVTtvQkFDcEIsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBZUwsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXBCekMsMkNBQWtEOztJQUNsRCx3Q0FBNEM7O0lBQzVDLHdDQUE0Qzs7SUFDNUMscUNBQXVCOztJQUN2QiwwQ0FBb0M7O0lBQ3BDLHVDQUFnQzs7SUFDaEMsNENBQXlCOzs7OztJQUN6Qiw0Q0FBNEI7Ozs7O0lBQzVCLDJDQUEyQjs7Ozs7SUFHekIseUNBQXVDOzs7OztJQUN2QyxzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9wdGlvbmFsLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaW5uZXItc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pbm5lci1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5uZXItc3RlcC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUlubmVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3N0ZXBIZWFkaW5nJykgc3RlcEhlYWRpbmc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3N0ZXBNYWluJykgc3RlcE1haW46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3N0ZXBQYWdlJykgc3RlcFBhZ2U6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7IC8vIGRhcmsgb3IgbGlnaHRcbiAgQElucHV0KCkgaXNCYWNrU2hvdzogYm9vbGVhbiA9IHRydWU7IC8vIGlzIHNob3cgYmFjayBhcnJvd1xuICBASW5wdXQoKSBiYWNrVXJsOiBzdHJpbmcgPSBudWxsOyAvLyBiYWNrIHVybFxuICBwdWJsaWMgc3RlcEhlYWRpbmdIID0gJyc7XG4gIHByaXZhdGUgd2luZG93SGVpZ2h0Om51bWJlcjtcbiAgcHJpdmF0ZSB3aW5kb3dXaWR0aDpudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYWxjdWxhdGVIZWlnaHQoKTtcbiAgICBjb25zb2xlLndhcm4oJ3Jlc2l6ZSBXaWR0aDogJywgdGhpcy53aW5kb3dXaWR0aCk7XG4gIH1cblxuICBjbG9zZU1haW4oKSB7XG4gICAgaWYgKHRoaXMuYmFja1VybCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodGhpcy5iYWNrVXJsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbG9jYXRpb24pXG4gICAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGVwSGVhZGluZ0ggPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQgPyB0aGlzLnN0ZXBIZWFkaW5nLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyA6ICcwcHgnO1xuICAgIH0sIDApO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICB9XG4gIGNhbGN1bGF0ZUhlaWdodCgpe1xuICAgIGlmICh0aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3RlcFBhZ2VfZWxlID0gX3RoaXMuc3RlcFBhZ2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgc3RlcFBhZ2VfZWxlLnN0eWxlLmhlaWdodCA9IF90aGlzLndpbmRvd0hlaWdodCArICdweCc7XG4gICAgICAgIC8vIHBjTGF5b3V0X2VsZS5zdHlsZS5tYXhXaWR0aCA9IHRoaXMud2luZG93V2lkdGggKyAncHgnO1xuICAgICAgfSwgMTAwKTtcblxuICAgIH1cbiAgfVxuXG4gIFxufVxuIl19