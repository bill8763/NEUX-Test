import { CustomerItem } from './CustomerItem';
export declare class CustomerList {
    private _customerList;
    readonly length: number;
    constructor();
    customerList: Array<CustomerItem>;
    addCustomerItem(customerEvent: CustomerItem): void;
}
