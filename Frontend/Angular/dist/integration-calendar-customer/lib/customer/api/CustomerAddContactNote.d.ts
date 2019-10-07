import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerAddContactNoteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    Data: any;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
