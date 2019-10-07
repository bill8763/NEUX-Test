import { HttpClient } from "@angular/common/http";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
import { DeviceService } from "../device";
import { Observable } from "rxjs";
export declare class VersionCheckService {
    private httpService;
    private APIFactory;
    private dispatcher;
    private deviceService;
    private APP_CONFIG;
    constructor(httpService: HttpClient, APIFactory: APIFactory, dispatcher: APIDispatch, deviceService: DeviceService, APP_CONFIG: any);
    private appVersion;
    private platform;
    checkVersion(): Observable<any>;
}
