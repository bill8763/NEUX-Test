import { OnInit, ElementRef } from '@angular/core';
import { DateUtils, Language } from '@allianzSND/core';
import { CustomerContactNote } from '../../service/model/CustomerContactNote';
export declare class CustomerContactListComponent implements OnInit {
    private dateUtils;
    language: Language;
    private onAddNote;
    private onDisplayNote;
    private onEditNote;
    private onDeleteNote;
    private contactListRefresh;
    contactList: CustomerContactNote[];
    private _contactList;
    elementRef: ElementRef;
    constructor(dateUtils: DateUtils, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    closeSlidingItems(): Promise<void>;
    refreshContactNote(): void;
    addNote(): void;
    displayNote(note: CustomerContactNote): void;
    editNote(note: CustomerContactNote): void;
    deleteNote(note: CustomerContactNote): void;
    trackByClientID(index: any, item: any): any;
    toNoteTime(time: Date): string;
}
