import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerEditOvertimeAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _clientID;
    constructor(daoFactory: DaoFactory);
    setClientID(id: any): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
