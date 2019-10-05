/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, Inject } from '@angular/core';
import * as stacktrace from 'stacktrace-js';
import { APIFactory } from '../api/APIFactory';
import { APIDispatch } from '../api/APIDispatch';
import { DeviceService } from '../device/device.service';
import { ConfigToken } from '../injectionToken/injection-token';
import { SettingService } from '../service/setting/setting.service';
var ErrorsHandler = /** @class */ (function () {
    function ErrorsHandler(APIFactory, dispatcher, deviceService, settingService, injector, APP_CONFIG) {
        var _this = this;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.settingService = settingService;
        this.injector = injector;
        this.APP_CONFIG = APP_CONFIG;
        this.isDebug = false;
        this.settingService.getDebugMode().subscribe((/**
         * @param {?} debug
         * @return {?}
         */
        function (debug) {
            _this.isDebug = debug;
        }));
    }
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorsHandler.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var env, APIFactory, dispatcher, stack, logErrorAPI;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        env = this.APP_CONFIG.ENV;
                        APIFactory = this.getAPIFactory();
                        dispatcher = this.getAPIDispatcher();
                        // Log the error anyway
                        console.error(error);
                        if (this.isDebug)
                            alert('error:' + error.message);
                        return [4 /*yield*/, stacktrace.fromError(error, { offline: true })];
                    case 1:
                        stack = _a.sent();
                        stack = stack.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.source; }));
                        logErrorAPI = APIFactory.getAPI("LogError");
                        if (logErrorAPI) {
                            ((/** @type {?} */ (logErrorAPI))).time = new Date();
                            ((/** @type {?} */ (logErrorAPI))).message = error.message;
                            ((/** @type {?} */ (logErrorAPI))).stack = stack;
                            ((/** @type {?} */ (logErrorAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
                            ((/** @type {?} */ (logErrorAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
                            dispatcher.dispatch(logErrorAPI).toPromise().then((/**
                             * @param {?} resp
                             * @return {?}
                             */
                            function (resp) {
                                console.log("log error resp:", resp);
                            }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorsHandler.prototype.getAPIFactory = /**
     * @private
     * @return {?}
     */
    function () {
        return this.APIFactory || this.injector.get(APIFactory);
    };
    /**
     * @private
     * @return {?}
     */
    ErrorsHandler.prototype.getAPIDispatcher = /**
     * @private
     * @return {?}
     */
    function () {
        return this.dispatcher || this.injector.get(APIDispatch);
    };
    ErrorsHandler.decorators = [
        { type: Injectable }
    ];
    ErrorsHandler.ctorParameters = function () { return [
        { type: APIFactory },
        { type: APIDispatch },
        { type: DeviceService },
        { type: SettingService },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    return ErrorsHandler;
}());
export { ErrorsHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.isDebug;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorsHandler.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXJyb3JIYW5kbGVyL0Vycm9yc0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEU7SUFLSSx1QkFDWSxVQUFzQixFQUN0QixVQUF1QixFQUN2QixhQUE0QixFQUM1QixjQUE4QixFQUM5QixRQUFrQixFQUNHLFVBQWU7UUFOaEQsaUJBV0M7UUFWVyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDRyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBUnhDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFVN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQzlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7SUFFSyxtQ0FBVzs7OztJQUFqQixVQUFrQixLQUFZOzs7Ozs7d0JBQ3RCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7d0JBQ3pCLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO3dCQUN4Qyx1QkFBdUI7d0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU87NEJBQ1osS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3hCLHFCQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUE7O3dCQUE1RCxLQUFLLEdBQUcsU0FBb0Q7d0JBQ2hFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxFQUFDLENBQUM7d0JBQzdCLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzt3QkFDL0MsSUFBSSxXQUFXLEVBQUU7NEJBQ2IsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzRCQUM3QyxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7NEJBQ25ELENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzRCQUN6QyxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs0QkFDcEYsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7NEJBQ2pGLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7Ozs0QkFBQyxVQUFDLElBQUk7Z0NBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQ3pDLENBQUMsRUFBQyxDQUFBO3lCQUNMOzs7OztLQUNKOzs7OztJQUVPLHFDQUFhOzs7O0lBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRU8sd0NBQWdCOzs7O0lBQXhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7O2dCQS9DSixVQUFVOzs7Z0JBUEYsVUFBVTtnQkFDVixXQUFXO2dCQUVYLGFBQWE7Z0JBRWIsY0FBYztnQkFQWSxRQUFRO2dEQW9CbEMsTUFBTSxTQUFDLFdBQVc7O0lBcUMzQixvQkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLGFBQWE7Ozs7OztJQUV0QixnQ0FBaUM7Ozs7O0lBRzdCLG1DQUE4Qjs7Ozs7SUFDOUIsbUNBQStCOzs7OztJQUMvQixzQ0FBb0M7Ozs7O0lBQ3BDLHVDQUFzQzs7Ozs7SUFDdEMsaUNBQTBCOzs7OztJQUMxQixtQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHN0YWNrdHJhY2UgZnJvbSAnc3RhY2t0cmFjZS1qcyc7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSAnLi4vYXBpL0FQSUZhY3RvcnknO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICcuLi9hcGkvQVBJRGlzcGF0Y2gnO1xuaW1wb3J0IHsgbG9nRXJyb3JBUEkgfSBmcm9tICcuLi9hcGkvcmVnaXN0ZXIvbG9nRXJyb3JBUEknO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uL2RldmljZS9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdUb2tlbiB9IGZyb20gJy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2V0dGluZy9zZXR0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JzSGFuZGxlciBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG5cbiAgICBwcml2YXRlIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldERlYnVnTW9kZSgpLnN1YnNjcmliZShkZWJ1ZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVidWcgPSBkZWJ1ZztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVFcnJvcihlcnJvcjogRXJyb3IpIHtcbiAgICAgICAgbGV0IGVudiA9IHRoaXMuQVBQX0NPTkZJRy5FTlY7XG4gICAgICAgIGxldCBBUElGYWN0b3J5ID0gdGhpcy5nZXRBUElGYWN0b3J5KCk7XG4gICAgICAgIGxldCBkaXNwYXRjaGVyID0gdGhpcy5nZXRBUElEaXNwYXRjaGVyKCk7XG4gICAgICAgIC8vIExvZyB0aGUgZXJyb3IgYW55d2F5XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAodGhpcy5pc0RlYnVnKVxuICAgICAgICAgICAgYWxlcnQoJ2Vycm9yOicgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgbGV0IHN0YWNrID0gYXdhaXQgc3RhY2t0cmFjZS5mcm9tRXJyb3IoZXJyb3IsIHsgb2ZmbGluZTogdHJ1ZSB9KTtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5tYXAoeCA9PiB4LnNvdXJjZSk7XG4gICAgICAgIGxldCBsb2dFcnJvckFQSSA9IEFQSUZhY3RvcnkuZ2V0QVBJKFwiTG9nRXJyb3JcIik7XG4gICAgICAgIGlmIChsb2dFcnJvckFQSSkge1xuICAgICAgICAgICAgKDxsb2dFcnJvckFQST5sb2dFcnJvckFQSSkudGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAoPGxvZ0Vycm9yQVBJPmxvZ0Vycm9yQVBJKS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICg8bG9nRXJyb3JBUEk+bG9nRXJyb3JBUEkpLnN0YWNrID0gc3RhY2s7XG4gICAgICAgICAgICAoPGxvZ0Vycm9yQVBJPmxvZ0Vycm9yQVBJKS5EZXZpY2VNb2RlbCA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VNYW51ZmFjdHVyZXIoKTtcbiAgICAgICAgICAgICg8bG9nRXJyb3JBUEk+bG9nRXJyb3JBUEkpLkRldmljZVN5c3RlbSA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpO1xuICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChsb2dFcnJvckFQSSkudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nIGVycm9yIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QVBJRmFjdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQVBJRmFjdG9yeSB8fCB0aGlzLmluamVjdG9yLmdldChBUElGYWN0b3J5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFQSURpc3BhdGNoZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXIgfHwgdGhpcy5pbmplY3Rvci5nZXQoQVBJRGlzcGF0Y2gpO1xuICAgIH1cbn0iXX0=