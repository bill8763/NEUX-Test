/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiFormErrorMsgInfoComponent = /** @class */ (function () {
    function UiFormErrorMsgInfoComponent(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.styleType = "regular";
        this.messageShow = false;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} boolean
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.controlMsg = /**
     * @param {?} boolean
     * @return {?}
     */
    function (boolean) {
        this.messageShow = boolean;
        this.changeDetecor.markForCheck();
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.hideMsg = /**
     * @return {?}
     */
    function () {
        this.messageShow = false;
        this.changeDetecor.markForCheck();
    };
    UiFormErrorMsgInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-info',
                    template: "<div class=\"form-error-msg-info-content\" >\n    <nx-message nxContext='{{styleType}}' [ngClass]=\"{'show':messageShow}\">\n      <ng-content></ng-content>\n    </nx-message>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-error-msg-info-content{height:5px;padding-top:5px}.form-error-msg-info-content ::ng-deep nx-message{margin:0;padding:24px 30px 23px}.form-error-msg-info-content ::ng-deep nx-message:not(.show){display:none}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list,.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title{display:block}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title+app-ui-form-error-msg-list{margin-top:18px}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list+app-ui-form-error-msg-list{margin-top:16px}"]
                }] }
    ];
    UiFormErrorMsgInfoComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormErrorMsgInfoComponent.propDecorators = {
        styleType: [{ type: Input }]
    };
    return UiFormErrorMsgInfoComponent;
}());
export { UiFormErrorMsgInfoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHO0lBU0UscUNBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUYxQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsS0FBSyxDQUFDO0lBQzJCLENBQUM7Ozs7SUFFeEQsOENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFDRCxnREFBVTs7OztJQUFWLFVBQVcsT0FBTztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDRCw2Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMscU1BQXNEO29CQUV0RCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7Z0JBUDJELGlCQUFpQjs7OzRCQVMxRSxLQUFLOztJQWNSLGtDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSwyQkFBMkI7OztJQUN0QyxnREFBK0I7O0lBQy9CLGtEQUE0Qjs7Ozs7SUFDaEIsb0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tZXJyb3ItbXNnLWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1FcnJvck1zZ0luZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzdHlsZVR5cGUgPSBcInJlZ3VsYXJcIjtcbiAgbWVzc2FnZVNob3c6Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjb3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNvbnRyb2xNc2coYm9vbGVhbil7XG4gICAgdGhpcy5tZXNzYWdlU2hvdyA9IGJvb2xlYW47XG4gICAgdGhpcy5jaGFuZ2VEZXRlY29yLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGhpZGVNc2coKXtcbiAgICB0aGlzLm1lc3NhZ2VTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY29yLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=