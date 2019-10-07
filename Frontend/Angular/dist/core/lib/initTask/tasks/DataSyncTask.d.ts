import { ErrorHandler } from "@angular/core";
import { IInitTask } from "../interface/InitialTask.interface";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { IregisterDataSyncFunc } from "../interface/registerDataSyncFunc.interface";
export declare class DataSyncTask implements IInitTask {
    private errorHandler;
    private DaoFactory;
    private registerDataSyncFunc;
    constructor(errorHandler: ErrorHandler, DaoFactory: DaoFactory, registerDataSyncFunc: IregisterDataSyncFunc);
    doTask(): Promise<any>;
    refreshSchema(): Promise<void>;
    private createTable;
    private runSql;
    createProfileTableCommand(): Array<string>;
    createMainTableCommand(): Array<string>;
}
