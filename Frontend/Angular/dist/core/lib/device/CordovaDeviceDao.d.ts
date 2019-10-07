import { IDeviceDao } from "./DeviceDao.interface";
import { Observable } from "rxjs";
export declare class CordovaDeviceDao implements IDeviceDao {
    constructor();
    searchcontactsByName(name: string): Observable<any>;
    private convertAddress;
    registerNotfiy(): Promise<any>;
    onNotifyTokenRefresh(callback: any): void;
    onNotificationOpen(callback: any): void;
    subscribeSubject(subject: string): void;
    unsubscribeSubject(subject: string): void;
    private checkNotifyPermission;
    private getFirbaseToken;
    private waitnseconds;
}
