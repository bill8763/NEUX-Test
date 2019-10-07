/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DeviceAPIAccess = /** @class */ (function () {
    function DeviceAPIAccess() {
    }
    /**
     * @param {?} api
     * @return {?}
     */
    DeviceAPIAccess.prototype.access = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        return ((/** @type {?} */ (api))).runDeviceAPI();
    };
    DeviceAPIAccess.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DeviceAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function DeviceAPIAccess_Factory() { return new DeviceAPIAccess(); }, token: DeviceAPIAccess, providedIn: "root" });
    return DeviceAPIAccess;
}());
export { DeviceAPIAccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlQVBJQWNjZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvaW1wbC9EZXZpY2VBUElBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDO0lBQUE7S0FPQzs7Ozs7SUFIRyxnQ0FBTTs7OztJQUFOLFVBQU8sR0FBUztRQUNaLE9BQU8sQ0FBQyxtQkFBWSxHQUFHLEVBQUEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7O2dCQU5KLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzswQkFSRDtDQWFDLEFBUEQsSUFPQztTQUpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQVBJQWNjZXNzIH0gZnJvbSAnLi4vQVBJQWNjZXNzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJRGV2aWNlQVBJIH0gZnJvbSAnLi4vRGV2aWNlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlQVBJQWNjZXNzIGltcGxlbWVudHMgSUFQSUFjY2VzcyB7XG4gICAgYWNjZXNzKGFwaTogSUFQSSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiAoPElEZXZpY2VBUEk+YXBpKS5ydW5EZXZpY2VBUEkoKTtcbiAgICB9XG59Il19