/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { VersionCheckService } from '../../dataSync/version-check.service';
import { DataSyncService } from '../../dataSync/data-sync.service';
import { LogService } from '../../service/log/log.service';
import { ProfileCodeService } from '../../service/profile/profile-code.service';
import { NotificationMgr } from '../../notification/NotificationMgr';
import { NotificationType } from '../../notification/INotificationProvider.interface';
import { PushIDMgrToken } from '../../injectionToken/injection-token';
import { SettingService } from '../../service/setting/setting.service';
import * as i0 from "@angular/core";
import * as i1 from "../../dataSync/version-check.service";
import * as i2 from "../../dataSync/data-sync.service";
import * as i3 from "../../service/log/log.service";
import * as i4 from "../../service/profile/profile-code.service";
import * as i5 from "../../notification/NotificationMgr";
import * as i6 from "../../service/setting/setting.service";
import * as i7 from "../../injectionToken/injection-token";
export class DefaultLoadingApp {
    /**
     * @param {?} versionCheck
     * @param {?} syncService
     * @param {?} logService
     * @param {?} profileCodeService
     * @param {?} notificationMgr
     * @param {?} settingService
     * @param {?} pushIDMgr
     */
    constructor(versionCheck, syncService, logService, profileCodeService, notificationMgr, settingService, pushIDMgr) {
        this.versionCheck = versionCheck;
        this.syncService = syncService;
        this.logService = logService;
        this.profileCodeService = profileCodeService;
        this.notificationMgr = notificationMgr;
        this.settingService = settingService;
        this.pushIDMgr = pushIDMgr;
        this.loadedSubject = new Subject();
    }
    /**
     * @return {?}
     */
    loading() {
        this._loading();
    }
    /**
     * @return {?}
     */
    onLoaded() {
        return this.loadedSubject.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    _loading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.syncService.syncAllFunc(true);
            this.loadedSubject.next(50);
            yield this.profileCodeService._fetchCodeData().toPromise();
            this.loadedSubject.next(60);
            yield this.logService.pushActionLog().toPromise();
            this.loadedSubject.next(70);
            yield this.logService.pushErrorLog().toPromise();
            this.loadedSubject.next(80);
            yield this.notificationMgr.init();
            this.loadedSubject.next(85);
            yield this.settingService.deviceChange(this.pushIDMgr.getPushID());
            this.loadedSubject.next(88);
            //after sync finish ,check version
            /** @type {?} */
            let versionResp = yield this.versionCheck.checkVersion().toPromise();
            if (versionResp.isSuccess) {
                this.loadedSubject.next(95);
                if (versionResp.newVersion) {
                    this.notificationMgr.pushNotification(NotificationType.NewVersionLogin, versionResp.appVersion);
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.loadedSubject.next(100);
                    }), 800);
                }
            }
            else {
                console.log("Check version error!!");
                this.loadedSubject.next(100);
            }
        });
    }
}
DefaultLoadingApp.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultLoadingApp.ctorParameters = () => [
    { type: VersionCheckService },
    { type: DataSyncService },
    { type: LogService },
    { type: ProfileCodeService },
    { type: NotificationMgr },
    { type: SettingService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PushIDMgrToken,] }] }
];
/** @nocollapse */ DefaultLoadingApp.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoadingApp_Factory() { return new DefaultLoadingApp(i0.inject(i1.VersionCheckService), i0.inject(i2.DataSyncService), i0.inject(i3.LogService), i0.inject(i4.ProfileCodeService), i0.inject(i5.NotificationMgr), i0.inject(i6.SettingService), i0.inject(i7.PushIDMgrToken, 8)); }, token: DefaultLoadingApp, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.loadedSubject;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.versionCheck;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.syncService;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.logService;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    DefaultLoadingApp.prototype.pushIDMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvYWRpbmdBcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbG9naW4vRGVmYXVsdExvYWRpbmdBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7QUFNdkUsTUFBTTs7Ozs7Ozs7OztJQUNGLFlBQ1ksWUFBaUMsRUFDakMsV0FBNEIsRUFDNUIsVUFBc0IsRUFDdEIsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLGNBQThCLEVBQ00sU0FBb0I7UUFOeEQsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNNLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRWEsUUFBUTs7WUFDbEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O2dCQUV4QixXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNwRSxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbkc7cUJBQ0k7b0JBQ0QsVUFBVTs7O29CQUFDLEdBQUcsRUFBRTt3QkFDWixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNYO2FBQ0o7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztRQUNMLENBQUM7S0FBQTs7O1lBdERKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBYlEsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGVBQWU7WUFJZixjQUFjOzRDQWNkLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7Ozs7SUFJdEMsMENBQXVDOzs7OztJQVZuQyx5Q0FBeUM7Ozs7O0lBQ3pDLHdDQUFvQzs7Ozs7SUFDcEMsdUNBQThCOzs7OztJQUM5QiwrQ0FBOEM7Ozs7O0lBQzlDLDRDQUF3Qzs7Ozs7SUFDeEMsMkNBQXNDOzs7OztJQUN0QyxzQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2FkaW5nQXBwIH0gZnJvbSAnLi9Mb2FkaW5nQXBwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBWZXJzaW9uQ2hlY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGF0YVN5bmMvdmVyc2lvbi1jaGVjay5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTeW5jU2VydmljZSB9IGZyb20gJy4uLy4uL2RhdGFTeW5jL2RhdGEtc3luYy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2xvZy9sb2cuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2ZpbGUvcHJvZmlsZS1jb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTWdyIH0gZnJvbSAnLi4vLi4vbm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbk1ncic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vbm90aWZpY2F0aW9uL0lOb3RpZmljYXRpb25Qcm92aWRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUHVzaElETWdyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgUHVzaElETWdyIH0gZnJvbSAnLi9QdXNoSURNZ3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zZXR0aW5nL3NldHRpbmcuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0TG9hZGluZ0FwcCBpbXBsZW1lbnRzIExvYWRpbmdBcHAge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHZlcnNpb25DaGVjazogVmVyc2lvbkNoZWNrU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzeW5jU2VydmljZTogRGF0YVN5bmNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uTWdyOiBOb3RpZmljYXRpb25NZ3IsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFB1c2hJRE1nclRva2VuKSBwcml2YXRlIHB1c2hJRE1ncjogUHVzaElETWdyXG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZGVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkZWRTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj47XG4gICAgbG9hZGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZygpO1xuICAgIH1cblxuICAgIG9uTG9hZGVkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZGluZygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU2VydmljZS5zeW5jQWxsRnVuYyh0cnVlKTtcbiAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoNTApO1xuICAgICAgICBhd2FpdCB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5fZmV0Y2hDb2RlRGF0YSgpLnRvUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCg2MCk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9nU2VydmljZS5wdXNoQWN0aW9uTG9nKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDcwKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2dTZXJ2aWNlLnB1c2hFcnJvckxvZygpLnRvUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCg4MCk7XG4gICAgICAgIGF3YWl0IHRoaXMubm90aWZpY2F0aW9uTWdyLmluaXQoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoODUpO1xuICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdTZXJ2aWNlLmRldmljZUNoYW5nZSh0aGlzLnB1c2hJRE1nci5nZXRQdXNoSUQoKSk7XG4gICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDg4KTtcbiAgICAgICAgLy9hZnRlciBzeW5jIGZpbmlzaCAsY2hlY2sgdmVyc2lvblxuICAgICAgICBsZXQgdmVyc2lvblJlc3AgPSBhd2FpdCB0aGlzLnZlcnNpb25DaGVjay5jaGVja1ZlcnNpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgaWYgKHZlcnNpb25SZXNwLmlzU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoOTUpO1xuICAgICAgICAgICAgaWYgKHZlcnNpb25SZXNwLm5ld1ZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1nci5wdXNoTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvblR5cGUuTmV3VmVyc2lvbkxvZ2luLCB2ZXJzaW9uUmVzcC5hcHBWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCgxMDApO1xuICAgICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNrIHZlcnNpb24gZXJyb3IhIVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxufSJdfQ==