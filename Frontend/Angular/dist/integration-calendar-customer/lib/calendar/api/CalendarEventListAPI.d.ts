import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class CalendarEventListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _startTime;
    private _endTime;
    private _DaoFactory;
    constructor(DaoFactory: any);
    startTime: Date;
    endTime: Date;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
