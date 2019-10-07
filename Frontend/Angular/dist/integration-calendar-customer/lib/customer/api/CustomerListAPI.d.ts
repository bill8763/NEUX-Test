import { IAPI, IMockAPI, ISQLiteAPI, DaoFactory, IRestriction, PageInfo, ProfileCodeService } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private profileCodeService;
    private _restrictions;
    private _pageInfo;
    private _queryClientID;
    constructor(daoFactory: DaoFactory, profileCodeService: ProfileCodeService);
    clientID: string;
    restrictions: Array<IRestriction>;
    pageInfo: PageInfo;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
