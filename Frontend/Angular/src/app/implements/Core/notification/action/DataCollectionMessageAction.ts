
import { DefaultConflictAction } from './DefaultConflictAction';
import { Injectable } from '@angular/core';
import { INotificationAction, DeviceService } from '@allianzSND/core';

@Injectable({
    providedIn: 'root'
})
export class DataCollectionMessageAction extends DefaultConflictAction implements INotificationAction {


    constructor(
        private deviceService: DeviceService
    ) {
        super();
    }

    public onConfirm(data: any): boolean {
        this.deviceService.setLocalStorage("AppFirstLaunch", "N");
        return true;
    }

    public onCancel(): boolean {
        this.deviceService.exitApp();
        return true;
    }

}