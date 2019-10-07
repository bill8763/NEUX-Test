/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ErrorHandler } from '@angular/core';
import { APPError } from '../errorHandler/APPError';
import * as i0 from "@angular/core";
var APIFactory = /** @class */ (function () {
    function APIFactory(errorHandler) {
        this.errorHandler = errorHandler;
        this.apiMap = new Map();
    }
    /**
     * @param {?} api
     * @return {?}
     */
    APIFactory.prototype.registerAPI = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.apiMap.set(api.getAPIName(), api);
    };
    /**
     * @param {?} api
     * @return {?}
     */
    APIFactory.prototype.unRegisterAPI = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.apiMap.delete(api.getAPIName());
    };
    /**
     * @param {?} apiName
     * @return {?}
     */
    APIFactory.prototype.getAPI = /**
     * @param {?} apiName
     * @return {?}
     */
    function (apiName) {
        /** @type {?} */
        var target = this.apiMap.get(apiName);
        if (target) {
            console.group("get API:");
            console.log("target:", target);
            /** @type {?} */
            var newInstance = Object.create(Object.getPrototypeOf(target));
            newInstance.constructor.apply(newInstance);
            newInstance = Object.assign(newInstance, target);
            console.log("new instance:", newInstance);
            console.groupEnd();
            return newInstance;
        }
        else {
            console.log("API " + apiName + " not found!");
            this.errorHandler.handleError(new APPError("F00013", "Cannot find API " + apiName + "."));
            return null;
        }
    };
    APIFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    APIFactory.ctorParameters = function () { return [
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ APIFactory.ngInjectableDef = i0.defineInjectable({ factory: function APIFactory_Factory() { return new APIFactory(i0.inject(i0.ErrorHandler)); }, token: APIFactory, providedIn: "root" });
    return APIFactory;
}());
export { APIFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    APIFactory.prototype.apiMap;
    /**
     * @type {?}
     * @private
     */
    APIFactory.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0FQSUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFJcEQ7SUFPSSxvQkFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFHRCxnQ0FBVzs7OztJQUFYLFVBQVksR0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxrQ0FBYTs7OztJQUFiLFVBQWMsR0FBUztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELDJCQUFNOzs7O0lBQU4sVUFBTyxPQUFlOztZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztnQkFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO2FBQ0k7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQU8sT0FBTyxnQkFBYSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLHFCQUFtQixPQUFPLE1BQUcsQ0FBQyxDQUFDLENBQUM7WUFDckYsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7O2dCQXZDSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Z0JBUG9CLFlBQVk7OztxQkFEakM7Q0ErQ0MsQUF6Q0QsSUF5Q0M7U0F0Q1ksVUFBVTs7Ozs7O0lBRW5CLDRCQUFrQzs7Ozs7SUFHOUIsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSAnLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yJztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQVBJRmFjdG9yeSB7XG5cbiAgICBwcml2YXRlIGFwaU1hcDogTWFwPHN0cmluZywgSUFQST47XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXBpTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuXG4gICAgcmVnaXN0ZXJBUEkoYXBpOiBJQVBJKSB7XG4gICAgICAgIHRoaXMuYXBpTWFwLnNldChhcGkuZ2V0QVBJTmFtZSgpLCBhcGkpO1xuICAgIH1cblxuICAgIHVuUmVnaXN0ZXJBUEkoYXBpOiBJQVBJKSB7XG4gICAgICAgIHRoaXMuYXBpTWFwLmRlbGV0ZShhcGkuZ2V0QVBJTmFtZSgpKTtcbiAgICB9XG5cbiAgICBnZXRBUEkoYXBpTmFtZTogc3RyaW5nKTogSUFQSSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmFwaU1hcC5nZXQoYXBpTmFtZSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJnZXQgQVBJOlwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXJnZXQ6XCIsIHRhcmdldCk7XG4gICAgICAgICAgICBsZXQgbmV3SW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcbiAgICAgICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdG9yLmFwcGx5KG5ld0luc3RhbmNlKTtcbiAgICAgICAgICAgIG5ld0luc3RhbmNlID0gT2JqZWN0LmFzc2lnbihuZXdJbnN0YW5jZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGluc3RhbmNlOlwiLCBuZXdJbnN0YW5jZSk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQVBJICR7YXBpTmFtZX0gbm90IGZvdW5kIWApO1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDEzXCIsIGBDYW5ub3QgZmluZCBBUEkgJHthcGlOYW1lfS5gKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==