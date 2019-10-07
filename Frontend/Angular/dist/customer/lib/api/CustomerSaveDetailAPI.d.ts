import { IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { CustomerDetail } from "../service/model/CustomerDetail";
import { CustomerUtils } from "../utils/customer-utils";
export declare class CustomerSaveDetailAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private customerUtils;
    private customerDetail;
    constructor(daoFactory: DaoFactory, customerUtils: CustomerUtils);
    setDetail(detail: CustomerDetail): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
