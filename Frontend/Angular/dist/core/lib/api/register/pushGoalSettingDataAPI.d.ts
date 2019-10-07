import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
import { IMockAPI } from '../MockAPI.interface';
import { SubmitGoalData } from '../../bean';
export declare class pushGoalSettingDataAPI implements IAPI, IMockAPI, IRestfulAPI {
    url: string;
    mainData: SubmitGoalData;
    constructor();
    getAPIName(): string;
    getRequestData(): APIRequest;
    getMockPath(): string;
}
