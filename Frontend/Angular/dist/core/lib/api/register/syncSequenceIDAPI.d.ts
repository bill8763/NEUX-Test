import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
export declare class syncSequenceIDAPI implements IAPI, IRestfulAPI {
    num: number;
    type: string;
    constructor();
    getAPIName(): string;
    getRequestData(): APIRequest;
}
