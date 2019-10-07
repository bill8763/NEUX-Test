import { IAPI } from "../API.interface";
import { IRestfulAPI } from "../RestfulAPI.interface";
import { IMockAPI } from "../MockAPI.interface";
import { APIRequest } from "../APIRequest";
export declare class LogoutAPI implements IAPI, IRestfulAPI, IMockAPI {
    constructor();
    url: string;
    body: {};
    type: string;
    params: any;
    getAPIName(): string;
    getMockPath(): string;
    getRequestData(): APIRequest;
}
