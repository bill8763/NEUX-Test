import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { ISQLiteAPI } from '@allianzSND/core';
import { CalendarEventDetail } from '../service/calendar/model/CalendarEventDetail';
export declare class CalendarEventAddAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _calendarEvent;
    private _DaoFactory;
    constructor(DaoFactory: any);
    setCalendarEvent(value: CalendarEventDetail): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
