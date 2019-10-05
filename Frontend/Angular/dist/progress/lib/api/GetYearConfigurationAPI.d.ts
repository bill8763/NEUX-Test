import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { DaoFactory } from '@allianzSND/core';
import { ISearchTableByField } from "@allianzSND/core";
export declare class GetYearConfigurationAPI implements IAPI, IMockAPI, ISQLiteAPI, ISearchTableByField {
    private _year;
    private _daoFactory;
    constructor(daoFactory: DaoFactory);
    SetYear(value: number): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
