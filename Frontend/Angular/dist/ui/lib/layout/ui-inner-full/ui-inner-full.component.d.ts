import { OnInit, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
export declare class UiInnerFullComponent implements OnInit {
    private _location;
    title: string;
    prevText: any[];
    agentBackEvent: EventEmitter<string>;
    constructor(_location: Location);
    ngOnInit(): void;
    closeMain(): void;
}
