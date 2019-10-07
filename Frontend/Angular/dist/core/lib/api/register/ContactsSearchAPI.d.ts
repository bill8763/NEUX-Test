import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
import { IDeviceAPI } from "../DeviceAPI.interface";
import { Observable } from "rxjs";
import { DeviceFactory } from "../../device/DeviceFactory";
export declare class ContactsSearchAPI implements IAPI, IMockAPI, IDeviceAPI {
    private deviceFactory;
    constructor(deviceFactory: DeviceFactory);
    getAPIName(): string;
    getMockPath(): string;
    runDeviceAPI(): Observable<any>;
}
