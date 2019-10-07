import { OnInit, ElementRef } from '@angular/core';
export declare class UiItemSlidingComponent implements OnInit {
    elementRef: ElementRef;
    closeSlidingItems(): Promise<boolean>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
