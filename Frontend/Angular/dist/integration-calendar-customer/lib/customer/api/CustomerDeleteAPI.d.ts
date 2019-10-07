import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerDeleteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _clientID;
    constructor(daoFactory: DaoFactory);
    clientID: string;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
