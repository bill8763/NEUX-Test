import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class UIInnerPageComponent implements OnInit {
    protected _location: Location;
    title: string;
    contentHeight: any;
    private _btmAddHeight;
    pageStyle: string;
    constructor(_location: Location);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    closeMain(): void;
}
