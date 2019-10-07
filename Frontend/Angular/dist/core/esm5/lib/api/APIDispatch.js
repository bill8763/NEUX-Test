/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIInvokeMethod } from './APIInvokeMethod';
import { MockAPIAccess } from './impl/MockAPIAccess';
import { RestfulAPIAccess } from './impl/RestfulAPIAccess';
import { SQLiteAPIAccess } from './impl/SQLiteAPIAccess';
import { of } from 'rxjs';
import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { DeviceAPIAccess } from './impl/DeviceAPIAccess';
import { TimeoutService } from '../auth/timeout/timeout.service';
import { ConfigToken } from '../injectionToken';
import { APPError } from '../errorHandler/APPError';
import * as i0 from "@angular/core";
import * as i1 from "./impl/MockAPIAccess";
import * as i2 from "./impl/SQLiteAPIAccess";
import * as i3 from "./impl/RestfulAPIAccess";
import * as i4 from "./impl/DeviceAPIAccess";
import * as i5 from "../auth/timeout/timeout.service";
import * as i6 from "../injectionToken/injection-token";
var APIDispatch = /** @class */ (function () {
    function APIDispatch(mockAPIAccess, sqliteAPIAcces, restfulAPIAccess, deviceAPIAccess, timeoutService, errorHandler, APP_CONFIG) {
        this.mockAPIAccess = mockAPIAccess;
        this.sqliteAPIAcces = sqliteAPIAcces;
        this.restfulAPIAccess = restfulAPIAccess;
        this.deviceAPIAccess = deviceAPIAccess;
        this.timeoutService = timeoutService;
        this.errorHandler = errorHandler;
        this.APP_CONFIG = APP_CONFIG;
    }
    /**
     * @param {?} api
     * @return {?}
     */
    APIDispatch.prototype.dispatch = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.timeoutService.reset();
        if (api != undefined) {
            /** @type {?} */
            var env = this.APP_CONFIG.ENV;
            /** @type {?} */
            var apiInvokeMethod = this.APP_CONFIG[env].API_TYPE[api.getAPIName()];
            /** @type {?} */
            var apiAccess = void 0;
            if (apiInvokeMethod == APIInvokeMethod.MOCK) {
                apiAccess = this.mockAPIAccess;
            }
            else if (apiInvokeMethod == APIInvokeMethod.Restful) {
                apiAccess = this.restfulAPIAccess;
            }
            else if (apiInvokeMethod == APIInvokeMethod.SQLite) {
                apiAccess = this.sqliteAPIAcces;
            }
            else if (apiInvokeMethod == APIInvokeMethod.Device) {
                apiAccess = this.deviceAPIAccess;
            }
            if (apiAccess != undefined) {
                return apiAccess.access(api);
            }
            else {
                this.errorHandler.handleError(new APPError("F00014", "API " + api.getAPIName() + " doesn't assign access method."));
            }
        }
        this.errorHandler.handleError(new APPError("F00015", "API object is null."));
        return of(null);
    };
    APIDispatch.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    APIDispatch.ctorParameters = function () { return [
        { type: MockAPIAccess },
        { type: SQLiteAPIAccess },
        { type: RestfulAPIAccess },
        { type: DeviceAPIAccess },
        { type: TimeoutService },
        { type: ErrorHandler },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ APIDispatch.ngInjectableDef = i0.defineInjectable({ factory: function APIDispatch_Factory() { return new APIDispatch(i0.inject(i1.MockAPIAccess), i0.inject(i2.SQLiteAPIAccess), i0.inject(i3.RestfulAPIAccess), i0.inject(i4.DeviceAPIAccess), i0.inject(i5.TimeoutService), i0.inject(i0.ErrorHandler), i0.inject(i6.ConfigToken)); }, token: APIDispatch, providedIn: "root" });
    return APIDispatch;
}());
export { APIDispatch };
if (false) {
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.mockAPIAccess;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.sqliteAPIAcces;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.restfulAPIAccess;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.deviceAPIAccess;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.timeoutService;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    APIDispatch.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRGlzcGF0Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9BUElEaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztBQUVwRDtJQUtJLHFCQUNZLGFBQTRCLEVBQzVCLGNBQStCLEVBQy9CLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixZQUEwQixFQUNMLFVBQWU7UUFOcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNMLGVBQVUsR0FBVixVQUFVLENBQUs7SUFBSSxDQUFDOzs7OztJQUVyRCw4QkFBUTs7OztJQUFSLFVBQVMsR0FBUztRQUVkLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOztnQkFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOztnQkFDekIsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Z0JBRWpFLFNBQVMsU0FBWTtZQUN6QixJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFO2dCQUN6QyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNsQztpQkFDSSxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFO2dCQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3JDO2lCQUNJLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ25DO2lCQUVJLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUN4QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxtQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7YUFDakg7U0FDSjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDNUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsQ0FBQzs7Z0JBOUNKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFaUSxhQUFhO2dCQUViLGVBQWU7Z0JBRGYsZ0JBQWdCO2dCQUloQixlQUFlO2dCQUNmLGNBQWM7Z0JBRmdCLFlBQVk7Z0RBa0IxQyxNQUFNLFNBQUMsV0FBVzs7O3NCQXpCM0I7Q0E0REMsQUEvQ0QsSUErQ0M7U0E1Q1ksV0FBVzs7Ozs7O0lBR2hCLG9DQUFvQzs7Ozs7SUFDcEMscUNBQXVDOzs7OztJQUN2Qyx1Q0FBMEM7Ozs7O0lBQzFDLHNDQUF3Qzs7Ozs7SUFDeEMscUNBQXNDOzs7OztJQUN0QyxtQ0FBa0M7Ozs7O0lBQ2xDLGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJSW52b2tlTWV0aG9kIH0gZnJvbSAnLi9BUElJbnZva2VNZXRob2QnO1xuaW1wb3J0IHsgSUFQSUFjY2VzcyB9IGZyb20gJy4vQVBJQWNjZXNzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb2NrQVBJQWNjZXNzIH0gZnJvbSAnLi9pbXBsL01vY2tBUElBY2Nlc3MnO1xuaW1wb3J0IHsgUmVzdGZ1bEFQSUFjY2VzcyB9IGZyb20gJy4vaW1wbC9SZXN0ZnVsQVBJQWNjZXNzJztcbmltcG9ydCB7IFNRTGl0ZUFQSUFjY2VzcyB9IGZyb20gJy4vaW1wbC9TUUxpdGVBUElBY2Nlc3MnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlQVBJQWNjZXNzIH0gZnJvbSAnLi9pbXBsL0RldmljZUFQSUFjY2Vzcyc7XG5pbXBvcnQgeyBUaW1lb3V0U2VydmljZSB9IGZyb20gJy4uL2F1dGgvdGltZW91dC90aW1lb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gJy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQVBJRGlzcGF0Y2gge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9ja0FQSUFjY2VzczogTW9ja0FQSUFjY2VzcyxcbiAgICAgICAgcHJpdmF0ZSBzcWxpdGVBUElBY2NlczogU1FMaXRlQVBJQWNjZXNzLFxuICAgICAgICBwcml2YXRlIHJlc3RmdWxBUElBY2Nlc3M6IFJlc3RmdWxBUElBY2Nlc3MsXG4gICAgICAgIHByaXZhdGUgZGV2aWNlQVBJQWNjZXNzOiBEZXZpY2VBUElBY2Nlc3MsXG4gICAgICAgIHByaXZhdGUgdGltZW91dFNlcnZpY2U6IFRpbWVvdXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueSkgeyB9XG5cbiAgICBkaXNwYXRjaChhcGk6IElBUEkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHRoaXMudGltZW91dFNlcnZpY2UucmVzZXQoKTtcbiAgICAgICAgaWYgKGFwaSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgICAgICAgbGV0IGFwaUludm9rZU1ldGhvZCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkFQSV9UWVBFW2FwaS5nZXRBUElOYW1lKCldO1xuXG4gICAgICAgICAgICBsZXQgYXBpQWNjZXNzOiBJQVBJQWNjZXNzO1xuICAgICAgICAgICAgaWYgKGFwaUludm9rZU1ldGhvZCA9PSBBUElJbnZva2VNZXRob2QuTU9DSykge1xuICAgICAgICAgICAgICAgIGFwaUFjY2VzcyA9IHRoaXMubW9ja0FQSUFjY2VzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFwaUludm9rZU1ldGhvZCA9PSBBUElJbnZva2VNZXRob2QuUmVzdGZ1bCkge1xuICAgICAgICAgICAgICAgIGFwaUFjY2VzcyA9IHRoaXMucmVzdGZ1bEFQSUFjY2VzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFwaUludm9rZU1ldGhvZCA9PSBBUElJbnZva2VNZXRob2QuU1FMaXRlKSB7XG4gICAgICAgICAgICAgICAgYXBpQWNjZXNzID0gdGhpcy5zcWxpdGVBUElBY2NlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoYXBpSW52b2tlTWV0aG9kID09IEFQSUludm9rZU1ldGhvZC5EZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBhcGlBY2Nlc3MgPSB0aGlzLmRldmljZUFQSUFjY2VzcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFwaUFjY2VzcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpQWNjZXNzLmFjY2VzcyhhcGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDE0XCIsIGBBUEkgJHthcGkuZ2V0QVBJTmFtZSgpfSBkb2Vzbid0IGFzc2lnbiBhY2Nlc3MgbWV0aG9kLmApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDAxNVwiLCBgQVBJIG9iamVjdCBpcyBudWxsLmApKVxuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG5cbiAgICB9XG59Il19