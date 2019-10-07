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
export class ErrorsHandler {
    /**
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} settingService
     * @param {?} injector
     * @param {?} APP_CONFIG
     */
    constructor(APIFactory, dispatcher, deviceService, settingService, injector, APP_CONFIG) {
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
        debug => {
            this.isDebug = debug;
        }));
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            /** @type {?} */
            let APIFactory = this.getAPIFactory();
            /** @type {?} */
            let dispatcher = this.getAPIDispatcher();
            // Log the error anyway
            console.error(error);
            if (this.isDebug)
                alert('error:' + error.message);
            /** @type {?} */
            let stack = yield stacktrace.fromError(error, { offline: true });
            stack = stack.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.source));
            /** @type {?} */
            let logErrorAPI = APIFactory.getAPI("LogError");
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
                (resp) => {
                    console.log("log error resp:", resp);
                }));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    getAPIFactory() {
        return this.APIFactory || this.injector.get(APIFactory);
    }
    /**
     * @private
     * @return {?}
     */
    getAPIDispatcher() {
        return this.dispatcher || this.injector.get(APIDispatch);
    }
}
ErrorsHandler.decorators = [
    { type: Injectable }
];
ErrorsHandler.ctorParameters = () => [
    { type: APIFactory },
    { type: APIDispatch },
    { type: DeviceService },
    { type: SettingService },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXJyb3JIYW5kbGVyL0Vycm9yc0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTTs7Ozs7Ozs7O0lBSUYsWUFDWSxVQUFzQixFQUN0QixVQUF1QixFQUN2QixhQUE0QixFQUM1QixjQUE4QixFQUM5QixRQUFrQixFQUNHLFVBQWU7UUFMcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0csZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVJ4QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBVTdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsS0FBWTs7O2dCQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOztnQkFDekIsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7O2dCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hDLHVCQUF1QjtZQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQ1osS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUNoQyxLQUFLLEdBQUcsTUFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs7Z0JBQzdCLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMvQyxJQUFJLFdBQVcsRUFBRTtnQkFDYixDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzdDLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbkQsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3pDLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNwRixDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDakYsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRU8sYUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFTyxnQkFBZ0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQS9DSixVQUFVOzs7WUFQRixVQUFVO1lBQ1YsV0FBVztZQUVYLGFBQWE7WUFFYixjQUFjO1lBUFksUUFBUTs0Q0FvQmxDLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBUnZCLGdDQUFpQzs7Ozs7SUFHN0IsbUNBQThCOzs7OztJQUM5QixtQ0FBK0I7Ozs7O0lBQy9CLHNDQUFvQzs7Ozs7SUFDcEMsdUNBQXNDOzs7OztJQUN0QyxpQ0FBMEI7Ozs7O0lBQzFCLG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc3RhY2t0cmFjZSBmcm9tICdzdGFja3RyYWNlLWpzJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICcuLi9hcGkvQVBJRmFjdG9yeSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uL2FwaS9BUElEaXNwYXRjaCc7XG5pbXBvcnQgeyBsb2dFcnJvckFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9sb2dFcnJvckFQSSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ1Rva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9zZXR0aW5nL3NldHRpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFcnJvcnNIYW5kbGVyIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcblxuICAgIHByaXZhdGUgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0RGVidWdNb2RlKCkuc3Vic2NyaWJlKGRlYnVnID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNEZWJ1ZyA9IGRlYnVnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUVycm9yKGVycm9yOiBFcnJvcikge1xuICAgICAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICAgICAgbGV0IEFQSUZhY3RvcnkgPSB0aGlzLmdldEFQSUZhY3RvcnkoKTtcbiAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoZXIoKTtcbiAgICAgICAgLy8gTG9nIHRoZSBlcnJvciBhbnl3YXlcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmICh0aGlzLmlzRGVidWcpXG4gICAgICAgICAgICBhbGVydCgnZXJyb3I6JyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBsZXQgc3RhY2sgPSBhd2FpdCBzdGFja3RyYWNlLmZyb21FcnJvcihlcnJvciwgeyBvZmZsaW5lOiB0cnVlIH0pO1xuICAgICAgICBzdGFjayA9IHN0YWNrLm1hcCh4ID0+IHguc291cmNlKTtcbiAgICAgICAgbGV0IGxvZ0Vycm9yQVBJID0gQVBJRmFjdG9yeS5nZXRBUEkoXCJMb2dFcnJvclwiKTtcbiAgICAgICAgaWYgKGxvZ0Vycm9yQVBJKSB7XG4gICAgICAgICAgICAoPGxvZ0Vycm9yQVBJPmxvZ0Vycm9yQVBJKS50aW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICg8bG9nRXJyb3JBUEk+bG9nRXJyb3JBUEkpLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgKDxsb2dFcnJvckFQST5sb2dFcnJvckFQSSkuc3RhY2sgPSBzdGFjaztcbiAgICAgICAgICAgICg8bG9nRXJyb3JBUEk+bG9nRXJyb3JBUEkpLkRldmljZU1vZGVsID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZU1hbnVmYWN0dXJlcigpO1xuICAgICAgICAgICAgKDxsb2dFcnJvckFQST5sb2dFcnJvckFQSSkuRGV2aWNlU3lzdGVtID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVBsYXRmb3JtKCk7XG4gICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGxvZ0Vycm9yQVBJKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2cgZXJyb3IgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBUElGYWN0b3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5BUElGYWN0b3J5IHx8IHRoaXMuaW5qZWN0b3IuZ2V0KEFQSUZhY3RvcnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QVBJRGlzcGF0Y2hlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hlciB8fCB0aGlzLmluamVjdG9yLmdldChBUElEaXNwYXRjaCk7XG4gICAgfVxufSJdfQ==