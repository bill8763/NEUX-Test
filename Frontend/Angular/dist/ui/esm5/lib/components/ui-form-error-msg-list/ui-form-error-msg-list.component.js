/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiFormErrorMsgListComponent = /** @class */ (function () {
    function UiFormErrorMsgListComponent() {
        this.styleType = "";
        this.showIcon = true;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgListComponent.prototype.iconControl = /**
     * @return {?}
     */
    function () {
        // if(this.styleType == "error"){
        //   return "exclamation-circle";
        // }
        // if(this.styleType == "info"){
        //   return "info-circle";
        // }
        if (this.styleType == "success") {
            return "check";
        }
        if (this.styleType == "warning") {
            return "close";
        }
    };
    UiFormErrorMsgListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-list',
                    template: "<div class=\"error-msg-list-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-list-content{font-size:0}.error-msg-list-content .error-msg-icon,.error-msg-list-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-list-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(.5px);transform:translateY(.5px)}.error-msg-list-content .error-msg-icon ::ng-deep nx-icon{width:20px;height:20px;font-size:font-size-h9;border:none;line-height:20px;background-color:transparent;vertical-align:top}.error-msg-list-content .error-msg-icon.check ::ng-deep nx-icon{color:#3da556}.error-msg-list-content .error-msg-icon.close ::ng-deep nx-icon{color:#767676}.error-msg-list-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:font-size-h8;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
                }] }
    ];
    UiFormErrorMsgListComponent.ctorParameters = function () { return []; };
    UiFormErrorMsgListComponent.propDecorators = {
        styleType: [{ type: Input }],
        showIcon: [{ type: Input }]
    };
    return UiFormErrorMsgListComponent;
}());
export { UiFormErrorMsgListComponent };
if (false) {
    /** @type {?} */
    UiFormErrorMsgListComponent.prototype.styleType;
    /** @type {?} */
    UiFormErrorMsgListComponent.prototype.showIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWxpc3QvdWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBU0U7UUFGUyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxJQUFJLENBQUM7SUFDakIsQ0FBQzs7OztJQUVqQiw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QsaURBQVc7OztJQUFYO1FBQ0UsaUNBQWlDO1FBQ2pDLGlDQUFpQztRQUNqQyxJQUFJO1FBQ0osZ0NBQWdDO1FBQ2hDLDBCQUEwQjtRQUMxQixJQUFJO1FBQ0osSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBQztZQUM3QixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUM7WUFDN0IsT0FBTyxPQUFPLENBQUE7U0FDZjtJQUNILENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsOFNBQXNEO29CQUV0RCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzRCQUVFLEtBQUs7MkJBQ0wsS0FBSzs7SUFtQlIsa0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXJCWSwyQkFBMkI7OztJQUN0QyxnREFBK0I7O0lBQy9CLCtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tZXJyb3ItbXNnLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tZXJyb3ItbXNnLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1FcnJvck1zZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzdHlsZVR5cGU6c3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgc2hvd0ljb246Ym9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgaWNvbkNvbnRyb2woKSB7XG4gICAgLy8gaWYodGhpcy5zdHlsZVR5cGUgPT0gXCJlcnJvclwiKXtcbiAgICAvLyAgIHJldHVybiBcImV4Y2xhbWF0aW9uLWNpcmNsZVwiO1xuICAgIC8vIH1cbiAgICAvLyBpZih0aGlzLnN0eWxlVHlwZSA9PSBcImluZm9cIil7XG4gICAgLy8gICByZXR1cm4gXCJpbmZvLWNpcmNsZVwiO1xuICAgIC8vIH1cbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICByZXR1cm4gXCJjaGVja1wiO1xuICAgIH1cbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBcIndhcm5pbmdcIil7XG4gICAgICByZXR1cm4gXCJjbG9zZVwiXG4gICAgfVxuICB9XG59XG4iXX0=