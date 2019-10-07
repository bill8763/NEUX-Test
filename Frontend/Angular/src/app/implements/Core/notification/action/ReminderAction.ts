import { Injectable } from "@angular/core";
import { INotificationAction, AppRouter, NotificationObject } from "@allianzSND/core";


@Injectable({
    providedIn: 'root'
})
export class ReminderAction implements INotificationAction {
    onCancel(data: any): boolean {
        return true;
    }

    onConflict(prev: NotificationObject[], current: NotificationObject): NotificationObject[] {
        if (prev.length > 0) {
            let prevObj = prev[0];
            prevObj.data.calendars = [...prevObj.data.calendars, ...current.data.calendars];
            prevObj.data.calendars.sort((a, b) => b.start - a.start);
            return [prevObj];
        }
        else {
            return [current];
        }
    }

    onConfirm(data: any): boolean {
        return true;
    }
}