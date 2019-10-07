import { OnInit, EventEmitter } from '@angular/core';
import { TABLETIELESTYLETYPE } from '../../model';
export declare class UiTableEditContentComponent implements OnInit {
    constructor();
    onClick: EventEmitter<{}>;
    titleText: string;
    styleType: TABLETIELESTYLETYPE;
    event: boolean;
    private _isEdit;
    isEdit: boolean;
    styleTableNoEdit: string;
    ngOnInit(): void;
    btnOnClick(): void;
    private _updateStyleTableNoEdit;
}
