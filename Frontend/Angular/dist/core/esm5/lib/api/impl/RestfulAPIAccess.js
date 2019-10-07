/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHeaderToken, ConfigToken } from '../../injectionToken';
import { Observable } from 'rxjs';
import { DeviceService } from '../../device/device.service';
import { APPError } from '../../errorHandler/APPError';
import { defaultHeader } from '../DefaultHeader';
import { timeout } from 'rxjs/operators';
import { NotificationMgr } from '../../notification/NotificationMgr';
import { NotificationType } from '../../notification/INotificationProvider.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../injectionToken/injection-token";
import * as i3 from "../../device/device.service";
import * as i4 from "../DefaultHeader";
import * as i5 from "../../notification/NotificationMgr";
var RestfulAPIAccess = /** @class */ (function () {
    function RestfulAPIAccess(httpService, APP_CONFIG, deviceService, errorHandler, defaultHeader, notificationMgr, customHeader) {
        this.httpService = httpService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService = deviceService;
        this.errorHandler = errorHandler;
        this.defaultHeader = defaultHeader;
        this.notificationMgr = notificationMgr;
        this.customHeader = customHeader;
    }
    //private _timeout = 15000;
    //private _timeout = 15000;
    /**
     * @param {?} api
     * @return {?}
     */
    RestfulAPIAccess.prototype.access = 
    //private _timeout = 15000;
    /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        var _this = this;
        /** @type {?} */
        var requestData = api.getRequestData();
        console.log('restful API requestData:', requestData);
        /** @type {?} */
        var options = {
            headers: this.getHeader()
        };
        if (this.isCustomHeaderAPI(api)) {
            options.headers = api.getHeader();
        }
        if (requestData.url == '') {
            requestData.url = this.APP_CONFIG[this.APP_CONFIG.ENV].API_URL[api.getAPIName()];
        }
        //check SSL
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.deviceService.checkSSL(requestData.url).then((/**
             * @return {?}
             */
            function () {
                if (requestData.params != null)
                    options['params'] = requestData.params;
                if (requestData.type == 'GET') {
                    _this.httpService.get(requestData.url, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
                else if (requestData.type == 'POST') {
                    _this.httpService.post(requestData.url, requestData.body, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
                else if (requestData.type == 'PUT') {
                    _this.httpService.put(requestData.url, requestData.body, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.log("check SSL fingerprint error:", error.message);
                _this.errorHandler.handleError(new APPError("C00004", error.message));
                observer.error(error);
                observer.complete();
            }));
        }));
    };
    // TODO: User HTTP interceptor
    // TODO: User HTTP interceptor
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    RestfulAPIAccess.prototype.handleHTTPError = 
    // TODO: User HTTP interceptor
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        console.log('handle HTTP error:', error);
        if (error.status == 400)
            this.errorHandler.handleError(new APPError("C00001", error.message));
        else if (error.status == 401)
            this.errorHandler.handleError(new APPError("C00003", error.message));
        else if (error.status == 500)
            this.errorHandler.handleError(new APPError("C00002", error.message));
        else
            this.errorHandler.handleError(new APPError("C00005", error.message));
        /** @type {?} */
        var errMsg = error.message;
        if (error.error && error.error.code) {
            errMsg = "Error Code:" + error.error.code + "\n Msg:" + error.error.message;
        }
        this.notificationMgr.pushNotification(NotificationType.HTTPError, {
            code: error.status,
            message: "url:" + error.url + "\n" + errMsg
        });
    };
    /**
     * @private
     * @return {?}
     */
    RestfulAPIAccess.prototype.getHeader = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.customHeader) {
            return this.customHeader.getHeader();
        }
        else
            return this.defaultHeader.getHeader();
    };
    /**
     * @private
     * @param {?} api
     * @return {?}
     */
    RestfulAPIAccess.prototype.isCustomHeaderAPI = /**
     * @private
     * @param {?} api
     * @return {?}
     */
    function (api) {
        return "getHeader" in api;
    };
    RestfulAPIAccess.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    RestfulAPIAccess.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
        { type: DeviceService },
        { type: ErrorHandler },
        { type: defaultHeader },
        { type: NotificationMgr },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [RestHeaderToken,] }] }
    ]; };
    /** @nocollapse */ RestfulAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function RestfulAPIAccess_Factory() { return new RestfulAPIAccess(i0.inject(i1.HttpClient), i0.inject(i2.ConfigToken), i0.inject(i3.DeviceService), i0.inject(i0.ErrorHandler), i0.inject(i4.defaultHeader), i0.inject(i5.NotificationMgr), i0.inject(i2.RestHeaderToken, 8)); }, token: RestfulAPIAccess, providedIn: "root" });
    return RestfulAPIAccess;
}());
export { RestfulAPIAccess };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.defaultHeader;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    RestfulAPIAccess.prototype.customHeader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGZ1bEFQSUFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL2ltcGwvUmVzdGZ1bEFQSUFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7QUFFdEY7SUFJSSwwQkFDWSxXQUF1QixFQUNGLFVBQWUsRUFDcEMsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDSyxZQUF3QjtRQU43RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNGLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ0ssaUJBQVksR0FBWixZQUFZ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TTtpQkFDckI7OztnQkFmUSxVQUFVO2dEQW1CVixNQUFNLFNBQUMsV0FBVztnQkFkbEIsYUFBYTtnQkFWaUIsWUFBWTtnQkFZMUMsYUFBYTtnQkFHYixlQUFlO2dEQWNmLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7OzJCQTdCM0M7Q0ErSEMsQUE3R0QsSUE2R0M7U0ExR1ksZ0JBQWdCOzs7Ozs7SUFFckIsdUNBQStCOzs7OztJQUMvQixzQ0FBNEM7Ozs7O0lBQzVDLHlDQUFvQzs7Ozs7SUFDcEMsd0NBQWtDOzs7OztJQUNsQyx5Q0FBb0M7Ozs7O0lBQ3BDLDJDQUF3Qzs7Ozs7SUFDeEMsd0NBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQVBJQWNjZXNzIH0gZnJvbSAnLi4vQVBJQWNjZXNzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gJy4uL0FQSVJlc3BvbnNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBSZXN0SGVhZGVyVG9rZW4sIENvbmZpZ1Rva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgUmVzdEhlYWRlciB9IGZyb20gJy4uL1Jlc3RIZWFkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvckhhbmRsZXIvQVBQRXJyb3InO1xuaW1wb3J0IHsgZGVmYXVsdEhlYWRlciB9IGZyb20gJy4uL0RlZmF1bHRIZWFkZXInO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDdXN0b21SZXN0ZnVsSGVhZGVyQVBJIH0gZnJvbSAnLi4vQ3VzdG9tUmVzdGZ1bEhlYWRlckFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTWdyIH0gZnJvbSAnLi4vLi4vbm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbk1ncic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vbm90aWZpY2F0aW9uL0lOb3RpZmljYXRpb25Qcm92aWRlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RmdWxBUElBY2Nlc3MgaW1wbGVtZW50cyBJQVBJQWNjZXNzIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnksXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICAgICAgcHJpdmF0ZSBkZWZhdWx0SGVhZGVyOiBkZWZhdWx0SGVhZGVyLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJlc3RIZWFkZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21IZWFkZXI6IFJlc3RIZWFkZXJcbiAgICApIHsgfVxuICAgIC8vcHJpdmF0ZSBfdGltZW91dCA9IDE1MDAwO1xuICAgIGFjY2VzcyhhcGk6IElSZXN0ZnVsQVBJKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhOiBBUElSZXF1ZXN0ID0gYXBpLmdldFJlcXVlc3REYXRhKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN0ZnVsIEFQSSByZXF1ZXN0RGF0YTonLCByZXF1ZXN0RGF0YSk7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDdXN0b21IZWFkZXJBUEkoYXBpKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gYXBpLmdldEhlYWRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3REYXRhLnVybCA9PSAnJykge1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLkFQSV9VUkxbYXBpLmdldEFQSU5hbWUoKV07XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBTU0xcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJ2aWNlLmNoZWNrU1NMKHJlcXVlc3REYXRhLnVybCkudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0RGF0YS5wYXJhbXMgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3BhcmFtcyddID0gcmVxdWVzdERhdGEucGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdERhdGEudHlwZSA9PSAnR0VUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXQocmVxdWVzdERhdGEudXJsLCBvcHRpb25zKS5waXBlKHRpbWVvdXQocmVxdWVzdERhdGEudGltZW91dCkpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIVFRQRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXF1ZXN0RGF0YS50eXBlID09ICdQT1NUJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QocmVxdWVzdERhdGEudXJsLCByZXF1ZXN0RGF0YS5ib2R5LCBvcHRpb25zKS5waXBlKHRpbWVvdXQocmVxdWVzdERhdGEudGltZW91dCkpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIVFRQRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3REYXRhLnR5cGUgPT0gJ1BVVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0KHJlcXVlc3REYXRhLnVybCwgcmVxdWVzdERhdGEuYm9keSwgb3B0aW9ucykucGlwZSh0aW1lb3V0KHJlcXVlc3REYXRhLnRpbWVvdXQpKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSFRUUEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvci5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIFNTTCBmaW5nZXJwcmludCBlcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkMwMDAwNFwiLCBlcnJvci5tZXNzYWdlKSlcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvLyBUT0RPOiBVc2VyIEhUVFAgaW50ZXJjZXB0b3JcbiAgICBwcml2YXRlIGhhbmRsZUhUVFBFcnJvcihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlIEhUVFAgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMClcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkMwMDAwMVwiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDEpXG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJDMDAwMDNcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT0gNTAwKVxuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiQzAwMDAyXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiQzAwMDA1XCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgbGV0IGVyck1zZyA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGlmIChlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5jb2RlKSB7XG4gICAgICAgICAgICBlcnJNc2cgPSBgRXJyb3IgQ29kZToke2Vycm9yLmVycm9yLmNvZGV9XFxuIE1zZzoke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1nci5wdXNoTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvblR5cGUuSFRUUEVycm9yLCB7XG4gICAgICAgICAgICBjb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgICAgICBtZXNzYWdlOiBgdXJsOiR7ZXJyb3IudXJsfVxcbiR7ZXJyTXNnfWBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21IZWFkZXIuZ2V0SGVhZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEhlYWRlci5nZXRIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ3VzdG9tSGVhZGVyQVBJKGFwaTogYW55KTogYXBpIGlzIElDdXN0b21SZXN0ZnVsSGVhZGVyQVBJIHtcbiAgICAgICAgcmV0dXJuIFwiZ2V0SGVhZGVyXCIgaW4gYXBpO1xuICAgIH1cbn0iXX0=