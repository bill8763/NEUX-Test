import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
export declare class RouterMapAPI implements IAPI, IMockAPI {
    getAPIName(): string;
    getMockPath(): string;
}
