/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiFormLayoutAdvancedComponent = /** @class */ (function () {
    function UiFormLayoutAdvancedComponent() {
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
    UiFormLayoutAdvancedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormLayoutAdvancedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-advanced',
                    template: "<div class=\"gas-layout-form\" [ngClass]=\"isOnlyText ? ' style-only-text': ''\">\n    <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.gas-layout-form{margin-top:30px}.gas-layout-form.style-only-text{margin-top:0}.gas-layout-form ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.gas-layout-form ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}.gas-layout-form ::ng-deep .icon-add{margin-top:-5px}.gas-layout-form ::ng-deep .first-add-block .icon-add{margin-top:0;min-height:30px}.gas-layout-form ::ng-deep .ui-data-group .pre-block{margin-bottom:-15px}"]
                }] }
    ];
    UiFormLayoutAdvancedComponent.ctorParameters = function () { return []; };
    UiFormLayoutAdvancedComponent.propDecorators = {
        isDel: [{ type: Input }],
        isAdd: [{ type: Input }],
        isIcon: [{ type: Input }],
        iconImg: [{ type: Input }],
        limitAdd: [{ type: Input }],
        limitDel: [{ type: Input }],
        isOnlyText: [{ type: Input }]
    };
    return UiFormLayoutAdvancedComponent;
}());
export { UiFormLayoutAdvancedComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtYWR2YW5jZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWxheW91dC1hZHZhbmNlZC91aS1mb3JtLWxheW91dC1hZHZhbmNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBcUJFO1FBZFMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJckMsT0FBTztRQUNDLGFBQVEsR0FBVyxVQUFVLENBQUM7SUFHdEIsQ0FBQzs7OztJQUVqQixnREFBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLG9JQUF1RDtvQkFFdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozt3QkFFRSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQWNSLG9DQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FyQlksNkJBQTZCOzs7SUFDeEMsOENBQWdDOztJQUNoQyw4Q0FBZ0M7O0lBQ2hDLCtDQUFpQzs7SUFDakMsZ0RBQXlCOztJQUN6QixpREFBOEI7O0lBQzlCLGlEQUE4Qjs7SUFDOUIsbURBQXFDOzs7OztJQUtyQyxpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWxheW91dC1hZHZhbmNlZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLWxheW91dC1hZHZhbmNlZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tbGF5b3V0LWFkdmFuY2VkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUxheW91dEFkdmFuY2VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNEZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25JbWc6IHN0cmluZztcbiAgQElucHV0KCkgbGltaXRBZGQ6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGxpbWl0RGVsOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBpc09ubHlUZXh0OiBib29sZWFuID0gZmFsc2U7XG5cblxuXG4gIC8vIHJvdyBcbiAgcHJpdmF0ZSBjbGFzc1Jvdzogc3RyaW5nID0gJyBnYXMtcm93JztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iXX0=