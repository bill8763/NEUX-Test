import { ErrorHandler } from '@angular/core';
import { IInitTask } from './interface/InitialTask.interface';
import { DataSyncTask } from './tasks/DataSyncTask';
import { ConfigTask } from './tasks/ConfigTask';
import { DeviceTask } from './tasks/DeviceTask';
import { RegisterAPITask } from './tasks/RegisterAPITask';
import { initialFinish } from './interface/initialFinish.interface';
export declare class InitialService {
    private errorHandler;
    private dataSyncTask;
    private configTask;
    private deviceTask;
    private registerAPITask;
    private customRegisterAPITask;
    private customTask;
    private initialFinish;
    _sequentialTasks: any[];
    _parallelTasks: any[];
    constructor(errorHandler: ErrorHandler, dataSyncTask: DataSyncTask, configTask: ConfigTask, deviceTask: DeviceTask, registerAPITask: RegisterAPITask, customRegisterAPITask: IInitTask, customTask: IInitTask, initialFinish: initialFinish);
    load(): Promise<any>;
    waitnseconds(second: any): Promise<any>;
}
