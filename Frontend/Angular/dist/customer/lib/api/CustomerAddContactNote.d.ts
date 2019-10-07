import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerAddContactNoteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private clientID;
    private customerClientID;
    private note;
    private noteTime;
    constructor(daoFactory: DaoFactory);
    setClientID(clientID: string): void;
    setCustomerClientID(customerClientID: string): void;
    setNote(note: string): void;
    setNoteTime(noteTime: Date): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
