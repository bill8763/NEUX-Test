import { IFunctionSync, FUNC_STATE } from "./IFunctionSync";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { ISyncAOP } from "./SyncAOP.interface";
export declare class CustomerSync implements IFunctionSync {
    private DaoFactory;
    private PushAOP;
    private PullAOP;
    private state;
    private tmpPushData;
    constructor(DaoFactory: DaoFactory, PushAOP?: ISyncAOP, PullAOP?: ISyncAOP);
    getState(): FUNC_STATE;
    getName(): string;
    getPushJson(frontendTime: any): Promise<any[]>;
    pullData(resp: any): Promise<any>;
    setState(state: FUNC_STATE): void;
    getSequentialIDNeeded(frontendTime: number): Promise<number>;
    setSequentialID(ids: Array<string>): Promise<void>;
    private getPushData;
}
