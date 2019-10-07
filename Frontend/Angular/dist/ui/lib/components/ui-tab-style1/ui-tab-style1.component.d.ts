import { OnInit, TemplateRef, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { UiTabMoreComponent } from '../ui-tab-more/ui-tab-more.component';
export declare class UiTabStyle1Component implements OnInit {
    private changeDector;
    tabs: QueryList<TemplateRef<any>>;
    more_component: UiTabMoreComponent;
    idContentName: string;
    onTabChildClick: EventEmitter<{}>;
    handleOpen: boolean;
    tabIndex: number;
    maxShow: number;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    handleClick(i: any): void;
    closeSelect(): void;
    getTabsArray(): TemplateRef<any>[];
}
