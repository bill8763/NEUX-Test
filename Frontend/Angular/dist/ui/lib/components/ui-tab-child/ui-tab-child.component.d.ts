import { OnInit, EventEmitter, TemplateRef } from '@angular/core';
export declare class UiTabChildComponent implements OnInit {
    onTabChildClick: EventEmitter<{}>;
    tab: TemplateRef<any>;
    active: string;
    idName: string;
    id: string;
    constructor();
    ngOnInit(): void;
}
