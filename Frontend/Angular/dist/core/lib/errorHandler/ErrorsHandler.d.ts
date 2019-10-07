import { ErrorHandler, Injector } from '@angular/core';
import { APIFactory } from '../api/APIFactory';
import { APIDispatch } from '../api/APIDispatch';
import { DeviceService } from '../device/device.service';
import { SettingService } from '../service/setting/setting.service';
export declare class ErrorsHandler implements ErrorHandler {
    private APIFactory;
    private dispatcher;
    private deviceService;
    private settingService;
    private injector;
    private APP_CONFIG;
    private isDebug;
    constructor(APIFactory: APIFactory, dispatcher: APIDispatch, deviceService: DeviceService, settingService: SettingService, injector: Injector, APP_CONFIG: any);
    handleError(error: Error): Promise<void>;
    private getAPIFactory;
    private getAPIDispatcher;
}
