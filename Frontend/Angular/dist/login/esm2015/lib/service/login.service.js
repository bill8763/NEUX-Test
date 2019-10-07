/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from "@angular/core";
import { APIFactory, APIDispatch, APPError, LoginResponse, LOGIN_TYPE, TimeoutService } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class LoginService {
    /**
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} timeoutService
     * @param {?} errorHandler
     */
    constructor(APIFactory, dispatcher, timeoutService, errorHandler) {
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.timeoutService = timeoutService;
        this.errorHandler = errorHandler;
    }
    /**
     * @return {?}
     */
    getDeviceAccount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let deviceAccount = null;
            try {
                /** @type {?} */
                let getDeviceAccountAPI = this.APIFactory.getAPI("getDeviceAccount");
                /** @type {?} */
                let resp = yield this.dispatcher.dispatch(getDeviceAccountAPI).toPromise();
                if (resp != null) {
                    if (resp.Header.status) {
                        if (resp.Body.length > 0) {
                            deviceAccount = JSON.parse(resp.Body[0].CategoryVal).account;
                        }
                        else {
                            //never login before
                            deviceAccount = null;
                        }
                        console.log('deviceAccount:', deviceAccount);
                        return deviceAccount;
                    }
                    else {
                        throw new Error("get device account sql error!");
                    }
                }
                else {
                    throw new Error("getDeviceAccount API return null.");
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00700", error.message));
                return null;
            }
        });
    }
    /**
     * @param {?} account
     * @return {?}
     */
    saveDeviceAccount(account) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let BindingAccountAPI = this.APIFactory.getAPI("BindingAccount");
                BindingAccountAPI["account"] = account;
                /** @type {?} */
                let resp = yield this.dispatcher.dispatch(BindingAccountAPI).toPromise();
                console.log("BindingAccount resp:", resp);
                return resp;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00701", error.message));
                return null;
            }
        });
    }
    /**
     * @param {?} token
     * @return {?}
     */
    offlineLogin(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let failCount = 0;
            try {
                /** @type {?} */
                let offlineAuthAPI = this.APIFactory.getAPI("offlineAuth");
                console.debug("offlineAuthAPI API: ", offlineAuthAPI);
                if (offlineAuthAPI) {
                    console.debug("offlineAuthAPI token: ", token);
                    ((/** @type {?} */ (offlineAuthAPI))).token = token;
                    console.debug("offlineAuthAPI offlineAuthAPI: ", offlineAuthAPI);
                    /** @type {?} */
                    let authResp = yield this.dispatcher.dispatch(offlineAuthAPI).toPromise();
                    console.debug("offlineAuthAPI resp: ", authResp);
                    if (authResp.isSuccess) {
                        console.debug("offline auth success");
                        this.timeoutService.init();
                        return new LoginResponse({ isSuccess: true, type: LOGIN_TYPE.OFFLINE, errorMsg: '', token: authResp.token });
                    }
                    else {
                        console.debug("offline auth fail");
                        failCount = authResp.failCount;
                        throw new Error(authResp.message);
                    }
                }
                else {
                    throw new Error("get offline login auth api error.");
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00702", error.message));
                return new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.OFFLINE, errorMsg: error.message, token: '', failCount: failCount });
            }
        });
    }
    /**
     * @param {?} token
     * @param {?} encrypted_string
     * @return {?}
     */
    saveToken(token, encrypted_string) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let saveTokenAPI = this.APIFactory.getAPI("saveLoginToken");
                saveTokenAPI["encryptedAuth"] = encrypted_string;
                saveTokenAPI["infoToken"] = token;
                if (saveTokenAPI) {
                    /** @type {?} */
                    let resp = yield this.dispatcher.dispatch(saveTokenAPI).toPromise();
                    console.log("save token api resp:", resp);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00703", error.message));
            }
        });
    }
}
LoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoginService.ctorParameters = () => [
    { type: APIFactory },
    { type: APIDispatch },
    { type: TimeoutService },
    { type: ErrorHandler }
];
/** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i1.TimeoutService), i0.inject(i0.ErrorHandler)); }, token: LoginService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.timeoutService;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBS2hJLE1BQU07Ozs7Ozs7SUFFRixZQUNZLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLFlBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbEMsQ0FBQzs7OztJQUVRLGdCQUFnQjs7O2dCQUNyQixhQUFhLEdBQUcsSUFBSTtZQUN4QixJQUFJOztvQkFDSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzs7b0JBQ2hFLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUMxRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7b0JBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ3RCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO3lCQUNo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QUFjO1lBRGhGLFlBQVk7Ozs7Ozs7O0lBU3pCLGtDQUE4Qjs7Ozs7SUFDOUIsa0NBQStCOzs7OztJQUMvQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPZmZsaW5lQXV0aEFQSSwgQVBJRmFjdG9yeSwgQVBJRGlzcGF0Y2gsIEFQUEVycm9yLCBMb2dpblJlc3BvbnNlLCBMT0dJTl9UWVBFLCBUaW1lb3V0U2VydmljZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgdGltZW91dFNlcnZpY2U6IFRpbWVvdXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREZXZpY2VBY2NvdW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGxldCBkZXZpY2VBY2NvdW50ID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBnZXREZXZpY2VBY2NvdW50QVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldERldmljZUFjY291bnRcIik7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXREZXZpY2VBY2NvdW50QVBJKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGlmIChyZXNwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5IZWFkZXIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlQWNjb3VudCA9IEpTT04ucGFyc2UocmVzcC5Cb2R5WzBdLkNhdGVnb3J5VmFsKS5hY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXZlciBsb2dpbiBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZUFjY291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXZpY2VBY2NvdW50OicsIGRldmljZUFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlQWNjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldCBkZXZpY2UgYWNjb3VudCBzcWwgZXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldERldmljZUFjY291bnQgQVBJIHJldHVybiBudWxsLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAwXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZURldmljZUFjY291bnQoYWNjb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQmluZGluZ0FjY291bnRBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiQmluZGluZ0FjY291bnRcIik7XG4gICAgICAgICAgICBCaW5kaW5nQWNjb3VudEFQSVtcImFjY291bnRcIl0gPSBhY2NvdW50O1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goQmluZGluZ0FjY291bnRBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCaW5kaW5nQWNjb3VudCByZXNwOlwiLCByZXNwKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAxXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9mZmxpbmVMb2dpbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmYWlsQ291bnQgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG9mZmxpbmVBdXRoQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcIm9mZmxpbmVBdXRoXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIEFQSTogXCIsIG9mZmxpbmVBdXRoQVBJKTtcbiAgICAgICAgICAgIGlmIChvZmZsaW5lQXV0aEFQSSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lQXV0aEFQSSB0b2tlbjogXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAoPE9mZmxpbmVBdXRoQVBJPm9mZmxpbmVBdXRoQVBJKS50b2tlbiA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIG9mZmxpbmVBdXRoQVBJOiBcIiwgb2ZmbGluZUF1dGhBUEkpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRoUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChvZmZsaW5lQXV0aEFQSSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIHJlc3A6IFwiLCBhdXRoUmVzcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXV0aFJlc3AuaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lIGF1dGggc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0U2VydmljZS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXNwb25zZSh7IGlzU3VjY2VzczogdHJ1ZSwgdHlwZTogTE9HSU5fVFlQRS5PRkZMSU5FLCBlcnJvck1zZzogJycsIHRva2VuOiBhdXRoUmVzcC50b2tlbiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lIGF1dGggZmFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZmFpbENvdW50ID0gYXV0aFJlc3AuZmFpbENvdW50O1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXV0aFJlc3AubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0IG9mZmxpbmUgbG9naW4gYXV0aCBhcGkgZXJyb3IuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAyXCIsIGVycm9yLm1lc3NhZ2UpKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2dpblJlc3BvbnNlKHsgaXNTdWNjZXNzOiBmYWxzZSwgdHlwZTogTE9HSU5fVFlQRS5PRkZMSU5FLCBlcnJvck1zZzogZXJyb3IubWVzc2FnZSwgdG9rZW46ICcnLCBmYWlsQ291bnQ6IGZhaWxDb3VudCB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZVRva2VuKHRva2VuLCBlbmNyeXB0ZWRfc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc2F2ZVRva2VuQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcInNhdmVMb2dpblRva2VuXCIpO1xuICAgICAgICAgICAgc2F2ZVRva2VuQVBJW1wiZW5jcnlwdGVkQXV0aFwiXSA9IGVuY3J5cHRlZF9zdHJpbmc7XG4gICAgICAgICAgICBzYXZlVG9rZW5BUElbXCJpbmZvVG9rZW5cIl0gPSB0b2tlbjtcbiAgICAgICAgICAgIGlmIChzYXZlVG9rZW5BUEkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChzYXZlVG9rZW5BUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSB0b2tlbiBhcGkgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDA3MDNcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==