import { IAPI, IMockAPI, ISQLiteAPI, DaoFactory, PageInfo, ProfileCodeService } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { CustomerFilterCriteria } from "../components/bean/customer-filter-criteria";
export declare class CustomerListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private profileCodeService;
    private _filterCriteria;
    private _pageInfo;
    private _queryClientID;
    constructor(daoFactory: DaoFactory, profileCodeService: ProfileCodeService);
    clientID: string;
    filterCriteria: CustomerFilterCriteria;
    pageInfo: PageInfo;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
