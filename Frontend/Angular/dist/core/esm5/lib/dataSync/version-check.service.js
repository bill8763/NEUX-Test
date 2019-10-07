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
var VersionCheckService = /** @class */ (function () {
    function VersionCheckService(httpService, APIFactory, dispatcher, deviceService, APP_CONFIG) {
        var _this = this;
        this.httpService = httpService;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService.getAppVersion().then((/**
         * @param {?} version
         * @return {?}
         */
        function (version) {
            _this.appVersion = version;
        }));
        this.platform = this.deviceService.getDevicePlatform();
    }
    /**
     * @return {?}
     */
    VersionCheckService.prototype.checkVersion = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // get app && schema version
        /** @type {?} */
        var checkVersionAPI = this.APIFactory.getAPI('CheckVersion');
        ((/** @type {?} */ (checkVersionAPI))).version = this.appVersion;
        ((/** @type {?} */ (checkVersionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(checkVersionAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.log("check version resp:", resp);
                if (resp.version != _this.appVersion) {
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
            function (error) {
                console.warn("check Version request error:", error.message);
                observer.next({ isSuccess: false, errorMsg: error.message });
                observer.complete();
            }));
        }));
    };
    VersionCheckService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    VersionCheckService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: APIFactory },
        { type: APIDispatch },
        { type: DeviceService },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ VersionCheckService.ngInjectableDef = i0.defineInjectable({ factory: function VersionCheckService_Factory() { return new VersionCheckService(i0.inject(i1.HttpClient), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i4.DeviceService), i0.inject(i5.ConfigToken)); }, token: VersionCheckService, providedIn: "root" });
    return VersionCheckService;
}());
export { VersionCheckService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi1jaGVjay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy92ZXJzaW9uLWNoZWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQUV0QztJQUtJLDZCQUNZLFdBQXVCLEVBQ3ZCLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLGFBQTRCLEVBQ1AsVUFBZTtRQUxoRCxpQkFXQztRQVZXLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNQLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxPQUFPO1lBQzVDLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0QsQ0FBQzs7OztJQUlNLDBDQUFZOzs7SUFBbkI7UUFBQSxpQkF1QkM7OztZQXJCTyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVELENBQUMsbUJBQWlCLGVBQWUsRUFBQSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0QsQ0FBQyxtQkFBaUIsZUFBZSxFQUFBLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pGLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDOUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjtxQkFDSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9HLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkI7WUFDTCxDQUFDOzs7O1lBQUUsVUFBQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQzs7Z0JBM0NKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFWUSxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsV0FBVztnQkFFWCxhQUFhO2dEQWNiLE1BQU0sU0FBQyxXQUFXOzs7OEJBcEIzQjtDQXdEQyxBQTlDRCxJQThDQztTQTNDWSxtQkFBbUI7Ozs7OztJQWM1Qix5Q0FBbUI7Ozs7O0lBQ25CLHVDQUFpQjs7Ozs7SUFaYiwwQ0FBK0I7Ozs7O0lBQy9CLHlDQUE4Qjs7Ozs7SUFDOUIseUNBQStCOzs7OztJQUMvQiw0Q0FBb0M7Ozs7O0lBQ3BDLHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb25maWdUb2tlbiB9IGZyb20gXCIuLi9pbmplY3Rpb25Ub2tlblwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBDaGVja1ZlcnNpb25BUEkgfSBmcm9tIFwiLi4vYXBpL3JlZ2lzdGVyL0NoZWNrVmVyc2lvbkFQSVwiO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gXCIuLi9kZXZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdmVyc2lvbkluZm8gfSBmcm9tIFwiLi4vYmVhblwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZlcnNpb25DaGVja1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmRldmljZVNlcnZpY2UuZ2V0QXBwVmVyc2lvbigpLnRoZW4oKHZlcnNpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwVmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlUGxhdGZvcm0oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBWZXJzaW9uO1xuICAgIHByaXZhdGUgcGxhdGZvcm07XG5cbiAgICBwdWJsaWMgY2hlY2tWZXJzaW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIGdldCBhcHAgJiYgc2NoZW1hIHZlcnNpb25cbiAgICAgICAgbGV0IGNoZWNrVmVyc2lvbkFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ0NoZWNrVmVyc2lvbicpO1xuICAgICAgICAoPENoZWNrVmVyc2lvbkFQST5jaGVja1ZlcnNpb25BUEkpLnZlcnNpb24gPSB0aGlzLmFwcFZlcnNpb247XG4gICAgICAgICg8Q2hlY2tWZXJzaW9uQVBJPmNoZWNrVmVyc2lvbkFQSSkuRGV2aWNlU3lzdGVtID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVBsYXRmb3JtKCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjaGVja1ZlcnNpb25BUEkpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgdmVyc2lvbiByZXNwOlwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC52ZXJzaW9uICE9IHRoaXMuYXBwVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgaXNTdWNjZXNzOiB0cnVlLCBuZXdWZXJzaW9uOiB0cnVlLCBhcHBWZXJzaW9uOiBuZXcgdmVyc2lvbkluZm8ocmVzcC5hcHBQYXRoLCByZXNwLnZlcnNpb24pIH0pO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IGlzU3VjY2VzczogdHJ1ZSwgbmV3VmVyc2lvbjogZmFsc2UsIGFwcFZlcnNpb246IG5ldyB2ZXJzaW9uSW5mbyhyZXNwLmFwcFBhdGgsIHJlc3AudmVyc2lvbikgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2hlY2sgVmVyc2lvbiByZXF1ZXN0IGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgaXNTdWNjZXNzOiBmYWxzZSwgZXJyb3JNc2c6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbn0iXX0=