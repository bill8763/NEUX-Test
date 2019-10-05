export declare class CustomerContactNote {
    private clientID;
    name: string;
    date: Date;
    noteMessage: string;
    constructor(clientID: string, date: Date, noteMessage: string);
    getClientID(): string;
}
