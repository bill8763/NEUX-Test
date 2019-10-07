export declare class CustomerAddress {
    clientID: string;
    addressType: string;
    country: string;
    city: string;
    area: string;
    zipcode: string;
    address: string;
    dataSource: string;
    constructor(clientID: string, addressType: string, country: string, city: string, area: string, zipcode: string, address: string, dataSorce: string);
    toFullAddress(): string;
    isEmpty(): boolean;
}
