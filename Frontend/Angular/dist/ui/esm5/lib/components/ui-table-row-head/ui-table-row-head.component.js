/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { UiTableItemComponent } from '../ui-table-item/ui-table-item.component';
var UiTableRowHeadComponent = /** @class */ (function () {
    function UiTableRowHeadComponent() {
    }
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.itemToArray = /**
     * @return {?}
     */
    function () {
        if (this.items != undefined) {
            // this.test();
            return this.items.toArray();
        }
    };
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.test = /**
     * @return {?}
     */
    function () {
        console.log('table row item:', this.items);
        console.log('table row item array:', this.items.toArray());
    };
    UiTableRowHeadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-row-head',
                    template: "\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiTableRowHeadComponent.ctorParameters = function () { return []; };
    UiTableRowHeadComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [UiTableItemComponent,] }]
    };
    return UiTableRowHeadComponent;
}());
export { UiTableRowHeadComponent };
if (false) {
    /** @type {?} */
    UiTableRowHeadComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtcm93LWhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1yb3ctaGVhZC91aS10YWJsZS1yb3ctaGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFlLFNBQVMsRUFBRSx1QkFBdUIsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRjtJQVFFO0lBQWdCLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELDZDQUFXOzs7SUFBWDtRQUNFLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUM7WUFDekIsZUFBZTtZQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUU3QjtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBSTs7O0lBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGdCQUFpRDtvQkFFakQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozt3QkFFRSxlQUFlLFNBQUMsb0JBQW9COztJQWlCdkMsOEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWxCWSx1QkFBdUI7OztJQUNsQyx3Q0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBUZW1wbGF0ZVJlZiwgUXVlcnlMaXN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlUYWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi91aS10YWJsZS1pdGVtL3VpLXRhYmxlLWl0ZW0uY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1yb3ctaGVhZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1yb3ctaGVhZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRhYmxlLXJvdy1oZWFkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZVJvd0hlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFVpVGFibGVJdGVtQ29tcG9uZW50KSBpdGVtczpRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgaXRlbVRvQXJyYXkoKXtcbiAgICBpZih0aGlzLml0ZW1zICE9IHVuZGVmaW5lZCl7XG4gICAgICAvLyB0aGlzLnRlc3QoKTtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgdGVzdCgpe1xuICAgIGNvbnNvbGUubG9nKCd0YWJsZSByb3cgaXRlbTonLHRoaXMuaXRlbXMpO1xuICAgIGNvbnNvbGUubG9nKCd0YWJsZSByb3cgaXRlbSBhcnJheTonLHRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgfVxufVxuIl19