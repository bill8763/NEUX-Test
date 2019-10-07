import { IAPI } from './API.interface';
export declare class APIFactory {
    private errorHandler;
    private apiMap;
    private constructor();
    registerAPI(api: IAPI): void;
    unRegisterAPI(api: IAPI): void;
    getAPI(apiName: string): IAPI;
}
