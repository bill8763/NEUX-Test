import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
export declare class CustomerUpdateFollowAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private _clientID;
    private _isFollow;
    constructor(daoFactory: DaoFactory);
    setClient(clientID: string): void;
    setIsFollow(isFollow: boolean): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
