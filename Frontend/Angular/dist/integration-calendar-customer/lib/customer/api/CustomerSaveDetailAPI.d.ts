import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { CustomerUtils } from "../utils/customer-utils";
export declare class CustomerSaveDetailAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private customerUtils;
    private Data;
    constructor(daoFactory: DaoFactory, customerUtils: CustomerUtils);
    setDetail(detail: any): void;
    readonly customerDetail: any;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
    private _judgeIsAddressEmpty;
}
