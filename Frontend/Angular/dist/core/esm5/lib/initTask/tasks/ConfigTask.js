/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { TranslateService } from '../../language/translate.service';
import { DeviceService } from '../../device/device.service';
import { fetchSettingFinishToken, changeFontSizeToken, FontSizeAccessToken, ConfigToken } from '../../injectionToken';
import { CheckPermissionService } from '../../auth/permission/check-permission.service';
import { SettingService } from '../../service/setting/setting.service';
import { AppRouter } from '../../route/AppRouter';
import { NotificationMgr } from '../../notification/NotificationMgr';
import { APPMODE } from '../../bean';
import { APPError } from '../../errorHandler/APPError';
import { NotificationType } from '../../notification/INotificationProvider.interface';
import * as i0 from "@angular/core";
import * as i1 from "../../language/translate.service";
import * as i2 from "../../device/device.service";
import * as i3 from "../../service/setting/setting.service";
import * as i4 from "../../route/AppRouter";
import * as i5 from "../../notification/NotificationMgr";
import * as i6 from "../../injectionToken/injection-token";
import * as i7 from "../../auth/permission/check-permission.service";
var ConfigTask = /** @class */ (function () {
    function ConfigTask(translateService, deviceService, settingService, appRouter, notificationMgr, APP_CONFIG, fetchSettingFinish, changeFontSize, fontSizeAccess, checkPermissionService) {
        this.translateService = translateService;
        this.deviceService = deviceService;
        this.settingService = settingService;
        this.appRouter = appRouter;
        this.notificationMgr = notificationMgr;
        this.APP_CONFIG = APP_CONFIG;
        this.fetchSettingFinish = fetchSettingFinish;
        this.changeFontSize = changeFontSize;
        this.fontSizeAccess = fontSizeAccess;
        this.checkPermissionService = checkPermissionService;
    }
    /**
     * @return {?}
     */
    ConfigTask.prototype.doTask = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('do task');
                        _this = this;
                        //do task
                        document.addEventListener("deviceready", (/**
                         * @return {?}
                         */
                        function () {
                            _this.deviceService.initDeviceAPI();
                            if (((/** @type {?} */ (cordova))).plugins.AndroidFontSize) {
                                ((/** @type {?} */ (cordova))).plugins.AndroidFontSize.removeSystemFontSize();
                            }
                            if (_this.deviceService.getDevicePlatform() == 'Android') {
                                document.addEventListener('screenshotDetect', (/**
                                 * @return {?}
                                 */
                                function () {
                                    alert('Screenshot');
                                }), false);
                            }
                            else if (_this.deviceService.getDevicePlatform() == 'iOS') {
                                document.addEventListener("screenshot", (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.notificationMgr.pushNotification(NotificationType.ScreenShotAlert, {});
                                }), false);
                            }
                            // StatusBar.overlaysWebView(false);
                            // StatusBar.styleBlackTranslucent();
                            // StatusBar.show();
                        }), false);
                        this.integrationCheck();
                        this.checkPermissionService.init();
                        this.appRouter.init();
                        return [4 /*yield*/, Promise.all([this.fetchLanguage(), this.fetchLanguageList(), this.fetchSetting(), this.loadLanguageFile()])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ConfigTask.prototype.fetchLanguage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.log("fetch language func");
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            _this_1.translateService._fetchCurrentLanguage().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.log("_fetchCurrentLanguage resp:", resp);
                res(resp);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ConfigTask.prototype.fetchLanguageList = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.log("fetch language List");
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            _this_1.translateService._fetchCodeData().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                res(resp);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ConfigTask.prototype.integrationCheck = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        try {
            /** @type {?} */
            var needCheckKey = ['SNDToken', 'SNDLanguage'];
            if (this.APP_CONFIG.APP_MODE === APPMODE.Integration) {
                // Check LocalStorage
                /** @type {?} */
                var result = needCheckKey
                    .filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return !_this_1.deviceService.getLocalStorage(key); }))
                    .map((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return "Integration mode failed: " + key + " not found in localstorage. Please set " + key + " into localstorage before switch to S&D."; }));
                if (result.length > 0)
                    throw new Error(result[0]);
            }
        }
        catch (error) {
            alert('Integration failed. Please check console for more details.');
            throw new APPError('F00704', error.message);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ConfigTask.prototype.fetchSetting = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.debug('fetch setting');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            _this_1.settingService._fetchCodeData().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                if (_this_1.changeFontSize) {
                    if (_this_1.fontSizeAccess) {
                        _this_1.fontSizeAccess.getFontSize().subscribe((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        function (resp) {
                            _this_1.changeFontSize.updateFontSize(resp);
                        }));
                    }
                }
                if (_this_1.fetchSettingFinish) {
                    _this_1.fetchSettingFinish.fetchSettingFinish(resp);
                }
                res(resp);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ConfigTask.prototype.loadLanguageFile = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateService.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigTask.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    ConfigTask.ctorParameters = function () { return [
        { type: TranslateService },
        { type: DeviceService },
        { type: SettingService },
        { type: AppRouter },
        { type: NotificationMgr },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [fetchSettingFinishToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [changeFontSizeToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FontSizeAccessToken,] }] },
        { type: CheckPermissionService }
    ]; };
    /** @nocollapse */ ConfigTask.ngInjectableDef = i0.defineInjectable({ factory: function ConfigTask_Factory() { return new ConfigTask(i0.inject(i1.TranslateService), i0.inject(i2.DeviceService), i0.inject(i3.SettingService), i0.inject(i4.AppRouter), i0.inject(i5.NotificationMgr), i0.inject(i6.ConfigToken), i0.inject(i6.fetchSettingFinishToken, 8), i0.inject(i6.changeFontSizeToken, 8), i0.inject(i6.FontSizeAccessToken, 8), i0.inject(i7.CheckPermissionService)); }, token: ConfigTask, providedIn: "root" });
    return ConfigTask;
}());
export { ConfigTask };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.appRouter;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.fetchSettingFinish;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.changeFontSize;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.fontSizeAccess;
    /**
     * @type {?}
     * @private
     */
    ConfigTask.prototype.checkPermissionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnVGFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaW5pdFRhc2svdGFza3MvQ29uZmlnVGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUNILHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLFdBQVcsRUFDZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7QUFLdEY7SUFLSSxvQkFDWSxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsZUFBZ0MsRUFDWCxVQUFVLEVBQ2Msa0JBQXNDLEVBQzFDLGNBQThCLEVBQzlCLGNBQStCLEVBQ3hFLHNCQUE4QztRQVQ5QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNYLGVBQVUsR0FBVixVQUFVLENBQUE7UUFDYyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDeEUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUFJLENBQUM7Ozs7SUFDbEQsMkJBQU07OztJQUFuQjs7Ozs7O3dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25CLEtBQUssR0FBRyxJQUFJO3dCQUNoQixTQUFTO3dCQUNULFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhOzs7d0JBQUU7NEJBQ3JDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ3BDLElBQUksQ0FBQyxtQkFBSyxPQUFPLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0NBQ3hDLENBQUMsbUJBQUssT0FBTyxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLENBQUM7NkJBQ2pFOzRCQUNELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFNBQVMsRUFBRTtnQ0FDdEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQjs7O2dDQUFFO29DQUMxQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0NBQ3hCLENBQUMsR0FBRSxLQUFLLENBQUMsQ0FBQTs2QkFDWjtpQ0FBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0NBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZOzs7Z0NBQUU7b0NBQ3BDLEtBQUssQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUNqRixDQUFDLEdBQUUsS0FBSyxDQUFDLENBQUM7NkJBQ2I7NEJBQ0Qsb0NBQW9DOzRCQUNwQyxxQ0FBcUM7NEJBQ3JDLG9CQUFvQjt3QkFDeEIsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUVWLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RCLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQWpILFNBQWlILENBQUM7Ozs7O0tBRXJIOzs7OztJQUVPLGtDQUFhOzs7O0lBQXJCO1FBQUEsbUJBUUM7UUFQRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUN4QixPQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTyxzQ0FBaUI7Ozs7SUFBekI7UUFBQSxtQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLE9BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7SUFFTyxxQ0FBZ0I7Ozs7SUFBeEI7UUFBQSxtQkFnQkM7UUFmRyxJQUFJOztnQkFDSSxZQUFZLEdBQUcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRTs7O29CQUU5QyxNQUFNLEdBQUcsWUFBWTtxQkFDcEIsTUFBTTs7OztnQkFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsT0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXhDLENBQXdDLEVBQUM7cUJBQ3ZELEdBQUc7Ozs7Z0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSw4QkFBNEIsR0FBRywrQ0FBMEMsR0FBRyw2Q0FBMEMsRUFBdEgsQ0FBc0gsRUFBQztnQkFDdkksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEM7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7WUFDcEUsTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBRUwsQ0FBQzs7Ozs7SUFFTyxpQ0FBWTs7OztJQUFwQjtRQUFBLG1CQW9CQztRQW5CRyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFFeEIsT0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUNoRCxJQUFJLE9BQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3JCLElBQUksT0FBSSxDQUFDLGNBQWMsRUFBRTt3QkFDckIsT0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O3dCQUFDLFVBQUMsSUFBSTs0QkFDN0MsT0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdDLENBQUMsRUFBQyxDQUFBO3FCQUNMO2lCQUNKO2dCQUVELElBQUksT0FBSSxDQUFDLGtCQUFrQixFQUFFO29CQUN6QixPQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUE7SUFFTixDQUFDOzs7OztJQUVhLHFDQUFnQjs7OztJQUE5Qjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFDOzs7OztLQUN0Qzs7Z0JBM0dKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkF4QlEsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQVNiLGNBQWM7Z0JBR2QsU0FBUztnQkFDVCxlQUFlO2dEQW1CZixNQUFNLFNBQUMsV0FBVztnREFDbEIsUUFBUSxZQUFJLE1BQU0sU0FBQyx1QkFBdUI7Z0RBQzFDLFFBQVEsWUFBSSxNQUFNLFNBQUMsbUJBQW1CO2dEQUN0QyxRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjtnQkE1QnRDLHNCQUFzQjs7O3FCQVYvQjtDQW9JQyxBQTVHRCxJQTRHQztTQXpHWSxVQUFVOzs7Ozs7SUFHZixzQ0FBMEM7Ozs7O0lBQzFDLG1DQUFvQzs7Ozs7SUFDcEMsb0NBQXNDOzs7OztJQUN0QywrQkFBNEI7Ozs7O0lBQzVCLHFDQUF3Qzs7Ozs7SUFDeEMsZ0NBQXVDOzs7OztJQUN2Qyx3Q0FBMkY7Ozs7O0lBQzNGLG9DQUErRTs7Ozs7SUFDL0Usb0NBQWdGOzs7OztJQUNoRiw0Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSW5pdFRhc2sgfSBmcm9tICcuLi9pbnRlcmZhY2UvSW5pdGlhbFRhc2suaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYW5ndWFnZS90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgZmV0Y2hTZXR0aW5nRmluaXNoVG9rZW4sXG4gICAgY2hhbmdlRm9udFNpemVUb2tlbixcbiAgICBGb250U2l6ZUFjY2Vzc1Rva2VuLFxuICAgIENvbmZpZ1Rva2VuXG59IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuJztcbmltcG9ydCB7IENoZWNrUGVybWlzc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3Blcm1pc3Npb24vY2hlY2stcGVybWlzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IGZldGNoU2V0dGluZ0ZpbmlzaCB9IGZyb20gJy4uL2ludGVyZmFjZS9mZXRjaFNldHRpbmdGaW5pc2guaW50ZXJmYWNlJztcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zZXR0aW5nL3NldHRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBjaGFuZ2VGb250U2l6ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9jaGFuZ2VGb250U2l6ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUZvbnRTaXplQWNjZXNzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlL0FwcFJvdXRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25NZ3IgfSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb24vTm90aWZpY2F0aW9uTWdyJztcbmltcG9ydCB7IEFQUE1PREUgfSBmcm9tICcuLi8uLi9iZWFuJztcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb24vSU5vdGlmaWNhdGlvblByb3ZpZGVyLmludGVyZmFjZSc7XG5cbmRlY2xhcmUgdmFyIFN0YXR1c0JhcjtcbmRlY2xhcmUgdmFyIGNvcmRvdmE7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdUYXNrIGltcGxlbWVudHMgSUluaXRUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXBwUm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uTWdyOiBOb3RpZmljYXRpb25NZ3IsXG4gICAgICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRyxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChmZXRjaFNldHRpbmdGaW5pc2hUb2tlbikgcHJpdmF0ZSBmZXRjaFNldHRpbmdGaW5pc2g6IGZldGNoU2V0dGluZ0ZpbmlzaCxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChjaGFuZ2VGb250U2l6ZVRva2VuKSBwcml2YXRlIGNoYW5nZUZvbnRTaXplOiBjaGFuZ2VGb250U2l6ZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChGb250U2l6ZUFjY2Vzc1Rva2VuKSBwcml2YXRlIGZvbnRTaXplQWNjZXNzOiBJRm9udFNpemVBY2Nlc3MsXG4gICAgICAgIHByaXZhdGUgY2hlY2tQZXJtaXNzaW9uU2VydmljZTogQ2hlY2tQZXJtaXNzaW9uU2VydmljZSkgeyB9XG4gICAgcHVibGljIGFzeW5jIGRvVGFzaygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gdGFzaycpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvL2RvIHRhc2tcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRldmljZVNlcnZpY2UuaW5pdERldmljZUFQSSgpO1xuICAgICAgICAgICAgaWYgKCg8YW55PmNvcmRvdmEpLnBsdWdpbnMuQW5kcm9pZEZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+Y29yZG92YSkucGx1Z2lucy5BbmRyb2lkRm9udFNpemUucmVtb3ZlU3lzdGVtRm9udFNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVBsYXRmb3JtKCkgPT0gJ0FuZHJvaWQnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2NyZWVuc2hvdERldGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NjcmVlbnNob3QnKTtcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpID09ICdpT1MnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcmVlbnNob3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZmljYXRpb25NZ3IucHVzaE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlLlNjcmVlblNob3RBbGVydCwge30pO1xuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpO1xuICAgICAgICAgICAgLy8gU3RhdHVzQmFyLnN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpO1xuICAgICAgICAgICAgLy8gU3RhdHVzQmFyLnNob3coKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuaW50ZWdyYXRpb25DaGVjaygpO1xuICAgICAgICB0aGlzLmNoZWNrUGVybWlzc2lvblNlcnZpY2UuaW5pdCgpO1xuICAgICAgICB0aGlzLmFwcFJvdXRlci5pbml0KCk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmZldGNoTGFuZ3VhZ2UoKSwgdGhpcy5mZXRjaExhbmd1YWdlTGlzdCgpLCB0aGlzLmZldGNoU2V0dGluZygpLCB0aGlzLmxvYWRMYW5ndWFnZUZpbGUoKV0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaExhbmd1YWdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggbGFuZ3VhZ2UgZnVuY1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLl9mZXRjaEN1cnJlbnRMYW5ndWFnZSgpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX2ZldGNoQ3VycmVudExhbmd1YWdlIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIHJlcyhyZXNwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoTGFuZ3VhZ2VMaXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggbGFuZ3VhZ2UgTGlzdFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLl9mZXRjaENvZGVEYXRhKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzKHJlc3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlZ3JhdGlvbkNoZWNrKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5lZWRDaGVja0tleSA9IFsnU05EVG9rZW4nLCAnU05ETGFuZ3VhZ2UnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLkFQUF9DT05GSUcuQVBQX01PREUgPT09IEFQUE1PREUuSW50ZWdyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBMb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmVlZENoZWNrS2V5XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+ICF0aGlzLmRldmljZVNlcnZpY2UuZ2V0TG9jYWxTdG9yYWdlKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGBJbnRlZ3JhdGlvbiBtb2RlIGZhaWxlZDogJHtrZXl9IG5vdCBmb3VuZCBpbiBsb2NhbHN0b3JhZ2UuIFBsZWFzZSBzZXQgJHtrZXl9IGludG8gbG9jYWxzdG9yYWdlIGJlZm9yZSBzd2l0Y2ggdG8gUyZELmApO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydCgnSW50ZWdyYXRpb24gZmFpbGVkLiBQbGVhc2UgY2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKCdGMDA3MDQnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaFNldHRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZmV0Y2ggc2V0dGluZycpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuX2ZldGNoQ29kZURhdGEoKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VGb250U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb250U2l6ZUFjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250U2l6ZUFjY2Vzcy5nZXRGb250U2l6ZSgpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9udFNpemUudXBkYXRlRm9udFNpemUocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmV0Y2hTZXR0aW5nRmluaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5nRmluaXNoLmZldGNoU2V0dGluZ0ZpbmlzaChyZXNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzKHJlc3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRMYW5ndWFnZUZpbGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgYXdhaXQgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluaXQoKTtcbiAgICB9XG59XG4iXX0=