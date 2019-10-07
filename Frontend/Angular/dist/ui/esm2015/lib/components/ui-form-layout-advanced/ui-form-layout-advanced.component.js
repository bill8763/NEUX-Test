/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiFormLayoutAdvancedComponent {
    constructor() {
        this.isDel = false;
        this.isAdd = false;
        this.isIcon = false;
        this.limitAdd = 1;
        this.limitDel = 1;
        this.isOnlyText = false;
        // row 
        this.classRow = ' gas-row';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiFormLayoutAdvancedComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-layout-advanced',
                template: "<div class=\"gas-layout-form\" [ngClass]=\"isOnlyText ? ' style-only-text': ''\">\n    <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.gas-layout-form{margin-top:30px}.gas-layout-form.style-only-text{margin-top:0}.gas-layout-form ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.gas-layout-form ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}.gas-layout-form ::ng-deep .icon-add{margin-top:-5px}.gas-layout-form ::ng-deep .first-add-block .icon-add{margin-top:0;min-height:30px}.gas-layout-form ::ng-deep .ui-data-group .pre-block{margin-bottom:-15px}"]
            }] }
];
UiFormLayoutAdvancedComponent.ctorParameters = () => [];
UiFormLayoutAdvancedComponent.propDecorators = {
    isDel: [{ type: Input }],
    isAdd: [{ type: Input }],
    isIcon: [{ type: Input }],
    iconImg: [{ type: Input }],
    limitAdd: [{ type: Input }],
    limitDel: [{ type: Input }],
    isOnlyText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.isDel;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.isAdd;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.isIcon;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.iconImg;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.limitAdd;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.limitDel;
    /** @type {?} */
    UiFormLayoutAdvancedComponent.prototype.isOnlyText;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutAdvancedComponent.prototype.classRow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtYWR2YW5jZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWxheW91dC1hZHZhbmNlZC91aS1mb3JtLWxheW91dC1hZHZhbmNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFlSjtRQWRTLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBSXJDLE9BQU87UUFDQyxhQUFRLEdBQVcsVUFBVSxDQUFDO0lBR3RCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUVSLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsb0lBQXVEO2dCQUV2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7b0JBRUUsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQU5OLDhDQUFnQzs7SUFDaEMsOENBQWdDOztJQUNoQywrQ0FBaUM7O0lBQ2pDLGdEQUF5Qjs7SUFDekIsaURBQThCOztJQUM5QixpREFBOEI7O0lBQzlCLG1EQUFxQzs7Ozs7SUFLckMsaURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1sYXlvdXQtYWR2YW5jZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1sYXlvdXQtYWR2YW5jZWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWxheW91dC1hZHZhbmNlZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1MYXlvdXRBZHZhbmNlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlzRGVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQWRkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uSW1nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbWl0QWRkOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBsaW1pdERlbDogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgaXNPbmx5VGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvLyByb3cgXG4gIHByaXZhdGUgY2xhc3NSb3c6IHN0cmluZyA9ICcgZ2FzLXJvdyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19