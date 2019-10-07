/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiFormErrorMsgTitleComponent = /** @class */ (function () {
    function UiFormErrorMsgTitleComponent() {
        this.styleType = "";
        this.showIcon = true;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgTitleComponent.prototype.iconControl = /**
     * @return {?}
     */
    function () {
        if (this.styleType == "error") {
            return "exclamation-circle";
        }
        if (this.styleType == "info") {
            return "info-circle";
        }
        if (this.styleType == "success") {
            return "check-circle";
        }
        if (this.styleType == "warning") {
            return "exclamation-triangle";
        }
    };
    UiFormErrorMsgTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-title',
                    template: "<div class=\"error-msg-title-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-title-content{font-size:0}.error-msg-title-content .error-msg-icon,.error-msg-title-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-title-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(1px);transform:translateY(1px)}.error-msg-title-content .error-msg-icon ::ng-deep nx-icon{width:24px;height:24px;font-size:24px;border:none;line-height:1em;background-color:transparent;vertical-align:top}.error-msg-title-content .error-msg-icon.exclamation-circle ::ng-deep nx-icon{color:#dc3149}.error-msg-title-content .error-msg-icon.info-circle ::ng-deep nx-icon{color:#0068b7}.error-msg-title-content .error-msg-icon.check-circle ::ng-deep nx-icon{color:#3da556}.error-msg-title-content .error-msg-icon.exclamation-triangle ::ng-deep nx-icon{color:#ccdd61}.error-msg-title-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
                }] }
    ];
    UiFormErrorMsgTitleComponent.ctorParameters = function () { return []; };
    UiFormErrorMsgTitleComponent.propDecorators = {
        styleType: [{ type: Input }],
        showIcon: [{ type: Input }]
    };
    return UiFormErrorMsgTitleComponent;
}());
export { UiFormErrorMsgTitleComponent };
if (false) {
    /** @type {?} */
    UiFormErrorMsgTitleComponent.prototype.styleType;
    /** @type {?} */
    UiFormErrorMsgTitleComponent.prototype.showIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWVycm9yLW1zZy10aXRsZS91aS1mb3JtLWVycm9yLW1zZy10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBU0U7UUFGUyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxJQUFJLENBQUM7SUFDakIsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0Qsa0RBQVc7OztJQUFYO1FBQ0UsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFBQztZQUMzQixPQUFPLG9CQUFvQixDQUFDO1NBQzdCO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBQztZQUMxQixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUM7WUFDN0IsT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFDO1lBQzdCLE9BQU8sc0JBQXNCLENBQUE7U0FDOUI7SUFDSCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLGlUQUF1RDtvQkFFdkQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozs0QkFFRSxLQUFLOzJCQUNMLEtBQUs7O0lBb0JSLG1DQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0QlksNEJBQTRCOzs7SUFDdkMsaURBQStCOztJQUMvQixnREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWVycm9yLW1zZy10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLWVycm9yLW1zZy10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tZXJyb3ItbXNnLXRpdGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtRXJyb3JNc2dUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0eWxlVHlwZTpzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBzaG93SWNvbjpib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBpY29uQ29udHJvbCgpIHtcbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBcImVycm9yXCIpe1xuICAgICAgcmV0dXJuIFwiZXhjbGFtYXRpb24tY2lyY2xlXCI7XG4gICAgfVxuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwiaW5mb1wiKXtcbiAgICAgIHJldHVybiBcImluZm8tY2lyY2xlXCI7XG4gICAgfVxuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwic3VjY2Vzc1wiKXtcbiAgICAgIHJldHVybiBcImNoZWNrLWNpcmNsZVwiO1xuICAgIH1cbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBcIndhcm5pbmdcIil7XG4gICAgICByZXR1cm4gXCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==