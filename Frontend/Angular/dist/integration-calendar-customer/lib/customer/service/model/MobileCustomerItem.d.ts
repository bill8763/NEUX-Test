export declare class MobileCustomerItem {
    private lastName;
    private firstName;
    private phoneNumber;
    private email;
    private address;
    private birthday;
    constructor(lastName: string, firstName: string, phoneNumber: Array<{
        id: number;
        text: string;
    }>, email: Array<string>, address: Array<{
        id: number;
        city: string;
        area: string;
        code: number;
        address: string;
    }>, birthday: string);
}
