/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, Injector } from "@angular/core";
import { LoginInfo } from "./LoginInfo";
import { BehaviorSubject, Subject, from } from "rxjs";
import { LoginResponse, LOGIN_TYPE } from "./LoginResponse";
import { DeviceService } from "../../device/device.service";
import { APIFactory } from "../../api/APIFactory";
import { APIDispatch } from "../../api/APIDispatch";
import * as _jwt_decode from "jwt-decode";
import { PushIDMgrToken, LoginMgrToken, ConfigToken } from "../../injectionToken/injection-token";
import { LoginTokenStore } from "./LoginTokenStore";
import { AppRouter } from "../../route/AppRouter";
import { APPMODE } from "../../bean/CommonEnum";
import * as i0 from "@angular/core";
import * as i1 from "../../device/device.service";
import * as i2 from "../../api/APIFactory";
import * as i3 from "../../api/APIDispatch";
import * as i4 from "./LoginTokenStore";
import * as i5 from "../../route/AppRouter";
import * as i6 from "../../injectionToken/injection-token";
/** @type {?} */
var jwt_decode = _jwt_decode;
var DefaultLoginMgr = /** @class */ (function () {
    function DefaultLoginMgr(deviceService, APIFactory, dispatcher, injector, tokenStore, router, APP_CONFIG, customLoginMgr, pushIDMgr) {
        var _this = this;
        this.deviceService = deviceService;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.injector = injector;
        this.tokenStore = tokenStore;
        this.router = router;
        this.APP_CONFIG = APP_CONFIG;
        this.customLoginMgr = customLoginMgr;
        this.pushIDMgr = pushIDMgr;
        this.appMode = null;
        this.token = '';
        this.loginInfo = null;
        this.infoSubject = new BehaviorSubject(this.loginInfo);
        this.logoutSubject = new Subject();
        if (this.customLoginMgr) {
            this.customLoginMgr.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                _this.token = token;
            }));
        }
        else {
            this.tokenStore.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                _this.token = token;
            }));
        }
        this.appMode = this.APP_CONFIG.APP_MODE;
        this.checkLogin();
    }
    /**
     * @return {?}
     */
    DefaultLoginMgr.prototype.getLoginInfo = /**
     * @return {?}
     */
    function () {
        console.log("loginMgr getLoginInfo");
        if (this.customLoginMgr)
            return this.customLoginMgr.getLoginInfo();
        else
            return this.infoSubject.asObservable();
    };
    /**
     * @return {?}
     */
    DefaultLoginMgr.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.customLoginMgr)
            return this.customLoginMgr.getToken();
        else
            return this.tokenStore.getToken();
    };
    /**
     * @return {?}
     */
    DefaultLoginMgr.prototype.checkLogin = /**
     * @return {?}
     */
    function () {
        if (this.customLoginMgr)
            return this.customLoginMgr.checkLogin();
        else {
            if (this.appMode === APPMODE.Integration) {
                /** @type {?} */
                var storage_token = this.deviceService.getLocalStorage("SNDToken");
                if (storage_token) {
                    this.token = storage_token;
                    this.updateToken(storage_token);
                }
            }
            return !!this.token;
        }
    };
    /**
     * @return {?}
     */
    DefaultLoginMgr.prototype.subscribeLogout = /**
     * @return {?}
     */
    function () {
        return this.logoutSubject.asObservable();
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    DefaultLoginMgr.prototype.login = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (this.customLoginMgr)
            return this.customLoginMgr.login(payload);
        else {
            /** @type {?} */
            var loginBody = {
                PushId: this.pushIDMgr.getPushID(),
                Username: payload.username,
                Password: payload.password,
                DeviceSystem: this.deviceService.getDevicePlatform(),
                DeviceId: this.deviceService.getDeviceUUID(),
                DeviceModel: this.deviceService.getDeviceManufacturer(),
                DeviceType: this.deviceService.isPad() ? "Pad" : "Phone"
            };
            /** @type {?} */
            var factory = this.getAPIFactory();
            /** @type {?} */
            var dispatcher = this.getAPIDispatch();
            /** @type {?} */
            var loginAPI = factory.getAPI("onlineLogin");
            ((/** @type {?} */ (loginAPI))).body = loginBody;
            return from(this._login(loginAPI));
        }
    };
    /**
     * @private
     * @param {?} loginAPI
     * @return {?}
     */
    DefaultLoginMgr.prototype._login = /**
     * @private
     * @param {?} loginAPI
     * @return {?}
     */
    function (loginAPI) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dispatcher, resp, decoded, error_1, msg;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        dispatcher = this.getAPIDispatch();
                        return [4 /*yield*/, dispatcher.dispatch(loginAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        if (resp.success) {
                            decoded = jwt_decode(resp['token']);
                            console.log("decoded:", decoded);
                            this.updateToken(resp['token']);
                            return [2 /*return*/, new LoginResponse({ isSuccess: true, type: LOGIN_TYPE.ONLINE, errorMsg: '', token: resp['token'] })];
                        }
                        else {
                            return [2 /*return*/, new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.ONLINE, errorMsg: 'some error happen on login', token: '' })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("login error handler:", error_1);
                        msg = error_1.message ? error_1.message : 'System_Maintenance';
                        return [2 /*return*/, new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.ONLINE, errorMsg: msg, token: '' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DefaultLoginMgr.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.logoutSubject.next();
        if (this.customLoginMgr)
            return this.customLoginMgr.logout();
        else {
            if (this.appMode === APPMODE.Integration) {
                window.location.assign(this.APP_CONFIG.INTEGRATION_BACK_URL);
            }
            else {
                this.updateToken(null);
                this.router.navigate("Login");
            }
        }
    };
    /**
     * @param {?} token
     * @return {?}
     */
    DefaultLoginMgr.prototype.updateToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        console.log("updateToken:", token);
        this.token = token;
        this.tokenStore.setToken(token);
        if (token) {
            /** @type {?} */
            var info = new LoginInfo(jwt_decode(token));
            this.loginInfo = info;
        }
        else {
            this.loginInfo = null;
        }
        this.infoSubject.next(this.loginInfo);
    };
    /**
     * @private
     * @return {?}
     */
    DefaultLoginMgr.prototype.getAPIFactory = /**
     * @private
     * @return {?}
     */
    function () {
        return this.APIFactory ? this.APIFactory : this.injector.get(APIFactory);
    };
    /**
     * @private
     * @return {?}
     */
    DefaultLoginMgr.prototype.getAPIDispatch = /**
     * @private
     * @return {?}
     */
    function () {
        return this.dispatcher ? this.dispatcher : this.injector.get(APIDispatch);
    };
    DefaultLoginMgr.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DefaultLoginMgr.ctorParameters = function () { return [
        { type: DeviceService },
        { type: APIFactory },
        { type: APIDispatch },
        { type: Injector },
        { type: LoginTokenStore },
        { type: AppRouter },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LoginMgrToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PushIDMgrToken,] }] }
    ]; };
    /** @nocollapse */ DefaultLoginMgr.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoginMgr_Factory() { return new DefaultLoginMgr(i0.inject(i1.DeviceService), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.INJECTOR), i0.inject(i4.LoginTokenStore), i0.inject(i5.AppRouter), i0.inject(i6.ConfigToken), i0.inject(i6.LoginMgrToken, 8), i0.inject(i6.PushIDMgrToken, 8)); }, token: DefaultLoginMgr, providedIn: "root" });
    return DefaultLoginMgr;
}());
export { DefaultLoginMgr };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.appMode;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.token;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.loginInfo;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.infoSubject;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.logoutSubject;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.tokenStore;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.customLoginMgr;
    /**
     * @type {?}
     * @private
     */
    DefaultLoginMgr.prototype.pushIDMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvZ2luTWdyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2xvZ2luL0RlZmF1bHRMb2dpbk1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEtBQUssV0FBVyxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0lBRzFDLFVBQVUsR0FBRyxXQUFXO0FBRTlCO0lBV0kseUJBQ1ksYUFBNEIsRUFDNUIsVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsUUFBa0IsRUFDbEIsVUFBMkIsRUFDM0IsTUFBaUIsRUFDSSxVQUFlLEVBQ0QsY0FBeUIsRUFDeEIsU0FBb0I7UUFUcEUsaUJBdUJDO1FBdEJX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QU0sU0FBQyxXQUFXO2dEQUNsQixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Z0RBQ2hDLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7OzBCQXZDMUM7Q0FzS0MsQUFuSkQsSUFtSkM7U0FoSlksZUFBZTs7Ozs7O0lBRXhCLGtDQUFnQzs7Ozs7SUFDaEMsZ0NBQTJCOzs7OztJQUMzQixvQ0FBb0M7Ozs7O0lBQ3BDLHNDQUFpRzs7Ozs7SUFDakcsd0NBQW9EOzs7OztJQUdoRCx3Q0FBb0M7Ozs7O0lBQ3BDLHFDQUE4Qjs7Ozs7SUFDOUIscUNBQStCOzs7OztJQUMvQixtQ0FBMEI7Ozs7O0lBQzFCLHFDQUFtQzs7Ozs7SUFDbkMsaUNBQXlCOzs7OztJQUN6QixxQ0FBNEM7Ozs7O0lBQzVDLHlDQUFvRTs7Ozs7SUFDcEUsb0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUxvZ2luTWdyIH0gZnJvbSBcIi4vTG9naW5NZ3IuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBMb2dpbkluZm8gfSBmcm9tIFwiLi9Mb2dpbkluZm9cIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlLCBMT0dJTl9UWVBFIH0gZnJvbSBcIi4vTG9naW5SZXNwb25zZVwiO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2FwaS9BUElEaXNwYXRjaFwiO1xuaW1wb3J0IHsgTG9naW5BUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL0xvZ2luQVBJXCI7XG5pbXBvcnQgKiBhcyBfand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IHsgUHVzaElETWdyVG9rZW4sIExvZ2luTWdyVG9rZW4sIENvbmZpZ1Rva2VuIH0gZnJvbSBcIi4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlblwiO1xuaW1wb3J0IHsgUHVzaElETWdyIH0gZnJvbSBcIi4vUHVzaElETWdyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTG9naW5Ub2tlblN0b3JlIH0gZnJvbSBcIi4vTG9naW5Ub2tlblN0b3JlXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGUvQXBwUm91dGVyXCI7XG5pbXBvcnQgeyBBUFBNT0RFIH0gZnJvbSBcIi4uLy4uL2JlYW4vQ29tbW9uRW51bVwiO1xuXG5cbmNvbnN0IGp3dF9kZWNvZGUgPSBfand0X2RlY29kZTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0TG9naW5NZ3IgaW1wbGVtZW50cyBJTG9naW5NZ3Ige1xuXG4gICAgcHJpdmF0ZSBhcHBNb2RlOiBBUFBNT0RFID0gbnVsbDtcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGxvZ2luSW5mbzogTG9naW5JbmZvID0gbnVsbDtcbiAgICBwcml2YXRlIGluZm9TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8TG9naW5JbmZvPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9naW5JbmZvPih0aGlzLmxvZ2luSW5mbyk7XG4gICAgcHJpdmF0ZSBsb2dvdXRTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgICAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSB0b2tlblN0b3JlOiBMb2dpblRva2VuU3RvcmUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExvZ2luTWdyVG9rZW4pIHByaXZhdGUgY3VzdG9tTG9naW5NZ3I6IElMb2dpbk1ncixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChQdXNoSURNZ3JUb2tlbikgcHJpdmF0ZSBwdXNoSURNZ3I6IFB1c2hJRE1nclxuICAgICkge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Mb2dpbk1ncikge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21Mb2dpbk1nci5nZXRUb2tlbigpLnN1YnNjcmliZSgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2tlblN0b3JlLmdldFRva2VuKCkuc3Vic2NyaWJlKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwTW9kZSA9IHRoaXMuQVBQX0NPTkZJRy5BUFBfTU9ERTtcbiAgICAgICAgdGhpcy5jaGVja0xvZ2luKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvZ2luSW5mbygpOiBPYnNlcnZhYmxlPExvZ2luSW5mbz4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luTWdyIGdldExvZ2luSW5mb1wiKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Mb2dpbk1nci5nZXRMb2dpbkluZm8oKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5mb1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUxvZ2luTWdyKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tTG9naW5NZ3IuZ2V0VG9rZW4oKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5TdG9yZS5nZXRUb2tlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0xvZ2luKCkge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Mb2dpbk1ncilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUxvZ2luTWdyLmNoZWNrTG9naW4oKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBNb2RlID09PSBBUFBNT0RFLkludGVncmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0b3JhZ2VfdG9rZW4gPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0TG9jYWxTdG9yYWdlKFwiU05EVG9rZW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHN0b3JhZ2VfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9rZW4oc3RvcmFnZV90b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy50b2tlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWJzY3JpYmVMb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nb3V0U3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4ocGF5bG9hZCk6IE9ic2VydmFibGU8TG9naW5SZXNwb25zZT4ge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Mb2dpbk1ncilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUxvZ2luTWdyLmxvZ2luKHBheWxvYWQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsb2dpbkJvZHkgPSB7XG4gICAgICAgICAgICAgICAgUHVzaElkOiB0aGlzLnB1c2hJRE1nci5nZXRQdXNoSUQoKSxcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogcGF5bG9hZC51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBQYXNzd29yZDogcGF5bG9hZC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBEZXZpY2VTeXN0ZW06IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpLFxuICAgICAgICAgICAgICAgIERldmljZUlkOiB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlVVVJRCgpLFxuICAgICAgICAgICAgICAgIERldmljZU1vZGVsOiB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlTWFudWZhY3R1cmVyKCksXG4gICAgICAgICAgICAgICAgRGV2aWNlVHlwZTogdGhpcy5kZXZpY2VTZXJ2aWNlLmlzUGFkKCkgPyBcIlBhZFwiIDogXCJQaG9uZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZmFjdG9yeSA9IHRoaXMuZ2V0QVBJRmFjdG9yeSgpO1xuICAgICAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoKCk7XG4gICAgICAgICAgICBsZXQgbG9naW5BUEkgPSBmYWN0b3J5LmdldEFQSShcIm9ubGluZUxvZ2luXCIpO1xuICAgICAgICAgICAgKDxMb2dpbkFQST5sb2dpbkFQSSkuYm9keSA9IGxvZ2luQm9keTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHRoaXMuX2xvZ2luKGxvZ2luQVBJKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2xvZ2luKGxvZ2luQVBJOiBMb2dpbkFQSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoKCk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRpc3BhdGNoZXIuZGlzcGF0Y2gobG9naW5BUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkID0gand0X2RlY29kZShyZXNwWyd0b2tlbiddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlY29kZWQ6XCIsIGRlY29kZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9rZW4ocmVzcFsndG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2dpblJlc3BvbnNlKHsgaXNTdWNjZXNzOiB0cnVlLCB0eXBlOiBMT0dJTl9UWVBFLk9OTElORSwgZXJyb3JNc2c6ICcnLCB0b2tlbjogcmVzcFsndG9rZW4nXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXNwb25zZSh7IGlzU3VjY2VzczogZmFsc2UsIHR5cGU6IExPR0lOX1RZUEUuT05MSU5FLCBlcnJvck1zZzogJ3NvbWUgZXJyb3IgaGFwcGVuIG9uIGxvZ2luJywgdG9rZW46ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBlcnJvciBoYW5kbGVyOlwiLCBlcnJvcik7XG4gICAgICAgICAgICBsZXQgbXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiAnU3lzdGVtX01haW50ZW5hbmNlJztcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXNwb25zZSh7IGlzU3VjY2VzczogZmFsc2UsIHR5cGU6IExPR0lOX1RZUEUuT05MSU5FLCBlcnJvck1zZzogbXNnLCB0b2tlbjogJycgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmxvZ291dFN1YmplY3QubmV4dCgpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Mb2dpbk1ncilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUxvZ2luTWdyLmxvZ291dCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcE1vZGUgPT09IEFQUE1PREUuSW50ZWdyYXRpb24pIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuQVBQX0NPTkZJRy5JTlRFR1JBVElPTl9CQUNLX1VSTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VuKG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiTG9naW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVRva2VuOlwiLCB0b2tlbik7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy50b2tlblN0b3JlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBsZXQgaW5mbyA9IG5ldyBMb2dpbkluZm8oand0X2RlY29kZSh0b2tlbikpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkluZm8gPSBpbmZvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dpbkluZm8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5mb1N1YmplY3QubmV4dCh0aGlzLmxvZ2luSW5mbyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBUElGYWN0b3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5BUElGYWN0b3J5ID8gdGhpcy5BUElGYWN0b3J5IDogdGhpcy5pbmplY3Rvci5nZXQoQVBJRmFjdG9yeSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QVBJRGlzcGF0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXIgPyB0aGlzLmRpc3BhdGNoZXIgOiB0aGlzLmluamVjdG9yLmdldChBUElEaXNwYXRjaCk7XG4gICAgfVxufSJdfQ==