/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ErrorHandler } from '@angular/core';
import { APPError } from '../errorHandler/APPError';
import * as i0 from "@angular/core";
export class APIFactory {
    /**
     * @private
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
        this.apiMap = new Map();
    }
    /**
     * @param {?} api
     * @return {?}
     */
    registerAPI(api) {
        this.apiMap.set(api.getAPIName(), api);
    }
    /**
     * @param {?} api
     * @return {?}
     */
    unRegisterAPI(api) {
        this.apiMap.delete(api.getAPIName());
    }
    /**
     * @param {?} apiName
     * @return {?}
     */
    getAPI(apiName) {
        /** @type {?} */
        let target = this.apiMap.get(apiName);
        if (target) {
            console.group("get API:");
            console.log("target:", target);
            /** @type {?} */
            let newInstance = Object.create(Object.getPrototypeOf(target));
            newInstance.constructor.apply(newInstance);
            newInstance = Object.assign(newInstance, target);
            console.log("new instance:", newInstance);
            console.groupEnd();
            return newInstance;
        }
        else {
            console.log(`API ${apiName} not found!`);
            this.errorHandler.handleError(new APPError("F00013", `Cannot find API ${apiName}.`));
            return null;
        }
    }
}
APIFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIFactory.ctorParameters = () => [
    { type: ErrorHandler }
];
/** @nocollapse */ APIFactory.ngInjectableDef = i0.defineInjectable({ factory: function APIFactory_Factory() { return new APIFactory(i0.inject(i0.ErrorHandler)); }, token: APIFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0FQSUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFPcEQsTUFBTTs7Ozs7SUFJRixZQUNZLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxHQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxHQUFTO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQWU7O1lBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O2dCQUMzQixXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTyxXQUFXLENBQUM7U0FDdEI7YUFDSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxPQUFPLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7WUF2Q0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFQb0IsWUFBWTs7Ozs7Ozs7SUFVN0IsNEJBQWtDOzs7OztJQUc5QixrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tICcuLi9lcnJvckhhbmRsZXIvQVBQRXJyb3InO1xuXG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBUElGYWN0b3J5IHtcblxuICAgIHByaXZhdGUgYXBpTWFwOiBNYXA8c3RyaW5nLCBJQVBJPjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5hcGlNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG5cbiAgICByZWdpc3RlckFQSShhcGk6IElBUEkpIHtcbiAgICAgICAgdGhpcy5hcGlNYXAuc2V0KGFwaS5nZXRBUElOYW1lKCksIGFwaSk7XG4gICAgfVxuXG4gICAgdW5SZWdpc3RlckFQSShhcGk6IElBUEkpIHtcbiAgICAgICAgdGhpcy5hcGlNYXAuZGVsZXRlKGFwaS5nZXRBUElOYW1lKCkpO1xuICAgIH1cblxuICAgIGdldEFQSShhcGlOYW1lOiBzdHJpbmcpOiBJQVBJIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuYXBpTWFwLmdldChhcGlOYW1lKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cChcImdldCBBUEk6XCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldDpcIiwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBuZXdJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkpO1xuICAgICAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkobmV3SW5zdGFuY2UpO1xuICAgICAgICAgICAgbmV3SW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKG5ld0luc3RhbmNlLCB0YXJnZXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgaW5zdGFuY2U6XCIsIG5ld0luc3RhbmNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBUEkgJHthcGlOYW1lfSBub3QgZm91bmQhYCk7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTNcIiwgYENhbm5vdCBmaW5kIEFQSSAke2FwaU5hbWV9LmApKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19