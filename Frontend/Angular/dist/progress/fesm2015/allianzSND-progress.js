import { NotificationUtils } from '@allianzSND/notification';
import { ROLE } from '@allianzSND/goal';
import { Injectable, ErrorHandler, NgModule, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '@allianzSND/ui';
import { __decorate, __metadata, __awaiter } from 'tslib';
import { Bean, Required, APIDispatch, APIFactory, APPError, DeviceService, NotificationMgr, Valid, NumberUtils, Language, CoreModule, StringUtils, EqualRestriction } from '@allianzSND/core';
import { Observable, from, of, BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressYearConfig = class ProgressYearConfig {
    constructor() {
        this.DataYear = 0;
        this.IsCurrent = true;
        this.WorkingMonth = 0;
        this.QuarterStartMonth = 0;
        this.QuarterEndMonth = 0;
        this.FindConvertPointBase = 0;
        this.ScheduleConvertPointBase = 0;
        this.MeetConvertPointBase = 0;
        this.SubmitConvertPointBase = 0;
        this.InforceConvertPointBase = 0;
        this.ProgressBarControlMode = "TWMode";
        this.ProgressDayPointsLimit = 20;
        this.MonthQuantityOfYear = 12;
        this.PerformanceSettlementMonth = 0;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], ProgressYearConfig.prototype, "IsCurrent", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "WorkingMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "QuarterStartMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "QuarterEndMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "FindConvertPointBase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "ScheduleConvertPointBase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "MeetConvertPointBase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "SubmitConvertPointBase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "InforceConvertPointBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressYearConfig.prototype, "ProgressBarControlMode", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "ProgressDayPointsLimit", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "MonthQuantityOfYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearConfig.prototype, "PerformanceSettlementMonth", void 0);
ProgressYearConfig = __decorate([
    Bean('ProgressYearConfig')
], ProgressYearConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ConfigurationObj = class ConfigurationObj {
    constructor() {
        this.lastUpdateTime = "";
        this.Configurations = new Array();
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ConfigurationObj.prototype, "lastUpdateTime", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], ConfigurationObj.prototype, "Configurations", void 0);
ConfigurationObj = __decorate([
    Bean('ConfigurationObj')
], ConfigurationObj);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressObj = class ProgressObj {
    constructor() {
        this.lastUpdateTime = "";
        this.Progress = new Array();
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressObj.prototype, "lastUpdateTime", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], ProgressObj.prototype, "Progress", void 0);
ProgressObj = __decorate([
    Bean('ProgressObj')
], ProgressObj);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PersonalObj {
    constructor() {
        this.Values = new Array();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let TeamObj = class TeamObj {
    constructor() {
        this.Values = new Array();
        //public Direct: Array<ProgressDirectData> = new Array<ProgressDirectData>();
        //public Indirect: Array<ProgressIndirectData> = new Array<ProgressIndirectData>();
        this.DirectUnit = new Array();
        this.InDirectUnit = new Array();
    }
};
__decorate([
    Required,
    __metadata("design:type", Array)
], TeamObj.prototype, "Values", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], TeamObj.prototype, "DirectUnit", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], TeamObj.prototype, "InDirectUnit", void 0);
TeamObj = __decorate([
    Bean('TeamObj')
], TeamObj);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressYearObj = class ProgressYearObj {
    constructor() {
        this.DataYear = 0;
        this.YesterdayPoint = 0;
        this.Personal = new PersonalObj();
        this.Team = new TeamObj();
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearObj.prototype, "DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressYearObj.prototype, "YesterdayPoint", void 0);
__decorate([
    Required,
    __metadata("design:type", PersonalObj)
], ProgressYearObj.prototype, "Personal", void 0);
__decorate([
    Required,
    __metadata("design:type", TeamObj)
], ProgressYearObj.prototype, "Team", void 0);
ProgressYearObj = __decorate([
    Bean('ProgressYearObj')
], ProgressYearObj);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PersonalDataTimeBase = {
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Quarter: "Quarter",
    Year: "Year",
    Unknow: "Unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PersonalDataType = {
    Actual: "Actual",
    Goal: "Goal",
    Unknow: "Unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressPersonalData {
    constructor() {
        this.DataType = PersonalDataType.Unknow;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.Find = 0;
        this.Schedule = 0;
        this.Meet = 0;
        this.Submit = 0;
        this.Inforce = 0;
        this.FYFC = 0;
        this.FindConvertPointBase = 0;
        this.ScheduleConvertPointBase = 0;
        this.MeetConvertPointBase = 0;
        this.SubmitConvertPointBase = 0;
        this.InforceConvertPointBase = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ProgressDataTeamValueType = {
    FYFC: "FYFC",
    ANP: "ANP",
    Manpower: "Manpower",
    Recruitment: "Recruitment",
    Unknow: "unKnow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressTeamData = class ProgressTeamData {
    constructor() {
        this.DataType = ProgressDataTeamValueType.Unknow;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressTeamData.prototype, "DataType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressTeamData.prototype, "TimeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressTeamData.prototype, "Goal", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressTeamData.prototype, "Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressTeamData.prototype, "Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressTeamData.prototype, "Shortfall", void 0);
ProgressTeamData = __decorate([
    Bean('ProgressTeamData')
], ProgressTeamData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressDirectIndirectData = class ProgressDirectIndirectData {
    constructor() {
        this.AgentID = "";
        this.AgentName = "";
        this.TeamName = "";
        this.JobGrade = "";
        this.Drilldown = false;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.DataType = ProgressDataTeamValueType.Unknow;
        this.AppUseMode = "";
        //public Activities: ActivitiesType = ActivitiesType.Unknow;
        this.Activities = "";
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AgentID", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AgentName", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "TeamName", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "JobGrade", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], ProgressDirectIndirectData.prototype, "Drilldown", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "TimeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "DataType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AppUseMode", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "Activities", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Goal", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Shortfall", void 0);
ProgressDirectIndirectData = __decorate([
    Bean('ProgressDirectIndirectData')
], ProgressDirectIndirectData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DirectUnitType = {
    DirectUnit: "Direct",
    IndirectUnit: "Indirect",
    Unknow: "Unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Tag = {
    PersonalTag: 0,
    TeamTag: 1,
    UnknowTag: 2,
};
Tag[Tag.PersonalTag] = 'PersonalTag';
Tag[Tag.TeamTag] = 'TeamTag';
Tag[Tag.UnknowTag] = 'UnknowTag';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressService {
    /**
     * @param {?} dispatch
     * @param {?} APIFactory
     * @param {?} deviceService
     * @param {?} notificationMgr
     * @param {?} notficationUtils
     * @param {?} errorHandler
     */
    constructor(dispatch, APIFactory$$1, deviceService, notificationMgr, notficationUtils, errorHandler) {
        this.dispatch = dispatch;
        this.APIFactory = APIFactory$$1;
        this.deviceService = deviceService;
        this.notificationMgr = notificationMgr;
        this.notficationUtils = notficationUtils;
        this.errorHandler = errorHandler;
        this._drillDownAgentIdObjList = new Array();
        this._drillDowmAgentIdSubject = new BehaviorSubject(this.lastAgentIdObj);
        //dashboard to progress page
        this._currentTag = Tag.UnknowTag;
        this._currentRoleSubject = new BehaviorSubject(this._currentRole);
    }
    /**
     * @return {?}
     */
    get AgentIdObjListLength() {
        return this._drillDownAgentIdObjList.length;
    }
    /**
     * @return {?}
     */
    get lastAgentIdObj() {
        return (this._drillDownAgentIdObjList.length > 0) ? this._drillDownAgentIdObjList[this.AgentIdObjListLength - 1] : null;
    }
    /**
     * @return {?}
     */
    GetCurrentNavigationTag() {
        return this._currentTag;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    SetCurrentNavigationTag(tag) {
        this._currentTag = tag;
    }
    //#region agent function
    /**
     * @return {?}
     */
    InitDrillDownAgentIdObj() {
        this._drillDownAgentIdObjList = new Array();
        //this._drillDowmAgentIdSubject = new BehaviorSubject(this.lastAgentIdObj);
    }
    /**
     * @param {?} agentIdObj
     * @return {?}
     */
    AddDrillDownAgentIdObj(agentIdObj) {
        this._drillDownAgentIdObjList.push(agentIdObj);
        this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
    }
    /**
     * @return {?}
     */
    GetDrillDwonAgentIdObj() {
        return this._drillDowmAgentIdSubject.asObservable();
    }
    /**
     * @return {?}
     */
    PopDrillDownAgentIdObj() {
        this._drillDownAgentIdObjList.pop();
        this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
    }
    /**
     * @return {?}
     */
    GetDrillDownAgentIdObjRouterNameObj() {
        /** @type {?} */
        let maxLength = this.AgentIdObjListLength;
        if (maxLength >= 2) {
            /** @type {?} */
            let arr = new Array();
            /** @type {?} */
            let data1 = this._drillDownAgentIdObjList[maxLength - 2];
            /** @type {?} */
            let data2 = this._drillDownAgentIdObjList[maxLength - 1];
            arr.push(data1);
            arr.push(data2);
            return of(arr);
        }
        else {
            /** @type {?} */
            let arr = new Array();
            /** @type {?} */
            let data1 = this._drillDownAgentIdObjList[maxLength - 1];
            arr.push(data1);
            return of(arr);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    SetCurrentRole(val) {
        this._currentRole = val;
        this._currentRoleSubject.next(this._currentRole);
    }
    /**
     * @return {?}
     */
    GetCurrentRole() {
        return this._currentRoleSubject.asObservable();
    }
    /**
     * @return {?}
     */
    GetIsTeam() {
        /** @type {?} */
        let r = this._currentRole;
        switch (r) {
            case ROLE.AGENT:
                return false;
            case ROLE.AGENTLEADER:
            case ROLE.ZONEHEAD:
            case ROLE.CAO:
                return true;
        }
    }
    /**
     * @return {?}
     */
    GetIsAgent() {
        return (this._currentRole == ROLE.AGENT) ? true : false;
    }
    /**
     * @return {?}
     */
    GetIsSupervisor() {
        return (this._currentRole == ROLE.CAO) ? true : false;
    }
    /**
     * @return {?}
     */
    GetIsManaget() {
        return (this._currentRole == ROLE.ZONEHEAD) ? true : false;
    }
    /**
     * @return {?}
     */
    GetIsAgentLeader() {
        return (this._currentRole == ROLE.AGENTLEADER) ? true : false;
    }
    /**
     * @return {?}
     */
    GetIsShowSwitchTab() {
        return (this._currentRole == ROLE.AGENTLEADER) ? true : false;
    }
    /**
     * @return {?}
     */
    GetIsShowTeamTab() {
        return (this._currentRole == ROLE.AGENT) ? false : true;
    }
    //#endregion
    //#region progress main function
    //get progress data by restful return yaml
    /**
     * @param {?} agentID
     * @return {?}
     */
    GetProgressDataByRestful(agentID) {
        try {
            /** @type {?} */
            let getProgressAPI = (/** @type {?} */ (this.APIFactory.getAPI("getProgress")));
            getProgressAPI.setAgentID(agentID);
            return from(this.dispatch.dispatch(getProgressAPI).toPromise());
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
            console.debug("getProgressDataByRestful agent id: ", agentID);
        }
        return of(null);
    }
    //get progress data by SQLite return yaml
    /**
     * @param {?} years
     * @return {?}
     */
    GetProgressDataBySQLite(years) {
        try {
            //put it together to yaml
            /** @type {?} */
            let getPersonalProgressAPI = (/** @type {?} */ (this.APIFactory.getAPI('getPersonalProgress')));
            /** @type {?} */
            let getTeamProgressDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getTeamProgressDetail')));
            /** @type {?} */
            let getTeamProgressMainAPI = (/** @type {?} */ (this.APIFactory.getAPI('getTeamProgressMain')));
            /** @type {?} */
            let getOtherParameterAPI = (/** @type {?} */ (this.APIFactory.getAPI('getOtherParameter')));
            return from(Promise.all([getPersonalProgressAPI, getTeamProgressDetailAPI, getTeamProgressMainAPI, getOtherParameterAPI]
                .map((/**
             * @param {?} api
             * @return {?}
             */
            api => this.dispatch.dispatch(api).toPromise()))).then((/**
             * @param {?} __0
             * @return {?}
             */
            ([ProgressPersonalRawData, ProgressTeamDetailRawData, ProgressTeamMainRawData, OtherParameterRawData]) => {
                console.debug("getProgressDataBySQLite ProgressPersonalRawData: ", ProgressPersonalRawData); //o
                console.debug("getProgressDataBySQLite ProgressTeamDetailRawData: ", ProgressTeamDetailRawData);
                console.debug("getProgressDataBySQLite ProgressTeamMainRawData:", ProgressTeamMainRawData);
                console.debug("getProgressDataBySQLite OtherParameterRawData:", OtherParameterRawData);
                //new way
                /** @type {?} */
                let progressObjBOSS = new ProgressObj();
                /** @type {?} */
                let progressYearObjList = new Array();
                /** @type {?} */
                let personalObjList = new Array();
                /** @type {?} */
                let teamObjList = new Array();
                /** @type {?} */
                let progressPersonalDataList = new Array();
                /** @type {?} */
                let progressTeamMainDataList = new Array();
                /** @type {?} */
                let progressTeamDirectDataList = new Array();
                /** @type {?} */
                let progressTeamIndirectDataList = new Array();
                /** @type {?} */
                let yesterdayPointsList;
                //get yesterdayPoint     
                yesterdayPointsList = this._GetYesterdayPoints(years, OtherParameterRawData);
                console.debug("getProgressDataBySQLite yesterdayPointsList: ", yesterdayPointsList);
                // get personal data
                progressPersonalDataList = this._GetProgressPersonalData(years, ProgressPersonalRawData);
                console.debug("getProgressDataBySQLite progressPersonalDataList: ", progressPersonalDataList);
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let obj = new PersonalObj();
                    obj.Values = progressPersonalDataList[i];
                    personalObjList.push(obj);
                }
                //get team main data
                progressTeamMainDataList = this._GetProgressTeamMainData(years, ProgressTeamMainRawData);
                console.debug("getProgressDataBySQLite progressTeamMainDataList: ", progressTeamMainDataList);
                //direct indirect
                progressTeamDirectDataList = this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.DirectUnit);
                progressTeamIndirectDataList = this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.IndirectUnit);
                console.debug("getProgressDataBySQLite progressTeamDirectDataList: ", progressTeamDirectDataList);
                console.debug("getProgressDataBySQLite progressTeamIndirectDataList: ", progressTeamIndirectDataList);
                //get team data
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let obj = new TeamObj();
                    obj.Values = (progressTeamMainDataList[i]) ? progressTeamMainDataList[i] : null;
                    obj.DirectUnit = (progressTeamDirectDataList[i]) ? progressTeamDirectDataList[i] : null;
                    obj.InDirectUnit = (progressTeamIndirectDataList[i]) ? progressTeamIndirectDataList[i] : null;
                    teamObjList.push(obj);
                }
                //get progress Year data
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let obj = new ProgressYearObj();
                    obj.DataYear = years[i];
                    obj.YesterdayPoint = yesterdayPointsList[i];
                    obj.Personal = personalObjList[i];
                    obj.Team = teamObjList[i];
                    progressYearObjList.push(obj);
                }
                //get progressBOSS obj      
                for (let i = 0; i < years.length; i++) {
                    progressObjBOSS.Progress[i] = progressYearObjList[i];
                }
                console.debug("getProgressDataBySQLite personalObjList: ", personalObjList);
                console.debug("getProgressDataBySQLite teamObjList: ", teamObjList);
                console.debug("getProgressDataBySQLite progressYearObjList: ", progressYearObjList);
                console.debug("getProgressDataBySQLite progressObjBOSS: ", progressObjBOSS);
                return progressObjBOSS;
            })));
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00210', 'get Progress Data By SQLite fail!' + error.message));
            console.debug("OMG! getProgressDataBySQLite fail: ");
        }
        return of(null);
    }
    //#endregion progress main function
    //#region private function
    /**
     * @private
     * @param {?} years
     * @param {?} otherParameterRawData
     * @return {?}
     */
    _GetYesterdayPoints(years, otherParameterRawData) {
        /** @type {?} */
        let ansArr = new Array();
        console.debug("_GetYesterdayPoints years: ", years);
        console.debug("_GetYesterdayPoints otherParameterRawData: ", otherParameterRawData);
        try {
            for (let i = 0; i < years.length; i++) {
                /** @type {?} */
                let yesterdayPoint = otherParameterRawData["Body"].filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.MappingID == "YesterdayPoint"
                    && x.DataYear == years[i]));
                console.debug("_GetYesterdayPoints yesterdayPoint: ", yesterdayPoint);
                console.debug("_GetYesterdayPoints yesterdayPoint[0]: ", yesterdayPoint[0]);
                console.debug("_GetYesterdayPoints yesterdayPoint[0]set: ", yesterdayPoint[0].SetValue);
                ansArr.push(yesterdayPoint[0].SetValue);
            }
            return ansArr;
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00211', 'get yesterday points fail!' + error.message));
        }
        return null;
    }
    /**
     * @private
     * @param {?} years
     * @param {?} progressTeamDetailRawData
     * @param {?} unitType
     * @return {?}
     */
    _GetProgressTeamDirectIndirectData(years, progressTeamDetailRawData, unitType) {
        /** @type {?} */
        let ansArr = new Array();
        console.debug("_getProgressTeamDirectIndirectData years: ", years);
        console.debug("_getProgressTeamDirectIndirectData progressTeamDetailRawData: ", progressTeamDetailRawData);
        try {
            if (progressTeamDetailRawData) {
                /** @type {?} */
                let bodyData = progressTeamDetailRawData["Body"];
                /** @type {?} */
                let rawDataByYearArr = new Array();
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.DataYear == years[i] && x.DirectUnitType == unitType));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                }
                console.debug("_getProgressTeamDirectIndirectData rawDataByYearArr: ", rawDataByYearArr);
                for (let i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    let arr = new Array();
                    for (let j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        let tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        let data = new ProgressDirectIndirectData();
                        data.AgentID = tmp.AgentID;
                        data.AgentName = tmp.AgentName;
                        data.TeamName = tmp.TeamName;
                        data.JobGrade = tmp.JobGrade;
                        data.DataType = tmp.DataType;
                        data.TimeBase = tmp.TimeBase;
                        data.AppUseMode = tmp.AppUseMode;
                        data.Activities = tmp.Activities;
                        data.Drilldown = tmp.Drilldown == "Y"; //true
                        data.Actual = tmp.Actual;
                        data.Goal = tmp.Goal;
                        data.Forecast = tmp.Forecast;
                        data.Shortfall = tmp.Shortfall;
                        arr.push(data);
                    }
                    ansArr.push(arr);
                }
                return ansArr;
            }
            else {
                throw "data null";
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00212', 'get Progress Team Direct Indirect Data fail!' + error.message));
        }
        return null;
    }
    /**
     * @private
     * @param {?} years
     * @param {?} progressTeamMainRawData
     * @return {?}
     */
    _GetProgressTeamMainData(years, progressTeamMainRawData) {
        /** @type {?} */
        let ansArr = new Array();
        console.debug("_getProgressTeamMainData years: ", years);
        console.debug("_getProgressTeamMainData progressTeamMainRawData: ", progressTeamMainRawData);
        try {
            if (progressTeamMainRawData) {
                /** @type {?} */
                let bodyData = progressTeamMainRawData["Body"];
                /** @type {?} */
                let rawDataByYearArr = new Array();
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.DataYear == years[i]));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                }
                console.debug("_getProgressTeamMainData rawDataByYearArr: ", rawDataByYearArr);
                for (let i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    let arr = new Array();
                    for (let j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        let tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        let data = new ProgressTeamData();
                        data.DataType = tmp.DataType;
                        data.TimeBase = tmp.TimeBase;
                        data.Goal = tmp.Goal;
                        data.Forecast = tmp.Forecast;
                        data.Actual = tmp.Actual;
                        data.Shortfall = tmp.Shortfall;
                        arr.push(data);
                    }
                    ansArr.push(arr);
                }
                return ansArr;
            }
            else {
                throw "data null";
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00213', 'Get Progress Team Main Data fail!' + error.message));
        }
        return null;
    }
    /**
     * @private
     * @param {?} years
     * @param {?} progressPersonalRawData
     * @return {?}
     */
    _GetProgressPersonalData(years, progressPersonalRawData) {
        /** @type {?} */
        let ansArr = new Array();
        console.debug("_getProgressPersonalData years: ", years);
        console.debug("_getProgressPersonalData progressPersonalRawData: ", progressPersonalRawData);
        try {
            if (progressPersonalRawData) {
                /** @type {?} */
                let bodyData = progressPersonalRawData["Body"];
                /** @type {?} */
                let rawDataByYearArr = new Array();
                for (let i = 0; i < years.length; i++) {
                    /** @type {?} */
                    let yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.DataYear == years[i]));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                }
                console.debug("_getProgressPersonalData rawDataByYearArr: ", rawDataByYearArr);
                for (let i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    let arr = new Array();
                    for (let j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        let tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        let data = new ProgressPersonalData();
                        data.DataType = tmp.DataType;
                        data.TimeBase = tmp.TimeBase;
                        data.Find = tmp.Find;
                        data.Schedule = tmp.Schedule;
                        data.Meet = tmp.Meet;
                        data.Submit = tmp.Submit;
                        data.Inforce = tmp.Inforce;
                        data.FYFC = tmp.FYFC;
                        arr.push(data);
                    }
                    ansArr.push(arr);
                }
                return ansArr;
            }
            else {
                throw "data null";
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00214', 'Get Progress Personal Data fail!' + error.message));
        }
        return null;
    }
    //#endregion private function
    //#region year config function
    //get year config 
    /**
     * @return {?}
     */
    GetYearConfigDataBySQLite() {
        try {
            /** @type {?} */
            let getYearConfigurationAPI = (/** @type {?} */ (this.APIFactory.getAPI('getYearConfiguration')));
            return from(this.dispatch.dispatch(getYearConfigurationAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("getYearConfig resp: ", resp);
                // convert to yaml
                /** @type {?} */
                let dataBady = resp["Body"];
                console.debug("getYearConfig dataBady: ", dataBady);
                /** @type {?} */
                let configObj = new ConfigurationObj();
                /** @type {?} */
                let arr = new Array();
                for (let i = 0; i < dataBady.length; i++) {
                    /** @type {?} */
                    let data = new ProgressYearConfig();
                    /** @type {?} */
                    let dataConfig = dataBady[i];
                    data.DataYear = dataConfig.DataYear;
                    data.IsCurrent = dataConfig.IsCurrent === "Y";
                    data.WorkingMonth = dataConfig.WorkingMonth;
                    data.QuarterStartMonth = dataConfig.QuarterStartMonth;
                    data.QuarterEndMonth = dataConfig.QuarterEndMonth;
                    data.ProgressDayPointsLimit = dataConfig.ProgressDayPointsLimit;
                    data.ProgressBarControlMode = dataConfig.ProgressBarControlMode;
                    data.MonthQuantityOfYear = dataConfig.MonthQuantityOfYear;
                    data.FindConvertPointBase = dataConfig.FindConvertPointBase;
                    data.ScheduleConvertPointBase = dataConfig.ScheduleConvertPointBase;
                    data.MeetConvertPointBase = dataConfig.MeetConvertPointBase;
                    data.SubmitConvertPointBase = dataConfig.SubmitConvertPointBase;
                    data.InforceConvertPointBase = dataConfig.InforceConvertPointBase;
                    data.PerformanceSettlementMonth = dataConfig.PerformanceSettlementMonth;
                    arr.push(data);
                }
                configObj.Configurations = arr;
                console.debug("configObj: ", configObj);
                console.debug("configObj: ", JSON.stringify(configObj));
                console.debug("got SQlite year config resp: ", resp);
                console.debug("got SQlite year config resp json: ", JSON.stringify(resp));
                return configObj;
            })));
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00215', 'OMG! get Year Config SQLite fail!' + error.message));
        }
        return of(null);
    }
    /**
     * @param {?} agentID
     * @return {?}
     */
    GetYearConfigDataByRestful(agentID) {
        try {
            /** @type {?} */
            let yearConfigAPI = (/** @type {?} */ (this.APIFactory.getAPI('getYearConfig')));
            yearConfigAPI.setAgentID(agentID);
            return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
            console.debug("getProgressDataByRestful agent id: ", agentID);
        }
        return of(null);
    }
    // public GetYearConfigDataByRestful(agentID: string): Observable<any> {
    //   try {
    //     let yearConfigAPI: getYearConfigAPI = <getYearConfigAPI>this.APIFactory.getAPI('getYearConfig');
    //     yearConfigAPI.setAgentID(agentID);
    //     return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
    //   }
    //   catch (error) {
    //     this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
    //     console.debug("getProgressDataByRestful agent id: ", agentID);
    //   }
    //   return of(null);
    // }
    //#endregion year config function
    //#region funtion calculate
    /**
     * @param {?} num
     * @param {?=} sign
     * @return {?}
     */
    ShowDesh(num, sign = "--") {
        if (!NumberUtils.isNumber(num)) {
            return sign;
        }
        return (num <= -1) ? sign : num.toString();
    }
    /**
     * @param {?} num
     * @param {?} muti
     * @return {?}
     */
    GetPoints(num, muti) {
        /** @type {?} */
        let ans = (num * muti);
        return (ans <= -1) ? "--" : ans.toString();
    }
    //if timebase == day ==> ProgressPersonalData.find one day 
    //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
    /**
     * @param {?} data
     * @return {?}
     */
    GetTotalPoints(data) {
        //check data == -1?
        /** @type {?} */
        let checkData = new ProgressPersonalData();
        checkData.Find = (data.Find == -1) ? 0 : data.Find;
        checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
        checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
        checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
        checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
        /** @type {?} */
        let sum = (checkData.Find * data.FindConvertPointBase) +
            (checkData.Schedule * data.ScheduleConvertPointBase) +
            (checkData.Meet * data.MeetConvertPointBase) +
            (checkData.Submit * data.SubmitConvertPointBase) +
            (checkData.Inforce * data.InforceConvertPointBase);
        return sum;
    }
    /**
     * @param {?} data
     * @param {?} limit
     * @param {?} isWeek
     * @return {?}
     */
    GetPercentageCircleValue(data, limit, isWeek) {
        console.debug("_getPercentageCircleValue: ", data);
        //check data == -1?
        /** @type {?} */
        let checkData = new ProgressPersonalData();
        checkData.DataType = data.DataType;
        checkData.TimeBase = data.TimeBase;
        checkData.Find = (data.Find == -1) ? 0 : data.Find;
        checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
        checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
        checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
        checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
        /** @type {?} */
        let sum = (checkData.Find * data.FindConvertPointBase) +
            (checkData.Schedule * data.ScheduleConvertPointBase) +
            (checkData.Meet * data.MeetConvertPointBase) +
            (checkData.Submit * data.SubmitConvertPointBase) +
            (checkData.Inforce * data.InforceConvertPointBase);
        /** @type {?} */
        let max = (isWeek == true) ? limit * 7 : limit;
        /** @type {?} */
        let ans = (sum / max);
        console.debug("_getPercentageCircleValue ans max sum: ", ans, max, sum);
        if (ans == 0 || !NumberUtils.isNumber(ans))
            return "0";
        return (ans >= 1) ? "1" : ans.toFixed(2);
    }
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    GetPercentage(numerator, denominator) {
        if (numerator <= 0 || denominator <= 0)
            return 0;
        /** @type {?} */
        let ans = Math.round((numerator / denominator) * 100);
        return (ans) ? ans : 0;
    }
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    GetPercentageLength(numerator, denominator, maxLength, maxBase) {
        if (numerator <= 0 || denominator <= 0)
            return 0;
        /** @type {?} */
        let ans = Math.round((numerator / denominator) * 100) / maxBase;
        return (ans >= maxLength) ? maxLength : ans;
    }
}
ProgressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProgressService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: DeviceService },
    { type: NotificationMgr },
    { type: NotificationUtils },
    { type: ErrorHandler }
];
/** @nocollapse */ ProgressService.ngInjectableDef = defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(inject(APIDispatch), inject(APIFactory), inject(DeviceService), inject(NotificationMgr), inject(NotificationUtils), inject(ErrorHandler)); }, token: ProgressService, providedIn: "root" });
__decorate([
    Valid('ProgressDirectIndirectData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], ProgressService.prototype, "GetDrillDwonAgentIdObj", null);
__decorate([
    Valid('ProgressDirectIndirectData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], ProgressService.prototype, "GetDrillDownAgentIdObjRouterNameObj", null);
__decorate([
    Valid('ProgressObj'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Observable)
], ProgressService.prototype, "GetProgressDataBySQLite", null);
__decorate([
    Valid('ConfigurationObj'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], ProgressService.prototype, "GetYearConfigDataBySQLite", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PerformanceType = {
    Personal: "P",
    Team: "T",
    unknow: "U",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ActualValueDataType = {
    FYFC: "FYFC",
    ANP: "ANP",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressActualValue = class ProgressActualValue {
    /**
     * @param {?} id
     * @param {?} year
     * @param {?} performanceType
     * @param {?} dataType
     * @param {?} month
     * @param {?} value
     */
    constructor(id, year, performanceType, dataType, month, value) {
        this._clientID = id;
        this._dataYear = year;
        this._performanceType = performanceType;
        this._dataType = dataType;
        this._month = month;
        this._value = value;
    }
    //client id
    /**
     * @return {?}
     */
    get ClientID() {
        return this._clientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ClientID(value) {
        this._clientID = value;
    }
    //data year
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._dataYear = value;
    }
    //performance type
    /**
     * @return {?}
     */
    get PerformanceType() {
        return this._performanceType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PerformanceType(value) {
        this._performanceType = value;
    }
    //data type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataType(value) {
        this._dataType = value;
    }
    //month
    /**
     * @return {?}
     */
    get Month() {
        return this._month;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Month(value) {
        this._month = value;
    }
    //value
    /**
     * @return {?}
     */
    get Value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Value(value) {
        this._value = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressActualValue.prototype, "_clientID", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressActualValue.prototype, "_dataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressActualValue.prototype, "_performanceType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressActualValue.prototype, "_dataType", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressActualValue.prototype, "_month", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressActualValue.prototype, "_value", void 0);
ProgressActualValue = __decorate([
    Bean('ProgressActualValue'),
    __metadata("design:paramtypes", [String, Number, String, String, Number, Number])
], ProgressActualValue);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PersonalData = class PersonalData {
    /**
     * @param {?} dataYear
     * @param {?} timeBase
     * @param {?} dataType
     * @param {?} find
     * @param {?} schedule
     * @param {?} meet
     * @param {?} submit
     * @param {?} inforce
     */
    constructor(dataYear, timeBase, dataType, find, schedule, meet, submit, inforce) {
        this._dataYear = dataYear;
        this._timeBase = timeBase;
        this._dataType = dataType;
        this._find = find;
        this._schedule = schedule;
        this._meet = meet;
        this._submit = submit;
        this._inforce = inforce;
    }
    //#region Getter setter
    //year
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataTear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataTypet(type) {
        this._dataType = type;
    }
    //find
    /**
     * @return {?}
     */
    get Find() {
        return this._find;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Find(num) {
        this._find = num;
    }
    //schedule
    /**
     * @return {?}
     */
    get Schedule() {
        return this._schedule;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Schedule(num) {
        this._schedule = num;
    }
    //meet
    /**
     * @return {?}
     */
    get Meet() {
        return this._meet;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Meet(num) {
        this._meet = num;
    }
    //submit
    /**
     * @return {?}
     */
    get Submit() {
        return this._submit;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Submit(num) {
        this._submit = num;
    }
    //inforce
    /**
     * @return {?}
     */
    get Inforce() {
        return this._inforce;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Inforce(num) {
        this._inforce = num;
    }
    //#endregion
    /**
     * @return {?}
     */
    getTotalCount() {
        /** @type {?} */
        let sum = this.Find + this.Schedule + this.Meet + this.Submit + this.Inforce;
        return sum;
    }
    /**
     * @return {?}
     */
    getTotalPoints() {
        /** @type {?} */
        let sum = this.getFindPoints() + this.getSchedulePoints() + this.getMeetPoints() + this.getSubmitPoints() + this.getInforcePoints();
        return sum;
    }
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    getDifferentPercentage(numerator, denominator) {
        return Math.round((numerator / denominator) * 100);
    }
    /*
        // 1 1 2 10 2   f /s /m /su /i
        getFindPoints(dot:number) : number {
            return this.Find * dot ;
        }
    
        getSchedulePoints(dot:number) : number {
            return this.Schedule  * dot;
        }
    
        getMeetPoints(dot:number) : number {
            return this.Meet * dot;
        }
    
        getSubmitPoints(dot:number) : number {
            return this.Submit * dot;
        }
    
        getInforcePoints(dot:number) : number {
            return this.Inforce  * dot;
        }
    
        /*
        getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
            return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
        }
        */
    /**
     * @return {?}
     */
    getFindPoints() {
        return this.Find * 1;
    }
    /**
     * @return {?}
     */
    getSchedulePoints() {
        return this.Schedule * 1;
    }
    /**
     * @return {?}
     */
    getMeetPoints() {
        return this.Meet * 2;
    }
    /**
     * @return {?}
     */
    getSubmitPoints() {
        return this.Submit * 10;
    }
    /**
     * @return {?}
     */
    getInforcePoints() {
        return this.Inforce * 2;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_dataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], PersonalData.prototype, "_timeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], PersonalData.prototype, "_dataType", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_find", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_schedule", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_meet", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_submit", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalData.prototype, "_inforce", void 0);
PersonalData = __decorate([
    Bean('PersonalData'),
    __metadata("design:paramtypes", [Number, String, String, Number, Number, Number, Number, Number])
], PersonalData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PersonalDataState = class PersonalDataState {
    constructor() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._dataType = PersonalDataType.Unknow;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataYear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._dataType = type;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], PersonalDataState.prototype, "_dataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], PersonalDataState.prototype, "_timeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], PersonalDataState.prototype, "_dataType", void 0);
PersonalDataState = __decorate([
    Bean('PersonalDataState'),
    __metadata("design:paramtypes", [])
], PersonalDataState);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ProgressBarControlModeType = {
    TWMode: "TWMode",
    Unknow: "Unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressBarControlData = class ProgressBarControlData {
    constructor() {
        this._barLengthMaxValue = 1.5;
    }
    /**
     * @return {?}
     */
    get barLengthMaxValue() {
        return this._barLengthMaxValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set barLengthMaxValue(value) {
        this._barLengthMaxValue = value;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GetConfigMin(type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 70;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GetConfigMax(type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 100;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressBarControlData.prototype, "_barLengthMaxValue", void 0);
ProgressBarControlData = __decorate([
    Bean('ProgressBarControlData')
], ProgressBarControlData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressDirectData {
    constructor() {
        this.AgentID = "";
        this.AgentName = "";
        this.JobGrade = "";
        this.Drilldown = false;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.DataType = ProgressDataTeamValueType.Unknow;
        //public Activities: ActivitiesType = ActivitiesType.Unknow;
        this.Activities = "";
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ProgressIndirectData = class ProgressIndirectData {
    constructor() {
        this.AgentID = "";
        this.AgentName = "";
        this.JobGrade = "";
        this.Drilldown = false;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.DataType = ProgressDataTeamValueType.Unknow;
        //public Activities: ActivitiesType = ActivitiesType.Unknow;
        this.Activities = "";
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "AgentID", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "AgentName", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "JobGrade", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], ProgressIndirectData.prototype, "Drilldown", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "TimeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "DataType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ProgressIndirectData.prototype, "Activities", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressIndirectData.prototype, "Goal", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressIndirectData.prototype, "Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressIndirectData.prototype, "Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], ProgressIndirectData.prototype, "Shortfall", void 0);
ProgressIndirectData = __decorate([
    Bean('ProgressIndirectData')
], ProgressIndirectData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let TeamDataState = class TeamDataState {
    constructor() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._teamValueType = ProgressDataTeamValueType.FYFC;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataYear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //team value type
    /**
     * @return {?}
     */
    get TeamValueType() {
        return this._teamValueType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set TeamValueType(type) {
        this._teamValueType = type;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], TeamDataState.prototype, "_dataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], TeamDataState.prototype, "_timeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], TeamDataState.prototype, "_teamValueType", void 0);
TeamDataState = __decorate([
    Bean('TeamDataState'),
    __metadata("design:paramtypes", [])
], TeamDataState);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressListContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        // week day
        this.WeekText = "";
        this.TodayText = "";
        //Find Schedule Meet Submit Inforce
        this.FindNameText = "";
        this.FindContentText = "";
        this.FindUnitText = "";
        this.ScheduleNameText = "";
        this.ScheduleContentText = "";
        this.ScheduleUnitText = "";
        this.MeetNameText = "";
        this.MeetContentText = "";
        this.MeetUnitText = "";
        this.SubmitNameText = "";
        this.SubmitContentText = "";
        this.SubmitUnitText = "";
        this.InforceNameText = "";
        this.InforceContentText = "";
        this.InforceUnitText = "";
        this.AlmostMadeItMsg = "";
        this.CongratulationsMsg = "";
        this.WellDoneMsg = "";
        this.GreatJobMsg = "";
        //units
        this.PointsText = "";
        this._setTranslateVariable();
        this.WeekText = this._translateWithVariable('Week');
        this.TodayText = this._translateWithVariable('Today');
        this.FindNameText = this._translateWithVariable('Find');
        this.FindContentText = this._translateWithVariable('Find_Subtitle');
        this.FindUnitText = this._translateWithVariable('People');
        this.ScheduleNameText = this._translateWithVariable('Schedule');
        this.ScheduleContentText = this._translateWithVariable('Schedule_Subtitle');
        this.ScheduleUnitText = this._translateWithVariable('Times');
        this.MeetNameText = this._translateWithVariable('Meet');
        this.MeetContentText = this._translateWithVariable('Meet_Subtitle');
        this.MeetUnitText = this._translateWithVariable('Times');
        this.SubmitNameText = this._translateWithVariable('Submit');
        this.SubmitContentText = this._translateWithVariable('Submit_Subtitle');
        this.SubmitUnitText = this._translateWithVariable('Times');
        this.InforceNameText = this._translateWithVariable('Inforce');
        this.InforceContentText = this._translateWithVariable('Inforce_Subtitle');
        this.InforceUnitText = this._translateWithVariable('Times');
        this.PointsText = this._translateWithVariable('Points');
        this.CongratulationsMsg = this._translateWithVariable('Progress_Congratulations_Message');
        this.AlmostMadeItMsg = this._translateWithVariable('Progress_Almost_Made_It_Message');
        this.WellDoneMsg = this._translateWithVariable('Progress_Well_Done_Message');
        this.GreatJobMsg = this._translateWithVariable('Progress_Great_Job_Message');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
            "gratsPoints": 20,
            "wellDownPoints": 10
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //personal team
        this.PersonalText = "";
        this.TeamText = "";
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.BackToProgressBtnText = "";
        this._setTranslateVariable();
        this.PersonalText = this._translateWithVariable('Personal');
        this.TeamText = this._translateWithVariable('Team');
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.BackToProgressBtnText = this._translateWithVariable('Back_To_Progress');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressActivityListContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.ActivitiesText = "";
        this.AchieveText = "";
        this.FindText = "";
        this.FindContentText = "";
        this.ScheduleText = "";
        this.ScheduleContentText = "";
        this.MeetPresentText = "";
        this.MeetPresentContentText = "";
        this.SubmitText = "";
        this.SubmitContentText = "";
        this.InforceText = "";
        this.InforceContentText = "";
        this.ActualGoalText = "";
        this.ActualPlanText = "";
        this._setTranslateVariable();
        this.ActivitiesText = this._translateWithVariable('Activities');
        this.AchieveText = this._translateWithVariable('Achieve');
        this.ActualGoalText = this._translateWithVariable('Actual_Goal');
        this.ActualPlanText = this._translateWithVariable('Actual_Plan');
        this.FindText = this._translateWithVariable('Find');
        this.FindContentText = this._translateWithVariable('Find_Subtitle');
        this.ScheduleText = this._translateWithVariable('Schedule');
        this.ScheduleContentText = this._translateWithVariable('Schedule_Subtitle');
        this.MeetPresentText = this._translateWithVariable('Meet_Present');
        this.MeetPresentContentText = this._translateWithVariable('Meet_Subtitle');
        this.SubmitText = this._translateWithVariable('Submit');
        this.SubmitContentText = this._translateWithVariable('Submit_Subtitle');
        this.InforceText = this._translateWithVariable('Inforce');
        this.InforceContentText = this._translateWithVariable('Inforce_Subtitle');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressMonthlyContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.MonthlyPlanFYFCTitleText = "";
        this.MonthText = "";
        this.PlanText = "";
        this.ActualText = "";
        this.TotalForecastTitle = "";
        this.TotalYTDActualTitle = "";
        this._setTranslateVariable();
        this.MonthlyPlanFYFCTitleText = this._translateWithVariable('Monthly_Plan_FYFC_Title');
        this.MonthText = this._translateWithVariable('Month');
        this.ActualText = this._translateWithVariable('Actual');
        this.PlanText = this._translateWithVariable('Plan');
        this.TotalForecastTitle = this._translateWithVariable('Total_Forecast');
        this.TotalYTDActualTitle = this._translateWithVariable('Total_YTD_Actual');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressTeamContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ManpowerText = "";
        this.RecruitmentText = "";
        this._setTranslateVariable();
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ManpowerText = this._translateWithVariable('Manpower');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressTeamDirectContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.DirectUnitTitle = "";
        this.ActivitiesText = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.DirectUnitTitle = this._translateWithVariable('Direct_Unit_Title');
        this.ActivitiesText = this._translateWithVariable('Activities');
        this.ActualText = this._translateWithVariable('Actual');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.GoalText = this._translateWithVariable('Goal');
        this.ShortfallText = this._translateWithVariable('Shortfall');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressTeamIndirectContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.IndirectUnitTitle = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.IndirectUnitTitle = this._translateWithVariable('Indirect_Unit_Title');
        this.GoalText = this._translateWithVariable('Goal');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.ActualText = this._translateWithVariable('Actual');
        this.ShortfallText = this._translateWithVariable('Shortfall');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressTeamMainContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this._language = new Language();
        this.AgencyTitle = "";
        this.AllZoneTitle = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ManpowerText = "";
        this.ShortfallText = "";
        this.RecruitmentText = "";
        this._setTranslateVariable();
        this.AgencyTitle = this._translateWithVariable('Agency_Title');
        this.AllZoneTitle = this._translateWithVariable('All_Zone_Title');
        this.ManpowerText = this._translateWithVariable(this._language.progressManpower);
        this.RecruitmentText = this._translateWithVariable(this._language.progressRecruitment);
        this.GoalText = this._translateWithVariable(this._language.progressGoal);
        this.ActualText = this._translateWithVariable(this._language.progressActual);
        this.ForecastText = this._translateWithVariable(this._language.progressForecast);
        this.ShortfallText = this._translateWithVariable(this._language.progressShortfall);
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressHeadContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //personal team
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ManpowerText = "";
        this.RecruitmentText = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ManpowerText = this._translateWithVariable('Manpower');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
        this.GoalText = this._translateWithVariable('Goal');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.ActualText = this._translateWithVariable('Actual');
        this.ShortfallText = this._translateWithVariable('Shortfall');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfoContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //progress head table info
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ForecastText = "";
        this.RecruitmentText = "";
        this.InformationDescriptionText = "";
        this.InfoTitle = "";
        this.InfoMonthDetailText = "";
        this.InfoQuarterDetailText = "";
        this.InfoYearDetailText = "";
        this.InfoForecastRecruitmentDetailText = "";
        this.InfoAllAmountCountsByMillionText = "";
        //progress-personal-progressbar-list info
        this.InfoHowToReadThisTitle = "";
        this.InfoConversionRateText = "";
        this.InfoConversionRateDetailText = "";
        //progress-team-direct-unit info
        this.InfoActivityLabelText = "";
        this.InfoRedMeanText = "";
        this.InfoGreyMeanText = "";
        this.InfoIfAnActivity1Text = "";
        this.InfoIfAnActivity2Text = "";
        this.InfoToFindText = "";
        this.InfoTryTo1Text = "";
        this.InfoTryTo2Text = "";
        this.InfoTryTo3Text = "";
        this.InfoMoreActive1Text = "";
        this.InfoMoreActive2Text = "";
        this.InfoMoreActive3Text = "";
        this.InfoMoreActive4Text = "";
        this.InfoTryHard1Text = "";
        this.InfoTryHard2Text = "";
        this.InfoTryHard3Text = "";
        this.InfoHighQuality1Text = "";
        this.InfoHighQuality2Text = "";
        this._setTranslateVariable();
        //progress head table info
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
        this.InformationDescriptionText = this._translateWithVariable('Info_Information_Description');
        this.InfoTitle = this._translateWithVariable('Info_Title');
        this.InfoMonthDetailText = this._translateWithVariable('Info_Month_Detail');
        this.InfoQuarterDetailText = this._translateWithVariable('Info_Quarter_Detail');
        this.InfoYearDetailText = this._translateWithVariable('Info_Year_Detail');
        this.InfoForecastRecruitmentDetailText = this._translateWithVariable('Info_Forecast_Recruitment_Detail');
        //progress-personal-progressbar-list info
        this.InfoHowToReadThisTitle = this._translateWithVariable('Info_How_To_Read_This');
        this.InfoConversionRateText = this._translateWithVariable('Info_Conversion_Rate');
        this.InfoConversionRateDetailText = this._translateWithVariable('Info_Conversion_Rate_Detail');
        //progress-team-direct-unit
        this.InfoActivityLabelText = this._translateWithVariable('Info_Activity_Label');
        this.InfoRedMeanText = this._translateWithVariable('Info_Red_Mean');
        this.InfoGreyMeanText = this._translateWithVariable('Info_Grey_Mean');
        this.InfoIfAnActivity1Text = this._translateWithVariable('Info_If_An_Activity_1');
        this.InfoIfAnActivity2Text = this._translateWithVariable('Info_If_An_Activity_2');
        this.InfoToFindText = this._translateWithVariable('Info_To_Find');
        this.InfoTryTo1Text = this._translateWithVariable('Info_Try_To_1');
        this.InfoTryTo2Text = this._translateWithVariable('Info_Try_To_2');
        this.InfoTryTo3Text = this._translateWithVariable('Info_Try_To_3');
        this.InfoMoreActive1Text = this._translateWithVariable('Info_More_Active_1');
        this.InfoMoreActive2Text = this._translateWithVariable('Info_More_Active_2');
        this.InfoMoreActive3Text = this._translateWithVariable('Info_More_Active_3');
        this.InfoMoreActive4Text = this._translateWithVariable('Info_More_Active_4');
        this.InfoTryHard1Text = this._translateWithVariable('Info_Try_Hard_1');
        this.InfoTryHard2Text = this._translateWithVariable('Info_Try_Hard_2');
        this.InfoTryHard3Text = this._translateWithVariable('Info_Try_Hard_3');
        this.InfoHighQuality1Text = this._translateWithVariable('Info_High_Quality_1');
        this.InfoHighQuality2Text = this._translateWithVariable('Info_High_Quality_2');
        this.InfoAllAmountCountsByMillionText = this._translateWithVariable("Info_All_Amount_Counts_By_Million");
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ActivitiesType = {
    Find: "F",
    Schedule: "S",
    Meet: "M",
    Submit: "Su",
    Inforce: "I",
    Unknow: "Unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Quarters = {
    Q1: "Q1",
    Q2: "Q2",
    Q3: "Q3",
    Q4: "Q4",
    Unknow: "unknow",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressModule {
}
ProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    UIModule,
                    CommonModule
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetPersonalProgressAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getPersonalProgress';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getPersonalProgressMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getPersonalProgress resp: ", resp);
                console.debug("SQLite getPersonalProgress json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProgressActualValueAPI {
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
    }
    /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
    constructor() { }
    ;
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressActualValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getProgressActualValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getProgressActualValue_2020.json';
        }
        else {
            //todo throw error
            console.warn('dataYear not match mock path');
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        throw new Error("Method not implemented.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProgressDataActualValueAPI {
    /**
     * @return {?}
     */
    get SearchYear() {
        return this._searchYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set SearchYear(value) {
        this._searchYear = value;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressDataActualValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        return './assets/mock/getProgressDataActualValueMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite actual start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite actual defaultDao: ", defaultDao);
        /** @type {?} */
        let progressActualObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
        console.debug("SQLite actual progressActualObj: ", progressActualObj);
        if (defaultDao != undefined && progressActualObj != undefined) {
            return from(defaultDao.queryByTable(progressActualObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite actual data api resp: ", resp);
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp["Body"];
                /** @type {?} */
                let filterData = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.DataYear == 2019));
                /** @type {?} */
                let filterData2 = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.DataYear == 2020));
                console.debug("SQLite actual test date body: ", data);
                console.debug("SQLite actual test filterData: ", filterData);
                console.debug("SQLite actual test filterData2: ", filterData2);
                /** @type {?} */
                let arr = [];
                arr.push(filterData);
                arr.push(filterData2);
                console.debug("SQLite actual test arr: ", arr);
                return arr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp;
                /** @type {?} */
                let progressActualObj1 = {
                    "DataYear": "2019",
                    "TimeBase": "Month",
                    "Values": [],
                };
                /** @type {?} */
                let progressActualObj2 = {
                    "DataYear": "2020",
                    "TimeBase": "Month",
                    "Values": []
                };
                progressActualObj1.Values.push(data[0]);
                progressActualObj2.Values.push(data[1]);
                /** @type {?} */
                let progressActualObjArr = [];
                progressActualObjArr.push(progressActualObj1);
                progressActualObjArr.push(progressActualObj2);
                console.debug("SQLite actual test progressActualObj123: ", progressActualObjArr);
                return progressActualObjArr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp;
                console.debug("SQLite actual test resp progressActualObj123 : ", resp);
                console.debug("SQLite actual test data progressActualObj123 : ", data);
                /** @type {?} */
                let defaultProgressActualObj = {
                    "lastUpdateTime": "2019-06-19",
                    "Actual": [],
                };
                defaultProgressActualObj.Actual.push(data[0]);
                defaultProgressActualObj.Actual.push(data[1]);
                console.debug("SQLite actual test defaultProgressActualObj : ", defaultProgressActualObj);
                return defaultProgressActualObj;
            })));
        }
        else {
            console.debug("SQLite actual data fail......");
        }
        //throw new Error("Method not implemented.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProgressDataAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._clientID = 0;
        this._personalDataType = PersonalDataType.Actual;
        this._personalDataTimeBase = PersonalDataTimeBase.Day;
        this._searchYear = 0;
        this._daoFactory = daoFactory;
    }
    //condition year
    /**
     * @param {?} value
     * @return {?}
     */
    set SearchYear(value) {
        this._searchYear = value;
    }
    /**
     * @return {?}
     */
    get SearchYear() {
        return this._searchYear;
    }
    //condition client id
    /**
     * @param {?} id
     * @return {?}
     */
    set SearchClientId(id) {
        this._clientID = id;
    }
    /**
     * @return {?}
     */
    get SearchCLientId() {
        return this._clientID;
    }
    //condition data type
    /**
     * @param {?} type
     * @return {?}
     */
    set SearchDataType(type) {
        this._personalDataType = type;
    }
    /**
     * @return {?}
     */
    get SearchDataType() {
        return this._personalDataType;
    }
    //condition time base
    /**
     * @param {?} time
     * @return {?}
     */
    set SearchTimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @return {?}
     */
    get SearchTimeBase() {
        return this._personalDataTimeBase;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressData';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getProgressDataMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite progress start ");
        /*
                let defaultProgressObj =
                {
                    "lastUpdateTime": "",
                    "Progress":[],
                };
                */
        /*
                // Progress [progressObj, progressObj] *2
                let progressObj:
                {
                    "DataYear": "",
                    "YesterdayPoint": "",
                    "Values":[]
                };
                */
        /*
                // progressObj.Value[] * n
                let progresValueObj =
                {
                    "DataType":"",
                    "TimeBase": "",
                    "FYFC": 0,
                    "Find": 0,
                    "Schedule": 0,
                    "Meet": 0,
                    "Submit": 0,
                    "Inforce": 0
                };
                */
        // test class to obj type
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite progress defaultDao: ", defaultDao);
        /** @type {?} */
        let progressTableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
        console.debug("SQLite progress progressTableObj: ", progressTableObj);
        if (progressTableObj != undefined && defaultDao != undefined) {
            return from(defaultDao.queryByTable(progressTableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite progress data api resp: ", resp);
                return resp;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp["Body"];
                /** @type {?} */
                let filterData = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.DataYear == 2019));
                /** @type {?} */
                let filterData2 = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.DataYear == 2020));
                console.debug("SQLite progress test date body: ", data);
                console.debug("SQLite progress test filterData: ", filterData);
                console.debug("SQLite progress test filterData2: ", filterData2);
                /** @type {?} */
                let arr = [];
                arr.push(filterData);
                arr.push(filterData2);
                console.debug("SQLite progress test arr: ", arr);
                return arr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp;
                /** @type {?} */
                let progressObj1 = {
                    "DataYear": "2019",
                    "YesterdayPoint": "20",
                    "Personal": { Values: [] },
                };
                /** @type {?} */
                let progressObj2 = {
                    "DataYear": "2020",
                    "YesterdayPoint": "20",
                    "Personal": { Values: [] },
                };
                progressObj1.Personal.Values.push(data[0]);
                progressObj2.Personal.Values.push(data[1]);
                /** @type {?} */
                let progressObjArr = [];
                progressObjArr.push(progressObj1);
                progressObjArr.push(progressObj2);
                console.debug("SQLite progress test progressObj123: ", progressObjArr);
                return progressObjArr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let data = resp;
                console.debug("SQLite progress test resp progressObj123 : ", resp);
                console.debug("SQLite progress test data progressObj123 : ", data);
                /** @type {?} */
                let defaultProgressObj = {
                    "lastUpdateTime": "2019-06-19",
                    "Progress": [],
                };
                defaultProgressObj.Progress.push(data[0]);
                defaultProgressObj.Progress.push(data[1]);
                console.debug("SQLite progress test defaultProgressObj123 : ", defaultProgressObj);
                return defaultProgressObj;
            })));
        }
        else {
            console.debug("SQLite progress fail.....");
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProgressDataGoalSettingPlanAPI {
    /**
     * @return {?}
     */
    get SearchYear() {
        return this._searchYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set SearchYear(value) {
        this._searchYear = value;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressDataGoalSettingPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        return './assets/mock/getProgressDataGoalSettingPlanMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite goal plan start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite goal plan defaultDao: ", defaultDao);
        /** @type {?} */
        let progressGoalPlanObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
        console.debug("SQLite goal plan progressGoalPlanObj: ", progressGoalPlanObj);
        if (defaultDao != undefined && progressGoalPlanObj != undefined) {
            return from(defaultDao.queryByTable(progressGoalPlanObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite goal plan data api resp: ", resp);
            })));
        }
        else {
            console.debug("SQLite goal plan fail... ");
        }
        //throw new Error("Method not implemented.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProgressGoalPlanAPI {
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
    }
    /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
    constructor() { }
    ;
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressGoalPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getProgressGoalPlan_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getProgressGoalPlan_2020.json';
        }
        else {
            //todo throw error
            console.warn("datYear not match mock path");
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        throw new Error("Method not implemented.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetTeamProgressDetailAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getTeamProgressDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getTeamProgressDetailMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Detail");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getTeamProgressDetail resp: ", resp);
                console.debug("SQLite getTeamProgressDetail json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetTeamProgressMainAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getTeamProgressMain';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getTeamProgressMainMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Main");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getTeamProgressMain resp: ", resp);
                console.debug("SQLite getTeamProgressMain json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PersonalProgressOldAPI {
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
    constructor() { }
    ;
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getPersonalProgressOld';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        return './assets/mock/getPersonalProgress.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        throw new Error("Method not implemented.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetYearConfigurationAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getYearConfiguration';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getYearConfigurationMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start year configuration ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getYearConfiguration resp: ", resp);
                console.debug("SQLite getYearConfiguration json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddPointAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._addType = "";
        this._year = -1;
        this._addPointNum = 1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetAddType(value) {
        this._addType = value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    SetYear(val) {
        this._year = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    SetPointNum(val) {
        this._addPointNum = val;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "addPoint";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/saveSuccess.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("AddPointAPI add " + this._addType + " point");
        console.log("this._addType", this._addType, "this._year", this._year);
        if (StringUtils.isNotEmpty(this._addType) && this._year != -1) {
            this.dao = this._daoFactory.getDefaultDao();
            /** @type {?} */
            let TimeBaselist = ["Day", "Week", "Month", "Quarter", "Year"];
            return from(Promise.all(TimeBaselist.map((/**
             * @param {?} timeBase
             * @return {?}
             */
            timeBase => this._addPoint(timeBase)))).then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let addResp = this.dao.runTransaction().toPromise();
                console.log("addResp", addResp);
                return addResp;
            })));
        }
        else {
            return of(false);
        }
    }
    /**
     * @private
     * @param {?} timeBase
     * @return {?}
     */
    _addPoint(timeBase) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into _addPoint()");
            console.log("timeBase", timeBase);
            /** @type {?} */
            let currentNum = 0;
            /** @type {?} */
            let PersonalPorgress = this._daoFactory.getDefaultTable("TW_LH_SD_Personal_Progress");
            console.log("SQLite tableObj: ", PersonalPorgress);
            PersonalPorgress.addRestriction(new EqualRestriction("DataYear", [this._year]));
            PersonalPorgress.addRestriction(new EqualRestriction("TimeBase", [timeBase]));
            PersonalPorgress.addRestriction(new EqualRestriction("DataType", ["Actual"]));
            /** @type {?} */
            let progressObj = null;
            /** @type {?} */
            let getResp = yield this.dao.queryByTable(PersonalPorgress).toPromise();
            console.log("AddPointAPI getResp", getResp);
            if (getResp.Header["status"] && getResp.Body.length > 0) {
                progressObj = getResp.Body[0];
                if (this._addType == "customer") {
                    currentNum = progressObj.Find;
                    PersonalPorgress.setValue("Find", currentNum + this._addPointNum);
                }
                else if (this._addType == "calendar") {
                    currentNum = progressObj.Schedule;
                    PersonalPorgress.setValue("Schedule", currentNum + this._addPointNum);
                }
                console.log("AddPointAPI PersonalPorgress", PersonalPorgress);
                this.dao.transactionUpdate(PersonalPorgress);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ProgressService, ProgressActualValue, ConfigurationObj, PersonalData, PersonalDataState, PersonalObj, ProgressPersonalData, ProgressBarControlData, ProgressDirectData, ProgressDirectIndirectData, ProgressIndirectData, ProgressObj, ProgressTeamData, ProgressYearConfig, ProgressYearObj, TeamDataState, TeamObj, ProgressListContentClass, ProgressContentClass, ProgressActivityListContentClass, ProgressMonthlyContentClass, ProgressTeamContentClass, ProgressTeamDirectContentClass, ProgressTeamIndirectContentClass, ProgressTeamMainContentClass, ProgressHeadContentClass, InfoContentClass, ActivitiesType, ActualValueDataType, DirectUnitType, PerformanceType, PersonalDataTimeBase, PersonalDataType, ProgressBarControlModeType, ProgressDataTeamValueType, Quarters, Tag, ProgressModule, GetPersonalProgressAPI, GetProgressActualValueAPI, GetProgressDataActualValueAPI, GetProgressDataAPI, GetProgressDataGoalSettingPlanAPI, GetProgressGoalPlanAPI, GetTeamProgressDetailAPI, GetTeamProgressMainAPI, PersonalProgressOldAPI, GetYearConfigurationAPI, AddPointAPI };

//# sourceMappingURL=allianzSND-progress.js.map