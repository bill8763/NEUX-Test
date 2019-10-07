import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiCollapseContentComponent implements OnInit {
    private changeDector;
    constructor(changeDector: ChangeDetectorRef);
    isShow: boolean;
    isOpen: boolean;
    isHasCollapse: boolean;
    titleText: string;
    onCollapsing: EventEmitter<{}>;
    styleNoCollapse: string;
    ngOnInit(): void;
    toggleCollapse(): boolean;
    isOpenStatus(): "closed" | "open";
}
