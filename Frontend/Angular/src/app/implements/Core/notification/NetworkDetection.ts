import { Injectable } from "@angular/core";
import { NetworkChange, IDeviceDao, NotificationMgr, NotificationObject, VersionCheckService, NotificationType } from "@allianzSND/core";
import { v4 as uuid } from 'uuid';


@Injectable({
    providedIn: 'root'
})
export class NetworkDetection implements NetworkChange {

    private _dao: IDeviceDao;
    private offlinestamp: number = 0;

    constructor(
        private notificationMgr: NotificationMgr,
        private versionCheckService: VersionCheckService
    ) {

    }
    //Network change
    change(type, immediate = false) {
        console.log("network change:", type);
        console.log(type == 'offline');
        if (type == 'offline' && ((Date.now() - this.offlinestamp) > 5000 || immediate)) {
            this.offlinestamp = Date.now();
            this.notificationMgr.pushNotification(NotificationType.Offline, {});
        }
        else if (type == 'online') {
            // check for new version
            this.versionCheckService.checkVersion().subscribe((resp) => {
                if (resp.isSuccess) {
                    if (resp.newVersion) {
                        this.notificationMgr.pushNotification(NotificationType.NewVersion, {});
                    }
                }
            })
        }
    }

}