import { Injector } from '@angular/core';
import { APIDispatch } from '../../api/APIDispatch';
import { APIFactory } from '../../api/APIFactory';
import { Observable } from 'rxjs';
import { Setting } from '../../bean/Setting';
import { DeviceService } from '../../device';
export declare class SettingService {
    private injector;
    private static settingMap;
    private _debugMode;
    private _debugSubject;
    constructor(injector: Injector);
    _fetchCodeData(): any;
    getSetting(settingID: string): Setting;
    updateSetting(setting: Setting): any;
    setDebugMode(val: boolean): void;
    getDebugMode(): Observable<boolean>;
    getAPIFactory(): APIFactory;
    getAPIDispatch(): APIDispatch;
    getDeviceService(): DeviceService;
    deviceChange(token: string): Promise<void>;
}
