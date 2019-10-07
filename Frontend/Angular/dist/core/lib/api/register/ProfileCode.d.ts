import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
export declare class ProfileCodeAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _DaoFactory;
    constructor(DaoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
