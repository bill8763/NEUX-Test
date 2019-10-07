import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
export declare class MetaConfigAPI implements IAPI, IMockAPI {
    private _configName;
    configName: string;
    getAPIName(): string;
    getMockPath(): string;
}
