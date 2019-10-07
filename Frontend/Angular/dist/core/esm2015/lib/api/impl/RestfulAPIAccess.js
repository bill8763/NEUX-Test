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
export class RestfulAPIAccess {
    /**
     * @param {?} httpService
     * @param {?} APP_CONFIG
     * @param {?} deviceService
     * @param {?} errorHandler
     * @param {?} defaultHeader
     * @param {?} notificationMgr
     * @param {?} customHeader
     */
    constructor(httpService, APP_CONFIG, deviceService, errorHandler, defaultHeader, notificationMgr, customHeader) {
        this.httpService = httpService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService = deviceService;
        this.errorHandler = errorHandler;
        this.defaultHeader = defaultHeader;
        this.notificationMgr = notificationMgr;
        this.customHeader = customHeader;
    }
    //private _timeout = 15000;
    /**
     * @param {?} api
     * @return {?}
     */
    access(api) {
        /** @type {?} */
        let requestData = api.getRequestData();
        console.log('restful API requestData:', requestData);
        /** @type {?} */
        let options = {
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
        (observer) => {
            this.deviceService.checkSSL(requestData.url).then((/**
             * @return {?}
             */
            () => {
                if (requestData.params != null)
                    options['params'] = requestData.params;
                if (requestData.type == 'GET') {
                    this.httpService.get(requestData.url, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => {
                        this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
                else if (requestData.type == 'POST') {
                    this.httpService.post(requestData.url, requestData.body, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => {
                        this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
                else if (requestData.type == 'PUT') {
                    this.httpService.put(requestData.url, requestData.body, options).pipe(timeout(requestData.timeout)).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        observer.next(resp);
                        observer.complete();
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => {
                        this.handleHTTPError(error);
                        observer.error(error.error);
                        observer.complete();
                    }));
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                console.log("check SSL fingerprint error:", error.message);
                this.errorHandler.handleError(new APPError("C00004", error.message));
                observer.error(error);
                observer.complete();
            }));
        }));
    }
    // TODO: User HTTP interceptor
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleHTTPError(error) {
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
        let errMsg = error.message;
        if (error.error && error.error.code) {
            errMsg = `Error Code:${error.error.code}\n Msg:${error.error.message}`;
        }
        this.notificationMgr.pushNotification(NotificationType.HTTPError, {
            code: error.status,
            message: `url:${error.url}\n${errMsg}`
        });
    }
    /**
     * @private
     * @return {?}
     */
    getHeader() {
        if (this.customHeader) {
            return this.customHeader.getHeader();
        }
        else
            return this.defaultHeader.getHeader();
    }
    /**
     * @private
     * @param {?} api
     * @return {?}
     */
    isCustomHeaderAPI(api) {
        return "getHeader" in api;
    }
}
RestfulAPIAccess.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RestfulAPIAccess.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: DeviceService },
    { type: ErrorHandler },
    { type: defaultHeader },
    { type: NotificationMgr },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [RestHeaderToken,] }] }
];
/** @nocollapse */ RestfulAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function RestfulAPIAccess_Factory() { return new RestfulAPIAccess(i0.inject(i1.HttpClient), i0.inject(i2.ConfigToken), i0.inject(i3.DeviceService), i0.inject(i0.ErrorHandler), i0.inject(i4.defaultHeader), i0.inject(i5.NotificationMgr), i0.inject(i2.RestHeaderToken, 8)); }, token: RestfulAPIAccess, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGZ1bEFQSUFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL2ltcGwvUmVzdGZ1bEFQSUFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7QUFLdEYsTUFBTTs7Ozs7Ozs7OztJQUNGLFlBQ1ksV0FBdUIsRUFDRixVQUFlLEVBQ3BDLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ0ssWUFBd0I7UUFON0QsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDRixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNLLGlC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Q3JCOzs7WUFmUSxVQUFVOzRDQW1CVixNQUFNLFNBQUMsV0FBVztZQWRsQixhQUFhO1lBVmlCLFlBQVk7WUFZMUMsYUFBYTtZQUdiLGVBQWU7NENBY2YsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7Ozs7OztJQU5uQyx1Q0FBK0I7Ozs7O0lBQy9CLHNDQUE0Qzs7Ozs7SUFDNUMseUNBQW9DOzs7OztJQUNwQyx3Q0FBa0M7Ozs7O0lBQ2xDLHlDQUFvQzs7Ozs7SUFDcEMsMkNBQXdDOzs7OztJQUN4Qyx3Q0FBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBUElBY2Nlc3MgfSBmcm9tICcuLi9BUElBY2Nlc3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi4vQVBJUmVzcG9uc2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuLi9BUElSZXF1ZXN0JztcbmltcG9ydCB7IFJlc3RIZWFkZXJUb2tlbiwgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBSZXN0SGVhZGVyIH0gZnJvbSAnLi4vUmVzdEhlYWRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL2RldmljZS9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvcic7XG5pbXBvcnQgeyBkZWZhdWx0SGVhZGVyIH0gZnJvbSAnLi4vRGVmYXVsdEhlYWRlcic7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUN1c3RvbVJlc3RmdWxIZWFkZXJBUEkgfSBmcm9tICcuLi9DdXN0b21SZXN0ZnVsSGVhZGVyQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25NZ3IgfSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb24vTm90aWZpY2F0aW9uTWdyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb24vSU5vdGlmaWNhdGlvblByb3ZpZGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdGZ1bEFQSUFjY2VzcyBpbXBsZW1lbnRzIElBUElBY2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgICAgICBwcml2YXRlIGRlZmF1bHRIZWFkZXI6IGRlZmF1bHRIZWFkZXIsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uTWdyOiBOb3RpZmljYXRpb25NZ3IsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUmVzdEhlYWRlclRva2VuKSBwcml2YXRlIGN1c3RvbUhlYWRlcjogUmVzdEhlYWRlclxuICAgICkgeyB9XG4gICAgLy9wcml2YXRlIF90aW1lb3V0ID0gMTUwMDA7XG4gICAgYWNjZXNzKGFwaTogSVJlc3RmdWxBUEkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGE6IEFQSVJlcXVlc3QgPSBhcGkuZ2V0UmVxdWVzdERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RmdWwgQVBJIHJlcXVlc3REYXRhOicsIHJlcXVlc3REYXRhKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0N1c3RvbUhlYWRlckFQSShhcGkpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBhcGkuZ2V0SGVhZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdERhdGEudXJsID09ICcnKSB7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uQVBJX1VSTFthcGkuZ2V0QVBJTmFtZSgpXTtcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIFNTTFxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRldmljZVNlcnZpY2UuY2hlY2tTU0wocmVxdWVzdERhdGEudXJsKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3REYXRhLnBhcmFtcyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1sncGFyYW1zJ10gPSByZXF1ZXN0RGF0YS5wYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0RGF0YS50eXBlID09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldChyZXF1ZXN0RGF0YS51cmwsIG9wdGlvbnMpLnBpcGUodGltZW91dChyZXF1ZXN0RGF0YS50aW1lb3V0KSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUhUVFBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3REYXRhLnR5cGUgPT0gJ1BPU1QnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChyZXF1ZXN0RGF0YS51cmwsIHJlcXVlc3REYXRhLmJvZHksIG9wdGlvbnMpLnBpcGUodGltZW91dChyZXF1ZXN0RGF0YS50aW1lb3V0KSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUhUVFBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdERhdGEudHlwZSA9PSAnUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS5wdXQocmVxdWVzdERhdGEudXJsLCByZXF1ZXN0RGF0YS5ib2R5LCBvcHRpb25zKS5waXBlKHRpbWVvdXQocmVxdWVzdERhdGEudGltZW91dCkpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIVFRQRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgU1NMIGZpbmdlcnByaW50IGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiQzAwMDA0XCIsIGVycm9yLm1lc3NhZ2UpKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vIFRPRE86IFVzZXIgSFRUUCBpbnRlcmNlcHRvclxuICAgIHByaXZhdGUgaGFuZGxlSFRUUEVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgSFRUUCBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT0gNDAwKVxuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiQzAwMDAxXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMSlcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkMwMDAwM1wiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PSA1MDApXG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJDMDAwMDJcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJDMDAwMDVcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICBsZXQgZXJyTXNnID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmNvZGUpIHtcbiAgICAgICAgICAgIGVyck1zZyA9IGBFcnJvciBDb2RlOiR7ZXJyb3IuZXJyb3IuY29kZX1cXG4gTXNnOiR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWdyLnB1c2hOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZS5IVFRQRXJyb3IsIHtcbiAgICAgICAgICAgIGNvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGB1cmw6JHtlcnJvci51cmx9XFxuJHtlcnJNc2d9YFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21IZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUhlYWRlci5nZXRIZWFkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0SGVhZGVyLmdldEhlYWRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNDdXN0b21IZWFkZXJBUEkoYXBpOiBhbnkpOiBhcGkgaXMgSUN1c3RvbVJlc3RmdWxIZWFkZXJBUEkge1xuICAgICAgICByZXR1cm4gXCJnZXRIZWFkZXJcIiBpbiBhcGk7XG4gICAgfVxufSJdfQ==