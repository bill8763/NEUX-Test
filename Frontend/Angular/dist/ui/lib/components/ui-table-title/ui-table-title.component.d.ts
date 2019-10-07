import { OnInit, EventEmitter } from '@angular/core';
import { TABLETIELESTYLETYPE } from '../../model';
export declare class UiTableTitleComponent implements OnInit {
    titleText: string;
    subTitleText: string;
    event: boolean;
    eventIcon: string;
    onClick: EventEmitter<{}>;
    styleType: TABLETIELESTYLETYPE;
    isShowTitle: boolean;
    constructor();
    ngOnInit(): void;
    click(): void;
    controlStyle(): "style-2" | "style-1" | "style-3" | "style-4" | "style-5" | "style-6" | "style-7";
}
