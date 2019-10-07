/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UiTabChildComponent } from '../ui-tab-child/ui-tab-child.component';
import { UiTabMoreComponent } from '../ui-tab-more/ui-tab-more.component';
var UiTabStyle1Component = /** @class */ (function () {
    function UiTabStyle1Component(changeDector) {
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
    UiTabStyle1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    UiTabStyle1Component.prototype.handleClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var oldIndex = this.tabIndex;
        this.tabIndex = i;
        this.onTabChildClick.emit(i);
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiTabStyle1Component.prototype.closeSelect = /**
     * @return {?}
     */
    function () {
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
        // console.log('asasas');
    };
    /**
     * @return {?}
     */
    UiTabStyle1Component.prototype.getTabsArray = /**
     * @return {?}
     */
    function () {
        return this.tabs.toArray();
    };
    UiTabStyle1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-style1',
                    template: "<div class=\"ui-tab-style-1\" (mouseleave)=\"closeSelect()\" [ngClass]=\"{'tabToMore':getTabsArray().length>maxShow}\">\n  <div class=\"ui-tab-style-contnet\">\n    <ng-container *ngFor=\"let tab of getTabsArray().slice(0,maxShow);index as i\">\n      <div class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n        <div *ngTemplateOutlet=\"tab.tab\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"ui-tab-style-1-more\">\n    <app-ui-tab-more>\n      <ng-container *ngFor=\"let tab of tabs;index as i\">\n        <!-- <div  *ngIf=\"i>3\"> -->\n        <div *ngIf=\"i>=maxShow \" class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n          <div *ngTemplateOutlet=\"tab.tab\"></div>\n        </div>\n        <!-- </div> -->\n      </ng-container>\n    </app-ui-tab-more>\n  </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-tab-style-1{display:flex}.ui-tab-style-1.tabToMore .ui-tab-style-contnet{max-width:calc(100% - 30px)}.ui-tab-style-1.tabToMore .ui-tab-style-1-more{display:block}.ui-tab-style-1 .ui-tab-style-contnet{display:table;table-layout:fixed;width:100%}.ui-tab-style-1 .ui-tab-style-contnet .tab-child{display:table-cell;height:32px;vertical-align:middle}.ui-tab-style-1 .ui-tab-style-contnet .tab-child ::ng-deep .tab-child-btn-style{padding:6px 8px 17px;font-size:1.125rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:.2px;text-align:center;color:#007ab3;border:none;border-bottom:1px solid #007ab3}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style{position:relative;font-weight:600}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style:after{display:block;content:'';width:100%;height:3px;background-color:#007ab3;position:absolute;bottom:-2px;left:0}.ui-tab-style-1 .ui-tab-style-1-more{display:none;-webkit-transform:translateY(1px);transform:translateY(1px);min-width:30px;max-width:30px;height:30px}"]
                }] }
    ];
    UiTabStyle1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiTabStyle1Component.propDecorators = {
        tabs: [{ type: ContentChildren, args: [UiTabChildComponent,] }],
        more_component: [{ type: ViewChild, args: [UiTabMoreComponent,] }],
        idContentName: [{ type: Input }],
        onTabChildClick: [{ type: Output }],
        tabIndex: [{ type: Input }],
        maxShow: [{ type: Input }]
    };
    return UiTabStyle1Component;
}());
export { UiTabStyle1Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLXN0eWxlMS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYi1zdHlsZTEvdWktdGFiLXN0eWxlMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFlLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVyxTQUFTLEVBQXFELGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xOLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTFFO0lBZUUsOEJBQW9CLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUwxQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztJQUNrQyxDQUFDOzs7O0lBRXhELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBR0QsMENBQVc7Ozs7SUFBWCxVQUFZLENBQUM7O1lBQ1AsUUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ0QsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pDLHlCQUF5QjtJQUMzQixDQUFDOzs7O0lBQ0QsMkNBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMDNCQUE2Qzs7aUJBRzlDOzs7Z0JBVHdLLGlCQUFpQjs7O3VCQVl2TCxlQUFlLFNBQUMsbUJBQW1CO2lDQUNuQyxTQUFTLFNBQUMsa0JBQWtCO2dDQUM1QixLQUFLO2tDQUNMLE1BQU07MkJBRU4sS0FBSzswQkFDTCxLQUFLOztJQTBCUiwyQkFBQztDQUFBLEFBeENELElBd0NDO1NBbENZLG9CQUFvQjs7O0lBRS9CLG9DQUF3RTs7SUFDeEUsOENBQWtFOztJQUNsRSw2Q0FBb0M7O0lBQ3BDLCtDQUErQzs7SUFDL0MsMENBQTRCOztJQUM1Qix3Q0FBc0I7O0lBQ3RCLHVDQUFxQjs7Ozs7SUFDVCw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERvQ2hlY2ssIFZpZXdDaGlsZCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpVGFiQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuLi91aS10YWItY2hpbGQvdWktdGFiLWNoaWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYk1vcmVDb21wb25lbnQgfSBmcm9tICcuLi91aS10YWItbW9yZS91aS10YWItbW9yZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFiLXN0eWxlMScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWItc3R5bGUxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFiLXN0eWxlMS5jb21wb25lbnQuc2NzcyddLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYlN0eWxlMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihVaVRhYkNoaWxkQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG4gIEBWaWV3Q2hpbGQoVWlUYWJNb3JlQ29tcG9uZW50KSBtb3JlX2NvbXBvbmVudDogVWlUYWJNb3JlQ29tcG9uZW50O1xuICBASW5wdXQoKSBpZENvbnRlbnROYW1lOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIG9uVGFiQ2hpbGRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaGFuZGxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XG4gIEBJbnB1dCgpIG1heFNob3cgPSA0O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBoYW5kbGVDbGljayhpKSB7XG4gICAgbGV0IG9sZEluZGV4OiBudW1iZXIgPSB0aGlzLnRhYkluZGV4O1xuICAgIHRoaXMudGFiSW5kZXggPSBpO1xuICAgIHRoaXMub25UYWJDaGlsZENsaWNrLmVtaXQoaSk7XG4gICAgdGhpcy5tb3JlX2NvbXBvbmVudC5jbG9zZVRhYlNlbGVjdCgpO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGNsb3NlU2VsZWN0KCkge1xuICAgIHRoaXMubW9yZV9jb21wb25lbnQuY2xvc2VUYWJTZWxlY3QoKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyBjb25zb2xlLmxvZygnYXNhc2FzJyk7XG4gIH1cbiAgZ2V0VGFic0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnRhYnMudG9BcnJheSgpO1xuICB9XG5cblxuXG5cbn1cbiJdfQ==