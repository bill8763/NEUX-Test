import { CustomerImportDisplay } from '../../interface/CustomerImportDisplay';
export declare class DefaultCustomerImportDisplay implements CustomerImportDisplay {
    private customImportDisplay;
    constructor(customImportDisplay: CustomerImportDisplay);
    convert(customer: any): any;
}
