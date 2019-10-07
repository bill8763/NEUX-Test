import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { CustomerFilterCriteria } from "../components/bean/customer-filter-criteria";
export declare class CustomerSavePresetAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _criteria;
    constructor(daoFactory: DaoFactory);
    setFilterCriteria(criteria: CustomerFilterCriteria): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
