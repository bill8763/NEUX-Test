/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
var saveGoalAPI = /** @class */ (function () {
    function saveGoalAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.GoalDatas = [];
    }
    /**
     * @return {?}
     */
    saveGoalAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveGoal';
    };
    /**
     * @return {?}
     */
    saveGoalAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    saveGoalAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b, e_3, _c;
        console.log('GoalDatas', this.GoalDatas);
        /** @type {?} */
        var GoalSetting = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting');
        /** @type {?} */
        var GoalSetting_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Extension');
        /** @type {?} */
        var GoalSettingValue = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Value');
        /** @type {?} */
        var GoalSettingPlan = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value');
        /** @type {?} */
        var GoalSettingPlan_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value_Extension');
        /** @type {?} */
        var dao = this.daoFactory.getDefaultDao();
        console.log('GoalSetting', GoalSetting);
        console.log('GoalSetting_Ext', GoalSetting_Ext);
        console.log('GoalSettingValue', GoalSettingValue);
        console.log('GoalSettingPlan', GoalSettingPlan);
        console.log('GoalSettingPlan_Ext', GoalSettingPlan_Ext);
        if (GoalSetting && GoalSetting_Ext && GoalSettingValue && GoalSettingPlan && GoalSettingPlan_Ext) {
            dao.transactionDelete(GoalSetting);
            dao.transactionDelete(GoalSettingValue);
            dao.transactionDelete(GoalSettingPlan);
            dao.transactionDelete(GoalSetting_Ext);
            dao.transactionDelete(GoalSettingPlan_Ext);
            try {
                for (var _d = tslib_1.__values(this.GoalDatas), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var GoalData = _e.value;
                    console.log('GoalData', GoalData);
                    /** @type {?} */
                    var DataYear = GoalData.DataYear;
                    console.log('DataYear', DataYear);
                    if (GoalData.GoalSetting != null) {
                        /** @type {?} */
                        var GoalSettingData = GoalData.GoalSetting;
                        /** @type {?} */
                        var clientID = uuid();
                        console.log('GoalSettingData', GoalSettingData);
                        GoalSetting.setValue("ClientID", clientID);
                        GoalSetting.setValue("DataYear", DataYear);
                        GoalSetting.setValue("ApproveStatus", GoalSettingData.Status);
                        GoalSetting.setValue("IsNeedSetting", GoalSettingData.IsNeedSetting ? "Y" : "N");
                        GoalSetting.setValue("IsFirstTime", GoalSettingData.IsFirstTime ? "Y" : "N");
                        GoalSetting.setValue("Remainingdays", GoalSettingData.Remainingdays);
                        GoalSetting.setValue("GoalSetMonth", GoalSettingData.GoalSetMonth);
                        GoalSetting.setValue("PersonnelGoalApplicableYM", GoalSettingData.PersonnelGoalApplicableYM);
                        GoalSetting.setValue("TeamGoalApplicableYM", GoalSettingData.TeamGoalApplicableYM);
                        GoalSetting.setValue("SupervisorComment", GoalSettingData.SupervisorComment);
                        dao.transactionInsert(GoalSetting);
                        //Extension
                        GoalSetting_Ext.setValue("ClientID", clientID);
                        if (GoalSettingData.extensions) {
                            GoalSettingData.extensions.forEach((/**
                             * @param {?} ext
                             * @return {?}
                             */
                            function (ext) {
                                GoalSetting_Ext.setValue(ext.id, ext.value);
                            }));
                        }
                        dao.transactionInsert(GoalSetting_Ext);
                    }
                    if (GoalData.GoalValue != null) {
                        /** @type {?} */
                        var GoalValueDatas = GoalData.GoalValue;
                        console.log('GoalValueDatas', GoalValueDatas);
                        try {
                            for (var GoalValueDatas_1 = tslib_1.__values(GoalValueDatas), GoalValueDatas_1_1 = GoalValueDatas_1.next(); !GoalValueDatas_1_1.done; GoalValueDatas_1_1 = GoalValueDatas_1.next()) {
                                var data = GoalValueDatas_1_1.value;
                                GoalSettingValue.setValue("ClientID", uuid());
                                GoalSettingValue.setValue("DataYear", DataYear);
                                GoalSettingValue.setValue("DataType", data.DataType);
                                GoalSettingValue.setValue("Value", data.Value.toString());
                                dao.transactionInsert(GoalSettingValue);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (GoalValueDatas_1_1 && !GoalValueDatas_1_1.done && (_b = GoalValueDatas_1.return)) _b.call(GoalValueDatas_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                    if (GoalData.GoalPlan != null) {
                        /** @type {?} */
                        var GoalPlanData = GoalData.GoalPlan;
                        console.log('GoalPlanData', GoalPlanData);
                        if (GoalPlanData.TimeBase == 'Month') {
                            /** @type {?} */
                            var GoalPlanDatas = GoalPlanData.Values;
                            try {
                                for (var GoalPlanDatas_1 = tslib_1.__values(GoalPlanDatas), GoalPlanDatas_1_1 = GoalPlanDatas_1.next(); !GoalPlanDatas_1_1.done; GoalPlanDatas_1_1 = GoalPlanDatas_1.next()) {
                                    var data = GoalPlanDatas_1_1.value;
                                    /** @type {?} */
                                    var clientID = uuid();
                                    GoalSettingPlan.setValue("ClientID", clientID);
                                    GoalSettingPlan.setValue("DataYear", DataYear);
                                    GoalSettingPlan.setValue("PerformanceType", data.PerformanceType);
                                    GoalSettingPlan.setValue("Month", data.Month);
                                    GoalSettingPlan.setValue("Value", data.Value);
                                    dao.transactionInsert(GoalSettingPlan);
                                    //Extension
                                    GoalSettingPlan_Ext.setValue("ClientID", clientID);
                                    if (data.extensions) {
                                        data.extensions.forEach((/**
                                         * @param {?} ext
                                         * @return {?}
                                         */
                                        function (ext) {
                                            GoalSettingPlan_Ext.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    dao.transactionInsert(GoalSettingPlan_Ext);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (GoalPlanDatas_1_1 && !GoalPlanDatas_1_1.done && (_c = GoalPlanDatas_1.return)) _c.call(GoalPlanDatas_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    };
    return saveGoalAPI;
}());
export { saveGoalAPI };
if (false) {
    /** @type {?} */
    saveGoalAPI.prototype.GoalDatas;
    /**
     * @type {?}
     * @private
     */
    saveGoalAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUdvYWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlR29hbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJbEM7SUFJSSxxQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZuQyxjQUFTLEdBQWUsRUFBRSxDQUFDO0lBSWxDLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0ksT0FBTyxxQ0FBcUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsZ0NBQVU7OztJQUFWOztRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFDckMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDOztZQUN0RSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUNBQWlDLENBQUM7O1lBQ3BGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDOztZQUNqRixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsa0NBQWtDLENBQUM7O1lBQ3JGLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDRDQUE0QyxDQUFDOztZQUNuRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FB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b3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5cblxuZXhwb3J0IGNsYXNzIHNhdmVHb2FsQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHVibGljIEdvYWxEYXRhczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3NhdmVHb2FsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbERhdGFzJywgdGhpcy5Hb2FsRGF0YXMpO1xuICAgICAgICBsZXQgR29hbFNldHRpbmcgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmcnKTtcbiAgICAgICAgbGV0IEdvYWxTZXR0aW5nX0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IEdvYWxTZXR0aW5nVmFsdWUgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmdfVmFsdWUnKTtcbiAgICAgICAgbGV0IEdvYWxTZXR0aW5nUGxhbiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19QbGFuX1ZhbHVlJyk7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ1BsYW5fRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nX1BsYW5fVmFsdWVfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmcnLCBHb2FsU2V0dGluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb2FsU2V0dGluZ19FeHQnLCBHb2FsU2V0dGluZ19FeHQpO1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmdWYWx1ZScsIEdvYWxTZXR0aW5nVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmdQbGFuJywgR29hbFNldHRpbmdQbGFuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nUGxhbl9FeHQnLCBHb2FsU2V0dGluZ1BsYW5fRXh0KTtcblxuICAgICAgICBpZiAoR29hbFNldHRpbmcgJiYgR29hbFNldHRpbmdfRXh0ICYmIEdvYWxTZXR0aW5nVmFsdWUgJiYgR29hbFNldHRpbmdQbGFuICYmIEdvYWxTZXR0aW5nUGxhbl9FeHQpIHtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShHb2FsU2V0dGluZyk7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoR29hbFNldHRpbmdWYWx1ZSk7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoR29hbFNldHRpbmdQbGFuKTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShHb2FsU2V0dGluZ19FeHQpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEdvYWxTZXR0aW5nUGxhbl9FeHQpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBHb2FsRGF0YSBvZiB0aGlzLkdvYWxEYXRhcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb2FsRGF0YScsIEdvYWxEYXRhKTtcblxuICAgICAgICAgICAgICAgIGxldCBEYXRhWWVhciA9IEdvYWxEYXRhLkRhdGFZZWFyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhWWVhcicsIERhdGFZZWFyKTtcblxuICAgICAgICAgICAgICAgIGlmIChHb2FsRGF0YS5Hb2FsU2V0dGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBHb2FsU2V0dGluZ0RhdGEgPSBHb2FsRGF0YS5Hb2FsU2V0dGluZztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmdEYXRhJywgR29hbFNldHRpbmdEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIkFwcHJvdmVTdGF0dXNcIiwgR29hbFNldHRpbmdEYXRhLlN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nLnNldFZhbHVlKFwiSXNOZWVkU2V0dGluZ1wiLCBHb2FsU2V0dGluZ0RhdGEuSXNOZWVkU2V0dGluZyA/IFwiWVwiIDogXCJOXCIpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIklzRmlyc3RUaW1lXCIsIEdvYWxTZXR0aW5nRGF0YS5Jc0ZpcnN0VGltZSA/IFwiWVwiIDogXCJOXCIpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIlJlbWFpbmluZ2RheXNcIiwgR29hbFNldHRpbmdEYXRhLlJlbWFpbmluZ2RheXMpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIkdvYWxTZXRNb250aFwiLCBHb2FsU2V0dGluZ0RhdGEuR29hbFNldE1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJQZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNXCIsIEdvYWxTZXR0aW5nRGF0YS5QZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJUZWFtR29hbEFwcGxpY2FibGVZTVwiLCBHb2FsU2V0dGluZ0RhdGEuVGVhbUdvYWxBcHBsaWNhYmxlWU0pO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIlN1cGVydmlzb3JDb21tZW50XCIsIEdvYWxTZXR0aW5nRGF0YS5TdXBlcnZpc29yQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9FeHRlbnNpb25cbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdfRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoR29hbFNldHRpbmdEYXRhLmV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ19FeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KEdvYWxTZXR0aW5nX0V4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKEdvYWxEYXRhLkdvYWxWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBHb2FsVmFsdWVEYXRhczogQXJyYXk8YW55PiA9IEdvYWxEYXRhLkdvYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxWYWx1ZURhdGFzJywgR29hbFZhbHVlRGF0YXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIEdvYWxWYWx1ZURhdGFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgdXVpZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nVmFsdWUuc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnNldFZhbHVlKFwiRGF0YVR5cGVcIiwgZGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnNldFZhbHVlKFwiVmFsdWVcIiwgZGF0YS5WYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChHb2FsRGF0YS5Hb2FsUGxhbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBHb2FsUGxhbkRhdGEgPSBHb2FsRGF0YS5Hb2FsUGxhbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxQbGFuRGF0YScsIEdvYWxQbGFuRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChHb2FsUGxhbkRhdGEuVGltZUJhc2UgPT0gJ01vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEdvYWxQbGFuRGF0YXM6IEFycmF5PGFueT4gPSBHb2FsUGxhbkRhdGEuVmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBHb2FsUGxhbkRhdGFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nUGxhbi5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1BsYW4uc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuLnNldFZhbHVlKFwiUGVyZm9ybWFuY2VUeXBlXCIsIGRhdGEuUGVyZm9ybWFuY2VUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1BsYW4uc2V0VmFsdWUoXCJNb250aFwiLCBkYXRhLk1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1BsYW4uc2V0VmFsdWUoXCJWYWx1ZVwiLCBkYXRhLlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmdQbGFuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuX0V4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1BsYW5fRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZ1BsYW5fRXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYW8ucnVuVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxufSJdfQ==