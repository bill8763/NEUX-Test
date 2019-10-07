import { Observable } from "rxjs";
export interface IDeviceDao {
    searchcontactsByName(name: string): Observable<any>;
    registerNotfiy(): Promise<any>;
    onNotifyTokenRefresh(callback: (token: string) => void): void;
    onNotificationOpen(callback: (notify: any) => void): void;
    subscribeSubject(subject: string): void;
    unsubscribeSubject(subject: string): void;
}
