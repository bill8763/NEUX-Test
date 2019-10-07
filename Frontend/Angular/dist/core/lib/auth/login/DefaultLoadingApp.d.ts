import { Observable } from 'rxjs';
import { LoadingApp } from './LoadingApp.interface';
import { VersionCheckService } from '../../dataSync/version-check.service';
import { DataSyncService } from '../../dataSync/data-sync.service';
import { LogService } from '../../service/log/log.service';
import { ProfileCodeService } from '../../service/profile/profile-code.service';
import { NotificationMgr } from '../../notification/NotificationMgr';
import { PushIDMgr } from './PushIDMgr.interface';
import { SettingService } from '../../service/setting/setting.service';
export declare class DefaultLoadingApp implements LoadingApp {
    private versionCheck;
    private syncService;
    private logService;
    private profileCodeService;
    private notificationMgr;
    private settingService;
    private pushIDMgr;
    constructor(versionCheck: VersionCheckService, syncService: DataSyncService, logService: LogService, profileCodeService: ProfileCodeService, notificationMgr: NotificationMgr, settingService: SettingService, pushIDMgr: PushIDMgr);
    private loadedSubject;
    loading(): void;
    onLoaded(): Observable<number>;
    private _loading;
}
