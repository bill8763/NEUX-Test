/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UiTabChildComponent } from '../ui-tab-child/ui-tab-child.component';
import { UiTabMoreComponent } from '../ui-tab-more/ui-tab-more.component';
export class UiTabStyle1Component {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        this.changeDector = changeDector;
        this.idContentName = '';
        this.onTabChildClick = new EventEmitter();
        this.handleOpen = false;
        this.tabIndex = 0;
        this.maxShow = 4;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} i
     * @return {?}
     */
    handleClick(i) {
        /** @type {?} */
        let oldIndex = this.tabIndex;
        this.tabIndex = i;
        this.onTabChildClick.emit(i);
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
    }
    /**
     * @return {?}
     */
    closeSelect() {
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
        // console.log('asasas');
    }
    /**
     * @return {?}
     */
    getTabsArray() {
        return this.tabs.toArray();
    }
}
UiTabStyle1Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-tab-style1',
                template: "<div class=\"ui-tab-style-1\" (mouseleave)=\"closeSelect()\" [ngClass]=\"{'tabToMore':getTabsArray().length>maxShow}\">\n  <div class=\"ui-tab-style-contnet\">\n    <ng-container *ngFor=\"let tab of getTabsArray().slice(0,maxShow);index as i\">\n      <div class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n        <div *ngTemplateOutlet=\"tab.tab\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"ui-tab-style-1-more\">\n    <app-ui-tab-more>\n      <ng-container *ngFor=\"let tab of tabs;index as i\">\n        <!-- <div  *ngIf=\"i>3\"> -->\n        <div *ngIf=\"i>=maxShow \" class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n          <div *ngTemplateOutlet=\"tab.tab\"></div>\n        </div>\n        <!-- </div> -->\n      </ng-container>\n    </app-ui-tab-more>\n  </div>\n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-tab-style-1{display:flex}.ui-tab-style-1.tabToMore .ui-tab-style-contnet{max-width:calc(100% - 30px)}.ui-tab-style-1.tabToMore .ui-tab-style-1-more{display:block}.ui-tab-style-1 .ui-tab-style-contnet{display:table;table-layout:fixed;width:100%}.ui-tab-style-1 .ui-tab-style-contnet .tab-child{display:table-cell;height:32px;vertical-align:middle}.ui-tab-style-1 .ui-tab-style-contnet .tab-child ::ng-deep .tab-child-btn-style{padding:6px 8px 17px;font-size:1.125rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:.2px;text-align:center;color:#007ab3;border:none;border-bottom:1px solid #007ab3}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style{position:relative;font-weight:600}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style:after{display:block;content:'';width:100%;height:3px;background-color:#007ab3;position:absolute;bottom:-2px;left:0}.ui-tab-style-1 .ui-tab-style-1-more{display:none;-webkit-transform:translateY(1px);transform:translateY(1px);min-width:30px;max-width:30px;height:30px}"]
            }] }
];
UiTabStyle1Component.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiTabStyle1Component.propDecorators = {
    tabs: [{ type: ContentChildren, args: [UiTabChildComponent,] }],
    more_component: [{ type: ViewChild, args: [UiTabMoreComponent,] }],
    idContentName: [{ type: Input }],
    onTabChildClick: [{ type: Output }],
    tabIndex: [{ type: Input }],
    maxShow: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiTabStyle1Component.prototype.tabs;
    /** @type {?} */
    UiTabStyle1Component.prototype.more_component;
    /** @type {?} */
    UiTabStyle1Component.prototype.idContentName;
    /** @type {?} */
    UiTabStyle1Component.prototype.onTabChildClick;
    /** @type {?} */
    UiTabStyle1Component.prototype.handleOpen;
    /** @type {?} */
    UiTabStyle1Component.prototype.tabIndex;
    /** @type {?} */
    UiTabStyle1Component.prototype.maxShow;
    /**
     * @type {?}
     * @private
     */
    UiTabStyle1Component.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLXN0eWxlMS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYi1zdHlsZTEvdWktdGFiLXN0eWxlMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFlLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVyxTQUFTLEVBQXFELGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xOLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUTFFLE1BQU07Ozs7SUFTSixZQUFvQixZQUErQjtRQUEvQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFMMUMsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLFlBQU8sR0FBRyxDQUFDLENBQUM7SUFDa0MsQ0FBQzs7OztJQUV4RCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFHRCxXQUFXLENBQUMsQ0FBQzs7WUFDUCxRQUFRLEdBQVcsSUFBSSxDQUFDLFFBQVE7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pDLHlCQUF5QjtJQUMzQixDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDAzQkFBNkM7O2FBRzlDOzs7WUFUd0ssaUJBQWlCOzs7bUJBWXZMLGVBQWUsU0FBQyxtQkFBbUI7NkJBQ25DLFNBQVMsU0FBQyxrQkFBa0I7NEJBQzVCLEtBQUs7OEJBQ0wsTUFBTTt1QkFFTixLQUFLO3NCQUNMLEtBQUs7Ozs7SUFOTixvQ0FBd0U7O0lBQ3hFLDhDQUFrRTs7SUFDbEUsNkNBQW9DOztJQUNwQywrQ0FBK0M7O0lBQy9DLDBDQUE0Qjs7SUFDNUIsd0NBQXNCOztJQUN0Qix1Q0FBcUI7Ozs7O0lBQ1QsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEb0NoZWNrLCBWaWV3Q2hpbGQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaVRhYkNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFiLWNoaWxkL3VpLXRhYi1jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJNb3JlQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFiLW1vcmUvdWktdGFiLW1vcmUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYi1zdHlsZTEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFiLXN0eWxlMS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRhYi1zdHlsZTEuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJTdHlsZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVWlUYWJDaGlsZENvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAVmlld0NoaWxkKFVpVGFiTW9yZUNvbXBvbmVudCkgbW9yZV9jb21wb25lbnQ6IFVpVGFiTW9yZUNvbXBvbmVudDtcbiAgQElucHV0KCkgaWRDb250ZW50TmFtZTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBvblRhYkNoaWxkQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGhhbmRsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiSW5kZXggPSAwO1xuICBASW5wdXQoKSBtYXhTaG93ID0gNDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgaGFuZGxlQ2xpY2soaSkge1xuICAgIGxldCBvbGRJbmRleDogbnVtYmVyID0gdGhpcy50YWJJbmRleDtcbiAgICB0aGlzLnRhYkluZGV4ID0gaTtcbiAgICB0aGlzLm9uVGFiQ2hpbGRDbGljay5lbWl0KGkpO1xuICAgIHRoaXMubW9yZV9jb21wb25lbnQuY2xvc2VUYWJTZWxlY3QoKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBjbG9zZVNlbGVjdCgpIHtcbiAgICB0aGlzLm1vcmVfY29tcG9uZW50LmNsb3NlVGFiU2VsZWN0KCk7XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2FzYXNhcycpO1xuICB9XG4gIGdldFRhYnNBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgfVxuXG5cblxuXG59XG4iXX0=