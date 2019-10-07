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
export class ProgressService {
    /**
     * @param {?} dispatch
     * @param {?} APIFactory
     * @param {?} deviceService
     * @param {?} notificationMgr
     * @param {?} notficationUtils
     * @param {?} errorHandler
     */
    constructor(dispatch, APIFactory, deviceService, notificationMgr, notficationUtils, errorHandler) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9wcm9ncmVzcy1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBa0IsUUFBUSxFQUFvQixhQUFhLEVBQXNCLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsSyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQVcsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxpQkFBaUIsRUFB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Q0FBQzs7WUFFNUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTztRQUUvRCxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUMvQyxDQUFDOzs7WUFsbUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBdkJRLFdBQVc7WUFBRSxVQUFVO1lBQThDLGFBQWE7WUFBc0IsZUFBZTtZQWdCdkgsaUJBQWlCO1lBakJMLFlBQVk7OztBQTBFL0I7SUFEQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7Ozs0Q0FDSCxVQUFVOzZEQUUxQztBQVFEO0lBREMsS0FBSyxDQUFDLDRCQUE0QixDQUFDOzs7NENBQ1UsVUFBVTswRUFpQnZEO0FBNkVEO0lBREMsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7NkNBQ2lCLEtBQUs7NENBQVcsVUFBVTs4REFvRy9EO0FBMkxEO0lBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzs7NENBQ1UsVUFBVTtnRUFzRDdDOzs7Ozs7SUEzZUQsbURBQThHOzs7OztJQUM5RyxtREFBaUg7Ozs7O0lBYWpILHNDQUF5Qzs7Ozs7SUFpRXpDLHVDQUEwQjs7Ozs7SUFDMUIsOENBQW1GOzs7OztJQXZEakYsbUNBQTZCOzs7OztJQUM3QixxQ0FBOEI7Ozs7O0lBQzlCLHdDQUFvQzs7Ozs7SUFDcEMsMENBQXdDOzs7OztJQUN4QywyQ0FBMkM7Ozs7O0lBQzNDLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2gsIEFQSUZhY3RvcnksIGdldFByb2dyZXNzQVBJLCBBUFBFcnJvciwgZ2V0WWVhckNvbmZpZ0FQSSwgRGV2aWNlU2VydmljZSwgTm90aWZpY2F0aW9uT2JqZWN0LCBOb3RpZmljYXRpb25NZ3IsIFZhbGlkIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCBvZiwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFByb2dyZXNzWWVhckNvbmZpZyB9IGZyb20gJy4vbW9kZWwvUHJvZ3Jlc3NZZWFyQ29uZmlnJztcbmltcG9ydCB7IEdldFllYXJDb25maWd1cmF0aW9uQVBJLCBHZXRUZWFtUHJvZ3Jlc3NEZXRhaWxBUEksIEdldFBlcnNvbmFsUHJvZ3Jlc3NBUEksIEdldFRlYW1Qcm9ncmVzc01haW5BUEkgfSBmcm9tICcuLi9hcGknO1xuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uT2JqIH0gZnJvbSAnLi9tb2RlbC9Db25maWd1cmF0aW9uT2JqJztcbmltcG9ydCB7IFByb2dyZXNzT2JqIH0gZnJvbSAnLi9tb2RlbC9Qcm9ncmVzc09iaic7XG5pbXBvcnQgeyBQcm9ncmVzc1llYXJPYmogfSBmcm9tICcuL21vZGVsL1Byb2dyZXNzWWVhck9iaic7XG5pbXBvcnQgeyBQZXJzb25hbE9iaiB9IGZyb20gJy4vbW9kZWwvUGVyc29uYWxPYmonO1xuaW1wb3J0IHsgVGVhbU9iaiB9IGZyb20gJy4vbW9kZWwvVGVhbU9iaic7XG5pbXBvcnQgeyBQcm9ncmVzc1BlcnNvbmFsRGF0YSB9IGZyb20gJy4vbW9kZWwvUHJvZ2Vzc1BlcnNvbmFsRGF0YSc7XG5pbXBvcnQgeyBQcm9ncmVzc1RlYW1EYXRhIH0gZnJvbSAnLi9tb2RlbC9Qcm9ncmVzc1RlYW1EYXRhJztcbmltcG9ydCB7IFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhIH0gZnJvbSAnLi9tb2RlbC9Qcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YSc7XG5pbXBvcnQgeyBEaXJlY3RVbml0VHlwZSB9IGZyb20gJy4vbW9kZWwvRW51bS9EaXJlY3RVbml0VHlwZSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuL21vZGVsL0VudW0vVGFnJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblV0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IE51bWJlclV0aWxzLCBHZXRPdGhlclBhcmFtZXRlckFQSSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgUk9MRSB9IGZyb20gJ0BhbGxpYW56U05EL2dvYWwnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9kcmlsbERvd25BZ2VudElkT2JqTGlzdDogQXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+ID0gbmV3IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPigpO1xuICBwcml2YXRlIF9kcmlsbERvd21BZ2VudElkU3ViamVjdDogU3ViamVjdDxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubGFzdEFnZW50SWRPYmopO1xuXG5cbiAgZ2V0IEFnZW50SWRPYmpMaXN0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdC5sZW5ndGg7XG4gIH1cblxuICBnZXQgbGFzdEFnZW50SWRPYmooKSB7XG4gICAgcmV0dXJuICh0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdC5sZW5ndGggPiAwKSA/IHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0W3RoaXMuQWdlbnRJZE9iakxpc3RMZW5ndGggLSAxXSA6IG51bGw7XG4gIH1cblxuXG4gIC8vZGFzaGJvYXJkIHRvIHByb2dyZXNzIHBhZ2VcbiAgcHJpdmF0ZSBfY3VycmVudFRhZzogVGFnID0gVGFnLlVua25vd1RhZztcblxuICBwdWJsaWMgR2V0Q3VycmVudE5hdmlnYXRpb25UYWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYWc7XG4gIH1cblxuICBwdWJsaWMgU2V0Q3VycmVudE5hdmlnYXRpb25UYWcodGFnOiBUYWcpIHtcbiAgICB0aGlzLl9jdXJyZW50VGFnID0gdGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNwYXRjaDogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgIHByaXZhdGUgbm90ZmljYXRpb25VdGlsczogTm90aWZpY2F0aW9uVXRpbHMsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcikgeyB9XG5cblxuICAvLyNyZWdpb24gYWdlbnQgZnVuY3Rpb25cblxuICBwdWJsaWMgSW5pdERyaWxsRG93bkFnZW50SWRPYmooKSB7XG4gICAgdGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3QgPSBuZXcgQXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+KCk7XG4gICAgLy90aGlzLl9kcmlsbERvd21BZ2VudElkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5sYXN0QWdlbnRJZE9iaik7XG4gIH1cblxuICBwdWJsaWMgQWRkRHJpbGxEb3duQWdlbnRJZE9iaihhZ2VudElkT2JqOiBQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YSkge1xuICAgIHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0LnB1c2goYWdlbnRJZE9iaik7XG4gICAgdGhpcy5fZHJpbGxEb3dtQWdlbnRJZFN1YmplY3QubmV4dCh0aGlzLmxhc3RBZ2VudElkT2JqKTtcbiAgfVxuXG4gIEBWYWxpZCgnUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEnKVxuICBwdWJsaWMgR2V0RHJpbGxEd29uQWdlbnRJZE9iaigpOiBPYnNlcnZhYmxlPFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RyaWxsRG93bUFnZW50SWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIFBvcERyaWxsRG93bkFnZW50SWRPYmooKSB7XG4gICAgdGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3QucG9wKCk7XG4gICAgdGhpcy5fZHJpbGxEb3dtQWdlbnRJZFN1YmplY3QubmV4dCh0aGlzLmxhc3RBZ2VudElkT2JqKTtcbiAgfVxuXG4gIEBWYWxpZCgnUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEnKVxuICBwdWJsaWMgR2V0RHJpbGxEb3duQWdlbnRJZE9ialJvdXRlck5hbWVPYmooKTogT2JzZXJ2YWJsZTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+IHtcbiAgICBsZXQgbWF4TGVuZ3RoID0gdGhpcy5BZ2VudElkT2JqTGlzdExlbmd0aDtcblxuICAgIGlmIChtYXhMZW5ndGggPj0gMikge1xuICAgICAgbGV0IGFycjogQXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+ID0gbmV3IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPigpO1xuICAgICAgbGV0IGRhdGExID0gdGhpcy5fZHJpbGxEb3duQWdlbnRJZE9iakxpc3RbbWF4TGVuZ3RoIC0gMl07XG4gICAgICBsZXQgZGF0YTIgPSB0aGlzLl9kcmlsbERvd25BZ2VudElkT2JqTGlzdFttYXhMZW5ndGggLSAxXTtcbiAgICAgIGFyci5wdXNoKGRhdGExKTtcbiAgICAgIGFyci5wdXNoKGRhdGEyKTtcbiAgICAgIHJldHVybiBvZihhcnIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBhcnI6IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPiA9IG5ldyBBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4oKTtcbiAgICAgIGxldCBkYXRhMSA9IHRoaXMuX2RyaWxsRG93bkFnZW50SWRPYmpMaXN0W21heExlbmd0aCAtIDFdO1xuICAgICAgYXJyLnB1c2goZGF0YTEpO1xuICAgICAgcmV0dXJuIG9mKGFycik7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uIGFnZW50IGZ1bmN0aW9uXG5cbiAgLy8jcmVnaW9uIFJvbGVcblxuICBwcml2YXRlIF9jdXJyZW50Um9sZTpST0xFO1xuICBwcml2YXRlIF9jdXJyZW50Um9sZVN1YmplY3Q6U3ViamVjdDxST0xFPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VycmVudFJvbGUpO1xuXG4gIHB1YmxpYyBTZXRDdXJyZW50Um9sZSh2YWw6Uk9MRSkge1xuICAgIHRoaXMuX2N1cnJlbnRSb2xlID0gdmFsO1xuICAgIHRoaXMuX2N1cnJlbnRSb2xlU3ViamVjdC5uZXh0KHRoaXMuX2N1cnJlbnRSb2xlKTtcbiAgfVxuXG4gIHB1YmxpYyBHZXRDdXJyZW50Um9sZSgpOk9ic2VydmFibGU8Uk9MRT4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Um9sZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgR2V0SXNUZWFtKCk6Ym9vbGVhbiB7XG4gICAgbGV0IHIgPSB0aGlzLl9jdXJyZW50Um9sZTtcbiAgICBzd2l0Y2gocikge1xuICAgICAgY2FzZSBST0xFLkFHRU5UOiBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSBST0xFLkFHRU5UTEVBREVSOlxuICAgICAgY2FzZSBST0xFLlpPTkVIRUFEOlxuICAgICAgY2FzZSBST0xFLkNBTzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIEdldElzQWdlbnQoKTpib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2N1cnJlbnRSb2xlID09IFJPTEUuQUdFTlQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIEdldElzU3VwZXJ2aXNvcigpOmJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fY3VycmVudFJvbGUgPT0gUk9MRS5DQU8pID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIEdldElzTWFuYWdldCgpOmJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fY3VycmVudFJvbGUgPT0gUk9MRS5aT05FSEVBRCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgR2V0SXNBZ2VudExlYWRlcigpOmJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fY3VycmVudFJvbGUgPT0gUk9MRS5BR0VOVExFQURFUikgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgR2V0SXNTaG93U3dpdGNoVGFiKCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLl9jdXJyZW50Um9sZSA9PSBST0xFLkFHRU5UTEVBREVSKSA/IHRydWUgOiBmYWxzZTsgXG4gIH1cblxuICBwdWJsaWMgR2V0SXNTaG93VGVhbVRhYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2N1cnJlbnRSb2xlID09IFJPTEUuQUdFTlQpID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cblxuICAvLyNyZWdpb24gcHJvZ3Jlc3MgbWFpbiBmdW5jdGlvblxuXG4gIC8vZ2V0IHByb2dyZXNzIGRhdGEgYnkgcmVzdGZ1bCByZXR1cm4geWFtbFxuICBwdWJsaWMgR2V0UHJvZ3Jlc3NEYXRhQnlSZXN0ZnVsKGFnZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGdldFByb2dyZXNzQVBJOiBnZXRQcm9ncmVzc0FQSSA9IDxnZXRQcm9ncmVzc0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0UHJvZ3Jlc3NcIik7XG4gICAgICBnZXRQcm9ncmVzc0FQSS5zZXRBZ2VudElEKGFnZW50SUQpO1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5kaXNwYXRjaC5kaXNwYXRjaChnZXRQcm9ncmVzc0FQSSkudG9Qcm9taXNlKCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjA5JywgJ2dldCBQcm9ncmVzcyBEYXRhIEJ5IFJlc3RmdWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5UmVzdGZ1bCBhZ2VudCBpZDogXCIsIGFnZW50SUQpO1xuICAgIH1cblxuICAgIHJldHVybiBvZihudWxsKTtcbiAgfVxuXG4gIC8vZ2V0IHByb2dyZXNzIGRhdGEgYnkgU1FMaXRlIHJldHVybiB5YW1sXG4gIEBWYWxpZCgnUHJvZ3Jlc3NPYmonKVxuICBwdWJsaWMgR2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUoeWVhcnM6IEFycmF5PG51bWJlcj4pOiBPYnNlcnZhYmxlPFByb2dyZXNzT2JqPiB7XG5cbiAgICB0cnkge1xuICAgICAgLy9wdXQgaXQgdG9nZXRoZXIgdG8geWFtbFxuICAgICAgbGV0IGdldFBlcnNvbmFsUHJvZ3Jlc3NBUEk6IEdldFBlcnNvbmFsUHJvZ3Jlc3NBUEkgPSA8R2V0UGVyc29uYWxQcm9ncmVzc0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRQZXJzb25hbFByb2dyZXNzJyk7XG4gICAgICBsZXQgZ2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJOiBHZXRUZWFtUHJvZ3Jlc3NEZXRhaWxBUEkgPSA8R2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldFRlYW1Qcm9ncmVzc0RldGFpbCcpO1xuICAgICAgbGV0IGdldFRlYW1Qcm9ncmVzc01haW5BUEk6IEdldFRlYW1Qcm9ncmVzc01haW5BUEkgPSA8R2V0VGVhbVByb2dyZXNzTWFpbkFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRUZWFtUHJvZ3Jlc3NNYWluJyk7XG4gICAgICBsZXQgZ2V0T3RoZXJQYXJhbWV0ZXJBUEk6IEdldE90aGVyUGFyYW1ldGVyQVBJID0gPEdldE90aGVyUGFyYW1ldGVyQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldE90aGVyUGFyYW1ldGVyJyk7XG5cbiAgICAgIHJldHVybiBmcm9tKFxuICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICBbZ2V0UGVyc29uYWxQcm9ncmVzc0FQSSwgZ2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJLCBnZXRUZWFtUHJvZ3Jlc3NNYWluQVBJLCBnZXRPdGhlclBhcmFtZXRlckFQSV1cbiAgICAgICAgICAgIC5tYXAoYXBpID0+IHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goYXBpKS50b1Byb21pc2UoKSlcbiAgICAgICAgKS50aGVuKChbUHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGEsIFByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEsIFByb2dyZXNzVGVhbU1haW5SYXdEYXRhLCBPdGhlclBhcmFtZXRlclJhd0RhdGFdKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIFByb2dyZXNzUGVyc29uYWxSYXdEYXRhOiBcIiwgUHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGEpOy8vb1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBQcm9ncmVzc1RlYW1EZXRhaWxSYXdEYXRhOiBcIiwgUHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YSk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIFByb2dyZXNzVGVhbU1haW5SYXdEYXRhOlwiLCBQcm9ncmVzc1RlYW1NYWluUmF3RGF0YSk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIE90aGVyUGFyYW1ldGVyUmF3RGF0YTpcIiwgT3RoZXJQYXJhbWV0ZXJSYXdEYXRhKTtcblxuICAgICAgICAgIC8vbmV3IHdheVxuICAgICAgICAgIGxldCBwcm9ncmVzc09iakJPU1M6IFByb2dyZXNzT2JqID0gbmV3IFByb2dyZXNzT2JqKCk7XG4gICAgICAgICAgbGV0IHByb2dyZXNzWWVhck9iakxpc3Q6IEFycmF5PFByb2dyZXNzWWVhck9iaj4gPSBuZXcgQXJyYXk8UHJvZ3Jlc3NZZWFyT2JqPigpO1xuICAgICAgICAgIGxldCBwZXJzb25hbE9iakxpc3Q6IEFycmF5PFBlcnNvbmFsT2JqPiA9IG5ldyBBcnJheTxQZXJzb25hbE9iaj4oKTtcbiAgICAgICAgICBsZXQgdGVhbU9iakxpc3Q6IEFycmF5PFRlYW1PYmo+ID0gbmV3IEFycmF5PFRlYW1PYmo+KCk7XG5cbiAgICAgICAgICBsZXQgcHJvZ3Jlc3NQZXJzb25hbERhdGFMaXN0OiBBcnJheTxBcnJheTxQcm9ncmVzc1BlcnNvbmFsRGF0YT4+ID0gbmV3IEFycmF5PEFycmF5PFByb2dyZXNzUGVyc29uYWxEYXRhPj4oKTtcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3NUZWFtTWFpbkRhdGFMaXN0OiBBcnJheTxBcnJheTxQcm9ncmVzc1RlYW1EYXRhPj4gPSBuZXcgQXJyYXk8QXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4+KCk7XG4gICAgICAgICAgbGV0IHByb2dyZXNzVGVhbURpcmVjdERhdGFMaXN0OiBBcnJheTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+ID0gbmV3IEFycmF5PEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPj4oKTtcbiAgICAgICAgICBsZXQgcHJvZ3Jlc3NUZWFtSW5kaXJlY3REYXRhTGlzdDogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PiA9IG5ldyBBcnJheTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+KCk7XG5cbiAgICAgICAgICBsZXQgeWVzdGVyZGF5UG9pbnRzTGlzdDogQXJyYXk8bnVtYmVyPjtcblxuICAgICAgICAgIC8vZ2V0IHllc3RlcmRheVBvaW50ICAgICBcbiAgICAgICAgICB5ZXN0ZXJkYXlQb2ludHNMaXN0ID0gdGhpcy5fR2V0WWVzdGVyZGF5UG9pbnRzKHllYXJzLCBPdGhlclBhcmFtZXRlclJhd0RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSB5ZXN0ZXJkYXlQb2ludHNMaXN0OiBcIiwgeWVzdGVyZGF5UG9pbnRzTGlzdCk7XG5cbiAgICAgICAgICAvLyBnZXQgcGVyc29uYWwgZGF0YVxuICAgICAgICAgIHByb2dyZXNzUGVyc29uYWxEYXRhTGlzdCA9IHRoaXMuX0dldFByb2dyZXNzUGVyc29uYWxEYXRhKHllYXJzLCBQcm9ncmVzc1BlcnNvbmFsUmF3RGF0YSk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHByb2dyZXNzUGVyc29uYWxEYXRhTGlzdDogXCIsIHByb2dyZXNzUGVyc29uYWxEYXRhTGlzdCk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqOiBQZXJzb25hbE9iaiA9IG5ldyBQZXJzb25hbE9iaigpO1xuICAgICAgICAgICAgb2JqLlZhbHVlcyA9IHByb2dyZXNzUGVyc29uYWxEYXRhTGlzdFtpXTtcbiAgICAgICAgICAgIHBlcnNvbmFsT2JqTGlzdC5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9nZXQgdGVhbSBtYWluIGRhdGFcbiAgICAgICAgICBwcm9ncmVzc1RlYW1NYWluRGF0YUxpc3QgPSB0aGlzLl9HZXRQcm9ncmVzc1RlYW1NYWluRGF0YSh5ZWFycywgUHJvZ3Jlc3NUZWFtTWFpblJhd0RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBwcm9ncmVzc1RlYW1NYWluRGF0YUxpc3Q6IFwiLCBwcm9ncmVzc1RlYW1NYWluRGF0YUxpc3QpO1xuXG4gICAgICAgICAgLy9kaXJlY3QgaW5kaXJlY3RcbiAgICAgICAgICBwcm9ncmVzc1RlYW1EaXJlY3REYXRhTGlzdCA9IHRoaXMuX0dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSh5ZWFycywgUHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YSwgRGlyZWN0VW5pdFR5cGUuRGlyZWN0VW5pdCk7XG4gICAgICAgICAgcHJvZ3Jlc3NUZWFtSW5kaXJlY3REYXRhTGlzdCA9IHRoaXMuX0dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSh5ZWFycywgUHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YSwgRGlyZWN0VW5pdFR5cGUuSW5kaXJlY3RVbml0KTtcblxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBwcm9ncmVzc1RlYW1EaXJlY3REYXRhTGlzdDogXCIsIHByb2dyZXNzVGVhbURpcmVjdERhdGFMaXN0KTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgcHJvZ3Jlc3NUZWFtSW5kaXJlY3REYXRhTGlzdDogXCIsIHByb2dyZXNzVGVhbUluZGlyZWN0RGF0YUxpc3QpO1xuXG4gICAgICAgICAgLy9nZXQgdGVhbSBkYXRhXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iajogVGVhbU9iaiA9IG5ldyBUZWFtT2JqKCk7XG4gICAgICAgICAgICBvYmouVmFsdWVzID0gKHByb2dyZXNzVGVhbU1haW5EYXRhTGlzdFtpXSkgPyBwcm9ncmVzc1RlYW1NYWluRGF0YUxpc3RbaV0gOiBudWxsO1xuICAgICAgICAgICAgb2JqLkRpcmVjdFVuaXQgPSAocHJvZ3Jlc3NUZWFtRGlyZWN0RGF0YUxpc3RbaV0pID8gcHJvZ3Jlc3NUZWFtRGlyZWN0RGF0YUxpc3RbaV0gOiBudWxsO1xuICAgICAgICAgICAgb2JqLkluRGlyZWN0VW5pdCA9IChwcm9ncmVzc1RlYW1JbmRpcmVjdERhdGFMaXN0W2ldKSA/IHByb2dyZXNzVGVhbUluZGlyZWN0RGF0YUxpc3RbaV0gOiBudWxsO1xuXG4gICAgICAgICAgICB0ZWFtT2JqTGlzdC5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvL2dldCBwcm9ncmVzcyBZZWFyIGRhdGFcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqOiBQcm9ncmVzc1llYXJPYmogPSBuZXcgUHJvZ3Jlc3NZZWFyT2JqKCk7XG4gICAgICAgICAgICBvYmouRGF0YVllYXIgPSB5ZWFyc1tpXTtcbiAgICAgICAgICAgIG9iai5ZZXN0ZXJkYXlQb2ludCA9IHllc3RlcmRheVBvaW50c0xpc3RbaV07XG4gICAgICAgICAgICBvYmouUGVyc29uYWwgPSBwZXJzb25hbE9iakxpc3RbaV07XG4gICAgICAgICAgICBvYmouVGVhbSA9IHRlYW1PYmpMaXN0W2ldO1xuICAgICAgICAgICAgcHJvZ3Jlc3NZZWFyT2JqTGlzdC5wdXNoKG9iaik7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvL2dldCBwcm9ncmVzc0JPU1Mgb2JqICAgICAgXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvZ3Jlc3NPYmpCT1NTLlByb2dyZXNzW2ldID0gcHJvZ3Jlc3NZZWFyT2JqTGlzdFtpXTtcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgcGVyc29uYWxPYmpMaXN0OiBcIiwgcGVyc29uYWxPYmpMaXN0KTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgdGVhbU9iakxpc3Q6IFwiLCB0ZWFtT2JqTGlzdCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5U1FMaXRlIHByb2dyZXNzWWVhck9iakxpc3Q6IFwiLCBwcm9ncmVzc1llYXJPYmpMaXN0KTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0UHJvZ3Jlc3NEYXRhQnlTUUxpdGUgcHJvZ3Jlc3NPYmpCT1NTOiBcIiwgcHJvZ3Jlc3NPYmpCT1NTKTtcblxuICAgICAgICAgIHJldHVybiBwcm9ncmVzc09iakJPU1M7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjEwJywgJ2dldCBQcm9ncmVzcyBEYXRhIEJ5IFNRTGl0ZSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiT01HISBnZXRQcm9ncmVzc0RhdGFCeVNRTGl0ZSBmYWlsOiBcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uIHByb2dyZXNzIG1haW4gZnVuY3Rpb25cblxuICAvLyNyZWdpb24gcHJpdmF0ZSBmdW5jdGlvblxuXG4gIHByaXZhdGUgX0dldFllc3RlcmRheVBvaW50cyh5ZWFyczogQXJyYXk8bnVtYmVyPiwgb3RoZXJQYXJhbWV0ZXJSYXdEYXRhOiBhbnkpOiBBcnJheTxudW1iZXI+IHtcbiAgICBsZXQgYW5zQXJyOiBBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuICAgIGNvbnNvbGUuZGVidWcoXCJfR2V0WWVzdGVyZGF5UG9pbnRzIHllYXJzOiBcIiwgeWVhcnMpO1xuICAgIGNvbnNvbGUuZGVidWcoXCJfR2V0WWVzdGVyZGF5UG9pbnRzIG90aGVyUGFyYW1ldGVyUmF3RGF0YTogXCIsIG90aGVyUGFyYW1ldGVyUmF3RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeWVzdGVyZGF5UG9pbnQgPSBvdGhlclBhcmFtZXRlclJhd0RhdGFbXCJCb2R5XCJdLmZpbHRlcih4ID0+IHguTWFwcGluZ0lEID09IFwiWWVzdGVyZGF5UG9pbnRcIlxuICAgICAgICAgICYmIHguRGF0YVllYXIgPT0geWVhcnNbaV0pOy8vMFxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJfR2V0WWVzdGVyZGF5UG9pbnRzIHllc3RlcmRheVBvaW50OiBcIiwgeWVzdGVyZGF5UG9pbnQpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiX0dldFllc3RlcmRheVBvaW50cyB5ZXN0ZXJkYXlQb2ludFswXTogXCIsIHllc3RlcmRheVBvaW50WzBdKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIl9HZXRZZXN0ZXJkYXlQb2ludHMgeWVzdGVyZGF5UG9pbnRbMF1zZXQ6IFwiLCB5ZXN0ZXJkYXlQb2ludFswXS5TZXRWYWx1ZSk7XG4gICAgICAgIGFuc0Fyci5wdXNoKHllc3RlcmRheVBvaW50WzBdLlNldFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbnNBcnI7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAyMTEnLCAnZ2V0IHllc3RlcmRheSBwb2ludHMgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfR2V0UHJvZ3Jlc3NUZWFtRGlyZWN0SW5kaXJlY3REYXRhKHllYXJzOiBBcnJheTxudW1iZXI+LCBwcm9ncmVzc1RlYW1EZXRhaWxSYXdEYXRhOiBhbnksIHVuaXRUeXBlOiBEaXJlY3RVbml0VHlwZSk6IEFycmF5PEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPj4ge1xuXG4gICAgbGV0IGFuc0FycjogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+PiA9IG5ldyBBcnJheTxBcnJheTxQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YT4+KCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSB5ZWFyczogXCIsIHllYXJzKTtcbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSBwcm9ncmVzc1RlYW1EZXRhaWxSYXdEYXRhOiBcIiwgcHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHByb2dyZXNzVGVhbURldGFpbFJhd0RhdGEpIHtcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gcHJvZ3Jlc3NUZWFtRGV0YWlsUmF3RGF0YVtcIkJvZHlcIl07XG5cbiAgICAgICAgbGV0IHJhd0RhdGFCeVllYXJBcnI6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgeWVhckRhdGEgPSBib2R5RGF0YS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXJzW2ldICYmIHguRGlyZWN0VW5pdFR5cGUgPT0gdW5pdFR5cGUpO1xuICAgICAgICAgIGlmICh5ZWFyRGF0YSlcbiAgICAgICAgICAgIHJhd0RhdGFCeVllYXJBcnIucHVzaCh5ZWFyRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzVGVhbURpcmVjdEluZGlyZWN0RGF0YSByYXdEYXRhQnlZZWFyQXJyOiBcIiwgcmF3RGF0YUJ5WWVhckFycik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhQnlZZWFyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGFycjogQXJyYXk8UHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGE+ID0gbmV3IEFycmF5PFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhPigpO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmF3RGF0YUJ5WWVhckFycltpXS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICBsZXQgdG1wID0gcmF3RGF0YUJ5WWVhckFycltpXVtqXTtcblxuICAgICAgICAgICAgbGV0IGRhdGE6IFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhID0gbmV3IFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhKCk7XG4gICAgICAgICAgICBkYXRhLkFnZW50SUQgPSB0bXAuQWdlbnRJRDtcbiAgICAgICAgICAgIGRhdGEuQWdlbnROYW1lID0gdG1wLkFnZW50TmFtZTtcbiAgICAgICAgICAgIGRhdGEuVGVhbU5hbWUgPSB0bXAuVGVhbU5hbWU7XG4gICAgICAgICAgICBkYXRhLkpvYkdyYWRlID0gdG1wLkpvYkdyYWRlO1xuICAgICAgICAgICAgZGF0YS5EYXRhVHlwZSA9IHRtcC5EYXRhVHlwZTtcbiAgICAgICAgICAgIGRhdGEuVGltZUJhc2UgPSB0bXAuVGltZUJhc2U7XG4gICAgICAgICAgICBkYXRhLkFwcFVzZU1vZGUgPSB0bXAuQXBwVXNlTW9kZTtcbiAgICAgICAgICAgIGRhdGEuQWN0aXZpdGllcyA9IHRtcC5BY3Rpdml0aWVzO1xuICAgICAgICAgICAgZGF0YS5EcmlsbGRvd24gPSB0bXAuRHJpbGxkb3duID09IFwiWVwiOy8vdHJ1ZVxuICAgICAgICAgICAgZGF0YS5BY3R1YWwgPSB0bXAuQWN0dWFsO1xuICAgICAgICAgICAgZGF0YS5Hb2FsID0gdG1wLkdvYWw7XG4gICAgICAgICAgICBkYXRhLkZvcmVjYXN0ID0gdG1wLkZvcmVjYXN0O1xuICAgICAgICAgICAgZGF0YS5TaG9ydGZhbGwgPSB0bXAuU2hvcnRmYWxsO1xuICAgICAgICAgICAgYXJyLnB1c2goZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuc0Fyci5wdXNoKGFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFuc0FycjtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyB0aHJvdyBcImRhdGEgbnVsbFwiOyB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAyMTInLCAnZ2V0IFByb2dyZXNzIFRlYW0gRGlyZWN0IEluZGlyZWN0IERhdGEgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX0dldFByb2dyZXNzVGVhbU1haW5EYXRhKHllYXJzOiBBcnJheTxudW1iZXI+LCBwcm9ncmVzc1RlYW1NYWluUmF3RGF0YTogYW55KTogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4+IHtcbiAgICBsZXQgYW5zQXJyOiBBcnJheTxBcnJheTxQcm9ncmVzc1RlYW1EYXRhPj4gPSBuZXcgQXJyYXk8QXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4+KCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzVGVhbU1haW5EYXRhIHllYXJzOiBcIiwgeWVhcnMpO1xuICAgIGNvbnNvbGUuZGVidWcoXCJfZ2V0UHJvZ3Jlc3NUZWFtTWFpbkRhdGEgcHJvZ3Jlc3NUZWFtTWFpblJhd0RhdGE6IFwiLCBwcm9ncmVzc1RlYW1NYWluUmF3RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHByb2dyZXNzVGVhbU1haW5SYXdEYXRhKSB7XG4gICAgICAgIGxldCBib2R5RGF0YSA9IHByb2dyZXNzVGVhbU1haW5SYXdEYXRhW1wiQm9keVwiXTtcbiAgICAgICAgbGV0IHJhd0RhdGFCeVllYXJBcnI6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgeWVhckRhdGEgPSBib2R5RGF0YS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXJzW2ldKTtcbiAgICAgICAgICBpZiAoeWVhckRhdGEpXG4gICAgICAgICAgICByYXdEYXRhQnlZZWFyQXJyLnB1c2goeWVhckRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIl9nZXRQcm9ncmVzc1RlYW1NYWluRGF0YSByYXdEYXRhQnlZZWFyQXJyOiBcIiwgcmF3RGF0YUJ5WWVhckFycik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhQnlZZWFyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGFycjogQXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4gPSBuZXcgQXJyYXk8UHJvZ3Jlc3NUZWFtRGF0YT4oKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhd0RhdGFCeVllYXJBcnJbaV0ubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgbGV0IHRtcCA9IHJhd0RhdGFCeVllYXJBcnJbaV1bal07XG5cbiAgICAgICAgICAgIGxldCBkYXRhOiBQcm9ncmVzc1RlYW1EYXRhID0gbmV3IFByb2dyZXNzVGVhbURhdGEoKTtcbiAgICAgICAgICAgIGRhdGEuRGF0YVR5cGUgPSB0bXAuRGF0YVR5cGU7XG4gICAgICAgICAgICBkYXRhLlRpbWVCYXNlID0gdG1wLlRpbWVCYXNlO1xuICAgICAgICAgICAgZGF0YS5Hb2FsID0gdG1wLkdvYWw7XG4gICAgICAgICAgICBkYXRhLkZvcmVjYXN0ID0gdG1wLkZvcmVjYXN0O1xuICAgICAgICAgICAgZGF0YS5BY3R1YWwgPSB0bXAuQWN0dWFsO1xuICAgICAgICAgICAgZGF0YS5TaG9ydGZhbGwgPSB0bXAuU2hvcnRmYWxsO1xuICAgICAgICAgICAgYXJyLnB1c2goZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuc0Fyci5wdXNoKGFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFuc0FycjtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyB0aHJvdyBcImRhdGEgbnVsbFwiOyB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAyMTMnLCAnR2V0IFByb2dyZXNzIFRlYW0gTWFpbiBEYXRhIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX0dldFByb2dyZXNzUGVyc29uYWxEYXRhKHllYXJzOiBBcnJheTxudW1iZXI+LCBwcm9ncmVzc1BlcnNvbmFsUmF3RGF0YTogYW55KTogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+PiB7XG4gICAgbGV0IGFuc0FycjogQXJyYXk8QXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+PiA9IG5ldyBBcnJheTxBcnJheTxQcm9ncmVzc1BlcnNvbmFsRGF0YT4+KCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzUGVyc29uYWxEYXRhIHllYXJzOiBcIiwgeWVhcnMpO1xuICAgIGNvbnNvbGUuZGVidWcoXCJfZ2V0UHJvZ3Jlc3NQZXJzb25hbERhdGEgcHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGE6IFwiLCBwcm9ncmVzc1BlcnNvbmFsUmF3RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHByb2dyZXNzUGVyc29uYWxSYXdEYXRhKSB7XG5cbiAgICAgICAgbGV0IGJvZHlEYXRhID0gcHJvZ3Jlc3NQZXJzb25hbFJhd0RhdGFbXCJCb2R5XCJdO1xuICAgICAgICBsZXQgcmF3RGF0YUJ5WWVhckFycjogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB5ZWFyRGF0YSA9IGJvZHlEYXRhLmZpbHRlcih4ID0+IHguRGF0YVllYXIgPT0geWVhcnNbaV0pO1xuICAgICAgICAgIGlmICh5ZWFyRGF0YSlcbiAgICAgICAgICAgIHJhd0RhdGFCeVllYXJBcnIucHVzaCh5ZWFyRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiX2dldFByb2dyZXNzUGVyc29uYWxEYXRhIHJhd0RhdGFCeVllYXJBcnI6IFwiLCByYXdEYXRhQnlZZWFyQXJyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGFCeVllYXJBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgYXJyOiBBcnJheTxQcm9ncmVzc1BlcnNvbmFsRGF0YT4gPSBuZXcgQXJyYXk8UHJvZ3Jlc3NQZXJzb25hbERhdGE+KCk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYXdEYXRhQnlZZWFyQXJyW2ldLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGxldCB0bXAgPSByYXdEYXRhQnlZZWFyQXJyW2ldW2pdO1xuICAgICAgICAgICAgbGV0IGRhdGE6IFByb2dyZXNzUGVyc29uYWxEYXRhID0gbmV3IFByb2dyZXNzUGVyc29uYWxEYXRhKCk7XG4gICAgICAgICAgICBkYXRhLkRhdGFUeXBlID0gdG1wLkRhdGFUeXBlO1xuICAgICAgICAgICAgZGF0YS5UaW1lQmFzZSA9IHRtcC5UaW1lQmFzZTtcbiAgICAgICAgICAgIGRhdGEuRmluZCA9IHRtcC5GaW5kO1xuICAgICAgICAgICAgZGF0YS5TY2hlZHVsZSA9IHRtcC5TY2hlZHVsZTtcbiAgICAgICAgICAgIGRhdGEuTWVldCA9IHRtcC5NZWV0O1xuICAgICAgICAgICAgZGF0YS5TdWJtaXQgPSB0bXAuU3VibWl0O1xuICAgICAgICAgICAgZGF0YS5JbmZvcmNlID0gdG1wLkluZm9yY2U7XG4gICAgICAgICAgICBkYXRhLkZZRkMgPSB0bXAuRllGQztcbiAgICAgICAgICAgIGFyci5wdXNoKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbnNBcnIucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbnNBcnI7XG4gICAgICB9XG4gICAgICBlbHNlIHsgdGhyb3cgXCJkYXRhIG51bGxcIjsgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjE0JywgJ0dldCBQcm9ncmVzcyBQZXJzb25hbCBEYXRhIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gcHJpdmF0ZSBmdW5jdGlvblxuXG4gIC8vI3JlZ2lvbiB5ZWFyIGNvbmZpZyBmdW5jdGlvblxuXG4gIC8vZ2V0IHllYXIgY29uZmlnIFxuICBAVmFsaWQoJ0NvbmZpZ3VyYXRpb25PYmonKVxuICBwdWJsaWMgR2V0WWVhckNvbmZpZ0RhdGFCeVNRTGl0ZSgpOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRpb25PYmo+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGdldFllYXJDb25maWd1cmF0aW9uQVBJOiBHZXRZZWFyQ29uZmlndXJhdGlvbkFQSSA9IDxHZXRZZWFyQ29uZmlndXJhdGlvbkFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRZZWFyQ29uZmlndXJhdGlvbicpO1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5kaXNwYXRjaC5kaXNwYXRjaChnZXRZZWFyQ29uZmlndXJhdGlvbkFQSSkudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0WWVhckNvbmZpZyByZXNwOiBcIiwgcmVzcCk7XG5cbiAgICAgICAgLy8gY29udmVydCB0byB5YW1sXG4gICAgICAgIGxldCBkYXRhQmFkeSA9IHJlc3BbXCJCb2R5XCJdO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiZ2V0WWVhckNvbmZpZyBkYXRhQmFkeTogXCIsIGRhdGFCYWR5KTtcblxuICAgICAgICBsZXQgY29uZmlnT2JqOiBDb25maWd1cmF0aW9uT2JqID0gbmV3IENvbmZpZ3VyYXRpb25PYmooKTtcbiAgICAgICAgbGV0IGFycjogQXJyYXk8UHJvZ3Jlc3NZZWFyQ29uZmlnPiA9IG5ldyBBcnJheTxQcm9ncmVzc1llYXJDb25maWc+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQmFkeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBkYXRhOiBQcm9ncmVzc1llYXJDb25maWcgPSBuZXcgUHJvZ3Jlc3NZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgbGV0IGRhdGFDb25maWcgPSBkYXRhQmFkeVtpXTtcblxuICAgICAgICAgIGRhdGEuRGF0YVllYXIgPSBkYXRhQ29uZmlnLkRhdGFZZWFyO1xuICAgICAgICAgIGRhdGEuSXNDdXJyZW50ID0gZGF0YUNvbmZpZy5Jc0N1cnJlbnQgPT09IFwiWVwiO1xuICAgICAgICAgIGRhdGEuV29ya2luZ01vbnRoID0gZGF0YUNvbmZpZy5Xb3JraW5nTW9udGg7XG4gICAgICAgICAgZGF0YS5RdWFydGVyU3RhcnRNb250aCA9IGRhdGFDb25maWcuUXVhcnRlclN0YXJ0TW9udGg7XG4gICAgICAgICAgZGF0YS5RdWFydGVyRW5kTW9udGggPSBkYXRhQ29uZmlnLlF1YXJ0ZXJFbmRNb250aDtcbiAgICAgICAgICBkYXRhLlByb2dyZXNzRGF5UG9pbnRzTGltaXQgPSBkYXRhQ29uZmlnLlByb2dyZXNzRGF5UG9pbnRzTGltaXQ7XG4gICAgICAgICAgZGF0YS5Qcm9ncmVzc0JhckNvbnRyb2xNb2RlID0gZGF0YUNvbmZpZy5Qcm9ncmVzc0JhckNvbnRyb2xNb2RlO1xuICAgICAgICAgIGRhdGEuTW9udGhRdWFudGl0eU9mWWVhciA9IGRhdGFDb25maWcuTW9udGhRdWFudGl0eU9mWWVhcjtcblxuICAgICAgICAgIGRhdGEuRmluZENvbnZlcnRQb2ludEJhc2UgPSBkYXRhQ29uZmlnLkZpbmRDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgICAgIGRhdGEuU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlID0gZGF0YUNvbmZpZy5TY2hlZHVsZUNvbnZlcnRQb2ludEJhc2U7XG4gICAgICAgICAgZGF0YS5NZWV0Q29udmVydFBvaW50QmFzZSA9IGRhdGFDb25maWcuTWVldENvbnZlcnRQb2ludEJhc2U7XG4gICAgICAgICAgZGF0YS5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlID0gZGF0YUNvbmZpZy5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgICAgIGRhdGEuSW5mb3JjZUNvbnZlcnRQb2ludEJhc2UgPSBkYXRhQ29uZmlnLkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlO1xuXG4gICAgICAgICAgZGF0YS5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCA9IGRhdGFDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG5cbiAgICAgICAgICBhcnIucHVzaChkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ09iai5Db25maWd1cmF0aW9ucyA9IGFycjtcblxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJjb25maWdPYmo6IFwiLCBjb25maWdPYmopO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiY29uZmlnT2JqOiBcIiwgSlNPTi5zdHJpbmdpZnkoY29uZmlnT2JqKSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJnb3QgU1FsaXRlIHllYXIgY29uZmlnIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdvdCBTUWxpdGUgeWVhciBjb25maWcgcmVzcCBqc29uOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuXG4gICAgICAgIHJldHVybiBjb25maWdPYmo7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAyMTUnLCAnT01HISBnZXQgWWVhciBDb25maWcgU1FMaXRlIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuXG4gIHB1YmxpYyBHZXRZZWFyQ29uZmlnRGF0YUJ5UmVzdGZ1bChhZ2VudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgeWVhckNvbmZpZ0FQSTogZ2V0WWVhckNvbmZpZ0FQSSA9IDxnZXRZZWFyQ29uZmlnQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldFllYXJDb25maWcnKTtcbiAgICAgIHllYXJDb25maWdBUEkuc2V0QWdlbnRJRChhZ2VudElEKTtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goeWVhckNvbmZpZ0FQSSkudG9Qcm9taXNlKCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjA5JywgJ2dldCBQcm9ncmVzcyBEYXRhIEJ5IFJlc3RmdWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5UmVzdGZ1bCBhZ2VudCBpZDogXCIsIGFnZW50SUQpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuXG4gIC8vIHB1YmxpYyBHZXRZZWFyQ29uZmlnRGF0YUJ5UmVzdGZ1bChhZ2VudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBsZXQgeWVhckNvbmZpZ0FQSTogZ2V0WWVhckNvbmZpZ0FQSSA9IDxnZXRZZWFyQ29uZmlnQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldFllYXJDb25maWcnKTtcbiAgLy8gICAgIHllYXJDb25maWdBUEkuc2V0QWdlbnRJRChhZ2VudElEKTtcbiAgLy8gICAgIHJldHVybiBmcm9tKHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goeWVhckNvbmZpZ0FQSSkudG9Qcm9taXNlKCkpO1xuICAvLyAgIH1cbiAgLy8gICBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMjA5JywgJ2dldCBQcm9ncmVzcyBEYXRhIEJ5IFJlc3RmdWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAvLyAgICAgY29uc29sZS5kZWJ1ZyhcImdldFByb2dyZXNzRGF0YUJ5UmVzdGZ1bCBhZ2VudCBpZDogXCIsIGFnZW50SUQpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gb2YobnVsbCk7XG4gIC8vIH1cblxuICAvLyNlbmRyZWdpb24geWVhciBjb25maWcgZnVuY3Rpb25cblxuICAvLyNyZWdpb24gZnVudGlvbiBjYWxjdWxhdGVcblxuICBwdWJsaWMgU2hvd0Rlc2gobnVtOiBudW1iZXIsIHNpZ246c3RyaW5nID0gXCItLVwiKTogc3RyaW5nIHtcbiAgICBpZighTnVtYmVyVXRpbHMuaXNOdW1iZXIobnVtKSkge1xuICAgICAgcmV0dXJuIHNpZ247XG4gICAgfVxuICAgIHJldHVybiAobnVtIDw9IC0xKSA/IHNpZ24gOiBudW0udG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBHZXRQb2ludHMobnVtOiBudW1iZXIsIG11dGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IGFucyA9IChudW0gKiBtdXRpKTtcbiAgICByZXR1cm4gKGFucyA8PSAtMSkgPyBcIi0tXCIgOiBhbnMudG9TdHJpbmcoKTtcbiAgfVxuXG5cbiAgLy9pZiB0aW1lYmFzZSA9PSBkYXkgPT0+IFByb2dyZXNzUGVyc29uYWxEYXRhLmZpbmQgb25lIGRheSBcbiAgLy9pZiB0aW1lYmFzZSA9PSB3ZWVrID09PiBQcm9ncmVzc1BlcnNvbmFsRGF0YS5maW5kIHdlZWsod2VlayBzdW0pdGhhdCBtZWFuaW4gaWYgd2ViIHdlZWtzdW0gaGF2ZSAzIGRheSBkYXRhXG4gIHB1YmxpYyBHZXRUb3RhbFBvaW50cyhkYXRhOiBQcm9ncmVzc1BlcnNvbmFsRGF0YSk6IG51bWJlciB7XG5cbiAgICAvL2NoZWNrIGRhdGEgPT0gLTE/XG4gICAgbGV0IGNoZWNrRGF0YTogUHJvZ3Jlc3NQZXJzb25hbERhdGEgPSBuZXcgUHJvZ3Jlc3NQZXJzb25hbERhdGEoKTtcbiAgICBjaGVja0RhdGEuRmluZCA9IChkYXRhLkZpbmQgPT0gLTEpID8gMCA6IGRhdGEuRmluZDtcbiAgICBjaGVja0RhdGEuU2NoZWR1bGUgPSAoZGF0YS5TY2hlZHVsZSA9PSAtMSkgPyAwIDogZGF0YS5TY2hlZHVsZTtcbiAgICBjaGVja0RhdGEuTWVldCA9IChkYXRhLk1lZXQgPT0gLTEpID8gMCA6IGRhdGEuTWVldDtcbiAgICBjaGVja0RhdGEuU3VibWl0ID0gKGRhdGEuU3VibWl0ID09IC0xKSA/IDAgOiBkYXRhLlN1Ym1pdDtcbiAgICBjaGVja0RhdGEuSW5mb3JjZSA9IChkYXRhLkluZm9yY2UgPT0gLTEpID8gMCA6IGRhdGEuSW5mb3JjZTtcblxuICAgIGxldCBzdW0gPSAoY2hlY2tEYXRhLkZpbmQgKiBkYXRhLkZpbmRDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLlNjaGVkdWxlICogZGF0YS5TY2hlZHVsZUNvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuTWVldCAqIGRhdGEuTWVldENvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuU3VibWl0ICogZGF0YS5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlKSArXG4gICAgICAoY2hlY2tEYXRhLkluZm9yY2UgKiBkYXRhLkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlKTtcblxuICAgIHJldHVybiBzdW07XG4gIH1cblxuXG4gIHB1YmxpYyBHZXRQZXJjZW50YWdlQ2lyY2xlVmFsdWUoZGF0YTogUHJvZ3Jlc3NQZXJzb25hbERhdGEsIGxpbWl0OiBudW1iZXIsIGlzV2VlazogYm9vbGVhbik6IHN0cmluZyB7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFBlcmNlbnRhZ2VDaXJjbGVWYWx1ZTogXCIsIGRhdGEpO1xuXG4gICAgLy9jaGVjayBkYXRhID09IC0xP1xuICAgIGxldCBjaGVja0RhdGE6IFByb2dyZXNzUGVyc29uYWxEYXRhID0gbmV3IFByb2dyZXNzUGVyc29uYWxEYXRhKCk7XG4gICAgY2hlY2tEYXRhLkRhdGFUeXBlID0gZGF0YS5EYXRhVHlwZTtcbiAgICBjaGVja0RhdGEuVGltZUJhc2UgPSBkYXRhLlRpbWVCYXNlO1xuICAgIGNoZWNrRGF0YS5GaW5kID0gKGRhdGEuRmluZCA9PSAtMSkgPyAwIDogZGF0YS5GaW5kO1xuICAgIGNoZWNrRGF0YS5TY2hlZHVsZSA9IChkYXRhLlNjaGVkdWxlID09IC0xKSA/IDAgOiBkYXRhLlNjaGVkdWxlO1xuICAgIGNoZWNrRGF0YS5NZWV0ID0gKGRhdGEuTWVldCA9PSAtMSkgPyAwIDogZGF0YS5NZWV0O1xuICAgIGNoZWNrRGF0YS5TdWJtaXQgPSAoZGF0YS5TdWJtaXQgPT0gLTEpID8gMCA6IGRhdGEuU3VibWl0O1xuICAgIGNoZWNrRGF0YS5JbmZvcmNlID0gKGRhdGEuSW5mb3JjZSA9PSAtMSkgPyAwIDogZGF0YS5JbmZvcmNlO1xuXG4gICAgbGV0IHN1bSA9IChjaGVja0RhdGEuRmluZCAqIGRhdGEuRmluZENvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuU2NoZWR1bGUgKiBkYXRhLlNjaGVkdWxlQ29udmVydFBvaW50QmFzZSkgK1xuICAgICAgKGNoZWNrRGF0YS5NZWV0ICogZGF0YS5NZWV0Q29udmVydFBvaW50QmFzZSkgK1xuICAgICAgKGNoZWNrRGF0YS5TdWJtaXQgKiBkYXRhLlN1Ym1pdENvbnZlcnRQb2ludEJhc2UpICtcbiAgICAgIChjaGVja0RhdGEuSW5mb3JjZSAqIGRhdGEuSW5mb3JjZUNvbnZlcnRQb2ludEJhc2UpO1xuXG4gICAgbGV0IG1heCA9IChpc1dlZWsgPT0gdHJ1ZSkgPyBsaW1pdCAqIDcgOiBsaW1pdDtcbiAgICBsZXQgYW5zID0gKHN1bSAvIG1heCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiX2dldFBlcmNlbnRhZ2VDaXJjbGVWYWx1ZSBhbnMgbWF4IHN1bTogXCIsIGFucywgbWF4LCBzdW0pO1xuXG4gICAgaWYgKGFucyA9PSAwIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihhbnMpKSByZXR1cm4gXCIwXCI7XG4gICAgcmV0dXJuIChhbnMgPj0gMSkgPyBcIjFcIiA6IGFucy50b0ZpeGVkKDIpO1xuICB9XG5cbiAgcHVibGljIEdldFBlcmNlbnRhZ2UobnVtZXJhdG9yOiBudW1iZXIsIGRlbm9taW5hdG9yOiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgaWYobnVtZXJhdG9yIDw9IDAgfHwgZGVub21pbmF0b3IgPD0gMCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgYW5zID0gTWF0aC5yb3VuZCgobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpICogMTAwKTtcbiAgICByZXR1cm4gKGFucykgPyBhbnMgOiAwO1xuICB9XG5cbiAgcHVibGljIEdldFBlcmNlbnRhZ2VMZW5ndGgobnVtZXJhdG9yOiBudW1iZXIsIGRlbm9taW5hdG9yOiBudW1iZXIsIG1heExlbmd0aDogbnVtYmVyLCBtYXhCYXNlOiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgaWYobnVtZXJhdG9yIDw9IDAgfHwgZGVub21pbmF0b3IgPD0gMCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgYW5zID0gTWF0aC5yb3VuZCgobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpICogMTAwKSAvIG1heEJhc2U7XG5cbiAgICByZXR1cm4gKGFucyA+PSBtYXhMZW5ndGgpID8gbWF4TGVuZ3RoIDogYW5zIDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG59XG4iXX0=