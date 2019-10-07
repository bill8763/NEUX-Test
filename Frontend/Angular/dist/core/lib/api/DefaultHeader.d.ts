import { HttpHeaders } from "@angular/common/http";
import { ILoginMgr } from "../auth/login/LoginMgr.interface";
import { RestHeader } from "./RestHeader.interface";
import { DeviceService } from "../device/device.service";
import { LoginTokenStore } from "../auth/login/LoginTokenStore";
export declare class defaultHeader implements RestHeader {
    private deviceService;
    private tokenStore;
    private customLoginMgr;
    private token;
    private version;
    constructor(deviceService: DeviceService, tokenStore: LoginTokenStore, customLoginMgr: ILoginMgr);
    getHeader(): HttpHeaders;
}
