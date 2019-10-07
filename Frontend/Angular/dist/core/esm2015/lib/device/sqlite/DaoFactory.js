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
export class DaoFactory {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            ;
        });
    }
    /**
     * @private
     * @param {?} dbname
     * @param {?} config
     * @return {?}
     */
    getDatabaseKey(dbname, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                    let setKeyResp = yield this.deviceService.setSecureStorage(config[dbname].name, uuid()).toPromise();
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
                    let key = uuid();
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ DaoFactory.ngInjectableDef = i0.defineInjectable({ factory: function DaoFactory_Factory() { return new DaoFactory(i0.inject(i1.DeviceService), i0.inject(i0.ErrorHandler), i0.inject(i2.ConfigToken, 8)); }, token: DaoFactory, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFvRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBS3hDLE1BQU07Ozs7Ozs7SUFHSixZQUNVLGFBQTRCLEVBQzVCLFlBQTBCLEVBQ08sVUFBVTtRQUYzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNPLGVBQVUsR0FBVixVQUFVLENBQUE7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVM7UUFDL0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0s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SSxNQUFNLFNBQUMsV0FBVzs7Ozs7Ozs7SUFMakMsa0NBQTREOzs7OztJQUM1RCwrQkFBcUM7Ozs7O0lBRW5DLG1DQUFvQzs7Ozs7SUFDcEMsa0NBQWtDOzs7OztJQUNsQyxnQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTUUxpdGVUYWJsZSB9IGZyb20gXCIuL1NRTGl0ZVRhYmxlXCI7XG5pbXBvcnQgeyBTUUxpdGVEYXRhYmFzZSB9IGZyb20gXCIuL1NRTGl0ZURhdGFiYXNlXCI7XG5pbXBvcnQgeyBJRGFvIH0gZnJvbSBcIi4vRGFvLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlRGFvIH0gZnJvbSBcIi4vU1FMaXRlRGFvXCI7XG5pbXBvcnQgeyBPcHRpb25hbCwgSW5qZWN0LCBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tIFwiLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGV2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBXZWJTUUxEYW8gfSBmcm9tIFwiLi9XZWJTUUxEYW9cIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFvRmFjdG9yeSB7XG4gIHByaXZhdGUgdGFibGVNYXBwaW5nOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBTUUxpdGVUYWJsZT4+O1xuICBwcml2YXRlIGRiTWFwcGluZzogTWFwPHN0cmluZywgSURhbz47XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHKSB7XG4gICAgdGhpcy50YWJsZU1hcHBpbmcgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kYk1hcHBpbmcgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFibGUoZGJOYW1lLCB0YWJsZU5hbWUpOiBTUUxpdGVUYWJsZSB7XG4gICAgaWYgKHRoaXMudGFibGVNYXBwaW5nLmhhcyhkYk5hbWUpKSB7XG4gICAgICBpZiAodGhpcy50YWJsZU1hcHBpbmcuZ2V0KGRiTmFtZSkuaGFzKHRhYmxlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVNYXBwaW5nLmdldChkYk5hbWUpLmdldCh0YWJsZU5hbWUpLmNsb25lVGFibGUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTJcIiwgYENhbm5vdCBGaW5kIHRhYmxlICR7dGFibGVOYW1lfSBpbiBEQiAke2RiTmFtZX0uYCkpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDAxMlwiLCBgQ2Fubm90IEZpbmQgdGFibGUgJHt0YWJsZU5hbWV9IGluIERCICR7ZGJOYW1lfS5gKSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWZhdWx0VGFibGUodGFibGVOYW1lKTogU1FMaXRlVGFibGUge1xuICAgIHJldHVybiB0aGlzLmdldFRhYmxlKFwiTWFpblwiLCB0YWJsZU5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhbyhkYk5hbWUpOiBJRGFvIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0IERhbzonLCBkYk5hbWUpO1xuICAgIGlmICh0aGlzLmRiTWFwcGluZy5oYXMoZGJOYW1lKSkge1xuICAgICAgdGhpcy5kYk1hcHBpbmcuZ2V0KGRiTmFtZSkuY2xlYXJUcmFuc2FjdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXMuZGJNYXBwaW5nLmdldChkYk5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDAxMVwiLCBgQ2Fubm90IEZpbmQgU3FsaXRlIERCICR7ZGJOYW1lfSBEYW8uYCkpXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIGdldERlZmF1bHREYW8oKTogSURhbyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGFvKFwiTWFpblwiKTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XG4gICAgLy9nZXQgZWFjaCBkYiBkYW9cbiAgICBpZiAodGhpcy5BUFBfQ09ORklHLkVOViA9PSAnREVWJylcbiAgICAgIHJldHVybjtcbiAgICBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMubWFwcGluZ0RCKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaFRhYmxlU2NoZW1hKCkge1xuICAgIGxldCBkYl9jb25maWcgPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFUQUJBU0U7XG4gICAgbGV0IGRiX25hbWVzID0gT2JqZWN0LmtleXMoZGJfY29uZmlnKTtcbiAgICBmb3IgKHZhciBuYW1lIG9mIGRiX25hbWVzKSB7XG4gICAgICBhd2FpdCB0aGlzLmdldFRhYmxlU2NoZW1hKG5hbWUsIGRiX2NvbmZpZyk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5ncm91cChcInJlZnJlc2hUYWJsZVNjaGVtYVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGJNYXBwaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFibGVNYXBwaW5nKTtcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICB9LCA1MDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFwcGluZ0RCKCkge1xuICAgIGxldCBkYl9jb25maWcgPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFUQUJBU0U7XG4gICAgbGV0IGRiX25hbWVzID0gT2JqZWN0LmtleXMoZGJfY29uZmlnKTtcbiAgICBmb3IgKHZhciBuYW1lIG9mIGRiX25hbWVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0U2NoZW1hOicsIG5hbWUpO1xuICAgICAgYXdhaXQgdGhpcy5nZXRTY2hlbWEobmFtZSwgZGJfY29uZmlnKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAoXCJtYXBwaW5nREJcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRiTWFwcGluZyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlTWFwcGluZyk7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSwgNTAwMCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldFNjaGVtYShkYm5hbWUsIGNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBrZXkgPSBhd2FpdCB0aGlzLmdldERhdGFiYXNlS2V5KGRibmFtZSwgY29uZmlnKTtcbiAgICAgIGF3YWl0IHRoaXMub3BlbkRhdGFiYXNlKGRibmFtZSwgY29uZmlnLCBrZXkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJnZXRTY2hlbWEgZXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgbGV0IGVyciA9IG5ldyBBUFBFcnJvcihcIkYwMDAxMFwiLCBcIlNxbGl0ZSBEQiBvcGVuIGVycm9yLlwiKTtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycik7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGF0YWJhc2VLZXkoZGJuYW1lLCBjb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2UuZ2V0U2VjdXJlU3RvcmFnZShjb25maWdbZGJuYW1lXS5uYW1lKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YWJhc2VLZXkgcmVzcDpcIiwgcmVzcCk7XG4gICAgICBpZiAocmVzcC5pbmNsdWRlcyhcIkRldmljZSBpcyBub3Qgc2VjdXJlXCIpKSB7IC8vd2hpY2ggRGV2aWNlIGlzIG5vdCBzZWN1cmVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3ApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwKSB7IC8vIGlmIGhhdmUga2V5IGluIGtleVN0b3JlL2tleUNoYWluXG4gICAgICAgIHJldHVybiByZXNwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHNldEtleVJlc3AgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2Uuc2V0U2VjdXJlU3RvcmFnZShjb25maWdbZGJuYW1lXS5uYW1lLCB1dWlkKCkpLnRvUHJvbWlzZSgpO1xuICAgICAgICBpZiAoc2V0S2V5UmVzcCkge1xuICAgICAgICAgIGxldCBrZXkgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2UuZ2V0U2VjdXJlU3RvcmFnZShjb25maWdbZGJuYW1lXS5uYW1lKS50b1Byb21pc2UoKTtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YWJhc2VLZXkgZXJyb3IsIHVzZSBsb2NhbFN0b3JhZ2VcIik7XG4gICAgICBpZiAodGhpcy5kZXZpY2VTZXJ2aWNlLmdldExvY2FsU3RvcmFnZShjb25maWdbZGJuYW1lXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldExvY2FsU3RvcmFnZShjb25maWdbZGJuYW1lXS5uYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBrZXkgPSB1dWlkKCk7XG4gICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5zZXRMb2NhbFN0b3JhZ2UoY29uZmlnW2RibmFtZV0ubmFtZSwga2V5KTtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb3BlbkRhdGFiYXNlKGRibmFtZSwgY29uZmlnLCBrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYl9jb25maWcgPSBuZXcgU1FMaXRlRGF0YWJhc2UoY29uZmlnW2RibmFtZV0ubmFtZSwga2V5KTtcbiAgICAgIGxldCBkYW8gPSBhd2FpdCB0aGlzLmNyZWF0ZURhbyhkYl9jb25maWcpO1xuICAgICAgdGhpcy5kYk1hcHBpbmcuc2V0KGNvbmZpZ1tkYm5hbWVdLm5hbWUsIGRhbyk7XG4gICAgICAvLyBhd2FpdCB0aGlzLmdldFRhYmxlU2NoZW1hKGRibmFtZSwgY29uZmlnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTBcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlRGFvKGNvbmZpZzogU1FMaXRlRGF0YWJhc2UpOiBQcm9taXNlPElEYW8+IHtcbiAgICBsZXQgZGFvOiBJRGFvO1xuICAgIGlmICh0aGlzLkFQUF9DT05GSUcuRU5WID09PSAnREVWX1dlYlNRTCcpIHtcbiAgICAgIGRhbyA9IG5ldyBXZWJTUUxEYW8oY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkYW8gPSBuZXcgU1FMaXRlRGFvKGNvbmZpZyk7XG4gICAgfVxuICAgIGF3YWl0IGRhby5vcGVuRGF0YUJhc2UoKTtcbiAgICByZXR1cm4gZGFvO1xuICB9XG5cblxuICBwcml2YXRlIGFzeW5jIGdldFRhYmxlU2NoZW1hKGRibmFtZSwgY29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgdGFibGVNYXAgPSBhd2FpdCB0aGlzLmRiTWFwcGluZy5nZXQoY29uZmlnW2RibmFtZV0ubmFtZSkuZ2V0U2NoZW1hKCkudG9Qcm9taXNlKCk7XG4gICAgdGhpcy50YWJsZU1hcHBpbmcuc2V0KGNvbmZpZ1tkYm5hbWVdLm5hbWUsIHRhYmxlTWFwKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjbGVhckRhdGFiYXNlRGF0YShkYm5hbWUpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYk1hcHBpbmcuZ2V0KGRibmFtZSk7XG4gICAgICBpZiAoZGFvKSB7XG4gICAgICAgIGxldCB0YWJsZU1hcCA9IHRoaXMudGFibGVNYXBwaW5nLmdldChkYm5hbWUpO1xuICAgICAgICB0YWJsZU1hcC5mb3JFYWNoKCh0YWJsZSwgdGFibGVfbmFtZSkgPT4ge1xuICAgICAgICAgIC8vIE5vdCBWaWV3XG4gICAgICAgICAgaWYgKHRhYmxlX25hbWUuaW5kZXhPZignVFdfTEhfU0QnKSAhPT0gLTEgJiYgdGFibGVfbmFtZS5pbmRleE9mKCdUV19MSF9TRF9WVycpID09IC0xKSB7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUodGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJEYXRhYmFzZURhdGEgcmVzcDpcIiwgcmVzcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBkYW8gJHtkYm5hbWV9LmApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoJ0YwMDAyMicsIGBDbGVhciBkYXRhYmFzZSBlcnJvciwgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxufVxuIl19