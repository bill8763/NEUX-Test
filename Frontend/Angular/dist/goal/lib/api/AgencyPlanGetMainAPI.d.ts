import { IMockAPI, IAPI, ISQLiteAPI, DaoFactory } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class AgencyPlanGetMainAPI implements IMockAPI, IAPI, ISQLiteAPI {
    private daoFactory;
    private _dataYear;
    setDataYear(dataYear: number): void;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
