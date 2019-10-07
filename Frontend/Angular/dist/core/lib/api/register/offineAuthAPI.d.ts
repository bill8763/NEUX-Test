import { Observable } from "rxjs";
import { IAPI } from "../API.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class OfflineAuthAPI implements IAPI, ISQLiteAPI {
    private daoFactory;
    private APP_CONFIG;
    constructor(daoFactory: DaoFactory, APP_CONFIG: any);
    token: string;
    private failTry;
    getAPIName(): string;
    executeSQL(): Observable<any>;
    private _offlineAuth;
}
