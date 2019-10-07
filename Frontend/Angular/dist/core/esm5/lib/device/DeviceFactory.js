/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CordovaDeviceDao } from "./CordovaDeviceDao";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var DeviceFactory = /** @class */ (function () {
    function DeviceFactory() {
        this.daoMap = new Map();
        this.daoMap.set("cordova", new CordovaDeviceDao());
    }
    /**
     * @return {?}
     */
    DeviceFactory.prototype.getDefaultDao = /**
     * @return {?}
     */
    function () {
        return this.getDao("cordova");
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DeviceFactory.prototype.getDao = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.daoMap.get(name);
    };
    DeviceFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DeviceFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DeviceFactory.ngInjectableDef = i0.defineInjectable({ factory: function DeviceFactory_Factory() { return new DeviceFactory(); }, token: DeviceFactory, providedIn: "root" });
    return DeviceFactory;
}());
export { DeviceFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceFactory.prototype.daoMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL0RldmljZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBS0k7UUFEUSxXQUFNLEdBQTRCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSxxQ0FBYTs7O0lBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sOEJBQU07Ozs7SUFBYixVQUFjLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFkSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFDLE1BQU07aUJBQ3BCOzs7O3dCQVBEO0NBdUJDLEFBbEJELElBa0JDO1NBZlksYUFBYTs7Ozs7O0lBQ3RCLCtCQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEZXZpY2VEYW8gfSBmcm9tIFwiLi9EZXZpY2VEYW8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBDb3Jkb3ZhRGV2aWNlRGFvIH0gZnJvbSBcIi4vQ29yZG92YURldmljZURhb1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46J3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERldmljZUZhY3Rvcnkge1xuICAgIHByaXZhdGUgZGFvTWFwOiBNYXA8c3RyaW5nLCBJRGV2aWNlRGFvPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhb01hcC5zZXQoXCJjb3Jkb3ZhXCIsIG5ldyBDb3Jkb3ZhRGV2aWNlRGFvKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RGVmYXVsdERhbygpOiBJRGV2aWNlRGFvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGFvKFwiY29yZG92YVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGFvKG5hbWU6IHN0cmluZyk6IElEZXZpY2VEYW8ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYW9NYXAuZ2V0KG5hbWUpO1xuICAgIH1cblxuXG5cbn0iXX0=