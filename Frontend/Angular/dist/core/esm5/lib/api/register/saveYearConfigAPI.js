/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from "rxjs";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { v4 as uuid } from 'uuid';
var saveYearConfigAPI = /** @class */ (function () {
    function saveYearConfigAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.yearConfigs = [];
    }
    /**
     * @return {?}
     */
    saveYearConfigAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveYearConfig';
    };
    /**
     * @return {?}
     */
    saveYearConfigAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    saveYearConfigAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.yearConfig = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config');
        this.yearConfig_ext = this.daoFactory.getDefaultTable('TW_LH_SD_Year_Config_Extension');
        this.deviceInfo = this.daoFactory.getTable('Profile', 'TW_LH_SD_DeviceInfo');
        this.dao = this.daoFactory.getDefaultDao();
        this.profile_dao = this.daoFactory.getDao("Profile");
        console.log('yearConfig', this.yearConfig);
        console.log('deviceInfo', this.deviceInfo);
        if (this.yearConfig && this.deviceInfo) {
            return of(this.saveConfig().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var status = resp["Header"].status;
                console.log('saveYearConfigAPI resp:', resp);
                if (status) {
                    _this.dao.transactionDelete(_this.yearConfig);
                    _this.dao.transactionDelete(_this.yearConfig_ext);
                    return Promise.all(_this.yearConfigs.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return _this._getDate(x); }))).then((/**
                     * @return {?}
                     */
                    function () { return _this.dao.runTransaction().toPromise(); }));
                }
                else
                    return resp;
            })));
        }
        else
            return of(false);
    };
    /**
     * @private
     * @param {?} yearcfg
     * @return {?}
     */
    saveYearConfigAPI.prototype._getDate = /**
     * @private
     * @param {?} yearcfg
     * @return {?}
     */
    function (yearcfg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var clientID;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                console.log('yearcfg', yearcfg);
                clientID = uuid();
                this.yearConfig.setValue("ClientID", clientID);
                this.yearConfig.setValue("DataYear", yearcfg.DataYear);
                this.yearConfig.setValue("IsCurrent", yearcfg.IsCurrent ? "Y" : "N");
                this.yearConfig.setValue("PerformanceSettlementMonth", yearcfg.PerformanceSettlementMonth);
                this.yearConfig.setValue("WorkingMonth", yearcfg.WorkingMonth);
                this.yearConfig.setValue("WorkingQuarter", yearcfg.WorkingQuarter);
                this.yearConfig.setValue("QuarterStartMonth", yearcfg.QuarterStartMonth);
                this.yearConfig.setValue("QuarterEndMonth", yearcfg.QuarterEndMonth);
                this.yearConfig.setValue("InitialPreCaseFyfc", yearcfg.InitialPreCaseFyfc);
                this.yearConfig.setValue("FyfcCovertAnpRate", yearcfg.FyfcCovertAnpRate);
                this.yearConfig.setValue("InforceConvertFindRate", yearcfg.InforceConvertFindRate);
                this.yearConfig.setValue("InforceConvertScheduleRate", yearcfg.InforceConvertScheduleRate);
                this.yearConfig.setValue("InforceConvertMeetRate", yearcfg.InforceConvertMeetRate);
                this.yearConfig.setValue("InforceConvertSubmitRate", yearcfg.InforceConvertSubmitRate);
                this.yearConfig.setValue("ProgressDayPointsLimit", yearcfg.ProgressDayPointsLimit);
                this.yearConfig.setValue("InforceConvertPointBase", yearcfg.InforceConvertPointBase);
                this.yearConfig.setValue("FindConvertPointBase", yearcfg.FindConvertPointBase);
                this.yearConfig.setValue("ScheduleConvertPointBase", yearcfg.ScheduleConvertPointBase);
                this.yearConfig.setValue("MeetConvertPointBase", yearcfg.MeetConvertPointBase);
                this.yearConfig.setValue("SubmitConvertPointBase", yearcfg.SubmitConvertPointBase);
                this.yearConfig.setValue("GoalSettingActivityProcMode", yearcfg.GoalSettingActivityProcMode);
                this.yearConfig.setValue("ProgressBarControlMode", yearcfg.ProgressBarControlMode);
                this.yearConfig.setValue("GoalAndPlanDifferenceLimit", yearcfg.GoalAndPlanDifferenceLimit);
                this.yearConfig.setValue("NowToYearEndDays", yearcfg.NowToYearEndDays);
                this.yearConfig.setValue("MonthQuantityOfYear", yearcfg.MonthQuantityOfYear);
                this.dao.transactionInsert(this.yearConfig);
                //Extension
                this.yearConfig_ext.setValue("ClientID", clientID);
                if (yearcfg.extensions) {
                    yearcfg.extensions.forEach((/**
                     * @param {?} ext
                     * @return {?}
                     */
                    function (ext) {
                        _this.yearConfig_ext.setValue(ext.id, ext.value);
                    }));
                }
                this.dao.transactionInsert(this.yearConfig_ext);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    saveYearConfigAPI.prototype.saveConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Update other parameter
                        console.log('[saveYearConfigAPI] isFirstUse', this.FirstUseAPP);
                        if (!(this.FirstUseAPP != null && this.FirstUseAPP != undefined)) return [3 /*break*/, 2];
                        this.deviceInfo.addRestriction(new EqualRestriction("Category", ["FirstUseAPP"]));
                        return [4 /*yield*/, this.profile_dao.queryByTable(this.deviceInfo).toPromise()];
                    case 1:
                        queryResp = _a.sent();
                        console.log('[saveYearConfigAPI] queryResp', queryResp);
                        if (queryResp.Header["status"]) {
                            if (queryResp.Body.length > 0) {
                                this.deviceInfo.setValue("CategoryVal", this.FirstUseAPP ? "Y" : "N");
                                console.log('[saveYearConfigAPI] deviceInfo 1', this.deviceInfo);
                                this.profile_dao.transactionUpdate(this.deviceInfo);
                            }
                            else {
                                this.deviceInfo = this.daoFactory.getTable('Profile', 'TW_LH_SD_DeviceInfo');
                                this.deviceInfo.setValue("Category", "FirstUseAPP");
                                this.deviceInfo.setValue("CategoryVal", this.FirstUseAPP ? "Y" : "N");
                                this.deviceInfo.setValue("UpdateTime", new Date().getTime());
                                console.log('[saveYearConfigAPI] otherParameter 2', this.deviceInfo);
                                this.profile_dao.transactionInsert(this.deviceInfo);
                            }
                            return [2 /*return*/, this.profile_dao.runTransaction().toPromise()];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return saveYearConfigAPI;
}());
export { saveYearConfigAPI };
if (false) {
    /** @type {?} */
    saveYearConfigAPI.prototype.yearConfigs;
    /** @type {?} */
    saveYearConfigAPI.prototype.FirstUseAPP;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.deviceInfo;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.yearConfig;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.yearConfig_ext;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.dao;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.profile_dao;
    /**
     * @type {?}
     * @private
     */
    saveYearConfigAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZVllYXJDb25maWdBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlWWVhckNvbmZpZ0FQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEM7SUFVSSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJuQyxnQkFBVyxHQUFlLEVBQUUsQ0FBQztJQVVwQyxDQUFDOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0ksT0FBTyxxQ0FBcUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQUEsaUJBdUJDO1FBckJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxPQUFPLENB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SSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUN2RDs0QkFDRCxzQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFDO3lCQUN4RDs7Ozs7O0tBRVI7SUFFTCx3QkFBQztBQUFELENBQUMsQUFsSEQsSUFrSEM7Ozs7SUFoSEcsd0NBQW9DOztJQUNwQyx3Q0FBNEI7Ozs7O0lBRTVCLHVDQUFtQjs7Ozs7SUFDbkIsdUNBQW1COzs7OztJQUNuQiwyQ0FBdUI7Ozs7O0lBQ3ZCLGdDQUFZOzs7OztJQUNaLHdDQUFvQjs7Ozs7SUFDUix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tIFwiLi4vU1FMaXRlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5leHBvcnQgY2xhc3Mgc2F2ZVllYXJDb25maWdBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgeWVhckNvbmZpZ3M6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgRmlyc3RVc2VBUFA6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGRldmljZUluZm87XG4gICAgcHJpdmF0ZSB5ZWFyQ29uZmlnO1xuICAgIHByaXZhdGUgeWVhckNvbmZpZ19leHQ7XG4gICAgcHJpdmF0ZSBkYW87XG4gICAgcHJpdmF0ZSBwcm9maWxlX2RhbztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnc2F2ZVllYXJDb25maWcnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9hZGRDYWxlbmRhckV2ZW50Lmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKSB7XG5cbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfWWVhcl9Db25maWcnKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnX2V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1llYXJfQ29uZmlnX0V4dGVuc2lvbicpO1xuICAgICAgICB0aGlzLmRldmljZUluZm8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCAnVFdfTEhfU0RfRGV2aWNlSW5mbycpO1xuICAgICAgICB0aGlzLmRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIHRoaXMucHJvZmlsZV9kYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3llYXJDb25maWcnLCB0aGlzLnllYXJDb25maWcpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGV2aWNlSW5mbycsIHRoaXMuZGV2aWNlSW5mbyk7XG4gICAgICAgIGlmICh0aGlzLnllYXJDb25maWcgJiYgdGhpcy5kZXZpY2VJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YodGhpcy5zYXZlQ29uZmlnKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gcmVzcFtcIkhlYWRlclwiXS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVZZWFyQ29uZmlnQVBJIHJlc3A6JywgcmVzcCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZSh0aGlzLnllYXJDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZSh0aGlzLnllYXJDb25maWdfZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMueWVhckNvbmZpZ3MubWFwKHggPT4gdGhpcy5fZ2V0RGF0ZSh4KSkpLnRoZW4oKCkgPT4gdGhpcy5kYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0RGF0ZSh5ZWFyY2ZnOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZygneWVhcmNmZycsIHllYXJjZmcpO1xuICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG5cbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJEYXRhWWVhclwiLCB5ZWFyY2ZnLkRhdGFZZWFyKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiSXNDdXJyZW50XCIsIHllYXJjZmcuSXNDdXJyZW50ID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoXCIsIHllYXJjZmcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJXb3JraW5nTW9udGhcIiwgeWVhcmNmZy5Xb3JraW5nTW9udGgpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJXb3JraW5nUXVhcnRlclwiLCB5ZWFyY2ZnLldvcmtpbmdRdWFydGVyKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiUXVhcnRlclN0YXJ0TW9udGhcIiwgeWVhcmNmZy5RdWFydGVyU3RhcnRNb250aCk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIlF1YXJ0ZXJFbmRNb250aFwiLCB5ZWFyY2ZnLlF1YXJ0ZXJFbmRNb250aCk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkluaXRpYWxQcmVDYXNlRnlmY1wiLCB5ZWFyY2ZnLkluaXRpYWxQcmVDYXNlRnlmYyk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkZ5ZmNDb3ZlcnRBbnBSYXRlXCIsIHllYXJjZmcuRnlmY0NvdmVydEFucFJhdGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJJbmZvcmNlQ29udmVydEZpbmRSYXRlXCIsIHllYXJjZmcuSW5mb3JjZUNvbnZlcnRGaW5kUmF0ZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlXCIsIHllYXJjZmcuSW5mb3JjZUNvbnZlcnRTY2hlZHVsZVJhdGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJJbmZvcmNlQ29udmVydE1lZXRSYXRlXCIsIHllYXJjZmcuSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZVwiLCB5ZWFyY2ZnLkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIlByb2dyZXNzRGF5UG9pbnRzTGltaXRcIiwgeWVhcmNmZy5Qcm9ncmVzc0RheVBvaW50c0xpbWl0KTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiSW5mb3JjZUNvbnZlcnRQb2ludEJhc2VcIiwgeWVhcmNmZy5JbmZvcmNlQ29udmVydFBvaW50QmFzZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkZpbmRDb252ZXJ0UG9pbnRCYXNlXCIsIHllYXJjZmcuRmluZENvbnZlcnRQb2ludEJhc2UpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2VcIiwgeWVhcmNmZy5TY2hlZHVsZUNvbnZlcnRQb2ludEJhc2UpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJNZWV0Q29udmVydFBvaW50QmFzZVwiLCB5ZWFyY2ZnLk1lZXRDb252ZXJ0UG9pbnRCYXNlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiU3VibWl0Q29udmVydFBvaW50QmFzZVwiLCB5ZWFyY2ZnLlN1Ym1pdENvbnZlcnRQb2ludEJhc2UpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJHb2FsU2V0dGluZ0FjdGl2aXR5UHJvY01vZGVcIiwgeWVhcmNmZy5Hb2FsU2V0dGluZ0FjdGl2aXR5UHJvY01vZGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJQcm9ncmVzc0JhckNvbnRyb2xNb2RlXCIsIHllYXJjZmcuUHJvZ3Jlc3NCYXJDb250cm9sTW9kZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkdvYWxBbmRQbGFuRGlmZmVyZW5jZUxpbWl0XCIsIHllYXJjZmcuR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJOb3dUb1llYXJFbmREYXlzXCIsIHllYXJjZmcuTm93VG9ZZWFyRW5kRGF5cyk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIk1vbnRoUXVhbnRpdHlPZlllYXJcIiwgeWVhcmNmZy5Nb250aFF1YW50aXR5T2ZZZWFyKTtcbiAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGhpcy55ZWFyQ29uZmlnKTtcblxuICAgICAgICAvL0V4dGVuc2lvblxuICAgICAgICB0aGlzLnllYXJDb25maWdfZXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICBpZiAoeWVhcmNmZy5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICB5ZWFyY2ZnLmV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMueWVhckNvbmZpZ19leHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGhpcy55ZWFyQ29uZmlnX2V4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzYXZlQ29uZmlnKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIC8vVXBkYXRlIG90aGVyIHBhcmFtZXRlclxuICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVZZWFyQ29uZmlnQVBJXSBpc0ZpcnN0VXNlJywgdGhpcy5GaXJzdFVzZUFQUCk7XG4gICAgICAgIGlmICh0aGlzLkZpcnN0VXNlQVBQICE9IG51bGwgJiYgdGhpcy5GaXJzdFVzZUFQUCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNhdGVnb3J5XCIsIFtcIkZpcnN0VXNlQVBQXCJdKSk7XG4gICAgICAgICAgICBsZXQgcXVlcnlSZXNwID0gYXdhaXQgdGhpcy5wcm9maWxlX2Rhby5xdWVyeUJ5VGFibGUodGhpcy5kZXZpY2VJbmZvKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZVllYXJDb25maWdBUEldIHF1ZXJ5UmVzcCcsIHF1ZXJ5UmVzcCk7XG4gICAgICAgICAgICBpZiAocXVlcnlSZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVJlc3AuQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsIHRoaXMuRmlyc3RVc2VBUFAgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzYXZlWWVhckNvbmZpZ0FQSV0gZGV2aWNlSW5mbyAxJywgdGhpcy5kZXZpY2VJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlX2Rhby50cmFuc2FjdGlvblVwZGF0ZSh0aGlzLmRldmljZUluZm8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsICdUV19MSF9TRF9EZXZpY2VJbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5zZXRWYWx1ZShcIkNhdGVnb3J5XCIsIFwiRmlyc3RVc2VBUFBcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsIHRoaXMuRmlyc3RVc2VBUFAgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VJbmZvLnNldFZhbHVlKFwiVXBkYXRlVGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZVllYXJDb25maWdBUEldIG90aGVyUGFyYW1ldGVyIDInLCB0aGlzLmRldmljZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVfZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRoaXMuZGV2aWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVfZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=