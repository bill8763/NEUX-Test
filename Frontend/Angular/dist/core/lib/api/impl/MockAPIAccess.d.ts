import { ErrorHandler } from '@angular/core';
import { IAPIAccess } from '../APIAccess.interface';
import { IAPI } from '../API.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class MockAPIAccess implements IAPIAccess {
    private httpService;
    private errorHandler;
    constructor(httpService: HttpClient, errorHandler: ErrorHandler);
    access(api: IAPI): Observable<any>;
}
