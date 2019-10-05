/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { ProfileCodeAPI } from "../../api/register/ProfileCode";
import { SettingAPI } from '../../api/register/SettingAPI';
import { ExtensionConfigAPI } from "../../api/register/ExtensionConfigAPI";
import { APIFactory } from "../../api/APIFactory";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { DeviceFactory } from "../../device/DeviceFactory";
import { OfflineAuthAPI } from "../../api/register/offineAuthAPI";
import { saveLoginTokenAPI } from "../../api/register/loginTokenAPI";
import { CheckVersionAPI } from '../../api/register/CheckVersionAPI';
import { MenuAPI } from "../../api/register/menuAPI";
import { SettingUpdateAPI, } from "../../api/register/SettingUpdateAPI";
import { ContactsSearchAPI } from '../../api/register/ContactsSearchAPI';
import { SyncPushAPI } from "../../api/register/SyncPushAPI";
import { SyncPullAPI } from "../../api/register/SyncPullAPI";
import { CurrentLanguageListAPI } from '../../api/register/CurrentLanguageListAPI';
import { BindingAccountAPI } from "../../api/register/BindingAccountAPI";
import { DeviceAccountAPI } from "../../api/register/DeviceAccountAPI";
import { UpdatePushIDAPI } from "../../api/register/UpdatePushIDAPI";
import { syncSequenceIDAPI } from "../../api/register/syncSequenceIDAPI";
import { logErrorAPI } from "../../api/register/logErrorAPI";
import { logActionAPI } from "../../api/register/logActionAPI";
import { PushErrorLogAPI } from "../../api/register/pushErrorLogAPI";
import { PushActionLogAPI } from "../../api/register/PushActionLogAPI";
import { RouterMapAPI } from "../../api/register/RouterMapAPI";
import { getYearConfigAPI } from "../../api/register/getYearConfigAPI";
import { saveYearConfigAPI } from "../../api/register/saveYearConfigAPI";
import { getAgencyPlanAPI } from "../../api/register/getAgencyPlanAPI";
import { saveAgencyPlanAPI } from "../../api/register/saveAgencyPlanAPI";
import { saveProgressAPI } from "../../api/register/saveProgressAPI";
import { getProgressAPI } from "../../api/register/getProgressAPI";
import { MetaConfigAPI } from "../../api/register/MetaConfigAPI";
import { SettingValueAPI } from "../../api/register/SettingValueAPI";
import { TranslateService } from "../../language/translate.service";
import { DeviceService } from "../../device/device.service";
import { getGoalAPI } from "../../api/register/getGoalAPI";
import { saveGoalAPI } from "../../api/register/saveGoalAPI";
import { saveActualAPI } from "../../api/register/saveActual";
import { getActualAPI } from "../../api/register/getActual";
import { pushGoalSettingDataAPI } from "../../api/register/pushGoalSettingDataAPI";
import { pushApproveGoalAPI } from "../../api/register/pushApproveGoalAPI";
import { ConfigToken } from "../../injectionToken/injection-token";
import { GetDeviceInfoAPI } from "../../api/register/GetDeviceInfoAPI";
import { LoginAPI } from "../../api/register/LoginAPI";
import { DashboardGetMessageListAPI } from "../../api/register/DashboardGetMessageListAPI";
import { DashboardUpdateMessageStatusAPI } from "../../api/register/DashboardUpdateMessageStatusAPI";
import { ChangeMessageStatusAPI } from "../../api/register/changeMessageStatusAPI";
import { UnbindDeviceAPI } from "../../api/register/UnbindDeviceAPI";
import { UpdateTimeListAPI } from "../../api/register/UpdateTimeListAPI";
import * as i0 from "@angular/core";
import * as i1 from "../../api/APIFactory";
import * as i2 from "../../device/sqlite/DaoFactory";
import * as i3 from "../../device/DeviceFactory";
import * as i4 from "../../language/translate.service";
import * as i5 from "../../device/device.service";
import * as i6 from "../../injectionToken/injection-token";
var RegisterAPITask = /** @class */ (function () {
    function RegisterAPITask(APIFactory, DAOFactory, deviceFactory, translateService, deviceService, APP_CONFIG) {
        this.APIFactory = APIFactory;
        this.DAOFactory = DAOFactory;
        this.deviceFactory = deviceFactory;
        this.translateService = translateService;
        this.deviceService = deviceService;
        this.APP_CONFIG = APP_CONFIG;
    }
    /**
     * @return {?}
     */
    RegisterAPITask.prototype.doTask = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            console.log('register API');
            //register Setting API
            _this.APIFactory.registerAPI(new SettingAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new SettingUpdateAPI(_this.DAOFactory));
            //register Config API
            _this.APIFactory.registerAPI(new ExtensionConfigAPI());
            //register Profile API
            _this.APIFactory.registerAPI(new ProfileCodeAPI(_this.DAOFactory));
            //register Device API
            _this.APIFactory.registerAPI(new CurrentLanguageListAPI(_this.DAOFactory));
            //register Login API
            _this.APIFactory.registerAPI(new saveLoginTokenAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new OfflineAuthAPI(_this.DAOFactory, _this.APP_CONFIG));
            //register getMenu API
            _this.APIFactory.registerAPI(new MenuAPI());
            //register checkversion API
            _this.APIFactory.registerAPI(new CheckVersionAPI());
            //register datasync API
            _this.APIFactory.registerAPI(new SyncPushAPI());
            _this.APIFactory.registerAPI(new SyncPullAPI());
            //register UpdatePushID API
            _this.APIFactory.registerAPI(new UpdatePushIDAPI());
            //register getSyncSequence API
            _this.APIFactory.registerAPI(new syncSequenceIDAPI());
            //register account binding API
            _this.APIFactory.registerAPI(new BindingAccountAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new DeviceAccountAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new ContactsSearchAPI(_this.deviceFactory));
            _this.APIFactory.registerAPI(new logErrorAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new logActionAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new PushErrorLogAPI());
            _this.APIFactory.registerAPI(new PushActionLogAPI());
            _this.APIFactory.registerAPI(new RouterMapAPI());
            _this.APIFactory.registerAPI(new getYearConfigAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new saveYearConfigAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new getAgencyPlanAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new saveAgencyPlanAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new getProgressAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new saveProgressAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new getGoalAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new saveGoalAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new getActualAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new saveActualAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new pushGoalSettingDataAPI());
            _this.APIFactory.registerAPI(new pushApproveGoalAPI());
            _this.APIFactory.registerAPI(new GetDeviceInfoAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new MetaConfigAPI());
            _this.APIFactory.registerAPI(new SettingValueAPI(_this.translateService, _this.deviceService));
            _this.APIFactory.registerAPI(new LoginAPI());
            _this.APIFactory.registerAPI(new DashboardGetMessageListAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new DashboardUpdateMessageStatusAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new ChangeMessageStatusAPI(_this.DAOFactory));
            _this.APIFactory.registerAPI(new UnbindDeviceAPI(_this.APP_CONFIG));
            _this.APIFactory.registerAPI(new UpdateTimeListAPI(_this.DAOFactory));
            res("register API tasks Done!");
        }));
    };
    RegisterAPITask.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    RegisterAPITask.ctorParameters = function () { return [
        { type: APIFactory },
        { type: DaoFactory },
        { type: DeviceFactory },
        { type: TranslateService },
        { type: DeviceService },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ RegisterAPITask.ngInjectableDef = i0.defineInjectable({ factory: function RegisterAPITask_Factory() { return new RegisterAPITask(i0.inject(i1.APIFactory), i0.inject(i2.DaoFactory), i0.inject(i3.DeviceFactory), i0.inject(i4.TranslateService), i0.inject(i5.DeviceService), i0.inject(i6.ConfigToken)); }, token: RegisterAPITask, providedIn: "root" });
    return RegisterAPITask;
}());
export { RegisterAPITask };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.DAOFactory;
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.deviceFactory;
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    RegisterAPITask.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJBUElUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbml0VGFzay90YXNrcy9SZWdpc3RlckFQSVRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixHQUFHLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FB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Ozs7SUFDdEMscUNBQThCOzs7OztJQUM5Qix3Q0FBb0M7Ozs7O0lBQ3BDLDJDQUEwQzs7Ozs7SUFDMUMsd0NBQW9DOzs7OztJQUNwQyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvZGVBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL1Byb2ZpbGVDb2RlXCI7XG5pbXBvcnQgeyBTZXR0aW5nQVBJIH0gZnJvbSAnLi4vLi4vYXBpL3JlZ2lzdGVyL1NldHRpbmdBUEknO1xuaW1wb3J0IHsgRXh0ZW5zaW9uQ29uZmlnQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9FeHRlbnNpb25Db25maWdBUElcIjtcbmltcG9ydCB7IElJbml0VGFzayB9IGZyb20gXCIuLi9pbnRlcmZhY2UvSW5pdGlhbFRhc2suaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRGV2aWNlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2UvRGV2aWNlRmFjdG9yeVwiO1xuaW1wb3J0IHsgT2ZmbGluZUF1dGhBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL29mZmluZUF1dGhBUElcIjtcbmltcG9ydCB7IHNhdmVMb2dpblRva2VuQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9sb2dpblRva2VuQVBJXCI7XG5pbXBvcnQgeyBDaGVja1ZlcnNpb25BUEkgfSBmcm9tICcuLi8uLi9hcGkvcmVnaXN0ZXIvQ2hlY2tWZXJzaW9uQVBJJztcbmltcG9ydCB7IE1lbnVBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL21lbnVBUElcIjtcbmltcG9ydCB7IFNldHRpbmdVcGRhdGVBUEksIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9TZXR0aW5nVXBkYXRlQVBJXCI7XG5pbXBvcnQgeyBDb250YWN0c1NlYXJjaEFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9Db250YWN0c1NlYXJjaEFQSSc7XG5pbXBvcnQgeyBTeW5jUHVzaEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvU3luY1B1c2hBUElcIjtcbmltcG9ydCB7IFN5bmNQdWxsQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9TeW5jUHVsbEFQSVwiO1xuaW1wb3J0IHsgQ3VycmVudExhbmd1YWdlTGlzdEFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9DdXJyZW50TGFuZ3VhZ2VMaXN0QVBJJztcbmltcG9ydCB7IEJpbmRpbmdBY2NvdW50QVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9CaW5kaW5nQWNjb3VudEFQSVwiO1xuaW1wb3J0IHsgRGV2aWNlQWNjb3VudEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvRGV2aWNlQWNjb3VudEFQSVwiO1xuaW1wb3J0IHsgVXBkYXRlUHVzaElEQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9VcGRhdGVQdXNoSURBUElcIjtcbmltcG9ydCB7IHN5bmNTZXF1ZW5jZUlEQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9zeW5jU2VxdWVuY2VJREFQSVwiO1xuaW1wb3J0IHsgbG9nRXJyb3JBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL2xvZ0Vycm9yQVBJXCI7XG5pbXBvcnQgeyBsb2dBY3Rpb25BUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL2xvZ0FjdGlvbkFQSVwiO1xuaW1wb3J0IHsgUHVzaEVycm9yTG9nQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9wdXNoRXJyb3JMb2dBUElcIjtcbmltcG9ydCB7IFB1c2hBY3Rpb25Mb2dBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL1B1c2hBY3Rpb25Mb2dBUElcIjtcbmltcG9ydCB7IFJvdXRlck1hcEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvUm91dGVyTWFwQVBJXCI7XG5pbXBvcnQgeyBnZXRZZWFyQ29uZmlnQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9nZXRZZWFyQ29uZmlnQVBJXCI7XG5pbXBvcnQgeyBzYXZlWWVhckNvbmZpZ0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZVllYXJDb25maWdBUElcIjtcbmltcG9ydCB7IGdldEFnZW5jeVBsYW5BUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL2dldEFnZW5jeVBsYW5BUElcIjtcbmltcG9ydCB7IHNhdmVBZ2VuY3lQbGFuQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlQWdlbmN5UGxhbkFQSVwiO1xuaW1wb3J0IHsgc2F2ZVByb2dyZXNzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlUHJvZ3Jlc3NBUElcIjtcbmltcG9ydCB7IGdldFByb2dyZXNzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9nZXRQcm9ncmVzc0FQSVwiO1xuXG5pbXBvcnQgeyBNZXRhQ29uZmlnQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9NZXRhQ29uZmlnQVBJXCI7XG5pbXBvcnQgeyBTZXR0aW5nVmFsdWVBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL1NldHRpbmdWYWx1ZUFQSVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi9sYW5ndWFnZS90cmFuc2xhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGdldEdvYWxBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL2dldEdvYWxBUElcIjtcbmltcG9ydCB7IHNhdmVHb2FsQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlR29hbEFQSVwiO1xuaW1wb3J0IHsgc2F2ZUFjdHVhbEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZUFjdHVhbFwiO1xuaW1wb3J0IHsgZ2V0QWN0dWFsQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9nZXRBY3R1YWxcIjtcbmltcG9ydCB7IHB1c2hHb2FsU2V0dGluZ0RhdGFBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL3B1c2hHb2FsU2V0dGluZ0RhdGFBUElcIjtcbmltcG9ydCB7IHB1c2hBcHByb3ZlR29hbEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvcHVzaEFwcHJvdmVHb2FsQVBJXCI7XG5pbXBvcnQgeyBDb25maWdUb2tlbiB9IGZyb20gXCIuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW5cIjtcbmltcG9ydCB7IEdldERldmljZUluZm9BUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL0dldERldmljZUluZm9BUElcIjtcbmltcG9ydCB7IExvZ2luQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9Mb2dpbkFQSVwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL0Rhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9EYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJXCI7XG5pbXBvcnQgeyBDaGFuZ2VNZXNzYWdlU3RhdHVzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9jaGFuZ2VNZXNzYWdlU3RhdHVzQVBJXCI7XG5pbXBvcnQgeyBVbmJpbmREZXZpY2VBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL1VuYmluZERldmljZUFQSVwiO1xuaW1wb3J0IHsgVXBkYXRlVGltZUxpc3RBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL3JlZ2lzdGVyL1VwZGF0ZVRpbWVMaXN0QVBJXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJBUElUYXNrIGltcGxlbWVudHMgSUluaXRUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICAgICAgcHJpdmF0ZSBEQU9GYWN0b3J5OiBEYW9GYWN0b3J5LFxuICAgICAgICBwcml2YXRlIGRldmljZUZhY3Rvcnk6IERldmljZUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICAgICkgeyB9XG4gICAgZG9UYXNrKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciBBUEknKTtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgU2V0dGluZyBBUElcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgU2V0dGluZ0FQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgU2V0dGluZ1VwZGF0ZUFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgQ29uZmlnIEFQSVxuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBFeHRlbnNpb25Db25maWdBUEkoKSk7XG4gICAgICAgICAgICAvL3JlZ2lzdGVyIFByb2ZpbGUgQVBJXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IFByb2ZpbGVDb2RlQVBJKHRoaXMuREFPRmFjdG9yeSkpO1xuICAgICAgICAgICAgLy9yZWdpc3RlciBEZXZpY2UgQVBJXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IEN1cnJlbnRMYW5ndWFnZUxpc3RBUEkodGhpcy5EQU9GYWN0b3J5KSk7XG4gICAgICAgICAgICAvL3JlZ2lzdGVyIExvZ2luIEFQSVxuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBzYXZlTG9naW5Ub2tlbkFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgT2ZmbGluZUF1dGhBUEkodGhpcy5EQU9GYWN0b3J5LCB0aGlzLkFQUF9DT05GSUcpKTtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgZ2V0TWVudSBBUElcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgTWVudUFQSSgpKTtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgY2hlY2t2ZXJzaW9uIEFQSVxuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBDaGVja1ZlcnNpb25BUEkoKSk7XG4gICAgICAgICAgICAvL3JlZ2lzdGVyIGRhdGFzeW5jIEFQSVxuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBTeW5jUHVzaEFQSSgpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgU3luY1B1bGxBUEkoKSk7XG4gICAgICAgICAgICAvL3JlZ2lzdGVyIFVwZGF0ZVB1c2hJRCBBUElcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgVXBkYXRlUHVzaElEQVBJKCkpO1xuICAgICAgICAgICAgLy9yZWdpc3RlciBnZXRTeW5jU2VxdWVuY2UgQVBJXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IHN5bmNTZXF1ZW5jZUlEQVBJKCkpO1xuXG4gICAgICAgICAgICAvL3JlZ2lzdGVyIGFjY291bnQgYmluZGluZyBBUElcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgQmluZGluZ0FjY291bnRBUEkodGhpcy5EQU9GYWN0b3J5KSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IERldmljZUFjY291bnRBUEkodGhpcy5EQU9GYWN0b3J5KSk7XG5cbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgQ29udGFjdHNTZWFyY2hBUEkodGhpcy5kZXZpY2VGYWN0b3J5KSk7XG5cbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgbG9nRXJyb3JBUEkodGhpcy5EQU9GYWN0b3J5KSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IGxvZ0FjdGlvbkFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcblxuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBQdXNoRXJyb3JMb2dBUEkoKSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IFB1c2hBY3Rpb25Mb2dBUEkoKSk7XG5cbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgUm91dGVyTWFwQVBJKCkpO1xuXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IGdldFllYXJDb25maWdBUEkodGhpcy5BUFBfQ09ORklHKSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IHNhdmVZZWFyQ29uZmlnQVBJKHRoaXMuREFPRmFjdG9yeSkpO1xuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBnZXRBZ2VuY3lQbGFuQVBJKHRoaXMuQVBQX0NPTkZJRykpO1xuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBzYXZlQWdlbmN5UGxhbkFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgZ2V0UHJvZ3Jlc3NBUEkodGhpcy5BUFBfQ09ORklHKSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IHNhdmVQcm9ncmVzc0FQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgZ2V0R29hbEFQSSh0aGlzLkFQUF9DT05GSUcpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgc2F2ZUdvYWxBUEkodGhpcy5EQU9GYWN0b3J5KSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IGdldEFjdHVhbEFQSSh0aGlzLkFQUF9DT05GSUcpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgc2F2ZUFjdHVhbEFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgcHVzaEdvYWxTZXR0aW5nRGF0YUFQSSgpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgcHVzaEFwcHJvdmVHb2FsQVBJKCkpO1xuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBHZXREZXZpY2VJbmZvQVBJKHRoaXMuREFPRmFjdG9yeSkpO1xuXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IE1ldGFDb25maWdBUEkoKSk7XG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IFNldHRpbmdWYWx1ZUFQSSh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UsIHRoaXMuZGV2aWNlU2VydmljZSkpO1xuXG4gICAgICAgICAgICB0aGlzLkFQSUZhY3RvcnkucmVnaXN0ZXJBUEkobmV3IExvZ2luQVBJKCkpO1xuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBEYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgRGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgQ2hhbmdlTWVzc2FnZVN0YXR1c0FQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcbiAgICAgICAgICAgIHRoaXMuQVBJRmFjdG9yeS5yZWdpc3RlckFQSShuZXcgVW5iaW5kRGV2aWNlQVBJKHRoaXMuQVBQX0NPTkZJRykpO1xuICAgICAgICAgICAgdGhpcy5BUElGYWN0b3J5LnJlZ2lzdGVyQVBJKG5ldyBVcGRhdGVUaW1lTGlzdEFQSSh0aGlzLkRBT0ZhY3RvcnkpKTtcblxuICAgICAgICAgICAgcmVzKFwicmVnaXN0ZXIgQVBJIHRhc2tzIERvbmUhXCIpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==