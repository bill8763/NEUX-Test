import { INotificationAction } from './INotificationAction.interface';
export declare class NotificationObject {
    constructor();
    private _category;
    category: string;
    private _type;
    type: string;
    private _id;
    id: string;
    private _data;
    data: any;
    private _order;
    order: number;
    private _action;
    action: INotificationAction;
}
