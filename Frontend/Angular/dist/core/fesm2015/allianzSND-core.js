import * as _jwt_decode from 'jwt-decode';
import { Router, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { DatePipe, CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { catchError, timeout, map, first } from 'rxjs/operators';
import { v4 } from 'uuid';
import { parseISO, endOfDay } from 'date-fns';
import { fromError } from 'stacktrace-js';
import { Injectable, ErrorHandler, Pipe, Inject, Optional, Injector, NgZone, InjectionToken, NgModule, Component, defineInjectable, inject, INJECTOR, EventEmitter, Directive, ElementRef, Input, Output, HostBinding, HostListener } from '@angular/core';
import { uniq, flatMap, flatten } from 'lodash';
import { __awaiter } from 'tslib';
import { throwError, Observable, BehaviorSubject, of, Subject, from, fromEvent, isObservable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LanguageCode {
    /**
     * @param {?} id
     * @param {?} name
     * @param {?} isDefault
     */
    constructor(id, name, isDefault) {
        this._languageID = id;
        this._name = name;
        this._isDefault = isDefault;
    }
    /**
     * @return {?}
     */
    get getLanguageID() {
        return this._languageID;
    }
    /**
     * @return {?}
     */
    get getName() {
        return this._name;
    }
    /**
     * @return {?}
     */
    get getIsDefault() {
        return this._isDefault;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class APPError extends Error {
    /**
     * @param {?} code
     * @param {?} message
     */
    constructor(code, message) {
        super(message);
        this.name = '';
        this.message = '';
        this.code = '';
        this.message = `CODE ${code} - ${message}`;
        this.name = `APPError`;
        this.code = code;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class APIFactory {
    /**
     * @private
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
        this.apiMap = new Map();
    }
    /**
     * @param {?} api
     * @return {?}
     */
    registerAPI(api) {
        this.apiMap.set(api.getAPIName(), api);
    }
    /**
     * @param {?} api
     * @return {?}
     */
    unRegisterAPI(api) {
        this.apiMap.delete(api.getAPIName());
    }
    /**
     * @param {?} apiName
     * @return {?}
     */
    getAPI(apiName) {
        /** @type {?} */
        let target = this.apiMap.get(apiName);
        if (target) {
            console.group("get API:");
            console.log("target:", target);
            /** @type {?} */
            let newInstance = Object.create(Object.getPrototypeOf(target));
            newInstance.constructor.apply(newInstance);
            newInstance = Object.assign(newInstance, target);
            console.log("new instance:", newInstance);
            console.groupEnd();
            return newInstance;
        }
        else {
            console.log(`API ${apiName} not found!`);
            this.errorHandler.handleError(new APPError("F00013", `Cannot find API ${apiName}.`));
            return null;
        }
    }
}
APIFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIFactory.ctorParameters = () => [
    { type: ErrorHandler }
];
/** @nocollapse */ APIFactory.ngInjectableDef = defineInjectable({ factory: function APIFactory_Factory() { return new APIFactory(inject(ErrorHandler)); }, token: APIFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const APIInvokeMethod = {
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
class MockAPIAccess {
    /**
     * @param {?} httpService
     * @param {?} errorHandler
     */
    constructor(httpService, errorHandler) {
        this.httpService = httpService;
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?} api
     * @return {?}
     */
    access(api) {
        return this.httpService.get(((/** @type {?} */ (api))).getMockPath()).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => { this.errorHandler.handleError(new APPError("F00016", error.message)); return throwError(error); })));
    }
}
MockAPIAccess.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MockAPIAccess.ctorParameters = () => [
    { type: HttpClient },
    { type: ErrorHandler }
];
/** @nocollapse */ MockAPIAccess.ngInjectableDef = defineInjectable({ factory: function MockAPIAccess_Factory() { return new MockAPIAccess(inject(HttpClient), inject(ErrorHandler)); }, token: MockAPIAccess, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ConfigToken = new InjectionToken('APP_CONFIG');
/** @type {?} */
const GoalSettingInterfaceToken = new InjectionToken('');
//Initial Task Token
/** @type {?} */
const configTaskToken = new InjectionToken('configTask');
/** @type {?} */
const registerAPITaskToken = new InjectionToken('registerAPITask');
/** @type {?} */
const dataSyncTaskToken = new InjectionToken('dataSyncTask');
/** @type {?} */
const customTaskToken = new InjectionToken('customTaskToken');
//Config finsish token
/** @type {?} */
const fetchLanguageFinishToken = new InjectionToken('fetchLanguageFinish');
/** @type {?} */
const fetchSettingFinishToken = new InjectionToken('fetchSettingFInish');
/** @type {?} */
const fetchConfigFinishToken = new InjectionToken('fetchConfigFinish');
//Data sync register Func Token
/** @type {?} */
const registerDataSyncFuncToken = new InjectionToken('registerDataSyncFunc');
//check timeout token
/** @type {?} */
const checkTimeoutToken = new InjectionToken('checkTimeout');
//timeout action token
/** @type {?} */
const timeoutActionToken = new InjectionToken('timeoutAction');
//check permission token
/** @type {?} */
const checkPermissionToken = new InjectionToken('checkPermission');
//auth action token
/** @type {?} */
const authActionToken = new InjectionToken('authAction');
//auth route token
/** @type {?} */
const authRouteToken = new InjectionToken('authRoute');
//after login action token
/** @type {?} */
const AfterLoginToken = new InjectionToken("AfterLogin");
//do loading token
/** @type {?} */
const LoadingAppToken = new InjectionToken("LoadingApp");
//Login Manager token
/** @type {?} */
const LoginMgrToken = new InjectionToken('LoginMgr');
//PushID Manager token
/** @type {?} */
const PushIDMgrToken = new InjectionToken('PushIDMgrToken');
//check root token
/** @type {?} */
const checkForRootToken = new InjectionToken("CheckForRoot");
//get header token
/** @type {?} */
const RestHeaderToken = new InjectionToken("RestHeader");
//access language
/** @type {?} */
const LanguageAccessToken = new InjectionToken('LanguageAccess');
//update language
/** @type {?} */
const LanguageUpdateToken = new InjectionToken('LanguageUpdate');
//network change token
/** @type {?} */
const NetworkChangeToken = new InjectionToken('NetworkChange');
//change font size token
/** @type {?} */
const FontSizeAccessToken = new InjectionToken('FontSizeAccess');
/** @type {?} */
const changeFontSizeToken = new InjectionToken('changeFontSize');
//showrule
/** @type {?} */
const showRuleToken = new InjectionToken("showRule");
//initialFinish
/** @type {?} */
const initialFinishToken = new InjectionToken("initialFinish");
/** @type {?} */
const NotificationProviderToken = new InjectionToken("NotificationProvider");
// Notification Action
/** @type {?} */
const GoalSettingNotStartFirstMessageActionToken = new InjectionToken('GoalSettingNotStartMessageAction');
/** @type {?} */
const GoalSettingNotStartMessageActionToken = new InjectionToken('GoalSettingNotStartMessageAction');
/** @type {?} */
const NeedGoalSettingMessageActionToken = new InjectionToken('NeedGoalSettingMessage');
/** @type {?} */
const GoalPromoSettingMessageActionToken = new InjectionToken('GoalPromoSettingMessageAction');
/** @type {?} */
const GoalAutoApproveMessageActionToken = new InjectionToken('GoalAutoApproveMessageAction');
/** @type {?} */
const GoalAutoApproveLeaderMessageActionToken = new InjectionToken('GoalAutoApproveLeaderMessageAction');
/** @type {?} */
const ApproveGoalIsRejectMessageActionToken = new InjectionToken('ApproveGoalIsRejectMessageAction');
/** @type {?} */
const ApproveGoalIsApproveMessageActionToken = new InjectionToken('ApproveGoalIsApproveMessageAction');
/** @type {?} */
const PendingReviewMessageActionToken = new InjectionToken('PendingReviewMessageAction');
/** @type {?} */
const SupervisorHaveChangeAgentMessageActionToken = new InjectionToken('SupervisorHaveChangeAgentMessageAction');
/** @type {?} */
const SupervisorHaveChangeOldMessageActionToken = new InjectionToken('SupervisorHaveChangeOldMessageAction');
/** @type {?} */
const SupervisorHaveChangeNewMessageActionToken = new InjectionToken('SupervisorHaveChangeNewMessageAction');
/** @type {?} */
const GoalAutoRejectMessageActionToken = new InjectionToken('GoalAutoRejectMessageAction');
/** @type {?} */
const GoalAutoRejectLeaderMessageActionToken = new InjectionToken('GoalAutoRejectLeaderMessageAction');
/** @type {?} */
const ActivityArriveTenPointMessageActionToken = new InjectionToken('ActivityArriveTenPointMessageAction');
/** @type {?} */
const ActivityArriveTwentyPointMessageActionToken = new InjectionToken('ActivityArriveTwentyPointMessageAction');
/** @type {?} */
const ActivityNotArriveTwentyPointMessageActionToken = new InjectionToken('ActivityNotArriveTwentyPointMessageAction');
/** @type {?} */
const ReminderEventsMessageActionToken = new InjectionToken('ReminderEventsMessageAction');
/** @type {?} */
const DataPrivacyProtectionMessageActionToken = new InjectionToken('DataPrivacyProtectionMessageAction');
/** @type {?} */
const OvertimeMessageActionToken = new InjectionToken('OvertimeMessageAction');
/** @type {?} */
const AutoDeleteMessageActionToken = new InjectionToken('AutoDeleteMessageAction');
/** @type {?} */
const OfflineMessageActionToken = new InjectionToken('OfflineMessageAction');
/** @type {?} */
const VersionCheckMessageActionToken = new InjectionToken('VersionCheckMessageAction');
/** @type {?} */
const TimoutMessageActionToken = new InjectionToken('TimoutMessageAction');
/** @type {?} */
const DataCollectionMessageActionToken = new InjectionToken('DataCollectionMessageAction');
/** @type {?} */
const ContactPermissionActionToken = new InjectionToken('ContactPermissionAction');
//Extension Data 
/** @type {?} */
const yearConfigExtensionDataToken = new InjectionToken("ExtensionFactory");
/** @type {?} */
const goalSettingExtensionDataToken = new InjectionToken("ExtensionFactory");
/** @type {?} */
const agencyPlanExtensionDataToken = new InjectionToken("ExtensionFactory");
//export const goalSettingValueExtensionDataToken = new InjectionToken<ExtensionFactory>("ExtensionFactory");
//actionDirectiveTask
/** @type {?} */
const actionDirectiveTaskToken = new InjectionToken("IActionDirectiveTask");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AOPTokenService {
    constructor() {
        this.tokenMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} token
     * @return {?}
     */
    registerToken(name, token) {
        this.tokenMap.set(name, token);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getToken(name) {
        return this.tokenMap.get(name);
    }
}
AOPTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AOPTokenService.ctorParameters = () => [];
/** @nocollapse */ AOPTokenService.ngInjectableDef = defineInjectable({ factory: function AOPTokenService_Factory() { return new AOPTokenService(); }, token: AOPTokenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringUtils {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNotEmpty(val) {
        return val !== '' && val !== null && val !== undefined && val !== 'null' && val !== 'NULL';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static trim(val) {
        if (this.isEmpty(val))
            return '';
        else
            return val.trim();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isEmpty(val) {
        if (this.isNotEmpty(val))
            return false;
        else
            return true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static convertEmptyVal(val) {
        if (this.isNotEmpty(val))
            return val;
        else
            return '';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static byteLength(val) {
        /** @type {?} */
        let byteLen = 0;
        if (val && val.length) {
            for (let i = 0; i < val.length; i++) {
                if ((val.charCodeAt(i) & 0xff00) != 0) {
                    byteLen++;
                }
                byteLen++;
            }
        }
        return byteLen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasEnglish(val) {
        return !!val && val.match(this.matchEnglishRegExp) !== null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isAllEnglish(val) {
        /** @type {?} */
        let result = val && val.match(this.matchEnglishRegExp);
        return !!result && result[0].length === val.length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasChinese(val) {
        return !!val && val.match(this.matchChineseRegExp) !== null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isAllChinese(val) {
        /** @type {?} */
        let result = val && val.match(this.matchChineseRegExp);
        return !!result && result[0].length === val.length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getEnglishCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchEnglishRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getChineseCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchChineseRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getNumberCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchNumberRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasThai(val) {
        if (!val) {
            val = '';
        }
        /** @type {?} */
        let count = 0;
        val.split('').forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.charCodeAt(0) > 3584 && item.charCodeAt(0) < 3711) {
                count++;
            }
        }));
        return count > 0;
    }
}
StringUtils.matchEnglishRegExp = "[a-zA-Z]+";
StringUtils.matchChineseRegExp = "[\\u4e00-\\u9fa5]+|['ㄧ']+";
StringUtils.matchNumberRegExp = "[0-9]+";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateUtils {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    toDateString(date, format) {
        if (date != undefined) {
            return this.datePipe.transform(date, format);
        }
    }
}
DateUtils.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DateUtils.ctorParameters = () => [
    { type: DatePipe }
];
/** @nocollapse */ DateUtils.ngInjectableDef = defineInjectable({ factory: function DateUtils_Factory() { return new DateUtils(inject(DatePipe)); }, token: DateUtils, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageInfo {
    constructor() {
        this._pageSize = 10;
        this._page = 1;
    }
    /**
     * @return {?}
     */
    resetPage() {
        this._page = 1;
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }
    /**
     * @return {?}
     */
    get totalRec() {
        return this._totalRec;
    }
    /**
     * @param {?} totalRec
     * @return {?}
     */
    set totalRec(totalRec) {
        this._totalRec = totalRec;
    }
    /**
     * @return {?}
     */
    get totalPage() {
        return this._totalPage;
    }
    /**
     * @param {?} totalPage
     * @return {?}
     */
    set totalPage(totalPage) {
        this._totalPage = totalPage;
    }
    /**
     * @return {?}
     */
    get page() { return this._page; }
    /**
     * @return {?}
     */
    nextPage() {
        this._page++;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidationResult {
    constructor() {
        this.errorMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} errorMsg
     * @return {?}
     */
    setErrorMap(name, errorMsg) {
        this.errorMap.set(name, errorMsg);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    deleteError(name) {
        this.errorMap.delete(name);
    }
    /**
     * @return {?}
     */
    isTrue() {
        return (this.errorMap.size == 0);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isError(name) {
        return this.errorMap.get(name) != undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getErrorMsg(name) {
        return this.errorMap.get(name);
    }
    /**
     * @return {?}
     */
    clearErrorMap() {
        this.errorMap.clear();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberUtils {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNumber(val) {
        if (StringUtils.isNotEmpty(val)) {
            return !isNaN(Number(val));
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isDecimal(val) {
        /** @type {?} */
        let result = false;
        if (this.isNumber(val)) {
            if (val.toString().indexOf('.') != -1) {
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isPositive(val) {
        /** @type {?} */
        let result = false;
        console.log('this.isNumber(val)', this.isNumber(val));
        if (this.isNumber(val)) {
            if (Number(val) > 0 || Number(val) == 0) {
                console.log('val', val);
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isPositiveInt(val) {
        /** @type {?} */
        let result = false;
        if (!this.isDecimal(val)) {
            if (Number(val) >= 0) {
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    static numberToFix(n, toFix) {
        /** @type {?} */
        let fix10 = Math.pow(10, toFix);
        return Math.round(this.strip(n) * fix10) / fix10;
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    static strip(num, precision = 12) {
        return Number(num.toPrecision(precision));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableUtils {
    /**
     * @param {?} tableObject
     * @param {?} data
     * @return {?}
     */
    static fillTableColumn(tableObject, data) {
        /** @type {?} */
        let columns = tableObject.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName())).filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== 'ClientID'));
        if (data != undefined) {
            if (columns.length > 0) {
                for (let col of columns) {
                    if (data[col] != undefined)
                        tableObject.setValue(col, data[col]);
                }
            }
        }
        return tableObject;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Address {
    /**
     * @param {?} type
     * @param {?} city
     * @param {?} area
     * @param {?} code
     * @param {?} address
     */
    constructor(type, city, area, code, address) {
        this._type = type;
        this._city = city;
        this._area = area;
        this._code = code;
        this._address = address;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @return {?}
     */
    get city() {
        return this._city;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set city(value) {
        this._city = value;
    }
    /**
     * @return {?}
     */
    get area() {
        return this._area;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set area(value) {
        this._area = value;
    }
    /**
     * @return {?}
     */
    get code() {
        return this._code;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set code(value) {
        this._code = value;
    }
    /**
     * @return {?}
     */
    get address() {
        return this._address;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set address(value) {
        this._address = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Phone {
    /**
     * @return {?}
     */
    get number() {
        return this._number;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set number(value) {
        this._number = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @param {?} type
     * @param {?} number
     */
    constructor(type, number) {
        this._type = type;
        this._number = number;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactItem {
    /**
     * @param {?} firstname
     * @param {?} lastname
     * @param {?} birthday
     * @param {?} phones
     * @param {?} emails
     * @param {?} address
     */
    constructor(firstname, lastname, birthday, phones, emails, address) {
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
    /**
     * @param {?} birthday
     * @return {?}
     */
    set Birthday(birthday) {
        this._birthday = birthday;
    }
    /**
     * @return {?}
     */
    get Birthday() {
        return this._birthday;
    }
    /**
     * @param {?} check
     * @return {?}
     */
    set isCheck(check) {
        this._isCheck = check;
    }
    /**
     * @return {?}
     */
    get isCheck() {
        return this._isCheck;
    }
    /**
     * @param {?} show
     * @return {?}
     */
    set isShow(show) {
        this._isShow = show;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @return {?}
     */
    get FirstName() {
        return this._firstname;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FirstName(value) {
        this._firstname = value;
    }
    /**
     * @return {?}
     */
    get LastName() {
        return this._lastname;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set LastName(value) {
        this._lastname = value;
    }
    /**
     * @return {?}
     */
    get tel() {
        return this._phones;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tel(value) {
        this._phones = value;
    }
    /**
     * @return {?}
     */
    get email() {
        return this._emails;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set email(value) {
        this._emails = value;
    }
    /**
     * @return {?}
     */
    get address() {
        return this._address;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set address(value) {
        this._address = value;
    }
    /**
     * @return {?}
     */
    get fullname() {
        return this.FirstName + ' ' + this.LastName;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CordovaDeviceDao {
    constructor() { }
    /**
     * @param {?} name
     * @return {?}
     */
    searchcontactsByName(name) {
        /** @type {?} */
        var _navigator = ((/** @type {?} */ (navigator)));
        /** @type {?} */
        var fields = [_navigator.contacts.fieldType.displayName, _navigator.contacts.fieldType.name];
        /** @type {?} */
        var options = new ContactFindOptions();
        options.filter = name;
        options.multiple = true;
        options.desiredFields = [_navigator.contacts.fieldType.name, _navigator.contacts.fieldType.emails, _navigator.contacts.fieldType.addresses, _navigator.contacts.fieldType.phoneNumbers];
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            _navigator.contacts.find(fields, (/**
             * @param {?} contacts
             * @return {?}
             */
            (contacts) => {
                console.log('find contacts results:', contacts);
                /** @type {?} */
                var returnObj = {
                    "Body": []
                }
                // var results = [];
                ;
                // var results = [];
                for (let contact of contacts) {
                    /** @type {?} */
                    let firstName = contact.name.givenName || '';
                    /** @type {?} */
                    let lastName = contact.name.familyName || '';
                    /** @type {?} */
                    let birthday = contact.name.birthday || null;
                    /** @type {?} */
                    let emails = contact.emails == null ? [] : contact.emails.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.value));
                    /** @type {?} */
                    let phones = contact.phoneNumbers == null ? [] : contact.phoneNumbers.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => new Phone(x.type, x.value.trim())));
                    /** @type {?} */
                    let address = contact.addresses == null ? [] : contact.addresses.map(this.convertAddress);
                    returnObj['Body'].push(new ContactItem(firstName, lastName, birthday, phones, emails, address));
                }
                observer.next(returnObj);
                observer.complete();
            }), (/**
             * @param {?} contactError
             * @return {?}
             */
            (contactError) => {
                console.log('contacts error:', contactError, options);
                observer.error(contactError);
                observer.complete();
            }), options);
        }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    convertAddress(item) {
        /** @type {?} */
        let type = item.type || null;
        /** @type {?} */
        let address = item.streetAddress || null;
        /** @type {?} */
        let area = item.locality || null;
        /** @type {?} */
        let city = item.reigon || null;
        /** @type {?} */
        let code = item.postalCode || null;
        return new Address(type, city, area, code, address);
    }
    /**
     * @return {?}
     */
    registerNotfiy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkNotifyPermission();
            /** @type {?} */
            let token = yield this.getFirbaseToken();
            while (token === null) {
                yield this.waitnseconds(2000);
                token = yield this.getFirbaseToken();
            }
            return token;
        });
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onNotifyTokenRefresh(callback) {
        return window.FirebasePlugin.onTokenRefresh((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            callback(token);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.warn('token refresh error:', err.message);
        }));
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onNotificationOpen(callback) {
        window.FirebasePlugin.onMessageReceived((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => {
            callback(notification);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.warn('notification open error:', err.message);
        }));
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    subscribeSubject(subject) {
        window.FirebasePlugin.subscribe(subject);
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    unsubscribeSubject(subject) {
        window.FirebasePlugin.unsubscribe(subject);
    }
    /**
     * @private
     * @return {?}
     */
    checkNotifyPermission() {
        window.FirebasePlugin.hasPermission((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data.isEnabled) {
                window.FirebasePlugin.grantPermission();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getFirbaseToken() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            window.FirebasePlugin.getToken((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                console.log("firebase gettoken:", token);
                res(token);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.warn('get token error:', err.message);
                rej(err);
            }));
        }));
    }
    /**
     * @private
     * @param {?} second
     * @return {?}
     */
    waitnseconds(second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                res();
            }), second);
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceFactory {
    /**
     * @private
     */
    constructor() {
        this.daoMap = new Map();
        this.daoMap.set("cordova", new CordovaDeviceDao());
    }
    /**
     * @return {?}
     */
    getDefaultDao() {
        return this.getDao("cordova");
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getDao(name) {
        return this.daoMap.get(name);
    }
}
DeviceFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DeviceFactory.ctorParameters = () => [];
/** @nocollapse */ DeviceFactory.ngInjectableDef = defineInjectable({ factory: function DeviceFactory_Factory() { return new DeviceFactory(); }, token: DeviceFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceService {
    /**
     * @param {?} injector
     * @param {?} deviceFactory
     * @param {?} APP_CONFIG
     */
    constructor(injector, deviceFactory, APP_CONFIG) {
        this.injector = injector;
        this.deviceFactory = deviceFactory;
        this.APP_CONFIG = APP_CONFIG;
        this.SSL_fingerprints = [];
        this.deviceID = null;
        this.mock_deviceID = v4();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        this.SSL_fingerprints = this.APP_CONFIG[env].SSL_FINGERPRINTS;
        if (env === 'DEV_WebSQL')
            this.initDeviceID().then((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                this.deviceID = id;
            }));
    }
    ;
    /**
     * @return {?}
     */
    initDeviceAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            window.open = cordova.InAppBrowser.open;
            this._isPad = this.judgePad();
            this.lockScreenOrient();
            this.disableBackBtn();
            this.deviceID = yield this.initDeviceID();
        });
    }
    /**
     * @return {?}
     */
    getDevicePlatform() {
        /** @type {?} */
        let platform = null;
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
    }
    /**
     * @return {?}
     */
    getDeviceUUID() {
        if (this.deviceID)
            return this.deviceID;
    }
    /**
     * @private
     * @return {?}
     */
    _getDeviceUUID() {
        /** @type {?} */
        let uuid = null;
        try {
            uuid = device.uuid;
        }
        catch (error) {
            console.log('cannot get UUID, beacause maynot on device.');
            uuid = this.mock_deviceID;
            //this.errorHandler.handleError(error);
        }
        finally {
            return uuid;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initDeviceID() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let deviceID = this._getDeviceUUID();
            try {
                /** @type {?} */
                let resp = yield this.getSecureStorage("deviceID").toPromise();
                console.log("getDeviceID from KeyStore resp:", resp);
                if (resp.includes("Device is not secure")) { //which Device is not secure
                    throw new Error(resp);
                }
                else if (resp) { // if have key in keyStore/keyChain
                    return resp;
                }
                else {
                    /** @type {?} */
                    let setKeyResp = yield this.setSecureStorage("deviceID", deviceID).toPromise();
                    if (setKeyResp) {
                        /** @type {?} */
                        let key = yield this.getSecureStorage("deviceID").toPromise();
                        return key;
                    }
                }
            }
            catch (error) {
                console.log("getDeviceID error, use localStorage");
                if (this.getLocalStorage("deviceID")) {
                    return this.getLocalStorage("deviceID");
                }
                else {
                    this.setLocalStorage("deviceID", deviceID);
                    return deviceID;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    getDeviceManufacturer() {
        /** @type {?} */
        let manufacturer = null;
        try {
            manufacturer = `${device.manufacturer} ${device.model}`;
        }
        catch (error) {
            console.log('cannot get Manufacturer, beacause maynot on device.');
            manufacturer = "PC Browser";
            // this.errorHandler.handleError(error);
        }
        finally {
            return manufacturer;
        }
    }
    /**
     * @return {?}
     */
    restartApp() {
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
    }
    /**
     * @return {?}
     */
    getNetworkState() {
        if (navigator && navigator.connection) {
            /** @type {?} */
            let networkState = navigator.connection.type;
            console.log('networkState:', networkState);
            return networkState != 'none';
        }
        else
            return true;
    }
    /**
     * @param {?} word
     * @return {?}
     */
    searchContactsByName(word) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let dao = this.deviceFactory.getDefaultDao();
            try {
                /** @type {?} */
                let resp = yield dao.searchcontactsByName('').toPromise();
                console.log('search Contact result:', resp);
                /** @type {?} */
                let contacts = resp['Body'];
                for (let item of contacts) {
                    if (StringUtils.isEmpty(item.l))
                        item.isCheck = false;
                }
                return contacts;
            }
            catch (error) {
                console.log('error:', error);
                return error;
            }
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    dialNumber(num) {
        window.open('tel:' + num.replace(/\s/g, ''), '_system');
    }
    /**
     * @return {?}
     */
    checkIfRoot() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            try {
                console.log("iroot:", IRoot);
                if (IRoot !== undefined) {
                    IRoot.isRooted((/**
                     * @param {?} result
                     * @return {?}
                     */
                    (result) => {
                        res(result);
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => {
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
    }
    /**
     * @return {?}
     */
    exitApp() {
        cordova.plugins.exit();
        // navigator.app.exitApp();
    }
    /**
     * @return {?}
     */
    getAppVersion() {
        try {
            return cordova.getAppVersion.getVersionNumber();
        }
        catch (error) {
            //this.errorHandler.handleError(error);
            return Promise.resolve("1.0.3"); //1.0.0
        }
    }
    /**
     * @return {?}
     */
    getIsFirstLaunch() {
        return this.getLocalStorage("AppFirstLaunch") === 'N' ? false : true;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setLocalStorage(key, value) {
        window.localStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getLocalStorage(key) {
        return window.localStorage.getItem(key);
    }
    /**
     * @private
     * @return {?}
     */
    lockScreenOrient() {
        /** @type {?} */
        let orientation = this.isPad() ? 'landscape' : 'portrait-primary';
        ((/** @type {?} */ (window))).screen.orientation.lock(orientation);
    }
    /**
     * @return {?}
     */
    judgePad() {
        /** @type {?} */
        let width = window.innerWidth;
        /** @type {?} */
        let height = window.innerHeight;
        console.log('width:', width);
        console.log('height:', height);
        if (width < 700 || height < 700) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    isPad() {
        return this._isPad;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setSecureStorage(key, value) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let ss = new cordova.plugins.SecureStorage((/**
             * @return {?}
             */
            function () {
                ss.set((/**
                 * @return {?}
                 */
                function () {
                    observer.next(true);
                    observer.complete();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    observer.next(false);
                    observer.complete();
                }), key, value);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(false);
                observer.complete();
            }), "Allianz_SND");
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSecureStorage(key) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let ss = new cordova.plugins.SecureStorage((/**
             * @return {?}
             */
            function () {
                ss.get((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    observer.next(key);
                    observer.complete();
                }), (/**
                 * @return {?}
                 */
                function () {
                    observer.next(null);
                    observer.complete();
                }), key);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(error.message);
                observer.complete();
            }), "Allianz_SND");
        }));
    }
    /**
     * @param {?} url
     * @return {?}
     */
    checkSSL(url) {
        if (this.SSL_fingerprints.length == 0)
            return Promise.resolve(true);
        else
            return new Promise((/**
             * @param {?} res
             * @param {?} rej
             * @return {?}
             */
            (res, rej) => {
                ((/** @type {?} */ (window))).plugins.sslCertificateChecker.check((/**
                 * @param {?} message
                 * @return {?}
                 */
                (message) => {
                    if (message === 'CONNECTION_SECURE')
                        res(true);
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    rej(error);
                }), url, this.SSL_fingerprints);
            }));
    }
    /**
     * @return {?}
     */
    takeScreenShot() {
        /** @type {?} */
        let _this = this;
        ((/** @type {?} */ (navigator))).screenshot.save((/**
         * @param {?} error
         * @param {?} res
         * @return {?}
         */
        function (error, res) {
            if (error) {
                //todo throw error
                console.warn(error);
            }
            else {
                console.log('testScreenShot success', res.filePath);
                console.warn('getDevicePlatform', _this.getDevicePlatform());
                if (_this.getDevicePlatform() == "iOS")
                    ((/** @type {?} */ (cordova))).plugins.imagesaver.saveImageToGallery(res.filePath, (/**
                     * @return {?}
                     */
                    function () { console.log("success"); }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { console.log(err); }));
            }
        }));
    }
    /**
     * @return {?}
     */
    disableBackBtn() {
        document.addEventListener("backbutton", (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
        }), false);
    }
    /**
     * @return {?}
     */
    checkContactPermission() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            ((/** @type {?} */ (cordova))).plugins.CheckPermission.checkContactPermission('contact', (/**
             * @param {?} msg
             * @return {?}
             */
            function (msg) {
                resolve(msg);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                reject(error);
            }));
        }));
    }
    /**
     * @return {?}
     */
    grantContactPermission() {
        ((/** @type {?} */ (cordova))).plugins.CheckPermission.grantContactPermission();
    }
}
DeviceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DeviceService.ctorParameters = () => [
    { type: Injector },
    { type: DeviceFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ DeviceService.ngInjectableDef = defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(inject(INJECTOR), inject(DeviceFactory), inject(ConfigToken, 8)); }, token: DeviceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginTokenStore {
    constructor() {
        this.token = '';
        this.tokenSubject = new BehaviorSubject(this.token);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setToken(token) {
        this.token = token;
        this.tokenSubject.next(this.token);
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.tokenSubject.asObservable();
    }
}
LoginTokenStore.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoginTokenStore.ctorParameters = () => [];
/** @nocollapse */ LoginTokenStore.ngInjectableDef = defineInjectable({ factory: function LoginTokenStore_Factory() { return new LoginTokenStore(); }, token: LoginTokenStore, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class defaultHeader {
    /**
     * @param {?} deviceService
     * @param {?} tokenStore
     * @param {?} customLoginMgr
     */
    constructor(deviceService, tokenStore, customLoginMgr) {
        this.deviceService = deviceService;
        this.tokenStore = tokenStore;
        this.customLoginMgr = customLoginMgr;
        this.token = '';
        this.version = '';
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
        this.deviceService.getAppVersion().then((/**
         * @param {?} ver
         * @return {?}
         */
        (ver) => {
            this.version = ver;
        }));
    }
    /**
     * @return {?}
     */
    getHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token,
            'X-Date': new Date().toUTCString(),
            'X-Request-ID': Date.now().toString(),
            'X-Organization': '1',
            'X-Organization-Branch': '1',
            'X-Organization-User': '1',
            'X-API-Version': this.version,
        });
    }
}
defaultHeader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
defaultHeader.ctorParameters = () => [
    { type: DeviceService },
    { type: LoginTokenStore },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LoginMgrToken,] }] }
];
/** @nocollapse */ defaultHeader.ngInjectableDef = defineInjectable({ factory: function defaultHeader_Factory() { return new defaultHeader(inject(DeviceService), inject(LoginTokenStore), inject(LoginMgrToken, 8)); }, token: defaultHeader, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const NotificationType = {
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
const NotificationCategory = {
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
class NotificationObject {
    constructor() {
        this.category = '';
        this.type = '';
        this.id = v4();
        this.data = {};
        this.order = -1;
        this.action = null;
    }
    /**
     * @return {?}
     */
    get category() {
        return this._category;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set category(value) {
        this._category = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set order(value) {
        this._order = value;
    }
    /**
     * @return {?}
     */
    get action() {
        return this._action;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set action(value) {
        this._action = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationProvider {
    /**
     * @param {?} injector
     * @param {?} customNotificationProvider
     */
    constructor(injector, customNotificationProvider) {
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
    getNotificationObject(type, data, id = null) {
        if (this.customNotificationProvider) {
            return this.customNotificationProvider.getNotificationObject(type, data);
        }
        else {
            /** @type {?} */
            let obj = new NotificationObject();
            if (id)
                obj.id = id;
            obj.data = data;
            /** @type {?} */
            let findedType = this.actionMap.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === type));
            if (findedType.length > 0) {
                obj.order = findedType[0].order;
                obj.category = findedType[0].category;
                obj.type = findedType[0].type;
                obj.action = this.getAction(findedType[0].action);
            }
            return obj;
        }
    }
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    getAction(token) {
        /** @type {?} */
        let action;
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
    }
}
NotificationProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NotificationProvider.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NotificationProviderToken,] }] }
];
/** @nocollapse */ NotificationProvider.ngInjectableDef = defineInjectable({ factory: function NotificationProvider_Factory() { return new NotificationProvider(inject(INJECTOR), inject(NotificationProviderToken, 8)); }, token: NotificationProvider, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationMgr {
    /**
     * @param {?} injector
     * @param {?} errorHandler
     * @param {?} notificationProvider
     */
    constructor(injector, errorHandler, notificationProvider) {
        this.injector = injector;
        this.errorHandler = errorHandler;
        this.notificationProvider = notificationProvider;
        this.DBMessage = [];
        this.notificationList = [];
        this.notificationSubject = new BehaviorSubject(this.notificationList);
    }
    /**
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("NotificationMgr init");
            yield this.fetchMessageData();
        });
    }
    /**
     * @return {?}
     */
    getNotificationList() {
        console.log("NotificationMgr getNotificationList");
        return this.notificationSubject.asObservable();
    }
    /**
     * @param {?} type
     * @param {?} data
     * @return {?}
     */
    pushNotification(type, data) {
        /** @type {?} */
        let notify = this.notificationProvider.getNotificationObject(type, data);
        console.log("NotificationMgr pushNotification:", notify);
        // 處理reminder message
        if (notify.action) {
            /** @type {?} */
            let duplicateList = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.category === notify.category && x.type === notify.type));
            /** @type {?} */
            let conflictResult = notify.action.onConflict(duplicateList, notify);
            this.notificationList = [...conflictResult, ...this.notificationList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.category !== notify.category || x.type !== notify.type))];
        }
        else {
            this.notificationList.push(notify);
        }
        this.notificationList = this.notificationList.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        this.notificationSubject.next(this.notificationList);
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    popNotification(notification) {
        console.log("NotificationMgr popNotification:", notification);
        try {
            /** @type {?} */
            let popped = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === notification.id)).length > 0;
            console.log("popNotification:", popped);
            if (popped) {
                this.notificationList = this.notificationList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.id !== notification.id));
                this.notificationSubject.next(this.notificationList);
                console.log("after popped:", this.notificationList);
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError("F00021", error.message));
        }
    }
    /**
     * @return {?}
     */
    getUnreadMessageNumber() {
        return this.DBMessage.length;
    }
    /**
     * @return {?}
     */
    popAllNotification() {
        this.notificationList = [];
        this.notificationSubject.next(this.notificationList);
    }
    /**
     * @param {?=} category
     * @param {?=} type
     * @return {?}
     */
    showCategoryMessage(category = null, type = null) {
        console.log("NotificationMgr ShowCategoryMessage:", category, type);
        /** @type {?} */
        let selected = this.DBMessage.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => ((x.category === category) || (!category)) && ((x.type === type) || (!type))));
        /** @type {?} */
        let selected_id = selected.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        if (selected.length > 0) {
            this.notificationList = [...this.notificationList, ...selected];
            this.notificationSubject.next(this.notificationList);
            this.DBMessage = this.DBMessage.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => selected_id.indexOf(x.id) < 0));
            // update db message status
            /** @type {?} */
            let APIFactory$$1 = this.getAPIFactory();
            /** @type {?} */
            let dispatcher = this.getAPIDispatch();
            /** @type {?} */
            let updateMessageStatusAPI = APIFactory$$1.getAPI('updateDashboardMessageStatus');
            ((/** @type {?} */ (updateMessageStatusAPI))).setClientIDList(selected_id);
            ((/** @type {?} */ (updateMessageStatusAPI))).setStatus('Reading');
            dispatcher.dispatch(updateMessageStatusAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("NotificationMgr popNotification updateMessageStatusAPI resp:", resp);
            }));
        }
    }
    /**
     * @return {?}
     */
    fetchMessageData() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("NotificationMgr fetchMessageData");
            /** @type {?} */
            let fetched_messages = [];
            try {
                /** @type {?} */
                let APIFactory$$1 = this.getAPIFactory();
                /** @type {?} */
                let dispatcher = this.getAPIDispatch();
                /** @type {?} */
                let getMessageAPI = APIFactory$$1.getAPI("getDashboardMessageList");
                ((/** @type {?} */ (getMessageAPI))).setKeyword("UnRead");
                ((/** @type {?} */ (getMessageAPI))).setIsPopup(true);
                /** @type {?} */
                let resp = yield dispatcher.dispatch(getMessageAPI).toPromise();
                /** @type {?} */
                let messageList = resp['Body'];
                fetched_messages = messageList.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    return this.notificationProvider.getNotificationObject(x.MessageType, Object.assign({
                        "Source": "DB",
                        "Title": x.Title,
                        "Description": x.Description,
                    }, JSON.parse(x.Arguments)), x.ClientID);
                }));
            }
            catch (err) {
                this.errorHandler.handleError(new APPError("F00020", err.message));
            }
            this.DBMessage = fetched_messages;
            console.log("NotificationMgr fetchMessageData end", this.DBMessage);
        });
    }
    /**
     * @private
     * @return {?}
     */
    getAPIFactory() {
        try {
            /** @type {?} */
            let factory = this.injector.get(APIFactory);
            return factory;
        }
        catch (_a) {
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getAPIDispatch() {
        try {
            /** @type {?} */
            let dispatcher = this.injector.get(APIDispatch);
            return dispatcher;
        }
        catch (_a) {
            return null;
        }
    }
}
NotificationMgr.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NotificationMgr.ctorParameters = () => [
    { type: Injector },
    { type: ErrorHandler },
    { type: NotificationProvider }
];
/** @nocollapse */ NotificationMgr.ngInjectableDef = defineInjectable({ factory: function NotificationMgr_Factory() { return new NotificationMgr(inject(INJECTOR), inject(ErrorHandler), inject(NotificationProvider)); }, token: NotificationMgr, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RestfulAPIAccess {
    /**
     * @param {?} httpService
     * @param {?} APP_CONFIG
     * @param {?} deviceService
     * @param {?} errorHandler
     * @param {?} defaultHeader
     * @param {?} notificationMgr
     * @param {?} customHeader
     */
    constructor(httpService, APP_CONFIG, deviceService, errorHandler, defaultHeader$$1, notificationMgr, customHeader) {
        this.httpService = httpService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService = deviceService;
        this.errorHandler = errorHandler;
        this.defaultHeader = defaultHeader$$1;
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
/** @nocollapse */ RestfulAPIAccess.ngInjectableDef = defineInjectable({ factory: function RestfulAPIAccess_Factory() { return new RestfulAPIAccess(inject(HttpClient), inject(ConfigToken), inject(DeviceService), inject(ErrorHandler), inject(defaultHeader), inject(NotificationMgr), inject(RestHeaderToken, 8)); }, token: RestfulAPIAccess, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteAPIAccess {
    /**
     * @param {?} api
     * @return {?}
     */
    access(api) {
        console.log('sqlite access');
        return ((/** @type {?} */ (api))).executeSQL();
    }
}
SQLiteAPIAccess.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SQLiteAPIAccess.ngInjectableDef = defineInjectable({ factory: function SQLiteAPIAccess_Factory() { return new SQLiteAPIAccess(); }, token: SQLiteAPIAccess, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceAPIAccess {
    /**
     * @param {?} api
     * @return {?}
     */
    access(api) {
        return ((/** @type {?} */ (api))).runDeviceAPI();
    }
}
DeviceAPIAccess.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DeviceAPIAccess.ngInjectableDef = defineInjectable({ factory: function DeviceAPIAccess_Factory() { return new DeviceAPIAccess(); }, token: DeviceAPIAccess, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthObject {
    /**
     * @param {?=} payload
     * @param {?=} status
     */
    constructor(payload = {}, status = true) {
        this.payload = payload;
        this.status = status;
        this.error = '';
    }
}
/** @enum {string} */
const AuthError = {
    PERMISSION_DENIED: 'Permission Denied',
    TIMEOUT: 'Timeout',
    NOT_LOGIN: 'Not Login',
    PENDING_ACTION: 'Other Action Pending',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeoutService {
    /**
     * @param {?} APP_CONFIG
     * @param {?} timeoutCheck
     * @param {?} timeoutAction
     * @param {?} zone
     */
    constructor(APP_CONFIG, timeoutCheck, timeoutAction, zone) {
        this.APP_CONFIG = APP_CONFIG;
        this.timeoutCheck = timeoutCheck;
        this.timeoutAction = timeoutAction;
        this.zone = zone;
        this.seconds = 0;
        this.reaminingSubject = new BehaviorSubject(this.seconds);
        this._interval = null;
        this.reset_seconds = this.APP_CONFIG[this.APP_CONFIG.ENV].TIMEOUT;
        this.seconds = this.reset_seconds;
    }
    /**
     * @return {?}
     */
    reset() {
        if (this.timeoutCheck)
            this.timeoutCheck.reset();
        else {
            this.seconds = this.reset_seconds;
        }
    }
    /**
     * @return {?}
     */
    init() {
        if (this.timeoutCheck) {
            this.timeoutCheck.init();
        }
        else {
            if (this._interval != null) {
                clearInterval(this._interval);
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._interval = setInterval((/**
                 * @return {?}
                 */
                () => {
                    this.seconds--;
                    this.reaminingSubject.next(this.seconds);
                    if (this.seconds <= 0) {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            clearInterval(this._interval);
                            this._interval = null;
                            console.log('timeout!!');
                            if (this.timeoutAction) {
                                this.timeoutAction.timeoutAction();
                            }
                        }));
                    }
                }), 1000);
            }));
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.timeoutCheck)
            this.timeoutCheck.clear();
        else {
            if (this._interval != null) {
                clearInterval(this._interval);
                this._interval = null;
            }
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authRoute(payload) {
        if (!payload.status)
            return payload;
        payload.status = !this.isTimeout();
        if (!payload.status) {
            payload.error = AuthError.TIMEOUT;
        }
        return payload;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authAction(payload) {
        if (!payload.status)
            return payload;
        payload.status = !this.isTimeout();
        if (!payload.status) {
            payload.error = AuthError.TIMEOUT;
        }
        return payload;
    }
    /**
     * @return {?}
     */
    getTimeoutRemainingSecond() {
        return this.reaminingSubject.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    isTimeout() {
        if (this.timeoutCheck)
            return this.timeoutCheck.checkTimeout();
        else
            return this.seconds <= 0;
    }
}
TimeoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TimeoutService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkTimeoutToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [timeoutActionToken,] }] },
    { type: NgZone }
];
/** @nocollapse */ TimeoutService.ngInjectableDef = defineInjectable({ factory: function TimeoutService_Factory() { return new TimeoutService(inject(ConfigToken), inject(checkTimeoutToken, 8), inject(timeoutActionToken, 8), inject(NgZone)); }, token: TimeoutService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class APIDispatch {
    /**
     * @param {?} mockAPIAccess
     * @param {?} sqliteAPIAcces
     * @param {?} restfulAPIAccess
     * @param {?} deviceAPIAccess
     * @param {?} timeoutService
     * @param {?} errorHandler
     * @param {?} APP_CONFIG
     */
    constructor(mockAPIAccess, sqliteAPIAcces, restfulAPIAccess, deviceAPIAccess, timeoutService, errorHandler, APP_CONFIG) {
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
    dispatch(api) {
        this.timeoutService.reset();
        if (api != undefined) {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            /** @type {?} */
            let apiInvokeMethod = this.APP_CONFIG[env].API_TYPE[api.getAPIName()];
            /** @type {?} */
            let apiAccess;
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
                this.errorHandler.handleError(new APPError("F00014", `API ${api.getAPIName()} doesn't assign access method.`));
            }
        }
        this.errorHandler.handleError(new APPError("F00015", `API object is null.`));
        return of(null);
    }
}
APIDispatch.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIDispatch.ctorParameters = () => [
    { type: MockAPIAccess },
    { type: SQLiteAPIAccess },
    { type: RestfulAPIAccess },
    { type: DeviceAPIAccess },
    { type: TimeoutService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ APIDispatch.ngInjectableDef = defineInjectable({ factory: function APIDispatch_Factory() { return new APIDispatch(inject(MockAPIAccess), inject(SQLiteAPIAccess), inject(RestfulAPIAccess), inject(DeviceAPIAccess), inject(TimeoutService), inject(ErrorHandler), inject(ConfigToken)); }, token: APIDispatch, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteResponse {
    /**
     * @param {?} info
     * @param {?} data
     */
    constructor(info, data) {
        this._header = {};
        this._body = [];
        this._header = info;
        this._body = data;
    }
    /**
     * @return {?}
     */
    get Header() {
        return this._header;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Header(val) {
        this._header = val;
    }
    /**
     * @return {?}
     */
    get Body() {
        return this._body;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set Body(val) {
        this._body = val;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateService {
    /**
     * @param {?} httpService
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} deviceService
     * @param {?} LanguageAccess
     * @param {?} LanguageUpdate
     */
    constructor(httpService, dispatcher, APIFactory$$1, deviceService, LanguageAccess, LanguageUpdate) {
        this.httpService = httpService;
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory$$1;
        this.deviceService = deviceService;
        this.LanguageAccess = LanguageAccess;
        this.LanguageUpdate = LanguageUpdate;
        this.language_map = {};
        this.languageMap = new Map();
        this.current_language = "";
        this.updateLanguageSubject = new BehaviorSubject(0);
    }
    /**
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadJson();
            yield this._fetchCurrentLanguage().toPromise();
        });
    }
    /**
     * @return {?}
     */
    loadJson() {
        /** @type {?} */
        let _this = this;
        console.debug('translate.service.loadjson');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
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
            _this.httpService.get("./assets/config/language.json").subscribe((/**
             * @param {?} json
             * @return {?}
             */
            (json) => {
                console.debug('translate.service.loadjson success', json);
                _this.language_map = json;
                res();
            }));
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
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
        let translateResult = this.language_map[this.current_language][key];
        if (translateResult === null || translateResult === undefined) {
            return key;
        }
        else {
            return translateResult;
        }
    }
    /**
     * @param {?} mappingID
     * @param {?} map
     * @return {?}
     */
    translateWithVariable(mappingID, map$$1) {
        /** @type {?} */
        let displayText = this.translate(mappingID);
        Object.keys(map$$1).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (map$$1[key] == null || map$$1[key] == undefined) {
                map$$1[key] = '';
            }
            displayText = displayText.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), map$$1[key].toString());
        }));
        return displayText;
    }
    /**
     * @return {?}
     */
    _fetchCurrentLanguage() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (this.LanguageAccess) {
                this.LanguageAccess.getCurrentLanguage().subscribe((/**
                 * @param {?} language
                 * @return {?}
                 */
                (language) => {
                    this.current_language = language;
                    observer.next(language);
                    observer.complete();
                }));
            }
            else {
                console.log("Default _fetchCurrentLanguage");
                /** @type {?} */
                let currentLanguage = this.deviceService.getLocalStorage("SNDLanguage") || 'en';
                this.current_language = currentLanguage;
                this.deviceService.setLocalStorage("SNDLanguage", currentLanguage);
                observer.next(this.current_language);
                observer.complete();
            }
        }));
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let currentLanguageListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCurrentLanguageList')));
        /** @type {?} */
        let codeArray = [];
        console.debug('setting.service fetchCodeData', currentLanguageListAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(currentLanguageListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                let bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (let i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    let json = bodyDatas[i];
                    /** @type {?} */
                    let language = new LanguageCode(json.LanguageID, json.Name, json.IsDefault);
                    codeArray.push(language);
                    this.languageMap.set('TW_LH_SD_Language', codeArray);
                }
                console.debug('languageMap', this.languageMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getCodeArray() {
        if (this.languageMap.size != 0) {
            /** @type {?} */
            let codeArray = this.languageMap.get('TW_LH_SD_Language');
            if (codeArray == undefined)
                codeArray = new Array();
            return codeArray;
        }
        return new Array();
    }
    /**
     * @param {?} newLanguage
     * @return {?}
     */
    updateLanguage(newLanguage) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (this.LanguageUpdate) {
                this.LanguageUpdate.UpdateLanguage(newLanguage).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                this.deviceService.setLocalStorage("SNDLanguage", newLanguage);
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }
            this._fetchCurrentLanguage().subscribe((/**
             * @param {?} language
             * @return {?}
             */
            (language) => {
                this.current_language = language;
                this.updateLanguageSubject.next();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getCurrentLanguage() {
        return this.current_language;
    }
    /**
     * @return {?}
     */
    getUpdateSubject() {
        return this.updateLanguageSubject;
    }
}
TranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
TranslateService.ctorParameters = () => [
    { type: HttpClient },
    { type: APIDispatch },
    { type: APIFactory },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageAccessToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageUpdateToken,] }] }
];
/** @nocollapse */ TranslateService.ngInjectableDef = defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(inject(HttpClient), inject(APIDispatch), inject(APIFactory), inject(DeviceService), inject(LanguageAccessToken, 8), inject(LanguageUpdateToken, 8)); }, token: TranslateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return this.translate.translate(value);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] }
];
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFormatPipe {
    constructor() { }
    /**
     * @param {?} value
     * @param {?=} decimalPlaces
     * @return {?}
     */
    transform(value, decimalPlaces = -1) {
        /** @type {?} */
        let valueToNumber = Number(value);
        if (isNaN(valueToNumber)) { //不能轉成數字
            return value;
        }
        else {
            if (decimalPlaces >= 0) {
                /** @type {?} */
                const decimal = '.';
                /** @type {?} */
                const thousands = ',';
                /** @type {?} */
                let amount = '';
                try {
                    decimalPlaces = Math.abs(decimalPlaces);
                    decimalPlaces = isNaN(decimalPlaces) ? 1 : decimalPlaces;
                    /** @type {?} */
                    const negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    let i = parseInt(amount = Math.abs(valueToNumber || 0).toFixed(decimalPlaces)).toString();
                    /** @type {?} */
                    let j = (i.length > 3) ? i.length % 3 : 0;
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
                const thousands = ',';
                try {
                    /** @type {?} */
                    const negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    let i = Math.abs(valueToNumber || 0).toString();
                    /** @type {?} */
                    let j = (i.length > 3) ? i.length % 3 : 0;
                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    }
}
NumberFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'numberFormat',
                pure: false
            },] }
];
NumberFormatPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginInfo {
    /**
     * @return {?}
     */
    get AgentId() {
        return this._AgentId;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgentId(value) {
        this._AgentId = value;
    }
    /**
     * @return {?}
     */
    get AppUseMode() {
        return this._AppUseMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AppUseMode(value) {
        this._AppUseMode = value;
    }
    /**
     * @return {?}
     */
    get AgentName() {
        return this._AgentName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgentName(value) {
        this._AgentName = value;
    }
    /**
     * @return {?}
     */
    get Gender() {
        return this._Gender;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Gender(value) {
        this._Gender = value;
    }
    /**
     * @return {?}
     */
    get exp() {
        return this._exp;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set exp(value) {
        this._exp = value;
    }
    /**
     * @return {?}
     */
    get GoalSigningSupervisor() {
        return this._GoalSigningSupervisor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalSigningSupervisor(value) {
        this._GoalSigningSupervisor = value;
    }
    /**
     * @return {?}
     */
    get CurrentJobSeniorityMonth() {
        return this._CurrentJobSeniorityMonth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set CurrentJobSeniorityMonth(value) {
        this._CurrentJobSeniorityMonth = value;
    }
    /**
     * @return {?}
     */
    get JobGrade() {
        return this._JobGrade;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set JobGrade(value) {
        this._JobGrade = value;
    }
    /**
     * @return {?}
     */
    get CurrentJobOBMonth() {
        return this._CurrentJobOBMonth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set CurrentJobOBMonth(value) {
        this._CurrentJobOBMonth = value;
    }
    /**
     * @return {?}
     */
    get OfficeName() {
        return this._OfficeName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set OfficeName(value) {
        this._OfficeName = value;
    }
    /**
     * @return {?}
     */
    get ReferenceToken() {
        return this._ReferenceToken;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ReferenceToken(value) {
        this._ReferenceToken = value;
    }
    /**
     * @param {?} info
     */
    constructor(info) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginResponse {
    /**
     * @param {?} resp
     */
    constructor(resp) {
        this.isSuccess = resp.isSuccess;
        this.errorMsg = resp.errorMsg;
        this.type = resp.type;
        this.token = resp.token;
        this.failCount = resp.failCount || -1;
    }
}
/** @enum {number} */
const LOGIN_TYPE = {
    ONLINE: 0,
    OFFLINE: 1,
};
LOGIN_TYPE[LOGIN_TYPE.ONLINE] = 'ONLINE';
LOGIN_TYPE[LOGIN_TYPE.OFFLINE] = 'OFFLINE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouteUtils {
    /**
     * @param {?} data
     * @return {?}
     */
    static convertJsonToRouterMap(data) {
        /** @type {?} */
        let map$$1 = {};
        /** @type {?} */
        let funcList = Object.keys(data);
        funcList.forEach((/**
         * @param {?} func_name
         * @return {?}
         */
        func_name => {
            Object.keys(data[func_name]).forEach((/**
             * @param {?} pageName
             * @return {?}
             */
            pageName => {
                data[func_name][pageName] = Object.assign(data[func_name][pageName], {
                    Function: func_name
                });
                map$$1[pageName] = data[func_name][pageName];
            }));
        }));
        return map$$1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppRouter {
    /**
     * @param {?} injector
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} routeReuseStrategy
     */
    constructor(injector, APIFactory$$1, dispatcher, routeReuseStrategy) {
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
    init() {
        //call api to get route map
        /** @type {?} */
        let routerMapAPI = this.APIFactory.getAPI("getRouterMap");
        if (routerMapAPI) {
            this.dispatcher.dispatch(routerMapAPI).subscribe((/**
             * @param {?} map
             * @return {?}
             */
            (map$$1) => {
                console.log("routeMapAPI:", map$$1);
                this.routeMap = RouteUtils.convertJsonToRouterMap(map$$1);
                console.log("router map:", this.routeMap);
            }));
        }
        this.listenRouterEvent();
    }
    /**
     * @param {?} func
     * @param {...?} extras
     * @return {?}
     */
    navigate(func, ...extras) {
        /** @type {?} */
        let router = this.injector.get(Router);
        console.log("navigate:", router, func, this.routeMap[func].Path);
        if (router && this.routeMap[func]) {
            if (((/** @type {?} */ (window))).FirebasePlugin)
                ((/** @type {?} */ (window))).FirebasePlugin.setScreenName(this.routeMap[func].Function);
            // this.currentFunction = this.routeMap[func].Function;
            if (extras)
                router.navigate([this.routeMap[func].Path, ...extras]);
            else
                router.navigate([this.routeMap[func].Path]);
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getUrl(page) {
        return this.routeMap[page] ? this.routeMap[page].Path : '';
    }
    /**
     * @return {?}
     */
    getCurrentFunction() {
        /** @type {?} */
        let router = this.injector.get(Router);
        /** @type {?} */
        let filtered = Object.keys(this.routeMap).filter((/**
         * @param {?} x
         * @return {?}
         */
        x => router.isActive(this.routeMap[x].Path, false)))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.routeMap[x].Function));
        if (filtered.length > 0) {
            return filtered[0];
        }
        else {
            return "Not Found";
        }
    }
    /**
     * @return {?}
     */
    getRouteMap() {
        return this.routeMap;
    }
    /**
     * @param {?=} clearCache
     * @return {?}
     */
    back(clearCache = true) {
        console.log("router back to:", this.previousUrl);
        if (this.previousUrl) {
            if (clearCache && this.routeReuseStrategy["deleteRouteSnapshot"]) {
                ((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot();
            }
            /** @type {?} */
            let router = this.injector.get(Router);
            router.navigate([this.previousUrl]);
        }
    }
    /**
     * @return {?}
     */
    getCurrentMenuObject() {
        return this.currentMenuObject;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setCurrentMenuObject(val) {
        this.currentMenuObject = val;
    }
    /**
     * @private
     * @return {?}
     */
    listenRouterEvent() {
        /** @type {?} */
        let router = this.injector.get(Router);
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
        }));
    }
}
AppRouter.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
AppRouter.ctorParameters = () => [
    { type: Injector },
    { type: APIFactory },
    { type: APIDispatch },
    { type: RouteReuseStrategy }
];
/** @nocollapse */ AppRouter.ngInjectableDef = defineInjectable({ factory: function AppRouter_Factory() { return new AppRouter(inject(INJECTOR), inject(APIFactory), inject(APIDispatch), inject(RouteReuseStrategy)); }, token: AppRouter, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const YESNO = {
    YES: 'Y',
    NO: 'N',
};
/** @enum {string} */
const TIMEBASE = {
    DAY: 'Day',
    WEEK: 'Week',
    MONTH: 'Month',
    QUARTER: 'Quarter',
    YEAR: 'Year',
};
/** @enum {string} */
const SUBMITGOALTYPE = {
    ALL: 'All',
    PLAN: 'Plan',
};
/** @enum {string} */
const PERFORMANCETYPE = {
    PERSONAL: 'P',
    TEAM: 'T',
};
/** @enum {number} */
const APPMODE = {
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
const jwt_decode = _jwt_decode;
class DefaultLoginMgr {
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
    constructor(deviceService, APIFactory$$1, dispatcher, injector, tokenStore, router, APP_CONFIG, customLoginMgr, pushIDMgr) {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DefaultLoginMgr.ngInjectableDef = defineInjectable({ factory: function DefaultLoginMgr_Factory() { return new DefaultLoginMgr(inject(DeviceService), inject(APIFactory), inject(APIDispatch), inject(INJECTOR), inject(LoginTokenStore), inject(AppRouter), inject(ConfigToken), inject(LoginMgrToken, 8), inject(PushIDMgrToken, 8)); }, token: DefaultLoginMgr, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckPermissionService {
    /**
     * @param {?} injector
     * @param {?} loginMgr
     * @param {?} permissionCheck
     */
    constructor(injector, loginMgr, permissionCheck) {
        this.injector = injector;
        this.loginMgr = loginMgr;
        this.permissionCheck = permissionCheck;
        this.permissionMap = {};
        this.userRole = [];
    }
    /**
     * @return {?}
     */
    init() {
        console.log('init check permission service');
        if (!this.permissionCheck) {
            this.loadJson();
            this.loginMgr.getLoginInfo().subscribe((/**
             * @param {?} info
             * @return {?}
             */
            (info) => {
                console.log('check permission subscribe:', info);
                if (info)
                    this.userRole = info.AppUseMode;
            }));
        }
        else
            this.permissionCheck.init();
    }
    /**
     * @private
     * @return {?}
     */
    loadJson() {
        //call api to get route map
        /** @type {?} */
        let apiFactory = this.injector.get(APIFactory);
        /** @type {?} */
        let apiDispatcher = this.injector.get(APIDispatch);
        if (apiFactory && apiDispatcher) {
            /** @type {?} */
            let routerMapAPI = apiFactory.getAPI("getRouterMap");
            if (routerMapAPI) {
                apiDispatcher.dispatch(routerMapAPI).subscribe((/**
                 * @param {?} map
                 * @return {?}
                 */
                (map$$1) => {
                    this.permissionMap = RouteUtils.convertJsonToRouterMap(map$$1);
                    console.log("page permission map:", this.permissionMap);
                }));
            }
        }
        else {
            console.log("Check-permission init error: apiFactory or Dispatcher not found.");
        }
    }
    /**
     * @param {?} authObj
     * @return {?}
     */
    authRoute(authObj) {
        if (!authObj.status)
            return authObj;
        /** @type {?} */
        let pageId = authObj.payload.func;
        console.log(this.permissionMap);
        if (pageId in Object.keys(this.permissionMap)) {
            authObj.status = this.checkPagePermission(pageId);
            if (!authObj.status) {
                authObj.error = AuthError.PERMISSION_DENIED;
            }
        }
        return authObj;
    }
    /**
     * @param {?} menuList
     * @return {?}
     */
    authMenu(menuList) {
        if (this.permissionCheck) {
            return this.permissionCheck.checkMenuPermission(menuList, this.userRole);
        }
        else {
            //default permission check
            console.log("check menu permission:", menuList, this.permissionMap);
            return menuList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (Object.keys(this.permissionMap).includes(x)) {
                    return this.checkPagePermission(x);
                }
                else
                    return true;
            }));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    checkPagePermission(name) {
        if (this.permissionCheck)
            return this.permissionCheck.checkPagePermission(name, this.userRole);
        else
            return this.userRole
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => !this.permissionMap[name]["Role"] || (this.permissionMap[name]["Role"].indexOf(x) > -1)))
                .reduce((/**
             * @param {?} acc
             * @param {?} current
             * @return {?}
             */
            (acc, current) => acc || current), false);
    }
}
CheckPermissionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CheckPermissionService.ctorParameters = () => [
    { type: Injector },
    { type: DefaultLoginMgr },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkPermissionToken,] }] }
];
/** @nocollapse */ CheckPermissionService.ngInjectableDef = defineInjectable({ factory: function CheckPermissionService_Factory() { return new CheckPermissionService(inject(INJECTOR), inject(DefaultLoginMgr), inject(checkPermissionToken, 8)); }, token: CheckPermissionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ACTION_STATUS = {
    AVAILABLE: 0,
    PENDING: 1,
};
ACTION_STATUS[ACTION_STATUS.AVAILABLE] = 'AVAILABLE';
ACTION_STATUS[ACTION_STATUS.PENDING] = 'PENDING';
class ActionEvent {
}
class ActionService {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.currentAction = null;
        this.actionIntervalSec = 800;
        this.status = ACTION_STATUS.AVAILABLE;
        this.statusSubject = new BehaviorSubject(this.status);
        this.actionSuscribe = new Subject();
        this.actionIntervalSec = this.APP_CONFIG.ACTION_INTERVAL;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authAction(payload) {
        if (this.status === ACTION_STATUS.AVAILABLE) {
            this.status = ACTION_STATUS.PENDING;
            this.statusSubject.next(this.status);
            //Prevent fast click
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.status = ACTION_STATUS.AVAILABLE;
                this.statusSubject.next(this.status);
            }), this.actionIntervalSec);
        }
        else {
            //Other Action is active
            payload.status = false;
            payload.error = AuthError.PENDING_ACTION;
        }
        return payload;
    }
    /**
     * @return {?}
     */
    getCurrentAction() {
        return this.currentAction;
    }
    /**
     * @return {?}
     */
    getActionStatus() {
        return this.statusSubject.asObservable();
    }
    /**
     * @return {?}
     */
    onActionClick() {
        return this.actionSuscribe.asObservable();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    actionClick(event) {
        this.actionSuscribe.next(event);
    }
}
ActionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ActionService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ ActionService.ngInjectableDef = defineInjectable({ factory: function ActionService_Factory() { return new ActionService(inject(ConfigToken)); }, token: ActionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} checkPermissionService
     * @param {?} actionService
     * @param {?} customAuthAction
     * @param {?} customAuthRoute
     */
    constructor(checkPermissionService, actionService, customAuthAction, customAuthRoute) {
        this.checkPermissionService = checkPermissionService;
        this.actionService = actionService;
        this.customAuthAction = customAuthAction;
        this.customAuthRoute = customAuthRoute;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    authRoute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let result = of(new AuthObject(data)).pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.checkPermissionService.authRoute(x))));
            if (this.customAuthRoute) {
                result.pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => this.customAuthRoute.authRoute(x))));
            }
            return result.pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => { return { status: x.status, error: x.error }; }))).toPromise();
        });
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authAction(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let result = of(new AuthObject(payload)).pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.actionService.authAction(x))));
            if (this.customAuthAction) {
                result.pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => this.customAuthAction.authAction(x))));
            }
            return result.pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => { return { status: x.status, error: x.error }; }))).toPromise();
        });
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AuthService.ctorParameters = () => [
    { type: CheckPermissionService },
    { type: ActionService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authActionToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authRouteToken,] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(CheckPermissionService), inject(ActionService), inject(authActionToken, 8), inject(authRouteToken, 8)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionDirective {
    /**
     * @param {?} authService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} actionService
     * @param {?} appRouter
     * @param {?} elRef
     * @param {?} actionDirectiveTask
     */
    constructor(authService, APIFactory$$1, dispatcher, deviceService, actionService, appRouter, elRef, actionDirectiveTask) {
        this.authService = authService;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.actionService = actionService;
        this.appRouter = appRouter;
        this.elRef = elRef;
        this.actionDirectiveTask = actionDirectiveTask;
        this.actionClick = new EventEmitter();
        this.isDisabled = false;
        this.actionService.getActionStatus().subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            this.isDisabled = status === ACTION_STATUS.PENDING;
        }));
    }
    // start of highlight digital track
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
    // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
    /**
     * @param {?} e
     * @return {?}
     */
    onclick(e) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('action click:', this.action, e);
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            console.log("actionClick after output: ", e);
            /** @type {?} */
            let event = new ActionEvent();
            event.action = this.action;
            event.event = e;
            this.actionService.actionClick(event);
            /** @type {?} */
            let isAuth = yield this.authService.authAction({ action: this.action });
            if (isAuth.status) {
                this.actionClick.emit(e);
                console.log("actionClick output: ", e);
                if (this.actionDirectiveTask) {
                    yield this.actionDirectiveTask.doTask(this.action);
                }
            }
            else {
                console.log(`action: ${this.action} auth failed.`);
            }
            /** @type {?} */
            let ActionAPI = this.APIFactory.getAPI("LogAction");
            ((/** @type {?} */ (ActionAPI))).action = this.action;
            ((/** @type {?} */ (ActionAPI))).time = new Date();
            ((/** @type {?} */ (ActionAPI))).valid = isAuth.status;
            ((/** @type {?} */ (ActionAPI))).message = isAuth.error;
            ((/** @type {?} */ (ActionAPI))).Function = this.appRouter.getCurrentFunction();
            ((/** @type {?} */ (ActionAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
            ((/** @type {?} */ (ActionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
            /** @type {?} */
            let resp = yield this.dispatcher.dispatch(ActionAPI).toPromise();
            console.log("log Action resp:", resp);
        });
    }
}
ActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Action]'
            },] }
];
ActionDirective.ctorParameters = () => [
    { type: AuthService },
    { type: APIFactory },
    { type: APIDispatch },
    { type: DeviceService },
    { type: ActionService },
    { type: AppRouter },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [actionDirectiveTaskToken,] }] }
];
ActionDirective.propDecorators = {
    action: [{ type: Input }],
    actionClick: [{ type: Output }],
    isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    onclick: [{ type: HostListener, args: ['onClick', ['$event'],] }, { type: HostListener, args: ['onClickLink', ['$event'],] }, { type: HostListener, args: ['onTabChildClick', ['$event'],] }, { type: HostListener, args: ['ClickBtn', ['$event'],] }, { type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteDatabase {
    /**
     * @param {?} name
     * @param {?} key
     */
    constructor(name, key) {
        this.dbName = name;
        this.key = key;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.dbName;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.key;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    setName(name) {
        this.dbName = name;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    setkey(key) {
        this.key = key;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteColumn {
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} type
     * @param {?} isPrimaryKey
     * @param {?} isAutoincrement
     */
    constructor(name, value, type, isPrimaryKey, isAutoincrement) {
        this.colName = name;
        this.colValue = value;
        this.isPrimaryKey = isPrimaryKey;
        this.isAutoincrement = isAutoincrement;
        this.type = type;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.colName;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.colValue;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setValue(val) {
        if (this.type == 'text')
            this.colValue = val.toString();
        else if (this.type == 'integer')
            this.colValue = parseInt(val);
        else if (this.type == 'real')
            this.colValue = parseFloat(val);
        else
            this.colValue = val;
    }
    /**
     * @return {?}
     */
    getIsPrimaryKey() {
        return this.isPrimaryKey;
    }
    /**
     * @return {?}
     */
    getIsAutoincrement() {
        return this.isAutoincrement;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteTable {
    /**
     * @param {?} name
     * @param {?} columns
     */
    constructor(name, columns) {
        this.tableName = name;
        this.columns = columns;
        this.restrictions = [];
    }
    /**
     * @param {?} col
     * @param {?} value
     * @return {?}
     */
    setValue(col, value) {
        this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col)).forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => {
            col.setValue(value);
        }));
    }
    /**
     * @param {?} col
     * @return {?}
     */
    getValue(col) {
        /** @type {?} */
        let cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col));
        return col.length > 0 ? cols[0].getValue() : null;
    }
    /**
     * @param {?} col
     * @return {?}
     */
    hasColumn(col) {
        /** @type {?} */
        let cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col));
        return cols.length > 0;
    }
    /**
     * @return {?}
     */
    getTableName() {
        return this.tableName;
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @param {?} restriction
     * @return {?}
     */
    addRestriction(restriction) {
        this.restrictions.push(restriction);
    }
    /**
     * @return {?}
     */
    getRestrictions() {
        return this.restrictions;
    }
    /**
     * @return {?}
     */
    cloneTable() {
        /** @type {?} */
        var colArray = [];
        for (var column of this.columns) {
            /** @type {?} */
            var clone_obj = Object.create(SQLiteColumn.prototype);
            clone_obj = Object.assign(clone_obj, column);
            colArray.push(clone_obj);
        }
        return new SQLiteTable(this.tableName, colArray);
    }
    /**
     * @return {?}
     */
    isSetted() {
        return this.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined)).length > 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LimitRestriction {
    /**
     * @param {?=} values
     */
    constructor(values = []) {
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `LIMIT ${this.values[0].toString()} `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OffsetRestriction {
    /**
     * @param {?=} values
     */
    constructor(values = []) {
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `OFFSET ${this.values[0]} `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLCommand {
    /**
     * @param {?} instruction
     * @param {?} params
     */
    constructor(instruction, params) {
        this.params = new Array();
        this.sql = instruction;
        this.params = params;
    }
    /**
     * @param {?} instruction
     * @return {?}
     */
    setSql(instruction) {
        this.sql = instruction;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    setParam(param) {
        this.params.push(param);
    }
    /**
     * @return {?}
     */
    getSql() {
        return this.sql;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.params;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderByRestriction {
    /**
     * @param {?=} values
     */
    constructor(values = []) {
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        /** @type {?} */
        let str = this.values.map((/**
         * @param {?} x
         * @return {?}
         */
        x => `${x.column} ${x.order}`)).reduce((/**
         * @param {?} prev
         * @param {?} current
         * @return {?}
         */
        (prev, current) => prev + ',' + current));
        return `ORDER BY ${str} `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SQLiteDao {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.transactionArr = [];
        this.config = config;
    }
    /**
     * @return {?}
     */
    openDataBase() {
        /** @type {?} */
        let dbObj = this.config;
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            ((/** @type {?} */ (window))).sqlitePlugin.openDatabase({
                name: dbObj.getName() + '.db',
                location: 'default',
                key: dbObj.getKey(),
                androidDatabaseImplementation: 'system'
            }, (/**
             * @param {?} db
             * @return {?}
             */
            db => {
                this.connection = db;
                res(db);
            }), (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let error = new Error("Sqlite DB open error.");
                rej(error);
            }));
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    queryByTable(tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var order_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof OrderByRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var limit_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof LimitRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var offset_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof OffsetRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var sql_count_command = `SELECT count(*) FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}`;
        /** @type {?} */
        var sql_command = `SELECT * FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}${order_str}${limit_str}${offset_str}`;
        /** @type {?} */
        var sql_obj = new SQLCommand(sql_command, conditon_val);
        /** @type {?} */
        var sqlcount_obj = new SQLCommand(sql_count_command, conditon_val);
        console.group("run select sql command");
        console.log(sql_command);
        console.log('params', conditon_val);
        console.groupEnd();
        return this.runQuerySqlcommand(sql_obj, sqlcount_obj);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    insertByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformInsert(tableObject);
        console.group("run insert sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    updateByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformUpdate(tableObject);
        console.group("run update sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    deleteByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformDelete(tableObject);
        console.group("run delete sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionInsert(tableObject) {
        this.addTransactionCommand(this.transformInsert(tableObject));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionUpdate(tableObject) {
        this.addTransactionCommand(this.transformUpdate(tableObject));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionDelete(tableObject) {
        this.addTransactionCommand(this.transformDelete(tableObject));
    }
    /**
     * @param {?} command
     * @return {?}
     */
    transactionSqlCommand(command) {
        this.addTransactionCommand(command);
    }
    /**
     * @param {?} sql_command
     * @return {?}
     */
    excuteSqlCommand(sql_command) {
        console.log('excuteSqlCommand:', sql_command);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                for (let command of sql_command) {
                    tr.executeSql(command.getSql(), command.getParams(), (/**
                     * @return {?}
                     */
                    () => { }), (/**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */
                    (_, error) => {
                        console.log('execute sql error:', error);
                    }));
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getSchema() {
        /** @type {?} */
        var schema = new Map();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                tr.executeSql('SELECT name,sql FROM sqlite_master WHERE type="table" OR type="view"', [], (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                (tx, res) => {
                    //拿到TABLE名稱，query table schema
                    for (var len = 0; len < res.rows.length; len++) {
                        /** @type {?} */
                        var table_name = res.rows.item(len).name;
                        /** @type {?} */
                        var table_sql = res.rows.item(len).sql;
                        this.getColumns(tx, schema, table_name, table_sql);
                    }
                }), (/**
                 * @param {?} tx
                 * @param {?} error
                 * @return {?}
                 */
                (tx, error) => {
                    console.log('select table name error:', error.message);
                }));
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            (_, error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(schema);
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    runTransaction() {
        return Observable.create(((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let batchArr = this.transactionArr.map((/**
             * @param {?} cmd
             * @return {?}
             */
            (cmd) => [cmd.getSql(), cmd.getParams()]));
            console.group('run transaction SQL:');
            console.log('command:', batchArr);
            console.groupEnd();
            this.connection.sqlBatch(batchArr, (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }));
        })));
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        this.transactionArr = [];
    }
    /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    getColumns(tx, schema, table_name, table_sql) {
        /** @type {?} */
        var tmp_colArray = [];
        console.log("getColumns:", table_name, table_sql);
        tx.executeSql('PRAGMA table_info(' + table_name + ')', [], (/**
         * @param {?} tx
         * @param {?} info_res
         * @return {?}
         */
        (tx, info_res) => {
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
        }), (/**
         * @param {?} tx
         * @param {?} error
         * @return {?}
         */
        (tx, error) => {
            console.log('Get table column list error:', error.message);
            throw new APPError("F00019", error.message);
        }));
    }
    /**
     * @private
     * @param {?} observer
     * @param {?} sql_command
     * @return {?}
     */
    runSqlCommand(observer, sql_command) {
        this.connection.transaction((/**
         * @param {?} tr
         * @return {?}
         */
        tr => {
            tr.executeSql(sql_command.getSql(), sql_command.getParams(), (/**
             * @param {?} tx
             * @param {?} res
             * @return {?}
             */
            (tx, res) => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            (_, error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }));
        }));
    }
    /**
     * @private
     * @param {?} sql_obj
     * @param {?} sql_count_obj
     * @return {?}
     */
    runQuerySqlcommand(sql_obj, sql_count_obj) {
        console.log("runQuerySqlcommand", sql_obj);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                tr.executeSql(sql_obj.getSql(), sql_obj.getParams(), (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                (tx, res) => {
                    tx.executeSql(sql_count_obj.getSql(), sql_count_obj.getParams(), (/**
                     * @param {?} tx
                     * @param {?} res_count
                     * @return {?}
                     */
                    (tx, res_count) => {
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
                    }), (/**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */
                    (_, error) => {
                        console.log(error.message);
                        observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                        observer.complete();
                        throw new APPError("F00017", error.message);
                    }));
                }), (/**
                 * @param {?} _
                 * @param {?} error
                 * @return {?}
                 */
                (_, error) => {
                    console.log(error.message);
                    observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                    observer.complete();
                    throw new APPError("F00017", error.message);
                }));
            }));
        }));
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformInsert(tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue()));
        /** @type {?} */
        var sql_command = `INSERT INTO ${tableObject.getTableName()} (${setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName())).join(',')}) VALUES (${setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => '?')).join(',')})`;
        return new SQLCommand(sql_command, setted_vals);
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformUpdate(tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue()));
        /** @type {?} */
        var set_str = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => ` ${x.getName()}=?`)).join(',');
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var sql_command = `UPDATE ${tableObject.getTableName()} SET ${set_str} WHERE 1=1 ${conditon_str}`;
        return new SQLCommand(sql_command, [...setted_vals, ...conditon_val]);
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformDelete(tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var sql_command = `DELETE FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}`;
        return new SQLCommand(sql_command, conditon_val);
    }
    /**
     * @private
     * @param {?} sql_command
     * @return {?}
     */
    addTransactionCommand(sql_command) {
        this.transactionArr.push(sql_command);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebSQLDao extends SQLiteDao {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
    }
    /**
     * @return {?}
     */
    openDataBase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = window.openDatabase(this.config.getName(), '1.0', this.config.getName(), 2 * 1024 * 1024);
            console.log("OpenDataBase:", this.connection);
            return this.connection;
        });
    }
    /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    getColumns(tx, schema, table_name, table_sql) {
        /** @type {?} */
        let tmp_colArray = [];
        /** @type {?} */
        let columnStr = [];
        /** @type {?} */
        let isView = table_sql.indexOf('CREATE VIEW') > -1;
        if (!isView) {
            columnStr = table_sql.split('(')[1].split(',');
            tmp_colArray = columnStr.map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                /** @type {?} */
                let isPK = x.toUpperCase().indexOf("PRIMARY KEY") > -1;
                /** @type {?} */
                let name = x.trim().split(' ')[0];
                /** @type {?} */
                let isAutoIncrement = isPK && (x.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                /** @type {?} */
                let type = x.toUpperCase().indexOf("INTEGER") > -1 ? 'Integer' : 'Text';
                return new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement);
            }));
        }
        else {
            // VIEW
            /** @type {?} */
            let mainTableIndex = table_sql.split(' ').indexOf("LEFT") - 1;
            /** @type {?} */
            let extTableIndex = mainTableIndex + 3;
            /** @type {?} */
            let mainTableName = table_sql.split(' ')[mainTableIndex];
            /** @type {?} */
            let extTableName = table_sql.split(' ')[extTableIndex];
            /** @type {?} */
            let mainTable = schema.get(mainTableName);
            /** @type {?} */
            let extTable = schema.get(extTableName);
            tmp_colArray = [...mainTable.getColumns(), ...extTable.getColumns()];
            tmp_colArray = tmp_colArray.reduce((/**
             * @param {?} unique
             * @param {?} o
             * @return {?}
             */
            (unique, o) => {
                if (!unique.some((/**
                 * @param {?} obj
                 * @return {?}
                 */
                obj => obj.getName() === o.getName()))) {
                    unique.push(o);
                }
                return unique;
            }), []);
        }
        /** @type {?} */
        let tableObj = new SQLiteTable(table_name, tmp_colArray);
        schema.set(table_name, tableObj);
    }
    /**
     * @return {?}
     */
    runTransaction() {
        return Observable.create(((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let batchArr = this.transactionArr.map((/**
             * @param {?} cmd
             * @return {?}
             */
            (cmd) => [cmd.getSql(), cmd.getParams()]));
            console.group('run transaction SQL:');
            console.log('command:', batchArr);
            console.groupEnd();
            this.connection.transaction((/**
             * @param {?} tx
             * @return {?}
             */
            (tx) => {
                this.transactionArr.forEach((/**
                 * @param {?} cmd
                 * @return {?}
                 */
                cmd => {
                    tx.executeSql(cmd.getSql(), cmd.getParams());
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        })));
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        this.transactionArr = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaoFactory {
    /**
     * @private
     * @param {?} deviceService
     * @param {?} errorHandler
     * @param {?} APP_CONFIG
     */
    constructor(deviceService, errorHandler, APP_CONFIG) {
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
    getTable(dbName, tableName) {
        if (this.tableMapping.has(dbName)) {
            if (this.tableMapping.get(dbName).has(tableName)) {
                return this.tableMapping.get(dbName).get(tableName).cloneTable();
            }
            else {
                this.errorHandler.handleError(new APPError("F00012", `Cannot Find table ${tableName} in DB ${dbName}.`));
                return undefined;
            }
        }
        this.errorHandler.handleError(new APPError("F00012", `Cannot Find table ${tableName} in DB ${dbName}.`));
        return undefined;
    }
    /**
     * @param {?} tableName
     * @return {?}
     */
    getDefaultTable(tableName) {
        return this.getTable("Main", tableName);
    }
    /**
     * @param {?} dbName
     * @return {?}
     */
    getDao(dbName) {
        console.log('get Dao:', dbName);
        if (this.dbMapping.has(dbName)) {
            this.dbMapping.get(dbName).clearTransaction();
            return this.dbMapping.get(dbName);
        }
        else {
            this.errorHandler.handleError(new APPError("F00011", `Cannot Find Sqlite DB ${dbName} Dao.`));
            return undefined;
        }
    }
    /**
     * @return {?}
     */
    getDefaultDao() {
        return this.getDao("Main");
    }
    /**
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            //get each db dao
            if (this.APP_CONFIG.ENV == 'DEV')
                return;
            else {
                yield this.mappingDB();
            }
        });
    }
    /**
     * @return {?}
     */
    refreshTableSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
            /** @type {?} */
            let db_names = Object.keys(db_config);
            for (var name of db_names) {
                yield this.getTableSchema(name, db_config);
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                console.group("refreshTableSchema");
                console.log(this.dbMapping);
                console.log(this.tableMapping);
                console.groupEnd();
            }), 5000);
        });
    }
    /**
     * @private
     * @return {?}
     */
    mappingDB() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
            /** @type {?} */
            let db_names = Object.keys(db_config);
            for (var name of db_names) {
                console.log('getSchema:', name);
                yield this.getSchema(name, db_config);
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                console.group("mappingDB");
                console.log(this.dbMapping);
                console.log(this.tableMapping);
                console.groupEnd();
            }), 5000);
        });
    }
    /**
     * @private
     * @param {?} dbname
     * @param {?} config
     * @return {?}
     */
    getSchema(dbname, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let key = yield this.getDatabaseKey(dbname, config);
                yield this.openDatabase(dbname, config, key);
            }
            catch (error) {
                console.warn("getSchema error:", error.message);
                /** @type {?} */
                let err = new APPError("F00010", "Sqlite DB open error.");
                this.errorHandler.handleError(err);
            }
        });
    }
    /**
     * @private
     * @param {?} dbname
     * @param {?} config
     * @return {?}
     */
    getDatabaseKey(dbname, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let resp = yield this.deviceService.getSecureStorage(config[dbname].name).toPromise();
                console.log("getDatabaseKey resp:", resp);
                if (resp.includes("Device is not secure")) { //which Device is not secure
                    throw new Error(resp);
                }
                else if (resp) { // if have key in keyStore/keyChain
                    return resp;
                }
                else {
                    /** @type {?} */
                    let setKeyResp = yield this.deviceService.setSecureStorage(config[dbname].name, v4()).toPromise();
                    if (setKeyResp) {
                        /** @type {?} */
                        let key = yield this.deviceService.getSecureStorage(config[dbname].name).toPromise();
                        return key;
                    }
                }
            }
            catch (error) {
                console.log("getDatabaseKey error, use localStorage");
                if (this.deviceService.getLocalStorage(config[dbname].name)) {
                    return this.deviceService.getLocalStorage(config[dbname].name);
                }
                else {
                    /** @type {?} */
                    let key = v4();
                    this.deviceService.setLocalStorage(config[dbname].name, key);
                    return key;
                }
            }
        });
    }
    /**
     * @private
     * @param {?} dbname
     * @param {?} config
     * @param {?} key
     * @return {?}
     */
    openDatabase(dbname, config, key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let db_config = new SQLiteDatabase(config[dbname].name, key);
                /** @type {?} */
                let dao = yield this.createDao(db_config);
                this.dbMapping.set(config[dbname].name, dao);
                // await this.getTableSchema(dbname, config);
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00010", error.message));
            }
        });
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createDao(config) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let dao;
            if (this.APP_CONFIG.ENV === 'DEV_WebSQL') {
                dao = new WebSQLDao(config);
            }
            else {
                dao = new SQLiteDao(config);
            }
            yield dao.openDataBase();
            return dao;
        });
    }
    /**
     * @private
     * @param {?} dbname
     * @param {?} config
     * @return {?}
     */
    getTableSchema(dbname, config) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let tableMap = yield this.dbMapping.get(config[dbname].name).getSchema().toPromise();
            this.tableMapping.set(config[dbname].name, tableMap);
        });
    }
    /**
     * @param {?} dbname
     * @return {?}
     */
    clearDatabaseData(dbname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let dao = this.dbMapping.get(dbname);
                if (dao) {
                    /** @type {?} */
                    let tableMap = this.tableMapping.get(dbname);
                    tableMap.forEach((/**
                     * @param {?} table
                     * @param {?} table_name
                     * @return {?}
                     */
                    (table, table_name) => {
                        // Not View
                        if (table_name.indexOf('TW_LH_SD') !== -1 && table_name.indexOf('TW_LH_SD_VW') == -1) {
                            dao.transactionDelete(table);
                        }
                    }));
                    /** @type {?} */
                    let resp = yield dao.runTransaction().toPromise();
                    console.log("clearDatabaseData resp:", resp);
                }
                else {
                    throw new Error(`Cannot find dao ${dbname}.`);
                }
            }
            catch (error) {
                throw new APPError('F00022', `Clear database error, ${error.message}`);
            }
        });
    }
}
DaoFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DaoFactory.ctorParameters = () => [
    { type: DeviceService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ DaoFactory.ngInjectableDef = defineInjectable({ factory: function DaoFactory_Factory() { return new DaoFactory(inject(DeviceService), inject(ErrorHandler), inject(ConfigToken, 8)); }, token: DaoFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotEqualRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} <> ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientCustomDao {
    /**
     * @param {?} dao
     */
    constructor(dao) {
        this.baseDao = dao;
    }
    /**
     * @return {?}
     */
    openDataBase() {
        return this.baseDao.openDataBase();
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    queryByTable(tableObject) {
        if (tableObject.hasColumn('IsDelete')) {
            tableObject.addRestriction(new NotEqualRestriction("IsDelete", ["Y"]));
        }
        return this.baseDao.queryByTable(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    insertByTable(tableObject) {
        /** @type {?} */
        let clientID = v4();
        if (tableObject.getValue('ClientID') == ''
            || tableObject.getValue('ClientID') == undefined) {
            tableObject.setValue("ClientID", clientID);
        }
        tableObject.setValue("ClientTime", new Date().getTime());
        tableObject.setValue("DataSource", "APP");
        tableObject.setValue("IsDelete", "N");
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.baseDao.insertByTable(tableObject).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                resp.Header.clientID = clientID;
                observer.next(resp);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    updateByTable(tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    deleteByTable(tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    }
    /**
     * @param {?} sql_command
     * @return {?}
     */
    excuteSqlCommand(sql_command) {
        return this.baseDao.excuteSqlCommand(sql_command);
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.baseDao.getSchema();
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionInsert(tableObject) {
        if (tableObject.getValue('ClientID') == ''
            || tableObject.getValue('ClientID') == undefined) {
            tableObject.setValue("ClientID", v4());
        }
        tableObject.setValue("ClientTime", new Date().getTime());
        tableObject.setValue("DataSource", "APP");
        tableObject.setValue("IsDelete", "N");
        this.baseDao.transactionInsert(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionUpdate(tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionDelete(tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    transactionSqlCommand(command) {
        this.baseDao.transactionSqlCommand(command);
    }
    /**
     * @return {?}
     */
    runTransaction() {
        return this.baseDao.runTransaction();
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        return this.baseDao.clearTransaction();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SqliteExecutorComponent {
    /**
     * @param {?} daoFactory
     * @param {?} _location
     */
    constructor(daoFactory, _location) {
        this.daoFactory = daoFactory;
        this._location = _location;
        this.isHasData = false;
        this.recordLength = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let selectOption = [];
        for (let item in DATABASE_TABLES) {
            if (isNaN(Number(item))) {
                console.log('value:', item, '  name:', DATABASE_TABLES[item]);
                selectOption.push(new SelectOption(item, DATABASE_TABLES[item]));
            }
        }
        this.selectTablesOptionList = selectOption;
        this.selectTableChange(this.selectTablesOptionList[0].getValue());
    }
    /**
     * @return {?}
     */
    goToLastPage() {
        this._location.back();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.queryBytable(this.currentDbName, this.currentTable);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectTableChange(event) {
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
    }
    /**
     * @param {?} dbName
     * @param {?} tableName
     * @return {?}
     */
    queryBytable(dbName, tableName) {
        console.log("dbName: ", dbName, " tableName: ", tableName);
        /** @type {?} */
        let dao;
        /** @type {?} */
        let tableObj;
        dao = this.daoFactory.getDao(dbName);
        dao = new ClientCustomDao(dao);
        tableObj = this.daoFactory.getTable(dbName, tableName);
        this.tableColumns = tableObj.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName()));
        console.log("dao: ", dao);
        console.log("tableObj: ", tableObj);
        dao.queryByTable(tableObj).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log("response data: ", data);
            if (data.Header['status']) {
                this.recordLength = data.Header['record_length'];
                this.responseBody = data.Body;
                console.log("responseBody: ", this.responseBody);
                this.responseBody.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    // console.log("element key: ", Object.keys(element));
                    // console.log("element values: ", Object.values(element));
                    console.log("element: ", element);
                    element.values = Object.values(element);
                }));
                this.isHasData = true;
            }
            else {
                this.isHasData = false;
                alert("fail");
            }
            console.log("Sqlite data: ", data);
        }));
    }
}
SqliteExecutorComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-sqlite-executor',
                template: "<div class=\"layout-full-page\">\n  <input type=\"button\" value=\"back\" (click)=\"goToLastPage()\">\n  <select form=\"carform\" [ngModel]=\"selectTable\" (ngModelChange)=\"selectTableChange($event)\">\n    <ng-container *ngFor=\"let tableOption of selectTablesOptionList\">\n        <option [value]=\"tableOption.getValue()\">{{tableOption.getName()}}</option>\n    </ng-container>\n  </select>\n  <input type=\"button\" value=\"refresh\" (click)=\"refresh()\">\n  <ng-container *ngIf=\"isHasData\">\n    <span> length: {{recordLength}}</span>\n    <table border=\"1\">\n      <thead>\n        <tr>\n          <th>N</th>\n          <ng-container *ngFor=\"let column of tableColumns\">\n          <th>{{column}}</th>\n          </ng-container>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let element of responseBody; let i = index\">\n          <th>{{i+1}}</th>\n          <ng-container *ngFor=\"let value of element.values\">\n            <th>{{value}}</th>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </ng-container>\n  \n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-full-page{box-sizing:border-box;overflow-y:auto;height:100vh;display:inline-block;width:100vw;background-color:#fff;overflow-x:auto;padding:10px}.layout-full-page table{max-width:100vw;width:100%;height:100vh;overflow-y:auto;overflow-x:auto;background-color:#fff}@media (max-width:767px){.layout-full-page{padding-top:30px;padding-left:5px;padding-right:5px}}"]
            }] }
];
SqliteExecutorComponent.ctorParameters = () => [
    { type: DaoFactory },
    { type: Location, decorators: [{ type: Optional }] }
];
/** @enum {string} */
const DATABASE_TABLES = {
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
class SelectOption {
    /**
     * @param {?} value
     * @param {?} name
     */
    constructor(value, name) {
        this._value = value;
        this._name = name;
    }
    /**
     * @return {?}
     */
    getName() {
        return this._name;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this._value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePriceService {
    /**
     * @param {?} loginMgr
     */
    constructor(loginMgr) {
        this.loginMgr = loginMgr;
        this._role = '';
        this._million = 1000000;
        this.loginMgr.getLoginInfo().subscribe((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
            if (info.AppUseMode && info.AppUseMode.length > 0)
                this._role = info.AppUseMode[info.AppUseMode.length - 1];
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    translatePrice(value) {
        /** @type {?} */
        let isCAOorZONEHEAD = (this._role == 'Manager' || this._role == 'Supervisor');
        /** @type {?} */
        let isValueLegal = !isNaN(Number(value));
        if (isValueLegal) {
            return isCAOorZONEHEAD ? this._numberToFix(value / this._million, 1) : value;
        }
        else {
            return value;
        }
    }
    /**
     * @private
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    _numberToFix(n, toFix) {
        /** @type {?} */
        let powNum = Math.pow(10, toFix);
        return Math.round(n * powNum) / powNum;
    }
}
TranslatePriceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TranslatePriceService.ctorParameters = () => [
    { type: DefaultLoginMgr }
];
/** @nocollapse */ TranslatePriceService.ngInjectableDef = defineInjectable({ factory: function TranslatePriceService_Factory() { return new TranslatePriceService(inject(DefaultLoginMgr)); }, token: TranslatePriceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePricePipe {
    /**
     * @param {?} translatePriceService
     */
    constructor(translatePriceService) {
        this.translatePriceService = translatePriceService;
        this.role = '';
        this.million = 1000000;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return this.translatePriceService.translatePrice(value);
    }
}
TranslatePricePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translatePrice',
                pure: false
            },] }
];
TranslatePricePipe.ctorParameters = () => [
    { type: TranslatePriceService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                    CommonModule,
                    FormsModule
                ],
                declarations: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, SqliteExecutorComponent],
                exports: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, HttpClientModule]
            },] }
];

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
class Language {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataSyncTask {
    /**
     * @param {?} errorHandler
     * @param {?} DaoFactory
     * @param {?} registerDataSyncFunc
     */
    constructor(errorHandler, DaoFactory$$1, registerDataSyncFunc) {
        this.errorHandler = errorHandler;
        this.DaoFactory = DaoFactory$$1;
        this.registerDataSyncFunc = registerDataSyncFunc;
    }
    /**
     * @return {?}
     */
    doTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.createTable();
            }
            catch (error) {
                console.warn('cannot run datasync!');
                this.errorHandler.handleError(error);
            }
        });
    }
    /**
     * @return {?}
     */
    refreshSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.DaoFactory.refreshTableSchema();
        });
    }
    /**
     * @private
     * @return {?}
     */
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('create table task');
            /** @type {?} */
            let factory = this.DaoFactory;
            //initial DB
            yield factory.init();
            console.log('factory init finish!');
            /** @type {?} */
            let ProfileDao = factory.getDao("Profile");
            /** @type {?} */
            let MainDao = factory.getDefaultDao();
            if (ProfileDao && MainDao) {
                yield Promise.all([this.runSql(ProfileDao, this.createProfileTableCommand()), this.runSql(MainDao, this.createMainTableCommand())]);
                yield factory.refreshTableSchema();
            }
        });
    }
    /**
     * @private
     * @param {?} dao
     * @param {?} cmd
     * @return {?}
     */
    runSql(dao, cmd) {
        /** @type {?} */
        let SqlCommandArray = [];
        for (let command of cmd) {
            SqlCommandArray.push(new SQLCommand(command, []));
        }
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            dao.excuteSqlCommand(SqlCommandArray).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log('create table res:', resp);
                res();
            }));
        }));
    }
    /**
     * @return {?}
     */
    createProfileTableCommand() {
        /** @type {?} */
        let cmd = [];
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
    }
    /**
     * @return {?}
     */
    createMainTableCommand() {
        /** @type {?} */
        let cmd = [];
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
    }
}
DataSyncTask.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
DataSyncTask.ctorParameters = () => [
    { type: ErrorHandler },
    { type: DaoFactory },
    { type: undefined, decorators: [{ type: Inject, args: [registerDataSyncFuncToken,] }] }
];
/** @nocollapse */ DataSyncTask.ngInjectableDef = defineInjectable({ factory: function DataSyncTask_Factory() { return new DataSyncTask(inject(ErrorHandler), inject(DaoFactory), inject(registerDataSyncFuncToken)); }, token: DataSyncTask, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Setting {
    /**
     * @param {?} id
     * @param {?} name
     * @param {?} val
     */
    constructor(id, name, val) {
        this._settingID = id;
        this._settingName = name;
        this._settingVal = val;
    }
    /**
     * @return {?}
     */
    get SettingID() {
        return this._settingID;
    }
    /**
     * @return {?}
     */
    get SettingName() {
        return this._settingName;
    }
    /**
     * @return {?}
     */
    get SettingVal() {
        return this._settingVal;
    }
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
class AndCompoundRestriction {
    /**
     * @param {?} restrictions
     */
    constructor(restrictions) {
        this.restrictions = restrictions;
    }
    /**
     * @return {?}
     */
    sqlString() {
        /** @type {?} */
        let sqlString = '';
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            if (i != 0)
                sqlString += ' AND ';
            sqlString += '' + restriction.sqlString();
        }));
        return `(` + sqlString + `)`;
    }
    /**
     * @return {?}
     */
    getValues() {
        /** @type {?} */
        let values = new Array();
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            /** @type {?} */
            let array = restriction.getValues();
            values = values.concat(array);
        }));
        return values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EqualRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} = ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GreaterOrEqualRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} >= ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GreaterRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} > ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        /** @type {?} */
        var str = Array(this.values.length).fill('?').join(',');
        return `${this.column} IN (${str}) `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LessOrEqualRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} <= ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LikeRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        /** @type {?} */
        let newArray = [];
        values.forEach((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            newArray.push('%' + val + '%');
        }));
        this.values = newArray;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} LIKE ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotNullRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} IS NOT NULL `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NullRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} IS NULL `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ORCompoundRestriction {
    /**
     * @param {?} restrictions
     */
    constructor(restrictions) {
        this.restrictions = restrictions;
    }
    /**
     * @return {?}
     */
    sqlString() {
        /** @type {?} */
        let sqlString = '';
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            if (i != 0)
                sqlString += ' OR ';
            sqlString += '' + restriction.sqlString();
        }));
        return `(` + sqlString + `)`;
    }
    /**
     * @return {?}
     */
    getValues() {
        /** @type {?} */
        let values = new Array();
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            /** @type {?} */
            let array = restriction.getValues();
            values = values.concat(array);
        }));
        return values;
    }
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
class SettingService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this._debugMode = false;
        this._debugSubject = new BehaviorSubject(this._debugMode);
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let factory = this.getAPIFactory();
        /** @type {?} */
        let dispatcher = this.getAPIDispatch();
        /** @type {?} */
        let settingAPI = (/** @type {?} */ (factory.getAPI('getSetting')));
        console.debug('setting.service fetchCodeData', settingAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            dispatcher.dispatch(settingAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                let bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (let i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    let json = bodyDatas[i];
                    /** @type {?} */
                    let setting = new Setting(json.SettingID, json.SettingName, json.SettingVal);
                    SettingService.settingMap.set(setting.SettingID, setting);
                }
                console.debug('profileCodeMap', SettingService.settingMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} settingID
     * @return {?}
     */
    getSetting(settingID) {
        return SettingService.settingMap.get(settingID);
    }
    /**
     * @param {?} setting
     * @return {?}
     */
    updateSetting(setting) {
        /** @type {?} */
        let settingUpdateAPI = (/** @type {?} */ (this.getAPIFactory().getAPI('updateSetting')));
        settingUpdateAPI.setSettingObject(setting);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.getAPIDispatch().dispatch(settingUpdateAPI).subscribe((/**
             * @param {?} settingData
             * @return {?}
             */
            (settingData) => {
                this._fetchCodeData().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    console.warn('_fetchCodeData', data);
                    observer.next(settingData['Header']);
                    observer.complete();
                }));
            }));
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setDebugMode(val) {
        this._debugMode = val;
        this._debugSubject.next(val);
    }
    /**
     * @return {?}
     */
    getDebugMode() {
        return this._debugSubject.asObservable();
    }
    /**
     * @return {?}
     */
    getAPIFactory() {
        return this.injector.get(APIFactory);
    }
    /**
     * @return {?}
     */
    getAPIDispatch() {
        return this.injector.get(APIDispatch);
    }
    /**
     * @return {?}
     */
    getDeviceService() {
        return this.injector.get(DeviceService);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    deviceChange(token) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("device change firebase token:", token);
            /** @type {?} */
            let updatePushIDAPI = this.getAPIFactory().getAPI("UpdatePushID");
            /** @type {?} */
            let deviceService = this.getDeviceService();
            if (updatePushIDAPI) {
                /** @type {?} */
                let _body = {
                    PushId: token,
                    DeviceSystem: deviceService.getDevicePlatform(),
                    DeviceId: deviceService.getDeviceUUID(),
                    DeviceModel: deviceService.getDeviceManufacturer(),
                    DeviceType: deviceService.isPad() ? "Pad" : "Phone"
                };
                updatePushIDAPI["body"] = _body;
                /** @type {?} */
                let resp = yield this.getAPIDispatch().dispatch(updatePushIDAPI).toPromise();
                console.log("Update PushID resp:", resp);
            }
        });
    }
}
SettingService.settingMap = new Map();
SettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SettingService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingService.ngInjectableDef = defineInjectable({ factory: function SettingService_Factory() { return new SettingService(inject(INJECTOR)); }, token: SettingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewDateChange {
    /**
     * @param {?} __0
     */
    constructor({ date, action }) {
        this._viewDate = date;
        this._action = action;
    }
    /**
     * @return {?}
     */
    get viewDate() {
        return this._viewDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set viewDate(value) {
        this._viewDate = value;
    }
    /**
     * @return {?}
     */
    get action() {
        return this._action;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set action(value) {
        this._action = value;
    }
}
/** @enum {number} */
const ChangeAction = {
    CLICK: 0,
    SWIPE: 1,
};
ChangeAction[ChangeAction.CLICK] = 'CLICK';
ChangeAction[ChangeAction.SWIPE] = 'SWIPE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileCode {
    /**
     * @param {?} TypeID
     * @param {?} Code
     * @param {?} MappingID
     * @param {?} Arguments
     */
    constructor(TypeID, Code, MappingID, Arguments) {
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
    setDisplayText(text) {
        this.displayText = text;
    }
    /**
     * @return {?}
     */
    getCode() {
        return this.Code;
    }
    /**
     * @return {?}
     */
    getTypeId() {
        return this.TypeID;
    }
    /**
     * @return {?}
     */
    getMappingID() {
        return this.MappingID;
    }
    /**
     * @return {?}
     */
    getArguments() {
        return this.Arguments;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class versionInfo {
    /**
     * @param {?=} path
     * @param {?=} version
     */
    constructor(path = '', version = '') {
        this._path = path;
        this._version = version;
    }
    /**
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set path(value) {
        this._path = value;
    }
    /**
     * @return {?}
     */
    get version() {
        return this._version;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set version(value) {
        this._version = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectOption$1 {
    /**
     * @param {?} value
     * @param {?} name
     */
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isDefault
     * @return {THIS}
     */
    setIsDefault(isDefault) {
        (/** @type {?} */ (this)).isDefault = isDefault;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    getName() {
        return this.name;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.value;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    setName(name) {
        this.name = name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SuccessStatus {
    /**
     * @param {?} isSuccess
     */
    constructor(isSuccess) {
        this._isSuccess = isSuccess;
    }
    /**
     * @return {?}
     */
    get isSuccess() {
        return this._isSuccess;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSuccess(value) {
        this._isSuccess = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalExtension {
    /**
     * @param {?} Key
     * @param {?} Value
     */
    constructor(Key, Value) {
        this._Key = Key;
        this._Value = Value;
    }
    /**
     * @return {?}
     */
    get Value() {
        return this._Value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Value(value) {
        this._Value = value;
    }
    /**
     * @return {?}
     */
    get Key() {
        return this._Key;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Key(value) {
        this._Key = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitGoalData {
    /**
     * @param {?} SubmitInfo
     * @param {?} GoalValue
     * @param {?} GoalPlan
     */
    constructor(SubmitInfo, GoalValue, GoalPlan) {
        this.Extensions = [];
        this.SubmitInfo = SubmitInfo;
        this.GoalValue = GoalValue;
        this.GoalPlan = GoalPlan;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitGoalPlan {
    constructor() {
        this.Values = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitGoalPlanInfo {
    /**
     * @param {?} PerformanceType
     * @param {?} Month
     * @param {?} Value
     * @param {?} Extensions
     */
    constructor(PerformanceType, Month, Value, Extensions) {
        this.Extensions = [];
        this.PerformanceType = PerformanceType;
        this.Month = Month;
        this.Value = Value;
        this.Extensions = Extensions;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitGoalSettingValue {
    /**
     * @param {?} DataType
     * @param {?} Value
     * @param {?} Extensions
     */
    constructor(DataType, Value, Extensions) {
        this.Extensions = [];
        this.DataType = DataType;
        this.Value = Value;
        this.Extensions = Extensions;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitGoalInfo {
    constructor() {
        this.Extensions = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigTask {
    /**
     * @param {?} translateService
     * @param {?} deviceService
     * @param {?} settingService
     * @param {?} appRouter
     * @param {?} notificationMgr
     * @param {?} APP_CONFIG
     * @param {?} fetchSettingFinish
     * @param {?} changeFontSize
     * @param {?} fontSizeAccess
     * @param {?} checkPermissionService
     */
    constructor(translateService, deviceService, settingService, appRouter, notificationMgr, APP_CONFIG, fetchSettingFinish, changeFontSize, fontSizeAccess, checkPermissionService) {
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
    doTask() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('do task');
            /** @type {?} */
            var _this = this;
            //do task
            document.addEventListener("deviceready", (/**
             * @return {?}
             */
            function () {
                _this.deviceService.initDeviceAPI();
                if (((/** @type {?} */ (cordova))).plugins.AndroidFontSize) {
                    ((/** @type {?} */ (cordova))).plugins.AndroidFontSize.removeSystemFontSize();
                }
                if (_this.deviceService.getDevicePlatform() == 'Android') {
                    document.addEventListener('screenshotDetect', (/**
                     * @return {?}
                     */
                    function () {
                        alert('Screenshot');
                    }), false);
                }
                else if (_this.deviceService.getDevicePlatform() == 'iOS') {
                    document.addEventListener("screenshot", (/**
                     * @return {?}
                     */
                    function () {
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
            yield Promise.all([this.fetchLanguage(), this.fetchLanguageList(), this.fetchSetting(), this.loadLanguageFile()]);
        });
    }
    /**
     * @private
     * @return {?}
     */
    fetchLanguage() {
        console.log("fetch language func");
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            this.translateService._fetchCurrentLanguage().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("_fetchCurrentLanguage resp:", resp);
                res(resp);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    fetchLanguageList() {
        console.log("fetch language List");
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            this.translateService._fetchCodeData().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                res(resp);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    integrationCheck() {
        try {
            /** @type {?} */
            let needCheckKey = ['SNDToken', 'SNDLanguage'];
            if (this.APP_CONFIG.APP_MODE === APPMODE.Integration) {
                // Check LocalStorage
                /** @type {?} */
                let result = needCheckKey
                    .filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => !this.deviceService.getLocalStorage(key)))
                    .map((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => `Integration mode failed: ${key} not found in localstorage. Please set ${key} into localstorage before switch to S&D.`));
                if (result.length > 0)
                    throw new Error(result[0]);
            }
        }
        catch (error) {
            alert('Integration failed. Please check console for more details.');
            throw new APPError('F00704', error.message);
        }
    }
    /**
     * @private
     * @return {?}
     */
    fetchSetting() {
        console.debug('fetch setting');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            this.settingService._fetchCodeData().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                if (this.changeFontSize) {
                    if (this.fontSizeAccess) {
                        this.fontSizeAccess.getFontSize().subscribe((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        (resp) => {
                            this.changeFontSize.updateFontSize(resp);
                        }));
                    }
                }
                if (this.fetchSettingFinish) {
                    this.fetchSettingFinish.fetchSettingFinish(resp);
                }
                res(resp);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadLanguageFile() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.translateService.init();
        });
    }
}
ConfigTask.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
ConfigTask.ctorParameters = () => [
    { type: TranslateService },
    { type: DeviceService },
    { type: SettingService },
    { type: AppRouter },
    { type: NotificationMgr },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [fetchSettingFinishToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [changeFontSizeToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FontSizeAccessToken,] }] },
    { type: CheckPermissionService }
];
/** @nocollapse */ ConfigTask.ngInjectableDef = defineInjectable({ factory: function ConfigTask_Factory() { return new ConfigTask(inject(TranslateService), inject(DeviceService), inject(SettingService), inject(AppRouter), inject(NotificationMgr), inject(ConfigToken), inject(fetchSettingFinishToken, 8), inject(changeFontSizeToken, 8), inject(FontSizeAccessToken, 8), inject(CheckPermissionService)); }, token: ConfigTask, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceTask {
    /**
     * @param {?} deviceService
     * @param {?} errorHandler
     * @param {?} customCheckRoot
     * @param {?} networkChange
     */
    constructor(deviceService, errorHandler, customCheckRoot, networkChange) {
        this.deviceService = deviceService;
        this.errorHandler = errorHandler;
        this.customCheckRoot = customCheckRoot;
        this.networkChange = networkChange;
    }
    /**
     * @return {?}
     */
    doTask() {
        console.log('do device task');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            //do task
            //check for root
            console.log('has inject custom root:', this.customCheckRoot);
            try {
                if (this.customCheckRoot) {
                    this.customCheckRoot.checkRoot().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        if (resp)
                            this.customCheckRoot.rootedAction();
                        res();
                    }));
                }
                else {
                    this.deviceService.checkIfRoot().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        console.log('check root resp:', resp);
                        if (resp) {
                            alert("device has rooted!");
                            this.deviceService.exitApp();
                        }
                        res();
                    }), (/**
                     * @param {?} errMsg
                     * @return {?}
                     */
                    errMsg => {
                        console.warn(errMsg);
                    }));
                }
                //device network event
                fromEvent(document, 'online').pipe(
                // debounceTime(5000)
                ).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.networkChange.change('online', true);
                }));
                fromEvent(document, 'offline').pipe(
                // debounceTime(5000)
                ).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.networkChange.change('offline', true);
                }));
            }
            catch (error) {
                console.warn("cannot detect rooted device.");
                this.errorHandler.handleError(error);
                res();
            }
        }));
    }
}
DeviceTask.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
DeviceTask.ctorParameters = () => [
    { type: DeviceService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkForRootToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NetworkChangeToken,] }] }
];
/** @nocollapse */ DeviceTask.ngInjectableDef = defineInjectable({ factory: function DeviceTask_Factory() { return new DeviceTask(inject(DeviceService), inject(ErrorHandler), inject(checkForRootToken, 8), inject(NetworkChangeToken, 8)); }, token: DeviceTask, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileCodeAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProfileCode';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCode.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let profileObj = this._DaoFactory.getTable('Profile', 'TW_LH_SD_Code');
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (profileObj != undefined) {
                ((/** @type {?} */ (profileObj))).addRestriction(new GreaterOrEqualRestriction("ValidityPeriod", [Date.now()]));
                dao.queryByTable(profileObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getSetting';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getPersonalSetting.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let settingObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (settingObj != undefined && dao != undefined) {
                settingObj = ((/** @type {?} */ (settingObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(settingObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExtensionConfigAPI {
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getExtensionConfig';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/config/extension-config.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OfflineAuthAPI {
    /**
     * @param {?} daoFactory
     * @param {?} APP_CONFIG
     */
    constructor(daoFactory, APP_CONFIG) {
        this.daoFactory = daoFactory;
        this.APP_CONFIG = APP_CONFIG;
        this.token = '';
        this.failTry = null;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'offlineAuth';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        return from(this._offlineAuth());
    }
    /**
     * @private
     * @return {?}
     */
    _offlineAuth() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            this.failTry = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES || 999;
            /** @type {?} */
            let authResp = null;
            /** @type {?} */
            let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
            /** @type {?} */
            let dao = this.daoFactory.getDao("Profile");
            /** @type {?} */
            let resp = yield dao.queryByTable(infoObj).toPromise();
            console.log('query device info resp:', resp);
            /** @type {?} */
            let body = resp.Body;
            /** @type {?} */
            let failCount = parseInt(body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineLoginFailCount")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["count"]))[0]);
            /** @type {?} */
            let offline_token = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["token"]))[0];
            /** @type {?} */
            let info_token = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["infoToken"]))[0];
            /** @type {?} */
            let lastLoginTIme = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.UpdateTime))[0];
            console.group("offline auth:");
            console.log("failCount:", failCount);
            console.log("offline_token:", offline_token);
            console.log('this.token:', this.token);
            console.log("lastLoginTime:", lastLoginTIme);
            console.groupEnd();
            if (offline_token == "" || (Date.now() - lastLoginTIme) >= 86400000) {
                authResp = { isSuccess: false, message: 'First_Login_Must_Online' };
            }
            else if (failCount >= this.failTry) {
                authResp = { isSuccess: false, message: "Wrong_Counts_Over_Max", failCount: -1 };
            }
            else {
                console.log('offline fail count:', failCount);
                if (this.token === offline_token) {
                    //offline login success, set count to zero
                    infoObj.setValue("CategoryVal", '{"count":0}');
                    infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    /** @type {?} */
                    let setCountResp = yield dao.updateByTable(infoObj).toPromise();
                    console.log('set count to zero resp:', setCountResp);
                    authResp = { isSuccess: true, token: info_token };
                }
                else {
                    /** @type {?} */
                    let addFailCount = failCount + 1;
                    infoObj.setValue("CategoryVal", `{"count":${addFailCount}}`);
                    infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    /** @type {?} */
                    let setCountResp = yield dao.updateByTable(infoObj).toPromise();
                    console.log('plus one count:', setCountResp);
                    authResp = { isSuccess: false, message: "Offline_Login_Locked", failCount: addFailCount };
                }
            }
            return authResp;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveLoginTokenAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._encryptedAuth = '';
        this._infoToken = '';
    }
    /**
     * @return {?}
     */
    get infoToken() {
        return this._infoToken;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set infoToken(value) {
        this._infoToken = value;
    }
    /**
     * @return {?}
     */
    get encryptedAuth() {
        return this._encryptedAuth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set encryptedAuth(value) {
        this._encryptedAuth = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveLoginToken';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        /** @type {?} */
        let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        console.log("infoObj:", infoObj);
        /** @type {?} */
        let dao = this.daoFactory.getDao("Profile");
        /** @type {?} */
        let configVal = JSON.stringify({ token: this.encryptedAuth, infoToken: this._infoToken });
        if (infoObj != undefined) {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                infoObj.setValue("CategoryVal", configVal);
                infoObj.setValue("UpdateTime", Date.now());
                infoObj.addRestriction(new EqualRestriction("Category", ["OfflineValidationToken"]));
                dao.updateByTable(infoObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    console.log("save token resp:", resp);
                    /** @type {?} */
                    let infoTableObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                    infoTableObj.setValue("CategoryVal", '{"count":0}');
                    infoTableObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    dao.updateByTable(infoTableObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        observer.next(resp);
                        observer.complete();
                    }));
                }));
            }));
        }
        else {
            return of(false);
        }
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveLoginToken.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class APIRequest {
    constructor() {
        this._body = {};
        this._type = "GET";
        this._url = '';
        this._params = null;
        this._timeout = 10000;
    }
    /**
     * @return {?}
     */
    get params() {
        return this._params;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set params(value) {
        this._params = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @return {?}
     */
    get url() {
        return this._url;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set url(value) {
        this._url = value;
    }
    /**
     * @return {?}
     */
    get body() {
        return this._body;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set body(value) {
        this._body = value;
    }
    /**
     * @return {?}
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timeout(value) {
        this._timeout = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckVersionAPI {
    constructor() {
        this.version = '';
        this.DeviceSystem = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'CheckVersion';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let queryParams = new HttpParams();
        queryParams = queryParams.set("version", this.version);
        queryParams = queryParams.set("DeviceSystem", this.DeviceSystem);
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.type = "GET";
        requestData.params = queryParams;
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/CheckVersionAPI.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuAPI {
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getMenu';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/config/menu.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingUpdateAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory$$1) {
        this.DaoFactory = DaoFactory$$1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSettingObject(value) {
        this._settingObject = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateSetting';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getPersonalSetting.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let settingObj = this.DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            if (settingObj != undefined && dao != undefined) {
                settingObj = ((/** @type {?} */ (settingObj)));
                dao = new ClientCustomDao(dao);
                settingObj.addRestriction(new EqualRestriction('SettingID', [this._settingObject.SettingID]));
                settingObj.setValue('SettingVal', this._settingObject.SettingVal);
                dao.updateByTable(settingObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactsSearchAPI {
    /**
     * @param {?} deviceFactory
     */
    constructor(deviceFactory) {
        this.deviceFactory = deviceFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'contactsSearch';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getImportContact.json';
    }
    /**
     * @return {?}
     */
    runDeviceAPI() {
        /** @type {?} */
        let dao = this.deviceFactory.getDefaultDao();
        return dao.searchcontactsByName('');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SyncPushAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.async = false;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'SyncPush';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.body;
        requestData.type = "PUT";
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SyncPullAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.lastUpdateTime = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'SyncPull';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.body;
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrentLanguageListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory$$1) {
        this._DaoFactory = DaoFactory$$1;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCurrentLanguageList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCurrentLanguage.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let languageObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_Language");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (languageObj != undefined && dao != undefined) {
                languageObj = ((/** @type {?} */ (languageObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(languageObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BindingAccountAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory$$1) {
        this.account = '';
        this._DaoFactory = DaoFactory$$1;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'BindingAccount';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /** @type {?} */
        let deviceInfoObjForDelete = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let deviceInfoObjForInsert = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let dao = this._DaoFactory.getDao('Profile');
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
            return of(false);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceAccountAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory$$1) {
        this._DaoFactory = DaoFactory$$1;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDeviceAccount';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getDeviceAccount.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let deviceInfoObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (deviceInfoObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                deviceInfoObj.addRestriction(new EqualRestriction('Category', ["BindingAccount"]));
                dao.queryByTable(deviceInfoObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePushIDAPI {
    constructor() {
        this.body = {};
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'UpdatePushID';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //return save resp
        return './assets/mock/logout.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.body = this.body;
        requestData.type = "POST";
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class syncSequenceIDAPI {
    constructor() {
        this.num = 0;
        this.type = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getSyncSequenceID';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let queryParams = new HttpParams();
        queryParams = queryParams.set("category", this.type);
        queryParams = queryParams.set("idNums", this.num.toString());
        requestData.params = queryParams;
        requestData.type = "GET";
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class logErrorAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
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
    getAPIName() {
        return 'LogError';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /** @type {?} */
        let errorLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Error_Log');
        /** @type {?} */
        let dao = this.daoFactory.getDao('Profile');
        if (errorLogObj) {
            errorLogObj.setValue("ErrorID", v4());
            errorLogObj.setValue("Message", this.message);
            errorLogObj.setValue("Time", this.time.getTime());
            errorLogObj.setValue("Stack", JSON.stringify(this.stack));
            errorLogObj.setValue("DeviceModel", this.DeviceModel);
            errorLogObj.setValue("DeviceSystem", this.DeviceSystem);
            errorLogObj.setValue("IsSend", 'N');
            return dao.insertByTable(errorLogObj);
        }
        else
            return of(false);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class logActionAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
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
    getAPIName() {
        return 'LogAction';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /** @type {?} */
        let actionLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Action_Log');
        /** @type {?} */
        let dao = this.daoFactory.getDao('Profile');
        if (actionLogObj) {
            actionLogObj.setValue("ActionID", v4());
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
            return of(false);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PushErrorLogAPI {
    constructor() {
        this.url = '';
        this.errorList = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'PushErrorLog';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.errorList.map((/**
         * @param {?} err
         * @return {?}
         */
        err => {
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
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PushActionLogAPI {
    constructor() {
        this.url = '';
        this.actionList = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'PushActionLog';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.actionList.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
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
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterMapAPI {
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getRouterMap';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/config/router-map.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class getYearConfigAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/yearConfig.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getYearConfig';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getYearConfig;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveYearConfigAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.yearConfigs = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveYearConfig';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        this.yearConfig = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config');
        this.yearConfig_ext = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config_Extension');
        this.deviceInfo = this.daoFactory.getTable('Profile', 'TW_LH_SD_DeviceInfo');
        this.dao = this.daoFactory.getDefaultDao();
        this.profile_dao = this.daoFactory.getDao("Profile");
        console.log('yearConfig', this.yearConfig);
        console.log('deviceInfo', this.deviceInfo);
        if (this.yearConfig && this.deviceInfo) {
            return of(this.saveConfig().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let status = resp["Header"].status;
                console.log('saveYearConfigAPI resp:', resp);
                if (status) {
                    this.dao.transactionDelete(this.yearConfig);
                    this.dao.transactionDelete(this.yearConfig_ext);
                    return Promise.all(this.yearConfigs.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => this._getDate(x)))).then((/**
                     * @return {?}
                     */
                    () => this.dao.runTransaction().toPromise()));
                }
                else
                    return resp;
            })));
        }
        else
            return of(false);
    }
    /**
     * @private
     * @param {?} yearcfg
     * @return {?}
     */
    _getDate(yearcfg) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('yearcfg', yearcfg);
            /** @type {?} */
            let clientID = v4();
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
                yearcfg.extensions.forEach((/**
                 * @param {?} ext
                 * @return {?}
                 */
                ext => {
                    this.yearConfig_ext.setValue(ext.id, ext.value);
                }));
            }
            this.dao.transactionInsert(this.yearConfig_ext);
        });
    }
    /**
     * @private
     * @return {?}
     */
    saveConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            //Update other parameter
            console.log('[saveYearConfigAPI] isFirstUse', this.FirstUseAPP);
            if (this.FirstUseAPP != null && this.FirstUseAPP != undefined) {
                this.deviceInfo.addRestriction(new EqualRestriction("Category", ["FirstUseAPP"]));
                /** @type {?} */
                let queryResp = yield this.profile_dao.queryByTable(this.deviceInfo).toPromise();
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
                    return this.profile_dao.runTransaction().toPromise();
                }
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class getAgencyPlanAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/AgencyPlan.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getAgencyPlan';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getAgencyPlan;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveAgencyPlanAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.AgencyPlanDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveAgencyPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('AgencyPlanDatas', this.AgencyPlanDatas);
        /** @type {?} */
        let agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
        /** @type {?} */
        let agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
        /** @type {?} */
        let agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
        /** @type {?} */
        let agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
        this.dao = this.daoFactory.getDefaultDao();
        console.log('agencyPlanMain', agencyPlanMain);
        console.log('agencyPlanDetail', agencyPlanDetail);
        if (agencyPlanMain && agencyPlanDetail) {
            this.dao.transactionDelete(agencyPlanDetail);
            this.dao.transactionDelete(agencyPlanDetailExt);
            this.dao.transactionDelete(agencyPlanMain);
            this.dao.transactionDelete(agencyPlanMainExt);
            return from(Promise.all(this.AgencyPlanDatas.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this._getDate(x)))).then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let resp = this.dao.runTransaction().toPromise();
                return resp;
            })));
        }
        else
            return of(false);
    }
    /**
     * @private
     * @param {?} AgencyPlanData
     * @return {?}
     */
    _getDate(AgencyPlanData) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
            /** @type {?} */
            let agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
            /** @type {?} */
            let agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
            /** @type {?} */
            let agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
            /** @type {?} */
            let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
            /** @type {?} */
            let DataYear = AgencyPlanData.DataYear;
            console.log('DataYear', DataYear);
            /** @type {?} */
            let MainDatas = AgencyPlanData.Values;
            console.log('MainDatas', MainDatas);
            for (let data of MainDatas) {
                /** @type {?} */
                let clientID = v4();
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
                    AgencyPlanData.extensions.forEach((/**
                     * @param {?} ext
                     * @return {?}
                     */
                    ext => {
                        agencyPlanMainExt.setValue(ext.id, ext.value);
                    }));
                }
                this.dao.transactionInsert(agencyPlanMainExt);
            }
            /** @type {?} */
            let UnitMap = new Map();
            if (AgencyPlanData.DirectUnit != null) {
                UnitMap.set('Direct', AgencyPlanData.DirectUnit);
            }
            if (AgencyPlanData.InDirectUnit != null) {
                UnitMap.set('Indirect', AgencyPlanData.InDirectUnit);
            }
            if (UnitMap.size > 0) {
                UnitMap.forEach((/**
                 * @param {?} datas
                 * @param {?} key
                 * @return {?}
                 */
                (datas, key) => {
                    /** @type {?} */
                    let i = 0;
                    for (i = 0; i < datas.length; i++) {
                        /** @type {?} */
                        let data = datas[i];
                        /** @type {?} */
                        let clientID = v4();
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
                        this.dao.transactionInsert(agencyPlanDetail);
                        agencyPlanDetailExt.setValue("ClientID", clientID);
                        if (data.extensions) {
                            data.extensions.forEach((/**
                             * @param {?} ext
                             * @return {?}
                             */
                            ext => {
                                agencyPlanDetailExt.setValue(ext.id, ext.value);
                            }));
                        }
                        this.dao.transactionInsert(agencyPlanDetailExt);
                    }
                }));
            }
            //Update other parameter
            /** @type {?} */
            let completionRate = AgencyPlanData.CompletionRate;
            console.log('[saveAgencyPlanAPI] completionRate', completionRate);
            if (StringUtils.isNotEmpty(completionRate)) {
                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                otherParameter.addRestriction(new EqualRestriction("MappingID", ["CompletionRate"]));
                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                /** @type {?} */
                let queryResp = yield this.dao.queryByTable(otherParameter).toPromise();
                console.log('[saveAgencyPlanAPI] queryResp', queryResp);
                if (queryResp.Header["status"]) {
                    if (queryResp.Body.length > 0) {
                        otherParameter.setValue("SetValue", completionRate.toString());
                        console.log('[saveAgencyPlanAPI] otherParameter 1', otherParameter);
                        this.dao.transactionUpdate(otherParameter);
                    }
                    else {
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        otherParameter.setValue("ClientID", v4());
                        otherParameter.setValue("DataYear", DataYear);
                        otherParameter.setValue("MappingID", "CompletionRate");
                        otherParameter.setValue("SetValue", completionRate.toString());
                        otherParameter.setValue("syncTime", new Date().getTime());
                        console.log('[saveAgencyPlanAPI] otherParameter 2', otherParameter);
                        this.dao.transactionInsert(otherParameter);
                    }
                }
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveProgressAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.ProgressDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveProgress';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('ProgressDatas', this.ProgressDatas);
        /** @type {?} */
        let personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
        /** @type {?} */
        let personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
        /** @type {?} */
        let teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
        /** @type {?} */
        let teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
        /** @type {?} */
        let teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
        /** @type {?} */
        let teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
        /** @type {?} */
        let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
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
            return from(Promise.all(this.ProgressDatas.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this._getDate(x)))).then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let resp = this.dao.runTransaction().toPromise();
                return resp;
            })));
        }
        else
            return of(false);
    }
    /**
     * @private
     * @param {?} ProgressData
     * @return {?}
     */
    _getDate(ProgressData) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
            /** @type {?} */
            let personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
            /** @type {?} */
            let teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
            /** @type {?} */
            let teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
            /** @type {?} */
            let teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
            /** @type {?} */
            let teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
            /** @type {?} */
            let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
            console.log('ProgressData', ProgressData);
            /** @type {?} */
            let DataYear = ProgressData.DataYear;
            console.log('DataYear', DataYear);
            //save  personal_Progress_Main
            if (ProgressData.Personal.Values != null) {
                /** @type {?} */
                let personalDatas = ProgressData.Personal.Values;
                console.log('personalDatas', personalDatas);
                for (let personalData of personalDatas) {
                    /** @type {?} */
                    let clientID = v4();
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
                        personalData.extensions.forEach((/**
                         * @param {?} ext
                         * @return {?}
                         */
                        ext => {
                            personalProgressExt.setValue(ext.id, ext.value);
                        }));
                    }
                    this.dao.transactionInsert(personalProgressExt);
                }
            }
            //save  Team_Progress_Main
            if (ProgressData.Team.Values != null) {
                /** @type {?} */
                let TeamMainlDatas = ProgressData.Team.Values;
                console.log('TeamMainlDatas', TeamMainlDatas);
                for (let TeamMainData of TeamMainlDatas) {
                    /** @type {?} */
                    let clientID = v4();
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
                        TeamMainData.extensions.forEach((/**
                         * @param {?} ext
                         * @return {?}
                         */
                        ext => {
                            teamProgressMainExt.setValue(ext.id, ext.value);
                        }));
                    }
                    this.dao.transactionInsert(teamProgressMainExt);
                }
            }
            //save  Team_Progress_Detail
            /** @type {?} */
            let UnitMap = new Map();
            if (ProgressData.Team.DirectUnit != null) {
                UnitMap.set('Direct', ProgressData.Team.DirectUnit);
            }
            if (ProgressData.Team.InDirectUnit != null) {
                UnitMap.set('Indirect', ProgressData.Team.InDirectUnit);
            }
            if (UnitMap.size > 0) {
                UnitMap.forEach((/**
                 * @param {?} datas
                 * @param {?} key
                 * @return {?}
                 */
                (datas, key) => {
                    console.log('key', key, 'datas', datas);
                    /** @type {?} */
                    let i = 0;
                    for (i = 0; i < datas.length; i++) {
                        /** @type {?} */
                        let data = datas[i];
                        /** @type {?} */
                        let clientID = v4();
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
                        this.dao.transactionInsert(teamProgressDetail);
                        teamProgressDetailExt.setValue("ClientID", clientID);
                        if (data.extensions) {
                            data.extensions.forEach((/**
                             * @param {?} ext
                             * @return {?}
                             */
                            ext => {
                                teamProgressDetailExt.setValue(ext.id, ext.value);
                            }));
                        }
                        this.dao.transactionInsert(teamProgressDetailExt);
                    }
                }));
            }
            //Update other parameter
            /** @type {?} */
            let YesterdayPoint = ProgressData.YesterdayPoint;
            console.log('[saveProgressAPI] YesterdayPoint', YesterdayPoint);
            if (YesterdayPoint != null && YesterdayPoint != undefined) {
                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                otherParameter.addRestriction(new EqualRestriction("MappingID", ["YesterdayPoint"]));
                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                /** @type {?} */
                let queryResp = yield this.dao.queryByTable(otherParameter).toPromise();
                console.log('[saveProgressAPI] queryResp', queryResp);
                if (queryResp.Header["status"]) {
                    if (queryResp.Body.length > 0) {
                        otherParameter.setValue("SetValue", YesterdayPoint);
                        console.log('[saveProgressAPI] otherParameter 1', otherParameter);
                        this.dao.transactionUpdate(otherParameter);
                    }
                    else {
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        otherParameter.setValue("ClientID", v4());
                        otherParameter.setValue("DataYear", DataYear);
                        otherParameter.setValue("MappingID", "YesterdayPoint");
                        otherParameter.setValue("SetValue", YesterdayPoint);
                        otherParameter.setValue("syncTime", new Date().getTime());
                        console.log('[saveProgressAPI] otherParameter 2', otherParameter);
                        this.dao.transactionInsert(otherParameter);
                    }
                }
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class getProgressAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/Progress.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgress';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getProgress;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaConfigAPI {
    constructor() {
        this._configName = '';
    }
    /**
     * @return {?}
     */
    get configName() {
        return this._configName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set configName(value) {
        this._configName = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getMetaConfig';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return `./assets/config/meta/${this._configName}.json`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingValueAPI {
    /**
     * @param {?} translateService
     * @param {?} deviceService
     */
    constructor(translateService, deviceService) {
        this._translateService = translateService;
        this._deviceService = deviceService;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getSettingValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getSettingValue.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let resp = {
                Language: this._translateService.getCurrentLanguage(),
                LastUpdatedTime: "Setting_See_Details"
            };
            this._deviceService.getAppVersion().then((/**
             * @param {?} version
             * @return {?}
             */
            version => {
                resp["Version"] = version;
                observer.next({ Header: { "isSuccess": true }, Body: [resp] });
                observer.complete();
            }));
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class getGoalAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return 'assets/mock/Goal.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoal';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getGoal;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveGoalAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.GoalDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveGoal';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('GoalDatas', this.GoalDatas);
        /** @type {?} */
        let GoalSetting = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting');
        /** @type {?} */
        let GoalSetting_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Extension');
        /** @type {?} */
        let GoalSettingValue = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Value');
        /** @type {?} */
        let GoalSettingPlan = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value');
        /** @type {?} */
        let GoalSettingPlan_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value_Extension');
        /** @type {?} */
        let dao = this.daoFactory.getDefaultDao();
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
            for (let GoalData of this.GoalDatas) {
                console.log('GoalData', GoalData);
                /** @type {?} */
                let DataYear = GoalData.DataYear;
                console.log('DataYear', DataYear);
                if (GoalData.GoalSetting != null) {
                    /** @type {?} */
                    let GoalSettingData = GoalData.GoalSetting;
                    /** @type {?} */
                    let clientID = v4();
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
                        GoalSettingData.extensions.forEach((/**
                         * @param {?} ext
                         * @return {?}
                         */
                        ext => {
                            GoalSetting_Ext.setValue(ext.id, ext.value);
                        }));
                    }
                    dao.transactionInsert(GoalSetting_Ext);
                }
                if (GoalData.GoalValue != null) {
                    /** @type {?} */
                    let GoalValueDatas = GoalData.GoalValue;
                    console.log('GoalValueDatas', GoalValueDatas);
                    for (let data of GoalValueDatas) {
                        GoalSettingValue.setValue("ClientID", v4());
                        GoalSettingValue.setValue("DataYear", DataYear);
                        GoalSettingValue.setValue("DataType", data.DataType);
                        GoalSettingValue.setValue("Value", data.Value.toString());
                        dao.transactionInsert(GoalSettingValue);
                    }
                }
                if (GoalData.GoalPlan != null) {
                    /** @type {?} */
                    let GoalPlanData = GoalData.GoalPlan;
                    console.log('GoalPlanData', GoalPlanData);
                    if (GoalPlanData.TimeBase == 'Month') {
                        /** @type {?} */
                        let GoalPlanDatas = GoalPlanData.Values;
                        for (let data of GoalPlanDatas) {
                            /** @type {?} */
                            let clientID = v4();
                            GoalSettingPlan.setValue("ClientID", clientID);
                            GoalSettingPlan.setValue("DataYear", DataYear);
                            GoalSettingPlan.setValue("PerformanceType", data.PerformanceType);
                            GoalSettingPlan.setValue("Month", data.Month);
                            GoalSettingPlan.setValue("Value", data.Value);
                            dao.transactionInsert(GoalSettingPlan);
                            //Extension
                            GoalSettingPlan_Ext.setValue("ClientID", clientID);
                            if (data.extensions) {
                                data.extensions.forEach((/**
                                 * @param {?} ext
                                 * @return {?}
                                 */
                                ext => {
                                    GoalSettingPlan_Ext.setValue(ext.id, ext.value);
                                }));
                            }
                            dao.transactionInsert(GoalSettingPlan_Ext);
                        }
                    }
                }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class saveActualAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.ActualDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveActual';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('ActualDatas', this.ActualDatas);
        /** @type {?} */
        let ActualValue = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value');
        /** @type {?} */
        let ActualValueExt = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value_Extension');
        /** @type {?} */
        let dao = this.daoFactory.getDefaultDao();
        console.log('ActualValue', ActualValue);
        if (ActualValue) {
            dao.transactionDelete(ActualValue);
            dao.transactionDelete(ActualValueExt);
            for (let ActualData of this.ActualDatas) {
                console.log('ActualData', ActualData);
                /** @type {?} */
                let DataYear = ActualData.DataYear;
                console.log('DataYear', DataYear);
                /** @type {?} */
                let ActualMainDatas = ActualData.Values;
                console.log('ActualMainDatas', ActualMainDatas);
                for (let data of ActualMainDatas) {
                    /** @type {?} */
                    let clientID = v4();
                    ActualValue.setValue("ClientID", clientID);
                    ActualValue.setValue("DataYear", DataYear);
                    ActualValue.setValue("DataType", data.DataType);
                    ActualValue.setValue("PerformanceType", data.PerformanceType);
                    ActualValue.setValue("Month", data.Month);
                    ActualValue.setValue("Value", data.Value);
                    dao.transactionInsert(ActualValue);
                    ActualValueExt.setValue("ClientID", clientID);
                    if (data.extensions) {
                        data.extensions.forEach((/**
                         * @param {?} ext
                         * @return {?}
                         */
                        ext => {
                            ActualValueExt.setValue(ext.id, ext.value);
                        }));
                    }
                    dao.transactionInsert(ActualValueExt);
                }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class getActualAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return 'assets/mock/Actual.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getActual';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getActual;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class pushGoalSettingDataAPI {
    constructor() {
        this.url = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'pushGoalSettingData';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.mainData;
        requestData.type = "POST";
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/GoalCallback.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class pushApproveGoalAPI {
    constructor() {
        this.url = '';
        this.mainData = {};
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'pushApproveGoal';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.mainData;
        requestData.type = "POST";
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetDeviceInfoAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.dataType = '';
        this.token = '';
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    setDataType(dataType) {
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDeviceInfo';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        if (this.dataType === 'StepupLevel') {
            return './assets/mock/getDeviceInfoForAgentInfo.json';
        }
        else {
            return './assets/mock/getDeviceInfo.json';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        /** @type {?} */
        let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let dao = this.daoFactory.getDao("Profile");
        if (this.dataType != '') {
            infoObj.addRestriction(new EqualRestriction('Category', [this.dataType]));
        }
        return dao.queryByTable(infoObj);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.type = "GET";
        this.params = null;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'onlineLogin';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/onlineLogin.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.body = this.body;
        requestData.url = this.url;
        requestData.type = "POST";
        requestData.params = this.params;
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DashboardGetMessageListAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._isPopup = null;
        this._isShow = null;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShow(value) {
        this._isShow = value;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    setKeyword(keyword) {
        this._keyword = keyword;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    setPageInfo(pageInfo) {
        this._pageInfo = pageInfo;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setIsPopup(val) {
        this._isPopup = val;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDashboardMessageList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getDashboardMessageList.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    if (StringUtils.isNotEmpty(this._keyword)) {
                        if (this._keyword == 'All') ;
                        else if (this._keyword == 'UnRead') {
                            messageObj.addRestriction(new EqualRestriction("Status", [this._keyword]));
                        }
                        else if (this._keyword === 'PendingApproval') {
                            messageObj.addRestriction(new EqualRestriction("MessageCategory", ['GoalSetting']));
                            messageObj.addRestriction(new EqualRestriction("MessageType", ['Need_Goal_Approve']));
                            messageObj.addRestriction(new EqualRestriction("LinkStatus", ['Approve']));
                        }
                        else if (this._keyword == 'Customer' || this._keyword == 'Calendar' || this._keyword == 'GoalSetting' || this._keyword == 'Progress') {
                            messageObj.addRestriction(new EqualRestriction("MessageCategory", [this._keyword]));
                        }
                    }
                    if (this._isPopup !== null) {
                        /** @type {?} */
                        let isPopup = this._isPopup ? 'Y' : 'N';
                        messageObj.addRestriction(new EqualRestriction("IsPopup", [isPopup]));
                    }
                    if (this._isShow !== null) {
                        /** @type {?} */
                        let isShow = this._isShow ? 'Y' : 'N';
                        messageObj.addRestriction(new EqualRestriction("IsShow", [isShow]));
                    }
                    //add page limit
                    if (this._pageInfo) {
                        messageObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                        messageObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * this._pageInfo.pageSize]));
                    }
                    //add order
                    messageObj.addRestriction(new OrderByRestriction([{ column: 'MessageTime', order: 'DESC' }]));
                    dao.queryByTable(messageObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DashboardUpdateMessageStatusAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._clientIDList = [];
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    setClientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    setClientIDList(list) {
        this._clientIDList = list;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setStatus(status) {
        this._status = status;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateDashboardMessageStatus';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    messageObj = ((/** @type {?} */ (messageObj)));
                    if (this._clientIDList.length > 0) {
                        messageObj.addRestriction(new InRestriction('ClientID', this._clientIDList));
                    }
                    else {
                        messageObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    }
                    messageObj.setValue("Status", this._status);
                    dao.updateByTable(messageObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeMessageStatusAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._messageID = null;
        this._col = null;
        this._val = null;
    }
    /**
     * @return {?}
     */
    get val() {
        return this._val;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set val(value) {
        this._val = value;
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        this._col = value;
    }
    /**
     * @return {?}
     */
    get messageID() {
        return this._messageID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set messageID(value) {
        this._messageID = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'ChangeMessageStatus';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        if (this._messageID && this._col && this._val) {
            return from(this._updateStatus(this._messageID, this._col, this._val));
        }
        else {
            return of(false);
        }
    }
    /**
     * @private
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    _updateStatus(messageID, col, val) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let resp = null;
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            /** @type {?} */
            let Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
            console.log("_updateStatus Message", Message);
            if (Message) {
                Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                /** @type {?} */
                let messageResp = yield dao.queryByTable(Message).toPromise();
                if (messageResp.Header["status"] && messageResp.Body.length > 0) {
                    Message.setValue(col, val);
                    resp = yield dao.updateByTable(Message).toPromise();
                }
            }
            console.log("_updateStatus resp", resp);
            return resp;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnbindDeviceAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this._deviceID = '';
    }
    /**
     * @param {?} deviceID
     * @return {?}
     */
    setDeviceID(deviceID) {
        this._deviceID = deviceID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'unbindDevice';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        /** @type {?} */
        let cleanDeviceUrl = this.APP_CONFIG[env]['API_URL']['unbindDevice'];
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = cleanDeviceUrl;
        requestData.body = { "DeviceId": this._deviceID };
        requestData.type = "POST";
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateTimeListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getUpdateTimeList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getUpdateTimeList.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dataSyncObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_VW_FuncSync_Time");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (dataSyncObj != undefined && dao != undefined) {
                dataSyncObj = ((/** @type {?} */ (dataSyncObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(dataSyncObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterAPITask {
    /**
     * @param {?} APIFactory
     * @param {?} DAOFactory
     * @param {?} deviceFactory
     * @param {?} translateService
     * @param {?} deviceService
     * @param {?} APP_CONFIG
     */
    constructor(APIFactory$$1, DAOFactory, deviceFactory, translateService, deviceService, APP_CONFIG) {
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
    doTask() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            console.log('register API');
            //register Setting API
            this.APIFactory.registerAPI(new SettingAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new SettingUpdateAPI(this.DAOFactory));
            //register Config API
            this.APIFactory.registerAPI(new ExtensionConfigAPI());
            //register Profile API
            this.APIFactory.registerAPI(new ProfileCodeAPI(this.DAOFactory));
            //register Device API
            this.APIFactory.registerAPI(new CurrentLanguageListAPI(this.DAOFactory));
            //register Login API
            this.APIFactory.registerAPI(new saveLoginTokenAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new OfflineAuthAPI(this.DAOFactory, this.APP_CONFIG));
            //register getMenu API
            this.APIFactory.registerAPI(new MenuAPI());
            //register checkversion API
            this.APIFactory.registerAPI(new CheckVersionAPI());
            //register datasync API
            this.APIFactory.registerAPI(new SyncPushAPI());
            this.APIFactory.registerAPI(new SyncPullAPI());
            //register UpdatePushID API
            this.APIFactory.registerAPI(new UpdatePushIDAPI());
            //register getSyncSequence API
            this.APIFactory.registerAPI(new syncSequenceIDAPI());
            //register account binding API
            this.APIFactory.registerAPI(new BindingAccountAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new DeviceAccountAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new ContactsSearchAPI(this.deviceFactory));
            this.APIFactory.registerAPI(new logErrorAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new logActionAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new PushErrorLogAPI());
            this.APIFactory.registerAPI(new PushActionLogAPI());
            this.APIFactory.registerAPI(new RouterMapAPI());
            this.APIFactory.registerAPI(new getYearConfigAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new saveYearConfigAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new getAgencyPlanAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new saveAgencyPlanAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new getProgressAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new saveProgressAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new getGoalAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new saveGoalAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new getActualAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new saveActualAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new pushGoalSettingDataAPI());
            this.APIFactory.registerAPI(new pushApproveGoalAPI());
            this.APIFactory.registerAPI(new GetDeviceInfoAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new MetaConfigAPI());
            this.APIFactory.registerAPI(new SettingValueAPI(this.translateService, this.deviceService));
            this.APIFactory.registerAPI(new LoginAPI());
            this.APIFactory.registerAPI(new DashboardGetMessageListAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new DashboardUpdateMessageStatusAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new ChangeMessageStatusAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new UnbindDeviceAPI(this.APP_CONFIG));
            this.APIFactory.registerAPI(new UpdateTimeListAPI(this.DAOFactory));
            res("register API tasks Done!");
        }));
    }
}
RegisterAPITask.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RegisterAPITask.ctorParameters = () => [
    { type: APIFactory },
    { type: DaoFactory },
    { type: DeviceFactory },
    { type: TranslateService },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ RegisterAPITask.ngInjectableDef = defineInjectable({ factory: function RegisterAPITask_Factory() { return new RegisterAPITask(inject(APIFactory), inject(DaoFactory), inject(DeviceFactory), inject(TranslateService), inject(DeviceService), inject(ConfigToken)); }, token: RegisterAPITask, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitialService {
    /**
     * @param {?} errorHandler
     * @param {?} dataSyncTask
     * @param {?} configTask
     * @param {?} deviceTask
     * @param {?} registerAPITask
     * @param {?} customRegisterAPITask
     * @param {?} customTask
     * @param {?} initialFinish
     */
    constructor(errorHandler, dataSyncTask, configTask, deviceTask, registerAPITask, customRegisterAPITask, customTask, initialFinish) {
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
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('initial service load!', this._sequentialTasks);
            try {
                yield this.waitnseconds(1000);
                for (let t of this._sequentialTasks) {
                    yield t.doTask();
                }
                yield Promise.all(this._parallelTasks.map((/**
                 * @param {?} task
                 * @return {?}
                 */
                task => task.doTask()))).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                }));
                yield this.dataSyncTask.refreshSchema();
                if (this.initialFinish) {
                    this.initialFinish.afterInitialFinish();
                }
            }
            catch (err) {
                console.warn('Initial Error: maybe not on the mobile');
                this.errorHandler.handleError(err);
            }
        });
    }
    /**
     * @param {?} second
     * @return {?}
     */
    waitnseconds(second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                res();
            }), second);
        }));
    }
}
InitialService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
InitialService.ctorParameters = () => [
    { type: ErrorHandler },
    { type: DataSyncTask },
    { type: ConfigTask },
    { type: DeviceTask },
    { type: RegisterAPITask },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [registerAPITaskToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customTaskToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [initialFinishToken,] }] }
];
/** @nocollapse */ InitialService.ngInjectableDef = defineInjectable({ factory: function InitialService_Factory() { return new InitialService(inject(ErrorHandler), inject(DataSyncTask), inject(ConfigTask), inject(DeviceTask), inject(RegisterAPITask), inject(registerAPITaskToken, 8), inject(customTaskToken, 8), inject(initialFinishToken, 8)); }, token: InitialService, providedIn: "root" });

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
class APIResponse {
    /**
     * @param {?} bodyJSON
     * @return {?}
     */
    setBodyJSON(bodyJSON) {
        this.bodyJSON = bodyJSON;
    }
    /**
     * @return {?}
     */
    getBodyJSON() {
        return this.bodyJSON;
    }
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
class LogoutAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.type = "GET";
        this.params = null;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'Logout';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.type = "POST";
        return requestData;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChangeMessageStatusAPI$1 {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._messageID = null;
        this._col = null;
        this._val = null;
    }
    /**
     * @return {?}
     */
    get val() {
        return this._val;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set val(value) {
        this._val = value;
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        this._col = value;
    }
    /**
     * @return {?}
     */
    get messageID() {
        return this._messageID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set messageID(value) {
        this._messageID = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'ChangeMessageStatus';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        if (this._messageID && this._col && this._val) {
            return from(this._updateStatus(this._messageID, this._col, this._val));
        }
        else {
            return of(false);
        }
    }
    /**
     * @private
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    _updateStatus(messageID, col, val) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let resp = null;
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            /** @type {?} */
            let Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
            console.log("_updateStatus Message", Message);
            if (Message) {
                Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                /** @type {?} */
                let messageResp = yield dao.queryByTable(Message).toPromise();
                if (messageResp.Header["status"] && messageResp.Body.length > 0) {
                    Message.setValue(col, val);
                    resp = yield dao.updateByTable(Message).toPromise();
                }
            }
            console.log("_updateStatus resp", resp);
            return resp;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetOtherParameterAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getOtherParameter';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getOtherParameterMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_Other_Parameter");
        if (this._year !== -1) {
            tableObj.addRestriction(new EqualRestriction('DataYear', [this._year]));
        }
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getOtherParameter resp: ", resp);
                console.debug("SQLite getOtherParameter json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
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
class VersionCheckService {
    /**
     * @param {?} httpService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} APP_CONFIG
     */
    constructor(httpService, APIFactory$$1, dispatcher, deviceService, APP_CONFIG) {
        this.httpService = httpService;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.APP_CONFIG = APP_CONFIG;
        this.deviceService.getAppVersion().then((/**
         * @param {?} version
         * @return {?}
         */
        (version) => {
            this.appVersion = version;
        }));
        this.platform = this.deviceService.getDevicePlatform();
    }
    /**
     * @return {?}
     */
    checkVersion() {
        // get app && schema version
        /** @type {?} */
        let checkVersionAPI = this.APIFactory.getAPI('CheckVersion');
        ((/** @type {?} */ (checkVersionAPI))).version = this.appVersion;
        ((/** @type {?} */ (checkVersionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(checkVersionAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("check version resp:", resp);
                if (resp.version != this.appVersion) {
                    observer.next({ isSuccess: true, newVersion: true, appVersion: new versionInfo(resp.appPath, resp.version) });
                    observer.complete();
                }
                else {
                    observer.next({ isSuccess: true, newVersion: false, appVersion: new versionInfo(resp.appPath, resp.version) });
                    observer.complete();
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                console.warn("check Version request error:", error.message);
                observer.next({ isSuccess: false, errorMsg: error.message });
                observer.complete();
            }));
        }));
    }
}
VersionCheckService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VersionCheckService.ctorParameters = () => [
    { type: HttpClient },
    { type: APIFactory },
    { type: APIDispatch },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ VersionCheckService.ngInjectableDef = defineInjectable({ factory: function VersionCheckService_Factory() { return new VersionCheckService(inject(HttpClient), inject(APIFactory), inject(APIDispatch), inject(DeviceService), inject(ConfigToken)); }, token: VersionCheckService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const FUNC_STATE = {
    PENDING: 0,
    AVAILABLE: 1,
};
FUNC_STATE[FUNC_STATE.PENDING] = 'PENDING';
FUNC_STATE[FUNC_STATE.AVAILABLE] = 'AVAILABLE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataSyncService {
    /**
     * @param {?} APP_CONFIG
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} errorHandler
     * @param {?} DaoFactory
     * @param {?} devcieService
     * @param {?} registerDataSyncFunc
     */
    constructor(APP_CONFIG, APIFactory$$1, dispatcher, errorHandler, DaoFactory$$1, devcieService, registerDataSyncFunc) {
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
        this.syncStateSubject = new BehaviorSubject(this.getCurrentSyncState());
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.func_url = this.APP_CONFIG[this.APP_CONFIG.ENV].SYNC_URL;
        this.FuncAPIMap = this.registerDataSyncFunc.getFuncMap();
        this.registerDataSyncFunc.getSyncInstance().forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.registerAPI(x);
        }));
    }
    /**
     * @return {?}
     */
    getSyncState() {
        return this.syncStateSubject.asObservable();
    }
    /**
     * @param {?} func
     * @return {?}
     */
    registerAPI(func) {
        this.syncAPIMap[func.getName()] = func;
    }
    /**
     * @param {?=} async
     * @return {?}
     */
    syncAllFunc(async = false) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("syncAllFunc:", this.FuncAPIMap, Object.keys(this.FuncAPIMap));
            return this.syncFunc(Object.keys(this.FuncAPIMap), async);
        });
    }
    /**
     * @param {?} FuncList
     * @param {?=} async
     * @return {?}
     */
    syncFunc(FuncList, async = false) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("SyncProcessList:", this.SyncProcessList);
            console.log("Sync Func:", FuncList);
            if (this.devcieService.getNetworkState()) {
                try {
                    // If not async , filter current sync function first 
                    if (!async) {
                        FuncList = FuncList.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => !this.SyncProcessList.includes(x)));
                    }
                    this.SyncProcessList = [...this.SyncProcessList, ...FuncList];
                    /** @type {?} */
                    let parallelSync = [];
                    /** @type {?} */
                    let seqSync = [];
                    FuncList.forEach((/**
                     * @param {?} function_name
                     * @return {?}
                     */
                    (function_name) => {
                        if (Object.keys(this.FuncAPIMap).includes(function_name)) {
                            if (this.FuncAPIMap[function_name].length > 1)
                                seqSync = [...seqSync, ...this.FuncAPIMap[function_name]];
                            else
                                parallelSync = [...parallelSync, ...this.FuncAPIMap[function_name]];
                        }
                    }));
                    console.log("SeqSync before uniq:", seqSync);
                    console.log("parallelSync before uniq:", parallelSync);
                    seqSync = uniq(seqSync);
                    parallelSync = uniq(parallelSync);
                    console.log("SeqSync after uniq:", seqSync);
                    console.log("parallelSync after uniq:", parallelSync);
                    console.log("SyncProcessList after uniq:", this.SyncProcessList);
                    //DEV mode, skip sync
                    if (this.APP_CONFIG["ENV"] == "DEV") {
                        return;
                    }
                    /** @type {?} */
                    let syncPromiseArray = [];
                    /** @type {?} */
                    let dao = this.DaoFactory.getDao("Profile");
                    if (dao) {
                        /** @type {?} */
                        let dataSyncTimeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                        /** @type {?} */
                        let resp = yield dao.queryByTable(dataSyncTimeObj).toPromise();
                        console.log('dataSyncTime resp:', resp);
                        /** @type {?} */
                        let apiTimeMap = resp.Body;
                        parallelSync.forEach((/**
                         * @param {?} api_name
                         * @return {?}
                         */
                        (api_name) => {
                            syncPromiseArray.push(this.getSyncPromiseObject(api_name, apiTimeMap, dao));
                        }));
                        //DO PARALLEL SYNC
                        yield Promise.all(syncPromiseArray);
                        //DO SEQ SYNC
                        for (let api_name of seqSync) {
                            yield this.getSyncPromiseObject(api_name, apiTimeMap, dao);
                        }
                    }
                    else
                        throw new Error("Cannot Find Profile DAO.");
                }
                catch (error) {
                    this.errorHandler.handleError(new APPError("F00110", error.message));
                }
                finally {
                    this.SyncProcessList = this.SyncProcessList.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => !FuncList.includes(x)));
                }
            }
            else {
                console.log("It's offline now, skip syncFunc:", FuncList);
            }
        });
    }
    /**
     * @private
     * @param {?} api_name
     * @param {?} funcTimeMap
     * @return {?}
     */
    sync(api_name, funcTimeMap) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnBackendTime = funcTimeMap.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => (x.FuncID == api_name))).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.BackendTime))[0];
            /** @type {?} */
            let returnFrontendTime = Date.now();
            try {
                /** @type {?} */
                let APIInstance = this.syncAPIMap[api_name];
                /** @type {?} */
                let url_config = this.func_url[api_name];
                /** @type {?} */
                let backendTime = funcTimeMap.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => (x.FuncID == api_name))).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.BackendTime))[0];
                /** @type {?} */
                let frontendTIme = funcTimeMap.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => (x.FuncID == api_name))).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.FrontendTime))[0];
                // Debug console
                console.group(`last sync ${api_name} time:`);
                console.log("backendTime:", backendTime);
                console.log("frontendTime:", frontendTIme);
                console.groupEnd();
                // Do sync
                if (APIInstance.getState() === FUNC_STATE.AVAILABLE) {
                    // Change to pending
                    APIInstance.setState(FUNC_STATE.PENDING);
                    this.updateState();
                    /** @type {?} */
                    let sequenceIDNumberNeed = yield APIInstance.getSequentialIDNeeded(frontendTIme);
                    console.log("sequenceID need:", sequenceIDNumberNeed);
                    if (sequenceIDNumberNeed > 0) {
                        /** @type {?} */
                        let sequenceIDs = yield this.getSequentialID(api_name, sequenceIDNumberNeed);
                        yield APIInstance.setSequentialID(sequenceIDs);
                    }
                    /** @type {?} */
                    let pushJson = yield APIInstance.getPushJson(frontendTIme);
                    console.log('pushJson:', pushJson);
                    if (pushJson.length > 0)
                        yield this.pushToServer({ data: pushJson, url: url_config.push });
                    /** @type {?} */
                    let pullJson = yield this.pullFromServer({ backendTime, url: url_config.pull });
                    console.log('pullJson:', pullJson);
                    /** @type {?} */
                    let pullResult = yield this.syncAPIMap[api_name].pullData(pullJson);
                    console.log('pull result:', pullResult);
                    if (pullResult.Header.status) {
                        returnBackendTime = parseISO(pullJson['lastUpdateTime']).getTime();
                        returnFrontendTime = Date.now();
                    }
                    else {
                        throw new Error(pullResult.Header.msg);
                    }
                }
                else {
                    yield this.waitUntilSyncFinish(api_name);
                }
            }
            catch (error) {
                returnFrontendTime = funcTimeMap.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => (x.FuncID == api_name))).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.FrontendTime))[0];
                this.errorHandler.handleError(new APPError("F00113", `${api_name} sync failed,` + error.message));
            }
            finally {
                this.syncAPIMap[api_name].setState(FUNC_STATE.AVAILABLE);
                this.updateState();
                return Promise.resolve({ backendTime: returnBackendTime, frontendTime: returnFrontendTime });
            }
        });
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    pushToServer({ data, url }) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let pushAPI = this.APIFactory.getAPI("SyncPush");
            ((/** @type {?} */ (pushAPI))).url = url;
            ((/** @type {?} */ (pushAPI))).body = data;
            yield this.dispatcher.dispatch(pushAPI).toPromise();
        });
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    pullFromServer({ backendTime, url }) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let pullAPI = this.APIFactory.getAPI("SyncPull");
            ((/** @type {?} */ (pullAPI))).lastUpdateTime = new Date(backendTime).toISOString();
            ((/** @type {?} */ (pullAPI))).url = url;
            return yield this.dispatcher.dispatch(pullAPI).toPromise()
                .then((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                console.log('data from server:', data);
                return data;
            }));
        });
    }
    /**
     * @private
     * @param {?} category
     * @param {?} num
     * @return {?}
     */
    getSequentialID(category, num) {
        /** @type {?} */
        let getSyncSequenceIDAPI = this.APIFactory.getAPI("getSyncSequenceID");
        if (getSyncSequenceIDAPI) {
            ((/** @type {?} */ (getSyncSequenceIDAPI))).type = category;
            ((/** @type {?} */ (getSyncSequenceIDAPI))).num = num;
            return this.dispatcher.dispatch(getSyncSequenceIDAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("get sync sequence ID resp:", resp);
                return resp['ids'];
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    getCurrentSyncState() {
        /** @type {?} */
        let state = {};
        Object.keys(this.syncAPIMap).forEach((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            state[val] = this.syncAPIMap[val].getState();
        }));
        return state;
    }
    /**
     * @private
     * @return {?}
     */
    updateState() {
        this.syncStateSubject.next(this.getCurrentSyncState());
    }
    /**
     * @private
     * @param {?} func
     * @return {?}
     */
    waitUntilSyncFinish(func) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getSyncState().pipe(first((/**
             * @param {?} x
             * @return {?}
             */
            x => Object.entries(x).filter((/**
             * @param {?} y
             * @return {?}
             */
            y => y[0] === func && y[1] === FUNC_STATE.AVAILABLE)).length > 0))).toPromise();
        });
    }
    /**
     * @private
     * @param {?} api_name
     * @param {?} ApiTimeMap
     * @param {?} dao
     * @return {?}
     */
    getSyncPromiseObject(api_name, ApiTimeMap, dao) {
        return __awaiter(this, void 0, void 0, function* () {
            let { backendTime, frontendTime } = yield this.sync(api_name, ApiTimeMap);
            /** @type {?} */
            let dataSyncTimeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
            dataSyncTimeObj.addRestriction(new EqualRestriction('FuncID', [api_name]));
            dataSyncTimeObj.setValue('BackendTime', backendTime);
            dataSyncTimeObj.setValue('FrontendTime', frontendTime);
            /** @type {?} */
            let result = yield dao.updateByTable(dataSyncTimeObj).toPromise();
            console.log(`Finish sync function ${api_name} :`, result);
            return result;
        });
    }
}
DataSyncService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DataSyncService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: APIFactory },
    { type: APIDispatch },
    { type: ErrorHandler },
    { type: DaoFactory },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Inject, args: [registerDataSyncFuncToken,] }] }
];
/** @nocollapse */ DataSyncService.ngInjectableDef = defineInjectable({ factory: function DataSyncService_Factory() { return new DataSyncService(inject(ConfigToken), inject(APIFactory), inject(APIDispatch), inject(ErrorHandler), inject(DaoFactory), inject(DeviceService), inject(registerDataSyncFuncToken)); }, token: DataSyncService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogService {
    /**
     * @param {?} DaoFactory
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} errorHandler
     */
    constructor(DaoFactory$$1, APIFactory$$1, dispatcher, errorHandler) {
        this.DaoFactory = DaoFactory$$1;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
    }
    /**
     * @return {?}
     */
    pushErrorLog() {
        return from(this._pushErrorLog());
    }
    /**
     * @return {?}
     */
    pushActionLog() {
        return from(this._pushActionLog());
    }
    /**
     * @private
     * @return {?}
     */
    _pushErrorLog() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //GET DB DATA
                console.log("into pushErrorLog()");
                /** @type {?} */
                let dao = this.DaoFactory.getDao("Profile");
                /** @type {?} */
                let ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                if (ErrorLogTable) {
                    ErrorLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                    /** @type {?} */
                    let resp = yield dao.queryByTable(ErrorLogTable).toPromise();
                    if (resp.Header["status"]) {
                        console.log("error log table data:", resp.Body);
                        /** @type {?} */
                        let errorList = resp.Body;
                        /** @type {?} */
                        let pushErrorLogAPI = this.APIFactory.getAPI("PushErrorLog");
                        ((/** @type {?} */ (pushErrorLogAPI))).errorList = errorList;
                        /** @type {?} */
                        let pushResp = yield this.dispatcher.dispatch(pushErrorLogAPI).toPromise();
                        console.log("push error Log resp:", pushResp);
                        if (pushResp["success"]) {
                            // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Error_Log where 1=1', [])]);
                            ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                            /** @type {?} */
                            let deleteResp = yield dao.deleteByTable(ErrorLogTable).toPromise();
                            // let errorIds = resp.Body.map(x => x.ErrorID);
                            // ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                            // ErrorLogTable.addRestriction(new InRestriction("ErrorID", errorIds));
                            // ErrorLogTable.setValue('IsSend', 'Y');
                            // let updateResp = await dao.updateByTable(ErrorLogTable).toPromise();
                            console.log("deleteResp:", deleteResp);
                        }
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new Error('pushErrorLog fail!'));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _pushActionLog() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("into pushActionLog()");
                /** @type {?} */
                let dao = this.DaoFactory.getDao("Profile");
                /** @type {?} */
                let ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                ActionLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                /** @type {?} */
                let resp = yield dao.queryByTable(ActionLogTable).toPromise();
                if (resp.Header["status"]) {
                    console.log("Action log table data:", resp.Body);
                    /** @type {?} */
                    let actionList = resp.Body;
                    /** @type {?} */
                    let pushActionLogAPI = this.APIFactory.getAPI("PushActionLog");
                    ((/** @type {?} */ (pushActionLogAPI))).actionList = actionList;
                    /** @type {?} */
                    let pushResp = yield this.dispatcher.dispatch(pushActionLogAPI).toPromise();
                    console.log("push action Log resp:", pushResp);
                    if (pushResp["success"]) {
                        // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Action_Log where 1=1', [])]);
                        ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        /** @type {?} */
                        let deleteResp = yield dao.deleteByTable(ActionLogTable).toPromise();
                        // let actionIds = resp.Body.map(x => x.ActionID);
                        // ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        // ActionLogTable.addRestriction(new InRestriction("ActionID", actionIds));
                        // ActionLogTable.setValue('IsSend', 'Y');
                        // let updateResp = await dao.updateByTable(ActionLogTable).toPromise();
                        console.log("deleteResp:", deleteResp);
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new Error('pushActionLog fail!'));
            }
        });
    }
}
LogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LogService.ctorParameters = () => [
    { type: DaoFactory },
    { type: APIFactory },
    { type: APIDispatch },
    { type: ErrorHandler }
];
/** @nocollapse */ LogService.ngInjectableDef = defineInjectable({ factory: function LogService_Factory() { return new LogService(inject(DaoFactory), inject(APIFactory), inject(APIDispatch), inject(ErrorHandler)); }, token: LogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileCodeService {
    /**
     * @param {?} dispatcher
     * @param {?} translateService
     * @param {?} APIFactory
     */
    constructor(dispatcher, translateService, APIFactory$$1) {
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
    getCodeArray(typeId) {
        if (this.profileCodeTypeMap.size != 0) {
            /** @type {?} */
            let codeArray = this.profileCodeTypeMap.get(typeId);
            if (codeArray == undefined)
                codeArray = new Array();
            return [...codeArray];
        }
        return new Array();
    }
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    convertCode2Text(typeID, code) {
        if (this.profileCodeMap.size != 0 && code != undefined) {
            /** @type {?} */
            let profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                /** @type {?} */
                let mappingID = profileCode.getMappingID();
                /** @type {?} */
                let text = this.translateService.translate(mappingID);
                return text;
            }
        }
        return code;
    }
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    getArgumentsByCode(typeID, code) {
        if (this.profileCodeMap.size != 0) {
            /** @type {?} */
            let profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                return profileCode.getArguments();
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let profileCodeAPI = this.APIFactory.getAPI('getProfileCode');
        console.debug('profile-code.service fetchCodeData', profileCodeAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(profileCodeAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.profileCodeTypeMap.clear();
                this.profileCodeMap.clear();
                /** @type {?} */
                let bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (let i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    let json = bodyDatas[i];
                    /** @type {?} */
                    let profileCode = Object.create(ProfileCode.prototype);
                    profileCode = Object.assign(profileCode, json);
                    /** @type {?} */
                    let typeId = profileCode.getTypeId();
                    /** @type {?} */
                    let code = profileCode.getCode();
                    /** @type {?} */
                    let mappingID = profileCode.getMappingID();
                    /** @type {?} */
                    let text = this.translateService.translate(mappingID);
                    profileCode.setDisplayText(text);
                    /** @type {?} */
                    let codeArray = this.profileCodeTypeMap.get(typeId);
                    if (codeArray == undefined) {
                        codeArray = new Array();
                    }
                    codeArray.push(profileCode);
                    this.profileCodeMap.set(typeId + '_' + code, profileCode);
                    this.profileCodeTypeMap.set(typeId, codeArray);
                }
                console.debug('profileCodeMap', this.profileCodeMap);
                console.debug('profileCodeTypeMap', this.profileCodeTypeMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
}
ProfileCodeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProfileCodeService.ctorParameters = () => [
    { type: APIDispatch },
    { type: TranslateService },
    { type: APIFactory }
];
/** @nocollapse */ ProfileCodeService.ngInjectableDef = defineInjectable({ factory: function ProfileCodeService_Factory() { return new ProfileCodeService(inject(APIDispatch), inject(TranslateService), inject(APIFactory)); }, token: ProfileCodeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultLoadingApp {
    /**
     * @param {?} versionCheck
     * @param {?} syncService
     * @param {?} logService
     * @param {?} profileCodeService
     * @param {?} notificationMgr
     * @param {?} settingService
     * @param {?} pushIDMgr
     */
    constructor(versionCheck, syncService, logService, profileCodeService, notificationMgr, settingService, pushIDMgr) {
        this.versionCheck = versionCheck;
        this.syncService = syncService;
        this.logService = logService;
        this.profileCodeService = profileCodeService;
        this.notificationMgr = notificationMgr;
        this.settingService = settingService;
        this.pushIDMgr = pushIDMgr;
        this.loadedSubject = new Subject();
    }
    /**
     * @return {?}
     */
    loading() {
        this._loading();
    }
    /**
     * @return {?}
     */
    onLoaded() {
        return this.loadedSubject.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    _loading() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.syncService.syncAllFunc(true);
            this.loadedSubject.next(50);
            yield this.profileCodeService._fetchCodeData().toPromise();
            this.loadedSubject.next(60);
            yield this.logService.pushActionLog().toPromise();
            this.loadedSubject.next(70);
            yield this.logService.pushErrorLog().toPromise();
            this.loadedSubject.next(80);
            yield this.notificationMgr.init();
            this.loadedSubject.next(85);
            yield this.settingService.deviceChange(this.pushIDMgr.getPushID());
            this.loadedSubject.next(88);
            //after sync finish ,check version
            /** @type {?} */
            let versionResp = yield this.versionCheck.checkVersion().toPromise();
            if (versionResp.isSuccess) {
                this.loadedSubject.next(95);
                if (versionResp.newVersion) {
                    this.notificationMgr.pushNotification(NotificationType.NewVersionLogin, versionResp.appVersion);
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.loadedSubject.next(100);
                    }), 800);
                }
            }
            else {
                console.log("Check version error!!");
                this.loadedSubject.next(100);
            }
        });
    }
}
DefaultLoadingApp.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultLoadingApp.ctorParameters = () => [
    { type: VersionCheckService },
    { type: DataSyncService },
    { type: LogService },
    { type: ProfileCodeService },
    { type: NotificationMgr },
    { type: SettingService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PushIDMgrToken,] }] }
];
/** @nocollapse */ DefaultLoadingApp.ngInjectableDef = defineInjectable({ factory: function DefaultLoadingApp_Factory() { return new DefaultLoadingApp(inject(VersionCheckService), inject(DataSyncService), inject(LogService), inject(ProfileCodeService), inject(NotificationMgr), inject(SettingService), inject(PushIDMgrToken, 8)); }, token: DefaultLoadingApp, providedIn: "root" });

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouteObject {
    /**
     * @return {?}
     */
    getUrl() {
        return this.url;
    }
    /**
     * @param {?} url
     */
    constructor(url) {
        this.url = url;
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.tmpPushData = null;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'CALENDAR';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let customerIDMap = yield this.getCustomerIDMap();
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            /** @type {?} */
            let extCols = calendarExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CalendarID'));
            returnJson = pushData.map((/**
             * @param {?} calendarObj
             * @return {?}
             */
            calendarObj => {
                /** @type {?} */
                let extensions = extCols
                    .map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
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
                    "alertTimes": [calendarObj.Alert1, calendarObj.Alert2, calendarObj.Alert3].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x != null && x != "")),
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
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.appointments.length > 0 || resp.deletedAppointmentIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                /** @type {?} */
                let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                /** @type {?} */
                let customerIDMap = yield this.getCustomerIDMap(true);
                /** @type {?} */
                let calendarDatas = yield dao.queryByTable(calendarObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body));
                /** @type {?} */
                let calendarIdArr = calendarDatas.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CalendarID));
                /** @type {?} */
                let calendarClientIdArr = calendarDatas.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                console.log('calendar ID array:', calendarIdArr);
                console.log('calendar Client ID array:', calendarClientIdArr);
                for (let data of resp.appointments) {
                    /** @type {?} */
                    let IsAlert = data.alertTimes.length > 0 ? 'Y' : 'N';
                    calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                    calendarObj.setValue("CalendarID", data.appointmentId);
                    calendarObj.setValue("Title", data.name);
                    calendarObj.setValue("Location", data.meetingLocation);
                    calendarObj.setValue("CalendarType", data.appointmentType);
                    calendarObj.setValue("IsAllDay", data.allDay ? 'Y' : 'N');
                    calendarObj.setValue("StartTime", parseISO(data.startDateTime).getTime());
                    calendarObj.setValue("EndTime", parseISO(data.endDateTime).getTime());
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
                    calendarObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    calendarObj.setValue("ClientTime", Date.now());
                    /** @type {?} */
                    let extensions = data.extensions;
                    calendarObj.setValue("CalendarID", data.appointmentId);
                    calendarExtObj.setValue("CalendarID", data.appointmentId);
                    if (extensions != null) {
                        extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            calendarExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (calendarIdArr.includes(data.appointmentId)) {
                        calendarObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                        calendarExtObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                        dao.transactionUpdate(calendarObj);
                        dao.transactionUpdate(calendarExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = v4();
                        calendarObj.setValue("ClientID", clientID);
                        calendarExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(calendarObj);
                        dao.transactionInsert(calendarExtObj);
                    }
                }
                for (let id of resp.deletedAppointmentIds) {
                    calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                    calendarObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                    calendarExtObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                    dao.transactionDelete(calendarObj);
                    dao.transactionDelete(calendarExtObj);
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getSequentialIDNeeded(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            this.tmpPushData = pushData.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.CalendarID === null));
            return this.tmpPushData.length;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tmpPushData != null) {
                //set to tmpData && Sqlite
                /** @type {?} */
                let dataWithoutIds = this.tmpPushData;
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                for (let [index, data] of dataWithoutIds.entries()) {
                    /** @type {?} */
                    let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    /** @type {?} */
                    let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                    calendarObj.setValue("CalendarID", ids[index]);
                    calendarObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(calendarObj);
                    calendarExtObj.setValue("CalendarID", ids[index]);
                    calendarExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(calendarExtObj);
                }
                yield dao.runTransaction().toPromise();
                this.tmpPushData = null;
            }
        });
    }
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    getPushData(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let datas = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Calendar');
            if (dao && calendarObj) {
                calendarObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(calendarObj).toPromise();
                console.log('query calendar obj:', resp);
                if (resp.Body.length > 0)
                    datas = resp.Body;
            }
            return datas;
        });
    }
    /**
     * @private
     * @param {?=} reverse
     * @return {?}
     */
    getCustomerIDMap(reverse = false) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            if (dao && customerObj) {
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let customerList = resp.Body;
                    //if reverse ,set key as CustomerID ,val as ClientID
                    if (reverse)
                        customerList = customerList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => { return { key: x.CustomerID, val: x.ClientID }; }));
                    else
                        customerList = customerList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => { return { key: x.ClientID, val: x.CustomerID }; }));
                    return customerList.reduce((/**
                     * @param {?} map
                     * @param {?} obj
                     * @return {?}
                     */
                    (map$$1, obj) => {
                        map$$1[obj.key] = obj.val;
                        return map$$1;
                    }), {});
                }
            }
            return {};
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
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
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'CUSTOMER_CONTACT';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            /** @type {?} */
            let customerContactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
            /** @type {?} */
            let extCols = customerContactExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID' && x.getName() !== 'ContactID'));
            returnJson = pushData.map((/**
             * @param {?} contact
             * @return {?}
             */
            contact => {
                /** @type {?} */
                let extensions = extCols
                    .map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
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
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.notes.length > 0 || resp.deletedNoteIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                /** @type {?} */
                let contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                /** @type {?} */
                let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                /** @type {?} */
                let contactIdArr = yield dao.queryByTable(contactObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ContactID))));
                // let customerResp = await dao.queryByTable(customerObj).toPromise();
                /** @type {?} */
                let customerResp = this.customerData;
                /** @type {?} */
                let CustomerClientIDArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                /** @type {?} */
                let CustomerIdArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CustomerID));
                for (let data of resp.notes) {
                    contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactObj.setValue("ContactID", data.noteId);
                    contactObj.setValue("Note", data.text);
                    contactObj.setValue("NoteTime", parseISO(data.creationDateTime).getTime());
                    contactObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    contactObj.setValue("IsDelete", 'N');
                    contactObj.setValue("ClientTime", Date.now());
                    // save extendion data
                    /** @type {?} */
                    let extensions = data.extensions;
                    contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactObj.setValue("ContactID", data.noteId);
                    contactExtObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactExtObj.setValue("ContactID", data.noteId);
                    if (extensions != null) {
                        extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            contactExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (contactIdArr.includes(data.noteId)) {
                        contactObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                        contactExtObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                        dao.transactionUpdate(contactObj);
                        dao.transactionUpdate(contactExtObj);
                    }
                    else {
                        /** @type {?} */
                        let cliendID = v4();
                        contactObj.setValue("ClientID", cliendID);
                        contactExtObj.setValue("ClientID", cliendID);
                        dao.transactionInsert(contactObj);
                        dao.transactionInsert(contactExtObj);
                    }
                }
                if (resp.deletedNoteIds.length > 0) {
                    contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                    contactExtObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                    dao.transactionDelete(contactObj);
                    dao.transactionDelete(contactExtObj);
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getSequentialIDNeeded(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            this.tmpPushData = pushData.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.ContactID === null));
            return this.tmpPushData.length;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tmpPushData != null) {
                //set to tmpData && Sqlite
                /** @type {?} */
                let dataWithoutIds = this.tmpPushData;
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                for (let [index, data] of dataWithoutIds.entries()) {
                    /** @type {?} */
                    let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    /** @type {?} */
                    let contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.setValue("ContactID", ids[index]);
                    contactExtObj.setValue("ContactID", ids[index]);
                    contactObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    contactExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(contactObj);
                    dao.transactionUpdate(contactExtObj);
                }
                yield dao.runTransaction().toPromise();
                this.tmpPushData = null;
            }
        });
    }
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    getPushData(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let datas = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            /** @type {?} */
            let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Contact');
            /** @type {?} */
            let customerResp = yield dao.queryByTable(customerObj).toPromise();
            this.customerData = customerResp;
            /** @type {?} */
            let customerArr = customerResp.Body;
            if (dao && contactObj) {
                contactObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(contactObj).toPromise();
                console.log('query contact obj:', resp);
                console.log('customer array:', customerArr);
                if (resp.Body.length > 0) {
                    for (let data of resp.Body) {
                        /** @type {?} */
                        let customer = customerArr.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.ClientID == data.CustomerClientID));
                        if (customer.length > 0)
                            data.CustomerID = customer[0].CustomerID;
                    }
                    datas = resp.Body;
                }
            }
            return datas;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.tmpPushData = null;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'CUSTOMER';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            //get extension column informance
            /** @type {?} */
            let customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
            /** @type {?} */
            let customerTelExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
            /** @type {?} */
            let customerEmailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
            /** @type {?} */
            let customerAddressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
            /** @type {?} */
            let customerExtCols = customerExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerID'));
            /** @type {?} */
            let customerTelExtCols = customerTelExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            /** @type {?} */
            let customerEmailExtCols = customerEmailExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            /** @type {?} */
            let customerAddressExtCols = customerAddressExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            returnJson = pushData.map((/**
             * @param {?} customer
             * @return {?}
             */
            customer => {
                /** @type {?} */
                let Extensions = customerExtCols
                    .map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
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
                    "birthDate": customer.BirthdayYear === 'null' || customer.BirthdayYear === null ? null : `${customer.BirthdayYear}-${customer.BirthdayMonth}-${customer.BirthdayDate}`,
                    "ageRange": customer.AgeRange,
                    "gender": customer.Gender,
                    "numberOfChildren": customer.Children,
                    "addresses": customer.Address.map((/**
                     * @param {?} addr
                     * @return {?}
                     */
                    addr => {
                        /** @type {?} */
                        let addressesExtensions = customerAddressExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
                    "phoneChannels": customer.Tel.map((/**
                     * @param {?} tel
                     * @return {?}
                     */
                    tel => {
                        /** @type {?} */
                        let telExtensions = customerTelExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
                    "emailContacts": customer.Email.map((/**
                     * @param {?} email
                     * @return {?}
                     */
                    email => {
                        /** @type {?} */
                        let emailExtensions = customerEmailExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.customerInfos.length > 0 || resp.deletedPersonIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                /** @type {?} */
                let telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                /** @type {?} */
                let emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                /** @type {?} */
                let addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                /** @type {?} */
                let customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                /** @type {?} */
                let emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                /** @type {?} */
                let addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                /** @type {?} */
                let telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                /** @type {?} */
                let customerResp = yield dao.queryByTable(customerObj).toPromise();
                /** @type {?} */
                let CustomerClientIDArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                /** @type {?} */
                let CustomerIdArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CustomerID));
                // delete tel,email,address first
                /** @type {?} */
                let customerInfoIds = resp.customerInfos.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.customerID));
                /** @type {?} */
                let ToDeleteCustomerClientIDs = customerResp.Body.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => customerInfoIds.indexOf(x.CustomerID) > -1)).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                telObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                emailObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                addressObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                telExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                emailExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                addressExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                dao.transactionDelete(telObj);
                dao.transactionDelete(emailObj);
                dao.transactionDelete(addressObj);
                dao.transactionDelete(telExtObj);
                dao.transactionDelete(emailExtObj);
                dao.transactionDelete(addressExtObj);
                for (let data of resp.customerInfos) {
                    /** @type {?} */
                    let clientID = '';
                    customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                    emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                    addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                    telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
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
                    customerObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    customerObj.setValue('IsOverTimeAlert', data.isOverTimeAlert);
                    customerObj.setValue("ClientTime", Date.now());
                    //save email extension data
                    /** @type {?} */
                    let Extensions = data.extensions;
                    customerExtObj.setValue("CustomerID", data.customerID);
                    console.log('customer Extensions', Extensions);
                    if (Extensions != null) {
                        Extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            customerExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (CustomerIdArr.includes(data.customerID)) {
                        clientID = CustomerClientIDArr[CustomerIdArr.indexOf(data.customerID)];
                        customerObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                        customerExtObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                        dao.transactionUpdate(customerObj);
                        dao.transactionUpdate(customerExtObj);
                    }
                    else {
                        clientID = v4();
                        customerObj.setValue("ClientID", clientID);
                        customerExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExtObj);
                    }
                    for (let email of data.emailContacts) {
                        /** @type {?} */
                        let email_clientID = v4();
                        emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                        emailObj.setValue('ClientID', email_clientID);
                        emailObj.setValue('CustomerClientID', clientID);
                        emailObj.setValue('EmailType', email.emailType);
                        emailObj.setValue('Email', email.email);
                        emailObj.setValue('DataSource', email.isChangeAble ? 'APP' : 'OPUS');
                        //save email extension data
                        /** @type {?} */
                        let emailExtensions = email.extensions;
                        emailExtObj.setValue('ClientID', email_clientID);
                        emailExtObj.setValue('CustomerClientID', clientID);
                        console.log('emailExtensions', emailExtensions);
                        if (emailExtensions != null) {
                            emailExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                emailExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(emailExtObj);
                        dao.transactionInsert(emailObj);
                    }
                    for (let address of data.addresses) {
                        /** @type {?} */
                        let address_clientID = v4();
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
                        /** @type {?} */
                        let addressExtensions = address.extensions;
                        addressExtObj.setValue('ClientID', address_clientID);
                        addressExtObj.setValue('CustomerClientID', clientID);
                        console.log('addressExtensions', addressExtensions);
                        if (addressExtensions != null) {
                            addressExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                addressExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(addressExtObj);
                        dao.transactionInsert(addressObj);
                    }
                    for (let tel of data.phoneChannels) {
                        /** @type {?} */
                        let tel_clientID = v4();
                        telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                        telObj.setValue('ClientID', tel_clientID);
                        telObj.setValue('CustomerClientID', clientID);
                        telObj.setValue('TelType', tel.usageType);
                        telObj.setValue('Tel', tel.phoneNumber);
                        telObj.setValue('DataSource', tel.isChangeable ? 'APP' : 'OPUS');
                        //save email extension data
                        /** @type {?} */
                        let telExtensions = tel.extensions;
                        telExtObj.setValue('ClientID', tel_clientID);
                        telExtObj.setValue('CustomerClientID', clientID);
                        console.log('telExtensions', telExtensions);
                        if (telExtensions != null) {
                            telExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                telExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(telExtObj);
                        dao.transactionInsert(telObj);
                    }
                }
                /** @type {?} */
                let DeleteCustomerClientIds = resp.deletedPersonIds.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    /** @type {?} */
                    let filtered = customerResp.Body.filter((/**
                     * @param {?} y
                     * @return {?}
                     */
                    y => y.CustomerID === x));
                    return filtered.length > 0 ? filtered[0].ClientID : null;
                })).filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== null));
                if (DeleteCustomerClientIds.length > 0) {
                    customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                    addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                    telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                    emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                    addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                    telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                    customerObj.addRestriction(new InRestriction('CustomerID', resp.deletedPersonIds));
                    emailObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    addressObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    telObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    emailExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    addressExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    telExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    dao.transactionDelete(customerObj);
                    dao.transactionDelete(emailObj);
                    dao.transactionDelete(addressObj);
                    dao.transactionDelete(telObj);
                    dao.transactionDelete(emailExtObj);
                    dao.transactionDelete(addressExtObj);
                    dao.transactionDelete(telExtObj);
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getSequentialIDNeeded(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let num = 0;
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            if (dao && customerObj) {
                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                this.tmpPushData = resp.Body.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CustomerID === null));
                num = this.tmpPushData.length;
            }
            return num;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tmpPushData != null) {
                /** @type {?} */
                let dataWithoutIds = this.tmpPushData;
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                for (let [index, data] of dataWithoutIds.entries()) {
                    /** @type {?} */
                    let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    customerObj.setValue("CustomerID", ids[index]);
                    customerObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(customerObj);
                }
                yield dao.runTransaction().toPromise();
                this.tmpPushData = null;
            }
        });
    }
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    getPushData(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let datas = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            if (dao && customerObj) {
                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let customerArray = resp.Body;
                    /** @type {?} */
                    let clientIDArray = customerArray.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.ClientID));
                    dao = this.DaoFactory.getDefaultDao();
                    /** @type {?} */
                    let telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Tel');
                    /** @type {?} */
                    let emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Email');
                    /** @type {?} */
                    let addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Address');
                    telObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    emailObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    addressObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    /** @type {?} */
                    let telResp = yield dao.queryByTable(telObj).toPromise();
                    /** @type {?} */
                    let emailResp = yield dao.queryByTable(emailObj).toPromise();
                    /** @type {?} */
                    let addressResp = yield dao.queryByTable(addressObj).toPromise();
                    for (let customer of customerArray) {
                        customer.Tel = telResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        customer.Email = emailResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        customer.Address = addressResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        datas.push(customer);
                    }
                }
            }
            return datas;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'MESSAGE';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            //TODO: Add extension column
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
            if (dao && messageObj) {
                messageObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(messageObj).toPromise();
                console.log('query message obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let messageArray = resp.Body;
                    /** @type {?} */
                    let updatedIDs = messageArray.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.Status === 'Reading')).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.MessageID));
                    returnJson = updatedIDs;
                }
            }
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.messageInfos.length > 0 || resp.deletedMessageIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                /** @type {?} */
                let messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                /** @type {?} */
                let messageIDList = yield dao.queryByTable(messageObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body));
                messageIDList = messageIDList.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.MessageID));
                for (let data of resp.messageInfos) {
                    /** @type {?} */
                    let isExist = messageIDList.includes(data.messageID);
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
                    messageObj.setValue("MessageTime", parseISO(data.messageTime).getTime());
                    messageObj.setValue("ClientTime", Date.now());
                    messageObj.setValue("IsDelete", 'N');
                    messageObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    //Extension
                    messageExtObj.setValue("MessageID", data.messageID);
                    if (isExist) {
                        messageObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                        messageExtObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                        dao.transactionUpdate(messageObj);
                        dao.transactionUpdate(messageExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = v4();
                        messageObj.setValue("ClientID", clientID);
                        messageExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(messageObj);
                        dao.transactionInsert(messageExtObj);
                    }
                }
                for (let id of resp.deletedMessageIds) {
                    messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                    messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                    messageObj.addRestriction(new EqualRestriction('MessageID', [id]));
                    messageExtObj.addRestriction(new EqualRestriction('MessageID', [id]));
                    dao.transactionDelete(messageObj);
                    dao.transactionDelete(messageExtObj);
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalExpectedSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'GOAL_EXPECTED';
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            //TODO: Add extension column
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            pushData.forEach((/**
             * @param {?} GoalExpectedObj
             * @return {?}
             */
            GoalExpectedObj => {
                /** @type {?} */
                let Recruitments = [];
                for (let i = 1; i <= 4; i++) {
                    /** @type {?} */
                    let Recruitment = {
                        "Qarter": i,
                        "Value": GoalExpectedObj['Q' + i]
                    };
                    Recruitments.push(Recruitment);
                }
                /** @type {?} */
                let jsonObj = {
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
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.GoalExpected && resp.GoalExpected.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                //dao = new ClientCustomDao(dao);
                /** @type {?} */
                let GoalSettingExpected = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                /** @type {?} */
                let GoalSettingExpected_ext = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected_Extension');
                console.log('GoalSettingExpected', GoalSettingExpected);
                if (resp.GoalExpected != null) {
                    /** @type {?} */
                    let GoalExpectedDatas = resp.GoalExpected;
                    console.log('GoalExpectedDatas', GoalExpectedDatas);
                    GoalExpectedDatas.forEach((/**
                     * @param {?} GoalExpectedData
                     * @return {?}
                     */
                    GoalExpectedData => {
                        console.log('GoalExpectedData', GoalExpectedData);
                        //delete the data that needs to be updated 
                        /** @type {?} */
                        let ToDeleteGoalExpectedYears = GoalExpectedData.DataYear;
                        console.log('ToDeleteGoalExpectedYears', ToDeleteGoalExpectedYears);
                        if (ToDeleteGoalExpectedYears != null) {
                            GoalSettingExpected.addRestriction(new EqualRestriction('DataYear', [ToDeleteGoalExpectedYears]));
                            dao.transactionDelete(GoalSettingExpected);
                            //update all date 
                            /** @type {?} */
                            let clientID = v4();
                            GoalSettingExpected = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                            GoalSettingExpected.setValue("ClientID", clientID);
                            GoalSettingExpected.setValue("DataYear", GoalExpectedData.DataYear);
                            GoalSettingExpected.setValue("FYFC", GoalExpectedData.FYFC);
                            GoalSettingExpected.setValue("ANP", GoalExpectedData.ANP);
                            GoalSettingExpected.setValue("DataTime", parseISO(GoalExpectedData.synchDetail.lastUpdateDateTimeBackend).getTime());
                            GoalSettingExpected.setValue("ClientTime", Date.now());
                            GoalSettingExpected_ext.setValue("ClientID", clientID);
                            /** @type {?} */
                            let Recruitments = GoalExpectedData.Recruitments;
                            for (let data of Recruitments) {
                                GoalSettingExpected.setValue("Q" + data.Qarter, data.Value);
                            }
                            console.log("GoalSettingExpected 2", GoalSettingExpected);
                            dao.transactionInsert(GoalSettingExpected);
                            dao.transactionInsert(GoalSettingExpected_ext);
                        }
                    }));
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    getPushData(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let datas = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let GoalExpectedObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Goal_Setting_Expected');
            if (dao && GoalExpectedObj) {
                GoalExpectedObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(GoalExpectedObj).toPromise();
                console.log('query GoalExpected obj:', resp);
                if (resp.Body.length > 0) {
                    // let GoalExpectedArray = resp.Body;
                    datas = resp.Body;
                }
            }
            return datas;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'GOAL';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.Goals.length > 0) {
                /** @type {?} */
                let saveGoal = this.apiFactory.getAPI("saveGoal");
                ((/** @type {?} */ (saveGoal))).GoalDatas = resp.Goals;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveGoal).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActualSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'ACTUAL';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.Actual.length > 0) {
                /** @type {?} */
                let saveActual = this.apiFactory.getAPI("saveActual");
                ((/** @type {?} */ (saveActual))).ActualDatas = resp.Actual;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveActual).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AgencyPlanSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'AGENCY_PLAN';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.AgencyPlans.length > 0) {
                /** @type {?} */
                let saveAgencyPlan = this.apiFactory.getAPI("saveAgencyPlan");
                ((/** @type {?} */ (saveAgencyPlan))).AgencyPlanDatas = resp.AgencyPlans;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveAgencyPlan).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'PROGRESS';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.Progress.length > 0) {
                /** @type {?} */
                let saveProgress = this.apiFactory.getAPI("saveProgress");
                ((/** @type {?} */ (saveProgress))).ProgressDatas = resp.Progress;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveProgress).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YearConfigSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'YEAR_CONFIG';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.Configurations.length > 0) {
                /** @type {?} */
                let saveYearConfig = this.apiFactory.getAPI("saveYearConfig");
                ((/** @type {?} */ (saveYearConfig))).FirstUseAPP = resp.FirstUseAPP;
                ((/** @type {?} */ (saveYearConfig))).yearConfigs = resp.Configurations;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveYearConfig).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileCodeSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'PROFILE_CODE';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            /** @type {?} */
            let dao = this.DaoFactory.getDao("Profile");
            /** @type {?} */
            let profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
            if (resp.datalist.length > 0) {
                dao.transactionDelete(profileCodeObj);
                for (let data of resp.datalist) {
                    for (let code of data.values) {
                        profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
                        profileCodeObj.setValue("TypeID", data.datalistId);
                        profileCodeObj.setValue("Code", code.value);
                        profileCodeObj.setValue("MappingID", code.label);
                        profileCodeObj.setValue("Orders", code.orders);
                        profileCodeObj.setValue("Arguments", code.arguments);
                        profileCodeObj.setValue("ValidityPeriod", endOfDay(new Date(code.validityPeriod)).getTime());
                        dao.transactionInsert(profileCodeObj);
                    }
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return __awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomRouterReuseStrategy {
    constructor() {
        this.handlers = {};
    }
    /**
     * @return {?}
     */
    deleteRouteSnapshot() {
        console.log('delete snapshot!!');
        Object.keys(this.handlers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            let componentRef = null;
            if (this.handlers[key])
                componentRef = this.handlers[key]['componentRef'];
            if (componentRef) {
                componentRef.destroy();
            }
        }));
        this.handlers = {};
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        console.debug('shouldDetach======>', route);
        return this.isReuseRoute(route);
    }
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    store(route, handle) {
        console.debug('store======>', route, handle);
        console.log("this.getRouteUrl:", this.getRouteUrl(route));
        this.handlers[this.getRouteUrl(route)] = handle;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        // console.debug('shouldAttach======>', route);
        return this.isReuseRoute(route) && (!!this.handlers[this.getRouteUrl(route)]);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        // console.debug('retrieve======>', route);
        if (!this.handlers[this.getRouteUrl(route)]) {
            return null;
        }
        return this.handlers[this.getRouteUrl(route)];
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        // console.debug('shouldReuseRoute======>', future, curr);
        return future.routeConfig === curr.routeConfig;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    getRouteUrl(route) {
        /** @type {?} */
        let next = this.getTruthRoute(route);
        /** @type {?} */
        let segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        /** @type {?} */
        let /** @type {?} */ url = segments
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i;
        }))
            .reverse()
            .join('/');
        return url;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    getTruthRoute(route) {
        /** @type {?} */
        let next = route;
        while (next.firstChild) {
            next = next.firstChild;
        }
        return next;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    isReuseRoute(route) {
        //default is true;
        /** @type {?} */
        let shouldReuse = true;
        /** @type {?} */
        let next = route;
        while (next) {
            if (next.data.hasOwnProperty("cache")) {
                shouldReuse = next.data.cache;
            }
            next = next.firstChild;
        }
        console.debug('isReuseRoute', shouldReuse);
        return shouldReuse;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorsHandler {
    /**
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} settingService
     * @param {?} injector
     * @param {?} APP_CONFIG
     */
    constructor(APIFactory$$1, dispatcher, deviceService, settingService, injector, APP_CONFIG) {
        this.APIFactory = APIFactory$$1;
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
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            /** @type {?} */
            let APIFactory$$1 = this.getAPIFactory();
            /** @type {?} */
            let dispatcher = this.getAPIDispatcher();
            // Log the error anyway
            console.error(error);
            if (this.isDebug)
                alert('error:' + error.message);
            /** @type {?} */
            let stack = yield fromError(error, { offline: true });
            stack = stack.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.source));
            /** @type {?} */
            let logErrorAPI = APIFactory$$1.getAPI("LogError");
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaService {
    /**
     * @param {?} injector
     * @param {?} AOPTokenService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} DaoFactory
     * @param {?} profileCodeService
     */
    constructor(injector, AOPTokenService$$1, APIFactory$$1, dispatcher, DaoFactory$$1, profileCodeService) {
        this.injector = injector;
        this.AOPTokenService = AOPTokenService$$1;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.DaoFactory = DaoFactory$$1;
        this.profileCodeService = profileCodeService;
    }
    //Get Meta setting by id
    /**
     * @param {?} id
     * @return {?}
     */
    getMetaJson(id) {
        /** @type {?} */
        let configAPI = this.APIFactory.getAPI("getMetaConfig");
        ((/** @type {?} */ (configAPI))).configName = id;
        return this.dispatcher.dispatch(configAPI).toPromise();
    }
}
MetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MetaService.ctorParameters = () => [
    { type: Injector },
    { type: AOPTokenService },
    { type: APIFactory },
    { type: APIDispatch },
    { type: DaoFactory },
    { type: ProfileCodeService }
];
/** @nocollapse */ MetaService.ngInjectableDef = defineInjectable({ factory: function MetaService_Factory() { return new MetaService(inject(INJECTOR), inject(AOPTokenService), inject(APIFactory), inject(APIDispatch), inject(DaoFactory), inject(ProfileCodeService)); }, token: MetaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DisplayMetaController {
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} vaildResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, vaildResult) {
    }
    ;
    /**
     * @param {?} data
     * @param {?} vaildResult
     * @return {?}
     */
    onValidateAll(data, vaildResult) {
        return true;
    }
    ;
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) {
    }
    ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class APIExecutor {
    /**
     * @param {?} errorHandler
     * @param {?} APIFactory
     * @param {?} dispatcher
     */
    constructor(errorHandler, APIFactory$$1, dispatcher) {
        this.errorHandler = errorHandler;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} params
     * @return {?}
     */
    getData(config, params = null) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let API = this.APIFactory.getAPI(config.source.read);
                if (params)
                    Object.keys(params).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    (key) => {
                        API[key] = params[key];
                    }));
                /** @type {?} */
                let resp = yield this.dispatcher.dispatch(API).toPromise();
                return resp["Body"][0];
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00802", error.message));
                return null;
            }
        });
    }
    /**
     * @param {?} config
     * @param {?} data
     * @param {?=} params
     * @return {?}
     */
    saveData(config, data, params = null) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let API = this.APIFactory.getAPI(config.source.write);
                if (params)
                    Object.keys(params).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    (key) => {
                        API[key] = params[key];
                    }));
                API["Data"] = data;
                return yield this.dispatcher.dispatch(API).toPromise();
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00803", error.message));
                return null;
            }
        });
    }
}
APIExecutor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIExecutor.ctorParameters = () => [
    { type: ErrorHandler },
    { type: APIFactory },
    { type: APIDispatch }
];
/** @nocollapse */ APIExecutor.ngInjectableDef = defineInjectable({ factory: function APIExecutor_Factory() { return new APIExecutor(inject(ErrorHandler), inject(APIFactory), inject(APIDispatch)); }, token: APIExecutor, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputExecutor extends APIExecutor {
    /**
     * @param {?} config
     * @param {?} params
     * @return {?}
     */
    getData(config, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    /**
     * @param {?} config
     * @param {?} data
     * @param {?} params
     * @return {?}
     */
    saveData(config, data, params) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (config.source.write)
                return _super("saveData").call(this, config, data, params);
            else
                return null;
        });
    }
}
InputExecutor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ InputExecutor.ngInjectableDef = defineInjectable({ factory: function InputExecutor_Factory() { return new InputExecutor(inject(ErrorHandler), inject(APIFactory), inject(APIDispatch)); }, token: InputExecutor, providedIn: "root" });

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
class MetaColumn {
    /**
     * @param {?} id
     * @param {?} name
     * @param {?} type
     */
    constructor(id, name, type) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaConfig {
    constructor() {
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
    setColumn(columnList, groupList) {
        console.log("MetaConfig setColumn:", columnList, groupList);
        // Set Column MetaConfig
        columnList = columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.createColumnObject(x)));
        if (groupList.length > 0) {
            /** @type {?} */
            let colsInGroup = flatMap(groupList, (/**
             * @param {?} x
             * @return {?}
             */
            x => x.columns));
            groupList = groupList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.createGroupColumnObject(x, columnList)));
            columnList = columnList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => !colsInGroup.includes(x.id)));
            groupList.forEach((/**
             * @param {?} ele
             * @return {?}
             */
            (ele) => {
                ele.groupRows = this.convertColumns2Row(ele.groupColumns);
                columnList.splice(ele.order, 0, ele);
            }));
            columnList.forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                ele.order = index;
            }));
        }
        this.Columns = columnList;
        this.Rows = this.convertColumns2Row(columnList);
    }
    /**
     * @param {?} footerList
     * @return {?}
     */
    setFooter(footerList) {
        this.Footer = footerList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return new MetaColumn(x.id, x.name, x.type);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createColumnObject(column) {
        /** @type {?} */
        let columnObj = new MetaColumn(column.id, column.name, column.type);
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
    }
    /**
     * @private
     * @param {?} groupColumn
     * @param {?} coulmnList
     * @return {?}
     */
    createGroupColumnObject(groupColumn, coulmnList) {
        /** @type {?} */
        let columnIDs = groupColumn.columns;
        /** @type {?} */
        let groupColumnObj = this.createColumnObject(groupColumn);
        groupColumnObj.groupColumns = columnIDs.map((/**
         * @param {?} x
         * @return {?}
         */
        x => coulmnList.filter((/**
         * @param {?} y
         * @return {?}
         */
        y => y.id === x))[0]));
        return groupColumnObj;
    }
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    convertColumns2Row(columnList) {
        console.log("MetaConfig convertColumns2Row:", columnList);
        /** @type {?} */
        let tmpArray = [];
        /** @type {?} */
        let rowArray = [];
        for (var i = 0; i < columnList.length; i++) {
            tmpArray.push(columnList[i]);
            if (columnList[i].inline === false || i === (columnList.length - 1)) {
                rowArray.push([...tmpArray]);
                tmpArray = [];
            }
        }
        return rowArray;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaSource {
    /**
     * @param {?} type
     * @param {?} read
     * @param {?} write
     */
    constructor(type, read, write) {
        this.type = type;
        this.read = read;
        this.write = write;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaGrid {
    /**
     * @param {?} pc
     * @param {?=} nb
     * @param {?=} pad
     * @param {?=} mobile
     */
    constructor(pc, nb, pad, mobile) {
        this.pc = pc;
        this.nb = nb ? nb : pc;
        this.pad = pad ? pad : pc;
        this.mobile = mobile ? mobile : pc;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultMetaParser {
    /**
     * @param {?} json
     * @return {?}
     */
    parse(json) {
        console.log("Default Meta Parser parse:", json);
        json.columns = this.fillDefaultColumnSetting(json.columns);
        /** @type {?} */
        let group = json.group ? json.group : [];
        group = this.fillDefaultColumnSetting(group);
        /** @type {?} */
        let metaConfig = new MetaConfig();
        console.log("DefaultMetaParser parse:", json, group);
        metaConfig.source = this.getSource(json);
        metaConfig.setColumn(json.columns, group);
        metaConfig.setFooter(json.footer);
        console.log("After Parse:", metaConfig);
        return metaConfig;
    }
    /**
     * @private
     * @param {?} json
     * @return {?}
     */
    getSource(json) {
        try {
            /** @type {?} */
            let type = json.source.type;
            /** @type {?} */
            let read = json.source.read;
            /** @type {?} */
            let write = json.source.write;
            read = read ? read : null;
            write = write ? write : null;
            return new MetaSource(type, read, write);
        }
        catch (error) {
            throw new APPError("F00801", error.message);
        }
    }
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    fillDefaultColumnSetting(columnList) {
        return columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._defaultSetting(x)));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    _defaultSetting(column) {
        /** @type {?} */
        let grid = column.grid;
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
        }, column, { grid });
    }
}
DefaultMetaParser.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DefaultMetaParser.ngInjectableDef = defineInjectable({ factory: function DefaultMetaParser_Factory() { return new DefaultMetaParser(); }, token: DefaultMetaParser, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MetaValid {
    /**
     * @param {?} colID
     * @param {?} isValid
     * @param {?} message
     */
    constructor(colID, isValid, message) {
        this.colID = colID;
        this.isValid = isValid;
        this.message = message;
    }
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
 * @abstract
 */
class BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, parser, executor) {
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
    ngOnInit() {
        console.log("MetaComponent ngOninit!");
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let metaJSON = yield this.metaService.getMetaJson(this.metaID);
                this.metaConfig = this.parser.parse(metaJSON);
                yield this.loadData();
                this.metaLoaded = true;
            }
            catch (error) {
                throw new APPError("F00800", error.message);
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let executed_data = yield this.executor.getData(this.metaConfig, this.getMetaParams());
            if (executed_data) {
                this._data = executed_data;
                this.onDataUpdated();
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    waitUntilMetaLoaded() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            /** @type {?} */
            let checkInterval = setInterval((/**
             * @return {?}
             */
            () => {
                if (this.metaLoaded) {
                    clearInterval(checkInterval);
                    res();
                }
            }), 100);
        }));
    }
    /**
     * @return {?}
     */
    isMetaLoaded() {
        return this.metaLoaded;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DisplayMetaComponent extends BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, profileCodeService, parser, executor) {
        super(metaService, parser, executor);
        this.profileCodeService = profileCodeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("DisplayMetaComponent ngOninit!");
        super.ngOnInit();
    }
    /**
     * @protected
     * @return {?}
     */
    onDataUpdated() {
        this.convertCodeToDisplay();
    }
    /**
     * @private
     * @return {?}
     */
    convertCodeToDisplay() {
        /** @type {?} */
        let needToConvert = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Label' && !!x.optionRef));
        needToConvert.forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => {
            if (this._data[col.id])
                this._data[col.id] = this.profileCodeService.convertCode2Text(col.optionRef, this._data[col.id]);
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group')).forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            /** @type {?} */
            let colsNeedConvert = group.groupColumns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === 'Label' && !!x.optionRef));
            console.log("colsNeedConvert:", colsNeedConvert);
            if (colsNeedConvert.length > 0 && this._data[group.id]) {
                this._data[group.id].forEach((/**
                 * @param {?} groupData
                 * @param {?} index
                 * @return {?}
                 */
                (groupData, index) => {
                    /** @type {?} */
                    let extendedObj = colsNeedConvert.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        return {
                            key: x.id,
                            value: this.profileCodeService.convertCode2Text(x.optionRef, this._data[group.id][index][x.id])
                        };
                    })).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    (acc, cur) => { acc[cur.key] = cur.value; return acc; }), {});
                    console.log("extendedObj:", extendedObj);
                    groupData = Object.assign(groupData, extendedObj);
                }));
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FormMetaComponent extends BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, profileCodeService, parser, executor) {
        super(metaService, parser, executor);
        this.profileCodeService = profileCodeService;
        this.validationResult = new ValidationResult();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("FormMetaComponent ngOninit!");
        super.ngOnInit();
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupID
     * @param {?=} index
     * @return {?}
     */
    onChange(column, value, groupID = null, index = -1) {
        console.log("onChange:", column, value, groupID, index);
        /** @type {?} */
        let isGroup = (groupID && index >= 0);
        /** @type {?} */
        let columnID = isGroup ? column : (column + index.toString());
        /** @type {?} */
        let validResp = this.valid(column, value, isGroup);
        console.log("validResp:", validResp);
        if (validResp)
            this.validationResult.deleteError(columnID);
        else
            this.validationResult.setErrorMap(columnID, validResp.message);
        this.onValueChange(column, value, groupID, index);
    }
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @param {?=} isGroup
     * @return {?}
     */
    valid(column, value, isGroup = false) {
        console.log("valid:", column, value, isGroup);
        /** @type {?} */
        let resp = new MetaValid(column, true, "");
        /** @type {?} */
        let col;
        if (isGroup) {
            /** @type {?} */
            let groupCol = this.metaConfig.Columns
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === 'Group'))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.groupColumns));
            col = flatten(groupCol).filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === column))[0];
        }
        else
            col = this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === column))[0];
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
    }
    /**
     * @private
     * @return {?}
     */
    validAll() {
        //Column Result
        /** @type {?} */
        let validResult = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type !== "Group"))
            .map((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.valid(col.id, this._data[col.id])))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.isValid));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            /** @type {?} */
            let groupId = group.id;
            this._data[groupId].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                validResult = validResult.concat(group.groupColumns.map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
                    /** @type {?} */
                    let validResp = this.valid(col.id, ele[col.id], true);
                    validResp.colID = col.id + index.toString();
                    return validResp;
                })).filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => !x.isValid)));
            }));
        }));
        console.log("validAll result:", validResult);
        return validResult;
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    onBtnClick(type, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._data[id + 'Btn'])
                this._data[id + 'Btn'].disable = true;
            if (type === 'submit') {
                this.validationResult.clearErrorMap();
                /** @type {?} */
                let result = this.validAll();
                result.forEach((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    this.validationResult.setErrorMap(err.colID, err.message);
                }));
                if (this.onValidateAll() && result.length === 0) {
                    //CALL SAVE API
                    /** @type {?} */
                    let resp = yield this.saveData();
                    console.log("save data resp:", resp);
                    this.btnClick(type, id);
                    if (this._data[id + 'Btn'])
                        this._data[id + 'Btn'].disable = true;
                }
                else {
                    this._data[id + 'Btn'].disable = false;
                }
            }
            else
                this.btnClick(type, id);
        });
    }
    /**
     * @protected
     * @return {?}
     */
    saveData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.executor.saveData(this.metaConfig, this._data, this.getMetaParams());
        });
    }
    /**
     * @param {?} groupName
     * @param {?} index
     * @return {?}
     */
    onGroupRemove(groupName, index) {
        this._data[groupName] = this._data[groupName].filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => i != index));
        /** @type {?} */
        let group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === groupName))[0].groupColumns;
        group_col.forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            this.validationResult.deleteError(col.id + index.toString());
        }));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    onGroupAdd(groupName) {
        /** @type {?} */
        let group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === groupName))[0].groupColumns;
        /** @type {?} */
        let keys = group_col.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        console.log("keys:", keys);
        /** @type {?} */
        let newObj = keys.map((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            let y = {};
            /** @type {?} */
            let defaultVal = group_col.filter((/**
             * @param {?} z
             * @return {?}
             */
            z => z.id === x))[0].default;
            y[x] = defaultVal;
            return y;
        })).reduce((/**
         * @param {?} acc
         * @param {?} current
         * @return {?}
         */
        (acc, current) => {
            return Object.assign(acc, current);
        }), {});
        console.log("GroupAdd newObj:", newObj);
        this._data[groupName] = [...this._data[groupName], newObj];
    }
    /**
     * @protected
     * @return {?}
     */
    onDataUpdated() {
        this.addBtnAttr();
        this.fetchOptions();
    }
    /**
     * @private
     * @return {?}
     */
    fetchOptions() {
        this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.optionRef && x.optionRef.length > 0))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.createOption(x)))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this._data[option.key] = option.val;
        }));
        /** @type {?} */
        let groupCol = this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group'))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.groupColumns.filter((/**
         * @param {?} y
         * @return {?}
         */
        y => y.optionRef && y.optionRef.length > 0))));
        /** @type {?} */
        let groupOpt = flatMap(groupCol, (/**
         * @param {?} x
         * @return {?}
         */
        x => x.map((/**
         * @param {?} y
         * @return {?}
         */
        y => this.createOption(y)))));
        groupOpt.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this._data[option.key] = option.val;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    addBtnAttr() {
        this.metaConfig.Footer.forEach((/**
         * @param {?} ele
         * @return {?}
         */
        ele => {
            if (ele.type === 'submit' || ele.type === 'button')
                this._data[ele.id + "Btn"] = Object.assign({
                    disable: false
                }, ele);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createOption(column) {
        /** @type {?} */
        let resp = {
            key: column.id + 'Option',
            val: []
        };
        /** @type {?} */
        let codeArray = this.profileCodeService.getCodeArray(column.optionRef);
        if (column.type === 'Select')
            resp.val = codeArray
                .map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => new SelectOption$1(x.getCode(), this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()))));
        else
            resp.val = codeArray.map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                return {
                    id: x.getCode(),
                    name: this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()),
                    arguments: JSON.parse(x.getArguments())
                };
            }));
        return resp;
    }
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
class ValidController {
    /**
     * @param {?} bean
     * @return {?}
     */
    static addBean(bean) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === bean.name)).length === 0)
            this.beanPool.push(bean);
    }
    /**
     * @param {?} data
     * @param {?} name
     * @return {?}
     */
    static validObject(data, name) {
        try {
            console.log("validObject:", name, data);
            /** @type {?} */
            let bean = this.getBean(name);
            if (bean) {
                /** @type {?} */
                let validResult = bean.validSelf(data);
                if (validResult.length > 0) {
                    this.errorHandler(validResult, name);
                }
                return validResult.length === 0;
            }
            else {
                throw new Error(`Cannot find Bean ${name}.`);
            }
        }
        catch (error) {
            console.error('Valid Object error', error);
            return true;
        }
    }
    /**
     * @param {?} objectName
     * @param {?} propertyName
     * @param {?} condition
     * @return {?}
     */
    static addCondition(objectName, propertyName, condition) {
        /** @type {?} */
        let bean = this.getBean(objectName);
        /** @type {?} */
        let property = bean.getOrCreateProperty(propertyName);
        console.log("addCondition:", bean, property);
        property.addCondition(condition);
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    static getBean(name) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === name)).length > 0)
            return this.beanPool.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.name === name))[0];
        else
            return null;
    }
    /**
     * @private
     * @param {?} validResult
     * @param {?} name
     * @return {?}
     */
    static errorHandler(validResult, name) {
        console.error(validResult.reduce((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => `${x}\n${y}`), `Class ${name} valid error:`));
    }
}
ValidController.beanPool = [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidProperty {
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        this.conditionList = [];
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    addCondition(condition) {
        this.conditionList.push(condition);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    validProperty(value) {
        return this.conditionList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.valid(value))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getErrorMsg(this.name)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidBean {
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @param {?} name
     * @param {?} type
     */
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.propertyList = [];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getOrCreateProperty(name) {
        /** @type {?} */
        let filtered = this.propertyList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === name));
        if (filtered.length > 0) {
            return filtered[0];
        }
        else {
            /** @type {?} */
            let property = new ValidProperty(name);
            this.addProperty(property);
            return property;
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    validSelf(data) {
        /** @type {?} */
        let validResult = flatMap(this.propertyList, (/**
         * @param {?} x
         * @return {?}
         */
        x => x.validProperty(data[x.name])));
        console.log("validSelf result:", validResult);
        return validResult;
    }
    /**
     * @private
     * @param {?} property
     * @return {?}
     */
    addProperty(property) {
        this.propertyList.push(property);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @return {?}
 */
function Bean(name) {
    return (/**
     * @template T
     * @param {?} constructor
     * @return {?}
     */
    function Bean(constructor) {
        ValidController.addBean(new ValidBean(name, constructor));
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.beanName = name;
            }
        };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ValidType = {
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
class RequiredCondition {
    constructor() {
        this.baseTypes = ['string', 'undefined', 'number', 'boolean'];
        this.type = ValidType.Required;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    valid(value) {
        this.value = value;
        console.log('RequiredCondition valid:', value, this.baseTypes.indexOf(typeof value) === -1);
        /** @type {?} */
        let isBaseType = this.baseTypes.indexOf(typeof value) !== -1 || value === null;
        if (isBaseType)
            return value !== null && value !== undefined;
        else if (value instanceof Array)
            return value.length > 0;
        else if (typeof value === 'object')
            return ValidController.validObject(value, value.beanName);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    getErrorMsg(column) {
        return `${column} is ${this.value} but expect required.`;
    }
}

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
    return (/**
     * @param {?} target
     * @param {?} propertyName
     * @param {?} propertyDesciptor
     * @return {?}
     */
    function (target, propertyName, propertyDesciptor) {
        /** @type {?} */
        const method = propertyDesciptor.value;
        propertyDesciptor.value = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            console.log('pool:', ValidController.beanPool);
            /** @type {?} */
            let result = method.apply(this, args);
            console.log('valid result: ', result);
            if (isObservable(result)) {
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
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        result.subscribe({
            /**
             * @param {?} x
             * @return {?}
             */
            next(x) {
                validObject(x);
                observer.next(x);
            },
            /**
             * @param {?} err
             * @return {?}
             */
            error(err) { observer.error(err); },
            /**
             * @return {?}
             */
            complete() { observer.complete(); }
        });
    }));
}
/**
 * @param {?} result
 * @return {?}
 */
function handlePromise(result) {
    return __awaiter(this, void 0, void 0, function* () {
        /** @type {?} */
        let resolved = yield result;
        validObject(resolved);
        return resolved;
    });
}
/**
 * @param {?} data
 * @return {?}
 */
function validObject(data) {
    console.log("Valid.ts validObject:", data);
    if (data instanceof Array)
        data.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => validObject(x)));
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

export { CoreModule, StringUtils, DateUtils, PageInfo, ValidationResult, NumberUtils, TableUtils, Language, TranslatePipe, TranslateService, InitialService, ConfigTask, DataSyncTask, DeviceTask, ConfigToken, GoalSettingInterfaceToken, configTaskToken, registerAPITaskToken, dataSyncTaskToken, customTaskToken, fetchLanguageFinishToken, fetchSettingFinishToken, fetchConfigFinishToken, registerDataSyncFuncToken, checkTimeoutToken, timeoutActionToken, checkPermissionToken, authActionToken, authRouteToken, AfterLoginToken, LoadingAppToken, LoginMgrToken, PushIDMgrToken, checkForRootToken, RestHeaderToken, LanguageAccessToken, LanguageUpdateToken, NetworkChangeToken, FontSizeAccessToken, changeFontSizeToken, showRuleToken, initialFinishToken, NotificationProviderToken, GoalSettingNotStartFirstMessageActionToken, GoalSettingNotStartMessageActionToken, NeedGoalSettingMessageActionToken, GoalPromoSettingMessageActionToken, GoalAutoApproveMessageActionToken, GoalAutoApproveLeaderMessageActionToken, ApproveGoalIsRejectMessageActionToken, ApproveGoalIsApproveMessageActionToken, PendingReviewMessageActionToken, SupervisorHaveChangeAgentMessageActionToken, SupervisorHaveChangeOldMessageActionToken, SupervisorHaveChangeNewMessageActionToken, GoalAutoRejectMessageActionToken, GoalAutoRejectLeaderMessageActionToken, ActivityArriveTenPointMessageActionToken, ActivityArriveTwentyPointMessageActionToken, ActivityNotArriveTwentyPointMessageActionToken, ReminderEventsMessageActionToken, DataPrivacyProtectionMessageActionToken, OvertimeMessageActionToken, AutoDeleteMessageActionToken, OfflineMessageActionToken, VersionCheckMessageActionToken, TimoutMessageActionToken, DataCollectionMessageActionToken, ContactPermissionActionToken, yearConfigExtensionDataToken, goalSettingExtensionDataToken, agencyPlanExtensionDataToken, actionDirectiveTaskToken, AOPTokenService, APIInvokeMethod, APIFactory, APIResponse, APIRequest, APIDispatch, SettingAPI, SettingUpdateAPI, getAgencyPlanAPI, getActualAPI, getGoalAPI, getYearConfigAPI, getProgressAPI, GetDeviceInfoAPI, LoginAPI, LogoutAPI, DashboardGetMessageListAPI, DashboardUpdateMessageStatusAPI, ChangeMessageStatusAPI$1 as ChangeMessageStatusAPI, pushApproveGoalAPI, OfflineAuthAPI, pushGoalSettingDataAPI, GetOtherParameterAPI, UnbindDeviceAPI, UpdateTimeListAPI, SyncPushAPI, ClientCustomDao, DaoFactory, SQLCommand, SQLiteColumn, SQLiteDao, SQLiteDatabase, SQLiteResponse, SQLiteTable, AndCompoundRestriction, EqualRestriction, GreaterOrEqualRestriction, GreaterRestriction, InRestriction, LessOrEqualRestriction, LikeRestriction, LimitRestriction, NotEqualRestriction, NotNullRestriction, NullRestriction, ORCompoundRestriction, OffsetRestriction, OrderByRestriction, Address, ContactItem, Phone, CordovaDeviceDao, DeviceService, DeviceFactory, LoginInfo, LoginResponse, LOGIN_TYPE, DefaultLoginMgr, DefaultLoadingApp, AuthObject, AuthError, ActionDirective, ACTION_STATUS, ActionEvent, ActionService, AuthService, CheckPermissionService, TimeoutService, RouteObject, FUNC_STATE, CalendarSync, ContactSync, CustomerSync, MessageSync, GoalExpectedSync, GoalSync, ActualSync, AgencyPlanSync, ProgressSync, YearConfigSync, ProfileCodeSync, DataSyncService, VersionCheckService, Setting, ViewDateChange, ChangeAction, ProfileCode, versionInfo, LanguageCode, SelectOption$1 as SelectOption, SuccessStatus, GoalExtension, SubmitGoalData, SubmitGoalPlan, SubmitGoalPlanInfo, SubmitGoalSettingValue, SubmitGoalInfo, YESNO, TIMEBASE, SUBMITGOALTYPE, PERFORMANCETYPE, APPMODE, ProfileCodeService, SettingService, LogService, CustomRouterReuseStrategy, AppRouter, ErrorsHandler, APPError, MetaService, DisplayMetaController, APIExecutor, InputExecutor, DefaultMetaParser, MetaColumn, MetaConfig, MetaGrid, MetaSource, MetaValid, BaseMetaComponent, DisplayMetaComponent, FormMetaComponent, TranslatePricePipe, TranslatePriceService, NotificationMgr, NotificationObject, NotificationProvider, NotificationType, NotificationCategory, SqliteExecutorComponent, NumberFormatPipe, Bean, Required, Valid, APIDispatch as ɵe, APIFactory as ɵbe, defaultHeader as ɵm, DeviceAPIAccess as ɵy, MockAPIAccess as ɵg, RestfulAPIAccess as ɵi, SQLiteAPIAccess as ɵh, ActionDirective as ɵbn, ActionService as ɵbu, AuthService as ɵbo, DefaultLoginMgr as ɵbj, LoginTokenStore as ɵs, CheckPermissionService as ɵbr, TimeoutService as ɵz, DeviceFactory as ɵl, DeviceService as ɵk, DaoFactory as ɵby, ConfigToken as ɵf, LanguageAccessToken as ɵc, LanguageUpdateToken as ɵd, RestHeaderToken as ɵj, authActionToken as ɵbp, authRouteToken as ɵbq, checkPermissionToken as ɵbs, checkTimeoutToken as ɵba, timeoutActionToken as ɵbb, ConfigToken as ɵn, LoginMgrToken as ɵo, NotificationProviderToken as ɵq, PushIDMgrToken as ɵp, actionDirectiveTaskToken as ɵr, TranslatePipe as ɵa, TranslateService as ɵb, NotificationMgr as ɵu, NotificationProvider as ɵv, NumberFormatPipe as ɵbm, TranslatePriceService as ɵbi, TranslatePricePipe as ɵbh, AppRouter as ɵbk, SettingService as ɵbz };

//# sourceMappingURL=allianzSND-core.js.map