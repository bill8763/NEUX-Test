import { DeviceService, NotificationMgr } from "@allianzSND/core";
export declare class NotificationUtils {
    private deviceService;
    private notificationMgr;
    constructor(deviceService: DeviceService, notificationMgr: NotificationMgr);
    checkNetworkBeforeAction(): boolean;
}
