import { CustomerItem } from "../service/model/CustomerItem";
export interface CustomerShowRule {
    calculateCompleteness(customerObj: any): any;
    sortCustomerList(customerList: Array<CustomerItem>): Array<CustomerItem>;
}
