import { Address } from "./Address";
import { Phone } from "./Phone";
export declare class ContactItem {
    private _firstname;
    private _lastname;
    private _phones;
    private _emails;
    private _address;
    private _birthday;
    _isCheck: boolean;
    _isShow: boolean;
    constructor(firstname: any, lastname: any, birthday: any, phones: any, emails: any, address: any);
    Birthday: Date;
    isCheck: boolean;
    isShow: boolean;
    FirstName: string;
    LastName: string;
    tel: Array<Phone>;
    email: Array<string>;
    address: Array<Address>;
    readonly fullname: string;
}
