import { PageInfo, IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from "rxjs";
export declare class CustomerContactNoteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private customerClientID;
    private pageInfo;
    constructor(daoFactory: DaoFactory);
    setClientID(id: string): void;
    setPageInfo(pageInfo: PageInfo): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
