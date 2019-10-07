import { IAPI, IMockAPI, DaoFactory } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from "rxjs";
export declare class CustomerDetailAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _id;
    constructor(daoFactory: DaoFactory);
    id: string;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
