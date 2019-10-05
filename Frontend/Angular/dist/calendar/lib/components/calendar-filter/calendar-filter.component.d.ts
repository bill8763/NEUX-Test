import { EventEmitter, OnInit } from '@angular/core';
import { ProfileCode } from '@allianzSND/core';
export declare class CalendarFilterComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    private _optionMap;
    activityTypeList: Array<ProfileCode>;
    currentFilterOptionList: Array<string>;
    optionMap: Map<string, Array<ProfileCode>>;
    activityTypeListChange: EventEmitter<{}>;
    onActivityFilter(): void;
    toActivityColor(item: ProfileCode): any;
}
