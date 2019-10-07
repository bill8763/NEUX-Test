import { APIDispatch, APIFactory, DeviceService } from '@allianzSND/core';
import { Observable } from 'rxjs';
export declare class SettingComponentService {
    private dispatcher;
    private APIFactory;
    private deviceService;
    constructor(dispatcher: APIDispatch, APIFactory: APIFactory, deviceService: DeviceService);
    getUpdateTimeList(): Observable<any>;
    unbindDevice(): Promise<any>;
}
