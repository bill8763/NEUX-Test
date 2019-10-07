import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
export declare class DashboardUpdateMessageStatusAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _clientID;
    private _clientIDList;
    private _status;
    constructor(daoFactory: DaoFactory);
    setClientID(clientID: string): void;
    setClientIDList(list: Array<string>): void;
    setStatus(status: string): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
