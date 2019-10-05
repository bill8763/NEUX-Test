import { Observable } from "rxjs";
import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class saveLoginTokenAPI implements IAPI, ISQLiteAPI, IMockAPI {
    private daoFactory;
    constructor(daoFactory: DaoFactory);
    private _encryptedAuth;
    private _infoToken;
    infoToken: string;
    encryptedAuth: string;
    getAPIName(): string;
    executeSQL(): Observable<any>;
    getMockPath(): string;
}
