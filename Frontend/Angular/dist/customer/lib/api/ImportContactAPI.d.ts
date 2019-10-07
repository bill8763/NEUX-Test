import { ContactItem, IAPI, IMockAPI, DaoFactory, ISQLiteAPI } from "@allianzSND/core";
import { Observable } from "rxjs";
import { CustomerUtils } from "../utils/customer-utils";
export declare class ImportContactAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private daoFactory;
    private customerUtils;
    private items;
    setItems(items: Array<ContactItem>): void;
    constructor(daoFactory: DaoFactory, customerUtils: CustomerUtils);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
