import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerDeleteContactNoteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private contactClientID;
    constructor(daoFactory: DaoFactory);
    setContactClientID(contactClientID: string): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
