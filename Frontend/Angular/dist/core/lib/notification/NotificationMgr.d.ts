import { ErrorHandler, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { NotificationObject } from "./NotificationObject";
import { NotificationProvider } from "./NotificationProvider";
import { NotificationType } from "./INotificationProvider.interface";
export declare class NotificationMgr {
    private injector;
    private errorHandler;
    private notificationProvider;
    private DBMessage;
    private notificationList;
    private notificationSubject;
    constructor(injector: Injector, errorHandler: ErrorHandler, notificationProvider: NotificationProvider);
    init(): Promise<void>;
    getNotificationList(): Observable<Array<NotificationObject>>;
    pushNotification(type: NotificationType, data: any): void;
    popNotification(notification: NotificationObject): void;
    getUnreadMessageNumber(): number;
    popAllNotification(): void;
    showCategoryMessage(category?: string, type?: string): void;
    fetchMessageData(): Promise<void>;
    private getAPIFactory;
    private getAPIDispatch;
}
