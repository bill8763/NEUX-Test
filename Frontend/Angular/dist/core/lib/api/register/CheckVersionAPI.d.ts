import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
import { IRestfulAPI } from "../RestfulAPI.interface";
import { APIRequest } from "../APIRequest";
export declare class CheckVersionAPI implements IAPI, IMockAPI, IRestfulAPI {
    constructor();
    version: string;
    DeviceSystem: string;
    getAPIName(): string;
    getRequestData(): APIRequest;
    getMockPath(): string;
}
