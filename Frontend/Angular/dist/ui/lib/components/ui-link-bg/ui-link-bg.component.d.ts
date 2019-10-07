import { OnInit, EventEmitter } from '@angular/core';
export declare class UiLinkBgComponent implements OnInit {
    text: string;
    textTitle: string;
    linkBtnClick: EventEmitter<string>;
    constructor();
    onBtnLinkClick(textInput: string): void;
    ngOnInit(): void;
}
