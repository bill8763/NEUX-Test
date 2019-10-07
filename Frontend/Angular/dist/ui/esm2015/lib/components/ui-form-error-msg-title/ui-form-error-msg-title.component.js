/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiFormErrorMsgTitleComponent {
    constructor() {
        this.styleType = "";
        this.showIcon = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    iconControl() {
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
    }
}
UiFormErrorMsgTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-error-msg-title',
                template: "<div class=\"error-msg-title-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-title-content{font-size:0}.error-msg-title-content .error-msg-icon,.error-msg-title-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-title-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(1px);transform:translateY(1px)}.error-msg-title-content .error-msg-icon ::ng-deep nx-icon{width:24px;height:24px;font-size:24px;border:none;line-height:1em;background-color:transparent;vertical-align:top}.error-msg-title-content .error-msg-icon.exclamation-circle ::ng-deep nx-icon{color:#dc3149}.error-msg-title-content .error-msg-icon.info-circle ::ng-deep nx-icon{color:#0068b7}.error-msg-title-content .error-msg-icon.check-circle ::ng-deep nx-icon{color:#3da556}.error-msg-title-content .error-msg-icon.exclamation-triangle ::ng-deep nx-icon{color:#ccdd61}.error-msg-title-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
            }] }
];
UiFormErrorMsgTitleComponent.ctorParameters = () => [];
UiFormErrorMsgTitleComponent.propDecorators = {
    styleType: [{ type: Input }],
    showIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormErrorMsgTitleComponent.prototype.styleType;
    /** @type {?} */
    UiFormErrorMsgTitleComponent.prototype.showIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWVycm9yLW1zZy10aXRsZS91aS1mb3JtLWVycm9yLW1zZy10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFHSjtRQUZTLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLElBQUksQ0FBQztJQUNqQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUM7WUFDM0IsT0FBTyxvQkFBb0IsQ0FBQztTQUM3QjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQUM7WUFDMUIsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFDO1lBQzdCLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBQztZQUM3QixPQUFPLHNCQUFzQixDQUFBO1NBQzlCO0lBQ0gsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxpVEFBdUQ7Z0JBRXZELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFETixpREFBK0I7O0lBQy9CLGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tZXJyb3ItbXNnLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tZXJyb3ItbXNnLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1lcnJvci1tc2ctdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1FcnJvck1zZ1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc3R5bGVUeXBlOnN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHNob3dJY29uOmJvb2xlYW4gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGljb25Db250cm9sKCkge1xuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwiZXJyb3JcIil7XG4gICAgICByZXR1cm4gXCJleGNsYW1hdGlvbi1jaXJjbGVcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gXCJpbmZvXCIpe1xuICAgICAgcmV0dXJuIFwiaW5mby1jaXJjbGVcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gXCJzdWNjZXNzXCIpe1xuICAgICAgcmV0dXJuIFwiY2hlY2stY2lyY2xlXCI7XG4gICAgfVxuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwid2FybmluZ1wiKXtcbiAgICAgIHJldHVybiBcImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICB9XG4gIH1cblxufVxuIl19