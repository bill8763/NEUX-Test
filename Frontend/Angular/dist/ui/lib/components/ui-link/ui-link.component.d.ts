import { OnInit, EventEmitter } from '@angular/core';
export declare class UiLinkComponent implements OnInit {
    imgSrc: string;
    isUnderLine: boolean;
    isHasImg: boolean;
    isImgFront: boolean;
    isReset: boolean;
    id: string;
    classImgFront: string;
    onClick: EventEmitter<{}>;
    onClickLink(): void;
    classLinkStyle: string;
    constructor();
    ngOnInit(): void;
}
