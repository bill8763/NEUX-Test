import { Injectable } from "@angular/core";
import { DeviceService, INotificationAction } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";


@Injectable({
    providedIn: 'root'
})
export class VersionCheckMessageAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private deviceService: DeviceService
    ) {
        super();
    }

    onConfirm(data: any): boolean {
        console.log("VersionCheckMessageAction onConfirm");
        window.open(data.path, "_system");
        this.deviceService.exitApp();
        return true;
    }
}
