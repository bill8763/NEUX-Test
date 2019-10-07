/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from "rxjs";
import { v4 as uuid } from 'uuid';
import { EqualRestriction } from "../../device";
export class saveProgressAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.ProgressDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveProgress';
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
        console.log('ProgressDatas', this.ProgressDatas);
        /** @type {?} */
        let personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
        /** @type {?} */
        let personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
        /** @type {?} */
        let teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
        /** @type {?} */
        let teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
        /** @type {?} */
        let teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
        /** @type {?} */
        let teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
        /** @type {?} */
        let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
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
     * @param {?} ProgressData
     * @return {?}
     */
    _getDate(ProgressData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let personalProgress = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress');
            /** @type {?} */
            let personalProgressExt = this.daoFactory.getDefaultTable('TW_LH_SD_Personal_Progress_Extension');
            /** @type {?} */
            let teamProgressMain = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main');
            /** @type {?} */
            let teamProgressMainExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Main_Extension');
            /** @type {?} */
            let teamProgressDetail = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail');
            /** @type {?} */
            let teamProgressDetailExt = this.daoFactory.getDefaultTable('TW_LH_SD_Team_Progress_Detail_Extension');
            /** @type {?} */
            let otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
            console.log('ProgressData', ProgressData);
            /** @type {?} */
            let DataYear = ProgressData.DataYear;
            console.log('DataYear', DataYear);
            //save  personal_Progress_Main
            if (ProgressData.Personal.Values != null) {
                /** @type {?} */
                let personalDatas = ProgressData.Personal.Values;
                console.log('personalDatas', personalDatas);
                for (let personalData of personalDatas) {
                    /** @type {?} */
                    let clientID = uuid();
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
                        ext => {
                            personalProgressExt.setValue(ext.id, ext.value);
                        }));
                    }
                    this.dao.transactionInsert(personalProgressExt);
                }
            }
            //save  Team_Progress_Main
            if (ProgressData.Team.Values != null) {
                /** @type {?} */
                let TeamMainlDatas = ProgressData.Team.Values;
                console.log('TeamMainlDatas', TeamMainlDatas);
                for (let TeamMainData of TeamMainlDatas) {
                    /** @type {?} */
                    let clientID = uuid();
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
                        ext => {
                            teamProgressMainExt.setValue(ext.id, ext.value);
                        }));
                    }
                    this.dao.transactionInsert(teamProgressMainExt);
                }
            }
            //save  Team_Progress_Detail
            /** @type {?} */
            let UnitMap = new Map();
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
                (datas, key) => {
                    console.log('key', key, 'datas', datas);
                    /** @type {?} */
                    let i = 0;
                    for (i = 0; i < datas.length; i++) {
                        /** @type {?} */
                        let data = datas[i];
                        /** @type {?} */
                        let clientID = uuid();
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
                        this.dao.transactionInsert(teamProgressDetail);
                        teamProgressDetailExt.setValue("ClientID", clientID);
                        if (data.extensions) {
                            data.extensions.forEach((/**
                             * @param {?} ext
                             * @return {?}
                             */
                            ext => {
                                teamProgressDetailExt.setValue(ext.id, ext.value);
                            }));
                        }
                        this.dao.transactionInsert(teamProgressDetailExt);
                    }
                }));
            }
            //Update other parameter
            /** @type {?} */
            let YesterdayPoint = ProgressData.YesterdayPoint;
            console.log('[saveProgressAPI] YesterdayPoint', YesterdayPoint);
            if (YesterdayPoint != null && YesterdayPoint != undefined) {
                otherParameter = this.daoFactory.getDefaultTable('TW_LH_SD_Other_Parameter');
                otherParameter.addRestriction(new EqualRestriction("MappingID", ["YesterdayPoint"]));
                otherParameter.addRestriction(new EqualRestriction("DataYear", [DataYear]));
                /** @type {?} */
                let queryResp = yield this.dao.queryByTable(otherParameter).toPromise();
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
            }
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZVByb2dyZXNzQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvc2F2ZVByb2dyZXNzQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHNUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2hELE1BQU07Ozs7SUFLRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSG5DLGtCQUFhLEdBQWUsRUFBRSxDQUFDO0lBS3RDLENBQUM7Ozs7SUFHRCxVQUFVO1FBQ04sT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxVQUFVO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztZQUM3QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQzs7WUFDaEYsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsc0NBQXNDLENBQUM7O1lBQzdGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDOztZQUNqRixtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx1Q0FBdUMsQ0FBQzs7WUFDOUYsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsK0JBQStCLENBQUM7O1lBQ3JGLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENB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QUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUM5QztpQkFDSjthQUNKO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7OztJQS9MRyx3Q0FBc0M7Ozs7O0lBQ3RDLDhCQUFZOzs7OztJQUVBLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFNRTENvbW1hbmQgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxDb21tYW5kXCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvcmVuZGVyMy91dGlsXCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBzYXZlUHJvZ3Jlc3NBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgUHJvZ3Jlc3NEYXRhczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgZGFvO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnc2F2ZVByb2dyZXNzJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9ncmVzc0RhdGFzJywgdGhpcy5Qcm9ncmVzc0RhdGFzKTtcbiAgICAgICAgbGV0IHBlcnNvbmFsUHJvZ3Jlc3MgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9QZXJzb25hbF9Qcm9ncmVzcycpO1xuICAgICAgICBsZXQgcGVyc29uYWxQcm9ncmVzc0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1BlcnNvbmFsX1Byb2dyZXNzX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzTWFpbiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfTWFpbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzTWFpbkV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfTWFpbl9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IHRlYW1Qcm9ncmVzc0RldGFpbCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfRGV0YWlsJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NEZXRhaWxFeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9UZWFtX1Byb2dyZXNzX0RldGFpbF9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IG90aGVyUGFyYW1ldGVyID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFibGUgcGVyc29uYWxQcm9ncmVzc1wiLCBwZXJzb25hbFByb2dyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsZSB0ZWFtUHJvZ3Jlc3NNYWluXCIsIHRlYW1Qcm9ncmVzc01haW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIHRlYW1Qcm9ncmVzc0RldGFpbFwiLCB0ZWFtUHJvZ3Jlc3NEZXRhaWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxlIG90aGVyUGFyYW1ldGVyXCIsIG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgdGhpcy5kYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBpZiAocGVyc29uYWxQcm9ncmVzcyAmJiB0ZWFtUHJvZ3Jlc3NNYWluICYmIHRlYW1Qcm9ncmVzc0RldGFpbCAmJiBvdGhlclBhcmFtZXRlcikge1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUocGVyc29uYWxQcm9ncmVzcyk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZSh0ZWFtUHJvZ3Jlc3NNYWluKTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlYW1Qcm9ncmVzc0RldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmRhby50cmFuc2FjdGlvbkRlbGV0ZShwZXJzb25hbFByb2dyZXNzRXh0KTtcbiAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlYW1Qcm9ncmVzc01haW5FeHQpO1xuICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25EZWxldGUodGVhbVByb2dyZXNzRGV0YWlsRXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZyb20oUHJvbWlzZS5hbGwodGhpcy5Qcm9ncmVzc0RhdGFzLm1hcCh4ID0+IHRoaXMuX2dldERhdGUoeCkpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcCA9IHRoaXMuZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0RGF0ZShQcm9ncmVzc0RhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgbGV0IHBlcnNvbmFsUHJvZ3Jlc3MgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9QZXJzb25hbF9Qcm9ncmVzcycpO1xuICAgICAgICBsZXQgcGVyc29uYWxQcm9ncmVzc0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1BlcnNvbmFsX1Byb2dyZXNzX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzTWFpbiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfTWFpbicpO1xuICAgICAgICBsZXQgdGVhbVByb2dyZXNzTWFpbkV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfTWFpbl9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IHRlYW1Qcm9ncmVzc0RldGFpbCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfRGV0YWlsJyk7XG4gICAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NEZXRhaWxFeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9UZWFtX1Byb2dyZXNzX0RldGFpbF9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IG90aGVyUGFyYW1ldGVyID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2dyZXNzRGF0YScsIFByb2dyZXNzRGF0YSk7XG5cbiAgICAgICAgbGV0IERhdGFZZWFyID0gUHJvZ3Jlc3NEYXRhLkRhdGFZZWFyO1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YVllYXInLCBEYXRhWWVhcik7XG5cbiAgICAgICAgLy9zYXZlICBwZXJzb25hbF9Qcm9ncmVzc19NYWluXG4gICAgICAgIGlmIChQcm9ncmVzc0RhdGEuUGVyc29uYWwuVmFsdWVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBwZXJzb25hbERhdGFzOiBBcnJheTxhbnk+ID0gUHJvZ3Jlc3NEYXRhLlBlcnNvbmFsLlZhbHVlcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJzb25hbERhdGFzJywgcGVyc29uYWxEYXRhcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBwZXJzb25hbERhdGEgb2YgcGVyc29uYWxEYXRhcykge1xuICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIkRhdGFUeXBlXCIsIHBlcnNvbmFsRGF0YS5EYXRhVHlwZSk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIlRpbWVCYXNlXCIsIHBlcnNvbmFsRGF0YS5UaW1lQmFzZSk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxQcm9ncmVzcy5zZXRWYWx1ZShcIkZpbmRcIiwgcGVyc29uYWxEYXRhLkZpbmQpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJTY2hlZHVsZVwiLCBwZXJzb25hbERhdGEuU2NoZWR1bGUpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJNZWV0XCIsIHBlcnNvbmFsRGF0YS5NZWV0KTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiU3VibWl0XCIsIHBlcnNvbmFsRGF0YS5TdWJtaXQpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsUHJvZ3Jlc3Muc2V0VmFsdWUoXCJJbmZvcmNlXCIsIHBlcnNvbmFsRGF0YS5JbmZvcmNlKTtcbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzLnNldFZhbHVlKFwiRllGQ1wiLCBwZXJzb25hbERhdGEuRllGQyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQocGVyc29uYWxQcm9ncmVzcyk7XG5cbiAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgIGlmIChwZXJzb25hbERhdGEuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICBwZXJzb25hbERhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hbFByb2dyZXNzRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHBlcnNvbmFsUHJvZ3Jlc3NFeHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zYXZlICBUZWFtX1Byb2dyZXNzX01haW5cbiAgICAgICAgaWYgKFByb2dyZXNzRGF0YS5UZWFtLlZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgVGVhbU1haW5sRGF0YXM6IEFycmF5PGFueT4gPSBQcm9ncmVzc0RhdGEuVGVhbS5WYWx1ZXM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGVhbU1haW5sRGF0YXMnLCBUZWFtTWFpbmxEYXRhcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBUZWFtTWFpbkRhdGEgb2YgVGVhbU1haW5sRGF0YXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzTWFpbi5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJEYXRhVHlwZVwiLCBUZWFtTWFpbkRhdGEuRGF0YVR5cGUpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJUaW1lQmFzZVwiLCBUZWFtTWFpbkRhdGEuVGltZUJhc2UpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJHb2FsXCIsIFRlYW1NYWluRGF0YS5Hb2FsKTtcbiAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluLnNldFZhbHVlKFwiRm9yZWNhc3RcIiwgVGVhbU1haW5EYXRhLkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluLnNldFZhbHVlKFwiQWN0dWFsXCIsIFRlYW1NYWluRGF0YS5BY3R1YWwpO1xuICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc01haW4uc2V0VmFsdWUoXCJTaG9ydGZhbGxcIiwgVGVhbU1haW5EYXRhLlNob3J0ZmFsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGVhbVByb2dyZXNzTWFpbik7XG5cbiAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgIGlmIChUZWFtTWFpbkRhdGEuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICBUZWFtTWFpbkRhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NNYWluRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRlYW1Qcm9ncmVzc01haW5FeHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zYXZlICBUZWFtX1Byb2dyZXNzX0RldGFpbFxuICAgICAgICBsZXQgVW5pdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxhbnk+PigpO1xuICAgICAgICBpZiAoUHJvZ3Jlc3NEYXRhLlRlYW0uRGlyZWN0VW5pdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBVbml0TWFwLnNldCgnRGlyZWN0JywgUHJvZ3Jlc3NEYXRhLlRlYW0uRGlyZWN0VW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFByb2dyZXNzRGF0YS5UZWFtLkluRGlyZWN0VW5pdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBVbml0TWFwLnNldCgnSW5kaXJlY3QnLCBQcm9ncmVzc0RhdGEuVGVhbS5JbkRpcmVjdFVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChVbml0TWFwLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBVbml0TWFwLmZvckVhY2goKGRhdGFzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5Jywga2V5LCAnZGF0YXMnLCBkYXRhcyk7XG4gICAgICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZGF0YXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkRpcmVjdFVuaXRUeXBlXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIlRpbWVCYXNlXCIsIGRhdGEuVGltZUJhc2UpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJBZ2VudElEXCIsIGRhdGEuQWdlbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkFnZW50TmFtZVwiLCBkYXRhLkFnZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkpvYkdyYWRlXCIsIGRhdGEuSm9iR3JhZGUpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJUZWFtTmFtZVwiLCBkYXRhLlRlYW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiRHJpbGxkb3duXCIsIGRhdGEuRHJpbGxkb3duID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkRhdGFUeXBlXCIsIGRhdGEuRGF0YVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWwuc2V0VmFsdWUoXCJBcHBVc2VNb2RlXCIsIGRhdGEuQXBwVXNlTW9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLkFjdGl2aXRpZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiQWN0aXZpdGllc1wiLCBkYXRhLkFjdGl2aXRpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkdvYWxcIiwgZGF0YS5Hb2FsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsLnNldFZhbHVlKFwiRm9yZWNhc3RcIiwgZGF0YS5Gb3JlY2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIkFjdHVhbFwiLCBkYXRhLkFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIlNob3J0ZmFsbFwiLCBkYXRhLlNob3J0ZmFsbCk7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1Qcm9ncmVzc0RldGFpbC5zZXRWYWx1ZShcIk9yZGVyc1wiLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25JbnNlcnQodGVhbVByb2dyZXNzRGV0YWlsKTtcblxuICAgICAgICAgICAgICAgICAgICB0ZWFtUHJvZ3Jlc3NEZXRhaWxFeHQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVByb2dyZXNzRGV0YWlsRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRlYW1Qcm9ncmVzc0RldGFpbEV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1VwZGF0ZSBvdGhlciBwYXJhbWV0ZXJcbiAgICAgICAgbGV0IFllc3RlcmRheVBvaW50ID0gUHJvZ3Jlc3NEYXRhLlllc3RlcmRheVBvaW50O1xuICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVQcm9ncmVzc0FQSV0gWWVzdGVyZGF5UG9pbnQnLCBZZXN0ZXJkYXlQb2ludCk7XG4gICAgICAgIGlmIChZZXN0ZXJkYXlQb2ludCAhPSBudWxsICYmIFllc3RlcmRheVBvaW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiTWFwcGluZ0lEXCIsIFtcIlllc3RlcmRheVBvaW50XCJdKSk7XG4gICAgICAgICAgICBvdGhlclBhcmFtZXRlci5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkRhdGFZZWFyXCIsIFtEYXRhWWVhcl0pKTtcbiAgICAgICAgICAgIGxldCBxdWVyeVJlc3AgPSBhd2FpdCB0aGlzLmRhby5xdWVyeUJ5VGFibGUob3RoZXJQYXJhbWV0ZXIpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzYXZlUHJvZ3Jlc3NBUEldIHF1ZXJ5UmVzcCcsIHF1ZXJ5UmVzcCk7XG4gICAgICAgICAgICBpZiAocXVlcnlSZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVJlc3AuQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiU2V0VmFsdWVcIiwgWWVzdGVyZGF5UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW3NhdmVQcm9ncmVzc0FQSV0gb3RoZXJQYXJhbWV0ZXIgMScsIG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW8udHJhbnNhY3Rpb25VcGRhdGUob3RoZXJQYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgdXVpZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXIuc2V0VmFsdWUoXCJEYXRhWWVhclwiLCBEYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiTWFwcGluZ0lEXCIsIFwiWWVzdGVyZGF5UG9pbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVyLnNldFZhbHVlKFwiU2V0VmFsdWVcIiwgWWVzdGVyZGF5UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlci5zZXRWYWx1ZShcInN5bmNUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzYXZlUHJvZ3Jlc3NBUEldIG90aGVyUGFyYW1ldGVyIDInLCBvdGhlclBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KG90aGVyUGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19