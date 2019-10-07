import { OnInit, EventEmitter } from '@angular/core';
export declare class UiCollapseContentDetailComponent implements OnInit {
    private _isOpen;
    isOpen: boolean;
    isOpenCange: EventEmitter<{}>;
    isOpenStatus(): "closed" | "open";
    constructor();
    ngOnInit(): void;
}
