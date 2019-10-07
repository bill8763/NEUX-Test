import { OnInit, EventEmitter, ChangeDetectorRef, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { UiFormRadioGroup } from '../ui-form-radio-group/ui-form-radio-group.directive';
export declare class UiFormRadioComponent implements OnInit, AfterViewInit {
    protected _changeDetector: ChangeDetectorRef;
    private _renderer;
    protected _checked: boolean;
    private _disabled;
    private _value;
    id: string;
    protected radioGroup: UiFormRadioGroup;
    name: string;
    tagBlock: ElementRef;
    isCheck: boolean;
    isDisable: boolean;
    colorCode: string;
    isAllowCancel: boolean;
    change: EventEmitter<any>;
    checked: boolean;
    value: any;
    disabled: boolean;
    constructor(radioGroup: UiFormRadioGroup, _changeDetector: ChangeDetectorRef, _renderer: Renderer2);
    ngOnInit(): void;
    colorSetting(): void;
    ngAfterViewInit(): void;
    _markForCheck(): void;
    _onInputChange(event: Event): void;
    private _emitChangeEvent;
    private generateId;
}
