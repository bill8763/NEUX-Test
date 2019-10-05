import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
export declare class ChangeMessageStatusAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _messageID;
    private _col;
    private _val;
    val: any;
    col: any;
    messageID: any;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
    private _updateStatus;
}
