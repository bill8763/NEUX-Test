import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { ISQLiteAPI } from '@allianzSND/core';
export declare class CalendarEventSaveAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private Data;
    private _DaoFactory;
    constructor(DaoFactory: any);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
