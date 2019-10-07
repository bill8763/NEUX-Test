/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
export class saveGoalAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.GoalDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveGoal';
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
        console.log('GoalDatas', this.GoalDatas);
        /** @type {?} */
        let GoalSetting = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting');
        /** @type {?} */
        let GoalSetting_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Extension');
        /** @type {?} */
        let GoalSettingValue = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Value');
        /** @type {?} */
        let GoalSettingPlan = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value');
        /** @type {?} */
        let GoalSettingPlan_Ext = this.daoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Plan_Value_Extension');
        /** @type {?} */
        let dao = this.daoFactory.getDefaultDao();
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
            for (let GoalData of this.GoalDatas) {
                console.log('GoalData', GoalData);
                /** @type {?} */
                let DataYear = GoalData.DataYear;
                console.log('DataYear', DataYear);
                if (GoalData.GoalSetting != null) {
                    /** @type {?} */
                    let GoalSettingData = GoalData.GoalSetting;
                    /** @type {?} */
                    let clientID = uuid();
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
                        ext => {
                            GoalSetting_Ext.setValue(ext.id, ext.value);
                        }));
                    }
                    dao.transactionInsert(GoalSetting_Ext);
                }
                if (GoalData.GoalValue != null) {
                    /** @type {?} */
                    let GoalValueDatas = GoalData.GoalValue;
                    console.log('GoalValueDatas', GoalValueDatas);
                    for (let data of GoalValueDatas) {
                        GoalSettingValue.setValue("ClientID", uuid());
                        GoalSettingValue.setValue("DataYear", DataYear);
                        GoalSettingValue.setValue("DataType", data.DataType);
                        GoalSettingValue.setValue("Value", data.Value.toString());
                        dao.transactionInsert(GoalSettingValue);
                    }
                }
                if (GoalData.GoalPlan != null) {
                    /** @type {?} */
                    let GoalPlanData = GoalData.GoalPlan;
                    console.log('GoalPlanData', GoalPlanData);
                    if (GoalPlanData.TimeBase == 'Month') {
                        /** @type {?} */
                        let GoalPlanDatas = GoalPlanData.Values;
                        for (let data of GoalPlanDatas) {
                            /** @type {?} */
                            let clientID = uuid();
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
                                ext => {
                                    GoalSettingPlan_Ext.setValue(ext.id, ext.value);
                                }));
                            }
                            dao.transactionInsert(GoalSettingPlan_Ext);
                        }
                    }
                }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    }
}
if (false) {
    /** @type {?} */
    saveGoalAPI.prototype.GoalDatas;
    /**
     * @type {?}
     * @private
     */
    saveGoalAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUdvYWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlR29hbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlsQyxNQUFNOzs7O0lBSUYsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZuQyxjQUFTLEdBQWUsRUFBRSxDQUFDO0lBSWxDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUNyQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUM7O1lBQ3RFLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQzs7WUFDcEYsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7O1lBQ2pGLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQzs7WUFDckYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNENBQTRDLENBQUM7O1lBQ25HLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxP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RUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDL0MsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2xFLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDOUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM5QyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBRXZDLFdBQVc7NEJBQ1gsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dDQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Z0NBQUMsR0FBRyxDQUFDLEVBQUU7b0NBQzFCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDcEQsQ0FBQyxFQUFDLENBQUM7NkJBQ047NEJBQ0QsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7eUJBQzlDO3FCQUNKO2lCQUNKO2FBQ0o7WUFDRCxPQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQjs7WUFDSSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7OztJQTdHRyxnQ0FBa0M7Ozs7O0lBRXRCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5cbmV4cG9ydCBjbGFzcyBzYXZlR29hbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHB1YmxpYyBHb2FsRGF0YXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzYXZlR29hbCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxEYXRhcycsIHRoaXMuR29hbERhdGFzKTtcbiAgICAgICAgbGV0IEdvYWxTZXR0aW5nID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nJyk7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ19FeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmdfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ1ZhbHVlID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nX1ZhbHVlJyk7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ1BsYW4gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmdfUGxhbl9WYWx1ZScpO1xuICAgICAgICBsZXQgR29hbFNldHRpbmdQbGFuX0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19QbGFuX1ZhbHVlX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nJywgR29hbFNldHRpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmdfRXh0JywgR29hbFNldHRpbmdfRXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nVmFsdWUnLCBHb2FsU2V0dGluZ1ZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nUGxhbicsIEdvYWxTZXR0aW5nUGxhbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb2FsU2V0dGluZ1BsYW5fRXh0JywgR29hbFNldHRpbmdQbGFuX0V4dCk7XG5cbiAgICAgICAgaWYgKEdvYWxTZXR0aW5nICYmIEdvYWxTZXR0aW5nX0V4dCAmJiBHb2FsU2V0dGluZ1ZhbHVlICYmIEdvYWxTZXR0aW5nUGxhbiAmJiBHb2FsU2V0dGluZ1BsYW5fRXh0KSB7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoR29hbFNldHRpbmcpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEdvYWxTZXR0aW5nVmFsdWUpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEdvYWxTZXR0aW5nUGxhbik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoR29hbFNldHRpbmdfRXh0KTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShHb2FsU2V0dGluZ1BsYW5fRXh0KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgR29hbERhdGEgb2YgdGhpcy5Hb2FsRGF0YXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29hbERhdGEnLCBHb2FsRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgRGF0YVllYXIgPSBHb2FsRGF0YS5EYXRhWWVhcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YVllYXInLCBEYXRhWWVhcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoR29hbERhdGEuR29hbFNldHRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgR29hbFNldHRpbmdEYXRhID0gR29hbERhdGEuR29hbFNldHRpbmc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nRGF0YScsIEdvYWxTZXR0aW5nRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJBcHByb3ZlU3RhdHVzXCIsIEdvYWxTZXR0aW5nRGF0YS5TdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZy5zZXRWYWx1ZShcIklzTmVlZFNldHRpbmdcIiwgR29hbFNldHRpbmdEYXRhLklzTmVlZFNldHRpbmcgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJJc0ZpcnN0VGltZVwiLCBHb2FsU2V0dGluZ0RhdGEuSXNGaXJzdFRpbWUgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJSZW1haW5pbmdkYXlzXCIsIEdvYWxTZXR0aW5nRGF0YS5SZW1haW5pbmdkYXlzKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJHb2FsU2V0TW9udGhcIiwgR29hbFNldHRpbmdEYXRhLkdvYWxTZXRNb250aCk7XG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nLnNldFZhbHVlKFwiUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTVwiLCBHb2FsU2V0dGluZ0RhdGEuUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSk7XG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nLnNldFZhbHVlKFwiVGVhbUdvYWxBcHBsaWNhYmxlWU1cIiwgR29hbFNldHRpbmdEYXRhLlRlYW1Hb2FsQXBwbGljYWJsZVlNKTtcbiAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmcuc2V0VmFsdWUoXCJTdXBlcnZpc29yQ29tbWVudFwiLCBHb2FsU2V0dGluZ0RhdGEuU3VwZXJ2aXNvckNvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vRXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nX0V4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdvYWxTZXR0aW5nRGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0RhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdfRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZ19FeHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChHb2FsRGF0YS5Hb2FsVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgR29hbFZhbHVlRGF0YXM6IEFycmF5PGFueT4gPSBHb2FsRGF0YS5Hb2FsVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb2FsVmFsdWVEYXRhcycsIEdvYWxWYWx1ZURhdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBHb2FsVmFsdWVEYXRhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdWYWx1ZS5zZXRWYWx1ZShcIkNsaWVudElEXCIsIHV1aWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdWYWx1ZS5zZXRWYWx1ZShcIkRhdGFUeXBlXCIsIGRhdGEuRGF0YVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdWYWx1ZS5zZXRWYWx1ZShcIlZhbHVlXCIsIGRhdGEuVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoR29hbERhdGEuR29hbFBsYW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgR29hbFBsYW5EYXRhID0gR29hbERhdGEuR29hbFBsYW47XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb2FsUGxhbkRhdGEnLCBHb2FsUGxhbkRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoR29hbFBsYW5EYXRhLlRpbWVCYXNlID09ICdNb250aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBHb2FsUGxhbkRhdGFzOiBBcnJheTxhbnk+ID0gR29hbFBsYW5EYXRhLlZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgR29hbFBsYW5EYXRhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ1BsYW4uc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nUGxhbi5zZXRWYWx1ZShcIlBlcmZvcm1hbmNlVHlwZVwiLCBkYXRhLlBlcmZvcm1hbmNlVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuLnNldFZhbHVlKFwiTW9udGhcIiwgZGF0YS5Nb250aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuLnNldFZhbHVlKFwiVmFsdWVcIiwgZGF0YS5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KEdvYWxTZXR0aW5nUGxhbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0V4dGVuc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nUGxhbl9FeHQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdQbGFuX0V4dC5zZXRWYWx1ZShleHQuaWQsIGV4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmdQbGFuX0V4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGFvLnJ1blRyYW5zYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbn0iXX0=