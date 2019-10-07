import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { CalendarEventDetail } from '../service/model/CalendarEventDetail';
export declare class CalendarEventUpdateAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _clientID;
    private _calendarEvent;
    private _DaoFactory;
    constructor(DaoFactory: any);
    ClientID: string;
    setCalendarEvent(value: CalendarEventDetail): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
