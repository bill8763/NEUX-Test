import { Observable } from "rxjs";
import { CustomerDetail } from "../service/model/CustomerDetail";
import { CustomerItem } from '../service/model/CustomerItem';
import { CustomerFilterCriteria } from "../components/bean/customer-filter-criteria";
export interface storeCustomer {
    setState(state: CUSTOMER_STATE): void;
    getState(): Observable<CUSTOMER_STATE>;
    setCurrentCustomerDetail(detail: CustomerDetail): void;
    getCurrentCustomerDetail(): Observable<CustomerDetail>;
    setCustomerList(list: Array<CustomerItem>): void;
    getCustomerList(): Observable<Array<CustomerItem>>;
    setCriteria(criteria: CustomerFilterCriteria): void;
    getCriteria(): Observable<CustomerFilterCriteria>;
}
export declare enum CUSTOMER_STATE {
    DISPLAY = "display",
    EDIT = "edit",
    ADD_SAVED = "add saved",
    EDIT_SAVED = "edit saved",
    FIRST = "first"
}
