import { OnInit, EventEmitter } from '@angular/core';
import { CalendarEventDetail } from '../../service/model/CalendarEventDetail';
import { Language, MetaService, MetaController, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor, MetaColumn } from '@allianzSND/core';
import { DefaultCalendarDetailMetaController } from './DefaultCalendarDetailMetaController';
import { DatePipe } from '@angular/common';
export declare class CalendarDetailComponent extends DisplayMetaComponent implements OnInit {
    private DatePipe;
    isMetaDataDone: EventEmitter<boolean>;
    calendarEventDetail: CalendarEventDetail;
    private _customerClientName;
    customerClientName: string;
    readonly data: any;
    readonly rowConfig: Array<Array<MetaColumn>>;
    language: Language;
    _calendarEventDetail: CalendarEventDetail;
    isSameDay: boolean;
    isAllDay: boolean;
    private _metaController;
    private _clientID;
    constructor(DatePipe: DatePipe, metaService: MetaService, profileCodeService: ProfileCodeService, metaParser: DefaultMetaParser, metaExecutor: APIExecutor, defaulterMetaController: DefaultCalendarDetailMetaController, customMetaController: MetaController);
    ngOnInit(): void;
    getMetaID(): string;
    getMetaParams(): {
        _clientID: string;
    };
    onDataUpdated(): void;
    private getDisplayDateHTML;
}
