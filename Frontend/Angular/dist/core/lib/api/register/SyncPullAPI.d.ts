import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
export declare class SyncPullAPI implements IAPI, IRestfulAPI {
    url: string;
    body: {};
    lastUpdateTime: string;
    constructor();
    getAPIName(): string;
    getRequestData(): APIRequest;
}
