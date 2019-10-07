/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiFormErrorMsgListComponent {
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
    }
}
UiFormErrorMsgListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-error-msg-list',
                template: "<div class=\"error-msg-list-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-list-content{font-size:0}.error-msg-list-content .error-msg-icon,.error-msg-list-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-list-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(.5px);transform:translateY(.5px)}.error-msg-list-content .error-msg-icon ::ng-deep nx-icon{width:20px;height:20px;font-size:font-size-h9;border:none;line-height:20px;background-color:transparent;vertical-align:top}.error-msg-list-content .error-msg-icon.check ::ng-deep nx-icon{color:#3da556}.error-msg-list-content .error-msg-icon.close ::ng-deep nx-icon{color:#767676}.error-msg-list-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:font-size-h8;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
            }] }
];
UiFormErrorMsgListComponent.ctorParameters = () => [];
UiFormErrorMsgListComponent.propDecorators = {
    styleType: [{ type: Input }],
    showIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormErrorMsgListComponent.prototype.styleType;
    /** @type {?} */
    UiFormErrorMsgListComponent.prototype.showIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWxpc3QvdWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFHSjtRQUZTLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLElBQUksQ0FBQztJQUNqQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsV0FBVztRQUNULGlDQUFpQztRQUNqQyxpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLGdDQUFnQztRQUNoQywwQkFBMEI7UUFDMUIsSUFBSTtRQUNKLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUM7WUFDN0IsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFDO1lBQzdCLE9BQU8sT0FBTyxDQUFBO1NBQ2Y7SUFDSCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDhTQUFzRDtnQkFFdEQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O3dCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUROLGdEQUErQjs7SUFDL0IsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1lcnJvci1tc2ctbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLWVycm9yLW1zZy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUVycm9yTXNnTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0eWxlVHlwZTpzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBzaG93SWNvbjpib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBpY29uQ29udHJvbCgpIHtcbiAgICAvLyBpZih0aGlzLnN0eWxlVHlwZSA9PSBcImVycm9yXCIpe1xuICAgIC8vICAgcmV0dXJuIFwiZXhjbGFtYXRpb24tY2lyY2xlXCI7XG4gICAgLy8gfVxuICAgIC8vIGlmKHRoaXMuc3R5bGVUeXBlID09IFwiaW5mb1wiKXtcbiAgICAvLyAgIHJldHVybiBcImluZm8tY2lyY2xlXCI7XG4gICAgLy8gfVxuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwic3VjY2Vzc1wiKXtcbiAgICAgIHJldHVybiBcImNoZWNrXCI7XG4gICAgfVxuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFwid2FybmluZ1wiKXtcbiAgICAgIHJldHVybiBcImNsb3NlXCJcbiAgICB9XG4gIH1cbn1cbiJdfQ==