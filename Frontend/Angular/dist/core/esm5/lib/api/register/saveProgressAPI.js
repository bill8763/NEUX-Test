/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from "rxjs";
import { v4 as uuid } from 'uuid';
import { EqualRestriction } from "../../device";
var saveProgressAPI = /** @class */ (function () {
    function saveProgressAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.ProgressDatas = [];
    }
    /**
     * @return {?}
     */
    saveProgressAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveProgress';
    };
    /**
     * @return {?}
     */
    saveProgressAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    saveProgressAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('ProgressDatas', this.ProgressDatas);
        /** @type {?} */
        var personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
        /** @type {?} */
        var personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
        /** @type {?} */
        var teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
        /** @type {?} */
        var teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
        /** @type {?} */
        var teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
        /** @type {?} */
        var teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
        /** @type {?} */
        var otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
        console.log("table personalProgress", personalProgress);
        console.log("table teamProgressMain", teamProgressMain);
        console.log("table teamProgressDetail", teamProgressDetail);
        console.log("table otherParameter", otherParameter);
        this.dao = this.daoFactory.getDefaultDao();
        if (personalProgress && teamProgressMain && teamProgressDetail && otherParameter) {
            this.dao.transactionDelete(personalProgress);
            this.dao.transactionDelete(teamProgressMain);
            this.dao.transactionDelete(teamProgressDetail);
            this.dao.transactionDelete(personalProgressExt);
            this.dao.transactionDelete(teamProgressMainExt);
            this.dao.transactionDelete(teamProgressDetailExt);
            return from(Promise.all(this.ProgressDatas.map((/**
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
     * @param {?} ProgressData
     * @return {?}
     */
    saveProgressAPI.prototype._getDate = /**
     * @private
     * @param {?} ProgressData
     * @return {?}
     */
    function (ProgressData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, personalProgress, personalProgressExt, teamProgressMain, teamProgressMainExt, teamProgressDetail, teamProgressDetailExt, otherParameter, DataYear, personalDatas, personalDatas_1, personalDatas_1_1, personalData, clientID, TeamMainlDatas, TeamMainlDatas_1, TeamMainlDatas_1_1, TeamMainData, clientID, UnitMap, YesterdayPoint, queryResp;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
                        personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
                        teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
                        teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
                        teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
                        teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        console.log('ProgressData', ProgressData);
                        DataYear = ProgressData.DataYear;
                        console.log('DataYear', DataYear);
                        //save  personal_Progress_Main
                        if (ProgressData.Personal.Values != null) {
                            personalDatas = ProgressData.Personal.Values;
                            console.log('personalDatas', personalDatas);
                            try {
                                for (personalDatas_1 = tslib_1.__values(personalDatas), personalDatas_1_1 = personalDatas_1.next(); !personalDatas_1_1.done; personalDatas_1_1 = personalDatas_1.next()) {
                                    personalData = personalDatas_1_1.value;
                                    clientID = uuid();
                                    personalProgress.setValue("ClientID", clientID);
                                    personalProgress.setValue("DataYear", DataYear);
                                    personalProgress.setValue("DataType", personalData.DataType);
                                    personalProgress.setValue("TimeBase", personalData.TimeBase);
                                    personalProgress.setValue("Find", personalData.Find);
                                    personalProgress.setValue("Schedule", personalData.Schedule);
                                    personalProgress.setValue("Meet", personalData.Meet);
                                    personalProgress.setValue("Submit", personalData.Submit);
                                    personalProgress.setValue("Inforce", personalData.Inforce);
                                    personalProgress.setValue("FYFC", personalData.FYFC);
                                    this.dao.transactionInsert(personalProgress);
                                    personalProgressExt.setValue("ClientID", clientID);
                                    if (personalData.extensions) {
                                        personalData.extensions.forEach((/**
                                         * @param {?} ext
                                         * @return {?}
                                         */
                                        function (ext) {
                                            personalProgressExt.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    this.dao.transactionInsert(personalProgressExt);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (personalDatas_1_1 && !personalDatas_1_1.done && (_a = personalDatas_1.return)) _a.call(personalDatas_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        //save  Team_Progress_Main
                        if (ProgressData.Team.Values != null) {
                            TeamMainlDatas = ProgressData.Team.Values;
                            console.log('TeamMainlDatas', TeamMainlDatas);
                            try {
                                for (TeamMainlDatas_1 = tslib_1.__values(TeamMainlDatas), TeamMainlDatas_1_1 = TeamMainlDatas_1.next(); !TeamMainlDatas_1_1.done; TeamMainlDatas_1_1 = TeamMainlDatas_1.next()) {
                                    TeamMainData = TeamMainlDatas_1_1.value;
                                    clientID = uuid();
                                    teamProgressMain.setValue("ClientID", clientID);
                                    teamProgressMain.setValue("DataYear", DataYear);
                                    teamProgressMain.setValue("DataType", TeamMainData.DataType);
                                    teamProgressMain.setValue("TimeBase", TeamMainData.TimeBase);
                                    teamProgressMain.setValue("Goal", TeamMainData.Goal);
                                    teamProgressMain.setValue("Forecast", TeamMainData.Forecast);
                                    teamProgressMain.setValue("Actual", TeamMainData.Actual);
                                    teamProgressMain.setValue("Shortfall", TeamMainData.Shortfall);
                                    this.dao.transactionInsert(teamProgressMain);
                                    teamProgressMainExt.setValue("ClientID", clientID);
                                    if (TeamMainData.extensions) {
                                        TeamMainData.extensions.forEach((/**
                                         * @param {?} ext
                                         * @return {?}
                                         */
                                        function (ext) {
                                            teamProgressMainExt.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    this.dao.transactionInsert(teamProgressMainExt);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (TeamMainlDatas_1_1 && !TeamMainlDatas_1_1.done && (_b = TeamMainlDatas_1.return)) _b.call(TeamMainlDatas_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        //save  Team_Progress_Detail
                        UnitMap = new Map();
                        if (ProgressData.Team.DirectUnit != null) {
                            UnitMap.set('Direct', ProgressData.Team.DirectUnit);
                        }
                        if (ProgressData.Team.InDirectUnit != null) {
                            UnitMap.set('Indirect', ProgressData.Team.InDirectUnit);
                        }
                        if (UnitMap.size > 0) {
                            UnitMap.forEach((/**
                             * @param {?} datas
                             * @param {?} key
                             * @return {?}
                             */
                            function (datas, key) {
                                console.log('key', key, 'datas', datas);
                                /** @type {?} */
                                var i = 0;
                                for (i = 0; i < datas.length; i++) {
                                    /** @type {?} */
                                    var data = datas[i];
                                    /** @type {?} */
                                    var clientID = uuid();
                                    teamProgressDetail.setValue("ClientID", clientID);
                                    teamProgressDetail.setValue("DataYear", DataYear);
                                    teamProgressDetail.setValue("DirectUnitType", key);
                                    teamProgressDetail.setValue("TimeBase", data.TimeBase);
                                    teamProgressDetail.setValue("AgentID", data.AgentID);
                                    teamProgressDetail.setValue("AgentName", data.AgentName);
                                    teamProgressDetail.setValue("JobGrade", data.JobGrade);
                                    teamProgressDetail.setValue("TeamName", data.TeamName);
                                    teamProgressDetail.setValue("Drilldown", data.Drilldown ? "Y" : "N");
                                    teamProgressDetail.setValue("DataType", data.DataType);
                                    teamProgressDetail.setValue("AppUseMode", data.AppUseMode);
                                    if (data.Activities != null) {
                                        teamProgressDetail.setValue("Activities", data.Activities);
                                    }
                                    teamProgressDetail.setValue("Goal", data.Goal);
                                    teamProgressDetail.setValue("Forecast", data.Forecast);
                                    teamProgressDetail.setValue("Actual", data.Actual);
                                    teamProgressDetail.setValue("Shortfall", data.Shortfall);
                                    teamProgressDetail.setValue("Orders", i);
                                    _this.dao.transactionInsert(teamProgressDetail);
                                    teamProgressDetailExt.setValue("ClientID", clientID);
                                    if (data.extensions) {
                                        data.extensions.forEach((/**
                                         * @param {?} ext
                                         * @return {?}
                                         */
                                        function (ext) {
                                            teamProgressDetailExt.setValue(ext.id, ext.value);
                                        }));
                                    }
                                    _this.dao.transactionInsert(teamProgressDetailExt);
                                }
                            }));
                        }
                        //Update other parameter
                        YesterdayPoint = ProgressData.YesterdayPoint;
                        console.log('[saveProgressAPI] YesterdayPoint', YesterdayPoint);
                        if (!(YesterdayPoint != null && YesterdayPoint != undefined)) return [3 /*break*/, 2];
                        otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                        otherParameter.addRestriction(new EqualRestriction("MappingID", ["YesterdayPoint"]));
                        otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                        return [4 /*yield*/, this.dao.queryByTable(otherParameter).toPromise()];
                    case 1:
                        queryResp = _c.sent();
                        console.log('[saveProgressAPI] queryResp', queryResp);
                        if (queryResp.Header["status"]) {
                            if (queryResp.Body.length > 0) {
                                otherParameter.setValue("SetValue", YesterdayPoint);
                                console.log('[saveProgressAPI] otherParameter 1', otherParameter);
                                this.dao.transactionUpdate(otherParameter);
                            }
                            else {
                                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                                otherParameter.setValue("ClientID", uuid());
                                otherParameter.setValue("DataYear", DataYear);
                                otherParameter.setValue("MappingID", "YesterdayPoint");
                                otherParameter.setValue("SetValue", YesterdayPoint);
                                otherParameter.setValue("syncTime", new Date().getTime());
                                console.log('[saveProgressAPI] otherParameter 2', otherParameter);
                                this.dao.transactionInsert(otherParameter);
                            }
                        }
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return saveProgressAPI;
}());
export { saveProgressAPI };
if (false) {
    /** @type {?} */
    saveProgressAPI.prototype.ProgressDatas;
    /**
     * @type {?}
     * @private
     */
    saveProgressAPI.prototype.dao;
    /**
     * @type {?}
     * @private
     */
    saveProgressAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZVByb2dyZXNzQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvc2F2ZVByb2dyZXNzQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHNUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2hEO0lBS0kseUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIbkMsa0JBQWEsR0FBZSxFQUFFLENBQUM7SUFLdEMsQ0FBQzs7OztJQUdELG9DQUFVOzs7SUFBVjtRQUNJLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFBQSxpQkE4QkM7UUE1QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztZQUM3QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQzs7WUFDaEYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLENBQUM7O1lBQzdGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDOztZQUNqRixtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx1Q0FBdUMsQ0FBQzs7WUFDOUYsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsK0JBQStCLENBQUM7O1lBQ3JG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QUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQ0FDdkQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0NBQ3BELGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQ0FDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxjQUFjLENBQUMsQ0FBQztnQ0FDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs2QkFDOUM7eUJBQ0o7Ozs7OztLQUVSO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBak1ELElBaU1DOzs7O0lBL0xHLHdDQUFzQzs7Ozs7SUFDdEMsOEJBQVk7Ozs7O0lBRUEscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgU1FMQ29tbWFuZCB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTENvbW1hbmRcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzL3V0aWxcIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIHNhdmVQcm9ncmVzc0FQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHB1YmxpYyBQcm9ncmVzc0RhdGFzOiBBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBkYW87XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzYXZlUHJvZ3Jlc3MnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9hZGRDYWxlbmRhckV2ZW50Lmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2dyZXNzRGF0YXMnLCB0aGlzLlByb2dyZXNzRGF0YXMpO1xuICAgICAgICBsZXQgcGVyc29uYWxQcm9ncmVzcyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1BlcnNvbmFsX1Byb2dyZXNzJyk7XG4gICAgICAgIGxldCBwZXJzb25hbFByb2dyZXNzRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfUGVyc29uYWxfUHJvZ3Jlc3NfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NNYWluID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19NYWluJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NNYWluRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19NYWluX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzRGV0YWlsID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19EZXRhaWwnKTtcbiAgICAgICAgbGV0IHRlYW1Qcm9ncmVzc0RldGFpbEV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfRGV0YWlsX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsZSBwZXJzb25hbFByb2dyZXNzXCIsIHBlcnNvbmFsUHJvZ3Jlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIHRlYW1Qcm9ncmVzc01haW5cIiwgdGVhbVByb2dyZXNzTWFpbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFibGUgdGVhbVByb2dyZXNzRGV0YWlsXCIsIHRlYW1Qcm9ncmVzc0RldGFpbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFibGUgb3RoZXJQYXJhbWV0ZXJcIiwgb3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICB0aGlzLmRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGlmIChwZXJzb25hbFByb2dyZXNzICYmIHRlYW1Qcm9ncmVzc01haW4gJiYgdGVhbVByb2dyZXNzRGV0YWlsICYmIG90aGVyUGFyYW1ldGVyKSB7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZShwZXJzb25hbFByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlYW1Qcm9ncmVzc01haW4pO1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUodGVhbVByb2dyZXNzRGV0YWlsKTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHBlcnNvbmFsUHJvZ3Jlc3NFeHQpO1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUodGVhbVByb2dyZXNzTWFpbkV4dCk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZSh0ZWFtUHJvZ3Jlc3NEZXRhaWxFeHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnJvbShQcm9taXNlLmFsbCh0aGlzLlByb2dyZXNzRGF0YXMubWFwKHggPT4gdGhpcy5fZ2V0RGF0ZSh4KSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNwID0gdGhpcy5kYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9nZXREYXRlKFByb2dyZXNzRGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICBsZXQgcGVyc29uYWxQcm9ncmVzcyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1BlcnNvbmFsX1Byb2dyZXNzJyk7XG4gICAgICAgIGxldCBwZXJzb25hbFByb2dyZXNzRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfUGVyc29uYWxfUHJvZ3Jlc3NfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NNYWluID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19NYWluJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NNYWluRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19NYWluX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzRGV0YWlsID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19EZXRhaWwnKTtcbiAgICAgICAgbGV0IHRlYW1Qcm9ncmVzc0RldGFpbEV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfRGV0YWlsX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUHJvZ3Jlc3NEYXRhJywgUHJvZ3Jlc3NEYXRhKTtcblxuICAgICAgICBsZXQgRGF0YVllYXIgPSBQcm9ncmVzc0RhdGEuRGF0YVllYXI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhWWVhcicsIERhdGFZZWFyKTtcblxuICAgICAgICAvL3NhdmUgIHBlcnNvbmFsX1Byb2dyZXNzX01haW5cbiAgICAgICAgaWYgKFByb2dyZXNzRGF0YS5QZXJzb25hbC5WYWx1ZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHBlcnNvbmFsRGF0YXM6IEFycmF5PGFueT4gPSBQcm9ncmVzc0RhdGEuUGVyc29uYWwuVmFsdWVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlcnNvbmFsRGF0YXMnLCBwZXJzb25hbERhdGFzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHBlcnNvbmFsRGF0YSBvZiBwZXJzb25hbERhdGFzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiRGF0YVR5cGVcIiwgcGVyc29uYWxEYXRhLkRhdGFUeXBlKTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiVGltZUJhc2VcIiwgcGVyc29uYWxEYXRhLlRpbWVCYXNlKTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiRmluZFwiLCBwZXJzb25hbERhdGEuRmluZCk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIlNjaGVkdWxlXCIsIHBlcnNvbmFsRGF0YS5TY2hlZHVsZSk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIk1lZXRcIiwgcGVyc29uYWxEYXRhLk1lZXQpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJTdWJtaXRcIiwgcGVyc29uYWxEYXRhLlN1Ym1pdCk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIkluZm9yY2VcIiwgcGVyc29uYWxEYXRhLkluZm9yY2UpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJGWUZDXCIsIHBlcnNvbmFsRGF0YS5GWUZDKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkluc2VydChwZXJzb25hbFByb2dyZXNzKTtcblxuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NFeHQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgaWYgKHBlcnNvbmFsRGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbmFsRGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NFeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQocGVyc29uYWxQcm9ncmVzc0V4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3NhdmUgIFRlYW1fUHJvZ3Jlc3NfTWFpblxuICAgICAgICBpZiAoUHJvZ3Jlc3NEYXRhLlRlYW0uVmFsdWVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBUZWFtTWFpbmxEYXRhczogQXJyYXk8YW55PiA9IFByb2dyZXNzRGF0YS5UZWFtLlZhbHVlcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZWFtTWFpbmxEYXRhcycsIFRlYW1NYWlubERhdGFzKTtcbiAgICAgICAgICAgIGZvciAobGV0IFRlYW1NYWluRGF0YSBvZiBUZWFtTWFpbmxEYXRhcykge1xuICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzTWFpbi5zZXRWYWx1ZShcIkRhdGFUeXBlXCIsIFRlYW1NYWluRGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzTWFpbi5zZXRWYWx1ZShcIlRpbWVCYXNlXCIsIFRlYW1NYWluRGF0YS5UaW1lQmFzZSk7XG4gICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzTWFpbi5zZXRWYWx1ZShcIkdvYWxcIiwgVGVhbU1haW5EYXRhLkdvYWwpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJGb3JlY2FzdFwiLCBUZWFtTWFpbkRhdGEuRm9yZWNhc3QpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJBY3R1YWxcIiwgVGVhbU1haW5EYXRhLkFjdHVhbCk7XG4gICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzTWFpbi5zZXRWYWx1ZShcIlNob3J0ZmFsbFwiLCBUZWFtTWFpbkRhdGEuU2hvcnRmYWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkluc2VydCh0ZWFtUHJvZ3Jlc3NNYWluKTtcblxuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW5FeHQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgaWYgKFRlYW1NYWluRGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIFRlYW1NYWluRGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW5FeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGVhbVByb2dyZXNzTWFpbkV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3NhdmUgIFRlYW1fUHJvZ3Jlc3NfRGV0YWlsXG4gICAgICAgIGxldCBVbml0TWFwID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGFueT4+KCk7XG4gICAgICAgIGlmIChQcm9ncmVzc0RhdGEuVGVhbS5EaXJlY3RVbml0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIFVuaXRNYXAuc2V0KCdEaXJlY3QnLCBQcm9ncmVzc0RhdGEuVGVhbS5EaXJlY3RVbml0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoUHJvZ3Jlc3NEYXRhLlRlYW0uSW5EaXJlY3RVbml0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIFVuaXRNYXAuc2V0KCdJbmRpcmVjdCcsIFByb2dyZXNzRGF0YS5UZWFtLkluRGlyZWN0VW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFVuaXRNYXAuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIFVuaXRNYXAuZm9yRWFjaCgoZGF0YXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXknLCBrZXksICdkYXRhcycsIGRhdGFzKTtcbiAgICAgICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiRGlyZWN0VW5pdFR5cGVcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiVGltZUJhc2VcIiwgZGF0YS5UaW1lQmFzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkFnZW50SURcIiwgZGF0YS5BZ2VudElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiQWdlbnROYW1lXCIsIGRhdGEuQWdlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiSm9iR3JhZGVcIiwgZGF0YS5Kb2JHcmFkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIlRlYW1OYW1lXCIsIGRhdGEuVGVhbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJEcmlsbGRvd25cIiwgZGF0YS5EcmlsbGRvd24gPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiRGF0YVR5cGVcIiwgZGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkFwcFVzZU1vZGVcIiwgZGF0YS5BcHBVc2VNb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuQWN0aXZpdGllcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJBY3Rpdml0aWVzXCIsIGRhdGEuQWN0aXZpdGllcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiR29hbFwiLCBkYXRhLkdvYWwpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJGb3JlY2FzdFwiLCBkYXRhLkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiQWN0dWFsXCIsIGRhdGEuQWN0dWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiU2hvcnRmYWxsXCIsIGRhdGEuU2hvcnRmYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiT3JkZXJzXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkluc2VydCh0ZWFtUHJvZ3Jlc3NEZXRhaWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbEV4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5leHRlbnNpb25zLmZvckVhY2goZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWxFeHQuc2V0VmFsdWUoZXh0LmlkLCBleHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGVhbVByb2dyZXNzRGV0YWlsRXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVXBkYXRlIG90aGVyIHBhcmFtZXRlclxuICAgICAgICBsZXQgWWVzdGVyZGF5UG9pbnQgPSBQcm9ncmVzc0RhdGEuWWVzdGVyZGF5UG9pbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZVByb2dyZXNzQVBJXSBZZXN0ZXJkYXlQb2ludCcsIFllc3RlcmRheVBvaW50KTtcbiAgICAgICAgaWYgKFllc3RlcmRheVBvaW50ICE9IG51bGwgJiYgWWVzdGVyZGF5UG9pbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvdGhlclBhcmFtZXRlciA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX090aGVyX1BhcmFtZXRlcicpO1xuICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNYXBwaW5nSURcIiwgW1wiWWVzdGVyZGF5UG9pbnRcIl0pKTtcbiAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiRGF0YVllYXJcIiwgW0RhdGFZZWFyXSkpO1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UmVzcCA9IGF3YWl0IHRoaXMuZGFvLnF1ZXJ5QnlUYWJsZShvdGhlclBhcmFtZXRlcikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVQcm9ncmVzc0FQSV0gcXVlcnlSZXNwJywgcXVlcnlSZXNwKTtcbiAgICAgICAgICAgIGlmIChxdWVyeVJlc3AuSGVhZGVyW1wic3RhdHVzXCJdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJTZXRWYWx1ZVwiLCBZZXN0ZXJkYXlQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc2F2ZVByb2dyZXNzQVBJXSBvdGhlclBhcmFtZXRlciAxJywgb3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvblVwZGF0ZShvdGhlclBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCB1dWlkKCkpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJNYXBwaW5nSURcIiwgXCJZZXN0ZXJkYXlQb2ludFwiKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJTZXRWYWx1ZVwiLCBZZXN0ZXJkYXlQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwic3luY1RpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVQcm9ncmVzc0FQSV0gb3RoZXJQYXJhbWV0ZXIgMicsIG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQob3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=