/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from '@angular/core';
import { APIDispatch, APIFactory, APPError, DeviceService, NotificationMgr, Valid } from '@allianzSND/core';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { ProgressYearConfig } from './model/ProgressYearConfig';
import { ConfigurationObj } from './model/ConfigurationObj';
import { ProgressObj } from './model/ProgressObj';
import { ProgressYearObj } from './model/ProgressYearObj';
import { PersonalObj } from './model/PersonalObj';
import { TeamObj } from './model/TeamObj';
import { ProgressPersonalData } from './model/ProgessPersonalData';
import { ProgressTeamData } from './model/ProgressTeamData';
import { ProgressDirectIndirectData } from './model/ProgressDirectIndirectData';
import { DirectUnitType } from './model/Enum/DirectUnitType';
import { Tag } from './model/Enum/Tag';
import { NotificationUtils } from '@allianzSND/notification';
import { NumberUtils } from '@allianzSND/core';
import { ROLE } from '@allianzSND/goal';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "@allianzSND/notification";
var ProgressService = /** @class */ (function () {
    function ProgressService(dispatch, APIFactory, deviceService, notificationMgr, notficationUtils, errorHandler) {
        this.dispatch = dispatch;
        this.APIFactory = APIFactory;
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
    Object.defineProperty(ProgressService.prototype, "AgentIdObjListLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._drillDownAgentIdObjList.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressService.prototype, "lastAgentIdObj", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._drillDownAgentIdObjList.length > 0) ? this._drillDownAgentIdObjList[this.AgentIdObjListLength - 1] : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProgressService.prototype.GetCurrentNavigationTag = /**
     * @return {?}
     */
    function () {
        return this._currentTag;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    ProgressService.prototype.SetCurrentNavigationTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        this._currentTag = tag;
    };
    //#region agent function
    //#region agent function
    /**
     * @return {?}
     */
    ProgressService.prototype.InitDrillDownAgentIdObj = 
    //#region agent function
    /**
     * @return {?}
     */
    function () {
        this._drillDownAgentIdObjList = new Array();
        //this._drillDowmAgentIdSubject = new BehaviorSubject(this.lastAgentIdObj);
    };
    /**
     * @param {?} agentIdObj
     * @return {?}
     */
    ProgressService.prototype.AddDrillDownAgentIdObj = /**
     * @param {?} agentIdObj
     * @return {?}
     */
    function (agentIdObj) {
        this._drillDownAgentIdObjList.push(agentIdObj);
        this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetDrillDwonAgentIdObj = /**
     * @return {?}
     */
    function () {
        return this._drillDowmAgentIdSubject.asObservable();
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.PopDrillDownAgentIdObj = /**
     * @return {?}
     */
    function () {
        this._drillDownAgentIdObjList.pop();
        this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetDrillDownAgentIdObjRouterNameObj = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxLength = this.AgentIdObjListLength;
        if (maxLength >= 2) {
            /** @type {?} */
            var arr = new Array();
            /** @type {?} */
            var data1 = this._drillDownAgentIdObjList[maxLength - 2];
            /** @type {?} */
            var data2 = this._drillDownAgentIdObjList[maxLength - 1];
            arr.push(data1);
            arr.push(data2);
            return of(arr);
        }
        else {
            /** @type {?} */
            var arr = new Array();
            /** @type {?} */
            var data1 = this._drillDownAgentIdObjList[maxLength - 1];
            arr.push(data1);
            return of(arr);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ProgressService.prototype.SetCurrentRole = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._currentRole = val;
        this._currentRoleSubject.next(this._currentRole);
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetCurrentRole = /**
     * @return {?}
     */
    function () {
        return this._currentRoleSubject.asObservable();
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsTeam = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var r = this._currentRole;
        switch (r) {
            case ROLE.AGENT:
                return false;
            case ROLE.AGENTLEADER:
            case ROLE.ZONEHEAD:
            case ROLE.CAO:
                return true;
        }
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsAgent = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.AGENT) ? true : false;
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsSupervisor = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.CAO) ? true : false;
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsManaget = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.ZONEHEAD) ? true : false;
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsAgentLeader = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.AGENTLEADER) ? true : false;
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsShowSwitchTab = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.AGENTLEADER) ? true : false;
    };
    /**
     * @return {?}
     */
    ProgressService.prototype.GetIsShowTeamTab = /**
     * @return {?}
     */
    function () {
        return (this._currentRole == ROLE.AGENT) ? false : true;
    };
    //#endregion
    //#region progress main function
    //get progress data by restful return yaml
    //#endregion
    //#region progress main function
    //get progress data by restful return yaml
    /**
     * @param {?} agentID
     * @return {?}
     */
    ProgressService.prototype.GetProgressDataByRestful = 
    //#endregion
    //#region progress main function
    //get progress data by restful return yaml
    /**
     * @param {?} agentID
     * @return {?}
     */
    function (agentID) {
        try {
            /** @type {?} */
            var getProgressAPI_1 = (/** @type {?} */ (this.APIFactory.getAPI("getProgress")));
            getProgressAPI_1.setAgentID(agentID);
            return from(this.dispatch.dispatch(getProgressAPI_1).toPromise());
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
            console.debug("getProgressDataByRestful agent id: ", agentID);
        }
        return of(null);
    };
    //get progress data by SQLite return yaml
    //get progress data by SQLite return yaml
    /**
     * @param {?} years
     * @return {?}
     */
    ProgressService.prototype.GetProgressDataBySQLite = 
    //get progress data by SQLite return yaml
    /**
     * @param {?} years
     * @return {?}
     */
    function (years) {
        var _this = this;
        try {
            //put it together to yaml
            /** @type {?} */
            var getPersonalProgressAPI = (/** @type {?} */ (this.APIFactory.getAPI('getPersonalProgress')));
            /** @type {?} */
            var getTeamProgressDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getTeamProgressDetail')));
            /** @type {?} */
            var getTeamProgressMainAPI = (/** @type {?} */ (this.APIFactory.getAPI('getTeamProgressMain')));
            /** @type {?} */
            var getOtherParameterAPI = (/** @type {?} */ (this.APIFactory.getAPI('getOtherParameter')));
            return from(Promise.all([getPersonalProgressAPI, getTeamProgressDetailAPI, getTeamProgressMainAPI, getOtherParameterAPI]
                .map((/**
             * @param {?} api
             * @return {?}
             */
            function (api) { return _this.dispatch.dispatch(api).toPromise(); }))).then((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 4), ProgressPersonalRawData = _b[0], ProgressTeamDetailRawData = _b[1], ProgressTeamMainRawData = _b[2], OtherParameterRawData = _b[3];
                console.debug("getProgressDataBySQLite ProgressPersonalRawData: ", ProgressPersonalRawData); //o
                console.debug("getProgressDataBySQLite ProgressTeamDetailRawData: ", ProgressTeamDetailRawData);
                console.debug("getProgressDataBySQLite ProgressTeamMainRawData:", ProgressTeamMainRawData);
                console.debug("getProgressDataBySQLite OtherParameterRawData:", OtherParameterRawData);
                //new way
                /** @type {?} */
                var progressObjBOSS = new ProgressObj();
                /** @type {?} */
                var progressYearObjList = new Array();
                /** @type {?} */
                var personalObjList = new Array();
                /** @type {?} */
                var teamObjList = new Array();
                /** @type {?} */
                var progressPersonalDataList = new Array();
                /** @type {?} */
                var progressTeamMainDataList = new Array();
                /** @type {?} */
                var progressTeamDirectDataList = new Array();
                /** @type {?} */
                var progressTeamIndirectDataList = new Array();
                /** @type {?} */
                var yesterdayPointsList;
                //get yesterdayPoint     
                yesterdayPointsList = _this._GetYesterdayPoints(years, OtherParameterRawData);
                console.debug("getProgressDataBySQLite yesterdayPointsList: ", yesterdayPointsList);
                // get personal data
                progressPersonalDataList = _this._GetProgressPersonalData(years, ProgressPersonalRawData);
                console.debug("getProgressDataBySQLite progressPersonalDataList: ", progressPersonalDataList);
                for (var i = 0; i < years.length; i++) {
                    /** @type {?} */
                    var obj = new PersonalObj();
                    obj.Values = progressPersonalDataList[i];
                    personalObjList.push(obj);
                }
                //get team main data
                progressTeamMainDataList = _this._GetProgressTeamMainData(years, ProgressTeamMainRawData);
                console.debug("getProgressDataBySQLite progressTeamMainDataList: ", progressTeamMainDataList);
                //direct indirect
                progressTeamDirectDataList = _this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.DirectUnit);
                progressTeamIndirectDataList = _this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.IndirectUnit);
                console.debug("getProgressDataBySQLite progressTeamDirectDataList: ", progressTeamDirectDataList);
                console.debug("getProgressDataBySQLite progressTeamIndirectDataList: ", progressTeamIndirectDataList);
                //get team data
                for (var i = 0; i < years.length; i++) {
                    /** @type {?} */
                    var obj = new TeamObj();
                    obj.Values = (progressTeamMainDataList[i]) ? progressTeamMainDataList[i] : null;
                    obj.DirectUnit = (progressTeamDirectDataList[i]) ? progressTeamDirectDataList[i] : null;
                    obj.InDirectUnit = (progressTeamIndirectDataList[i]) ? progressTeamIndirectDataList[i] : null;
                    teamObjList.push(obj);
                }
                //get progress Year data
                for (var i = 0; i < years.length; i++) {
                    /** @type {?} */
                    var obj = new ProgressYearObj();
                    obj.DataYear = years[i];
                    obj.YesterdayPoint = yesterdayPointsList[i];
                    obj.Personal = personalObjList[i];
                    obj.Team = teamObjList[i];
                    progressYearObjList.push(obj);
                }
                //get progressBOSS obj      
                for (var i = 0; i < years.length; i++) {
                    progressObjBOSS.Progress[i] = progressYearObjList[i];
                }
                ;
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
    };
    //#endregion progress main function
    //#region private function
    //#endregion progress main function
    //#region private function
    /**
     * @private
     * @param {?} years
     * @param {?} otherParameterRawData
     * @return {?}
     */
    ProgressService.prototype._GetYesterdayPoints = 
    //#endregion progress main function
    //#region private function
    /**
     * @private
     * @param {?} years
     * @param {?} otherParameterRawData
     * @return {?}
     */
    function (years, otherParameterRawData) {
        /** @type {?} */
        var ansArr = new Array();
        console.debug("_GetYesterdayPoints years: ", years);
        console.debug("_GetYesterdayPoints otherParameterRawData: ", otherParameterRawData);
        try {
            var _loop_1 = function (i) {
                /** @type {?} */
                var yesterdayPoint = otherParameterRawData["Body"].filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.MappingID == "YesterdayPoint"
                    && x.DataYear == years[i]; }));
                console.debug("_GetYesterdayPoints yesterdayPoint: ", yesterdayPoint);
                console.debug("_GetYesterdayPoints yesterdayPoint[0]: ", yesterdayPoint[0]);
                console.debug("_GetYesterdayPoints yesterdayPoint[0]set: ", yesterdayPoint[0].SetValue);
                ansArr.push(yesterdayPoint[0].SetValue);
            };
            for (var i = 0; i < years.length; i++) {
                _loop_1(i);
            }
            return ansArr;
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00211', 'get yesterday points fail!' + error.message));
        }
        return null;
    };
    /**
     * @private
     * @param {?} years
     * @param {?} progressTeamDetailRawData
     * @param {?} unitType
     * @return {?}
     */
    ProgressService.prototype._GetProgressTeamDirectIndirectData = /**
     * @private
     * @param {?} years
     * @param {?} progressTeamDetailRawData
     * @param {?} unitType
     * @return {?}
     */
    function (years, progressTeamDetailRawData, unitType) {
        /** @type {?} */
        var ansArr = new Array();
        console.debug("_getProgressTeamDirectIndirectData years: ", years);
        console.debug("_getProgressTeamDirectIndirectData progressTeamDetailRawData: ", progressTeamDetailRawData);
        try {
            if (progressTeamDetailRawData) {
                /** @type {?} */
                var bodyData = progressTeamDetailRawData["Body"];
                /** @type {?} */
                var rawDataByYearArr = new Array();
                var _loop_2 = function (i) {
                    /** @type {?} */
                    var yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.DataYear == years[i] && x.DirectUnitType == unitType; }));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                };
                for (var i = 0; i < years.length; i++) {
                    _loop_2(i);
                }
                console.debug("_getProgressTeamDirectIndirectData rawDataByYearArr: ", rawDataByYearArr);
                for (var i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    var arr = new Array();
                    for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        var tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        var data = new ProgressDirectIndirectData();
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
    };
    /**
     * @private
     * @param {?} years
     * @param {?} progressTeamMainRawData
     * @return {?}
     */
    ProgressService.prototype._GetProgressTeamMainData = /**
     * @private
     * @param {?} years
     * @param {?} progressTeamMainRawData
     * @return {?}
     */
    function (years, progressTeamMainRawData) {
        /** @type {?} */
        var ansArr = new Array();
        console.debug("_getProgressTeamMainData years: ", years);
        console.debug("_getProgressTeamMainData progressTeamMainRawData: ", progressTeamMainRawData);
        try {
            if (progressTeamMainRawData) {
                /** @type {?} */
                var bodyData = progressTeamMainRawData["Body"];
                /** @type {?} */
                var rawDataByYearArr = new Array();
                var _loop_3 = function (i) {
                    /** @type {?} */
                    var yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.DataYear == years[i]; }));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                };
                for (var i = 0; i < years.length; i++) {
                    _loop_3(i);
                }
                console.debug("_getProgressTeamMainData rawDataByYearArr: ", rawDataByYearArr);
                for (var i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    var arr = new Array();
                    for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        var tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        var data = new ProgressTeamData();
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
    };
    /**
     * @private
     * @param {?} years
     * @param {?} progressPersonalRawData
     * @return {?}
     */
    ProgressService.prototype._GetProgressPersonalData = /**
     * @private
     * @param {?} years
     * @param {?} progressPersonalRawData
     * @return {?}
     */
    function (years, progressPersonalRawData) {
        /** @type {?} */
        var ansArr = new Array();
        console.debug("_getProgressPersonalData years: ", years);
        console.debug("_getProgressPersonalData progressPersonalRawData: ", progressPersonalRawData);
        try {
            if (progressPersonalRawData) {
                /** @type {?} */
                var bodyData = progressPersonalRawData["Body"];
                /** @type {?} */
                var rawDataByYearArr = new Array();
                var _loop_4 = function (i) {
                    /** @type {?} */
                    var yearData = bodyData.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.DataYear == years[i]; }));
                    if (yearData)
                        rawDataByYearArr.push(yearData);
                };
                for (var i = 0; i < years.length; i++) {
                    _loop_4(i);
                }
                console.debug("_getProgressPersonalData rawDataByYearArr: ", rawDataByYearArr);
                for (var i = 0; i < rawDataByYearArr.length; i++) {
                    /** @type {?} */
                    var arr = new Array();
                    for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                        /** @type {?} */
                        var tmp = rawDataByYearArr[i][j];
                        /** @type {?} */
                        var data = new ProgressPersonalData();
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
    };
    //#endregion private function
    //#region year config function
    //get year config 
    //#endregion private function
    //#region year config function
    //get year config 
    /**
     * @return {?}
     */
    ProgressService.prototype.GetYearConfigDataBySQLite = 
    //#endregion private function
    //#region year config function
    //get year config 
    /**
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var getYearConfigurationAPI = (/** @type {?} */ (this.APIFactory.getAPI('getYearConfiguration')));
            return from(this.dispatch.dispatch(getYearConfigurationAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("getYearConfig resp: ", resp);
                // convert to yaml
                /** @type {?} */
                var dataBady = resp["Body"];
                console.debug("getYearConfig dataBady: ", dataBady);
                /** @type {?} */
                var configObj = new ConfigurationObj();
                /** @type {?} */
                var arr = new Array();
                for (var i = 0; i < dataBady.length; i++) {
                    /** @type {?} */
                    var data = new ProgressYearConfig();
                    /** @type {?} */
                    var dataConfig = dataBady[i];
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
    };
    /**
     * @param {?} agentID
     * @return {?}
     */
    ProgressService.prototype.GetYearConfigDataByRestful = /**
     * @param {?} agentID
     * @return {?}
     */
    function (agentID) {
        try {
            /** @type {?} */
            var yearConfigAPI = (/** @type {?} */ (this.APIFactory.getAPI('getYearConfig')));
            yearConfigAPI.setAgentID(agentID);
            return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
            console.debug("getProgressDataByRestful agent id: ", agentID);
        }
        return of(null);
    };
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
    ProgressService.prototype.ShowDesh = 
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
    function (num, sign) {
        if (sign === void 0) { sign = "--"; }
        if (!NumberUtils.isNumber(num)) {
            return sign;
        }
        return (num <= -1) ? sign : num.toString();
    };
    /**
     * @param {?} num
     * @param {?} muti
     * @return {?}
     */
    ProgressService.prototype.GetPoints = /**
     * @param {?} num
     * @param {?} muti
     * @return {?}
     */
    function (num, muti) {
        /** @type {?} */
        var ans = (num * muti);
        return (ans <= -1) ? "--" : ans.toString();
    };
    //if timebase == day ==> ProgressPersonalData.find one day 
    //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
    //if timebase == day ==> ProgressPersonalData.find one day 
    //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
    /**
     * @param {?} data
     * @return {?}
     */
    ProgressService.prototype.GetTotalPoints = 
    //if timebase == day ==> ProgressPersonalData.find one day 
    //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        //check data == -1?
        /** @type {?} */
        var checkData = new ProgressPersonalData();
        checkData.Find = (data.Find == -1) ? 0 : data.Find;
        checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
        checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
        checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
        checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
        /** @type {?} */
        var sum = (checkData.Find * data.FindConvertPointBase) +
            (checkData.Schedule * data.ScheduleConvertPointBase) +
            (checkData.Meet * data.MeetConvertPointBase) +
            (checkData.Submit * data.SubmitConvertPointBase) +
            (checkData.Inforce * data.InforceConvertPointBase);
        return sum;
    };
    /**
     * @param {?} data
     * @param {?} limit
     * @param {?} isWeek
     * @return {?}
     */
    ProgressService.prototype.GetPercentageCircleValue = /**
     * @param {?} data
     * @param {?} limit
     * @param {?} isWeek
     * @return {?}
     */
    function (data, limit, isWeek) {
        console.debug("_getPercentageCircleValue: ", data);
        //check data == -1?
        /** @type {?} */
        var checkData = new ProgressPersonalData();
        checkData.DataType = data.DataType;
        checkData.TimeBase = data.TimeBase;
        checkData.Find = (data.Find == -1) ? 0 : data.Find;
        checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
        checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
        checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
        checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
        /** @type {?} */
        var sum = (checkData.Find * data.FindConvertPointBase) +
            (checkData.Schedule * data.ScheduleConvertPointBase) +
            (checkData.Meet * data.MeetConvertPointBase) +
            (checkData.Submit * data.SubmitConvertPointBase) +
            (checkData.Inforce * data.InforceConvertPointBase);
        /** @type {?} */
        var max = (isWeek == true) ? limit * 7 : limit;
        /** @type {?} */
        var ans = (sum / max);
        console.debug("_getPercentageCircleValue ans max sum: ", ans, max, sum);
        if (ans == 0 || !NumberUtils.isNumber(ans))
            return "0";
        return (ans >= 1) ? "1" : ans.toFixed(2);
    };
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    ProgressService.prototype.GetPercentage = /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    function (numerator, denominator) {
        if (numerator <= 0 || denominator <= 0)
            return 0;
        /** @type {?} */
        var ans = Math.round((numerator / denominator) * 100);
        return (ans) ? ans : 0;
    };
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    ProgressService.prototype.GetPercentageLength = /**
     * @param {?} numerator
     * @param {?} denominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    function (numerator, denominator, maxLength, maxBase) {
        if (numerator <= 0 || denominator <= 0)
            return 0;
        /** @type {?} */
        var ans = Math.round((numerator / denominator) * 100) / maxBase;
        return (ans >= maxLength) ? maxLength : ans;
    };
    ProgressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ProgressService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: APIFactory },
        { type: DeviceService },
        { type: NotificationMgr },
        { type: NotificationUtils },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ ProgressService.ngInjectableDef = i0.defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DeviceService), i0.inject(i1.NotificationMgr), i0.inject(i2.NotificationUtils), i0.inject(i0.ErrorHandler)); }, token: ProgressService, providedIn: "root" });
    tslib_1.__decorate([
        Valid('ProgressDirectIndirectData'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], ProgressService.prototype, "GetDrillDwonAgentIdObj", null);
    tslib_1.__decorate([
        Valid('ProgressDirectIndirectData'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], ProgressService.prototype, "GetDrillDownAgentIdObjRouterNameObj", null);
    tslib_1.__decorate([
        Valid('ProgressObj'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", Observable)
    ], ProgressService.prototype, "GetProgressDataBySQLite", null);
    tslib_1.__decorate([
        Valid('ConfigurationObj'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], ProgressService.prototype, "GetYearConfigDataBySQLite", null);
    return ProgressService;
}());
export { ProgressService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype._drillDownAgentIdObjList;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype._drillDowmAgentIdSubject;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype._currentTag;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype._currentRole;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype._currentRoleSubject;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.dispatch;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.notficationUtils;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9wcm9ncmVzcy1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFvQixhQUFhLEVBQXNCLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsSyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQVcsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxpQkFBaUIsRUFB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QUFDLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU87UUFFL0QsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUU7SUFDL0MsQ0FBQzs7Z0JBbG1CRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBdkJRLFdBQVc7Z0JBQUUsVUFBVTtnQkFBOEMsYUFBYTtnQkFBc0IsZUFBZTtnQkFnQnZILGlCQUFpQjtnQkFqQkwsWUFBWTs7O0lBMEUvQjtRQURDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7O2dEQUNILFVBQVU7aUVBRTFDO0lBUUQ7UUFEQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7OztnREFDVSxVQUFVOzhFQWlCdkQ7SUE2RUQ7UUFEQyxLQUFLLENBQUMsYUFBYSxDQUFDOztpREFDaUIsS0FBSztnREFBVyxVQUFVO2tFQW9HL0Q7SUEyTEQ7UUFEQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7OztnREFDVSxVQUFVO29FQXNEN0M7MEJBdmdCSDtDQTRuQkMsQUF0bUJELElBc21CQztTQWxtQlksZUFBZTs7Ozs7O0lBRTFCLG1EQUE4Rzs7Ozs7SUFDOUcsbURBQWlIOzs7OztJQWFqSCxzQ0FBeUM7Ozs7O0lBaUV6Qyx1Q0FBMEI7Ozs7O0lBQzFCLDhDQUFtRjs7Ozs7SUF2RGpGLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQThCOzs7OztJQUM5Qix3Q0FBb0M7Ozs7O0lBQ3BDLDBDQUF3Qzs7Ozs7SUFDeEMsMkNBQTJDOzs7OztJQUMzQyx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQSURpc3BhdGNoLCBBUElGYWN0b3J5LCBnZXRQcm9ncmVzc0FQSSwgQVBQRXJyb3IsIGdldFllYXJDb25maWdBUEksIERldmljZVNlcnZpY2UsIE5vdGlmaWNhdGlvbk9iamVjdCwgTm90aWZpY2F0aW9uTWdyLCBWYWxpZCB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSwgb2YsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc1llYXJDb25maWcgfSBmcm9tICcuL21vZGVsL1Byb2dyZXNzWWVhckNvbmZpZyc7XG5pbXBvcnQgeyBHZXRZZWFyQ29uZmlndXJhdGlvbkFQSSwgR2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJLCBHZXRQZXJzb25hbFByb2dyZXNzQVBJLCBHZXRUZWFtUHJvZ3Jlc3NNYWluQVBJIH0gZnJvbSAnLi4vYXBpJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbk9iaiB9IGZyb20gJy4vbW9kZWwvQ29uZmlndXJhdGlvbk9iaic7XG5pbXBvcnQgeyBQcm9ncmVzc09iaiB9IGZyb20gJy4vbW9kZWwvUHJvZ3Jlc3NPYmonO1xuaW1wb3J0IHsgUHJvZ3Jlc3NZZWFyT2JqIH0gZnJvbSAnLi9tb2RlbC9Qcm9ncmVzc1llYXJPYmonO1xuaW1wb3J0IHsgUGVyc29uYWxPYmogfSBmcm9tICcuL21vZGVsL1BlcnNvbmFsT2JqJztcbmltcG9ydCB7IFRlYW1PYmogfSBmcm9tICcuL21vZGVsL1RlYW1PYmonO1xuaW1wb3J0IHsgUHJvZ3Jlc3NQZXJzb25hbERhdGEgfSBmcm9tICcuL21vZGVsL1Byb2dlc3NQZXJzb25hbERhdGEnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NUZWFtRGF0YSB9IGZyb20gJy4vbW9kZWwvUHJvZ3Jlc3NUZWFtRGF0YSc7XG5pbXBvcnQgeyBQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YSB9IGZyb20gJy4vbW9kZWwvUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEnO1xuaW1wb3J0IHsgRGlyZWN0VW5pdFR5cGUgfSBmcm9tICcuL21vZGVsL0VudW0vRGlyZWN0VW5pdFR5cGUnO1xuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi9tb2RlbC9FbnVtL1RhZyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25VdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBOdW1iZXJVdGlscywgR2V0T3RoZXJQYXJhbWV0ZXJBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFJPTEUgfSBmcm9tICdAYWxsaWFuelNORC9nb2FsJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfZHJpbGxEb3duQWdlbnRJZE9iakxpc3Q6IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPiA9IG5ldyBBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4oKTtcbiAgcHJpdmF0ZSBfZHJpbGxEb3dtQWdlbnRJZFN1YmplY3Q6IFN1YmplY3Q8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmxhc3RBZ2VudElkT2JqKTtcblxuXG4gIGdldCBBZ2VudElkT2JqTGlzdExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3QubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGxhc3RBZ2VudElkT2JqKCkge1xuICAgIHJldHVybiAodGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3QubGVuZ3RoID4gMCkgPyB0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdFt0aGlzLkFnZW50SWRPYmpMaXN0TGVuZ3RoIC0gMV0gOiBudWxsO1xuICB9XG5cblxuICAvL2Rhc2hib2FyZCB0byBwcm9ncmVzcyBwYWdlXG4gIHByaXZhdGUgX2N1cnJlbnRUYWc6IFRhZyA9IFRhZy5Vbmtub3dUYWc7XG5cbiAgcHVibGljIEdldEN1cnJlbnROYXZpZ2F0aW9uVGFnKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGFnO1xuICB9XG5cbiAgcHVibGljIFNldEN1cnJlbnROYXZpZ2F0aW9uVGFnKHRhZzogVGFnKSB7XG4gICAgdGhpcy5fY3VycmVudFRhZyA9IHRhZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlzcGF0Y2g6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25NZ3I6IE5vdGlmaWNhdGlvbk1ncixcbiAgICBwcml2YXRlIG5vdGZpY2F0aW9uVXRpbHM6IE5vdGlmaWNhdGlvblV0aWxzLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIpIHsgfVxuXG5cbiAgLy8jcmVnaW9uIGFnZW50IGZ1bmN0aW9uXG5cbiAgcHVibGljIEluaXREcmlsbERvd25BZ2VudElkT2JqKCkge1xuICAgIHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0ID0gbmV3IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPigpO1xuICAgIC8vdGhpcy5fZHJpbGxEb3dtQWdlbnRJZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubGFzdEFnZW50SWRPYmopO1xuICB9XG5cbiAgcHVibGljIEFkZERyaWxsRG93bkFnZW50SWRPYmooYWdlbnRJZE9iajogUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEpIHtcbiAgICB0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdC5wdXNoKGFnZW50SWRPYmopO1xuICAgIHRoaXMuX2RyaWxsRG93bUFnZW50SWRTdWJqZWN0Lm5leHQodGhpcy5sYXN0QWdlbnRJZE9iaik7XG4gIH1cblxuICBAVmFsaWQoJ1Byb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhJylcbiAgcHVibGljIEdldERyaWxsRHdvbkFnZW50SWRPYmooKTogT2JzZXJ2YWJsZTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLl9kcmlsbERvd21BZ2VudElkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBQb3BEcmlsbERvd25BZ2VudElkT2JqKCkge1xuICAgIHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0LnBvcCgpO1xuICAgIHRoaXMuX2RyaWxsRG93bUFnZW50SWRTdWJqZWN0Lm5leHQodGhpcy5sYXN0QWdlbnRJZE9iaik7XG4gIH1cblxuICBAVmFsaWQoJ1Byb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhJylcbiAgcHVibGljIEdldERyaWxsRG93bkFnZW50SWRPYmpSb3V0ZXJOYW1lT2JqKCk6IE9ic2VydmFibGU8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PiB7XG4gICAgbGV0IG1heExlbmd0aCA9IHRoaXMuQWdlbnRJZE9iakxpc3RMZW5ndGg7XG5cbiAgICBpZiAobWF4TGVuZ3RoID49IDIpIHtcbiAgICAgIGxldCBhcnI6IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPiA9IG5ldyBBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4oKTtcbiAgICAgIGxldCBkYXRhMSA9IHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0W21heExlbmd0aCAtIDJdO1xuICAgICAgbGV0IGRhdGEyID0gdGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3RbbWF4TGVuZ3RoIC0gMV07XG4gICAgICBhcnIucHVzaChkYXRhMSk7XG4gICAgICBhcnIucHVzaChkYXRhMik7XG4gICAgICByZXR1cm4gb2YoYXJyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgYXJyOiBBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4gPSBuZXcgQXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+KCk7XG4gICAgICBsZXQgZGF0YTEgPSB0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdFttYXhMZW5ndGggLSAxXTtcbiAgICAgIGFyci5wdXNoKGRhdGExKTtcbiAgICAgIHJldHVybiBvZihhcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBhZ2VudCBmdW5jdGlvblxuXG4gIC8vI3JlZ2lvbiBSb2xlXG5cbiAgcHJpdmF0ZSBfY3VycmVudFJvbGU6Uk9MRTtcbiAgcHJpdmF0ZSBfY3VycmVudFJvbGVTdWJqZWN0OlN1YmplY3Q8Uk9MRT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2N1cnJlbnRSb2xlKTtcblxuICBwdWJsaWMgU2V0Q3VycmVudFJvbGUodmFsOlJPTEUpIHtcbiAgICB0aGlzLl9jdXJyZW50Um9sZSA9IHZhbDtcbiAgICB0aGlzLl9jdXJyZW50Um9sZVN1YmplY3QubmV4dCh0aGlzLl9jdXJyZW50Um9sZSk7XG4gIH1cblxuICBwdWJsaWMgR2V0Q3VycmVudFJvbGUoKTpPYnNlcnZhYmxlPFJPTEU+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJvbGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIEdldElzVGVhbSgpOmJvb2xlYW4ge1xuICAgIGxldCByID0gdGhpcy5fY3VycmVudFJvbGU7XG4gICAgc3dpdGNoKHIpIHtcbiAgICAgIGNhc2UgUk9MRS5BR0VOVDogXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgUk9MRS5BR0VOVExFQURFUjpcbiAgICAgIGNhc2UgUk9MRS5aT05FSEVBRDpcbiAgICAgIGNhc2UgUk9MRS5DQU86XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBHZXRJc0FnZW50KCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLl9jdXJyZW50Um9sZSA9PSBST0xFLkFHRU5UKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBHZXRJc1N1cGVydmlzb3IoKTpib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2N1cnJlbnRSb2xlID09IFJPTEUuQ0FPKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBHZXRJc01hbmFnZXQoKTpib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2N1cnJlbnRSb2xlID09IFJPTEUuWk9ORUhFQUQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIEdldElzQWdlbnRMZWFkZXIoKTpib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2N1cnJlbnRSb2xlID09IFJPTEUuQUdFTlRMRUFERVIpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIEdldElzU2hvd1N3aXRjaFRhYigpOmJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fY3VycmVudFJvbGUgPT0gUk9MRS5BR0VOVExFQURFUikgPyB0cnVlIDogZmFsc2U7IFxuICB9XG5cbiAgcHVibGljIEdldElzU2hvd1RlYW1UYWIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLl9jdXJyZW50Um9sZSA9PSBST0xFLkFHRU5UKSA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG5cbiAgLy8jcmVnaW9uIHByb2dyZXNzIG1haW4gZnVuY3Rpb25cblxuICAvL2dldCBwcm9ncmVzcyBkYXRhIGJ5IHJlc3RmdWwgcmV0dXJuIHlhbWxcbiAgcHVibGljIEdldFByb2dyZXNzRGF0YUJ5UmVzdGZ1bChhZ2VudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBnZXRQcm9ncmVzc0FQSTogZ2V0UHJvZ3Jlc3NBUEkgPSA8Z2V0UHJvZ3Jlc3NBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldFByb2dyZXNzXCIpO1xuICAgICAgZ2V0UHJvZ3Jlc3NBUEkuc2V0QWdlbnRJRChhZ2VudElEKTtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goZ2V0UHJvZ3Jlc3NBUEkpLnRvUHJvbWlzZSgpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDIwOScsICdnZXQgUHJvZ3Jlc3MgRGF0YSBCeSBSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVJlc3RmdWwgYWdlbnQgaWQ6IFwiLCBhZ2VudElEKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuICAvL2dldCBwcm9ncmVzcyBkYXRhIGJ5IFNRTGl0ZSByZXR1cm4geWFtbFxuICBAVmFsaWQoJ1Byb2dyZXNzT2JqJylcbiAgcHVibGljIEdldFByb2dyZXNzRGF0YUJ5U1FMaXRlKHllYXJzOiBBcnJheTxudW1iZXI+KTogT2JzZXJ2YWJsZTxQcm9ncmVzc09iaj4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vcHV0IGl0IHRvZ2V0aGVyIHRvIHlhbWxcbiAgICAgIGxldCBnZXRQZXJzb25hbFByb2dyZXNzQVBJOiBHZXRQZXJzb25hbFByb2dyZXNzQVBJID0gPEdldFBlcnNvbmFsUHJvZ3Jlc3NBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0UGVyc29uYWxQcm9ncmVzcycpO1xuICAgICAgbGV0IGdldFRlYW1Qcm9ncmVzc0RldGFpbEFQSTogR2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJID0gPEdldFRlYW1Qcm9ncmVzc0RldGFpbEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRUZWFtUHJvZ3Jlc3NEZXRhaWwnKTtcbiAgICAgIGxldCBnZXRUZWFtUHJvZ3Jlc3NNYWluQVBJOiBHZXRUZWFtUHJvZ3Jlc3NNYWluQVBJID0gPEdldFRlYW1Qcm9ncmVzc01haW5BUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0VGVhbVByb2dyZXNzTWFpbicpO1xuICAgICAgbGV0IGdldE90aGVyUGFyYW1ldGVyQVBJOiBHZXRPdGhlclBhcmFtZXRlckFQSSA9IDxHZXRPdGhlclBhcmFtZXRlckFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRPdGhlclBhcmFtZXRlcicpO1xuXG4gICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgW2dldFBlcnNvbmFsUHJvZ3Jlc3NBUEksIGdldFRlYW1Qcm9ncmVzc0RldGFpbEFQSSwgZ2V0VGVhbVByb2dyZXNzTWFpbkFQSSwgZ2V0T3RoZXJQYXJhbWV0ZXJBUEldXG4gICAgICAgICAgICAubWFwKGFwaSA9PiB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGFwaSkudG9Qcm9taXNlKCkpXG4gICAgICAgICkudGhlbigoW1Byb2dyZXNzUGVyc29uYWxSYXdEYXRhLCBQcm9ncmVzc1RlYW1EZXRhaWxSYXdEYXRhLCBQcm9ncmVzc1RlYW1NYWluUmF3RGF0YSwgT3RoZXJQYXJhbWV0ZXJSYXdEYXRhXSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBQcm9ncmVzc1BlcnNvbmFsUmF3RGF0YTogXCIsIFByb2dyZXNzUGVyc29uYWxSYXdEYXRhKTsvL29cbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgUHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YTogXCIsIFByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBQcm9ncmVzc1RlYW1NYWluUmF3RGF0YTpcIiwgUHJvZ3Jlc3NUZWFtTWFpblJhd0RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBPdGhlclBhcmFtZXRlclJhd0RhdGE6XCIsIE90aGVyUGFyYW1ldGVyUmF3RGF0YSk7XG5cbiAgICAgICAgICAvL25ldyB3YXlcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3NPYmpCT1NTOiBQcm9ncmVzc09iaiA9IG5ldyBQcm9ncmVzc09iaigpO1xuICAgICAgICAgIGxldCBwcm9ncmVzc1llYXJPYmpMaXN0OiBBcnJheTxQcm9ncmVzc1llYXJPYmo+ID0gbmV3IEFycmF5PFByb2dyZXNzWWVhck9iaj4oKTtcbiAgICAgICAgICBsZXQgcGVyc29uYWxPYmpMaXN0OiBBcnJheTxQZXJzb25hbE9iaj4gPSBuZXcgQXJyYXk8UGVyc29uYWxPYmo+KCk7XG4gICAgICAgICAgbGV0IHRlYW1PYmpMaXN0OiBBcnJheTxUZWFtT2JqPiA9IG5ldyBBcnJheTxUZWFtT2JqPigpO1xuXG4gICAgICAgICAgbGV0IHByb2dyZXNzUGVyc29uYWxEYXRhTGlzdDogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+PiA9IG5ldyBBcnJheTxBcnJheTxQcm9ncmVzc1BlcnNvbmFsRGF0YT4+KCk7XG4gICAgICAgICAgbGV0IHByb2dyZXNzVGVhbU1haW5EYXRhTGlzdDogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4+ID0gbmV3IEFycmF5PEFycmF5PFByb2dyZXNzVGVhbURhdGE+PigpO1xuICAgICAgICAgIGxldCBwcm9ncmVzc1RlYW1EaXJlY3REYXRhTGlzdDogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PiA9IG5ldyBBcnJheTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+KCk7XG4gICAgICAgICAgbGV0IHByb2dyZXNzVGVhbUluZGlyZWN0RGF0YUxpc3Q6IEFycmF5PEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPj4gPSBuZXcgQXJyYXk8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PigpO1xuXG4gICAgICAgICAgbGV0IHllc3RlcmRheVBvaW50c0xpc3Q6IEFycmF5PG51bWJlcj47XG5cbiAgICAgICAgICAvL2dldCB5ZXN0ZXJkYXlQb2ludCAgICAgXG4gICAgICAgICAgeWVzdGVyZGF5UG9pbnRzTGlzdCA9IHRoaXMuX0dldFllc3RlcmRheVBvaW50cyh5ZWFycywgT3RoZXJQYXJhbWV0ZXJSYXdEYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgeWVzdGVyZGF5UG9pbnRzTGlzdDogXCIsIHllc3RlcmRheVBvaW50c0xpc3QpO1xuXG4gICAgICAgICAgLy8gZ2V0IHBlcnNvbmFsIGRhdGFcbiAgICAgICAgICBwcm9ncmVzc1BlcnNvbmFsRGF0YUxpc3QgPSB0aGlzLl9HZXRQcm9ncmVzc1BlcnNvbmFsRGF0YSh5ZWFycywgUHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBwcm9ncmVzc1BlcnNvbmFsRGF0YUxpc3Q6IFwiLCBwcm9ncmVzc1BlcnNvbmFsRGF0YUxpc3QpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iajogUGVyc29uYWxPYmogPSBuZXcgUGVyc29uYWxPYmooKTtcbiAgICAgICAgICAgIG9iai5WYWx1ZXMgPSBwcm9ncmVzc1BlcnNvbmFsRGF0YUxpc3RbaV07XG4gICAgICAgICAgICBwZXJzb25hbE9iakxpc3QucHVzaChvYmopO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vZ2V0IHRlYW0gbWFpbiBkYXRhXG4gICAgICAgICAgcHJvZ3Jlc3NUZWFtTWFpbkRhdGFMaXN0ID0gdGhpcy5fR2V0UHJvZ3Jlc3NUZWFtTWFpbkRhdGEoeWVhcnMsIFByb2dyZXNzVGVhbU1haW5SYXdEYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgcHJvZ3Jlc3NUZWFtTWFpbkRhdGFMaXN0OiBcIiwgcHJvZ3Jlc3NUZWFtTWFpbkRhdGFMaXN0KTtcblxuICAgICAgICAgIC8vZGlyZWN0IGluZGlyZWN0XG4gICAgICAgICAgcHJvZ3Jlc3NUZWFtRGlyZWN0RGF0YUxpc3QgPSB0aGlzLl9HZXRQcm9ncmVzc1RlYW1EaXJlY3RJbmRpcmVjdERhdGEoeWVhcnMsIFByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEsIERpcmVjdFVuaXRUeXBlLkRpcmVjdFVuaXQpO1xuICAgICAgICAgIHByb2dyZXNzVGVhbUluZGlyZWN0RGF0YUxpc3QgPSB0aGlzLl9HZXRQcm9ncmVzc1RlYW1EaXJlY3RJbmRpcmVjdERhdGEoeWVhcnMsIFByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEsIERpcmVjdFVuaXRUeXBlLkluZGlyZWN0VW5pdCk7XG5cbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgcHJvZ3Jlc3NUZWFtRGlyZWN0RGF0YUxpc3Q6IFwiLCBwcm9ncmVzc1RlYW1EaXJlY3REYXRhTGlzdCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHByb2dyZXNzVGVhbUluZGlyZWN0RGF0YUxpc3Q6IFwiLCBwcm9ncmVzc1RlYW1JbmRpcmVjdERhdGFMaXN0KTtcblxuICAgICAgICAgIC8vZ2V0IHRlYW0gZGF0YVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvYmo6IFRlYW1PYmogPSBuZXcgVGVhbU9iaigpO1xuICAgICAgICAgICAgb2JqLlZhbHVlcyA9IChwcm9ncmVzc1RlYW1NYWluRGF0YUxpc3RbaV0pID8gcHJvZ3Jlc3NUZWFtTWFpbkRhdGFMaXN0W2ldIDogbnVsbDtcbiAgICAgICAgICAgIG9iai5EaXJlY3RVbml0ID0gKHByb2dyZXNzVGVhbURpcmVjdERhdGFMaXN0W2ldKSA/IHByb2dyZXNzVGVhbURpcmVjdERhdGFMaXN0W2ldIDogbnVsbDtcbiAgICAgICAgICAgIG9iai5JbkRpcmVjdFVuaXQgPSAocHJvZ3Jlc3NUZWFtSW5kaXJlY3REYXRhTGlzdFtpXSkgPyBwcm9ncmVzc1RlYW1JbmRpcmVjdERhdGFMaXN0W2ldIDogbnVsbDtcblxuICAgICAgICAgICAgdGVhbU9iakxpc3QucHVzaChvYmopO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy9nZXQgcHJvZ3Jlc3MgWWVhciBkYXRhXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iajogUHJvZ3Jlc3NZZWFyT2JqID0gbmV3IFByb2dyZXNzWWVhck9iaigpO1xuICAgICAgICAgICAgb2JqLkRhdGFZZWFyID0geWVhcnNbaV07XG4gICAgICAgICAgICBvYmouWWVzdGVyZGF5UG9pbnQgPSB5ZXN0ZXJkYXlQb2ludHNMaXN0W2ldO1xuICAgICAgICAgICAgb2JqLlBlcnNvbmFsID0gcGVyc29uYWxPYmpMaXN0W2ldO1xuICAgICAgICAgICAgb2JqLlRlYW0gPSB0ZWFtT2JqTGlzdFtpXTtcbiAgICAgICAgICAgIHByb2dyZXNzWWVhck9iakxpc3QucHVzaChvYmopO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy9nZXQgcHJvZ3Jlc3NCT1NTIG9iaiAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2dyZXNzT2JqQk9TUy5Qcm9ncmVzc1tpXSA9IHByb2dyZXNzWWVhck9iakxpc3RbaV07XG4gICAgICAgICAgfTtcblxuXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHBlcnNvbmFsT2JqTGlzdDogXCIsIHBlcnNvbmFsT2JqTGlzdCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHRlYW1PYmpMaXN0OiBcIiwgdGVhbU9iakxpc3QpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBwcm9ncmVzc1llYXJPYmpMaXN0OiBcIiwgcHJvZ3Jlc3NZZWFyT2JqTGlzdCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHByb2dyZXNzT2JqQk9TUzogXCIsIHByb2dyZXNzT2JqQk9TUyk7XG5cbiAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3NPYmpCT1NTO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDIxMCcsICdnZXQgUHJvZ3Jlc3MgRGF0YSBCeSBTUUxpdGUgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIk9NRyEgZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgZmFpbDogXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBvZihudWxsKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBwcm9ncmVzcyBtYWluIGZ1bmN0aW9uXG5cbiAgLy8jcmVnaW9uIHByaXZhdGUgZnVuY3Rpb25cblxuICBwcml2YXRlIF9HZXRZZXN0ZXJkYXlQb2ludHMoeWVhcnM6IEFycmF5PG51bWJlcj4sIG90aGVyUGFyYW1ldGVyUmF3RGF0YTogYW55KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgbGV0IGFuc0FycjogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX0dldFllc3RlcmRheVBvaW50cyB5ZWFyczogXCIsIHllYXJzKTtcbiAgICBjb25zb2xlLmRlYnVnKFwiX0dldFllc3RlcmRheVBvaW50cyBvdGhlclBhcmFtZXRlclJhd0RhdGE6IFwiLCBvdGhlclBhcmFtZXRlclJhd0RhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHllc3RlcmRheVBvaW50ID0gb3RoZXJQYXJhbWV0ZXJSYXdEYXRhW1wiQm9keVwiXS5maWx0ZXIoeCA9PiB4Lk1hcHBpbmdJRCA9PSBcIlllc3RlcmRheVBvaW50XCJcbiAgICAgICAgICAmJiB4LkRhdGFZZWFyID09IHllYXJzW2ldKTsvLzBcblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiX0dldFllc3RlcmRheVBvaW50cyB5ZXN0ZXJkYXlQb2ludDogXCIsIHllc3RlcmRheVBvaW50KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIl9HZXRZZXN0ZXJkYXlQb2ludHMgeWVzdGVyZGF5UG9pbnRbMF06IFwiLCB5ZXN0ZXJkYXlQb2ludFswXSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJfR2V0WWVzdGVyZGF5UG9pbnRzIHllc3RlcmRheVBvaW50WzBdc2V0OiBcIiwgeWVzdGVyZGF5UG9pbnRbMF0uU2V0VmFsdWUpO1xuICAgICAgICBhbnNBcnIucHVzaCh5ZXN0ZXJkYXlQb2ludFswXS5TZXRWYWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zQXJyO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjExJywgJ2dldCB5ZXN0ZXJkYXkgcG9pbnRzIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIHByaXZhdGUgX0dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YTogYW55LCB1bml0VHlwZTogRGlyZWN0VW5pdFR5cGUpOiBBcnJheTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+IHtcblxuICAgIGxldCBhbnNBcnI6IEFycmF5PEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPj4gPSBuZXcgQXJyYXk8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PigpO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1RlYW1EaXJlY3RJbmRpcmVjdERhdGEgeWVhcnM6IFwiLCB5ZWFycyk7XG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1RlYW1EaXJlY3RJbmRpcmVjdERhdGEgcHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YTogXCIsIHByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9ncmVzc1RlYW1EZXRhaWxSYXdEYXRhKSB7XG4gICAgICAgIGxldCBib2R5RGF0YSA9IHByb2dyZXNzVGVhbURldGFpbFJhd0RhdGFbXCJCb2R5XCJdO1xuXG4gICAgICAgIGxldCByYXdEYXRhQnlZZWFyQXJyOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHllYXJEYXRhID0gYm9keURhdGEuZmlsdGVyKHggPT4geC5EYXRhWWVhciA9PSB5ZWFyc1tpXSAmJiB4LkRpcmVjdFVuaXRUeXBlID09IHVuaXRUeXBlKTtcbiAgICAgICAgICBpZiAoeWVhckRhdGEpXG4gICAgICAgICAgICByYXdEYXRhQnlZZWFyQXJyLnB1c2goeWVhckRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1RlYW1EaXJlY3RJbmRpcmVjdERhdGEgcmF3RGF0YUJ5WWVhckFycjogXCIsIHJhd0RhdGFCeVllYXJBcnIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YUJ5WWVhckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBhcnI6IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPiA9IG5ldyBBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4oKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhd0RhdGFCeVllYXJBcnJbaV0ubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgbGV0IHRtcCA9IHJhd0RhdGFCeVllYXJBcnJbaV1bal07XG5cbiAgICAgICAgICAgIGxldCBkYXRhOiBQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YSA9IG5ldyBQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YSgpO1xuICAgICAgICAgICAgZGF0YS5BZ2VudElEID0gdG1wLkFnZW50SUQ7XG4gICAgICAgICAgICBkYXRhLkFnZW50TmFtZSA9IHRtcC5BZ2VudE5hbWU7XG4gICAgICAgICAgICBkYXRhLlRlYW1OYW1lID0gdG1wLlRlYW1OYW1lO1xuICAgICAgICAgICAgZGF0YS5Kb2JHcmFkZSA9IHRtcC5Kb2JHcmFkZTtcbiAgICAgICAgICAgIGRhdGEuRGF0YVR5cGUgPSB0bXAuRGF0YVR5cGU7XG4gICAgICAgICAgICBkYXRhLlRpbWVCYXNlID0gdG1wLlRpbWVCYXNlO1xuICAgICAgICAgICAgZGF0YS5BcHBVc2VNb2RlID0gdG1wLkFwcFVzZU1vZGU7XG4gICAgICAgICAgICBkYXRhLkFjdGl2aXRpZXMgPSB0bXAuQWN0aXZpdGllcztcbiAgICAgICAgICAgIGRhdGEuRHJpbGxkb3duID0gdG1wLkRyaWxsZG93biA9PSBcIllcIjsvL3RydWVcbiAgICAgICAgICAgIGRhdGEuQWN0dWFsID0gdG1wLkFjdHVhbDtcbiAgICAgICAgICAgIGRhdGEuR29hbCA9IHRtcC5Hb2FsO1xuICAgICAgICAgICAgZGF0YS5Gb3JlY2FzdCA9IHRtcC5Gb3JlY2FzdDtcbiAgICAgICAgICAgIGRhdGEuU2hvcnRmYWxsID0gdG1wLlNob3J0ZmFsbDtcbiAgICAgICAgICAgIGFyci5wdXNoKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbnNBcnIucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnNBcnI7XG4gICAgICB9XG4gICAgICBlbHNlIHsgdGhyb3cgXCJkYXRhIG51bGxcIjsgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjEyJywgJ2dldCBQcm9ncmVzcyBUZWFtIERpcmVjdCBJbmRpcmVjdCBEYXRhIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9HZXRQcm9ncmVzc1RlYW1NYWluRGF0YSh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcHJvZ3Jlc3NUZWFtTWFpblJhd0RhdGE6IGFueSk6IEFycmF5PEFycmF5PFByb2dyZXNzVGVhbURhdGE+PiB7XG4gICAgbGV0IGFuc0FycjogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4+ID0gbmV3IEFycmF5PEFycmF5PFByb2dyZXNzVGVhbURhdGE+PigpO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1RlYW1NYWluRGF0YSB5ZWFyczogXCIsIHllYXJzKTtcbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzVGVhbU1haW5EYXRhIHByb2dyZXNzVGVhbU1haW5SYXdEYXRhOiBcIiwgcHJvZ3Jlc3NUZWFtTWFpblJhd0RhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9ncmVzc1RlYW1NYWluUmF3RGF0YSkge1xuICAgICAgICBsZXQgYm9keURhdGEgPSBwcm9ncmVzc1RlYW1NYWluUmF3RGF0YVtcIkJvZHlcIl07XG4gICAgICAgIGxldCByYXdEYXRhQnlZZWFyQXJyOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHllYXJEYXRhID0gYm9keURhdGEuZmlsdGVyKHggPT4geC5EYXRhWWVhciA9PSB5ZWFyc1tpXSk7XG4gICAgICAgICAgaWYgKHllYXJEYXRhKVxuICAgICAgICAgICAgcmF3RGF0YUJ5WWVhckFyci5wdXNoKHllYXJEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJfZ2V0UHJvZ3Jlc3NUZWFtTWFpbkRhdGEgcmF3RGF0YUJ5WWVhckFycjogXCIsIHJhd0RhdGFCeVllYXJBcnIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YUJ5WWVhckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBhcnI6IEFycmF5PFByb2dyZXNzVGVhbURhdGE+ID0gbmV3IEFycmF5PFByb2dyZXNzVGVhbURhdGE+KCk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYXdEYXRhQnlZZWFyQXJyW2ldLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGxldCB0bXAgPSByYXdEYXRhQnlZZWFyQXJyW2ldW2pdO1xuXG4gICAgICAgICAgICBsZXQgZGF0YTogUHJvZ3Jlc3NUZWFtRGF0YSA9IG5ldyBQcm9ncmVzc1RlYW1EYXRhKCk7XG4gICAgICAgICAgICBkYXRhLkRhdGFUeXBlID0gdG1wLkRhdGFUeXBlO1xuICAgICAgICAgICAgZGF0YS5UaW1lQmFzZSA9IHRtcC5UaW1lQmFzZTtcbiAgICAgICAgICAgIGRhdGEuR29hbCA9IHRtcC5Hb2FsO1xuICAgICAgICAgICAgZGF0YS5Gb3JlY2FzdCA9IHRtcC5Gb3JlY2FzdDtcbiAgICAgICAgICAgIGRhdGEuQWN0dWFsID0gdG1wLkFjdHVhbDtcbiAgICAgICAgICAgIGRhdGEuU2hvcnRmYWxsID0gdG1wLlNob3J0ZmFsbDtcbiAgICAgICAgICAgIGFyci5wdXNoKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbnNBcnIucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnNBcnI7XG4gICAgICB9XG4gICAgICBlbHNlIHsgdGhyb3cgXCJkYXRhIG51bGxcIjsgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjEzJywgJ0dldCBQcm9ncmVzcyBUZWFtIE1haW4gRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9HZXRQcm9ncmVzc1BlcnNvbmFsRGF0YSh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGE6IGFueSk6IEFycmF5PEFycmF5PFByb2dyZXNzUGVyc29uYWxEYXRhPj4ge1xuICAgIGxldCBhbnNBcnI6IEFycmF5PEFycmF5PFByb2dyZXNzUGVyc29uYWxEYXRhPj4gPSBuZXcgQXJyYXk8QXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+PigpO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1BlcnNvbmFsRGF0YSB5ZWFyczogXCIsIHllYXJzKTtcbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzUGVyc29uYWxEYXRhIHByb2dyZXNzUGVyc29uYWxSYXdEYXRhOiBcIiwgcHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9ncmVzc1BlcnNvbmFsUmF3RGF0YSkge1xuXG4gICAgICAgIGxldCBib2R5RGF0YSA9IHByb2dyZXNzUGVyc29uYWxSYXdEYXRhW1wiQm9keVwiXTtcbiAgICAgICAgbGV0IHJhd0RhdGFCeVllYXJBcnI6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgeWVhckRhdGEgPSBib2R5RGF0YS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXJzW2ldKTtcbiAgICAgICAgICBpZiAoeWVhckRhdGEpXG4gICAgICAgICAgICByYXdEYXRhQnlZZWFyQXJyLnB1c2goeWVhckRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1BlcnNvbmFsRGF0YSByYXdEYXRhQnlZZWFyQXJyOiBcIiwgcmF3RGF0YUJ5WWVhckFycik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhQnlZZWFyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGFycjogQXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+ID0gbmV3IEFycmF5PFByb2dyZXNzUGVyc29uYWxEYXRhPigpO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmF3RGF0YUJ5WWVhckFycltpXS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICBsZXQgdG1wID0gcmF3RGF0YUJ5WWVhckFycltpXVtqXTtcbiAgICAgICAgICAgIGxldCBkYXRhOiBQcm9ncmVzc1BlcnNvbmFsRGF0YSA9IG5ldyBQcm9ncmVzc1BlcnNvbmFsRGF0YSgpO1xuICAgICAgICAgICAgZGF0YS5EYXRhVHlwZSA9IHRtcC5EYXRhVHlwZTtcbiAgICAgICAgICAgIGRhdGEuVGltZUJhc2UgPSB0bXAuVGltZUJhc2U7XG4gICAgICAgICAgICBkYXRhLkZpbmQgPSB0bXAuRmluZDtcbiAgICAgICAgICAgIGRhdGEuU2NoZWR1bGUgPSB0bXAuU2NoZWR1bGU7XG4gICAgICAgICAgICBkYXRhLk1lZXQgPSB0bXAuTWVldDtcbiAgICAgICAgICAgIGRhdGEuU3VibWl0ID0gdG1wLlN1Ym1pdDtcbiAgICAgICAgICAgIGRhdGEuSW5mb3JjZSA9IHRtcC5JbmZvcmNlO1xuICAgICAgICAgICAgZGF0YS5GWUZDID0gdG1wLkZZRkM7XG4gICAgICAgICAgICBhcnIucHVzaChkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5zQXJyLnB1c2goYXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5zQXJyO1xuICAgICAgfVxuICAgICAgZWxzZSB7IHRocm93IFwiZGF0YSBudWxsXCI7IH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDIxNCcsICdHZXQgUHJvZ3Jlc3MgUGVyc29uYWwgRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uIHByaXZhdGUgZnVuY3Rpb25cblxuICAvLyNyZWdpb24geWVhciBjb25maWcgZnVuY3Rpb25cblxuICAvL2dldCB5ZWFyIGNvbmZpZyBcbiAgQFZhbGlkKCdDb25maWd1cmF0aW9uT2JqJylcbiAgcHVibGljIEdldFllYXJDb25maWdEYXRhQnlTUUxpdGUoKTogT2JzZXJ2YWJsZTxDb25maWd1cmF0aW9uT2JqPiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBnZXRZZWFyQ29uZmlndXJhdGlvbkFQSTogR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkgPSA8R2V0WWVhckNvbmZpZ3VyYXRpb25BUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0WWVhckNvbmZpZ3VyYXRpb24nKTtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goZ2V0WWVhckNvbmZpZ3VyYXRpb25BUEkpLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFllYXJDb25maWcgcmVzcDogXCIsIHJlc3ApO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8geWFtbFxuICAgICAgICBsZXQgZGF0YUJhZHkgPSByZXNwW1wiQm9keVwiXTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFllYXJDb25maWcgZGF0YUJhZHk6IFwiLCBkYXRhQmFkeSk7XG5cbiAgICAgICAgbGV0IGNvbmZpZ09iajogQ29uZmlndXJhdGlvbk9iaiA9IG5ldyBDb25maWd1cmF0aW9uT2JqKCk7XG4gICAgICAgIGxldCBhcnI6IEFycmF5PFByb2dyZXNzWWVhckNvbmZpZz4gPSBuZXcgQXJyYXk8UHJvZ3Jlc3NZZWFyQ29uZmlnPigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUJhZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGF0YTogUHJvZ3Jlc3NZZWFyQ29uZmlnID0gbmV3IFByb2dyZXNzWWVhckNvbmZpZygpO1xuICAgICAgICAgIGxldCBkYXRhQ29uZmlnID0gZGF0YUJhZHlbaV07XG5cbiAgICAgICAgICBkYXRhLkRhdGFZZWFyID0gZGF0YUNvbmZpZy5EYXRhWWVhcjtcbiAgICAgICAgICBkYXRhLklzQ3VycmVudCA9IGRhdGFDb25maWcuSXNDdXJyZW50ID09PSBcIllcIjtcbiAgICAgICAgICBkYXRhLldvcmtpbmdNb250aCA9IGRhdGFDb25maWcuV29ya2luZ01vbnRoO1xuICAgICAgICAgIGRhdGEuUXVhcnRlclN0YXJ0TW9udGggPSBkYXRhQ29uZmlnLlF1YXJ0ZXJTdGFydE1vbnRoO1xuICAgICAgICAgIGRhdGEuUXVhcnRlckVuZE1vbnRoID0gZGF0YUNvbmZpZy5RdWFydGVyRW5kTW9udGg7XG4gICAgICAgICAgZGF0YS5Qcm9ncmVzc0RheVBvaW50c0xpbWl0ID0gZGF0YUNvbmZpZy5Qcm9ncmVzc0RheVBvaW50c0xpbWl0O1xuICAgICAgICAgIGRhdGEuUHJvZ3Jlc3NCYXJDb250cm9sTW9kZSA9IGRhdGFDb25maWcuUHJvZ3Jlc3NCYXJDb250cm9sTW9kZTtcbiAgICAgICAgICBkYXRhLk1vbnRoUXVhbnRpdHlPZlllYXIgPSBkYXRhQ29uZmlnLk1vbnRoUXVhbnRpdHlPZlllYXI7XG5cbiAgICAgICAgICBkYXRhLkZpbmRDb252ZXJ0UG9pbnRCYXNlID0gZGF0YUNvbmZpZy5GaW5kQ29udmVydFBvaW50QmFzZTtcbiAgICAgICAgICBkYXRhLlNjaGVkdWxlQ29udmVydFBvaW50QmFzZSA9IGRhdGFDb25maWcuU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgICAgIGRhdGEuTWVldENvbnZlcnRQb2ludEJhc2UgPSBkYXRhQ29uZmlnLk1lZXRDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgICAgIGRhdGEuU3VibWl0Q29udmVydFBvaW50QmFzZSA9IGRhdGFDb25maWcuU3VibWl0Q29udmVydFBvaW50QmFzZTtcbiAgICAgICAgICBkYXRhLkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlID0gZGF0YUNvbmZpZy5JbmZvcmNlQ29udmVydFBvaW50QmFzZTtcblxuICAgICAgICAgIGRhdGEuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPSBkYXRhQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoO1xuXG4gICAgICAgICAgYXJyLnB1c2goZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdPYmouQ29uZmlndXJhdGlvbnMgPSBhcnI7XG5cblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiY29uZmlnT2JqOiBcIiwgY29uZmlnT2JqKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImNvbmZpZ09iajogXCIsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ09iaikpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ290IFNRbGl0ZSB5ZWFyIGNvbmZpZyByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJnb3QgU1FsaXRlIHllYXIgY29uZmlnIHJlc3AganNvbjogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcblxuICAgICAgICByZXR1cm4gY29uZmlnT2JqO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjE1JywgJ09NRyEgZ2V0IFllYXIgQ29uZmlnIFNRTGl0ZSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cblxuICBwdWJsaWMgR2V0WWVhckNvbmZpZ0RhdGFCeVJlc3RmdWwoYWdlbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHllYXJDb25maWdBUEk6IGdldFllYXJDb25maWdBUEkgPSA8Z2V0WWVhckNvbmZpZ0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRZZWFyQ29uZmlnJyk7XG4gICAgICB5ZWFyQ29uZmlnQVBJLnNldEFnZW50SUQoYWdlbnRJRCk7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKHllYXJDb25maWdBUEkpLnRvUHJvbWlzZSgpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDIwOScsICdnZXQgUHJvZ3Jlc3MgRGF0YSBCeSBSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVJlc3RmdWwgYWdlbnQgaWQ6IFwiLCBhZ2VudElEKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cblxuICAvLyBwdWJsaWMgR2V0WWVhckNvbmZpZ0RhdGFCeVJlc3RmdWwoYWdlbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgbGV0IHllYXJDb25maWdBUEk6IGdldFllYXJDb25maWdBUEkgPSA8Z2V0WWVhckNvbmZpZ0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRZZWFyQ29uZmlnJyk7XG4gIC8vICAgICB5ZWFyQ29uZmlnQVBJLnNldEFnZW50SUQoYWdlbnRJRCk7XG4gIC8vICAgICByZXR1cm4gZnJvbSh0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKHllYXJDb25maWdBUEkpLnRvUHJvbWlzZSgpKTtcbiAgLy8gICB9XG4gIC8vICAgY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDIwOScsICdnZXQgUHJvZ3Jlc3MgRGF0YSBCeSBSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgLy8gICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVJlc3RmdWwgYWdlbnQgaWQ6IFwiLCBhZ2VudElEKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG9mKG51bGwpO1xuICAvLyB9XG5cbiAgLy8jZW5kcmVnaW9uIHllYXIgY29uZmlnIGZ1bmN0aW9uXG5cbiAgLy8jcmVnaW9uIGZ1bnRpb24gY2FsY3VsYXRlXG5cbiAgcHVibGljIFNob3dEZXNoKG51bTogbnVtYmVyLCBzaWduOnN0cmluZyA9IFwiLS1cIik6IHN0cmluZyB7XG4gICAgaWYoIU51bWJlclV0aWxzLmlzTnVtYmVyKG51bSkpIHtcbiAgICAgIHJldHVybiBzaWduO1xuICAgIH1cbiAgICByZXR1cm4gKG51bSA8PSAtMSkgPyBzaWduIDogbnVtLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgR2V0UG9pbnRzKG51bTogbnVtYmVyLCBtdXRpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBhbnMgPSAobnVtICogbXV0aSk7XG4gICAgcmV0dXJuIChhbnMgPD0gLTEpID8gXCItLVwiIDogYW5zLnRvU3RyaW5nKCk7XG4gIH1cblxuXG4gIC8vaWYgdGltZWJhc2UgPT0gZGF5ID09PiBQcm9ncmVzc1BlcnNvbmFsRGF0YS5maW5kIG9uZSBkYXkgXG4gIC8vaWYgdGltZWJhc2UgPT0gd2VlayA9PT4gUHJvZ3Jlc3NQZXJzb25hbERhdGEuZmluZCB3ZWVrKHdlZWsgc3VtKXRoYXQgbWVhbmluIGlmIHdlYiB3ZWVrc3VtIGhhdmUgMyBkYXkgZGF0YVxuICBwdWJsaWMgR2V0VG90YWxQb2ludHMoZGF0YTogUHJvZ3Jlc3NQZXJzb25hbERhdGEpOiBudW1iZXIge1xuXG4gICAgLy9jaGVjayBkYXRhID09IC0xP1xuICAgIGxldCBjaGVja0RhdGE6IFByb2dyZXNzUGVyc29uYWxEYXRhID0gbmV3IFByb2dyZXNzUGVyc29uYWxEYXRhKCk7XG4gICAgY2hlY2tEYXRhLkZpbmQgPSAoZGF0YS5GaW5kID09IC0xKSA/IDAgOiBkYXRhLkZpbmQ7XG4gICAgY2hlY2tEYXRhLlNjaGVkdWxlID0gKGRhdGEuU2NoZWR1bGUgPT0gLTEpID8gMCA6IGRhdGEuU2NoZWR1bGU7XG4gICAgY2hlY2tEYXRhLk1lZXQgPSAoZGF0YS5NZWV0ID09IC0xKSA/IDAgOiBkYXRhLk1lZXQ7XG4gICAgY2hlY2tEYXRhLlN1Ym1pdCA9IChkYXRhLlN1Ym1pdCA9PSAtMSkgPyAwIDogZGF0YS5TdWJtaXQ7XG4gICAgY2hlY2tEYXRhLkluZm9yY2UgPSAoZGF0YS5JbmZvcmNlID09IC0xKSA/IDAgOiBkYXRhLkluZm9yY2U7XG5cbiAgICBsZXQgc3VtID0gKGNoZWNrRGF0YS5GaW5kICogZGF0YS5GaW5kQ29udmVydFBvaW50QmFzZSkgK1xuICAgICAgKGNoZWNrRGF0YS5TY2hlZHVsZSAqIGRhdGEuU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLk1lZXQgKiBkYXRhLk1lZXRDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLlN1Ym1pdCAqIGRhdGEuU3VibWl0Q29udmVydFBvaW50QmFzZSkgK1xuICAgICAgKGNoZWNrRGF0YS5JbmZvcmNlICogZGF0YS5JbmZvcmNlQ29udmVydFBvaW50QmFzZSk7XG5cbiAgICByZXR1cm4gc3VtO1xuICB9XG5cblxuICBwdWJsaWMgR2V0UGVyY2VudGFnZUNpcmNsZVZhbHVlKGRhdGE6IFByb2dyZXNzUGVyc29uYWxEYXRhLCBsaW1pdDogbnVtYmVyLCBpc1dlZWs6IGJvb2xlYW4pOiBzdHJpbmcge1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQZXJjZW50YWdlQ2lyY2xlVmFsdWU6IFwiLCBkYXRhKTtcblxuICAgIC8vY2hlY2sgZGF0YSA9PSAtMT9cbiAgICBsZXQgY2hlY2tEYXRhOiBQcm9ncmVzc1BlcnNvbmFsRGF0YSA9IG5ldyBQcm9ncmVzc1BlcnNvbmFsRGF0YSgpO1xuICAgIGNoZWNrRGF0YS5EYXRhVHlwZSA9IGRhdGEuRGF0YVR5cGU7XG4gICAgY2hlY2tEYXRhLlRpbWVCYXNlID0gZGF0YS5UaW1lQmFzZTtcbiAgICBjaGVja0RhdGEuRmluZCA9IChkYXRhLkZpbmQgPT0gLTEpID8gMCA6IGRhdGEuRmluZDtcbiAgICBjaGVja0RhdGEuU2NoZWR1bGUgPSAoZGF0YS5TY2hlZHVsZSA9PSAtMSkgPyAwIDogZGF0YS5TY2hlZHVsZTtcbiAgICBjaGVja0RhdGEuTWVldCA9IChkYXRhLk1lZXQgPT0gLTEpID8gMCA6IGRhdGEuTWVldDtcbiAgICBjaGVja0RhdGEuU3VibWl0ID0gKGRhdGEuU3VibWl0ID09IC0xKSA/IDAgOiBkYXRhLlN1Ym1pdDtcbiAgICBjaGVja0RhdGEuSW5mb3JjZSA9IChkYXRhLkluZm9yY2UgPT0gLTEpID8gMCA6IGRhdGEuSW5mb3JjZTtcblxuICAgIGxldCBzdW0gPSAoY2hlY2tEYXRhLkZpbmQgKiBkYXRhLkZpbmRDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLlNjaGVkdWxlICogZGF0YS5TY2hlZHVsZUNvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuTWVldCAqIGRhdGEuTWVldENvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuU3VibWl0ICogZGF0YS5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLkluZm9yY2UgKiBkYXRhLkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlKTtcblxuICAgIGxldCBtYXggPSAoaXNXZWVrID09IHRydWUpID8gbGltaXQgKiA3IDogbGltaXQ7XG4gICAgbGV0IGFucyA9IChzdW0gLyBtYXgpO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQZXJjZW50YWdlQ2lyY2xlVmFsdWUgYW5zIG1heCBzdW06IFwiLCBhbnMsIG1heCwgc3VtKTtcblxuICAgIGlmIChhbnMgPT0gMCB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIoYW5zKSkgcmV0dXJuIFwiMFwiO1xuICAgIHJldHVybiAoYW5zID49IDEpID8gXCIxXCIgOiBhbnMudG9GaXhlZCgyKTtcbiAgfVxuXG4gIHB1YmxpYyBHZXRQZXJjZW50YWdlKG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgIGlmKG51bWVyYXRvciA8PSAwIHx8IGRlbm9taW5hdG9yIDw9IDApIHJldHVybiAwO1xuXG4gICAgbGV0IGFucyA9IE1hdGgucm91bmQoKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKSAqIDEwMCk7XG4gICAgcmV0dXJuIChhbnMpID8gYW5zIDogMDtcbiAgfVxuXG4gIHB1YmxpYyBHZXRQZXJjZW50YWdlTGVuZ3RoKG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyLCBtYXhMZW5ndGg6IG51bWJlciwgbWF4QmFzZTogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgIGlmKG51bWVyYXRvciA8PSAwIHx8IGRlbm9taW5hdG9yIDw9IDApIHJldHVybiAwO1xuXG4gICAgbGV0IGFucyA9IE1hdGgucm91bmQoKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKSAqIDEwMCkgLyBtYXhCYXNlO1xuXG4gICAgcmV0dXJuIChhbnMgPj0gbWF4TGVuZ3RoKSA/IG1heExlbmd0aCA6IGFucyA7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxufVxuIl19