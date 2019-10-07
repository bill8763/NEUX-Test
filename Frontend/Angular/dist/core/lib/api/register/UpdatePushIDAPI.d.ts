import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
import { IMockAPI } from '../MockAPI.interface';
export declare class UpdatePushIDAPI implements IAPI, IMockAPI, IRestfulAPI {
    body: {};
    constructor();
    getAPIName(): string;
    getMockPath(): string;
    getRequestData(): APIRequest;
}
