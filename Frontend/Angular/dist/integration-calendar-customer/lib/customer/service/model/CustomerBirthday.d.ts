export declare class CustomerBirthday {
    private _clientID;
    lastName: string;
    firstName: string;
    birthdayMonth: string;
    birthdayDate: string;
    constructor(clientID: string, firstName: string, lastName: string, birthdayMonth: string, birthdayDate: string);
    clone(): CustomerBirthday;
}
