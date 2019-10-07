import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
import { IRestfulAPI } from "../RestfulAPI.interface";
import { APIRequest } from "../APIRequest";
export declare class UnbindDeviceAPI implements IAPI, IMockAPI, IRestfulAPI {
    private APP_CONFIG;
    constructor(APP_CONFIG: any);
    private _deviceID;
    setDeviceID(deviceID: string): void;
    getAPIName(): string;
    getMockPath(): string;
    getRequestData(): APIRequest;
}
