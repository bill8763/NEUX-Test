import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class UiItemComponent implements OnInit {
    slidingList: ElementRef;
    elementRef: ElementRef;
    onItemClick: EventEmitter<{}>;
    closeSlidingItems(): Promise<boolean>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    itemClick(): void;
}
