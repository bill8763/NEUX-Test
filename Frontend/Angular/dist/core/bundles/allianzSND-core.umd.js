(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jwt-decode'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('rxjs/operators'), require('uuid'), require('date-fns'), require('stacktrace-js'), require('@angular/core'), require('lodash'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/core', ['exports', 'jwt-decode', '@angular/router', '@angular/common', '@angular/forms', '@angular/common/http', 'rxjs/operators', 'uuid', 'date-fns', 'stacktrace-js', '@angular/core', 'lodash', 'rxjs'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.core = {}),global._jwt_decode,global.ng.router,global.ng.common,global.ng.forms,global.ng.common.http,global.rxjs.operators,global.uuid,global.dateFns,global.stacktrace,global.ng.core,global._,global.rxjs));
}(this, (function (exports,_jwt_decode,i3,i1,forms,i1$1,operators,uuid,dateFns,stacktrace,i0,_,rxjs) { 'use strict';

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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
        var _$$1 = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_$$1)
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
                            _$$1.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _$$1.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _$$1.ops.pop();
                            _$$1.trys.pop();
                            continue;
                        default:
                            if (!(t = _$$1.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _$$1 = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _$$1.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _$$1.label < t[1]) {
                                _$$1.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _$$1.label < t[2]) {
                                _$$1.label = t[2];
                                _$$1.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _$$1.ops.pop();
                            _$$1.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _$$1);
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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageCode = /** @class */ (function () {
        function LanguageCode(id, name, isDefault) {
            this._languageID = id;
            this._name = name;
            this._isDefault = isDefault;
        }
        Object.defineProperty(LanguageCode.prototype, "getLanguageID", {
            get: /**
             * @return {?}
             */ function () {
                return this._languageID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LanguageCode.prototype, "getName", {
            get: /**
             * @return {?}
             */ function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LanguageCode.prototype, "getIsDefault", {
            get: /**
             * @return {?}
             */ function () {
                return this._isDefault;
            },
            enumerable: true,
            configurable: true
        });
        return LanguageCode;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var APPError = /** @class */ (function (_super) {
        __extends(APPError, _super);
        function APPError(code, message) {
            var _this = _super.call(this, message) || this;
            _this.name = '';
            _this.message = '';
            _this.code = '';
            _this.message = "CODE " + code + " - " + message;
            _this.name = "APPError";
            _this.code = code;
            return _this;
        }
        return APPError;
    }(Error));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var APIFactory = /** @class */ (function () {
        function APIFactory(errorHandler) {
            this.errorHandler = errorHandler;
            this.apiMap = new Map();
        }
        /**
         * @param {?} api
         * @return {?}
         */
        APIFactory.prototype.registerAPI = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                this.apiMap.set(api.getAPIName(), api);
            };
        /**
         * @param {?} api
         * @return {?}
         */
        APIFactory.prototype.unRegisterAPI = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                this.apiMap.delete(api.getAPIName());
            };
        /**
         * @param {?} apiName
         * @return {?}
         */
        APIFactory.prototype.getAPI = /**
         * @param {?} apiName
         * @return {?}
         */
            function (apiName) {
                /** @type {?} */
                var target = this.apiMap.get(apiName);
                if (target) {
                    console.group("get API:");
                    console.log("target:", target);
                    /** @type {?} */
                    var newInstance = Object.create(Object.getPrototypeOf(target));
                    newInstance.constructor.apply(newInstance);
                    newInstance = Object.assign(newInstance, target);
                    console.log("new instance:", newInstance);
                    console.groupEnd();
                    return newInstance;
                }
                else {
                    console.log("API " + apiName + " not found!");
                    this.errorHandler.handleError(new APPError("F00013", "Cannot find API " + apiName + "."));
                    return null;
                }
            };
        APIFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        APIFactory.ctorParameters = function () {
            return [
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ APIFactory.ngInjectableDef = i0.defineInjectable({ factory: function APIFactory_Factory() { return new APIFactory(i0.inject(i0.ErrorHandler)); }, token: APIFactory, providedIn: "root" });
        return APIFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var APIInvokeMethod = {
        MOCK: 0,
        SQLite: 1,
        Restful: 2,
        ONOFFSwitch: 3,
        Device: 4,
    };
    APIInvokeMethod[APIInvokeMethod.MOCK] = 'MOCK';
    APIInvokeMethod[APIInvokeMethod.SQLite] = 'SQLite';
    APIInvokeMethod[APIInvokeMethod.Restful] = 'Restful';
    APIInvokeMethod[APIInvokeMethod.ONOFFSwitch] = 'ONOFFSwitch';
    APIInvokeMethod[APIInvokeMethod.Device] = 'Device';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockAPIAccess = /** @class */ (function () {
        function MockAPIAccess(httpService, errorHandler) {
            this.httpService = httpService;
            this.errorHandler = errorHandler;
        }
        /**
         * @param {?} api
         * @return {?}
         */
        MockAPIAccess.prototype.access = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                var _this = this;
                return this.httpService.get((( /** @type {?} */(api))).getMockPath()).pipe(operators.catchError(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) { _this.errorHandler.handleError(new APPError("F00016", error.message)); return rxjs.throwError(error); })));
            };
        MockAPIAccess.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        MockAPIAccess.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ MockAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function MockAPIAccess_Factory() { return new MockAPIAccess(i0.inject(i1$1.HttpClient), i0.inject(i0.ErrorHandler)); }, token: MockAPIAccess, providedIn: "root" });
        return MockAPIAccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ConfigToken = new i0.InjectionToken('APP_CONFIG');
    /** @type {?} */
    var GoalSettingInterfaceToken = new i0.InjectionToken('');
    //Initial Task Token
    /** @type {?} */
    var configTaskToken = new i0.InjectionToken('configTask');
    /** @type {?} */
    var registerAPITaskToken = new i0.InjectionToken('registerAPITask');
    /** @type {?} */
    var dataSyncTaskToken = new i0.InjectionToken('dataSyncTask');
    /** @type {?} */
    var customTaskToken = new i0.InjectionToken('customTaskToken');
    //Config finsish token
    /** @type {?} */
    var fetchLanguageFinishToken = new i0.InjectionToken('fetchLanguageFinish');
    /** @type {?} */
    var fetchSettingFinishToken = new i0.InjectionToken('fetchSettingFInish');
    /** @type {?} */
    var fetchConfigFinishToken = new i0.InjectionToken('fetchConfigFinish');
    //Data sync register Func Token
    /** @type {?} */
    var registerDataSyncFuncToken = new i0.InjectionToken('registerDataSyncFunc');
    //check timeout token
    /** @type {?} */
    var checkTimeoutToken = new i0.InjectionToken('checkTimeout');
    //timeout action token
    /** @type {?} */
    var timeoutActionToken = new i0.InjectionToken('timeoutAction');
    //check permission token
    /** @type {?} */
    var checkPermissionToken = new i0.InjectionToken('checkPermission');
    //auth action token
    /** @type {?} */
    var authActionToken = new i0.InjectionToken('authAction');
    //auth route token
    /** @type {?} */
    var authRouteToken = new i0.InjectionToken('authRoute');
    //after login action token
    /** @type {?} */
    var AfterLoginToken = new i0.InjectionToken("AfterLogin");
    //do loading token
    /** @type {?} */
    var LoadingAppToken = new i0.InjectionToken("LoadingApp");
    //Login Manager token
    /** @type {?} */
    var LoginMgrToken = new i0.InjectionToken('LoginMgr');
    //PushID Manager token
    /** @type {?} */
    var PushIDMgrToken = new i0.InjectionToken('PushIDMgrToken');
    //check root token
    /** @type {?} */
    var checkForRootToken = new i0.InjectionToken("CheckForRoot");
    //get header token
    /** @type {?} */
    var RestHeaderToken = new i0.InjectionToken("RestHeader");
    //access language
    /** @type {?} */
    var LanguageAccessToken = new i0.InjectionToken('LanguageAccess');
    //update language
    /** @type {?} */
    var LanguageUpdateToken = new i0.InjectionToken('LanguageUpdate');
    //network change token
    /** @type {?} */
    var NetworkChangeToken = new i0.InjectionToken('NetworkChange');
    //change font size token
    /** @type {?} */
    var FontSizeAccessToken = new i0.InjectionToken('FontSizeAccess');
    /** @type {?} */
    var changeFontSizeToken = new i0.InjectionToken('changeFontSize');
    //showrule
    /** @type {?} */
    var showRuleToken = new i0.InjectionToken("showRule");
    //initialFinish
    /** @type {?} */
    var initialFinishToken = new i0.InjectionToken("initialFinish");
    /** @type {?} */
    var NotificationProviderToken = new i0.InjectionToken("NotificationProvider");
    // Notification Action
    /** @type {?} */
    var GoalSettingNotStartFirstMessageActionToken = new i0.InjectionToken('GoalSettingNotStartMessageAction');
    /** @type {?} */
    var GoalSettingNotStartMessageActionToken = new i0.InjectionToken('GoalSettingNotStartMessageAction');
    /** @type {?} */
    var NeedGoalSettingMessageActionToken = new i0.InjectionToken('NeedGoalSettingMessage');
    /** @type {?} */
    var GoalPromoSettingMessageActionToken = new i0.InjectionToken('GoalPromoSettingMessageAction');
    /** @type {?} */
    var GoalAutoApproveMessageActionToken = new i0.InjectionToken('GoalAutoApproveMessageAction');
    /** @type {?} */
    var GoalAutoApproveLeaderMessageActionToken = new i0.InjectionToken('GoalAutoApproveLeaderMessageAction');
    /** @type {?} */
    var ApproveGoalIsRejectMessageActionToken = new i0.InjectionToken('ApproveGoalIsRejectMessageAction');
    /** @type {?} */
    var ApproveGoalIsApproveMessageActionToken = new i0.InjectionToken('ApproveGoalIsApproveMessageAction');
    /** @type {?} */
    var PendingReviewMessageActionToken = new i0.InjectionToken('PendingReviewMessageAction');
    /** @type {?} */
    var SupervisorHaveChangeAgentMessageActionToken = new i0.InjectionToken('SupervisorHaveChangeAgentMessageAction');
    /** @type {?} */
    var SupervisorHaveChangeOldMessageActionToken = new i0.InjectionToken('SupervisorHaveChangeOldMessageAction');
    /** @type {?} */
    var SupervisorHaveChangeNewMessageActionToken = new i0.InjectionToken('SupervisorHaveChangeNewMessageAction');
    /** @type {?} */
    var GoalAutoRejectMessageActionToken = new i0.InjectionToken('GoalAutoRejectMessageAction');
    /** @type {?} */
    var GoalAutoRejectLeaderMessageActionToken = new i0.InjectionToken('GoalAutoRejectLeaderMessageAction');
    /** @type {?} */
    var ActivityArriveTenPointMessageActionToken = new i0.InjectionToken('ActivityArriveTenPointMessageAction');
    /** @type {?} */
    var ActivityArriveTwentyPointMessageActionToken = new i0.InjectionToken('ActivityArriveTwentyPointMessageAction');
    /** @type {?} */
    var ActivityNotArriveTwentyPointMessageActionToken = new i0.InjectionToken('ActivityNotArriveTwentyPointMessageAction');
    /** @type {?} */
    var ReminderEventsMessageActionToken = new i0.InjectionToken('ReminderEventsMessageAction');
    /** @type {?} */
    var DataPrivacyProtectionMessageActionToken = new i0.InjectionToken('DataPrivacyProtectionMessageAction');
    /** @type {?} */
    var OvertimeMessageActionToken = new i0.InjectionToken('OvertimeMessageAction');
    /** @type {?} */
    var AutoDeleteMessageActionToken = new i0.InjectionToken('AutoDeleteMessageAction');
    /** @type {?} */
    var OfflineMessageActionToken = new i0.InjectionToken('OfflineMessageAction');
    /** @type {?} */
    var VersionCheckMessageActionToken = new i0.InjectionToken('VersionCheckMessageAction');
    /** @type {?} */
    var TimoutMessageActionToken = new i0.InjectionToken('TimoutMessageAction');
    /** @type {?} */
    var DataCollectionMessageActionToken = new i0.InjectionToken('DataCollectionMessageAction');
    /** @type {?} */
    var ContactPermissionActionToken = new i0.InjectionToken('ContactPermissionAction');
    //Extension Data 
    /** @type {?} */
    var yearConfigExtensionDataToken = new i0.InjectionToken("ExtensionFactory");
    /** @type {?} */
    var goalSettingExtensionDataToken = new i0.InjectionToken("ExtensionFactory");
    /** @type {?} */
    var agencyPlanExtensionDataToken = new i0.InjectionToken("ExtensionFactory");
    //export const goalSettingValueExtensionDataToken = new InjectionToken<ExtensionFactory>("ExtensionFactory");
    //actionDirectiveTask
    /** @type {?} */
    var actionDirectiveTaskToken = new i0.InjectionToken("IActionDirectiveTask");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AOPTokenService = /** @class */ (function () {
        function AOPTokenService() {
            this.tokenMap = new Map();
        }
        /**
         * @param {?} name
         * @param {?} token
         * @return {?}
         */
        AOPTokenService.prototype.registerToken = /**
         * @param {?} name
         * @param {?} token
         * @return {?}
         */
            function (name, token) {
                this.tokenMap.set(name, token);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        AOPTokenService.prototype.getToken = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.tokenMap.get(name);
            };
        AOPTokenService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        AOPTokenService.ctorParameters = function () { return []; };
        /** @nocollapse */ AOPTokenService.ngInjectableDef = i0.defineInjectable({ factory: function AOPTokenService_Factory() { return new AOPTokenService(); }, token: AOPTokenService, providedIn: "root" });
        return AOPTokenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isNotEmpty = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return val !== '' && val !== null && val !== undefined && val !== 'null' && val !== 'NULL';
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.trim = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (this.isEmpty(val))
                    return '';
                else
                    return val.trim();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isEmpty = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (this.isNotEmpty(val))
                    return false;
                else
                    return true;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.convertEmptyVal = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (this.isNotEmpty(val))
                    return val;
                else
                    return '';
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.byteLength = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var byteLen = 0;
                if (val && val.length) {
                    for (var i = 0; i < val.length; i++) {
                        if ((val.charCodeAt(i) & 0xff00) != 0) {
                            byteLen++;
                        }
                        byteLen++;
                    }
                }
                return byteLen;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isHasEnglish = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return !!val && val.match(this.matchEnglishRegExp) !== null;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isAllEnglish = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = val && val.match(this.matchEnglishRegExp);
                return !!result && result[0].length === val.length;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isHasChinese = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return !!val && val.match(this.matchChineseRegExp) !== null;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isAllChinese = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = val && val.match(this.matchChineseRegExp);
                return !!result && result[0].length === val.length;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.getEnglishCharCount = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = val && val.match(this.matchEnglishRegExp);
                return result ? result[0].length : 0;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.getChineseCharCount = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = val && val.match(this.matchChineseRegExp);
                return result ? result[0].length : 0;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.getNumberCharCount = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = val && val.match(this.matchNumberRegExp);
                return result ? result[0].length : 0;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        StringUtils.isHasThai = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (!val) {
                    val = '';
                }
                /** @type {?} */
                var count = 0;
                val.split('').forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (item.charCodeAt(0) > 3584 && item.charCodeAt(0) < 3711) {
                        count++;
                    }
                }));
                return count > 0;
            };
        StringUtils.matchEnglishRegExp = "[a-zA-Z]+";
        StringUtils.matchChineseRegExp = "[\\u4e00-\\u9fa5]+|['ㄧ']+";
        StringUtils.matchNumberRegExp = "[0-9]+";
        return StringUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateUtils = /** @class */ (function () {
        function DateUtils(datePipe) {
            this.datePipe = datePipe;
        }
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        DateUtils.prototype.toDateString = /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
            function (date, format) {
                if (date != undefined) {
                    return this.datePipe.transform(date, format);
                }
            };
        DateUtils.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DateUtils.ctorParameters = function () {
            return [
                { type: i1.DatePipe }
            ];
        };
        /** @nocollapse */ DateUtils.ngInjectableDef = i0.defineInjectable({ factory: function DateUtils_Factory() { return new DateUtils(i0.inject(i1.DatePipe)); }, token: DateUtils, providedIn: "root" });
        return DateUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageInfo = /** @class */ (function () {
        function PageInfo() {
            this._pageSize = 10;
            this._page = 1;
        }
        /**
         * @return {?}
         */
        PageInfo.prototype.resetPage = /**
         * @return {?}
         */
            function () {
                this._page = 1;
            };
        Object.defineProperty(PageInfo.prototype, "pageSize", {
            get: /**
             * @return {?}
             */ function () {
                return this._pageSize;
            },
            set: /**
             * @param {?} pageSize
             * @return {?}
             */ function (pageSize) {
                this._pageSize = pageSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageInfo.prototype, "totalRec", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalRec;
            },
            set: /**
             * @param {?} totalRec
             * @return {?}
             */ function (totalRec) {
                this._totalRec = totalRec;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageInfo.prototype, "totalPage", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalPage;
            },
            set: /**
             * @param {?} totalPage
             * @return {?}
             */ function (totalPage) {
                this._totalPage = totalPage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageInfo.prototype, "page", {
            get: /**
             * @return {?}
             */ function () { return this._page; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PageInfo.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                this._page++;
            };
        return PageInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidationResult = /** @class */ (function () {
        function ValidationResult() {
            this.errorMap = new Map();
        }
        /**
         * @param {?} name
         * @param {?} errorMsg
         * @return {?}
         */
        ValidationResult.prototype.setErrorMap = /**
         * @param {?} name
         * @param {?} errorMsg
         * @return {?}
         */
            function (name, errorMsg) {
                this.errorMap.set(name, errorMsg);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ValidationResult.prototype.deleteError = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.errorMap.delete(name);
            };
        /**
         * @return {?}
         */
        ValidationResult.prototype.isTrue = /**
         * @return {?}
         */
            function () {
                return (this.errorMap.size == 0);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ValidationResult.prototype.isError = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.errorMap.get(name) != undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ValidationResult.prototype.getErrorMsg = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.errorMap.get(name);
            };
        /**
         * @return {?}
         */
        ValidationResult.prototype.clearErrorMap = /**
         * @return {?}
         */
            function () {
                this.errorMap.clear();
            };
        return ValidationResult;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberUtils = /** @class */ (function () {
        function NumberUtils() {
        }
        /**
         * @param {?} val
         * @return {?}
         */
        NumberUtils.isNumber = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (StringUtils.isNotEmpty(val)) {
                    return !isNaN(Number(val));
                }
                else {
                    return false;
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        NumberUtils.isDecimal = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = false;
                if (this.isNumber(val)) {
                    if (val.toString().indexOf('.') != -1) {
                        result = true;
                    }
                }
                return result;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        NumberUtils.isPositive = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = false;
                console.log('this.isNumber(val)', this.isNumber(val));
                if (this.isNumber(val)) {
                    if (Number(val) > 0 || Number(val) == 0) {
                        console.log('val', val);
                        result = true;
                    }
                }
                return result;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        NumberUtils.isPositiveInt = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var result = false;
                if (!this.isDecimal(val)) {
                    if (Number(val) >= 0) {
                        result = true;
                    }
                }
                return result;
            };
        /**
         * @param {?} n
         * @param {?} toFix
         * @return {?}
         */
        NumberUtils.numberToFix = /**
         * @param {?} n
         * @param {?} toFix
         * @return {?}
         */
            function (n, toFix) {
                /** @type {?} */
                var fix10 = Math.pow(10, toFix);
                return Math.round(this.strip(n) * fix10) / fix10;
            };
        /**
         * @param {?} num
         * @param {?=} precision
         * @return {?}
         */
        NumberUtils.strip = /**
         * @param {?} num
         * @param {?=} precision
         * @return {?}
         */
            function (num, precision) {
                if (precision === void 0) {
                    precision = 12;
                }
                return Number(num.toPrecision(precision));
            };
        return NumberUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableUtils = /** @class */ (function () {
        function TableUtils() {
        }
        /**
         * @param {?} tableObject
         * @param {?} data
         * @return {?}
         */
        TableUtils.fillTableColumn = /**
         * @param {?} tableObject
         * @param {?} data
         * @return {?}
         */
            function (tableObject, data) {
                var e_1, _a;
                /** @type {?} */
                var columns = tableObject.getColumns().map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName(); })).filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x !== 'ClientID'; }));
                if (data != undefined) {
                    if (columns.length > 0) {
                        try {
                            for (var columns_1 = __values(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                                var col = columns_1_1.value;
                                if (data[col] != undefined)
                                    tableObject.setValue(col, data[col]);
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return))
                                    _a.call(columns_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                    }
                }
                return tableObject;
            };
        return TableUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Address = /** @class */ (function () {
        function Address(type, city, area, code, address) {
            this._type = type;
            this._city = city;
            this._area = area;
            this._code = code;
            this._address = address;
        }
        Object.defineProperty(Address.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: /**
             * @return {?}
             */ function () {
                return this._city;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._city = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "area", {
            get: /**
             * @return {?}
             */ function () {
                return this._area;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._area = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "code", {
            get: /**
             * @return {?}
             */ function () {
                return this._code;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._code = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "address", {
            get: /**
             * @return {?}
             */ function () {
                return this._address;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._address = value;
            },
            enumerable: true,
            configurable: true
        });
        return Address;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Phone = /** @class */ (function () {
        function Phone(type, number) {
            this._type = type;
            this._number = number;
        }
        Object.defineProperty(Phone.prototype, "number", {
            get: /**
             * @return {?}
             */ function () {
                return this._number;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._number = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Phone.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        return Phone;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactItem = /** @class */ (function () {
        function ContactItem(firstname, lastname, birthday, phones, emails, address) {
            this._isCheck = false;
            this._isShow = false;
            this._firstname = firstname;
            this._lastname = lastname;
            this._birthday = birthday;
            this._phones = phones;
            this._emails = emails;
            this._address = address;
            this._isShow = true;
        }
        Object.defineProperty(ContactItem.prototype, "Birthday", {
            get: /**
             * @return {?}
             */ function () {
                return this._birthday;
            },
            set: /**
             * @param {?} birthday
             * @return {?}
             */ function (birthday) {
                this._birthday = birthday;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "isCheck", {
            get: /**
             * @return {?}
             */ function () {
                return this._isCheck;
            },
            set: /**
             * @param {?} check
             * @return {?}
             */ function (check) {
                this._isCheck = check;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "isShow", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShow;
            },
            set: /**
             * @param {?} show
             * @return {?}
             */ function (show) {
                this._isShow = show;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "FirstName", {
            get: /**
             * @return {?}
             */ function () {
                return this._firstname;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._firstname = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "LastName", {
            get: /**
             * @return {?}
             */ function () {
                return this._lastname;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._lastname = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "tel", {
            get: /**
             * @return {?}
             */ function () {
                return this._phones;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._phones = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "email", {
            get: /**
             * @return {?}
             */ function () {
                return this._emails;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._emails = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "address", {
            get: /**
             * @return {?}
             */ function () {
                return this._address;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._address = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactItem.prototype, "fullname", {
            get: /**
             * @return {?}
             */ function () {
                return this.FirstName + ' ' + this.LastName;
            },
            enumerable: true,
            configurable: true
        });
        return ContactItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CordovaDeviceDao = /** @class */ (function () {
        function CordovaDeviceDao() {
        }
        /**
         * @param {?} name
         * @return {?}
         */
        CordovaDeviceDao.prototype.searchcontactsByName = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                var _this = this;
                /** @type {?} */
                var _navigator = (( /** @type {?} */(navigator)));
                /** @type {?} */
                var fields = [_navigator.contacts.fieldType.displayName, _navigator.contacts.fieldType.name];
                /** @type {?} */
                var options = new ContactFindOptions();
                options.filter = name;
                options.multiple = true;
                options.desiredFields = [_navigator.contacts.fieldType.name, _navigator.contacts.fieldType.emails, _navigator.contacts.fieldType.addresses, _navigator.contacts.fieldType.phoneNumbers];
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _navigator.contacts.find(fields, ( /**
                     * @param {?} contacts
                     * @return {?}
                     */function (contacts) {
                        var e_1, _a;
                        console.log('find contacts results:', contacts);
                        /** @type {?} */
                        var returnObj = {
                            "Body": []
                        };
                        try {
                            // var results = [];
                            for (var contacts_1 = __values(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
                                var contact = contacts_1_1.value;
                                /** @type {?} */
                                var firstName = contact.name.givenName || '';
                                /** @type {?} */
                                var lastName = contact.name.familyName || '';
                                /** @type {?} */
                                var birthday = contact.name.birthday || null;
                                /** @type {?} */
                                var emails = contact.emails == null ? [] : contact.emails.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.value; }));
                                /** @type {?} */
                                var phones = contact.phoneNumbers == null ? [] : contact.phoneNumbers.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return new Phone(x.type, x.value.trim()); }));
                                /** @type {?} */
                                var address = contact.addresses == null ? [] : contact.addresses.map(_this.convertAddress);
                                returnObj['Body'].push(new ContactItem(firstName, lastName, birthday, phones, emails, address));
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return))
                                    _a.call(contacts_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                        observer.next(returnObj);
                        observer.complete();
                    }), ( /**
                     * @param {?} contactError
                     * @return {?}
                     */function (contactError) {
                        console.log('contacts error:', contactError, options);
                        observer.error(contactError);
                        observer.complete();
                    }), options);
                }));
            };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        CordovaDeviceDao.prototype.convertAddress = /**
         * @private
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var type = item.type || null;
                /** @type {?} */
                var address = item.streetAddress || null;
                /** @type {?} */
                var area = item.locality || null;
                /** @type {?} */
                var city = item.reigon || null;
                /** @type {?} */
                var code = item.postalCode || null;
                return new Address(type, city, area, code, address);
            };
        /**
         * @return {?}
         */
        CordovaDeviceDao.prototype.registerNotfiy = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var token;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.checkNotifyPermission();
                                return [4 /*yield*/, this.getFirbaseToken()];
                            case 1:
                                token = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(token === null))
                                    return [3 /*break*/, 5];
                                return [4 /*yield*/, this.waitnseconds(2000)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, this.getFirbaseToken()];
                            case 4:
                                token = _a.sent();
                                return [3 /*break*/, 2];
                            case 5: return [2 /*return*/, token];
                        }
                    });
                });
            };
        /**
         * @param {?} callback
         * @return {?}
         */
        CordovaDeviceDao.prototype.onNotifyTokenRefresh = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                return window.FirebasePlugin.onTokenRefresh(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
                    callback(token);
                }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.warn('token refresh error:', err.message);
                }));
            };
        /**
         * @param {?} callback
         * @return {?}
         */
        CordovaDeviceDao.prototype.onNotificationOpen = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                window.FirebasePlugin.onMessageReceived(( /**
                 * @param {?} notification
                 * @return {?}
                 */function (notification) {
                    callback(notification);
                }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.warn('notification open error:', err.message);
                }));
            };
        /**
         * @param {?} subject
         * @return {?}
         */
        CordovaDeviceDao.prototype.subscribeSubject = /**
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                window.FirebasePlugin.subscribe(subject);
            };
        /**
         * @param {?} subject
         * @return {?}
         */
        CordovaDeviceDao.prototype.unsubscribeSubject = /**
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                window.FirebasePlugin.unsubscribe(subject);
            };
        /**
         * @private
         * @return {?}
         */
        CordovaDeviceDao.prototype.checkNotifyPermission = /**
         * @private
         * @return {?}
         */
            function () {
                window.FirebasePlugin.hasPermission(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (!data.isEnabled) {
                        window.FirebasePlugin.grantPermission();
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        CordovaDeviceDao.prototype.getFirbaseToken = /**
         * @private
         * @return {?}
         */
            function () {
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    window.FirebasePlugin.getToken(( /**
                     * @param {?} token
                     * @return {?}
                     */function (token) {
                        console.log("firebase gettoken:", token);
                        res(token);
                    }), ( /**
                     * @param {?} err
                     * @return {?}
                     */function (err) {
                        console.warn('get token error:', err.message);
                        rej(err);
                    }));
                }));
            };
        /**
         * @private
         * @param {?} second
         * @return {?}
         */
        CordovaDeviceDao.prototype.waitnseconds = /**
         * @private
         * @param {?} second
         * @return {?}
         */
            function (second) {
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        res();
                    }), second);
                }));
            };
        return CordovaDeviceDao;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceFactory = /** @class */ (function () {
        function DeviceFactory() {
            this.daoMap = new Map();
            this.daoMap.set("cordova", new CordovaDeviceDao());
        }
        /**
         * @return {?}
         */
        DeviceFactory.prototype.getDefaultDao = /**
         * @return {?}
         */
            function () {
                return this.getDao("cordova");
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DeviceFactory.prototype.getDao = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.daoMap.get(name);
            };
        DeviceFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DeviceFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DeviceFactory.ngInjectableDef = i0.defineInjectable({ factory: function DeviceFactory_Factory() { return new DeviceFactory(); }, token: DeviceFactory, providedIn: "root" });
        return DeviceFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceService = /** @class */ (function () {
        function DeviceService(injector, deviceFactory, APP_CONFIG) {
            var _this_1 = this;
            this.injector = injector;
            this.deviceFactory = deviceFactory;
            this.APP_CONFIG = APP_CONFIG;
            this.SSL_fingerprints = [];
            this.deviceID = null;
            this.mock_deviceID = uuid.v4();
            /** @type {?} */
            var env = this.APP_CONFIG.ENV;
            this.SSL_fingerprints = this.APP_CONFIG[env].SSL_FINGERPRINTS;
            if (env === 'DEV_WebSQL')
                this.initDeviceID().then(( /**
                 * @param {?} id
                 * @return {?}
                 */function (id) {
                    _this_1.deviceID = id;
                }));
        }
        /**
         * @return {?}
         */
        DeviceService.prototype.initDeviceAPI = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                window.open = cordova.InAppBrowser.open;
                                this._isPad = this.judgePad();
                                this.lockScreenOrient();
                                this.disableBackBtn();
                                _a = this;
                                return [4 /*yield*/, this.initDeviceID()];
                            case 1:
                                _a.deviceID = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getDevicePlatform = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var platform = null;
                try {
                    platform = device.platform;
                }
                catch (error) {
                    console.log('cannot get platform, beacause maynot on device.');
                    platform = 'PC';
                    //this.errorHandler.handleError(error);
                }
                finally {
                    return platform;
                }
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getDeviceUUID = /**
         * @return {?}
         */
            function () {
                if (this.deviceID)
                    return this.deviceID;
            };
        /**
         * @private
         * @return {?}
         */
        DeviceService.prototype._getDeviceUUID = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var uuid$$1 = null;
                try {
                    uuid$$1 = device.uuid;
                }
                catch (error) {
                    console.log('cannot get UUID, beacause maynot on device.');
                    uuid$$1 = this.mock_deviceID;
                    //this.errorHandler.handleError(error);
                }
                finally {
                    return uuid$$1;
                }
            };
        /**
         * @private
         * @return {?}
         */
        DeviceService.prototype.initDeviceID = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var deviceID, resp, setKeyResp, key, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                deviceID = this._getDeviceUUID();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 8, , 9]);
                                return [4 /*yield*/, this.getSecureStorage("deviceID").toPromise()];
                            case 2:
                                resp = _a.sent();
                                console.log("getDeviceID from KeyStore resp:", resp);
                                if (!resp.includes("Device is not secure"))
                                    return [3 /*break*/, 3];
                                throw new Error(resp);
                            case 3:
                                if (!resp)
                                    return [3 /*break*/, 4];
                                return [2 /*return*/, resp];
                            case 4: return [4 /*yield*/, this.setSecureStorage("deviceID", deviceID).toPromise()];
                            case 5:
                                setKeyResp = _a.sent();
                                if (!setKeyResp)
                                    return [3 /*break*/, 7];
                                return [4 /*yield*/, this.getSecureStorage("deviceID").toPromise()];
                            case 6:
                                key = _a.sent();
                                return [2 /*return*/, key];
                            case 7: return [3 /*break*/, 9];
                            case 8:
                                error_1 = _a.sent();
                                console.log("getDeviceID error, use localStorage");
                                if (this.getLocalStorage("deviceID")) {
                                    return [2 /*return*/, this.getLocalStorage("deviceID")];
                                }
                                else {
                                    this.setLocalStorage("deviceID", deviceID);
                                    return [2 /*return*/, deviceID];
                                }
                                return [3 /*break*/, 9];
                            case 9: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getDeviceManufacturer = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var manufacturer = null;
                try {
                    manufacturer = device.manufacturer + " " + device.model;
                }
                catch (error) {
                    console.log('cannot get Manufacturer, beacause maynot on device.');
                    manufacturer = "PC Browser";
                    // this.errorHandler.handleError(error);
                }
                finally {
                    return manufacturer;
                }
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.restartApp = /**
         * @return {?}
         */
            function () {
                try {
                    // navigator.splashscreen.show();
                    window.location.reload(true);
                    window.location.assign('index.html');
                    // navigator.splashscreen.hide();
                }
                catch (error) {
                    console.log('restart error');
                    //this.errorHandler.handleError(error);
                }
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getNetworkState = /**
         * @return {?}
         */
            function () {
                if (navigator && navigator.connection) {
                    /** @type {?} */
                    var networkState = navigator.connection.type;
                    console.log('networkState:', networkState);
                    return networkState != 'none';
                }
                else
                    return true;
            };
        /**
         * @param {?} word
         * @return {?}
         */
        DeviceService.prototype.searchContactsByName = /**
         * @param {?} word
         * @return {?}
         */
            function (word) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, dao, resp, contacts, contacts_1, contacts_1_1, item, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                dao = this.deviceFactory.getDefaultDao();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, dao.searchcontactsByName('').toPromise()];
                            case 2:
                                resp = _b.sent();
                                console.log('search Contact result:', resp);
                                contacts = resp['Body'];
                                try {
                                    for (contacts_1 = __values(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
                                        item = contacts_1_1.value;
                                        if (StringUtils.isEmpty(item.l))
                                            item.isCheck = false;
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return))
                                            _a.call(contacts_1);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                return [2 /*return*/, contacts];
                            case 3:
                                error_2 = _b.sent();
                                console.log('error:', error_2);
                                return [2 /*return*/, error_2];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} num
         * @return {?}
         */
        DeviceService.prototype.dialNumber = /**
         * @param {?} num
         * @return {?}
         */
            function (num) {
                window.open('tel:' + num.replace(/\s/g, ''), '_system');
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.checkIfRoot = /**
         * @return {?}
         */
            function () {
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    try {
                        console.log("iroot:", IRoot);
                        if (IRoot !== undefined) {
                            IRoot.isRooted(( /**
                             * @param {?} result
                             * @return {?}
                             */function (result) {
                                res(result);
                            }), ( /**
                             * @param {?} error
                             * @return {?}
                             */function (error) {
                                rej(error);
                            }));
                        }
                        else {
                            throw new Error("iRoot plugin error.");
                        }
                    }
                    catch (error) {
                        res(false);
                    }
                }));
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.exitApp = /**
         * @return {?}
         */
            function () {
                cordova.plugins.exit();
                // navigator.app.exitApp();
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getAppVersion = /**
         * @return {?}
         */
            function () {
                try {
                    return cordova.getAppVersion.getVersionNumber();
                }
                catch (error) {
                    //this.errorHandler.handleError(error);
                    return Promise.resolve("1.0.3"); //1.0.0
                }
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.getIsFirstLaunch = /**
         * @return {?}
         */
            function () {
                return this.getLocalStorage("AppFirstLaunch") === 'N' ? false : true;
            };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DeviceService.prototype.setLocalStorage = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                window.localStorage.setItem(key, value);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        DeviceService.prototype.getLocalStorage = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return window.localStorage.getItem(key);
            };
        /**
         * @private
         * @return {?}
         */
        DeviceService.prototype.lockScreenOrient = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var orientation = this.isPad() ? 'landscape' : 'portrait-primary';
                (( /** @type {?} */(window))).screen.orientation.lock(orientation);
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.judgePad = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var width = window.innerWidth;
                /** @type {?} */
                var height = window.innerHeight;
                console.log('width:', width);
                console.log('height:', height);
                if (width < 700 || height < 700) {
                    return false;
                }
                else {
                    return true;
                }
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.isPad = /**
         * @return {?}
         */
            function () {
                return this._isPad;
            };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DeviceService.prototype.setSecureStorage = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var ss = new cordova.plugins.SecureStorage(( /**
                     * @return {?}
                     */function () {
                        ss.set(( /**
                         * @return {?}
                         */function () {
                            observer.next(true);
                            observer.complete();
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            observer.next(false);
                            observer.complete();
                        }), key, value);
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        observer.next(false);
                        observer.complete();
                    }), "Allianz_SND");
                }));
            };
        /**
         * @param {?} key
         * @return {?}
         */
        DeviceService.prototype.getSecureStorage = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var ss = new cordova.plugins.SecureStorage(( /**
                     * @return {?}
                     */function () {
                        ss.get(( /**
                         * @param {?} key
                         * @return {?}
                         */function (key) {
                            observer.next(key);
                            observer.complete();
                        }), ( /**
                         * @return {?}
                         */function () {
                            observer.next(null);
                            observer.complete();
                        }), key);
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        observer.next(error.message);
                        observer.complete();
                    }), "Allianz_SND");
                }));
            };
        /**
         * @param {?} url
         * @return {?}
         */
        DeviceService.prototype.checkSSL = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                var _this_1 = this;
                if (this.SSL_fingerprints.length == 0)
                    return Promise.resolve(true);
                else
                    return new Promise(( /**
                     * @param {?} res
                     * @param {?} rej
                     * @return {?}
                     */function (res, rej) {
                        (( /** @type {?} */(window))).plugins.sslCertificateChecker.check(( /**
                         * @param {?} message
                         * @return {?}
                         */function (message) {
                            if (message === 'CONNECTION_SECURE')
                                res(true);
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            rej(error);
                        }), url, _this_1.SSL_fingerprints);
                    }));
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.takeScreenShot = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var _this = this;
                (( /** @type {?} */(navigator))).screenshot.save(( /**
                 * @param {?} error
                 * @param {?} res
                 * @return {?}
                 */function (error, res) {
                    if (error) {
                        //todo throw error
                        console.warn(error);
                    }
                    else {
                        console.log('testScreenShot success', res.filePath);
                        console.warn('getDevicePlatform', _this.getDevicePlatform());
                        if (_this.getDevicePlatform() == "iOS")
                            (( /** @type {?} */(cordova))).plugins.imagesaver.saveImageToGallery(res.filePath, ( /**
                             * @return {?}
                             */function () { console.log("success"); }), ( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) { console.log(err); }));
                    }
                }));
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.disableBackBtn = /**
         * @return {?}
         */
            function () {
                document.addEventListener("backbutton", ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
                    e.preventDefault();
                }), false);
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.checkContactPermission = /**
         * @return {?}
         */
            function () {
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    (( /** @type {?} */(cordova))).plugins.CheckPermission.checkContactPermission('contact', ( /**
                     * @param {?} msg
                     * @return {?}
                     */function (msg) {
                        resolve(msg);
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        reject(error);
                    }));
                }));
            };
        /**
         * @return {?}
         */
        DeviceService.prototype.grantContactPermission = /**
         * @return {?}
         */
            function () {
                (( /** @type {?} */(cordova))).plugins.CheckPermission.grantContactPermission();
            };
        DeviceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DeviceService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: DeviceFactory },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ DeviceService.ngInjectableDef = i0.defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(i0.inject(i0.INJECTOR), i0.inject(DeviceFactory), i0.inject(ConfigToken, 8)); }, token: DeviceService, providedIn: "root" });
        return DeviceService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginTokenStore = /** @class */ (function () {
        function LoginTokenStore() {
            this.token = '';
            this.tokenSubject = new rxjs.BehaviorSubject(this.token);
        }
        /**
         * @param {?} token
         * @return {?}
         */
        LoginTokenStore.prototype.setToken = /**
         * @param {?} token
         * @return {?}
         */
            function (token) {
                this.token = token;
                this.tokenSubject.next(this.token);
            };
        /**
         * @return {?}
         */
        LoginTokenStore.prototype.getToken = /**
         * @return {?}
         */
            function () {
                return this.tokenSubject.asObservable();
            };
        LoginTokenStore.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        LoginTokenStore.ctorParameters = function () { return []; };
        /** @nocollapse */ LoginTokenStore.ngInjectableDef = i0.defineInjectable({ factory: function LoginTokenStore_Factory() { return new LoginTokenStore(); }, token: LoginTokenStore, providedIn: "root" });
        return LoginTokenStore;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var defaultHeader = /** @class */ (function () {
        function defaultHeader(deviceService, tokenStore, customLoginMgr) {
            var _this = this;
            this.deviceService = deviceService;
            this.tokenStore = tokenStore;
            this.customLoginMgr = customLoginMgr;
            this.token = '';
            this.version = '';
            if (this.customLoginMgr) {
                this.customLoginMgr.getToken().subscribe(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
                    _this.token = token;
                }));
            }
            else {
                this.tokenStore.getToken().subscribe(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
                    _this.token = token;
                }));
            }
            this.deviceService.getAppVersion().then(( /**
             * @param {?} ver
             * @return {?}
             */function (ver) {
                _this.version = ver;
            }));
        }
        /**
         * @return {?}
         */
        defaultHeader.prototype.getHeader = /**
         * @return {?}
         */
            function () {
                return new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + this.token,
                    'X-Date': new Date().toUTCString(),
                    'X-Request-ID': Date.now().toString(),
                    'X-Organization': '1',
                    'X-Organization-Branch': '1',
                    'X-Organization-User': '1',
                    'X-API-Version': this.version,
                });
            };
        defaultHeader.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        defaultHeader.ctorParameters = function () {
            return [
                { type: DeviceService },
                { type: LoginTokenStore },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LoginMgrToken,] }] }
            ];
        };
        /** @nocollapse */ defaultHeader.ngInjectableDef = i0.defineInjectable({ factory: function defaultHeader_Factory() { return new defaultHeader(i0.inject(DeviceService), i0.inject(LoginTokenStore), i0.inject(LoginMgrToken, 8)); }, token: defaultHeader, providedIn: "root" });
        return defaultHeader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var NotificationType = {
        GoalSettingNotStartFirst: "GoalSettingNotStartFirst",
        GoalSettingNotStart: "GoalSettingNotStart",
        NeedGoalSetting: "NeedGoalSetting",
        GoalPromoSetting: "GoalPromoSetting",
        GoalAutoApprove: "GoalAutoApprove",
        GoalAutoApproveLeader: "GoalAutoApproveLeader",
        ApproveGoalIsReject: "ApproveGoalIsReject",
        ApproveGoalIsApprove: "ApproveGoalIsApprove",
        PendingReview: "PendingReview",
        SupervisorHaveChangeAgent: "SupervisorHaveChangeAgent",
        SupervisorHaveChangeOld: "SupervisorHaveChangeOld",
        SupervisorHaveChangeNew: "SupervisorHaveChangeNew",
        GoalAutoReject: "GoalAutoReject",
        GoalAutoRejectLeader: "GoalAutoRejectLeader",
        ActivityArriveTenPoint: "ActivityArriveTenPoint",
        ActivityArriveTwentyPoint: "ActivityArriveTwentyPoint",
        ActivityLessThanTwentyPoint: "ActivityLessThanTwentyPoint",
        ReminderEvent: "ReminderEvent",
        DataPrivacyProtection: "DataPrivacyProtection",
        Overtime: "Overtime",
        AutoDelete: "AutoDelete",
        Offline: "Offline",
        OnlineCheck: "OnlineCheck",
        NewVersion: "NewVersion",
        Timeout: "Timeout",
        DataCollection: "DataCollection",
        NewVersionLogin: "NewVersionLogin",
        HTTPError: "HTTPError",
        ContactPermissionError: "ContactPermissionError",
        ScreenShotAlert: "ScreenShotAlert",
        SubmitFail: "SubmitFail",
    };
    /** @enum {string} */
    var NotificationCategory = {
        GoalSetting: "GoalSetting",
        Progress: "Progress",
        Calendar: "Calendar",
        Customer: "Customer",
        System: "System",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotificationObject = /** @class */ (function () {
        function NotificationObject() {
            this.category = '';
            this.type = '';
            this.id = uuid.v4();
            this.data = {};
            this.order = -1;
            this.action = null;
        }
        Object.defineProperty(NotificationObject.prototype, "category", {
            get: /**
             * @return {?}
             */ function () {
                return this._category;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._category = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationObject.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationObject.prototype, "id", {
            get: /**
             * @return {?}
             */ function () {
                return this._id;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationObject.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._data = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationObject.prototype, "order", {
            get: /**
             * @return {?}
             */ function () {
                return this._order;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._order = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationObject.prototype, "action", {
            get: /**
             * @return {?}
             */ function () {
                return this._action;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._action = value;
            },
            enumerable: true,
            configurable: true
        });
        return NotificationObject;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotificationProvider = /** @class */ (function () {
        function NotificationProvider(injector, customNotificationProvider) {
            this.injector = injector;
            this.customNotificationProvider = customNotificationProvider;
            this.actionMap = [{
                    type: NotificationType.GoalSettingNotStartFirst,
                    category: NotificationCategory.GoalSetting,
                    order: 1,
                    action: GoalSettingNotStartFirstMessageActionToken
                }, {
                    type: NotificationType.GoalSettingNotStart,
                    category: NotificationCategory.GoalSetting,
                    order: 1,
                    action: GoalSettingNotStartMessageActionToken
                }, {
                    type: NotificationType.NeedGoalSetting,
                    category: NotificationCategory.GoalSetting,
                    order: 2,
                    action: NeedGoalSettingMessageActionToken
                }, {
                    type: NotificationType.GoalPromoSetting,
                    category: NotificationCategory.GoalSetting,
                    order: 3,
                    action: GoalPromoSettingMessageActionToken
                }, {
                    type: NotificationType.GoalAutoApprove,
                    category: NotificationCategory.GoalSetting,
                    order: 4,
                    action: GoalAutoApproveMessageActionToken
                }, {
                    type: NotificationType.GoalAutoApproveLeader,
                    category: NotificationCategory.GoalSetting,
                    order: 5,
                    action: GoalAutoApproveLeaderMessageActionToken
                }, {
                    type: NotificationType.ApproveGoalIsReject,
                    category: NotificationCategory.GoalSetting,
                    order: 6,
                    action: ApproveGoalIsRejectMessageActionToken
                }, {
                    type: NotificationType.ApproveGoalIsApprove,
                    category: NotificationCategory.GoalSetting,
                    order: 7,
                    action: ApproveGoalIsApproveMessageActionToken
                }, {
                    type: NotificationType.PendingReview,
                    category: NotificationCategory.GoalSetting,
                    order: 8,
                    action: PendingReviewMessageActionToken
                }, {
                    type: NotificationType.SupervisorHaveChangeAgent,
                    category: NotificationCategory.GoalSetting,
                    order: 9,
                    action: SupervisorHaveChangeAgentMessageActionToken
                }, {
                    type: NotificationType.SupervisorHaveChangeOld,
                    category: NotificationCategory.GoalSetting,
                    order: 10,
                    action: SupervisorHaveChangeOldMessageActionToken
                }, {
                    type: NotificationType.SupervisorHaveChangeNew,
                    category: NotificationCategory.GoalSetting,
                    order: 11,
                    action: SupervisorHaveChangeNewMessageActionToken
                }, {
                    type: NotificationType.GoalAutoReject,
                    category: NotificationCategory.GoalSetting,
                    order: 12,
                    action: GoalAutoRejectMessageActionToken
                }, {
                    type: NotificationType.GoalAutoRejectLeader,
                    category: NotificationCategory.GoalSetting,
                    order: 13,
                    action: GoalAutoRejectLeaderMessageActionToken
                }, {
                    type: NotificationType.ActivityArriveTenPoint,
                    category: NotificationCategory.Progress,
                    order: 14,
                    action: ActivityArriveTenPointMessageActionToken
                }, {
                    type: NotificationType.ActivityArriveTwentyPoint,
                    category: NotificationCategory.Progress,
                    order: 15,
                    action: ActivityArriveTwentyPointMessageActionToken
                }, {
                    type: NotificationType.ActivityLessThanTwentyPoint,
                    category: NotificationCategory.Progress,
                    order: 16,
                    action: ActivityNotArriveTwentyPointMessageActionToken
                }, {
                    type: NotificationType.ReminderEvent,
                    category: NotificationCategory.Calendar,
                    order: 17,
                    action: ReminderEventsMessageActionToken
                }, {
                    type: NotificationType.DataPrivacyProtection,
                    category: NotificationCategory.Customer,
                    order: 18,
                    action: DataPrivacyProtectionMessageActionToken
                }, {
                    type: NotificationType.Overtime,
                    category: NotificationCategory.Customer,
                    order: 19,
                    action: OvertimeMessageActionToken
                }, {
                    type: NotificationType.AutoDelete,
                    category: NotificationCategory.Customer,
                    order: 20,
                    action: AutoDeleteMessageActionToken
                }, {
                    type: NotificationType.Offline,
                    category: NotificationCategory.System,
                    order: 21,
                    action: OfflineMessageActionToken
                }, {
                    type: NotificationType.OnlineCheck,
                    category: NotificationCategory.System,
                    order: 22,
                    action: null
                }, {
                    type: NotificationType.NewVersion,
                    category: NotificationCategory.System,
                    order: 23,
                    action: VersionCheckMessageActionToken
                }, {
                    type: NotificationType.NewVersionLogin,
                    category: NotificationCategory.System,
                    order: 24,
                    action: VersionCheckMessageActionToken
                }, {
                    type: NotificationType.Timeout,
                    category: NotificationCategory.System,
                    order: 25,
                    action: TimoutMessageActionToken
                }, {
                    type: NotificationType.DataCollection,
                    category: NotificationCategory.System,
                    order: 26,
                    action: DataCollectionMessageActionToken
                }, {
                    type: NotificationType.HTTPError,
                    category: NotificationCategory.System,
                    order: 27,
                    action: null
                }, {
                    type: NotificationType.ContactPermissionError,
                    category: NotificationCategory.System,
                    order: 28,
                    action: ContactPermissionActionToken
                }, {
                    type: NotificationType.ScreenShotAlert,
                    category: NotificationCategory.System,
                    order: 29,
                    action: null
                }, {
                    type: NotificationType.SubmitFail,
                    category: NotificationCategory.System,
                    order: 30,
                    action: null
                }];
        }
        /**
         * @param {?} type
         * @param {?} data
         * @param {?=} id
         * @return {?}
         */
        NotificationProvider.prototype.getNotificationObject = /**
         * @param {?} type
         * @param {?} data
         * @param {?=} id
         * @return {?}
         */
            function (type, data, id) {
                if (id === void 0) {
                    id = null;
                }
                if (this.customNotificationProvider) {
                    return this.customNotificationProvider.getNotificationObject(type, data);
                }
                else {
                    /** @type {?} */
                    var obj = new NotificationObject();
                    if (id)
                        obj.id = id;
                    obj.data = data;
                    /** @type {?} */
                    var findedType = this.actionMap.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.type === type; }));
                    if (findedType.length > 0) {
                        obj.order = findedType[0].order;
                        obj.category = findedType[0].category;
                        obj.type = findedType[0].type;
                        obj.action = this.getAction(findedType[0].action);
                    }
                    return obj;
                }
            };
        /**
         * @private
         * @param {?} token
         * @return {?}
         */
        NotificationProvider.prototype.getAction = /**
         * @private
         * @param {?} token
         * @return {?}
         */
            function (token) {
                /** @type {?} */
                var action;
                if (token) {
                    try {
                        action = this.injector.get(token);
                    }
                    catch (_a) {
                        action = null;
                    }
                }
                else {
                    action = null;
                }
                return action;
            };
        NotificationProvider.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        NotificationProvider.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NotificationProviderToken,] }] }
            ];
        };
        /** @nocollapse */ NotificationProvider.ngInjectableDef = i0.defineInjectable({ factory: function NotificationProvider_Factory() { return new NotificationProvider(i0.inject(i0.INJECTOR), i0.inject(NotificationProviderToken, 8)); }, token: NotificationProvider, providedIn: "root" });
        return NotificationProvider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotificationMgr = /** @class */ (function () {
        function NotificationMgr(injector, errorHandler, notificationProvider) {
            this.injector = injector;
            this.errorHandler = errorHandler;
            this.notificationProvider = notificationProvider;
            this.DBMessage = [];
            this.notificationList = [];
            this.notificationSubject = new rxjs.BehaviorSubject(this.notificationList);
        }
        /**
         * @return {?}
         */
        NotificationMgr.prototype.init = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("NotificationMgr init");
                                return [4 /*yield*/, this.fetchMessageData()];
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
        NotificationMgr.prototype.getNotificationList = /**
         * @return {?}
         */
            function () {
                console.log("NotificationMgr getNotificationList");
                return this.notificationSubject.asObservable();
            };
        /**
         * @param {?} type
         * @param {?} data
         * @return {?}
         */
        NotificationMgr.prototype.pushNotification = /**
         * @param {?} type
         * @param {?} data
         * @return {?}
         */
            function (type, data) {
                /** @type {?} */
                var notify = this.notificationProvider.getNotificationObject(type, data);
                console.log("NotificationMgr pushNotification:", notify);
                // 處理reminder message
                if (notify.action) {
                    /** @type {?} */
                    var duplicateList = this.notificationList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.category === notify.category && x.type === notify.type; }));
                    /** @type {?} */
                    var conflictResult = notify.action.onConflict(duplicateList, notify);
                    this.notificationList = __spread(conflictResult, this.notificationList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.category !== notify.category || x.type !== notify.type; })));
                }
                else {
                    this.notificationList.push(notify);
                }
                this.notificationList = this.notificationList.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return a.order - b.order; }));
                this.notificationSubject.next(this.notificationList);
            };
        /**
         * @param {?} notification
         * @return {?}
         */
        NotificationMgr.prototype.popNotification = /**
         * @param {?} notification
         * @return {?}
         */
            function (notification) {
                console.log("NotificationMgr popNotification:", notification);
                try {
                    /** @type {?} */
                    var popped = this.notificationList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.id === notification.id; })).length > 0;
                    console.log("popNotification:", popped);
                    if (popped) {
                        this.notificationList = this.notificationList.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.id !== notification.id; }));
                        this.notificationSubject.next(this.notificationList);
                        console.log("after popped:", this.notificationList);
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new APPError("F00021", error.message));
                }
            };
        /**
         * @return {?}
         */
        NotificationMgr.prototype.getUnreadMessageNumber = /**
         * @return {?}
         */
            function () {
                return this.DBMessage.length;
            };
        /**
         * @return {?}
         */
        NotificationMgr.prototype.popAllNotification = /**
         * @return {?}
         */
            function () {
                this.notificationList = [];
                this.notificationSubject.next(this.notificationList);
            };
        /**
         * @param {?=} category
         * @param {?=} type
         * @return {?}
         */
        NotificationMgr.prototype.showCategoryMessage = /**
         * @param {?=} category
         * @param {?=} type
         * @return {?}
         */
            function (category, type) {
                if (category === void 0) {
                    category = null;
                }
                if (type === void 0) {
                    type = null;
                }
                console.log("NotificationMgr ShowCategoryMessage:", category, type);
                /** @type {?} */
                var selected = this.DBMessage.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    return ((x.category === category) || (!category)) && ((x.type === type) || (!type));
                }));
                /** @type {?} */
                var selected_id = selected.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.id; }));
                if (selected.length > 0) {
                    this.notificationList = __spread(this.notificationList, selected);
                    this.notificationSubject.next(this.notificationList);
                    this.DBMessage = this.DBMessage.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return selected_id.indexOf(x.id) < 0; }));
                    // update db message status
                    /** @type {?} */
                    var APIFactory_1 = this.getAPIFactory();
                    /** @type {?} */
                    var dispatcher = this.getAPIDispatch();
                    /** @type {?} */
                    var updateMessageStatusAPI = APIFactory_1.getAPI('updateDashboardMessageStatus');
                    (( /** @type {?} */(updateMessageStatusAPI))).setClientIDList(selected_id);
                    (( /** @type {?} */(updateMessageStatusAPI))).setStatus('Reading');
                    dispatcher.dispatch(updateMessageStatusAPI).subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log("NotificationMgr popNotification updateMessageStatusAPI resp:", resp);
                    }));
                }
            };
        /**
         * @return {?}
         */
        NotificationMgr.prototype.fetchMessageData = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var fetched_messages, APIFactory_2, dispatcher, getMessageAPI, resp, messageList, err_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("NotificationMgr fetchMessageData");
                                fetched_messages = [];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                APIFactory_2 = this.getAPIFactory();
                                dispatcher = this.getAPIDispatch();
                                getMessageAPI = APIFactory_2.getAPI("getDashboardMessageList");
                                (( /** @type {?} */(getMessageAPI))).setKeyword("UnRead");
                                (( /** @type {?} */(getMessageAPI))).setIsPopup(true);
                                return [4 /*yield*/, dispatcher.dispatch(getMessageAPI).toPromise()];
                            case 2:
                                resp = _a.sent();
                                messageList = resp['Body'];
                                fetched_messages = messageList.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) {
                                    return _this.notificationProvider.getNotificationObject(x.MessageType, Object.assign({
                                        "Source": "DB",
                                        "Title": x.Title,
                                        "Description": x.Description,
                                    }, JSON.parse(x.Arguments)), x.ClientID);
                                }));
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                this.errorHandler.handleError(new APPError("F00020", err_1.message));
                                return [3 /*break*/, 4];
                            case 4:
                                this.DBMessage = fetched_messages;
                                console.log("NotificationMgr fetchMessageData end", this.DBMessage);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        NotificationMgr.prototype.getAPIFactory = /**
         * @private
         * @return {?}
         */
            function () {
                try {
                    /** @type {?} */
                    var factory = this.injector.get(APIFactory);
                    return factory;
                }
                catch (_a) {
                    return null;
                }
            };
        /**
         * @private
         * @return {?}
         */
        NotificationMgr.prototype.getAPIDispatch = /**
         * @private
         * @return {?}
         */
            function () {
                try {
                    /** @type {?} */
                    var dispatcher = this.injector.get(APIDispatch);
                    return dispatcher;
                }
                catch (_a) {
                    return null;
                }
            };
        NotificationMgr.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        NotificationMgr.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.ErrorHandler },
                { type: NotificationProvider }
            ];
        };
        /** @nocollapse */ NotificationMgr.ngInjectableDef = i0.defineInjectable({ factory: function NotificationMgr_Factory() { return new NotificationMgr(i0.inject(i0.INJECTOR), i0.inject(i0.ErrorHandler), i0.inject(NotificationProvider)); }, token: NotificationMgr, providedIn: "root" });
        return NotificationMgr;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RestfulAPIAccess = /** @class */ (function () {
        function RestfulAPIAccess(httpService, APP_CONFIG, deviceService, errorHandler, defaultHeader$$1, notificationMgr, customHeader) {
            this.httpService = httpService;
            this.APP_CONFIG = APP_CONFIG;
            this.deviceService = deviceService;
            this.errorHandler = errorHandler;
            this.defaultHeader = defaultHeader$$1;
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
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.deviceService.checkSSL(requestData.url).then(( /**
                     * @return {?}
                     */function () {
                        if (requestData.params != null)
                            options['params'] = requestData.params;
                        if (requestData.type == 'GET') {
                            _this.httpService.get(requestData.url, options).pipe(operators.timeout(requestData.timeout)).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }), ( /**
                             * @param {?} error
                             * @return {?}
                             */function (error) {
                                _this.handleHTTPError(error);
                                observer.error(error.error);
                                observer.complete();
                            }));
                        }
                        else if (requestData.type == 'POST') {
                            _this.httpService.post(requestData.url, requestData.body, options).pipe(operators.timeout(requestData.timeout)).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }), ( /**
                             * @param {?} error
                             * @return {?}
                             */function (error) {
                                _this.handleHTTPError(error);
                                observer.error(error.error);
                                observer.complete();
                            }));
                        }
                        else if (requestData.type == 'PUT') {
                            _this.httpService.put(requestData.url, requestData.body, options).pipe(operators.timeout(requestData.timeout)).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }), ( /**
                             * @param {?} error
                             * @return {?}
                             */function (error) {
                                _this.handleHTTPError(error);
                                observer.error(error.error);
                                observer.complete();
                            }));
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        RestfulAPIAccess.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] },
                { type: DeviceService },
                { type: i0.ErrorHandler },
                { type: defaultHeader },
                { type: NotificationMgr },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [RestHeaderToken,] }] }
            ];
        };
        /** @nocollapse */ RestfulAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function RestfulAPIAccess_Factory() { return new RestfulAPIAccess(i0.inject(i1$1.HttpClient), i0.inject(ConfigToken), i0.inject(DeviceService), i0.inject(i0.ErrorHandler), i0.inject(defaultHeader), i0.inject(NotificationMgr), i0.inject(RestHeaderToken, 8)); }, token: RestfulAPIAccess, providedIn: "root" });
        return RestfulAPIAccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteAPIAccess = /** @class */ (function () {
        function SQLiteAPIAccess() {
        }
        /**
         * @param {?} api
         * @return {?}
         */
        SQLiteAPIAccess.prototype.access = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                console.log('sqlite access');
                return (( /** @type {?} */(api))).executeSQL();
            };
        SQLiteAPIAccess.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SQLiteAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function SQLiteAPIAccess_Factory() { return new SQLiteAPIAccess(); }, token: SQLiteAPIAccess, providedIn: "root" });
        return SQLiteAPIAccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceAPIAccess = /** @class */ (function () {
        function DeviceAPIAccess() {
        }
        /**
         * @param {?} api
         * @return {?}
         */
        DeviceAPIAccess.prototype.access = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                return (( /** @type {?} */(api))).runDeviceAPI();
            };
        DeviceAPIAccess.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DeviceAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function DeviceAPIAccess_Factory() { return new DeviceAPIAccess(); }, token: DeviceAPIAccess, providedIn: "root" });
        return DeviceAPIAccess;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthObject = /** @class */ (function () {
        function AuthObject(payload, status) {
            if (payload === void 0) {
                payload = {};
            }
            if (status === void 0) {
                status = true;
            }
            this.payload = payload;
            this.status = status;
            this.error = '';
        }
        return AuthObject;
    }());
    /** @enum {string} */
    var AuthError = {
        PERMISSION_DENIED: 'Permission Denied',
        TIMEOUT: 'Timeout',
        NOT_LOGIN: 'Not Login',
        PENDING_ACTION: 'Other Action Pending',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimeoutService = /** @class */ (function () {
        function TimeoutService(APP_CONFIG, timeoutCheck, timeoutAction, zone) {
            this.APP_CONFIG = APP_CONFIG;
            this.timeoutCheck = timeoutCheck;
            this.timeoutAction = timeoutAction;
            this.zone = zone;
            this.seconds = 0;
            this.reaminingSubject = new rxjs.BehaviorSubject(this.seconds);
            this._interval = null;
            this.reset_seconds = this.APP_CONFIG[this.APP_CONFIG.ENV].TIMEOUT;
            this.seconds = this.reset_seconds;
        }
        /**
         * @return {?}
         */
        TimeoutService.prototype.reset = /**
         * @return {?}
         */
            function () {
                if (this.timeoutCheck)
                    this.timeoutCheck.reset();
                else {
                    this.seconds = this.reset_seconds;
                }
            };
        /**
         * @return {?}
         */
        TimeoutService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.timeoutCheck) {
                    this.timeoutCheck.init();
                }
                else {
                    if (this._interval != null) {
                        clearInterval(this._interval);
                    }
                    this.zone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        _this._interval = setInterval(( /**
                         * @return {?}
                         */function () {
                            _this.seconds--;
                            _this.reaminingSubject.next(_this.seconds);
                            if (_this.seconds <= 0) {
                                _this.zone.run(( /**
                                 * @return {?}
                                 */function () {
                                    clearInterval(_this._interval);
                                    _this._interval = null;
                                    console.log('timeout!!');
                                    if (_this.timeoutAction) {
                                        _this.timeoutAction.timeoutAction();
                                    }
                                }));
                            }
                        }), 1000);
                    }));
                }
            };
        /**
         * @return {?}
         */
        TimeoutService.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.timeoutCheck)
                    this.timeoutCheck.clear();
                else {
                    if (this._interval != null) {
                        clearInterval(this._interval);
                        this._interval = null;
                    }
                }
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        TimeoutService.prototype.authRoute = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!payload.status)
                    return payload;
                payload.status = !this.isTimeout();
                if (!payload.status) {
                    payload.error = AuthError.TIMEOUT;
                }
                return payload;
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        TimeoutService.prototype.authAction = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!payload.status)
                    return payload;
                payload.status = !this.isTimeout();
                if (!payload.status) {
                    payload.error = AuthError.TIMEOUT;
                }
                return payload;
            };
        /**
         * @return {?}
         */
        TimeoutService.prototype.getTimeoutRemainingSecond = /**
         * @return {?}
         */
            function () {
                return this.reaminingSubject.asObservable();
            };
        /**
         * @private
         * @return {?}
         */
        TimeoutService.prototype.isTimeout = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.timeoutCheck)
                    return this.timeoutCheck.checkTimeout();
                else
                    return this.seconds <= 0;
            };
        TimeoutService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        TimeoutService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [checkTimeoutToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [timeoutActionToken,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ TimeoutService.ngInjectableDef = i0.defineInjectable({ factory: function TimeoutService_Factory() { return new TimeoutService(i0.inject(ConfigToken), i0.inject(checkTimeoutToken, 8), i0.inject(timeoutActionToken, 8), i0.inject(i0.NgZone)); }, token: TimeoutService, providedIn: "root" });
        return TimeoutService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var APIDispatch = /** @class */ (function () {
        function APIDispatch(mockAPIAccess, sqliteAPIAcces, restfulAPIAccess, deviceAPIAccess, timeoutService, errorHandler, APP_CONFIG) {
            this.mockAPIAccess = mockAPIAccess;
            this.sqliteAPIAcces = sqliteAPIAcces;
            this.restfulAPIAccess = restfulAPIAccess;
            this.deviceAPIAccess = deviceAPIAccess;
            this.timeoutService = timeoutService;
            this.errorHandler = errorHandler;
            this.APP_CONFIG = APP_CONFIG;
        }
        /**
         * @param {?} api
         * @return {?}
         */
        APIDispatch.prototype.dispatch = /**
         * @param {?} api
         * @return {?}
         */
            function (api) {
                this.timeoutService.reset();
                if (api != undefined) {
                    /** @type {?} */
                    var env = this.APP_CONFIG.ENV;
                    /** @type {?} */
                    var apiInvokeMethod = this.APP_CONFIG[env].API_TYPE[api.getAPIName()];
                    /** @type {?} */
                    var apiAccess = void 0;
                    if (apiInvokeMethod == APIInvokeMethod.MOCK) {
                        apiAccess = this.mockAPIAccess;
                    }
                    else if (apiInvokeMethod == APIInvokeMethod.Restful) {
                        apiAccess = this.restfulAPIAccess;
                    }
                    else if (apiInvokeMethod == APIInvokeMethod.SQLite) {
                        apiAccess = this.sqliteAPIAcces;
                    }
                    else if (apiInvokeMethod == APIInvokeMethod.Device) {
                        apiAccess = this.deviceAPIAccess;
                    }
                    if (apiAccess != undefined) {
                        return apiAccess.access(api);
                    }
                    else {
                        this.errorHandler.handleError(new APPError("F00014", "API " + api.getAPIName() + " doesn't assign access method."));
                    }
                }
                this.errorHandler.handleError(new APPError("F00015", "API object is null."));
                return rxjs.of(null);
            };
        APIDispatch.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        APIDispatch.ctorParameters = function () {
            return [
                { type: MockAPIAccess },
                { type: SQLiteAPIAccess },
                { type: RestfulAPIAccess },
                { type: DeviceAPIAccess },
                { type: TimeoutService },
                { type: i0.ErrorHandler },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ APIDispatch.ngInjectableDef = i0.defineInjectable({ factory: function APIDispatch_Factory() { return new APIDispatch(i0.inject(MockAPIAccess), i0.inject(SQLiteAPIAccess), i0.inject(RestfulAPIAccess), i0.inject(DeviceAPIAccess), i0.inject(TimeoutService), i0.inject(i0.ErrorHandler), i0.inject(ConfigToken)); }, token: APIDispatch, providedIn: "root" });
        return APIDispatch;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteResponse = /** @class */ (function () {
        function SQLiteResponse(info, data) {
            this._header = {};
            this._body = [];
            this._header = info;
            this._body = data;
        }
        Object.defineProperty(SQLiteResponse.prototype, "Header", {
            get: /**
             * @return {?}
             */ function () {
                return this._header;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._header = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SQLiteResponse.prototype, "Body", {
            get: /**
             * @return {?}
             */ function () {
                return this._body;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._body = val;
            },
            enumerable: true,
            configurable: true
        });
        return SQLiteResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateService = /** @class */ (function () {
        function TranslateService(httpService, dispatcher, APIFactory$$1, deviceService, LanguageAccess, LanguageUpdate) {
            this.httpService = httpService;
            this.dispatcher = dispatcher;
            this.APIFactory = APIFactory$$1;
            this.deviceService = deviceService;
            this.LanguageAccess = LanguageAccess;
            this.LanguageUpdate = LanguageUpdate;
            this.language_map = {};
            this.languageMap = new Map();
            this.current_language = "";
            this.updateLanguageSubject = new rxjs.BehaviorSubject(0);
        }
        /**
         * @return {?}
         */
        TranslateService.prototype.init = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadJson()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this._fetchCurrentLanguage().toPromise()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.loadJson = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var _this = this;
                console.debug('translate.service.loadjson');
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    //start of for mappingID
                    // let languageJSON = window.localStorage.getItem('LanguageJSON');
                    // if (languageJSON) {
                    //   _this.language_map = JSON.parse(languageJSON);
                    //   res();
                    // }
                    // else {
                    //   _this.httpService.get("./assets/config/language.json").subscribe((json) => {
                    //     console.debug('translate.service.loadjson success', json);
                    //     _this.language_map = json;
                    //     res();
                    //   });
                    // }
                    // end of for mappingID
                    _this.httpService.get("./assets/config/language.json").subscribe(( /**
                     * @param {?} json
                     * @return {?}
                     */function (json) {
                        console.debug('translate.service.loadjson success', json);
                        _this.language_map = json;
                        res();
                    }));
                }));
            };
        /**
         * @param {?} key
         * @return {?}
         */
        TranslateService.prototype.translate = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                //for test language
                if (this.current_language === 'MappingID') {
                    return '${' + key + '}';
                }
                // console.log("==============translate start==============");
                // console.log("Current Language :  " + this.current_language);
                // console.log("Translate Key (Mapping ID) : " + key);
                // console.log("Translate (Text) " + this.language_map[this.current_language][key]);
                // console.log("==============translate end==============");
                /** @type {?} */
                var translateResult = this.language_map[this.current_language][key];
                if (translateResult === null || translateResult === undefined) {
                    return key;
                }
                else {
                    return translateResult;
                }
            };
        /**
         * @param {?} mappingID
         * @param {?} map
         * @return {?}
         */
        TranslateService.prototype.translateWithVariable = /**
         * @param {?} mappingID
         * @param {?} map
         * @return {?}
         */
            function (mappingID, map) {
                /** @type {?} */
                var displayText = this.translate(mappingID);
                Object.keys(map).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    if (map[key] == null || map[key] == undefined) {
                        map[key] = '';
                    }
                    displayText = displayText.replace(new RegExp("\\$\\{" + key + "\\}", 'g'), map[key].toString());
                }));
                return displayText;
            };
        /**
         * @return {?}
         */
        TranslateService.prototype._fetchCurrentLanguage = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    if (_this_1.LanguageAccess) {
                        _this_1.LanguageAccess.getCurrentLanguage().subscribe(( /**
                         * @param {?} language
                         * @return {?}
                         */function (language) {
                            _this_1.current_language = language;
                            observer.next(language);
                            observer.complete();
                        }));
                    }
                    else {
                        console.log("Default _fetchCurrentLanguage");
                        /** @type {?} */
                        var currentLanguage = _this_1.deviceService.getLocalStorage("SNDLanguage") || 'en';
                        _this_1.current_language = currentLanguage;
                        _this_1.deviceService.setLocalStorage("SNDLanguage", currentLanguage);
                        observer.next(_this_1.current_language);
                        observer.complete();
                    }
                }));
            };
        /**
         * @return {?}
         */
        TranslateService.prototype._fetchCodeData = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                /** @type {?} */
                var currentLanguageListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCurrentLanguageList')));
                /** @type {?} */
                var codeArray = [];
                console.debug('setting.service fetchCodeData', currentLanguageListAPI);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this_1.dispatcher.dispatch(currentLanguageListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        /** @type {?} */
                        var bodyDatas = data['Body'];
                        console.log('<--- Datas --->');
                        console.log(data);
                        for (var i = 0; i < bodyDatas.length; i++) {
                            /** @type {?} */
                            var json = bodyDatas[i];
                            /** @type {?} */
                            var language = new LanguageCode(json.LanguageID, json.Name, json.IsDefault);
                            codeArray.push(language);
                            _this_1.languageMap.set('TW_LH_SD_Language', codeArray);
                        }
                        console.debug('languageMap', _this_1.languageMap);
                        observer.next(true);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.getCodeArray = /**
         * @return {?}
         */
            function () {
                if (this.languageMap.size != 0) {
                    /** @type {?} */
                    var codeArray = this.languageMap.get('TW_LH_SD_Language');
                    if (codeArray == undefined)
                        codeArray = new Array();
                    return codeArray;
                }
                return new Array();
            };
        /**
         * @param {?} newLanguage
         * @return {?}
         */
        TranslateService.prototype.updateLanguage = /**
         * @param {?} newLanguage
         * @return {?}
         */
            function (newLanguage) {
                var _this_1 = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    if (_this_1.LanguageUpdate) {
                        _this_1.LanguageUpdate.UpdateLanguage(newLanguage).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        _this_1.deviceService.setLocalStorage("SNDLanguage", newLanguage);
                        observer.next(new SQLiteResponse({ status: true }, []));
                        observer.complete();
                    }
                    _this_1._fetchCurrentLanguage().subscribe(( /**
                     * @param {?} language
                     * @return {?}
                     */function (language) {
                        _this_1.current_language = language;
                        _this_1.updateLanguageSubject.next();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.getCurrentLanguage = /**
         * @return {?}
         */
            function () {
                return this.current_language;
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.getUpdateSubject = /**
         * @return {?}
         */
            function () {
                return this.updateLanguageSubject;
            };
        TranslateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        TranslateService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: APIDispatch },
                { type: APIFactory },
                { type: DeviceService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LanguageAccessToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LanguageUpdateToken,] }] }
            ];
        };
        /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i1$1.HttpClient), i0.inject(APIDispatch), i0.inject(APIFactory), i0.inject(DeviceService), i0.inject(LanguageAccessToken, 8), i0.inject(LanguageUpdateToken, 8)); }, token: TranslateService, providedIn: "root" });
        return TranslateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(translate) {
            this.translate = translate;
        }
        /**
         * @param {?} value
         * @param {?=} args
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} args
         * @return {?}
         */
            function (value, args) {
                return this.translate.translate(value);
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translate',
                        pure: false
                    },] }
        ];
        TranslatePipe.ctorParameters = function () {
            return [
                { type: TranslateService }
            ];
        };
        return TranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberFormatPipe = /** @class */ (function () {
        function NumberFormatPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} decimalPlaces
         * @return {?}
         */
        NumberFormatPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} decimalPlaces
         * @return {?}
         */
            function (value, decimalPlaces) {
                if (decimalPlaces === void 0) {
                    decimalPlaces = -1;
                }
                /** @type {?} */
                var valueToNumber = Number(value);
                if (isNaN(valueToNumber)) { //不能轉成數字
                    return value;
                }
                else {
                    if (decimalPlaces >= 0) {
                        /** @type {?} */
                        var decimal = '.';
                        /** @type {?} */
                        var thousands = ',';
                        /** @type {?} */
                        var amount = '';
                        try {
                            decimalPlaces = Math.abs(decimalPlaces);
                            decimalPlaces = isNaN(decimalPlaces) ? 1 : decimalPlaces;
                            /** @type {?} */
                            var negativeSign = valueToNumber < 0 ? "-" : "";
                            /** @type {?} */
                            var i = parseInt(amount = Math.abs(valueToNumber || 0).toFixed(decimalPlaces)).toString();
                            /** @type {?} */
                            var j = (i.length > 3) ? i.length % 3 : 0;
                            // if (Math.abs(Number(amount) - parseInt(i))) {
                            //   return this._valueAddMark(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalPlaces ? decimal + Math.abs(Number(amount) - parseInt(i)).toFixed(decimalPlaces).slice(2) : ""));
                            // } else {
                            //   return this._valueAddMark(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands));
                            // }
                            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalPlaces ? decimal + Math.abs(Number(amount) - parseInt(i)).toFixed(decimalPlaces).slice(2) : "");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        /** @type {?} */
                        var thousands = ',';
                        /** @type {?} */
                        var amount = '';
                        try {
                            /** @type {?} */
                            var negativeSign = valueToNumber < 0 ? "-" : "";
                            /** @type {?} */
                            var i = Math.abs(valueToNumber || 0).toString();
                            /** @type {?} */
                            var j = (i.length > 3) ? i.length % 3 : 0;
                            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            };
        NumberFormatPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'numberFormat',
                        pure: false
                    },] }
        ];
        NumberFormatPipe.ctorParameters = function () { return []; };
        return NumberFormatPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginInfo = /** @class */ (function () {
        function LoginInfo(info) {
            console.log("LoginInfo custructor:", info);
            this._AgentId = info.AgentId || '';
            this._AgentName = info.AgentName || '';
            this._Gender = info.Gender || '';
            this._AppUseMode = [info.AppUseMode] || [];
            this._exp = info.exp || null;
            this._GoalSigningSupervisor = info.GoalSigningSupervisor || null;
            this._CurrentJobSeniorityMonth = info.CurrentJobSeniorityMonth || null;
            this._JobGrade = info.JobGrade || null;
            this._CurrentJobOBMonth = info.CurrentJobOBMonth || null;
            this._OfficeName = info.OfficeName || null;
            this._ReferenceToken = info.ReferenceToken || null;
        }
        Object.defineProperty(LoginInfo.prototype, "AgentId", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentId;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgentId = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "AppUseMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._AppUseMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AppUseMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "AgentName", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgentName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "Gender", {
            get: /**
             * @return {?}
             */ function () {
                return this._Gender;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Gender = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "exp", {
            get: /**
             * @return {?}
             */ function () {
                return this._exp;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._exp = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "GoalSigningSupervisor", {
            get: /**
             * @return {?}
             */ function () {
                return this._GoalSigningSupervisor;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._GoalSigningSupervisor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "CurrentJobSeniorityMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._CurrentJobSeniorityMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._CurrentJobSeniorityMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "JobGrade", {
            get: /**
             * @return {?}
             */ function () {
                return this._JobGrade;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._JobGrade = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "CurrentJobOBMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._CurrentJobOBMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._CurrentJobOBMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "OfficeName", {
            get: /**
             * @return {?}
             */ function () {
                return this._OfficeName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._OfficeName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginInfo.prototype, "ReferenceToken", {
            get: /**
             * @return {?}
             */ function () {
                return this._ReferenceToken;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ReferenceToken = value;
            },
            enumerable: true,
            configurable: true
        });
        return LoginInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginResponse = /** @class */ (function () {
        function LoginResponse(resp) {
            this.isSuccess = resp.isSuccess;
            this.errorMsg = resp.errorMsg;
            this.type = resp.type;
            this.token = resp.token;
            this.failCount = resp.failCount || -1;
        }
        return LoginResponse;
    }());
    /** @enum {number} */
    var LOGIN_TYPE = {
        ONLINE: 0,
        OFFLINE: 1,
    };
    LOGIN_TYPE[LOGIN_TYPE.ONLINE] = 'ONLINE';
    LOGIN_TYPE[LOGIN_TYPE.OFFLINE] = 'OFFLINE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouteUtils = /** @class */ (function () {
        function RouteUtils() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        RouteUtils.convertJsonToRouterMap = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var map = {};
                /** @type {?} */
                var funcList = Object.keys(data);
                funcList.forEach(( /**
                 * @param {?} func_name
                 * @return {?}
                 */function (func_name) {
                    Object.keys(data[func_name]).forEach(( /**
                     * @param {?} pageName
                     * @return {?}
                     */function (pageName) {
                        data[func_name][pageName] = Object.assign(data[func_name][pageName], {
                            Function: func_name
                        });
                        map[pageName] = data[func_name][pageName];
                    }));
                }));
                return map;
            };
        return RouteUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppRouter = /** @class */ (function () {
        function AppRouter(injector, APIFactory$$1, dispatcher, routeReuseStrategy) {
            this.injector = injector;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.routeReuseStrategy = routeReuseStrategy;
            this.routeMap = {};
            this.currentMenuObject = null;
            this.previousUrl = null;
            this.currentUrl = null;
        }
        /**
         * @return {?}
         */
        AppRouter.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                //call api to get route map
                /** @type {?} */
                var routerMapAPI = this.APIFactory.getAPI("getRouterMap");
                if (routerMapAPI) {
                    this.dispatcher.dispatch(routerMapAPI).subscribe(( /**
                     * @param {?} map
                     * @return {?}
                     */function (map) {
                        console.log("routeMapAPI:", map);
                        _this.routeMap = RouteUtils.convertJsonToRouterMap(map);
                        console.log("router map:", _this.routeMap);
                    }));
                }
                this.listenRouterEvent();
            };
        /**
         * @param {?} func
         * @param {...?} extras
         * @return {?}
         */
        AppRouter.prototype.navigate = /**
         * @param {?} func
         * @param {...?} extras
         * @return {?}
         */
            function (func) {
                var extras = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    extras[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var router = this.injector.get(i3.Router);
                console.log("navigate:", router, func, this.routeMap[func].Path);
                if (router && this.routeMap[func]) {
                    if ((( /** @type {?} */(window))).FirebasePlugin)
                        (( /** @type {?} */(window))).FirebasePlugin.setScreenName(this.routeMap[func].Function);
                    // this.currentFunction = this.routeMap[func].Function;
                    if (extras)
                        router.navigate(__spread([this.routeMap[func].Path], extras));
                    else
                        router.navigate([this.routeMap[func].Path]);
                }
            };
        /**
         * @param {?} page
         * @return {?}
         */
        AppRouter.prototype.getUrl = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                return this.routeMap[page] ? this.routeMap[page].Path : '';
            };
        /**
         * @return {?}
         */
        AppRouter.prototype.getCurrentFunction = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var router = this.injector.get(i3.Router);
                /** @type {?} */
                var filtered = Object.keys(this.routeMap).filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return router.isActive(_this.routeMap[x].Path, false); }))
                    .map(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return _this.routeMap[x].Function; }));
                if (filtered.length > 0) {
                    return filtered[0];
                }
                else {
                    return "Not Found";
                }
            };
        /**
         * @return {?}
         */
        AppRouter.prototype.getRouteMap = /**
         * @return {?}
         */
            function () {
                return this.routeMap;
            };
        /**
         * @param {?=} clearCache
         * @return {?}
         */
        AppRouter.prototype.back = /**
         * @param {?=} clearCache
         * @return {?}
         */
            function (clearCache) {
                if (clearCache === void 0) {
                    clearCache = true;
                }
                console.log("router back to:", this.previousUrl);
                if (this.previousUrl) {
                    if (clearCache && this.routeReuseStrategy["deleteRouteSnapshot"]) {
                        (( /** @type {?} */(this.routeReuseStrategy))).deleteRouteSnapshot();
                    }
                    /** @type {?} */
                    var router = this.injector.get(i3.Router);
                    router.navigate([this.previousUrl]);
                }
            };
        /**
         * @return {?}
         */
        AppRouter.prototype.getCurrentMenuObject = /**
         * @return {?}
         */
            function () {
                return this.currentMenuObject;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        AppRouter.prototype.setCurrentMenuObject = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.currentMenuObject = val;
            };
        /**
         * @private
         * @return {?}
         */
        AppRouter.prototype.listenRouterEvent = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var router = this.injector.get(i3.Router);
                router.events.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    if (event instanceof i3.NavigationEnd) {
                        _this.previousUrl = _this.currentUrl;
                        _this.currentUrl = event.url;
                    }
                }));
            };
        AppRouter.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        AppRouter.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: APIFactory },
                { type: APIDispatch },
                { type: i3.RouteReuseStrategy }
            ];
        };
        /** @nocollapse */ AppRouter.ngInjectableDef = i0.defineInjectable({ factory: function AppRouter_Factory() { return new AppRouter(i0.inject(i0.INJECTOR), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(i3.RouteReuseStrategy)); }, token: AppRouter, providedIn: "root" });
        return AppRouter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var YESNO = {
        YES: 'Y',
        NO: 'N',
    };
    /** @enum {string} */
    var TIMEBASE = {
        DAY: 'Day',
        WEEK: 'Week',
        MONTH: 'Month',
        QUARTER: 'Quarter',
        YEAR: 'Year',
    };
    /** @enum {string} */
    var SUBMITGOALTYPE = {
        ALL: 'All',
        PLAN: 'Plan',
    };
    /** @enum {string} */
    var PERFORMANCETYPE = {
        PERSONAL: 'P',
        TEAM: 'T',
    };
    /** @enum {number} */
    var APPMODE = {
        Standalone: 0,
        Integration: 1,
    };
    APPMODE[APPMODE.Standalone] = 'Standalone';
    APPMODE[APPMODE.Integration] = 'Integration';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var jwt_decode = _jwt_decode;
    var DefaultLoginMgr = /** @class */ (function () {
        function DefaultLoginMgr(deviceService, APIFactory$$1, dispatcher, injector, tokenStore, router, APP_CONFIG, customLoginMgr, pushIDMgr) {
            var _this = this;
            this.deviceService = deviceService;
            this.APIFactory = APIFactory$$1;
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
            this.infoSubject = new rxjs.BehaviorSubject(this.loginInfo);
            this.logoutSubject = new rxjs.Subject();
            if (this.customLoginMgr) {
                this.customLoginMgr.getToken().subscribe(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
                    _this.token = token;
                }));
            }
            else {
                this.tokenStore.getToken().subscribe(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
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
                    (( /** @type {?} */(loginAPI))).body = loginBody;
                    return rxjs.from(this._login(loginAPI));
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
                return __awaiter(this, void 0, void 0, function () {
                    var dispatcher, resp, decoded, error_1, msg;
                    return __generator(this, function (_a) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DefaultLoginMgr.ctorParameters = function () {
            return [
                { type: DeviceService },
                { type: APIFactory },
                { type: APIDispatch },
                { type: i0.Injector },
                { type: LoginTokenStore },
                { type: AppRouter },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LoginMgrToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [PushIDMgrToken,] }] }
            ];
        };
        /** @nocollapse */ DefaultLoginMgr.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoginMgr_Factory() { return new DefaultLoginMgr(i0.inject(DeviceService), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(i0.INJECTOR), i0.inject(LoginTokenStore), i0.inject(AppRouter), i0.inject(ConfigToken), i0.inject(LoginMgrToken, 8), i0.inject(PushIDMgrToken, 8)); }, token: DefaultLoginMgr, providedIn: "root" });
        return DefaultLoginMgr;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckPermissionService = /** @class */ (function () {
        function CheckPermissionService(injector, loginMgr, permissionCheck) {
            this.injector = injector;
            this.loginMgr = loginMgr;
            this.permissionCheck = permissionCheck;
            this.permissionMap = {};
            this.userRole = [];
        }
        /**
         * @return {?}
         */
        CheckPermissionService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('init check permission service');
                if (!this.permissionCheck) {
                    this.loadJson();
                    this.loginMgr.getLoginInfo().subscribe(( /**
                     * @param {?} info
                     * @return {?}
                     */function (info) {
                        console.log('check permission subscribe:', info);
                        if (info)
                            _this.userRole = info.AppUseMode;
                    }));
                }
                else
                    this.permissionCheck.init();
            };
        /**
         * @private
         * @return {?}
         */
        CheckPermissionService.prototype.loadJson = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                //call api to get route map
                /** @type {?} */
                var apiFactory = this.injector.get(APIFactory);
                /** @type {?} */
                var apiDispatcher = this.injector.get(APIDispatch);
                if (apiFactory && apiDispatcher) {
                    /** @type {?} */
                    var routerMapAPI = apiFactory.getAPI("getRouterMap");
                    if (routerMapAPI) {
                        apiDispatcher.dispatch(routerMapAPI).subscribe(( /**
                         * @param {?} map
                         * @return {?}
                         */function (map) {
                            _this.permissionMap = RouteUtils.convertJsonToRouterMap(map);
                            console.log("page permission map:", _this.permissionMap);
                        }));
                    }
                }
                else {
                    console.log("Check-permission init error: apiFactory or Dispatcher not found.");
                }
            };
        /**
         * @param {?} authObj
         * @return {?}
         */
        CheckPermissionService.prototype.authRoute = /**
         * @param {?} authObj
         * @return {?}
         */
            function (authObj) {
                if (!authObj.status)
                    return authObj;
                /** @type {?} */
                var pageId = authObj.payload.func;
                console.log(this.permissionMap);
                if (pageId in Object.keys(this.permissionMap)) {
                    authObj.status = this.checkPagePermission(pageId);
                    if (!authObj.status) {
                        authObj.error = AuthError.PERMISSION_DENIED;
                    }
                }
                return authObj;
            };
        /**
         * @param {?} menuList
         * @return {?}
         */
        CheckPermissionService.prototype.authMenu = /**
         * @param {?} menuList
         * @return {?}
         */
            function (menuList) {
                var _this = this;
                if (this.permissionCheck) {
                    return this.permissionCheck.checkMenuPermission(menuList, this.userRole);
                }
                else {
                    //default permission check
                    console.log("check menu permission:", menuList, this.permissionMap);
                    return menuList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        if (Object.keys(_this.permissionMap).includes(x)) {
                            return _this.checkPagePermission(x);
                        }
                        else
                            return true;
                    }));
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CheckPermissionService.prototype.checkPagePermission = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                var _this = this;
                if (this.permissionCheck)
                    return this.permissionCheck.checkPagePermission(name, this.userRole);
                else
                    return this.userRole
                        .map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !_this.permissionMap[name]["Role"] || (_this.permissionMap[name]["Role"].indexOf(x) > -1); }))
                        .reduce(( /**
                 * @param {?} acc
                 * @param {?} current
                 * @return {?}
                 */function (acc, current) { return acc || current; }), false);
            };
        CheckPermissionService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        CheckPermissionService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: DefaultLoginMgr },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [checkPermissionToken,] }] }
            ];
        };
        /** @nocollapse */ CheckPermissionService.ngInjectableDef = i0.defineInjectable({ factory: function CheckPermissionService_Factory() { return new CheckPermissionService(i0.inject(i0.INJECTOR), i0.inject(DefaultLoginMgr), i0.inject(checkPermissionToken, 8)); }, token: CheckPermissionService, providedIn: "root" });
        return CheckPermissionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ACTION_STATUS = {
        AVAILABLE: 0,
        PENDING: 1,
    };
    ACTION_STATUS[ACTION_STATUS.AVAILABLE] = 'AVAILABLE';
    ACTION_STATUS[ACTION_STATUS.PENDING] = 'PENDING';
    var ActionEvent = /** @class */ (function () {
        function ActionEvent() {
        }
        return ActionEvent;
    }());
    var ActionService = /** @class */ (function () {
        function ActionService(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.currentAction = null;
            this.actionIntervalSec = 800;
            this.status = ACTION_STATUS.AVAILABLE;
            this.statusSubject = new rxjs.BehaviorSubject(this.status);
            this.actionSuscribe = new rxjs.Subject();
            this.actionIntervalSec = this.APP_CONFIG.ACTION_INTERVAL;
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        ActionService.prototype.authAction = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                var _this = this;
                if (this.status === ACTION_STATUS.AVAILABLE) {
                    this.status = ACTION_STATUS.PENDING;
                    this.statusSubject.next(this.status);
                    //Prevent fast click
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.status = ACTION_STATUS.AVAILABLE;
                        _this.statusSubject.next(_this.status);
                    }), this.actionIntervalSec);
                }
                else {
                    //Other Action is active
                    payload.status = false;
                    payload.error = AuthError.PENDING_ACTION;
                }
                return payload;
            };
        /**
         * @return {?}
         */
        ActionService.prototype.getCurrentAction = /**
         * @return {?}
         */
            function () {
                return this.currentAction;
            };
        /**
         * @return {?}
         */
        ActionService.prototype.getActionStatus = /**
         * @return {?}
         */
            function () {
                return this.statusSubject.asObservable();
            };
        /**
         * @return {?}
         */
        ActionService.prototype.onActionClick = /**
         * @return {?}
         */
            function () {
                return this.actionSuscribe.asObservable();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ActionService.prototype.actionClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.actionSuscribe.next(event);
            };
        ActionService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        ActionService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ ActionService.ngInjectableDef = i0.defineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.inject(ConfigToken)); }, token: ActionService, providedIn: "root" });
        return ActionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthService = /** @class */ (function () {
        function AuthService(checkPermissionService, actionService, customAuthAction, customAuthRoute) {
            this.checkPermissionService = checkPermissionService;
            this.actionService = actionService;
            this.customAuthAction = customAuthAction;
            this.customAuthRoute = customAuthRoute;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        AuthService.prototype.authRoute = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    var _this = this;
                    return __generator(this, function (_a) {
                        result = rxjs.of(new AuthObject(data)).pipe(operators.map(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return _this.checkPermissionService.authRoute(x); })));
                        if (this.customAuthRoute) {
                            result.pipe(operators.map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return _this.customAuthRoute.authRoute(x); })));
                        }
                        return [2 /*return*/, result.pipe(operators.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return { status: x.status, error: x.error }; }))).toPromise()];
                    });
                });
            };
        /**
         * @param {?} payload
         * @return {?}
         */
        AuthService.prototype.authAction = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    var _this = this;
                    return __generator(this, function (_a) {
                        result = rxjs.of(new AuthObject(payload)).pipe(operators.map(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return _this.actionService.authAction(x); })));
                        if (this.customAuthAction) {
                            result.pipe(operators.map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return _this.customAuthAction.authAction(x); })));
                        }
                        return [2 /*return*/, result.pipe(operators.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return { status: x.status, error: x.error }; }))).toPromise()];
                    });
                });
            };
        AuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        AuthService.ctorParameters = function () {
            return [
                { type: CheckPermissionService },
                { type: ActionService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [authActionToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [authRouteToken,] }] }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(CheckPermissionService), i0.inject(ActionService), i0.inject(authActionToken, 8), i0.inject(authRouteToken, 8)); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionDirective = /** @class */ (function () {
        function ActionDirective(authService, APIFactory$$1, dispatcher, deviceService, actionService, appRouter, elRef, actionDirectiveTask) {
            var _this = this;
            this.authService = authService;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.deviceService = deviceService;
            this.actionService = actionService;
            this.appRouter = appRouter;
            this.elRef = elRef;
            this.actionDirectiveTask = actionDirectiveTask;
            this.actionClick = new i0.EventEmitter();
            this.isDisabled = false;
            this.actionService.getActionStatus().subscribe(( /**
             * @param {?} status
             * @return {?}
             */function (status) {
                _this.isDisabled = status === ACTION_STATUS.PENDING;
            }));
        }
        // start of highlight digital track
        // start of highlight digital track
        /**
         * @return {?}
         */
        ActionDirective.prototype.ngAfterViewInit =
            // start of highlight digital track
            /**
             * @return {?}
             */
            function () {
                // this.settingService.getDebugMode().subscribe((debugMode: boolean) => {
                //   let elementTagName = this.elRef.nativeElement.localName;
                //   let targetElement = null;
                //   if (elementTagName === 'app-ui-btn') {
                //     targetElement = this.elRef.nativeElement.children[0];
                //     console.log('app-ui-btn targetElement: ', targetElement);
                //   }
                //   else if (elementTagName === 'app-ui-link') {
                //     targetElement = this.elRef.nativeElement.children[0].children[0];
                //     console.log('app-ui-link targetElement: ', targetElement);
                //   }
                //   else {
                //     targetElement = this.elRef.nativeElement;
                //   }
                //   if (targetElement) {
                //     if (debugMode) {
                //       targetElement.setAttribute('style', "border: 3px solid #ff0000 !important");
                //     }
                //     else {
                //       targetElement.setAttribute('style', "");
                //     }
                //   }
                // })
            };
        // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
        // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
        /**
         * @param {?} e
         * @return {?}
         */
        ActionDirective.prototype.onclick =
            // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
            /**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var event, isAuth, ActionAPI, resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('action click:', this.action, e);
                                if (e.stopPropagation) {
                                    e.stopPropagation();
                                }
                                if (e.preventDefault) {
                                    e.preventDefault();
                                }
                                console.log("actionClick after output: ", e);
                                event = new ActionEvent();
                                event.action = this.action;
                                event.event = e;
                                this.actionService.actionClick(event);
                                return [4 /*yield*/, this.authService.authAction({ action: this.action })];
                            case 1:
                                isAuth = _a.sent();
                                if (!isAuth.status)
                                    return [3 /*break*/, 4];
                                this.actionClick.emit(e);
                                console.log("actionClick output: ", e);
                                if (!this.actionDirectiveTask)
                                    return [3 /*break*/, 3];
                                return [4 /*yield*/, this.actionDirectiveTask.doTask(this.action)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                console.log("action: " + this.action + " auth failed.");
                                _a.label = 5;
                            case 5:
                                ActionAPI = this.APIFactory.getAPI("LogAction");
                                (( /** @type {?} */(ActionAPI))).action = this.action;
                                (( /** @type {?} */(ActionAPI))).time = new Date();
                                (( /** @type {?} */(ActionAPI))).valid = isAuth.status;
                                (( /** @type {?} */(ActionAPI))).message = isAuth.error;
                                (( /** @type {?} */(ActionAPI))).Function = this.appRouter.getCurrentFunction();
                                (( /** @type {?} */(ActionAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
                                (( /** @type {?} */(ActionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
                                return [4 /*yield*/, this.dispatcher.dispatch(ActionAPI).toPromise()];
                            case 6:
                                resp = _a.sent();
                                console.log("log Action resp:", resp);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        ActionDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[Action]'
                    },] }
        ];
        ActionDirective.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: APIFactory },
                { type: APIDispatch },
                { type: DeviceService },
                { type: ActionService },
                { type: AppRouter },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [actionDirectiveTaskToken,] }] }
            ];
        };
        ActionDirective.propDecorators = {
            action: [{ type: i0.Input }],
            actionClick: [{ type: i0.Output }],
            isDisabled: [{ type: i0.HostBinding, args: ['class.disabled',] }],
            onclick: [{ type: i0.HostListener, args: ['onClick', ['$event'],] }, { type: i0.HostListener, args: ['onClickLink', ['$event'],] }, { type: i0.HostListener, args: ['onTabChildClick', ['$event'],] }, { type: i0.HostListener, args: ['ClickBtn', ['$event'],] }, { type: i0.HostListener, args: ['click', ['$event'],] }]
        };
        return ActionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteDatabase = /** @class */ (function () {
        function SQLiteDatabase(name, key) {
            this.dbName = name;
            this.key = key;
        }
        /**
         * @return {?}
         */
        SQLiteDatabase.prototype.getName = /**
         * @return {?}
         */
            function () {
                return this.dbName;
            };
        /**
         * @return {?}
         */
        SQLiteDatabase.prototype.getKey = /**
         * @return {?}
         */
            function () {
                return this.key;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SQLiteDatabase.prototype.setName = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.dbName = name;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        SQLiteDatabase.prototype.setkey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this.key = key;
            };
        return SQLiteDatabase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteColumn = /** @class */ (function () {
        function SQLiteColumn(name, value, type, isPrimaryKey, isAutoincrement) {
            this.colName = name;
            this.colValue = value;
            this.isPrimaryKey = isPrimaryKey;
            this.isAutoincrement = isAutoincrement;
            this.type = type;
        }
        /**
         * @return {?}
         */
        SQLiteColumn.prototype.getName = /**
         * @return {?}
         */
            function () {
                return this.colName;
            };
        /**
         * @return {?}
         */
        SQLiteColumn.prototype.getValue = /**
         * @return {?}
         */
            function () {
                return this.colValue;
            };
        /**
         * @return {?}
         */
        SQLiteColumn.prototype.getType = /**
         * @return {?}
         */
            function () {
                return this.type;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SQLiteColumn.prototype.setValue = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (this.type == 'text')
                    this.colValue = val.toString();
                else if (this.type == 'integer')
                    this.colValue = parseInt(val);
                else if (this.type == 'real')
                    this.colValue = parseFloat(val);
                else
                    this.colValue = val;
            };
        /**
         * @return {?}
         */
        SQLiteColumn.prototype.getIsPrimaryKey = /**
         * @return {?}
         */
            function () {
                return this.isPrimaryKey;
            };
        /**
         * @return {?}
         */
        SQLiteColumn.prototype.getIsAutoincrement = /**
         * @return {?}
         */
            function () {
                return this.isAutoincrement;
            };
        return SQLiteColumn;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteTable = /** @class */ (function () {
        function SQLiteTable(name, columns) {
            this.tableName = name;
            this.columns = columns;
            this.restrictions = [];
        }
        /**
         * @param {?} col
         * @param {?} value
         * @return {?}
         */
        SQLiteTable.prototype.setValue = /**
         * @param {?} col
         * @param {?} value
         * @return {?}
         */
            function (col, value) {
                this.columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName() == col; })).forEach(( /**
                 * @param {?} col
                 * @return {?}
                 */function (col) {
                    col.setValue(value);
                }));
            };
        /**
         * @param {?} col
         * @return {?}
         */
        SQLiteTable.prototype.getValue = /**
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var cols = this.columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName() == col; }));
                return col.length > 0 ? cols[0].getValue() : null;
            };
        /**
         * @param {?} col
         * @return {?}
         */
        SQLiteTable.prototype.hasColumn = /**
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var cols = this.columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName() == col; }));
                return cols.length > 0;
            };
        /**
         * @return {?}
         */
        SQLiteTable.prototype.getTableName = /**
         * @return {?}
         */
            function () {
                return this.tableName;
            };
        /**
         * @return {?}
         */
        SQLiteTable.prototype.getColumns = /**
         * @return {?}
         */
            function () {
                return this.columns;
            };
        /**
         * @param {?} restriction
         * @return {?}
         */
        SQLiteTable.prototype.addRestriction = /**
         * @param {?} restriction
         * @return {?}
         */
            function (restriction) {
                this.restrictions.push(restriction);
            };
        /**
         * @return {?}
         */
        SQLiteTable.prototype.getRestrictions = /**
         * @return {?}
         */
            function () {
                return this.restrictions;
            };
        /**
         * @return {?}
         */
        SQLiteTable.prototype.cloneTable = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var colArray = [];
                try {
                    for (var _b = __values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var column = _c.value;
                        /** @type {?} */
                        var clone_obj = Object.create(SQLiteColumn.prototype);
                        clone_obj = Object.assign(clone_obj, column);
                        colArray.push(clone_obj);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return new SQLiteTable(this.tableName, colArray);
            };
        /**
         * @return {?}
         */
        SQLiteTable.prototype.isSetted = /**
         * @return {?}
         */
            function () {
                return this.getColumns().map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValue() !== undefined; })).length > 0;
            };
        return SQLiteTable;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LimitRestriction = /** @class */ (function () {
        function LimitRestriction(values) {
            if (values === void 0) {
                values = [];
            }
            this.values = values;
        }
        /**
         * @return {?}
         */
        LimitRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return "LIMIT " + this.values[0].toString() + " ";
            };
        /**
         * @return {?}
         */
        LimitRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return LimitRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OffsetRestriction = /** @class */ (function () {
        function OffsetRestriction(values) {
            if (values === void 0) {
                values = [];
            }
            this.values = values;
        }
        /**
         * @return {?}
         */
        OffsetRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return "OFFSET " + this.values[0] + " ";
            };
        /**
         * @return {?}
         */
        OffsetRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return OffsetRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLCommand = /** @class */ (function () {
        function SQLCommand(instruction, params) {
            this.params = new Array();
            this.sql = instruction;
            this.params = params;
        }
        /**
         * @param {?} instruction
         * @return {?}
         */
        SQLCommand.prototype.setSql = /**
         * @param {?} instruction
         * @return {?}
         */
            function (instruction) {
                this.sql = instruction;
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SQLCommand.prototype.setParam = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                this.params.push(param);
            };
        /**
         * @return {?}
         */
        SQLCommand.prototype.getSql = /**
         * @return {?}
         */
            function () {
                return this.sql;
            };
        /**
         * @return {?}
         */
        SQLCommand.prototype.getParams = /**
         * @return {?}
         */
            function () {
                return this.params;
            };
        return SQLCommand;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderByRestriction = /** @class */ (function () {
        function OrderByRestriction(values) {
            if (values === void 0) {
                values = [];
            }
            this.values = values;
        }
        /**
         * @return {?}
         */
        OrderByRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var str = this.values.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.column + " " + x.order; })).reduce(( /**
                 * @param {?} prev
                 * @param {?} current
                 * @return {?}
                 */function (prev, current) { return prev + ',' + current; }));
                return "ORDER BY " + str + " ";
            };
        /**
         * @return {?}
         */
        OrderByRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return OrderByRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SQLiteDao = /** @class */ (function () {
        function SQLiteDao(config) {
            this.transactionArr = [];
            this.config = config;
        }
        /**
         * @return {?}
         */
        SQLiteDao.prototype.openDataBase = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var dbObj = this.config;
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    (( /** @type {?} */(window))).sqlitePlugin.openDatabase({
                        name: dbObj.getName() + '.db',
                        location: 'default',
                        key: dbObj.getKey(),
                        androidDatabaseImplementation: 'system'
                    }, ( /**
                     * @param {?} db
                     * @return {?}
                     */function (db) {
                        _this.connection = db;
                        res(db);
                    }), ( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var error = new Error("Sqlite DB open error.");
                        rej(error);
                    }));
                }));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.queryByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                /** @type {?} */
                var restrictions = tableObject.getRestrictions();
                /** @type {?} */
                var conditon_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return "AND " + x.sqlString(); })).join('');
                /** @type {?} */
                var conditon_val = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValues(); })).reduce(( /**
                 * @param {?} prev
                 * @param {?} x
                 * @return {?}
                 */function (prev, x) { return __spread(prev, x); }), []);
                /** @type {?} */
                var order_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x instanceof OrderByRestriction; })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.sqlString(); })).join('');
                /** @type {?} */
                var limit_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x instanceof LimitRestriction; })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.sqlString(); })).join('');
                /** @type {?} */
                var offset_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x instanceof OffsetRestriction; })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.sqlString(); })).join('');
                /** @type {?} */
                var sql_count_command = "SELECT count(*) FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str;
                /** @type {?} */
                var sql_command = "SELECT * FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str + order_str + limit_str + offset_str;
                /** @type {?} */
                var sql_obj = new SQLCommand(sql_command, conditon_val);
                /** @type {?} */
                var sqlcount_obj = new SQLCommand(sql_count_command, conditon_val);
                console.group("run select sql command");
                console.log(sql_command);
                console.log('params', conditon_val);
                console.groupEnd();
                return this.runQuerySqlcommand(sql_obj, sqlcount_obj);
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.insertByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                var _this = this;
                /** @type {?} */
                var sql_obj = this.transformInsert(tableObject);
                console.group("run insert sql command");
                console.log(sql_obj.getSql());
                console.log('params', sql_obj.getParams());
                console.groupEnd();
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.runSqlCommand(observer, sql_obj);
                }));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.updateByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                var _this = this;
                /** @type {?} */
                var sql_obj = this.transformUpdate(tableObject);
                console.group("run update sql command");
                console.log(sql_obj.getSql());
                console.log('params', sql_obj.getParams());
                console.groupEnd();
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.runSqlCommand(observer, sql_obj);
                }));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.deleteByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                var _this = this;
                /** @type {?} */
                var sql_obj = this.transformDelete(tableObject);
                console.group("run delete sql command");
                console.log(sql_obj.getSql());
                console.log('params', sql_obj.getParams());
                console.groupEnd();
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.runSqlCommand(observer, sql_obj);
                }));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transactionInsert = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                this.addTransactionCommand(this.transformInsert(tableObject));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transactionUpdate = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                this.addTransactionCommand(this.transformUpdate(tableObject));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transactionDelete = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                this.addTransactionCommand(this.transformDelete(tableObject));
            };
        /**
         * @param {?} command
         * @return {?}
         */
        SQLiteDao.prototype.transactionSqlCommand = /**
         * @param {?} command
         * @return {?}
         */
            function (command) {
                this.addTransactionCommand(command);
            };
        /**
         * @param {?} sql_command
         * @return {?}
         */
        SQLiteDao.prototype.excuteSqlCommand = /**
         * @param {?} sql_command
         * @return {?}
         */
            function (sql_command) {
                var _this = this;
                console.log('excuteSqlCommand:', sql_command);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.connection.transaction(( /**
                     * @param {?} tr
                     * @return {?}
                     */function (tr) {
                        var e_1, _a;
                        try {
                            for (var sql_command_1 = __values(sql_command), sql_command_1_1 = sql_command_1.next(); !sql_command_1_1.done; sql_command_1_1 = sql_command_1.next()) {
                                var command = sql_command_1_1.value;
                                tr.executeSql(command.getSql(), command.getParams(), ( /**
                                 * @return {?}
                                 */function () { }), ( /**
                                 * @param {?} _
                                 * @param {?} error
                                 * @return {?}
                                 */function (_$$1, error) {
                                    console.log('execute sql error:', error);
                                }));
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (sql_command_1_1 && !sql_command_1_1.done && (_a = sql_command_1.return))
                                    _a.call(sql_command_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                        observer.complete();
                        throw new APPError("F00017", error.message);
                    }), ( /**
                     * @return {?}
                     */function () {
                        observer.next(new SQLiteResponse({ status: true }, []));
                        observer.complete();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        SQLiteDao.prototype.getSchema = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var schema = new Map();
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.connection.transaction(( /**
                     * @param {?} tr
                     * @return {?}
                     */function (tr) {
                        tr.executeSql('SELECT name,sql FROM sqlite_master WHERE type="table" OR type="view"', [], ( /**
                         * @param {?} tx
                         * @param {?} res
                         * @return {?}
                         */function (tx, res) {
                            //拿到TABLE名稱，query table schema
                            for (var len = 0; len < res.rows.length; len++) {
                                /** @type {?} */
                                var table_name = res.rows.item(len).name;
                                /** @type {?} */
                                var table_sql = res.rows.item(len).sql;
                                _this.getColumns(tx, schema, table_name, table_sql);
                            }
                        }), ( /**
                         * @param {?} tx
                         * @param {?} error
                         * @return {?}
                         */function (tx, error) {
                            console.log('select table name error:', error.message);
                        }));
                    }), ( /**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */function (_$$1, error) {
                        observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                        observer.complete();
                        throw new APPError("F00017", error.message);
                    }), ( /**
                     * @return {?}
                     */function () {
                        observer.next(schema);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        SQLiteDao.prototype.runTransaction = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create((( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var batchArr = _this.transactionArr.map(( /**
                     * @param {?} cmd
                     * @return {?}
                     */function (cmd) { return [cmd.getSql(), cmd.getParams()]; }));
                    console.group('run transaction SQL:');
                    console.log('command:', batchArr);
                    console.groupEnd();
                    _this.connection.sqlBatch(batchArr, ( /**
                     * @return {?}
                     */function () {
                        observer.next(new SQLiteResponse({ status: true }, []));
                        observer.complete();
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                        observer.complete();
                        throw new APPError("F00018", error.message);
                    }));
                })));
            };
        /**
         * @return {?}
         */
        SQLiteDao.prototype.clearTransaction = /**
         * @return {?}
         */
            function () {
                this.transactionArr = [];
            };
        /**
         * @protected
         * @param {?} tx
         * @param {?} schema
         * @param {?} table_name
         * @param {?} table_sql
         * @return {?}
         */
        SQLiteDao.prototype.getColumns = /**
         * @protected
         * @param {?} tx
         * @param {?} schema
         * @param {?} table_name
         * @param {?} table_sql
         * @return {?}
         */
            function (tx, schema, table_name, table_sql) {
                /** @type {?} */
                var tmp_colArray = [];
                console.log("getColumns:", table_name, table_sql);
                tx.executeSql('PRAGMA table_info(' + table_name + ')', [], ( /**
                 * @param {?} tx
                 * @param {?} info_res
                 * @return {?}
                 */function (tx, info_res) {
                    //拿到table的每個欄位
                    for (var i = 0; i < info_res.rows.length; i++) {
                        /** @type {?} */
                        var isPK = !!info_res.rows.item(i).pk;
                        /** @type {?} */
                        var name = info_res.rows.item(i).name;
                        /** @type {?} */
                        var isAutoIncrement = isPK && (table_sql.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                        /** @type {?} */
                        var type = info_res.rows.item(i).type;
                        tmp_colArray.push(new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement));
                    }
                    /** @type {?} */
                    var tableObj = new SQLiteTable(table_name, tmp_colArray);
                    schema.set(table_name, tableObj);
                }), ( /**
                 * @param {?} tx
                 * @param {?} error
                 * @return {?}
                 */function (tx, error) {
                    console.log('Get table column list error:', error.message);
                    throw new APPError("F00019", error.message);
                }));
            };
        /**
         * @private
         * @param {?} observer
         * @param {?} sql_command
         * @return {?}
         */
        SQLiteDao.prototype.runSqlCommand = /**
         * @private
         * @param {?} observer
         * @param {?} sql_command
         * @return {?}
         */
            function (observer, sql_command) {
                this.connection.transaction(( /**
                 * @param {?} tr
                 * @return {?}
                 */function (tr) {
                    tr.executeSql(sql_command.getSql(), sql_command.getParams(), ( /**
                     * @param {?} tx
                     * @param {?} res
                     * @return {?}
                     */function (tx, res) {
                        observer.next(new SQLiteResponse({ status: true }, []));
                        observer.complete();
                    }), ( /**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */function (_$$1, error) {
                        observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                        observer.complete();
                        throw new APPError("F00017", error.message);
                    }));
                }));
            };
        /**
         * @private
         * @param {?} sql_obj
         * @param {?} sql_count_obj
         * @return {?}
         */
        SQLiteDao.prototype.runQuerySqlcommand = /**
         * @private
         * @param {?} sql_obj
         * @param {?} sql_count_obj
         * @return {?}
         */
            function (sql_obj, sql_count_obj) {
                var _this = this;
                console.log("runQuerySqlcommand", sql_obj);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.connection.transaction(( /**
                     * @param {?} tr
                     * @return {?}
                     */function (tr) {
                        tr.executeSql(sql_obj.getSql(), sql_obj.getParams(), ( /**
                         * @param {?} tx
                         * @param {?} res
                         * @return {?}
                         */function (tx, res) {
                            tx.executeSql(sql_count_obj.getSql(), sql_count_obj.getParams(), ( /**
                             * @param {?} tx
                             * @param {?} res_count
                             * @return {?}
                             */function (tx, res_count) {
                                /** @type {?} */
                                var data = [];
                                for (var i = 0; i < res.rows.length; i++) {
                                    data.push(res.rows.item(i));
                                }
                                console.log("run query sql finish!", data);
                                observer.next(new SQLiteResponse({
                                    record_length: res_count.rows.item(0)['count(*)'],
                                    status: true
                                }, data));
                                observer.complete();
                            }), ( /**
                             * @param {?} _
                             * @param {?} error
                             * @return {?}
                             */function (_$$1, error) {
                                console.log(error.message);
                                observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                                observer.complete();
                                throw new APPError("F00017", error.message);
                            }));
                        }), ( /**
                         * @param {?} _
                         * @param {?} error
                         * @return {?}
                         */function (_$$1, error) {
                            console.log(error.message);
                            observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                            observer.complete();
                            throw new APPError("F00017", error.message);
                        }));
                    }));
                }));
            };
        /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transformInsert = /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                /** @type {?} */
                var setted_cols = tableObject.getColumns().filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValue() !== undefined; }));
                /** @type {?} */
                var setted_vals = setted_cols.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValue(); }));
                /** @type {?} */
                var sql_command = "INSERT INTO " + tableObject.getTableName() + " (" + setted_cols.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName(); })).join(',') + ") VALUES (" + setted_cols.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return '?'; })).join(',') + ")";
                return new SQLCommand(sql_command, setted_vals);
            };
        /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transformUpdate = /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                /** @type {?} */
                var setted_cols = tableObject.getColumns().filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValue() !== undefined; }));
                /** @type {?} */
                var setted_vals = setted_cols.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValue(); }));
                /** @type {?} */
                var set_str = setted_cols.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return " " + x.getName() + "=?"; })).join(',');
                /** @type {?} */
                var restrictions = tableObject.getRestrictions();
                /** @type {?} */
                var conditon_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return "AND " + x.sqlString(); })).join('');
                /** @type {?} */
                var conditon_val = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValues(); })).reduce(( /**
                 * @param {?} prev
                 * @param {?} x
                 * @return {?}
                 */function (prev, x) { return __spread(prev, x); }), []);
                /** @type {?} */
                var sql_command = "UPDATE " + tableObject.getTableName() + " SET " + set_str + " WHERE 1=1 " + conditon_str;
                return new SQLCommand(sql_command, __spread(setted_vals, conditon_val));
            };
        /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
        SQLiteDao.prototype.transformDelete = /**
         * @private
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                /** @type {?} */
                var restrictions = tableObject.getRestrictions();
                /** @type {?} */
                var conditon_str = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return "AND " + x.sqlString(); })).join('');
                /** @type {?} */
                var conditon_val = restrictions.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getValues(); })).reduce(( /**
                 * @param {?} prev
                 * @param {?} x
                 * @return {?}
                 */function (prev, x) { return __spread(prev, x); }), []);
                /** @type {?} */
                var sql_command = "DELETE FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str;
                return new SQLCommand(sql_command, conditon_val);
            };
        /**
         * @private
         * @param {?} sql_command
         * @return {?}
         */
        SQLiteDao.prototype.addTransactionCommand = /**
         * @private
         * @param {?} sql_command
         * @return {?}
         */
            function (sql_command) {
                this.transactionArr.push(sql_command);
            };
        return SQLiteDao;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WebSQLDao = /** @class */ (function (_super) {
        __extends(WebSQLDao, _super);
        function WebSQLDao(config) {
            return _super.call(this, config) || this;
        }
        /**
         * @return {?}
         */
        WebSQLDao.prototype.openDataBase = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.connection = window.openDatabase(this.config.getName(), '1.0', this.config.getName(), 2 * 1024 * 1024);
                        console.log("OpenDataBase:", this.connection);
                        return [2 /*return*/, this.connection];
                    });
                });
            };
        /**
         * @protected
         * @param {?} tx
         * @param {?} schema
         * @param {?} table_name
         * @param {?} table_sql
         * @return {?}
         */
        WebSQLDao.prototype.getColumns = /**
         * @protected
         * @param {?} tx
         * @param {?} schema
         * @param {?} table_name
         * @param {?} table_sql
         * @return {?}
         */
            function (tx, schema, table_name, table_sql) {
                /** @type {?} */
                var tmp_colArray = [];
                /** @type {?} */
                var columnStr = [];
                /** @type {?} */
                var isView = table_sql.indexOf('CREATE VIEW') > -1;
                if (!isView) {
                    columnStr = table_sql.split('(')[1].split(',');
                    tmp_colArray = columnStr.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        /** @type {?} */
                        var isPK = x.toUpperCase().indexOf("PRIMARY KEY") > -1;
                        /** @type {?} */
                        var name = x.trim().split(' ')[0];
                        /** @type {?} */
                        var isAutoIncrement = isPK && (x.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                        /** @type {?} */
                        var type = x.toUpperCase().indexOf("INTEGER") > -1 ? 'Integer' : 'Text';
                        return new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement);
                    }));
                }
                else {
                    // VIEW
                    /** @type {?} */
                    var mainTableIndex = table_sql.split(' ').indexOf("LEFT") - 1;
                    /** @type {?} */
                    var extTableIndex = mainTableIndex + 3;
                    /** @type {?} */
                    var mainTableName = table_sql.split(' ')[mainTableIndex];
                    /** @type {?} */
                    var extTableName = table_sql.split(' ')[extTableIndex];
                    /** @type {?} */
                    var mainTable = schema.get(mainTableName);
                    /** @type {?} */
                    var extTable = schema.get(extTableName);
                    tmp_colArray = __spread(mainTable.getColumns(), extTable.getColumns());
                    tmp_colArray = tmp_colArray.reduce(( /**
                     * @param {?} unique
                     * @param {?} o
                     * @return {?}
                     */function (unique, o) {
                        if (!unique.some(( /**
                         * @param {?} obj
                         * @return {?}
                         */function (obj) { return obj.getName() === o.getName(); }))) {
                            unique.push(o);
                        }
                        return unique;
                    }), []);
                }
                /** @type {?} */
                var tableObj = new SQLiteTable(table_name, tmp_colArray);
                schema.set(table_name, tableObj);
            };
        /**
         * @return {?}
         */
        WebSQLDao.prototype.runTransaction = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create((( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var batchArr = _this.transactionArr.map(( /**
                     * @param {?} cmd
                     * @return {?}
                     */function (cmd) { return [cmd.getSql(), cmd.getParams()]; }));
                    console.group('run transaction SQL:');
                    console.log('command:', batchArr);
                    console.groupEnd();
                    _this.connection.transaction(( /**
                     * @param {?} tx
                     * @return {?}
                     */function (tx) {
                        _this.transactionArr.forEach(( /**
                         * @param {?} cmd
                         * @return {?}
                         */function (cmd) {
                            tx.executeSql(cmd.getSql(), cmd.getParams());
                        }));
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                        observer.complete();
                        throw new APPError("F00018", error.message);
                    }), ( /**
                     * @return {?}
                     */function () {
                        observer.next(new SQLiteResponse({ status: true }, []));
                        observer.complete();
                    }));
                })));
            };
        /**
         * @return {?}
         */
        WebSQLDao.prototype.clearTransaction = /**
         * @return {?}
         */
            function () {
                this.transactionArr = [];
            };
        return WebSQLDao;
    }(SQLiteDao));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaoFactory = /** @class */ (function () {
        function DaoFactory(deviceService, errorHandler, APP_CONFIG) {
            this.deviceService = deviceService;
            this.errorHandler = errorHandler;
            this.APP_CONFIG = APP_CONFIG;
            this.tableMapping = new Map();
            this.dbMapping = new Map();
        }
        /**
         * @param {?} dbName
         * @param {?} tableName
         * @return {?}
         */
        DaoFactory.prototype.getTable = /**
         * @param {?} dbName
         * @param {?} tableName
         * @return {?}
         */
            function (dbName, tableName) {
                if (this.tableMapping.has(dbName)) {
                    if (this.tableMapping.get(dbName).has(tableName)) {
                        return this.tableMapping.get(dbName).get(tableName).cloneTable();
                    }
                    else {
                        this.errorHandler.handleError(new APPError("F00012", "Cannot Find table " + tableName + " in DB " + dbName + "."));
                        return undefined;
                    }
                }
                this.errorHandler.handleError(new APPError("F00012", "Cannot Find table " + tableName + " in DB " + dbName + "."));
                return undefined;
            };
        /**
         * @param {?} tableName
         * @return {?}
         */
        DaoFactory.prototype.getDefaultTable = /**
         * @param {?} tableName
         * @return {?}
         */
            function (tableName) {
                return this.getTable("Main", tableName);
            };
        /**
         * @param {?} dbName
         * @return {?}
         */
        DaoFactory.prototype.getDao = /**
         * @param {?} dbName
         * @return {?}
         */
            function (dbName) {
                console.log('get Dao:', dbName);
                if (this.dbMapping.has(dbName)) {
                    this.dbMapping.get(dbName).clearTransaction();
                    return this.dbMapping.get(dbName);
                }
                else {
                    this.errorHandler.handleError(new APPError("F00011", "Cannot Find Sqlite DB " + dbName + " Dao."));
                    return undefined;
                }
            };
        /**
         * @return {?}
         */
        DaoFactory.prototype.getDefaultDao = /**
         * @return {?}
         */
            function () {
                return this.getDao("Main");
            };
        /**
         * @return {?}
         */
        DaoFactory.prototype.init = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this.APP_CONFIG.ENV == 'DEV'))
                                    return [3 /*break*/, 1];
                                return [2 /*return*/];
                            case 1: return [4 /*yield*/, this.mappingDB()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DaoFactory.prototype.refreshTableSchema = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, db_config, db_names, db_names_1, db_names_1_1, name, e_1_1;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                                db_names = Object.keys(db_config);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 6, 7, 8]);
                                db_names_1 = __values(db_names), db_names_1_1 = db_names_1.next();
                                _b.label = 2;
                            case 2:
                                if (!!db_names_1_1.done)
                                    return [3 /*break*/, 5];
                                name = db_names_1_1.value;
                                return [4 /*yield*/, this.getTableSchema(name, db_config)];
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
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    console.group("refreshTableSchema");
                                    console.log(_this.dbMapping);
                                    console.log(_this.tableMapping);
                                    console.groupEnd();
                                }), 5000);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        DaoFactory.prototype.mappingDB = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_2, _a, db_config, db_names, db_names_2, db_names_2_1, name, e_2_1;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                                db_names = Object.keys(db_config);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 6, 7, 8]);
                                db_names_2 = __values(db_names), db_names_2_1 = db_names_2.next();
                                _b.label = 2;
                            case 2:
                                if (!!db_names_2_1.done)
                                    return [3 /*break*/, 5];
                                name = db_names_2_1.value;
                                console.log('getSchema:', name);
                                return [4 /*yield*/, this.getSchema(name, db_config)];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                db_names_2_1 = db_names_2.next();
                                return [3 /*break*/, 2];
                            case 5: return [3 /*break*/, 8];
                            case 6:
                                e_2_1 = _b.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 8];
                            case 7:
                                try {
                                    if (db_names_2_1 && !db_names_2_1.done && (_a = db_names_2.return))
                                        _a.call(db_names_2);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                                return [7 /*endfinally*/];
                            case 8:
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    console.group("mappingDB");
                                    console.log(_this.dbMapping);
                                    console.log(_this.tableMapping);
                                    console.groupEnd();
                                }), 5000);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
        DaoFactory.prototype.getSchema = /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
            function (dbname, config) {
                return __awaiter(this, void 0, void 0, function () {
                    var key, error_1, err;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, this.getDatabaseKey(dbname, config)];
                            case 1:
                                key = _a.sent();
                                return [4 /*yield*/, this.openDatabase(dbname, config, key)];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _a.sent();
                                console.warn("getSchema error:", error_1.message);
                                err = new APPError("F00010", "Sqlite DB open error.");
                                this.errorHandler.handleError(err);
                                return [3 /*break*/, 4];
                            case 4:
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
        DaoFactory.prototype.getDatabaseKey = /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
            function (dbname, config) {
                return __awaiter(this, void 0, void 0, function () {
                    var resp, setKeyResp, key, error_2, key;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 7, , 8]);
                                return [4 /*yield*/, this.deviceService.getSecureStorage(config[dbname].name).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log("getDatabaseKey resp:", resp);
                                if (!resp.includes("Device is not secure"))
                                    return [3 /*break*/, 2];
                                throw new Error(resp);
                            case 2:
                                if (!resp)
                                    return [3 /*break*/, 3];
                                return [2 /*return*/, resp];
                            case 3: return [4 /*yield*/, this.deviceService.setSecureStorage(config[dbname].name, uuid.v4()).toPromise()];
                            case 4:
                                setKeyResp = _a.sent();
                                if (!setKeyResp)
                                    return [3 /*break*/, 6];
                                return [4 /*yield*/, this.deviceService.getSecureStorage(config[dbname].name).toPromise()];
                            case 5:
                                key = _a.sent();
                                return [2 /*return*/, key];
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_2 = _a.sent();
                                console.log("getDatabaseKey error, use localStorage");
                                if (this.deviceService.getLocalStorage(config[dbname].name)) {
                                    return [2 /*return*/, this.deviceService.getLocalStorage(config[dbname].name)];
                                }
                                else {
                                    key = uuid.v4();
                                    this.deviceService.setLocalStorage(config[dbname].name, key);
                                    return [2 /*return*/, key];
                                }
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @param {?} key
         * @return {?}
         */
        DaoFactory.prototype.openDatabase = /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @param {?} key
         * @return {?}
         */
            function (dbname, config, key) {
                return __awaiter(this, void 0, void 0, function () {
                    var db_config, dao, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                db_config = new SQLiteDatabase(config[dbname].name, key);
                                return [4 /*yield*/, this.createDao(db_config)];
                            case 1:
                                dao = _a.sent();
                                this.dbMapping.set(config[dbname].name, dao);
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _a.sent();
                                this.errorHandler.handleError(new APPError("F00010", error_3.message));
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        DaoFactory.prototype.createDao = /**
         * @private
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return __awaiter(this, void 0, void 0, function () {
                    var dao;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.APP_CONFIG.ENV === 'DEV_WebSQL') {
                                    dao = new WebSQLDao(config);
                                }
                                else {
                                    dao = new SQLiteDao(config);
                                }
                                return [4 /*yield*/, dao.openDataBase()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, dao];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
        DaoFactory.prototype.getTableSchema = /**
         * @private
         * @param {?} dbname
         * @param {?} config
         * @return {?}
         */
            function (dbname, config) {
                return __awaiter(this, void 0, void 0, function () {
                    var tableMap;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.dbMapping.get(config[dbname].name).getSchema().toPromise()];
                            case 1:
                                tableMap = _a.sent();
                                this.tableMapping.set(config[dbname].name, tableMap);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} dbname
         * @return {?}
         */
        DaoFactory.prototype.clearDatabaseData = /**
         * @param {?} dbname
         * @return {?}
         */
            function (dbname) {
                return __awaiter(this, void 0, void 0, function () {
                    var dao_1, tableMap, resp, error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                dao_1 = this.dbMapping.get(dbname);
                                if (!dao_1)
                                    return [3 /*break*/, 2];
                                tableMap = this.tableMapping.get(dbname);
                                tableMap.forEach(( /**
                                 * @param {?} table
                                 * @param {?} table_name
                                 * @return {?}
                                 */function (table, table_name) {
                                    // Not View
                                    if (table_name.indexOf('TW_LH_SD') !== -1 && table_name.indexOf('TW_LH_SD_VW') == -1) {
                                        dao_1.transactionDelete(table);
                                    }
                                }));
                                return [4 /*yield*/, dao_1.runTransaction().toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log("clearDatabaseData resp:", resp);
                                return [3 /*break*/, 3];
                            case 2: throw new Error("Cannot find dao " + dbname + ".");
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                error_4 = _a.sent();
                                throw new APPError('F00022', "Clear database error, " + error_4.message);
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
        DaoFactory.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DaoFactory.ctorParameters = function () {
            return [
                { type: DeviceService },
                { type: i0.ErrorHandler },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ DaoFactory.ngInjectableDef = i0.defineInjectable({ factory: function DaoFactory_Factory() { return new DaoFactory(i0.inject(DeviceService), i0.inject(i0.ErrorHandler), i0.inject(ConfigToken, 8)); }, token: DaoFactory, providedIn: "root" });
        return DaoFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotEqualRestriction = /** @class */ (function () {
        function NotEqualRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        NotEqualRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " <> ? ";
            };
        /**
         * @return {?}
         */
        NotEqualRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return NotEqualRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClientCustomDao = /** @class */ (function () {
        function ClientCustomDao(dao) {
            this.baseDao = dao;
        }
        /**
         * @return {?}
         */
        ClientCustomDao.prototype.openDataBase = /**
         * @return {?}
         */
            function () {
                return this.baseDao.openDataBase();
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.queryByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                if (tableObject.hasColumn('IsDelete')) {
                    tableObject.addRestriction(new NotEqualRestriction("IsDelete", ["Y"]));
                }
                return this.baseDao.queryByTable(tableObject);
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.insertByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                var _this = this;
                /** @type {?} */
                var clientID = uuid.v4();
                if (tableObject.getValue('ClientID') == ''
                    || tableObject.getValue('ClientID') == undefined) {
                    tableObject.setValue("ClientID", clientID);
                }
                tableObject.setValue("ClientTime", new Date().getTime());
                tableObject.setValue("DataSource", "APP");
                tableObject.setValue("IsDelete", "N");
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.baseDao.insertByTable(tableObject).subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        resp.Header.clientID = clientID;
                        observer.next(resp);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.updateByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                tableObject.setValue("ClientTime", new Date().getTime());
                return this.baseDao.updateByTable(tableObject);
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.deleteByTable = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                tableObject.setValue("IsDelete", "Y");
                tableObject.setValue("ClientTime", new Date().getTime());
                return this.baseDao.updateByTable(tableObject);
            };
        /**
         * @param {?} sql_command
         * @return {?}
         */
        ClientCustomDao.prototype.excuteSqlCommand = /**
         * @param {?} sql_command
         * @return {?}
         */
            function (sql_command) {
                return this.baseDao.excuteSqlCommand(sql_command);
            };
        /**
         * @return {?}
         */
        ClientCustomDao.prototype.getSchema = /**
         * @return {?}
         */
            function () {
                return this.baseDao.getSchema();
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.transactionInsert = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                if (tableObject.getValue('ClientID') == ''
                    || tableObject.getValue('ClientID') == undefined) {
                    tableObject.setValue("ClientID", uuid.v4());
                }
                tableObject.setValue("ClientTime", new Date().getTime());
                tableObject.setValue("DataSource", "APP");
                tableObject.setValue("IsDelete", "N");
                this.baseDao.transactionInsert(tableObject);
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.transactionUpdate = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                tableObject.setValue("ClientTime", new Date().getTime());
                this.baseDao.transactionUpdate(tableObject);
            };
        /**
         * @param {?} tableObject
         * @return {?}
         */
        ClientCustomDao.prototype.transactionDelete = /**
         * @param {?} tableObject
         * @return {?}
         */
            function (tableObject) {
                tableObject.setValue("IsDelete", "Y");
                tableObject.setValue("ClientTime", new Date().getTime());
                this.baseDao.transactionUpdate(tableObject);
            };
        /**
         * @param {?} command
         * @return {?}
         */
        ClientCustomDao.prototype.transactionSqlCommand = /**
         * @param {?} command
         * @return {?}
         */
            function (command) {
                this.baseDao.transactionSqlCommand(command);
            };
        /**
         * @return {?}
         */
        ClientCustomDao.prototype.runTransaction = /**
         * @return {?}
         */
            function () {
                return this.baseDao.runTransaction();
            };
        /**
         * @return {?}
         */
        ClientCustomDao.prototype.clearTransaction = /**
         * @return {?}
         */
            function () {
                return this.baseDao.clearTransaction();
            };
        return ClientCustomDao;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SqliteExecutorComponent = /** @class */ (function () {
        function SqliteExecutorComponent(daoFactory, _location) {
            this.daoFactory = daoFactory;
            this._location = _location;
            this.isHasData = false;
            this.recordLength = 0;
        }
        /**
         * @return {?}
         */
        SqliteExecutorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var selectOption = [];
                for (var item in DATABASE_TABLES) {
                    if (isNaN(Number(item))) {
                        console.log('value:', item, '  name:', DATABASE_TABLES[item]);
                        selectOption.push(new SelectOption(item, DATABASE_TABLES[item]));
                    }
                }
                this.selectTablesOptionList = selectOption;
                this.selectTableChange(this.selectTablesOptionList[0].getValue());
            };
        /**
         * @return {?}
         */
        SqliteExecutorComponent.prototype.goToLastPage = /**
         * @return {?}
         */
            function () {
                this._location.back();
            };
        /**
         * @return {?}
         */
        SqliteExecutorComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.queryBytable(this.currentDbName, this.currentTable);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SqliteExecutorComponent.prototype.selectTableChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log("selectTableKey: ", event);
                this.selectTable = event;
                this.currentTable = DATABASE_TABLES[event];
                console.log("selectTable: ", this.selectTable);
                if (event.substring(0, 7) == 'Profile') {
                    this.currentDbName = 'Profile';
                    this.queryBytable(this.currentDbName, this.currentTable);
                }
                else {
                    this.currentDbName = 'Main';
                    this.queryBytable(this.currentDbName, this.currentTable);
                }
            };
        /**
         * @param {?} dbName
         * @param {?} tableName
         * @return {?}
         */
        SqliteExecutorComponent.prototype.queryBytable = /**
         * @param {?} dbName
         * @param {?} tableName
         * @return {?}
         */
            function (dbName, tableName) {
                var _this = this;
                console.log("dbName: ", dbName, " tableName: ", tableName);
                /** @type {?} */
                var dao;
                /** @type {?} */
                var tableObj;
                dao = this.daoFactory.getDao(dbName);
                dao = new ClientCustomDao(dao);
                tableObj = this.daoFactory.getTable(dbName, tableName);
                this.tableColumns = tableObj.getColumns().map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getName(); }));
                console.log("dao: ", dao);
                console.log("tableObj: ", tableObj);
                dao.queryByTable(tableObj).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.log("response data: ", data);
                    if (data.Header['status']) {
                        _this.recordLength = data.Header['record_length'];
                        _this.responseBody = data.Body;
                        console.log("responseBody: ", _this.responseBody);
                        _this.responseBody.forEach(( /**
                         * @param {?} element
                         * @return {?}
                         */function (element) {
                            // console.log("element key: ", Object.keys(element));
                            // console.log("element values: ", Object.values(element));
                            console.log("element: ", element);
                            element.values = Object.values(element);
                        }));
                        _this.isHasData = true;
                    }
                    else {
                        _this.isHasData = false;
                        alert("fail");
                    }
                    console.log("Sqlite data: ", data);
                }));
            };
        SqliteExecutorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-sqlite-executor',
                        template: "<div class=\"layout-full-page\">\n  <input type=\"button\" value=\"back\" (click)=\"goToLastPage()\">\n  <select form=\"carform\" [ngModel]=\"selectTable\" (ngModelChange)=\"selectTableChange($event)\">\n    <ng-container *ngFor=\"let tableOption of selectTablesOptionList\">\n        <option [value]=\"tableOption.getValue()\">{{tableOption.getName()}}</option>\n    </ng-container>\n  </select>\n  <input type=\"button\" value=\"refresh\" (click)=\"refresh()\">\n  <ng-container *ngIf=\"isHasData\">\n    <span> length: {{recordLength}}</span>\n    <table border=\"1\">\n      <thead>\n        <tr>\n          <th>N</th>\n          <ng-container *ngFor=\"let column of tableColumns\">\n          <th>{{column}}</th>\n          </ng-container>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let element of responseBody; let i = index\">\n          <th>{{i+1}}</th>\n          <ng-container *ngFor=\"let value of element.values\">\n            <th>{{value}}</th>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </ng-container>\n  \n</div>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-full-page{box-sizing:border-box;overflow-y:auto;height:100vh;display:inline-block;width:100vw;background-color:#fff;overflow-x:auto;padding:10px}.layout-full-page table{max-width:100vw;width:100%;height:100vh;overflow-y:auto;overflow-x:auto;background-color:#fff}@media (max-width:767px){.layout-full-page{padding-top:30px;padding-left:5px;padding-right:5px}}"]
                    }] }
        ];
        SqliteExecutorComponent.ctorParameters = function () {
            return [
                { type: DaoFactory },
                { type: i1.Location, decorators: [{ type: i0.Optional }] }
            ];
        };
        return SqliteExecutorComponent;
    }());
    /** @enum {string} */
    var DATABASE_TABLES = {
        //TW_LH_SD_Code_Type,
        Profile_TW_LH_SD_Code: 'TW_LH_SD_Code',
        Profile_TW_LH_SD_DeviceInfo: 'TW_LH_SD_DeviceInfo',
        Profile_TW_LH_SD_DataSync_Time: 'TW_LH_SD_DataSync_Time',
        //Profile_TW_LH_SD_DataSync_Function = 'TW_LH_SD_DataSync_Function',
        Profile_TW_LH_SD_VW_FuncSync_Time: 'TW_LH_SD_VW_FuncSync_Time',
        Profile_TW_LH_SD_Language: 'TW_LH_SD_Language',
        Profile_TW_LH_SD_Error_Log: 'TW_LH_SD_Error_Log',
        Profile_TW_LH_SD_Action_Log: 'TW_LH_SD_Action_Log',
        TW_LH_SD_Calendar_Extension: 'TW_LH_SD_Calendar_Extension',
        TW_LH_SD_Calendar: 'TW_LH_SD_Calendar',
        TW_LH_SD_Customer_Address_Extension: 'TW_LH_SD_Customer_Address_Extension',
        TW_LH_SD_Customer_Email_Extension: 'TW_LH_SD_Customer_Email_Extension',
        TW_LH_SD_Customer_Tel_Extension: 'TW_LH_SD_Customer_Tel_Extension',
        TW_LH_SD_Customer_Contact_Extension: 'TW_LH_SD_Customer_Contact_Extension',
        TW_LH_SD_Customer_Extension: 'TW_LH_SD_Customer_Extension',
        TW_LH_SD_Customer_Address: 'TW_LH_SD_Customer_Address',
        TW_LH_SD_Customer_Email: 'TW_LH_SD_Customer_Email',
        TW_LH_SD_Customer_Tel: 'TW_LH_SD_Customer_Tel',
        TW_LH_SD_Customer_Contact: 'TW_LH_SD_Customer_Contact',
        TW_LH_SD_Customer: 'TW_LH_SD_Customer',
        TW_LH_SD_Personal_Setting: 'TW_LH_SD_Personal_Setting',
        TW_LH_SD_VW_Customer: 'TW_LH_SD_VW_Customer',
        TW_LH_SD_Message: 'TW_LH_SD_Message',
        //goal-setting & progress table 
        TW_LH_SD_Year_Config: 'TW_LH_SD_Year_Config',
        TW_LH_SD_Goal_Setting: 'TW_LH_SD_Goal_Setting',
        TW_LH_SD_Goal_Setting_Value: 'TW_LH_SD_Goal_Setting_Value',
        TW_LH_SD_Goal_Setting_Plan_Value: 'TW_LH_SD_Goal_Setting_Plan_Value',
        TW_LH_SD_Goal_Setting_Expected: 'TW_LH_SD_Goal_Setting_Expected',
        TW_LH_SD_Actual_Value: 'TW_LH_SD_Actual_Value',
        TW_LH_SD_Agency_Plan_Main: 'TW_LH_SD_Agency_Plan_Main',
        TW_LH_SD_Agency_Detail_Data: 'TW_LH_SD_Agency_Detail_Data',
        TW_LH_SD_Personal_Progress: 'TW_LH_SD_Personal_Progress',
        TW_LH_SD_Team_Progress_Main: 'TW_LH_SD_Team_Progress_Main',
        TW_LH_SD_Team_Progress_Detail: 'TW_LH_SD_Team_Progress_Detail',
        TW_LH_SD_Other_Parameter: 'TW_LH_SD_Other_Parameter',
    };
    var SelectOption = /** @class */ (function () {
        function SelectOption(value, name) {
            this._value = value;
            this._name = name;
        }
        /**
         * @return {?}
         */
        SelectOption.prototype.getName = /**
         * @return {?}
         */
            function () {
                return this._name;
            };
        /**
         * @return {?}
         */
        SelectOption.prototype.getValue = /**
         * @return {?}
         */
            function () {
                return this._value;
            };
        return SelectOption;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePriceService = /** @class */ (function () {
        function TranslatePriceService(loginMgr) {
            var _this = this;
            this.loginMgr = loginMgr;
            this._role = '';
            this._million = 1000000;
            this.loginMgr.getLoginInfo().subscribe(( /**
             * @param {?} info
             * @return {?}
             */function (info) {
                if (info.AppUseMode && info.AppUseMode.length > 0)
                    _this._role = info.AppUseMode[info.AppUseMode.length - 1];
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TranslatePriceService.prototype.translatePrice = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var isCAOorZONEHEAD = (this._role == 'Manager' || this._role == 'Supervisor');
                /** @type {?} */
                var isValueLegal = !isNaN(Number(value));
                if (isValueLegal) {
                    return isCAOorZONEHEAD ? this._numberToFix(value / this._million, 1) : value;
                }
                else {
                    return value;
                }
            };
        /**
         * @private
         * @param {?} n
         * @param {?} toFix
         * @return {?}
         */
        TranslatePriceService.prototype._numberToFix = /**
         * @private
         * @param {?} n
         * @param {?} toFix
         * @return {?}
         */
            function (n, toFix) {
                /** @type {?} */
                var powNum = Math.pow(10, toFix);
                return Math.round(n * powNum) / powNum;
            };
        TranslatePriceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        TranslatePriceService.ctorParameters = function () {
            return [
                { type: DefaultLoginMgr }
            ];
        };
        /** @nocollapse */ TranslatePriceService.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePriceService_Factory() { return new TranslatePriceService(i0.inject(DefaultLoginMgr)); }, token: TranslatePriceService, providedIn: "root" });
        return TranslatePriceService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePricePipe = /** @class */ (function () {
        function TranslatePricePipe(translatePriceService) {
            this.translatePriceService = translatePriceService;
            this.role = '';
            this.million = 1000000;
        }
        /**
         * @param {?} value
         * @param {?=} args
         * @return {?}
         */
        TranslatePricePipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} args
         * @return {?}
         */
            function (value, args) {
                return this.translatePriceService.translatePrice(value);
            };
        TranslatePricePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translatePrice',
                        pure: false
                    },] }
        ];
        TranslatePricePipe.ctorParameters = function () {
            return [
                { type: TranslatePriceService }
            ];
        };
        return TranslatePricePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$1.HttpClientModule,
                            i1.CommonModule,
                            forms.FormsModule
                        ],
                        declarations: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, SqliteExecutorComponent],
                        exports: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, i1$1.HttpClientModule]
                    },] }
        ];
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Language = /** @class */ (function () {
        function Language() {
            //dashboard 
            this.performance = "Performance";
            this.team = "Team";
            this.personal = "Personal";
            this.activitiesPoints = "Activities_Points";
            this.monthlyProgress = "Monthly_Progress";
            this.yearlyProgress = "Yearly_Progress";
            this.message = "Message";
            this.progress = "Progress";
            this.goalSettingMsgType = "Goal_Setting";
            this.all = "All";
            this.unread = "Unread";
            this.noMessage = "No_Message";
            this.schedule = "Schedule";
            this.noBirthday = "No_Birthday";
            this.customerType = "Customer_Type";
            this.customerSource = "Customer_Source";
            this.birthday = "Birthday";
            this.ageRange = "Age_range";
            this.gender = "Gender";
            //annualIncome : string = "Annual_Income(Year/NTD)";
            this.source = "Source";
            this.marriage = "Marriage";
            this.children = "Children";
            this.familiarity = "Familiarity";
            this.recentStatus = "Recent_status";
            this.customerStatus = "Customer_Status";
            this.contactFrequencyMonth = "Contact_Frequency_Month";
            this.possibility = "Possibility";
            this.completeness = "Completeness";
            this.contactFrequency = "Contact_Frequency";
            this.timePerYear = "Time_Per_Year";
            this.appointment = "Appointment";
            this.contact = "Contact";
            this.edit = "Edit";
            this.delete = "Delete";
            this.home = "Home";
            this.homepage = "Homepage";
            this.work = "Work";
            this.mobile = "Mobile";
            this.detail = "Detail";
            this.occupation = "Occupation";
            this.company = "Company";
            this.annualIncome = "Annual_Income";
            // extraItem : string = "ExtraItem";
            this.contactNote = "Contact_Note";
            this.add = "Add";
            this.noRecord = "No_Record";
            this.customerList = "Customer_List";
            this.importPhone = "Import_Phone";
            this.people = "People";
            // customer-edit page
            this.lastName = "Last_name";
            this.firstName = "First_name";
            this.phone = "Phone";
            this.email = "Email";
            this.address = "Address";
            this.country = "Country";
            this.city = "City";
            this.area = "Area";
            this.code = "Code";
            // birthday : string = "Birthday";
            this.age = "Age";
            // gender : string = "Gender";
            // occupation : string = "Occupation";
            // company : string ="Company";
            // annualIncome : string =  "Annual_Income";
            this.select = "Select";
            // source : string = "Source";
            // marriage : string = "Marriage";
            // children : string = "Children";
            // familiarity : string = "Familiarity";
            // occupation : string = "Occupation";
            // recentStatus : string = "Recent_status";
            // customerStatus : string = "Customer_Status";
            this.contactFrequencyYear = "Contact_Frequency_Year";
            // possibility : string = "Possibility";
            this.save = "Save";
            this.lastNamePlaceholder = "Last_Name_Placeholder";
            this.firstNamePlaceholder = "First_Name_Placeholder";
            this.wrongLastName = "Wrong_Lastname";
            this.wrongEmail = "Wrong_Email";
            this.wrongBirthday = "Wrong_Birthday";
            // custermer-filter page
            // customerType : string = "Customer_Type";
            // customerSource : string = "Customer_Source";
            // birthday : string = "Birthday";
            // ageRange : string = "Age_range";
            // gender : string = "Gender";
            this.annualIncomeYearNTD = "Annual_Income(Year/NTD)";
            // source : string = "Source";
            // marriage : string = "Marriage";
            // familiarity : string = "Familiarity";
            // customerStatus : string = "Customer_Status";
            // contactFrequencyMonth : string = "Contact_Frequency_Month";
            this.preset = "Preset";
            this.day = "Day";
            this.week = "Week";
            this.month = "Month";
            this.year = "Year";
            this.today = "Today";
            this.filter = "Filter";
            this.appointmentDetail = "Appointment_Details";
            this.saved = "Saved";
            this.loading = "Loading";
            this.title = "Title";
            this.location = "Location";
            this.activity = "Activity";
            this.date = "Date";
            this.allDay = "All_Day";
            this.from = "From";
            this.to = "To";
            this.alert = "Alert";
            this.remark = "Remark";
            this.yes = "Yes";
            this.no = "No";
            this.deleteAppointment = "Delete_Appointment";
            this.wrongTitle = "wrong_Title";
            this.wrongAlert = "Wrong_Alert";
            this.alertPlaceholder = "Alert_Placeholder";
            this.wrongTitleRequired = "Wrong_Title_Require";
            this.wrongActivityRequired = "Wrong_Activity_Required";
            this.wrongDate = "Wrong_Date";
            this.wrongTime = "Wrong_Time";
            this.wrongStartTime = "Wrong_Start_Time";
            this.wrongEndTime = "Wrong_End_Time";
            this.wrongAlertRequired = "Wrong_Alert_Require";
            this.noSchedule = "No_Schedule";
            // customer-list page
            this.customerInformation = "Customer_Information";
            this.click = "Click";
            this.noEdit = "No_Edit";
            this.noSearch = "No_Search";
            this.noFilter = "No_Filter";
            // customer page 
            this.import = "Import";
            this.customerFilter = "Customer_Filter";
            this.clear = "CLEAR";
            this.selectNumber = "Select_Number";
            // save : string = "Save";
            // contactNote : string = "Contact_Note";
            this.cancel = "Cancel";
            this.protectionTitle = "Protection_Title";
            this.deleteMessage = "Delete_Message";
            this.customer = "Customer";
            this.deleteProtectionTitle = "Delete_Protection_Title";
            this.updateProtectionTitle = "Update_Protection_Title";
            this.commentRemindTitle = "Comment_Remind_Title";
            this.confirm = "Confirm";
            this.completed = "Completed";
            this.searchPlaceholder = "Search_Placeholder";
            this.notePlaceholder = "Note_Placeholder";
            this.logOut = "Log_Out";
            this.noClick = "No_Click";
            this.noInformation = "No_Information";
            this.moreOption = "More_Option";
            this.empty = "Empty";
            this.calendarMore = "Calendar_More";
            this.mainMenu = "Main_Menu";
            this.have = "Have";
            this.appointments = "Appointments";
            this.anAppointment = "An_Appointment";
            this.notification = "Notification";
            this.language = "Language";
            this.version = "Version";
            this.contactMessage = "Contact_Message";
            this.welcome = "Welcome";
            this.accountPassword = "Account_Password";
            this.nationalID = "National_ID";
            this.password = "Password";
            this.forgotPassword = "Forgot_Password";
            this.login = "Login";
            this.pleaseWait = "Please_Wait";
            this.changeLanguage = "Change_Language";
            this.fontSize = "Font_Size";
            this.changeFontSize = "Change_Font_Size";
            this.updateTime = "Update_Time";
            this.seeDetails = "See_Details";
            this.fileDownload = "File_Download";
            this.signIn = "Sign_In";
            this.loadingMessage = "Landing_Message";
            this.load = "Load";
            this.agencyPlanSubtitle = "Agency_Plan_Subtitle";
            this.agencyPlanOverviewTitle = "Agency_Plan_Overview_Title";
            this.FYFCForecast = "FYFC_Forecast";
            this.FYFCActual = "FYFC_Actual";
            this.FYFCMonthPlan = "FYFC_Month_Plan";
            this.ANPForecast = "ANP_Forecast";
            this.ANPActual = "ANP_Actual";
            this.ANPMonthPlan = "ANP_Month_Plan";
            this.manpowerPlan = "Manpower_Plan";
            this.recruitmentPlan = "Recruitment_Plan";
            this.manpower = "Manpower";
            this.recruitment = "Recruitment";
            this.FYFCGoal = "FYFC_Goal";
            this.directUnit = "Direct_Unit";
            this.agencyPlanInformationTitle = "Agency_Plan_Information_Title";
            this.yellow = "Yellow";
            this.agencyPlanInformation = "Agency_Plan_Information";
            this.agencyPlanExpected = "Agency_Plan_Expected";
            this.teamGoal = 'Team_Goal';
            this.Q1 = "Q1";
            this.Q2 = "Q2";
            this.Q3 = "Q3";
            this.Q4 = "Q4";
            this.recruitmentTotal = "Recruitment_Total";
            this.indirectUnit = "Indirect_Unit";
            this.ANPGoal = "ANP_Goal";
            this.saveFile = "Save_File";
            this.agencyPlan = "Agency_Plan";
            this.FYFC = "FYFC";
            this.ANP = "ANP";
            this.recruitmentCommitment = "Recruitment_Commitment";
            this.caseCount = "Case_Count";
            this.averageFYFCPerCase = "Average_FYFC_Per_Case";
            this.averageANPPerCase = "Average_ANP_Per_Case";
            this.manpowerGoal = "Manpower_Goal";
            this.reset = "Reset";
            this.thisYearTitle = "This_Year_Title";
            this.variableYearTitle = "Variable_Year_Title";
            this.yourAgencyGoal = "Your_Agency_Goal";
            this.annualConvention = "Annual_Convention";
            this.promotionPlan = "Promotion_Plan";
            this.MDRT = "MDRT";
            this.goalEffectiveMonth = "Goal_Effective_Month";
            this.allYearGoal = "All_Year_Goal";
            this.monthGoal = "Month_Goal";
            this.allianzStarClub = "Allianz_Star_Club";
            this.summitTrip = "Summit_Trip";
            this.longTermIncentiveTripProgram = "Long_Term_Incentive_Trip_Program";
            this.COT = "COT";
            this.TOT = "TOT";
            this.SP = "SP";
            this.AM = "AM";
            this.SM = "SM";
            this.dashDash = "Dash_Dash";
            this.personalMonthlyPlanFYFC = "Personal_Monthly_Plan_FYFC";
            this.plan = "Plan";
            this.actual = "Actual";
            this.overviewStep3Title = "Overview_Step3_Title";
            this.find = "Find";
            this.meet = "Meet";
            this.submit = "Submit";
            this.inforce = "Inforce";
            this.daily = "Daily";
            this.weekly = "Weekly";
            this.monthly = "Monthly";
            this.approvalStatus = "Approval_Status";
            this.goalBeenApproval = "Goal_Been_Approval";
            this.adjustYourGoal = "Adjust_Your_Goal";
            this.proceedToProgress = "Proceed_To_Progress";
            this.teamMonthlyPlanFYFCTitle = "Team_Monthly_Plan_FYFC_Title";
            this.completionRate = "Completion_Rate";
            this.editPersonalPlanFYFCTitle = "Edit_Personal_Plan_FYFC_Title";
            this.goalBeenReject = "Goal_Been_Reject";
            this.goalBeenPend = "Goal_Been_Pend";
            this.needToBeRecommentTitle = "Need_To_Be_Recomment_Title";
            this.needToBeRecommentContent = "Need_To_Be_Recomment_Content";
            this.workingExperience = "Working_Experience";
            this.goalSettingStep1Title = "Goal_Setting_Step1_Title";
            this.goalSettingStep2Title = "Goal_Setting_Step2_Title";
            this.goalSettingStep3Title = "Goal_Setting_Step3_Title";
            this.goalSettingStep4Title = "Goal_Setting_Step4_Title";
            this.goalSettingStep5Title = "Goal_Setting_Step5_Title";
            this.statusBarStep1 = "Status_Bar_Step1";
            this.statusBarStep2 = "Status_Bar_Step2";
            this.statusBarStep3 = "Status_Bar_Step3";
            this.statusBarStep4 = "Status_Bar_Step4";
            this.statusBarStep5 = "Status_Bar_Step5";
            this.FYFCAllYear = "FYFC_All_Year";
            this.FYFCNowToYearEnd = "FYFC_Now_To_Year_End";
            this.NowToYearEnd = "Now_To_Year_End";
            this.yourGoal = "Your_Goal";
            this.comment = "Comment";
            this.findSubtitle = "Find_Subtitle";
            this.scheduleSubtitle = "Schedule_Subtitle";
            this.meetSubtitle = "Meet_Subtitle";
            this.submitSubtitle = "Submit_Subtitle";
            this.inforceSubtitle = "Inforce_Subtitle";
            this.reject = "Reject";
            this.approve = "Approve";
            this.commitmentTeamGoalTitle = "Commitment_Team_Goal_Title";
            this.CommitmentPlaceholder = "Commitment_Placeholder";
            this.progressCongratulationsMessage = "Progress_Congratulations_Message";
            this.month1 = 'Month_1';
            this.month2 = 'Month_2';
            this.month3 = 'Month_3';
            this.month4 = 'Month_4';
            this.month5 = 'Month_5';
            this.month6 = 'Month_6';
            this.month7 = 'Month_7';
            this.month8 = 'Month_8';
            this.month9 = 'Month_9';
            this.month10 = 'Month_10';
            this.month11 = 'Month_11';
            this.month12 = 'Month_12';
            this.times = "Times";
            this.hi = "Hi";
            this.go = "Go";
            this.goalSettingExcel = "Goal_Setting_Excel";
            this.setGoalThisYear = "Set_Goal_This_Year";
            this.next = "Next";
            this.case = "Case";
            this.ok = "Ok";
            this.skip = "Skip";
            this.goalSettingCreateCustomer = "Goal_Setting_Create_Customer";
            this.goalSettingCustomerJournal = "Goal_Setting_Customer_Journal";
            this.goalSettingActivityType = "Goal_Setting_Activity_Type";
            this.goalSettingFastQuotation = "Goal_Setting_Fast_Quotation";
            this.submission = "Submission";
            this.goalSettingInforcePolicy = "Goal_Setting_Inforce_Policy";
            this.FYFCShortfall = "FYFC_Shortfall";
            this.ANPActualVariable = "ANP_Actual_Variable";
            this.ANPAllYear = "ANP_All_Year";
            this.ANPNowToYearEnd = "ANP_Now_To_Year_End";
            this.pendingApproval = "Pending_Approval";
            this.dashboardMonth7 = "Dashboard_Month_7";
            //progress
            this.points = "Points";
            this.congratulationsMsg = 'Progress_Congratulations_Message';
            this.almostMadeItMsg = 'Progress_Almost_Made_It_Message';
            this.wellDoneMsg = 'Progress_Well_Done_Message';
            this.greatJobMsg = 'Progress_Great_Job_Message';
            this.quarter = 'Quarter';
            this.backToProgressBtnText = 'Back_To_Progress';
            this.goal = 'Goal';
            this.forecast = 'Forecast';
            this.shortfall = 'Shortfall';
            //progres activity
            this.activitiesText = 'Activities';
            this.achieveText = 'Achieve';
            this.actualGoal = 'Actual_Goal'; //
            this.actualPlan = 'Actual_Plan'; //
            this.meetPresentText = 'Meet_Present';
            this.monthlyPlanFYFCTitleText = 'Monthly_Plan_FYFC_Title';
            this.totalForecastTitle = 'Total_Forecast';
            this.totalYTDActualTitle = 'Total_YTD_Actual';
            this.directUnitTitle = 'Direct_Unit_Title';
            this.indirectUnitTitle = 'Indirect_Unit_Title';
            this.agencyTitle = 'Agency_Title';
            this.allZoneTitle = 'All_Zone_Title';
            //infomation
            this.informationDescriptionText = 'Info_Information_Description';
            this.infoTitle = 'Info_Title';
            this.infoMonthDetailText = 'Info_Month_Detail';
            this.infoQuarterDetailText = 'Info_Quarter_Detail';
            this.infoYearDetailText = 'Info_Year_Detail';
            this.infoForecastRecruitmentDetailText = 'Info_Forecast_Recruitment_Detail';
            this.infoHowToReadThisTitle = 'Info_How_To_Read_This';
            this.infoConversionRateText = 'Info_Conversion_Rate';
            this.infoConversionRateDetailText = 'Info_Conversion_Rate_Detail';
            this.infoActivityLabelText = 'Info_Activity_Label';
            this.infoRedMeanText = 'Info_Red_Mean';
            this.infoGreyMeanText = 'Info_Grey_Mean';
            this.infoIfAnActivity1Text = 'Info_If_An_Activity_1';
            this.infoIfAnActivity2Text = 'Info_If_An_Activity_2';
            this.infoToFindText = 'Info_To_Find';
            this.infoTryTo1Text = 'Info_Try_To_1';
            this.infoTryTo2Text = 'Info_Try_To_2';
            this.infoTryTo3Text = 'Info_Try_To_3';
            this.infoMoreActive1Text = 'Info_More_Active_1';
            this.infoMoreActive2Text = 'Info_More_Active_2';
            this.infoMoreActive3Text = 'Info_More_Active_3';
            this.infoMoreActive4Text = 'Info_More_Active_4';
            this.infoTryHard1Text = 'Info_Try_Hard_1';
            this.infoTryHard2Text = 'Info_Try_Hard_2';
            this.infoTryHard3Text = 'Info_Try_Hard_3';
            this.infoHighQuality1Text = 'Info_High_Quality_1';
            this.infoHighQuality2Text = 'Info_High_Quality_2';
            this.infoAllAmountCountsByMillion = "Info_All_Amount_Counts_By_Million";
            this.waitingApproval = "Waiting_Approval";
            this.complete = "Complete";
            //notification
            this.needToGoalSettingTitle = "Need_To_Goal_Setting_Title";
            this.goalAutoApproveMessageTitle = "Goal_Auto_Approve_Message_Title";
            this.goalAutoApproveMessageDesc = "Goal_Auto_Approve_Message_Desc";
            this.goalAutoApproveLeaderMessageTitle = "Goal_Auto_Approve_Leader_Message_Title";
            this.goalAutoApproveLeaderMessageDesc = "Goal_Auto_Approve_Leader_Message_Desc";
            this.approveGoalIsRejectTitle = "Approve_Goal_Is_Reject_Title";
            this.approveGoalIsRejectBody = "Approve_Goal_Is_Reject_Body";
            this.approveGoalIsApprovedTitle = "Approve_Goal_Is_Approved_Title";
            this.approveGoalIsApprovedBody = "Approve_Goal_Is_Approved_Body";
            this.pendingReviewTitle = "Pending_Review_Title";
            this.supervisorHaveChangeAgentTitle = "Supervisor_Have_Change_Agent_Title";
            this.supervisorHaveChangeAgentBody = "Supervisor_Have_Change_Agent_Body";
            this.supervisorHaveChangeOldTitle = "Supervisor_Have_Change_Old_Title";
            this.supervisorHaveChangeOldBody = "Supervisor_Have_Change_Old_Body";
            this.supervisorHaveChangeNewTitle = "Supervisor_Have_Change_New_Title";
            this.supervisorHaveChangeNewBody = "Supervisor_Have_Change_New_Body";
            this.goalAutoRejectMessageTitle = "Goal_Auto_Reject_Message_Title";
            this.goalAutoRejectMessageDescription = "Goal_Auto_Reject_Message_Description";
            this.goalAutoRejectLeaderMessageTitle = "Goal_Auto_Reject_Leader_Message_Title";
            this.goalAutoRejectLeaderMessageDescription = "Goal_Auto_Reject_Leader_Message_Description";
            this.activityTenPointTitle = "Activity_Ten_Point_Title";
            this.activityTenPointBody = "Activity_Ten_Point_Body";
            this.activityTwentyPointTitle = "Activity_Twenty_Point_Title";
            this.activityTwentyPointBody = "Activity_Twenty_Point_Body";
            this.activityMiniPointTitle = "Activity_Mini_Point_Title";
            this.activityMiniPointBody = "Activity_Mini_Point_Body";
            this.customerOvertimeTitle = "Customer_Overtime_Title";
            this.customerAutoDeleteTitle = "Customer_Auto_Delete_Title";
            this.goalPeriodNotStartTitle = "Goal_Period_Not_Start_Title";
            this.goalPeriodNotStartBody = "Goal_Period_Not_Start_Body";
            this.adjustGoal = "Adjust_Goal";
            this.seeProgress = "See_Progress";
            this.IGotIt = "I_Got_It";
            this.dataPrivacyProtectionTitle = "Data_Privacy_Protection_Title";
            this.dataPrivacyProtectionBody = "Data_Privacy_Protection_Body";
            this.pleaseReconnectInternet = "Please_Reconnect_Internet";
            this.dataCollectionProcessAndUsageTitle = "Data_Collection_Process_And_Usage_Title";
            this.dataCollectionProcessAndUsageBody = "Data_Collection_Process_And_Usage_Body";
            this.versionMessage = "Version_Message";
            this.timeOut = "Time_Out";
            this.versionUpdate = "Version_Update";
            this.later = "Later";
            this.noWifiConnected = "No_Wifi_Connected";
            this.pleaseConnectInternet = "Please_Connect_Internet";
            this.deleteDataTitle = "Delete_Data_Title";
            this.deleteDataBody = "Delete_Data_Body";
            this.notShowMessage = "Not_Show_Message";
            this.languageConversionTitle = "Language_Conversion_Title";
            this.languageConversionBody = "Language_Conversion_Body";
            this.customersUnit = "Customers_Unit";
            this.casesUnit = "Cases_Unit";
            this.todayScheduleBirthday = "Today_Schedule_Birthday";
            this.yearUnit = "Year_Unit";
            this.vertical = "Vertical";
            this.horizonal = "Horizonal";
            this.addProtection = "Add_Protection";
            this.more = "More";
            this.submitDeal = "Submit_Deal";
            this.progressGoToCalendar = "Progress_Go_To_Calendar";
            this.homeHi = "Home_Hi";
            this.homeAppointmentDetails = "Home_Appointment_Details";
            this.homeEdit = "Home_Edit";
            this.homeDelete = "Home_Delete";
            this.homeAppointment = "Home_Appointment";
            this.homeSave = "Home_Save";
            this.homeFYFC = "Home_FYFC";
            this.homeANP = "Home_ANP";
            this.homeConfirm = "Home_Confirm";
            this.homePersonal = "Home_Personal";
            this.homeTeam = "Home_Team";
            this.homeDetails = "Home_Details";
            this.homeToday = "Home_Today";
            this.homeSchedule = "Home_Schedule";
            this.homeBirthday = "Home_Birthday";
            this.customerClear = "Customer_Clear";
            this.customerAppointment = "Customer_Appointment";
            this.customerContact = "Customer_Contact";
            this.customerEdit = "Customer_Edit";
            this.customerDelete = "Customer_Delete";
            this.customerAdd = "Customer_Add";
            this.addProfile = "Add_Profile";
            this.customerSave = "Customer_Save";
            this.customerConfirm = "Customer_Confirm";
            this.customerDetail = "Customer_Detail";
            this.unbindDevice = "Unbind_Device";
            this.unbind = "Unbind";
            this.settingSeeDetails = "Setting_See_Details";
            this.goalSettingReset = "Goal_Setting_Reset";
            this.goalSettingNext = "Goal_Setting_Next";
            this.goalSettingSubmit = "Goal_Setting_Submit";
            this.goalSettingFind = "Goal_Setting_Find";
            this.goalSettingFindSubtitle = "Goal_Setting_Find_Subtitle";
            this.goalSettingSchedule = "Goal_Setting_Schedule";
            this.goalSettingScheduleSubtitle = "Goal_Setting_Schedule_Subtitle";
            this.goalSettingMeetPresent = "Goal_Setting_Meet_Present";
            this.goalSettingMeetPresentSubtitle = "Goal_Setting_Meet_Present_Subtitle";
            this.goalSettingSubmitDeal = "Goal_Setting_Submit_Deal";
            this.goalSettingSubmitDealSubtitle = "Goal_Setting_Submit_Deal_Subtitle";
            this.goalSettingInforce = "Goal_Setting_Inforce";
            this.goalSettingInforceSubtitle = "Goal_Setting_Inforce_Subtitle";
            this.goalSettingDaily = "Goal_Setting_Daily";
            this.goalSettingWeekly = "Goal_Setting_Weekly";
            this.goalSettingMonthly = "Goal_Setting_Monthly";
            this.goalSettingDay = "Goal_Setting_Day";
            this.goalSettingWeek = "Goal_Setting_Week";
            this.goalSettingMonth = "Goal_Setting_Month";
            this.goalSettingActual = "Goal_Setting_Actual";
            this.goalSettingFYFC = "Goal_Setting_FYFC";
            this.goalSettingANP = "Goal_Setting_ANP";
            this.goalSettingManpower = "Goal_Setting_Manpower";
            this.goalSettingRecruitment = "Goal_Setting_Recruitment";
            this.goalSettingPersonal = "Goal_Setting_Personal";
            this.goalSettingTeam = "Goal_Setting_Team";
            this.goalSettingClear = "Goal_Setting_Clear";
            this.goalSettingSave = "Goal_Setting_Save";
            this.goalSettingPlan = "Goal_Setting_Plan";
            this.goalSettingSeeDetails = "Goal_Setting_See_Details";
            this.goalSettingLandingHi = "Goal_Setting_Landing_Hi";
            this.goalSettingCalendarJournal = "Goal_Setting_Calendar_Journal";
            this.calendarFilter = "Calendar_Filter";
            this.calendarActivity = "Calendar_Activity";
            this.calendarCustomerName = "Calendar_Customer_Name";
            this.calendarAppointmentDetails = "Calendar_Appointment_Details";
            this.calendarEdit = "Calendar_Edit";
            this.calendarDelete = "Calendar_Delete";
            this.calendarAppointment = "Calendar_Appointment";
            this.calendarSave = "Calendar_Save";
            this.calendarDay = "Calendar_Day";
            this.calendarWeek = "Calendar_Week";
            this.calendarMonth = "Calendar_Month";
            this.calendarYear = "Calendar_Year";
            this.calendarToday = "Calendar_Today";
            this.progressWeek = "Progress_Week";
            this.progressToday = "Progress_Today";
            this.progressPersonal = "Progress_Personal";
            this.progressTeam = "Progress_Team";
            this.progressMonth = "Progress_Month";
            this.progressQuarter = "Progress_Quarter";
            this.progressYear = "Progress_Year";
            this.progressFYFC = "Progress_FYFC";
            this.progressANP = "Progress_ANP";
            this.progressFind = "Progress_Find";
            this.progressFindSubtitle = "Progress_Find_Subtitle";
            this.progressSchedule = "Progress_Schedule";
            this.progressScheduleSubtitle = "Progress_Schedule_Subtitle";
            this.progressMeetPresent = "Progress_Meet_Present";
            this.progressMeetPresentSubtitle = "Progress_Meet_Present_Subtitle";
            this.progressSubmitDeal = "Progress_Submit_Deal";
            this.progressSubmitDealSubtitle = "Progress_Submit_Deal_Subtitle";
            this.progressInforce = "Progress_Inforce";
            this.progressInforceSubtitle = "Progress_Inforce_Subtitle";
            this.progressPlan = "Progress_Plan";
            this.progressActual = "Progress_Actual";
            this.progressGoal = "Progress_Goal";
            this.progressForecast = "Progress_Forecast";
            this.progressShortfall = "Progress_Shortfall";
            this.progressManpower = "Progress_Manpower";
            this.progressRecruitment = "Progress_Recruitment";
            this.progressCurrentMonth = "Progress_Current_Month";
            this.progressCurrentQuarter = "Progress_Current_Quarter";
            this.progressCurrentYear = "Progress_Current_Year";
            this.progressForecastRecruitment = "Progress_Forecast_Recruitment";
            this.progressClose = "Progress_Close";
            this.progressSeeDetails = "Progress_See_Details";
            this.progressDetail = "Progress_Detail";
            this.settingYes = "Setting_Yes";
            this.settingNo = "Setting_No";
            this.detectScreenshotTitle = "Detect_Screenshot_Title";
            this.detectScreenshotContent = "Detect_Screenshot_Content";
            this.noContactPermissionTitle = "No_Contact_Permission_Title";
            this.noContactPermissionContent = "No_Contact_Permission_Content";
            this.submitFailTitle = "Submit_Fail_Title";
            this.submitFailContent = "Submit_Fail_Content";
            this.notificationSeeProgress = "Notification_See_Progress";
            this.notificationSaveFeedback = "Notification_Save_Feedback";
            this.notificationDeleteFeedback = "Notification_Delete_Feedback";
            this.notificationCompleteFeedback = "Notification_Complete_Feedback";
            //message 1, 2
            this.goalPeriodNotStartOk = "Goal_Period_Not_Start_Ok";
            //message 3 
            this.goalPeriodIsBeginOk = "Goal_Period_Is_Begin_Ok";
            //message 5 
            this.needToGoalSettingAdjustGoal = "Need_To_Goal_Setting_Adjust_Goal";
            //message 6 
            this.goalAutoApproveAdjustGoal = "Goal_Auto_Approve_Adjust_Goal";
            //messsage 7 
            this.goalAutoApproveLeaderOk = "Goal_Auto_Approve_Leader_Ok";
            //messaage 8
            this.approveGoalIsRejectAdjustGoal = "Approve_Goal_Is_Reject_Adjust_Goal";
            //message 9
            this.approveGoalIsApprovedOk = "Approve_Goal_Is_Approved_Ok";
            //message 11
            this.pendingReviewAgencyPlan = "Pending_Review_Agency_Plan";
            //message 12
            this.supervisorHaveChangeAgentOk = "Supervisor_Have_Change_Agent_Ok";
            //message 13
            this.supervisorHaveChangeOldOk = "Supervisor_Have_Change_Old_Ok";
            //message 14
            this.supervisorHaveChangeNewAgencyPlan = "Supervisor_Have_Change_New_Agency_Plan";
            //message 15
            this.goalAutoRejectAdjustGoal = "Goal_Auto_Reject_Adjust_Goal";
            //message 16
            this.goalAutoRejectLeaderOk = "Goal_Auto_Reject_Leader_Ok";
            //message 21
            this.dataPrivacyProtectionConfirm = "Data_Privacy_Protection_Confirm";
            // message 23
            this.customerOvertimeConfirm = "Customer_Overtime_Confirm";
            //message 24
            this.customerAutoDeleteConfirm = "Customer_Auto_Delete_Confirm";
            //message 28
            this.noWifiConnectedOk = "No_Wifi_Connected_Ok";
            //message 29
            this.versionUpdateYes = "Version_Update_Yes";
            this.versionUpdateLater = "Version_Update_Later";
            //message 30
            this.timeOutOk = "Time_Out_Ok";
            //message 31
            this.dataCollectionProcessAndUsageReject = "Data_Collection_Process_And_Usage_Reject";
            this.dataCollectionProcessAndUsageConfirm = "Data_Collection_Process_And_Usage_Confirm";
            //message 38
            this.detectScreenshotOk = "Detect_Screenshot_Ok";
            //not on master file
            this.submitFailOk = "Submit_Fail_Ok";
            this.noContactPermissionOk = "No_Contact_Permission_Ok";
            this.httpErrorOk = "HTTP_Error_Ok";
        }
        return Language;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataSyncTask = /** @class */ (function () {
        function DataSyncTask(errorHandler, DaoFactory$$1, registerDataSyncFunc) {
            this.errorHandler = errorHandler;
            this.DaoFactory = DaoFactory$$1;
            this.registerDataSyncFunc = registerDataSyncFunc;
        }
        /**
         * @return {?}
         */
        DataSyncTask.prototype.doTask = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.createTable()];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                console.warn('cannot run datasync!');
                                this.errorHandler.handleError(error_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DataSyncTask.prototype.refreshSchema = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.DaoFactory.refreshTableSchema()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        DataSyncTask.prototype.createTable = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var factory, ProfileDao, MainDao;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('create table task');
                                factory = this.DaoFactory;
                                //initial DB
                                return [4 /*yield*/, factory.init()];
                            case 1:
                                //initial DB
                                _a.sent();
                                console.log('factory init finish!');
                                ProfileDao = factory.getDao("Profile");
                                MainDao = factory.getDefaultDao();
                                if (!(ProfileDao && MainDao))
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, Promise.all([this.runSql(ProfileDao, this.createProfileTableCommand()), this.runSql(MainDao, this.createMainTableCommand())])];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, factory.refreshTableSchema()];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} dao
         * @param {?} cmd
         * @return {?}
         */
        DataSyncTask.prototype.runSql = /**
         * @private
         * @param {?} dao
         * @param {?} cmd
         * @return {?}
         */
            function (dao, cmd) {
                var e_1, _a;
                /** @type {?} */
                var SqlCommandArray = [];
                try {
                    for (var cmd_1 = __values(cmd), cmd_1_1 = cmd_1.next(); !cmd_1_1.done; cmd_1_1 = cmd_1.next()) {
                        var command = cmd_1_1.value;
                        SqlCommandArray.push(new SQLCommand(command, []));
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (cmd_1_1 && !cmd_1_1.done && (_a = cmd_1.return))
                            _a.call(cmd_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    dao.excuteSqlCommand(SqlCommandArray).subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log('create table res:', resp);
                        res();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        DataSyncTask.prototype.createProfileTableCommand = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var cmd = [];
                // cmd.push("DROP TABLE IF EXISTS TW_LH_SD_Code;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Code (TypeID TEXT,Code TEXT,MappingID TEXT,Orders INT NOT NULL,Arguments TEXT,ValidityPeriod INT NOT NULL,PRIMARY KEY (TypeID, Code, MappingID));");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Type\' , \'N\' , \'NormalType\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Type\' , \'Y\' , \'FavoriteType\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'Today\' , \'Today\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'1\' , \'Jan\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'2\' , \'Feb\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'3\' , \'Mar\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'4\' , \'Apr\' , 5 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'5\' , \'May\' , 6 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'6\' , \'Jun\' , 7 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'7\' , \'Jul\' , 8 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'8\' , \'Aug\' , 9 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'9\' , \'Sep\' , 10 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'10\' , \'Oct\' , 11 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'11\' , \'Nov\' , 12 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Birthday\' , \'12\' , \'Dec\' , 13 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'1\' , \'Completeness1_10\' , 1 , \'{\"start\":1,\"end\":10}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'2\' , \'Completeness11_20\' , 2 , \'{\"start\":11,\"end\":20}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'3\' , \'Completeness21_30\' , 3 , \'{\"start\":21,\"end\":30}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'4\' , \'Completeness31_40\' , 4 , \'{\"start\":31,\"end\":40}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'5\' , \'Completeness41_50\' , 5 , \'{\"start\":41,\"end\":50}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'6\' , \'Completeness51_60\' , 6 , \'{\"start\":51,\"end\":60}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'7\' , \'Completeness61_70\' , 7 , \'{\"start\":61,\"end\":70}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'8\' , \'Completeness71_80\' , 8 , \'{\"start\":71,\"end\":80}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'9\' , \'Completeness81_90\' , 9 , \'{\"start\":81,\"end\":90}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Completeness\' , \'10\' , \'Completeness91_100\' , 10 , \'{\"start\":91,\"end\":100}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'1\' , \'AgeRange0_15\' , 1 , \'{\"start\":0,\"end\":15}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'2\' , \'AgeRange16_24\' , 2 , \'{\"start\":16,\"end\":24}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'3\' , \'AgeRange25_34\' , 3 , \'{\"start\":25,\"end\":34}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'4\' , \'AgeRange35_44\' , 4 , \'{\"start\":35,\"end\":44}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'5\' , \'AgeRange45_54\' , 5 , \'{\"start\":45,\"end\":54}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Age\' , \'6\' , \'AgeRange55_More\' , 6 , \'{\"start\":55,\"end\":999}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Gender\' , \'1\' , \'Male\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Gender\' , \'2\' , \'Female\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'1\' , \'Income40\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'2\' , \'Income41_60\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'3\' , \'Income61_90\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'4\' , \'Income91_120\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'5\' , \'Income121_220\' , 5 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'6\' , \'Income221_300\' , 6 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Income\' , \'7\' , \'Income300\' , 7 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'1\' , \'Relatives\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'2\' , \'Friends\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'3\' , \'Classmate\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'4\' , \'Alumni\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'5\' , \'Neighbors\' , 5 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'6\' , \'Community_tenants\' , 6 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'7\' , \'Work\' , 7 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'8\' , \'Business_related\' , 8 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'9\' , \'Persons_who_provide_service\' , 9 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'10\' , \'Professional\' , 10 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'11\' , \'Social\' , 11 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'12\' , \'Religious_group\' , 12 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'13\' , \'Leisure\' , 13 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'14\' , \'hobbies\' , 14 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'15\' , \'Known_by_family\' , 15 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'16\' , \'Engage_Experience\' , 16 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Source\' , \'17\' , \'Discovery_Experience\' , 17 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Marriage\' , \'1\' , \'Single\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Marriage\' , \'2\' , \'Married\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Children\' , \'1\' , \'Children0\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Children\' , \'2\' , \'Children1_2\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Children\' , \'3\' , \'Children3_4\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Children\' , \'4\' , \'Children5\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Familiarity\' , \'1\' , \'Close\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Familiarity\' , \'2\' , \'Known(acquaintance)\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Familiarity\' , \'3\' , \'Nodding_acquaintance\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'1\' , \'Newly_married\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'2\' , \'child_get_birth\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'3\' , \'Get_promoted\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'4\' , \'change_work\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'5\' , \'Become_a_boss\' , 5 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'6\' , \'Property\' , 6 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'7\' , \'Investment\' , 7 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_RecentStatus\' , \'8\' , \'Burden_family\' , 8 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Status\' , \'1\' , \'Ability_to_pay_the_premium\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Status\' , \'2\' , \'Accessible_to_contact\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Status\' , \'3\' , \'Have_Insurance_Needs\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Status\' , \'4\' , \'Could_be_pass_underwriting_check\' , 4 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Status\' , \'5\' , \'Key_person_to_decide_to_buy_policy\' , 5 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_ContactFrequancy\' , \'1\' , \'ContactFrequancy1_2\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_ContactFrequancy\' , \'2\' , \'ContactFrequancy3_5\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_ContactFrequancy\' , \'3\' , \'ContactFrequancy5_More\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Possibility\' , \'HOT\' , \'HOT\' , 1 , \'{\"color\":\"#dc3149\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Possibility\' , \'WARM\' , \'WARM\' , 2 , \'{\"color\":\"#f86200\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_Possibility\' , \'COLD\' , \'COLD\' , 3 , \'{\"color\":\"#7fe4e0\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_TelType\' , \'TelHome\' , \'Home\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_TelType\' , \'TelMobile\' , \'Mobile\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_TelType\' , \'TelWork\' , \'Work\' , 3 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_EmailType\' , \'MailHome\' , \'Home\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_EmailType\' , \'MailWork\' , \'Work\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_AddressType\' , \'AddressTypeHome\' , \'Home\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_AddressType\' , \'AddressTypeWork\' , \'Work\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_DataSource\' , \'E\' , \'Existing_customer\' , 1 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Customer_DataSource\' , \'P\' , \'Potential_customer\' , 2 , \'{}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'1\' , \'Build_relationship\' , 1 , \'{\"color\": \"#496EBD\", \"backgroundColor\": \"#CFE9EE\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'2\' , \'Sell\' , 2 , \'{\"color\": \"#FF934F\", \"backgroundColor\": \"#EBE1BF\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'3\' , \'Customer_service\' , 3 , \'{\"color\": \"#7FE4E0\", \"backgroundColor\": \"#EFF6EE\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'4\' , \'PRP\' , 4 , \'{\"color\": \"#FDD25C\", \"backgroundColor\": \"#F5F0E0\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'5\' , \'Cultivate\' , 5 , \'{\"color\": \"#CCDD61\", \"backgroundColor\": \"#DFEEDE\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'6\' , \'Meeting\' , 6 , \'{\"color\": \"#96DCFA\", \"backgroundColor\": \"#E6F4F6\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'7\' , \'Private_Birthday\' , 7 , \'{\"color\": \"#8A679C\", \"backgroundColor\": \"#E1CFEB\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'8\' , \'Private\' , 8 , \'{\"color\": \"#E4003A\", \"backgroundColor\": \"#F1C8D0\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'9\' , \'Marketing\' , 9 , \'{\"color\": \"#DAD0E1\", \"backgroundColor\": \"#F9F2EF\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_Type\' , \'10\' , \'Workshop\' , 10 , \'{\"color\": \"#F7C7C3\", \"backgroundColor\": \"#FBF2F4\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'1\' , \'On_day_of_event\' , 1 , \'{\"isAllDay\": true, \"day\": 0}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'2\' , \'1_day_before(T)\' , 2 , \'{\"isAllDay\": true, \"day\": 1}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'3\' , \'2_days_before(T)\' , 3 , \'{\"isAllDay\": true, \"day\": 2}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'4\' , \'1_week_before(T)\' , 4 , \'{\"isAllDay\": true, \"day\": 7}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'5\' , \'At_time_of_event\' , 5 , \'{\"isAllDay\": false, \"min\": 0}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'6\' , \'5_minutes_before\' , 6 , \'{\"isAllDay\": false, \"min\": 5}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'7\' , \'15_minutes_before\' , 7 , \'{\"isAllDay\": false, \"min\": 15}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'8\' , \'30_minutes_before\' , 8 , \'{\"isAllDay\": false, \"min\": 30}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'9\' , \'1_hour_before\' , 9 , \'{\"isAllDay\": false, \"min\": 60}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'10\' , \'2_hours_before\' , 10 , \'{\"isAllDay\": false, \"min\": 120}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'11\' , \'1_day_before(F)\' , 11 , \'{\"isAllDay\": false,\"min\": 1440}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'12\' , \'2_days_before(F)\' , 12 , \'{\"isAllDay\": false, \"min\": 2880}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Calendar_RemindTime\' , \'13\' , \'1_week_before(F)\' , 13 , \'{\"isAllDay\": false, \"min\": 10080}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Font_Size\' , \'1\' , \'Small\' , 1 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Font_Size\' , \'2\' , \'Midden\' , 2 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Font_Size\' , \'3\' , \'Large\' , 3 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_AnnualConvention\' , \'1\' , \'Allianz_Star_Club\' , 1 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_AnnualConvention\' , \'2\' , \'Summit_Trip\' , 2 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_AnnualConvention\' , \'3\' , \'Long_Term_Incentive_Trip_Program\' , 3 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_MDRT\' , \'1\' , \'MDRT\' , 1 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_MDRT\' , \'2\' , \'COT\' , 2 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'GoalSetting_MDRT\' , \'3\' , \'TOT\' , 3 , '{}' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Promotion_Plan\' , \'1\' , \'JobGrade_SP\' , 1 , \'{\"MappingJobGrade\": \"SA\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Promotion_Plan\' , \'2\' , \'JobGrade_AM\' , 2 , \'{\"MappingJobGrade\": \"SP\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                // cmd.push("INSERT INTO TW_LH_SD_Code (TypeID , Code , MappingID , Orders , Arguments , CreateBy , CreateTime , UpdateBy , UpdateTime) VALUES ( \'Promotion_Plan\' , \'3\' , \'JobGrade_SM\' , 3 , \'{\"MappingJobGrade\": \"AM\"}\' ,\'admin\',\'2019/01/23 12:00:00\',\'admin\',\'2019/01/23 12:00:00\');");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_DeviceInfo (Category TEXT PRIMARY KEY,CategoryVal TEXT NOT NULL,UpdateTime NUMBER NOT NULL);");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DeviceInfo VALUES ('OfflineLoginFailCount','{\"count\":0}',1553855173876);");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DeviceInfo VALUES ('OfflineValidationToken','{\"token\":\"\"}',1553855173876);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_DataSync_Time (FuncID TEXT PRIMARY KEY,BackendTime INT,FrontendTime INT,LastUpdate INT);");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('MESSAGE',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('YEAR_CONFIG',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('AGENCY_PLAN',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('GOAL',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('ACTUAL',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('CUSTOMER',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('CUSTOMER_CONTACT',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('CALENDAR',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('PROGRESS',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('GOAL_EXPECTED',0,0,1); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Time VALUES ('PROFILE_CODE',0,0,1); ");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_DataSync_Function (FuncID TEXT PRIMARY KEY,MainFunc TEXT NOT NULL);");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('MESSAGE','Homepage'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('GOAL','Goal_Setting'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('YEAR_CONFIG','Goal_Setting'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('AGENCY_PLAN','Goal_Setting'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('ACTUAL','Goal_Setting'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('GOAL_EXPECTED','Goal_Setting'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('CUSTOMER','Customer'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('CUSTOMER_CONTACT','Customer'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('CALENDAR','Calendar'); ");
                cmd.push("INSERT OR IGNORE INTO TW_LH_SD_DataSync_Function VALUES ('PROGRESS','Progress'); ");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_FuncSync_Time AS SELECT * FROM TW_LH_SD_DataSync_Function LEFT JOIN TW_LH_SD_DataSync_Time ON TW_LH_SD_DataSync_Function.FuncID = TW_LH_SD_DataSync_Time.FuncID GROUP BY TW_LH_SD_DataSync_Function.MainFunc;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Language (LanguageID TEXT PRIMARY KEY,Name TEXT,IsDefault TEXT);");
                // cmd.push('INSERT OR IGNORE INTO TW_LH_SD_Language (LanguageID ,Name,IsDefault) VALUES (\'en\',\'English\',\'Y\')');
                // cmd.push('INSERT OR IGNORE INTO TW_LH_SD_Language (LanguageID ,Name,IsDefault) VALUES (\'zh_TW\',\'中文\',\'N\')');
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Error_Log (ErrorID TEXT PRIMARY KEY, Message TEXT, Time NUMBER, Stack TEXT, DeviceModel TEXT, DeviceSystem TEXT, IsSend TEXT)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Action_Log (ActionID TEXT PRIMARY KEY, Action TEXT, Function TEXT, Time NUMBER, Valid TEXT, Message TEXT, DeviceModel TEXT, DeviceSystem TEXT, IsSend TEXT)");
                return cmd;
            };
        /**
         * @return {?}
         */
        DataSyncTask.prototype.createMainTableCommand = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var cmd = [];
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Calendar_Extension (ClientID TEXT PRIMARY KEY,CalendarID INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Calendar (ClientID TEXT PRIMARY KEY,CalendarID INT,CustomerClientID TEXT,Title TEXT NOT NULL,Location TEXT,CalendarType TEXT NOT NULL,IsAllDay TEXT NOT NULL,StartTime INT NOT NULL,EndTime INT NOT NULL,IsAlert TEXT NOT NULL,Alert1 TEXT,Alert2 TEXT,Alert3 TEXT,Remark TEXT,DataSource TEXT NOT NULL,ClientTime INT NOT NULL,IsDelete TEXT NOT NULL,DataTime INT DEFAULT NULL);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Address_Extension (ClientID TEXT PRIMARY KEY,CustomerClientID INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Email_Extension (ClientID TEXT PRIMARY KEY,CustomerClientID INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Tel_Extension (ClientID TEXT PRIMARY KEY,CustomerClientID INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Contact_Extension (ClientID TEXT PRIMARY KEY,CustomerClientID INT,ContactID INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Extension (ClientID TEXT PRIMARY KEY,CustomerID INT,RecentStatus TEXT,MANPA TEXT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Address (ClientID TEXT PRIMARY KEY,CustomerClientID TEXT NOT NULL,AddressType TEXT,Country TEXT , City TEXT,Area TEXT,Zipcode TEXT,Address TEXT,DataSource TEXT NOT NULL);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Email (ClientID TEXT PRIMARY KEY,CustomerClientID TEXT NOT NULL,EmailType TEXT,Email TEXT,DataSource TEXT NOT NULL);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Tel (ClientID TEXT PRIMARY KEY,CustomerClientID TEXT NOT NULL,TelType TEXT,Tel TEXT,DataSource TEXT NOT NULL);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer_Contact (ClientID TEXT PRIMARY KEY,CustomerClientID TEXT NOT NULL,ContactID INT,Note TEXT NOT NULL,NoteTime INT NOT NULL,DataTime INT,ClientTime INT NOT NULL,IsDelete TEXT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Customer (ClientID TEXT PRIMARY KEY,CustomerID INT,FirstName TEXT,LastName TEXT,Occupation TEXT,Company TEXT,BirthdayYear TEXT,BirthdayMonth TEXT,BirthdayDate TEXT,Age INT,AgeRange TEXT,Gender TEXT,Income TEXT,Source TEXT,Marriage TEXT,Children TEXT,Familiarity TEXT,ContactFrequancy TEXT,Possibility TEXT,IsFollow TEXT NOT NULL,DataTime INT,DataTimeBackend INT,DataSource TEXT,ClientTime INT NOT NULL,PartId INT,IsDelete TEXT,Completeness INT NOT NULL,IsOverTimeAlert TEXT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Personal_Setting (SettingID TEXT PRIMARY KEY,SettingName TEXT NOT NULL , SettingVal Text NOT NULL);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Customer AS SELECT * FROM TW_LH_SD_Customer LEFT JOIN TW_LH_SD_Customer_Extension ON TW_LH_SD_Customer.ClientID = TW_LH_SD_Customer_Extension.ClientID;");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Calendar AS SELECT * FROM TW_LH_SD_Calendar LEFT JOIN TW_LH_SD_Calendar_Extension ON TW_LH_SD_Calendar.ClientID = TW_LH_SD_Calendar_Extension.ClientID;");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Customer_Contact AS SELECT * FROM TW_LH_SD_Customer_Contact LEFT JOIN TW_LH_SD_Customer_Contact_Extension ON TW_LH_SD_Customer_Contact.ClientID = TW_LH_SD_Customer_Contact_Extension.ClientID;");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Customer_Address AS SELECT * FROM TW_LH_SD_Customer_Address LEFT JOIN TW_LH_SD_Customer_Address_Extension ON TW_LH_SD_Customer_Address.ClientID = TW_LH_SD_Customer_Address_Extension.ClientID;");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Customer_Tel AS SELECT * FROM TW_LH_SD_Customer_Tel LEFT JOIN TW_LH_SD_Customer_Tel_Extension ON TW_LH_SD_Customer_Tel.ClientID = TW_LH_SD_Customer_Tel_Extension.ClientID;");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Customer_Email AS SELECT * FROM TW_LH_SD_Customer_Email LEFT JOIN TW_LH_SD_Customer_Email_Extension ON TW_LH_SD_Customer_Email.ClientID = TW_LH_SD_Customer_Email_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Message (ClientID TEXT NOT NULL PRIMARY KEY, MessageID INT NOT NULL , MessageCategory TEXT NOT NULL, MessageType TEXT NOT NULL, Title TEXT NOT NULL, Description TEXT, Arguments TEXT, Status TEXT NOT NULL, IsClick TEXT NOT NULL, IsPopup TEXT NOT NULL, IsShow TEXT NOT NULL, LinkStatus TEXT NOT NULL, MessageTime INT NOT NULL, Extensions TEXT, IsDelete TEXT NOT NULL, ClientTime INT NOT NULL, DataTime INT);");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Message_Extension (ClientID TEXT NOT NULL PRIMARY KEY, MessageID INT NOT NULL);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Message AS SELECT * FROM TW_LH_SD_Message LEFT JOIN TW_LH_SD_Message_Extension ON TW_LH_SD_Message.ClientID = TW_LH_SD_Message_Extension.ClientID;");
                cmd.push('INSERT OR IGNORE INTO TW_LH_SD_Personal_Setting (SettingID ,SettingName,SettingVal) VALUES (\'CustomerFilterSetting\',\'客戶Filter預設條件\',\'{}\')');
                cmd.push('INSERT OR IGNORE INTO TW_LH_SD_Personal_Setting (SettingID ,SettingName,SettingVal) VALUES (\'CalendarFilterSetting\',\'日曆Filter預設條件\',\'{}\')');
                cmd.push('INSERT OR IGNORE INTO TW_LH_SD_Personal_Setting (SettingID ,SettingName,SettingVal) VALUES (\'FontSizeSetting\',\'字體大小預設條件\',\'{}\')');
                //goal-setting & progress table 
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Year_Config (ClientID TEXT PRIMARY KEY, DataYear INTEGER, IsCurrent TEXT, PerformanceSettlementMonth INTEGER, WorkingQuarter INTEGER, WorkingMonth INTEGER, QuarterStartMonth INTEGER, QuarterEndMonth INTEGER, InitialPreCaseFyfc INTEGER, FyfcCovertAnpRate REAL, InforceConvertFindRate REAL, InforceConvertScheduleRate REAL, InforceConvertMeetRate REAL, InforceConvertSubmitRate REAL, ProgressDayPointsLimit INTEGER, InforceConvertPointBase REAL, FindConvertPointBase REAL, ScheduleConvertPointBase REAL, MeetConvertPointBase REAL, SubmitConvertPointBase REAL, GoalSettingActivityProcMode TEXT, ProgressBarControlMode TEXT, GoalAndPlanDifferenceLimit REAL, NowToYearEndDays INTEGER, MonthQuantityOfYear INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Year_Config_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Year_Config AS SELECT * FROM TW_LH_SD_Year_Config LEFT JOIN TW_LH_SD_Year_Config_Extension ON TW_LH_SD_Year_Config.ClientID = TW_LH_SD_Year_Config_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting (ClientID TEXT PRIMARY KEY, DataYear INTEGER, IsNeedSetting TEXT, IsFirstTime TEXT, ApproveStatus TEXT, Remainingdays INTEGER, GoalSetMonth INTEGER, PersonnelGoalApplicableYM INTEGER, TeamGoalApplicableYM INTEGER, SupervisorComment TEXT)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Goal_Setting AS SELECT * FROM TW_LH_SD_Goal_Setting LEFT JOIN TW_LH_SD_Goal_Setting_Extension ON TW_LH_SD_Goal_Setting.ClientID = TW_LH_SD_Goal_Setting_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Value (ClientID TEXT PRIMARY KEY, DataYear INTEGER, DataType TEXT, Value TEXT)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Plan_Value (ClientID TEXT PRIMARY KEY, DataYear INTEGER, PerformanceType TEXT, Month INTEGER, Value INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Plan_Value_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Goal_Setting_Plan_Value AS SELECT * FROM TW_LH_SD_Goal_Setting_Plan_Value LEFT JOIN TW_LH_SD_Goal_Setting_Plan_Value_Extension ON TW_LH_SD_Goal_Setting_Plan_Value.ClientID = TW_LH_SD_Goal_Setting_Plan_Value_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Expected (ClientID TEXT PRIMARY KEY, DataYear INTEGER, Q1 INTEGER, Q2 INTEGER, Q3 INTEGER, Q4 INTEGER, FYFC INTEGER, ANP INTEGER, ClientTime INTEGER, DataTime INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Goal_Setting_Expected_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Goal_Setting_Expected AS SELECT * FROM TW_LH_SD_Goal_Setting_Expected LEFT JOIN TW_LH_SD_Goal_Setting_Expected_Extension ON TW_LH_SD_Goal_Setting_Expected.ClientID = TW_LH_SD_Goal_Setting_Expected_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Actual_Value (ClientID TEXT PRIMARY KEY, DataYear INTEGER, PerformanceType TEXT, DataType TEXT, Month INTEGER, Value REAL)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Actual_Value_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Actual_Value AS SELECT * FROM TW_LH_SD_Actual_Value LEFT JOIN TW_LH_SD_Actual_Value_Extension ON TW_LH_SD_Actual_Value.ClientID = TW_LH_SD_Actual_Value_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Agency_Plan_Main (ClientID TEXT PRIMARY KEY, DataYear INTEGER , DataType TEXT, Forecast INTEGER, Actual INTEGER, MonthPlan INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Agency_Plan_Main_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Agency_Plan_Main AS SELECT * FROM TW_LH_SD_Agency_Plan_Main LEFT JOIN TW_LH_SD_Agency_Plan_Main_Extension ON TW_LH_SD_Agency_Plan_Main.ClientID = TW_LH_SD_Agency_Plan_Main_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Agency_Detail_Data (ClientID TEXT PRIMARY KEY, DataYear INTEGER, DirectUnitType TEXT, DataType TEXT, AgentID TEXT, AgentName TEXT, JobGrade TEXT, IsApprove TEXT, Drilldown TEXT, AppUseMode TEXT,Goal INTEGER, Forecast INTEGER, Actual REAL, MonthPlan INTEGER, Manpower INTEGER, Recruitment INTEGER, CaseCount INTEGER, PerCase INTEGER, Orders INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Agency_Detail_Data_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Agency_Detail_Data AS SELECT * FROM TW_LH_SD_Agency_Detail_Data LEFT JOIN TW_LH_SD_Agency_Detail_Data_Extension ON TW_LH_SD_Agency_Detail_Data.ClientID = TW_LH_SD_Agency_Detail_Data_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Personal_Progress (ClientID TEXT PRIMARY KEY, DataYear INTEGER, TimeBase TEXT, DataType TEXT, Find INTEGER, Schedule INTEGER, Meet INTEGER, Submit INTEGER, Inforce INTEGER, FYFC INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Personal_Progress_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Personal_Progress AS SELECT * FROM TW_LH_SD_Personal_Progress LEFT JOIN TW_LH_SD_Personal_Progress_Extension ON TW_LH_SD_Personal_Progress.ClientID = TW_LH_SD_Personal_Progress_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Team_Progress_Main (ClientID TEXT PRIMARY KEY, DataYear INTEGER, TimeBase TEXT, DataType TEXT, Goal INTEGER, Forecast INTEGER, Actual INTEGER, Shortfall INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Team_Progress_Main_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Team_Progress_Main AS SELECT * FROM TW_LH_SD_Team_Progress_Main LEFT JOIN TW_LH_SD_Team_Progress_Main_Extension ON TW_LH_SD_Team_Progress_Main.ClientID = TW_LH_SD_Team_Progress_Main_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Team_Progress_Detail (ClientID TEXT PRIMARY KEY, DataYear INTEGER, TimeBase TEXT, DirectUnitType TEXT, AgentID TEXT, AgentName TEXT, JobGrade TEXT, TeamName TEXT, Drilldown TEXT, AppUseMode TEXT, DataType TEXT, Activities TEXT, Goal INTEGER, Forecast INTEGER, Actual INTEGER, Shortfall INTEGER, Orders INTEGER)");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Team_Progress_Detail_Extension (ClientID TEXT PRIMARY KEY);");
                cmd.push("CREATE VIEW IF NOT EXISTS TW_LH_SD_VW_Team_Progress_Detail AS SELECT * FROM TW_LH_SD_Team_Progress_Detail LEFT JOIN TW_LH_SD_Team_Progress_Detail_Extension ON TW_LH_SD_Team_Progress_Detail.ClientID = TW_LH_SD_Team_Progress_Detail_Extension.ClientID;");
                cmd.push("CREATE TABLE IF NOT EXISTS TW_LH_SD_Other_Parameter (ClientID TEXT PRIMARY KEY, DataYear INTEGER , MappingID TEXT, SetValue TEXT)");
                return cmd;
            };
        DataSyncTask.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        DataSyncTask.ctorParameters = function () {
            return [
                { type: i0.ErrorHandler },
                { type: DaoFactory },
                { type: undefined, decorators: [{ type: i0.Inject, args: [registerDataSyncFuncToken,] }] }
            ];
        };
        /** @nocollapse */ DataSyncTask.ngInjectableDef = i0.defineInjectable({ factory: function DataSyncTask_Factory() { return new DataSyncTask(i0.inject(i0.ErrorHandler), i0.inject(DaoFactory), i0.inject(registerDataSyncFuncToken)); }, token: DataSyncTask, providedIn: "root" });
        return DataSyncTask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Setting = /** @class */ (function () {
        function Setting(id, name, val) {
            this._settingID = id;
            this._settingName = name;
            this._settingVal = val;
        }
        Object.defineProperty(Setting.prototype, "SettingID", {
            get: /**
             * @return {?}
             */ function () {
                return this._settingID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Setting.prototype, "SettingName", {
            get: /**
             * @return {?}
             */ function () {
                return this._settingName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Setting.prototype, "SettingVal", {
            get: /**
             * @return {?}
             */ function () {
                return this._settingVal;
            },
            enumerable: true,
            configurable: true
        });
        return Setting;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AndCompoundRestriction = /** @class */ (function () {
        function AndCompoundRestriction(restrictions) {
            this.restrictions = restrictions;
        }
        /**
         * @return {?}
         */
        AndCompoundRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var sqlString = '';
                this.restrictions.forEach(( /**
                 * @param {?} restriction
                 * @param {?} i
                 * @return {?}
                 */function (restriction, i) {
                    if (i != 0)
                        sqlString += ' AND ';
                    sqlString += '' + restriction.sqlString();
                }));
                return "(" + sqlString + ")";
            };
        /**
         * @return {?}
         */
        AndCompoundRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var values = new Array();
                this.restrictions.forEach(( /**
                 * @param {?} restriction
                 * @param {?} i
                 * @return {?}
                 */function (restriction, i) {
                    /** @type {?} */
                    var array = restriction.getValues();
                    values = values.concat(array);
                }));
                return values;
            };
        return AndCompoundRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EqualRestriction = /** @class */ (function () {
        function EqualRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        EqualRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " = ? ";
            };
        /**
         * @return {?}
         */
        EqualRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return EqualRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GreaterOrEqualRestriction = /** @class */ (function () {
        function GreaterOrEqualRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        GreaterOrEqualRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " >= ? ";
            };
        /**
         * @return {?}
         */
        GreaterOrEqualRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return GreaterOrEqualRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GreaterRestriction = /** @class */ (function () {
        function GreaterRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        GreaterRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " > ? ";
            };
        /**
         * @return {?}
         */
        GreaterRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return GreaterRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InRestriction = /** @class */ (function () {
        function InRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        InRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var str = Array(this.values.length).fill('?').join(',');
                return this.column + " IN (" + str + ") ";
            };
        /**
         * @return {?}
         */
        InRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return InRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LessOrEqualRestriction = /** @class */ (function () {
        function LessOrEqualRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        LessOrEqualRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " <= ? ";
            };
        /**
         * @return {?}
         */
        LessOrEqualRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return LessOrEqualRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LikeRestriction = /** @class */ (function () {
        function LikeRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            /** @type {?} */
            var newArray = [];
            values.forEach(( /**
             * @param {?} val
             * @return {?}
             */function (val) {
                newArray.push('%' + val + '%');
            }));
            this.values = newArray;
        }
        /**
         * @return {?}
         */
        LikeRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " LIKE ? ";
            };
        /**
         * @return {?}
         */
        LikeRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return LikeRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotNullRestriction = /** @class */ (function () {
        function NotNullRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        NotNullRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " IS NOT NULL ";
            };
        /**
         * @return {?}
         */
        NotNullRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return NotNullRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NullRestriction = /** @class */ (function () {
        function NullRestriction(column, values) {
            if (values === void 0) {
                values = [];
            }
            this.column = column;
            this.values = values;
        }
        /**
         * @return {?}
         */
        NullRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                return this.column + " IS NULL ";
            };
        /**
         * @return {?}
         */
        NullRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                return this.values;
            };
        return NullRestriction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ORCompoundRestriction = /** @class */ (function () {
        function ORCompoundRestriction(restrictions) {
            this.restrictions = restrictions;
        }
        /**
         * @return {?}
         */
        ORCompoundRestriction.prototype.sqlString = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var sqlString = '';
                this.restrictions.forEach(( /**
                 * @param {?} restriction
                 * @param {?} i
                 * @return {?}
                 */function (restriction, i) {
                    if (i != 0)
                        sqlString += ' OR ';
                    sqlString += '' + restriction.sqlString();
                }));
                return "(" + sqlString + ")";
            };
        /**
         * @return {?}
         */
        ORCompoundRestriction.prototype.getValues = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var values = new Array();
                this.restrictions.forEach(( /**
                 * @param {?} restriction
                 * @param {?} i
                 * @return {?}
                 */function (restriction, i) {
                    /** @type {?} */
                    var array = restriction.getValues();
                    values = values.concat(array);
                }));
                return values;
            };
        return ORCompoundRestriction;
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
    var SettingService = /** @class */ (function () {
        function SettingService(injector) {
            this.injector = injector;
            this._debugMode = false;
            this._debugSubject = new rxjs.BehaviorSubject(this._debugMode);
        }
        /**
         * @return {?}
         */
        SettingService.prototype._fetchCodeData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var factory = this.getAPIFactory();
                /** @type {?} */
                var dispatcher = this.getAPIDispatch();
                /** @type {?} */
                var settingAPI = ( /** @type {?} */(factory.getAPI('getSetting')));
                console.debug('setting.service fetchCodeData', settingAPI);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    dispatcher.dispatch(settingAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        /** @type {?} */
                        var bodyDatas = data['Body'];
                        console.log('<--- Datas --->');
                        console.log(data);
                        for (var i = 0; i < bodyDatas.length; i++) {
                            /** @type {?} */
                            var json = bodyDatas[i];
                            /** @type {?} */
                            var setting = new Setting(json.SettingID, json.SettingName, json.SettingVal);
                            SettingService.settingMap.set(setting.SettingID, setting);
                        }
                        console.debug('profileCodeMap', SettingService.settingMap);
                        observer.next(true);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} settingID
         * @return {?}
         */
        SettingService.prototype.getSetting = /**
         * @param {?} settingID
         * @return {?}
         */
            function (settingID) {
                return SettingService.settingMap.get(settingID);
            };
        /**
         * @param {?} setting
         * @return {?}
         */
        SettingService.prototype.updateSetting = /**
         * @param {?} setting
         * @return {?}
         */
            function (setting) {
                var _this = this;
                /** @type {?} */
                var settingUpdateAPI = ( /** @type {?} */(this.getAPIFactory().getAPI('updateSetting')));
                settingUpdateAPI.setSettingObject(setting);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.getAPIDispatch().dispatch(settingUpdateAPI).subscribe(( /**
                     * @param {?} settingData
                     * @return {?}
                     */function (settingData) {
                        _this._fetchCodeData().subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (data) {
                            console.warn('_fetchCodeData', data);
                            observer.next(settingData['Header']);
                            observer.complete();
                        }));
                    }));
                }));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SettingService.prototype.setDebugMode = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._debugMode = val;
                this._debugSubject.next(val);
            };
        /**
         * @return {?}
         */
        SettingService.prototype.getDebugMode = /**
         * @return {?}
         */
            function () {
                return this._debugSubject.asObservable();
            };
        /**
         * @return {?}
         */
        SettingService.prototype.getAPIFactory = /**
         * @return {?}
         */
            function () {
                return this.injector.get(APIFactory);
            };
        /**
         * @return {?}
         */
        SettingService.prototype.getAPIDispatch = /**
         * @return {?}
         */
            function () {
                return this.injector.get(APIDispatch);
            };
        /**
         * @return {?}
         */
        SettingService.prototype.getDeviceService = /**
         * @return {?}
         */
            function () {
                return this.injector.get(DeviceService);
            };
        /**
         * @param {?} token
         * @return {?}
         */
        SettingService.prototype.deviceChange = /**
         * @param {?} token
         * @return {?}
         */
            function (token) {
                return __awaiter(this, void 0, void 0, function () {
                    var updatePushIDAPI, deviceService, _body, resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("device change firebase token:", token);
                                updatePushIDAPI = this.getAPIFactory().getAPI("UpdatePushID");
                                deviceService = this.getDeviceService();
                                if (!updatePushIDAPI)
                                    return [3 /*break*/, 2];
                                _body = {
                                    PushId: token,
                                    DeviceSystem: deviceService.getDevicePlatform(),
                                    DeviceId: deviceService.getDeviceUUID(),
                                    DeviceModel: deviceService.getDeviceManufacturer(),
                                    DeviceType: deviceService.isPad() ? "Pad" : "Phone"
                                };
                                updatePushIDAPI["body"] = _body;
                                return [4 /*yield*/, this.getAPIDispatch().dispatch(updatePushIDAPI).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log("Update PushID resp:", resp);
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        SettingService.settingMap = new Map();
        SettingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        SettingService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ SettingService.ngInjectableDef = i0.defineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.inject(i0.INJECTOR)); }, token: SettingService, providedIn: "root" });
        return SettingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewDateChange = /** @class */ (function () {
        function ViewDateChange(_a) {
            var date = _a.date, action = _a.action;
            this._viewDate = date;
            this._action = action;
        }
        Object.defineProperty(ViewDateChange.prototype, "viewDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._viewDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._viewDate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewDateChange.prototype, "action", {
            get: /**
             * @return {?}
             */ function () {
                return this._action;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._action = value;
            },
            enumerable: true,
            configurable: true
        });
        return ViewDateChange;
    }());
    /** @enum {number} */
    var ChangeAction = {
        CLICK: 0,
        SWIPE: 1,
    };
    ChangeAction[ChangeAction.CLICK] = 'CLICK';
    ChangeAction[ChangeAction.SWIPE] = 'SWIPE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileCode = /** @class */ (function () {
        function ProfileCode(TypeID, Code, MappingID, Arguments) {
            this.isCheck = false;
            this.TypeID = TypeID;
            this.Code = Code;
            this.MappingID = MappingID;
            this.Arguments = Arguments;
        }
        /**
         * @param {?} text
         * @return {?}
         */
        ProfileCode.prototype.setDisplayText = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                this.displayText = text;
            };
        /**
         * @return {?}
         */
        ProfileCode.prototype.getCode = /**
         * @return {?}
         */
            function () {
                return this.Code;
            };
        /**
         * @return {?}
         */
        ProfileCode.prototype.getTypeId = /**
         * @return {?}
         */
            function () {
                return this.TypeID;
            };
        /**
         * @return {?}
         */
        ProfileCode.prototype.getMappingID = /**
         * @return {?}
         */
            function () {
                return this.MappingID;
            };
        /**
         * @return {?}
         */
        ProfileCode.prototype.getArguments = /**
         * @return {?}
         */
            function () {
                return this.Arguments;
            };
        return ProfileCode;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var versionInfo = /** @class */ (function () {
        function versionInfo(path, version) {
            if (path === void 0) {
                path = '';
            }
            if (version === void 0) {
                version = '';
            }
            this._path = path;
            this._version = version;
        }
        Object.defineProperty(versionInfo.prototype, "path", {
            get: /**
             * @return {?}
             */ function () {
                return this._path;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._path = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(versionInfo.prototype, "version", {
            get: /**
             * @return {?}
             */ function () {
                return this._version;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._version = value;
            },
            enumerable: true,
            configurable: true
        });
        return versionInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectOption$1 = /** @class */ (function () {
        function SelectOption(value, name) {
            this.value = value;
            this.name = name;
        }
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} isDefault
         * @return {THIS}
         */
        SelectOption.prototype.setIsDefault = /**
         * @template THIS
         * @this {THIS}
         * @param {?} isDefault
         * @return {THIS}
         */
            function (isDefault) {
                ( /** @type {?} */(this)).isDefault = isDefault;
                return ( /** @type {?} */(this));
            };
        /**
         * @return {?}
         */
        SelectOption.prototype.getName = /**
         * @return {?}
         */
            function () {
                return this.name;
            };
        /**
         * @return {?}
         */
        SelectOption.prototype.getValue = /**
         * @return {?}
         */
            function () {
                return this.value;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SelectOption.prototype.setName = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.name = name;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectOption.prototype.setValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
            };
        return SelectOption;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuccessStatus = /** @class */ (function () {
        function SuccessStatus(isSuccess) {
            this._isSuccess = isSuccess;
        }
        Object.defineProperty(SuccessStatus.prototype, "isSuccess", {
            get: /**
             * @return {?}
             */ function () {
                return this._isSuccess;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isSuccess = value;
            },
            enumerable: true,
            configurable: true
        });
        return SuccessStatus;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalExtension = /** @class */ (function () {
        function GoalExtension(Key, Value) {
            this._Key = Key;
            this._Value = Value;
        }
        Object.defineProperty(GoalExtension.prototype, "Value", {
            get: /**
             * @return {?}
             */ function () {
                return this._Value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalExtension.prototype, "Key", {
            get: /**
             * @return {?}
             */ function () {
                return this._Key;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Key = value;
            },
            enumerable: true,
            configurable: true
        });
        return GoalExtension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmitGoalData = /** @class */ (function () {
        function SubmitGoalData(SubmitInfo, GoalValue, GoalPlan) {
            this.Extensions = [];
            this.SubmitInfo = SubmitInfo;
            this.GoalValue = GoalValue;
            this.GoalPlan = GoalPlan;
        }
        return SubmitGoalData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmitGoalPlan = /** @class */ (function () {
        function SubmitGoalPlan() {
            this.Values = [];
        }
        return SubmitGoalPlan;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmitGoalPlanInfo = /** @class */ (function () {
        function SubmitGoalPlanInfo(PerformanceType, Month, Value, Extensions) {
            this.Extensions = [];
            this.PerformanceType = PerformanceType;
            this.Month = Month;
            this.Value = Value;
            this.Extensions = Extensions;
        }
        return SubmitGoalPlanInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmitGoalSettingValue = /** @class */ (function () {
        function SubmitGoalSettingValue(DataType, Value, Extensions) {
            this.Extensions = [];
            this.DataType = DataType;
            this.Value = Value;
            this.Extensions = Extensions;
        }
        return SubmitGoalSettingValue;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubmitGoalInfo = /** @class */ (function () {
        function SubmitGoalInfo() {
            this.Extensions = [];
        }
        return SubmitGoalInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigTask = /** @class */ (function () {
        function ConfigTask(translateService, deviceService, settingService, appRouter, notificationMgr, APP_CONFIG, fetchSettingFinish, changeFontSize, fontSizeAccess, checkPermissionService) {
            this.translateService = translateService;
            this.deviceService = deviceService;
            this.settingService = settingService;
            this.appRouter = appRouter;
            this.notificationMgr = notificationMgr;
            this.APP_CONFIG = APP_CONFIG;
            this.fetchSettingFinish = fetchSettingFinish;
            this.changeFontSize = changeFontSize;
            this.fontSizeAccess = fontSizeAccess;
            this.checkPermissionService = checkPermissionService;
        }
        /**
         * @return {?}
         */
        ConfigTask.prototype.doTask = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('do task');
                                _this = this;
                                //do task
                                document.addEventListener("deviceready", ( /**
                                 * @return {?}
                                 */function () {
                                    _this.deviceService.initDeviceAPI();
                                    if ((( /** @type {?} */(cordova))).plugins.AndroidFontSize) {
                                        (( /** @type {?} */(cordova))).plugins.AndroidFontSize.removeSystemFontSize();
                                    }
                                    if (_this.deviceService.getDevicePlatform() == 'Android') {
                                        document.addEventListener('screenshotDetect', ( /**
                                         * @return {?}
                                         */function () {
                                            alert('Screenshot');
                                        }), false);
                                    }
                                    else if (_this.deviceService.getDevicePlatform() == 'iOS') {
                                        document.addEventListener("screenshot", ( /**
                                         * @return {?}
                                         */function () {
                                            _this.notificationMgr.pushNotification(NotificationType.ScreenShotAlert, {});
                                        }), false);
                                    }
                                    // StatusBar.overlaysWebView(false);
                                    // StatusBar.styleBlackTranslucent();
                                    // StatusBar.show();
                                }), false);
                                this.integrationCheck();
                                this.checkPermissionService.init();
                                this.appRouter.init();
                                return [4 /*yield*/, Promise.all([this.fetchLanguage(), this.fetchLanguageList(), this.fetchSetting(), this.loadLanguageFile()])];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        ConfigTask.prototype.fetchLanguage = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                console.log("fetch language func");
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    _this_1.translateService._fetchCurrentLanguage().subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log("_fetchCurrentLanguage resp:", resp);
                        res(resp);
                    }));
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ConfigTask.prototype.fetchLanguageList = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                console.log("fetch language List");
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    _this_1.translateService._fetchCodeData().subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        res(resp);
                    }));
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ConfigTask.prototype.integrationCheck = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                try {
                    /** @type {?} */
                    var needCheckKey = ['SNDToken', 'SNDLanguage'];
                    if (this.APP_CONFIG.APP_MODE === APPMODE.Integration) {
                        // Check LocalStorage
                        /** @type {?} */
                        var result = needCheckKey
                            .filter(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) { return !_this_1.deviceService.getLocalStorage(key); }))
                            .map(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) { return "Integration mode failed: " + key + " not found in localstorage. Please set " + key + " into localstorage before switch to S&D."; }));
                        if (result.length > 0)
                            throw new Error(result[0]);
                    }
                }
                catch (error) {
                    alert('Integration failed. Please check console for more details.');
                    throw new APPError('F00704', error.message);
                }
            };
        /**
         * @private
         * @return {?}
         */
        ConfigTask.prototype.fetchSetting = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                console.debug('fetch setting');
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    _this_1.settingService._fetchCodeData().subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        if (_this_1.changeFontSize) {
                            if (_this_1.fontSizeAccess) {
                                _this_1.fontSizeAccess.getFontSize().subscribe(( /**
                                 * @param {?} resp
                                 * @return {?}
                                 */function (resp) {
                                    _this_1.changeFontSize.updateFontSize(resp);
                                }));
                            }
                        }
                        if (_this_1.fetchSettingFinish) {
                            _this_1.fetchSettingFinish.fetchSettingFinish(resp);
                        }
                        res(resp);
                    }));
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ConfigTask.prototype.loadLanguageFile = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.translateService.init()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        ConfigTask.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        ConfigTask.ctorParameters = function () {
            return [
                { type: TranslateService },
                { type: DeviceService },
                { type: SettingService },
                { type: AppRouter },
                { type: NotificationMgr },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [fetchSettingFinishToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [changeFontSizeToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [FontSizeAccessToken,] }] },
                { type: CheckPermissionService }
            ];
        };
        /** @nocollapse */ ConfigTask.ngInjectableDef = i0.defineInjectable({ factory: function ConfigTask_Factory() { return new ConfigTask(i0.inject(TranslateService), i0.inject(DeviceService), i0.inject(SettingService), i0.inject(AppRouter), i0.inject(NotificationMgr), i0.inject(ConfigToken), i0.inject(fetchSettingFinishToken, 8), i0.inject(changeFontSizeToken, 8), i0.inject(FontSizeAccessToken, 8), i0.inject(CheckPermissionService)); }, token: ConfigTask, providedIn: "root" });
        return ConfigTask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceTask = /** @class */ (function () {
        function DeviceTask(deviceService, errorHandler, customCheckRoot, networkChange) {
            this.deviceService = deviceService;
            this.errorHandler = errorHandler;
            this.customCheckRoot = customCheckRoot;
            this.networkChange = networkChange;
        }
        /**
         * @return {?}
         */
        DeviceTask.prototype.doTask = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('do device task');
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    //do task
                    //check for root
                    console.log('has inject custom root:', _this.customCheckRoot);
                    try {
                        if (_this.customCheckRoot) {
                            _this.customCheckRoot.checkRoot().then(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                if (resp)
                                    _this.customCheckRoot.rootedAction();
                                res();
                            }));
                        }
                        else {
                            _this.deviceService.checkIfRoot().then(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                console.log('check root resp:', resp);
                                if (resp) {
                                    alert("device has rooted!");
                                    _this.deviceService.exitApp();
                                }
                                res();
                            }), ( /**
                             * @param {?} errMsg
                             * @return {?}
                             */function (errMsg) {
                                console.warn(errMsg);
                            }));
                        }
                        //device network event
                        rxjs.fromEvent(document, 'online').pipe(
                        // debounceTime(5000)
                        ).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this.networkChange.change('online', true);
                        }));
                        rxjs.fromEvent(document, 'offline').pipe(
                        // debounceTime(5000)
                        ).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this.networkChange.change('offline', true);
                        }));
                    }
                    catch (error) {
                        console.warn("cannot detect rooted device.");
                        _this.errorHandler.handleError(error);
                        res();
                    }
                }));
            };
        DeviceTask.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        DeviceTask.ctorParameters = function () {
            return [
                { type: DeviceService },
                { type: i0.ErrorHandler },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [checkForRootToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NetworkChangeToken,] }] }
            ];
        };
        /** @nocollapse */ DeviceTask.ngInjectableDef = i0.defineInjectable({ factory: function DeviceTask_Factory() { return new DeviceTask(i0.inject(DeviceService), i0.inject(i0.ErrorHandler), i0.inject(checkForRootToken, 8), i0.inject(NetworkChangeToken, 8)); }, token: DeviceTask, providedIn: "root" });
        return DeviceTask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileCodeAPI = /** @class */ (function () {
        function ProfileCodeAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        /**
         * @return {?}
         */
        ProfileCodeAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProfileCode';
            };
        /**
         * @return {?}
         */
        ProfileCodeAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCode.json';
            };
        /**
         * @return {?}
         */
        ProfileCodeAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var profileObj = _this._DaoFactory.getTable('Profile', 'TW_LH_SD_Code');
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDao('Profile');
                    if (profileObj != undefined) {
                        (( /** @type {?} */(profileObj))).addRestriction(new GreaterOrEqualRestriction("ValidityPeriod", [Date.now()]));
                        dao.queryByTable(profileObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return ProfileCodeAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingAPI = /** @class */ (function () {
        function SettingAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        /**
         * @return {?}
         */
        SettingAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getSetting';
            };
        /**
         * @return {?}
         */
        SettingAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getPersonalSetting.json';
            };
        /**
         * @return {?}
         */
        SettingAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var settingObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (settingObj != undefined && dao != undefined) {
                        settingObj = (( /** @type {?} */(settingObj)));
                        dao = new ClientCustomDao(dao);
                        dao.queryByTable(settingObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return SettingAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExtensionConfigAPI = /** @class */ (function () {
        function ExtensionConfigAPI() {
        }
        /**
         * @return {?}
         */
        ExtensionConfigAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getExtensionConfig';
            };
        /**
         * @return {?}
         */
        ExtensionConfigAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/config/extension-config.json';
            };
        return ExtensionConfigAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OfflineAuthAPI = /** @class */ (function () {
        function OfflineAuthAPI(daoFactory, APP_CONFIG) {
            this.daoFactory = daoFactory;
            this.APP_CONFIG = APP_CONFIG;
            this.token = '';
            this.failTry = null;
        }
        /**
         * @return {?}
         */
        OfflineAuthAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'offlineAuth';
            };
        /**
         * @return {?}
         */
        OfflineAuthAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                // return sha-256: "test||test"
                return rxjs.from(this._offlineAuth());
            };
        /**
         * @private
         * @return {?}
         */
        OfflineAuthAPI.prototype._offlineAuth = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var env, authResp, infoObj, dao, resp, body, failCount, offline_token, info_token, lastLoginTIme, setCountResp, addFailCount, setCountResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                env = this.APP_CONFIG.ENV;
                                this.failTry = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES || 999;
                                authResp = null;
                                infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                                dao = this.daoFactory.getDao("Profile");
                                return [4 /*yield*/, dao.queryByTable(infoObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query device info resp:', resp);
                                body = resp.Body;
                                failCount = parseInt(body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.Category == "OfflineLoginFailCount"; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return JSON.parse(x.CategoryVal)["count"]; }))[0]);
                                offline_token = body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.Category == "OfflineValidationToken"; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return JSON.parse(x.CategoryVal)["token"]; }))[0];
                                info_token = body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.Category == "OfflineValidationToken"; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return JSON.parse(x.CategoryVal)["infoToken"]; }))[0];
                                lastLoginTIme = body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.Category == "OfflineValidationToken"; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.UpdateTime; }))[0];
                                console.group("offline auth:");
                                console.log("failCount:", failCount);
                                console.log("offline_token:", offline_token);
                                console.log('this.token:', this.token);
                                console.log("lastLoginTime:", lastLoginTIme);
                                console.groupEnd();
                                if (!(offline_token == "" || (Date.now() - lastLoginTIme) >= 86400000))
                                    return [3 /*break*/, 2];
                                authResp = { isSuccess: false, message: 'First_Login_Must_Online' };
                                return [3 /*break*/, 7];
                            case 2:
                                if (!(failCount >= this.failTry))
                                    return [3 /*break*/, 3];
                                authResp = { isSuccess: false, message: "Wrong_Counts_Over_Max", failCount: -1 };
                                return [3 /*break*/, 7];
                            case 3:
                                console.log('offline fail count:', failCount);
                                if (!(this.token === offline_token))
                                    return [3 /*break*/, 5];
                                //offline login success, set count to zero
                                infoObj.setValue("CategoryVal", '{"count":0}');
                                infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                                return [4 /*yield*/, dao.updateByTable(infoObj).toPromise()];
                            case 4:
                                setCountResp = _a.sent();
                                console.log('set count to zero resp:', setCountResp);
                                authResp = { isSuccess: true, token: info_token };
                                return [3 /*break*/, 7];
                            case 5:
                                addFailCount = failCount + 1;
                                infoObj.setValue("CategoryVal", "{\"count\":" + addFailCount + "}");
                                infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                                return [4 /*yield*/, dao.updateByTable(infoObj).toPromise()];
                            case 6:
                                setCountResp = _a.sent();
                                console.log('plus one count:', setCountResp);
                                authResp = { isSuccess: false, message: "Offline_Login_Locked", failCount: addFailCount };
                                _a.label = 7;
                            case 7: return [2 /*return*/, authResp];
                        }
                    });
                });
            };
        return OfflineAuthAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveLoginTokenAPI = /** @class */ (function () {
        function saveLoginTokenAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._encryptedAuth = '';
            this._infoToken = '';
        }
        Object.defineProperty(saveLoginTokenAPI.prototype, "infoToken", {
            get: /**
             * @return {?}
             */ function () {
                return this._infoToken;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._infoToken = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(saveLoginTokenAPI.prototype, "encryptedAuth", {
            get: /**
             * @return {?}
             */ function () {
                return this._encryptedAuth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._encryptedAuth = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        saveLoginTokenAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveLoginToken';
            };
        /**
         * @return {?}
         */
        saveLoginTokenAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // return sha-256: "test||test"
                /** @type {?} */
                var infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                console.log("infoObj:", infoObj);
                /** @type {?} */
                var dao = this.daoFactory.getDao("Profile");
                /** @type {?} */
                var configVal = JSON.stringify({ token: this.encryptedAuth, infoToken: this._infoToken });
                if (infoObj != undefined) {
                    return rxjs.Observable.create(( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        infoObj.setValue("CategoryVal", configVal);
                        infoObj.setValue("UpdateTime", Date.now());
                        infoObj.addRestriction(new EqualRestriction("Category", ["OfflineValidationToken"]));
                        dao.updateByTable(infoObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            console.log("save token resp:", resp);
                            /** @type {?} */
                            var infoTableObj = _this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                            infoTableObj.setValue("CategoryVal", '{"count":0}');
                            infoTableObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                            dao.updateByTable(infoTableObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }));
                    }));
                }
                else {
                    return rxjs.of(false);
                }
            };
        /**
         * @return {?}
         */
        saveLoginTokenAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveLoginToken.json';
            };
        return saveLoginTokenAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var APIRequest = /** @class */ (function () {
        function APIRequest() {
            this._body = {};
            this._type = "GET";
            this._url = '';
            this._params = null;
            this._timeout = 10000;
        }
        Object.defineProperty(APIRequest.prototype, "params", {
            get: /**
             * @return {?}
             */ function () {
                return this._params;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._params = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(APIRequest.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(APIRequest.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
                return this._url;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._url = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(APIRequest.prototype, "body", {
            get: /**
             * @return {?}
             */ function () {
                return this._body;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._body = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(APIRequest.prototype, "timeout", {
            get: /**
             * @return {?}
             */ function () {
                return this._timeout;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._timeout = value;
            },
            enumerable: true,
            configurable: true
        });
        return APIRequest;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckVersionAPI = /** @class */ (function () {
        function CheckVersionAPI() {
            this.version = '';
            this.DeviceSystem = '';
        }
        /**
         * @return {?}
         */
        CheckVersionAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'CheckVersion';
            };
        /**
         * @return {?}
         */
        CheckVersionAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var queryParams = new i1$1.HttpParams();
                queryParams = queryParams.set("version", this.version);
                queryParams = queryParams.set("DeviceSystem", this.DeviceSystem);
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.type = "GET";
                requestData.params = queryParams;
                return requestData;
            };
        /**
         * @return {?}
         */
        CheckVersionAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/CheckVersionAPI.json';
            };
        return CheckVersionAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuAPI = /** @class */ (function () {
        function MenuAPI() {
        }
        /**
         * @return {?}
         */
        MenuAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getMenu';
            };
        /**
         * @return {?}
         */
        MenuAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/config/menu.json';
            };
        return MenuAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingUpdateAPI = /** @class */ (function () {
        function SettingUpdateAPI(DaoFactory$$1) {
            this.DaoFactory = DaoFactory$$1;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SettingUpdateAPI.prototype.setSettingObject = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._settingObject = value;
            };
        /**
         * @return {?}
         */
        SettingUpdateAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'updateSetting';
            };
        /**
         * @return {?}
         */
        SettingUpdateAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getPersonalSetting.json';
            };
        /**
         * @return {?}
         */
        SettingUpdateAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var settingObj = _this.DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                    /** @type {?} */
                    var dao = _this.DaoFactory.getDefaultDao();
                    if (settingObj != undefined && dao != undefined) {
                        settingObj = (( /** @type {?} */(settingObj)));
                        dao = new ClientCustomDao(dao);
                        settingObj.addRestriction(new EqualRestriction('SettingID', [_this._settingObject.SettingID]));
                        settingObj.setValue('SettingVal', _this._settingObject.SettingVal);
                        dao.updateByTable(settingObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return SettingUpdateAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsSearchAPI = /** @class */ (function () {
        function ContactsSearchAPI(deviceFactory) {
            this.deviceFactory = deviceFactory;
        }
        /**
         * @return {?}
         */
        ContactsSearchAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'contactsSearch';
            };
        /**
         * @return {?}
         */
        ContactsSearchAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getImportContact.json';
            };
        /**
         * @return {?}
         */
        ContactsSearchAPI.prototype.runDeviceAPI = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dao = this.deviceFactory.getDefaultDao();
                return dao.searchcontactsByName('');
            };
        return ContactsSearchAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SyncPushAPI = /** @class */ (function () {
        function SyncPushAPI() {
            this.url = '';
            this.body = {};
            this.async = false;
        }
        /**
         * @return {?}
         */
        SyncPushAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'SyncPush';
            };
        /**
         * @return {?}
         */
        SyncPushAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.body;
                requestData.type = "PUT";
                return requestData;
            };
        return SyncPushAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SyncPullAPI = /** @class */ (function () {
        function SyncPullAPI() {
            this.url = '';
            this.body = {};
            this.lastUpdateTime = '';
        }
        /**
         * @return {?}
         */
        SyncPullAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'SyncPull';
            };
        /**
         * @return {?}
         */
        SyncPullAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.body;
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return SyncPullAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrentLanguageListAPI = /** @class */ (function () {
        function CurrentLanguageListAPI(DaoFactory$$1) {
            this._DaoFactory = DaoFactory$$1;
        }
        /**
         * @return {?}
         */
        CurrentLanguageListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCurrentLanguageList';
            };
        /**
         * @return {?}
         */
        CurrentLanguageListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCurrentLanguage.json';
            };
        /**
         * @return {?}
         */
        CurrentLanguageListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var languageObj = _this._DaoFactory.getTable('Profile', "TW_LH_SD_Language");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDao('Profile');
                    if (languageObj != undefined && dao != undefined) {
                        languageObj = (( /** @type {?} */(languageObj)));
                        dao = new ClientCustomDao(dao);
                        dao.queryByTable(languageObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CurrentLanguageListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BindingAccountAPI = /** @class */ (function () {
        function BindingAccountAPI(DaoFactory$$1) {
            this.account = '';
            this._DaoFactory = DaoFactory$$1;
        }
        /**
         * @return {?}
         */
        BindingAccountAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'BindingAccount';
            };
        /**
         * @return {?}
         */
        BindingAccountAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        BindingAccountAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var deviceInfoObjForDelete = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
                /** @type {?} */
                var deviceInfoObjForInsert = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
                /** @type {?} */
                var dao = this._DaoFactory.getDao('Profile');
                if (deviceInfoObjForDelete != undefined && deviceInfoObjForInsert != undefined && dao != undefined) {
                    deviceInfoObjForDelete.addRestriction(new EqualRestriction('Category', ['BindingAccount']));
                    dao.transactionDelete(deviceInfoObjForDelete);
                    deviceInfoObjForInsert.setValue("Category", "BindingAccount");
                    deviceInfoObjForInsert.setValue("CategoryVal", JSON.stringify({ account: this.account }));
                    deviceInfoObjForInsert.setValue("UpdateTime", Date.now());
                    dao.transactionInsert(deviceInfoObjForInsert);
                    return dao.runTransaction();
                }
                else {
                    return rxjs.of(false);
                }
            };
        return BindingAccountAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceAccountAPI = /** @class */ (function () {
        function DeviceAccountAPI(DaoFactory$$1) {
            this._DaoFactory = DaoFactory$$1;
        }
        /**
         * @return {?}
         */
        DeviceAccountAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getDeviceAccount';
            };
        /**
         * @return {?}
         */
        DeviceAccountAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getDeviceAccount.json';
            };
        /**
         * @return {?}
         */
        DeviceAccountAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var deviceInfoObj = _this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDao('Profile');
                    if (deviceInfoObj != undefined && dao != undefined) {
                        dao = new ClientCustomDao(dao);
                        deviceInfoObj.addRestriction(new EqualRestriction('Category', ["BindingAccount"]));
                        dao.queryByTable(deviceInfoObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            console.log("getDeviceAccount API resp:", resp);
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return DeviceAccountAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdatePushIDAPI = /** @class */ (function () {
        function UpdatePushIDAPI() {
            this.body = {};
        }
        /**
         * @return {?}
         */
        UpdatePushIDAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'UpdatePushID';
            };
        /**
         * @return {?}
         */
        UpdatePushIDAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //return save resp
                return './assets/mock/logout.json';
            };
        /**
         * @return {?}
         */
        UpdatePushIDAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.body = this.body;
                requestData.type = "POST";
                return requestData;
            };
        return UpdatePushIDAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var syncSequenceIDAPI = /** @class */ (function () {
        function syncSequenceIDAPI() {
            this.num = 0;
            this.type = '';
        }
        /**
         * @return {?}
         */
        syncSequenceIDAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getSyncSequenceID';
            };
        /**
         * @return {?}
         */
        syncSequenceIDAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var queryParams = new i1$1.HttpParams();
                queryParams = queryParams.set("category", this.type);
                queryParams = queryParams.set("idNums", this.num.toString());
                requestData.params = queryParams;
                requestData.type = "GET";
                return requestData;
            };
        return syncSequenceIDAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var logErrorAPI = /** @class */ (function () {
        function logErrorAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.stack = [];
            this.message = '';
            this.time = new Date();
            this.DeviceModel = '';
            this.DeviceSystem = '';
        }
        /**
         * @return {?}
         */
        logErrorAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'LogError';
            };
        /**
         * @return {?}
         */
        logErrorAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        logErrorAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var errorLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Error_Log');
                /** @type {?} */
                var dao = this.daoFactory.getDao('Profile');
                if (errorLogObj) {
                    errorLogObj.setValue("ErrorID", uuid.v4());
                    errorLogObj.setValue("Message", this.message);
                    errorLogObj.setValue("Time", this.time.getTime());
                    errorLogObj.setValue("Stack", JSON.stringify(this.stack));
                    errorLogObj.setValue("DeviceModel", this.DeviceModel);
                    errorLogObj.setValue("DeviceSystem", this.DeviceSystem);
                    errorLogObj.setValue("IsSend", 'N');
                    return dao.insertByTable(errorLogObj);
                }
                else
                    return rxjs.of(false);
            };
        return logErrorAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var logActionAPI = /** @class */ (function () {
        function logActionAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.action = '';
            this.Function = '';
            this.message = '';
            this.time = new Date();
            this.valid = true;
            this.DeviceModel = '';
            this.DeviceSystem = '';
        }
        /**
         * @return {?}
         */
        logActionAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'LogAction';
            };
        /**
         * @return {?}
         */
        logActionAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        logActionAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var actionLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Action_Log');
                /** @type {?} */
                var dao = this.daoFactory.getDao('Profile');
                if (actionLogObj) {
                    actionLogObj.setValue("ActionID", uuid.v4());
                    actionLogObj.setValue("Function", this.Function);
                    actionLogObj.setValue("Message", this.message);
                    actionLogObj.setValue("Time", this.time.getTime());
                    actionLogObj.setValue("Action", this.action);
                    actionLogObj.setValue("Valid", this.valid ? 'Y' : 'N');
                    actionLogObj.setValue("IsSend", 'N');
                    actionLogObj.setValue("DeviceModel", this.DeviceModel);
                    actionLogObj.setValue("DeviceSystem", this.DeviceSystem);
                    return dao.insertByTable(actionLogObj);
                }
                else
                    return rxjs.of(false);
            };
        return logActionAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PushErrorLogAPI = /** @class */ (function () {
        function PushErrorLogAPI() {
            this.url = '';
            this.errorList = [];
        }
        /**
         * @return {?}
         */
        PushErrorLogAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'PushErrorLog';
            };
        /**
         * @return {?}
         */
        PushErrorLogAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.errorList.map(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    return {
                        "Message": err.Message,
                        "Stack": err.Stack,
                        "Time": new Date(err.Time).toISOString(),
                        "DeviceModel": err.DeviceModel,
                        "DeviceSystem": err.DeviceSystem
                    };
                }));
                requestData.type = "POST";
                return requestData;
            };
        /**
         * @return {?}
         */
        PushErrorLogAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/logout.json';
            };
        return PushErrorLogAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PushActionLogAPI = /** @class */ (function () {
        function PushActionLogAPI() {
            this.url = '';
            this.actionList = [];
        }
        /**
         * @return {?}
         */
        PushActionLogAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'PushActionLog';
            };
        /**
         * @return {?}
         */
        PushActionLogAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.actionList.map(( /**
                 * @param {?} action
                 * @return {?}
                 */function (action) {
                    return {
                        "ActionID": action.ActionID,
                        "FunctionID": action.Function,
                        "Message": action.Message,
                        "Time": new Date(action.Time).toISOString(),
                        "Action": action.Action,
                        "Valid": action.Valid,
                        "DeviceModel": action.DeviceModel,
                        "DeviceSystem": action.DeviceSystem
                    };
                }));
                requestData.type = "POST";
                return requestData;
            };
        /**
         * @return {?}
         */
        PushActionLogAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/logout.json';
            };
        return PushActionLogAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouterMapAPI = /** @class */ (function () {
        function RouterMapAPI() {
        }
        /**
         * @return {?}
         */
        RouterMapAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getRouterMap';
            };
        /**
         * @return {?}
         */
        RouterMapAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/config/router-map.json';
            };
        return RouterMapAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var getYearConfigAPI = /** @class */ (function () {
        function getYearConfigAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.agentID = '';
            this.url = '';
            this.lastUpdateTime = '2019-01-01 00:00:00';
        }
        /**
         * @param {?} agent_id
         * @return {?}
         */
        getYearConfigAPI.prototype.setAgentID = /**
         * @param {?} agent_id
         * @return {?}
         */
            function (agent_id) {
                this.agentID = agent_id;
            };
        /**
         * @return {?}
         */
        getYearConfigAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/yearConfig.json';
            };
        /**
         * @return {?}
         */
        getYearConfigAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getYearConfig';
            };
        /**
         * @return {?}
         */
        getYearConfigAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
                    this.url = this.APP_CONFIG[env].API_URL.getYearConfig;
                    requestData.url = this.url + '/' + this.agentID;
                }
                else {
                    requestData.url = this.url;
                }
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return getYearConfigAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveYearConfigAPI = /** @class */ (function () {
        function saveYearConfigAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.yearConfigs = [];
        }
        /**
         * @return {?}
         */
        saveYearConfigAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveYearConfig';
            };
        /**
         * @return {?}
         */
        saveYearConfigAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        saveYearConfigAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.yearConfig = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config');
                this.yearConfig_ext = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config_Extension');
                this.deviceInfo = this.daoFactory.getTable('Profile', 'TW_LH_SD_DeviceInfo');
                this.dao = this.daoFactory.getDefaultDao();
                this.profile_dao = this.daoFactory.getDao("Profile");
                console.log('yearConfig', this.yearConfig);
                console.log('deviceInfo', this.deviceInfo);
                if (this.yearConfig && this.deviceInfo) {
                    return rxjs.of(this.saveConfig().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var status = resp["Header"].status;
                        console.log('saveYearConfigAPI resp:', resp);
                        if (status) {
                            _this.dao.transactionDelete(_this.yearConfig);
                            _this.dao.transactionDelete(_this.yearConfig_ext);
                            return Promise.all(_this.yearConfigs.map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return _this._getDate(x); }))).then(( /**
                             * @return {?}
                             */function () { return _this.dao.runTransaction().toPromise(); }));
                        }
                        else
                            return resp;
                    })));
                }
                else
                    return rxjs.of(false);
            };
        /**
         * @private
         * @param {?} yearcfg
         * @return {?}
         */
        saveYearConfigAPI.prototype._getDate = /**
         * @private
         * @param {?} yearcfg
         * @return {?}
         */
            function (yearcfg) {
                return __awaiter(this, void 0, void 0, function () {
                    var clientID;
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log('yearcfg', yearcfg);
                        clientID = uuid.v4();
                        this.yearConfig.setValue("ClientID", clientID);
                        this.yearConfig.setValue("DataYear", yearcfg.DataYear);
                        this.yearConfig.setValue("IsCurrent", yearcfg.IsCurrent ? "Y" : "N");
                        this.yearConfig.setValue("PerformanceSettlementMonth", yearcfg.PerformanceSettlementMonth);
                        this.yearConfig.setValue("WorkingMonth", yearcfg.WorkingMonth);
                        this.yearConfig.setValue("WorkingQuarter", yearcfg.WorkingQuarter);
                        this.yearConfig.setValue("QuarterStartMonth", yearcfg.QuarterStartMonth);
                        this.yearConfig.setValue("QuarterEndMonth", yearcfg.QuarterEndMonth);
                        this.yearConfig.setValue("InitialPreCaseFyfc", yearcfg.InitialPreCaseFyfc);
                        this.yearConfig.setValue("FyfcCovertAnpRate", yearcfg.FyfcCovertAnpRate);
                        this.yearConfig.setValue("InforceConvertFindRate", yearcfg.InforceConvertFindRate);
                        this.yearConfig.setValue("InforceConvertScheduleRate", yearcfg.InforceConvertScheduleRate);
                        this.yearConfig.setValue("InforceConvertMeetRate", yearcfg.InforceConvertMeetRate);
                        this.yearConfig.setValue("InforceConvertSubmitRate", yearcfg.InforceConvertSubmitRate);
                        this.yearConfig.setValue("ProgressDayPointsLimit", yearcfg.ProgressDayPointsLimit);
                        this.yearConfig.setValue("InforceConvertPointBase", yearcfg.InforceConvertPointBase);
                        this.yearConfig.setValue("FindConvertPointBase", yearcfg.FindConvertPointBase);
                        this.yearConfig.setValue("ScheduleConvertPointBase", yearcfg.ScheduleConvertPointBase);
                        this.yearConfig.setValue("MeetConvertPointBase", yearcfg.MeetConvertPointBase);
                        this.yearConfig.setValue("SubmitConvertPointBase", yearcfg.SubmitConvertPointBase);
                        this.yearConfig.setValue("GoalSettingActivityProcMode", yearcfg.GoalSettingActivityProcMode);
                        this.yearConfig.setValue("ProgressBarControlMode", yearcfg.ProgressBarControlMode);
                        this.yearConfig.setValue("GoalAndPlanDifferenceLimit", yearcfg.GoalAndPlanDifferenceLimit);
                        this.yearConfig.setValue("NowToYearEndDays", yearcfg.NowToYearEndDays);
                        this.yearConfig.setValue("MonthQuantityOfYear", yearcfg.MonthQuantityOfYear);
                        this.dao.transactionInsert(this.yearConfig);
                        //Extension
                        this.yearConfig_ext.setValue("ClientID", clientID);
                        if (yearcfg.extensions) {
                            yearcfg.extensions.forEach(( /**
                             * @param {?} ext
                             * @return {?}
                             */function (ext) {
                                _this.yearConfig_ext.setValue(ext.id, ext.value);
                            }));
                        }
                        this.dao.transactionInsert(this.yearConfig_ext);
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        saveYearConfigAPI.prototype.saveConfig = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var queryResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                //Update other parameter
                                console.log('[saveYearConfigAPI] isFirstUse', this.FirstUseAPP);
                                if (!(this.FirstUseAPP != null && this.FirstUseAPP != undefined))
                                    return [3 /*break*/, 2];
                                this.deviceInfo.addRestriction(new EqualRestriction("Category", ["FirstUseAPP"]));
                                return [4 /*yield*/, this.profile_dao.queryByTable(this.deviceInfo).toPromise()];
                            case 1:
                                queryResp = _a.sent();
                                console.log('[saveYearConfigAPI] queryResp', queryResp);
                                if (queryResp.Header["status"]) {
                                    if (queryResp.Body.length > 0) {
                                        this.deviceInfo.setValue("CategoryVal", this.FirstUseAPP ? "Y" : "N");
                                        console.log('[saveYearConfigAPI] deviceInfo 1', this.deviceInfo);
                                        this.profile_dao.transactionUpdate(this.deviceInfo);
                                    }
                                    else {
                                        this.deviceInfo = this.daoFactory.getTable('Profile', 'TW_LH_SD_DeviceInfo');
                                        this.deviceInfo.setValue("Category", "FirstUseAPP");
                                        this.deviceInfo.setValue("CategoryVal", this.FirstUseAPP ? "Y" : "N");
                                        this.deviceInfo.setValue("UpdateTime", new Date().getTime());
                                        console.log('[saveYearConfigAPI] otherParameter 2', this.deviceInfo);
                                        this.profile_dao.transactionInsert(this.deviceInfo);
                                    }
                                    return [2 /*return*/, this.profile_dao.runTransaction().toPromise()];
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        return saveYearConfigAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var getAgencyPlanAPI = /** @class */ (function () {
        function getAgencyPlanAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.agentID = '';
            this.url = '';
            this.lastUpdateTime = '2019-01-01 00:00:00';
        }
        /**
         * @param {?} agent_id
         * @return {?}
         */
        getAgencyPlanAPI.prototype.setAgentID = /**
         * @param {?} agent_id
         * @return {?}
         */
            function (agent_id) {
                this.agentID = agent_id;
            };
        /**
         * @return {?}
         */
        getAgencyPlanAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/AgencyPlan.json';
            };
        /**
         * @return {?}
         */
        getAgencyPlanAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getAgencyPlan';
            };
        /**
         * @return {?}
         */
        getAgencyPlanAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
                    this.url = this.APP_CONFIG[env].API_URL.getAgencyPlan;
                    requestData.url = this.url + '/' + this.agentID;
                }
                else {
                    requestData.url = this.url;
                }
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return getAgencyPlanAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveAgencyPlanAPI = /** @class */ (function () {
        function saveAgencyPlanAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.AgencyPlanDatas = [];
        }
        /**
         * @return {?}
         */
        saveAgencyPlanAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveAgencyPlan';
            };
        /**
         * @return {?}
         */
        saveAgencyPlanAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        saveAgencyPlanAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('AgencyPlanDatas', this.AgencyPlanDatas);
                /** @type {?} */
                var agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
                /** @type {?} */
                var agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
                /** @type {?} */
                var agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
                /** @type {?} */
                var agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
                this.dao = this.daoFactory.getDefaultDao();
                console.log('agencyPlanMain', agencyPlanMain);
                console.log('agencyPlanDetail', agencyPlanDetail);
                if (agencyPlanMain && agencyPlanDetail) {
                    this.dao.transactionDelete(agencyPlanDetail);
                    this.dao.transactionDelete(agencyPlanDetailExt);
                    this.dao.transactionDelete(agencyPlanMain);
                    this.dao.transactionDelete(agencyPlanMainExt);
                    return rxjs.from(Promise.all(this.AgencyPlanDatas.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return _this._getDate(x); }))).then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var resp = _this.dao.runTransaction().toPromise();
                        return resp;
                    })));
                }
                else
                    return rxjs.of(false);
            };
        /**
         * @private
         * @param {?} AgencyPlanData
         * @return {?}
         */
        saveAgencyPlanAPI.prototype._getDate = /**
         * @private
         * @param {?} AgencyPlanData
         * @return {?}
         */
            function (AgencyPlanData) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, agencyPlanDetail, agencyPlanDetailExt, agencyPlanMain, agencyPlanMainExt, otherParameter, DataYear, MainDatas, MainDatas_1, MainDatas_1_1, data, clientID, UnitMap, completionRate, queryResp;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
                                agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
                                agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
                                agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
                                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                DataYear = AgencyPlanData.DataYear;
                                console.log('DataYear', DataYear);
                                MainDatas = AgencyPlanData.Values;
                                console.log('MainDatas', MainDatas);
                                try {
                                    for (MainDatas_1 = __values(MainDatas), MainDatas_1_1 = MainDatas_1.next(); !MainDatas_1_1.done; MainDatas_1_1 = MainDatas_1.next()) {
                                        data = MainDatas_1_1.value;
                                        clientID = uuid.v4();
                                        agencyPlanMain.setValue("ClientID", clientID);
                                        agencyPlanMain.setValue("DataYear", DataYear);
                                        agencyPlanMain.setValue("DataType", data.DataType);
                                        agencyPlanMain.setValue("Forecast", data.Forecast);
                                        agencyPlanMain.setValue("Actual", data.Actual);
                                        agencyPlanMain.setValue("MonthPlan", data.Plan);
                                        agencyPlanMain.setValue("Manpower", data.Manpower);
                                        agencyPlanMain.setValue("Recruitment", data.Recruitment);
                                        this.dao.transactionInsert(agencyPlanMain);
                                        agencyPlanMainExt.setValue("ClientID", clientID);
                                        if (AgencyPlanData.extensions) {
                                            AgencyPlanData.extensions.forEach(( /**
                                             * @param {?} ext
                                             * @return {?}
                                             */function (ext) {
                                                agencyPlanMainExt.setValue(ext.id, ext.value);
                                            }));
                                        }
                                        this.dao.transactionInsert(agencyPlanMainExt);
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (MainDatas_1_1 && !MainDatas_1_1.done && (_a = MainDatas_1.return))
                                            _a.call(MainDatas_1);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                UnitMap = new Map();
                                if (AgencyPlanData.DirectUnit != null) {
                                    UnitMap.set('Direct', AgencyPlanData.DirectUnit);
                                }
                                if (AgencyPlanData.InDirectUnit != null) {
                                    UnitMap.set('Indirect', AgencyPlanData.InDirectUnit);
                                }
                                if (UnitMap.size > 0) {
                                    UnitMap.forEach(( /**
                                     * @param {?} datas
                                     * @param {?} key
                                     * @return {?}
                                     */function (datas, key) {
                                        /** @type {?} */
                                        var i = 0;
                                        for (i = 0; i < datas.length; i++) {
                                            /** @type {?} */
                                            var data = datas[i];
                                            /** @type {?} */
                                            var clientID = uuid.v4();
                                            agencyPlanDetail.setValue("ClientID", clientID);
                                            agencyPlanDetail.setValue("DataYear", DataYear);
                                            agencyPlanDetail.setValue("DirectUnitType", key);
                                            agencyPlanDetail.setValue("AgentID", data.AgentID);
                                            agencyPlanDetail.setValue("AgentName", data.AgentName);
                                            agencyPlanDetail.setValue("JobGrade", data.JobGrade);
                                            agencyPlanDetail.setValue("IsApprove", data.IsApprove ? "Y" : "N");
                                            agencyPlanDetail.setValue("Drilldown", data.Drilldown ? "Y" : "N");
                                            agencyPlanDetail.setValue("AppUseMode", data.AppUseMode);
                                            agencyPlanDetail.setValue("DataType", data.DataType);
                                            agencyPlanDetail.setValue("Goal", data.Goal);
                                            agencyPlanDetail.setValue("Forecast", data.Forecast);
                                            agencyPlanDetail.setValue("Actual", data.Actual);
                                            agencyPlanDetail.setValue("MonthPlan", data.Plan);
                                            agencyPlanDetail.setValue("Manpower", data.Manpower);
                                            agencyPlanDetail.setValue("Recruitment", data.Recruitment);
                                            agencyPlanDetail.setValue("CaseCount", data.CaseCount);
                                            agencyPlanDetail.setValue("PerCase", data.PerCase);
                                            agencyPlanDetail.setValue("Orders", i);
                                            _this.dao.transactionInsert(agencyPlanDetail);
                                            agencyPlanDetailExt.setValue("ClientID", clientID);
                                            if (data.extensions) {
                                                data.extensions.forEach(( /**
                                                 * @param {?} ext
                                                 * @return {?}
                                                 */function (ext) {
                                                    agencyPlanDetailExt.setValue(ext.id, ext.value);
                                                }));
                                            }
                                            _this.dao.transactionInsert(agencyPlanDetailExt);
                                        }
                                    }));
                                }
                                //Update other parameter
                                completionRate = AgencyPlanData.CompletionRate;
                                console.log('[saveAgencyPlanAPI] completionRate', completionRate);
                                if (!StringUtils.isNotEmpty(completionRate))
                                    return [3 /*break*/, 2];
                                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                otherParameter.addRestriction(new EqualRestriction("MappingID", ["CompletionRate"]));
                                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                                return [4 /*yield*/, this.dao.queryByTable(otherParameter).toPromise()];
                            case 1:
                                queryResp = _b.sent();
                                console.log('[saveAgencyPlanAPI] queryResp', queryResp);
                                if (queryResp.Header["status"]) {
                                    if (queryResp.Body.length > 0) {
                                        otherParameter.setValue("SetValue", completionRate.toString());
                                        console.log('[saveAgencyPlanAPI] otherParameter 1', otherParameter);
                                        this.dao.transactionUpdate(otherParameter);
                                    }
                                    else {
                                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                        otherParameter.setValue("ClientID", uuid.v4());
                                        otherParameter.setValue("DataYear", DataYear);
                                        otherParameter.setValue("MappingID", "CompletionRate");
                                        otherParameter.setValue("SetValue", completionRate.toString());
                                        otherParameter.setValue("syncTime", new Date().getTime());
                                        console.log('[saveAgencyPlanAPI] otherParameter 2', otherParameter);
                                        this.dao.transactionInsert(otherParameter);
                                    }
                                }
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        return saveAgencyPlanAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveProgressAPI = /** @class */ (function () {
        function saveProgressAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.ProgressDatas = [];
        }
        /**
         * @return {?}
         */
        saveProgressAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveProgress';
            };
        /**
         * @return {?}
         */
        saveProgressAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        saveProgressAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('ProgressDatas', this.ProgressDatas);
                /** @type {?} */
                var personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
                /** @type {?} */
                var personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
                /** @type {?} */
                var teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
                /** @type {?} */
                var teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
                /** @type {?} */
                var teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
                /** @type {?} */
                var teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
                /** @type {?} */
                var otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                console.log("table personalProgress", personalProgress);
                console.log("table teamProgressMain", teamProgressMain);
                console.log("table teamProgressDetail", teamProgressDetail);
                console.log("table otherParameter", otherParameter);
                this.dao = this.daoFactory.getDefaultDao();
                if (personalProgress && teamProgressMain && teamProgressDetail && otherParameter) {
                    this.dao.transactionDelete(personalProgress);
                    this.dao.transactionDelete(teamProgressMain);
                    this.dao.transactionDelete(teamProgressDetail);
                    this.dao.transactionDelete(personalProgressExt);
                    this.dao.transactionDelete(teamProgressMainExt);
                    this.dao.transactionDelete(teamProgressDetailExt);
                    return rxjs.from(Promise.all(this.ProgressDatas.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return _this._getDate(x); }))).then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var resp = _this.dao.runTransaction().toPromise();
                        return resp;
                    })));
                }
                else
                    return rxjs.of(false);
            };
        /**
         * @private
         * @param {?} ProgressData
         * @return {?}
         */
        saveProgressAPI.prototype._getDate = /**
         * @private
         * @param {?} ProgressData
         * @return {?}
         */
            function (ProgressData) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, e_2, _b, personalProgress, personalProgressExt, teamProgressMain, teamProgressMainExt, teamProgressDetail, teamProgressDetailExt, otherParameter, DataYear, personalDatas, personalDatas_1, personalDatas_1_1, personalData, clientID, TeamMainlDatas, TeamMainlDatas_1, TeamMainlDatas_1_1, TeamMainData, clientID, UnitMap, YesterdayPoint, queryResp;
                    var _this = this;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
                                personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
                                teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
                                teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
                                teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
                                teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
                                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                console.log('ProgressData', ProgressData);
                                DataYear = ProgressData.DataYear;
                                console.log('DataYear', DataYear);
                                //save  personal_Progress_Main
                                if (ProgressData.Personal.Values != null) {
                                    personalDatas = ProgressData.Personal.Values;
                                    console.log('personalDatas', personalDatas);
                                    try {
                                        for (personalDatas_1 = __values(personalDatas), personalDatas_1_1 = personalDatas_1.next(); !personalDatas_1_1.done; personalDatas_1_1 = personalDatas_1.next()) {
                                            personalData = personalDatas_1_1.value;
                                            clientID = uuid.v4();
                                            personalProgress.setValue("ClientID", clientID);
                                            personalProgress.setValue("DataYear", DataYear);
                                            personalProgress.setValue("DataType", personalData.DataType);
                                            personalProgress.setValue("TimeBase", personalData.TimeBase);
                                            personalProgress.setValue("Find", personalData.Find);
                                            personalProgress.setValue("Schedule", personalData.Schedule);
                                            personalProgress.setValue("Meet", personalData.Meet);
                                            personalProgress.setValue("Submit", personalData.Submit);
                                            personalProgress.setValue("Inforce", personalData.Inforce);
                                            personalProgress.setValue("FYFC", personalData.FYFC);
                                            this.dao.transactionInsert(personalProgress);
                                            personalProgressExt.setValue("ClientID", clientID);
                                            if (personalData.extensions) {
                                                personalData.extensions.forEach(( /**
                                                 * @param {?} ext
                                                 * @return {?}
                                                 */function (ext) {
                                                    personalProgressExt.setValue(ext.id, ext.value);
                                                }));
                                            }
                                            this.dao.transactionInsert(personalProgressExt);
                                        }
                                    }
                                    catch (e_1_1) {
                                        e_1 = { error: e_1_1 };
                                    }
                                    finally {
                                        try {
                                            if (personalDatas_1_1 && !personalDatas_1_1.done && (_a = personalDatas_1.return))
                                                _a.call(personalDatas_1);
                                        }
                                        finally {
                                            if (e_1)
                                                throw e_1.error;
                                        }
                                    }
                                }
                                //save  Team_Progress_Main
                                if (ProgressData.Team.Values != null) {
                                    TeamMainlDatas = ProgressData.Team.Values;
                                    console.log('TeamMainlDatas', TeamMainlDatas);
                                    try {
                                        for (TeamMainlDatas_1 = __values(TeamMainlDatas), TeamMainlDatas_1_1 = TeamMainlDatas_1.next(); !TeamMainlDatas_1_1.done; TeamMainlDatas_1_1 = TeamMainlDatas_1.next()) {
                                            TeamMainData = TeamMainlDatas_1_1.value;
                                            clientID = uuid.v4();
                                            teamProgressMain.setValue("ClientID", clientID);
                                            teamProgressMain.setValue("DataYear", DataYear);
                                            teamProgressMain.setValue("DataType", TeamMainData.DataType);
                                            teamProgressMain.setValue("TimeBase", TeamMainData.TimeBase);
                                            teamProgressMain.setValue("Goal", TeamMainData.Goal);
                                            teamProgressMain.setValue("Forecast", TeamMainData.Forecast);
                                            teamProgressMain.setValue("Actual", TeamMainData.Actual);
                                            teamProgressMain.setValue("Shortfall", TeamMainData.Shortfall);
                                            this.dao.transactionInsert(teamProgressMain);
                                            teamProgressMainExt.setValue("ClientID", clientID);
                                            if (TeamMainData.extensions) {
                                                TeamMainData.extensions.forEach(( /**
                                                 * @param {?} ext
                                                 * @return {?}
                                                 */function (ext) {
                                                    teamProgressMainExt.setValue(ext.id, ext.value);
                                                }));
                                            }
                                            this.dao.transactionInsert(teamProgressMainExt);
                                        }
                                    }
                                    catch (e_2_1) {
                                        e_2 = { error: e_2_1 };
                                    }
                                    finally {
                                        try {
                                            if (TeamMainlDatas_1_1 && !TeamMainlDatas_1_1.done && (_b = TeamMainlDatas_1.return))
                                                _b.call(TeamMainlDatas_1);
                                        }
                                        finally {
                                            if (e_2)
                                                throw e_2.error;
                                        }
                                    }
                                }
                                //save  Team_Progress_Detail
                                UnitMap = new Map();
                                if (ProgressData.Team.DirectUnit != null) {
                                    UnitMap.set('Direct', ProgressData.Team.DirectUnit);
                                }
                                if (ProgressData.Team.InDirectUnit != null) {
                                    UnitMap.set('Indirect', ProgressData.Team.InDirectUnit);
                                }
                                if (UnitMap.size > 0) {
                                    UnitMap.forEach(( /**
                                     * @param {?} datas
                                     * @param {?} key
                                     * @return {?}
                                     */function (datas, key) {
                                        console.log('key', key, 'datas', datas);
                                        /** @type {?} */
                                        var i = 0;
                                        for (i = 0; i < datas.length; i++) {
                                            /** @type {?} */
                                            var data = datas[i];
                                            /** @type {?} */
                                            var clientID = uuid.v4();
                                            teamProgressDetail.setValue("ClientID", clientID);
                                            teamProgressDetail.setValue("DataYear", DataYear);
                                            teamProgressDetail.setValue("DirectUnitType", key);
                                            teamProgressDetail.setValue("TimeBase", data.TimeBase);
                                            teamProgressDetail.setValue("AgentID", data.AgentID);
                                            teamProgressDetail.setValue("AgentName", data.AgentName);
                                            teamProgressDetail.setValue("JobGrade", data.JobGrade);
                                            teamProgressDetail.setValue("TeamName", data.TeamName);
                                            teamProgressDetail.setValue("Drilldown", data.Drilldown ? "Y" : "N");
                                            teamProgressDetail.setValue("DataType", data.DataType);
                                            teamProgressDetail.setValue("AppUseMode", data.AppUseMode);
                                            if (data.Activities != null) {
                                                teamProgressDetail.setValue("Activities", data.Activities);
                                            }
                                            teamProgressDetail.setValue("Goal", data.Goal);
                                            teamProgressDetail.setValue("Forecast", data.Forecast);
                                            teamProgressDetail.setValue("Actual", data.Actual);
                                            teamProgressDetail.setValue("Shortfall", data.Shortfall);
                                            teamProgressDetail.setValue("Orders", i);
                                            _this.dao.transactionInsert(teamProgressDetail);
                                            teamProgressDetailExt.setValue("ClientID", clientID);
                                            if (data.extensions) {
                                                data.extensions.forEach(( /**
                                                 * @param {?} ext
                                                 * @return {?}
                                                 */function (ext) {
                                                    teamProgressDetailExt.setValue(ext.id, ext.value);
                                                }));
                                            }
                                            _this.dao.transactionInsert(teamProgressDetailExt);
                                        }
                                    }));
                                }
                                //Update other parameter
                                YesterdayPoint = ProgressData.YesterdayPoint;
                                console.log('[saveProgressAPI] YesterdayPoint', YesterdayPoint);
                                if (!(YesterdayPoint != null && YesterdayPoint != undefined))
                                    return [3 /*break*/, 2];
                                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                otherParameter.addRestriction(new EqualRestriction("MappingID", ["YesterdayPoint"]));
                                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                                return [4 /*yield*/, this.dao.queryByTable(otherParameter).toPromise()];
                            case 1:
                                queryResp = _c.sent();
                                console.log('[saveProgressAPI] queryResp', queryResp);
                                if (queryResp.Header["status"]) {
                                    if (queryResp.Body.length > 0) {
                                        otherParameter.setValue("SetValue", YesterdayPoint);
                                        console.log('[saveProgressAPI] otherParameter 1', otherParameter);
                                        this.dao.transactionUpdate(otherParameter);
                                    }
                                    else {
                                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                        otherParameter.setValue("ClientID", uuid.v4());
                                        otherParameter.setValue("DataYear", DataYear);
                                        otherParameter.setValue("MappingID", "YesterdayPoint");
                                        otherParameter.setValue("SetValue", YesterdayPoint);
                                        otherParameter.setValue("syncTime", new Date().getTime());
                                        console.log('[saveProgressAPI] otherParameter 2', otherParameter);
                                        this.dao.transactionInsert(otherParameter);
                                    }
                                }
                                _c.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        return saveProgressAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var getProgressAPI = /** @class */ (function () {
        function getProgressAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.agentID = '';
            this.url = '';
            this.lastUpdateTime = '2019-01-01 00:00:00';
        }
        /**
         * @param {?} agent_id
         * @return {?}
         */
        getProgressAPI.prototype.setAgentID = /**
         * @param {?} agent_id
         * @return {?}
         */
            function (agent_id) {
                this.agentID = agent_id;
            };
        /**
         * @return {?}
         */
        getProgressAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/Progress.json';
            };
        /**
         * @return {?}
         */
        getProgressAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgress';
            };
        /**
         * @return {?}
         */
        getProgressAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
                    this.url = this.APP_CONFIG[env].API_URL.getProgress;
                    requestData.url = this.url + '/' + this.agentID;
                }
                else {
                    requestData.url = this.url;
                }
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return getProgressAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaConfigAPI = /** @class */ (function () {
        function MetaConfigAPI() {
            this._configName = '';
        }
        Object.defineProperty(MetaConfigAPI.prototype, "configName", {
            get: /**
             * @return {?}
             */ function () {
                return this._configName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._configName = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MetaConfigAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getMetaConfig';
            };
        /**
         * @return {?}
         */
        MetaConfigAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/config/meta/" + this._configName + ".json";
            };
        return MetaConfigAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingValueAPI = /** @class */ (function () {
        function SettingValueAPI(translateService, deviceService) {
            this._translateService = translateService;
            this._deviceService = deviceService;
        }
        /**
         * @return {?}
         */
        SettingValueAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getSettingValue';
            };
        /**
         * @return {?}
         */
        SettingValueAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getSettingValue.json';
            };
        /**
         * @return {?}
         */
        SettingValueAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var resp = {
                        Language: _this._translateService.getCurrentLanguage(),
                        LastUpdatedTime: "Setting_See_Details"
                    };
                    _this._deviceService.getAppVersion().then(( /**
                     * @param {?} version
                     * @return {?}
                     */function (version) {
                        resp["Version"] = version;
                        observer.next({ Header: { "isSuccess": true }, Body: [resp] });
                        observer.complete();
                    }));
                }));
            };
        return SettingValueAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var getGoalAPI = /** @class */ (function () {
        function getGoalAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.agentID = '';
            this.url = '';
            this.lastUpdateTime = '2019-01-01 00:00:00';
        }
        /**
         * @param {?} agent_id
         * @return {?}
         */
        getGoalAPI.prototype.setAgentID = /**
         * @param {?} agent_id
         * @return {?}
         */
            function (agent_id) {
                this.agentID = agent_id;
            };
        /**
         * @return {?}
         */
        getGoalAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return 'assets/mock/Goal.json';
            };
        /**
         * @return {?}
         */
        getGoalAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoal';
            };
        /**
         * @return {?}
         */
        getGoalAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
                    this.url = this.APP_CONFIG[env].API_URL.getGoal;
                    requestData.url = this.url + '/' + this.agentID;
                }
                else {
                    requestData.url = this.url;
                }
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return getGoalAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveGoalAPI = /** @class */ (function () {
        function saveGoalAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.GoalDatas = [];
        }
        /**
         * @return {?}
         */
        saveGoalAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveGoal';
            };
        /**
         * @return {?}
         */
        saveGoalAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        saveGoalAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var e_1, _a, e_2, _b, e_3, _c;
                console.log('GoalDatas', this.GoalDatas);
                /** @type {?} */
                var GoalSetting = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting');
                /** @type {?} */
                var GoalSetting_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Extension');
                /** @type {?} */
                var GoalSettingValue = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Value');
                /** @type {?} */
                var GoalSettingPlan = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value');
                /** @type {?} */
                var GoalSettingPlan_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value_Extension');
                /** @type {?} */
                var dao = this.daoFactory.getDefaultDao();
                console.log('GoalSetting', GoalSetting);
                console.log('GoalSetting_Ext', GoalSetting_Ext);
                console.log('GoalSettingValue', GoalSettingValue);
                console.log('GoalSettingPlan', GoalSettingPlan);
                console.log('GoalSettingPlan_Ext', GoalSettingPlan_Ext);
                if (GoalSetting && GoalSetting_Ext && GoalSettingValue && GoalSettingPlan && GoalSettingPlan_Ext) {
                    dao.transactionDelete(GoalSetting);
                    dao.transactionDelete(GoalSettingValue);
                    dao.transactionDelete(GoalSettingPlan);
                    dao.transactionDelete(GoalSetting_Ext);
                    dao.transactionDelete(GoalSettingPlan_Ext);
                    try {
                        for (var _d = __values(this.GoalDatas), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var GoalData = _e.value;
                            console.log('GoalData', GoalData);
                            /** @type {?} */
                            var DataYear = GoalData.DataYear;
                            console.log('DataYear', DataYear);
                            if (GoalData.GoalSetting != null) {
                                /** @type {?} */
                                var GoalSettingData = GoalData.GoalSetting;
                                /** @type {?} */
                                var clientID = uuid.v4();
                                console.log('GoalSettingData', GoalSettingData);
                                GoalSetting.setValue("ClientID", clientID);
                                GoalSetting.setValue("DataYear", DataYear);
                                GoalSetting.setValue("ApproveStatus", GoalSettingData.Status);
                                GoalSetting.setValue("IsNeedSetting", GoalSettingData.IsNeedSetting ? "Y" : "N");
                                GoalSetting.setValue("IsFirstTime", GoalSettingData.IsFirstTime ? "Y" : "N");
                                GoalSetting.setValue("Remainingdays", GoalSettingData.Remainingdays);
                                GoalSetting.setValue("GoalSetMonth", GoalSettingData.GoalSetMonth);
                                GoalSetting.setValue("PersonnelGoalApplicableYM", GoalSettingData.PersonnelGoalApplicableYM);
                                GoalSetting.setValue("TeamGoalApplicableYM", GoalSettingData.TeamGoalApplicableYM);
                                GoalSetting.setValue("SupervisorComment", GoalSettingData.SupervisorComment);
                                dao.transactionInsert(GoalSetting);
                                //Extension
                                GoalSetting_Ext.setValue("ClientID", clientID);
                                if (GoalSettingData.extensions) {
                                    GoalSettingData.extensions.forEach(( /**
                                     * @param {?} ext
                                     * @return {?}
                                     */function (ext) {
                                        GoalSetting_Ext.setValue(ext.id, ext.value);
                                    }));
                                }
                                dao.transactionInsert(GoalSetting_Ext);
                            }
                            if (GoalData.GoalValue != null) {
                                /** @type {?} */
                                var GoalValueDatas = GoalData.GoalValue;
                                console.log('GoalValueDatas', GoalValueDatas);
                                try {
                                    for (var GoalValueDatas_1 = __values(GoalValueDatas), GoalValueDatas_1_1 = GoalValueDatas_1.next(); !GoalValueDatas_1_1.done; GoalValueDatas_1_1 = GoalValueDatas_1.next()) {
                                        var data = GoalValueDatas_1_1.value;
                                        GoalSettingValue.setValue("ClientID", uuid.v4());
                                        GoalSettingValue.setValue("DataYear", DataYear);
                                        GoalSettingValue.setValue("DataType", data.DataType);
                                        GoalSettingValue.setValue("Value", data.Value.toString());
                                        dao.transactionInsert(GoalSettingValue);
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (GoalValueDatas_1_1 && !GoalValueDatas_1_1.done && (_b = GoalValueDatas_1.return))
                                            _b.call(GoalValueDatas_1);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                            }
                            if (GoalData.GoalPlan != null) {
                                /** @type {?} */
                                var GoalPlanData = GoalData.GoalPlan;
                                console.log('GoalPlanData', GoalPlanData);
                                if (GoalPlanData.TimeBase == 'Month') {
                                    /** @type {?} */
                                    var GoalPlanDatas = GoalPlanData.Values;
                                    try {
                                        for (var GoalPlanDatas_1 = __values(GoalPlanDatas), GoalPlanDatas_1_1 = GoalPlanDatas_1.next(); !GoalPlanDatas_1_1.done; GoalPlanDatas_1_1 = GoalPlanDatas_1.next()) {
                                            var data = GoalPlanDatas_1_1.value;
                                            /** @type {?} */
                                            var clientID = uuid.v4();
                                            GoalSettingPlan.setValue("ClientID", clientID);
                                            GoalSettingPlan.setValue("DataYear", DataYear);
                                            GoalSettingPlan.setValue("PerformanceType", data.PerformanceType);
                                            GoalSettingPlan.setValue("Month", data.Month);
                                            GoalSettingPlan.setValue("Value", data.Value);
                                            dao.transactionInsert(GoalSettingPlan);
                                            //Extension
                                            GoalSettingPlan_Ext.setValue("ClientID", clientID);
                                            if (data.extensions) {
                                                data.extensions.forEach(( /**
                                                 * @param {?} ext
                                                 * @return {?}
                                                 */function (ext) {
                                                    GoalSettingPlan_Ext.setValue(ext.id, ext.value);
                                                }));
                                            }
                                            dao.transactionInsert(GoalSettingPlan_Ext);
                                        }
                                    }
                                    catch (e_3_1) {
                                        e_3 = { error: e_3_1 };
                                    }
                                    finally {
                                        try {
                                            if (GoalPlanDatas_1_1 && !GoalPlanDatas_1_1.done && (_c = GoalPlanDatas_1.return))
                                                _c.call(GoalPlanDatas_1);
                                        }
                                        finally {
                                            if (e_3)
                                                throw e_3.error;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_e && !_e.done && (_a = _d.return))
                                _a.call(_d);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    return dao.runTransaction();
                }
                else
                    return rxjs.of(false);
            };
        return saveGoalAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var saveActualAPI = /** @class */ (function () {
        function saveActualAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.ActualDatas = [];
        }
        /**
         * @return {?}
         */
        saveActualAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveActual';
            };
        /**
         * @return {?}
         */
        saveActualAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        saveActualAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var e_1, _a, e_2, _b;
                console.log('ActualDatas', this.ActualDatas);
                /** @type {?} */
                var ActualValue = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value');
                /** @type {?} */
                var ActualValueExt = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value_Extension');
                /** @type {?} */
                var dao = this.daoFactory.getDefaultDao();
                console.log('ActualValue', ActualValue);
                if (ActualValue) {
                    dao.transactionDelete(ActualValue);
                    dao.transactionDelete(ActualValueExt);
                    try {
                        for (var _c = __values(this.ActualDatas), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var ActualData = _d.value;
                            console.log('ActualData', ActualData);
                            /** @type {?} */
                            var DataYear = ActualData.DataYear;
                            console.log('DataYear', DataYear);
                            /** @type {?} */
                            var ActualMainDatas = ActualData.Values;
                            console.log('ActualMainDatas', ActualMainDatas);
                            try {
                                for (var ActualMainDatas_1 = __values(ActualMainDatas), ActualMainDatas_1_1 = ActualMainDatas_1.next(); !ActualMainDatas_1_1.done; ActualMainDatas_1_1 = ActualMainDatas_1.next()) {
                                    var data = ActualMainDatas_1_1.value;
                                    /** @type {?} */
                                    var clientID = uuid.v4();
                                    ActualValue.setValue("ClientID", clientID);
                                    ActualValue.setValue("DataYear", DataYear);
                                    ActualValue.setValue("DataType", data.DataType);
                                    ActualValue.setValue("PerformanceType", data.PerformanceType);
                                    ActualValue.setValue("Month", data.Month);
                                    ActualValue.setValue("Value", data.Value);
                                    dao.transactionInsert(ActualValue);
                                    ActualValueExt.setValue("ClientID", clientID);
                                    if (data.extensions) {
                                        data.extensions.forEach(( /**
                                         * @param {?} ext
                                         * @return {?}
                                         */function (ext) {
                                            ActualValueExt.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    dao.transactionInsert(ActualValueExt);
                                }
                            }
                            catch (e_2_1) {
                                e_2 = { error: e_2_1 };
                            }
                            finally {
                                try {
                                    if (ActualMainDatas_1_1 && !ActualMainDatas_1_1.done && (_b = ActualMainDatas_1.return))
                                        _b.call(ActualMainDatas_1);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    return dao.runTransaction();
                }
                else
                    return rxjs.of(false);
            };
        return saveActualAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var getActualAPI = /** @class */ (function () {
        function getActualAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this.agentID = '';
            this.url = '';
            this.lastUpdateTime = '2019-01-01 00:00:00';
        }
        /**
         * @param {?} agent_id
         * @return {?}
         */
        getActualAPI.prototype.setAgentID = /**
         * @param {?} agent_id
         * @return {?}
         */
            function (agent_id) {
                this.agentID = agent_id;
            };
        /**
         * @return {?}
         */
        getActualAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return 'assets/mock/Actual.json';
            };
        /**
         * @return {?}
         */
        getActualAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getActual';
            };
        /**
         * @return {?}
         */
        getActualAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
                    this.url = this.APP_CONFIG[env].API_URL.getActual;
                    requestData.url = this.url + '/' + this.agentID;
                }
                else {
                    requestData.url = this.url;
                }
                requestData.type = "GET";
                requestData.params = new i1$1.HttpParams()
                    .set('lastUpdateTime', this.lastUpdateTime);
                return requestData;
            };
        return getActualAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var pushGoalSettingDataAPI = /** @class */ (function () {
        function pushGoalSettingDataAPI() {
            this.url = '';
        }
        /**
         * @return {?}
         */
        pushGoalSettingDataAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'pushGoalSettingData';
            };
        /**
         * @return {?}
         */
        pushGoalSettingDataAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.mainData;
                requestData.type = "POST";
                return requestData;
            };
        /**
         * @return {?}
         */
        pushGoalSettingDataAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/GoalCallback.json';
            };
        return pushGoalSettingDataAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var pushApproveGoalAPI = /** @class */ (function () {
        function pushApproveGoalAPI() {
            this.url = '';
            this.mainData = {};
        }
        /**
         * @return {?}
         */
        pushApproveGoalAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'pushApproveGoal';
            };
        /**
         * @return {?}
         */
        pushApproveGoalAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.body = this.mainData;
                requestData.type = "POST";
                return requestData;
            };
        /**
         * @return {?}
         */
        pushApproveGoalAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/logout.json';
            };
        return pushApproveGoalAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetDeviceInfoAPI = /** @class */ (function () {
        function GetDeviceInfoAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this.dataType = '';
            this.token = '';
        }
        /**
         * @param {?} dataType
         * @return {?}
         */
        GetDeviceInfoAPI.prototype.setDataType = /**
         * @param {?} dataType
         * @return {?}
         */
            function (dataType) {
                this.dataType = dataType;
            };
        /**
         * @return {?}
         */
        GetDeviceInfoAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getDeviceInfo';
            };
        /**
         * @return {?}
         */
        GetDeviceInfoAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                if (this.dataType === 'StepupLevel') {
                    return './assets/mock/getDeviceInfoForAgentInfo.json';
                }
                else {
                    return './assets/mock/getDeviceInfo.json';
                }
            };
        /**
         * @return {?}
         */
        GetDeviceInfoAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                // return sha-256: "test||test"
                /** @type {?} */
                var infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                /** @type {?} */
                var dao = this.daoFactory.getDao("Profile");
                if (this.dataType != '') {
                    infoObj.addRestriction(new EqualRestriction('Category', [this.dataType]));
                }
                return dao.queryByTable(infoObj);
            };
        return GetDeviceInfoAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginAPI = /** @class */ (function () {
        function LoginAPI() {
            this.url = '';
            this.body = {};
            this.type = "GET";
            this.params = null;
        }
        /**
         * @return {?}
         */
        LoginAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'onlineLogin';
            };
        /**
         * @return {?}
         */
        LoginAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/onlineLogin.json';
            };
        /**
         * @return {?}
         */
        LoginAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.body = this.body;
                requestData.url = this.url;
                requestData.type = "POST";
                requestData.params = this.params;
                return requestData;
            };
        return LoginAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardGetMessageListAPI = /** @class */ (function () {
        function DashboardGetMessageListAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._isPopup = null;
            this._isShow = null;
        }
        Object.defineProperty(DashboardGetMessageListAPI.prototype, "isShow", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShow;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isShow = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} keyword
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.setKeyword = /**
         * @param {?} keyword
         * @return {?}
         */
            function (keyword) {
                this._keyword = keyword;
            };
        /**
         * @param {?} pageInfo
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.setPageInfo = /**
         * @param {?} pageInfo
         * @return {?}
         */
            function (pageInfo) {
                this._pageInfo = pageInfo;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.setIsPopup = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._isPopup = val;
            };
        /**
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getDashboardMessageList';
            };
        /**
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getDashboardMessageList.json';
            };
        /**
         * @return {?}
         */
        DashboardGetMessageListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                        if (messageObj) {
                            dao = new ClientCustomDao(dao);
                            if (StringUtils.isNotEmpty(_this._keyword)) {
                                if (_this._keyword == 'All') ;
                                else if (_this._keyword == 'UnRead') {
                                    messageObj.addRestriction(new EqualRestriction("Status", [_this._keyword]));
                                }
                                else if (_this._keyword === 'PendingApproval') {
                                    messageObj.addRestriction(new EqualRestriction("MessageCategory", ['GoalSetting']));
                                    messageObj.addRestriction(new EqualRestriction("MessageType", ['Need_Goal_Approve']));
                                    messageObj.addRestriction(new EqualRestriction("LinkStatus", ['Approve']));
                                }
                                else if (_this._keyword == 'Customer' || _this._keyword == 'Calendar' || _this._keyword == 'GoalSetting' || _this._keyword == 'Progress') {
                                    messageObj.addRestriction(new EqualRestriction("MessageCategory", [_this._keyword]));
                                }
                            }
                            if (_this._isPopup !== null) {
                                /** @type {?} */
                                var isPopup = _this._isPopup ? 'Y' : 'N';
                                messageObj.addRestriction(new EqualRestriction("IsPopup", [isPopup]));
                            }
                            if (_this._isShow !== null) {
                                /** @type {?} */
                                var isShow = _this._isShow ? 'Y' : 'N';
                                messageObj.addRestriction(new EqualRestriction("IsShow", [isShow]));
                            }
                            //add page limit
                            if (_this._pageInfo) {
                                messageObj.addRestriction(new LimitRestriction([_this._pageInfo.pageSize]));
                                messageObj.addRestriction(new OffsetRestriction([(_this._pageInfo.page - 1) * _this._pageInfo.pageSize]));
                            }
                            //add order
                            messageObj.addRestriction(new OrderByRestriction([{ column: 'MessageTime', order: 'DESC' }]));
                            dao.queryByTable(messageObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                console.log("queryByTable: ", JSON.stringify(resp));
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return DashboardGetMessageListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardUpdateMessageStatusAPI = /** @class */ (function () {
        function DashboardUpdateMessageStatusAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._clientIDList = [];
        }
        /**
         * @param {?} clientID
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.setClientID = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                this._clientID = clientID;
            };
        /**
         * @param {?} list
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.setClientIDList = /**
         * @param {?} list
         * @return {?}
         */
            function (list) {
                this._clientIDList = list;
            };
        /**
         * @param {?} status
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.setStatus = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this._status = status;
            };
        /**
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'updateDashboardMessageStatus';
            };
        /**
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        DashboardUpdateMessageStatusAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                        if (messageObj) {
                            dao = new ClientCustomDao(dao);
                            messageObj = (( /** @type {?} */(messageObj)));
                            if (_this._clientIDList.length > 0) {
                                messageObj.addRestriction(new InRestriction('ClientID', _this._clientIDList));
                            }
                            else {
                                messageObj.addRestriction(new EqualRestriction('ClientID', [_this._clientID]));
                            }
                            messageObj.setValue("Status", _this._status);
                            dao.updateByTable(messageObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return DashboardUpdateMessageStatusAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangeMessageStatusAPI = /** @class */ (function () {
        function ChangeMessageStatusAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._messageID = null;
            this._col = null;
            this._val = null;
        }
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "val", {
            get: /**
             * @return {?}
             */ function () {
                return this._val;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._val = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "col", {
            get: /**
             * @return {?}
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._col = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "messageID", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._messageID = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'ChangeMessageStatus';
            };
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                if (this._messageID && this._col && this._val) {
                    return rxjs.from(this._updateStatus(this._messageID, this._col, this._val));
                }
                else {
                    return rxjs.of(false);
                }
            };
        /**
         * @private
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype._updateStatus = /**
         * @private
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
            function (messageID, col, val) {
                return __awaiter(this, void 0, void 0, function () {
                    var resp, dao, Message, messageResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                resp = null;
                                dao = this.daoFactory.getDefaultDao();
                                Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
                                console.log("_updateStatus Message", Message);
                                if (!Message)
                                    return [3 /*break*/, 3];
                                Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                                return [4 /*yield*/, dao.queryByTable(Message).toPromise()];
                            case 1:
                                messageResp = _a.sent();
                                if (!(messageResp.Header["status"] && messageResp.Body.length > 0))
                                    return [3 /*break*/, 3];
                                Message.setValue(col, val);
                                return [4 /*yield*/, dao.updateByTable(Message).toPromise()];
                            case 2:
                                resp = _a.sent();
                                _a.label = 3;
                            case 3:
                                console.log("_updateStatus resp", resp);
                                return [2 /*return*/, resp];
                        }
                    });
                });
            };
        return ChangeMessageStatusAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnbindDeviceAPI = /** @class */ (function () {
        function UnbindDeviceAPI(APP_CONFIG) {
            this.APP_CONFIG = APP_CONFIG;
            this._deviceID = '';
        }
        /**
         * @param {?} deviceID
         * @return {?}
         */
        UnbindDeviceAPI.prototype.setDeviceID = /**
         * @param {?} deviceID
         * @return {?}
         */
            function (deviceID) {
                this._deviceID = deviceID;
            };
        /**
         * @return {?}
         */
        UnbindDeviceAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'unbindDevice';
            };
        /**
         * @return {?}
         */
        UnbindDeviceAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/logout.json';
            };
        /**
         * @return {?}
         */
        UnbindDeviceAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var env = this.APP_CONFIG.ENV;
                /** @type {?} */
                var cleanDeviceUrl = this.APP_CONFIG[env]['API_URL']['unbindDevice'];
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = cleanDeviceUrl;
                requestData.body = { "DeviceId": this._deviceID };
                requestData.type = "POST";
                return requestData;
            };
        return UnbindDeviceAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpdateTimeListAPI = /** @class */ (function () {
        function UpdateTimeListAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        /**
         * @return {?}
         */
        UpdateTimeListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getUpdateTimeList';
            };
        /**
         * @return {?}
         */
        UpdateTimeListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/getUpdateTimeList.json";
            };
        /**
         * @return {?}
         */
        UpdateTimeListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dataSyncObj = _this._DaoFactory.getTable('Profile', "TW_LH_SD_VW_FuncSync_Time");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDao('Profile');
                    if (dataSyncObj != undefined && dao != undefined) {
                        dataSyncObj = (( /** @type {?} */(dataSyncObj)));
                        dao = new ClientCustomDao(dao);
                        dao.queryByTable(dataSyncObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return UpdateTimeListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterAPITask = /** @class */ (function () {
        function RegisterAPITask(APIFactory$$1, DAOFactory, deviceFactory, translateService, deviceService, APP_CONFIG) {
            this.APIFactory = APIFactory$$1;
            this.DAOFactory = DAOFactory;
            this.deviceFactory = deviceFactory;
            this.translateService = translateService;
            this.deviceService = deviceService;
            this.APP_CONFIG = APP_CONFIG;
        }
        /**
         * @return {?}
         */
        RegisterAPITask.prototype.doTask = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    console.log('register API');
                    //register Setting API
                    _this.APIFactory.registerAPI(new SettingAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new SettingUpdateAPI(_this.DAOFactory));
                    //register Config API
                    _this.APIFactory.registerAPI(new ExtensionConfigAPI());
                    //register Profile API
                    _this.APIFactory.registerAPI(new ProfileCodeAPI(_this.DAOFactory));
                    //register Device API
                    _this.APIFactory.registerAPI(new CurrentLanguageListAPI(_this.DAOFactory));
                    //register Login API
                    _this.APIFactory.registerAPI(new saveLoginTokenAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new OfflineAuthAPI(_this.DAOFactory, _this.APP_CONFIG));
                    //register getMenu API
                    _this.APIFactory.registerAPI(new MenuAPI());
                    //register checkversion API
                    _this.APIFactory.registerAPI(new CheckVersionAPI());
                    //register datasync API
                    _this.APIFactory.registerAPI(new SyncPushAPI());
                    _this.APIFactory.registerAPI(new SyncPullAPI());
                    //register UpdatePushID API
                    _this.APIFactory.registerAPI(new UpdatePushIDAPI());
                    //register getSyncSequence API
                    _this.APIFactory.registerAPI(new syncSequenceIDAPI());
                    //register account binding API
                    _this.APIFactory.registerAPI(new BindingAccountAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new DeviceAccountAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new ContactsSearchAPI(_this.deviceFactory));
                    _this.APIFactory.registerAPI(new logErrorAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new logActionAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new PushErrorLogAPI());
                    _this.APIFactory.registerAPI(new PushActionLogAPI());
                    _this.APIFactory.registerAPI(new RouterMapAPI());
                    _this.APIFactory.registerAPI(new getYearConfigAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new saveYearConfigAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new getAgencyPlanAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new saveAgencyPlanAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new getProgressAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new saveProgressAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new getGoalAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new saveGoalAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new getActualAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new saveActualAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new pushGoalSettingDataAPI());
                    _this.APIFactory.registerAPI(new pushApproveGoalAPI());
                    _this.APIFactory.registerAPI(new GetDeviceInfoAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new MetaConfigAPI());
                    _this.APIFactory.registerAPI(new SettingValueAPI(_this.translateService, _this.deviceService));
                    _this.APIFactory.registerAPI(new LoginAPI());
                    _this.APIFactory.registerAPI(new DashboardGetMessageListAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new DashboardUpdateMessageStatusAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new ChangeMessageStatusAPI(_this.DAOFactory));
                    _this.APIFactory.registerAPI(new UnbindDeviceAPI(_this.APP_CONFIG));
                    _this.APIFactory.registerAPI(new UpdateTimeListAPI(_this.DAOFactory));
                    res("register API tasks Done!");
                }));
            };
        RegisterAPITask.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        RegisterAPITask.ctorParameters = function () {
            return [
                { type: APIFactory },
                { type: DaoFactory },
                { type: DeviceFactory },
                { type: TranslateService },
                { type: DeviceService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ RegisterAPITask.ngInjectableDef = i0.defineInjectable({ factory: function RegisterAPITask_Factory() { return new RegisterAPITask(i0.inject(APIFactory), i0.inject(DaoFactory), i0.inject(DeviceFactory), i0.inject(TranslateService), i0.inject(DeviceService), i0.inject(ConfigToken)); }, token: RegisterAPITask, providedIn: "root" });
        return RegisterAPITask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InitialService = /** @class */ (function () {
        function InitialService(errorHandler, dataSyncTask, configTask, deviceTask, registerAPITask, customRegisterAPITask, customTask, initialFinish) {
            this.errorHandler = errorHandler;
            this.dataSyncTask = dataSyncTask;
            this.configTask = configTask;
            this.deviceTask = deviceTask;
            this.registerAPITask = registerAPITask;
            this.customRegisterAPITask = customRegisterAPITask;
            this.customTask = customTask;
            this.initialFinish = initialFinish;
            this._sequentialTasks = [];
            this._parallelTasks = [];
            //register sequential tasks
            if (this.registerAPITask)
                this._sequentialTasks.push(this.registerAPITask);
            if (this.customRegisterAPITask)
                this._sequentialTasks.push(this.customRegisterAPITask);
            if (this.dataSyncTask)
                this._sequentialTasks.push(this.dataSyncTask);
            if (this.deviceTask)
                this._sequentialTasks.push(this.deviceTask);
            if (this.configTask)
                this._sequentialTasks.push(this.configTask);
            if (this.customTask)
                this._sequentialTasks.push(this.customTask);
            //register parallel tasks
            // this._parallelTasks.push(this.configTask);
        }
        /**
         * @return {?}
         */
        InitialService.prototype.load = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, _b, _c, t, e_1_1, err_1;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                console.log('initial service load!', this._sequentialTasks);
                                _d.label = 1;
                            case 1:
                                _d.trys.push([1, 13, , 14]);
                                return [4 /*yield*/, this.waitnseconds(1000)];
                            case 2:
                                _d.sent();
                                _d.label = 3;
                            case 3:
                                _d.trys.push([3, 8, 9, 10]);
                                _b = __values(this._sequentialTasks), _c = _b.next();
                                _d.label = 4;
                            case 4:
                                if (!!_c.done)
                                    return [3 /*break*/, 7];
                                t = _c.value;
                                return [4 /*yield*/, t.doTask()];
                            case 5:
                                _d.sent();
                                _d.label = 6;
                            case 6:
                                _c = _b.next();
                                return [3 /*break*/, 4];
                            case 7: return [3 /*break*/, 10];
                            case 8:
                                e_1_1 = _d.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 10];
                            case 9:
                                try {
                                    if (_c && !_c.done && (_a = _b.return))
                                        _a.call(_b);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                                return [7 /*endfinally*/];
                            case 10: return [4 /*yield*/, Promise.all(this._parallelTasks.map(( /**
                                     * @param {?} task
                                     * @return {?}
                                     */function (task) { return task.doTask(); }))).then(( /**
                                 * @param {?} val
                                 * @return {?}
                                 */function (val) {
                                }))];
                            case 11:
                                _d.sent();
                                return [4 /*yield*/, this.dataSyncTask.refreshSchema()];
                            case 12:
                                _d.sent();
                                if (this.initialFinish) {
                                    this.initialFinish.afterInitialFinish();
                                }
                                return [3 /*break*/, 14];
                            case 13:
                                err_1 = _d.sent();
                                console.warn('Initial Error: maybe not on the mobile');
                                this.errorHandler.handleError(err_1);
                                return [3 /*break*/, 14];
                            case 14: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} second
         * @return {?}
         */
        InitialService.prototype.waitnseconds = /**
         * @param {?} second
         * @return {?}
         */
            function (second) {
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        res();
                    }), second);
                }));
            };
        InitialService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        InitialService.ctorParameters = function () {
            return [
                { type: i0.ErrorHandler },
                { type: DataSyncTask },
                { type: ConfigTask },
                { type: DeviceTask },
                { type: RegisterAPITask },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [registerAPITaskToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [customTaskToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [initialFinishToken,] }] }
            ];
        };
        /** @nocollapse */ InitialService.ngInjectableDef = i0.defineInjectable({ factory: function InitialService_Factory() { return new InitialService(i0.inject(i0.ErrorHandler), i0.inject(DataSyncTask), i0.inject(ConfigTask), i0.inject(DeviceTask), i0.inject(RegisterAPITask), i0.inject(registerAPITaskToken, 8), i0.inject(customTaskToken, 8), i0.inject(initialFinishToken, 8)); }, token: InitialService, providedIn: "root" });
        return InitialService;
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
    var APIResponse = /** @class */ (function () {
        function APIResponse() {
        }
        /**
         * @param {?} bodyJSON
         * @return {?}
         */
        APIResponse.prototype.setBodyJSON = /**
         * @param {?} bodyJSON
         * @return {?}
         */
            function (bodyJSON) {
                this.bodyJSON = bodyJSON;
            };
        /**
         * @return {?}
         */
        APIResponse.prototype.getBodyJSON = /**
         * @return {?}
         */
            function () {
                return this.bodyJSON;
            };
        return APIResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoutAPI = /** @class */ (function () {
        function LogoutAPI() {
            this.url = '';
            this.body = {};
            this.type = "GET";
            this.params = null;
        }
        /**
         * @return {?}
         */
        LogoutAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'Logout';
            };
        /**
         * @return {?}
         */
        LogoutAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/logout.json';
            };
        /**
         * @return {?}
         */
        LogoutAPI.prototype.getRequestData = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var requestData = new APIRequest();
                requestData.url = this.url;
                requestData.type = "POST";
                return requestData;
            };
        return LogoutAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangeMessageStatusAPI$1 = /** @class */ (function () {
        function ChangeMessageStatusAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._messageID = null;
            this._col = null;
            this._val = null;
        }
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "val", {
            get: /**
             * @return {?}
             */ function () {
                return this._val;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._val = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "col", {
            get: /**
             * @return {?}
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._col = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChangeMessageStatusAPI.prototype, "messageID", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._messageID = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'ChangeMessageStatus';
            };
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                if (this._messageID && this._col && this._val) {
                    return rxjs.from(this._updateStatus(this._messageID, this._col, this._val));
                }
                else {
                    return rxjs.of(false);
                }
            };
        /**
         * @private
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
        ChangeMessageStatusAPI.prototype._updateStatus = /**
         * @private
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
            function (messageID, col, val) {
                return __awaiter(this, void 0, void 0, function () {
                    var resp, dao, Message, messageResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                resp = null;
                                dao = this.daoFactory.getDefaultDao();
                                Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
                                console.log("_updateStatus Message", Message);
                                if (!Message)
                                    return [3 /*break*/, 3];
                                Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                                return [4 /*yield*/, dao.queryByTable(Message).toPromise()];
                            case 1:
                                messageResp = _a.sent();
                                if (!(messageResp.Header["status"] && messageResp.Body.length > 0))
                                    return [3 /*break*/, 3];
                                Message.setValue(col, val);
                                return [4 /*yield*/, dao.updateByTable(Message).toPromise()];
                            case 2:
                                resp = _a.sent();
                                _a.label = 3;
                            case 3:
                                console.log("_updateStatus resp", resp);
                                return [2 /*return*/, resp];
                        }
                    });
                });
            };
        return ChangeMessageStatusAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetOtherParameterAPI = /** @class */ (function () {
        function GetOtherParameterAPI(daoFactory) {
            this._year = -1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GetOtherParameterAPI.prototype.SetYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._year = value;
            };
        /**
         * @return {?}
         */
        GetOtherParameterAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getOtherParameter';
            };
        /**
         * @return {?}
         */
        GetOtherParameterAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getOtherParameterMock.json';
            };
        /**
         * @return {?}
         */
        GetOtherParameterAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite Start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite defaultDao: ", defaultDao);
                /** @type {?} */
                var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_Other_Parameter");
                if (this._year !== -1) {
                    tableObj.addRestriction(new EqualRestriction('DataYear', [this._year]));
                }
                console.debug("SQLite tableObj: ", tableObj);
                if (defaultDao != undefined && tableObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(tableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite getOtherParameter resp: ", resp);
                        console.debug("SQLite getOtherParameter json resp: ", JSON.stringify(resp));
                        return resp;
                    })));
                }
                else {
                    rxjs.of(false);
                    console.debug("SQLite failed");
                }
            };
        return GetOtherParameterAPI;
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
    var VersionCheckService = /** @class */ (function () {
        function VersionCheckService(httpService, APIFactory$$1, dispatcher, deviceService, APP_CONFIG) {
            var _this = this;
            this.httpService = httpService;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.deviceService = deviceService;
            this.APP_CONFIG = APP_CONFIG;
            this.deviceService.getAppVersion().then(( /**
             * @param {?} version
             * @return {?}
             */function (version) {
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
                (( /** @type {?} */(checkVersionAPI))).version = this.appVersion;
                (( /** @type {?} */(checkVersionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(checkVersionAPI).subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log("check version resp:", resp);
                        if (resp.version != _this.appVersion) {
                            observer.next({ isSuccess: true, newVersion: true, appVersion: new versionInfo(resp.appPath, resp.version) });
                            observer.complete();
                        }
                        else {
                            observer.next({ isSuccess: true, newVersion: false, appVersion: new versionInfo(resp.appPath, resp.version) });
                            observer.complete();
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        console.warn("check Version request error:", error.message);
                        observer.next({ isSuccess: false, errorMsg: error.message });
                        observer.complete();
                    }));
                }));
            };
        VersionCheckService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        VersionCheckService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: APIFactory },
                { type: APIDispatch },
                { type: DeviceService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        /** @nocollapse */ VersionCheckService.ngInjectableDef = i0.defineInjectable({ factory: function VersionCheckService_Factory() { return new VersionCheckService(i0.inject(i1$1.HttpClient), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(DeviceService), i0.inject(ConfigToken)); }, token: VersionCheckService, providedIn: "root" });
        return VersionCheckService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FUNC_STATE = {
        PENDING: 0,
        AVAILABLE: 1,
    };
    FUNC_STATE[FUNC_STATE.PENDING] = 'PENDING';
    FUNC_STATE[FUNC_STATE.AVAILABLE] = 'AVAILABLE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataSyncService = /** @class */ (function () {
        function DataSyncService(APP_CONFIG, APIFactory$$1, dispatcher, errorHandler, DaoFactory$$1, devcieService, registerDataSyncFunc) {
            this.APP_CONFIG = APP_CONFIG;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.errorHandler = errorHandler;
            this.DaoFactory = DaoFactory$$1;
            this.devcieService = devcieService;
            this.registerDataSyncFunc = registerDataSyncFunc;
            this.syncAPIMap = {}; // API名稱對應到實例
            this.FuncAPIMap = {}; // 功能對應到API
            this.SyncProcessList = []; // 當前正在sync的功能
            this.func_url = {};
            this.syncStateSubject = new rxjs.BehaviorSubject(this.getCurrentSyncState());
            this.init();
        }
        /**
         * @private
         * @return {?}
         */
        DataSyncService.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.func_url = this.APP_CONFIG[this.APP_CONFIG.ENV].SYNC_URL;
                this.FuncAPIMap = this.registerDataSyncFunc.getFuncMap();
                this.registerDataSyncFunc.getSyncInstance().forEach(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    _this.registerAPI(x);
                }));
            };
        /**
         * @return {?}
         */
        DataSyncService.prototype.getSyncState = /**
         * @return {?}
         */
            function () {
                return this.syncStateSubject.asObservable();
            };
        /**
         * @param {?} func
         * @return {?}
         */
        DataSyncService.prototype.registerAPI = /**
         * @param {?} func
         * @return {?}
         */
            function (func) {
                this.syncAPIMap[func.getName()] = func;
            };
        /**
         * @param {?=} async
         * @return {?}
         */
        DataSyncService.prototype.syncAllFunc = /**
         * @param {?=} async
         * @return {?}
         */
            function (async) {
                if (async === void 0) {
                    async = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log("syncAllFunc:", this.FuncAPIMap, Object.keys(this.FuncAPIMap));
                        return [2 /*return*/, this.syncFunc(Object.keys(this.FuncAPIMap), async)];
                    });
                });
            };
        /**
         * @param {?} FuncList
         * @param {?=} async
         * @return {?}
         */
        DataSyncService.prototype.syncFunc = /**
         * @param {?} FuncList
         * @param {?=} async
         * @return {?}
         */
            function (FuncList, async) {
                if (async === void 0) {
                    async = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, parallelSync_1, seqSync_2, syncPromiseArray_1, dao_1, dataSyncTimeObj, resp, apiTimeMap_1, seqSync_1, seqSync_1_1, api_name, e_1_1, error_1;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log("SyncProcessList:", this.SyncProcessList);
                                console.log("Sync Func:", FuncList);
                                if (!this.devcieService.getNetworkState())
                                    return [3 /*break*/, 17];
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 14, 15, 16]);
                                // If not async , filter current sync function first 
                                if (!async) {
                                    FuncList = FuncList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return !_this.SyncProcessList.includes(x); }));
                                }
                                this.SyncProcessList = __spread(this.SyncProcessList, FuncList);
                                parallelSync_1 = [];
                                seqSync_2 = [];
                                FuncList.forEach(( /**
                                 * @param {?} function_name
                                 * @return {?}
                                 */function (function_name) {
                                    if (Object.keys(_this.FuncAPIMap).includes(function_name)) {
                                        if (_this.FuncAPIMap[function_name].length > 1)
                                            seqSync_2 = __spread(seqSync_2, _this.FuncAPIMap[function_name]);
                                        else
                                            parallelSync_1 = __spread(parallelSync_1, _this.FuncAPIMap[function_name]);
                                    }
                                }));
                                console.log("SeqSync before uniq:", seqSync_2);
                                console.log("parallelSync before uniq:", parallelSync_1);
                                seqSync_2 = _.uniq(seqSync_2);
                                parallelSync_1 = _.uniq(parallelSync_1);
                                console.log("SeqSync after uniq:", seqSync_2);
                                console.log("parallelSync after uniq:", parallelSync_1);
                                console.log("SyncProcessList after uniq:", this.SyncProcessList);
                                //DEV mode, skip sync
                                if (this.APP_CONFIG["ENV"] == "DEV") {
                                    return [2 /*return*/];
                                }
                                syncPromiseArray_1 = [];
                                dao_1 = this.DaoFactory.getDao("Profile");
                                if (!dao_1)
                                    return [3 /*break*/, 12];
                                dataSyncTimeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                                return [4 /*yield*/, dao_1.queryByTable(dataSyncTimeObj).toPromise()];
                            case 2:
                                resp = _b.sent();
                                console.log('dataSyncTime resp:', resp);
                                apiTimeMap_1 = resp.Body;
                                parallelSync_1.forEach(( /**
                                 * @param {?} api_name
                                 * @return {?}
                                 */function (api_name) {
                                    syncPromiseArray_1.push(_this.getSyncPromiseObject(api_name, apiTimeMap_1, dao_1));
                                }));
                                //DO PARALLEL SYNC
                                return [4 /*yield*/, Promise.all(syncPromiseArray_1)];
                            case 3:
                                //DO PARALLEL SYNC
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                _b.trys.push([4, 9, 10, 11]);
                                seqSync_1 = __values(seqSync_2), seqSync_1_1 = seqSync_1.next();
                                _b.label = 5;
                            case 5:
                                if (!!seqSync_1_1.done)
                                    return [3 /*break*/, 8];
                                api_name = seqSync_1_1.value;
                                return [4 /*yield*/, this.getSyncPromiseObject(api_name, apiTimeMap_1, dao_1)];
                            case 6:
                                _b.sent();
                                _b.label = 7;
                            case 7:
                                seqSync_1_1 = seqSync_1.next();
                                return [3 /*break*/, 5];
                            case 8: return [3 /*break*/, 11];
                            case 9:
                                e_1_1 = _b.sent();
                                e_1 = { error: e_1_1 };
                                return [3 /*break*/, 11];
                            case 10:
                                try {
                                    if (seqSync_1_1 && !seqSync_1_1.done && (_a = seqSync_1.return))
                                        _a.call(seqSync_1);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                                return [7 /*endfinally*/];
                            case 11: return [3 /*break*/, 13];
                            case 12: throw new Error("Cannot Find Profile DAO.");
                            case 13: return [3 /*break*/, 16];
                            case 14:
                                error_1 = _b.sent();
                                this.errorHandler.handleError(new APPError("F00110", error_1.message));
                                return [3 /*break*/, 16];
                            case 15:
                                this.SyncProcessList = this.SyncProcessList.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return !FuncList.includes(x); }));
                                return [7 /*endfinally*/];
                            case 16: return [3 /*break*/, 18];
                            case 17:
                                console.log("It's offline now, skip syncFunc:", FuncList);
                                _b.label = 18;
                            case 18: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} api_name
         * @param {?} funcTimeMap
         * @return {?}
         */
        DataSyncService.prototype.sync = /**
         * @private
         * @param {?} api_name
         * @param {?} funcTimeMap
         * @return {?}
         */
            function (api_name, funcTimeMap) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnBackendTime, returnFrontendTime, APIInstance, url_config, backendTime, frontendTIme, sequenceIDNumberNeed, sequenceIDs, pushJson, pullJson, pullResult, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                returnBackendTime = funcTimeMap.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return (x.FuncID == api_name); })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.BackendTime; }))[0];
                                returnFrontendTime = Date.now();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 14, 15, 16]);
                                APIInstance = this.syncAPIMap[api_name];
                                url_config = this.func_url[api_name];
                                backendTime = funcTimeMap.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return (x.FuncID == api_name); })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.BackendTime; }))[0];
                                frontendTIme = funcTimeMap.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return (x.FuncID == api_name); })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.FrontendTime; }))[0];
                                // Debug console
                                console.group("last sync " + api_name + " time:");
                                console.log("backendTime:", backendTime);
                                console.log("frontendTime:", frontendTIme);
                                console.groupEnd();
                                if (!(APIInstance.getState() === FUNC_STATE.AVAILABLE))
                                    return [3 /*break*/, 11];
                                // Change to pending
                                APIInstance.setState(FUNC_STATE.PENDING);
                                this.updateState();
                                return [4 /*yield*/, APIInstance.getSequentialIDNeeded(frontendTIme)];
                            case 2:
                                sequenceIDNumberNeed = _a.sent();
                                console.log("sequenceID need:", sequenceIDNumberNeed);
                                if (!(sequenceIDNumberNeed > 0))
                                    return [3 /*break*/, 5];
                                return [4 /*yield*/, this.getSequentialID(api_name, sequenceIDNumberNeed)];
                            case 3:
                                sequenceIDs = _a.sent();
                                return [4 /*yield*/, APIInstance.setSequentialID(sequenceIDs)];
                            case 4:
                                _a.sent();
                                _a.label = 5;
                            case 5: return [4 /*yield*/, APIInstance.getPushJson(frontendTIme)];
                            case 6:
                                pushJson = _a.sent();
                                console.log('pushJson:', pushJson);
                                if (!(pushJson.length > 0))
                                    return [3 /*break*/, 8];
                                return [4 /*yield*/, this.pushToServer({ data: pushJson, url: url_config.push })];
                            case 7:
                                _a.sent();
                                _a.label = 8;
                            case 8: return [4 /*yield*/, this.pullFromServer({ backendTime: backendTime, url: url_config.pull })];
                            case 9:
                                pullJson = _a.sent();
                                console.log('pullJson:', pullJson);
                                return [4 /*yield*/, this.syncAPIMap[api_name].pullData(pullJson)];
                            case 10:
                                pullResult = _a.sent();
                                console.log('pull result:', pullResult);
                                if (pullResult.Header.status) {
                                    returnBackendTime = dateFns.parseISO(pullJson['lastUpdateTime']).getTime();
                                    returnFrontendTime = Date.now();
                                }
                                else {
                                    throw new Error(pullResult.Header.msg);
                                }
                                return [3 /*break*/, 13];
                            case 11: return [4 /*yield*/, this.waitUntilSyncFinish(api_name)];
                            case 12:
                                _a.sent();
                                _a.label = 13;
                            case 13: return [3 /*break*/, 16];
                            case 14:
                                error_2 = _a.sent();
                                returnFrontendTime = funcTimeMap.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return (x.FuncID == api_name); })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.FrontendTime; }))[0];
                                this.errorHandler.handleError(new APPError("F00113", api_name + " sync failed," + error_2.message));
                                return [3 /*break*/, 16];
                            case 15:
                                this.syncAPIMap[api_name].setState(FUNC_STATE.AVAILABLE);
                                this.updateState();
                                return [2 /*return*/, Promise.resolve({ backendTime: returnBackendTime, frontendTime: returnFrontendTime })];
                            case 16: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        DataSyncService.prototype.pushToServer = /**
         * @private
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var data = _a.data, url = _a.url;
                return __awaiter(this, void 0, void 0, function () {
                    var pushAPI;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                pushAPI = this.APIFactory.getAPI("SyncPush");
                                (( /** @type {?} */(pushAPI))).url = url;
                                (( /** @type {?} */(pushAPI))).body = data;
                                return [4 /*yield*/, this.dispatcher.dispatch(pushAPI).toPromise()];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        DataSyncService.prototype.pullFromServer = /**
         * @private
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var backendTime = _a.backendTime, url = _a.url;
                return __awaiter(this, void 0, void 0, function () {
                    var pullAPI;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                pullAPI = this.APIFactory.getAPI("SyncPull");
                                (( /** @type {?} */(pullAPI))).lastUpdateTime = new Date(backendTime).toISOString();
                                (( /** @type {?} */(pullAPI))).url = url;
                                return [4 /*yield*/, this.dispatcher.dispatch(pullAPI).toPromise()
                                        .then(( /**
                                 * @param {?} data
                                 * @return {?}
                                 */function (data) {
                                        console.log('data from server:', data);
                                        return data;
                                    }))];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} category
         * @param {?} num
         * @return {?}
         */
        DataSyncService.prototype.getSequentialID = /**
         * @private
         * @param {?} category
         * @param {?} num
         * @return {?}
         */
            function (category, num) {
                /** @type {?} */
                var getSyncSequenceIDAPI = this.APIFactory.getAPI("getSyncSequenceID");
                if (getSyncSequenceIDAPI) {
                    (( /** @type {?} */(getSyncSequenceIDAPI))).type = category;
                    (( /** @type {?} */(getSyncSequenceIDAPI))).num = num;
                    return this.dispatcher.dispatch(getSyncSequenceIDAPI).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log("get sync sequence ID resp:", resp);
                        return resp['ids'];
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        DataSyncService.prototype.getCurrentSyncState = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var state = {};
                Object.keys(this.syncAPIMap).forEach(( /**
                 * @param {?} val
                 * @return {?}
                 */function (val) {
                    state[val] = _this.syncAPIMap[val].getState();
                }));
                return state;
            };
        /**
         * @private
         * @return {?}
         */
        DataSyncService.prototype.updateState = /**
         * @private
         * @return {?}
         */
            function () {
                this.syncStateSubject.next(this.getCurrentSyncState());
            };
        /**
         * @private
         * @param {?} func
         * @return {?}
         */
        DataSyncService.prototype.waitUntilSyncFinish = /**
         * @private
         * @param {?} func
         * @return {?}
         */
            function (func) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.getSyncState().pipe(operators.first(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) {
                                return Object.entries(x).filter(( /**
                                 * @param {?} y
                                 * @return {?}
                                 */function (y) { return y[0] === func && y[1] === FUNC_STATE.AVAILABLE; })).length > 0;
                            }))).toPromise()];
                    });
                });
            };
        /**
         * @private
         * @param {?} api_name
         * @param {?} ApiTimeMap
         * @param {?} dao
         * @return {?}
         */
        DataSyncService.prototype.getSyncPromiseObject = /**
         * @private
         * @param {?} api_name
         * @param {?} ApiTimeMap
         * @param {?} dao
         * @return {?}
         */
            function (api_name, ApiTimeMap, dao) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, backendTime, frontendTime, dataSyncTimeObj, result;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.sync(api_name, ApiTimeMap)];
                            case 1:
                                _a = _b.sent(), backendTime = _a.backendTime, frontendTime = _a.frontendTime;
                                dataSyncTimeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                                dataSyncTimeObj.addRestriction(new EqualRestriction('FuncID', [api_name]));
                                dataSyncTimeObj.setValue('BackendTime', backendTime);
                                dataSyncTimeObj.setValue('FrontendTime', frontendTime);
                                return [4 /*yield*/, dao.updateByTable(dataSyncTimeObj).toPromise()];
                            case 2:
                                result = _b.sent();
                                console.log("Finish sync function " + api_name + " :", result);
                                return [2 /*return*/, result];
                        }
                    });
                });
            };
        DataSyncService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DataSyncService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] },
                { type: APIFactory },
                { type: APIDispatch },
                { type: i0.ErrorHandler },
                { type: DaoFactory },
                { type: DeviceService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [registerDataSyncFuncToken,] }] }
            ];
        };
        /** @nocollapse */ DataSyncService.ngInjectableDef = i0.defineInjectable({ factory: function DataSyncService_Factory() { return new DataSyncService(i0.inject(ConfigToken), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(i0.ErrorHandler), i0.inject(DaoFactory), i0.inject(DeviceService), i0.inject(registerDataSyncFuncToken)); }, token: DataSyncService, providedIn: "root" });
        return DataSyncService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogService = /** @class */ (function () {
        function LogService(DaoFactory$$1, APIFactory$$1, dispatcher, errorHandler) {
            this.DaoFactory = DaoFactory$$1;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.errorHandler = errorHandler;
        }
        /**
         * @return {?}
         */
        LogService.prototype.pushErrorLog = /**
         * @return {?}
         */
            function () {
                return rxjs.from(this._pushErrorLog());
            };
        /**
         * @return {?}
         */
        LogService.prototype.pushActionLog = /**
         * @return {?}
         */
            function () {
                return rxjs.from(this._pushActionLog());
            };
        /**
         * @private
         * @return {?}
         */
        LogService.prototype._pushErrorLog = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var dao, ErrorLogTable, resp, errorList, pushErrorLogAPI, pushResp, deleteResp, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 5, , 6]);
                                //GET DB DATA
                                console.log("into pushErrorLog()");
                                dao = this.DaoFactory.getDao("Profile");
                                ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                                if (!ErrorLogTable)
                                    return [3 /*break*/, 4];
                                ErrorLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                                return [4 /*yield*/, dao.queryByTable(ErrorLogTable).toPromise()];
                            case 1:
                                resp = _a.sent();
                                if (!resp.Header["status"])
                                    return [3 /*break*/, 4];
                                console.log("error log table data:", resp.Body);
                                errorList = resp.Body;
                                pushErrorLogAPI = this.APIFactory.getAPI("PushErrorLog");
                                (( /** @type {?} */(pushErrorLogAPI))).errorList = errorList;
                                return [4 /*yield*/, this.dispatcher.dispatch(pushErrorLogAPI).toPromise()];
                            case 2:
                                pushResp = _a.sent();
                                console.log("push error Log resp:", pushResp);
                                if (!pushResp["success"])
                                    return [3 /*break*/, 4];
                                // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Error_Log where 1=1', [])]);
                                ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                                return [4 /*yield*/, dao.deleteByTable(ErrorLogTable).toPromise()];
                            case 3:
                                deleteResp = _a.sent();
                                // let errorIds = resp.Body.map(x => x.ErrorID);
                                // ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                                // ErrorLogTable.addRestriction(new InRestriction("ErrorID", errorIds));
                                // ErrorLogTable.setValue('IsSend', 'Y');
                                // let updateResp = await dao.updateByTable(ErrorLogTable).toPromise();
                                console.log("deleteResp:", deleteResp);
                                _a.label = 4;
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_1 = _a.sent();
                                this.errorHandler.handleError(new Error('pushErrorLog fail!'));
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        LogService.prototype._pushActionLog = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var dao, ActionLogTable, resp, actionList, pushActionLogAPI, pushResp, deleteResp, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 5, , 6]);
                                console.log("into pushActionLog()");
                                dao = this.DaoFactory.getDao("Profile");
                                ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                                ActionLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                                return [4 /*yield*/, dao.queryByTable(ActionLogTable).toPromise()];
                            case 1:
                                resp = _a.sent();
                                if (!resp.Header["status"])
                                    return [3 /*break*/, 4];
                                console.log("Action log table data:", resp.Body);
                                actionList = resp.Body;
                                pushActionLogAPI = this.APIFactory.getAPI("PushActionLog");
                                (( /** @type {?} */(pushActionLogAPI))).actionList = actionList;
                                return [4 /*yield*/, this.dispatcher.dispatch(pushActionLogAPI).toPromise()];
                            case 2:
                                pushResp = _a.sent();
                                console.log("push action Log resp:", pushResp);
                                if (!pushResp["success"])
                                    return [3 /*break*/, 4];
                                // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Action_Log where 1=1', [])]);
                                ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                                return [4 /*yield*/, dao.deleteByTable(ActionLogTable).toPromise()];
                            case 3:
                                deleteResp = _a.sent();
                                // let actionIds = resp.Body.map(x => x.ActionID);
                                // ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                                // ActionLogTable.addRestriction(new InRestriction("ActionID", actionIds));
                                // ActionLogTable.setValue('IsSend', 'Y');
                                // let updateResp = await dao.updateByTable(ActionLogTable).toPromise();
                                console.log("deleteResp:", deleteResp);
                                _a.label = 4;
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_2 = _a.sent();
                                this.errorHandler.handleError(new Error('pushActionLog fail!'));
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            };
        LogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        LogService.ctorParameters = function () {
            return [
                { type: DaoFactory },
                { type: APIFactory },
                { type: APIDispatch },
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(i0.inject(DaoFactory), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(i0.ErrorHandler)); }, token: LogService, providedIn: "root" });
        return LogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileCodeService = /** @class */ (function () {
        function ProfileCodeService(dispatcher, translateService, APIFactory$$1) {
            this.dispatcher = dispatcher;
            this.translateService = translateService;
            this.APIFactory = APIFactory$$1;
            this.profileCodeTypeMap = new Map();
            this.profileCodeMap = new Map();
        }
        /**
         * @param {?} typeId
         * @return {?}
         */
        ProfileCodeService.prototype.getCodeArray = /**
         * @param {?} typeId
         * @return {?}
         */
            function (typeId) {
                if (this.profileCodeTypeMap.size != 0) {
                    /** @type {?} */
                    var codeArray = this.profileCodeTypeMap.get(typeId);
                    if (codeArray == undefined)
                        codeArray = new Array();
                    return __spread(codeArray);
                }
                return new Array();
            };
        /**
         * @param {?} typeID
         * @param {?} code
         * @return {?}
         */
        ProfileCodeService.prototype.convertCode2Text = /**
         * @param {?} typeID
         * @param {?} code
         * @return {?}
         */
            function (typeID, code) {
                if (this.profileCodeMap.size != 0 && code != undefined) {
                    /** @type {?} */
                    var profileCode = this.profileCodeMap.get(typeID + '_' + code);
                    if (profileCode != undefined) {
                        /** @type {?} */
                        var mappingID = profileCode.getMappingID();
                        /** @type {?} */
                        var text = this.translateService.translate(mappingID);
                        return text;
                    }
                }
                return code;
            };
        /**
         * @param {?} typeID
         * @param {?} code
         * @return {?}
         */
        ProfileCodeService.prototype.getArgumentsByCode = /**
         * @param {?} typeID
         * @param {?} code
         * @return {?}
         */
            function (typeID, code) {
                if (this.profileCodeMap.size != 0) {
                    /** @type {?} */
                    var profileCode = this.profileCodeMap.get(typeID + '_' + code);
                    if (profileCode != undefined) {
                        return profileCode.getArguments();
                    }
                }
                return null;
            };
        /**
         * @return {?}
         */
        ProfileCodeService.prototype._fetchCodeData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var profileCodeAPI = this.APIFactory.getAPI('getProfileCode');
                console.debug('profile-code.service fetchCodeData', profileCodeAPI);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(profileCodeAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.profileCodeTypeMap.clear();
                        _this.profileCodeMap.clear();
                        /** @type {?} */
                        var bodyDatas = data['Body'];
                        console.log('<--- Datas --->');
                        console.log(data);
                        for (var i = 0; i < bodyDatas.length; i++) {
                            /** @type {?} */
                            var json = bodyDatas[i];
                            /** @type {?} */
                            var profileCode = Object.create(ProfileCode.prototype);
                            profileCode = Object.assign(profileCode, json);
                            /** @type {?} */
                            var typeId = profileCode.getTypeId();
                            /** @type {?} */
                            var code = profileCode.getCode();
                            /** @type {?} */
                            var mappingID = profileCode.getMappingID();
                            /** @type {?} */
                            var text = _this.translateService.translate(mappingID);
                            profileCode.setDisplayText(text);
                            /** @type {?} */
                            var codeArray = _this.profileCodeTypeMap.get(typeId);
                            if (codeArray == undefined) {
                                codeArray = new Array();
                            }
                            codeArray.push(profileCode);
                            _this.profileCodeMap.set(typeId + '_' + code, profileCode);
                            _this.profileCodeTypeMap.set(typeId, codeArray);
                        }
                        console.debug('profileCodeMap', _this.profileCodeMap);
                        console.debug('profileCodeTypeMap', _this.profileCodeTypeMap);
                        observer.next(true);
                        observer.complete();
                    }));
                }));
            };
        ProfileCodeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        ProfileCodeService.ctorParameters = function () {
            return [
                { type: APIDispatch },
                { type: TranslateService },
                { type: APIFactory }
            ];
        };
        /** @nocollapse */ ProfileCodeService.ngInjectableDef = i0.defineInjectable({ factory: function ProfileCodeService_Factory() { return new ProfileCodeService(i0.inject(APIDispatch), i0.inject(TranslateService), i0.inject(APIFactory)); }, token: ProfileCodeService, providedIn: "root" });
        return ProfileCodeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultLoadingApp = /** @class */ (function () {
        function DefaultLoadingApp(versionCheck, syncService, logService, profileCodeService, notificationMgr, settingService, pushIDMgr) {
            this.versionCheck = versionCheck;
            this.syncService = syncService;
            this.logService = logService;
            this.profileCodeService = profileCodeService;
            this.notificationMgr = notificationMgr;
            this.settingService = settingService;
            this.pushIDMgr = pushIDMgr;
            this.loadedSubject = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        DefaultLoadingApp.prototype.loading = /**
         * @return {?}
         */
            function () {
                this._loading();
            };
        /**
         * @return {?}
         */
        DefaultLoadingApp.prototype.onLoaded = /**
         * @return {?}
         */
            function () {
                return this.loadedSubject.asObservable();
            };
        /**
         * @private
         * @return {?}
         */
        DefaultLoadingApp.prototype._loading = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var versionResp;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.syncService.syncAllFunc(true)];
                            case 1:
                                _a.sent();
                                this.loadedSubject.next(50);
                                return [4 /*yield*/, this.profileCodeService._fetchCodeData().toPromise()];
                            case 2:
                                _a.sent();
                                this.loadedSubject.next(60);
                                return [4 /*yield*/, this.logService.pushActionLog().toPromise()];
                            case 3:
                                _a.sent();
                                this.loadedSubject.next(70);
                                return [4 /*yield*/, this.logService.pushErrorLog().toPromise()];
                            case 4:
                                _a.sent();
                                this.loadedSubject.next(80);
                                return [4 /*yield*/, this.notificationMgr.init()];
                            case 5:
                                _a.sent();
                                this.loadedSubject.next(85);
                                return [4 /*yield*/, this.settingService.deviceChange(this.pushIDMgr.getPushID())];
                            case 6:
                                _a.sent();
                                this.loadedSubject.next(88);
                                //after sync finish ,check version
                                return [4 /*yield*/, this.versionCheck.checkVersion().toPromise()];
                            case 7:
                                versionResp = _a.sent();
                                if (versionResp.isSuccess) {
                                    this.loadedSubject.next(95);
                                    if (versionResp.newVersion) {
                                        this.notificationMgr.pushNotification(NotificationType.NewVersionLogin, versionResp.appVersion);
                                    }
                                    else {
                                        setTimeout(( /**
                                         * @return {?}
                                         */function () {
                                            _this.loadedSubject.next(100);
                                        }), 800);
                                    }
                                }
                                else {
                                    console.log("Check version error!!");
                                    this.loadedSubject.next(100);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        DefaultLoadingApp.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DefaultLoadingApp.ctorParameters = function () {
            return [
                { type: VersionCheckService },
                { type: DataSyncService },
                { type: LogService },
                { type: ProfileCodeService },
                { type: NotificationMgr },
                { type: SettingService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [PushIDMgrToken,] }] }
            ];
        };
        /** @nocollapse */ DefaultLoadingApp.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoadingApp_Factory() { return new DefaultLoadingApp(i0.inject(VersionCheckService), i0.inject(DataSyncService), i0.inject(LogService), i0.inject(ProfileCodeService), i0.inject(NotificationMgr), i0.inject(SettingService), i0.inject(PushIDMgrToken, 8)); }, token: DefaultLoadingApp, providedIn: "root" });
        return DefaultLoadingApp;
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
    var RouteObject = /** @class */ (function () {
        function RouteObject(url) {
            this.url = url;
        }
        /**
         * @return {?}
         */
        RouteObject.prototype.getUrl = /**
         * @return {?}
         */
            function () {
                return this.url;
            };
        return RouteObject;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarSync = /** @class */ (function () {
        function CalendarSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.tmpPushData = null;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        CalendarSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        CalendarSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'CALENDAR';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        CalendarSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var dao, calendarExtObj, returnJson, customerIDMap, pushData, extCols;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Do check data clientTime > frontendTime;
                                dao = this.DaoFactory.getDefaultDao();
                                calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                returnJson = [];
                                return [4 /*yield*/, this.getCustomerIDMap()];
                            case 1:
                                customerIDMap = _a.sent();
                                return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 2:
                                pushData = _a.sent();
                                extCols = calendarExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CalendarID'; }));
                                returnJson = pushData.map(( /**
                                 * @param {?} calendarObj
                                 * @return {?}
                                 */function (calendarObj) {
                                    /** @type {?} */
                                    var extensions = extCols
                                        .map(( /**
                                 * @param {?} col
                                 * @return {?}
                                 */function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: calendarObj[col.getName()]
                                        };
                                    }));
                                    return {
                                        "appointmentId": calendarObj.CalendarID,
                                        "name": calendarObj.Title,
                                        "meetingLocation": calendarObj.Location,
                                        "appointmentType": calendarObj.CalendarType,
                                        "allDay": calendarObj.IsAllDay === 'Y' ? true : false,
                                        "startDateTime": new Date(calendarObj.StartTime).toISOString(),
                                        "endDateTime": new Date(calendarObj.EndTime).toISOString(),
                                        "alertTimes": [calendarObj.Alert1, calendarObj.Alert2, calendarObj.Alert3].filter(( /**
                                         * @param {?} x
                                         * @return {?}
                                         */function (x) { return x != null && x != ""; })),
                                        "personId": customerIDMap[calendarObj.CustomerClientID] ? customerIDMap[calendarObj.CustomerClientID] : '',
                                        "description": calendarObj.Remark,
                                        "isChangeable": calendarObj.DataSource !== 'OPUS',
                                        "extensions": extensions,
                                        "synchDetail": {
                                            "clientTime": new Date(calendarObj.ClientTime).toISOString(),
                                            "lastUpdateDateTimeBackend": new Date(calendarObj.DataTime).toISOString(),
                                            "toDelete": calendarObj.IsDelete === 'Y'
                                        }
                                    };
                                }));
                                if (!this.PushAOP)
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                            case 3:
                                returnJson = _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/, returnJson];
                        }
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        CalendarSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, e_2, _b, dao, calendarObj, calendarExtObj_1, customerIDMap, calendarDatas, calendarIdArr, calendarClientIdArr, _c, _d, data, IsAlert, extensions, clientID, _e, _f, id;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _g.sent();
                                _g.label = 2;
                            case 2:
                                if (!(resp.appointments.length > 0 || resp.deletedAppointmentIds.length > 0))
                                    return [3 /*break*/, 6];
                                dao = this.DaoFactory.getDefaultDao();
                                calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                return [4 /*yield*/, this.getCustomerIDMap(true)];
                            case 3:
                                customerIDMap = _g.sent();
                                return [4 /*yield*/, dao.queryByTable(calendarObj).toPromise().then(( /**
                                         * @param {?} res
                                         * @return {?}
                                         */function (res) { return res.Body; }))];
                            case 4:
                                calendarDatas = _g.sent();
                                calendarIdArr = calendarDatas.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.CalendarID; }));
                                calendarClientIdArr = calendarDatas.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ClientID; }));
                                console.log('calendar ID array:', calendarIdArr);
                                console.log('calendar Client ID array:', calendarClientIdArr);
                                try {
                                    for (_c = __values(resp.appointments), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        data = _d.value;
                                        IsAlert = data.alertTimes.length > 0 ? 'Y' : 'N';
                                        calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                        calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                        calendarObj.setValue("CalendarID", data.appointmentId);
                                        calendarObj.setValue("Title", data.name);
                                        calendarObj.setValue("Location", data.meetingLocation);
                                        calendarObj.setValue("CalendarType", data.appointmentType);
                                        calendarObj.setValue("IsAllDay", data.allDay ? 'Y' : 'N');
                                        calendarObj.setValue("StartTime", dateFns.parseISO(data.startDateTime).getTime());
                                        calendarObj.setValue("EndTime", dateFns.parseISO(data.endDateTime).getTime());
                                        calendarObj.setValue("CustomerClientID", customerIDMap[data.personId]);
                                        calendarObj.setValue("IsAlert", IsAlert);
                                        if (IsAlert)
                                            calendarObj.setValue("Alert1", data.alertTimes[0]);
                                        if (data.alertTimes.length > 1)
                                            calendarObj.setValue("Alert2", data.alertTimes[1]);
                                        if (data.alertTimes.length > 2)
                                            calendarObj.setValue("Alert3", data.alertTimes[2]);
                                        calendarObj.setValue("Remark", data.description);
                                        calendarObj.setValue("IsDelete", 'N');
                                        calendarObj.setValue("DataSource", data.isChangeable ? "APP" : "OPUS");
                                        calendarObj.setValue("DataTime", dateFns.parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                        calendarObj.setValue("ClientTime", Date.now());
                                        extensions = data.extensions;
                                        calendarObj.setValue("CalendarID", data.appointmentId);
                                        calendarExtObj_1.setValue("CalendarID", data.appointmentId);
                                        if (extensions != null) {
                                            extensions.forEach(( /**
                                             * @param {?} extension
                                             * @return {?}
                                             */function (extension) {
                                                calendarExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        if (calendarIdArr.includes(data.appointmentId)) {
                                            calendarObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                                            calendarExtObj_1.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                                            dao.transactionUpdate(calendarObj);
                                            dao.transactionUpdate(calendarExtObj_1);
                                        }
                                        else {
                                            clientID = uuid.v4();
                                            calendarObj.setValue("ClientID", clientID);
                                            calendarExtObj_1.setValue("ClientID", clientID);
                                            dao.transactionInsert(calendarObj);
                                            dao.transactionInsert(calendarExtObj_1);
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_a = _c.return))
                                            _a.call(_c);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                try {
                                    for (_e = __values(resp.deletedAppointmentIds), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        id = _f.value;
                                        calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                        calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                        calendarObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                                        calendarExtObj_1.addRestriction(new EqualRestriction('CalendarID', [id]));
                                        dao.transactionDelete(calendarObj);
                                        dao.transactionDelete(calendarExtObj_1);
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return))
                                            _b.call(_e);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 5: return [2 /*return*/, _g.sent()];
                            case 6: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        CalendarSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        CalendarSync.prototype.getSequentialIDNeeded = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var pushData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 1:
                                pushData = _a.sent();
                                this.tmpPushData = pushData.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.CalendarID === null; }));
                                return [2 /*return*/, this.tmpPushData.length];
                        }
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        CalendarSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_3, _a, dataWithoutIds, dao, _b, _c, _d, index, data, calendarObj, calendarExtObj;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (!(this.tmpPushData != null))
                                    return [3 /*break*/, 2];
                                //set to tmpData && Sqlite
                                dataWithoutIds = this.tmpPushData;
                                dao = this.DaoFactory.getDefaultDao();
                                try {
                                    for (_b = __values(dataWithoutIds.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        _d = __read(_c.value, 2), index = _d[0], data = _d[1];
                                        calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                        calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                        calendarObj.setValue("CalendarID", ids[index]);
                                        calendarObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                        dao.transactionUpdate(calendarObj);
                                        calendarExtObj.setValue("CalendarID", ids[index]);
                                        calendarExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                        dao.transactionUpdate(calendarExtObj);
                                    }
                                }
                                catch (e_3_1) {
                                    e_3 = { error: e_3_1 };
                                }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return))
                                            _a.call(_b);
                                    }
                                    finally {
                                        if (e_3)
                                            throw e_3.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 1:
                                _e.sent();
                                this.tmpPushData = null;
                                _e.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
        CalendarSync.prototype.getPushData = /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var datas, dao, calendarObj, resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                datas = [];
                                dao = this.DaoFactory.getDefaultDao();
                                calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Calendar');
                                if (!(dao && calendarObj))
                                    return [3 /*break*/, 2];
                                calendarObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(calendarObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query calendar obj:', resp);
                                if (resp.Body.length > 0)
                                    datas = resp.Body;
                                _a.label = 2;
                            case 2: return [2 /*return*/, datas];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?=} reverse
         * @return {?}
         */
        CalendarSync.prototype.getCustomerIDMap = /**
         * @private
         * @param {?=} reverse
         * @return {?}
         */
            function (reverse) {
                if (reverse === void 0) {
                    reverse = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var dao, customerObj, resp, customerList;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                dao = this.DaoFactory.getDefaultDao();
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                if (!(dao && customerObj))
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query customer obj:', resp);
                                if (resp.Body.length > 0) {
                                    customerList = resp.Body;
                                    //if reverse ,set key as CustomerID ,val as ClientID
                                    if (reverse)
                                        customerList = customerList.map(( /**
                                         * @param {?} x
                                         * @return {?}
                                         */function (x) { return { key: x.CustomerID, val: x.ClientID }; }));
                                    else
                                        customerList = customerList.map(( /**
                                         * @param {?} x
                                         * @return {?}
                                         */function (x) { return { key: x.ClientID, val: x.CustomerID }; }));
                                    return [2 /*return*/, customerList.reduce(( /**
                                             * @param {?} map
                                             * @param {?} obj
                                             * @return {?}
                                             */function (map, obj) {
                                            map[obj.key] = obj.val;
                                            return map;
                                        }), {})];
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/, {}];
                        }
                    });
                });
            };
        return CalendarSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactSync = /** @class */ (function () {
        function ContactSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.tmpPushData = null;
            this.customerData = null;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        ContactSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        ContactSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'CUSTOMER_CONTACT';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        ContactSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnJson, pushData, customerContactExtObj, extCols;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Do check data clientTime > frontendTime;
                                returnJson = [];
                                return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 1:
                                pushData = _a.sent();
                                customerContactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                extCols = customerContactExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID' && x.getName() !== 'ContactID'; }));
                                returnJson = pushData.map(( /**
                                 * @param {?} contact
                                 * @return {?}
                                 */function (contact) {
                                    /** @type {?} */
                                    var extensions = extCols
                                        .map(( /**
                                 * @param {?} col
                                 * @return {?}
                                 */function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: contact[col.getName()]
                                        };
                                    }));
                                    return {
                                        "noteId": contact.ContactID,
                                        "personId": contact.CustomerID,
                                        "text": contact.Note,
                                        "origin": "",
                                        "creationDateTime": new Date(contact.NoteTime).toISOString(),
                                        "extensions": extensions,
                                        "synchDetail": {
                                            "lastUpdateDateTimeBackend": new Date(contact.DataTime).toISOString(),
                                            "toDelete": contact.IsDelete === 'Y'
                                        }
                                    };
                                }));
                                if (!this.PushAOP)
                                    return [3 /*break*/, 3];
                                return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                            case 2:
                                returnJson = _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, returnJson];
                        }
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        ContactSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, dao, contactObj, contactExtObj_1, customerObj, contactIdArr, customerResp, CustomerClientIDArr, CustomerIdArr, _b, _c, data, extensions, cliendID;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _d.sent();
                                _d.label = 2;
                            case 2:
                                if (!(resp.notes.length > 0 || resp.deletedNoteIds.length > 0))
                                    return [3 /*break*/, 5];
                                dao = this.DaoFactory.getDefaultDao();
                                contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                return [4 /*yield*/, dao.queryByTable(contactObj).toPromise().then(( /**
                                         * @param {?} res
                                         * @return {?}
                                         */function (res) {
                                        return res.Body.map(( /**
                                         * @param {?} x
                                         * @return {?}
                                         */function (x) { return x.ContactID; }));
                                    }))];
                            case 3:
                                contactIdArr = _d.sent();
                                // let customerResp = await dao.queryByTable(customerObj).toPromise();
                                customerResp = this.customerData;
                                CustomerClientIDArr = customerResp.Body.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ClientID; }));
                                CustomerIdArr = customerResp.Body.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.CustomerID; }));
                                try {
                                    for (_b = __values(resp.notes), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        data = _c.value;
                                        contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                        contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                        contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                        contactObj.setValue("ContactID", data.noteId);
                                        contactObj.setValue("Note", data.text);
                                        contactObj.setValue("NoteTime", dateFns.parseISO(data.creationDateTime).getTime());
                                        contactObj.setValue("DataTime", dateFns.parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                        contactObj.setValue("IsDelete", 'N');
                                        contactObj.setValue("ClientTime", Date.now());
                                        // save extendion data
                                        extensions = data.extensions;
                                        contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                        contactObj.setValue("ContactID", data.noteId);
                                        contactExtObj_1.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                        contactExtObj_1.setValue("ContactID", data.noteId);
                                        if (extensions != null) {
                                            extensions.forEach(( /**
                                             * @param {?} extension
                                             * @return {?}
                                             */function (extension) {
                                                contactExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        if (contactIdArr.includes(data.noteId)) {
                                            contactObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                                            contactExtObj_1.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                                            dao.transactionUpdate(contactObj);
                                            dao.transactionUpdate(contactExtObj_1);
                                        }
                                        else {
                                            cliendID = uuid.v4();
                                            contactObj.setValue("ClientID", cliendID);
                                            contactExtObj_1.setValue("ClientID", cliendID);
                                            dao.transactionInsert(contactObj);
                                            dao.transactionInsert(contactExtObj_1);
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return))
                                            _a.call(_b);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                if (resp.deletedNoteIds.length > 0) {
                                    contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                    contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                    contactObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                                    contactExtObj_1.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                                    dao.transactionDelete(contactObj);
                                    dao.transactionDelete(contactExtObj_1);
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 4: return [2 /*return*/, _d.sent()];
                            case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ContactSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        ContactSync.prototype.getSequentialIDNeeded = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var pushData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 1:
                                pushData = _a.sent();
                                this.tmpPushData = pushData.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ContactID === null; }));
                                return [2 /*return*/, this.tmpPushData.length];
                        }
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        ContactSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_2, _a, dataWithoutIds, dao, _b, _c, _d, index, data, contactObj, contactExtObj;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (!(this.tmpPushData != null))
                                    return [3 /*break*/, 2];
                                //set to tmpData && Sqlite
                                dataWithoutIds = this.tmpPushData;
                                dao = this.DaoFactory.getDefaultDao();
                                try {
                                    for (_b = __values(dataWithoutIds.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        _d = __read(_c.value, 2), index = _d[0], data = _d[1];
                                        contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                        contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                        contactObj.setValue("ContactID", ids[index]);
                                        contactExtObj.setValue("ContactID", ids[index]);
                                        contactObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                        contactExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                        dao.transactionUpdate(contactObj);
                                        dao.transactionUpdate(contactExtObj);
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return))
                                            _a.call(_b);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 1:
                                _e.sent();
                                this.tmpPushData = null;
                                _e.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
        ContactSync.prototype.getPushData = /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_3, _a, datas, dao, customerObj, contactObj, customerResp, customerArr, resp, _loop_1, _b, _c, data;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                datas = [];
                                dao = this.DaoFactory.getDefaultDao();
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Contact');
                                return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                            case 1:
                                customerResp = _d.sent();
                                this.customerData = customerResp;
                                customerArr = customerResp.Body;
                                if (!(dao && contactObj))
                                    return [3 /*break*/, 3];
                                contactObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(contactObj).toPromise()];
                            case 2:
                                resp = _d.sent();
                                console.log('query contact obj:', resp);
                                console.log('customer array:', customerArr);
                                if (resp.Body.length > 0) {
                                    _loop_1 = function (data) {
                                        /** @type {?} */
                                        var customer = customerArr.filter(( /**
                                         * @param {?} x
                                         * @return {?}
                                         */function (x) { return x.ClientID == data.CustomerClientID; }));
                                        if (customer.length > 0)
                                            data.CustomerID = customer[0].CustomerID;
                                    };
                                    try {
                                        for (_b = __values(resp.Body), _c = _b.next(); !_c.done; _c = _b.next()) {
                                            data = _c.value;
                                            _loop_1(data);
                                        }
                                    }
                                    catch (e_3_1) {
                                        e_3 = { error: e_3_1 };
                                    }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return))
                                                _a.call(_b);
                                        }
                                        finally {
                                            if (e_3)
                                                throw e_3.error;
                                        }
                                    }
                                    datas = resp.Body;
                                }
                                _d.label = 3;
                            case 3: return [2 /*return*/, datas];
                        }
                    });
                });
            };
        return ContactSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerSync = /** @class */ (function () {
        function CustomerSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.tmpPushData = null;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        CustomerSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        CustomerSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'CUSTOMER';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        CustomerSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnJson, pushData, customerExtObj, customerTelExtObj, customerEmailExtObj, customerAddressExtObj, customerExtCols, customerTelExtCols, customerEmailExtCols, customerAddressExtCols;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Do check data clientTime > frontendTime;
                                returnJson = [];
                                return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 1:
                                pushData = _a.sent();
                                //get extension column informance
                                customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                                customerTelExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                                customerEmailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                                customerAddressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                                customerExtCols = customerExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerID'; }));
                                customerTelExtCols = customerTelExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                                customerEmailExtCols = customerEmailExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                                customerAddressExtCols = customerAddressExtObj.getColumns().filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                                returnJson = pushData.map(( /**
                                 * @param {?} customer
                                 * @return {?}
                                 */function (customer) {
                                    /** @type {?} */
                                    var Extensions = customerExtCols
                                        .map(( /**
                                 * @param {?} col
                                 * @return {?}
                                 */function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: customer[col.getName()]
                                        };
                                    }));
                                    return {
                                        "customerID": customer.CustomerID,
                                        "firstName": customer.FirstName,
                                        "middleName": "",
                                        "lastName": customer.LastName,
                                        "alternateName": "",
                                        "marritalStatus": customer.Marriage,
                                        "occupation": customer.Occupation,
                                        "employer": customer.Company,
                                        "birthDate": customer.BirthdayYear === 'null' || customer.BirthdayYear === null ? null : customer.BirthdayYear + "-" + customer.BirthdayMonth + "-" + customer.BirthdayDate,
                                        "ageRange": customer.AgeRange,
                                        "gender": customer.Gender,
                                        "numberOfChildren": customer.Children,
                                        "addresses": customer.Address.map(( /**
                                         * @param {?} addr
                                         * @return {?}
                                         */function (addr) {
                                            /** @type {?} */
                                            var addressesExtensions = customerAddressExtCols
                                                .map(( /**
                                         * @param {?} col
                                         * @return {?}
                                         */function (col) {
                                                return {
                                                    id: col.getName(),
                                                    type: col.getType(),
                                                    value: addr[col.getName()]
                                                };
                                            }));
                                            return {
                                                "addressType": addr.AddressType,
                                                "countryCode": addr.Country,
                                                "city": addr.City,
                                                "area": addr.Area,
                                                "postCode": addr.Zipcode,
                                                "line1": addr.Address,
                                                "line2": "",
                                                "line3": "",
                                                "line4": "",
                                                "isChangeable": addr.DataSource !== 'OPUS',
                                                "extensions": addressesExtensions
                                            };
                                        })),
                                        "phoneChannels": customer.Tel.map(( /**
                                         * @param {?} tel
                                         * @return {?}
                                         */function (tel) {
                                            /** @type {?} */
                                            var telExtensions = customerTelExtCols
                                                .map(( /**
                                         * @param {?} col
                                         * @return {?}
                                         */function (col) {
                                                return {
                                                    id: col.getName(),
                                                    type: col.getType(),
                                                    value: tel[col.getName()]
                                                };
                                            }));
                                            return {
                                                "usageType": tel.TelType,
                                                "phoneNumber": tel.Tel,
                                                "isChangeable": tel.DataSource !== 'OPUS',
                                                "extensions": telExtensions
                                            };
                                        })),
                                        "emailContacts": customer.Email.map(( /**
                                         * @param {?} email
                                         * @return {?}
                                         */function (email) {
                                            /** @type {?} */
                                            var emailExtensions = customerEmailExtCols
                                                .map(( /**
                                         * @param {?} col
                                         * @return {?}
                                         */function (col) {
                                                return {
                                                    id: col.getName(),
                                                    type: col.getType(),
                                                    value: email[col.getName()]
                                                };
                                            }));
                                            return {
                                                "emailType": email.EmailType,
                                                "email": email.Email,
                                                "isChangeAble": email.DataSource !== 'OPUS',
                                                "extensions": emailExtensions
                                            };
                                        })),
                                        "annualIncomeRange": customer.Income,
                                        "contactLink": customer.Source,
                                        "familiarity": customer.Familiarity,
                                        "touchPointFrequency": customer.ContactFrequancy,
                                        "leadProbability": customer.Possibility,
                                        "isFollowed": customer.IsFollow === 'Y',
                                        "isOverTimeAlert": customer.IsOverTimeAlert === 'Y',
                                        "isChangeable": customer.DataSource !== 'OPUS',
                                        "profileCompletion": customer.Completeness,
                                        "extensions": Extensions,
                                        "synchDetail": {
                                            "clientTime": new Date(customer.ClientTime).toISOString(),
                                            "lastUpdateDateTimeBackend": new Date(customer.DataTime).toISOString(),
                                            "toDelete": customer.IsDelete === 'Y'
                                        }
                                    };
                                }));
                                console.log('customer getPushJson:', returnJson);
                                if (!this.PushAOP)
                                    return [3 /*break*/, 3];
                                return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                            case 2:
                                returnJson = _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, returnJson];
                        }
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        CustomerSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, dao, customerObj, telObj, emailObj, addressObj, customerExtObj_1, emailExtObj_1, addressExtObj_1, telExtObj_1, customerResp_1, CustomerClientIDArr, CustomerIdArr, customerInfoIds_1, ToDeleteCustomerClientIDs, _e, _f, data, clientID, Extensions, _g, _h, email, email_clientID, emailExtensions, _j, _k, address, address_clientID, addressExtensions, _l, _m, tel, tel_clientID, telExtensions, DeleteCustomerClientIds;
                    return __generator(this, function (_o) {
                        switch (_o.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _o.sent();
                                _o.label = 2;
                            case 2:
                                if (!(resp.customerInfos.length > 0 || resp.deletedPersonIds.length > 0))
                                    return [3 /*break*/, 5];
                                dao = this.DaoFactory.getDefaultDao();
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                                emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                                addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                                customerExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                                emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                                addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                                telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                                return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                            case 3:
                                customerResp_1 = _o.sent();
                                CustomerClientIDArr = customerResp_1.Body.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ClientID; }));
                                CustomerIdArr = customerResp_1.Body.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.CustomerID; }));
                                // delete tel,email,address first
                                customerInfoIds_1 = resp.customerInfos.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.customerID; }));
                                ToDeleteCustomerClientIDs = customerResp_1.Body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return customerInfoIds_1.indexOf(x.CustomerID) > -1; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ClientID; }));
                                telObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                emailObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                addressObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                telExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                emailExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                addressExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                                dao.transactionDelete(telObj);
                                dao.transactionDelete(emailObj);
                                dao.transactionDelete(addressObj);
                                dao.transactionDelete(telExtObj_1);
                                dao.transactionDelete(emailExtObj_1);
                                dao.transactionDelete(addressExtObj_1);
                                try {
                                    for (_e = __values(resp.customerInfos), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        data = _f.value;
                                        clientID = '';
                                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                                        customerExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                                        emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                                        addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                                        telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                                        customerObj.setValue("CustomerID", data.customerID);
                                        customerObj.setValue("FirstName", data.firstName);
                                        customerObj.setValue("LastName", data.lastName);
                                        customerObj.setValue("Occupation", data.occupation);
                                        customerObj.setValue("Company", data.employer);
                                        customerObj.setValue("BirthdayYear", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[0]);
                                        customerObj.setValue("BirthdayMonth", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[1]);
                                        customerObj.setValue("BirthdayDate", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[2]);
                                        customerObj.setValue("AgeRange", data.ageRange);
                                        customerObj.setValue("Gender", data.gender);
                                        customerObj.setValue("Income", data.annualIncomeRange);
                                        customerObj.setValue("Source", data.contactLink);
                                        customerObj.setValue("Marriage", data.marritalStatus);
                                        customerObj.setValue("Children", data.numberOfChildren);
                                        customerObj.setValue("Familiarity", data.familiarity);
                                        customerObj.setValue("ContactFrequancy", data.touchPointFrequency);
                                        customerObj.setValue("Possibility", data.leadProbability);
                                        customerObj.setValue("IsFollow", data.isFollowed ? 'Y' : 'N');
                                        customerObj.setValue("IsDelete", 'N');
                                        customerObj.setValue("Completeness", data.profileCompletion);
                                        customerObj.setValue("DataSource", data.isChangeable ? "APP" : "OPUS");
                                        customerObj.setValue("DataTime", dateFns.parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                        customerObj.setValue('IsOverTimeAlert', data.isOverTimeAlert);
                                        customerObj.setValue("ClientTime", Date.now());
                                        //save email extension data
                                        Extensions = data.extensions;
                                        customerExtObj_1.setValue("CustomerID", data.customerID);
                                        console.log('customer Extensions', Extensions);
                                        if (Extensions != null) {
                                            Extensions.forEach(( /**
                                             * @param {?} extension
                                             * @return {?}
                                             */function (extension) {
                                                customerExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        if (CustomerIdArr.includes(data.customerID)) {
                                            clientID = CustomerClientIDArr[CustomerIdArr.indexOf(data.customerID)];
                                            customerObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                                            customerExtObj_1.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                                            dao.transactionUpdate(customerObj);
                                            dao.transactionUpdate(customerExtObj_1);
                                        }
                                        else {
                                            clientID = uuid.v4();
                                            customerObj.setValue("ClientID", clientID);
                                            customerExtObj_1.setValue("ClientID", clientID);
                                            dao.transactionInsert(customerObj);
                                            dao.transactionInsert(customerExtObj_1);
                                        }
                                        try {
                                            for (_g = __values(data.emailContacts), _h = _g.next(); !_h.done; _h = _g.next()) {
                                                email = _h.value;
                                                email_clientID = uuid.v4();
                                                emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                                                emailObj.setValue('ClientID', email_clientID);
                                                emailObj.setValue('CustomerClientID', clientID);
                                                emailObj.setValue('EmailType', email.emailType);
                                                emailObj.setValue('Email', email.email);
                                                emailObj.setValue('DataSource', email.isChangeAble ? 'APP' : 'OPUS');
                                                //save email extension data
                                                emailExtensions = email.extensions;
                                                emailExtObj_1.setValue('ClientID', email_clientID);
                                                emailExtObj_1.setValue('CustomerClientID', clientID);
                                                console.log('emailExtensions', emailExtensions);
                                                if (emailExtensions != null) {
                                                    emailExtensions.forEach(( /**
                                                     * @param {?} extension
                                                     * @return {?}
                                                     */function (extension) {
                                                        emailExtObj_1.setValue(extension.id, extension.value);
                                                    }));
                                                }
                                                dao.transactionInsert(emailExtObj_1);
                                                dao.transactionInsert(emailObj);
                                            }
                                        }
                                        catch (e_2_1) {
                                            e_2 = { error: e_2_1 };
                                        }
                                        finally {
                                            try {
                                                if (_h && !_h.done && (_b = _g.return))
                                                    _b.call(_g);
                                            }
                                            finally {
                                                if (e_2)
                                                    throw e_2.error;
                                            }
                                        }
                                        try {
                                            for (_j = __values(data.addresses), _k = _j.next(); !_k.done; _k = _j.next()) {
                                                address = _k.value;
                                                address_clientID = uuid.v4();
                                                addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                                                addressObj.setValue('ClientID', address_clientID);
                                                addressObj.setValue('CustomerClientID', clientID);
                                                addressObj.setValue('AddressType', address.addressType);
                                                addressObj.setValue('Country', address.countryCode);
                                                addressObj.setValue('City', address.city);
                                                addressObj.setValue('Area', address.area);
                                                addressObj.setValue('Zipcode', address.postCode);
                                                addressObj.setValue('Address', address.line1);
                                                addressObj.setValue('DataSource', address.isChangeAble ? 'APP' : 'OPUS');
                                                //save email extension data
                                                addressExtensions = address.extensions;
                                                addressExtObj_1.setValue('ClientID', address_clientID);
                                                addressExtObj_1.setValue('CustomerClientID', clientID);
                                                console.log('addressExtensions', addressExtensions);
                                                if (addressExtensions != null) {
                                                    addressExtensions.forEach(( /**
                                                     * @param {?} extension
                                                     * @return {?}
                                                     */function (extension) {
                                                        addressExtObj_1.setValue(extension.id, extension.value);
                                                    }));
                                                }
                                                dao.transactionInsert(addressExtObj_1);
                                                dao.transactionInsert(addressObj);
                                            }
                                        }
                                        catch (e_3_1) {
                                            e_3 = { error: e_3_1 };
                                        }
                                        finally {
                                            try {
                                                if (_k && !_k.done && (_c = _j.return))
                                                    _c.call(_j);
                                            }
                                            finally {
                                                if (e_3)
                                                    throw e_3.error;
                                            }
                                        }
                                        try {
                                            for (_l = __values(data.phoneChannels), _m = _l.next(); !_m.done; _m = _l.next()) {
                                                tel = _m.value;
                                                tel_clientID = uuid.v4();
                                                telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                                                telObj.setValue('ClientID', tel_clientID);
                                                telObj.setValue('CustomerClientID', clientID);
                                                telObj.setValue('TelType', tel.usageType);
                                                telObj.setValue('Tel', tel.phoneNumber);
                                                telObj.setValue('DataSource', tel.isChangeable ? 'APP' : 'OPUS');
                                                //save email extension data
                                                telExtensions = tel.extensions;
                                                telExtObj_1.setValue('ClientID', tel_clientID);
                                                telExtObj_1.setValue('CustomerClientID', clientID);
                                                console.log('telExtensions', telExtensions);
                                                if (telExtensions != null) {
                                                    telExtensions.forEach(( /**
                                                     * @param {?} extension
                                                     * @return {?}
                                                     */function (extension) {
                                                        telExtObj_1.setValue(extension.id, extension.value);
                                                    }));
                                                }
                                                dao.transactionInsert(telExtObj_1);
                                                dao.transactionInsert(telObj);
                                            }
                                        }
                                        catch (e_4_1) {
                                            e_4 = { error: e_4_1 };
                                        }
                                        finally {
                                            try {
                                                if (_m && !_m.done && (_d = _l.return))
                                                    _d.call(_l);
                                            }
                                            finally {
                                                if (e_4)
                                                    throw e_4.error;
                                            }
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_a = _e.return))
                                            _a.call(_e);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                DeleteCustomerClientIds = resp.deletedPersonIds.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) {
                                    /** @type {?} */
                                    var filtered = customerResp_1.Body.filter(( /**
                                     * @param {?} y
                                     * @return {?}
                                     */function (y) { return y.CustomerID === x; }));
                                    return filtered.length > 0 ? filtered[0].ClientID : null;
                                })).filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x !== null; }));
                                if (DeleteCustomerClientIds.length > 0) {
                                    customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                                    emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                                    addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                                    telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                                    emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                                    addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                                    telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                                    customerObj.addRestriction(new InRestriction('CustomerID', resp.deletedPersonIds));
                                    emailObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    addressObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    telObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    emailExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    addressExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    telExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                                    dao.transactionDelete(customerObj);
                                    dao.transactionDelete(emailObj);
                                    dao.transactionDelete(addressObj);
                                    dao.transactionDelete(telObj);
                                    dao.transactionDelete(emailExtObj_1);
                                    dao.transactionDelete(addressExtObj_1);
                                    dao.transactionDelete(telExtObj_1);
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 4: return [2 /*return*/, _o.sent()];
                            case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        CustomerSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        CustomerSync.prototype.getSequentialIDNeeded = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var num, dao, customerObj, resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                num = 0;
                                dao = this.DaoFactory.getDefaultDao();
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                if (!(dao && customerObj))
                                    return [3 /*break*/, 2];
                                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query customer obj:', resp);
                                this.tmpPushData = resp.Body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.CustomerID === null; }));
                                num = this.tmpPushData.length;
                                _a.label = 2;
                            case 2: return [2 /*return*/, num];
                        }
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        CustomerSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_5, _a, dataWithoutIds, dao, _b, _c, _d, index, data, customerObj;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (!(this.tmpPushData != null))
                                    return [3 /*break*/, 2];
                                dataWithoutIds = this.tmpPushData;
                                dao = this.DaoFactory.getDefaultDao();
                                try {
                                    for (_b = __values(dataWithoutIds.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        _d = __read(_c.value, 2), index = _d[0], data = _d[1];
                                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                                        customerObj.setValue("CustomerID", ids[index]);
                                        customerObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                        dao.transactionUpdate(customerObj);
                                    }
                                }
                                catch (e_5_1) {
                                    e_5 = { error: e_5_1 };
                                }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return))
                                            _a.call(_b);
                                    }
                                    finally {
                                        if (e_5)
                                            throw e_5.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 1:
                                _e.sent();
                                this.tmpPushData = null;
                                _e.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
        CustomerSync.prototype.getPushData = /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_6, _a, datas, dao, customerObj, resp, customerArray, clientIDArray, telObj, emailObj, addressObj, telResp, emailResp, addressResp, _loop_1, customerArray_1, customerArray_1_1, customer;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                datas = [];
                                dao = this.DaoFactory.getDefaultDao();
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                                if (!(dao && customerObj))
                                    return [3 /*break*/, 5];
                                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                            case 1:
                                resp = _b.sent();
                                console.log('query customer obj:', resp);
                                if (!(resp.Body.length > 0))
                                    return [3 /*break*/, 5];
                                customerArray = resp.Body;
                                clientIDArray = customerArray.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.ClientID; }));
                                dao = this.DaoFactory.getDefaultDao();
                                telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Tel');
                                emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Email');
                                addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Address');
                                telObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                                emailObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                                addressObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                                return [4 /*yield*/, dao.queryByTable(telObj).toPromise()];
                            case 2:
                                telResp = _b.sent();
                                return [4 /*yield*/, dao.queryByTable(emailObj).toPromise()];
                            case 3:
                                emailResp = _b.sent();
                                return [4 /*yield*/, dao.queryByTable(addressObj).toPromise()];
                            case 4:
                                addressResp = _b.sent();
                                _loop_1 = function (customer) {
                                    customer.Tel = telResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.CustomerClientID == customer.ClientID; }));
                                    customer.Email = emailResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.CustomerClientID == customer.ClientID; }));
                                    customer.Address = addressResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.CustomerClientID == customer.ClientID; }));
                                    datas.push(customer);
                                };
                                try {
                                    for (customerArray_1 = __values(customerArray), customerArray_1_1 = customerArray_1.next(); !customerArray_1_1.done; customerArray_1_1 = customerArray_1.next()) {
                                        customer = customerArray_1_1.value;
                                        _loop_1(customer);
                                    }
                                }
                                catch (e_6_1) {
                                    e_6 = { error: e_6_1 };
                                }
                                finally {
                                    try {
                                        if (customerArray_1_1 && !customerArray_1_1.done && (_a = customerArray_1.return))
                                            _a.call(customerArray_1);
                                    }
                                    finally {
                                        if (e_6)
                                            throw e_6.error;
                                    }
                                }
                                _b.label = 5;
                            case 5: return [2 /*return*/, datas];
                        }
                    });
                });
            };
        return CustomerSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MessageSync = /** @class */ (function () {
        function MessageSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        MessageSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        MessageSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'MESSAGE';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        MessageSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnJson, dao, messageObj, resp, messageArray, updatedIDs;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Do check data clientTime > frontendTime;
                                //TODO: Add extension column
                                returnJson = [];
                                dao = this.DaoFactory.getDefaultDao();
                                messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                                if (!(dao && messageObj))
                                    return [3 /*break*/, 2];
                                messageObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(messageObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query message obj:', resp);
                                if (resp.Body.length > 0) {
                                    messageArray = resp.Body;
                                    updatedIDs = messageArray.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.Status === 'Reading'; })).map(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.MessageID; }));
                                    returnJson = updatedIDs;
                                }
                                _a.label = 2;
                            case 2:
                                if (!this.PushAOP)
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                            case 3:
                                returnJson = _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/, returnJson];
                        }
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        MessageSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, e_2, _b, dao, messageObj, messageExtObj, messageIDList, _c, _d, data, isExist, clientID, _e, _f, id;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _g.sent();
                                _g.label = 2;
                            case 2:
                                if (!(resp.messageInfos.length > 0 || resp.deletedMessageIds.length > 0))
                                    return [3 /*break*/, 5];
                                dao = this.DaoFactory.getDefaultDao();
                                messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                                messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                                return [4 /*yield*/, dao.queryByTable(messageObj).toPromise().then(( /**
                                         * @param {?} res
                                         * @return {?}
                                         */function (res) { return res.Body; }))];
                            case 3:
                                messageIDList = _g.sent();
                                messageIDList = messageIDList.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.MessageID; }));
                                try {
                                    for (_c = __values(resp.messageInfos), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        data = _d.value;
                                        isExist = messageIDList.includes(data.messageID);
                                        messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                                        messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                                        messageObj.setValue("MessageID", data.messageID);
                                        messageObj.setValue("MessageCategory", data.messageCategory);
                                        messageObj.setValue("MessageType", data.messageType);
                                        messageObj.setValue("Title", data.title);
                                        messageObj.setValue("Description", data.description);
                                        messageObj.setValue("Arguments", data.arguments);
                                        messageObj.setValue("Status", data.status);
                                        messageObj.setValue("IsClick", data.isClick ? "Y" : "N");
                                        messageObj.setValue("IsPopup", data.isPopup ? "Y" : "N");
                                        messageObj.setValue("IsShow", data.isShow ? "Y" : "N");
                                        messageObj.setValue("LinkStatus", data.linkStatus);
                                        messageObj.setValue("MessageTime", dateFns.parseISO(data.messageTime).getTime());
                                        messageObj.setValue("ClientTime", Date.now());
                                        messageObj.setValue("IsDelete", 'N');
                                        messageObj.setValue("DataTime", dateFns.parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                        //Extension
                                        messageExtObj.setValue("MessageID", data.messageID);
                                        if (isExist) {
                                            messageObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                                            messageExtObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                                            dao.transactionUpdate(messageObj);
                                            dao.transactionUpdate(messageExtObj);
                                        }
                                        else {
                                            clientID = uuid.v4();
                                            messageObj.setValue("ClientID", clientID);
                                            messageExtObj.setValue("ClientID", clientID);
                                            dao.transactionInsert(messageObj);
                                            dao.transactionInsert(messageExtObj);
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_a = _c.return))
                                            _a.call(_c);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                try {
                                    for (_e = __values(resp.deletedMessageIds), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        id = _f.value;
                                        messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                                        messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                                        messageObj.addRestriction(new EqualRestriction('MessageID', [id]));
                                        messageExtObj.addRestriction(new EqualRestriction('MessageID', [id]));
                                        dao.transactionDelete(messageObj);
                                        dao.transactionDelete(messageExtObj);
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return))
                                            _b.call(_e);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 4: return [2 /*return*/, _g.sent()];
                            case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        MessageSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        MessageSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        MessageSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return MessageSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalExpectedSync = /** @class */ (function () {
        function GoalExpectedSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        GoalExpectedSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'GOAL_EXPECTED';
            };
        /**
         * @return {?}
         */
        GoalExpectedSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @param {?} state
         * @return {?}
         */
        GoalExpectedSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        GoalExpectedSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnJson, pushData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Do check data clientTime > frontendTime;
                                //TODO: Add extension column
                                returnJson = [];
                                return [4 /*yield*/, this.getPushData(frontendTime)];
                            case 1:
                                pushData = _a.sent();
                                pushData.forEach(( /**
                                 * @param {?} GoalExpectedObj
                                 * @return {?}
                                 */function (GoalExpectedObj) {
                                    /** @type {?} */
                                    var Recruitments = [];
                                    for (var i = 1; i <= 4; i++) {
                                        /** @type {?} */
                                        var Recruitment = {
                                            "Qarter": i,
                                            "Value": GoalExpectedObj['Q' + i]
                                        };
                                        Recruitments.push(Recruitment);
                                    }
                                    /** @type {?} */
                                    var jsonObj = {
                                        "DataYear": GoalExpectedObj.DataYear,
                                        "FYFC": GoalExpectedObj.FYFC,
                                        "ANP": GoalExpectedObj.ANP,
                                        "Recruitments": Recruitments,
                                        "synchDetail": {
                                            "lastUpdateDateTimeBackend": new Date(GoalExpectedObj.DataTime).toISOString()
                                        },
                                        "extensions": []
                                    };
                                    returnJson.push(jsonObj);
                                }));
                                if (!this.PushAOP)
                                    return [3 /*break*/, 3];
                                return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                            case 2:
                                returnJson = _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, returnJson];
                        }
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        GoalExpectedSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var dao_1, GoalSettingExpected_1, GoalSettingExpected_ext_1, GoalExpectedDatas;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.GoalExpected && resp.GoalExpected.length > 0))
                                    return [3 /*break*/, 4];
                                dao_1 = this.DaoFactory.getDefaultDao();
                                //dao = new ClientCustomDao(dao);
                                GoalSettingExpected_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                                GoalSettingExpected_ext_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected_Extension');
                                console.log('GoalSettingExpected', GoalSettingExpected_1);
                                if (resp.GoalExpected != null) {
                                    GoalExpectedDatas = resp.GoalExpected;
                                    console.log('GoalExpectedDatas', GoalExpectedDatas);
                                    GoalExpectedDatas.forEach(( /**
                                     * @param {?} GoalExpectedData
                                     * @return {?}
                                     */function (GoalExpectedData) {
                                        var e_1, _a;
                                        console.log('GoalExpectedData', GoalExpectedData);
                                        //delete the data that needs to be updated 
                                        /** @type {?} */
                                        var ToDeleteGoalExpectedYears = GoalExpectedData.DataYear;
                                        console.log('ToDeleteGoalExpectedYears', ToDeleteGoalExpectedYears);
                                        if (ToDeleteGoalExpectedYears != null) {
                                            GoalSettingExpected_1.addRestriction(new EqualRestriction('DataYear', [ToDeleteGoalExpectedYears]));
                                            dao_1.transactionDelete(GoalSettingExpected_1);
                                            //update all date 
                                            /** @type {?} */
                                            var clientID = uuid.v4();
                                            GoalSettingExpected_1 = _this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                                            GoalSettingExpected_1.setValue("ClientID", clientID);
                                            GoalSettingExpected_1.setValue("DataYear", GoalExpectedData.DataYear);
                                            GoalSettingExpected_1.setValue("FYFC", GoalExpectedData.FYFC);
                                            GoalSettingExpected_1.setValue("ANP", GoalExpectedData.ANP);
                                            GoalSettingExpected_1.setValue("DataTime", dateFns.parseISO(GoalExpectedData.synchDetail.lastUpdateDateTimeBackend).getTime());
                                            GoalSettingExpected_1.setValue("ClientTime", Date.now());
                                            GoalSettingExpected_ext_1.setValue("ClientID", clientID);
                                            /** @type {?} */
                                            var Recruitments = GoalExpectedData.Recruitments;
                                            try {
                                                for (var Recruitments_1 = __values(Recruitments), Recruitments_1_1 = Recruitments_1.next(); !Recruitments_1_1.done; Recruitments_1_1 = Recruitments_1.next()) {
                                                    var data = Recruitments_1_1.value;
                                                    GoalSettingExpected_1.setValue("Q" + data.Qarter, data.Value);
                                                }
                                            }
                                            catch (e_1_1) {
                                                e_1 = { error: e_1_1 };
                                            }
                                            finally {
                                                try {
                                                    if (Recruitments_1_1 && !Recruitments_1_1.done && (_a = Recruitments_1.return))
                                                        _a.call(Recruitments_1);
                                                }
                                                finally {
                                                    if (e_1)
                                                        throw e_1.error;
                                                }
                                            }
                                            console.log("GoalSettingExpected 2", GoalSettingExpected_1);
                                            dao_1.transactionInsert(GoalSettingExpected_1);
                                            dao_1.transactionInsert(GoalSettingExpected_ext_1);
                                        }
                                    }));
                                }
                                return [4 /*yield*/, dao_1.runTransaction().toPromise()];
                            case 3: return [2 /*return*/, _a.sent()];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        GoalExpectedSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        GoalExpectedSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
        GoalExpectedSync.prototype.getPushData = /**
         * @private
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    var datas, dao, GoalExpectedObj, resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                datas = [];
                                dao = this.DaoFactory.getDefaultDao();
                                GoalExpectedObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Goal_Setting_Expected');
                                if (!(dao && GoalExpectedObj))
                                    return [3 /*break*/, 2];
                                GoalExpectedObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                                return [4 /*yield*/, dao.queryByTable(GoalExpectedObj).toPromise()];
                            case 1:
                                resp = _a.sent();
                                console.log('query GoalExpected obj:', resp);
                                if (resp.Body.length > 0) {
                                    // let GoalExpectedArray = resp.Body;
                                    datas = resp.Body;
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/, datas];
                        }
                    });
                });
            };
        return GoalExpectedSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSync = /** @class */ (function () {
        function GoalSync(apiFactory, dispatcher, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.apiFactory = apiFactory;
            this.dispatcher = dispatcher;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        GoalSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        GoalSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'GOAL';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        GoalSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        GoalSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var saveGoal, saveResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.Goals.length > 0))
                                    return [3 /*break*/, 4];
                                saveGoal = this.apiFactory.getAPI("saveGoal");
                                (( /** @type {?} */(saveGoal))).GoalDatas = resp.Goals;
                                return [4 /*yield*/, this.dispatcher.dispatch(saveGoal).toPromise()];
                            case 3:
                                saveResp = _a.sent();
                                return [2 /*return*/, saveResp];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        GoalSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        GoalSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        GoalSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return GoalSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActualSync = /** @class */ (function () {
        function ActualSync(apiFactory, dispatcher, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.apiFactory = apiFactory;
            this.dispatcher = dispatcher;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        ActualSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        ActualSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'ACTUAL';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        ActualSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        ActualSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var saveActual, saveResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.Actual.length > 0))
                                    return [3 /*break*/, 4];
                                saveActual = this.apiFactory.getAPI("saveActual");
                                (( /** @type {?} */(saveActual))).ActualDatas = resp.Actual;
                                return [4 /*yield*/, this.dispatcher.dispatch(saveActual).toPromise()];
                            case 3:
                                saveResp = _a.sent();
                                return [2 /*return*/, saveResp];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ActualSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        ActualSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        ActualSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return ActualSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanSync = /** @class */ (function () {
        function AgencyPlanSync(apiFactory, dispatcher, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.apiFactory = apiFactory;
            this.dispatcher = dispatcher;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        AgencyPlanSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        AgencyPlanSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'AGENCY_PLAN';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        AgencyPlanSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        AgencyPlanSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var saveAgencyPlan, saveResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.AgencyPlans.length > 0))
                                    return [3 /*break*/, 4];
                                saveAgencyPlan = this.apiFactory.getAPI("saveAgencyPlan");
                                (( /** @type {?} */(saveAgencyPlan))).AgencyPlanDatas = resp.AgencyPlans;
                                return [4 /*yield*/, this.dispatcher.dispatch(saveAgencyPlan).toPromise()];
                            case 3:
                                saveResp = _a.sent();
                                return [2 /*return*/, saveResp];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        AgencyPlanSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        AgencyPlanSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        AgencyPlanSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return AgencyPlanSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressSync = /** @class */ (function () {
        function ProgressSync(apiFactory, dispatcher, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.apiFactory = apiFactory;
            this.dispatcher = dispatcher;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        ProgressSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        ProgressSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'PROGRESS';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        ProgressSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        ProgressSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var saveProgress, saveResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.Progress.length > 0))
                                    return [3 /*break*/, 4];
                                saveProgress = this.apiFactory.getAPI("saveProgress");
                                (( /** @type {?} */(saveProgress))).ProgressDatas = resp.Progress;
                                return [4 /*yield*/, this.dispatcher.dispatch(saveProgress).toPromise()];
                            case 3:
                                saveResp = _a.sent();
                                return [2 /*return*/, saveResp];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ProgressSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        ProgressSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        ProgressSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return ProgressSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var YearConfigSync = /** @class */ (function () {
        function YearConfigSync(apiFactory, dispatcher, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.apiFactory = apiFactory;
            this.dispatcher = dispatcher;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        YearConfigSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        YearConfigSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'YEAR_CONFIG';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        YearConfigSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        YearConfigSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var saveYearConfig, saveResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!(resp.Configurations.length > 0))
                                    return [3 /*break*/, 4];
                                saveYearConfig = this.apiFactory.getAPI("saveYearConfig");
                                (( /** @type {?} */(saveYearConfig))).FirstUseAPP = resp.FirstUseAPP;
                                (( /** @type {?} */(saveYearConfig))).yearConfigs = resp.Configurations;
                                return [4 /*yield*/, this.dispatcher.dispatch(saveYearConfig).toPromise()];
                            case 3:
                                saveResp = _a.sent();
                                return [2 /*return*/, saveResp];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        YearConfigSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        YearConfigSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        YearConfigSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return YearConfigSync;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileCodeSync = /** @class */ (function () {
        function ProfileCodeSync(DaoFactory, PushAOP, PullAOP) {
            if (PushAOP === void 0) {
                PushAOP = null;
            }
            if (PullAOP === void 0) {
                PullAOP = null;
            }
            this.DaoFactory = DaoFactory;
            this.PushAOP = PushAOP;
            this.PullAOP = PullAOP;
            this.state = FUNC_STATE.AVAILABLE;
        }
        /**
         * @return {?}
         */
        ProfileCodeSync.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this.state;
            };
        /**
         * @return {?}
         */
        ProfileCodeSync.prototype.getName = /**
         * @return {?}
         */
            function () {
                return 'PROFILE_CODE';
            };
        /**
         * @param {?} frontendTime
         * @return {?}
         */
        ProfileCodeSync.prototype.getPushJson = /**
         * @param {?} frontendTime
         * @return {?}
         */
            function (frontendTime) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, []];
                    });
                });
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        ProfileCodeSync.prototype.pullData = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1, _a, e_2, _b, dao, profileCodeObj, _c, _d, data, _e, _f, code;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (!this.PullAOP)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.PullAOP.execute(resp)];
                            case 1:
                                resp = _g.sent();
                                _g.label = 2;
                            case 2:
                                dao = this.DaoFactory.getDao("Profile");
                                profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
                                if (!(resp.datalist.length > 0))
                                    return [3 /*break*/, 4];
                                dao.transactionDelete(profileCodeObj);
                                try {
                                    for (_c = __values(resp.datalist), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        data = _d.value;
                                        try {
                                            for (_e = __values(data.values), _f = _e.next(); !_f.done; _f = _e.next()) {
                                                code = _f.value;
                                                profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
                                                profileCodeObj.setValue("TypeID", data.datalistId);
                                                profileCodeObj.setValue("Code", code.value);
                                                profileCodeObj.setValue("MappingID", code.label);
                                                profileCodeObj.setValue("Orders", code.orders);
                                                profileCodeObj.setValue("Arguments", code.arguments);
                                                profileCodeObj.setValue("ValidityPeriod", dateFns.endOfDay(new Date(code.validityPeriod)).getTime());
                                                dao.transactionInsert(profileCodeObj);
                                            }
                                        }
                                        catch (e_2_1) {
                                            e_2 = { error: e_2_1 };
                                        }
                                        finally {
                                            try {
                                                if (_f && !_f.done && (_b = _e.return))
                                                    _b.call(_e);
                                            }
                                            finally {
                                                if (e_2)
                                                    throw e_2.error;
                                            }
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_a = _c.return))
                                            _a.call(_c);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                }
                                return [4 /*yield*/, dao.runTransaction().toPromise()];
                            case 3: return [2 /*return*/, _g.sent()];
                            case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                        }
                    });
                });
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ProfileCodeSync.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
            };
        /**
         * @return {?}
         */
        ProfileCodeSync.prototype.getSequentialIDNeeded = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, -1];
                    });
                });
            };
        /**
         * @param {?} ids
         * @return {?}
         */
        ProfileCodeSync.prototype.setSequentialID = /**
         * @param {?} ids
         * @return {?}
         */
            function (ids) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
        return ProfileCodeSync;
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
    var CustomRouterReuseStrategy = /** @class */ (function () {
        function CustomRouterReuseStrategy() {
            this.handlers = {};
        }
        /**
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.deleteRouteSnapshot = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('delete snapshot!!');
                Object.keys(this.handlers).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    /** @type {?} */
                    var componentRef = null;
                    if (_this.handlers[key])
                        componentRef = _this.handlers[key]['componentRef'];
                    if (componentRef) {
                        componentRef.destroy();
                    }
                }));
                this.handlers = {};
            };
        /**
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.shouldDetach = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                console.debug('shouldDetach======>', route);
                return this.isReuseRoute(route);
            };
        /**
         * @param {?} route
         * @param {?} handle
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.store = /**
         * @param {?} route
         * @param {?} handle
         * @return {?}
         */
            function (route, handle) {
                console.debug('store======>', route, handle);
                console.log("this.getRouteUrl:", this.getRouteUrl(route));
                this.handlers[this.getRouteUrl(route)] = handle;
            };
        /**
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.shouldAttach = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                // console.debug('shouldAttach======>', route);
                return this.isReuseRoute(route) && (!!this.handlers[this.getRouteUrl(route)]);
            };
        /**
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.retrieve = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                // console.debug('retrieve======>', route);
                if (!this.handlers[this.getRouteUrl(route)]) {
                    return null;
                }
                return this.handlers[this.getRouteUrl(route)];
            };
        /**
         * @param {?} future
         * @param {?} curr
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.shouldReuseRoute = /**
         * @param {?} future
         * @param {?} curr
         * @return {?}
         */
            function (future, curr) {
                // console.debug('shouldReuseRoute======>', future, curr);
                return future.routeConfig === curr.routeConfig;
            };
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.getRouteUrl = /**
         * @private
         * @param {?} route
         * @return {?}
         */
            function (route) {
                /** @type {?} */
                var next = this.getTruthRoute(route);
                /** @type {?} */
                var segments = [];
                while (next) {
                    segments.push(next.url.join('/'));
                    next = next.parent;
                }
                /** @type {?} */
                var /** @type {?} */ url = segments
                    .filter(( /**
             * @param {?} i
             * @return {?}
             */function (i) {
                    return i;
                }))
                    .reverse()
                    .join('/');
                return url;
            };
        /**
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.getTruthRoute = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                /** @type {?} */
                var next = route;
                while (next.firstChild) {
                    next = next.firstChild;
                }
                return next;
            };
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        CustomRouterReuseStrategy.prototype.isReuseRoute = /**
         * @private
         * @param {?} route
         * @return {?}
         */
            function (route) {
                //default is true;
                /** @type {?} */
                var shouldReuse = true;
                /** @type {?} */
                var next = route;
                while (next) {
                    if (next.data.hasOwnProperty("cache")) {
                        shouldReuse = next.data.cache;
                    }
                    next = next.firstChild;
                }
                console.debug('isReuseRoute', shouldReuse);
                return shouldReuse;
            };
        return CustomRouterReuseStrategy;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ErrorsHandler = /** @class */ (function () {
        function ErrorsHandler(APIFactory$$1, dispatcher, deviceService, settingService, injector, APP_CONFIG) {
            var _this = this;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.deviceService = deviceService;
            this.settingService = settingService;
            this.injector = injector;
            this.APP_CONFIG = APP_CONFIG;
            this.isDebug = false;
            this.settingService.getDebugMode().subscribe(( /**
             * @param {?} debug
             * @return {?}
             */function (debug) {
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
                return __awaiter(this, void 0, void 0, function () {
                    var env, APIFactory$$1, dispatcher, stack, logErrorAPI;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                env = this.APP_CONFIG.ENV;
                                APIFactory$$1 = this.getAPIFactory();
                                dispatcher = this.getAPIDispatcher();
                                // Log the error anyway
                                console.error(error);
                                if (this.isDebug)
                                    alert('error:' + error.message);
                                return [4 /*yield*/, stacktrace.fromError(error, { offline: true })];
                            case 1:
                                stack = _a.sent();
                                stack = stack.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.source; }));
                                logErrorAPI = APIFactory$$1.getAPI("LogError");
                                if (logErrorAPI) {
                                    (( /** @type {?} */(logErrorAPI))).time = new Date();
                                    (( /** @type {?} */(logErrorAPI))).message = error.message;
                                    (( /** @type {?} */(logErrorAPI))).stack = stack;
                                    (( /** @type {?} */(logErrorAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
                                    (( /** @type {?} */(logErrorAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
                                    dispatcher.dispatch(logErrorAPI).toPromise().then(( /**
                                     * @param {?} resp
                                     * @return {?}
                                     */function (resp) {
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
            { type: i0.Injectable }
        ];
        ErrorsHandler.ctorParameters = function () {
            return [
                { type: APIFactory },
                { type: APIDispatch },
                { type: DeviceService },
                { type: SettingService },
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ConfigToken,] }] }
            ];
        };
        return ErrorsHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaService = /** @class */ (function () {
        function MetaService(injector, AOPTokenService$$1, APIFactory$$1, dispatcher, DaoFactory$$1, profileCodeService) {
            this.injector = injector;
            this.AOPTokenService = AOPTokenService$$1;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
            this.DaoFactory = DaoFactory$$1;
            this.profileCodeService = profileCodeService;
        }
        //Get Meta setting by id
        //Get Meta setting by id
        /**
         * @param {?} id
         * @return {?}
         */
        MetaService.prototype.getMetaJson =
            //Get Meta setting by id
            /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var configAPI = this.APIFactory.getAPI("getMetaConfig");
                (( /** @type {?} */(configAPI))).configName = id;
                return this.dispatcher.dispatch(configAPI).toPromise();
            };
        MetaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        MetaService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: AOPTokenService },
                { type: APIFactory },
                { type: APIDispatch },
                { type: DaoFactory },
                { type: ProfileCodeService }
            ];
        };
        /** @nocollapse */ MetaService.ngInjectableDef = i0.defineInjectable({ factory: function MetaService_Factory() { return new MetaService(i0.inject(i0.INJECTOR), i0.inject(AOPTokenService), i0.inject(APIFactory), i0.inject(APIDispatch), i0.inject(DaoFactory), i0.inject(ProfileCodeService)); }, token: MetaService, providedIn: "root" });
        return MetaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ DisplayMetaController = /** @class */ (function () {
        function DisplayMetaController() {
        }
        /**
         * @param {?} column
         * @param {?} value
         * @param {?} groupId
         * @param {?} index
         * @param {?} data
         * @param {?} vaildResult
         * @return {?}
         */
        DisplayMetaController.prototype.onValueChange = /**
         * @param {?} column
         * @param {?} value
         * @param {?} groupId
         * @param {?} index
         * @param {?} data
         * @param {?} vaildResult
         * @return {?}
         */
            function (column, value, groupId, index, data, vaildResult) {
            };
        /**
         * @param {?} data
         * @param {?} vaildResult
         * @return {?}
         */
        DisplayMetaController.prototype.onValidateAll = /**
         * @param {?} data
         * @param {?} vaildResult
         * @return {?}
         */
            function (data, vaildResult) {
                return true;
            };
        /**
         * @param {?} type
         * @param {?} id
         * @param {?} data
         * @return {?}
         */
        DisplayMetaController.prototype.btnClick = /**
         * @param {?} type
         * @param {?} id
         * @param {?} data
         * @return {?}
         */
            function (type, id, data) {
            };
        return DisplayMetaController;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var APIExecutor = /** @class */ (function () {
        function APIExecutor(errorHandler, APIFactory$$1, dispatcher) {
            this.errorHandler = errorHandler;
            this.APIFactory = APIFactory$$1;
            this.dispatcher = dispatcher;
        }
        /**
         * @param {?} config
         * @param {?=} params
         * @return {?}
         */
        APIExecutor.prototype.getData = /**
         * @param {?} config
         * @param {?=} params
         * @return {?}
         */
            function (config, params) {
                if (params === void 0) {
                    params = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var API_1, resp, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                API_1 = this.APIFactory.getAPI(config.source.read);
                                if (params)
                                    Object.keys(params).forEach(( /**
                                     * @param {?} key
                                     * @return {?}
                                     */function (key) {
                                        API_1[key] = params[key];
                                    }));
                                return [4 /*yield*/, this.dispatcher.dispatch(API_1).toPromise()];
                            case 1:
                                resp = _a.sent();
                                return [2 /*return*/, resp["Body"][0]];
                            case 2:
                                error_1 = _a.sent();
                                this.errorHandler.handleError(new APPError("F00802", error_1.message));
                                return [2 /*return*/, null];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} config
         * @param {?} data
         * @param {?=} params
         * @return {?}
         */
        APIExecutor.prototype.saveData = /**
         * @param {?} config
         * @param {?} data
         * @param {?=} params
         * @return {?}
         */
            function (config, data, params) {
                if (params === void 0) {
                    params = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var API_2, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                API_2 = this.APIFactory.getAPI(config.source.write);
                                if (params)
                                    Object.keys(params).forEach(( /**
                                     * @param {?} key
                                     * @return {?}
                                     */function (key) {
                                        API_2[key] = params[key];
                                    }));
                                API_2["Data"] = data;
                                return [4 /*yield*/, this.dispatcher.dispatch(API_2).toPromise()];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                error_2 = _a.sent();
                                this.errorHandler.handleError(new APPError("F00803", error_2.message));
                                return [2 /*return*/, null];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        APIExecutor.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        APIExecutor.ctorParameters = function () {
            return [
                { type: i0.ErrorHandler },
                { type: APIFactory },
                { type: APIDispatch }
            ];
        };
        /** @nocollapse */ APIExecutor.ngInjectableDef = i0.defineInjectable({ factory: function APIExecutor_Factory() { return new APIExecutor(i0.inject(i0.ErrorHandler), i0.inject(APIFactory), i0.inject(APIDispatch)); }, token: APIExecutor, providedIn: "root" });
        return APIExecutor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputExecutor = /** @class */ (function (_super) {
        __extends(InputExecutor, _super);
        function InputExecutor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} config
         * @param {?} params
         * @return {?}
         */
        InputExecutor.prototype.getData = /**
         * @param {?} config
         * @param {?} params
         * @return {?}
         */
            function (config, params) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, null];
                    });
                });
            };
        /**
         * @param {?} config
         * @param {?} data
         * @param {?} params
         * @return {?}
         */
        InputExecutor.prototype.saveData = /**
         * @param {?} config
         * @param {?} data
         * @param {?} params
         * @return {?}
         */
            function (config, data, params) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (config.source.write)
                            return [2 /*return*/, _super.prototype.saveData.call(this, config, data, params)];
                        else
                            return [2 /*return*/, null];
                        return [2 /*return*/];
                    });
                });
            };
        InputExecutor.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ InputExecutor.ngInjectableDef = i0.defineInjectable({ factory: function InputExecutor_Factory() { return new InputExecutor(i0.inject(i0.ErrorHandler), i0.inject(APIFactory), i0.inject(APIDispatch)); }, token: InputExecutor, providedIn: "root" });
        return InputExecutor;
    }(APIExecutor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaColumn = /** @class */ (function () {
        function MetaColumn(id, name, type) {
            this.id = null;
            this.name = null;
            this.type = null;
            this.optionRef = null;
            this.showTitle = null;
            this.required = null;
            this.readonly = null;
            this.inline = null;
            this.grid = null;
            this.order = null;
            this.default = null;
            this.maxLength = null;
            this.placeholder = null;
            //For Group
            this.groupColumns = [];
            this.groupRows = [];
            this.icon = null;
            this.canAdd = null;
            this.maxNumber = null;
            this.showDefaultOption = null;
            this.rowTitle = null;
            this.id = id;
            this.name = name;
            this.type = type;
        }
        return MetaColumn;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaConfig = /** @class */ (function () {
        function MetaConfig() {
            this.source = null;
            this.Rows = [];
            this.Columns = [];
            this.Footer = [];
        }
        /**
         * @param {?} columnList
         * @param {?} groupList
         * @return {?}
         */
        MetaConfig.prototype.setColumn = /**
         * @param {?} columnList
         * @param {?} groupList
         * @return {?}
         */
            function (columnList, groupList) {
                var _this = this;
                console.log("MetaConfig setColumn:", columnList, groupList);
                // Set Column MetaConfig
                columnList = columnList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return _this.createColumnObject(x); }));
                if (groupList.length > 0) {
                    /** @type {?} */
                    var colsInGroup_1 = _.flatMap(groupList, ( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.columns; }));
                    groupList = groupList.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return _this.createGroupColumnObject(x, columnList); }));
                    columnList = columnList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return !colsInGroup_1.includes(x.id); }));
                    groupList.forEach(( /**
                     * @param {?} ele
                     * @return {?}
                     */function (ele) {
                        ele.groupRows = _this.convertColumns2Row(ele.groupColumns);
                        columnList.splice(ele.order, 0, ele);
                    }));
                    columnList.forEach(( /**
                     * @param {?} ele
                     * @param {?} index
                     * @return {?}
                     */function (ele, index) {
                        ele.order = index;
                    }));
                }
                this.Columns = columnList;
                this.Rows = this.convertColumns2Row(columnList);
            };
        /**
         * @param {?} footerList
         * @return {?}
         */
        MetaConfig.prototype.setFooter = /**
         * @param {?} footerList
         * @return {?}
         */
            function (footerList) {
                this.Footer = footerList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    return new MetaColumn(x.id, x.name, x.type);
                }));
            };
        /**
         * @private
         * @param {?} column
         * @return {?}
         */
        MetaConfig.prototype.createColumnObject = /**
         * @private
         * @param {?} column
         * @return {?}
         */
            function (column) {
                /** @type {?} */
                var columnObj = new MetaColumn(column.id, column.name, column.type);
                columnObj.optionRef = column.ref;
                columnObj.showTitle = column.showTitle;
                columnObj.required = column.required;
                columnObj.readonly = column.readonly;
                columnObj.grid = column.grid;
                columnObj.inline = column.inline;
                columnObj.order = column.order;
                columnObj.default = column.default;
                columnObj.maxLength = column.maxLength;
                columnObj.groupColumns = column.groupColumns;
                columnObj.icon = column.icon;
                columnObj.canAdd = column.canAdd;
                columnObj.maxNumber = column.maxNumber;
                columnObj.placeholder = column.placeholder;
                columnObj.showDefaultOption = column.showDefaultOption;
                columnObj.rowTitle = column.rowTitle;
                return columnObj;
            };
        /**
         * @private
         * @param {?} groupColumn
         * @param {?} coulmnList
         * @return {?}
         */
        MetaConfig.prototype.createGroupColumnObject = /**
         * @private
         * @param {?} groupColumn
         * @param {?} coulmnList
         * @return {?}
         */
            function (groupColumn, coulmnList) {
                /** @type {?} */
                var columnIDs = groupColumn.columns;
                /** @type {?} */
                var groupColumnObj = this.createColumnObject(groupColumn);
                groupColumnObj.groupColumns = columnIDs.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    return coulmnList.filter(( /**
                     * @param {?} y
                     * @return {?}
                     */function (y) { return y.id === x; }))[0];
                }));
                return groupColumnObj;
            };
        /**
         * @private
         * @param {?} columnList
         * @return {?}
         */
        MetaConfig.prototype.convertColumns2Row = /**
         * @private
         * @param {?} columnList
         * @return {?}
         */
            function (columnList) {
                console.log("MetaConfig convertColumns2Row:", columnList);
                /** @type {?} */
                var tmpArray = [];
                /** @type {?} */
                var rowArray = [];
                for (var i = 0; i < columnList.length; i++) {
                    tmpArray.push(columnList[i]);
                    if (columnList[i].inline === false || i === (columnList.length - 1)) {
                        rowArray.push(__spread(tmpArray));
                        tmpArray = [];
                    }
                }
                return rowArray;
            };
        return MetaConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaSource = /** @class */ (function () {
        function MetaSource(type, read, write) {
            this.type = type;
            this.read = read;
            this.write = write;
        }
        return MetaSource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaGrid = /** @class */ (function () {
        function MetaGrid(pc, nb, pad, mobile) {
            this.pc = pc;
            this.nb = nb ? nb : pc;
            this.pad = pad ? pad : pc;
            this.mobile = mobile ? mobile : pc;
        }
        return MetaGrid;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultMetaParser = /** @class */ (function () {
        function DefaultMetaParser() {
        }
        /**
         * @param {?} json
         * @return {?}
         */
        DefaultMetaParser.prototype.parse = /**
         * @param {?} json
         * @return {?}
         */
            function (json) {
                console.log("Default Meta Parser parse:", json);
                json.columns = this.fillDefaultColumnSetting(json.columns);
                /** @type {?} */
                var group = json.group ? json.group : [];
                group = this.fillDefaultColumnSetting(group);
                /** @type {?} */
                var metaConfig = new MetaConfig();
                console.log("DefaultMetaParser parse:", json, group);
                metaConfig.source = this.getSource(json);
                metaConfig.setColumn(json.columns, group);
                metaConfig.setFooter(json.footer);
                console.log("After Parse:", metaConfig);
                return metaConfig;
            };
        /**
         * @private
         * @param {?} json
         * @return {?}
         */
        DefaultMetaParser.prototype.getSource = /**
         * @private
         * @param {?} json
         * @return {?}
         */
            function (json) {
                try {
                    /** @type {?} */
                    var type = json.source.type;
                    /** @type {?} */
                    var read = json.source.read;
                    /** @type {?} */
                    var write = json.source.write;
                    read = read ? read : null;
                    write = write ? write : null;
                    return new MetaSource(type, read, write);
                }
                catch (error) {
                    throw new APPError("F00801", error.message);
                }
            };
        /**
         * @private
         * @param {?} columnList
         * @return {?}
         */
        DefaultMetaParser.prototype.fillDefaultColumnSetting = /**
         * @private
         * @param {?} columnList
         * @return {?}
         */
            function (columnList) {
                var _this = this;
                return columnList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return _this._defaultSetting(x); }));
            };
        /**
         * @private
         * @param {?} column
         * @return {?}
         */
        DefaultMetaParser.prototype._defaultSetting = /**
         * @private
         * @param {?} column
         * @return {?}
         */
            function (column) {
                /** @type {?} */
                var grid = column.grid;
                if (!grid) {
                    grid = new MetaGrid(12);
                }
                else if (typeof (grid) === 'number')
                    grid = new MetaGrid(grid);
                else {
                    grid = new MetaGrid(grid.pc, grid.nb, grid.pad, grid.mobile);
                }
                return Object.assign({
                    type: 'Group',
                    ref: '',
                    showTitle: true,
                    required: false,
                    readonly: false,
                    inline: false,
                    order: 0,
                    default: '',
                    maxLength: 999,
                    showDefaultOption: true,
                    groupColumns: [],
                    icon: null,
                    canAdd: false,
                    maxNumber: 999,
                    placeholder: '',
                    rowTitle: null
                }, column, { grid: grid });
            };
        DefaultMetaParser.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DefaultMetaParser.ngInjectableDef = i0.defineInjectable({ factory: function DefaultMetaParser_Factory() { return new DefaultMetaParser(); }, token: DefaultMetaParser, providedIn: "root" });
        return DefaultMetaParser;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MetaValid = /** @class */ (function () {
        function MetaValid(colID, isValid, message) {
            this.colID = colID;
            this.isValid = isValid;
            this.message = message;
        }
        return MetaValid;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ BaseMetaComponent = /** @class */ (function () {
        function BaseMetaComponent(metaService, parser, executor) {
            this.metaService = metaService;
            this.parser = parser;
            this.executor = executor;
            this.metaID = null;
            this.metaLoaded = false;
            this.metaConfig = null;
            this._data = null;
            this.metaID = this.getMetaID();
        }
        /**
         * @return {?}
         */
        BaseMetaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log("MetaComponent ngOninit!");
                this.init();
            };
        /**
         * @private
         * @return {?}
         */
        BaseMetaComponent.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var metaJSON, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, this.metaService.getMetaJson(this.metaID)];
                            case 1:
                                metaJSON = _a.sent();
                                this.metaConfig = this.parser.parse(metaJSON);
                                return [4 /*yield*/, this.loadData()];
                            case 2:
                                _a.sent();
                                this.metaLoaded = true;
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _a.sent();
                                throw new APPError("F00800", error_1.message);
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @protected
         * @return {?}
         */
        BaseMetaComponent.prototype.loadData = /**
         * @protected
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var executed_data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.executor.getData(this.metaConfig, this.getMetaParams())];
                            case 1:
                                executed_data = _a.sent();
                                if (executed_data) {
                                    this._data = executed_data;
                                    this.onDataUpdated();
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @protected
         * @return {?}
         */
        BaseMetaComponent.prototype.waitUntilMetaLoaded = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    /** @type {?} */
                    var checkInterval = setInterval(( /**
                     * @return {?}
                     */function () {
                        if (_this.metaLoaded) {
                            clearInterval(checkInterval);
                            res();
                        }
                    }), 100);
                }));
            };
        /**
         * @return {?}
         */
        BaseMetaComponent.prototype.isMetaLoaded = /**
         * @return {?}
         */
            function () {
                return this.metaLoaded;
            };
        return BaseMetaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ DisplayMetaComponent = /** @class */ (function (_super) {
        __extends(DisplayMetaComponent, _super);
        function DisplayMetaComponent(metaService, profileCodeService, parser, executor) {
            var _this = _super.call(this, metaService, parser, executor) || this;
            _this.profileCodeService = profileCodeService;
            return _this;
        }
        /**
         * @return {?}
         */
        DisplayMetaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log("DisplayMetaComponent ngOninit!");
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @protected
         * @return {?}
         */
        DisplayMetaComponent.prototype.onDataUpdated = /**
         * @protected
         * @return {?}
         */
            function () {
                this.convertCodeToDisplay();
            };
        /**
         * @private
         * @return {?}
         */
        DisplayMetaComponent.prototype.convertCodeToDisplay = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var needToConvert = this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.type === 'Label' && !!x.optionRef; }));
                needToConvert.forEach(( /**
                 * @param {?} col
                 * @return {?}
                 */function (col) {
                    if (_this._data[col.id])
                        _this._data[col.id] = _this.profileCodeService.convertCode2Text(col.optionRef, _this._data[col.id]);
                }));
                this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.type === 'Group'; })).forEach(( /**
                 * @param {?} group
                 * @return {?}
                 */function (group) {
                    /** @type {?} */
                    var colsNeedConvert = group.groupColumns.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.type === 'Label' && !!x.optionRef; }));
                    console.log("colsNeedConvert:", colsNeedConvert);
                    if (colsNeedConvert.length > 0 && _this._data[group.id]) {
                        _this._data[group.id].forEach(( /**
                         * @param {?} groupData
                         * @param {?} index
                         * @return {?}
                         */function (groupData, index) {
                            /** @type {?} */
                            var extendedObj = colsNeedConvert.map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) {
                                return {
                                    key: x.id,
                                    value: _this.profileCodeService.convertCode2Text(x.optionRef, _this._data[group.id][index][x.id])
                                };
                            })).reduce(( /**
                             * @param {?} acc
                             * @param {?} cur
                             * @return {?}
                             */function (acc, cur) { acc[cur.key] = cur.value; return acc; }), {});
                            console.log("extendedObj:", extendedObj);
                            groupData = Object.assign(groupData, extendedObj);
                        }));
                    }
                }));
            };
        return DisplayMetaComponent;
    }(BaseMetaComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ FormMetaComponent = /** @class */ (function (_super) {
        __extends(FormMetaComponent, _super);
        function FormMetaComponent(metaService, profileCodeService, parser, executor) {
            var _this = _super.call(this, metaService, parser, executor) || this;
            _this.profileCodeService = profileCodeService;
            _this.validationResult = new ValidationResult();
            return _this;
        }
        /**
         * @return {?}
         */
        FormMetaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log("FormMetaComponent ngOninit!");
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @param {?} column
         * @param {?} value
         * @param {?=} groupID
         * @param {?=} index
         * @return {?}
         */
        FormMetaComponent.prototype.onChange = /**
         * @param {?} column
         * @param {?} value
         * @param {?=} groupID
         * @param {?=} index
         * @return {?}
         */
            function (column, value, groupID, index) {
                if (groupID === void 0) {
                    groupID = null;
                }
                if (index === void 0) {
                    index = -1;
                }
                console.log("onChange:", column, value, groupID, index);
                /** @type {?} */
                var isGroup = (groupID && index >= 0);
                /** @type {?} */
                var columnID = isGroup ? column : (column + index.toString());
                /** @type {?} */
                var validResp = this.valid(column, value, isGroup);
                console.log("validResp:", validResp);
                if (validResp)
                    this.validationResult.deleteError(columnID);
                else
                    this.validationResult.setErrorMap(columnID, validResp.message);
                this.onValueChange(column, value, groupID, index);
            };
        /**
         * @private
         * @param {?} column
         * @param {?} value
         * @param {?=} isGroup
         * @return {?}
         */
        FormMetaComponent.prototype.valid = /**
         * @private
         * @param {?} column
         * @param {?} value
         * @param {?=} isGroup
         * @return {?}
         */
            function (column, value, isGroup) {
                if (isGroup === void 0) {
                    isGroup = false;
                }
                console.log("valid:", column, value, isGroup);
                /** @type {?} */
                var resp = new MetaValid(column, true, "");
                /** @type {?} */
                var col;
                if (isGroup) {
                    /** @type {?} */
                    var groupCol = this.metaConfig.Columns
                        .filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.type === 'Group'; }))
                        .map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.groupColumns; }));
                    col = _.flatten(groupCol).filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.id === column; }))[0];
                }
                else
                    col = this.metaConfig.Columns.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.id === column; }))[0];
                console.log("valid col:", col);
                if (col.type === 'Input') {
                    if (col.required && !value) {
                        resp.isValid = false;
                        resp.message = col.id + "_required";
                    }
                }
                else if (col.type === 'Select') {
                    if (col.required && (value === '' || !value)) {
                        resp.isValid = false;
                        resp.message = col.id + "_required";
                    }
                }
                return resp;
            };
        /**
         * @private
         * @return {?}
         */
        FormMetaComponent.prototype.validAll = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                //Column Result
                /** @type {?} */
                var validResult = this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.type !== "Group"; }))
                    .map(( /**
             * @param {?} col
             * @return {?}
             */function (col) { return _this.valid(col.id, _this._data[col.id]); }))
                    .filter(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return !x.isValid; }));
                this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.type === "Group"; }))
                    .forEach(( /**
             * @param {?} group
             * @return {?}
             */function (group) {
                    /** @type {?} */
                    var groupId = group.id;
                    _this._data[groupId].forEach(( /**
                     * @param {?} ele
                     * @param {?} index
                     * @return {?}
                     */function (ele, index) {
                        validResult = validResult.concat(group.groupColumns.map(( /**
                         * @param {?} col
                         * @return {?}
                         */function (col) {
                            /** @type {?} */
                            var validResp = _this.valid(col.id, ele[col.id], true);
                            validResp.colID = col.id + index.toString();
                            return validResp;
                        })).filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return !x.isValid; })));
                    }));
                }));
                console.log("validAll result:", validResult);
                return validResult;
            };
        /**
         * @param {?} type
         * @param {?} id
         * @return {?}
         */
        FormMetaComponent.prototype.onBtnClick = /**
         * @param {?} type
         * @param {?} id
         * @return {?}
         */
            function (type, id) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, resp;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this._data[id + 'Btn'])
                                    this._data[id + 'Btn'].disable = true;
                                if (!(type === 'submit'))
                                    return [3 /*break*/, 4];
                                this.validationResult.clearErrorMap();
                                result = this.validAll();
                                result.forEach(( /**
                                 * @param {?} err
                                 * @return {?}
                                 */function (err) {
                                    _this.validationResult.setErrorMap(err.colID, err.message);
                                }));
                                if (!(this.onValidateAll() && result.length === 0))
                                    return [3 /*break*/, 2];
                                //CALL SAVE API
                                return [4 /*yield*/, this.saveData()];
                            case 1:
                                resp = _a.sent();
                                console.log("save data resp:", resp);
                                this.btnClick(type, id);
                                if (this._data[id + 'Btn'])
                                    this._data[id + 'Btn'].disable = true;
                                return [3 /*break*/, 3];
                            case 2:
                                this._data[id + 'Btn'].disable = false;
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                this.btnClick(type, id);
                                _a.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @protected
         * @return {?}
         */
        FormMetaComponent.prototype.saveData = /**
         * @protected
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.executor.saveData(this.metaConfig, this._data, this.getMetaParams())];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            };
        /**
         * @param {?} groupName
         * @param {?} index
         * @return {?}
         */
        FormMetaComponent.prototype.onGroupRemove = /**
         * @param {?} groupName
         * @param {?} index
         * @return {?}
         */
            function (groupName, index) {
                var _this = this;
                this._data[groupName] = this._data[groupName].filter(( /**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */function (x, i) { return i != index; }));
                /** @type {?} */
                var group_col = this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.id === groupName; }))[0].groupColumns;
                group_col.forEach(( /**
                 * @param {?} col
                 * @return {?}
                 */function (col) {
                    _this.validationResult.deleteError(col.id + index.toString());
                }));
            };
        /**
         * @param {?} groupName
         * @return {?}
         */
        FormMetaComponent.prototype.onGroupAdd = /**
         * @param {?} groupName
         * @return {?}
         */
            function (groupName) {
                /** @type {?} */
                var group_col = this.metaConfig.Columns.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.id === groupName; }))[0].groupColumns;
                /** @type {?} */
                var keys = group_col.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.id; }));
                console.log("keys:", keys);
                /** @type {?} */
                var newObj = keys.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    /** @type {?} */
                    var y = {};
                    /** @type {?} */
                    var defaultVal = group_col.filter(( /**
                     * @param {?} z
                     * @return {?}
                     */function (z) { return z.id === x; }))[0].default;
                    y[x] = defaultVal;
                    return y;
                })).reduce(( /**
                 * @param {?} acc
                 * @param {?} current
                 * @return {?}
                 */function (acc, current) {
                    return Object.assign(acc, current);
                }), {});
                console.log("GroupAdd newObj:", newObj);
                this._data[groupName] = __spread(this._data[groupName], [newObj]);
            };
        /**
         * @protected
         * @return {?}
         */
        FormMetaComponent.prototype.onDataUpdated = /**
         * @protected
         * @return {?}
         */
            function () {
                this.addBtnAttr();
                this.fetchOptions();
            };
        /**
         * @private
         * @return {?}
         */
        FormMetaComponent.prototype.fetchOptions = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.metaConfig.Columns
                    .filter(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return x.optionRef && x.optionRef.length > 0; }))
                    .map(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return _this.createOption(x); }))
                    .forEach(( /**
             * @param {?} option
             * @return {?}
             */function (option) {
                    _this._data[option.key] = option.val;
                }));
                /** @type {?} */
                var groupCol = this.metaConfig.Columns
                    .filter(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return x.type === 'Group'; }))
                    .map(( /**
             * @param {?} x
             * @return {?}
             */function (x) {
                    return x.groupColumns.filter(( /**
                     * @param {?} y
                     * @return {?}
                     */function (y) { return y.optionRef && y.optionRef.length > 0; }));
                }));
                /** @type {?} */
                var groupOpt = _.flatMap(groupCol, ( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    return x.map(( /**
                     * @param {?} y
                     * @return {?}
                     */function (y) { return _this.createOption(y); }));
                }));
                groupOpt.forEach(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
                    _this._data[option.key] = option.val;
                }));
            };
        /**
         * @private
         * @return {?}
         */
        FormMetaComponent.prototype.addBtnAttr = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.metaConfig.Footer.forEach(( /**
                 * @param {?} ele
                 * @return {?}
                 */function (ele) {
                    if (ele.type === 'submit' || ele.type === 'button')
                        _this._data[ele.id + "Btn"] = Object.assign({
                            disable: false
                        }, ele);
                }));
            };
        /**
         * @private
         * @param {?} column
         * @return {?}
         */
        FormMetaComponent.prototype.createOption = /**
         * @private
         * @param {?} column
         * @return {?}
         */
            function (column) {
                var _this = this;
                /** @type {?} */
                var resp = {
                    key: column.id + 'Option',
                    val: []
                };
                /** @type {?} */
                var codeArray = this.profileCodeService.getCodeArray(column.optionRef);
                if (column.type === 'Select')
                    resp.val = codeArray
                        .map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return new SelectOption$1(x.getCode(), _this.profileCodeService.convertCode2Text(column.optionRef, x.getCode())); }));
                else
                    resp.val = codeArray.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        return {
                            id: x.getCode(),
                            name: _this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()),
                            arguments: JSON.parse(x.getArguments())
                        };
                    }));
                return resp;
            };
        return FormMetaComponent;
    }(BaseMetaComponent));

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidController = /** @class */ (function () {
        function ValidController() {
        }
        /**
         * @param {?} bean
         * @return {?}
         */
        ValidController.addBean = /**
         * @param {?} bean
         * @return {?}
         */
            function (bean) {
                if (this.beanPool.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.name === bean.name; })).length === 0)
                    this.beanPool.push(bean);
            };
        /**
         * @param {?} data
         * @param {?} name
         * @return {?}
         */
        ValidController.validObject = /**
         * @param {?} data
         * @param {?} name
         * @return {?}
         */
            function (data, name) {
                try {
                    console.log("validObject:", name, data);
                    /** @type {?} */
                    var bean = this.getBean(name);
                    if (bean) {
                        /** @type {?} */
                        var validResult = bean.validSelf(data);
                        if (validResult.length > 0) {
                            this.errorHandler(validResult, name);
                        }
                        return validResult.length === 0;
                    }
                    else {
                        throw new Error("Cannot find Bean " + name + ".");
                    }
                }
                catch (error) {
                    console.error('Valid Object error', error);
                    return true;
                }
            };
        /**
         * @param {?} objectName
         * @param {?} propertyName
         * @param {?} condition
         * @return {?}
         */
        ValidController.addCondition = /**
         * @param {?} objectName
         * @param {?} propertyName
         * @param {?} condition
         * @return {?}
         */
            function (objectName, propertyName, condition) {
                /** @type {?} */
                var bean = this.getBean(objectName);
                /** @type {?} */
                var property = bean.getOrCreateProperty(propertyName);
                console.log("addCondition:", bean, property);
                property.addCondition(condition);
            };
        /**
         * @private
         * @param {?} name
         * @return {?}
         */
        ValidController.getBean = /**
         * @private
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (this.beanPool.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.name === name; })).length > 0)
                    return this.beanPool.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.name === name; }))[0];
                else
                    return null;
            };
        /**
         * @private
         * @param {?} validResult
         * @param {?} name
         * @return {?}
         */
        ValidController.errorHandler = /**
         * @private
         * @param {?} validResult
         * @param {?} name
         * @return {?}
         */
            function (validResult, name) {
                console.error(validResult.reduce(( /**
                 * @param {?} x
                 * @param {?} y
                 * @return {?}
                 */function (x, y) { return x + "\n" + y; }), "Class " + name + " valid error:"));
            };
        ValidController.beanPool = [];
        return ValidController;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidProperty = /** @class */ (function () {
        function ValidProperty(name) {
            this.name = name;
            this.conditionList = [];
        }
        Object.defineProperty(ValidProperty.prototype, "name", {
            get: /**
             * @return {?}
             */ function () {
                return this._name;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} condition
         * @return {?}
         */
        ValidProperty.prototype.addCondition = /**
         * @param {?} condition
         * @return {?}
         */
            function (condition) {
                this.conditionList.push(condition);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ValidProperty.prototype.validProperty = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                return this.conditionList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !x.valid(value); })).map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.getErrorMsg(_this.name); }));
            };
        return ValidProperty;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidBean = /** @class */ (function () {
        function ValidBean(name, type) {
            this.name = name;
            this.type = type;
            this.propertyList = [];
        }
        Object.defineProperty(ValidBean.prototype, "name", {
            get: /**
             * @return {?}
             */ function () {
                return this._name;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidBean.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @return {?}
         */
        ValidBean.prototype.getOrCreateProperty = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var filtered = this.propertyList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.name === name; }));
                if (filtered.length > 0) {
                    return filtered[0];
                }
                else {
                    /** @type {?} */
                    var property = new ValidProperty(name);
                    this.addProperty(property);
                    return property;
                }
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ValidBean.prototype.validSelf = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var validResult = _.flatMap(this.propertyList, ( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.validProperty(data[x.name]); }));
                console.log("validSelf result:", validResult);
                return validResult;
            };
        /**
         * @private
         * @param {?} property
         * @return {?}
         */
        ValidBean.prototype.addProperty = /**
         * @private
         * @param {?} property
         * @return {?}
         */
            function (property) {
                this.propertyList.push(property);
            };
        return ValidBean;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} name
     * @return {?}
     */
    function Bean(name) {
        return ( /**
         * @template T
         * @param {?} constructor
         * @return {?}
         */function Bean(constructor) {
            ValidController.addBean(new ValidBean(name, constructor));
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.beanName = name;
                    return _this;
                }
                return class_1;
            }(constructor));
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ValidType = {
        Required: 0,
        Max: 1,
        Min: 2,
    };
    ValidType[ValidType.Required] = 'Required';
    ValidType[ValidType.Max] = 'Max';
    ValidType[ValidType.Min] = 'Min';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequiredCondition = /** @class */ (function () {
        function RequiredCondition() {
            this.baseTypes = ['string', 'undefined', 'number', 'boolean'];
            this.type = ValidType.Required;
        }
        /**
         * @return {?}
         */
        RequiredCondition.prototype.getType = /**
         * @return {?}
         */
            function () {
                return this.type;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        RequiredCondition.prototype.valid = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                console.log('RequiredCondition valid:', value, this.baseTypes.indexOf(typeof value) === -1);
                /** @type {?} */
                var isBaseType = this.baseTypes.indexOf(typeof value) !== -1 || value === null;
                if (isBaseType)
                    return value !== null && value !== undefined;
                else if (value instanceof Array)
                    return value.length > 0;
                else if (typeof value === 'object')
                    return ValidController.validObject(value, value.beanName);
            };
        /**
         * @param {?} column
         * @return {?}
         */
        RequiredCondition.prototype.getErrorMsg = /**
         * @param {?} column
         * @return {?}
         */
            function (column) {
                return column + " is " + this.value + " but expect required.";
            };
        return RequiredCondition;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} propertyName
     * @return {?}
     */
    function Required(target, propertyName) {
        ValidController.addBean(new ValidBean(target.constructor.name, target));
        ValidController.addCondition(target.constructor.name, propertyName, new RequiredCondition());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} type
     * @return {?}
     */
    function Valid(type) {
        console.log("valid type:", type);
        return ( /**
         * @param {?} target
         * @param {?} propertyName
         * @param {?} propertyDesciptor
         * @return {?}
         */function (target, propertyName, propertyDesciptor) {
            /** @type {?} */
            var method = propertyDesciptor.value;
            propertyDesciptor.value = ( /**
             * @param {...?} args
             * @return {?}
             */function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log('pool:', ValidController.beanPool);
                /** @type {?} */
                var result = method.apply(this, args);
                console.log('valid result: ', result);
                if (rxjs.isObservable(result)) {
                    console.log('isObservable(result)');
                    return handleObservable(result);
                }
                else if (result instanceof Promise) {
                    console.log('result instanceof Promise');
                    return handlePromise(result);
                }
                else {
                    console.log('not Observable, not instanceof Promise');
                    validObject(result);
                    return result;
                }
            });
            return propertyDesciptor;
        });
    }
    /**
     * @param {?} result
     * @return {?}
     */
    function handleObservable(result) {
        return new rxjs.Observable(( /**
         * @param {?} observer
         * @return {?}
         */function (observer) {
            result.subscribe({
                next: /**
                 * @param {?} x
                 * @return {?}
                 */ function (x) {
                    validObject(x);
                    observer.next(x);
                },
                error: /**
                 * @param {?} err
                 * @return {?}
                 */ function (err) { observer.error(err); },
                complete: /**
                 * @return {?}
                 */ function () { observer.complete(); }
            });
        }));
    }
    /**
     * @param {?} result
     * @return {?}
     */
    function handlePromise(result) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, result];
                    case 1:
                        resolved = _a.sent();
                        validObject(resolved);
                        return [2 /*return*/, resolved];
                }
            });
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function validObject(data) {
        console.log("Valid.ts validObject:", data);
        if (data instanceof Array)
            data.forEach(( /**
             * @param {?} x
             * @return {?}
             */function (x) { return validObject(x); }));
        else
            ValidController.validObject(data, data.beanName);
    }

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

    exports.CoreModule = CoreModule;
    exports.StringUtils = StringUtils;
    exports.DateUtils = DateUtils;
    exports.PageInfo = PageInfo;
    exports.ValidationResult = ValidationResult;
    exports.NumberUtils = NumberUtils;
    exports.TableUtils = TableUtils;
    exports.Language = Language;
    exports.TranslatePipe = TranslatePipe;
    exports.TranslateService = TranslateService;
    exports.InitialService = InitialService;
    exports.ConfigTask = ConfigTask;
    exports.DataSyncTask = DataSyncTask;
    exports.DeviceTask = DeviceTask;
    exports.ConfigToken = ConfigToken;
    exports.GoalSettingInterfaceToken = GoalSettingInterfaceToken;
    exports.configTaskToken = configTaskToken;
    exports.registerAPITaskToken = registerAPITaskToken;
    exports.dataSyncTaskToken = dataSyncTaskToken;
    exports.customTaskToken = customTaskToken;
    exports.fetchLanguageFinishToken = fetchLanguageFinishToken;
    exports.fetchSettingFinishToken = fetchSettingFinishToken;
    exports.fetchConfigFinishToken = fetchConfigFinishToken;
    exports.registerDataSyncFuncToken = registerDataSyncFuncToken;
    exports.checkTimeoutToken = checkTimeoutToken;
    exports.timeoutActionToken = timeoutActionToken;
    exports.checkPermissionToken = checkPermissionToken;
    exports.authActionToken = authActionToken;
    exports.authRouteToken = authRouteToken;
    exports.AfterLoginToken = AfterLoginToken;
    exports.LoadingAppToken = LoadingAppToken;
    exports.LoginMgrToken = LoginMgrToken;
    exports.PushIDMgrToken = PushIDMgrToken;
    exports.checkForRootToken = checkForRootToken;
    exports.RestHeaderToken = RestHeaderToken;
    exports.LanguageAccessToken = LanguageAccessToken;
    exports.LanguageUpdateToken = LanguageUpdateToken;
    exports.NetworkChangeToken = NetworkChangeToken;
    exports.FontSizeAccessToken = FontSizeAccessToken;
    exports.changeFontSizeToken = changeFontSizeToken;
    exports.showRuleToken = showRuleToken;
    exports.initialFinishToken = initialFinishToken;
    exports.NotificationProviderToken = NotificationProviderToken;
    exports.GoalSettingNotStartFirstMessageActionToken = GoalSettingNotStartFirstMessageActionToken;
    exports.GoalSettingNotStartMessageActionToken = GoalSettingNotStartMessageActionToken;
    exports.NeedGoalSettingMessageActionToken = NeedGoalSettingMessageActionToken;
    exports.GoalPromoSettingMessageActionToken = GoalPromoSettingMessageActionToken;
    exports.GoalAutoApproveMessageActionToken = GoalAutoApproveMessageActionToken;
    exports.GoalAutoApproveLeaderMessageActionToken = GoalAutoApproveLeaderMessageActionToken;
    exports.ApproveGoalIsRejectMessageActionToken = ApproveGoalIsRejectMessageActionToken;
    exports.ApproveGoalIsApproveMessageActionToken = ApproveGoalIsApproveMessageActionToken;
    exports.PendingReviewMessageActionToken = PendingReviewMessageActionToken;
    exports.SupervisorHaveChangeAgentMessageActionToken = SupervisorHaveChangeAgentMessageActionToken;
    exports.SupervisorHaveChangeOldMessageActionToken = SupervisorHaveChangeOldMessageActionToken;
    exports.SupervisorHaveChangeNewMessageActionToken = SupervisorHaveChangeNewMessageActionToken;
    exports.GoalAutoRejectMessageActionToken = GoalAutoRejectMessageActionToken;
    exports.GoalAutoRejectLeaderMessageActionToken = GoalAutoRejectLeaderMessageActionToken;
    exports.ActivityArriveTenPointMessageActionToken = ActivityArriveTenPointMessageActionToken;
    exports.ActivityArriveTwentyPointMessageActionToken = ActivityArriveTwentyPointMessageActionToken;
    exports.ActivityNotArriveTwentyPointMessageActionToken = ActivityNotArriveTwentyPointMessageActionToken;
    exports.ReminderEventsMessageActionToken = ReminderEventsMessageActionToken;
    exports.DataPrivacyProtectionMessageActionToken = DataPrivacyProtectionMessageActionToken;
    exports.OvertimeMessageActionToken = OvertimeMessageActionToken;
    exports.AutoDeleteMessageActionToken = AutoDeleteMessageActionToken;
    exports.OfflineMessageActionToken = OfflineMessageActionToken;
    exports.VersionCheckMessageActionToken = VersionCheckMessageActionToken;
    exports.TimoutMessageActionToken = TimoutMessageActionToken;
    exports.DataCollectionMessageActionToken = DataCollectionMessageActionToken;
    exports.ContactPermissionActionToken = ContactPermissionActionToken;
    exports.yearConfigExtensionDataToken = yearConfigExtensionDataToken;
    exports.goalSettingExtensionDataToken = goalSettingExtensionDataToken;
    exports.agencyPlanExtensionDataToken = agencyPlanExtensionDataToken;
    exports.actionDirectiveTaskToken = actionDirectiveTaskToken;
    exports.AOPTokenService = AOPTokenService;
    exports.APIInvokeMethod = APIInvokeMethod;
    exports.APIFactory = APIFactory;
    exports.APIResponse = APIResponse;
    exports.APIRequest = APIRequest;
    exports.APIDispatch = APIDispatch;
    exports.SettingAPI = SettingAPI;
    exports.SettingUpdateAPI = SettingUpdateAPI;
    exports.getAgencyPlanAPI = getAgencyPlanAPI;
    exports.getActualAPI = getActualAPI;
    exports.getGoalAPI = getGoalAPI;
    exports.getYearConfigAPI = getYearConfigAPI;
    exports.getProgressAPI = getProgressAPI;
    exports.GetDeviceInfoAPI = GetDeviceInfoAPI;
    exports.LoginAPI = LoginAPI;
    exports.LogoutAPI = LogoutAPI;
    exports.DashboardGetMessageListAPI = DashboardGetMessageListAPI;
    exports.DashboardUpdateMessageStatusAPI = DashboardUpdateMessageStatusAPI;
    exports.ChangeMessageStatusAPI = ChangeMessageStatusAPI$1;
    exports.pushApproveGoalAPI = pushApproveGoalAPI;
    exports.OfflineAuthAPI = OfflineAuthAPI;
    exports.pushGoalSettingDataAPI = pushGoalSettingDataAPI;
    exports.GetOtherParameterAPI = GetOtherParameterAPI;
    exports.UnbindDeviceAPI = UnbindDeviceAPI;
    exports.UpdateTimeListAPI = UpdateTimeListAPI;
    exports.SyncPushAPI = SyncPushAPI;
    exports.ClientCustomDao = ClientCustomDao;
    exports.DaoFactory = DaoFactory;
    exports.SQLCommand = SQLCommand;
    exports.SQLiteColumn = SQLiteColumn;
    exports.SQLiteDao = SQLiteDao;
    exports.SQLiteDatabase = SQLiteDatabase;
    exports.SQLiteResponse = SQLiteResponse;
    exports.SQLiteTable = SQLiteTable;
    exports.AndCompoundRestriction = AndCompoundRestriction;
    exports.EqualRestriction = EqualRestriction;
    exports.GreaterOrEqualRestriction = GreaterOrEqualRestriction;
    exports.GreaterRestriction = GreaterRestriction;
    exports.InRestriction = InRestriction;
    exports.LessOrEqualRestriction = LessOrEqualRestriction;
    exports.LikeRestriction = LikeRestriction;
    exports.LimitRestriction = LimitRestriction;
    exports.NotEqualRestriction = NotEqualRestriction;
    exports.NotNullRestriction = NotNullRestriction;
    exports.NullRestriction = NullRestriction;
    exports.ORCompoundRestriction = ORCompoundRestriction;
    exports.OffsetRestriction = OffsetRestriction;
    exports.OrderByRestriction = OrderByRestriction;
    exports.Address = Address;
    exports.ContactItem = ContactItem;
    exports.Phone = Phone;
    exports.CordovaDeviceDao = CordovaDeviceDao;
    exports.DeviceService = DeviceService;
    exports.DeviceFactory = DeviceFactory;
    exports.LoginInfo = LoginInfo;
    exports.LoginResponse = LoginResponse;
    exports.LOGIN_TYPE = LOGIN_TYPE;
    exports.DefaultLoginMgr = DefaultLoginMgr;
    exports.DefaultLoadingApp = DefaultLoadingApp;
    exports.AuthObject = AuthObject;
    exports.AuthError = AuthError;
    exports.ActionDirective = ActionDirective;
    exports.ACTION_STATUS = ACTION_STATUS;
    exports.ActionEvent = ActionEvent;
    exports.ActionService = ActionService;
    exports.AuthService = AuthService;
    exports.CheckPermissionService = CheckPermissionService;
    exports.TimeoutService = TimeoutService;
    exports.RouteObject = RouteObject;
    exports.FUNC_STATE = FUNC_STATE;
    exports.CalendarSync = CalendarSync;
    exports.ContactSync = ContactSync;
    exports.CustomerSync = CustomerSync;
    exports.MessageSync = MessageSync;
    exports.GoalExpectedSync = GoalExpectedSync;
    exports.GoalSync = GoalSync;
    exports.ActualSync = ActualSync;
    exports.AgencyPlanSync = AgencyPlanSync;
    exports.ProgressSync = ProgressSync;
    exports.YearConfigSync = YearConfigSync;
    exports.ProfileCodeSync = ProfileCodeSync;
    exports.DataSyncService = DataSyncService;
    exports.VersionCheckService = VersionCheckService;
    exports.Setting = Setting;
    exports.ViewDateChange = ViewDateChange;
    exports.ChangeAction = ChangeAction;
    exports.ProfileCode = ProfileCode;
    exports.versionInfo = versionInfo;
    exports.LanguageCode = LanguageCode;
    exports.SelectOption = SelectOption$1;
    exports.SuccessStatus = SuccessStatus;
    exports.GoalExtension = GoalExtension;
    exports.SubmitGoalData = SubmitGoalData;
    exports.SubmitGoalPlan = SubmitGoalPlan;
    exports.SubmitGoalPlanInfo = SubmitGoalPlanInfo;
    exports.SubmitGoalSettingValue = SubmitGoalSettingValue;
    exports.SubmitGoalInfo = SubmitGoalInfo;
    exports.YESNO = YESNO;
    exports.TIMEBASE = TIMEBASE;
    exports.SUBMITGOALTYPE = SUBMITGOALTYPE;
    exports.PERFORMANCETYPE = PERFORMANCETYPE;
    exports.APPMODE = APPMODE;
    exports.ProfileCodeService = ProfileCodeService;
    exports.SettingService = SettingService;
    exports.LogService = LogService;
    exports.CustomRouterReuseStrategy = CustomRouterReuseStrategy;
    exports.AppRouter = AppRouter;
    exports.ErrorsHandler = ErrorsHandler;
    exports.APPError = APPError;
    exports.MetaService = MetaService;
    exports.DisplayMetaController = DisplayMetaController;
    exports.APIExecutor = APIExecutor;
    exports.InputExecutor = InputExecutor;
    exports.DefaultMetaParser = DefaultMetaParser;
    exports.MetaColumn = MetaColumn;
    exports.MetaConfig = MetaConfig;
    exports.MetaGrid = MetaGrid;
    exports.MetaSource = MetaSource;
    exports.MetaValid = MetaValid;
    exports.BaseMetaComponent = BaseMetaComponent;
    exports.DisplayMetaComponent = DisplayMetaComponent;
    exports.FormMetaComponent = FormMetaComponent;
    exports.TranslatePricePipe = TranslatePricePipe;
    exports.TranslatePriceService = TranslatePriceService;
    exports.NotificationMgr = NotificationMgr;
    exports.NotificationObject = NotificationObject;
    exports.NotificationProvider = NotificationProvider;
    exports.NotificationType = NotificationType;
    exports.NotificationCategory = NotificationCategory;
    exports.SqliteExecutorComponent = SqliteExecutorComponent;
    exports.NumberFormatPipe = NumberFormatPipe;
    exports.Bean = Bean;
    exports.Required = Required;
    exports.Valid = Valid;
    exports.ɵe = APIDispatch;
    exports.ɵbe = APIFactory;
    exports.ɵm = defaultHeader;
    exports.ɵy = DeviceAPIAccess;
    exports.ɵg = MockAPIAccess;
    exports.ɵi = RestfulAPIAccess;
    exports.ɵh = SQLiteAPIAccess;
    exports.ɵbn = ActionDirective;
    exports.ɵbu = ActionService;
    exports.ɵbo = AuthService;
    exports.ɵbj = DefaultLoginMgr;
    exports.ɵs = LoginTokenStore;
    exports.ɵbr = CheckPermissionService;
    exports.ɵz = TimeoutService;
    exports.ɵl = DeviceFactory;
    exports.ɵk = DeviceService;
    exports.ɵby = DaoFactory;
    exports.ɵf = ConfigToken;
    exports.ɵc = LanguageAccessToken;
    exports.ɵd = LanguageUpdateToken;
    exports.ɵj = RestHeaderToken;
    exports.ɵbp = authActionToken;
    exports.ɵbq = authRouteToken;
    exports.ɵbs = checkPermissionToken;
    exports.ɵba = checkTimeoutToken;
    exports.ɵbb = timeoutActionToken;
    exports.ɵn = ConfigToken;
    exports.ɵo = LoginMgrToken;
    exports.ɵq = NotificationProviderToken;
    exports.ɵp = PushIDMgrToken;
    exports.ɵr = actionDirectiveTaskToken;
    exports.ɵa = TranslatePipe;
    exports.ɵb = TranslateService;
    exports.ɵu = NotificationMgr;
    exports.ɵv = NotificationProvider;
    exports.ɵbm = NumberFormatPipe;
    exports.ɵbi = TranslatePriceService;
    exports.ɵbh = TranslatePricePipe;
    exports.ɵbk = AppRouter;
    exports.ɵbz = SettingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-core.umd.js.map