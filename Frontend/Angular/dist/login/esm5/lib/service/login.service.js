/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from "@angular/core";
import { APIFactory, APIDispatch, APPError, LoginResponse, LOGIN_TYPE, TimeoutService } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var LoginService = /** @class */ (function () {
    function LoginService(APIFactory, dispatcher, timeoutService, errorHandler) {
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.timeoutService = timeoutService;
        this.errorHandler = errorHandler;
    }
    /**
     * @return {?}
     */
    LoginService.prototype.getDeviceAccount = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var deviceAccount, getDeviceAccountAPI, resp, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deviceAccount = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        getDeviceAccountAPI = this.APIFactory.getAPI("getDeviceAccount");
                        return [4 /*yield*/, this.dispatcher.dispatch(getDeviceAccountAPI).toPromise()];
                    case 2:
                        resp = _a.sent();
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
                                return [2 /*return*/, deviceAccount];
                            }
                            else {
                                throw new Error("get device account sql error!");
                            }
                        }
                        else {
                            throw new Error("getDeviceAccount API return null.");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00700", error_1.message));
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} account
     * @return {?}
     */
    LoginService.prototype.saveDeviceAccount = /**
     * @param {?} account
     * @return {?}
     */
    function (account) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var BindingAccountAPI, resp, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        BindingAccountAPI = this.APIFactory.getAPI("BindingAccount");
                        BindingAccountAPI["account"] = account;
                        return [4 /*yield*/, this.dispatcher.dispatch(BindingAccountAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("BindingAccount resp:", resp);
                        return [2 /*return*/, resp];
                    case 2:
                        error_2 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00701", error_2.message));
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} token
     * @return {?}
     */
    LoginService.prototype.offlineLogin = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var failCount, offlineAuthAPI, authResp, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        failCount = 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        offlineAuthAPI = this.APIFactory.getAPI("offlineAuth");
                        console.debug("offlineAuthAPI API: ", offlineAuthAPI);
                        if (!offlineAuthAPI) return [3 /*break*/, 3];
                        console.debug("offlineAuthAPI token: ", token);
                        ((/** @type {?} */ (offlineAuthAPI))).token = token;
                        console.debug("offlineAuthAPI offlineAuthAPI: ", offlineAuthAPI);
                        return [4 /*yield*/, this.dispatcher.dispatch(offlineAuthAPI).toPromise()];
                    case 2:
                        authResp = _a.sent();
                        console.debug("offlineAuthAPI resp: ", authResp);
                        if (authResp.isSuccess) {
                            console.debug("offline auth success");
                            this.timeoutService.init();
                            return [2 /*return*/, new LoginResponse({ isSuccess: true, type: LOGIN_TYPE.OFFLINE, errorMsg: '', token: authResp.token })];
                        }
                        else {
                            console.debug("offline auth fail");
                            failCount = authResp.failCount;
                            throw new Error(authResp.message);
                        }
                        return [3 /*break*/, 4];
                    case 3: throw new Error("get offline login auth api error.");
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00702", error_3.message));
                        return [2 /*return*/, new LoginResponse({ isSuccess: false, type: LOGIN_TYPE.OFFLINE, errorMsg: error_3.message, token: '', failCount: failCount })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} token
     * @param {?} encrypted_string
     * @return {?}
     */
    LoginService.prototype.saveToken = /**
     * @param {?} token
     * @param {?} encrypted_string
     * @return {?}
     */
    function (token, encrypted_string) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveTokenAPI, resp, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        saveTokenAPI = this.APIFactory.getAPI("saveLoginToken");
                        saveTokenAPI["encryptedAuth"] = encrypted_string;
                        saveTokenAPI["infoToken"] = token;
                        if (!saveTokenAPI) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dispatcher.dispatch(saveTokenAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("save token api resp:", resp);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00703", error_4.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoginService.ctorParameters = function () { return [
        { type: APIFactory },
        { type: APIDispatch },
        { type: TimeoutService },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i1.TimeoutService), i0.inject(i0.ErrorHandler)); }, token: LoginService, providedIn: "root" });
    return LoginService;
}());
export { LoginService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWhJO0lBS0ksc0JBQ1ksVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsY0FBOEIsRUFDOUIsWUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNsQyxDQUFDOzs7O0lBRVEsdUNBQWdCOzs7SUFBN0I7Ozs7Ozt3QkFDUSxhQUFhLEdBQUcsSUFBSTs7Ozt3QkFFaEIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7d0JBQ3pELHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF0RSxJQUFJLEdBQUcsU0FBK0Q7d0JBQzFFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTs0QkFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dDQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQ0FDdEIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFP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O0lBR2pCLGtDQUE4Qjs7Ozs7SUFDOUIsa0NBQStCOzs7OztJQUMvQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPZmZsaW5lQXV0aEFQSSwgQVBJRmFjdG9yeSwgQVBJRGlzcGF0Y2gsIEFQUEVycm9yLCBMb2dpblJlc3BvbnNlLCBMT0dJTl9UWVBFLCBUaW1lb3V0U2VydmljZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgdGltZW91dFNlcnZpY2U6IFRpbWVvdXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREZXZpY2VBY2NvdW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGxldCBkZXZpY2VBY2NvdW50ID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBnZXREZXZpY2VBY2NvdW50QVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldERldmljZUFjY291bnRcIik7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXREZXZpY2VBY2NvdW50QVBJKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGlmIChyZXNwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5IZWFkZXIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlQWNjb3VudCA9IEpTT04ucGFyc2UocmVzcC5Cb2R5WzBdLkNhdGVnb3J5VmFsKS5hY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXZlciBsb2dpbiBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZUFjY291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXZpY2VBY2NvdW50OicsIGRldmljZUFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlQWNjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldCBkZXZpY2UgYWNjb3VudCBzcWwgZXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldERldmljZUFjY291bnQgQVBJIHJldHVybiBudWxsLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAwXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZURldmljZUFjY291bnQoYWNjb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQmluZGluZ0FjY291bnRBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiQmluZGluZ0FjY291bnRcIik7XG4gICAgICAgICAgICBCaW5kaW5nQWNjb3VudEFQSVtcImFjY291bnRcIl0gPSBhY2NvdW50O1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goQmluZGluZ0FjY291bnRBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCaW5kaW5nQWNjb3VudCByZXNwOlwiLCByZXNwKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAxXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9mZmxpbmVMb2dpbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmYWlsQ291bnQgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG9mZmxpbmVBdXRoQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcIm9mZmxpbmVBdXRoXCIpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIEFQSTogXCIsIG9mZmxpbmVBdXRoQVBJKTtcbiAgICAgICAgICAgIGlmIChvZmZsaW5lQXV0aEFQSSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lQXV0aEFQSSB0b2tlbjogXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAoPE9mZmxpbmVBdXRoQVBJPm9mZmxpbmVBdXRoQVBJKS50b2tlbiA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIG9mZmxpbmVBdXRoQVBJOiBcIiwgb2ZmbGluZUF1dGhBUEkpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRoUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChvZmZsaW5lQXV0aEFQSSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIm9mZmxpbmVBdXRoQVBJIHJlc3A6IFwiLCBhdXRoUmVzcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXV0aFJlc3AuaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lIGF1dGggc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0U2VydmljZS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9naW5SZXNwb25zZSh7IGlzU3VjY2VzczogdHJ1ZSwgdHlwZTogTE9HSU5fVFlQRS5PRkZMSU5FLCBlcnJvck1zZzogJycsIHRva2VuOiBhdXRoUmVzcC50b2tlbiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJvZmZsaW5lIGF1dGggZmFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZmFpbENvdW50ID0gYXV0aFJlc3AuZmFpbENvdW50O1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXV0aFJlc3AubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0IG9mZmxpbmUgbG9naW4gYXV0aCBhcGkgZXJyb3IuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwNzAyXCIsIGVycm9yLm1lc3NhZ2UpKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2dpblJlc3BvbnNlKHsgaXNTdWNjZXNzOiBmYWxzZSwgdHlwZTogTE9HSU5fVFlQRS5PRkZMSU5FLCBlcnJvck1zZzogZXJyb3IubWVzc2FnZSwgdG9rZW46ICcnLCBmYWlsQ291bnQ6IGZhaWxDb3VudCB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZVRva2VuKHRva2VuLCBlbmNyeXB0ZWRfc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc2F2ZVRva2VuQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcInNhdmVMb2dpblRva2VuXCIpO1xuICAgICAgICAgICAgc2F2ZVRva2VuQVBJW1wiZW5jcnlwdGVkQXV0aFwiXSA9IGVuY3J5cHRlZF9zdHJpbmc7XG4gICAgICAgICAgICBzYXZlVG9rZW5BUElbXCJpbmZvVG9rZW5cIl0gPSB0b2tlbjtcbiAgICAgICAgICAgIGlmIChzYXZlVG9rZW5BUEkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChzYXZlVG9rZW5BUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSB0b2tlbiBhcGkgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDA3MDNcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==