import { IAPI } from "../API.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { Observable } from "rxjs";
import { IMockAPI } from "../MockAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class saveAgencyPlanAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    AgencyPlanDatas: Array<any>;
    private dao;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
    private _getDate;
}
