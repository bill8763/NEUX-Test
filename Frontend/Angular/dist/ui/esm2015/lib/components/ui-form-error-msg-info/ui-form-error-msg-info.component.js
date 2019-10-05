/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class UiFormErrorMsgInfoComponent {
    /**
     * @param {?} changeDetecor
     */
    constructor(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.styleType = "regular";
        this.messageShow = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} boolean
     * @return {?}
     */
    controlMsg(boolean) {
        this.messageShow = boolean;
        this.changeDetecor.markForCheck();
    }
    /**
     * @return {?}
     */
    hideMsg() {
        this.messageShow = false;
        this.changeDetecor.markForCheck();
    }
}
UiFormErrorMsgInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-error-msg-info',
                template: "<div class=\"form-error-msg-info-content\" >\n    <nx-message nxContext='{{styleType}}' [ngClass]=\"{'show':messageShow}\">\n      <ng-content></ng-content>\n    </nx-message>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-error-msg-info-content{height:5px;padding-top:5px}.form-error-msg-info-content ::ng-deep nx-message{margin:0;padding:24px 30px 23px}.form-error-msg-info-content ::ng-deep nx-message:not(.show){display:none}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list,.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title{display:block}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title+app-ui-form-error-msg-list{margin-top:18px}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list+app-ui-form-error-msg-list{margin-top:16px}"]
            }] }
];
UiFormErrorMsgInfoComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiFormErrorMsgInfoComponent.propDecorators = {
    styleType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormErrorMsgInfoComponent.prototype.styleType;
    /** @type {?} */
    UiFormErrorMsgInfoComponent.prototype.messageShow;
    /**
     * @type {?}
     * @private
     */
    UiFormErrorMsgInfoComponent.prototype.changeDetecor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXJHLE1BQU07Ozs7SUFHSixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFGMUMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixnQkFBVyxHQUFXLEtBQUssQ0FBQztJQUMyQixDQUFDOzs7O0lBRXhELFFBQVE7SUFDUixDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMscU1BQXNEO2dCQUV0RCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7OztZQVAyRCxpQkFBaUI7Ozt3QkFTMUUsS0FBSzs7OztJQUFOLGdEQUErQjs7SUFDL0Isa0RBQTRCOzs7OztJQUNoQixvREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1lcnJvci1tc2ctaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLWVycm9yLW1zZy1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0eWxlVHlwZSA9IFwicmVndWxhclwiO1xuICBtZXNzYWdlU2hvdzpib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWNvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgY29udHJvbE1zZyhib29sZWFuKXtcbiAgICB0aGlzLm1lc3NhZ2VTaG93ID0gYm9vbGVhbjtcbiAgICB0aGlzLmNoYW5nZURldGVjb3IubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgaGlkZU1zZygpe1xuICAgIHRoaXMubWVzc2FnZVNob3cgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjb3IubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==