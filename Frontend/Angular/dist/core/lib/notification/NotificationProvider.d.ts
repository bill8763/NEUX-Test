import { Injector } from "@angular/core";
import { INotificationProvider, NotificationType } from "./INotificationProvider.interface";
import { NotificationObject } from "./NotificationObject";
export declare class NotificationProvider implements INotificationProvider {
    private injector;
    private customNotificationProvider;
    constructor(injector: Injector, customNotificationProvider: INotificationProvider);
    private actionMap;
    getNotificationObject(type: NotificationType, data: any, id?: string): NotificationObject;
    private getAction;
}
