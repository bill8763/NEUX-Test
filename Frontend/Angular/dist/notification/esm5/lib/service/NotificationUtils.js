/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { DeviceService, NotificationMgr, NotificationType } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var NotificationUtils = /** @class */ (function () {
    function NotificationUtils(deviceService, notificationMgr) {
        this.deviceService = deviceService;
        this.notificationMgr = notificationMgr;
    }
    /**
     * @return {?}
     */
    NotificationUtils.prototype.checkNetworkBeforeAction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isOnline = this.deviceService.getNetworkState();
        if (!isOnline) {
            this.notificationMgr.pushNotification(NotificationType.OnlineCheck, {});
        }
        return isOnline;
    };
    NotificationUtils.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NotificationUtils.ctorParameters = function () { return [
        { type: DeviceService },
        { type: NotificationMgr }
    ]; };
    /** @nocollapse */ NotificationUtils.ngInjectableDef = i0.defineInjectable({ factory: function NotificationUtils_Factory() { return new NotificationUtils(i0.inject(i1.DeviceService), i0.inject(i1.NotificationMgr)); }, token: NotificationUtils, providedIn: "root" });
    return NotificationUtils;
}());
export { NotificationUtils };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9ub3RpZmljYXRpb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9Ob3RpZmljYXRpb25VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFzQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRXhHO0lBTUksMkJBQ1ksYUFBNEIsRUFDNUIsZUFBZ0M7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRTVDLENBQUM7Ozs7SUFFTSxvREFBd0I7OztJQUEvQjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7UUFDbkQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFFcEIsQ0FBQzs7Z0JBcEJKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFKUSxhQUFhO2dCQUFzQixlQUFlOzs7NEJBRDNEO0NBMEJDLEFBdkJELElBdUJDO1NBcEJZLGlCQUFpQjs7Ozs7O0lBSXRCLDBDQUFvQzs7Ozs7SUFDcEMsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlLCBOb3RpZmljYXRpb25PYmplY3QsIE5vdGlmaWNhdGlvbk1nciwgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVXRpbHMge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrTmV0d29ya0JlZm9yZUFjdGlvbigpIHtcbiAgICAgICAgbGV0IGlzT25saW5lID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldE5ldHdvcmtTdGF0ZSgpO1xuICAgICAgICBpZiAoIWlzT25saW5lKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1nci5wdXNoTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvblR5cGUuT25saW5lQ2hlY2ssIHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc09ubGluZTtcblxuICAgIH1cblxuXG59Il19