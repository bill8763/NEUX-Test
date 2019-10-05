import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class UiDetectionScrollComponent implements OnInit {
    scrollContent: ElementRef;
    detectionContent: ElementRef;
    scrollEventData: EventEmitter<{}>;
    constructor();
    paddingGap: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    scrollMsg: {
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
    };
    ngOnInit(): void;
    detectionScroll(): void;
    ngAfterViewInit(): void;
    onResize(event: any): void;
}
