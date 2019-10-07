import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from "rxjs";
export declare class CustomerTelAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private clientID;
    constructor(daoFactory: DaoFactory);
    setClientID(id: string): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
