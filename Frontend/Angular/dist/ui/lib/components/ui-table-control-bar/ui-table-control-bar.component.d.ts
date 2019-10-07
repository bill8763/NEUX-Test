import { OnInit, EventEmitter } from '@angular/core';
import { Language } from '@allianzSND/core';
export declare class UiTableControlBarComponent implements OnInit {
    language: Language;
    private _isVertical;
    isVertical: boolean;
    onClick: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    clickBtn(): void;
}
