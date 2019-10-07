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
const jwt_decode = _jwt_decode;
export class DefaultLoginMgr {
    /**
     * @param {?} deviceService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} injector
     * @param {?} tokenStore
     * @param {?} router
     * @param {?} APP_CONFIG
     * @param {?} customLoginMgr
     * @param {?} pushIDMgr
     */
    constructor(deviceService, APIFactory, dispatcher, injector, tokenStore, router, APP_CONFIG, customLoginMgr, pushIDMgr) {
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
            (token) => {
                this.token = token;
            }));
        }
        else {
            this.tokenStore.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                this.token = token;
            }));
        }
        this.appMode = this.APP_CONFIG.APP_MODE;
        this.checkLogin();
    }
    /**
     * @return {?}
     */
    getLoginInfo() {
        console.log("loginMgr getLoginInfo");
        if (this.customLoginMgr)
            return this.customLoginMgr.getLoginInfo();
        else
            return this.infoSubject.asObservable();
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.customLoginMgr)
            return this.customLoginMgr.getToken();
        else
            return this.tokenStore.getToken();
    }
    /**
     * @return {?}
     */
    checkLogin() {
        if (this.customLoginMgr)
            return this.customLoginMgr.checkLogin();
        else {
            if (this.appMode === APPMODE.Integration) {
                /** @type {?} */
                let storage_token = this.deviceService.getLocalStorage("SNDToken");
                if (storage_token) {
                    this.token = storage_token;
                    this.updateToken(storage_token);
                }
            }
            return !!this.token;
        }
    }
    /**
     * @return {?}
     */
    subscribeLogout() {
        return this.logoutSubject.asObservable();
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    login(payload) {
        if (this.customLoginMgr)
            return this.customLoginMgr.login(payload);
        else {
            /** @type {?} */
            let loginBody = {
                PushId: this.pushIDMgr.getPushID(),
                Username: payload.username,
                Password: payload.password,
                DeviceSystem: this.deviceService.getDevicePlatform(),
                DeviceId: this.deviceService.getDeviceUUID(),
                DeviceModel: this.deviceService.getDeviceManufacturer(),
                DeviceType: this.deviceService.isPad() ? "Pad" : "Phone"
            };
            /** @type {?} */
            let factory = this.getAPIFactory();
            /** @type {?} */
            let dispatcher = this.getAPIDispatch();
            /** @type {?} */
            let loginAPI = factory.getAPI("onlineLogin");
            ((/** @type {?} */ (loginAPI))).body = loginBody;
            return from(this._login(loginAPI));
        }
    }
    /**
     * @private
     * @param {?} loginAPI
     * @return {?}
     */
    _login(loginAPI) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let dispatcher = this.getAPIDispatch();
                /** @type {?} */
                let resp = yield dispatcher.dispatch(loginAPI).toPromise();
                if (resp.success) {
                    /** @type {?} */
                    let decoded = jwt_decode(resp['token']);
                    console.log("decoded:", decoded);
                    this.updateToken(resp['token']);
                    return new LoginResponse({ isSuccess: true, type: LOGIN_TYPE.ONLINE, errorMsg: '', token: resp['token'] });
                }
                else {
                    return new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.ONLINE, errorMsg: 'some error happen on login', token: '' });
                }
            }
            catch (error) {
                console.log("login error handler:", error);
                /** @type {?} */
                let msg = error.message ? error.message : 'System_Maintenance';
                return new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.ONLINE, errorMsg: msg, token: '' });
            }
        });
    }
    /**
     * @return {?}
     */
    logout() {
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
    }
    /**
     * @param {?} token
     * @return {?}
     */
    updateToken(token) {
        console.log("updateToken:", token);
        this.token = token;
        this.tokenStore.setToken(token);
        if (token) {
            /** @type {?} */
            let info = new LoginInfo(jwt_decode(token));
            this.loginInfo = info;
        }
        else {
            this.loginInfo = null;
        }
        this.infoSubject.next(this.loginInfo);
    }
    /**
     * @private
     * @return {?}
     */
    getAPIFactory() {
        return this.APIFactory ? this.APIFactory : this.injector.get(APIFactory);
    }
    /**
     * @private
     * @return {?}
     */
    getAPIDispatch() {
        return this.dispatcher ? this.dispatcher : this.injector.get(APIDispatch);
    }
}
DefaultLoginMgr.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultLoginMgr.ctorParameters = () => [
    { type: DeviceService },
    { type: APIFactory },
    { type: APIDispatch },
    { type: Injector },
    { type: LoginTokenStore },
    { type: AppRouter },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LoginMgrToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PushIDMgrToken,] }] }
];
/** @nocollapse */ DefaultLoginMgr.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoginMgr_Factory() { return new DefaultLoginMgr(i0.inject(i1.DeviceService), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.INJECTOR), i0.inject(i4.LoginTokenStore), i0.inject(i5.AppRouter), i0.inject(i6.ConfigToken), i0.inject(i6.LoginMgrToken, 8), i0.inject(i6.PushIDMgrToken, 8)); }, token: DefaultLoginMgr, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvZ2luTWdyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2xvZ2luL0RlZmF1bHRMb2dpbk1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEtBQUssV0FBVyxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O01BRzFDLFVBQVUsR0FBRyxXQUFXO0FBSzlCLE1BQU07Ozs7Ozs7Ozs7OztJQVFGLFlBQ1ksYUFBNEIsRUFDNUIsVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsUUFBa0IsRUFDbEIsVUFBMkIsRUFDM0IsTUFBaUIsRUFDSSxVQUFlLEVBQ0QsY0FBeUIsRUFDeEIsU0FBb0I7UUFS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QUFJLE1BQU0sU0FBQyxjQUFjOzs7Ozs7OztJQWZ0QyxrQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQW9DOzs7OztJQUNwQyxzQ0FBaUc7Ozs7O0lBQ2pHLHdDQUFvRDs7Ozs7SUFHaEQsd0NBQW9DOzs7OztJQUNwQyxxQ0FBOEI7Ozs7O0lBQzlCLHFDQUErQjs7Ozs7SUFDL0IsbUNBQTBCOzs7OztJQUMxQixxQ0FBbUM7Ozs7O0lBQ25DLGlDQUF5Qjs7Ozs7SUFDekIscUNBQTRDOzs7OztJQUM1Qyx5Q0FBb0U7Ozs7O0lBQ3BFLG9DQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElMb2dpbk1nciB9IGZyb20gXCIuL0xvZ2luTWdyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTG9naW5JbmZvIH0gZnJvbSBcIi4vTG9naW5JbmZvXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGZyb20gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTG9naW5SZXNwb25zZSwgTE9HSU5fVFlQRSB9IGZyb20gXCIuL0xvZ2luUmVzcG9uc2VcIjtcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRGlzcGF0Y2hcIjtcbmltcG9ydCB7IExvZ2luQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9Mb2dpbkFQSVwiO1xuaW1wb3J0ICogYXMgX2p3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7IFB1c2hJRE1nclRva2VuLCBMb2dpbk1nclRva2VuLCBDb25maWdUb2tlbiB9IGZyb20gXCIuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW5cIjtcbmltcG9ydCB7IFB1c2hJRE1nciB9IGZyb20gXCIuL1B1c2hJRE1nci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IExvZ2luVG9rZW5TdG9yZSB9IGZyb20gXCIuL0xvZ2luVG9rZW5TdG9yZVwiO1xuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRlL0FwcFJvdXRlclwiO1xuaW1wb3J0IHsgQVBQTU9ERSB9IGZyb20gXCIuLi8uLi9iZWFuL0NvbW1vbkVudW1cIjtcblxuXG5jb25zdCBqd3RfZGVjb2RlID0gX2p3dF9kZWNvZGU7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdExvZ2luTWdyIGltcGxlbWVudHMgSUxvZ2luTWdyIHtcblxuICAgIHByaXZhdGUgYXBwTW9kZTogQVBQTU9ERSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBsb2dpbkluZm86IExvZ2luSW5mbyA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbmZvU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PExvZ2luSW5mbz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvZ2luSW5mbz4odGhpcy5sb2dpbkluZm8pO1xuICAgIHByaXZhdGUgbG9nb3V0U3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgdG9rZW5TdG9yZTogTG9naW5Ub2tlblN0b3JlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogQXBwUm91dGVyLFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChMb2dpbk1nclRva2VuKSBwcml2YXRlIGN1c3RvbUxvZ2luTWdyOiBJTG9naW5NZ3IsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUHVzaElETWdyVG9rZW4pIHByaXZhdGUgcHVzaElETWdyOiBQdXNoSURNZ3JcbiAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTG9naW5NZ3IuZ2V0VG9rZW4oKS5zdWJzY3JpYmUoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5TdG9yZS5nZXRUb2tlbigpLnN1YnNjcmliZSgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcE1vZGUgPSB0aGlzLkFQUF9DT05GSUcuQVBQX01PREU7XG4gICAgICAgIHRoaXMuY2hlY2tMb2dpbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2dpbkluZm8oKTogT2JzZXJ2YWJsZTxMb2dpbkluZm8+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbk1nciBnZXRMb2dpbkluZm9cIik7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUxvZ2luTWdyKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tTG9naW5NZ3IuZ2V0TG9naW5JbmZvKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZm9TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb2tlbigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Mb2dpbk1ncilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUxvZ2luTWdyLmdldFRva2VuKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuU3RvcmUuZ2V0VG9rZW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tMb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Mb2dpbk1nci5jaGVja0xvZ2luKCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwTW9kZSA9PT0gQVBQTU9ERS5JbnRlZ3JhdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBzdG9yYWdlX3Rva2VuID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldExvY2FsU3RvcmFnZShcIlNORFRva2VuXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBzdG9yYWdlX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VuKHN0b3JhZ2VfdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMudG9rZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3Vic2NyaWJlTG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ291dFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHBheWxvYWQpOiBPYnNlcnZhYmxlPExvZ2luUmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Mb2dpbk1nci5sb2dpbihwYXlsb2FkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbG9naW5Cb2R5ID0ge1xuICAgICAgICAgICAgICAgIFB1c2hJZDogdGhpcy5wdXNoSURNZ3IuZ2V0UHVzaElEKCksXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IHBheWxvYWQudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgRGV2aWNlU3lzdGVtOiB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlUGxhdGZvcm0oKSxcbiAgICAgICAgICAgICAgICBEZXZpY2VJZDogdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVVVSUQoKSxcbiAgICAgICAgICAgICAgICBEZXZpY2VNb2RlbDogdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZU1hbnVmYWN0dXJlcigpLFxuICAgICAgICAgICAgICAgIERldmljZVR5cGU6IHRoaXMuZGV2aWNlU2VydmljZS5pc1BhZCgpID8gXCJQYWRcIiA6IFwiUGhvbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZhY3RvcnkgPSB0aGlzLmdldEFQSUZhY3RvcnkoKTtcbiAgICAgICAgICAgIGxldCBkaXNwYXRjaGVyID0gdGhpcy5nZXRBUElEaXNwYXRjaCgpO1xuICAgICAgICAgICAgbGV0IGxvZ2luQVBJID0gZmFjdG9yeS5nZXRBUEkoXCJvbmxpbmVMb2dpblwiKTtcbiAgICAgICAgICAgICg8TG9naW5BUEk+bG9naW5BUEkpLmJvZHkgPSBsb2dpbkJvZHk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh0aGlzLl9sb2dpbihsb2dpbkFQSSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9sb2dpbihsb2dpbkFQSTogTG9naW5BUEkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkaXNwYXRjaGVyID0gdGhpcy5nZXRBUElEaXNwYXRjaCgpO1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkaXNwYXRjaGVyLmRpc3BhdGNoKGxvZ2luQVBJKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZCA9IGp3dF9kZWNvZGUocmVzcFsndG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWNvZGVkOlwiLCBkZWNvZGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2VuKHJlc3BbJ3Rva2VuJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXNwb25zZSh7IGlzU3VjY2VzczogdHJ1ZSwgdHlwZTogTE9HSU5fVFlQRS5PTkxJTkUsIGVycm9yTXNnOiAnJywgdG9rZW46IHJlc3BbJ3Rva2VuJ10gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExvZ2luUmVzcG9uc2UoeyBpc1N1Y2Nlc3M6IGZhbHNlLCB0eXBlOiBMT0dJTl9UWVBFLk9OTElORSwgZXJyb3JNc2c6ICdzb21lIGVycm9yIGhhcHBlbiBvbiBsb2dpbicsIHRva2VuOiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gZXJyb3IgaGFuZGxlcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgbGV0IG1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogJ1N5c3RlbV9NYWludGVuYW5jZSc7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvZ2luUmVzcG9uc2UoeyBpc1N1Y2Nlc3M6IGZhbHNlLCB0eXBlOiBMT0dJTl9UWVBFLk9OTElORSwgZXJyb3JNc2c6IG1zZywgdG9rZW46ICcnIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5sb2dvdXRTdWJqZWN0Lm5leHQoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Mb2dpbk1nci5sb2dvdXQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBNb2RlID09PSBBUFBNT0RFLkludGVncmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLkFQUF9DT05GSUcuSU5URUdSQVRJT05fQkFDS19VUkwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2tlbihudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIkxvZ2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVUb2tlbjpcIiwgdG9rZW4pO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5TdG9yZS5zZXRUb2tlbih0b2tlbik7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgbGV0IGluZm8gPSBuZXcgTG9naW5JbmZvKGp3dF9kZWNvZGUodG9rZW4pKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5JbmZvID0gaW5mbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5JbmZvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZm9TdWJqZWN0Lm5leHQodGhpcy5sb2dpbkluZm8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QVBJRmFjdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQVBJRmFjdG9yeSA/IHRoaXMuQVBJRmFjdG9yeSA6IHRoaXMuaW5qZWN0b3IuZ2V0KEFQSUZhY3RvcnkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFQSURpc3BhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaGVyID8gdGhpcy5kaXNwYXRjaGVyIDogdGhpcy5pbmplY3Rvci5nZXQoQVBJRGlzcGF0Y2gpO1xuICAgIH1cbn0iXX0=