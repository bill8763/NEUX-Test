/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from "rxjs";
import { v4 as uuid } from 'uuid';
import { StringUtils } from "../../utils";
import { EqualRestriction } from "../../device";
export class saveAgencyPlanAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.AgencyPlanDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveAgencyPlan';
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
        console.log('AgencyPlanDatas', this.AgencyPlanDatas);
        /** @type {?} */
        let agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
        /** @type {?} */
        let agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
        /** @type {?} */
        let agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
        /** @type {?} */
        let agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
        this.dao = this.daoFactory.getDefaultDao();
        console.log('agencyPlanMain', agencyPlanMain);
        console.log('agencyPlanDetail', agencyPlanDetail);
        if (agencyPlanMain && agencyPlanDetail) {
            this.dao.transactionDelete(agencyPlanDetail);
            this.dao.transactionDelete(agencyPlanDetailExt);
            this.dao.transactionDelete(agencyPlanMain);
            this.dao.transactionDelete(agencyPlanMainExt);
            return from(Promise.all(this.AgencyPlanDatas.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this._getDate(x)))).then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let resp = this.dao.runTransaction().toPromise();
                return resp;
            })));
        }
        else
            return of(false);
    }
    /**
     * @private
     * @param {?} AgencyPlanData
     * @return {?}
     */
    _getDate(AgencyPlanData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
            /** @type {?} */
            let agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
            /** @type {?} */
            let agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
            /** @type {?} */
            let agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
            /** @type {?} */
            let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
            /** @type {?} */
            let DataYear = AgencyPlanData.DataYear;
            console.log('DataYear', DataYear);
            /** @type {?} */
            let MainDatas = AgencyPlanData.Values;
            console.log('MainDatas', MainDatas);
            for (let data of MainDatas) {
                /** @type {?} */
                let clientID = uuid();
                agencyPlanMain.setValue("ClientID", clientID);
                agencyPlanMain.setValue("DataYear", DataYear);
                agencyPlanMain.setValue("DataType", data.DataType);
                agencyPlanMain.setValue("Forecast", data.Forecast);
                agencyPlanMain.setValue("Actual", data.Actual);
                agencyPlanMain.setValue("MonthPlan", data.Plan);
                agencyPlanMain.setValue("Manpower", data.Manpower);
                agencyPlanMain.setValue("Recruitment", data.Recruitment);
                this.dao.transactionInsert(agencyPlanMain);
                agencyPlanMainExt.setValue("ClientID", clientID);
                if (AgencyPlanData.extensions) {
                    AgencyPlanData.extensions.forEach((/**
                     * @param {?} ext
                     * @return {?}
                     */
                    ext => {
                        agencyPlanMainExt.setValue(ext.id, ext.value);
                    }));
                }
                this.dao.transactionInsert(agencyPlanMainExt);
            }
            /** @type {?} */
            let UnitMap = new Map();
            if (AgencyPlanData.DirectUnit != null) {
                UnitMap.set('Direct', AgencyPlanData.DirectUnit);
            }
            if (AgencyPlanData.InDirectUnit != null) {
                UnitMap.set('Indirect', AgencyPlanData.InDirectUnit);
            }
            if (UnitMap.size > 0) {
                UnitMap.forEach((/**
                 * @param {?} datas
                 * @param {?} key
                 * @return {?}
                 */
                (datas, key) => {
                    /** @type {?} */
                    let i = 0;
                    for (i = 0; i < datas.length; i++) {
                        /** @type {?} */
                        let data = datas[i];
                        /** @type {?} */
                        let clientID = uuid();
                        agencyPlanDetail.setValue("ClientID", clientID);
                        agencyPlanDetail.setValue("DataYear", DataYear);
                        agencyPlanDetail.setValue("DirectUnitType", key);
                        agencyPlanDetail.setValue("AgentID", data.AgentID);
                        agencyPlanDetail.setValue("AgentName", data.AgentName);
                        agencyPlanDetail.setValue("JobGrade", data.JobGrade);
                        agencyPlanDetail.setValue("IsApprove", data.IsApprove ? "Y" : "N");
                        agencyPlanDetail.setValue("Drilldown", data.Drilldown ? "Y" : "N");
                        agencyPlanDetail.setValue("AppUseMode", data.AppUseMode);
                        agencyPlanDetail.setValue("DataType", data.DataType);
                        agencyPlanDetail.setValue("Goal", data.Goal);
                        agencyPlanDetail.setValue("Forecast", data.Forecast);
                        agencyPlanDetail.setValue("Actual", data.Actual);
                        agencyPlanDetail.setValue("MonthPlan", data.Plan);
                        agencyPlanDetail.setValue("Manpower", data.Manpower);
                        agencyPlanDetail.setValue("Recruitment", data.Recruitment);
                        agencyPlanDetail.setValue("CaseCount", data.CaseCount);
                        agencyPlanDetail.setValue("PerCase", data.PerCase);
                        agencyPlanDetail.setValue("Orders", i);
                        this.dao.transactionInsert(agencyPlanDetail);
                        agencyPlanDetailExt.setValue("ClientID", clientID);
                        if (data.extensions) {
                            data.extensions.forEach((/**
                             * @param {?} ext
                             * @return {?}
                             */
                            ext => {
                                agencyPlanDetailExt.setValue(ext.id, ext.value);
                            }));
                        }
                        this.dao.transactionInsert(agencyPlanDetailExt);
                    }
                }));
            }
            //Update other parameter
            /** @type {?} */
            let completionRate = AgencyPlanData.CompletionRate;
            console.log('[saveAgencyPlanAPI] completionRate', completionRate);
            if (StringUtils.isNotEmpty(completionRate)) {
                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                otherParameter.addRestriction(new EqualRestriction("MappingID", ["CompletionRate"]));
                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                /** @type {?} */
                let queryResp = yield this.dao.queryByTable(otherParameter).toPromise();
                console.log('[saveAgencyPlanAPI] queryResp', queryResp);
                if (queryResp.Header["status"]) {
                    if (queryResp.Body.length > 0) {
                        otherParameter.setValue("SetValue", completionRate.toString());
                        console.log('[saveAgencyPlanAPI] otherParameter 1', otherParameter);
                        this.dao.transactionUpdate(otherParameter);
                    }
                    else {
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        otherParameter.setValue("ClientID", uuid());
                        otherParameter.setValue("DataYear", DataYear);
                        otherParameter.setValue("MappingID", "CompletionRate");
                        otherParameter.setValue("SetValue", completionRate.toString());
                        otherParameter.setValue("syncTime", new Date().getTime());
                        console.log('[saveAgencyPlanAPI] otherParameter 2', otherParameter);
                        this.dao.transactionInsert(otherParameter);
                    }
                }
            }
        });
    }
}
if (false) {
    /** @type {?} */
    saveAgencyPlanAPI.prototype.AgencyPlanDatas;
    /**
     * @type {?}
     * @private
     */
    saveAgencyPlanAPI.prototype.dao;
    /**
     * @type {?}
     * @private
     */
    saveAgencyPlanAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUFnZW5jeVBsYW5BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlQWdlbmN5UGxhbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2hELE1BQU07Ozs7SUFNRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSm5DLG9CQUFlLEdBQWUsRUFBRSxDQUFDO0lBTXhDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFDakQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7O1lBQ2pGLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVDQUF1QyxDQUFDOztZQUM5RixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O1lBQzdFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFh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RSxDQUFDLENBQUM7d0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzlDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO0tBQUE7Q0FFSjs7O0lBbkpHLDRDQUF3Qzs7Ozs7SUFFeEMsZ0NBQVk7Ozs7O0lBRUEsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgU1FMQ29tbWFuZCB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTENvbW1hbmRcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzL3V0aWxcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBzYXZlQWdlbmN5UGxhbkFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHB1YmxpYyBBZ2VuY3lQbGFuRGF0YXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHByaXZhdGUgZGFvO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3NhdmVBZ2VuY3lQbGFuJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQWdlbmN5UGxhbkRhdGFzJywgdGhpcy5BZ2VuY3lQbGFuRGF0YXMpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbkRldGFpbCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9EZXRhaWxfRGF0YScpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbkRldGFpbEV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9EZXRhaWxfRGF0YV9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGFnZW5jeVBsYW5NYWluID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X1BsYW5fTWFpbicpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbk1haW5FeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluX0V4dGVuc2lvbicpO1xuICAgICAgICB0aGlzLmRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZ2VuY3lQbGFuTWFpbicsIGFnZW5jeVBsYW5NYWluKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW5jeVBsYW5EZXRhaWwnLCBhZ2VuY3lQbGFuRGV0YWlsKTtcbiAgICAgICAgaWYgKGFnZW5jeVBsYW5NYWluICYmIGFnZW5jeVBsYW5EZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFnZW5jeVBsYW5EZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUoYWdlbmN5UGxhbkRldGFpbEV4dCk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZShhZ2VuY3lQbGFuTWFpbik7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZShhZ2VuY3lQbGFuTWFpbkV4dCk7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGZyb20oUHJvbWlzZS5hbGwodGhpcy5BZ2VuY3lQbGFuRGF0YXMubWFwKHggPT4gdGhpcy5fZ2V0RGF0ZSh4KSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNwID0gdGhpcy5kYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0RGF0ZShBZ2VuY3lQbGFuRGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICBsZXQgYWdlbmN5UGxhbkRldGFpbCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9EZXRhaWxfRGF0YScpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbkRldGFpbEV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9EZXRhaWxfRGF0YV9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGFnZW5jeVBsYW5NYWluID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X1BsYW5fTWFpbicpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbk1haW5FeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcblxuICAgICAgICBsZXQgRGF0YVllYXIgPSBBZ2VuY3lQbGFuRGF0YS5EYXRhWWVhcjtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFZZWFyJywgRGF0YVllYXIpO1xuXG4gICAgICAgIGxldCBNYWluRGF0YXM6IEFycmF5PGFueT4gPSBBZ2VuY3lQbGFuRGF0YS5WYWx1ZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWluRGF0YXMnLCBNYWluRGF0YXMpO1xuICAgICAgICBmb3IgKGxldCBkYXRhIG9mIE1haW5EYXRhcykge1xuICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk1haW4uc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluLnNldFZhbHVlKFwiRGF0YVR5cGVcIiwgZGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIkZvcmVjYXN0XCIsIGRhdGEuRm9yZWNhc3QpO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk1haW4uc2V0VmFsdWUoXCJBY3R1YWxcIiwgZGF0YS5BY3R1YWwpO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk1haW4uc2V0VmFsdWUoXCJNb250aFBsYW5cIiwgZGF0YS5QbGFuKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluLnNldFZhbHVlKFwiTWFucG93ZXJcIiwgZGF0YS5NYW5wb3dlcik7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIlJlY3J1aXRtZW50XCIsIGRhdGEuUmVjcnVpdG1lbnQpO1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQoYWdlbmN5UGxhbk1haW4pO1xuXG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbkV4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgIGlmIChBZ2VuY3lQbGFuRGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgQWdlbmN5UGxhbkRhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFnZW5jeVBsYW5NYWluRXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBVbml0TWFwID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG4gICAgICAgIGlmIChBZ2VuY3lQbGFuRGF0YS5EaXJlY3RVbml0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIFVuaXRNYXAuc2V0KCdEaXJlY3QnLCBBZ2VuY3lQbGFuRGF0YS5EaXJlY3RVbml0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQWdlbmN5UGxhbkRhdGEuSW5EaXJlY3RVbml0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIFVuaXRNYXAuc2V0KCdJbmRpcmVjdCcsIEFnZW5jeVBsYW5EYXRhLkluRGlyZWN0VW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFVuaXRNYXAuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIFVuaXRNYXAuZm9yRWFjaCgoZGF0YXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGRhdGFzW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJEaXJlY3RVbml0VHlwZVwiLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiQWdlbnRJRFwiLCBkYXRhLkFnZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiQWdlbnROYW1lXCIsIGRhdGEuQWdlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkpvYkdyYWRlXCIsIGRhdGEuSm9iR3JhZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiSXNBcHByb3ZlXCIsIGRhdGEuSXNBcHByb3ZlID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJEcmlsbGRvd25cIiwgZGF0YS5EcmlsbGRvd24gPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkFwcFVzZU1vZGVcIiwgZGF0YS5BcHBVc2VNb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkRhdGFUeXBlXCIsIGRhdGEuRGF0YVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiR29hbFwiLCBkYXRhLkdvYWwpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiRm9yZWNhc3RcIiwgZGF0YS5Gb3JlY2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJBY3R1YWxcIiwgZGF0YS5BY3R1YWwpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiTW9udGhQbGFuXCIsIGRhdGEuUGxhbik7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJNYW5wb3dlclwiLCBkYXRhLk1hbnBvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIlJlY3J1aXRtZW50XCIsIGRhdGEuUmVjcnVpdG1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiQ2FzZUNvdW50XCIsIGRhdGEuQ2FzZUNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIlBlckNhc2VcIiwgZGF0YS5QZXJDYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIk9yZGVyc1wiLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQoYWdlbmN5UGxhbkRldGFpbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbEV4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFnZW5jeVBsYW5EZXRhaWxFeHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9VcGRhdGUgb3RoZXIgcGFyYW1ldGVyXG4gICAgICAgIGxldCBjb21wbGV0aW9uUmF0ZSA9IEFnZW5jeVBsYW5EYXRhLkNvbXBsZXRpb25SYXRlO1xuICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVBZ2VuY3lQbGFuQVBJXSBjb21wbGV0aW9uUmF0ZScsIGNvbXBsZXRpb25SYXRlKTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY29tcGxldGlvblJhdGUpKSB7XG4gICAgICAgICAgICBvdGhlclBhcmFtZXRlciA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX090aGVyX1BhcmFtZXRlcicpO1xuICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNYXBwaW5nSURcIiwgW1wiQ29tcGxldGlvblJhdGVcIl0pKTtcbiAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiRGF0YVllYXJcIiwgW0RhdGFZZWFyXSkpO1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UmVzcCA9IGF3YWl0IHRoaXMuZGFvLnF1ZXJ5QnlUYWJsZShvdGhlclBhcmFtZXRlcikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVBZ2VuY3lQbGFuQVBJXSBxdWVyeVJlc3AnLCBxdWVyeVJlc3ApO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlSZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIlNldFZhbHVlXCIsIGNvbXBsZXRpb25SYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVBZ2VuY3lQbGFuQVBJXSBvdGhlclBhcmFtZXRlciAxJywgb3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvblVwZGF0ZShvdGhlclBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCB1dWlkKCkpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJNYXBwaW5nSURcIiwgXCJDb21wbGV0aW9uUmF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJTZXRWYWx1ZVwiLCBjb21wbGV0aW9uUmF0ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJzeW5jVGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZUFnZW5jeVBsYW5BUEldIG90aGVyUGFyYW1ldGVyIDInLCBvdGhlclBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=