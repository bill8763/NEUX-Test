import { OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { UIMainSideMenuComponent } from '../ui-main-side-menu/ui-main-side-menu.component';
import { Language } from '@allianzSND/core';
export declare class UiMainCollapseComponent extends UIMainSideMenuComponent implements OnInit {
    private changeDector;
    isHideCollapseBlock: boolean;
    firstTitle: string;
    secondTitle: string;
    language: Language;
    pcMenuBlock: ElementRef;
    uiPageContent: ElementRef;
    windowWidth: number;
    isCollapsing: boolean;
    isCollapsed: boolean;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    onResize(event: any): void;
    setTimeOutCollapse(): void;
    collapseSideMenu(): void;
    isOpenSideMenu(): boolean;
}
