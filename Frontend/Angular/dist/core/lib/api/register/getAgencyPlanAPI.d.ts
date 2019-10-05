import { IAPI } from '../API.interface';
import { IRestfulAPI } from '../RestfulAPI.interface';
import { APIRequest } from '../APIRequest';
import { IMockAPI } from '../MockAPI.interface';
export declare class getAgencyPlanAPI implements IAPI, IRestfulAPI, IMockAPI {
    private APP_CONFIG;
    constructor(APP_CONFIG: any);
    private agentID;
    url: string;
    lastUpdateTime: string;
    setAgentID(agent_id: string): void;
    getMockPath(): string;
    getAPIName(): string;
    getRequestData(): APIRequest;
}
