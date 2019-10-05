import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
export declare class SyncPushAPI implements IAPI, IRestfulAPI {
    url: string;
    body: {};
    async: Boolean;
    constructor();
    getAPIName(): string;
    getRequestData(): APIRequest;
}
