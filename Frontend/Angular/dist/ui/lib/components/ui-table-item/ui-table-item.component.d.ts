import { OnInit, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';
export declare class UiTableItemComponent implements OnInit, AfterViewInit {
    itemMinSize: string;
    heightLight: string;
    wrap: boolean;
    textAlign: string;
    item: TemplateRef<any>;
    sort: boolean;
    eventIndex: number;
    itemVal: string;
    id: string;
    textValue: string;
    elementRef: ElementRef;
    tableItem: ElementRef;
    constructor();
    setIndex(): number;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
