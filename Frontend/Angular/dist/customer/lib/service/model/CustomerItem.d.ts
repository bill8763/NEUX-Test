export declare class CustomerItem {
    private _clientID;
    private _firstName;
    private _lastName;
    private _showName;
    private _tag;
    private _complementPercent;
    private _isFollow;
    private _isOtherSource;
    private _isHighlight;
    constructor(clientID: string, firstName: string, lastName: string, possibility: string, complementPercent: number, isFollow: boolean, isOtherSource: boolean, isOverTimeAlert: string);
    isOtherSource: boolean;
    isFollow: boolean;
    clientID: string;
    firstName: string;
    lastName: string;
    tag: string;
    complementPercent: number;
    readonly isHighlight: boolean;
    isHighLight: boolean;
    showName: string;
}
