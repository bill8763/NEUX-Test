import { IMockAPI, IAPI, ISQLiteAPI, DaoFactory } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class GoalSettingSetExpectedAPI implements IMockAPI, IAPI, ISQLiteAPI {
    private daoFactory;
    private _expectedRecruitment;
    private _indirectRecruitment;
    setExpectedRecruitment(expectedRecruitment: object): void;
    setIndirectRecruitment(indirectRecruitment: number): void;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
