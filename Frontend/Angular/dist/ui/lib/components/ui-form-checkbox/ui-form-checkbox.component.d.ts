import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
export declare class UiFormCheckboxComponent extends UiFormCheckbox2Component implements AfterViewInit {
    private _renderer;
    colorCode: string;
    checkBlock: ElementRef;
    constructor(_renderer: Renderer2);
    colorSetting(): void;
    ngAfterViewInit(): void;
    nxValue: any;
}
