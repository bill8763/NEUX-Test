import { OnInit, QueryList, TemplateRef } from '@angular/core';
import { TABLELISTSTYLETYPE } from '../../model';
export declare class UiTableListComponent implements OnInit {
    items: QueryList<TemplateRef<any>>;
    styleType: TABLELISTSTYLETYPE;
    windowWidth: number;
    constructor();
    ngOnInit(): void;
    infoListArray(): TemplateRef<any>[];
    onResize(event: any): void;
    controlStyle(): "" | "style-2";
}
