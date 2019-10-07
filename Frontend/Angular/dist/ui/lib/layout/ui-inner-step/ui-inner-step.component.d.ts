import { OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { AppRouter } from '@allianzSND/core';
export declare class UiInnerStepComponent implements OnInit {
    private _location;
    private router;
    stepHeading: ElementRef;
    stepMain: ElementRef;
    stepPage: ElementRef;
    theme: string;
    isBackShow: boolean;
    backUrl: string;
    stepHeadingH: string;
    private windowHeight;
    private windowWidth;
    constructor(_location: Location, router: AppRouter);
    ngOnInit(): void;
    onResize(event: any): void;
    closeMain(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    calculateHeight(): void;
}
