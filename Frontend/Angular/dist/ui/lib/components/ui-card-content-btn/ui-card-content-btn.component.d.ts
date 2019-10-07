import { OnInit, ElementRef } from '@angular/core';
export declare class UiCardContentBtnComponent implements OnInit {
    btnContent: ElementRef;
    noPadding: boolean;
    hasBtn: boolean;
    outsideBtn: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
