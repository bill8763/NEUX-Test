import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
import { PageInfo } from '../../utils/pageInfo';
export declare class DashboardGetMessageListAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    constructor(daoFactory: DaoFactory);
    private _keyword;
    private _pageInfo;
    private _isPopup;
    private _isShow;
    isShow: boolean;
    setKeyword(keyword: string): void;
    setPageInfo(pageInfo: PageInfo): void;
    setIsPopup(val: boolean): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
