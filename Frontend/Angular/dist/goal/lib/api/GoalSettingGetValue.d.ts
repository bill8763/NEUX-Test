import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class GoalSettingGetValueAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    constructor(daoFactory: DaoFactory);
    private _dataYear;
    setDataYear(dataYear: number): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
