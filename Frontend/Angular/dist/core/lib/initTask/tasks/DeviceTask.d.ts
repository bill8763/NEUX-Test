import { ErrorHandler } from '@angular/core';
import { IInitTask } from '../interface/InitialTask.interface';
import { DeviceService } from '../../device/device.service';
import { checkRoot } from '../interface/checkRoot.interface';
import { NetworkChange } from '../../device/NetworkChange.interface';
export declare class DeviceTask implements IInitTask {
    private deviceService;
    private errorHandler;
    private customCheckRoot;
    private networkChange;
    constructor(deviceService: DeviceService, errorHandler: ErrorHandler, customCheckRoot: checkRoot, networkChange: NetworkChange);
    doTask(): Promise<any>;
}
