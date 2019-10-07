import { IFunctionSync, FUNC_STATE } from "./IFunctionSync";
import { ISyncAOP } from "./SyncAOP.interface";
import { APIFactory } from "../../api/APIFactory";
import { APIDispatch } from "../../api/APIDispatch";
export declare class ActualSync implements IFunctionSync {
    private apiFactory;
    private dispatcher;
    private PushAOP;
    private PullAOP;
    private state;
    constructor(apiFactory: APIFactory, dispatcher: APIDispatch, PushAOP?: ISyncAOP, PullAOP?: ISyncAOP);
    getState(): FUNC_STATE;
    getName(): string;
    getPushJson(frontendTime: any): Promise<any[]>;
    pullData(resp: any): Promise<any>;
    setState(state: FUNC_STATE): void;
    getSequentialIDNeeded(): Promise<number>;
    setSequentialID(ids: Array<string>): Promise<void>;
}
