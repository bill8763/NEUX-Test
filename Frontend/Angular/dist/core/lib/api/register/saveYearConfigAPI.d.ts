import { IAPI } from "../API.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { Observable } from "rxjs";
import { IMockAPI } from "../MockAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class saveYearConfigAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    yearConfigs: Array<any>;
    FirstUseAPP: boolean;
    private deviceInfo;
    private yearConfig;
    private yearConfig_ext;
    private dao;
    private profile_dao;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<boolean> | Observable<Promise<any>>;
    private _getDate;
    private saveConfig;
}
