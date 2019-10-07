import { IAPI, DaoFactory } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class GoalSettingGetPlanAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _dataYear;
    constructor(daoFactory: DaoFactory);
    setDataYear(year: number): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
