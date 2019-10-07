import { QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
export declare class UiCollapseGroupComponent implements AfterContentInit {
    private changeDetector;
    childCmps: QueryList<UiFormCheckbox2Component>;
    constructor(changeDetector: ChangeDetectorRef);
    translateMore: string;
    data: object;
    readonly hasCollapse: boolean;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    isOpen: boolean;
    activeClasses: string;
    btnDisplayClasses: string;
    displayHideBlock: string;
    openCloseStatus: string;
    toggleCollapse(): boolean;
}
