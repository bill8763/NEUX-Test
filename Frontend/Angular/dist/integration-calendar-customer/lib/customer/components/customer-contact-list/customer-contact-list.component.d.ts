import { OnInit, ElementRef } from '@angular/core';
import { DateUtils, Language, showRule } from '@allianzSND/core';
export declare class CustomerContactListComponent implements OnInit {
    private dateUtils;
    private showRule;
    language: Language;
    private onAddNote;
    private onDisplayNote;
    private onEditNote;
    private onDeleteNote;
    private contactListRefresh;
    contactList: any[];
    private _contactList;
    elementRef: ElementRef;
    constructor(dateUtils: DateUtils, elementRef: ElementRef, showRule: showRule);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    closeSlidingItems(): Promise<void>;
    refreshContactNote(): void;
    addNote(): void;
    displayNote(note: any): void;
    editNote(note: any): void;
    deleteNote(note: any): void;
    trackByClientID(index: any, item: any): any;
    toNoteTime(time: Date): string;
}
