import { NotificationObject } from "./NotificationObject";
export interface INotificationAction {
    onConfirm(data: any): boolean;
    onCancel(data: any): boolean;
    onConflict(prev: Array<NotificationObject>, current: NotificationObject): Array<NotificationObject>;
}
