import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { ISearchTableByField } from '../../interface/ISearchTableByField';
import { DaoFactory } from '../../device/sqlite';
export declare class GetOtherParameterAPI implements IAPI, IMockAPI, ISQLiteAPI, ISearchTableByField {
    private _year;
    private _daoFactory;
    constructor(daoFactory: DaoFactory);
    SetYear(value: number): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
