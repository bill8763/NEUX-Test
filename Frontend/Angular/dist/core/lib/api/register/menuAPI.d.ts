import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
export declare class MenuAPI implements IAPI, IMockAPI {
    getAPIName(): string;
    getMockPath(): string;
}
