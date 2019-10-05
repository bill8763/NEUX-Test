/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CordovaDeviceDao } from "./CordovaDeviceDao";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class DeviceFactory {
    /**
     * @private
     */
    constructor() {
        this.daoMap = new Map();
        this.daoMap.set("cordova", new CordovaDeviceDao());
    }
    /**
     * @return {?}
     */
    getDefaultDao() {
        return this.getDao("cordova");
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getDao(name) {
        return this.daoMap.get(name);
    }
}
DeviceFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DeviceFactory.ctorParameters = () => [];
/** @nocollapse */ DeviceFactory.ngInjectableDef = i0.defineInjectable({ factory: function DeviceFactory_Factory() { return new DeviceFactory(); }, token: DeviceFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceFactory.prototype.daoMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL0RldmljZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU07Ozs7SUFFRjtRQURRLFdBQU0sR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFkSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFDLE1BQU07YUFDcEI7Ozs7Ozs7OztJQUVHLCtCQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEZXZpY2VEYW8gfSBmcm9tIFwiLi9EZXZpY2VEYW8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBDb3Jkb3ZhRGV2aWNlRGFvIH0gZnJvbSBcIi4vQ29yZG92YURldmljZURhb1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46J3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERldmljZUZhY3Rvcnkge1xuICAgIHByaXZhdGUgZGFvTWFwOiBNYXA8c3RyaW5nLCBJRGV2aWNlRGFvPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhb01hcC5zZXQoXCJjb3Jkb3ZhXCIsIG5ldyBDb3Jkb3ZhRGV2aWNlRGFvKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RGVmYXVsdERhbygpOiBJRGV2aWNlRGFvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGFvKFwiY29yZG92YVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGFvKG5hbWU6IHN0cmluZyk6IElEZXZpY2VEYW8ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYW9NYXAuZ2V0KG5hbWUpO1xuICAgIH1cblxuXG5cbn0iXX0=