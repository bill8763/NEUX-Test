import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class CustomerBirthdayListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _targetDate;
    isRangeCrossYear: boolean;
    private _subN;
    private _subNDayTimeStamp;
    private _addN;
    private _addNDayTimeStamp;
    private _DaoFactory;
    constructor(DaoFactory: any);
    targetDate: Date;
    subN: number;
    addN: number;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
