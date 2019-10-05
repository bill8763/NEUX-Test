import { NotificationObject } from "@allianzSND/core";

export class DefaultConflictAction {

    onConfirm(data: any): boolean {
        return true;
    }

    onCancel(data: any): boolean {
        return true;
    }

    onConflict(prev: Array<NotificationObject>, current: NotificationObject): Array<NotificationObject> {
        return [...prev, current];
    }
}