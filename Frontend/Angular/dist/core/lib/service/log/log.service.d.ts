import { ErrorHandler } from "@angular/core";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { APIFactory } from "../../api/APIFactory";
import { APIDispatch } from "../../api/APIDispatch";
import { Observable } from "rxjs";
export declare class LogService {
    private DaoFactory;
    private APIFactory;
    private dispatcher;
    private errorHandler;
    constructor(DaoFactory: DaoFactory, APIFactory: APIFactory, dispatcher: APIDispatch, errorHandler: ErrorHandler);
    pushErrorLog(): Observable<any>;
    pushActionLog(): Observable<any>;
    private _pushErrorLog;
    private _pushActionLog;
}
