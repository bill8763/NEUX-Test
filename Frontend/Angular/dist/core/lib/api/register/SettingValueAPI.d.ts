import { Observable } from 'rxjs';
import { IAPI } from '../API.interface';
import { IMockAPI } from '../MockAPI.interface';
import { ISQLiteAPI } from '../SQLiteAPI.interface';
import { TranslateService } from '../../language/translate.service';
import { DeviceService } from '../../device/device.service';
export declare class SettingValueAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _translateService;
    private _deviceService;
    constructor(translateService: TranslateService, deviceService: DeviceService);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
