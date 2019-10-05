import { Observable } from "rxjs";
import { IAPI } from "../API.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
export declare class GetDeviceInfoAPI implements IAPI, ISQLiteAPI {
    private daoFactory;
    constructor(daoFactory: DaoFactory);
    private dataType;
    setDataType(dataType: string): void;
    token: string;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
