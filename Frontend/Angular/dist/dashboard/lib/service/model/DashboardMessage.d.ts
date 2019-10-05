export declare class DashboardMessage {
    private _clientID;
    private _messageID;
    private _messageCategory;
    private _messageType;
    private _title;
    private _description;
    private _argument;
    private _status;
    private _messageDate;
    private _messageTime;
    private _isPopup;
    private _linkStatus;
    private _isClick;
    constructor(clientID: any, messageID: any, messageCatogory: any, messageType: any, title: any, description: any, argument: any, status: any, messageDate: any, messageTime: any, isPopup: any, linkStatus: any, isClick: any);
    readonly clientID: string;
    messageID: number;
    messageCategory: string;
    messageType: string;
    title: string;
    description: string;
    argument: string;
    status: string;
    messageDate: string;
    messageTime: string;
    isPopup: string;
    linkStatus: string;
    isClick: string;
}
