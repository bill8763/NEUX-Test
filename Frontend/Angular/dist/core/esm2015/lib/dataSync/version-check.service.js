/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { ConfigToken } from "../injectionToken";
import { HttpClient } from "@angular/common/http";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
import { DeviceService } from "../device";
import { Observable } from "rxjs";
import { versionInfo } from "../bean";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../api/APIFactory";
import * as i3 from "../api/APIDispatch";
import * as i4 from "../device/device.service";
import * as i5 from "../injectionToken/injection-token";
export class VersionCheckService {
    /**
     * @param {?} httpService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} APP_CONFIG
     */
    constructor(httpService, APIFactory, dispatcher, deviceService, APP_CONFIG) {
        this.httpService = httpService;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService.getAppVersion().then((/**
         * @param {?} version
         * @return {?}
         */
        (version) => {
            this.appVersion = version;
        }));
        this.platform = this.deviceService.getDevicePlatform();
    }
    /**
     * @return {?}
     */
    checkVersion() {
        // get app && schema version
        /** @type {?} */
        let checkVersionAPI = this.APIFactory.getAPI('CheckVersion');
        ((/** @type {?} */ (checkVersionAPI))).version = this.appVersion;
        ((/** @type {?} */ (checkVersionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(checkVersionAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("check version resp:", resp);
                if (resp.version != this.appVersion) {
                    observer.next({ isSuccess: true, newVersion: true, appVersion: new versionInfo(resp.appPath, resp.version) });
                    observer.complete();
                }
                else {
                    observer.next({ isSuccess: true, newVersion: false, appVersion: new versionInfo(resp.appPath, resp.version) });
                    observer.complete();
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                console.warn("check Version request error:", error.message);
                observer.next({ isSuccess: false, errorMsg: error.message });
                observer.complete();
            }));
        }));
    }
}
VersionCheckService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VersionCheckService.ctorParameters = () => [
    { type: HttpClient },
    { type: APIFactory },
    { type: APIDispatch },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ VersionCheckService.ngInjectableDef = i0.defineInjectable({ factory: function VersionCheckService_Factory() { return new VersionCheckService(i0.inject(i1.HttpClient), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i4.DeviceService), i0.inject(i5.ConfigToken)); }, token: VersionCheckService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.appVersion;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    VersionCheckService.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi1jaGVjay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy92ZXJzaW9uLWNoZWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQUt0QyxNQUFNOzs7Ozs7OztJQUVGLFlBQ1ksV0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsYUFBNEIsRUFDUCxVQUFlO1FBSnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNQLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7SUFJTSxZQUFZOzs7WUFFWCxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVELENBQUMsbUJBQWlCLGVBQWUsRUFBQSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0QsQ0FBQyxtQkFBaUIsZUFBZSxFQUFBLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pGLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5RyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0csUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjtZQUNMLENBQUM7Ozs7WUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQzs7O1lBM0NKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBVlEsVUFBVTtZQUNWLFVBQVU7WUFDVixXQUFXO1lBRVgsYUFBYTs0Q0FjYixNQUFNLFNBQUMsV0FBVzs7Ozs7Ozs7SUFPdkIseUNBQW1COzs7OztJQUNuQix1Q0FBaUI7Ozs7O0lBWmIsMENBQStCOzs7OztJQUMvQix5Q0FBOEI7Ozs7O0lBQzlCLHlDQUErQjs7Ozs7SUFDL0IsNENBQW9DOzs7OztJQUNwQyx5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tIFwiLi4vaW5qZWN0aW9uVG9rZW5cIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSBcIi4uL2FwaS9BUElEaXNwYXRjaFwiO1xuaW1wb3J0IHsgQ2hlY2tWZXJzaW9uQVBJIH0gZnJvbSBcIi4uL2FwaS9yZWdpc3Rlci9DaGVja1ZlcnNpb25BUElcIjtcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vZGV2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHZlcnNpb25JbmZvIH0gZnJvbSBcIi4uL2JlYW5cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWZXJzaW9uQ2hlY2tTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5kZXZpY2VTZXJ2aWNlLmdldEFwcFZlcnNpb24oKS50aGVuKCh2ZXJzaW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXRmb3JtID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVBsYXRmb3JtKCk7XG4gICAgfVxuICAgIHByaXZhdGUgYXBwVmVyc2lvbjtcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xuXG4gICAgcHVibGljIGNoZWNrVmVyc2lvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvLyBnZXQgYXBwICYmIHNjaGVtYSB2ZXJzaW9uXG4gICAgICAgIGxldCBjaGVja1ZlcnNpb25BUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdDaGVja1ZlcnNpb24nKTtcbiAgICAgICAgKDxDaGVja1ZlcnNpb25BUEk+Y2hlY2tWZXJzaW9uQVBJKS52ZXJzaW9uID0gdGhpcy5hcHBWZXJzaW9uO1xuICAgICAgICAoPENoZWNrVmVyc2lvbkFQST5jaGVja1ZlcnNpb25BUEkpLkRldmljZVN5c3RlbSA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY2hlY2tWZXJzaW9uQVBJKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIHZlcnNpb24gcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AudmVyc2lvbiAhPSB0aGlzLmFwcFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IGlzU3VjY2VzczogdHJ1ZSwgbmV3VmVyc2lvbjogdHJ1ZSwgYXBwVmVyc2lvbjogbmV3IHZlcnNpb25JbmZvKHJlc3AuYXBwUGF0aCwgcmVzcC52ZXJzaW9uKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBpc1N1Y2Nlc3M6IHRydWUsIG5ld1ZlcnNpb246IGZhbHNlLCBhcHBWZXJzaW9uOiBuZXcgdmVyc2lvbkluZm8ocmVzcC5hcHBQYXRoLCByZXNwLnZlcnNpb24pIH0pO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNoZWNrIFZlcnNpb24gcmVxdWVzdCBlcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IGlzU3VjY2VzczogZmFsc2UsIGVycm9yTXNnOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG59Il19