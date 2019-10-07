/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { UiTableItemComponent } from '../ui-table-item/ui-table-item.component';
export class UiTableRowHeadComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    itemToArray() {
        if (this.items != undefined) {
            // this.test();
            return this.items.toArray();
        }
    }
    /**
     * @return {?}
     */
    test() {
        console.log('table row item:', this.items);
        console.log('table row item array:', this.items.toArray());
    }
}
UiTableRowHeadComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-row-head',
                template: "\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
UiTableRowHeadComponent.ctorParameters = () => [];
UiTableRowHeadComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [UiTableItemComponent,] }]
};
if (false) {
    /** @type {?} */
    UiTableRowHeadComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtcm93LWhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1yb3ctaGVhZC91aS10YWJsZS1yb3ctaGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFlLFNBQVMsRUFBRSx1QkFBdUIsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9oRixNQUFNO0lBRUosZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBQztZQUN6QixlQUFlO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBRTdCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGdCQUFpRDtnQkFFakQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O29CQUVFLGVBQWUsU0FBQyxvQkFBb0I7Ozs7SUFBckMsd0NBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpVGFibGVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFibGUtaXRlbS91aS10YWJsZS1pdGVtLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFibGUtcm93LWhlYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtcm93LWhlYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1yb3ctaGVhZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVSb3dIZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihVaVRhYmxlSXRlbUNvbXBvbmVudCkgaXRlbXM6UXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGl0ZW1Ub0FycmF5KCl7XG4gICAgaWYodGhpcy5pdGVtcyAhPSB1bmRlZmluZWQpe1xuICAgICAgLy8gdGhpcy50ZXN0KCk7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHRlc3QoKXtcbiAgICBjb25zb2xlLmxvZygndGFibGUgcm93IGl0ZW06Jyx0aGlzLml0ZW1zKTtcbiAgICBjb25zb2xlLmxvZygndGFibGUgcm93IGl0ZW0gYXJyYXk6Jyx0aGlzLml0ZW1zLnRvQXJyYXkoKSk7XG4gIH1cbn1cbiJdfQ==