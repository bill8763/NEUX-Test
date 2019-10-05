/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { FUNC_STATE } from './function/IFunctionSync';
import { DaoFactory } from '../device/sqlite/DaoFactory';
import { EqualRestriction } from '../device/sqlite/restrictions/EqualRestriction';
import { ConfigToken, registerDataSyncFuncToken } from '../injectionToken/injection-token';
import { first } from 'rxjs/operators';
import { APIFactory } from '../api/APIFactory';
import { APIDispatch } from '../api/APIDispatch';
import { BehaviorSubject } from 'rxjs';
import { parseISO } from 'date-fns';
import * as _ from 'lodash';
import { APPError } from '../errorHandler/APPError';
import { DeviceService } from '../device/device.service';
import * as i0 from "@angular/core";
import * as i1 from "../injectionToken/injection-token";
import * as i2 from "../api/APIFactory";
import * as i3 from "../api/APIDispatch";
import * as i4 from "../device/sqlite/DaoFactory";
import * as i5 from "../device/device.service";
var DataSyncService = /** @class */ (function () {
    function DataSyncService(APP_CONFIG, APIFactory, dispatcher, errorHandler, DaoFactory, devcieService, registerDataSyncFunc) {
        this.APP_CONFIG = APP_CONFIG;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
        this.DaoFactory = DaoFactory;
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
    DataSyncService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.func_url = this.APP_CONFIG[this.APP_CONFIG.ENV].SYNC_URL;
        this.FuncAPIMap = this.registerDataSyncFunc.getFuncMap();
        this.registerDataSyncFunc.getSyncInstance().forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
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
        if (async === void 0) { async = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        if (async === void 0) { async = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, parallelSync_1, seqSync_2, syncPromiseArray_1, dao_1, dataSyncTimeObj, resp, apiTimeMap_1, seqSync_1, seqSync_1_1, api_name, e_1_1, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("SyncProcessList:", this.SyncProcessList);
                        console.log("Sync Func:", FuncList);
                        if (!this.devcieService.getNetworkState()) return [3 /*break*/, 17];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 14, 15, 16]);
                        // If not async , filter current sync function first 
                        if (!async) {
                            FuncList = FuncList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return !_this.SyncProcessList.includes(x); }));
                        }
                        this.SyncProcessList = tslib_1.__spread(this.SyncProcessList, FuncList);
                        parallelSync_1 = [];
                        seqSync_2 = [];
                        FuncList.forEach((/**
                         * @param {?} function_name
                         * @return {?}
                         */
                        function (function_name) {
                            if (Object.keys(_this.FuncAPIMap).includes(function_name)) {
                                if (_this.FuncAPIMap[function_name].length > 1)
                                    seqSync_2 = tslib_1.__spread(seqSync_2, _this.FuncAPIMap[function_name]);
                                else
                                    parallelSync_1 = tslib_1.__spread(parallelSync_1, _this.FuncAPIMap[function_name]);
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
                        if (!dao_1) return [3 /*break*/, 12];
                        dataSyncTimeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                        return [4 /*yield*/, dao_1.queryByTable(dataSyncTimeObj).toPromise()];
                    case 2:
                        resp = _b.sent();
                        console.log('dataSyncTime resp:', resp);
                        apiTimeMap_1 = resp.Body;
                        parallelSync_1.forEach((/**
                         * @param {?} api_name
                         * @return {?}
                         */
                        function (api_name) {
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
                        seqSync_1 = tslib_1.__values(seqSync_2), seqSync_1_1 = seqSync_1.next();
                        _b.label = 5;
                    case 5:
                        if (!!seqSync_1_1.done) return [3 /*break*/, 8];
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
                            if (seqSync_1_1 && !seqSync_1_1.done && (_a = seqSync_1.return)) _a.call(seqSync_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: return [3 /*break*/, 13];
                    case 12: throw new Error("Cannot Find Profile DAO.");
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        error_1 = _b.sent();
                        this.errorHandler.handleError(new APPError("F00110", error_1.message));
                        return [3 /*break*/, 16];
                    case 15:
                        this.SyncProcessList = this.SyncProcessList.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return !FuncList.includes(x); }));
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnBackendTime, returnFrontendTime, APIInstance, url_config, backendTime, frontendTIme, sequenceIDNumberNeed, sequenceIDs, pushJson, pullJson, pullResult, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnBackendTime = funcTimeMap.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return (x.FuncID == api_name); })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.BackendTime; }))[0];
                        returnFrontendTime = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 14, 15, 16]);
                        APIInstance = this.syncAPIMap[api_name];
                        url_config = this.func_url[api_name];
                        backendTime = funcTimeMap.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return (x.FuncID == api_name); })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.BackendTime; }))[0];
                        frontendTIme = funcTimeMap.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return (x.FuncID == api_name); })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.FrontendTime; }))[0];
                        // Debug console
                        console.group("last sync " + api_name + " time:");
                        console.log("backendTime:", backendTime);
                        console.log("frontendTime:", frontendTIme);
                        console.groupEnd();
                        if (!(APIInstance.getState() === FUNC_STATE.AVAILABLE)) return [3 /*break*/, 11];
                        // Change to pending
                        APIInstance.setState(FUNC_STATE.PENDING);
                        this.updateState();
                        return [4 /*yield*/, APIInstance.getSequentialIDNeeded(frontendTIme)];
                    case 2:
                        sequenceIDNumberNeed = _a.sent();
                        console.log("sequenceID need:", sequenceIDNumberNeed);
                        if (!(sequenceIDNumberNeed > 0)) return [3 /*break*/, 5];
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
                        if (!(pushJson.length > 0)) return [3 /*break*/, 8];
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
                            returnBackendTime = parseISO(pullJson['lastUpdateTime']).getTime();
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
                        returnFrontendTime = funcTimeMap.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return (x.FuncID == api_name); })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.FrontendTime; }))[0];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var pushAPI;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pushAPI = this.APIFactory.getAPI("SyncPush");
                        ((/** @type {?} */ (pushAPI))).url = url;
                        ((/** @type {?} */ (pushAPI))).body = data;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var pullAPI;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pullAPI = this.APIFactory.getAPI("SyncPull");
                        ((/** @type {?} */ (pullAPI))).lastUpdateTime = new Date(backendTime).toISOString();
                        ((/** @type {?} */ (pullAPI))).url = url;
                        return [4 /*yield*/, this.dispatcher.dispatch(pullAPI).toPromise()
                                .then((/**
                             * @param {?} data
                             * @return {?}
                             */
                            function (data) {
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
            ((/** @type {?} */ (getSyncSequenceIDAPI))).type = category;
            ((/** @type {?} */ (getSyncSequenceIDAPI))).num = num;
            return this.dispatcher.dispatch(getSyncSequenceIDAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
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
        Object.keys(this.syncAPIMap).forEach((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getSyncState().pipe(first((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return Object.entries(x).filter((/**
                     * @param {?} y
                     * @return {?}
                     */
                    function (y) { return y[0] === func && y[1] === FUNC_STATE.AVAILABLE; })).length > 0; }))).toPromise()];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, backendTime, frontendTime, dataSyncTimeObj, result;
            return tslib_1.__generator(this, function (_b) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DataSyncService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
        { type: APIFactory },
        { type: APIDispatch },
        { type: ErrorHandler },
        { type: DaoFactory },
        { type: DeviceService },
        { type: undefined, decorators: [{ type: Inject, args: [registerDataSyncFuncToken,] }] }
    ]; };
    /** @nocollapse */ DataSyncService.ngInjectableDef = i0.defineInjectable({ factory: function DataSyncService_Factory() { return new DataSyncService(i0.inject(i1.ConfigToken), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.ErrorHandler), i0.inject(i4.DaoFactory), i0.inject(i5.DeviceService), i0.inject(i1.registerDataSyncFuncToken)); }, token: DataSyncService, providedIn: "root" });
    return DataSyncService;
}());
export { DataSyncService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.syncAPIMap;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.FuncAPIMap;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.SyncProcessList;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.func_url;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.syncStateSubject;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.devcieService;
    /**
     * @type {?}
     * @private
     */
    DataSyncService.prototype.registerDataSyncFunc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zeW5jLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2RhdGEtc3luYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUd6RDtJQVVFLHlCQUMrQixVQUFlLEVBQ3BDLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQ08sb0JBQTJDO1FBTnpELGVBQVUsR0FBVixVQUFVLENBQUs7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFV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QUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBN0QsTUFBTSxHQUFHLFNBQW9EO3dCQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixRQUFRLE9BQUksRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDMUQsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Y7O2dCQTlPRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0RBU0ksTUFBTSxTQUFDLFdBQVc7Z0JBekJkLFVBQVU7Z0JBQ1YsV0FBVztnQkFQbUIsWUFBWTtnQkFFMUMsVUFBVTtnQkFlVixhQUFhO2dEQW9CakIsTUFBTSxTQUFDLHlCQUF5Qjs7OzBCQXJDckM7Q0FxUUMsQUFqUEQsSUFpUEM7U0E5T1ksZUFBZTs7Ozs7O0lBRTFCLHFDQUFnQzs7Ozs7SUFDaEMscUNBQWdDOzs7OztJQUNoQywwQ0FBNEM7Ozs7O0lBQzVDLG1DQUFzQjs7Ozs7SUFDdEIsMkNBQWdGOzs7OztJQUU5RSxxQ0FBNEM7Ozs7O0lBQzVDLHFDQUE4Qjs7Ozs7SUFDOUIscUNBQStCOzs7OztJQUMvQix1Q0FBa0M7Ozs7O0lBQ2xDLHFDQUE4Qjs7Ozs7SUFDOUIsd0NBQW9DOzs7OztJQUNwQywrQ0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tICcuL2Z1bmN0aW9uL0lGdW5jdGlvblN5bmMnO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gJy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeSc7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvbic7XG5pbXBvcnQgeyBDb25maWdUb2tlbiwgcmVnaXN0ZXJEYXRhU3luY0Z1bmNUb2tlbiB9IGZyb20gJy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICcuLi9hcGkvQVBJRmFjdG9yeSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uL2FwaS9BUElEaXNwYXRjaCc7XG5pbXBvcnQgeyBTeW5jUHVzaEFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9TeW5jUHVzaEFQSSc7XG5pbXBvcnQgeyBTeW5jUHVsbEFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9TeW5jUHVsbEFQSSc7XG5pbXBvcnQgeyBzeW5jU2VxdWVuY2VJREFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9zeW5jU2VxdWVuY2VJREFQSSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSXJlZ2lzdGVyRGF0YVN5bmNGdW5jIH0gZnJvbSAnLi4vaW5pdFRhc2svaW50ZXJmYWNlL3JlZ2lzdGVyRGF0YVN5bmNGdW5jLmludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gJy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvcic7XG5pbXBvcnQgeyBJRGFvIH0gZnJvbSAnLi4vZGV2aWNlL3NxbGl0ZS9EYW8uaW50ZXJmYWNlJztcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTeW5jU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzeW5jQVBJTWFwOiBPYmplY3QgPSB7fTsgLy8gQVBJ5ZCN56ix5bCN5oeJ5Yiw5a+m5L6LXG4gIHByaXZhdGUgRnVuY0FQSU1hcDogT2JqZWN0ID0ge307IC8vIOWKn+iDveWwjeaHieWIsEFQSVxuICBwcml2YXRlIFN5bmNQcm9jZXNzTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdOyAvLyDnlbbliY3mraPlnKhzeW5j55qE5Yqf6IO9XG4gIHByaXZhdGUgZnVuY191cmwgPSB7fTtcbiAgcHJpdmF0ZSBzeW5jU3RhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHRoaXMuZ2V0Q3VycmVudFN5bmNTdGF0ZSgpKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnksXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBkZXZjaWVTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIEBJbmplY3QocmVnaXN0ZXJEYXRhU3luY0Z1bmNUb2tlbikgcHJpdmF0ZSByZWdpc3RlckRhdGFTeW5jRnVuYzogSXJlZ2lzdGVyRGF0YVN5bmNGdW5jXG4gICkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuZnVuY191cmwgPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uU1lOQ19VUkw7XG4gICAgdGhpcy5GdW5jQVBJTWFwID0gdGhpcy5yZWdpc3RlckRhdGFTeW5jRnVuYy5nZXRGdW5jTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlckRhdGFTeW5jRnVuYy5nZXRTeW5jSW5zdGFuY2UoKS5mb3JFYWNoKHggPT4ge1xuICAgICAgdGhpcy5yZWdpc3RlckFQSSh4KTtcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldFN5bmNTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN5bmNTdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJBUEkoZnVuYzogSUZ1bmN0aW9uU3luYykge1xuICAgIHRoaXMuc3luY0FQSU1hcFtmdW5jLmdldE5hbWUoKV0gPSBmdW5jO1xuICB9XG5cbiAgYXN5bmMgc3luY0FsbEZ1bmMoYXN5bmMgPSBmYWxzZSkge1xuICAgIGNvbnNvbGUubG9nKFwic3luY0FsbEZ1bmM6XCIsIHRoaXMuRnVuY0FQSU1hcCwgT2JqZWN0LmtleXModGhpcy5GdW5jQVBJTWFwKSk7XG4gICAgcmV0dXJuIHRoaXMuc3luY0Z1bmMoT2JqZWN0LmtleXModGhpcy5GdW5jQVBJTWFwKSwgYXN5bmMpO1xuICB9XG5cbiAgYXN5bmMgc3luY0Z1bmMoRnVuY0xpc3Q6IEFycmF5PHN0cmluZz4sIGFzeW5jID0gZmFsc2UpIHtcbiAgICBjb25zb2xlLmxvZyhcIlN5bmNQcm9jZXNzTGlzdDpcIiwgdGhpcy5TeW5jUHJvY2Vzc0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKFwiU3luYyBGdW5jOlwiLCBGdW5jTGlzdCk7XG5cbiAgICBpZiAodGhpcy5kZXZjaWVTZXJ2aWNlLmdldE5ldHdvcmtTdGF0ZSgpKSB7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIElmIG5vdCBhc3luYyAsIGZpbHRlciBjdXJyZW50IHN5bmMgZnVuY3Rpb24gZmlyc3QgXG4gICAgICAgIGlmICghYXN5bmMpIHtcbiAgICAgICAgICBGdW5jTGlzdCA9IEZ1bmNMaXN0LmZpbHRlcih4ID0+ICF0aGlzLlN5bmNQcm9jZXNzTGlzdC5pbmNsdWRlcyh4KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlN5bmNQcm9jZXNzTGlzdCA9IFsuLi50aGlzLlN5bmNQcm9jZXNzTGlzdCwgLi4uRnVuY0xpc3RdO1xuXG4gICAgICAgIGxldCBwYXJhbGxlbFN5bmMgPSBbXTtcbiAgICAgICAgbGV0IHNlcVN5bmMgPSBbXTtcblxuICAgICAgICBGdW5jTGlzdC5mb3JFYWNoKChmdW5jdGlvbl9uYW1lKSA9PiB7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5GdW5jQVBJTWFwKS5pbmNsdWRlcyhmdW5jdGlvbl9uYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuRnVuY0FQSU1hcFtmdW5jdGlvbl9uYW1lXS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICBzZXFTeW5jID0gWy4uLnNlcVN5bmMsIC4uLnRoaXMuRnVuY0FQSU1hcFtmdW5jdGlvbl9uYW1lXV07XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHBhcmFsbGVsU3luYyA9IFsuLi5wYXJhbGxlbFN5bmMsIC4uLnRoaXMuRnVuY0FQSU1hcFtmdW5jdGlvbl9uYW1lXV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXFTeW5jIGJlZm9yZSB1bmlxOlwiLCBzZXFTeW5jKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbGxlbFN5bmMgYmVmb3JlIHVuaXE6XCIsIHBhcmFsbGVsU3luYyk7XG4gICAgICAgIHNlcVN5bmMgPSBfLnVuaXEoc2VxU3luYyk7XG4gICAgICAgIHBhcmFsbGVsU3luYyA9IF8udW5pcShwYXJhbGxlbFN5bmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcVN5bmMgYWZ0ZXIgdW5pcTpcIiwgc2VxU3luYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYWxsZWxTeW5jIGFmdGVyIHVuaXE6XCIsIHBhcmFsbGVsU3luYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3luY1Byb2Nlc3NMaXN0IGFmdGVyIHVuaXE6XCIsIHRoaXMuU3luY1Byb2Nlc3NMaXN0KTtcblxuICAgICAgICAvL0RFViBtb2RlLCBza2lwIHN5bmNcbiAgICAgICAgaWYgKHRoaXMuQVBQX0NPTkZJR1tcIkVOVlwiXSA9PSBcIkRFVlwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN5bmNQcm9taXNlQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICBpZiAoZGFvKSB7XG4gICAgICAgICAgbGV0IGRhdGFTeW5jVGltZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9EYXRhU3luY19UaW1lXCIpO1xuICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShkYXRhU3luY1RpbWVPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhU3luY1RpbWUgcmVzcDonLCByZXNwKTtcbiAgICAgICAgICBsZXQgYXBpVGltZU1hcCA9IHJlc3AuQm9keTtcblxuXG4gICAgICAgICAgcGFyYWxsZWxTeW5jLmZvckVhY2goKGFwaV9uYW1lKSA9PiB7XG4gICAgICAgICAgICBzeW5jUHJvbWlzZUFycmF5LnB1c2godGhpcy5nZXRTeW5jUHJvbWlzZU9iamVjdChhcGlfbmFtZSwgYXBpVGltZU1hcCwgZGFvKSk7XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIC8vRE8gUEFSQUxMRUwgU1lOQ1xuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHN5bmNQcm9taXNlQXJyYXkpO1xuXG4gICAgICAgICAgLy9ETyBTRVEgU1lOQ1xuICAgICAgICAgIGZvciAobGV0IGFwaV9uYW1lIG9mIHNlcVN5bmMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0U3luY1Byb21pc2VPYmplY3QoYXBpX25hbWUsIGFwaVRpbWVNYXAsIGRhbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgRmluZCBQcm9maWxlIERBTy5cIik7XG5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDExMFwiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5TeW5jUHJvY2Vzc0xpc3QgPSB0aGlzLlN5bmNQcm9jZXNzTGlzdC5maWx0ZXIoeCA9PiAhRnVuY0xpc3QuaW5jbHVkZXMoeCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBvZmZsaW5lIG5vdywgc2tpcCBzeW5jRnVuYzpcIiwgRnVuY0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc3luYyhhcGlfbmFtZTogc3RyaW5nLCBmdW5jVGltZU1hcDogQXJyYXk8YW55Pikge1xuICAgIGxldCByZXR1cm5CYWNrZW5kVGltZTogbnVtYmVyID0gZnVuY1RpbWVNYXAuZmlsdGVyKHggPT4gKHguRnVuY0lEID09IGFwaV9uYW1lKSkubWFwKHggPT4geC5CYWNrZW5kVGltZSlbMF07XG4gICAgbGV0IHJldHVybkZyb250ZW5kVGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICB0cnkge1xuICAgICAgbGV0IEFQSUluc3RhbmNlOiBJRnVuY3Rpb25TeW5jID0gdGhpcy5zeW5jQVBJTWFwW2FwaV9uYW1lXTtcbiAgICAgIGxldCB1cmxfY29uZmlnID0gdGhpcy5mdW5jX3VybFthcGlfbmFtZV07XG4gICAgICBsZXQgYmFja2VuZFRpbWUgPSBmdW5jVGltZU1hcC5maWx0ZXIoeCA9PiAoeC5GdW5jSUQgPT0gYXBpX25hbWUpKS5tYXAoeCA9PiB4LkJhY2tlbmRUaW1lKVswXTtcbiAgICAgIGxldCBmcm9udGVuZFRJbWUgPSBmdW5jVGltZU1hcC5maWx0ZXIoeCA9PiAoeC5GdW5jSUQgPT0gYXBpX25hbWUpKS5tYXAoeCA9PiB4LkZyb250ZW5kVGltZSlbMF07XG5cbiAgICAgIC8vIERlYnVnIGNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZ3JvdXAoYGxhc3Qgc3luYyAke2FwaV9uYW1lfSB0aW1lOmApO1xuICAgICAgY29uc29sZS5sb2coXCJiYWNrZW5kVGltZTpcIiwgYmFja2VuZFRpbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJmcm9udGVuZFRpbWU6XCIsIGZyb250ZW5kVEltZSk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cblxuICAgICAgLy8gRG8gc3luY1xuICAgICAgaWYgKEFQSUluc3RhbmNlLmdldFN0YXRlKCkgPT09IEZVTkNfU1RBVEUuQVZBSUxBQkxFKSB7XG4gICAgICAgIC8vIENoYW5nZSB0byBwZW5kaW5nXG4gICAgICAgIEFQSUluc3RhbmNlLnNldFN0YXRlKEZVTkNfU1RBVEUuUEVORElORyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcblxuICAgICAgICBsZXQgc2VxdWVuY2VJRE51bWJlck5lZWQgPSBhd2FpdCBBUElJbnN0YW5jZS5nZXRTZXF1ZW50aWFsSUROZWVkZWQoZnJvbnRlbmRUSW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXF1ZW5jZUlEIG5lZWQ6XCIsIHNlcXVlbmNlSUROdW1iZXJOZWVkKTtcbiAgICAgICAgaWYgKHNlcXVlbmNlSUROdW1iZXJOZWVkID4gMCkge1xuICAgICAgICAgIGxldCBzZXF1ZW5jZUlEcyA9IGF3YWl0IHRoaXMuZ2V0U2VxdWVudGlhbElEKGFwaV9uYW1lLCBzZXF1ZW5jZUlETnVtYmVyTmVlZCk7XG4gICAgICAgICAgYXdhaXQgQVBJSW5zdGFuY2Uuc2V0U2VxdWVudGlhbElEKHNlcXVlbmNlSURzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHVzaEpzb24gPSBhd2FpdCBBUElJbnN0YW5jZS5nZXRQdXNoSnNvbihmcm9udGVuZFRJbWUpO1xuICAgICAgICBjb25zb2xlLmxvZygncHVzaEpzb246JywgcHVzaEpzb24pO1xuICAgICAgICBpZiAocHVzaEpzb24ubGVuZ3RoID4gMClcbiAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hUb1NlcnZlcih7IGRhdGE6IHB1c2hKc29uLCB1cmw6IHVybF9jb25maWcucHVzaCB9KTtcblxuICAgICAgICBsZXQgcHVsbEpzb24gPSBhd2FpdCB0aGlzLnB1bGxGcm9tU2VydmVyKHsgYmFja2VuZFRpbWUsIHVybDogdXJsX2NvbmZpZy5wdWxsIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygncHVsbEpzb246JywgcHVsbEpzb24pO1xuICAgICAgICBsZXQgcHVsbFJlc3VsdCA9IGF3YWl0IHRoaXMuc3luY0FQSU1hcFthcGlfbmFtZV0ucHVsbERhdGEocHVsbEpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZygncHVsbCByZXN1bHQ6JywgcHVsbFJlc3VsdCk7XG4gICAgICAgIGlmIChwdWxsUmVzdWx0LkhlYWRlci5zdGF0dXMpIHtcbiAgICAgICAgICByZXR1cm5CYWNrZW5kVGltZSA9IHBhcnNlSVNPKHB1bGxKc29uWydsYXN0VXBkYXRlVGltZSddKS5nZXRUaW1lKCk7XG4gICAgICAgICAgcmV0dXJuRnJvbnRlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHVsbFJlc3VsdC5IZWFkZXIubXNnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMud2FpdFVudGlsU3luY0ZpbmlzaChhcGlfbmFtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybkZyb250ZW5kVGltZSA9IGZ1bmNUaW1lTWFwLmZpbHRlcih4ID0+ICh4LkZ1bmNJRCA9PSBhcGlfbmFtZSkpLm1hcCh4ID0+IHguRnJvbnRlbmRUaW1lKVswXTtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDExM1wiLCBgJHthcGlfbmFtZX0gc3luYyBmYWlsZWQsYCArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICB0aGlzLnN5bmNBUElNYXBbYXBpX25hbWVdLnNldFN0YXRlKEZVTkNfU1RBVEUuQVZBSUxBQkxFKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBiYWNrZW5kVGltZTogcmV0dXJuQmFja2VuZFRpbWUsIGZyb250ZW5kVGltZTogcmV0dXJuRnJvbnRlbmRUaW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHVzaFRvU2VydmVyKHsgZGF0YSwgdXJsIH0pIHtcbiAgICBsZXQgcHVzaEFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJTeW5jUHVzaFwiKTtcbiAgICAoPFN5bmNQdXNoQVBJPnB1c2hBUEkpLnVybCA9IHVybDtcbiAgICAoPFN5bmNQdXNoQVBJPnB1c2hBUEkpLmJvZHkgPSBkYXRhO1xuICAgIGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdXNoQVBJKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHVsbEZyb21TZXJ2ZXIoeyBiYWNrZW5kVGltZSwgdXJsIH0pIHtcbiAgICBsZXQgcHVsbEFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJTeW5jUHVsbFwiKTtcbiAgICAoPFN5bmNQdWxsQVBJPnB1bGxBUEkpLmxhc3RVcGRhdGVUaW1lID0gbmV3IERhdGUoYmFja2VuZFRpbWUpLnRvSVNPU3RyaW5nKCk7XG4gICAgKDxTeW5jUHVsbEFQST5wdWxsQVBJKS51cmwgPSB1cmw7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdWxsQVBJKS50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gc2VydmVyOicsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXF1ZW50aWFsSUQoY2F0ZWdvcnk6IHN0cmluZywgbnVtOiBudW1iZXIpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcbiAgICBsZXQgZ2V0U3luY1NlcXVlbmNlSURBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0U3luY1NlcXVlbmNlSURcIik7XG4gICAgaWYgKGdldFN5bmNTZXF1ZW5jZUlEQVBJKSB7XG4gICAgICAoPHN5bmNTZXF1ZW5jZUlEQVBJPmdldFN5bmNTZXF1ZW5jZUlEQVBJKS50eXBlID0gY2F0ZWdvcnk7XG4gICAgICAoPHN5bmNTZXF1ZW5jZUlEQVBJPmdldFN5bmNTZXF1ZW5jZUlEQVBJKS5udW0gPSBudW07XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldFN5bmNTZXF1ZW5jZUlEQVBJKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHN5bmMgc2VxdWVuY2UgSUQgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgIHJldHVybiByZXNwWydpZHMnXTtcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRTeW5jU3RhdGUoKSB7XG5cbiAgICBsZXQgc3RhdGUgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN5bmNBUElNYXApLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgc3RhdGVbdmFsXSA9IHRoaXMuc3luY0FQSU1hcFt2YWxdLmdldFN0YXRlKCk7XG4gICAgfSlcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXRlKCkge1xuICAgIHRoaXMuc3luY1N0YXRlU3ViamVjdC5uZXh0KHRoaXMuZ2V0Q3VycmVudFN5bmNTdGF0ZSgpKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhc3luYyB3YWl0VW50aWxTeW5jRmluaXNoKGZ1bmM6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldFN5bmNTdGF0ZSgpLnBpcGUoXG4gICAgICBmaXJzdCh4ID0+IE9iamVjdC5lbnRyaWVzKHgpLmZpbHRlcih5ID0+IHlbMF0gPT09IGZ1bmMgJiYgeVsxXSA9PT0gRlVOQ19TVEFURS5BVkFJTEFCTEUpLmxlbmd0aCA+IDApXG4gICAgKS50b1Byb21pc2UoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRTeW5jUHJvbWlzZU9iamVjdChhcGlfbmFtZTogc3RyaW5nLCBBcGlUaW1lTWFwOiBhbnksIGRhbzogSURhbykge1xuICAgIGxldCB7IGJhY2tlbmRUaW1lLCBmcm9udGVuZFRpbWUgfSA9IGF3YWl0IHRoaXMuc3luYyhhcGlfbmFtZSwgQXBpVGltZU1hcCk7XG4gICAgbGV0IGRhdGFTeW5jVGltZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9EYXRhU3luY19UaW1lXCIpO1xuICAgIGRhdGFTeW5jVGltZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignRnVuY0lEJywgW2FwaV9uYW1lXSkpO1xuICAgIGRhdGFTeW5jVGltZU9iai5zZXRWYWx1ZSgnQmFja2VuZFRpbWUnLCBiYWNrZW5kVGltZSk7XG4gICAgZGF0YVN5bmNUaW1lT2JqLnNldFZhbHVlKCdGcm9udGVuZFRpbWUnLCBmcm9udGVuZFRpbWUpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShkYXRhU3luY1RpbWVPYmopLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKGBGaW5pc2ggc3luYyBmdW5jdGlvbiAke2FwaV9uYW1lfSA6YCwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxufVxuIl19