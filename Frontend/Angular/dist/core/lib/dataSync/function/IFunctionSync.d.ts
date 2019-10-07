export interface IFunctionSync {
    getName(): string;
    getState(): FUNC_STATE;
    setState(state: FUNC_STATE): any;
    getPushJson(frontendTime: number): Promise<any>;
    pullData(data: any): Promise<any>;
    getSequentialIDNeeded(frontendTime: number): Promise<number>;
    setSequentialID(IdList: Array<string>): Promise<any>;
}
export declare enum FUNC_STATE {
    PENDING = 0,
    AVAILABLE = 1
}
