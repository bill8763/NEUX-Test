import { OnInit, TemplateRef, QueryList } from '@angular/core';
export declare class UiTableRowHeadComponent implements OnInit {
    items: QueryList<TemplateRef<any>>;
    constructor();
    ngOnInit(): void;
    itemToArray(): TemplateRef<any>[];
    test(): void;
}
