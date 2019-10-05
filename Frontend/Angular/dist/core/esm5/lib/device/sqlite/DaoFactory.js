/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SQLiteDatabase } from "./SQLiteDatabase";
import { SQLiteDao } from "./SQLiteDao";
import { Optional, Inject, Injectable, ErrorHandler } from "@angular/core";
import { ConfigToken } from "../../injectionToken/injection-token";
import { DeviceService } from '../device.service';
import { v4 as uuid } from 'uuid';
import { APPError } from "../../errorHandler/APPError";
import { WebSQLDao } from "./WebSQLDao";
import * as i0 from "@angular/core";
import * as i1 from "../device.service";
import * as i2 from "../../injectionToken/injection-token";
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.APP_CONFIG.ENV == 'DEV')) return [3 /*break*/, 1];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, db_config, db_names, db_names_1, db_names_1_1, name, e_1_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                        db_names = Object.keys(db_config);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        db_names_1 = tslib_1.__values(db_names), db_names_1_1 = db_names_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!db_names_1_1.done) return [3 /*break*/, 5];
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
                            if (db_names_1_1 && !db_names_1_1.done && (_a = db_names_1.return)) _a.call(db_names_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_2, _a, db_config, db_names, db_names_2, db_names_2_1, name, e_2_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                        db_names = Object.keys(db_config);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        db_names_2 = tslib_1.__values(db_names), db_names_2_1 = db_names_2.next();
                        _b.label = 2;
                    case 2:
                        if (!!db_names_2_1.done) return [3 /*break*/, 5];
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
                            if (db_names_2_1 && !db_names_2_1.done && (_a = db_names_2.return)) _a.call(db_names_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var key, error_1, err;
            return tslib_1.__generator(this, function (_a) {
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
                        ;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, setKeyResp, key, error_2, key;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.deviceService.getSecureStorage(config[dbname].name).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("getDatabaseKey resp:", resp);
                        if (!resp.includes("Device is not secure")) return [3 /*break*/, 2];
                        throw new Error(resp);
                    case 2:
                        if (!resp) return [3 /*break*/, 3];
                        return [2 /*return*/, resp];
                    case 3: return [4 /*yield*/, this.deviceService.setSecureStorage(config[dbname].name, uuid()).toPromise()];
                    case 4:
                        setKeyResp = _a.sent();
                        if (!setKeyResp) return [3 /*break*/, 6];
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
                            key = uuid();
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var db_config, dao, error_3;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tableMap;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao_1, tableMap, resp, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        dao_1 = this.dbMapping.get(dbname);
                        if (!dao_1) return [3 /*break*/, 2];
                        tableMap = this.tableMapping.get(dbname);
                        tableMap.forEach((/**
                         * @param {?} table
                         * @param {?} table_name
                         * @return {?}
                         */
                        function (table, table_name) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DaoFactory.ctorParameters = function () { return [
        { type: DeviceService },
        { type: ErrorHandler },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ DaoFactory.ngInjectableDef = i0.defineInjectable({ factory: function DaoFactory_Factory() { return new DaoFactory(i0.inject(i1.DeviceService), i0.inject(i0.ErrorHandler), i0.inject(i2.ConfigToken, 8)); }, token: DaoFactory, providedIn: "root" });
    return DaoFactory;
}());
export { DaoFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaoFactory.prototype.tableMapping;
    /**
     * @type {?}
     * @private
     */
    DaoFactory.prototype.dbMapping;
    /**
     * @type {?}
     * @private
     */
    DaoFactory.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    DaoFactory.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DaoFactory.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFvRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXhDO0lBTUUsb0JBQ1UsYUFBNEIsRUFDNUIsWUFBMEIsRUFDTyxVQUFVO1FBRjNDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ08sZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVNLDZCQUFROzs7OztJQUFmLFVBQWdCLE1BQU0sRUFBRSxTQUFTO1FBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFN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QUssQ0FBQyxPQUFTLENBQUMsQ0FBQzs7Ozs7S0FFMUU7O2dCQW5MRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBUFEsYUFBYTtnQkFGaUIsWUFBWTtnREFnQjlDLFFBQVEsWUFBSSxNQUFNLFNBQUMsV0FBVzs7O3FCQXBCbkM7Q0ErTEMsQUFwTEQsSUFvTEM7U0FqTFksVUFBVTs7Ozs7O0lBQ3JCLGtDQUE0RDs7Ozs7SUFDNUQsK0JBQXFDOzs7OztJQUVuQyxtQ0FBb0M7Ozs7O0lBQ3BDLGtDQUFrQzs7Ozs7SUFDbEMsZ0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tIFwiLi9TUUxpdGVUYWJsZVwiO1xuaW1wb3J0IHsgU1FMaXRlRGF0YWJhc2UgfSBmcm9tIFwiLi9TUUxpdGVEYXRhYmFzZVwiO1xuaW1wb3J0IHsgSURhbyB9IGZyb20gXCIuL0Rhby5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZURhbyB9IGZyb20gXCIuL1NRTGl0ZURhb1wiO1xuaW1wb3J0IHsgT3B0aW9uYWwsIEluamVjdCwgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbmZpZ1Rva2VuIH0gZnJvbSBcIi4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlblwiO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvclwiO1xuaW1wb3J0IHsgV2ViU1FMRGFvIH0gZnJvbSBcIi4vV2ViU1FMRGFvXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhb0ZhY3Rvcnkge1xuICBwcml2YXRlIHRhYmxlTWFwcGluZzogTWFwPHN0cmluZywgTWFwPHN0cmluZywgU1FMaXRlVGFibGU+PjtcbiAgcHJpdmF0ZSBkYk1hcHBpbmc6IE1hcDxzdHJpbmcsIElEYW8+O1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRykge1xuICAgIHRoaXMudGFibGVNYXBwaW5nID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGJNYXBwaW5nID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgcHVibGljIGdldFRhYmxlKGRiTmFtZSwgdGFibGVOYW1lKTogU1FMaXRlVGFibGUge1xuICAgIGlmICh0aGlzLnRhYmxlTWFwcGluZy5oYXMoZGJOYW1lKSkge1xuICAgICAgaWYgKHRoaXMudGFibGVNYXBwaW5nLmdldChkYk5hbWUpLmhhcyh0YWJsZU5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlTWFwcGluZy5nZXQoZGJOYW1lKS5nZXQodGFibGVOYW1lKS5jbG9uZVRhYmxlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDEyXCIsIGBDYW5ub3QgRmluZCB0YWJsZSAke3RhYmxlTmFtZX0gaW4gREIgJHtkYk5hbWV9LmApKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTJcIiwgYENhbm5vdCBGaW5kIHRhYmxlICR7dGFibGVOYW1lfSBpbiBEQiAke2RiTmFtZX0uYCkpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdFRhYmxlKHRhYmxlTmFtZSk6IFNRTGl0ZVRhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUYWJsZShcIk1haW5cIiwgdGFibGVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYW8oZGJOYW1lKTogSURhbyB7XG4gICAgY29uc29sZS5sb2coJ2dldCBEYW86JywgZGJOYW1lKTtcbiAgICBpZiAodGhpcy5kYk1hcHBpbmcuaGFzKGRiTmFtZSkpIHtcbiAgICAgIHRoaXMuZGJNYXBwaW5nLmdldChkYk5hbWUpLmNsZWFyVHJhbnNhY3Rpb24oKTtcbiAgICAgIHJldHVybiB0aGlzLmRiTWFwcGluZy5nZXQoZGJOYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTFcIiwgYENhbm5vdCBGaW5kIFNxbGl0ZSBEQiAke2RiTmFtZX0gRGFvLmApKVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXREZWZhdWx0RGFvKCk6IElEYW8ge1xuICAgIHJldHVybiB0aGlzLmdldERhbyhcIk1haW5cIik7XG4gIH1cblxuXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xuICAgIC8vZ2V0IGVhY2ggZGIgZGFvXG4gICAgaWYgKHRoaXMuQVBQX0NPTkZJRy5FTlYgPT0gJ0RFVicpXG4gICAgICByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLm1hcHBpbmdEQigpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlZnJlc2hUYWJsZVNjaGVtYSgpIHtcbiAgICBsZXQgZGJfY29uZmlnID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLkRBVEFCQVNFO1xuICAgIGxldCBkYl9uYW1lcyA9IE9iamVjdC5rZXlzKGRiX2NvbmZpZyk7XG4gICAgZm9yICh2YXIgbmFtZSBvZiBkYl9uYW1lcykge1xuICAgICAgYXdhaXQgdGhpcy5nZXRUYWJsZVNjaGVtYShuYW1lLCBkYl9jb25maWcpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAoXCJyZWZyZXNoVGFibGVTY2hlbWFcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRiTWFwcGluZyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlTWFwcGluZyk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSwgNTAwMCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcHBpbmdEQigpIHtcbiAgICBsZXQgZGJfY29uZmlnID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLkRBVEFCQVNFO1xuICAgIGxldCBkYl9uYW1lcyA9IE9iamVjdC5rZXlzKGRiX2NvbmZpZyk7XG4gICAgZm9yICh2YXIgbmFtZSBvZiBkYl9uYW1lcykge1xuICAgICAgY29uc29sZS5sb2coJ2dldFNjaGVtYTonLCBuYW1lKTtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0U2NoZW1hKG5hbWUsIGRiX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmdyb3VwKFwibWFwcGluZ0RCXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5kYk1hcHBpbmcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy50YWJsZU1hcHBpbmcpO1xuICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIH0sIDUwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRTY2hlbWEoZGJuYW1lLCBjb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQga2V5ID0gYXdhaXQgdGhpcy5nZXREYXRhYmFzZUtleShkYm5hbWUsIGNvbmZpZyk7XG4gICAgICBhd2FpdCB0aGlzLm9wZW5EYXRhYmFzZShkYm5hbWUsIGNvbmZpZywga2V5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKFwiZ2V0U2NoZW1hIGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIGxldCBlcnIgPSBuZXcgQVBQRXJyb3IoXCJGMDAwMTBcIiwgXCJTcWxpdGUgREIgb3BlbiBlcnJvci5cIik7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldERhdGFiYXNlS2V5KGRibmFtZSwgY29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5kZXZpY2VTZXJ2aWNlLmdldFNlY3VyZVN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSkudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdldERhdGFiYXNlS2V5IHJlc3A6XCIsIHJlc3ApO1xuICAgICAgaWYgKHJlc3AuaW5jbHVkZXMoXCJEZXZpY2UgaXMgbm90IHNlY3VyZVwiKSkgeyAvL3doaWNoIERldmljZSBpcyBub3Qgc2VjdXJlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcCkgeyAvLyBpZiBoYXZlIGtleSBpbiBrZXlTdG9yZS9rZXlDaGFpblxuICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBzZXRLZXlSZXNwID0gYXdhaXQgdGhpcy5kZXZpY2VTZXJ2aWNlLnNldFNlY3VyZVN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSwgdXVpZCgpKS50b1Byb21pc2UoKTtcbiAgICAgICAgaWYgKHNldEtleVJlc3ApIHtcbiAgICAgICAgICBsZXQga2V5ID0gYXdhaXQgdGhpcy5kZXZpY2VTZXJ2aWNlLmdldFNlY3VyZVN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdldERhdGFiYXNlS2V5IGVycm9yLCB1c2UgbG9jYWxTdG9yYWdlXCIpO1xuICAgICAgaWYgKHRoaXMuZGV2aWNlU2VydmljZS5nZXRMb2NhbFN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlU2VydmljZS5nZXRMb2NhbFN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQga2V5ID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmRldmljZVNlcnZpY2Uuc2V0TG9jYWxTdG9yYWdlKGNvbmZpZ1tkYm5hbWVdLm5hbWUsIGtleSk7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9wZW5EYXRhYmFzZShkYm5hbWUsIGNvbmZpZywga2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGJfY29uZmlnID0gbmV3IFNRTGl0ZURhdGFiYXNlKGNvbmZpZ1tkYm5hbWVdLm5hbWUsIGtleSk7XG4gICAgICBsZXQgZGFvID0gYXdhaXQgdGhpcy5jcmVhdGVEYW8oZGJfY29uZmlnKTtcbiAgICAgIHRoaXMuZGJNYXBwaW5nLnNldChjb25maWdbZGJuYW1lXS5uYW1lLCBkYW8pO1xuICAgICAgLy8gYXdhaXQgdGhpcy5nZXRUYWJsZVNjaGVtYShkYm5hbWUsIGNvbmZpZyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDEwXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZURhbyhjb25maWc6IFNRTGl0ZURhdGFiYXNlKTogUHJvbWlzZTxJRGFvPiB7XG4gICAgbGV0IGRhbzogSURhbztcbiAgICBpZiAodGhpcy5BUFBfQ09ORklHLkVOViA9PT0gJ0RFVl9XZWJTUUwnKSB7XG4gICAgICBkYW8gPSBuZXcgV2ViU1FMRGFvKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGFvID0gbmV3IFNRTGl0ZURhbyhjb25maWcpO1xuICAgIH1cbiAgICBhd2FpdCBkYW8ub3BlbkRhdGFCYXNlKCk7XG4gICAgcmV0dXJuIGRhbztcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRUYWJsZVNjaGVtYShkYm5hbWUsIGNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IHRhYmxlTWFwID0gYXdhaXQgdGhpcy5kYk1hcHBpbmcuZ2V0KGNvbmZpZ1tkYm5hbWVdLm5hbWUpLmdldFNjaGVtYSgpLnRvUHJvbWlzZSgpO1xuICAgIHRoaXMudGFibGVNYXBwaW5nLnNldChjb25maWdbZGJuYW1lXS5uYW1lLCB0YWJsZU1hcCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY2xlYXJEYXRhYmFzZURhdGEoZGJuYW1lKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGJNYXBwaW5nLmdldChkYm5hbWUpO1xuICAgICAgaWYgKGRhbykge1xuICAgICAgICBsZXQgdGFibGVNYXAgPSB0aGlzLnRhYmxlTWFwcGluZy5nZXQoZGJuYW1lKTtcbiAgICAgICAgdGFibGVNYXAuZm9yRWFjaCgodGFibGUsIHRhYmxlX25hbWUpID0+IHtcbiAgICAgICAgICAvLyBOb3QgVmlld1xuICAgICAgICAgIGlmICh0YWJsZV9uYW1lLmluZGV4T2YoJ1RXX0xIX1NEJykgIT09IC0xICYmIHRhYmxlX25hbWUuaW5kZXhPZignVFdfTEhfU0RfVlcnKSA9PSAtMSkge1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRhYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyRGF0YWJhc2VEYXRhIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGFvICR7ZGJuYW1lfS5gKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKCdGMDAwMjInLCBgQ2xlYXIgZGF0YWJhc2UgZXJyb3IsICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==