import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class DashboardUpdateToReadAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _messageType;
    private _messageDataCategory;
    constructor(daoFactory: DaoFactory);
    setMessageType(type: any): void;
    setMessageDataCategory(dataCategory: any): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
