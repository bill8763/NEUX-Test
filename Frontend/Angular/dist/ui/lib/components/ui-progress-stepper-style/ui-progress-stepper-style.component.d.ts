import { OnInit } from '@angular/core';
import { STEPSTYLETYPE } from '../../model';
export declare class UiProgressStepperStyleComponent implements OnInit {
    stepContral: number;
    stepData: string[];
    activeStepCheck: boolean;
    stepType: STEPSTYLETYPE;
    hasIcon: boolean;
    colorCode: string;
    constructor();
    ngOnInit(): void;
    contralType(): "step-style-1" | "step-style-2" | "step-style-2-2";
}
