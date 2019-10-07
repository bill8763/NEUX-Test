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
export class APIDispatch {
    /**
     * @param {?} mockAPIAccess
     * @param {?} sqliteAPIAcces
     * @param {?} restfulAPIAccess
     * @param {?} deviceAPIAccess
     * @param {?} timeoutService
     * @param {?} errorHandler
     * @param {?} APP_CONFIG
     */
    constructor(mockAPIAccess, sqliteAPIAcces, restfulAPIAccess, deviceAPIAccess, timeoutService, errorHandler, APP_CONFIG) {
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
    dispatch(api) {
        this.timeoutService.reset();
        if (api != undefined) {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            /** @type {?} */
            let apiInvokeMethod = this.APP_CONFIG[env].API_TYPE[api.getAPIName()];
            /** @type {?} */
            let apiAccess;
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
                this.errorHandler.handleError(new APPError("F00014", `API ${api.getAPIName()} doesn't assign access method.`));
            }
        }
        this.errorHandler.handleError(new APPError("F00015", `API object is null.`));
        return of(null);
    }
}
APIDispatch.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIDispatch.ctorParameters = () => [
    { type: MockAPIAccess },
    { type: SQLiteAPIAccess },
    { type: RestfulAPIAccess },
    { type: DeviceAPIAccess },
    { type: TimeoutService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ APIDispatch.ngInjectableDef = i0.defineInjectable({ factory: function APIDispatch_Factory() { return new APIDispatch(i0.inject(i1.MockAPIAccess), i0.inject(i2.SQLiteAPIAccess), i0.inject(i3.RestfulAPIAccess), i0.inject(i4.DeviceAPIAccess), i0.inject(i5.TimeoutService), i0.inject(i0.ErrorHandler), i0.inject(i6.ConfigToken)); }, token: APIDispatch, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRGlzcGF0Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9BUElEaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztBQUtwRCxNQUFNOzs7Ozs7Ozs7O0lBRUYsWUFDWSxhQUE0QixFQUM1QixjQUErQixFQUMvQixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsWUFBMEIsRUFDTCxVQUFlO1FBTnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDTCxlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQUksQ0FBQzs7Ozs7SUFFckQsUUFBUSxDQUFDLEdBQVM7UUFFZCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7Z0JBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7Z0JBQ3pCLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7O2dCQUVqRSxTQUFxQjtZQUN6QixJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFO2dCQUN6QyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNsQztpQkFDSSxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFO2dCQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3JDO2lCQUNJLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ25DO2lCQUVJLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUN4QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7YUFDakg7U0FDSjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDNUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsQ0FBQzs7O1lBOUNKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBWlEsYUFBYTtZQUViLGVBQWU7WUFEZixnQkFBZ0I7WUFJaEIsZUFBZTtZQUNmLGNBQWM7WUFGZ0IsWUFBWTs0Q0FrQjFDLE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztJQU5uQixvQ0FBb0M7Ozs7O0lBQ3BDLHFDQUF1Qzs7Ozs7SUFDdkMsdUNBQTBDOzs7OztJQUMxQyxzQ0FBd0M7Ozs7O0lBQ3hDLHFDQUFzQzs7Ozs7SUFDdEMsbUNBQWtDOzs7OztJQUNsQyxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSUludm9rZU1ldGhvZCB9IGZyb20gJy4vQVBJSW52b2tlTWV0aG9kJztcbmltcG9ydCB7IElBUElBY2Nlc3MgfSBmcm9tICcuL0FQSUFjY2Vzcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9ja0FQSUFjY2VzcyB9IGZyb20gJy4vaW1wbC9Nb2NrQVBJQWNjZXNzJztcbmltcG9ydCB7IFJlc3RmdWxBUElBY2Nlc3MgfSBmcm9tICcuL2ltcGwvUmVzdGZ1bEFQSUFjY2Vzcyc7XG5pbXBvcnQgeyBTUUxpdGVBUElBY2Nlc3MgfSBmcm9tICcuL2ltcGwvU1FMaXRlQVBJQWNjZXNzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERldmljZUFQSUFjY2VzcyB9IGZyb20gJy4vaW1wbC9EZXZpY2VBUElBY2Nlc3MnO1xuaW1wb3J0IHsgVGltZW91dFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL3RpbWVvdXQvdGltZW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ1Rva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tICcuLi9lcnJvckhhbmRsZXIvQVBQRXJyb3InO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFQSURpc3BhdGNoIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vY2tBUElBY2Nlc3M6IE1vY2tBUElBY2Nlc3MsXG4gICAgICAgIHByaXZhdGUgc3FsaXRlQVBJQWNjZXM6IFNRTGl0ZUFQSUFjY2VzcyxcbiAgICAgICAgcHJpdmF0ZSByZXN0ZnVsQVBJQWNjZXNzOiBSZXN0ZnVsQVBJQWNjZXNzLFxuICAgICAgICBwcml2YXRlIGRldmljZUFQSUFjY2VzczogRGV2aWNlQVBJQWNjZXNzLFxuICAgICAgICBwcml2YXRlIHRpbWVvdXRTZXJ2aWNlOiBUaW1lb3V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICAgICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHsgfVxuXG4gICAgZGlzcGF0Y2goYXBpOiBJQVBJKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICB0aGlzLnRpbWVvdXRTZXJ2aWNlLnJlc2V0KCk7XG4gICAgICAgIGlmIChhcGkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICAgICAgICAgIGxldCBhcGlJbnZva2VNZXRob2QgPSB0aGlzLkFQUF9DT05GSUdbZW52XS5BUElfVFlQRVthcGkuZ2V0QVBJTmFtZSgpXTtcblxuICAgICAgICAgICAgbGV0IGFwaUFjY2VzczogSUFQSUFjY2VzcztcbiAgICAgICAgICAgIGlmIChhcGlJbnZva2VNZXRob2QgPT0gQVBJSW52b2tlTWV0aG9kLk1PQ0spIHtcbiAgICAgICAgICAgICAgICBhcGlBY2Nlc3MgPSB0aGlzLm1vY2tBUElBY2Nlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcGlJbnZva2VNZXRob2QgPT0gQVBJSW52b2tlTWV0aG9kLlJlc3RmdWwpIHtcbiAgICAgICAgICAgICAgICBhcGlBY2Nlc3MgPSB0aGlzLnJlc3RmdWxBUElBY2Nlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcGlJbnZva2VNZXRob2QgPT0gQVBJSW52b2tlTWV0aG9kLlNRTGl0ZSkge1xuICAgICAgICAgICAgICAgIGFwaUFjY2VzcyA9IHRoaXMuc3FsaXRlQVBJQWNjZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKGFwaUludm9rZU1ldGhvZCA9PSBBUElJbnZva2VNZXRob2QuRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgYXBpQWNjZXNzID0gdGhpcy5kZXZpY2VBUElBY2Nlc3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhcGlBY2Nlc3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaUFjY2Vzcy5hY2Nlc3MoYXBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDAxNFwiLCBgQVBJICR7YXBpLmdldEFQSU5hbWUoKX0gZG9lc24ndCBhc3NpZ24gYWNjZXNzIG1ldGhvZC5gKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTVcIiwgYEFQSSBvYmplY3QgaXMgbnVsbC5gKSlcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuXG4gICAgfVxufSJdfQ==