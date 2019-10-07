import { ErrorHandler } from '@angular/core';
import { IAPIAccess } from '../APIAccess.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { HttpClient } from '@angular/common/http';
import { RestHeader } from '../RestHeader.interface';
import { Observable } from 'rxjs';
import { DeviceService } from '../../device/device.service';
import { defaultHeader } from '../DefaultHeader';
import { NotificationMgr } from '../../notification/NotificationMgr';
export declare class RestfulAPIAccess implements IAPIAccess {
    private httpService;
    private APP_CONFIG;
    private deviceService;
    private errorHandler;
    private defaultHeader;
    private notificationMgr;
    private customHeader;
    constructor(httpService: HttpClient, APP_CONFIG: any, deviceService: DeviceService, errorHandler: ErrorHandler, defaultHeader: defaultHeader, notificationMgr: NotificationMgr, customHeader: RestHeader);
    access(api: IRestfulAPI): Observable<any>;
    private handleHTTPError;
    private getHeader;
    private isCustomHeaderAPI;
}
