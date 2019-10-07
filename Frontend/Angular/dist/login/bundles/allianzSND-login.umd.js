(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jssha'), require('@angular/router'), require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/forms'), require('@allianzSND/core'), require('@allianzSND/ui')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/login', ['exports', 'jssha', '@angular/router', '@angular/core', 'rxjs', '@angular/common', '@angular/forms', '@allianzSND/core', '@allianzSND/ui'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.login = {}),global.jssha,global.ng.router,global.ng.core,global.rxjs,global.ng.common,global.ng.forms,global.i1,global.ui));
}(this, (function (exports,jssha,router,i0,rxjs,common,forms,i1,ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Region = {
        Taiwan: "TW",
        Thailand: "TH",
        Philippines: "PH",
        Indonesia: "ID",
        Malaysia: "MY",
        Srilanka: "LK",
        Unknow: "unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                return __awaiter(this, void 0, void 0, function () {
                    var deviceAccount, getDeviceAccountAPI, resp, error_1;
                    return __generator(this, function (_a) {
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
                                this.errorHandler.handleError(new i1.APPError("F00700", error_1.message));
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
                return __awaiter(this, void 0, void 0, function () {
                    var BindingAccountAPI, resp, error_2;
                    return __generator(this, function (_a) {
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
                                this.errorHandler.handleError(new i1.APPError("F00701", error_2.message));
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
                return __awaiter(this, void 0, void 0, function () {
                    var failCount, offlineAuthAPI, authResp, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                failCount = 0;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 5, , 6]);
                                offlineAuthAPI = this.APIFactory.getAPI("offlineAuth");
                                console.debug("offlineAuthAPI API: ", offlineAuthAPI);
                                if (!offlineAuthAPI)
                                    return [3 /*break*/, 3];
                                console.debug("offlineAuthAPI token: ", token);
                                (( /** @type {?} */(offlineAuthAPI))).token = token;
                                console.debug("offlineAuthAPI offlineAuthAPI: ", offlineAuthAPI);
                                return [4 /*yield*/, this.dispatcher.dispatch(offlineAuthAPI).toPromise()];
                            case 2:
                                authResp = _a.sent();
                                console.debug("offlineAuthAPI resp: ", authResp);
                                if (authResp.isSuccess) {
                                    console.debug("offline auth success");
                                    this.timeoutService.init();
                                    return [2 /*return*/, new i1.LoginResponse({ isSuccess: true, type: i1.LOGIN_TYPE.OFFLINE, errorMsg: '', token: authResp.token })];
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
                                this.errorHandler.handleError(new i1.APPError("F00702", error_3.message));
                                return [2 /*return*/, new i1.LoginResponse({ isSuccess: false, type: i1.LOGIN_TYPE.OFFLINE, errorMsg: error_3.message, token: '', failCount: failCount })];
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
                return __awaiter(this, void 0, void 0, function () {
                    var saveTokenAPI, resp, error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                saveTokenAPI = this.APIFactory.getAPI("saveLoginToken");
                                saveTokenAPI["encryptedAuth"] = encrypted_string;
                                saveTokenAPI["infoToken"] = token;
                                if (!saveTokenAPI)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.dispatcher.dispatch(saveTokenAPI).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log("save token api resp:", resp);
                                _a.label = 2;
                            case 2: return [3 /*break*/, 4];
                            case 3:
                                error_4 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError("F00703", error_4.message));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        LoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        LoginService.ctorParameters = function () {
            return [
                { type: i1.APIFactory },
                { type: i1.APIDispatch },
                { type: i1.TimeoutService },
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i1.TimeoutService), i0.inject(i0.ErrorHandler)); }, token: LoginService, providedIn: "root" });
        return LoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginForm = /** @class */ (function () {
        function LoginForm(username, password) {
            if (username === void 0) {
                username = '';
            }
            if (password === void 0) {
                password = '';
            }
            this.username = username;
            this.password = password;
        }
        Object.defineProperty(LoginForm.prototype, "username", {
            get: /**
             * @return {?}
             */ function () {
                return this._username;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._username = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginForm.prototype, "password", {
            get: /**
             * @return {?}
             */ function () {
                return this._password;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._password = value;
            },
            enumerable: true,
            configurable: true
        });
        return LoginForm;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(loginMgr, deviceService, daoFactory, timeoutService, router$$1, loginService, createDBTask, notificationMgr, translateService, routeReuseStrategy, APP_CONFIG, afterLogin) {
            var _this = this;
            this.loginMgr = loginMgr;
            this.deviceService = deviceService;
            this.daoFactory = daoFactory;
            this.timeoutService = timeoutService;
            this.router = router$$1;
            this.loginService = loginService;
            this.createDBTask = createDBTask;
            this.notificationMgr = notificationMgr;
            this.translateService = translateService;
            this.routeReuseStrategy = routeReuseStrategy;
            this.APP_CONFIG = APP_CONFIG;
            this.afterLogin = afterLogin;
            this.loginForm = new LoginForm();
            this.language = new i1.Language();
            this.version = '';
            this.isErrorStatusShow = false;
            this.validationResult = new i1.ValidationResult();
            this.deviceAccount = null;
            this.token = null;
            this.forgotPasswordRegion = "";
            this.version = this.APP_CONFIG.DEV_VERSION;
            /** @type {?} */
            var env = this.APP_CONFIG.ENV;
            this.failMax = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES;
            this.loginMgr.getToken().subscribe(( /**
             * @param {?} token
             * @return {?}
             */function (token) {
                _this.token = token;
            }));
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.windowWidth = window.innerWidth;
                this.timeoutService.clear();
                this.getDeviceAccount();
                if (this.loginMgr.checkLogin()) {
                    /** @type {?} */
                    var loginResp = new i1.LoginResponse({
                        isSuccess: true,
                        type: this.deviceService.getNetworkState() ? i1.LOGIN_TYPE.ONLINE : i1.LOGIN_TYPE.OFFLINE,
                        errorMsg: '',
                        token: this.token
                    });
                    this._afterLogin(loginResp, null);
                }
                this.bodyHeight = document.body.clientHeight;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LoginComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.windowWidth = window.innerWidth;
                this._mobileCalcRightHeight();
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._mobileCalcRightHeight();
            };
        /**
         * @private
         * @return {?}
         */
        LoginComponent.prototype._mobileCalcRightHeight = /**
         * @private
         * @return {?}
         */
            function () {
                this.layoutLeftHeight = this.layoutLeft.nativeElement.clientHeight;
                this.layoutRightHeight = this.layoutRight.nativeElement.clientHeight;
                this.notOverHeight = (this.layoutLeftHeight + this.layoutRightHeight + 15 - 43) < this.bodyHeight;
                console.log("layoutLeftHeight", this.layoutLeftHeight, "layoutRightHeight", this.layoutRightHeight, "overHeight", this.notOverHeight);
                if (this.windowWidth < 1024 && this.notOverHeight) {
                    console.log("layoutLeftHeight", this.layoutLeftHeight);
                    /** @type {?} */
                    var layoutRightHeightCalc = this.bodyHeight - this.layoutLeftHeight + 20 - 43;
                    this.layoutRight.nativeElement.style.height = layoutRightHeightCalc + "px";
                }
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.ForgetPassword = /**
         * @return {?}
         */
            function () {
                this.forgotPasswordRegion = this.APP_CONFIG.ForgotPasswordRegion;
                /** @type {?} */
                var region = this.convertToRegion(this.forgotPasswordRegion);
                /** @type {?} */
                var webUrl = "";
                switch (region) {
                    case Region.Taiwan:
                        webUrl = "https://first2.allianz.com.tw/eproagent/Forget.aspx";
                        break;
                    case Region.Thailand:
                        webUrl = "https://www.google.com/";
                        break;
                    case Region.Philippines:
                        webUrl = "https://www.google.com/";
                        break;
                    case Region.Indonesia:
                        webUrl = "https://www.google.com/";
                        break;
                    case Region.Malaysia:
                        webUrl = "https://www.google.com/";
                        break;
                    case Region.Srilanka:
                        webUrl = "https://www.google.com/";
                        break;
                    case Region.Unknow:
                        webUrl = "https://www.google.com/";
                        break;
                }
                window.open(webUrl, '_system');
            };
        /**
         * @private
         * @param {?} str
         * @return {?}
         */
        LoginComponent.prototype.convertToRegion = /**
         * @private
         * @param {?} str
         * @return {?}
         */
            function (str) {
                switch (str) {
                    case "TW": return Region.Taiwan;
                    case "TH": return Region.Thailand;
                    case "PH": return Region.Philippines;
                    case "ID": return Region.Indonesia;
                    case "MY": return Region.Malaysia;
                    case "Lk": return Region.Srilanka;
                }
            };
        /**
         * @private
         * @return {?}
         */
        LoginComponent.prototype.getDeviceAccount = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.loginService.getDeviceAccount()];
                            case 1:
                                _a.deviceAccount = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} account
         * @return {?}
         */
        LoginComponent.prototype.saveDeviceAccount = /**
         * @private
         * @param {?} account
         * @return {?}
         */
            function (account) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loginService.saveDeviceAccount(account)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.login = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var isValid, shaObj, encrypted_str, loginResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                //Reset error message
                                isValid = this.validInfo();
                                //if input not valid
                                if (!isValid)
                                    return [2 /*return*/];
                                //end validation
                                shaObj = new jssha("SHA-256", "TEXT");
                                shaObj.update(this.loginForm.username + "||" + this.loginForm.password);
                                encrypted_str = shaObj.getHash("HEX");
                                console.log('network state:', this.deviceService.getNetworkState());
                                console.log("encrypted token:", encrypted_str);
                                if (!this.deviceService.getNetworkState())
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.onlineLogin(this.loginForm)];
                            case 1:
                                // online login
                                loginResp = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.offlineLogin(encrypted_str)];
                            case 3:
                                //offline login
                                loginResp = _a.sent();
                                _a.label = 4;
                            case 4:
                                if (this.afterLogin)
                                    this.afterLogin.afterLogin(loginResp);
                                // after login action
                                if (loginResp.isSuccess) {
                                    this._afterLogin(loginResp, encrypted_str);
                                }
                                else {
                                    if (loginResp.failCount > 0) {
                                        loginResp.errorMsg = this.translateService.translateWithVariable('Offline_Login_Locked', { failCount: loginResp.failCount, failMax: this.failMax });
                                    }
                                    this.validationResult.setErrorMap("login", loginResp.errorMsg);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} loginForm
         * @return {?}
         */
        LoginComponent.prototype.onlineLogin = /**
         * @private
         * @param {?} loginForm
         * @return {?}
         */
            function (loginForm) {
                return __awaiter(this, void 0, void 0, function () {
                    var loginResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                //online login
                                return [4 /*yield*/, this.loginMgr.login(loginForm).toPromise()];
                            case 1:
                                loginResp = _a.sent();
                                return [2 /*return*/, loginResp];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} token
         * @return {?}
         */
        LoginComponent.prototype.offlineLogin = /**
         * @private
         * @param {?} token
         * @return {?}
         */
            function (token) {
                return __awaiter(this, void 0, void 0, function () {
                    var resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loginService.offlineLogin(token)];
                            case 1:
                                resp = _a.sent();
                                if (resp.isSuccess) {
                                    this.loginMgr.updateToken(resp.token);
                                }
                                return [2 /*return*/, resp];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} loginResp
         * @param {?} encrypted_string
         * @return {?}
         */
        LoginComponent.prototype._afterLogin = /**
         * @private
         * @param {?} loginResp
         * @param {?} encrypted_string
         * @return {?}
         */
            function (loginResp, encrypted_string) {
                return __awaiter(this, void 0, void 0, function () {
                    var accountHasChanged;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.timeoutService.init();
                                accountHasChanged = this.deviceAccount !== this.loginForm.username;
                                if (!accountHasChanged)
                                    return [3 /*break*/, 2];
                                this.saveDeviceAccount(this.loginForm.username);
                                if (!(this.deviceAccount !== null))
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.clearUserData()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                if (encrypted_string)
                                    this.loginService.saveToken(loginResp.token, encrypted_string);
                                //Clean the route cache
                                if (this.routeReuseStrategy["deleteRouteSnapshot"]) {
                                    (( /** @type {?} */(this.routeReuseStrategy))).deleteRouteSnapshot();
                                }
                                if (loginResp.type == i1.LOGIN_TYPE.ONLINE)
                                    this.router.navigate("Loading");
                                else
                                    this.router.navigate("GoalLanding");
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        LoginComponent.prototype.validInfo = /**
         * @private
         * @return {?}
         */
            function () {
                this.validationResult.clearErrorMap();
                if (this.loginForm.username.length === 0) {
                    this.validationResult.setErrorMap("username", "Username_Required");
                }
                if (this.loginForm.password.length === 0) {
                    this.validationResult.setErrorMap("password", "Password_Required");
                }
                if (!/^[A-Za-z0-9]*$/.test(this.loginForm.username)) {
                    this.validationResult.setErrorMap("username", "value");
                }
                if (!/^[A-Za-z0-9]*$/.test(this.loginForm.password)) {
                    this.validationResult.setErrorMap("password", "value");
                }
                return this.validationResult.isTrue();
            };
        /**
         * @private
         * @return {?}
         */
        LoginComponent.prototype.clearUserData = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var dao, commands, resp, syncTable;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.daoFactory.clearDatabaseData("Main")];
                            case 1:
                                _a.sent();
                                dao = this.daoFactory.getDefaultDao();
                                commands = this.createDBTask.createMainTableCommand().map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return new i1.SQLCommand(x, []); }));
                                return [4 /*yield*/, dao.excuteSqlCommand(commands).toPromise()];
                            case 2:
                                resp = _a.sent();
                                console.log("clearUserData Main resp:", resp);
                                // Clear Sync table and insert again.
                                dao = this.daoFactory.getDao("Profile");
                                syncTable = this.daoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                                return [4 /*yield*/, dao.deleteByTable(syncTable).toPromise()];
                            case 3:
                                _a.sent();
                                commands = this.createDBTask.createProfileTableCommand().map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return new i1.SQLCommand(x, []); }));
                                return [4 /*yield*/, dao.excuteSqlCommand(commands).toPromise()];
                            case 4:
                                resp = _a.sent();
                                console.log("clearUserData Profile resp:", resp);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        // By PongPong
        // By PongPong
        /**
         * @return {?}
         */
        LoginComponent.prototype.clearDatabase =
            // By PongPong
            /**
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, db_config, db_names, _loop_1, this_1, db_names_1, db_names_1_1, name, e_1_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                                db_names = Object.keys(db_config);
                                _loop_1 = function () {
                                    var dao, returnMap, SqlCommandArray, resp;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log('db_names be delete:', name);
                                                dao = this_1.daoFactory.getDao(name);
                                                return [4 /*yield*/, dao.getSchema().toPromise()];
                                            case 1:
                                                returnMap = _a.sent();
                                                console.warn("returnMap: ", returnMap);
                                                SqlCommandArray = [];
                                                returnMap.forEach(( /**
                                                 * @param {?} value
                                                 * @return {?}
                                                 */function (value) {
                                                    console.warn("value: ", value);
                                                    /** @type {?} */
                                                    var command = value.tableName.includes('TW_LH_SD_VW_') ? 'DROP VIEW IF EXISTS ' : 'DROP TABLE IF EXISTS ';
                                                    SqlCommandArray.push(new i1.SQLCommand(command + value.tableName, []));
                                                }));
                                                console.log('SqlCommandArray: ', SqlCommandArray);
                                                return [4 /*yield*/, dao.excuteSqlCommand(SqlCommandArray).toPromise()];
                                            case 2:
                                                resp = _a.sent();
                                                console.log('excuteSqlCommand resp: ', resp);
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                this_1 = this;
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 6, 7, 8]);
                                db_names_1 = __values(db_names), db_names_1_1 = db_names_1.next();
                                _b.label = 2;
                            case 2:
                                if (!!db_names_1_1.done)
                                    return [3 /*break*/, 5];
                                name = db_names_1_1.value;
                                return [5 /*yield**/, _loop_1()];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                db_names_1_1 = db_names_1.next();
                                return [3 /*break*/, 2];
                            case 5: return [3 /*break*/, 8];
                            case 6:
                                e_1_1 = _b.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 8];
                            case 7:
                                try {
                                    if (db_names_1_1 && !db_names_1_1.done && (_a = db_names_1.return))
                                        _a.call(db_names_1);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                                return [7 /*endfinally*/];
                            case 8:
                                this.deviceService.restartApp();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.showAllPopup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var data = [{
                        type: i1.NotificationType.GoalSettingNotStartFirst,
                        data: { year: 2019, notShow: false }
                    }, {
                        type: i1.NotificationType.GoalSettingNotStart,
                        data: { year: 2019, notShow: false }
                    }, {
                        type: i1.NotificationType.NeedGoalSetting,
                        data: { days: 10, year: 2019 }
                    }, {
                        type: i1.NotificationType.GoalPromoSetting,
                        data: { days: 10, year: 2019, isPromo: true }
                    }, {
                        type: i1.NotificationType.GoalAutoApprove,
                        data: null
                    }, {
                        type: i1.NotificationType.GoalAutoApproveLeader,
                        data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
                    }, {
                        type: i1.NotificationType.ApproveGoalIsReject,
                        data: { year: 2019 }
                    }, {
                        type: i1.NotificationType.ApproveGoalIsApprove,
                        data: null
                    }, {
                        type: i1.NotificationType.PendingReview,
                        data: { "year": 2019, "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
                    }, {
                        type: i1.NotificationType.SupervisorHaveChangeAgent,
                        data: null
                    }, {
                        type: i1.NotificationType.SupervisorHaveChangeOld,
                        data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
                    }, {
                        type: i1.NotificationType.SupervisorHaveChangeNew,
                        data: { "year": 2019, "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
                    }, {
                        type: i1.NotificationType.GoalAutoReject,
                        data: { year: 2019 }
                    }, {
                        type: i1.NotificationType.GoalAutoRejectLeader,
                        data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
                    }, {
                        type: i1.NotificationType.ActivityArriveTenPoint,
                        data: null
                    }, {
                        type: i1.NotificationType.ActivityArriveTwentyPoint,
                        data: null
                    }, {
                        type: i1.NotificationType.ActivityLessThanTwentyPoint,
                        data: null
                    }, {
                        type: i1.NotificationType.ReminderEvent,
                        data: { "calendars": [{ "color": { "primary": "#23421" }, "title": "title", "location": "location", "start": 1234523421231, "end": 1234523421231 }] }
                    }, {
                        type: i1.NotificationType.DataPrivacyProtection,
                        data: null
                    }, {
                        type: i1.NotificationType.Overtime,
                        data: { customers: [{ customerName: 'Test Customer' }] }
                    }, {
                        type: i1.NotificationType.AutoDelete,
                        data: { customers: [{ customerName: 'Test Customer' }] }
                    }, {
                        type: i1.NotificationType.Offline,
                        data: null
                    }, {
                        type: i1.NotificationType.OnlineCheck,
                        data: null
                    }, {
                        type: i1.NotificationType.NewVersion,
                        data: {
                            "version": "1.0.3",
                            "updateType": "APP",
                            "appPath": "https://xxxx.xxxx.xxx/1.0/snd.apk",
                            "sqls": []
                        }
                    }, {
                        type: i1.NotificationType.Timeout,
                        data: null
                    }, {
                        type: i1.NotificationType.DataCollection,
                        data: null
                    }, {
                        type: i1.NotificationType.NewVersionLogin,
                        data: {
                            "version": "1.0.3",
                            "updateType": "APP",
                            "appPath": "https://xxxx.xxxx.xxx/1.0/snd.apk",
                            "sqls": []
                        }
                    }, {
                        type: i1.NotificationType.ContactPermissionError,
                        data: null
                    }, {
                        type: i1.NotificationType.ScreenShotAlert,
                        data: null
                    }, {
                        type: i1.NotificationType.SubmitFail,
                        data: null
                    }, {
                        type: i1.NotificationType.HTTPError,
                        data: {
                            code: 500,
                            message: "url:http://xxx.com\ninternal error."
                        }
                    }];
                data.forEach(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    _this.notificationMgr.pushNotification(x.type, x.data);
                }));
            };
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-login',
                        template: "<div class=\"layout-login layout-block form-scroll-content stop-scroll-block\">\n  <div #layoutLeft class=\"layout-left layout-sub-part\">\n    <div class=\"logo-block\">\n      <img src=\"assets/img/logo-w.svg\">\n    </div>\n    <div class=\"text-block\">\n      <p class=\"text-lg font-size_h2\">{{language.welcome | translate}}</p>\n      <p class=\"text-sm font-size_h5\">{{language.accountPassword | translate}}</p>\n    </div>\n    <div class=\"img-block\">\n      <img src=\"assets/img/img-login.svg\">\n    </div>\n  </div>\n  <div #layoutRight class=\"layout-right layout-main-part\">\n    <!-- login control -->\n    <div class=\"login-control-block \">\n      <!-- top -->\n      <div class=\"top-block\">\n        <!-- title -->\n        <div class=\"title-block\">\n          <h2 class=\"font-size_h5\">{{language.signIn | translate}}</h2>\n        </div>\n        <!-- end of title -->\n        <!-- error status -->\n        <div class=\"error-status\" *ngIf=\"validationResult.isError('login')\">\n          <i class=\"icon-block\"><img src=\"assets/img/icon-info.svg\"></i>\n          <span class=\"text\">{{validationResult.getErrorMsg('login') | translate}}</span>\n        </div>\n        <!-- end of error status -->\n      </div>\n      <!-- end of top -->\n      <!-- form -->\n      <div class=\"login-form-block \">\n        <app-ui-form-layout-advanced>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [inputTitle]=\"language.nationalID | translate\" [name]=\"'NationalID'\"\n                [id]=\"'input_login_nationID'\" [(nxValue)]=\"loginForm.username\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('username')\">\n                {{validationResult.getErrorMsg('username') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [type]=\"'password'\" [inputTitle]=\"language.password | translate\" [name]=\"'Password'\"\n                [id]=\"'input_login_password'\" [(nxValue)]=\"loginForm.password\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('password')\">\n                {{validationResult.getErrorMsg('password') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </app-ui-form-layout-advanced>\n        <app-ui-btn-layout>\n          <app-ui-btn [id]=\"'login'\" Action action=\"btn_login\" (ClickBtn)=\"login()\">\n            <ng-container TextType=\"cust\">{{language.login | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <app-ui-link [id]=\"'forgotPassword'\" Action action=\"btn_forgotPassword\" (onClick)=\"ForgetPassword()\" [isHasImg]=\"false\">\n          <ng-container textType=\"linktext\">{{language.forgotPassword | translate}}</ng-container>\n        </app-ui-link>\n        <p *ngIf=\"version\">Dev version: {{version}}</p>\n        <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"clearDatabase()\">clear database</button>\n        <!-- <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"showAllPopup()\">show all popup</button> -->\n      </div>\n      <!-- end of form -->\n\n    </div>\n    <!-- end of login control -->\n\n\n\n  </div>\n\n</div>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-login.layout-block{display:flex;width:100vw;height:100vh;overflow-x:hidden;overflow-y:auto;flex-wrap:nowrap}.layout-login.layout-block .layout-left{background:linear-gradient(to top,#0068b7,#003781);display:inline-flex;max-width:490px;width:100%;flex:1 1 490px;flex-wrap:wrap;overflow:visible;padding-left:75px;padding-top:75px;box-sizing:border-box}.layout-login.layout-block .layout-right{display:inline-flex;max-width:calc(100% - 490px);width:100%;flex:1 1 calc(100% - 490px);background-color:#fff;align-items:center;box-sizing:border-box;justify-content:center}.layout-login{position:relative}.layout-login.form-scroll-content{transition:.2s}.layout-login.form-scroll-content.active{padding-bottom:0}@media (max-width:1023px){.layout-login.layout-block{flex-wrap:wrap;display:block}.layout-login.layout-block .layout-left{max-width:100%;padding-left:30px;padding-right:30px;padding-top:26px}.layout-login.layout-block .layout-right{max-width:100%;padding-left:5px;padding-right:5px}.layout-login.form-scroll-content.active{padding-bottom:35vh}}.layout-login .top-block{position:relative}.layout-login .top-block .title-block{padding:30px 50px}.layout-login .top-block .title-block h2{line-height:normal;font-weight:700}.layout-login .top-block .icon-block{display:inline-block;vertical-align:middle;flex-shrink:0;width:24px;margin-right:9px}.layout-login .top-block .icon-block img{width:100%;display:inline-block;vertical-align:middle}.layout-login .top-block .error-status{padding:30px 50px;background-color:#f5f5f5;font-size:1rem;font-weight:400;color:#414141;line-height:normal;display:flex;width:100%;position:absolute;top:0;left:0;right:0;border-radius:5px}.layout-login .top-block .error-status .text{text-align:left;display:flex;align-items:center}@media (max-width:374px){.layout-login .top-block .error-status,.layout-login .top-block .title-block{padding:30px}}.layout-login .logo-block{max-width:100%;width:100%;text-align:left}.layout-login .logo-block img{max-width:150px;width:100%}.layout-login .text-block{color:#fff;text-align:left;max-width:74%}.layout-login .text-block .text-lg{font-weight:700;line-height:1.2;margin:0;padding-bottom:20px}.layout-login .text-block .text-sm{font-weight:400;margin:0;line-height:1.33}.layout-login .img-block{position:relative;padding-left:20px}.layout-login .login-control-block{background-color:#f5f5f5;max-width:73.2%;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);padding-bottom:36px;border-radius:5px;width:100%}.layout-login .login-control-block ::ng-deep .btn-block{margin-bottom:15px}@media screen and (min-width:1025px){.layout-login .login-control-block{max-width:60%}}.layout-login .login-form-block{width:100%;padding:0 50px;box-sizing:border-box}.layout-login .login-form-block ::ng-deep .nx-formfield__label{background-color:#f5f5f5}.layout-login .login-form-block ::ng-deep .ui-link-block .link,.layout-login .login-form-block ::ng-deep .ui-link-block .link-text{width:100%}@media (max-width:1023px){.layout-login .login-control-block{margin-top:-43px;max-width:100%;box-sizing:border-box;height:calc(100% + 43px)}.layout-login .logo-block{padding-bottom:95px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block{max-width:300px;position:relative;z-index:2;padding-bottom:calc(15px + 43px)}.layout-login .img-block{position:absolute;top:75px;right:-16px}.layout-login .img-block img{max-width:200px;width:100%}}@media (max-width:374px){.layout-login .logo-block{padding-bottom:35px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block .text-lg{padding-bottom:5px}.layout-login .img-block{position:absolute;top:55px;right:-16px}.layout-login .img-block img{max-width:150px}.layout-login .login-form-block{padding:30px}}"]
                    }] }
        ];
        LoginComponent.ctorParameters = function () {
            return [
                { type: i1.DefaultLoginMgr },
                { type: i1.DeviceService },
                { type: i1.DaoFactory },
                { type: i1.TimeoutService },
                { type: i1.AppRouter },
                { type: LoginService },
                { type: i1.DataSyncTask },
                { type: i1.NotificationMgr },
                { type: i1.TranslateService },
                { type: router.RouteReuseStrategy, decorators: [{ type: i0.Optional }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.ConfigToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.AfterLoginToken,] }] }
            ];
        };
        LoginComponent.propDecorators = {
            layoutLeft: [{ type: i0.ViewChild, args: ['layoutLeft',] }],
            layoutRight: [{ type: i0.ViewChild, args: ['layoutRight',] }],
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent(router$$1, defaultLoadingAppHandler, _location, loadingAppHandler) {
            this.router = router$$1;
            this._location = _location;
            // progress bar 
            this.progressValue = 0.2;
            this.onProgressFinish = new i0.EventEmitter();
            this.language = new i1.Language();
            this.loadingAppHandler = loadingAppHandler || defaultLoadingAppHandler;
        }
        /**
         * @return {?}
         */
        LoadingComponent.prototype.progressFinish = /**
         * @return {?}
         */
            function () {
                console.log('in  loading finish percent:', this.progressValue);
                if (this.progressValue >= 1)
                    this.onProgressFinish.emit();
            };
        // svg get url;
        // svg get url;
        /**
         * @return {?}
         */
        LoadingComponent.prototype.getUrl =
            // svg get url;
            /**
             * @return {?}
             */
            function () {
                if (this._location) {
                    /** @type {?} */
                    var urlLink = this._location.path();
                    // console.log(urlLink.replace(/\//,''));
                    return urlLink.replace(/\//, '');
                }
                else
                    return '';
            };
        /**
         * @return {?}
         */
        LoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                rxjs.fromEvent(document, 'offline').subscribe(( /**
                 * @return {?}
                 */function () {
                    if (_this.loadingAppHandler && _this.progressValue < 1) {
                        _this.router.navigate("Login");
                    }
                }));
            };
        LoadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-loading',
                        template: "<div class=\"layout-splite-to-full layout-loading\">\n  <!-- layout main -->\n  <div class=\"layout-main-block\">\n    <div class=\"logo-block\">\n      <img src=\"assets/img/logo-w.svg\">\n    </div>\n    <div class=\"title-block\">\n        <h2 class=\"font-size_h2\">{{language.loadingMessage | translate}}</h2>\n        <p class=\"font-size_h5\">{{language.pleaseWait | translate}}\n            <span class=\"text-dot\">...</span>\n        </p>\n    </div>\n    <div class=\"img-and-progress-block\">\n        <div class=\"img-main-block\">\n            <div class=\"svg-block\">\n            <!-- svg -->\n            <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 401 343\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs>\n                    <linearGradient x1=\"0%\" y1=\"50.0058011%\" x2=\"99.9973364%\" y2=\"50.0058011%\" id=\"linearGradient-1\">\n                        <stop stop-color=\"#8FCEE6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M10.5867389,2.03328 L7.5938957,0.36864 C7.5938957,0.36864 6.95291487,1.33056 6.42803984,1.95168 C5.41859098,3.1488 0.578609945,4.01568 0.578609945,5.71296 C0.578609945,6.5712 2.38160843,7.34112 3.85068277,7.39968 C5.32167621,7.45824 6.52879282,7.1952 7.39718751,6.91104 C8.26462265,6.62688 10.2441787,5.82144 10.5579523,5.29248 C11.1058566,4.37376 10.6750176,3.30816 10.6750176,3.30816 C10.8304651,2.3616 10.5867389,2.03328 10.5867389,2.03328\" id=\"path-2\"></path>\n                    <linearGradient x1=\"0%\" y1=\"50.0096602%\" x2=\"99.9973256%\" y2=\"50.0096602%\" id=\"linearGradient-4\">\n                        <stop stop-color=\"#61C4E4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M23.5925087,0.38112 C23.2422721,0.4944 22.9745571,0.744 22.8613299,1.06944 C22.126313,3.16128 21.5074019,7.63968 20.8510682,12.38112 C20.1908963,17.14944 18.3907765,26.3184 18.3111336,26.81952 C16.8219087,28.12224 2.78078213,41.28864 0.282108332,42.56928 L3.31909088,47.49312 C9.49380895,44.17056 23.1242472,34.90752 25.9731575,30.36192 C29.0149379,25.65888 38.0145775,6.64416 34.2358611,3.58368 C32.9702118,2.56128 25.1316303,-0.1056 23.5925087,0.38112\" id=\"path-5\"></path>\n                    <linearGradient x1=\"0%\" y1=\"50.0000139%\" x2=\"99.9992404%\" y2=\"50.0000139%\" id=\"linearGradient-7\">\n                        <stop stop-color=\"#BEE8F7\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M10.2134731,2.24448 L7.09876679,0.81984 C7.09876679,0.81984 6.53455013,1.8288 6.06053137,2.48928 C5.14799728,3.76224 0.391497276,5.00544 0.523915473,6.69888 C0.591084123,7.55232 2.44877708,8.18016 3.91785142,8.1216 C5.38980442,8.06496 6.66792788,7.8816 7.415419,7.35744 C8.34906324,6.70368 10.1683741,6.04704 10.4399274,5.49504 C10.9149057,4.53696 10.4005857,3.5088 10.4005857,3.5088 C10.4811881,2.55264 10.2134731,2.24448 10.2134731,2.24448\" id=\"path-8\"></path>\n                    <linearGradient x1=\"-0.00164637721%\" y1=\"49.9872454%\" x2=\"99.9957209%\" y2=\"49.9872454%\" id=\"linearGradient-10\">\n                        <stop stop-color=\"#61C4E4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M18.6728848,0.46848 C17.0973002,0.64224 12.5144791,1.94016 12.5144791,1.94016 C12.5144791,1.94016 10.9964676,5.96064 9.18291406,7.11456 C7.93837492,7.90752 6.08835838,7.10688 6.08835838,7.10688 C6.08835838,7.10688 2.19449576,11.03712 1.61108806,11.9856 C-0.644819044,15.66432 2.75391467,19.3776 4.74786403,22.98432 C5.90316482,25.07712 16.062903,38.03328 22.4554394,58.25184 C27.8586775,66.53856 45.3138906,62.66496 54.787549,51.62496 L50.0742289,39.096 L57.6047941,49.56288 C58.3187009,49.056 59.9508991,48.2592 60.5333473,47.88864 C46.3204609,10.94688 32.7600699,-1.07904 18.6728848,0.46848\" id=\"path-11\"></path>\n                    <linearGradient x1=\"-0.000581820276%\" y1=\"49.9998343%\" x2=\"100.000161%\" y2=\"49.9998343%\" id=\"linearGradient-13\">\n                        <stop stop-color=\"#D2F3FF\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M25.4818668,1.46496 C24.0291049,0.73248 15.805743,-0.22176 14.4047968,0.57984 C14.085266,0.76224 13.8760836,1.06368 13.8338633,1.4064 C13.5565527,3.60576 13.8943151,8.11584 14.2522281,12.89088 C14.610141,17.69088 14.9834068,22.65504 14.8106874,25.93056 C14.7809413,26.496 14.7809413,27.02496 14.8087683,27.5376 C13.6285192,29.12448 12.1124268,31.31424 10.5138129,33.62496 C7.02200262,38.67264 2.67619094,44.95392 0.503764878,46.73376 L4.5098951,50.90688 C9.84308594,46.36032 21.2147384,34.4352 23.0494022,29.37312 C25.0279987,24.14688 29.8209617,3.65952 25.4818668,1.46496\" id=\"path-14\"></path>\n                    <linearGradient x1=\"77.1387864%\" y1=\"87.3930854%\" x2=\"21.4061925%\" y2=\"10.6765207%\" id=\"linearGradient-16\">\n                        <stop stop-color=\"#9D99D4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#DFF6FF\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path id=\"img\" d=\"M124.424168,64.9776 L134.076303,62.712 L129.299652,42.33312 L119.649436,44.59584 C116.365849,37.10688 111.590158,30.57504 105.769514,25.27392 L110.992357,16.83744 L93.2089766,5.80128 L87.9861342,14.23776 C82.2153876,11.9856 76.0349122,10.65408 69.6797983,10.38144 C68.0380046,10.3056 66.3712625,10.3056 64.7035609,10.38144 L64.5049336,10.392 L62.2538243,0.7248 L41.8844513,5.50176 L44.1461157,15.17088 C42.1819124,16.02816 40.2800801,16.99968 38.4511737,18.0576 C33.3031764,21.03072 28.7261127,24.75072 24.8207354,29.05632 L16.3891507,23.83008 L5.36869427,41.6112 L13.7897239,46.83648 C10.929299,54.1776 9.5609776,62.15328 9.94575802,70.32672 L0.295542062,72.59136 L5.0712331,92.97312 L14.7224086,90.70752 C18.004077,98.1984 22.7682534,104.74368 28.6004113,110.0448 L23.377569,118.46688 L41.1494343,129.50304 L46.3857104,121.06752 C53.7234057,123.94176 61.6953649,125.31072 69.8649919,124.91136 L72.1285754,134.57952 L92.4873934,129.8016 L90.2257289,120.14688 C92.2024064,119.2752 94.1051983,118.31712 95.9321856,117.26016 C101.069628,114.28608 105.645732,110.55264 109.551109,106.26144 L117.983653,111.48672 L129.001231,93.69504 L120.58308,88.4688 C123.442546,81.12864 124.810867,73.152 124.424168,64.9776\" id=\"path-17\"></path>\n                    <linearGradient x1=\"0%\" y1=\"49.9999283%\" x2=\"97.2565932%\" y2=\"49.9999283%\" id=\"linearGradient-19\">\n                        <stop stop-color=\"#61C4E4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#005996\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M55.1099585,64.3248 C52.9250583,65.592 50.5146633,66.56736 47.9267511,67.16928 C33.7973458,70.48416 19.6535471,61.71264 16.3402135,47.5776 C13.635236,36.02304 18.9885775,24.47712 28.7453037,18.81888 C30.932123,17.55072 33.342518,16.57824 35.9304302,15.9744 C37.4206147,15.62688 38.9040823,15.40992 40.3865904,15.32544 C41.4209876,15.25632 42.4582635,15.25632 43.4773078,15.31776 C54.7856299,15.98304 64.797597,23.96736 67.5169678,35.57568 C70.2209858,47.1216 64.8686039,58.66752 55.1099585,64.3248 Z M77.483836,39.91008 L83.4771987,38.50368 L80.5102634,25.84416 L74.5169007,27.25056 C72.4778524,22.5984 69.5109172,18.54144 65.8953247,15.24864 L69.1395705,10.008 L58.0932062,3.15264 L54.8480008,8.39328 C51.2640735,6.99456 47.4239458,6.168 43.4773078,5.99712 C42.4582635,5.95008 41.4209876,5.95008 40.3865904,5.99712 L40.2628081,6.0048 L38.8647407,0 L26.2111265,2.96736 L27.6187895,8.97312 C26.39632,9.50496 25.2160709,10.1088 24.0799612,10.76544 C20.8808143,12.61248 18.0376613,14.92416 15.612873,17.59776 L10.3746778,14.352 L3.53019235,25.39584 L8.76071111,28.6416 C6.98458009,33.2016 6.13345733,38.15712 6.37334537,43.23456 L0.379982651,44.64096 L3.34499879,57.30144 L9.34028061,55.89312 C11.3793289,60.54624 14.3385878,64.61184 17.9608971,67.90368 L14.7166513,73.1376 L25.7553392,79.992 L29.0091805,74.75136 C33.5651341,76.53696 38.5183423,77.3856 43.5934136,77.1408 L44.9991575,83.14368 L57.6460549,80.17824 L56.2383919,74.18016 C57.4675782,73.63776 58.6487869,73.04352 59.783937,72.38688 C62.9754075,70.53888 65.8166414,68.22144 68.2443083,65.55456 L73.4805844,68.80032 L80.3260294,57.7488 L75.0955107,54.50112 C76.8726012,49.94112 77.7218049,44.98752 77.483836,39.91008 Z\" id=\"path-20\"></path>\n                    <linearGradient x1=\"0%\" y1=\"50.0010392%\" x2=\"99.9995381%\" y2=\"50.0010392%\" id=\"linearGradient-22\">\n                        <stop stop-color=\"#61C4E4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M87.0969173,45.6225702 L93.8534118,44.0318298 L90.5097564,29.7232545 L83.7546052,31.3119728 C81.456094,26.0537668 78.1131103,21.4675813 74.0386599,17.7455183 L77.6946496,11.8220323 L65.2462836,4.07323915 L61.590294,9.99672511 C57.5507713,8.41542128 53.2244386,7.48052426 48.7758588,7.28909617 C47.6266032,7.23584681 46.4598838,7.23584681 45.2924926,7.28909617 L45.1534535,7.29651064 L43.577677,0.508902128 L29.3191159,3.86293787 L30.902281,10.6518945 C29.5273387,11.2538145 28.1960561,11.9359455 26.9158216,12.6787404 C23.3122235,14.7662502 20.1082789,17.3781651 17.3745148,20.401246 L11.4724055,16.7317583 L3.75808599,29.2163745 L9.65280675,32.8851881 C7.65050928,38.0395915 6.69268432,43.639537 6.96203061,49.3783353 L0.206879443,50.9684017 L3.54986317,65.2789991 L10.305686,63.6882587 C12.6028539,68.9478128 15.9377774,73.5434349 20.0202879,77.2654979 L16.3642983,83.1788732 L28.804604,90.9276664 L32.4699973,85.0048545 C37.606384,87.0229379 43.1867554,87.9841226 48.9054943,87.7037209 L50.4900028,94.4920034 L64.7411754,91.1372936 L63.1580103,84.3584477 C64.5416845,83.746417 65.8736388,83.0737226 67.1525299,82.3316017 C70.7487394,80.2434179 73.9520124,77.6220664 76.6857764,74.6090962 L82.5885574,78.2779098 L90.3008619,65.7858791 L84.4081562,62.1163915 C86.409782,56.9626621 87.3676069,51.3620426 87.0969173,45.6225702\" id=\"path-23\"></path>\n                    <linearGradient x1=\"0%\" y1=\"49.9999283%\" x2=\"100%\" y2=\"49.9999283%\" id=\"linearGradient-25\">\n                        <stop stop-color=\"#77D6F4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#9CD1DA\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M1.85001654,10.10112 C13.8751241,28.75008 24.1701591,44.29248 24.1701591,44.29248 C24.7641218,43.00032 26.4394999,42.03648 28.1647747,42.40992 C28.1647747,42.40992 20.7215286,24.62496 13.2139926,6.6048 C8.26270355,-5.27712 -3.05617359,2.49696 1.85001654,10.10112\" id=\"path-26\"></path>\n                    <linearGradient x1=\"-0.00205389625%\" y1=\"49.9971908%\" x2=\"99.9986054%\" y2=\"49.9971908%\" id=\"linearGradient-28\">\n                        <stop stop-color=\"#E46161\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M1.78956476,10.46112 C13.8156318,29.11008 24.1097073,44.65248 24.1097073,44.65248 C24.7046296,43.36032 26.3800077,42.39648 28.1052824,42.76992 C28.1052824,42.76992 20.6620364,24.98496 13.1535408,6.9648 C8.20225176,-4.91712 -3.11566583,2.85696 1.78956476,10.46112\" id=\"path-29\"></path>\n                    <linearGradient x1=\"0.000200458762%\" y1=\"49.9971908%\" x2=\"99.9986054%\" y2=\"49.9971908%\" id=\"linearGradient-31\">\n                        <stop stop-color=\"#E46161\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M54.6829578,0.9456 C48.2597157,2.15712 15.7078687,21.77376 2.88345421,31.61568 C-2.57255931,35.80416 0.507603086,40.93632 6.97978233,40.18176 C23.7450775,38.232 50.24311,33.67392 60.3088121,24.62304 C76.3103037,10.23456 58.1104781,0.30144 54.6829578,0.9456\" id=\"path-32\"></path>\n                    <linearGradient x1=\"0.000433902491%\" y1=\"49.9976603%\" x2=\"100.000267%\" y2=\"49.9976603%\" id=\"linearGradient-34\">\n                        <stop stop-color=\"#E46161\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M9.22225389,2.0076 C8.76612263,2.6076 8.96778066,3.5148 8.55606218,4.1448 C8.03991364,4.9368 6.89598446,4.902 6.02213299,5.2584 C4.98743523,5.6796 4.2756304,6.7884 4.32364421,7.9044 C4.3524525,8.5956 4.64173575,9.2424 4.80738342,9.9132 C4.97423143,10.5828 4.99823834,11.3592 4.56731434,11.898 C3.91672712,12.7116 1.5352418,12.8544 0.518549223,16.752 C-0.408117444,20.3124 4.22401554,22.9956 5.41235751,24.2352 L11.4248877,1.1592 L10.7022798,1.3068 C10.1549223,1.422 9.55955095,1.5624 9.22225389,2.0076\" id=\"path-35\"></path>\n                    <linearGradient x1=\"0.00407440236%\" y1=\"49.99948%\" x2=\"100%\" y2=\"49.99948%\" id=\"linearGradient-37\">\n                        <stop stop-color=\"#8FCEE6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M7.58498273,5.1432 C7.53336788,4.3908 8.15274611,3.6972 8.04711572,2.952 C7.96909326,2.3988 7.51896373,1.9836 7.09764249,1.6188 L6.53948187,1.1352 L0.526951641,24.2148 C2.17022453,23.7108 7.52376511,23.6268 8.45043178,20.0688 C9.46592401,16.1688 7.45654577,14.8812 7.28489637,13.8552 C7.1720639,13.176 7.57057858,12.51 8.04351468,12.006 C8.51525043,11.502 9.08301382,11.076 9.44671848,10.4868 C10.032487,9.5376 9.95326425,8.2236 9.25466321,7.3512 C8.66529361,6.6132 7.64980138,6.0852 7.58498273,5.1432\" id=\"path-38\"></path>\n                    <linearGradient x1=\"0%\" y1=\"50.0025997%\" x2=\"99.9945913%\" y2=\"50.0025997%\" id=\"linearGradient-40\">\n                        <stop stop-color=\"#8FCEE6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M30.9121531,29.7019406 L23.799684,22.6289981 C24.3112052,21.9256565 24.6309059,21.1258235 24.7587862,20.2992518 L34.7857633,20.2725132 C34.6148687,23.6601783 33.3256029,27.004829 30.9121531,29.7019406 Z M20.3562167,34.7811131 L20.3283155,24.7564611 C21.1572123,24.6250932 21.9593704,24.3007422 22.6534116,23.786896 L29.7623931,30.8551882 C27.0815572,33.2849137 23.7438817,34.5927803 20.3562167,34.7811131 Z M20.2690255,4.21423674 C23.6590157,4.38513131 27.0036665,5.67439711 29.6996155,8.0878469 L22.6313232,15.1956658 C21.9361195,14.6887948 21.1327988,14.366769 20.2992518,14.2365636 L20.2690255,4.21423674 Z M30.8528631,9.23760694 C33.2825886,11.9184428 34.5927803,15.2537932 34.7811131,18.6437833 L24.754136,18.6716845 C24.633231,17.9160283 24.3565445,17.1801353 23.9066384,16.5163204 L23.7845709,16.3442633 L30.8528631,9.23760694 Z M9.29805944,30.9121531 L16.3686768,23.8031717 C17.0789937,24.3205056 17.8811518,24.6367186 18.6984231,24.7611113 L18.7274868,34.7857633 C15.3374966,34.6160312 11.995171,33.3256029 9.29805944,30.9121531 Z M8.14481176,29.7635556 C5.7150863,27.0815572 4.40721972,23.7438817 4.21888693,20.3562167 L14.2481891,20.329478 C14.379557,21.1641876 14.7085581,21.9616955 15.2154291,22.6522491 L8.14481176,29.7635556 Z M8.0878469,9.30038454 L15.1991534,16.3710019 C14.9131666,16.7639431 14.6794944,17.1929234 14.5085999,17.6544549 C14.3818821,17.9974066 14.2958536,18.3496587 14.2412138,18.7007482 L4.21423674,18.7286494 C4.38396876,15.3409843 5.67439711,11.9963335 8.0878469,9.30038454 Z M18.6414583,4.21888693 L18.670522,14.2412138 C17.921841,14.3597937 17.1859481,14.6388053 16.5186455,15.0910365 L16.3454258,15.2177542 L9.23644439,8.14713685 C11.9184428,5.71741139 15.2537932,4.40954482 18.6414583,4.21888693 Z M37.3631323,18.1648135 L38.902346,17.5114615 C38.8500313,17.0045906 38.7744657,16.4988822 38.6837869,15.9966614 L37.0236683,15.7920529 C36.9632158,15.4956032 36.8923004,15.1979909 36.8132471,14.9050288 L38.2071422,13.978478 C38.0641488,13.4925329 37.8955793,13.011238 37.7165469,12.5322682 L36.0506156,12.6403851 C35.9343607,12.3590485 35.8099681,12.080037 35.6751125,11.8033505 L36.8748621,10.6361523 C36.6423525,10.1862462 36.3935672,9.74099025 36.1250186,9.30270963 L34.5055892,9.71890184 C34.3428324,9.46197872 34.1672877,9.21203088 33.9882553,8.96440814 L34.9461949,7.59841417 C34.6357946,7.19849763 34.3126062,6.80323129 33.9661669,6.42191552 L32.4490416,7.1252571 C32.3444123,7.01714013 32.2374579,6.90786061 32.131666,6.80090619 C32.0223865,6.69395177 31.913107,6.58699735 31.8015024,6.48353057 L32.4990312,4.96175515 C32.1153903,4.61647837 31.7177989,4.29677766 31.3155573,3.98753987 L29.955376,4.95477986 C29.7089158,4.77807255 29.4566429,4.60485289 29.1997198,4.44209616 L29.6042865,2.81801651 C29.1660059,2.55528065 28.72075,2.30765791 28.2685188,2.0774734 L27.1082958,3.28187319 C26.8316094,3.15166781 26.5502728,3.02727517 26.2689361,2.91334546 L26.3665902,1.24741408 C25.8887829,1.06721913 25.4051629,0.904462396 24.9168927,0.76379408 L23.9973172,2.1623394 C23.7043551,2.08444868 23.4102304,2.0170209 23.110293,1.95773094 L22.8987093,0.297612305 C22.395326,0.211583748 21.888455,0.137180672 21.381584,0.0895162012 L20.7352073,1.63338003 C20.4329448,1.61012907 20.1260321,1.5961785 19.8226071,1.5938534 L19.3110859,0 C18.8007273,0.00465019227 18.2915313,0.0325513459 17.7811727,0.0755656243 L17.4265955,1.71010821 C17.124333,1.7438221 16.8232331,1.78567383 16.5232957,1.83682595 L15.7281128,0.363877545 C15.2282171,0.461531583 14.7341342,0.585924226 14.2412138,0.720779801 L14.1935493,2.39136137 C13.9029123,2.47971503 13.6169255,2.57736906 13.3286136,2.68432349 L12.2741825,1.3834322 C11.8045131,1.56943989 11.3394938,1.78102364 10.8802874,2.00539542 L11.1418607,3.65621367 C10.8733121,3.79688199 10.605926,3.94452559 10.3420276,4.10379468 L9.07368766,3.02029988 C8.64354488,3.29233613 8.22153993,3.58064805 7.81348556,3.88756074 L8.37615882,5.46165082 C8.13551137,5.64998361 7.90416431,5.84761678 7.67397979,6.05106269 L6.2254449,5.21867827 C6.03711211,5.39306048 5.85110442,5.56744269 5.67207202,5.74996274 C5.48955197,5.93132024 5.31516976,6.11965302 5.14543774,6.30566071 L5.98247235,7.74954541 C5.78018899,7.98205503 5.58604346,8.21572719 5.39887322,8.45637464 L3.8212955,7.90183921 C3.5167079,8.31338123 3.23072108,8.73538617 2.96333502,9.16436641 L4.05031747,10.4292187 C3.89337348,10.6954422 3.74805497,10.9628283 3.60506156,11.2313769 L1.9565684,10.9791039 C1.73452172,11.439473 1.52758816,11.9056548 1.34158047,12.3776493 L2.64944704,13.4239425 C2.54249262,13.7099294 2.44716368,13.9982413 2.36113512,14.2888783 L0.692878648,14.3458431 C0.555697976,14.8387635 0.435955525,15.3363341 0.340626584,15.8350672 L1.82055027,16.6232748 C1.77056071,16.9232122 1.72987152,17.2254747 1.69848273,17.5277372 L0.0651026917,17.8904522 C0.0244135094,18.3996483 0.00232509613,18.9100069 0,19.4203655 L1.5938534,19.9202611 C1.60082869,20.2248487 1.61477926,20.5317614 1.63919277,20.8351865 L0.0999791338,21.4920261 C0.149968701,21.9977345 0.226696873,22.5022804 0.315050526,23.0056637 L1.97749426,23.2079471 C2.03678421,23.5078845 2.1065371,23.8031717 2.18675291,24.0984589 L0.79402033,25.0226846 C0.935851194,25.5109548 1.10325812,25.9922497 1.28461561,26.4688944 L2.94938445,26.36194 C3.06563925,26.6432766 3.1900319,26.9234507 3.32372492,27.2001371 L2.12746296,28.3673354 C2.35881003,28.8160789 2.60875786,29.2613348 2.87381882,29.6972904 L4.49324828,29.2845858 C4.65716756,29.5415089 4.83154977,29.7902942 5.01290726,30.0355919 L4.05264256,31.4027484 C4.36420544,31.80499 4.68623126,32.2002564 5.03383313,32.5815721 L6.55095836,31.8747429 C6.65675023,31.9863475 6.76137956,32.095627 6.87065908,32.2025815 C6.9776135,32.3106984 7.08689302,32.4153277 7.19733508,32.5199571 L6.50329389,34.0417325 C6.88693475,34.3846842 7.28220109,34.70671 7.68328017,35.0136227 L9.04346141,34.0463827 C9.29108415,34.2254151 9.54335708,34.3974722 9.8002802,34.5613915 L9.39571348,36.1819835 C9.8339941,36.448207 10.2815751,36.6958297 10.7326438,36.9248517 L11.8928667,35.7216145 C12.1683906,35.8529824 12.4497272,35.9762125 12.7310639,36.0889796 L12.6334098,37.7560736 C13.1123796,37.9327809 13.5936745,38.0990252 14.0819447,38.2396936 L15.0015203,36.8411482 C15.2944824,36.9178764 15.5920947,36.9864667 15.8920321,37.0457567 L16.1024533,38.7047128 C16.6069991,38.7919039 17.111545,38.866307 17.6172534,38.9139714 L18.2647927,37.3701076 C18.5670552,37.392196 18.8728053,37.4061466 19.179718,37.4084717 L19.6900766,39 C20.1992727,38.9953498 20.7096313,38.9709363 21.2188273,38.9255969 L21.5722419,37.2933794 C21.8745044,37.258503 22.1767669,37.2154887 22.4767043,37.1654992 L23.2707247,38.637285 C23.7729454,38.5419561 24.2658658,38.4164009 24.7587862,38.2827078 L24.8064507,36.6121263 C25.0970877,36.5226101 25.3853996,36.424956 25.6713864,36.3168391 L26.724655,37.6200554 C27.1943244,37.4340478 27.6628313,37.222464 28.1185501,36.9980922 L27.8581393,35.347274 C28.1278505,35.2066057 28.394074,35.0589621 28.6568098,34.899693 L29.9263123,35.9831878 C30.3552926,35.709989 30.7772975,35.4216771 31.1865144,35.1147644 L30.6261663,33.5395117 C30.8644886,33.353504 31.0958357,33.1558709 31.3271828,32.9512624 L32.7757176,33.7824843 C32.9617253,33.6104272 33.1488956,33.4348824 33.3302531,33.2535249 C33.5092855,33.0721674 33.6836677,32.8838346 33.8568874,32.6966644 L33.0163651,31.2527797 C33.2186485,31.0214326 33.4139565,30.7877605 33.5999642,30.547113 L35.1810296,31.1004859 C35.4844546,30.6901064 35.7704415,30.2681015 36.036665,29.8379587 L34.94852,28.5742689 C35.105464,28.3080454 35.2507825,28.0406594 35.3937759,27.7721108 L37.0422691,28.0220586 C37.2666408,27.5628521 37.4712493,27.0978329 37.657257,26.6258384 L36.3493904,25.5783826 C36.4563448,25.2923957 36.5516738,25.0040838 36.6377023,24.7134468 L38.3094464,24.656482 C38.4431395,24.162399 38.5640445,23.6671535 38.6593734,23.1672579 L37.1806123,22.3790503 C37.2306018,22.0802754 37.2689659,21.7780129 37.3015173,21.4757504 L38.9337348,21.1107103 C38.9744239,20.6038394 38.9976749,20.0934808 39,19.5819596 L37.4084717,19.0797389 C37.4014964,18.7763138 37.3852207,18.4717262 37.3631323,18.1648135 Z\" id=\"path-41\"></path>\n                    <linearGradient x1=\"0.000298089248%\" y1=\"50.0011924%\" x2=\"100%\" y2=\"50.0011924%\" id=\"linearGradient-43\">\n                        <stop stop-color=\"#61C4E4\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#4B609D\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-44\">\n                        <stop stop-color=\"#F756D6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#B4097B\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M7.02097381,0.915733333 C6.52255068,0.0952285714 6.12553417,0.00288571429 6.12553417,0.00288571429 L2.78102887,0.694495238 C2.78102887,0.694495238 2.92165881,1.84589524 2.92931214,2.65966667 C2.94366213,4.22949524 -0.152109938,8.05114286 0.951882946,9.34009524 C1.50866272,9.99226667 3.37224863,9.39877143 4.52120483,8.4830381 C5.67111769,7.56634286 6.59143065,6.66119048 6.88417053,5.79259048 C7.24961705,4.71237143 8.32777994,3.10502857 8.22158999,2.49806667 C8.03886673,1.44189524 7.02097381,0.915733333 7.02097381,0.915733333\" id=\"path-45\"></path>\n                    <linearGradient x1=\"-0.00277767521%\" y1=\"50.0010606%\" x2=\"100.004414%\" y2=\"50.0010606%\" id=\"linearGradient-47\">\n                        <stop stop-color=\"#8FCEE6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <path d=\"M10.3836558,1.79491429 L7.39981365,0.126971429 C7.39981365,0.126971429 6.75980391,1.0908 6.23842079,1.71219048 C5.2310512,2.91264762 0.405626501,3.78124762 0.405626501,5.48285714 C0.405626501,6.3418381 2.20320244,7.11424762 3.66881517,7.1719619 C5.13538458,7.2306381 6.33887075,6.96707619 7.20465373,6.68139048 C8.06852338,6.39762857 10.0430826,5.59059048 10.3559124,5.06058095 C10.9021689,4.1400381 10.4716691,3.07232381 10.4716691,3.07232381 C10.6256923,2.12388571 10.3836558,1.79491429 10.3836558,1.79491429\" id=\"path-48\"></path>\n                    <linearGradient x1=\"0%\" y1=\"50.0096661%\" x2=\"99.994851%\" y2=\"50.0096661%\" id=\"linearGradient-50\">\n                        <stop stop-color=\"#8FCEE6\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#8380B0\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-51\">\n                        <stop stop-color=\"#E85CCC\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#B4097B\" offset=\"100%\"></stop>\n                    </linearGradient>\n                    <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-52\">\n                        <stop stop-color=\"#EC5CCF\" offset=\"0%\"></stop>\n                        <stop stop-color=\"#B4097B\" offset=\"100%\"></stop>\n                    </linearGradient>\n                </defs>\n                <g id=\"Guidline\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"C25\" transform=\"translate(-93.000000, -321.000000)\">\n                        <g id=\"Group-5\" transform=\"translate(77.000000, 308.000000)\">\n                            <g id=\"Group-31\" transform=\"translate(230.000000, 171.000000)\">\n                                <polyline id=\"Fill-385\" fill=\"#EAEAE4\" points=\"94.4784641 118.77216 92.1880131 118.77216 70.0473068 7.68 72.3367982 7.68 94.4784641 118.77216\"></polyline>\n                                <polyline id=\"Fill-386\" fill=\"#EAEAE4\" points=\"64.7323475 118.77216 62.4418965 118.77216 40.3011902 7.68 42.5916412 7.68 64.7323475 118.77216\"></polyline>\n                                <polygon id=\"Fill-387\" fill=\"#EAEAE4\" points=\"61.4113375 108.43872 89.6375235 108.43872 89.6375235 106.56 61.4113375 106.56\"></polygon>\n                                <polygon id=\"Fill-388\" fill=\"#EAEAE4\" points=\"58.532681 90.20064 86.758867 90.20064 86.758867 88.32 58.532681 88.32\"></polygon>\n                                <polygon id=\"Fill-389\" fill=\"#EAEAE4\" points=\"54.6944724 71.96064 82.9225775 71.96064 82.9225775 70.08 54.6944724 70.08\"></polygon>\n                                <polygon id=\"Fill-390\" fill=\"#EAEAE4\" points=\"50.8562639 54.67968 79.0824498 54.67968 79.0824498 52.8 50.8562639 52.8\"></polygon>\n                                <polygon id=\"Fill-391\" fill=\"#EAEAE4\" points=\"47.9776074 36.44064 76.204753 36.44064 76.204753 34.56 47.9776074 34.56\"></polygon>\n                                <polygon id=\"Fill-392\" fill=\"#EAEAE4\" points=\"44.1393988 18.19872 72.3655848 18.19872 72.3655848 16.32 44.1393988 16.32\"></polygon>\n                                <polygon id=\"Fill-393\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-1)'\" points=\"61.4113375 8.27424 86.6283679 8.27424 86.6283679 8.52651283e-14 61.4113375 8.52651283e-14\"></polygon>\n                                <polygon id=\"Fill-395\" fill=\"#EAEAE4\" points=\"14.3932822 8.27424 62.2375119 8.27424 62.2375119 5.68434189e-14 14.3932822 5.68434189e-14\"></polygon>\n                                <polyline id=\"Fill-396\" fill=\"#FFFFFE\" points=\"-1.15463195e-13 118.77216 2.29141053 118.77216 24.4330763 7.68 22.1416658 7.68 -1.15463195e-13 118.77216\"></polyline>\n                                <polyline id=\"Fill-397\" fill=\"#FFFFFE\" points=\"28.7865644 118.77216 31.0770154 118.77216 53.2177217 7.68 50.9272707 7.68 28.7865644 118.77216\"></polyline>\n                                <polygon id=\"Fill-398\" fill=\"#FFFFFE\" points=\"3.83820859 108.43872 32.0643946 108.43872 32.0643946 106.56 3.83820859 106.56\"></polygon>\n                                <polygon id=\"Fill-399\" fill=\"#FFFFFE\" points=\"7.67641719 90.20064 35.9035627 90.20064 35.9035627 88.32 7.67641719 88.32\"></polygon>\n                                <polygon id=\"Fill-400\" fill=\"#FFFFFE\" points=\"10.5550736 71.96064 38.7822192 71.96064 38.7822192 70.08 10.5550736 70.08\"></polygon>\n                                <polygon id=\"Fill-401\" fill=\"#FFFFFE\" points=\"14.3932822 54.67968 42.6194682 54.67968 42.6194682 52.8 14.3932822 52.8\"></polygon>\n                                <polygon id=\"Fill-402\" fill=\"#FFFFFE\" points=\"18.2314908 36.44064 46.4586364 36.44064 46.4586364 34.56 18.2314908 34.56\"></polygon>\n                                <polygon id=\"Fill-403\" fill=\"#FFFFFE\" points=\"21.1101473 18.19872 49.3363333 18.19872 49.3363333 16.32 21.1101473 16.32\"></polygon>\n                            </g>\n                            <g id=\"person-male-top-ani\">\n                                <g id=\"person-male-top\" transform=\"translate(199.000000, 0.000000)\">\n                                        <g id=\"Group-444\" transform=\"translate(54.694472, 165.120000)\">\n                                            <mask id=\"mask-3\" fill=\"white\">\n                                                <use xlink:href=\"#path-2\"></use>\n                                            </mask>\n                                            <g id=\"Clip-443\"></g>\n                                            <path d=\"M10.5867389,2.03328 L7.5938957,0.36864 C7.5938957,0.36864 6.95291487,1.33056 6.42803984,1.95168 C5.41859098,3.1488 0.578609945,4.01568 0.578609945,5.71296 C0.578609945,6.5712 2.38160843,7.34112 3.85068277,7.39968 C5.32167621,7.45824 6.52879282,7.1952 7.39718751,6.91104 C8.26462265,6.62688 10.2441787,5.82144 10.5579523,5.29248 C11.1058566,4.37376 10.6750176,3.30816 10.6750176,3.30816 C10.8304651,2.3616 10.5867389,2.03328 10.5867389,2.03328\" id=\"Fill-442\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-4)'\" mask=\"'url('+ getUrl() + '#mask-3)'\"></path>\n                                        </g>\n                                        <path d=\"M60.7530847,165.12 C60.7530847,165.12 61.2127102,165.84192 60.4517853,166.79904 C60.4517853,166.79904 61.0591818,167.84256 62.1904938,168.46752 C62.8314747,168.8208 64.6987631,168.15648 64.6987631,168.15648 C64.8542106,167.20896 64.7716891,165.84 64.7716891,165.84 L60.7530847,165.12\" id=\"Fill-445\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M53.8991432,70.08 C53.6122371,72.144 46.2409575,99.45888 48.3596487,125.1792 C50.1827978,147.31968 61.5247042,165.64512 61.5247042,165.64512 C61.5640458,165.80448 64.4743675,167.38656 65.938644,165.77184 C65.938644,161.90496 60.6898938,125.712 60.8069591,125.30688 C64.3534639,112.99392 72.5595539,91.65696 73.9643382,90.54912 L73.9643382,71.72256 C66.7552229,72.19584 56.2903472,71.12832 53.8991432,70.08\" id=\"Fill-446\" fill=\"#252F67\"></path>\n                                        <path d=\"M4.70056272,86.5296 C4.28411709,86.4672 3.84752086,86.28 3.83888489,86.84832 C3.80146236,87.2112 5.32810983,87.70464 5.68314412,87.624 C6.47669375,87.17568 6.20993825,86.71296 7.0150025,86.4 C6.2771069,86.57088 5.46052802,86.59104 4.70056272,86.5296\" id=\"Fill-447\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M7.37171671,86.4000702 C6.56857156,86.7130302 5.74335671,87.1181502 4.94980709,87.5664702 C4.00656732,88.0896702 2.03372811,89.4941502 1.8955526,89.5920702 C1.51173174,89.9011902 0.446628854,90.5463102 0.22593186,90.8659902 C0.0848776943,91.0704702 -0.0667315451,91.7847102 0.031142774,92.0746302 C0.157803658,92.4595902 0.606874063,92.4538302 0.606874063,92.4538302 C0.673083161,92.9760702 1.93009648,92.5642302 1.9176223,92.6947902 C1.86772559,93.2304702 2.58547059,93.4627902 4.10348209,92.3271102 C4.19463955,92.2599102 8.47520168,90.2083902 9.78882857,89.4394302 C9.38293801,88.5917502 7.41873476,86.3856702 7.37171671,86.4000702\" id=\"Fill-448\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M27.4825331,68.3280188 C27.1716382,68.4268988 26.902004,68.5603388 26.6995385,68.7091388 C22.9937481,71.4182588 11.0262137,83.8272188 6.71686504,86.0352188 C7.71288017,87.2563388 8.45941174,88.3401788 8.86146409,89.2588988 C15.8748307,85.4851388 32.2783747,74.1177788 31.622041,71.0035388 C31.0213614,68.1504188 28.8566118,67.8912188 27.4825331,68.3280188\" id=\"Fill-449\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M30.5388005,44.2828433 C29.1320971,48.2879633 28.0957808,61.9506833 26.3493958,68.3961233 C24.2067159,76.3007633 30.484106,74.9730833 31.9061623,72.7890833 C35.6484157,67.0358033 43.1837787,49.4754833 40.4049157,47.2252433 C39.1987587,46.2498833 30.7940414,43.5561233 30.5388005,44.2828433\" id=\"Fill-450\" fill=\"#F5C7B5\"></path>\n                                        <g id=\"Group-453\" transform=\"translate(6.716865, 43.200000)\">\n                                            <mask id=\"mask-6\" fill=\"white\">\n                                                <use xlink:href=\"#path-5\"></use>\n                                            </mask>\n                                            <g id=\"Clip-452\"></g>\n                                            <path d=\"M23.5925087,0.38112 C23.2422721,0.4944 22.9745571,0.744 22.8613299,1.06944 C22.126313,3.16128 21.5074019,7.63968 20.8510682,12.38112 C20.1908963,17.14944 18.3907765,26.3184 18.3111336,26.81952 C16.8219087,28.12224 2.78078213,41.28864 0.282108332,42.56928 L3.31909088,47.49312 C9.49380895,44.17056 23.1242472,34.90752 25.9731575,30.36192 C29.0149379,25.65888 38.0145775,6.64416 34.2358611,3.58368 C32.9702118,2.56128 25.1316303,-0.1056 23.5925087,0.38112\" id=\"Fill-451\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-7)'\" mask=\"'url('+ getUrl() + '#mask-6)'\" ></path>\n                                        </g>\n                                        <g id=\"Group-456\" transform=\"translate(77.723724, 165.120000)\">\n                                            <mask id=\"mask-9\" fill=\"white\">\n                                                <use xlink:href=\"#path-8\"></use>\n                                            </mask>\n                                            <g id=\"Clip-455\"></g>\n                                            <path d=\"M10.2134731,2.24448 L7.09876679,0.81984 C7.09876679,0.81984 6.53455013,1.8288 6.06053137,2.48928 C5.14799728,3.76224 0.391497276,5.00544 0.523915473,6.69888 C0.591084123,7.55232 2.44877708,8.18016 3.91785142,8.1216 C5.38980442,8.06496 6.66792788,7.8816 7.415419,7.35744 C8.34906324,6.70368 10.1683741,6.04704 10.4399274,5.49504 C10.9149057,4.53696 10.4005857,3.5088 10.4005857,3.5088 C10.4811881,2.55264 10.2134731,2.24448 10.2134731,2.24448\" id=\"Fill-454\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-10)'\" mask=\"'url('+ getUrl() + '#mask-9)'\" ></path>\n                                        </g>\n                                        <path d=\"M83.8802106,165.12 C83.8802106,165.12 84.1651976,165.90528 83.4810369,166.91808 C83.4810369,166.91808 84.1671167,167.91168 85.3454467,168.44544 C86.013295,168.74592 87.8210913,167.9376 87.8210913,167.9376 C87.9016936,166.98144 87.8556351,165.55104 87.8556351,165.55104 L83.8802106,165.12\" id=\"Fill-457\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M83.7448534,67.2 C76.5942708,68.2368 68.5810508,72.07872 66.1159613,71.22144 C65.9912195,73.30656 63.7938451,100.6704 66.9191065,126.3456 C68.5522642,139.76064 83.3466392,158.48064 83.3466392,165.88512 C83.3994146,166.04064 86.423923,167.3904 87.7567409,165.6672 C87.7567409,147.44064 79.304046,125.28192 79.304046,125.28192 C80.8470059,109.20192 92.7003536,84.25536 83.7448534,67.2\" id=\"Fill-458\" fill=\"#252F67\"></path>\n                                        <path d=\"M35.5917083,24 C35.3249528,24.56352 32.1190891,29.57472 30.7056687,30.0816 C30.9110129,30.43776 33.8577975,33.79584 34.1226339,36.312 C35.5207014,38.03232 40.8356608,35.18208 40.5487547,31.14528 C39.4414315,30.54816 36.2854645,25.90656 35.5917083,24\" id=\"Fill-459\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M34.6083457,23.449308 C33.4031482,20.794908 30.6348403,19.384668 27.9548111,20.601948 C25.4609351,21.735708 23.4334014,23.550108 24.1261981,26.111388 C24.3747221,27.028188 28.6850303,34.185948 33.2045209,33.184668 C35.1140297,32.761308 36.7702167,28.208988 35.8615208,26.206428 L34.6083457,23.449308\" id=\"Fill-460\" fill=\"#F5C7B5\"></path>\n                                        <g id=\"Group-463\" transform=\"translate(28.786564, 29.760000)\">\n                                            <mask id=\"mask-12\" fill=\"white\">\n                                                <use xlink:href=\"#path-11\"></use>\n                                            </mask>\n                                            <g id=\"Clip-462\"></g>\n                                            <path d=\"M18.6728848,0.46848 C17.0973002,0.64224 12.5144791,1.94016 12.5144791,1.94016 C12.5144791,1.94016 10.9964676,5.96064 9.18291406,7.11456 C7.93837492,7.90752 6.08835838,7.10688 6.08835838,7.10688 C6.08835838,7.10688 2.19449576,11.03712 1.61108806,11.9856 C-0.644819044,15.66432 2.75391467,19.3776 4.74786403,22.98432 C5.90316482,25.07712 16.062903,38.03328 22.4554394,58.25184 C27.8586775,66.53856 45.3138906,62.66496 54.787549,51.62496 L50.0742289,39.096 L57.6047941,49.56288 C58.3187009,49.056 59.9508991,48.2592 60.5333473,47.88864 C46.3204609,10.94688 32.7600699,-1.07904 18.6728848,0.46848\" id=\"Fill-461\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-13)'\" mask=\"'url('+ getUrl() + '#mask-12)'\" ></path>\n                                        </g>\n                                        <path d=\"M40.5746626,31.23168 C40.5746626,31.23168 39.0566511,35.25216 37.2430975,36.40608 C35.9985584,37.19904 34.1485419,36.3984 34.1485419,36.3984 C34.1485419,36.3984 30.5060819,40.07328 29.7461166,41.1696 C32.0759092,44.83296 38.5557649,46.50624 38.5557649,46.50624 C38.5557649,46.50624 42.8334483,35.16096 46.7330683,29.76 C46.7330683,29.76 45.2409647,29.81376 43.637553,30.29952 C42.9102125,30.52032 40.5746626,31.23168 40.5746626,31.23168\" id=\"Fill-464\" fill=\"#433975\"></path>\n                                        <path d=\"M31.2311138,13.7948986 C24.2302213,11.6310586 17.3799785,19.8505786 19.6253305,25.2188986 C20.1194999,26.4044986 22.5356522,28.7209786 32.3892932,21.3030586 C34.5866676,22.5788986 37.0469593,26.5350586 37.0469593,26.5350586 C38.9612659,22.1392186 36.5863743,15.4489786 31.2311138,13.7948986\" id=\"Fill-465\" fill=\"#9B9B9B\"></path>\n                                        <path d=\"M34.6647809,22.1160133 C34.3874703,22.1966533 33.9028965,22.4472133 33.5843252,22.8216133 C34.0957665,23.7172933 35.1263255,25.0891333 35.6339286,25.7678533 C36.2624352,25.3828933 36.7863507,24.0907333 36.5858043,23.4024133 C36.3737433,22.6747333 35.3940405,21.9028933 34.6647809,22.1160133\" id=\"Fill-466\" fill=\"#F5C7B5\"></path>\n                                        <g id=\"male-right-hand-ani\">\n                                            <g id=\"male-right-hand\" transform=\"translate(83.478900, 30.560347) rotate(-128.000000) translate(-83.478900, -30.560347) translate(67.166513, 3.200347)\">\n                                                <path d=\"M1.93576999,48.14688 C1.97607118,48.51168 3.57276595,48.67104 3.90189234,48.5184 C4.58317437,47.91264 4.22526142,47.5152 4.94588508,47.04 C4.25980529,47.36256 3.46625567,47.55456 2.71108813,47.65344 C2.29176384,47.68032 1.82446194,47.59008 1.93576999,48.14688\" id=\"Fill-467\" fill=\"#F5C7B5\"></path>\n                                                <path d=\"M6.10851221,47.040208 C5.38980765,47.516368 4.66726488,48.086608 3.98598286,48.692368 C3.17420174,49.402768 1.54200354,51.189328 1.42781683,51.316048 C1.11692194,51.698128 0.213023813,52.554448 0.0642932299,52.914448 C-0.0307024328,53.142928 -0.0287833285,53.872528 0.126664119,54.136528 C0.332967831,54.485008 0.769564059,54.384208 0.769564059,54.384208 C0.94420255,54.881488 2.08702916,54.214288 2.10238199,54.343888 C2.16571243,54.879568 2.91800132,54.954448 4.16254045,53.524048 C4.23738552,53.439568 7.99019397,50.531728 9.11191044,49.502608 C8.53617915,48.759568 6.15169206,47.018128 6.10851221,47.040208\" id=\"Fill-468\" fill=\"#F5C7B5\"></path>\n                                                <g id=\"Group-471\" transform=\"translate(4.797761, 0.000000)\">\n                                                    <mask id=\"mask-15\" fill=\"white\">\n                                                        <use xlink:href=\"#path-14\"></use>\n                                                    </mask>\n                                                    <g id=\"Clip-470\"></g>\n                                                    <path d=\"M25.4818668,1.46496 C24.0291049,0.73248 15.805743,-0.22176 14.4047968,0.57984 C14.085266,0.76224 13.8760836,1.06368 13.8338633,1.4064 C13.5565527,3.60576 13.8943151,8.11584 14.2522281,12.89088 C14.610141,17.69088 14.9834068,22.65504 14.8106874,25.93056 C14.7809413,26.496 14.7809413,27.02496 14.8087683,27.5376 C13.6285192,29.12448 12.1124268,31.31424 10.5138129,33.62496 C7.02200262,38.67264 2.67619094,44.95392 0.503764878,46.73376 L4.5098951,50.90688 C9.84308594,46.36032 21.2147384,34.4352 23.0494022,29.37312 C25.0279987,24.14688 29.8209617,3.65952 25.4818668,1.46496\" id=\"Fill-469\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-16)'\" mask=\"'url('+ getUrl() + '#mask-15)'\" ></path>\n                                                </g>\n                                            </g>\n                                        </g>\n                                        \n                                </g>\n                            </g>\n                        \n                                <g id=\"loading-circle-lg\" transform=\"translate(82.670279, 248.670279) rotate(-15.000000) translate(-82.670279, -248.670279) translate(15.170279, 181.170279)\">\n                                    <mask id=\"mask-18\" fill=\"white\">\n                                        <use xlink:href=\"#path-17\"></use>\n                                    </mask>\n                                    <g id=\"Clip-383\"></g>\n                                    <g id=\"loading-circle-lg-ani\">\n                                        <path id=\"loading-circle-01\" d=\"M124.424168,64.9776 L134.076303,62.712 L129.299652,42.33312 L119.649436,44.59584 C116.365849,37.10688 111.590158,30.57504 105.769514,25.27392 L110.992357,16.83744 L93.2089766,5.80128 L87.9861342,14.23776 C82.2153876,11.9856 76.0349122,10.65408 69.6797983,10.38144 C68.0380046,10.3056 66.3712625,10.3056 64.7035609,10.38144 L64.5049336,10.392 L62.2538243,0.7248 L41.8844513,5.50176 L44.1461157,15.17088 C42.1819124,16.02816 40.2800801,16.99968 38.4511737,18.0576 C33.3031764,21.03072 28.7261127,24.75072 24.8207354,29.05632 L16.3891507,23.83008 L5.36869427,41.6112 L13.7897239,46.83648 C10.929299,54.1776 9.5609776,62.15328 9.94575802,70.32672 L0.295542062,72.59136 L5.0712331,92.97312 L14.7224086,90.70752 C18.004077,98.1984 22.7682534,104.74368 28.6004113,110.0448 L23.377569,118.46688 L41.1494343,129.50304 L46.3857104,121.06752 C53.7234057,123.94176 61.6953649,125.31072 69.8649919,124.91136 L72.1285754,134.57952 L92.4873934,129.8016 L90.2257289,120.14688 C92.2024064,119.2752 94.1051983,118.31712 95.9321856,117.26016 C101.069628,114.28608 105.645732,110.55264 109.551109,106.26144 L117.983653,111.48672 L129.001231,93.69504 L120.58308,88.4688 C123.442546,81.12864 124.810867,73.152 124.424168,64.9776\" id=\"Fill-382\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-19)'\" mask=\"'url('+ getUrl() + '#mask-18)'\" ></path>\n                                    </g>\n                                </g>\n                            \n                            \n                            <g id=\"loading-circle-right\" transform=\"translate(98.000000, 245.000000)\">\n                                <mask id=\"mask-21\" fill=\"white\">\n                                    <use xlink:href=\"#path-20\"></use>\n                                </mask>\n                                <g id=\"Clip-417\"></g>\n                                <!-- ani -->\n                                <g id=\"loading-circle-right-ani\">\n                                    <path d=\"M55.1099585,64.3248 C52.9250583,65.592 50.5146633,66.56736 47.9267511,67.16928 C33.7973458,70.48416 19.6535471,61.71264 16.3402135,47.5776 C13.635236,36.02304 18.9885775,24.47712 28.7453037,18.81888 C30.932123,17.55072 33.342518,16.57824 35.9304302,15.9744 C37.4206147,15.62688 38.9040823,15.40992 40.3865904,15.32544 C41.4209876,15.25632 42.4582635,15.25632 43.4773078,15.31776 C54.7856299,15.98304 64.797597,23.96736 67.5169678,35.57568 C70.2209858,47.1216 64.8686039,58.66752 55.1099585,64.3248 Z M77.483836,39.91008 L83.4771987,38.50368 L80.5102634,25.84416 L74.5169007,27.25056 C72.4778524,22.5984 69.5109172,18.54144 65.8953247,15.24864 L69.1395705,10.008 L58.0932062,3.15264 L54.8480008,8.39328 C51.2640735,6.99456 47.4239458,6.168 43.4773078,5.99712 C42.4582635,5.95008 41.4209876,5.95008 40.3865904,5.99712 L40.2628081,6.0048 L38.8647407,0 L26.2111265,2.96736 L27.6187895,8.97312 C26.39632,9.50496 25.2160709,10.1088 24.0799612,10.76544 C20.8808143,12.61248 18.0376613,14.92416 15.612873,17.59776 L10.3746778,14.352 L3.53019235,25.39584 L8.76071111,28.6416 C6.98458009,33.2016 6.13345733,38.15712 6.37334537,43.23456 L0.379982651,44.64096 L3.34499879,57.30144 L9.34028061,55.89312 C11.3793289,60.54624 14.3385878,64.61184 17.9608971,67.90368 L14.7166513,73.1376 L25.7553392,79.992 L29.0091805,74.75136 C33.5651341,76.53696 38.5183423,77.3856 43.5934136,77.1408 L44.9991575,83.14368 L57.6460549,80.17824 L56.2383919,74.18016 C57.4675782,73.63776 58.6487869,73.04352 59.783937,72.38688 C62.9754075,70.53888 65.8166414,68.22144 68.2443083,65.55456 L73.4805844,68.80032 L80.3260294,57.7488 L75.0955107,54.50112 C76.8726012,49.94112 77.7218049,44.98752 77.483836,39.91008 Z\" id=\"Fill-416\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-22)'\" mask=\"'url('+ getUrl() + '#mask-21)'\" ></path>\n                                </g>    \n                                <!-- end of ani -->\n                            </g>\n                            <g id=\"loading-circle-btm\">\n                                <g id=\"c-btm-block\" transform=\"translate(15.000000, 280.000000)\">\n                                    <mask id=\"mask-24\" fill=\"white\">\n                                        <use xlink:href=\"#path-23\"></use>\n                                    </mask>\n                                    <g id=\"Clip-383\"></g>\n                                    <g id=\"loading-circle-btm-ani-1\">\n                                        <path id=\"back\" d=\"M79.0405996,36.9038178 L84.440589,35.6364129 L81.7682411,24.2362132 L76.3693253,25.502007 C74.5322874,21.3125894 71.8604763,17.6585966 68.6040556,14.6930839 L71.5260302,9.9736118 L61.5769294,3.79984623 L58.6549548,8.51931838 C55.4264493,7.25943198 51.9687167,6.51456308 48.4132807,6.36204487 C47.4947618,6.31961903 46.5622852,6.31961903 45.6292718,6.36204487 L45.5181477,6.36795226 L44.2587406,0.96 L32.8628785,3.63229101 L34.1281907,9.04131734 C33.0292963,9.52089047 31.965296,10.0643709 30.9420949,10.6561845 C28.0619931,12.3193849 25.5013062,14.4003993 23.3164014,16.8090057 L18.5992618,13.8853818 L12.4337504,23.8323622 L17.1449849,26.755449 C15.5446897,30.8621631 14.7791678,35.3238579 14.9944373,39.8961822 L9.59552148,41.1630501 L12.2673326,52.5648609 L17.6667852,51.297456 C19.5027494,55.4879477 22.1681185,59.1494589 25.4309813,62.1149716 L22.5090066,66.8263882 L32.4516655,73.0001538 L35.3811558,68.2812187 C39.4863073,69.8891044 43.9463046,70.6549177 48.5168892,70.4315107 L49.7832751,75.84 L61.173232,73.167172 L59.9079198,67.7662012 C61.013793,67.2785725 62.0783302,66.7426106 63.1004576,66.151334 C65.9746542,64.4875965 68.5348043,62.3990636 70.7197091,59.9985128 L75.4373856,62.9215996 L81.6012865,52.9687119 L76.8916625,50.0450881 C78.4914208,45.938911 79.2569427,41.4766791 79.0405996,36.9038178\" id=\"Fill-382\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-25)'\" mask=\"'url('+ getUrl() + '#mask-24)'\" ></path>\n                                        <g id=\"c-btm-mid\">\n                                            <mask id=\"mask-42\" fill=\"white\">\n                                                <use xlink:href=\"#path-41\"></use>\n                                            </mask>\n                                            <g id=\"Clip-604\"></g>\n                                            <g id=\"loading-circle-btm-ani-detail\">\n                                                <path d=\"M30.9121531,29.7019406 L23.799684,22.6289981 C24.3112052,21.9256565 24.6309059,21.1258235 24.7587862,20.2992518 L34.7857633,20.2725132 C34.6148687,23.6601783 33.3256029,27.004829 30.9121531,29.7019406 Z M20.3562167,34.7811131 L20.3283155,24.7564611 C21.1572123,24.6250932 21.9593704,24.3007422 22.6534116,23.786896 L29.7623931,30.8551882 C27.0815572,33.2849137 23.7438817,34.5927803 20.3562167,34.7811131 Z M20.2690255,4.21423674 C23.6590157,4.38513131 27.0036665,5.67439711 29.6996155,8.0878469 L22.6313232,15.1956658 C21.9361195,14.6887948 21.1327988,14.366769 20.2992518,14.2365636 L20.2690255,4.21423674 Z M30.8528631,9.23760694 C33.2825886,11.9184428 34.5927803,15.2537932 34.7811131,18.6437833 L24.754136,18.6716845 C24.633231,17.9160283 24.3565445,17.1801353 23.9066384,16.5163204 L23.7845709,16.3442633 L30.8528631,9.23760694 Z M9.29805944,30.9121531 L16.3686768,23.8031717 C17.0789937,24.3205056 17.8811518,24.6367186 18.6984231,24.7611113 L18.7274868,34.7857633 C15.3374966,34.6160312 11.995171,33.3256029 9.29805944,30.9121531 Z M8.14481176,29.7635556 C5.7150863,27.0815572 4.40721972,23.7438817 4.21888693,20.3562167 L14.2481891,20.329478 C14.379557,21.1641876 14.7085581,21.9616955 15.2154291,22.6522491 L8.14481176,29.7635556 Z M8.0878469,9.30038454 L15.1991534,16.3710019 C14.9131666,16.7639431 14.6794944,17.1929234 14.5085999,17.6544549 C14.3818821,17.9974066 14.2958536,18.3496587 14.2412138,18.7007482 L4.21423674,18.7286494 C4.38396876,15.3409843 5.67439711,11.9963335 8.0878469,9.30038454 Z M18.6414583,4.21888693 L18.670522,14.2412138 C17.921841,14.3597937 17.1859481,14.6388053 16.5186455,15.0910365 L16.3454258,15.2177542 L9.23644439,8.14713685 C11.9184428,5.71741139 15.2537932,4.40954482 18.6414583,4.21888693 Z M37.3631323,18.1648135 L38.902346,17.5114615 C38.8500313,17.0045906 38.7744657,16.4988822 38.6837869,15.9966614 L37.0236683,15.7920529 C36.9632158,15.4956032 36.8923004,15.1979909 36.8132471,14.9050288 L38.2071422,13.978478 C38.0641488,13.4925329 37.8955793,13.011238 37.7165469,12.5322682 L36.0506156,12.6403851 C35.9343607,12.3590485 35.8099681,12.080037 35.6751125,11.8033505 L36.8748621,10.6361523 C36.6423525,10.1862462 36.3935672,9.74099025 36.1250186,9.30270963 L34.5055892,9.71890184 C34.3428324,9.46197872 34.1672877,9.21203088 33.9882553,8.96440814 L34.9461949,7.59841417 C34.6357946,7.19849763 34.3126062,6.80323129 33.9661669,6.42191552 L32.4490416,7.1252571 C32.3444123,7.01714013 32.2374579,6.90786061 32.131666,6.80090619 C32.0223865,6.69395177 31.913107,6.58699735 31.8015024,6.48353057 L32.4990312,4.96175515 C32.1153903,4.61647837 31.7177989,4.29677766 31.3155573,3.98753987 L29.955376,4.95477986 C29.7089158,4.77807255 29.4566429,4.60485289 29.1997198,4.44209616 L29.6042865,2.81801651 C29.1660059,2.55528065 28.72075,2.30765791 28.2685188,2.0774734 L27.1082958,3.28187319 C26.8316094,3.15166781 26.5502728,3.02727517 26.2689361,2.91334546 L26.3665902,1.24741408 C25.8887829,1.06721913 25.4051629,0.904462396 24.9168927,0.76379408 L23.9973172,2.1623394 C23.7043551,2.08444868 23.4102304,2.0170209 23.110293,1.95773094 L22.8987093,0.297612305 C22.395326,0.211583748 21.888455,0.137180672 21.381584,0.0895162012 L20.7352073,1.63338003 C20.4329448,1.61012907 20.1260321,1.5961785 19.8226071,1.5938534 L19.3110859,0 C18.8007273,0.00465019227 18.2915313,0.0325513459 17.7811727,0.0755656243 L17.4265955,1.71010821 C17.124333,1.7438221 16.8232331,1.78567383 16.5232957,1.83682595 L15.7281128,0.363877545 C15.2282171,0.461531583 14.7341342,0.585924226 14.2412138,0.720779801 L14.1935493,2.39136137 C13.9029123,2.47971503 13.6169255,2.57736906 13.3286136,2.68432349 L12.2741825,1.3834322 C11.8045131,1.56943989 11.3394938,1.78102364 10.8802874,2.00539542 L11.1418607,3.65621367 C10.8733121,3.79688199 10.605926,3.94452559 10.3420276,4.10379468 L9.07368766,3.02029988 C8.64354488,3.29233613 8.22153993,3.58064805 7.81348556,3.88756074 L8.37615882,5.46165082 C8.13551137,5.64998361 7.90416431,5.84761678 7.67397979,6.05106269 L6.2254449,5.21867827 C6.03711211,5.39306048 5.85110442,5.56744269 5.67207202,5.74996274 C5.48955197,5.93132024 5.31516976,6.11965302 5.14543774,6.30566071 L5.98247235,7.74954541 C5.78018899,7.98205503 5.58604346,8.21572719 5.39887322,8.45637464 L3.8212955,7.90183921 C3.5167079,8.31338123 3.23072108,8.73538617 2.96333502,9.16436641 L4.05031747,10.4292187 C3.89337348,10.6954422 3.74805497,10.9628283 3.60506156,11.2313769 L1.9565684,10.9791039 C1.73452172,11.439473 1.52758816,11.9056548 1.34158047,12.3776493 L2.64944704,13.4239425 C2.54249262,13.7099294 2.44716368,13.9982413 2.36113512,14.2888783 L0.692878648,14.3458431 C0.555697976,14.8387635 0.435955525,15.3363341 0.340626584,15.8350672 L1.82055027,16.6232748 C1.77056071,16.9232122 1.72987152,17.2254747 1.69848273,17.5277372 L0.0651026917,17.8904522 C0.0244135094,18.3996483 0.00232509613,18.9100069 0,19.4203655 L1.5938534,19.9202611 C1.60082869,20.2248487 1.61477926,20.5317614 1.63919277,20.8351865 L0.0999791338,21.4920261 C0.149968701,21.9977345 0.226696873,22.5022804 0.315050526,23.0056637 L1.97749426,23.2079471 C2.03678421,23.5078845 2.1065371,23.8031717 2.18675291,24.0984589 L0.79402033,25.0226846 C0.935851194,25.5109548 1.10325812,25.9922497 1.28461561,26.4688944 L2.94938445,26.36194 C3.06563925,26.6432766 3.1900319,26.9234507 3.32372492,27.2001371 L2.12746296,28.3673354 C2.35881003,28.8160789 2.60875786,29.2613348 2.87381882,29.6972904 L4.49324828,29.2845858 C4.65716756,29.5415089 4.83154977,29.7902942 5.01290726,30.0355919 L4.05264256,31.4027484 C4.36420544,31.80499 4.68623126,32.2002564 5.03383313,32.5815721 L6.55095836,31.8747429 C6.65675023,31.9863475 6.76137956,32.095627 6.87065908,32.2025815 C6.9776135,32.3106984 7.08689302,32.4153277 7.19733508,32.5199571 L6.50329389,34.0417325 C6.88693475,34.3846842 7.28220109,34.70671 7.68328017,35.0136227 L9.04346141,34.0463827 C9.29108415,34.2254151 9.54335708,34.3974722 9.8002802,34.5613915 L9.39571348,36.1819835 C9.8339941,36.448207 10.2815751,36.6958297 10.7326438,36.9248517 L11.8928667,35.7216145 C12.1683906,35.8529824 12.4497272,35.9762125 12.7310639,36.0889796 L12.6334098,37.7560736 C13.1123796,37.9327809 13.5936745,38.0990252 14.0819447,38.2396936 L15.0015203,36.8411482 C15.2944824,36.9178764 15.5920947,36.9864667 15.8920321,37.0457567 L16.1024533,38.7047128 C16.6069991,38.7919039 17.111545,38.866307 17.6172534,38.9139714 L18.2647927,37.3701076 C18.5670552,37.392196 18.8728053,37.4061466 19.179718,37.4084717 L19.6900766,39 C20.1992727,38.9953498 20.7096313,38.9709363 21.2188273,38.9255969 L21.5722419,37.2933794 C21.8745044,37.258503 22.1767669,37.2154887 22.4767043,37.1654992 L23.2707247,38.637285 C23.7729454,38.5419561 24.2658658,38.4164009 24.7587862,38.2827078 L24.8064507,36.6121263 C25.0970877,36.5226101 25.3853996,36.424956 25.6713864,36.3168391 L26.724655,37.6200554 C27.1943244,37.4340478 27.6628313,37.222464 28.1185501,36.9980922 L27.8581393,35.347274 C28.1278505,35.2066057 28.394074,35.0589621 28.6568098,34.899693 L29.9263123,35.9831878 C30.3552926,35.709989 30.7772975,35.4216771 31.1865144,35.1147644 L30.6261663,33.5395117 C30.8644886,33.353504 31.0958357,33.1558709 31.3271828,32.9512624 L32.7757176,33.7824843 C32.9617253,33.6104272 33.1488956,33.4348824 33.3302531,33.2535249 C33.5092855,33.0721674 33.6836677,32.8838346 33.8568874,32.6966644 L33.0163651,31.2527797 C33.2186485,31.0214326 33.4139565,30.7877605 33.5999642,30.547113 L35.1810296,31.1004859 C35.4844546,30.6901064 35.7704415,30.2681015 36.036665,29.8379587 L34.94852,28.5742689 C35.105464,28.3080454 35.2507825,28.0406594 35.3937759,27.7721108 L37.0422691,28.0220586 C37.2666408,27.5628521 37.4712493,27.0978329 37.657257,26.6258384 L36.3493904,25.5783826 C36.4563448,25.2923957 36.5516738,25.0040838 36.6377023,24.7134468 L38.3094464,24.656482 C38.4431395,24.162399 38.5640445,23.6671535 38.6593734,23.1672579 L37.1806123,22.3790503 C37.2306018,22.0802754 37.2689659,21.7780129 37.3015173,21.4757504 L38.9337348,21.1107103 C38.9744239,20.6038394 38.9976749,20.0934808 39,19.5819596 L37.4084717,19.0797389 C37.4014964,18.7763138 37.3852207,18.4717262 37.3631323,18.1648135 Z\" id=\"Fill-603\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-43)'\" mask=\"'url('+ getUrl() + '#mask-42)'\" ></path>\n                                            </g>\n                                        </g>\n                                    </g>\n                                    \n                                </g>\n                                \n                            </g>\n                            \n                            <g id=\"person-jump\" transform=\"translate(46.000000, 22.000000)\">\n                                <g id=\"person-jump-ani\">\n                                <path d=\"M27.8759495,166.08 L24.4743371,166.46976 C24.4743371,166.46976 24.5347889,167.25984 24.4695393,168.06912 C24.3457571,169.63104 16.3123865,169.04832 16.3123865,172.05024 C16.3123865,173.68128 21.1437316,173.73408 22.6156846,173.73408 C29.1761426,173.73408 30.4120458,171.54624 30.4120458,170.93088 C30.4120458,168.90912 29.1780617,167.67168 28.6906092,167.06592 C28.0880105,166.31808 27.8759495,166.08 27.8759495,166.08\" id=\"Fill-419\" fill=\"#2C3449\"></path>\n                                <path d=\"M23.9888037,166.80768 C23.9888037,166.80768 24.4407528,167.36832 24.380301,168.58848 C24.380301,168.58848 25.6766559,169.04832 26.9624558,168.89664 C27.6878772,168.81024 28.8191892,167.18208 28.8191892,167.18208 C28.3941076,166.32192 27.6149513,165.12 27.6149513,165.12 L23.9888037,166.80768\" id=\"Fill-420\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M44.621094,165.12 L41.2204412,165.50976 C41.2204412,165.50976 41.2799334,166.29984 41.2156434,167.10912 C41.0918612,168.67104 32.624773,170.6928 32.624773,173.69664 C32.624773,175.32576 40.241698,173.8992 41.6599161,173.50656 C46.3175822,172.22496 47.1571903,170.58624 47.1571903,169.97088 C47.1571903,167.94912 45.9241658,166.71168 45.4347942,166.10592 C44.833155,165.35808 44.621094,165.12 44.621094,165.12\" id=\"Fill-421\" fill=\"#2C3449\"></path>\n                                <path d=\"M41.2607424,164.88768 C41.2607424,164.88768 41.7117319,165.44832 41.6512801,166.66848 C41.6512801,166.66848 42.9485946,167.12832 44.2334349,166.97664 C44.9588564,166.89024 46.0892088,165.26208 46.0892088,165.26208 C45.6660463,164.40192 44.8859304,163.2 44.8859304,163.2 L41.2607424,164.88768\" id=\"Fill-422\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M24.7520457,5.79956618 C24.4785734,5.55572618 23.1850971,6.50516618 23.0421238,6.83924618 C22.9413708,7.74644618 23.4720031,7.80116618 23.2522657,8.63636618 C23.5478078,7.93940618 24.0093524,7.26548618 24.5054408,6.68564618 C24.7990638,6.38516618 25.2068734,6.14132618 24.7520457,5.79956618\" id=\"Fill-423\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M23.6424054,0.892974821 C23.5598839,0.657774821 23.0714719,0.116334821 22.779768,0.0241748213 C22.3921089,-0.0958251787 22.1339894,0.269934821 22.1339894,0.269934821 C21.6724448,0.0164948213 21.2694329,1.27889482 21.1696395,1.19153482 C20.765668,0.836334821 20.1563524,1.28273482 20.1860985,3.17777482 C20.1880176,3.29297482 19.3397735,7.96529482 19.191043,9.48017482 C20.1160512,9.64721482 23.0532404,9.34865482 23.0705123,9.30257482 C23.2873711,8.46737482 23.4437781,7.56113482 23.5454906,6.65489482 C23.6750302,5.58353482 23.6942212,3.16337482 23.6951807,2.99249482 C23.6721515,2.49905482 23.7709854,1.25777482 23.6424054,0.892974821\" id=\"Fill-424\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M23.8508523,8.79168 C22.2791059,8.88192 20.9626004,8.85216 19.9828976,8.64 C18.9273903,16.53696 18.5157424,36.49536 21.4222258,37.78848 C24.0849831,38.976 25.5636529,37.3728 26.015602,36.00384 C26.1182741,35.6928 26.1672112,35.3952 26.1672112,35.14464 C26.1451415,30.55296 23.1139163,13.57824 23.8508523,8.79168\" id=\"Fill-425\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M27.1537777,34.5524022 C22.0076995,28.1818422 19.403475,34.0474422 20.3380788,36.4800822 C22.8022087,42.8852022 32.6040339,59.2887222 36.0555429,58.3546422 C37.5524443,57.9495222 44.6608066,52.7156022 44.2222913,52.0839222 C41.8032603,48.5962422 31.3479801,39.7469622 27.1537777,34.5524022\" id=\"Fill-426\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M37.1930399,43.43424 C33.717542,40.10304 30.1240192,36.65856 28.0619416,34.10592 C27.7088264,33.66912 27.3499539,33.26784 26.9901219,32.90976 C26.8087665,30.93984 26.4729233,28.29696 26.117889,25.5072 C25.3435304,19.41888 24.3791805,11.84064 24.8061812,9.06528 L19.0392728,8.64 C18.1094667,15.59232 17.6191356,32.0688 19.6293973,37.04256 C21.6550119,42.26496 30.7294966,58.41216 35.5838709,58.67616 C43.6508258,59.11776 46.9075458,52.9296 46.699323,52.65408 C43.5980505,48.5568 40.6474276,46.74432 37.1930399,43.43424\" id=\"Fill-427\" fill=\"#72BCD6\"></path>\n                                <g id=\"Group-430\" transform=\"translate(0.000000, 123.840000)\">\n                                    <mask id=\"mask-27\" fill=\"white\">\n                                        <use xlink:href=\"#path-26\"></use>\n                                    </mask>\n                                    <g id=\"Clip-429\"></g>\n                                    <path d=\"M1.85001654,10.10112 C13.8751241,28.75008 24.1701591,44.29248 24.1701591,44.29248 C24.7641218,43.00032 26.4394999,42.03648 28.1647747,42.40992 C28.1647747,42.40992 20.7215286,24.62496 13.2139926,6.6048 C8.26270355,-5.27712 -3.05617359,2.49696 1.85001654,10.10112\" id=\"Fill-428\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-28)'\" mask=\"'url('+ getUrl() + '#mask-27)'\" ></path>\n                                </g>\n                                <g id=\"Group-433\" transform=\"translate(17.271939, 121.920000)\">\n                                    <mask id=\"mask-30\" fill=\"white\">\n                                        <use xlink:href=\"#path-29\"></use>\n                                    </mask>\n                                    <g id=\"Clip-432\"></g>\n                                    <path d=\"M1.78956476,10.46112 C13.8156318,29.11008 24.1097073,44.65248 24.1097073,44.65248 C24.7046296,43.36032 26.3800077,42.39648 28.1052824,42.76992 C28.1052824,42.76992 20.6620364,24.98496 13.1535408,6.9648 C8.20225176,-4.91712 -3.11566583,2.85696 1.78956476,10.46112\" id=\"Fill-431\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-31)'\" mask=\"'url('+ getUrl() + '#mask-30)'\" ></path>\n                                </g>\n                                <g id=\"Group-436\" transform=\"translate(0.959552, 93.120000)\">\n                                    <mask id=\"mask-33\" fill=\"white\">\n                                        <use xlink:href=\"#path-32\"></use>\n                                    </mask>\n                                    <g id=\"Clip-435\"></g>\n                                    <path d=\"M54.6829578,0.9456 C48.2597157,2.15712 15.7078687,21.77376 2.88345421,31.61568 C-2.57255931,35.80416 0.507603086,40.93632 6.97978233,40.18176 C23.7450775,38.232 50.24311,33.67392 60.3088121,24.62304 C76.3103037,10.23456 58.1104781,0.30144 54.6829578,0.9456\" id=\"Fill-434\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-34)'\" mask=\"'url('+ getUrl() + '#mask-33)'\" ></path>\n                                </g>\n                                <path d=\"M58.5979306,92.20128 C51.9242454,94.97088 45.3129311,97.82112 38.3830455,99.9168 C34.0938474,101.21472 29.8775752,101.9232 25.7697325,101.97408 C27.4767758,108.16128 26.4203088,109.4736 23.9888037,111.95232 C27.885545,118.18368 32.4865975,118.93344 36.3296039,119.05152 C46.4538386,119.36256 67.9612404,106.13472 68.6118168,105.90048 C67.2406168,100.98816 65.2687371,95.5824 63.0886346,90.24 C61.6473873,90.93216 60.1389713,91.56192 58.5979306,92.20128\" id=\"Fill-437\" fill=\"#FFFFFE\"></path>\n                                <path d=\"M23.0292516,46.13376 C23.1511147,46.52832 25.2851587,50.4528 24.9905761,52.96704 C25.9750767,54.95232 31.787084,53.34336 32.3973592,49.34208 C31.4474026,48.51648 29.3920419,43.29216 29.1348819,41.28 C28.751061,41.77152 24.5203956,45.95232 23.0292516,46.13376\" id=\"Fill-438\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M28.0860764,39.871176 C27.4940327,37.015176 25.1047479,35.029896 22.2232128,35.626056 C19.540305,36.182856 17.1634943,37.504776 17.2757619,40.156296 C17.3151035,41.104776 19.9433169,49.038216 24.5712369,49.056456 C26.5277637,49.065096 29.1463815,44.989896 28.7001898,42.835656 L28.0860764,39.871176\" id=\"Fill-439\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M38.8334701,48.9746227 C37.2559663,49.0514227 32.5340102,49.1359027 32.5340102,49.1359027 C32.5340102,49.1359027 31.9851464,50.5384627 29.4500096,51.8392627 C27.1729924,53.0066227 25.1128339,52.7234227 25.1128339,52.7234227 C25.1128339,52.7234227 20.431179,55.6466227 19.6472249,56.4242227 C16.6073637,59.4386227 16.9844677,60.8920627 18.039975,65.6863027 C18.5322253,67.9221427 27.7103416,101.797663 24.2530752,111.146143 C24.5246284,111.406303 27.7967013,115.466143 32.7211229,115.344223 L31.2395744,105.449503 L34.9952615,115.182943 C46.3937814,114.382303 53.5482023,107.973343 61.8742362,104.272543 L59.2805668,91.4699827 L65.0781809,102.890143 C65.8880429,102.557023 66.6259385,102.266143 67.2755553,102.033823 C61.9270116,82.8635827 48.5249468,55.5659827 48.0432516,54.7615027 C46.0003651,51.3487027 43.5679004,48.7403827 38.8334701,48.9746227\" id=\"Fill-440\" fill=\"#72BCD6\"></path>\n                                <path d=\"M30.7824329,42.3571623 C32.0490418,38.3213223 31.1134784,33.0538023 26.6870643,31.2067623 C21.6743639,29.1130023 15.5898438,34.1654823 14.9363887,38.8963623 C14.4470171,42.4243623 12.5749309,40.5850023 12.4741779,39.7133223 C12.6440187,41.9222823 14.0286524,43.4928423 17.9925623,42.0682023 C18.8254536,41.7706023 16.3267798,43.3699623 16.3267798,43.3699623 C16.3267798,43.3699623 23.1280854,51.1411623 29.1982123,47.0995623 C31.0012108,45.8976423 32.1929746,43.4794023 32.1929746,43.4794023 C32.1929746,43.4794023 30.1299375,44.4365223 30.7824329,42.3571623\" id=\"Fill-441\" fill=\"#E2795A\"></path>\n                                <path d=\"M15.9563927,12.8139379 C15.4660615,13.5828979 15.917051,13.8680179 15.3528344,14.5198579 C15.925687,14.0244979 16.6367151,13.6241779 17.3371882,13.3236979 C17.7344428,13.1835379 18.207502,13.1441779 17.950342,12.6372979 C17.8121665,12.2984179 16.2327437,12.5777779 15.9563927,12.8139379\" id=\"Fill-599\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M17.2613836,6.83302795 C16.9591247,6.40102795 16.0398737,7.35526795 15.9909365,7.23334795 C15.7836733,6.73510795 15.0400204,6.86566795 14.2301584,8.58118795 C14.1812212,8.68294795 11.3562997,12.499908 10.5550736,13.794948 C11.3112007,14.352708 14.0785491,15.383748 14.113093,15.350148 C14.6763501,14.695428 15.2175375,13.952388 15.7088282,13.184388 C16.2970337,12.280068 17.3842063,10.116228 17.4600109,9.96454795 C17.6567191,9.51334795 18.2938617,8.44198795 18.3399202,8.05702795 C18.3687068,7.81030795 18.1691199,7.10854795 17.9484229,6.89734795 C17.6548,6.61798795 17.2613836,6.83302795 17.2613836,6.83302795\" id=\"Fill-600\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M1.39502625,39.80064 C3.76607961,41.49696 5.53549377,40.22304 6.25227922,38.97312 C6.41540309,38.68992 6.52383248,38.40768 6.57276964,38.16096 C7.47282956,33.65952 13.1898413,18.90624 14.8728957,14.36448 C13.3136235,14.13696 12.0316618,13.84416 11.11433,13.44 C8.49571215,20.96352 -1.19384545,37.94976 1.39502625,39.80064\" id=\"Fill-601\" fill=\"#F5C7B5\"></path>\n                                <path d=\"M8.11792027,36.32928 C8.33669816,34.36128 14.6457535,18.43104 15.6206585,15.79776 L10.4793781,13.44 C7.39057974,19.53984 -0.893233958,33.624 0.0787923682,38.90016 C1.01531526,44.42304 10.3613532,72.58272 21.1975756,76.73376 C28.7434937,79.62336 23.2433408,54.7824 22.9180526,54.89664 C18.057921,56.6016 8.39906905,36.75168 8.11792027,36.32928\" id=\"Fill-602\" fill=\"#72BCD6\"></path>\n                                </g>\n                            </g>\n                            <g id=\"grass\" transform=\"translate(385.000000, 208.000000)\">\n                                <path d=\"M8.72411054,3.6348 C8.33399827,5.472 8.90416235,7.6524 8.58246978,9.5412 C8.17915371,11.904 6.67992228,12.5784 5.66322971,14.0688 C4.46048359,15.834 3.90952504,19.1412 4.35005181,21.9612 C4.62373057,23.7024 5.21790155,25.1688 5.66202936,26.772 C6.10495682,28.3728 6.39904145,30.3348 6.0197323,32.0016 C5.45076857,34.512 2.40069085,36.4596 2.40069085,47.0976 C2.40069085,56.808 9.33508636,60.5832 11.3000518,62.9628 L11.3000518,3.19744231e-14 L10.4105959,0.8628 C9.73840242,1.5144 9.01219344,2.2728 8.72411054,3.6348\" id=\"Fill-606\" fill=\"#3F4B8E\"></path>\n                                <path d=\"M16.4423316,26.772 C16.8864594,25.1688 17.4806304,23.7024 17.7531088,21.9612 C18.1936356,19.1412 17.6438774,15.834 16.4411313,14.0688 C15.4244387,12.5784 13.9252073,11.904 13.5218912,9.5412 C13.2001986,7.6524 13.7691623,5.472 13.3802504,3.6348 C13.0921675,2.2728 12.3659585,1.5144 11.6925648,0.8628 L10.8031088,3.19744231e-14 L10.8031088,62.9628 C12.7692746,60.5832 19.7036701,56.808 19.7036701,47.0976 C19.7036701,36.4596 16.6535924,34.512 16.0834283,32.0016 C15.7053195,30.3348 15.9982038,28.3728 16.4423316,26.772\" id=\"Fill-607\" fill=\"#3F4B8E\"></path>\n                                <g id=\"Group-610\" transform=\"translate(10.803109, 39.600000)\">\n                                    <mask id=\"mask-36\" fill=\"white\">\n                                        <use xlink:href=\"#path-35\"></use>\n                                    </mask>\n                                    <g id=\"Clip-609\"></g>\n                                    <path d=\"M9.22225389,2.0076 C8.76612263,2.6076 8.96778066,3.5148 8.55606218,4.1448 C8.03991364,4.9368 6.89598446,4.902 6.02213299,5.2584 C4.98743523,5.6796 4.2756304,6.7884 4.32364421,7.9044 C4.3524525,8.5956 4.64173575,9.2424 4.80738342,9.9132 C4.97423143,10.5828 4.99823834,11.3592 4.56731434,11.898 C3.91672712,12.7116 1.5352418,12.8544 0.518549223,16.752 C-0.408117444,20.3124 4.22401554,22.9956 5.41235751,24.2352 L11.4248877,1.1592 L10.7022798,1.3068 C10.1549223,1.422 9.55955095,1.5624 9.22225389,2.0076\" id=\"Fill-608\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-37)'\" mask=\"'url('+ getUrl() + '#mask-36)'\"></path>\n                                </g>\n                                <g id=\"Group-613\" transform=\"translate(15.604491, 39.600000)\">\n                                    <mask id=\"mask-39\" fill=\"white\">\n                                        <use xlink:href=\"#path-38\"></use>\n                                    </mask>\n                                    <g id=\"Clip-612\"></g>\n                                    <path d=\"M7.58498273,5.1432 C7.53336788,4.3908 8.15274611,3.6972 8.04711572,2.952 C7.96909326,2.3988 7.51896373,1.9836 7.09764249,1.6188 L6.53948187,1.1352 L0.526951641,24.2148 C2.17022453,23.7108 7.52376511,23.6268 8.45043178,20.0688 C9.46592401,16.1688 7.45654577,14.8812 7.28489637,13.8552 C7.1720639,13.176 7.57057858,12.51 8.04351468,12.006 C8.51525043,11.502 9.08301382,11.076 9.44671848,10.4868 C10.032487,9.5376 9.95326425,8.2236 9.25466321,7.3512 C8.66529361,6.6132 7.64980138,6.0852 7.58498273,5.1432\" id=\"Fill-611\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-40)'\" mask=\"'url('+ getUrl() + '#mask-39)'\" ></path>\n                                </g>\n                                <path d=\"M0,61.2 C0,61.2 4.32124352,65.832 4.32124352,68.946 C4.32124352,69.7812 4.02235751,71.0532 3.58183074,72.4764 C2.17622625,77.0136 5.51438687,81.6264 10.2665544,81.6264 L21.6914421,81.6264 C26.4436097,81.6264 29.7829706,77.0136 28.3761658,72.4764 C27.935639,71.0532 27.636753,69.7812 27.636753,68.946 C27.636753,65.832 31.9591969,61.2 31.9591969,61.2 L0,61.2\" id=\"Fill-614\" fill=\"#FFFFFE\"></path>\n                            </g>\n                            <g id=\"person-female-ani\">\n                                <g id=\"person-female\" transform=\"translate(121.000000, 87.000000)\">\n                                    <g id=\"Group-2\" transform=\"translate(27.288631, 37.099950) rotate(-28.000000) translate(-27.288631, -37.099950) translate(15.288631, 1.599950)\">\n                                        <path d=\"M19.8565652,6.00670586 C19.3131788,6.73967729 19.7417653,7.05710586 19.1333255,7.66887729 C19.7388953,7.21389634 20.4745717,6.86568681 21.193028,6.61462967 C21.5976979,6.50401062 22.0712477,6.49727729 21.8512144,5.97303919 C21.7392845,5.62386776 20.1483485,5.79027729 19.8565652,6.00670586\" id=\"Fill-472\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M22.4711342,0.12947579 C22.2013543,-0.322619448 21.2198147,0.564256742 21.178678,0.440171028 C21.0083914,-0.0734861148 20.2593217,0.00442817096 19.3313555,1.65986627 C19.2758688,1.75894246 16.1954034,5.37185674 15.3066604,6.60790436 C16.0184201,7.21967579 18.6970857,8.44899008 18.7343957,8.41724722 C19.3409221,7.80451389 19.9321419,7.09847579 20.4745717,6.36742817 C21.1241481,5.5055615 22.3601609,3.42111389 22.4453042,3.27490436 C22.6729908,2.83723769 23.3837938,1.81280912 23.4565004,1.43093293 C23.5033771,1.18660912 23.3550938,0.47095198 23.1494106,0.244904361 C22.8777174,-0.056171829 22.4711342,0.12947579 22.4711342,0.12947579\" id=\"Fill-473\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M1.55572229,30.0859828 C0.454599402,36.8731828 0.642105992,56.0218208 4.08227792,56.9587161 C5.57372065,57.3656018 14.3243471,56.434478 14.2650338,55.666878 C13.9378539,51.4258399 9.38890576,38.4814875 8.39110284,31.8655066 C7.16657,23.7518399 1.97378545,27.508078 1.55572229,30.0859828\" id=\"Fill-474\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M2.13184052,31.714 C3.82705317,34.087019 5.90493232,33.4483143 6.98213855,32.4931429 C7.22704511,32.2757524 7.41933504,32.0439333 7.54465832,31.8275048 C9.83491739,27.8442571 15.7624216,11.6275048 18.8055771,7.85972381 C17.4059743,7.14214286 16.2885881,6.45149524 15.5519551,5.77142857 C10.6720004,12.0680571 0.27973461,29.1235905 2.13184052,31.714\" id=\"Fill-475\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M17.8797484,9.86721905 L13.205477,6.73333333 C9.09850862,12.1931048 0.812821999,25.9579619 0.132632276,31.1695619 C-0.648007406,36.5696952 2.08040482,69.7217429 6.65518295,70.8971905 C8.18776233,71.2896476 13.2073903,57.8566476 14.3678265,56.7966286 C14.632823,56.5551905 14.767713,56.2223714 14.736143,55.8885905 C14.5381131,53.7329619 9.19226192,35.8742381 8.66896547,32.7163048 C8.57808217,32.1699429 8.46806555,31.6649429 8.3331756,31.1830286 C9.12146862,29.420819 10.1001382,27.0141333 11.1323811,24.472781 C13.3862869,18.9254762 16.1921891,12.0199619 17.8797484,9.86721905\" id=\"Fill-476\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-44)'\"></path>\n                                    </g>\n                                    <g id=\"Group-479\" transform=\"translate(72.706637, 192.380952)\">\n                                        <mask id=\"mask-46\" fill=\"white\">\n                                            <use xlink:href=\"#path-45\"></use>\n                                        </mask>\n                                        <g id=\"Clip-478\"></g>\n                                        <path d=\"M7.02097381,0.915733333 C6.52255068,0.0952285714 6.12553417,0.00288571429 6.12553417,0.00288571429 L2.78102887,0.694495238 C2.78102887,0.694495238 2.92165881,1.84589524 2.92931214,2.65966667 C2.94366213,4.22949524 -0.152109938,8.05114286 0.951882946,9.34009524 C1.50866272,9.99226667 3.37224863,9.39877143 4.52120483,8.4830381 C5.67111769,7.56634286 6.59143065,6.66119048 6.88417053,5.79259048 C7.24961705,4.71237143 8.32777994,3.10502857 8.22158999,2.49806667 C8.03886673,1.44189524 7.02097381,0.915733333 7.02097381,0.915733333\" id=\"Fill-477\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-47)'\" mask=\"'url('+ getUrl() + '#mask-46)'\"></path>\n                                    </g>\n                                    <path d=\"M74.6199696,192.478105 C74.6199696,192.478105 74.9107962,193.291876 74.9576728,194.515419 C74.9576728,194.515419 76.0941923,194.911724 77.3560352,194.646238 C78.0697082,194.494257 79.0493345,192.771486 79.0493345,192.771486 C78.551868,191.949057 78.1845082,191.419048 78.1845082,191.419048 L74.6199696,192.478105\" id=\"Fill-480\" fill=\"#F5C7B5\"></path>\n                                    <path d=\"M68.243386,153.023657 C70.6092217,135.788248 74.4789368,114.051124 73.5404472,101.305886 C66.3396202,101.486724 57.0456073,100.221819 54.7065582,99.0761905 C54.345895,101.075029 54.541055,127.18401 55.2614247,152.465752 C55.6067812,164.562667 75.5819731,193.267829 75.5819731,193.267829 C75.6154564,193.429429 78.0913087,193.957514 79.6143214,192.40019 C79.6143214,192.40019 67.1948798,160.658295 68.243386,153.023657\" id=\"Fill-481\" fill=\"#FFFFFE\"></path>\n                                    <path d=\"M42.0933162,138.404629 C42.1908962,139.52621 45.3077149,195.639886 45.3077149,195.639886 C46.6767043,196.769162 48.8483368,196.544076 48.8856468,196.432495 C48.8856468,196.432495 53.9081447,139.171267 53.7225515,136.590476 C52.2540687,137.726486 43.0136292,139.318438 42.0933162,138.404629\" id=\"Fill-482\" fill=\"#F5C7B5\"></path>\n                                    <g id=\"Group-485\" transform=\"translate(38.266651, 194.304762)\">\n                                        <mask id=\"mask-49\" fill=\"white\">\n                                            <use xlink:href=\"#path-48\"></use>\n                                        </mask>\n                                        <g id=\"Clip-484\"></g>\n                                        <path d=\"M10.3836558,1.79491429 L7.39981365,0.126971429 C7.39981365,0.126971429 6.75980391,1.0908 6.23842079,1.71219048 C5.2310512,2.91264762 0.405626501,3.78124762 0.405626501,5.48285714 C0.405626501,6.3418381 2.20320244,7.11424762 3.66881517,7.1719619 C5.13538458,7.2306381 6.33887075,6.96707619 7.20465373,6.68139048 C8.06852338,6.39762857 10.0430826,5.59059048 10.3559124,5.06058095 C10.9021689,4.1400381 10.4716691,3.07232381 10.4716691,3.07232381 C10.6256923,2.12388571 10.3836558,1.79491429 10.3836558,1.79491429\" id=\"Fill-483\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-50)'\" mask=\"'url('+ getUrl() + '#mask-49)'\" ></path>\n                                    </g>\n                                    <path d=\"M44.0066487,196.068895 C44.0066487,196.068895 44.6103052,197.115448 45.740128,197.741648 C46.3791811,198.094667 48.239897,197.429029 48.239897,197.429029 C48.394877,196.48059 48.4608869,195.838038 48.4608869,195.838038 L45.0714183,194.304762 C45.0714183,194.304762 44.7643284,195.110838 44.0066487,196.068895\" id=\"Fill-486\" fill=\"#F5C7B5\"></path>\n                                    <path d=\"M37.3350632,96.1904762 C36.8022,100.038095 44.9376901,194.830924 44.9376901,194.830924 C44.9769134,194.9906 47.8784822,196.575819 49.3383549,194.957895 C49.3383549,194.957895 50.8613676,173.107267 53.7878098,152.487876 C56.3153221,134.68879 55.9393522,117.810248 57.3399117,116.70021 L57.3399117,97.8362952 C50.1524779,98.3114762 39.7190755,97.2408762 37.3350632,96.1904762\" id=\"Fill-487\" fill=\"#FFFFFE\"></path>\n                                    <path d=\"M36.3533185,97.6650762 C36.3533185,97.6650762 36.3963685,102.73239 36.6297951,104.161781 C37.2841548,108.163305 41.5652364,110.329514 44.8666917,110.070762 L46.0366946,106.215448 L47.6630273,110.207352 C62.8663677,111.129819 73.0902602,106.668505 73.0902602,106.668505 C74.8074762,101.133705 72.5420905,92.3428571 72.5420905,92.3428571 L36.3533185,97.6650762\" id=\"Fill-488\" fill=\"#791886\"></path>\n                                    <path d=\"M50.9319559,42.3238095 C50.4603195,42.7297333 45.4990481,45.9973238 44.0066487,45.8809333 C44.0487421,46.2897429 45.3603315,50.5692571 44.5749085,52.9788286 C45.1450816,55.1248381 51.1433792,54.6987143 52.5286319,50.8914952 C51.7632989,49.8901524 50.7865427,44.3515048 50.9319559,42.3238095\" id=\"Fill-489\" fill=\"#F5C7B5\"></path>\n                                    <path d=\"M53.0370791,50.9809524 C53.0370791,50.9809524 50.015927,54.0330762 47.8959546,54.3456952 C46.4399085,54.5592381 45.0833557,53.0682857 45.0833557,53.0682857 C45.0833557,53.0682857 39.9374478,55.0632762 39.0209615,55.6923619 C35.467903,58.1298286 34.9589565,61.8774095 35.6764562,64.8381524 C38.1752685,75.1584286 34.42705,99.6446762 37.6156187,100.892267 C41.963667,102.594838 66.8867368,102.859362 74.3334271,95.778781 C74.3334271,95.778781 71.2558317,70.7413619 67.7104265,60.7750667 C66.3548304,56.9668857 63.919158,52.9326571 59.2391466,52.1602476 C57.6788239,51.903419 53.0370791,50.9809524 53.0370791,50.9809524 Z\" id=\"Fill-490\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-51)'\"></path>\n                                    <path d=\"M44.4079314,60.5352131 C45.7424808,54.7320417 44.3237447,52.9861846 43.8291483,50.5439084 C43.3211585,48.0333369 43.752615,44.9023369 44.411758,42.9073465 C44.362968,42.8371274 40.6185762,38.9568036 39.3615167,40.9873846 C38.5799204,43.457556 38.3493638,46.4086798 39.1405268,49.4357941 C40.298093,53.8595941 39.1692268,57.2551179 38.4421604,58.7277941 C37.2338909,61.1768036 37.2252809,64.4934512 37.3783475,66.0623179 C38.2709172,75.2244607 43.735395,79.5607274 45.3052843,78.6478798 C47.0282403,77.6446131 42.4926855,68.8768512 44.4079314,60.5352131\" id=\"Fill-491\" fill=\"#302626\"></path>\n                                    <path d=\"M44.4949074,34.6286122 C41.7636252,34.6420789 39.651306,35.9079456 39.2370695,38.5329837 C39.0887863,39.4737265 40.0913725,47.7855456 44.610664,48.7243646 C46.5211266,49.1216313 49.8838085,45.6376122 49.8723285,43.4348503 L49.8579785,40.4000408 C49.8436286,37.4787361 47.4290029,34.6161075 44.4949074,34.6286122\" id=\"Fill-492\" fill=\"#F5C7B5\"></path>\n                                    <path d=\"M57.9884733,45.4341565 C59.4607827,40.3225946 57.5464935,35.5582803 54.6257914,32.4647946 C51.7070026,29.3713089 47.8755541,29.4434517 45.8110683,30.4082422 C43.226156,31.6163946 43.1926727,32.117547 43.1926727,32.117547 C43.1926727,32.117547 41.8437732,31.8587946 40.4106872,32.7139279 C37.3110884,34.5646327 37.8104682,41.7462136 40.3877272,43.8787565 C38.433258,36.2171851 43.206066,34.8118422 43.206066,34.8118422 C43.206066,34.8118422 46.5811846,35.0330803 48.3022273,36.9241851 C49.86829,38.6450327 51.5443693,43.3650994 50.7752096,47.0463089 C50.1878165,49.8569946 48.1099374,51.9462517 50.6173597,58.438147 C54.2182515,67.7686232 47.8114575,78.0686994 50.5685697,79.0777375 C53.078862,79.9963565 61.2593153,74.6616327 61.9672484,64.1874517 C62.088745,62.3934994 61.8294884,58.6266803 59.7669159,55.9362327 C58.5251631,54.3192708 56.5171206,50.5466803 57.9884733,45.4341565\" id=\"Fill-493\" fill=\"#302626\"></path>\n                                    <path d=\"M49.9724197,39.4436045 C49.6854198,39.4753473 49.16595,39.6388711 48.7899801,39.9543759 C49.1391633,40.9258997 49.9178897,42.4572521 50.3015128,43.215233 C50.9836159,42.9420521 51.7202489,41.7560235 51.6408456,41.0422902 C51.5547457,40.2871949 50.7243593,39.3579949 49.9724197,39.4436045\" id=\"Fill-494\" fill=\"#F5C7B5\"></path>\n                                    <g id=\"Group\" transform=\"translate(80.230808, 90.014915) rotate(156.000000) translate(-80.230808, -90.014915) translate(69.230808, 51.514915)\">\n                                        <path d=\"M19.9177919,0.107582686 C19.6068753,-0.316617314 18.713349,0.658754114 18.6607324,0.538516019 C18.4435692,0.0440969716 17.7050228,0.192230305 16.9368198,1.9284684 C16.8899431,2.03235411 14.1634442,5.92133507 13.3933279,7.23625888 C14.1596176,7.77877316 16.9416031,8.74741126 16.9760431,8.71278269 C17.5222995,8.04425888 18.0446393,7.28627792 18.5162758,6.50617316 C19.0826222,5.58851602 20.1158218,3.39537316 20.1885284,3.2414684 C20.373165,2.78360173 20.9844748,1.69761126 21.0217848,1.30900173 C21.0447448,1.06179221 20.8294949,0.363449353 20.6046783,0.156639829 C20.3061984,-0.115579219 19.9177919,0.107582686 19.9177919,0.107582686\" id=\"Fill-496\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M1.97883889,32.338052 C1.51963908,39.2012424 3.50376494,58.2450329 7.01664351,58.8529567 C8.53869956,59.1165186 17.1640027,57.3600805 17.0319828,56.6001758 C16.3077864,52.4081948 10.5649187,39.9544139 8.95006606,33.4634805 C6.96976686,25.5008329 2.15295216,29.7332139 1.97883889,32.338052\" id=\"Fill-497\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M2.23008082,33.8340381 C4.14054337,36.0358381 6.15049922,35.2018667 7.13203882,34.148581 C7.35494206,33.9100286 7.52522866,33.6608952 7.62950529,33.4319619 C9.53614118,29.2496 13.9148027,12.5422762 16.5905983,8.5032381 C15.1297689,7.92224762 13.9530694,7.33933333 13.1561664,6.73333333 C8.88847811,13.4647429 0.143591667,31.4312 2.23008082,33.8340381\" id=\"Fill-498\" fill=\"#F5C7B5\"></path>\n                                        <path d=\"M9.62112084,35.5603913 C9.47151262,34.9946894 9.30573054,34.4728166 9.11568767,33.9774451 C9.77072906,32.0397885 10.5612265,29.4008653 11.3951913,26.6182233 C13.2157616,20.5382014 15.4821239,12.9730844 17.0439124,10.5319021 L11.8157117,7.6952381 C8.03810414,13.8669955 0.686073184,29.2214716 0.487943379,34.7887942 C0.201868203,40.5630313 6.360066,75.2604371 11.2890503,76.042227 C12.9408059,76.3021441 16.8892499,61.6254911 18.0042355,60.3911396 C18.2589738,60.1087983 18.3671365,59.7469529 18.302441,59.3963196 C17.8798989,57.1426853 10.4854116,38.8414626 9.62112084,35.5603913\" id=\"Fill-499\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-52)'\"></path>\n                                        <path d=\"M17.7825128,6.14052495 C17.311833,6.92255352 17.7681628,7.19669637 17.219993,7.86425828 C17.7796428,7.35348685 18.4789658,6.93602018 19.1715922,6.61859161 C19.5638254,6.46949637 20.0335485,6.41947733 19.765682,5.91832495 C19.6212253,5.58069637 18.0532493,5.89812495 17.7825128,6.14052495\" id=\"Fill-495\" fill=\"#F5C7B5\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>\n            <!-- end of svg -->\n        </div>\n      </div>\n      <div class=\"proress-block\">\n          <app-ui-progress [textOnPercent]=\"language.load | translate\" [isTextTop]=\"true\" [theme]=\"'error2'\" [styleSize]=\"'max'\" [(value)]=\"progressValue\" [isShowValue]=\"true\" (onCountoEnd)=\"progressFinish()\"></app-ui-progress>\n      </div>\n      <div class=\"img-sub-block\">\n        <!-- svg -->\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 230 178\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs>\n              <linearGradient x1=\"100%\" y1=\"90.4358216%\" x2=\"-42.5256062%\" y2=\"12.4741422%\" id=\"linearGradient-1\">\n                  <stop stop-color=\"#0381E1\" offset=\"0%\"></stop>\n                  <stop stop-color=\"#003781\" offset=\"100%\"></stop>\n              </linearGradient>\n          </defs>\n          <g id=\"Flight-whole\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"C25\" transform=\"translate(-706.000000, -356.000000)\">\n                  <g id=\"Flight-42\" transform=\"translate(810.419390, 442.620400) rotate(-15.000000) translate(-810.419390, -442.620400) translate(678.419390, 338.620400)\">\n                     <g id=\"Flight-path-white\" fill=\"#EAEAE4\" transform=\"scale(-1 1) rotate(-32 8.363 356.227)\">\n                        <path id=\"flight-path\" d=\"M7.72067981.00149057783C7.72067981.00149057783 6.18067981.0494905778 4.64267981.181490578 3.11067981.301490578 1.58067981.505490578 1.58067981.505490578L1.56067981.509490578 1.55467981.509490578C.570679809.645490578-.117320191 1.55149058.0166798089 2.53349058.152679809 3.51749058 1.05867981 4.20349058 2.04267981 4.07149058 2.04267981 4.07149058 3.48667981 3.87149058 4.94467981 3.74949058 6.39467981 3.61949058 7.85267981 3.56749058 7.85267981 3.56749058 8.83867981 3.52949058 9.60867981 2.69949058 9.57067981 1.71549058 9.53267981.731490578 8.70467981-.0385094222 7.72067981.00149057783M24.0446136.970613573C24.0446136.970613573 22.5386136.666613573 21.0186136.428613573 19.5066136.186613573 17.9786136.0126135731 17.9786136.0126135731L17.9606136.0106135731 17.9546136.0106135731C16.9846136-.0953864269 16.1146136.604613573 16.0106136 1.57261357 15.9046136 2.54061357 16.6046136 3.40861357 17.5726136 3.51461357 17.5726136 3.51461357 19.0266136 3.67461357 20.4786136 3.90061357 21.9246136 4.12061357 23.3606136 4.40461357 23.3606136 4.40461357 24.3106136 4.59461357 25.2306136 3.97861357 25.4206136 3.03061357 25.6086136 2.08061357 24.9926136 1.15861357 24.0446136.970613573M37.9497354 6.17173543L32.3177354 4.10573543 32.3057354 4.10173543C31.4097354 3.77973543 30.4217354 4.24773543 30.1017354 5.14373543 29.7797354 6.03973543 30.2477354 7.02573543 31.1437354 7.34773543L36.7917354 9.37173543C37.6717354 9.68373543 38.6417354 9.23373543 38.9637354 8.35373543 39.2857354 7.47173543 38.8337354 6.49373543 37.9497354 6.17173543M53.7223199 13.1054338L48.4683199 10.2054338 48.4583199 10.2014338C47.6503199 9.76343381 46.6383199 10.0634338 46.2023199 10.8714338 45.7623199 11.6814338 46.0643199 12.6914338 46.8723199 13.1294338L52.1483199 15.9874338C52.9403199 16.4174338 53.9343199 16.1274338 54.3703199 15.3354338 54.8083199 14.5414338 54.5183199 13.5414338 53.7223199 13.1054338M62.5708922 18.3227618L62.5628922 18.3147618C61.8488922 17.7867618 60.8428922 17.9387618 60.3148922 18.6527618 59.7868922 19.3647618 59.9388922 20.3727618 60.6508922 20.9007618L65.4768922 24.4667618C66.1748922 24.9827618 67.1628922 24.8407618 67.6868922 24.1427618 68.2108922 23.4427618 68.0688922 22.4507618 67.3688922 21.9247618L62.5708922 18.3227618M74.6351502 28.4469139L74.6271502 28.4389139C74.0131502 27.8409139 73.0351502 27.8569139 72.4371502 28.4689139 71.8431502 29.0829139 71.8551502 30.0609139 72.4691502 30.6569139L76.7711502 34.8409139C77.3711502 35.4229139 78.3311502 35.4149139 78.9211502 34.8169139 79.5131502 34.2189139 79.5051502 33.2509139 78.9051502 32.6609139L74.6351502 28.4469139M84.6688237 40.5784427L84.6628237 40.5724427C84.1548237 39.9224427 83.2208237 39.8104427 82.5708237 40.3164427 81.9248237 40.8224427 81.8088237 41.7584427 82.3168237 42.4064427L86.0128237 47.1324427C86.5088237 47.7664427 87.4248237 47.8824427 88.0648237 47.3904427 88.7068237 46.8964427 88.8248237 45.9744427 88.3308237 45.3324427L84.6688237 40.5784427M94.6747847 52.724714L94.6707847 52.718714C94.2767847 52.032714 93.4027847 51.796714 92.7167847 52.190714 92.0327847 52.584714 91.7967847 53.458714 92.1907847 54.142714L95.1787847 59.344714C95.5647847 60.014714 96.4187847 60.248714 97.0947847 59.870714 97.7707847 59.486714 98.0107847 58.628714 97.6267847 57.950714L94.6747847 52.724714M102.655937 68.8880154L102.651937 68.8800154C102.379937 68.1720154 101.585937 67.8220154 100.877937 68.0900154 100.171937 68.3640154 99.8199371 69.1580154 100.091937 69.8640154L102.251937 75.4620154C102.517937 76.1540154 103.291937 76.5000154 103.985937 76.2400154 104.685937 75.9780154 105.035937 75.2000154 104.773937 74.5000154L102.655937 68.8880154M106.597004 83.0390975L106.595004 83.0310975C106.439004 82.3210975 105.739004 81.8750975 105.031004 82.0310975 104.323004 82.1830975 103.875004 82.8870975 104.031004 83.5930975L104.039004 83.6290975C104.039004 83.6290975 104.357004 85.0750975 104.675004 86.5190975 104.945004 87.9730975 105.213004 89.4250975 105.213004 89.4250975L105.219004 89.4490975C105.345004 90.1330975 105.999004 90.5970975 106.691004 90.4850975 107.395004 90.3750975 107.875004 89.7110975 107.763004 89.0070975 107.763004 89.0070975 107.523004 87.5030975 107.229004 86.0110975 106.913004 84.5270975 106.597004 83.0390975 106.597004 83.0390975M108.507922 99.2041159L108.507922 99.1861159C108.469922 98.4941159 107.877922 97.9621159 107.185922 98.0021159 106.493922 98.0401159 105.963922 98.6301159 106.001922 99.3221159 106.001922 99.3221159 106.083922 100.798116 106.107922 102.278116 106.137922 103.756116 106.109922 105.236116 106.109922 105.236116 106.097922 105.912116 106.635922 106.474116 107.313922 106.490116 107.993922 106.506116 108.557922 105.966116 108.573922 105.286116 108.573922 105.286116 108.613922 103.768116 108.593922 102.244116 108.581922 100.724116 108.507922 99.2041159 108.507922 99.2041159M108.381083 114.009966C107.727083 113.925966 107.125083 114.381966 107.037083 115.037966 107.037083 115.037966 106.839083 116.503966 106.583083 117.959966 106.333083 119.417966 106.025083 120.865966 106.025083 120.865966 105.893083 121.495966 106.295083 122.119966 106.925083 122.257966 107.557083 122.393966 108.183083 121.991966 108.319083 121.357966 108.319083 121.357966 108.647083 119.873966 108.915083 118.373966 109.189083 116.881966 109.403083 115.373966 109.403083 115.373966L109.405083 115.365966 109.407083 115.357966C109.495083 114.701966 109.037083 114.099966 108.381083 114.009966M103.601784 130.059573C103.005784 129.859573 102.363784 130.179573 102.163784 130.773573 102.163784 130.773573 101.693784 132.179573 101.169784 133.567573 100.653784 134.957573 100.083784 136.325573 100.083784 136.325573 99.8517839 136.891573 100.117784 137.543573 100.681784 137.781573 101.249784 138.019573 101.903784 137.749573 102.141784 137.183573 102.141784 137.183573 102.735784 135.785573 103.277784 134.367573 103.823784 132.949573 104.315784 131.511573 104.315784 131.511573L104.321784 131.495573C104.519784 130.899573 104.197784 130.257573 103.601784 130.059573M98.6558607 144.148964C98.1418607 143.846964 97.4818607 144.018964 97.1798607 144.530964L94.1458607 149.706964C93.8518607 150.206964 94.0158607 150.850964 94.5158607 151.148964 95.0158607 151.448964 95.6658607 151.284964 95.9638607 150.780964L99.0378607 145.628964 99.0418607 145.620964C99.3418607 145.108964 99.1698607 144.448964 98.6558607 144.148964M87.8849402 158.39661L84.2109402 163.14261C83.8729402 163.58061 83.9489402 164.20861 84.3829402 164.54861 84.8189402 164.88861 85.4469402 164.81461 85.7909402 164.37661L89.4949402 159.65861 89.5029402 159.65061C89.8489402 159.20061 89.7669402 158.56061 89.3189402 158.21261 88.8729402 157.86861 88.2309402 157.95061 87.8849402 158.39661M77.3028513 170.221228L77.2908513 170.227228C77.2908513 170.227228 77.0088513 170.463228 76.5828513 170.813228 76.1568513 171.153228 75.5808513 171.595228 74.9848513 172.005228 73.8008513 172.841228 72.5268513 173.473228 72.5268513 173.473228 72.0608513 173.705228 71.8668513 174.271228 72.0968513 174.743228 72.3268513 175.213228 72.8968513 175.407228 73.3668513 175.177228 73.3668513 175.177228 74.7928513 174.477228 76.0688513 173.587228 76.7148513 173.149228 77.3308513 172.685228 77.7848513 172.325228 78.2328513 171.963228 78.5288513 171.721228 78.5288513 171.721228L78.5348513 171.717228C78.9488513 171.377228 79.0068513 170.767228 78.6668513 170.353228 78.3268513 169.939228 77.7168513 169.881228 77.3028513 170.221228M62.817783 172.797033C62.689783 172.691033 62.559783 172.581033 62.365783 172.401033 61.993783 172.055033 61.533783 171.543033 61.127783 170.975033 60.299783 169.851033 59.713783 168.531033 59.713783 168.531033 59.513783 168.085033 58.989783 167.879033 58.537783 168.073033 58.085783 168.273033 57.877783 168.801033 58.073783 169.253033L58.087783 169.281033C58.087783 169.281033 58.713783 170.725033 59.655783 172.035033 60.119783 172.691033 60.661783 173.301033 61.109783 173.725033 61.323783 173.929033 61.551783 174.125033 61.677783 174.225033L61.879783 174.391033 61.883783 174.393033C62.279783 174.707033 62.855783 174.641033 63.169783 174.241033 63.483783 173.847033 63.417783 173.273033 63.019783 172.957033L62.817783 172.797033M57.686032 152.836008C57.678032 152.372008 57.298032 151.998008 56.834032 152.000008 56.368032 152.004008 55.996032 152.388008 56.000032 152.852008 56.000032 152.852008 56.006032 154.380008 56.096032 155.912008 56.176032 157.434008 56.354032 158.962008 56.354032 158.962008L56.356032 158.978008C56.412032 159.450008 56.842032 159.786008 57.316032 159.728008 57.788032 159.668008 58.124032 159.240008 58.068032 158.766008 58.068032 158.766008 57.886032 157.294008 57.798032 155.806008 57.700032 154.326008 57.686032 152.836008 57.686032 152.836008M57.9784307 138.017296C57.5524307 137.927296 57.1324307 138.197296 57.0424307 138.623296 57.0424307 138.623296 56.7204307 140.107296 56.4664307 141.599296 56.2044307 143.091296 56.0084307 144.595296 56.0084307 144.595296L56.0064307 144.611296C55.9504307 145.053296 56.2664307 145.459296 56.7104307 145.513296 57.1524307 145.569296 57.5564307 145.251296 57.6104307 144.811296 57.6104307 144.811296 57.7944307 143.333296 58.0404307 141.869296 58.2804307 140.405296 58.5864307 138.951296 58.5864307 138.951296 58.6724307 138.525296 58.4024307 138.107296 57.9784307 138.017296M63.552731 122.087101C63.192731 121.895101 62.748731 122.031101 62.558731 122.391101 62.558731 122.391101 61.836731 123.739101 61.218731 125.133101 60.590731 126.515101 60.052731 127.941101 60.052731 127.941101L60.048731 127.949101 60.046731 127.957101C59.902731 128.347101 60.102731 128.781101 60.492731 128.927101 60.884731 129.071101 61.318731 128.871101 61.464731 128.481101 61.464731 128.481101 61.976731 127.091101 62.578731 125.739101 63.170731 124.383101 63.858731 123.079101 63.858731 123.079101 64.044731 122.723101 63.910731 122.277101 63.552731 122.087101M75.5356768 110.041681C75.5356768 110.041681 74.0436768 110.581681 72.7236768 111.435681 72.0596768 111.849681 71.4336768 112.319681 70.9816768 112.685681 70.5396768 113.061681 70.2456768 113.311681 70.2456768 113.311681L70.2436768 113.315681C69.9496768 113.569681 69.9176768 114.011681 70.1696768 114.307681 70.4236768 114.599681 70.8676768 114.631681 71.1616768 114.377681L71.1756768 114.365681C71.1756768 114.365681 71.4516768 114.127681 71.8656768 113.767681 72.2836768 113.425681 72.8576768 112.991681 73.4636768 112.603681 74.6676768 111.815681 76.0116768 111.323681 76.0116768 111.323681 76.3616768 111.189681 76.5476768 110.791681 76.4156768 110.443681 76.2836768 110.089681 75.8896768 109.913681 75.5356768 110.041681M90.2899357 114.972192C90.2899357 114.972192 89.0439357 114.078192 87.6899357 113.344192 87.0159357 112.972192 86.3179357 112.636192 85.7839357 112.410192 85.2499357 112.192192 84.8919357 112.046192 84.8919357 112.046192L84.8879357 112.046192C84.5559357 111.914192 84.1779357 112.074192 84.0459357 112.410192 83.9139357 112.742192 84.0759357 113.116192 84.4099357 113.250192L84.4299357 113.258192C84.4299357 113.258192 84.7679357 113.394192 85.2759357 113.594192 85.7779357 113.808192 86.4359357 114.116192 87.0779357 114.464192 88.3679357 115.152192 89.5719357 116.004192 89.5719357 116.004192 89.8539357 116.198192 90.2439357 116.136192 90.4439357 115.856192 90.6479357 115.570192 90.5819357 115.180192 90.2999357 114.976192L90.2899357 114.972192M99.0231755 122.486391C98.0631755 121.314391 97.0411755 120.198391 97.0411755 120.198391L97.0331755 120.190391C96.8111755 119.948391 96.4331755 119.936391 96.1911755 120.158391 95.9491755 120.380391 95.9351755 120.760391 96.1591755 120.998391 96.1591755 120.998391 97.1691755 122.092391 98.1191755 123.236391 99.0731755 124.372391 99.9671755 125.560391 99.9671755 125.560391 100.159176 125.814391 100.521176 125.870391 100.773176 125.678391 101.029176 125.486391 101.081176 125.122391 100.891176 124.870391 100.891176 124.870391 99.9891755 123.654391 99.0231755 122.486391M107.035661 134.301992L107.031661 134.293992C106.889661 134.023992 106.559661 133.921992 106.291661 134.063992 106.025661 134.203992 105.921661 134.535992 106.063661 134.801992 106.063661 134.801992 106.755661 136.117992 107.375661 137.469992 108.003661 138.817992 108.559661 140.199992 108.559661 140.199992 108.667661 140.469992 108.975661 140.601992 109.243661 140.493992 109.515661 140.383992 109.647661 140.079992 109.537661 139.805992 109.537661 139.805992 108.983661 138.399992 108.353661 137.023992 107.731661 135.645992 107.035661 134.301992 107.035661 134.301992\"/>\n                      </g>\n                      <g id=\"Flight-body\" transform=\"translate(214.494241, 72.211947) rotate(-18.000000) translate(-214.494241, -72.211947) translate(175.494241, 33.211947)\">\n                          <path d=\"M39.572,9.05409712 L25.376,23.2340971 L13.264,20.0700971 L10.718,34.6680971 L13.264,35.3600971 L2,43.3000971 L14.012,55.8980971 L77.532,77.4800971 L45.398,10.1320971 C44.912,9.05409712 43.922,8.27809712 42.766,8.06609712 C41.596,7.83609712 40.408,8.21609712 39.572,9.05409712 Z\" id=\"Fill-546\" fill=\"#003A83\"></path>\n                          <path d=\"M44.2591726,2.13391686 C43.7731726,1.05391686 42.7831726,0.277916862 41.6271726,0.065916862 C40.4571726,-0.164083138 39.2691726,0.217916862 38.4331726,1.05391686 L1.04917259,38.4219169 C0.211172594,39.2579169 -0.152827406,40.4599169 0.0591725942,41.6179169 C0.273172594,42.7879169 1.04917259,43.7779169 2.12917259,44.2499169 L76.3931726,77.4799169 C76.6991726,77.6179169 77.0631726,77.5379169 77.3071726,77.3119169 C77.5351726,77.0699169 77.6111726,76.7019169 77.4731726,76.3979169 L44.2591726,2.13391686\" id=\"Fill-547\" [attr.fill]=\"'url('+ getUrl() + '#linearGradient-1)'\"></path>\n                          <polyline id=\"Fill-548\" fill=\"#003A83\" points=\"26.112 16 14 20.836 14 28.126 63.602 63.09 64.18 63.074 64.196 62.512 26.112 16\"></polyline>\n                      </g>\n                  </g>\n              </g>\n          </g>\n      </svg>\n        <!-- end of svg -->\n      </div>\n    </div>\n  </div>\n  <!-- end of layout main -->\n  <!-- layout sub -->\n  <div class=\"layout-sub-block\">\n    <div class=\"img-block\">\n      <img src=\"assets/img/img-loading-cloud.svg\"/>\n    </div>\n  </div>\n  <!-- end of layout sub -->\n</div>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}#Flight-body{offset-distance:0;-webkit-animation:2s linear infinite alternate move-by-path;animation:2s linear infinite alternate move-by-path}@-webkit-keyframes move-by-path{from{offset-distance:0}to{offset-distance:100%}}@keyframes move-by-path{from{offset-distance:0}to{offset-distance:100%}}#c-btm-mid{-webkit-transform:translate3d(29px,19px,0);transform:translate3d(29px,19px,0)}#loading-circle-lg-ani{-webkit-transform-origin:76px 74px;transform-origin:76px 74px;-webkit-animation:5s linear infinite rotate-normal;animation:5s linear infinite rotate-normal}#loading-circle-btm-ani-1,#loading-circle-btm-ani-2{-webkit-animation:5s linear infinite rotate-normal;animation:5s linear infinite rotate-normal;-webkit-transform-origin:46px 40px;transform-origin:46px 40px}#loading-circle-right-ani{-webkit-animation:5s linear infinite rotate-reverse;animation:5s linear infinite rotate-reverse;-webkit-transform-origin:52px 37px;transform-origin:52px 37px}@-webkit-keyframes rotate-normal{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-normal{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotate-reverse{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes rotate-reverse{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}#person-jump-ani{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:.5s linear infinite alternate jump;animation:.5s linear infinite alternate jump}@-webkit-keyframes jump{0%{-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}40%{-webkit-transform:translate3d(0,5px,0) scale3d(1,1,1);transform:translate3d(0,5px,0) scale3d(1,1,1)}100%{-webkit-transform:translate3d(0,20px,0) scale3d(1,1,1);transform:translate3d(0,20px,0) scale3d(1,1,1)}}@keyframes jump{0%{-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}40%{-webkit-transform:translate3d(0,5px,0) scale3d(1,1,1);transform:translate3d(0,5px,0) scale3d(1,1,1)}100%{-webkit-transform:translate3d(0,20px,0) scale3d(1,1,1);transform:translate3d(0,20px,0) scale3d(1,1,1)}}#person-female-ani{-webkit-transform-origin:bottom;transform-origin:bottom}@-webkit-keyframes female-move{0%{-webkit-transform:rotate(0);transform:rotate(0)}40%{-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}100%{-webkit-transform:rotate(-8deg);transform:rotate(-8deg)}}@keyframes female-move{0%{-webkit-transform:rotate(0);transform:rotate(0)}40%{-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}100%{-webkit-transform:rotate(-8deg);transform:rotate(-8deg)}}#person-male-top-ani{-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-animation:.8s infinite alternate male-move;animation:.8s infinite alternate male-move}@-webkit-keyframes male-move{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(10deg) translate3d(-12px,-9px,0);transform:rotate(10deg) translate3d(-12px,-9px,0)}}@keyframes male-move{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(10deg) translate3d(-12px,-9px,0);transform:rotate(10deg) translate3d(-12px,-9px,0)}}.text-dot{overflow:hidden;display:inline-block;vertical-align:middle;width:0;-webkit-animation:.5s linear infinite alternate dot-show;animation:.5s linear infinite alternate dot-show;white-space:nowrap}@-webkit-keyframes dot-show{0%{width:0}40%{width:5px}100%{width:17px}}@keyframes dot-show{0%{width:0}40%{width:5px}100%{width:17px}}.layout-splite-to-full{display:flex;flex-wrap:wrap;width:100vw;height:100vh;overflow-y:hidden;overflow-x:hidden}.layout-splite-to-full .layout-main-block{padding-top:50px;padding-left:5vw;padding-right:8.6vw;display:inline-block;width:77.4%;background:linear-gradient(to bottom,#0068b7,#003781)}.layout-splite-to-full .layout-sub-block{display:inline-block;width:calc(100vw - 77.4%);background-color:#fff}.layout-loading .logo-block{margin-bottom:75px;width:100%}.layout-loading .logo-block img{width:150px}@media screen and (min-width:1025px){.layout-loading .logo-block img{width:15vw}}@media (max-width:1023px){.layout-splite-to-full .layout-main-block{width:100%;display:flex;flex-direction:column;padding-top:26px}.layout-splite-to-full .layout-sub-block{display:none}.layout-loading .logo-block{flex-shrink:0}.layout-loading .logo-block img{width:100px}}.layout-loading .title-block{color:#fff;margin-bottom:33px;width:100%;flex-shrink:0}.layout-loading .title-block h2{margin:0 0 20px;padding:0;font-weight:700;letter-spacing:.3px}.layout-loading .title-block p{margin:0;padding:0;letter-spacing:.2px}.layout-loading .img-and-progress-block{position:relative;width:100%}.layout-loading .img-and-progress-block .img-main-block .svg-block{max-width:41.8vw;width:100%}.layout-loading .img-and-progress-block .proress-block{position:absolute;width:100%;bottom:59px}.layout-loading .img-and-progress-block .img-sub-block{max-width:264px;width:100%;position:absolute;top:-170px;right:-245px;bottom:0}.layout-loading .img-and-progress-block .img-sub-block img{width:100%}@media (max-width:1023px){.layout-loading .img-and-progress-block{flex:1 1 auto;display:flex;align-items:flex-end}.layout-loading .img-and-progress-block .img-sub-block{display:none}.layout-loading .img-and-progress-block .img-main-block{margin-bottom:90px}.layout-loading .img-and-progress-block .img-main-block .svg-block{max-width:300px}}@media screen and (min-width:1025px){.layout-loading .img-and-progress-block .img-sub-block{max-width:26.4vw}}.layout-loading .layout-sub-block .img-block{margin-top:143px}"]
                    }] }
        ];
        LoadingComponent.ctorParameters = function () {
            return [
                { type: i1.AppRouter },
                { type: i1.DefaultLoadingApp },
                { type: common.Location, decorators: [{ type: i0.Optional }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.LoadingAppToken,] }] }
            ];
        };
        LoadingComponent.propDecorators = {
            progressValue: [{ type: i0.Input }],
            onProgressFinish: [{ type: i0.Output }]
        };
        return LoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ui.UIModule,
                            i1.CoreModule,
                            forms.FormsModule
                        ],
                        declarations: [LoginComponent, LoadingComponent],
                        exports: [LoginComponent, LoadingComponent]
                    },] }
        ];
        return LoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LoginModule = LoginModule;
    exports.LoadingComponent = LoadingComponent;
    exports.LoginComponent = LoginComponent;
    exports.Region = Region;
    exports.LoginForm = LoginForm;
    exports.LoginService = LoginService;
    exports.ɵc = LoadingComponent;
    exports.ɵa = LoginComponent;
    exports.ɵb = LoginService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-login.umd.js.map