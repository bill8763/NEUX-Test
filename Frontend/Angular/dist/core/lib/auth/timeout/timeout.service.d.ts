import { NgZone } from '@angular/core';
import { IAuthRoute } from '../AuthRoute.interface';
import { IAuthAction } from '../AuthAction.interface';
import { AuthObject } from '../AuthObject';
import { checkTimeout } from './checkTimeout.interface';
import { timeoutAction } from './timeoutAction.interface';
import { Observable } from 'rxjs';
export declare class TimeoutService implements IAuthRoute, IAuthAction {
    private APP_CONFIG;
    private timeoutCheck;
    private timeoutAction;
    private zone;
    private seconds;
    private reset_seconds;
    private reaminingSubject;
    private _interval;
    constructor(APP_CONFIG: any, timeoutCheck: checkTimeout, timeoutAction: timeoutAction, zone: NgZone);
    reset(): void;
    init(): void;
    clear(): void;
    authRoute(payload: AuthObject): AuthObject;
    authAction(payload: AuthObject): AuthObject;
    getTimeoutRemainingSecond(): Observable<number>;
    private isTimeout;
}
