/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from "rxjs";
import { v4 as uuid } from 'uuid';
import { StringUtils } from "../../utils";
import { EqualRestriction } from "../../device";
var saveAgencyPlanAPI = /** @class */ (function () {
    function saveAgencyPlanAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.AgencyPlanDatas = [];
    }
    /**
     * @return {?}
     */
    saveAgencyPlanAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveAgencyPlan';
    };
    /**
     * @return {?}
     */
    saveAgencyPlanAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    saveAgencyPlanAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('AgencyPlanDatas', this.AgencyPlanDatas);
        /** @type {?} */
        var agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
        /** @type {?} */
        var agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
        /** @type {?} */
        var agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
        /** @type {?} */
        var agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
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
            function (x) { return _this._getDate(x); }))).then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var resp = _this.dao.runTransaction().toPromise();
                return resp;
            })));
        }
        else
            return of(false);
    };
    /**
     * @private
     * @param {?} AgencyPlanData
     * @return {?}
     */
    saveAgencyPlanAPI.prototype._getDate = /**
     * @private
     * @param {?} AgencyPlanData
     * @return {?}
     */
    function (AgencyPlanData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, agencyPlanDetail, agencyPlanDetailExt, agencyPlanMain, agencyPlanMainExt, otherParameter, DataYear, MainDatas, MainDatas_1, MainDatas_1_1, data, clientID, UnitMap, completionRate, queryResp;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        agencyPlanDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data');
                        agencyPlanDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Detail_Data_Extension');
                        agencyPlanMain = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main');
                        agencyPlanMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Agency_Plan_Main_Extension');
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        DataYear = AgencyPlanData.DataYear;
                        console.log('DataYear', DataYear);
                        MainDatas = AgencyPlanData.Values;
                        console.log('MainDatas', MainDatas);
                        try {
                            for (MainDatas_1 = tslib_1.__values(MainDatas), MainDatas_1_1 = MainDatas_1.next(); !MainDatas_1_1.done; MainDatas_1_1 = MainDatas_1.next()) {
                                data = MainDatas_1_1.value;
                                clientID = uuid();
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
                                    function (ext) {
                                        agencyPlanMainExt.setValue(ext.id, ext.value);
                                    }));
                                }
                                this.dao.transactionInsert(agencyPlanMainExt);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (MainDatas_1_1 && !MainDatas_1_1.done && (_a = MainDatas_1.return)) _a.call(MainDatas_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        UnitMap = new Map();
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
                            function (datas, key) {
                                /** @type {?} */
                                var i = 0;
                                for (i = 0; i < datas.length; i++) {
                                    /** @type {?} */
                                    var data = datas[i];
                                    /** @type {?} */
                                    var clientID = uuid();
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
                                    _this.dao.transactionInsert(agencyPlanDetail);
                                    agencyPlanDetailExt.setValue("ClientID", clientID);
                                    if (data.extensions) {
                                        data.extensions.forEach((/**
                                         * @param {?} ext
                                         * @return {?}
                                         */
                                        function (ext) {
                                            agencyPlanDetailExt.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    _this.dao.transactionInsert(agencyPlanDetailExt);
                                }
                            }));
                        }
                        //Update other parameter
                        completionRate = AgencyPlanData.CompletionRate;
                        console.log('[saveAgencyPlanAPI] completionRate', completionRate);
                        if (!StringUtils.isNotEmpty(completionRate)) return [3 /*break*/, 2];
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        otherParameter.addRestriction(new EqualRestriction("MappingID", ["CompletionRate"]));
                        otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                        return [4 /*yield*/, this.dao.queryByTable(otherParameter).toPromise()];
                    case 1:
                        queryResp = _b.sent();
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
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return saveAgencyPlanAPI;
}());
export { saveAgencyPlanAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUFnZW5jeVBsYW5BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zYXZlQWdlbmN5UGxhbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2hEO0lBTUksMkJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbkMsb0JBQWUsR0FBZSxFQUFFLENBQUM7SUFNeEMsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNJLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUFBLGlCQXNCQztRQXJCRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFDakQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7O1lBQ2pGLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVDQUF1QyxDQUFDOztZQUM5RixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O1lBQzdFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxHQUFH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LENBQUMsQ0FBQztnQ0FDL0QsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dDQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dDQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDOzZCQUM5Qzt5QkFDSjs7Ozs7O0tBRVI7SUFFTCx3QkFBQztBQUFELENBQUMsQUFySkQsSUFxSkM7Ozs7SUFuSkcsNENBQXdDOzs7OztJQUV4QyxnQ0FBWTs7Ozs7SUFFQSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tIFwiLi4vU1FMaXRlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3JlbmRlcjMvdXRpbFwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIHNhdmVBZ2VuY3lQbGFuQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHVibGljIEFnZW5jeVBsYW5EYXRhczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgcHJpdmF0ZSBkYW87XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnc2F2ZUFnZW5jeVBsYW4nO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9hZGRDYWxlbmRhckV2ZW50Lmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZ2VuY3lQbGFuRGF0YXMnLCB0aGlzLkFnZW5jeVBsYW5EYXRhcyk7XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuRGV0YWlsID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X0RldGFpbF9EYXRhJyk7XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuRGV0YWlsRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X0RldGFpbF9EYXRhX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbk1haW4gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluJyk7XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuTWFpbkV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9QbGFuX01haW5fRXh0ZW5zaW9uJyk7XG4gICAgICAgIHRoaXMuZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FnZW5jeVBsYW5NYWluJywgYWdlbmN5UGxhbk1haW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnYWdlbmN5UGxhbkRldGFpbCcsIGFnZW5jeVBsYW5EZXRhaWwpO1xuICAgICAgICBpZiAoYWdlbmN5UGxhbk1haW4gJiYgYWdlbmN5UGxhbkRldGFpbCkge1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUoYWdlbmN5UGxhbkRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZShhZ2VuY3lQbGFuRGV0YWlsRXh0KTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFnZW5jeVBsYW5NYWluKTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFnZW5jeVBsYW5NYWluRXh0KTtcblxuXG4gICAgICAgICAgICByZXR1cm4gZnJvbShQcm9taXNlLmFsbCh0aGlzLkFnZW5jeVBsYW5EYXRhcy5tYXAoeCA9PiB0aGlzLl9nZXREYXRlKHgpKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3AgPSB0aGlzLmRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9nZXREYXRlKEFnZW5jeVBsYW5EYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIGxldCBhZ2VuY3lQbGFuRGV0YWlsID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X0RldGFpbF9EYXRhJyk7XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuRGV0YWlsRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWdlbmN5X0RldGFpbF9EYXRhX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgYWdlbmN5UGxhbk1haW4gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluJyk7XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuTWFpbkV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FnZW5jeV9QbGFuX01haW5fRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCBvdGhlclBhcmFtZXRlciA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX090aGVyX1BhcmFtZXRlcicpO1xuXG4gICAgICAgIGxldCBEYXRhWWVhciA9IEFnZW5jeVBsYW5EYXRhLkRhdGFZZWFyO1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YVllYXInLCBEYXRhWWVhcik7XG5cbiAgICAgICAgbGV0IE1haW5EYXRhczogQXJyYXk8YW55PiA9IEFnZW5jeVBsYW5EYXRhLlZhbHVlcztcbiAgICAgICAgY29uc29sZS5sb2coJ01haW5EYXRhcycsIE1haW5EYXRhcyk7XG4gICAgICAgIGZvciAobGV0IGRhdGEgb2YgTWFpbkRhdGFzKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk1haW4uc2V0VmFsdWUoXCJEYXRhVHlwZVwiLCBkYXRhLkRhdGFUeXBlKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluLnNldFZhbHVlKFwiRm9yZWNhc3RcIiwgZGF0YS5Gb3JlY2FzdCk7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIkFjdHVhbFwiLCBkYXRhLkFjdHVhbCk7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuTWFpbi5zZXRWYWx1ZShcIk1vbnRoUGxhblwiLCBkYXRhLlBsYW4pO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk1haW4uc2V0VmFsdWUoXCJNYW5wb3dlclwiLCBkYXRhLk1hbnBvd2VyKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluLnNldFZhbHVlKFwiUmVjcnVpdG1lbnRcIiwgZGF0YS5SZWNydWl0bWVudCk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkluc2VydChhZ2VuY3lQbGFuTWFpbik7XG5cbiAgICAgICAgICAgIGFnZW5jeVBsYW5NYWluRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgaWYgKEFnZW5jeVBsYW5EYXRhLmV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgICBBZ2VuY3lQbGFuRGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbk1haW5FeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQoYWdlbmN5UGxhbk1haW5FeHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFVuaXRNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8YW55Pj4oKTtcbiAgICAgICAgaWYgKEFnZW5jeVBsYW5EYXRhLkRpcmVjdFVuaXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgVW5pdE1hcC5zZXQoJ0RpcmVjdCcsIEFnZW5jeVBsYW5EYXRhLkRpcmVjdFVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBZ2VuY3lQbGFuRGF0YS5JbkRpcmVjdFVuaXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgVW5pdE1hcC5zZXQoJ0luZGlyZWN0JywgQWdlbmN5UGxhbkRhdGEuSW5EaXJlY3RVbml0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVW5pdE1hcC5zaXplID4gMCkge1xuICAgICAgICAgICAgVW5pdE1hcC5mb3JFYWNoKChkYXRhcywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZGF0YXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkRpcmVjdFVuaXRUeXBlXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJBZ2VudElEXCIsIGRhdGEuQWdlbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJBZ2VudE5hbWVcIiwgZGF0YS5BZ2VudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiSm9iR3JhZGVcIiwgZGF0YS5Kb2JHcmFkZSk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJJc0FwcHJvdmVcIiwgZGF0YS5Jc0FwcHJvdmUgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkRyaWxsZG93blwiLCBkYXRhLkRyaWxsZG93biA/IFwiWVwiIDogXCJOXCIpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiQXBwVXNlTW9kZVwiLCBkYXRhLkFwcFVzZU1vZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiRGF0YVR5cGVcIiwgZGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJHb2FsXCIsIGRhdGEuR29hbCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJGb3JlY2FzdFwiLCBkYXRhLkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIkFjdHVhbFwiLCBkYXRhLkFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJNb250aFBsYW5cIiwgZGF0YS5QbGFuKTtcbiAgICAgICAgICAgICAgICAgICAgYWdlbmN5UGxhbkRldGFpbC5zZXRWYWx1ZShcIk1hbnBvd2VyXCIsIGRhdGEuTWFucG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiUmVjcnVpdG1lbnRcIiwgZGF0YS5SZWNydWl0bWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWwuc2V0VmFsdWUoXCJDYXNlQ291bnRcIiwgZGF0YS5DYXNlQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiUGVyQ2FzZVwiLCBkYXRhLlBlckNhc2UpO1xuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsLnNldFZhbHVlKFwiT3JkZXJzXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkluc2VydChhZ2VuY3lQbGFuRGV0YWlsKTtcblxuICAgICAgICAgICAgICAgICAgICBhZ2VuY3lQbGFuRGV0YWlsRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZW5jeVBsYW5EZXRhaWxFeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQoYWdlbmN5UGxhbkRldGFpbEV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1VwZGF0ZSBvdGhlciBwYXJhbWV0ZXJcbiAgICAgICAgbGV0IGNvbXBsZXRpb25SYXRlID0gQWdlbmN5UGxhbkRhdGEuQ29tcGxldGlvblJhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZUFnZW5jeVBsYW5BUEldIGNvbXBsZXRpb25SYXRlJywgY29tcGxldGlvblJhdGUpO1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjb21wbGV0aW9uUmF0ZSkpIHtcbiAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyJyk7XG4gICAgICAgICAgICBvdGhlclBhcmFtZXRlci5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIk1hcHBpbmdJRFwiLCBbXCJDb21wbGV0aW9uUmF0ZVwiXSkpO1xuICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJEYXRhWWVhclwiLCBbRGF0YVllYXJdKSk7XG4gICAgICAgICAgICBsZXQgcXVlcnlSZXNwID0gYXdhaXQgdGhpcy5kYW8ucXVlcnlCeVRhYmxlKG90aGVyUGFyYW1ldGVyKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZUFnZW5jeVBsYW5BUEldIHF1ZXJ5UmVzcCcsIHF1ZXJ5UmVzcCk7XG4gICAgICAgICAgICBpZiAocXVlcnlSZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVJlc3AuQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiU2V0VmFsdWVcIiwgY29tcGxldGlvblJhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZUFnZW5jeVBsYW5BUEldIG90aGVyUGFyYW1ldGVyIDEnLCBvdGhlclBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uVXBkYXRlKG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlciA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX090aGVyX1BhcmFtZXRlcicpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIkNsaWVudElEXCIsIHV1aWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIk1hcHBpbmdJRFwiLCBcIkNvbXBsZXRpb25SYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIlNldFZhbHVlXCIsIGNvbXBsZXRpb25SYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcInN5bmNUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzYXZlQWdlbmN5UGxhbkFQSV0gb3RoZXJQYXJhbWV0ZXIgMicsIG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQob3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==