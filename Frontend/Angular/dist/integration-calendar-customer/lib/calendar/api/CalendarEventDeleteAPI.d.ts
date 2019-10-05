import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class CalendarEventDeleteAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _clientID;
    private _DaoFactory;
    constructor(DaoFactory: any);
    clientID: string;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
