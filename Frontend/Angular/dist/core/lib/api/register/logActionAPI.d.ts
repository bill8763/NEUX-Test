import { IAPI } from "../API.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { Observable } from "rxjs";
import { IMockAPI } from "../MockAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class logActionAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    action: string;
    Function: string;
    message: string;
    time: Date;
    valid: boolean;
    DeviceModel: string;
    DeviceSystem: string;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<boolean> | Observable<import("projects/core/src/lib/device/sqlite/SQLiteResponse").SQLiteResponse>;
}
