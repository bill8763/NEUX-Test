import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerAutoDeleteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _clientID;
    private _status;
    constructor(daoFactory: DaoFactory);
    setClientID(id: any): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
