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
export class DataSyncService {
    /**
     * @param {?} APP_CONFIG
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} errorHandler
     * @param {?} DaoFactory
     * @param {?} devcieService
     * @param {?} registerDataSyncFunc
     */
    constructor(APP_CONFIG, APIFactory, dispatcher, errorHandler, DaoFactory, devcieService, registerDataSyncFunc) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                    seqSync = _.uniq(seqSync);
                    parallelSync = _.uniq(parallelSync);
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DataSyncService.ngInjectableDef = i0.defineInjectable({ factory: function DataSyncService_Factory() { return new DataSyncService(i0.inject(i1.ConfigToken), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.ErrorHandler), i0.inject(i4.DaoFactory), i0.inject(i5.DeviceService), i0.inject(i1.registerDataSyncFuncToken)); }, token: DataSyncService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zeW5jLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2RhdGEtc3luYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU16RCxNQUFNOzs7Ozs7Ozs7O0lBT0osWUFDK0IsVUFBZSxFQUNwQyxVQUFzQixFQUN0QixVQUF1QixFQUN2QixZQUEwQixFQUMxQixVQUFzQixFQUN0QixhQUE0QixFQUNPLG9CQUEyQztRQU56RCxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ08seUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQVpoRixlQUFVLEdBQVcsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUN0QyxlQUFVLEdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztRQUNwQyxvQkFBZSxHQUFrQixFQUFFLENBQUMsQ0FBQyxjQUFjO1FBQ25ELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBVTlFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxJQUFtQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVLLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSzs7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7Ozs7OztJQUVLLFFBQVEsQ0FBQyxRQUF1QixFQUFFLEtBQUssR0FBRyxLQUFLOztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVwQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBRXhDLElBQUk7b0JBQ0YscURBQXFEO29CQUNyRCxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNWLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTTs7Ozt3QkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztxQkFDcEU7b0JBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDOzt3QkFFMUQsWUFBWSxHQUFHLEVBQUU7O3dCQUNqQixPQUFPLEdBQUcsRUFBRTtvQkFFaEIsUUFBUSxDQUFDLE9BQU87Ozs7b0JBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTt3QkFFakMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7NEJBQ3hELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQ0FDM0MsT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7O2dDQUUxRCxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt5QkFDdkU7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDdkQsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFCLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFakUscUJBQXFCO29CQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFO3dCQUNuQyxPQUFPO3FCQUNSOzt3QkFFRyxnQkFBZ0IsR0FBRyxFQUFFOzt3QkFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDM0MsSUFBSSxHQUFHLEVBQUU7OzRCQUNILGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUM7OzRCQUMvRSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRTt3QkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQzs7NEJBQ3BDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSTt3QkFHMUIsWUFBWSxDQUFDLE9BQU87Ozs7d0JBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDaEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzlFLENBQUMsRUFBQyxDQUFDO3dCQUdILGtCQUFrQjt3QkFDbEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRXBDLGFBQWE7d0JBQ2IsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7NEJBQzVCLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7eUJBQzVEO3FCQUNGOzt3QkFFQyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBRS9DO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDdEU7d0JBQ087b0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztpQkFDaEY7YUFDRjtpQkFDSTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNEO1FBQ0gsQ0FBQztLQUFBOzs7Ozs7O0lBRWEsSUFBSSxDQUFDLFFBQWdCLEVBQUUsV0FBdUI7OztnQkFDdEQsaUJBQWlCLEdBQVcsV0FBVyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsRUFBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUN0RyxrQkFBa0IsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUk7O29CQUNFLFdBQVcsR0FBa0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7O29CQUN0RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7O29CQUNwQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEVBQUMsQ0FBQyxHQUFHOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3hGLFlBQVksR0FBRyxXQUFXLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsRUFBQyxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5RixnQkFBZ0I7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxRQUFRLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFHbkIsVUFBVTtnQkFDVixJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsU0FBUyxFQUFFO29CQUNuRCxvQkFBb0I7b0JBQ3BCLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O3dCQUVmLG9CQUFvQixHQUFHLE1BQU0sV0FBVyxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQztvQkFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLG9CQUFvQixHQUFHLENBQUMsRUFBRTs7NEJBQ3hCLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDO3dCQUM1RSxNQUFNLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2hEOzt3QkFDRyxRQUFRLEdBQUcsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztvQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ25DLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUNyQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7d0JBRWhFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7O3dCQUMvQixVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO3dCQUM1QixpQkFBaUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbkUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNqQzt5QkFDSTt3QkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO2lCQUNGO3FCQUNJO29CQUNILE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2Qsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEVBQUMsQ0FBQyxHQUFHOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuRztvQkFDTztnQkFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7YUFDOUY7UUFDSCxDQUFDO0tBQUE7Ozs7OztJQUVhLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7OztnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNoRCxDQUFDLG1CQUFhLE9BQU8sRUFBQSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxDQUFDLG1CQUFhLE9BQU8sRUFBQSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTs7Ozs7O0lBRWEsY0FBYyxDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRTs7O2dCQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2hELENBQUMsbUJBQWEsT0FBTyxFQUFBLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUUsQ0FBQyxtQkFBYSxPQUFPLEVBQUEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRTtpQkFDdkQsSUFBSTs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Ozs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBZ0IsRUFBRSxHQUFXOztZQUMvQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RSxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLENBQUMsbUJBQW1CLG9CQUFvQixFQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQzFELENBQUMsbUJBQW1CLG9CQUFvQixFQUFBLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUVILENBQUM7Ozs7O0lBRU8sbUJBQW1COztZQUVyQixLQUFLLEdBQUcsRUFBRTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUdhLG1CQUFtQixDQUFDLElBQVk7O1lBQzVDLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0IsS0FBSzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUMsU0FBUyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQyxDQUNyRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2YsQ0FBQztLQUFBOzs7Ozs7OztJQUVhLG9CQUFvQixDQUFDLFFBQWdCLEVBQUUsVUFBZSxFQUFFLEdBQVM7O2dCQUN6RSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQzs7Z0JBQ3JFLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUM7WUFDbkYsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRSxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyRCxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Z0JBQ25ELE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTs7O1lBOU9GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQVNJLE1BQU0sU0FBQyxXQUFXO1lBekJkLFVBQVU7WUFDVixXQUFXO1lBUG1CLFlBQVk7WUFFMUMsVUFBVTtZQWVWLGFBQWE7NENBb0JqQixNQUFNLFNBQUMseUJBQXlCOzs7Ozs7OztJQVpuQyxxQ0FBZ0M7Ozs7O0lBQ2hDLHFDQUFnQzs7Ozs7SUFDaEMsMENBQTRDOzs7OztJQUM1QyxtQ0FBc0I7Ozs7O0lBQ3RCLDJDQUFnRjs7Ozs7SUFFOUUscUNBQTRDOzs7OztJQUM1QyxxQ0FBOEI7Ozs7O0lBQzlCLHFDQUErQjs7Ozs7SUFDL0IsdUNBQWtDOzs7OztJQUNsQyxxQ0FBOEI7Ozs7O0lBQzlCLHdDQUFvQzs7Ozs7SUFDcEMsK0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSAnLi9mdW5jdGlvbi9JRnVuY3Rpb25TeW5jJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnknO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4sIHJlZ2lzdGVyRGF0YVN5bmNGdW5jVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSAnLi4vYXBpL0FQSUZhY3RvcnknO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICcuLi9hcGkvQVBJRGlzcGF0Y2gnO1xuaW1wb3J0IHsgU3luY1B1c2hBUEkgfSBmcm9tICcuLi9hcGkvcmVnaXN0ZXIvU3luY1B1c2hBUEknO1xuaW1wb3J0IHsgU3luY1B1bGxBUEkgfSBmcm9tICcuLi9hcGkvcmVnaXN0ZXIvU3luY1B1bGxBUEknO1xuaW1wb3J0IHsgc3luY1NlcXVlbmNlSURBUEkgfSBmcm9tICcuLi9hcGkvcmVnaXN0ZXIvc3luY1NlcXVlbmNlSURBUEknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElyZWdpc3RlckRhdGFTeW5jRnVuYyB9IGZyb20gJy4uL2luaXRUYXNrL2ludGVyZmFjZS9yZWdpc3RlckRhdGFTeW5jRnVuYy5pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tICcuLi9lcnJvckhhbmRsZXIvQVBQRXJyb3InO1xuaW1wb3J0IHsgSURhbyB9IGZyb20gJy4uL2RldmljZS9zcWxpdGUvRGFvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU3luY1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3luY0FQSU1hcDogT2JqZWN0ID0ge307IC8vIEFQSeWQjeeoseWwjeaHieWIsOWvpuS+i1xuICBwcml2YXRlIEZ1bmNBUElNYXA6IE9iamVjdCA9IHt9OyAvLyDlip/og73lsI3mh4nliLBBUElcbiAgcHJpdmF0ZSBTeW5jUHJvY2Vzc0xpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTsgLy8g55W25YmN5q2j5Zyoc3luY+eahOWKn+iDvVxuICBwcml2YXRlIGZ1bmNfdXJsID0ge307XG4gIHByaXZhdGUgc3luY1N0YXRlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih0aGlzLmdldEN1cnJlbnRTeW5jU3RhdGUoKSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgcHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LFxuICAgIHByaXZhdGUgZGV2Y2llU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBASW5qZWN0KHJlZ2lzdGVyRGF0YVN5bmNGdW5jVG9rZW4pIHByaXZhdGUgcmVnaXN0ZXJEYXRhU3luY0Z1bmM6IElyZWdpc3RlckRhdGFTeW5jRnVuY1xuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmZ1bmNfdXJsID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLlNZTkNfVVJMO1xuICAgIHRoaXMuRnVuY0FQSU1hcCA9IHRoaXMucmVnaXN0ZXJEYXRhU3luY0Z1bmMuZ2V0RnVuY01hcCgpO1xuICAgIHRoaXMucmVnaXN0ZXJEYXRhU3luY0Z1bmMuZ2V0U3luY0luc3RhbmNlKCkuZm9yRWFjaCh4ID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJBUEkoeCk7XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRTeW5jU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zeW5jU3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyQVBJKGZ1bmM6IElGdW5jdGlvblN5bmMpIHtcbiAgICB0aGlzLnN5bmNBUElNYXBbZnVuYy5nZXROYW1lKCldID0gZnVuYztcbiAgfVxuXG4gIGFzeW5jIHN5bmNBbGxGdW5jKGFzeW5jID0gZmFsc2UpIHtcbiAgICBjb25zb2xlLmxvZyhcInN5bmNBbGxGdW5jOlwiLCB0aGlzLkZ1bmNBUElNYXAsIE9iamVjdC5rZXlzKHRoaXMuRnVuY0FQSU1hcCkpO1xuICAgIHJldHVybiB0aGlzLnN5bmNGdW5jKE9iamVjdC5rZXlzKHRoaXMuRnVuY0FQSU1hcCksIGFzeW5jKTtcbiAgfVxuXG4gIGFzeW5jIHN5bmNGdW5jKEZ1bmNMaXN0OiBBcnJheTxzdHJpbmc+LCBhc3luYyA9IGZhbHNlKSB7XG4gICAgY29uc29sZS5sb2coXCJTeW5jUHJvY2Vzc0xpc3Q6XCIsIHRoaXMuU3luY1Byb2Nlc3NMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhcIlN5bmMgRnVuYzpcIiwgRnVuY0xpc3QpO1xuXG4gICAgaWYgKHRoaXMuZGV2Y2llU2VydmljZS5nZXROZXR3b3JrU3RhdGUoKSkge1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBJZiBub3QgYXN5bmMgLCBmaWx0ZXIgY3VycmVudCBzeW5jIGZ1bmN0aW9uIGZpcnN0IFxuICAgICAgICBpZiAoIWFzeW5jKSB7XG4gICAgICAgICAgRnVuY0xpc3QgPSBGdW5jTGlzdC5maWx0ZXIoeCA9PiAhdGhpcy5TeW5jUHJvY2Vzc0xpc3QuaW5jbHVkZXMoeCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5TeW5jUHJvY2Vzc0xpc3QgPSBbLi4udGhpcy5TeW5jUHJvY2Vzc0xpc3QsIC4uLkZ1bmNMaXN0XTtcblxuICAgICAgICBsZXQgcGFyYWxsZWxTeW5jID0gW107XG4gICAgICAgIGxldCBzZXFTeW5jID0gW107XG5cbiAgICAgICAgRnVuY0xpc3QuZm9yRWFjaCgoZnVuY3Rpb25fbmFtZSkgPT4ge1xuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuRnVuY0FQSU1hcCkuaW5jbHVkZXMoZnVuY3Rpb25fbmFtZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkZ1bmNBUElNYXBbZnVuY3Rpb25fbmFtZV0ubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgc2VxU3luYyA9IFsuLi5zZXFTeW5jLCAuLi50aGlzLkZ1bmNBUElNYXBbZnVuY3Rpb25fbmFtZV1dO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBwYXJhbGxlbFN5bmMgPSBbLi4ucGFyYWxsZWxTeW5jLCAuLi50aGlzLkZ1bmNBUElNYXBbZnVuY3Rpb25fbmFtZV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VxU3luYyBiZWZvcmUgdW5pcTpcIiwgc2VxU3luYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYWxsZWxTeW5jIGJlZm9yZSB1bmlxOlwiLCBwYXJhbGxlbFN5bmMpO1xuICAgICAgICBzZXFTeW5jID0gXy51bmlxKHNlcVN5bmMpO1xuICAgICAgICBwYXJhbGxlbFN5bmMgPSBfLnVuaXEocGFyYWxsZWxTeW5jKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXFTeW5jIGFmdGVyIHVuaXE6XCIsIHNlcVN5bmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFsbGVsU3luYyBhZnRlciB1bmlxOlwiLCBwYXJhbGxlbFN5bmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN5bmNQcm9jZXNzTGlzdCBhZnRlciB1bmlxOlwiLCB0aGlzLlN5bmNQcm9jZXNzTGlzdCk7XG5cbiAgICAgICAgLy9ERVYgbW9kZSwgc2tpcCBzeW5jXG4gICAgICAgIGlmICh0aGlzLkFQUF9DT05GSUdbXCJFTlZcIl0gPT0gXCJERVZcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzeW5jUHJvbWlzZUFycmF5ID0gW107XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICAgICAgaWYgKGRhbykge1xuICAgICAgICAgIGxldCBkYXRhU3luY1RpbWVPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRGF0YVN5bmNfVGltZVwiKTtcbiAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoZGF0YVN5bmNUaW1lT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YVN5bmNUaW1lIHJlc3A6JywgcmVzcCk7XG4gICAgICAgICAgbGV0IGFwaVRpbWVNYXAgPSByZXNwLkJvZHk7XG5cblxuICAgICAgICAgIHBhcmFsbGVsU3luYy5mb3JFYWNoKChhcGlfbmFtZSkgPT4ge1xuICAgICAgICAgICAgc3luY1Byb21pc2VBcnJheS5wdXNoKHRoaXMuZ2V0U3luY1Byb21pc2VPYmplY3QoYXBpX25hbWUsIGFwaVRpbWVNYXAsIGRhbykpO1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAvL0RPIFBBUkFMTEVMIFNZTkNcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChzeW5jUHJvbWlzZUFycmF5KTtcblxuICAgICAgICAgIC8vRE8gU0VRIFNZTkNcbiAgICAgICAgICBmb3IgKGxldCBhcGlfbmFtZSBvZiBzZXFTeW5jKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFN5bmNQcm9taXNlT2JqZWN0KGFwaV9uYW1lLCBhcGlUaW1lTWFwLCBkYW8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IEZpbmQgUHJvZmlsZSBEQU8uXCIpO1xuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAxMTBcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7XG4gICAgICAgIHRoaXMuU3luY1Byb2Nlc3NMaXN0ID0gdGhpcy5TeW5jUHJvY2Vzc0xpc3QuZmlsdGVyKHggPT4gIUZ1bmNMaXN0LmluY2x1ZGVzKHgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0J3Mgb2ZmbGluZSBub3csIHNraXAgc3luY0Z1bmM6XCIsIEZ1bmNMaXN0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHN5bmMoYXBpX25hbWU6IHN0cmluZywgZnVuY1RpbWVNYXA6IEFycmF5PGFueT4pIHtcbiAgICBsZXQgcmV0dXJuQmFja2VuZFRpbWU6IG51bWJlciA9IGZ1bmNUaW1lTWFwLmZpbHRlcih4ID0+ICh4LkZ1bmNJRCA9PSBhcGlfbmFtZSkpLm1hcCh4ID0+IHguQmFja2VuZFRpbWUpWzBdO1xuICAgIGxldCByZXR1cm5Gcm9udGVuZFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBBUElJbnN0YW5jZTogSUZ1bmN0aW9uU3luYyA9IHRoaXMuc3luY0FQSU1hcFthcGlfbmFtZV07XG4gICAgICBsZXQgdXJsX2NvbmZpZyA9IHRoaXMuZnVuY191cmxbYXBpX25hbWVdO1xuICAgICAgbGV0IGJhY2tlbmRUaW1lID0gZnVuY1RpbWVNYXAuZmlsdGVyKHggPT4gKHguRnVuY0lEID09IGFwaV9uYW1lKSkubWFwKHggPT4geC5CYWNrZW5kVGltZSlbMF07XG4gICAgICBsZXQgZnJvbnRlbmRUSW1lID0gZnVuY1RpbWVNYXAuZmlsdGVyKHggPT4gKHguRnVuY0lEID09IGFwaV9uYW1lKSkubWFwKHggPT4geC5Gcm9udGVuZFRpbWUpWzBdO1xuXG4gICAgICAvLyBEZWJ1ZyBjb25zb2xlXG4gICAgICBjb25zb2xlLmdyb3VwKGBsYXN0IHN5bmMgJHthcGlfbmFtZX0gdGltZTpgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFja2VuZFRpbWU6XCIsIGJhY2tlbmRUaW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZnJvbnRlbmRUaW1lOlwiLCBmcm9udGVuZFRJbWUpO1xuICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG5cbiAgICAgIC8vIERvIHN5bmNcbiAgICAgIGlmIChBUElJbnN0YW5jZS5nZXRTdGF0ZSgpID09PSBGVU5DX1NUQVRFLkFWQUlMQUJMRSkge1xuICAgICAgICAvLyBDaGFuZ2UgdG8gcGVuZGluZ1xuICAgICAgICBBUElJbnN0YW5jZS5zZXRTdGF0ZShGVU5DX1NUQVRFLlBFTkRJTkcpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG5cbiAgICAgICAgbGV0IHNlcXVlbmNlSUROdW1iZXJOZWVkID0gYXdhaXQgQVBJSW5zdGFuY2UuZ2V0U2VxdWVudGlhbElETmVlZGVkKGZyb250ZW5kVEltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VxdWVuY2VJRCBuZWVkOlwiLCBzZXF1ZW5jZUlETnVtYmVyTmVlZCk7XG4gICAgICAgIGlmIChzZXF1ZW5jZUlETnVtYmVyTmVlZCA+IDApIHtcbiAgICAgICAgICBsZXQgc2VxdWVuY2VJRHMgPSBhd2FpdCB0aGlzLmdldFNlcXVlbnRpYWxJRChhcGlfbmFtZSwgc2VxdWVuY2VJRE51bWJlck5lZWQpO1xuICAgICAgICAgIGF3YWl0IEFQSUluc3RhbmNlLnNldFNlcXVlbnRpYWxJRChzZXF1ZW5jZUlEcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHB1c2hKc29uID0gYXdhaXQgQVBJSW5zdGFuY2UuZ2V0UHVzaEpzb24oZnJvbnRlbmRUSW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3B1c2hKc29uOicsIHB1c2hKc29uKTtcbiAgICAgICAgaWYgKHB1c2hKc29uLmxlbmd0aCA+IDApXG4gICAgICAgICAgYXdhaXQgdGhpcy5wdXNoVG9TZXJ2ZXIoeyBkYXRhOiBwdXNoSnNvbiwgdXJsOiB1cmxfY29uZmlnLnB1c2ggfSk7XG5cbiAgICAgICAgbGV0IHB1bGxKc29uID0gYXdhaXQgdGhpcy5wdWxsRnJvbVNlcnZlcih7IGJhY2tlbmRUaW1lLCB1cmw6IHVybF9jb25maWcucHVsbCB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3B1bGxKc29uOicsIHB1bGxKc29uKTtcbiAgICAgICAgbGV0IHB1bGxSZXN1bHQgPSBhd2FpdCB0aGlzLnN5bmNBUElNYXBbYXBpX25hbWVdLnB1bGxEYXRhKHB1bGxKc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3B1bGwgcmVzdWx0OicsIHB1bGxSZXN1bHQpO1xuICAgICAgICBpZiAocHVsbFJlc3VsdC5IZWFkZXIuc3RhdHVzKSB7XG4gICAgICAgICAgcmV0dXJuQmFja2VuZFRpbWUgPSBwYXJzZUlTTyhwdWxsSnNvblsnbGFzdFVwZGF0ZVRpbWUnXSkuZ2V0VGltZSgpO1xuICAgICAgICAgIHJldHVybkZyb250ZW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHB1bGxSZXN1bHQuSGVhZGVyLm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLndhaXRVbnRpbFN5bmNGaW5pc2goYXBpX25hbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm5Gcm9udGVuZFRpbWUgPSBmdW5jVGltZU1hcC5maWx0ZXIoeCA9PiAoeC5GdW5jSUQgPT0gYXBpX25hbWUpKS5tYXAoeCA9PiB4LkZyb250ZW5kVGltZSlbMF07XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAxMTNcIiwgYCR7YXBpX25hbWV9IHN5bmMgZmFpbGVkLGAgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgdGhpcy5zeW5jQVBJTWFwW2FwaV9uYW1lXS5zZXRTdGF0ZShGVU5DX1NUQVRFLkFWQUlMQUJMRSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgYmFja2VuZFRpbWU6IHJldHVybkJhY2tlbmRUaW1lLCBmcm9udGVuZFRpbWU6IHJldHVybkZyb250ZW5kVGltZSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHB1c2hUb1NlcnZlcih7IGRhdGEsIHVybCB9KSB7XG4gICAgbGV0IHB1c2hBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiU3luY1B1c2hcIik7XG4gICAgKDxTeW5jUHVzaEFQST5wdXNoQVBJKS51cmwgPSB1cmw7XG4gICAgKDxTeW5jUHVzaEFQST5wdXNoQVBJKS5ib2R5ID0gZGF0YTtcbiAgICBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gocHVzaEFQSSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHB1bGxGcm9tU2VydmVyKHsgYmFja2VuZFRpbWUsIHVybCB9KSB7XG4gICAgbGV0IHB1bGxBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiU3luY1B1bGxcIik7XG4gICAgKDxTeW5jUHVsbEFQST5wdWxsQVBJKS5sYXN0VXBkYXRlVGltZSA9IG5ldyBEYXRlKGJhY2tlbmRUaW1lKS50b0lTT1N0cmluZygpO1xuICAgICg8U3luY1B1bGxBUEk+cHVsbEFQSSkudXJsID0gdXJsO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gocHVsbEFQSSkudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBmcm9tIHNlcnZlcjonLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VxdWVudGlhbElEKGNhdGVnb3J5OiBzdHJpbmcsIG51bTogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgbGV0IGdldFN5bmNTZXF1ZW5jZUlEQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldFN5bmNTZXF1ZW5jZUlEXCIpO1xuICAgIGlmIChnZXRTeW5jU2VxdWVuY2VJREFQSSkge1xuICAgICAgKDxzeW5jU2VxdWVuY2VJREFQST5nZXRTeW5jU2VxdWVuY2VJREFQSSkudHlwZSA9IGNhdGVnb3J5O1xuICAgICAgKDxzeW5jU2VxdWVuY2VJREFQST5nZXRTeW5jU2VxdWVuY2VJREFQSSkubnVtID0gbnVtO1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRTeW5jU2VxdWVuY2VJREFQSSkudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBzeW5jIHNlcXVlbmNlIElEIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgICByZXR1cm4gcmVzcFsnaWRzJ107XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50U3luY1N0YXRlKCkge1xuXG4gICAgbGV0IHN0YXRlID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5zeW5jQVBJTWFwKS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIHN0YXRlW3ZhbF0gPSB0aGlzLnN5bmNBUElNYXBbdmFsXS5nZXRTdGF0ZSgpO1xuICAgIH0pXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0ZSgpIHtcbiAgICB0aGlzLnN5bmNTdGF0ZVN1YmplY3QubmV4dCh0aGlzLmdldEN1cnJlbnRTeW5jU3RhdGUoKSk7XG4gIH1cblxuXG4gIHByaXZhdGUgYXN5bmMgd2FpdFVudGlsU3luY0ZpbmlzaChmdW5jOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTeW5jU3RhdGUoKS5waXBlKFxuICAgICAgZmlyc3QoeCA9PiBPYmplY3QuZW50cmllcyh4KS5maWx0ZXIoeSA9PiB5WzBdID09PSBmdW5jICYmIHlbMV0gPT09IEZVTkNfU1RBVEUuQVZBSUxBQkxFKS5sZW5ndGggPiAwKVxuICAgICkudG9Qcm9taXNlKClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0U3luY1Byb21pc2VPYmplY3QoYXBpX25hbWU6IHN0cmluZywgQXBpVGltZU1hcDogYW55LCBkYW86IElEYW8pIHtcbiAgICBsZXQgeyBiYWNrZW5kVGltZSwgZnJvbnRlbmRUaW1lIH0gPSBhd2FpdCB0aGlzLnN5bmMoYXBpX25hbWUsIEFwaVRpbWVNYXApO1xuICAgIGxldCBkYXRhU3luY1RpbWVPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRGF0YVN5bmNfVGltZVwiKTtcbiAgICBkYXRhU3luY1RpbWVPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0Z1bmNJRCcsIFthcGlfbmFtZV0pKTtcbiAgICBkYXRhU3luY1RpbWVPYmouc2V0VmFsdWUoJ0JhY2tlbmRUaW1lJywgYmFja2VuZFRpbWUpO1xuICAgIGRhdGFTeW5jVGltZU9iai5zZXRWYWx1ZSgnRnJvbnRlbmRUaW1lJywgZnJvbnRlbmRUaW1lKTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZGFvLnVwZGF0ZUJ5VGFibGUoZGF0YVN5bmNUaW1lT2JqKS50b1Byb21pc2UoKTtcbiAgICBjb25zb2xlLmxvZyhgRmluaXNoIHN5bmMgZnVuY3Rpb24gJHthcGlfbmFtZX0gOmAsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbn1cbiJdfQ==