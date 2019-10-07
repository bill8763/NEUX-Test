import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
import { IMockAPI } from '../MockAPI.interface';
export declare class PushActionLogAPI implements IAPI, IMockAPI, IRestfulAPI {
    url: string;
    actionList: Array<any>;
    constructor();
    getAPIName(): string;
    getRequestData(): APIRequest;
    getMockPath(): string;
}
