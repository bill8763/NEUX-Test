/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from "rxjs";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { v4 as uuid } from 'uuid';
export class saveYearConfigAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.yearConfigs = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveYearConfig';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
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
            resp => {
                /** @type {?} */
                let status = resp["Header"].status;
                console.log('saveYearConfigAPI resp:', resp);
                if (status) {
                    this.dao.transactionDelete(this.yearConfig);
                    this.dao.transactionDelete(this.yearConfig_ext);
                    return Promise.all(this.yearConfigs.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => this._getDate(x)))).then((/**
                     * @return {?}
                     */
                    () => this.dao.runTransaction().toPromise()));
                }
                else
                    return resp;
            })));
        }
        else
            return of(false);
    }
    /**
     * @private
     * @param {?} yearcfg
     * @return {?}
     */
    _getDate(yearcfg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('yearcfg', yearcfg);
            /** @type {?} */
            let clientID = uuid();
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
                ext => {
                    this.yearConfig_ext.setValue(ext.id, ext.value);
                }));
            }
            this.dao.transactionInsert(this.yearConfig_ext);
        });
    }
    /**
     * @private
     * @return {?}
     */
    saveConfig() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //Update other parameter
            console.log('[saveYearConfigAPI] isFirstUse', this.FirstUseAPP);
            if (this.FirstUseAPP != null && this.FirstUseAPP != undefined) {
                this.deviceInfo.addRestriction(new EqualRestriction("Category", ["FirstUseAPP"]));
                /** @type {?} */
                let queryResp = yield this.profile_dao.queryByTable(this.deviceInfo).toPromise();
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
                    return this.profile_dao.runTransaction().toPromise();
                }
            }
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZVllYXJDb25maWdBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlWWVhckNvbmZpZ0FQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTTs7OztJQVVGLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSbkMsZ0JBQVcsR0FBZSxFQUFFLENBQUM7SUFVcEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxxQ0FBcUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUVOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENB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aEhHLHdDQUFvQzs7SUFDcEMsd0NBQTRCOzs7OztJQUU1Qix1Q0FBbUI7Ozs7O0lBQ25CLHVDQUFtQjs7Ozs7SUFDbkIsMkNBQXVCOzs7OztJQUN2QixnQ0FBWTs7Ozs7SUFDWix3Q0FBb0I7Ozs7O0lBQ1IsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cblxuZXhwb3J0IGNsYXNzIHNhdmVZZWFyQ29uZmlnQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHVibGljIHllYXJDb25maWdzOiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIEZpcnN0VXNlQVBQOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBkZXZpY2VJbmZvO1xuICAgIHByaXZhdGUgeWVhckNvbmZpZztcbiAgICBwcml2YXRlIHllYXJDb25maWdfZXh0O1xuICAgIHByaXZhdGUgZGFvO1xuICAgIHByaXZhdGUgcHJvZmlsZV9kYW87XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3NhdmVZZWFyQ29uZmlnJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuXG4gICAgICAgIHRoaXMueWVhckNvbmZpZyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1llYXJfQ29uZmlnJyk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZ19leHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9ZZWFyX0NvbmZpZ19FeHRlbnNpb24nKTtcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKCdQcm9maWxlJywgJ1RXX0xIX1NEX0RldmljZUluZm8nKTtcbiAgICAgICAgdGhpcy5kYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICB0aGlzLnByb2ZpbGVfZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbyhcIlByb2ZpbGVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZWFyQ29uZmlnJywgdGhpcy55ZWFyQ29uZmlnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RldmljZUluZm8nLCB0aGlzLmRldmljZUluZm8pO1xuICAgICAgICBpZiAodGhpcy55ZWFyQ29uZmlnICYmIHRoaXMuZGV2aWNlSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMuc2F2ZUNvbmZpZygpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHJlc3BbXCJIZWFkZXJcIl0uc3RhdHVzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlWWVhckNvbmZpZ0FQSSByZXNwOicsIHJlc3ApO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUodGhpcy55ZWFyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUodGhpcy55ZWFyQ29uZmlnX2V4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLnllYXJDb25maWdzLm1hcCh4ID0+IHRoaXMuX2dldERhdGUoeCkpKS50aGVuKCgpID0+IHRoaXMuZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgX2dldERhdGUoeWVhcmNmZzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3llYXJjZmcnLCB5ZWFyY2ZnKTtcbiAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuXG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgeWVhcmNmZy5EYXRhWWVhcik7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIklzQ3VycmVudFwiLCB5ZWFyY2ZnLklzQ3VycmVudCA/IFwiWVwiIDogXCJOXCIpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aFwiLCB5ZWFyY2ZnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiV29ya2luZ01vbnRoXCIsIHllYXJjZmcuV29ya2luZ01vbnRoKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiV29ya2luZ1F1YXJ0ZXJcIiwgeWVhcmNmZy5Xb3JraW5nUXVhcnRlcik7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIlF1YXJ0ZXJTdGFydE1vbnRoXCIsIHllYXJjZmcuUXVhcnRlclN0YXJ0TW9udGgpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJRdWFydGVyRW5kTW9udGhcIiwgeWVhcmNmZy5RdWFydGVyRW5kTW9udGgpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJJbml0aWFsUHJlQ2FzZUZ5ZmNcIiwgeWVhcmNmZy5Jbml0aWFsUHJlQ2FzZUZ5ZmMpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJGeWZjQ292ZXJ0QW5wUmF0ZVwiLCB5ZWFyY2ZnLkZ5ZmNDb3ZlcnRBbnBSYXRlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiSW5mb3JjZUNvbnZlcnRGaW5kUmF0ZVwiLCB5ZWFyY2ZnLkluZm9yY2VDb252ZXJ0RmluZFJhdGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJJbmZvcmNlQ29udmVydFNjaGVkdWxlUmF0ZVwiLCB5ZWFyY2ZnLkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZVwiLCB5ZWFyY2ZnLkluZm9yY2VDb252ZXJ0TWVldFJhdGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJJbmZvcmNlQ29udmVydFN1Ym1pdFJhdGVcIiwgeWVhcmNmZy5JbmZvcmNlQ29udmVydFN1Ym1pdFJhdGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJQcm9ncmVzc0RheVBvaW50c0xpbWl0XCIsIHllYXJjZmcuUHJvZ3Jlc3NEYXlQb2ludHNMaW1pdCk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlXCIsIHllYXJjZmcuSW5mb3JjZUNvbnZlcnRQb2ludEJhc2UpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJGaW5kQ29udmVydFBvaW50QmFzZVwiLCB5ZWFyY2ZnLkZpbmRDb252ZXJ0UG9pbnRCYXNlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlXCIsIHllYXJjZmcuU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiTWVldENvbnZlcnRQb2ludEJhc2VcIiwgeWVhcmNmZy5NZWV0Q29udmVydFBvaW50QmFzZSk7XG4gICAgICAgIHRoaXMueWVhckNvbmZpZy5zZXRWYWx1ZShcIlN1Ym1pdENvbnZlcnRQb2ludEJhc2VcIiwgeWVhcmNmZy5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiR29hbFNldHRpbmdBY3Rpdml0eVByb2NNb2RlXCIsIHllYXJjZmcuR29hbFNldHRpbmdBY3Rpdml0eVByb2NNb2RlKTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVwiLCB5ZWFyY2ZnLlByb2dyZXNzQmFyQ29udHJvbE1vZGUpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJHb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdFwiLCB5ZWFyY2ZnLkdvYWxBbmRQbGFuRGlmZmVyZW5jZUxpbWl0KTtcbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnLnNldFZhbHVlKFwiTm93VG9ZZWFyRW5kRGF5c1wiLCB5ZWFyY2ZnLk5vd1RvWWVhckVuZERheXMpO1xuICAgICAgICB0aGlzLnllYXJDb25maWcuc2V0VmFsdWUoXCJNb250aFF1YW50aXR5T2ZZZWFyXCIsIHllYXJjZmcuTW9udGhRdWFudGl0eU9mWWVhcik7XG4gICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRoaXMueWVhckNvbmZpZyk7XG5cbiAgICAgICAgLy9FeHRlbnNpb25cbiAgICAgICAgdGhpcy55ZWFyQ29uZmlnX2V4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgaWYgKHllYXJjZmcuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgeWVhcmNmZy5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJDb25maWdfZXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRoaXMueWVhckNvbmZpZ19leHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2F2ZUNvbmZpZygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICAvL1VwZGF0ZSBvdGhlciBwYXJhbWV0ZXJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzYXZlWWVhckNvbmZpZ0FQSV0gaXNGaXJzdFVzZScsIHRoaXMuRmlyc3RVc2VBUFApO1xuICAgICAgICBpZiAodGhpcy5GaXJzdFVzZUFQUCAhPSBudWxsICYmIHRoaXMuRmlyc3RVc2VBUFAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRldmljZUluZm8uYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDYXRlZ29yeVwiLCBbXCJGaXJzdFVzZUFQUFwiXSkpO1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UmVzcCA9IGF3YWl0IHRoaXMucHJvZmlsZV9kYW8ucXVlcnlCeVRhYmxlKHRoaXMuZGV2aWNlSW5mbykudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVZZWFyQ29uZmlnQVBJXSBxdWVyeVJlc3AnLCBxdWVyeVJlc3ApO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlSZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8uc2V0VmFsdWUoXCJDYXRlZ29yeVZhbFwiLCB0aGlzLkZpcnN0VXNlQVBQID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZVllYXJDb25maWdBUEldIGRldmljZUluZm8gMScsIHRoaXMuZGV2aWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZV9kYW8udHJhbnNhY3Rpb25VcGRhdGUodGhpcy5kZXZpY2VJbmZvKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCAnVFdfTEhfU0RfRGV2aWNlSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8uc2V0VmFsdWUoXCJDYXRlZ29yeVwiLCBcIkZpcnN0VXNlQVBQXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8uc2V0VmFsdWUoXCJDYXRlZ29yeVZhbFwiLCB0aGlzLkZpcnN0VXNlQVBQID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5zZXRWYWx1ZShcIlVwZGF0ZVRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVZZWFyQ29uZmlnQVBJXSBvdGhlclBhcmFtZXRlciAyJywgdGhpcy5kZXZpY2VJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlX2Rhby50cmFuc2FjdGlvbkluc2VydCh0aGlzLmRldmljZUluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlX2Rhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il19