import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';
import { APIFactory, APIDispatch } from '@allianzSND/core';
export declare class MenuService {
    private APIFactory;
    private dispatcher;
    private errorHandler;
    private _lastUpdateTime;
    private _lastUpdateTimeSubject;
    constructor(APIFactory: APIFactory, dispatcher: APIDispatch, errorHandler: ErrorHandler);
    refreshUpdateTime(func: string): Promise<void>;
    getLastUpdateTime(): Observable<Date>;
    private _getLastUpdateTimeFromDB;
    private convertPageIDtoFunc;
}
