import { OnInit } from '@angular/core';
import { CalendarEventDetail } from '../../service/calendar/model/CalendarEventDetail';
import { Language } from '@allianzSND/core';
export declare class CalendarDetailComponent implements OnInit {
    calendarEventDetail: CalendarEventDetail;
    language: Language;
    _calendarEventDetail: CalendarEventDetail;
    isSameDay: boolean;
    constructor();
    ngOnInit(): void;
}
