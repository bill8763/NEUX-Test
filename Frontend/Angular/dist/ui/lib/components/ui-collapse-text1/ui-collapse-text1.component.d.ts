import { OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
export declare class UiCollapseText1Component implements OnInit {
    private changeDetctor;
    TextType: string;
    collapseBtn: string;
    isDataEmpty: boolean;
    translateEmpty: string;
    isCollapseBtnShow: boolean;
    private _isCollapseBtnShow;
    private _isOpen;
    isOpen: boolean;
    isOpenChange: EventEmitter<{}>;
    activeClasses: string;
    toggleCollapse(): boolean;
    isOpenStatus(): "closed" | "open";
    constructor(changeDetctor: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
