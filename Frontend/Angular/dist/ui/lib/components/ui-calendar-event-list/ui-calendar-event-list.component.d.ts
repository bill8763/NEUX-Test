import { OnInit, EventEmitter } from '@angular/core';
export declare class UiCalendarEventListComponent implements OnInit {
    eventList: any[];
    title: string;
    colorCode: string;
    translateMap: Map<string, string>;
    textColorStyle: string;
    clickEvent: EventEmitter<{}>;
    styleText: string;
    constructor();
    ngOnInit(): void;
    isSameDay(start: Date, end: Date): boolean;
    clickEventItem(eventItem: any): void;
}
