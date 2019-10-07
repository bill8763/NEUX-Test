import { OnInit, ChangeDetectorRef } from '@angular/core';
export declare class UiTabMoreComponent implements OnInit {
    private changeDector;
    isOpen: boolean;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    isOpenTabSelect(): void;
    closeTabSelect(): void;
}
