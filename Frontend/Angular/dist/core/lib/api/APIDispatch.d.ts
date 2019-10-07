import { IAPI } from './API.interface';
import { MockAPIAccess } from './impl/MockAPIAccess';
import { RestfulAPIAccess } from './impl/RestfulAPIAccess';
import { SQLiteAPIAccess } from './impl/SQLiteAPIAccess';
import { Observable } from 'rxjs';
import { ErrorHandler } from '@angular/core';
import { DeviceAPIAccess } from './impl/DeviceAPIAccess';
import { TimeoutService } from '../auth/timeout/timeout.service';
export declare class APIDispatch {
    private mockAPIAccess;
    private sqliteAPIAcces;
    private restfulAPIAccess;
    private deviceAPIAccess;
    private timeoutService;
    private errorHandler;
    private APP_CONFIG;
    constructor(mockAPIAccess: MockAPIAccess, sqliteAPIAcces: SQLiteAPIAccess, restfulAPIAccess: RestfulAPIAccess, deviceAPIAccess: DeviceAPIAccess, timeoutService: TimeoutService, errorHandler: ErrorHandler, APP_CONFIG: any);
    dispatch(api: IAPI): Observable<any>;
}
