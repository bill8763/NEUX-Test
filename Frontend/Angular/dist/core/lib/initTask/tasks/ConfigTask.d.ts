import { IInitTask } from '../interface/InitialTask.interface';
import { TranslateService } from '../../language/translate.service';
import { DeviceService } from '../../device/device.service';
import { CheckPermissionService } from '../../auth/permission/check-permission.service';
import { fetchSettingFinish } from '../interface/fetchSettingFinish.interface';
import { SettingService } from '../../service/setting/setting.service';
import { changeFontSize } from '../../interface/changeFontSize.interface';
import { IFontSizeAccess } from '../../interface';
import { AppRouter } from '../../route/AppRouter';
import { NotificationMgr } from '../../notification/NotificationMgr';
export declare class ConfigTask implements IInitTask {
    private translateService;
    private deviceService;
    private settingService;
    private appRouter;
    private notificationMgr;
    private APP_CONFIG;
    private fetchSettingFinish;
    private changeFontSize;
    private fontSizeAccess;
    private checkPermissionService;
    constructor(translateService: TranslateService, deviceService: DeviceService, settingService: SettingService, appRouter: AppRouter, notificationMgr: NotificationMgr, APP_CONFIG: any, fetchSettingFinish: fetchSettingFinish, changeFontSize: changeFontSize, fontSizeAccess: IFontSizeAccess, checkPermissionService: CheckPermissionService);
    doTask(): Promise<any>;
    private fetchLanguage;
    private fetchLanguageList;
    private integrationCheck;
    private fetchSetting;
    private loadLanguageFile;
}
