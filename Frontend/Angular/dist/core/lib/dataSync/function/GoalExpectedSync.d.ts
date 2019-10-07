import { IFunctionSync, FUNC_STATE } from "./IFunctionSync";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { ISyncAOP } from "./SyncAOP.interface";
export declare class GoalExpectedSync implements IFunctionSync {
    private DaoFactory;
    private PushAOP;
    private PullAOP;
    private state;
    constructor(DaoFactory: DaoFactory, PushAOP?: ISyncAOP, PullAOP?: ISyncAOP);
    getName(): string;
    getState(): FUNC_STATE;
    setState(state: FUNC_STATE): void;
    getPushJson(frontendTime: number): Promise<any>;
    pullData(resp: any): Promise<any>;
    getSequentialIDNeeded(): Promise<number>;
    setSequentialID(ids: Array<string>): Promise<void>;
    private getPushData;
}
