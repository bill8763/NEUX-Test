/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { DeviceService, NotificationMgr, NotificationType } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class NotificationUtils {
    /**
     * @param {?} deviceService
     * @param {?} notificationMgr
     */
    constructor(deviceService, notificationMgr) {
        this.deviceService = deviceService;
        this.notificationMgr = notificationMgr;
    }
    /**
     * @return {?}
     */
    checkNetworkBeforeAction() {
        /** @type {?} */
        let isOnline = this.deviceService.getNetworkState();
        if (!isOnline) {
            this.notificationMgr.pushNotification(NotificationType.OnlineCheck, {});
        }
        return isOnline;
    }
}
NotificationUtils.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NotificationUtils.ctorParameters = () => [
    { type: DeviceService },
    { type: NotificationMgr }
];
/** @nocollapse */ NotificationUtils.ngInjectableDef = i0.defineInjectable({ factory: function NotificationUtils_Factory() { return new NotificationUtils(i0.inject(i1.DeviceService), i0.inject(i1.NotificationMgr)); }, token: NotificationUtils, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationUtils.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    NotificationUtils.prototype.notificationMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9ub3RpZmljYXRpb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9Ob3RpZmljYXRpb25VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFzQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBS3hHLE1BQU07Ozs7O0lBR0YsWUFDWSxhQUE0QixFQUM1QixlQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFNUMsQ0FBQzs7OztJQUVNLHdCQUF3Qjs7WUFDdkIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO1FBQ25ELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELE9BQU8sUUFBUSxDQUFDO0lBRXBCLENBQUM7OztZQXBCSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7OztZQUpRLGFBQWE7WUFBc0IsZUFBZTs7Ozs7Ozs7SUFTbkQsMENBQW9DOzs7OztJQUNwQyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERldmljZVNlcnZpY2UsIE5vdGlmaWNhdGlvbk9iamVjdCwgTm90aWZpY2F0aW9uTWdyLCBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25VdGlscyB7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uTWdyOiBOb3RpZmljYXRpb25NZ3JcbiAgICApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tOZXR3b3JrQmVmb3JlQWN0aW9uKCkge1xuICAgICAgICBsZXQgaXNPbmxpbmUgPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0TmV0d29ya1N0YXRlKCk7XG4gICAgICAgIGlmICghaXNPbmxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWdyLnB1c2hOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZS5PbmxpbmVDaGVjaywge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzT25saW5lO1xuXG4gICAgfVxuXG5cbn0iXX0=