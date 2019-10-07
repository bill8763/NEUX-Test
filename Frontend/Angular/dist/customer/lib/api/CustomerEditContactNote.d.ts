import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerEditContactNoteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private contactClientID;
    private note;
    private noteTime;
    constructor(daoFactory: DaoFactory);
    setContactClientID(contactClientID: string): void;
    setNote(note: string): void;
    setNoteTime(noteTime: Date): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
