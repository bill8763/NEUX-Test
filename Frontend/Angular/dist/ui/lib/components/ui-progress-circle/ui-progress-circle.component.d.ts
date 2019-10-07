import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class UiProgressCircleComponent implements OnInit {
    private _location;
    value: number;
    sizeR: number;
    sizeStroke: number;
    constructor(_location: Location);
    ngOnInit(): void;
    contentSize(): number;
    countR(): number;
    setNumber(): number;
    getUrl(): string;
}
