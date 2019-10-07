/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { animationCollapse } from '../../model/Animation/AnimationCollapse';
var UiCollapseContentComponent = /** @class */ (function () {
    function UiCollapseContentComponent(changeDector) {
        this.changeDector = changeDector;
        this.isShow = true;
        this.isOpen = true;
        this.isHasCollapse = true;
        this.titleText = '';
        this.onCollapsing = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleNoCollapse = this.isHasCollapse ? '' : 'style-no-collapse';
    };
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.onCollapsing.emit(this.isOpen);
        this.changeDector.markForCheck();
        this.changeDector.detectChanges();
        return this.isOpen;
    };
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isOpen ? 'open' : 'closed';
    };
    UiCollapseContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-collapse-content',
                    animations: [
                        animationCollapse
                    ],
                    template: "<div class=\"table-collapse\" [ngClass]=\"{'show':!isOpen}\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"toggleCollapse()\" [ngClass]=\"styleNoCollapse\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content \" [@openClose]=\"isOpenStatus()\" [ngClass]=\"{'showActive':isOpen}\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-collapse .collapse-content{border-left:1px solid #ececec;border-right:1px solid #ececec;border-bottom:1px solid #ececec;overflow-y:hidden}.table-collapse ::ng-deep app-ui-table-title.style-no-collapse{display:none}.table-collapse ::ng-deep app-ui-table-title .event-btn{background-color:#007ab3;display:flex;align-items:center;justify-content:center}.table-collapse ::ng-deep app-ui-table-title .event-btn:before{content:'';transition:.5s;display:inline-block;background-size:contain;background-image:url(assets/img/icon-arrow-white.svg);width:20px;height:20px;background-repeat:no-repeat;vertical-align:middle;position:relative;top:3px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.table-collapse.show ::ng-deep app-ui-table-title .event-btn:before{top:-3px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}"]
                }] }
    ];
    UiCollapseContentComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseContentComponent.propDecorators = {
        isShow: [{ type: Input }],
        isOpen: [{ type: Input }],
        isHasCollapse: [{ type: Input }],
        titleText: [{ type: Input }],
        onCollapsing: [{ type: Output }]
    };
    return UiCollapseContentComponent;
}());
export { UiCollapseContentComponent };
if (false) {
    /** @type {?} */
    UiCollapseContentComponent.prototype.isShow;
    /** @type {?} */
    UiCollapseContentComponent.prototype.isOpen;
    /** @type {?} */
    UiCollapseContentComponent.prototype.isHasCollapse;
    /** @type {?} */
    UiCollapseContentComponent.prototype.titleText;
    /** @type {?} */
    UiCollapseContentComponent.prototype.onCollapsing;
    /** @type {?} */
    UiCollapseContentComponent.prototype.styleNoCollapse;
    /**
     * @type {?}
     * @private
     */
    UiCollapseContentComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbGxhcHNlLWNvbnRlbnQvdWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUU7SUFXRSxvQ0FBb0IsWUFBOEI7UUFBOUIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQ3pDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUxVLENBQUM7Ozs7SUFPdkQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxtREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsaURBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFVBQVUsRUFBRTt3QkFDVixpQkFBaUI7cUJBQ2xCO29CQUNELGtiQUF5RDtvQkFFekQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7O2dCQVZpRixpQkFBaUI7Ozt5QkFjaEcsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxNQUFNOztJQWlCVCxpQ0FBQztDQUFBLEFBakNELElBaUNDO1NBeEJZLDBCQUEwQjs7O0lBR3JDLDRDQUErQjs7SUFDL0IsNENBQWdDOztJQUNoQyxtREFBdUM7O0lBQ3ZDLCtDQUErQjs7SUFDL0Isa0RBQTRDOztJQUM1QyxxREFBZ0M7Ozs7O0lBTnBCLGtEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uQ29sbGFwc2UgfSBmcm9tICcuLi8uLi9tb2RlbC9BbmltYXRpb24vQW5pbWF0aW9uQ29sbGFwc2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYmxlLWNvbGxhcHNlLWNvbnRlbnQnLFxuICBhbmltYXRpb25zOiBbXG4gICAgYW5pbWF0aW9uQ29sbGFwc2VcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWNvbGxhcHNlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1jb2xsYXBzZS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlDb2xsYXBzZUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7IH1cbiAgQElucHV0KCkgaXNTaG93OmJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0hhc0NvbGxhcHNlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgdGl0bGVUZXh0OnN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgb25Db2xsYXBzaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgc3R5bGVOb0NvbGxhcHNlIDogc3RyaW5nO1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlTm9Db2xsYXBzZSA9IHRoaXMuaXNIYXNDb2xsYXBzZSA/ICcnIDogJ3N0eWxlLW5vLWNvbGxhcHNlJztcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIHRoaXMub25Db2xsYXBzaW5nLmVtaXQodGhpcy5pc09wZW4pO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cbiAgaXNPcGVuU3RhdHVzKCl7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG4gIH1cblxufVxuIl19