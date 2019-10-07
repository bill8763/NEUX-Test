import { AfterContentInit, EventEmitter, ChangeDetectorRef, QueryList } from '@angular/core';
import { UiFormRadioComponent } from '../ui-form-radio/ui-form-radio.component';
export declare class UiFormRadioGroup implements AfterContentInit {
    private _changeDetector;
    private _value;
    private _selected;
    private _isInitialized;
    private _disabled;
    private _name;
    onTouched: () => any;
    nxValue: any;
    nxValueChange: EventEmitter<any>;
    _radios: QueryList<UiFormRadioComponent>;
    change: EventEmitter<any>;
    value: any;
    selected: UiFormRadioComponent | null;
    disabled: boolean;
    name: string;
    constructor(_changeDetector: ChangeDetectorRef);
    ngAfterContentInit(): void;
    _checkSelectedRadioButton(): void;
    private _updateSelectedRadioFromValue;
    private _updateRadioButtonNames;
    _emitChangeEvent(): void;
    onChange(val: any): void;
    _markRadiosForCheck(): void;
    private generateId;
}
