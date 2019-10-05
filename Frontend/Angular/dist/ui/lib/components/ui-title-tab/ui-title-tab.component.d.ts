import { OnInit, QueryList } from '@angular/core';
import { UiTabStyle1Component } from '../ui-tab-style1/ui-tab-style1.component';
import { UiTabStyle2Component } from '../ui-tab-style2/ui-tab-style2.component';
export declare class UiTitleTabComponent implements OnInit {
    tabs1: QueryList<UiTabStyle1Component>;
    tabs2: QueryList<UiTabStyle2Component>;
    constructor();
    ngOnInit(): void;
    tabLength(): number;
}
