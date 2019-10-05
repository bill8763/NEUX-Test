import { OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class UiCollapseCard1Component implements OnInit {
    private changeDetector;
    tagText: string;
    TextType: string;
    collapseBtn: string;
    isDataEmpty: boolean;
    isHide: boolean;
    emptyText: Array<string>;
    constructor(changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    isOpen: boolean;
    activeClasses: string;
    toggleCollapse(): boolean;
    isOpenStatus(): "closed" | "open";
    collapseContentHeight: ElementRef;
    ngAfterContentInit(): void;
}
