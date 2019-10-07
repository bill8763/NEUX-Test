import { Observable } from "rxjs";
import { CustomerItem } from "../model/CustomerItem";
import { CustomerFilterCriteria } from "../../components/bean/customer-filter-criteria";
export declare class CustomerStoreService {
    private _stateBehaviorSubject;
    private _detailBehaviorSubject;
    private _listBehaviorSubject;
    private _criteriaBehaviorSubject;
    private _detailIDSubject;
    private _customerState;
    private _customerDetail;
    private _customerList;
    private _customerCriteria;
    constructor();
    setState(state: CUSTOMER_STATE): void;
    getState(): Observable<CUSTOMER_STATE>;
    setCurrentCustomerDetail(detail: any): void;
    getCurrentCustomerDetail(): Observable<any>;
    setCustomerList(list: Array<CustomerItem>): void;
    getCustomerList(): Observable<Array<CustomerItem>>;
    setCriteria(criteria: CustomerFilterCriteria): void;
    getCriteria(): Observable<CustomerFilterCriteria>;
    getCustomerDetailID(): Observable<string>;
}
export declare enum CUSTOMER_STATE {
    IMPORT = "import",
    DISPLAY = "display",
    EDIT = "edit",
    ADD_SAVED = "add saved",
    EDIT_SAVED = "edit saved",
    FIRST = "first"
}
