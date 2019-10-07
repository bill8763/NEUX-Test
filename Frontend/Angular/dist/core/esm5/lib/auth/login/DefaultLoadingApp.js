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
var DefaultLoadingApp = /** @class */ (function () {
    function DefaultLoadingApp(versionCheck, syncService, logService, profileCodeService, notificationMgr, settingService, pushIDMgr) {
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
    DefaultLoadingApp.prototype.loading = /**
     * @return {?}
     */
    function () {
        this._loading();
    };
    /**
     * @return {?}
     */
    DefaultLoadingApp.prototype.onLoaded = /**
     * @return {?}
     */
    function () {
        return this.loadedSubject.asObservable();
    };
    /**
     * @private
     * @return {?}
     */
    DefaultLoadingApp.prototype._loading = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var versionResp;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.syncService.syncAllFunc(true)];
                    case 1:
                        _a.sent();
                        this.loadedSubject.next(50);
                        return [4 /*yield*/, this.profileCodeService._fetchCodeData().toPromise()];
                    case 2:
                        _a.sent();
                        this.loadedSubject.next(60);
                        return [4 /*yield*/, this.logService.pushActionLog().toPromise()];
                    case 3:
                        _a.sent();
                        this.loadedSubject.next(70);
                        return [4 /*yield*/, this.logService.pushErrorLog().toPromise()];
                    case 4:
                        _a.sent();
                        this.loadedSubject.next(80);
                        return [4 /*yield*/, this.notificationMgr.init()];
                    case 5:
                        _a.sent();
                        this.loadedSubject.next(85);
                        return [4 /*yield*/, this.settingService.deviceChange(this.pushIDMgr.getPushID())];
                    case 6:
                        _a.sent();
                        this.loadedSubject.next(88);
                        //after sync finish ,check version
                        return [4 /*yield*/, this.versionCheck.checkVersion().toPromise()];
                    case 7:
                        versionResp = _a.sent();
                        if (versionResp.isSuccess) {
                            this.loadedSubject.next(95);
                            if (versionResp.newVersion) {
                                this.notificationMgr.pushNotification(NotificationType.NewVersionLogin, versionResp.appVersion);
                            }
                            else {
                                setTimeout((/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.loadedSubject.next(100);
                                }), 800);
                            }
                        }
                        else {
                            console.log("Check version error!!");
                            this.loadedSubject.next(100);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DefaultLoadingApp.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DefaultLoadingApp.ctorParameters = function () { return [
        { type: VersionCheckService },
        { type: DataSyncService },
        { type: LogService },
        { type: ProfileCodeService },
        { type: NotificationMgr },
        { type: SettingService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PushIDMgrToken,] }] }
    ]; };
    /** @nocollapse */ DefaultLoadingApp.ngInjectableDef = i0.defineInjectable({ factory: function DefaultLoadingApp_Factory() { return new DefaultLoadingApp(i0.inject(i1.VersionCheckService), i0.inject(i2.DataSyncService), i0.inject(i3.LogService), i0.inject(i4.ProfileCodeService), i0.inject(i5.NotificationMgr), i0.inject(i6.SettingService), i0.inject(i7.PushIDMgrToken, 8)); }, token: DefaultLoadingApp, providedIn: "root" });
    return DefaultLoadingApp;
}());
export { DefaultLoadingApp };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdExvYWRpbmdBcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbG9naW4vRGVmYXVsdExvYWRpbmdBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7QUFHdkU7SUFJSSwyQkFDWSxZQUFpQyxFQUNqQyxXQUE0QixFQUM1QixVQUFzQixFQUN0QixrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDTSxTQUFvQjtRQU54RCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ00sY0FBUyxHQUFULFNBQVMsQ0FBVztRQUVoRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRWEsb0NBQVE7Ozs7SUFBdEI7Ozs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXhDLFNBQXdDLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QixxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUExRCxTQUEwRCxDQUFDO3dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDNUIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWpELFNBQWlELENBQUM7d0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBaEQsU0FBZ0QsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzVCLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDNUIscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEUsU0FBa0UsQ0FBQzt3QkFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O3dCQUVWLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFoRSxXQUFXLEdBQUcsU0FBa0Q7d0JBQ3BFLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTs0QkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzVCLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtnQ0FDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUNuRztpQ0FDSTtnQ0FDRCxVQUFVOzs7Z0NBQUM7b0NBQ1AsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQzs2QkFDWDt5QkFDSjs2QkFDSTs0QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7NEJBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNoQzs7Ozs7S0FDSjs7Z0JBdERKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFiUSxtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBSWYsY0FBYztnREFjZCxRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7Ozs0QkF6QjFDO0NBMEVDLEFBNURELElBNERDO1NBekRZLGlCQUFpQjs7Ozs7O0lBWTFCLDBDQUF1Qzs7Ozs7SUFWbkMseUNBQXlDOzs7OztJQUN6Qyx3Q0FBb0M7Ozs7O0lBQ3BDLHVDQUE4Qjs7Ozs7SUFDOUIsK0NBQThDOzs7OztJQUM5Qyw0Q0FBd0M7Ozs7O0lBQ3hDLDJDQUFzQzs7Ozs7SUFDdEMsc0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9hZGluZ0FwcCB9IGZyb20gJy4vTG9hZGluZ0FwcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVmVyc2lvbkNoZWNrU2VydmljZSB9IGZyb20gJy4uLy4uL2RhdGFTeW5jL3ZlcnNpb24tY2hlY2suc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3luY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kYXRhU3luYy9kYXRhLXN5bmMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9sb2cvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUNvZGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9wcm9maWxlL3Byb2ZpbGUtY29kZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk1nciB9IGZyb20gJy4uLy4uL25vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25NZ3InO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uL25vdGlmaWNhdGlvbi9JTm90aWZpY2F0aW9uUHJvdmlkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFB1c2hJRE1nclRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFB1c2hJRE1nciB9IGZyb20gJy4vUHVzaElETWdyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2V0dGluZy9zZXR0aW5nLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdExvYWRpbmdBcHAgaW1wbGVtZW50cyBMb2FkaW5nQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2ZXJzaW9uQ2hlY2s6IFZlcnNpb25DaGVja1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc3luY1NlcnZpY2U6IERhdGFTeW5jU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChQdXNoSURNZ3JUb2tlbikgcHJpdmF0ZSBwdXNoSURNZ3I6IFB1c2hJRE1nclxuICAgICkge1xuICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gICAgfVxuICAgIHByaXZhdGUgbG9hZGVkU3ViamVjdDogU3ViamVjdDxudW1iZXI+O1xuICAgIGxvYWRpbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcoKTtcbiAgICB9XG5cbiAgICBvbkxvYWRlZCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2xvYWRpbmcoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1NlcnZpY2Uuc3luY0FsbEZ1bmModHJ1ZSk7XG4gICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDUwKTtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuX2ZldGNoQ29kZURhdGEoKS50b1Byb21pc2UoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoNjApO1xuICAgICAgICBhd2FpdCB0aGlzLmxvZ1NlcnZpY2UucHVzaEFjdGlvbkxvZygpLnRvUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCg3MCk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9nU2VydmljZS5wdXNoRXJyb3JMb2coKS50b1Byb21pc2UoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoODApO1xuICAgICAgICBhd2FpdCB0aGlzLm5vdGlmaWNhdGlvbk1nci5pbml0KCk7XG4gICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDg1KTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5nU2VydmljZS5kZXZpY2VDaGFuZ2UodGhpcy5wdXNoSURNZ3IuZ2V0UHVzaElEKCkpO1xuICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCg4OCk7XG4gICAgICAgIC8vYWZ0ZXIgc3luYyBmaW5pc2ggLGNoZWNrIHZlcnNpb25cbiAgICAgICAgbGV0IHZlcnNpb25SZXNwID0gYXdhaXQgdGhpcy52ZXJzaW9uQ2hlY2suY2hlY2tWZXJzaW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIGlmICh2ZXJzaW9uUmVzcC5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU3ViamVjdC5uZXh0KDk1KTtcbiAgICAgICAgICAgIGlmICh2ZXJzaW9uUmVzcC5uZXdWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25NZ3IucHVzaE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlLk5ld1ZlcnNpb25Mb2dpbiwgdmVyc2lvblJlc3AuYXBwVmVyc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRTdWJqZWN0Lm5leHQoMTAwKTtcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVjayB2ZXJzaW9uIGVycm9yISFcIik7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZFN1YmplY3QubmV4dCgxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbn0iXX0=