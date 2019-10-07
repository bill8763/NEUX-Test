import { APIDispatch } from '@allianzSND/core';
import { APIFactory } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { CalendarEventDetail } from './model/CalendarEventDetail';
import { ProfileCodeService } from '@allianzSND/core';
import { ValidationResult } from '@allianzSND/core';
export declare class CalendarService {
    private dispatch;
    private profileCodeService;
    private APIFactory;
    constructor(dispatch: APIDispatch, profileCodeService: ProfileCodeService, APIFactory: APIFactory);
    getCalendarEventList(start: Date, end: Date, key: string): Observable<Array<CalendarEventDetail>>;
    getCalendarEventDetail(clientID: string): Observable<CalendarEventDetail>;
    deleteCalendarEvent(clientID: string): Observable<any>;
    addCalendarEvent(event: CalendarEventDetail): Observable<any>;
    updateCalendarEvent(clientID: string, event: CalendarEventDetail): Observable<any>;
    adjustAlert(event: CalendarEventDetail): CalendarEventDetail;
    calendarValidation(data: any): ValidationResult;
    sortCalendarEventList(calendarEventList: Array<CalendarEventDetail>): Array<CalendarEventDetail>;
}
