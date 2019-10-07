import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
export declare class UpdateTimeListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _DaoFactory;
    constructor(DaoFactory: any);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
