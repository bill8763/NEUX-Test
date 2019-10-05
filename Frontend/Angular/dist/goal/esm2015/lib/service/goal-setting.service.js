/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, ErrorHandler } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { APIDispatch, APIFactory, StringUtils, APPError, NumberUtils, DataSyncService, SubmitGoalSettingValue, SubmitGoalInfo, SubmitGoalPlanInfo, SuccessStatus, YESNO, TIMEBASE, SUBMITGOALTYPE, SubmitGoalPlan, PERFORMANCETYPE, SubmitGoalData, yearConfigExtensionDataToken, goalSettingExtensionDataToken, ProfileCodeService, Valid } from "@allianzSND/core";
import { goalSettingStepToken } from '../injectionToken';
import { GoalSettingStep4 } from './model/GoalSettingStep4';
import { GoalStoreService, SYNC_STATUS } from './goal-store.service';
import { AgencyPlanDetail } from './model/AgencyPlanDetail';
import { AgencyPlanGoalExpected } from './model/AgencyPlanGoalExpected';
import { AgencyPlanMainData } from './model/AgencyPlanMainData';
import { AgencyPlanDataForOverview } from './model/AgencyPlanDataForOverview';
import { GoalSettingYearConfig } from './model/GoalSettingYearConfig';
import { GoalSettingStep2 } from './model/GoalSettingStep2';
import { MonthlyPlanFYFCData } from './model/MonthlyPlanFYFCData';
import { GoalSettingStepData } from './model/GoalSettingStepData';
import { GoalSettingStep5 } from './model/GoalSettingStep5';
import { GoalSettingStep3 } from './model/GoalSettingStep3';
import { GoalSettingStep1 } from './model/GoalSettingStep1';
import { GoalSettingGoalStatus } from './model/GoalSettingGoalStatus';
import { IsApproveInfo } from './model/IsApproveInfo';
import { ActivityValue } from './model/ActivityValue';
import { ApproveInfo } from './model/ApproveInfo';
import { AgencyPlanMainInfo } from "./model/AgencyPlanMainInfo";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "./goal-store.service";
import * as i3 from "../injectionToken/injection-token";
export class GoalSettingService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} goalStore
     * @param {?} errorHandler
     * @param {?} goalSettingStep
     * @param {?} yearConfigExtension
     * @param {?} goalSettingExtension
     * @param {?} dataSyncService
     * @param {?} profileCodeService
     */
    constructor(dispatcher, APIFactory, goalStore, errorHandler, goalSettingStep, yearConfigExtension, goalSettingExtension, dataSyncService, profileCodeService) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.goalStore = goalStore;
        this.errorHandler = errorHandler;
        this.goalSettingStep = goalSettingStep;
        this.yearConfigExtension = yearConfigExtension;
        this.goalSettingExtension = goalSettingExtension;
        this.dataSyncService = dataSyncService;
        this.profileCodeService = profileCodeService;
        this.TextConvertStep1Map = new Map();
        this.TextConvertStep2Map = new Map();
        this.TextConvertStep5Map = new Map();
        this.StepTextConvertMap = new Map();
        this.ColMapToProfile = new Map();
        this.ColMapToProfileCodeMap = new Map();
        this.DASH = '--';
        this._isPopup = false;
        this.TextConvertStep1Map.set("FYFC", "PERSON_FYFC");
        // this.TextConvertStep1Map.set("ANP", "PERSON_ANP");
        this.TextConvertStep1Map.set("AnnualConvention", "ANNUAL_CONVENTION");
        this.TextConvertStep1Map.set("MDRT", "MDRT");
        this.TextConvertStep1Map.set("PromotionPlan", "PROMOTION_PLAN");
        this.TextConvertStep1Map.set("ActivityFYFC", "ACTIVITY_FYFC");
        this.TextConvertStep1Map.set("ActivityDays", "ACTIVITY_DAYS");
        this.TextConvertStep2Map.set("PerCase", "PER_CASE_FYFC");
        this.TextConvertStep5Map.set("TeamFYFC", "TEAM_FYFC");
        this.TextConvertStep5Map.set("TeamANP", "TEAM_ANP");
        this.TextConvertStep5Map.set("Manpower", "TEAM_MANPOWER");
        this.TextConvertStep5Map.set("Recruitment", "TEAM_RECRUITMENT");
        this.StepTextConvertMap.set("Step1", this.TextConvertStep1Map);
        this.StepTextConvertMap.set("Step2", this.TextConvertStep2Map);
        this.StepTextConvertMap.set("Step5", this.TextConvertStep5Map);
        this.ColMapToProfile.set("AnnualConvention", "GoalSetting_AnnualConvention");
        this.ColMapToProfile.set("MDRT", "GoalSetting_MDRT");
        this.ColMapToProfile.set("PromotionPlan", "Promotion_Plan");
        this.ColMapToProfile.forEach((/**
         * @param {?} code
         * @param {?} col
         * @return {?}
         */
        (code, col) => {
            this.ColMapToProfileCodeMap.set(col, this.profileCodeService.getCodeArray(code));
        }));
    }
    //-----------
    //#region  goalStepDatas
    // GoalSettingService
    /**
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    getGoalSettingStep1_5Data(year, isAdjust) {
        return from(this._getGoalSettingStep1_5Data(year, isAdjust));
    }
    /**
     * @private
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    _getGoalSettingStep1_5Data(year, isAdjust) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('into _getGoalSettingStep1_5Data year:', year, 'isAdjust', isAdjust);
            /** @type {?} */
            let returnData = new GoalSettingStepData(year);
            try {
                /** @type {?} */
                let yearConfigResp;
                /** @type {?} */
                let goalSettingResp;
                /** @type {?} */
                let goalSettingValueResp;
                /** @type {?} */
                let actualResp;
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                /** @type {?} */
                let goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                /** @type {?} */
                let goalSettingValue = this.APIFactory.getAPI("getGoalSettingValue");
                /** @type {?} */
                let actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                ((/** @type {?} */ (goalSettingValue))).setDataYear(year);
                ((/** @type {?} */ (actual))).setDataYear(year);
                [yearConfigResp, goalSettingResp, goalSettingValueResp, actualResp] = yield Promise.all([
                    this.dispatcher.dispatch(yearConfig).toPromise(),
                    this.dispatcher.dispatch(goalSetting).toPromise(),
                    this.dispatcher.dispatch(goalSettingValue).toPromise(),
                    this.dispatcher.dispatch(actual).toPromise()
                ]);
                console.log("yearConfigResp", yearConfigResp);
                console.log("goalSettingResp", goalSettingResp);
                console.log("goalSettingValueResp", goalSettingValueResp);
                console.log("actualResp", actualResp);
                //call GetYearConfigAPI
                if (yearConfigResp.Header["status"]
                    && goalSettingResp.Header["status"]
                    && goalSettingValueResp.Header["status"]
                    && actualResp.Header["status"]) {
                    /** @type {?} */
                    let yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                    /** @type {?} */
                    let goalSettingMap = this.yearJsonToMap(goalSettingResp["Body"]);
                    /** @type {?} */
                    let yearConfigObj = yearConfigMap.get(year);
                    /** @type {?} */
                    let goalSettingObj = goalSettingMap.get(year);
                    console.log("yearConfigObj", yearConfigObj);
                    console.log("goalSettingObj", goalSettingObj);
                    if (yearConfigObj != undefined && goalSettingObj != undefined) {
                        // call GetGoalSettingValue
                        /** @type {?} */
                        let goalSettingValueObj = {};
                        goalSettingValueResp["Body"].forEach((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => {
                            goalSettingValueObj[data.DataType] = data.Value;
                        }));
                        console.log("goalSettingValueObj", goalSettingValueObj);
                        // call GetActualValue
                        /** @type {?} */
                        let teamFYFCActual = -1;
                        /** @type {?} */
                        let teamANPActual = -1;
                        /** @type {?} */
                        let allYearActual = -1;
                        /** @type {?} */
                        let monthOfYear = yearConfigObj.MonthQuantityOfYear;
                        /** @type {?} */
                        let actuallist = Array(monthOfYear).fill(this.DASH, 0);
                        /** @type {?} */
                        let actualBody = actualResp["Body"];
                        /** @type {?} */
                        let FYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.PERSONAL && x.DataType == "FYFC"));
                        if (FYFCActuals.length > 0) {
                            allYearActual = 0;
                            FYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => {
                                if (x.Month <= yearConfigObj.PerformanceSettlementMonth) {
                                    actuallist[x.Month - 1] = x.Value;
                                    allYearActual += x.Value;
                                }
                            }));
                        }
                        /** @type {?} */
                        let TeamFYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.TEAM && x.DataType == "FYFC"));
                        if (TeamFYFCActuals.length) {
                            teamFYFCActual = 0;
                            teamANPActual = 0;
                            TeamFYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => {
                                teamFYFCActual += (x.Month <= yearConfigObj.PerformanceSettlementMonth) ? x.Value : 0;
                            }));
                            teamANPActual = this.numberToFix(teamFYFCActual * yearConfigObj.FyfcCovertAnpRate, 0);
                        }
                        console.log("actuallist", actuallist);
                        /** @type {?} */
                        let YearConfig = new GoalSettingYearConfig();
                        /** @type {?} */
                        let GoalStatus = new GoalSettingGoalStatus();
                        /** @type {?} */
                        let Step1 = new GoalSettingStep1();
                        /** @type {?} */
                        let Step2 = new GoalSettingStep2();
                        /** @type {?} */
                        let Step3 = new GoalSettingStep3();
                        /** @type {?} */
                        let Step4 = new GoalSettingStep4();
                        /** @type {?} */
                        let Step5 = new GoalSettingStep5();
                        YearConfig.DataYear = yearConfigObj.DataYear;
                        YearConfig.IsCurrent = yearConfigObj.IsCurrent;
                        YearConfig.QuarterStartMonth = yearConfigObj.QuarterStartMonth;
                        YearConfig.QuarterEndMonth = yearConfigObj.QuarterEndMonth;
                        YearConfig.GoalSettingActivityProcMode = yearConfigObj.GoalSettingActivityProcMode;
                        YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj.GoalAndPlanDifferenceLimit;
                        YearConfig.FyfcCovertAnpRate = yearConfigObj.FyfcCovertAnpRate;
                        YearConfig.InforceConvertSubmitRate = yearConfigObj.InforceConvertSubmitRate;
                        YearConfig.InforceConvertMeetRate = yearConfigObj.InforceConvertMeetRate;
                        YearConfig.InforceConvertScheduleRate = yearConfigObj.InforceConvertScheduleRate;
                        YearConfig.InforceConvertFindRate = yearConfigObj.InforceConvertFindRate;
                        YearConfig.NowToYearEndDays = yearConfigObj.NowToYearEndDays;
                        YearConfig.PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                        YearConfig.MonthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                        YearConfig.WorkingMonth = yearConfigObj.WorkingMonth;
                        if (this.yearConfigExtension) {
                            /** @type {?} */
                            let yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "SQL" });
                            YearConfig.setExtension(yearConfigExtData);
                        }
                        GoalStatus.DataYear = year;
                        GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                        GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                        GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                        GoalStatus.ApproveStatus = goalSettingObj.ApproveStatus;
                        GoalStatus.IsFirstTime = goalSettingObj.IsFirstTime == "Y";
                        GoalStatus.IsNeedSetting = goalSettingObj.IsNeedSetting == "Y";
                        GoalStatus.SupervisorComment = goalSettingObj.SupervisorComment;
                        if (this.goalSettingExtension) {
                            /** @type {?} */
                            let goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "SQL" });
                            GoalStatus.setExtension(goalSettingExtData);
                        }
                        Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                        Step1.Actual = this.changeToDash(allYearActual);
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, Step1.Actual);
                        Step1.ActivityFYFC = goalSettingValueObj.ACTIVITY_FYFC;
                        Step1.ActivityDays = goalSettingValueObj.ACTIVITY_DAYS;
                        Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let ActivityFYFC = isAdjust ? Step1.FYFCNowToYearEnd : Step1.FYFC;
                        Step3 = this.calculateActivityData(ActivityFYFC, Step2.PerCase, YearConfig);
                        if (isAdjust) {
                            Step4 = yield this._getMonthActualPlanBySQL(PERFORMANCETYPE.PERSONAL, year, YearConfig.MonthQuantityOfYear, YearConfig.PerformanceSettlementMonth);
                            Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        }
                        else {
                            Step4 = this.calculateMonthActualPlan(YearConfig, Step1.FYFC, actuallist);
                            Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        }
                        Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                        Step5.TeamFYFCActual = this.changeToDash(teamFYFCActual);
                        Step5.TeamANPActual = this.changeToDash(teamANPActual);
                        Step5.TeamFYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.TEAM_FYFC, Step5.TeamFYFCActual);
                        Step5.TeamANPNowToYearEnd = this.calculateANPFromFYFC(Step5.TeamFYFCNowToYearEnd, YearConfig.FyfcCovertAnpRate);
                        returnData.YearConfig = YearConfig;
                        returnData.GoalStatus = GoalStatus;
                        returnData.Step1 = Step1;
                        returnData.Step2 = Step2;
                        returnData.Step3 = Step3;
                        returnData.Step4 = Step4;
                        returnData.Step5 = Step5;
                        returnData.ActualList = actuallist;
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00400', 'getGoalSettingStep1_5Data fail!' + error.message));
            }
            console.log("getGoalSettingStep1_5Data returnData", returnData);
            return returnData;
        });
    }
    /**
     * @param {?} goal
     * @param {?} perCase
     * @param {?} yearConfig
     * @param {?=} activityDays
     * @return {?}
     */
    calculateActivityData(goal, perCase, yearConfig, activityDays = '') {
        console.log("calculateActivityData:", goal, perCase, yearConfig, activityDays);
        /** @type {?} */
        let returnObj = new GoalSettingStep3();
        /** @type {?} */
        let activityValues = [];
        try {
            /** @type {?} */
            let numGoal = Number(goal);
            /** @type {?} */
            let numPerCase = Number(perCase);
            if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(perCase) && numPerCase > 0) {
                console.warn("calculateActivityData on service: ", goal, perCase, yearConfig);
                /** @type {?} */
                let days = (StringUtils.isEmpty(activityDays)) ? Number(yearConfig.NowToYearEndDays) : Number(activityDays);
                /** @type {?} */
                let daysInweek = 7;
                /** @type {?} */
                let daysInMonth = 365 / Number(yearConfig.MonthQuantityOfYear);
                /** @type {?} */
                let dayInforce = numGoal / numPerCase / days;
                /** @type {?} */
                let weekInforce = dayInforce * daysInweek;
                /** @type {?} */
                let monthInforce = dayInforce * daysInMonth;
                dayInforce = dayInforce;
                /** @type {?} */
                let tabs = [{ name: TIMEBASE.DAY, inforce: dayInforce }, { name: TIMEBASE.WEEK, inforce: weekInforce }, { name: TIMEBASE.MONTH, inforce: monthInforce }];
                if (this.goalSettingStep) {
                    activityValues = this.goalSettingStep.calculateOtherRuleActivityInforce(tabs, yearConfig);
                }
                /** @type {?} */
                let activity = activityValues[0].TimeBase;
                returnObj.Activity = activity;
                returnObj.ActivityValues = activityValues;
            }
            else {
                /** @type {?} */
                let tabNum = [TIMEBASE.DAY, TIMEBASE.WEEK, TIMEBASE.MONTH];
                returnObj.Activity = TIMEBASE.DAY;
                tabNum.forEach((/**
                 * @param {?} time
                 * @return {?}
                 */
                time => {
                    /** @type {?} */
                    let activity = new ActivityValue(time, this.DASH, this.DASH, this.DASH, this.DASH, this.DASH);
                    activityValues.push(activity);
                }));
                returnObj.ActivityValues = activityValues;
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00401', 'calculateActivityData fail!' + error.message));
        }
        console.log("calculateActivityData return obj: ", JSON.stringify(returnObj));
        return returnObj;
    }
    // step 4 function
    /**
     * @param {?} yearConfig
     * @param {?} goal
     * @param {?} actualList
     * @return {?}
     */
    calculateMonthActualPlan(yearConfig, goal, actualList) {
        //actualList example : [100,100,200,0,100,1]
        console.log("calculateMonthActualPlan goal:", goal);
        /** @type {?} */
        let Step4Datas = new GoalSettingStep4();
        /** @type {?} */
        let MonthActualPlanList = [];
        try {
            if (NumberUtils.isNumber(goal)) {
                if (this.goalSettingStep) {
                    MonthActualPlanList = this.goalSettingStep.calculateMonthActualPlan(yearConfig, Number(goal), actualList);
                }
                /** @type {?} */
                let forecast = this.calculateForecast(yearConfig.PerformanceSettlementMonth, MonthActualPlanList);
                /** @type {?} */
                let shortfall = this.calculateShortfall(goal, forecast);
                /** @type {?} */
                let actual = this.calulateSumByArray(actualList);
                Step4Datas.MonthList = MonthActualPlanList;
                Step4Datas.Forecast = forecast;
                Step4Datas.Shortfall = shortfall;
                Step4Datas.Actual = actual;
            }
            else {
                //全部都dash
                for (let i = 0; i < yearConfig.MonthQuantityOfYear; i++) {
                    /** @type {?} */
                    let data = new MonthlyPlanFYFCData(i, this.DASH, this.DASH);
                    MonthActualPlanList.push(data);
                }
                Step4Datas.Actual = this.DASH;
                Step4Datas.Forecast = this.DASH;
                Step4Datas.Shortfall = this.DASH;
                Step4Datas.MonthList = MonthActualPlanList;
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00402', 'calculateMonthActualPlan fail!' + error.message));
        }
        console.log("calculateMonthActualPlan:", MonthActualPlanList);
        return Step4Datas;
    }
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    calculateActual(PerformanceSettlementMonth, MonthActualPlanList) {
        if (PerformanceSettlementMonth > 0) {
            return MonthActualPlanList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => (Number(x.Actual) < 0 || x.Actual == this.DASH || x.Month > PerformanceSettlementMonth) ? 0 : Number(x.Actual))).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => pre + Number(cur)), 0).toString();
        }
        else {
            return this.DASH;
        }
    }
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    calculateForecast(PerformanceSettlementMonth, MonthActualPlanList) {
        return this.calulateSumByArray(this.getActualPlanFromMonthList(MonthActualPlanList, PerformanceSettlementMonth));
    }
    /**
     * @param {?} monthList
     * @return {?}
     */
    calulateSumByArray(monthList) {
        /** @type {?} */
        let isDash = true;
        monthList.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data != this.DASH) {
                isDash = false;
            }
        }));
        /** @type {?} */
        let returnNum = this.DASH;
        if (!isDash) {
            returnNum = monthList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => (Number(x) < 0 || x == this.DASH || StringUtils.isEmpty(x)) ? 0 : x)).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => pre + Number(cur)), 0).toString();
        }
        return returnNum;
    }
    /**
     * @param {?} goal
     * @param {?} forecast
     * @return {?}
     */
    calculateShortfall(goal, forecast) {
        /** @type {?} */
        let result = this.DASH;
        if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(forecast)) {
            if (this.goalSettingStep) {
                result = this.goalSettingStep.getShortfall(goal, forecast).toString();
            }
            else {
                /** @type {?} */
                let tempresult = (Number(goal) - Number(forecast));
                result = (tempresult < 0) ? "0" : tempresult.toString();
            }
        }
        return result;
    }
    //#endregion  goalStepDatas
    //#region Submit & Approve function
    /**
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    isNeedApprove(SubmitType, DataYear, adjustDatas) {
        return from(this._isNeedApprove(SubmitType, DataYear, adjustDatas));
    }
    /**
     * @private
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    _isNeedApprove(SubmitType, DataYear, adjustDatas) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("_isNeedApprove adjustDatas", adjustDatas, SubmitType, DataYear);
            /** @type {?} */
            let isApproveInfo;
            try {
                if (this.goalSettingStep) {
                    //taiwan
                    /** @type {?} */
                    let originDatas = yield this._getGoalSettingStep1_5Data(DataYear, true);
                    isApproveInfo = this.goalSettingStep.isNeedApprove(adjustDatas, originDatas);
                }
                else {
                    isApproveInfo = new IsApproveInfo(true, false);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00403', 'isNeedApprove fail!' + error.message));
            }
            console.log("isNeedApprove", isApproveInfo);
            return isApproveInfo;
        });
    }
    /**
     * @param {?} FYFC
     * @param {?} Forecast
     * @param {?} GoalAndPlanDifferenceLimit
     * @return {?}
     */
    isNeedApprove_plan(FYFC, Forecast, GoalAndPlanDifferenceLimit) {
        console.log('isNeedApprove_plan FYFC', FYFC, 'Forecast', Forecast, 'GoalAndPlanDifferenceLimit', GoalAndPlanDifferenceLimit);
        /** @type {?} */
        let isApproveInfo;
        try {
            if (this.goalSettingStep) {
                isApproveInfo = this.goalSettingStep.isNeedApprove_plan(Number(FYFC), Number(Forecast), GoalAndPlanDifferenceLimit);
            }
            else {
                isApproveInfo = new IsApproveInfo(true, false);
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00404', 'isNeedApprove_plan fail!' + error.message));
        }
        console.log("isNeedApprove_plan isApproveInfo:", isApproveInfo);
        return of(isApproveInfo);
    }
    /**
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    submitGoal(submitType, IsNeedApprove, submitData) {
        return from(this._submitGoal(submitType, IsNeedApprove, submitData));
    }
    /**
     * @private
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    _submitGoal(submitType, IsNeedApprove, submitData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("[_submitGoal] submitData", submitData);
            /** @type {?} */
            let Activity;
            /** @type {?} */
            let GoalSettingValue = [];
            /** @type {?} */
            let GoalPlan = new SubmitGoalPlan();
            /** @type {?} */
            let SubmitInfo = new SubmitGoalInfo();
            /** @type {?} */
            let SubmitDatas;
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            try {
                if (submitType == SUBMITGOALTYPE.ALL) {
                    /** @type {?} */
                    let GoalSettingType = ["Step1", "Step2", "Step5"];
                    GoalSettingType.forEach((/**
                     * @param {?} step
                     * @return {?}
                     */
                    step => {
                        /** @type {?} */
                        let stepMap = this.StepTextConvertMap.get(step);
                        stepMap.forEach((/**
                         * @param {?} val
                         * @param {?} key
                         * @return {?}
                         */
                        (val, key) => {
                            if (submitData[step][key]) {
                                GoalSettingValue.push(new SubmitGoalSettingValue(val, submitData[step][key], []));
                            }
                        }));
                    }));
                    Activity = submitData.Step3.Activity;
                }
                console.log("GoalSettingValue", GoalSettingValue);
                GoalPlan.TimeBase = TIMEBASE.MONTH;
                GoalPlan.Values = submitData.Step4.MonthList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.Plan != this.DASH)).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    return new SubmitGoalPlanInfo(PERFORMANCETYPE.PERSONAL, x.Month, Number(x.Plan), []);
                }));
                console.log("GoalPlan", GoalPlan);
                SubmitInfo.DataYear = submitData.DataYear;
                SubmitInfo.SubmitType = submitType;
                SubmitInfo.ActivityGoalBase = Activity;
                SubmitInfo.IsNeedApprove = IsNeedApprove ? YESNO.YES : YESNO.NO;
                SubmitInfo.Extensions = [];
                console.log("SubmitInfo", SubmitInfo);
                SubmitDatas = new SubmitGoalData(SubmitInfo, GoalSettingValue, GoalPlan);
                /** @type {?} */
                let Resp = yield this._pushGoalSetting(SubmitDatas);
                if (Resp.isSuccess) {
                    yield this.syncGoalDatas();
                    returnResp.isSuccess = true;
                }
                else {
                    throw "submit goal fail! ";
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00405', 'submitGoal fail!' + error.message));
                returnResp.isSuccess = false;
            }
            console.log("_submitGoal resp2", returnResp);
            return returnResp;
        });
    }
    //#endregion Submit & Approve
    //#region LANDING status
    /**
     * @return {?}
     */
    getIsFirstUse() {
        // get DeviceInfo table
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let DeviceInfo = this.APIFactory.getAPI("getDeviceInfo");
            ((/** @type {?} */ (DeviceInfo))).setDataType("FirstUseAPP");
            try {
                this.dispatcher.dispatch(DeviceInfo).toPromise().then((/**
                 * @param {?} Datas
                 * @return {?}
                 */
                Datas => {
                    console.log("getIsFirstUse", Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.next(Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.complete();
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00408', 'getIsFirstUse fail!' + error.message));
            }
        }));
    }
    // @Valid('GoalSettingGoalStatus')
    /**
     * @return {?}
     */
    getSettingStatus() {
        return from(this._getSettingStatus());
    }
    /**
     * @private
     * @return {?}
     */
    _getSettingStatus() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let GoalSettingResp;
            /** @type {?} */
            let yearConfigResp;
            /** @type {?} */
            let returnDatas = [];
            try {
                /** @type {?} */
                let goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                [GoalSettingResp, yearConfigResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalSetting).toPromise(),
                    this.dispatcher.dispatch(yearConfig).toPromise()
                ]);
                //getGoalSetting
                /** @type {?} */
                let goalSettingMap = new Map();
                /** @type {?} */
                let yearConfigMap = new Map();
                if (GoalSettingResp.Header["status"] && yearConfigResp.Header["status"]) {
                    goalSettingMap = this.yearJsonToMap(GoalSettingResp["Body"]);
                    yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                    returnDatas = [];
                    goalSettingMap.forEach((/**
                     * @param {?} data
                     * @param {?} key
                     * @return {?}
                     */
                    (data, key) => {
                        /** @type {?} */
                        let goalStatus = new GoalSettingGoalStatus();
                        goalStatus.DataYear = key;
                        goalStatus.IsCurrent = yearConfigMap.get(key).IsCurrent;
                        goalStatus.IsNeedSetting = data.IsNeedSetting == YESNO.YES;
                        goalStatus.IsFirstTime = data.IsFirstTime == YESNO.YES;
                        goalStatus.ApproveStatus = data.ApproveStatus;
                        goalStatus.RemainingDays = data.Remainingdays;
                        returnDatas.push(goalStatus);
                    }));
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00409', 'getSettingStatus fail!' + error.message));
            }
            console.log("getSettingStatus returnDatas", returnDatas);
            return returnDatas;
        });
    }
    /**
     * @private
     * @param {?} yearJson
     * @return {?}
     */
    yearJsonToMap(yearJson) {
        console.log("yearJson", yearJson);
        /** @type {?} */
        let map = new Map();
        if (yearJson != null) {
            yearJson.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (data.DataYear != undefined) {
                    map.set(data.DataYear, data);
                }
            }));
        }
        return map;
    }
    //#endregion LANDING status
    //#region GoalSetting overview
    /**
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    getOverviewData(performanceType, DataYear = -1, AgentID = "") {
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getOverviewDataBySQL(performanceType, DataYear));
        }
        else {
            return from(this._getOverviewDataByRestful(performanceType, DataYear, AgentID));
        }
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} year
     * @return {?}
     */
    _getOverviewDataBySQL(performanceType, year = -1) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let goalStepDatas = new GoalSettingStepData(year);
            try {
                goalStepDatas = yield this._getGoalSettingStep1_5Data(year, true);
                console.log("_getOverviewDataBySQL goalStepDatas", JSON.stringify(goalStepDatas));
                if (goalStepDatas != null) {
                    /** @type {?} */
                    let actualPlanData = yield this._getMonthActualPlanBySQL(performanceType, year, goalStepDatas["YearConfig"]["MonthQuantityOfYear"], goalStepDatas["YearConfig"]["PerformanceSettlementMonth"]);
                    if (actualPlanData != null) {
                        goalStepDatas.Step4 = actualPlanData;
                        goalStepDatas.Step4.Shortfall = this.calculateShortfall(goalStepDatas.Step1.FYFC, goalStepDatas.Step4.Forecast).toString();
                    }
                    else {
                        throw "get MonthActualPlan data fail.";
                    }
                    /** @type {?} */
                    let agencyPlanObj = new AgencyPlanDataForOverview();
                    if (performanceType == PERFORMANCETYPE.PERSONAL) {
                        /** @type {?} */
                        let perCase = goalStepDatas.Step2.PerCase ? goalStepDatas.Step2.PerCase : '1';
                        /** @type {?} */
                        let activityGoal = goalStepDatas.Step1.ActivityFYFC ? goalStepDatas.Step1.ActivityFYFC : goalStepDatas.Step1.FYFC;
                        /** @type {?} */
                        let activityDays = goalStepDatas.Step1.ActivityDays ? goalStepDatas.Step1.ActivityDays : goalStepDatas.YearConfig.NowToYearEndDays.toString();
                        goalStepDatas.Step3 = this.calculateActivityData(activityGoal, perCase, goalStepDatas.YearConfig, activityDays);
                    }
                    else if (performanceType == PERFORMANCETYPE.TEAM) {
                        /** @type {?} */
                        let agencyPlanMainInfo = yield this.getAgencyPlanMainData(year).toPromise();
                        if (agencyPlanMainInfo && agencyPlanMainInfo.AgencyMainDataList.length) {
                            /** @type {?} */
                            let agencyPlanMainList = agencyPlanMainInfo.AgencyMainDataList;
                            console.warn("agencyPlanMainList: ", JSON.stringify(agencyPlanMainList));
                            console.log(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast);
                            console.log("agencyPlanObj", agencyPlanObj);
                            agencyPlanObj.FYFCForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast;
                            agencyPlanObj.ANPForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "ANP"))[0].Forecast;
                            agencyPlanObj.ManpowerPlan = this.changeToDash(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Manpower"))[0].MonthPlan);
                            agencyPlanObj.RecruitmentPlan = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Recruitment"))[0].MonthPlan;
                            agencyPlanObj.CompletionRate = agencyPlanMainInfo.CompletionRate;
                        }
                        else {
                            throw "get agencyPlan data fail.";
                        }
                        goalStepDatas.AgencyPlan = agencyPlanObj;
                    }
                }
                else {
                    throw "get 1_5Data Fail. goalStepDatas:" + goalStepDatas;
                }
                goalStepDatas = this._converSelectCode(goalStepDatas);
                if (this.goalSettingStep) {
                    goalStepDatas = this.goalSettingStep.changeEmptyToDash(goalStepDatas);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00504', 'getOverviewDataBySQL fail!' + error));
            }
            console.log("_getOverviewDataBySQL goalStepDatas", goalStepDatas, JSON.stringify(goalStepDatas));
            return goalStepDatas;
        });
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    _getOverviewDataByRestful(performanceType, DataYear = -1, AgentID = "") {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.warn("performanceType: ", performanceType, " DataYear: ", DataYear, " AgentID: ", AgentID);
            /** @type {?} */
            let GetGoalResp;
            /** @type {?} */
            let GetYearConfigResp;
            /** @type {?} */
            let goalSettingObj;
            /** @type {?} */
            let GoalValues;
            /** @type {?} */
            let goalSettingValueObj = {};
            /** @type {?} */
            let YearConfig = new GoalSettingYearConfig();
            /** @type {?} */
            let GoalStatus = new GoalSettingGoalStatus();
            /** @type {?} */
            let Step1 = new GoalSettingStep1();
            /** @type {?} */
            let Step2 = new GoalSettingStep2();
            /** @type {?} */
            let Step3 = new GoalSettingStep3();
            /** @type {?} */
            let Step4 = new GoalSettingStep4();
            /** @type {?} */
            let Step5 = new GoalSettingStep5();
            /** @type {?} */
            let AgencyPlan = new AgencyPlanDataForOverview();
            YearConfig.DataYear = DataYear;
            GoalStatus.DataYear = DataYear;
            /** @type {?} */
            let returnDatas = new GoalSettingStepData(DataYear);
            try {
                /** @type {?} */
                let getGoalapi = this.APIFactory.getAPI("getGoal");
                ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                /** @type {?} */
                let getYearConfigapi = this.APIFactory.getAPI("getYearConfig");
                ((/** @type {?} */ (getYearConfigapi))).setAgentID(AgentID);
                [GetGoalResp, GetYearConfigResp] = yield Promise.all([
                    this.dispatcher.dispatch(getGoalapi).toPromise(),
                    this.dispatcher.dispatch(getYearConfigapi).toPromise()
                ]);
                console.log("_getOverviewDataByRestful GetGoalResp", GetGoalResp);
                console.log("_getOverviewDataByRestful GetYearConfigResp", GetYearConfigResp);
                /** @type {?} */
                let GoalMap = this.yearJsonToMap(GetGoalResp.Goals);
                /** @type {?} */
                let YearConfigMap = this.yearJsonToMap(GetYearConfigResp.Configurations);
                /** @type {?} */
                let GoalObj = GoalMap.get(DataYear);
                /** @type {?} */
                let yearConfigObj = YearConfigMap.get(DataYear);
                if (GoalObj != undefined && yearConfigObj != undefined) {
                    goalSettingObj = GoalMap.get(DataYear).GoalSetting;
                    GoalValues = GoalMap.get(DataYear).GoalValue;
                    console.log("_getOverviewDataByRestful goalSettingObj", goalSettingObj);
                    console.log("_getOverviewDataByRestful GoalValues", GoalValues);
                    GoalValues.forEach((/**
                     * @param {?} GoalValue
                     * @return {?}
                     */
                    GoalValue => {
                        goalSettingValueObj[GoalValue.DataType] = GoalValue.Value;
                    }));
                    /** @type {?} */
                    let monthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                    /** @type {?} */
                    let PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                    Step4 = yield this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID);
                    Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                    /** @type {?} */
                    let allYearActual = this.calculateActual(yearConfigObj.PerformanceSettlementMonth, Step4.MonthList);
                    YearConfig.InforceConvertSubmitRate = yearConfigObj.InforceConvertSubmitRate;
                    YearConfig.InforceConvertMeetRate = yearConfigObj.InforceConvertMeetRate;
                    YearConfig.InforceConvertScheduleRate = yearConfigObj.InforceConvertScheduleRate;
                    YearConfig.InforceConvertFindRate = yearConfigObj.InforceConvertFindRate;
                    YearConfig.NowToYearEndDays = yearConfigObj.NowToYearEndDays;
                    YearConfig.PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                    YearConfig.MonthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                    YearConfig.WorkingMonth = yearConfigObj.WorkingMonth;
                    YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj.GoalAndPlanDifferenceLimit;
                    if (this.yearConfigExtension) {
                        /** @type {?} */
                        let yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "Restful" });
                        YearConfig.setExtension(yearConfigExtData);
                    }
                    GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                    GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                    GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                    GoalStatus.ApproveStatus = goalSettingObj.Status;
                    if (this.goalSettingExtension) {
                        /** @type {?} */
                        let goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "Restful" });
                        GoalStatus.setExtension(goalSettingExtData);
                    }
                    if (performanceType == PERFORMANCETYPE.PERSONAL) {
                        Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                        Step1.Actual = allYearActual;
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, allYearActual);
                        Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let perCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let activityGoal = goalSettingValueObj.ACTIVITY_FYFC ? goalSettingValueObj.ACTIVITY_FYFC : goalSettingValueObj.PERSON_FYFC;
                        /** @type {?} */
                        let activityDays = goalSettingValueObj.ACTIVITY_DAYS ? goalSettingValueObj.ACTIVITY_DAYS : yearConfigObj.NowToYearEndDays;
                        Step3 = this.calculateActivityData(activityGoal, perCase, YearConfig, activityDays);
                        returnDatas.YearConfig = YearConfig;
                        returnDatas.GoalStatus = GoalStatus;
                        returnDatas.Step1 = Step1;
                        returnDatas.Step2 = Step2;
                        returnDatas.Step3 = Step3;
                        returnDatas.Step4 = Step4;
                    }
                    else {
                        Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                        /** @type {?} */
                        let agencyPlanObj = yield this.getAgencyPlanMainDataByRestful(DataYear, AgentID);
                        if (agencyPlanObj != null) {
                            /** @type {?} */
                            let mainDataList = agencyPlanObj.AgencyMainDataList;
                            AgencyPlan.FYFCForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast;
                            AgencyPlan.ANPForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "ANP"))[0].Forecast;
                            AgencyPlan.ManpowerPlan = this.changeToDash(mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Manpower"))[0].MonthPlan);
                            AgencyPlan.RecruitmentPlan = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Recruitment"))[0].MonthPlan;
                            AgencyPlan.CompletionRate = agencyPlanObj.CompletionRate;
                        }
                        else {
                            throw "get agencyPlan fail.";
                        }
                        returnDatas.YearConfig = YearConfig;
                        returnDatas.GoalStatus = GoalStatus;
                        returnDatas.Step4 = Step4;
                        returnDatas.Step5 = Step5;
                        //todo get completionRate 
                        // AgencyPlan.CompletionRate = ? ;
                        returnDatas.AgencyPlan = AgencyPlan;
                    }
                }
                returnDatas = this._converSelectCode(returnDatas);
                if (this.goalSettingStep) {
                    returnDatas = this.goalSettingStep.changeEmptyToDash(returnDatas);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00505', 'getOverviewDataByRestful fail!' + error.message));
            }
            console.log("_getOverviewDataByRestful returnDatas", returnDatas, JSON.parse(JSON.stringify(returnDatas)));
            return returnDatas;
        });
    }
    //#endregion GoalSetting overview
    //#region get month actual & plan
    /**
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?=} monthQuantityOfYear
     * @param {?=} PerformanceSettlementMonth
     * @param {?=} AgentID
     * @return {?}
     */
    getMonthActualPlan(performanceType, DataYear, monthQuantityOfYear = 12, PerformanceSettlementMonth = 99, AgentID = "") {
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth));
        }
        else {
            return from(this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID));
        }
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @param {?} AgentID
     * @return {?}
     */
    _getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // call GetGoalAPI (Restful set AgentID)
            /** @type {?} */
            let GoalResp;
            /** @type {?} */
            let ActualResp;
            /** @type {?} */
            let returnDatas = new GoalSettingStep4();
            /** @type {?} */
            let MonthActualPlanList = [];
            try {
                /** @type {?} */
                let getGoalapi = this.APIFactory.getAPI("getGoal");
                /** @type {?} */
                let getActualapi = this.APIFactory.getAPI("getActual");
                ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                ((/** @type {?} */ (getActualapi))).setAgentID(AgentID);
                [GoalResp, ActualResp] = yield Promise.all([
                    this.dispatcher.dispatch(getGoalapi).toPromise(),
                    this.dispatcher.dispatch(getActualapi).toPromise()
                ]);
                console.log("GoalResp", GoalResp);
                console.log("ActualResp", ActualResp);
                /** @type {?} */
                let GoalPlanMap = new Map();
                /** @type {?} */
                let ActuallMap = new Map();
                /** @type {?} */
                let thisActual = [];
                if (GoalResp.Goals != null && ActualResp.Actual != null) {
                    GoalResp.Goals.forEach((/**
                     * @param {?} Goal
                     * @return {?}
                     */
                    Goal => {
                        if (Goal.DataYear == DataYear && Goal.GoalPlan.Values != null) {
                            Goal.GoalPlan.Values.forEach((/**
                             * @param {?} plan
                             * @return {?}
                             */
                            plan => {
                                if (plan.PerformanceType == performanceType) {
                                    GoalPlanMap.set(plan.Month, plan.Value.toString());
                                }
                            }));
                        }
                    }));
                    thisActual = ActualResp.Actual.filter((/**
                     * @param {?} Actual
                     * @return {?}
                     */
                    Actual => Actual.DataYear == DataYear)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.Values));
                    console.log("thisActual", thisActual);
                    thisActual.forEach((/**
                     * @param {?} Actual
                     * @return {?}
                     */
                    Actual => {
                        Actual.forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        value => {
                            if (value.DataType == "FYFC" && value.PerformanceType == performanceType) {
                                ActuallMap.set(value.Month, value.Value.toString());
                            }
                        }));
                    }));
                }
                else {
                    throw "get Goal fail. GoalResp:" + GoalResp;
                }
                for (let i = 1; i <= monthQuantityOfYear; i++) {
                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, this.changeToDash(GoalPlanMap.get(i)), ActuallMap.get(i) == null || i > PerformanceSettlementMonth ? this.DASH : ActuallMap.get(i)));
                }
                returnDatas.MonthList = MonthActualPlanList;
                returnDatas.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnDatas.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnDatas.Shortfall = null;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00410', 'getMonthActualPlanByRestful fail!' + error.message));
            }
            console.log("_getMonthActualPlanByRestful Datas", returnDatas);
            return returnDatas;
        });
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @return {?}
     */
    _getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('_getMonthActualPlanBySQL performanceType', performanceType, 'DataYear', DataYear, 'monthQuantityOfYear', monthQuantityOfYear, 'PerformanceSettlementMonth', PerformanceSettlementMonth);
            /** @type {?} */
            let returnData = new GoalSettingStep4();
            /** @type {?} */
            let MonthActualPlanList = [];
            try {
                /** @type {?} */
                let actualResp;
                /** @type {?} */
                let goalPlanResp;
                // call GetGoalSettingValue       // call GetActualValue
                /** @type {?} */
                let goalPlanList = Array(monthQuantityOfYear).fill(this.DASH, 0);
                /** @type {?} */
                let actualList = Array(monthQuantityOfYear).fill(this.DASH, 0);
                /** @type {?} */
                let goalPlan = this.APIFactory.getAPI("getGoalSettingPlan");
                /** @type {?} */
                let actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                ((/** @type {?} */ (goalPlan))).setDataYear(DataYear);
                ((/** @type {?} */ (actual))).setDataYear(DataYear);
                [goalPlanResp, actualResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalPlan).toPromise(),
                    this.dispatcher.dispatch(actual).toPromise()
                ]);
                console.log("goalPlanResp", goalPlanResp);
                console.log("actualResp", actualResp);
                if (goalPlanResp.Header["status"] && actualResp.Header["status"]) {
                    goalPlanResp["Body"].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.PerformanceType == performanceType)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        goalPlanList[x.Month - 1] = x.Value.toString();
                    }));
                    actualResp["Body"].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.PerformanceType == performanceType && x.DataType == "FYFC" && x.Month <= PerformanceSettlementMonth)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        actualList[x.Month - 1] = x.Value.toString();
                    }));
                }
                else {
                    throw "get GoalSetting fail. goalPlanResp" + goalPlanResp.Header.msg + 'actualResp:' + actualResp.Header.msg;
                }
                console.log("goalPlanList", goalPlanList);
                console.log("actuallist", actualList);
                for (let i = 1; i <= monthQuantityOfYear; i++) {
                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, goalPlanList[i - 1], actualList[i - 1]));
                }
                returnData.MonthList = MonthActualPlanList;
                returnData.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnData.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnData.Shortfall = null;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00411', 'getMonthActualPlanBySQL fail!' + error.message));
            }
            console.log("_getMonthActualPlanBySQL returnData", returnData);
            return returnData;
        });
    }
    //#endregion get month actual & plan
    //#region AgencyPlan Datas
    /**
     * @param {?} dataYear
     * @param {?=} AgentID
     * @return {?}
     */
    getAgencyPlanMainData(dataYear, AgentID = "") {
        if (AgentID == "") {
            return from(this.getAgencyPlanMainDataBySQL(dataYear));
        }
        else if (AgentID != "") {
            return from(this.getAgencyPlanMainDataByRestful(dataYear, AgentID));
        }
    }
    /**
     * @private
     * @param {?} dataYear
     * @return {?}
     */
    getAgencyPlanMainDataBySQL(dataYear) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('getAgencyPlanMainDataBySQL DataYear', dataYear);
            /** @type {?} */
            let returnData = new AgencyPlanMainInfo();
            /** @type {?} */
            let otherParaResp;
            /** @type {?} */
            let agencyPlanResp;
            try {
                //get completionRate 
                /** @type {?} */
                let getOtherParameterAPI = (/** @type {?} */ (this.APIFactory.getAPI('getOtherParameter')));
                /** @type {?} */
                let agencyPlanGetMainAPI = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlanMain"))));
                getOtherParameterAPI.SetYear(dataYear);
                agencyPlanGetMainAPI.setDataYear(dataYear);
                [otherParaResp, agencyPlanResp] = yield Promise.all([getOtherParameterAPI, agencyPlanGetMainAPI].map((/**
                 * @param {?} api
                 * @return {?}
                 */
                api => this.dispatcher.dispatch(api).toPromise())));
                console.log('otherParaResp: ', otherParaResp, "agencyPlanResp", agencyPlanResp);
                if (otherParaResp.Header["status"] && agencyPlanResp.Header["status"]) {
                    /** @type {?} */
                    let respFilterCompletionRate = otherParaResp['Body'].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.MappingID === "CompletionRate"));
                    /** @type {?} */
                    let completionRate = respFilterCompletionRate.length > 0 ? respFilterCompletionRate[0].SetValue : '';
                    /** @type {?} */
                    let returnList = [];
                    /** @type {?} */
                    let AgencyPlanMainList = agencyPlanResp["Body"];
                    console.log("getAgencyPlanMainDataBySQL AgencyPlanMainList", AgencyPlanMainList);
                    if (AgencyPlanMainList) {
                        returnList = ((/** @type {?} */ (AgencyPlanMainList))).map((/**
                         * @param {?} main
                         * @return {?}
                         */
                        main => this._agencyPlanMainDataObjToBean(main)));
                    }
                    else {
                        throw "get AgencyPlanMainList fail.";
                    }
                    console.log('getAgencyPlanMainDataBySQL returnList:', returnList);
                    console.log('completionRate:', completionRate);
                    returnData.CompletionRate = completionRate;
                    returnData.AgencyMainDataList = returnList;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00300', 'getAgencyPlanMainDataBySQL fail!' + error));
            }
            console.log("getAgencyPlanMainDataBySQL returnData", returnData);
            return returnData;
        });
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanMainDataObjToBean(object) {
        /** @type {?} */
        let agencyPlanMainData = new AgencyPlanMainData();
        agencyPlanMainData.Actual = object.Actual;
        agencyPlanMainData.DataType = object.DataType;
        agencyPlanMainData.DataYear = object.DataYear;
        agencyPlanMainData.Forecast = object.Forecast;
        agencyPlanMainData.MonthPlan = this.changeToDash(object.MonthPlan);
        return agencyPlanMainData;
    }
    /**
     * @private
     * @param {?} dataYear
     * @param {?} AgentID
     * @return {?}
     */
    getAgencyPlanMainDataByRestful(dataYear, AgentID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('getAgencyPlanMainDataByRestful dataYear', dataYear, 'AgentID', AgentID);
            /** @type {?} */
            let returnData = new AgencyPlanMainInfo();
            /** @type {?} */
            let MainList = [];
            try {
                /** @type {?} */
                let getAgencyPlanAPI = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlan"))));
                getAgencyPlanAPI.setAgentID(AgentID);
                /** @type {?} */
                let agencyPlanResp = yield this.dispatcher.dispatch(getAgencyPlanAPI).toPromise();
                console.log("getAgencyPlanMainDataByRestful agencyPlanResp ", agencyPlanResp);
                if (agencyPlanResp.AgencyPlans != null) {
                    /** @type {?} */
                    let agencyPlanMap = this.yearJsonToMap(agencyPlanResp.AgencyPlans);
                    /** @type {?} */
                    let completionRate = agencyPlanMap.get(dataYear).CompletionRate;
                    /** @type {?} */
                    let tempAgencyPlanList = agencyPlanMap.get(dataYear).Values;
                    ((/** @type {?} */ (tempAgencyPlanList))).forEach((/**
                     * @param {?} plan
                     * @return {?}
                     */
                    plan => {
                        plan['MonthPlan'] = plan['Plan'];
                        plan['DataYear'] = dataYear;
                    }));
                    MainList = ((/** @type {?} */ (tempAgencyPlanList))).map((/**
                     * @param {?} plan
                     * @return {?}
                     */
                    plan => this._agencyPlanMainDataObjToBean(plan)));
                    returnData.AgencyMainDataList = MainList;
                    returnData.CompletionRate = completionRate;
                }
                else {
                    throw "get AgencyPlan fail. agencyPlanResp:" + agencyPlanResp;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00301', 'getAgencyPlanMainDataByRestful fail!' + error.message));
            }
            console.log("getAgencyPlanMainDataByRestful returnData ", returnData);
            return returnData;
        });
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    getAgencyPlanDetailData(dataYear) {
        /** @type {?} */
        let agencyPlanGetDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI("getAgencyPlanDetail")));
        agencyPlanGetDetailAPI.setDataYear(dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            try {
                this.dispatcher.dispatch(agencyPlanGetDetailAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    if (resp["Body"]) {
                        /** @type {?} */
                        let returnList = [];
                        // let AgencyPlanDetailList: Array<AgencyPlanDetail> = resp["Body"];
                        returnList = ((/** @type {?} */ (resp["Body"]))).map((/**
                         * @param {?} item
                         * @return {?}
                         */
                        item => this._agencyPlanDetailObjToBean(item)));
                        console.log("returnList in service: ", returnList);
                        observer.next(returnList);
                        observer.complete();
                    }
                    else {
                        throw "get agencyPlanGetDetail fail. resp:" + resp;
                    }
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00302', 'getAgencyPlanDetailData fail!' + error.message));
            }
        }));
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanDetailObjToBean(object) {
        /** @type {?} */
        let agencyPlanDetail = new AgencyPlanDetail();
        agencyPlanDetail.AgentID = object.AgentID;
        agencyPlanDetail.AgentName = object.AgentName;
        agencyPlanDetail.DataYear = object.DataYear;
        agencyPlanDetail.AppUseMode = object.AppUseMode;
        agencyPlanDetail.JobGrade = object.JobGrade;
        agencyPlanDetail.Actual = this.changeToDash(object.Actual);
        agencyPlanDetail.CaseCount = this.changeToDash(object.CaseCount);
        agencyPlanDetail.ClientID = object.ClientID;
        agencyPlanDetail.DataType = object.DataType;
        agencyPlanDetail.DirectUnitType = object.DirectUnitType;
        agencyPlanDetail.Drilldown = object.Drilldown;
        agencyPlanDetail.TextColor = agencyPlanDetail.Drilldown == 'Y' ? 'blue' : 'default';
        agencyPlanDetail.Forecast = this.changeToDash(object.Forecast);
        agencyPlanDetail.Goal = this.changeToDash(object.Goal);
        agencyPlanDetail.IsApprove = object.IsApprove;
        agencyPlanDetail.IsHasDot = agencyPlanDetail.IsApprove === 'Y';
        agencyPlanDetail.Manpower = object.Manpower;
        agencyPlanDetail.MonthPlan = this.changeToDash(object.MonthPlan);
        agencyPlanDetail.Orders = object.Orders;
        agencyPlanDetail.PerCase = this.changeToDash(object.PerCase);
        agencyPlanDetail.Recruitment = object.Recruitment;
        return agencyPlanDetail;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    getGoalExpected(dataYear) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnAgencyPlanGoalExpected;
            /** @type {?} */
            let goalSettingYearConfigAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingYearConfig")));
            goalSettingYearConfigAPI.setDataYear(dataYear);
            /** @type {?} */
            let goalSettingGetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingExpected")));
            goalSettingGetExpectedAPI.setDataYear(dataYear);
            try {
                /** @type {?} */
                let yearConfigResp;
                /** @type {?} */
                let goalExpectedResp;
                [yearConfigResp, goalExpectedResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalSettingYearConfigAPI).toPromise(),
                    this.dispatcher.dispatch(goalSettingGetExpectedAPI).toPromise()
                ]);
                if (goalExpectedResp && yearConfigResp) {
                    /** @type {?} */
                    let expectedRespBody = goalExpectedResp["Body"];
                    /** @type {?} */
                    let yearConfigRespBody = yearConfigResp["Body"];
                    returnAgencyPlanGoalExpected = expectedRespBody.length > 0 ? this._agencyPlanGoalExpectedObjToBean(expectedRespBody[0]) : new AgencyPlanGoalExpected(dataYear);
                    returnAgencyPlanGoalExpected.FYFCConvertANPRate = yearConfigRespBody[0]['FyfcCovertAnpRate'];
                    returnAgencyPlanGoalExpected.WorkingQuarter = yearConfigRespBody[0]['WorkingQuarter'];
                    console.log("getGoalExpected trans", returnAgencyPlanGoalExpected);
                }
                else {
                    throw "get goal expected and yearConfigfail.";
                }
                return returnAgencyPlanGoalExpected;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00303', 'getGoalExpected fail!' + error.message));
            }
        });
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanGoalExpectedObjToBean(object) {
        /** @type {?} */
        let goalExpected = new AgencyPlanGoalExpected(object.DataYear);
        goalExpected.ANP = object.ANP.toString();
        goalExpected.FYFC = object.FYFC.toString();
        goalExpected.Q1 = object.Q1.toString();
        goalExpected.Q2 = object.Q2.toString();
        goalExpected.Q3 = object.Q3.toString();
        goalExpected.Q4 = object.Q4.toString();
        /** @type {?} */
        let numberRecruitmentTotal = NumberUtils.isNumber(object.RecruitmentTotal) ? Number(object.RecruitmentTotal) : 0;
        goalExpected.RecruitmentTotal = numberRecruitmentTotal;
        return goalExpected;
    }
    /**
     * @param {?} goalExpected
     * @return {?}
     */
    calculaRecruitmentSum(goalExpected) {
        return [goalExpected.Q1, goalExpected.Q2, goalExpected.Q3, goalExpected.Q4].reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        (total, each) => {
            /** @type {?} */
            let numberQ = NumberUtils.isNumber(each) ? Number(each) : 0;
            return total + numberQ;
        }), 0);
    }
    /**
     * @param {?} expectedRecruitment
     * @param {?} indirectRecruitment
     * @return {?}
     */
    saveGoalExpected(expectedRecruitment, indirectRecruitment) {
        /** @type {?} */
        let goalSettingSetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("setGoalSettingExpected")));
        goalSettingSetExpectedAPI.setExpectedRecruitment(expectedRecruitment);
        goalSettingSetExpectedAPI.setIndirectRecruitment(indirectRecruitment);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            try {
                this.dispatcher.dispatch(goalSettingSetExpectedAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    observer.next(resp["Header"]);
                    observer.complete();
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00304', 'saveGoalExpected fail!' + error.message));
            }
        }));
    }
    //#endregion AgencyPlan Datas
    //#region other function
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    numberToFix(n, toFix) {
        /** @type {?} */
        let fix10 = Math.pow(10, toFix);
        /** @type {?} */
        let returnData = Math.round(this.strip(n) * fix10) / fix10;
        return returnData;
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    strip(num, precision = 12) {
        return Number(num.toPrecision(precision));
    }
    /**
     * @param {?} FYFC
     * @param {?} actual
     * @return {?}
     */
    calculateNowToYearEndGoal(FYFC, actual) {
        console.log("calculateNowToYearEndGoal FYFC:", FYFC, "actual:", actual);
        /** @type {?} */
        let caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(FYFC)) {
            return this.DASH;
        }
        else {
            /** @type {?} */
            let result = Number(FYFC) - caculeteActual < 0 ? 0 : Number(FYFC) - caculeteActual;
            return result.toString();
        }
    }
    /**
     * @param {?} NowToYearEnd
     * @param {?} actual
     * @return {?}
     */
    calculateAllYearGoal(NowToYearEnd, actual) {
        console.log("calculateNowToYearEndGoal NowToYearEnd:", NowToYearEnd, "actual:", actual);
        /** @type {?} */
        let caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(NowToYearEnd)) {
            return this.DASH;
        }
        else {
            return (Number(NowToYearEnd) + caculeteActual).toString();
        }
    }
    /**
     * @return {?}
     */
    get saveFeedbackState() {
        return this._isPopup;
    }
    /**
     * @param {?} isPopup
     * @return {?}
     */
    set saveFeedbackState(isPopup) {
        this._isPopup = isPopup;
    }
    /**
     * @param {?} list
     * @param {?} actualMonth
     * @return {?}
     */
    getActualPlanFromMonthList(list, actualMonth) {
        console.log("getActualPlanFromMonthList:", list, actualMonth);
        return list.map((/**
         * @param {?} x
         * @param {?} index
         * @return {?}
         */
        (x, index) => (index + 1 < actualMonth || index + 1 === actualMonth ? x.Actual : x.Plan)));
    }
    /**
     * @param {?} FYFC
     * @param {?} rate
     * @return {?}
     */
    calculateANPFromFYFC(FYFC, rate) {
        if (StringUtils.isEmpty(FYFC) || FYFC == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(FYFC) * Number(rate), 0).toString();
        }
    }
    /**
     * @param {?} ANP
     * @param {?} rate
     * @return {?}
     */
    calculateFYFCFromANP(ANP, rate) {
        if (StringUtils.isEmpty(ANP) || ANP == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(ANP) / Number(rate), 0).toString();
        }
    }
    //#endregion other function
    //#region Sync Datas 
    /**
     * @return {?}
     */
    syncGoalDatas() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.goalStore.setSyncGoalDatas(SYNC_STATUS.SYNC);
            yield this.dataSyncService.syncFunc(["GOAL", "PROGRESS"], true);
            this.goalStore.setSyncGoalDatas(SYNC_STATUS.FINISH);
        });
    }
    /**
     * @return {?}
     */
    syncAgencyPlan() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.dataSyncService.syncFunc(["AGENCY_PLAN"], true);
        });
    }
    /**
     * @return {?}
     */
    syncYearConfig() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.dataSyncService.syncFunc(["YEAR_CONFIG"], true);
        });
    }
    /**
     * @param {?} approveInfo
     * @return {?}
     */
    pushApproveGoal(approveInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._pushApproveGoal(approveInfo);
        });
    }
    /**
     * @param {?} param
     * @return {?}
     */
    changeToDash(param) {
        return (param === -1 || param === null || param === "") ? this.DASH : param.toString();
    }
    //#endregion Sync Datas 
    /**
     * @private
     * @param {?} approveInfo
     * @return {?}
     */
    _pushApproveGoal(approveInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            /** @type {?} */
            let approveInfoData = {
                "AgentID": approveInfo.AgentID,
                "DataYear": approveInfo.DataYear,
                "isApprove": approveInfo.IsApprove,
                "comment": approveInfo.Comment
            };
            try {
                /** @type {?} */
                let mainData = approveInfoData;
                /** @type {?} */
                let pushApproveData = this.APIFactory.getAPI("pushApproveGoal");
                ((/** @type {?} */ (pushApproveData))).mainData = mainData;
                console.log('pushApproveGoal mainData', mainData);
                /** @type {?} */
                let getResp = yield this.dispatcher.dispatch(pushApproveData).toPromise();
                console.log('getResp', getResp);
                if (getResp.success) {
                    yield this.dataSyncService.syncFunc(["DASHBOARD", "GOAL", "PROGRESS"]);
                    returnResp.isSuccess = true;
                }
                else {
                    throw "Approve Goal fail.";
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00100', 'pushApproveGoal fail!' + error.message));
            }
            console.log("[_pushApproveGoal] returnResp:", returnResp);
            return returnResp;
        });
    }
    /**
     * @private
     * @param {?} submitDatas
     * @return {?}
     */
    _pushGoalSetting(submitDatas) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            try {
                console.log('pushGoalSettingDataAPI mainData', submitDatas);
                /** @type {?} */
                let pushGoalSettingData = this.APIFactory.getAPI("pushGoalSettingData");
                ((/** @type {?} */ (pushGoalSettingData))).mainData = submitDatas;
                /** @type {?} */
                let getResp = yield this.dispatcher.dispatch(pushGoalSettingData).toPromise();
                if (getResp.success) {
                    returnResp.isSuccess = true;
                }
                else {
                    throw "push Goal failed," + getResp.Header.msg;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00101', error));
            }
            return returnResp;
        });
    }
    /**
     * @private
     * @param {?} StepData
     * @return {?}
     */
    _converSelectCode(StepData) {
        this.ColMapToProfile.forEach((/**
         * @param {?} code
         * @param {?} col
         * @return {?}
         */
        (code, col) => {
            /** @type {?} */
            let profileCodes = this.ColMapToProfileCodeMap.get(col);
            if (profileCodes.length && StepData.Step1 && StepData.Step1[col]) {
                /** @type {?} */
                let colVal = StepData.Step1[col];
                profileCodes = profileCodes.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.getCode() == colVal));
                StepData.Step1[col] = profileCodes.length ? profileCodes[0].getMappingID() : this.DASH;
            }
        }));
        return StepData;
    }
}
GoalSettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
GoalSettingService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: GoalStoreService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [yearConfigExtensionDataToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingExtensionDataToken,] }] },
    { type: DataSyncService },
    { type: ProfileCodeService }
];
/** @nocollapse */ GoalSettingService.ngInjectableDef = i0.defineInjectable({ factory: function GoalSettingService_Factory() { return new GoalSettingService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i2.GoalStoreService), i0.inject(i0.ErrorHandler), i0.inject(i3.goalSettingStepToken, 8), i0.inject(i1.yearConfigExtensionDataToken, 8), i0.inject(i1.goalSettingExtensionDataToken, 8), i0.inject(i1.DataSyncService), i0.inject(i1.ProfileCodeService)); }, token: GoalSettingService, providedIn: "root" });
tslib_1.__decorate([
    Valid('GoalSettingStepData'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Boolean]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getGoalSettingStep1_5Data", null);
tslib_1.__decorate([
    Valid('GoalSettingStep3'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, GoalSettingYearConfig, String]),
    tslib_1.__metadata("design:returntype", GoalSettingStep3)
], GoalSettingService.prototype, "calculateActivityData", null);
tslib_1.__decorate([
    Valid('GoalSettingStep4'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GoalSettingYearConfig, String, Array]),
    tslib_1.__metadata("design:returntype", GoalSettingStep4)
], GoalSettingService.prototype, "calculateMonthActualPlan", null);
tslib_1.__decorate([
    Valid('IsApproveInfo'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, GoalSettingStepData]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "isNeedApprove", null);
tslib_1.__decorate([
    Valid('IsApproveInfo'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "isNeedApprove_plan", null);
tslib_1.__decorate([
    Valid('SuccessStatus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Boolean, GoalSettingStepData]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "submitGoal", null);
tslib_1.__decorate([
    Valid('GoalSettingStepData'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, String]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getOverviewData", null);
tslib_1.__decorate([
    Valid('GoalSettingStep4'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Number, Number, String]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getMonthActualPlan", null);
tslib_1.__decorate([
    Valid('AgencyPlanDetail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getAgencyPlanDetailData", null);
tslib_1.__decorate([
    Valid('AgencyPlanGoalExpected'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GoalSettingService.prototype, "getGoalExpected", null);
tslib_1.__decorate([
    Valid('SuccessStatus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ApproveInfo]),
    tslib_1.__metadata("design:returntype", Promise)
], GoalSettingService.prototype, "pushApproveGoal", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.TextConvertStep1Map;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.TextConvertStep2Map;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.TextConvertStep5Map;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.StepTextConvertMap;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.ColMapToProfile;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.ColMapToProfileCodeMap;
    /** @type {?} */
    GoalSettingService.prototype.DASH;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype._isPopup;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.goalStore;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.goalSettingStep;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.yearConfigExtension;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.goalSettingExtension;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.dataSyncService;
    /**
     * @type {?}
     * @private
     */
    GoalSettingService.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC1zZXR0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZ29hbC1zZXR0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBc0IsV0FBVyxFQUFnRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQW9CLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUIsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQTRDLGtCQUFrQixFQUFlLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9nQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBTWhFLE1BQU07Ozs7Ozs7Ozs7OztJQVdKLFlBQ1UsVUFBdUIsRUFDdkIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsWUFBMEIsRUFHMUIsZUFBZ0MsRUFHaEMsbUJBQXFDLEVBR3JDLG9CQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxrQkFBc0M7UUFkdEMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUdoQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWtCO1FBR3JDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBa0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF6QnhDLHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hELHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hELHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hELHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBRTVELG9CQUFlLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2pFLDJCQUFzQixHQUFvQyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztRQUV4RixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBa3BDcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQS9uQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7OztJQVFNLHlCQUF5QixDQUFDLElBQVksRUFBRSxRQUFpQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7OztJQUVhLDBCQUEwQixDQUFDLElBQVksRUFBRSxRQUFpQjs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztnQkFFN0UsVUFBVSxHQUF3QixJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUNuRSxJQUFJOztvQkFDRSxjQUFtQjs7b0JBQ25CLGVBQW9COztvQkFDcEIsb0JBQXlCOztvQkFDekIsVUFBZTs7b0JBRWYsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDOztvQkFDL0QsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDOztvQkFDakUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUM7O29CQUNoRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7Z0JBRWhFLENBQUMsbUJBQXdCLGdCQUFnQixFQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELENBQUMsbUJBQXlCLE1BQU0sRUFBQSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVwRCxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUN0RixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRTtpQkFDN0MsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLHVCQUF1QjtnQkFHdkIsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt1QkFDOUIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7dUJBQ2hDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7dUJBQ3JDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7O3dCQUU1QixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7O3dCQUMxRCxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7O3dCQUU1RCxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O3dCQUN2QyxjQUFjLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUU5QyxJQUFJLGFBQWEsSUFBSSxTQUFTLElBQUksY0FBYyxJQUFJLFNBQVMsRUFBRTs7OzRCQUd6RCxtQkFBbUIsR0FBUSxFQUFFO3dCQUNqQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O3dCQUFDLElBQUksQ0FBQyxFQUFFOzRCQUMxQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDbEQsQ0FBQyxFQUFDLENBQUM7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOzs7NEJBR3BELGNBQWMsR0FBRyxDQUFDLENBQUM7OzRCQUNuQixhQUFhLEdBQUcsQ0FBQyxDQUFDOzs0QkFDbEIsYUFBYSxHQUFHLENBQUMsQ0FBQzs7NEJBQ2xCLFdBQVcsR0FBRyxhQUFhLENBQUMsbUJBQW1COzs0QkFDL0MsVUFBVSxHQUFrQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs0QkFFakUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7OzRCQUMvQixXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU07Ozs7d0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUM7d0JBQ3JJLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQzFCLGFBQWEsR0FBRyxDQUFDLENBQUM7NEJBQ2xCLFdBQVcsQ0FBQyxPQUFPOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUN0QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDLDBCQUEwQixFQUFFO29DQUN2RCxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29DQUNsQyxhQUFhLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztpQ0FDMUI7NEJBQ0gsQ0FBQyxFQUFDLENBQUM7eUJBQ0o7OzRCQUVHLGVBQWUsR0FBRyxVQUFVLENBQUMsTUFBTTs7Ozt3QkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBQzt3QkFDckksSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFOzRCQUMxQixjQUFjLEdBQUcsQ0FBQyxDQUFDOzRCQUNuQixhQUFhLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQixlQUFlLENBQUMsT0FBTzs7Ozs0QkFBQyxDQUFDLENBQUMsRUFBRTtnQ0FDMUIsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4RixDQUFDLEVBQUMsQ0FBQzs0QkFDSCxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUN2Rjt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzs7NEJBRWxDLFVBQVUsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRTs7NEJBQy9ELFVBQVUsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRTs7NEJBQy9ELEtBQUssR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7NEJBQ2hELEtBQUssR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7NEJBQ2hELEtBQUssR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7NEJBQ2hELEtBQUssR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7NEJBQ2hELEtBQUssR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTt3QkFFcEQsVUFBVSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO3dCQUM3QyxVQUFVLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7d0JBQy9DLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7d0JBQy9ELFVBQVUsQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQzt3QkFDM0QsVUFBVSxDQUFDLDJCQUEyQixHQUFHLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQzt3QkFDbkYsVUFBVSxDQUFDLDBCQUEwQixHQUFHLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQzt3QkFDakYsVUFBVSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDL0QsVUFBVSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDN0UsVUFBVSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDekUsVUFBVSxDQUFDLDBCQUEwQixHQUFHLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQzt3QkFDakYsVUFBVSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDekUsVUFBVSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDN0QsVUFBVSxDQUFDLDBCQUEwQixHQUFHLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQzt3QkFDakYsVUFBVSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbkUsVUFBVSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO3dCQUNyRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTs7Z0NBQ3hCLGlCQUFpQixHQUFrQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzRCQUNsSCxVQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7eUJBQzVDO3dCQUVELFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixVQUFVLENBQUMseUJBQXlCLEdBQUcsY0FBYyxDQUFDLHlCQUF5QixDQUFDO3dCQUNoRixVQUFVLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxDQUFDLG9CQUFvQixDQUFDO3dCQUN0RSxVQUFVLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUM7d0JBQ3RELFVBQVUsQ0FBQyxhQUFhLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQzt3QkFDeEQsVUFBVSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQzt3QkFDM0QsVUFBVSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQzt3QkFDL0QsVUFBVSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7O2dDQUN6QixrQkFBa0IsR0FBa0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs0QkFDckgsVUFBVSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUM3Qzt3QkFFRCxLQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLFdBQVcsQ0FBQzt3QkFDN0MsS0FBSyxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDO3dCQUMvRCxLQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7d0JBQ3pELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDaEQsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2RyxLQUFLLENBQUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQzt3QkFDdkQsS0FBSyxDQUFDLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7d0JBRXZELEtBQUssQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDOzs0QkFFOUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDakUsS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFFNUUsSUFBSSxRQUFRLEVBQUU7NEJBQ1osS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs0QkFDbkosS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3ZFOzZCQUFNOzRCQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7NEJBQzFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN2RTt3QkFFRCxLQUFLLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQzt3QkFDL0MsS0FBSyxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDO3dCQUNuRCxLQUFLLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO3dCQUN6RCxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ3pELEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDdkQsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNqSCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFFaEgsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7d0JBQ25DLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO3dCQUNuQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQ3pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3dCQUN6QixVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQ3pCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO3FCQUNwQztpQkFDRjthQUVGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLGlDQUFpQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzFHO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNoRSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO0tBQUE7Ozs7Ozs7O0lBR00scUJBQXFCLENBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxVQUFpQyxFQUFFLGVBQXVCLEVBQUU7UUFDdEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQzs7WUFFM0UsU0FBUyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUNwRCxjQUFjLEdBQXlCLEVBQUU7UUFDN0MsSUFBSTs7Z0JBRUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7O2dCQUN0QixVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRixPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7O29CQUMxRSxJQUFJLEdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7b0JBRS9HLFVBQVUsR0FBVyxDQUFDOztvQkFDdEIsV0FBVyxHQUFXLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOztvQkFFbEUsVUFBVSxHQUFXLE9BQU8sR0FBRyxVQUFVLEdBQUcsSUFBSTs7b0JBQ2hELFdBQVcsR0FBVyxVQUFVLEdBQUcsVUFBVTs7b0JBQzdDLFlBQVksR0FBVyxVQUFVLEdBQUcsV0FBVztnQkFDbkQsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7b0JBRXBCLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUV4SixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDM0Y7O29CQUVHLFFBQVEsR0FBYSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFFbkQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2FBRTNDO2lCQUFNOztvQkFDRCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDMUQsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsT0FBTzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRTs7d0JBQ2hCLFFBQVEsR0FBa0IsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDNUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsU0FBUyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7YUFDM0M7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLDZCQUE2QixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3RHO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7SUFJTSx3QkFBd0IsQ0FBQyxVQUFpQyxFQUFFLElBQVksRUFBRSxVQUF5QjtRQUV4Ryw0Q0FBNEM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDaEQsVUFBVSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUNyRCxtQkFBbUIsR0FBK0IsRUFBRTtRQUN4RCxJQUFJO1lBQ0YsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDM0c7O29CQUNHLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLG1CQUFtQixDQUFDOztvQkFDN0YsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDOztvQkFDbkQsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hELFVBQVUsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzNDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUMvQixVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsU0FBUztnQkFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFOzt3QkFDbkQsSUFBSSxHQUF3QixJQUFJLG1CQUFtQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2hGLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM5QixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakMsVUFBVSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQzthQUM1QztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDekc7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFOUQsT0FBTyxVQUFVLENBQUM7SUFFcEIsQ0FBQzs7Ozs7O0lBQ00sZUFBZSxDQUFDLDBCQUFrQyxFQUFFLG1CQUErQztRQUN4RyxJQUFJLDBCQUEwQixHQUFHLENBQUMsRUFBRTtZQUNsQyxPQUFPLG1CQUFtQixDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsTUFBTTs7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM007YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7OztJQUNNLGlCQUFpQixDQUFDLDBCQUFrQyxFQUFFLG1CQUErQztRQUMxRyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsU0FBcUI7O1lBQ3pDLE1BQU0sR0FBRyxJQUFJO1FBQ2pCLFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUFDOztZQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNKO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLFFBQVE7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkU7aUJBQU07O29CQUNELFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekQ7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7OztJQU9NLGFBQWEsQ0FBQyxVQUEwQixFQUFFLFFBQWdCLEVBQUUsV0FBZ0M7UUFDakcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7Ozs7SUFFYSxjQUFjLENBQUMsVUFBMEIsRUFBRSxRQUFnQixFQUFFLFdBQWdDOztZQUN6RyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7O2dCQUV6RSxhQUE0QjtZQUNoQyxJQUFJO2dCQUNGLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTs7O3dCQUVwQixXQUFXLEdBQXdCLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7b0JBQzVGLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQzlFO3FCQUFNO29CQUNMLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2hEO2FBRUY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDOUY7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM1QyxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDO0tBQUE7Ozs7Ozs7SUFHTSxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSwwQkFBa0M7UUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFBOztZQUV4SCxhQUE0QjtRQUVoQyxJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLDBCQUEwQixDQUFDLENBQUM7YUFDckg7aUJBQU07Z0JBQ0wsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbkc7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFHTSxVQUFVLENBQUMsVUFBMEIsRUFBRSxhQUFzQixFQUFFLFVBQStCO1FBQ25HLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7O0lBRWEsV0FBVyxDQUFDLFVBQTBCLEVBQUUsYUFBc0IsRUFBRSxVQUErQjs7WUFDM0csT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsQ0FBQzs7Z0JBRWhELFFBQWtCOztnQkFDbEIsZ0JBQWdCLEdBQWtDLEVBQUU7O2dCQUNwRCxRQUFRLEdBQW1CLElBQUksY0FBYyxFQUFFOztnQkFDL0MsVUFBVSxHQUFtQixJQUFJLGNBQWMsRUFBRTs7Z0JBQ2pELFdBQTJCOztnQkFDM0IsVUFBVSxHQUFrQixJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDeEQsSUFBSTtnQkFDRixJQUFJLFVBQVUsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFOzt3QkFDaEMsZUFBZSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBRWpELGVBQWUsQ0FBQyxPQUFPOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFOzs0QkFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUMvQyxPQUFPLENBQUMsT0FBTzs7Ozs7d0JBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7NEJBQzNCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dDQUN6QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQ25GO3dCQUNILENBQUMsRUFBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO29CQUNILFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDdEM7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNsRCxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BGLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkYsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWxDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDMUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQ25DLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNoRSxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRXRDLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7O29CQUNyRSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUMzQixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDN0I7cUJBQU07b0JBQ0wsTUFBTSxvQkFBb0IsQ0FBQztpQkFDNUI7YUFFRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDOUI7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7S0FBQTs7Ozs7O0lBS00sYUFBYTtRQUNsQix1QkFBdUI7UUFFdkIsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFOztnQkFDOUIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN4RCxDQUFDLG1CQUFrQixVQUFVLEVBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxRCxJQUFJO2dCQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNoRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDOUY7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBSU0sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFYSxpQkFBaUI7OztnQkFDekIsZUFBb0I7O2dCQUNwQixjQUFtQjs7Z0JBQ25CLFdBQVcsR0FBaUMsRUFBRTtZQUVsRCxJQUFJOztvQkFFRSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUM7O29CQUNqRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7Z0JBRW5FLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUU7aUJBQ2pELENBQUMsQ0FBQzs7O29CQUdDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBZTs7b0JBQ3ZDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBZTtnQkFDMUMsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3ZFLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFFM0QsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsY0FBYyxDQUFDLE9BQU87Ozs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFOzs0QkFDL0IsVUFBVSxHQUFHLElBQUkscUJBQXFCLEVBQUU7d0JBQzVDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3dCQUMxQixVQUFVLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUN4RCxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFDM0QsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQ3ZELFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDOUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUM5QyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMvQixDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUM5QixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWU7UUFDaEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUU7b0JBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7Ozs7SUFPTSxlQUFlLENBQUMsZUFBZ0MsRUFBRSxXQUFtQixDQUFDLENBQUMsRUFBRSxVQUFrQixFQUFFO1FBQ2xHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDOzs7Ozs7O0lBRWEscUJBQXFCLENBQUMsZUFBZ0MsRUFBRSxPQUFlLENBQUMsQ0FBQzs7O2dCQUVqRixhQUFhLEdBQXdCLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQ3RFLElBQUk7Z0JBQ0YsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTs7d0JBQ3JCLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO29CQUM5TCxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUU7d0JBQzFCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO3dCQUNyQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDNUg7eUJBQU07d0JBQ0wsTUFBTSxnQ0FBZ0MsQ0FBQztxQkFDeEM7O3dCQUNHLGFBQWEsR0FBOEIsSUFBSSx5QkFBeUIsRUFBRTtvQkFDOUUsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTs7NEJBQzNDLE9BQU8sR0FBVyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7OzRCQUNqRixZQUFZLEdBQVcsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUk7OzRCQUNySCxZQUFZLEdBQVcsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTt3QkFDckosYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO3FCQUNqSDt5QkFBTSxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFOzs0QkFDOUMsa0JBQWtCLEdBQXVCLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTt3QkFFL0YsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7O2dDQUNsRSxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxrQkFBa0I7NEJBQzlELE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7NEJBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsTUFBTTs7Ozs0QkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBRTlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUM1QyxhQUFhLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDLE1BQU07Ozs7NEJBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs0QkFDOUYsYUFBYSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7NEJBQzVGLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDdEgsYUFBYSxDQUFDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQ3pHLGFBQWEsQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO3lCQUNsRTs2QkFBTTs0QkFDTCxNQUFNLDJCQUEyQixDQUFDO3lCQUNuQzt3QkFDRCxhQUFhLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztxQkFDMUM7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxrQ0FBa0MsR0FBRyxhQUFhLENBQUE7aUJBQ3pEO2dCQUVELGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3RELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3ZFO2FBRUY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM3RjtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqRyxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDO0tBQUE7Ozs7Ozs7O0lBRWEseUJBQXlCLENBQUMsZUFBZ0MsRUFBRSxXQUFtQixDQUFDLENBQUMsRUFBRSxVQUFrQixFQUFFOztZQUVuSCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzs7Z0JBRS9GLFdBQWdCOztnQkFDaEIsaUJBQXNCOztnQkFFdEIsY0FBbUI7O2dCQUNuQixVQUFlOztnQkFDZixtQkFBbUIsR0FBUSxFQUFFOztnQkFFN0IsVUFBVSxHQUEwQixJQUFJLHFCQUFxQixFQUFFOztnQkFDL0QsVUFBVSxHQUEwQixJQUFJLHFCQUFxQixFQUFFOztnQkFDL0QsS0FBSyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztnQkFDaEQsS0FBSyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztnQkFDaEQsS0FBSyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztnQkFDaEQsS0FBSyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztnQkFDaEQsS0FBSyxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztnQkFDaEQsVUFBVSxHQUE4QixJQUFJLHlCQUF5QixFQUFFO1lBRTNFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztnQkFDM0IsV0FBVyxHQUF3QixJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztZQUV4RSxJQUFJOztvQkFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNsRCxDQUFDLG1CQUFZLFVBQVUsRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztvQkFDekMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUM5RCxDQUFDLG1CQUFrQixnQkFBZ0IsRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV6RCxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRTtpQkFDdkQsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7b0JBRTFFLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O29CQUMvQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7O29CQUVwRSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7O29CQUMvQixhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLElBQUksT0FBTyxJQUFJLFNBQVMsSUFBSSxhQUFhLElBQUksU0FBUyxFQUFFO29CQUN0RCxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUM7b0JBQ25ELFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFFaEUsVUFBVSxDQUFDLE9BQU87Ozs7b0JBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQzdCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUM1RCxDQUFDLEVBQUMsQ0FBQzs7d0JBRUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQjs7d0JBQ3ZELDBCQUEwQixHQUFHLGFBQWEsQ0FBQywwQkFBMEI7b0JBQ3pFLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNySSxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7d0JBQ2xFLGFBQWEsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUUzRyxVQUFVLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLHdCQUF3QixDQUFDO29CQUM3RSxVQUFVLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDLHNCQUFzQixDQUFDO29CQUN6RSxVQUFVLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLDBCQUEwQixDQUFDO29CQUNqRixVQUFVLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDLHNCQUFzQixDQUFDO29CQUN6RSxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO29CQUM3RCxVQUFVLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLDBCQUEwQixDQUFDO29CQUNqRixVQUFVLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO29CQUNuRSxVQUFVLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0JBQ3JELFVBQVUsQ0FBQywwQkFBMEIsR0FBRyxhQUFhLENBQUMsMEJBQTBCLENBQUM7b0JBQ2pGLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFOzs0QkFDeEIsaUJBQWlCLEdBQWtCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7d0JBQ3RILFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDNUM7b0JBR0QsVUFBVSxDQUFDLHlCQUF5QixHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDaEYsVUFBVSxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDdEUsVUFBVSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO29CQUN0RCxVQUFVLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7b0JBQ2pELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFOzs0QkFDekIsa0JBQWtCLEdBQWtCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7d0JBQ3pILFVBQVUsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDN0M7b0JBRUQsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTt3QkFDL0MsS0FBSyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDL0QsS0FBSyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7d0JBQ3RDLEtBQUssQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDO3dCQUN6RCxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQzt3QkFDN0IsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7d0JBRXhHLEtBQUssQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDOzs0QkFFOUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLGFBQWE7OzRCQUMzQyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFdBQVc7OzRCQUN0SCxZQUFZLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7d0JBQ3pILEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7d0JBRXBGLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO3dCQUNwQyxXQUFXLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzt3QkFDcEMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQzFCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7cUJBRTNCO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO3dCQUMvQyxLQUFLLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQzt3QkFDN0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7d0JBQ25ELEtBQUssQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7OzRCQUVyRCxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzt3QkFFaEYsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFOztnQ0FDckIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxrQkFBa0I7NEJBQ25ELFVBQVUsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU07Ozs7NEJBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs0QkFDckYsVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTTs7Ozs0QkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBOzRCQUNsRixVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7NEJBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUM3RyxVQUFVLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQ2hHLFVBQVUsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQzt5QkFDMUQ7NkJBQU07NEJBQ0wsTUFBTSxzQkFBc0IsQ0FBQTt5QkFDN0I7d0JBQ0QsV0FBVyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7d0JBQ3BDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO3dCQUNwQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBRTFCLDBCQUEwQjt3QkFDMUIsa0NBQWtDO3dCQUNsQyxXQUFXLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztxQkFDckM7aUJBQ0Y7Z0JBQ0QsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDbkU7YUFDRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUN6RztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0csT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBOzs7Ozs7Ozs7OztJQU9NLGtCQUFrQixDQUFDLGVBQWdDLEVBQUUsUUFBZ0IsRUFBRSxzQkFBOEIsRUFBRSxFQUFFLDZCQUFxQyxFQUFFLEVBQUUsVUFBa0IsRUFBRTtRQUMzSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1NBQ3hIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3JJO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztJQUVhLDRCQUE0QixDQUFDLGVBQXVCLEVBQUUsUUFBZ0IsRUFBRSxtQkFBMkIsRUFBRSwwQkFBa0MsRUFBRSxPQUFlOzs7O2dCQUVoSyxRQUFhOztnQkFDYixVQUFlOztnQkFDZixXQUFXLEdBQXFCLElBQUksZ0JBQWdCLEVBQUU7O2dCQUN0RCxtQkFBbUIsR0FBK0IsRUFBRTtZQUV4RCxJQUFJOztvQkFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztvQkFDOUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDdEQsQ0FBQyxtQkFBWSxVQUFVLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxtQkFBYyxZQUFZLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFakQsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRTtpQkFDbkQsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzs7b0JBRWxDLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBa0I7O29CQUN2QyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQWtCOztvQkFDdEMsVUFBVSxHQUFlLEVBQUU7Z0JBRS9CLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQ3ZELFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztvQkFBQyxJQUFJLENBQUMsRUFBRTt3QkFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7NEJBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7NEJBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ2xDLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxlQUFlLEVBQUU7b0NBQzNDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUNBQ3BEOzRCQUNILENBQUMsRUFBQyxDQUFDO3lCQUNKO29CQUNILENBQUMsRUFBQyxDQUFDO29CQUVILFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7b0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBQyxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUM7b0JBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxVQUFVLENBQUMsT0FBTzs7OztvQkFBQyxNQUFNLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxDQUFDLE9BQU87Ozs7d0JBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ3JCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsSUFBSSxlQUFlLEVBQUU7Z0NBQ3hFLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7NkJBQ3JEO3dCQUNILENBQUMsRUFBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sMEJBQTBCLEdBQUcsUUFBUSxDQUFDO2lCQUM3QztnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFtQixDQUM5QyxDQUFDLEVBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pHO2dCQUNELFdBQVcsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzVDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0RyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxRyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUM5QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxtQ0FBbUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM1RztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDL0QsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBOzs7Ozs7Ozs7SUFFYSx3QkFBd0IsQ0FBQyxlQUF1QixFQUFFLFFBQWdCLEVBQUUsbUJBQTJCLEVBQUUsMEJBQWtDOztZQUUvSSxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLDBCQUEwQixDQUFDLENBQUE7O2dCQUNoTSxVQUFVLEdBQXFCLElBQUksZ0JBQWdCLEVBQUU7O2dCQUNyRCxtQkFBbUIsR0FBK0IsRUFBRTtZQUN4RCxJQUFJOztvQkFDRSxVQUFVOztvQkFBRSxZQUFZOzs7b0JBRXhCLFlBQVksR0FBYSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7O29CQUN0RSxVQUFVLEdBQWEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztvQkFDcEUsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDOztvQkFDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2dCQUNoRSxDQUFDLG1CQUF1QixRQUFRLEVBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxtQkFBeUIsTUFBTSxFQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXhELENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUU7aUJBQzdDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRXRDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNoRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTs7OztvQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksZUFBZSxFQUFDLENBQUMsR0FBRzs7OztvQkFBQyxDQUFDLENBQUMsRUFBRTt3QkFDN0UsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDakQsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLGVBQWUsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLDBCQUEwQixFQUFDLENBQUMsR0FBRzs7OztvQkFBQyxDQUFDLENBQUMsRUFBRTt3QkFDNUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDL0MsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxvQ0FBb0MsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQzlHO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFFdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM3QyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FDOUMsQ0FBQyxFQUNELFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QjtnQkFDRCxVQUFVLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO2dCQUMzQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckcsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekcsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDN0I7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsK0JBQStCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDeEc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7S0FBQTs7Ozs7Ozs7SUFNTSxxQkFBcUIsQ0FBQyxRQUFnQixFQUFFLFVBQWtCLEVBQUU7UUFDakUsSUFBSSxPQUFPLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO2FBQU0sSUFBSSxPQUFPLElBQUksRUFBRSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVhLDBCQUEwQixDQUFDLFFBQWdCOztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztnQkFFekQsVUFBVSxHQUF1QixJQUFJLGtCQUFrQixFQUFFOztnQkFFekQsYUFBYTs7Z0JBQ2IsY0FBYztZQUVsQixJQUFJOzs7b0JBRUUsb0JBQW9CLEdBQXlCLG1CQUFzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFBOztvQkFDOUcsb0JBQW9CLEdBQXlCLG1CQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQTtnQkFDcEgsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTNDLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDakQsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLEdBQUc7Ozs7Z0JBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDLENBQUM7Z0JBQ3RHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUVoRixJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTs7d0JBQ2pFLHdCQUF3QixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsRUFBQzs7d0JBQzlGLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7O3dCQUV4RyxVQUFVLEdBQThCLEVBQUU7O3dCQUMxQyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2pGLElBQUksa0JBQWtCLEVBQUU7d0JBQ3RCLFVBQVUsR0FBRyxDQUFDLG1CQUFZLGtCQUFrQixFQUFBLENBQUMsQ0FBQyxHQUFHOzs7O3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7cUJBQ3BHO3lCQUFNO3dCQUNMLE1BQU0sOEJBQThCLENBQUE7cUJBQ3JDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQy9DLFVBQVUsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO29CQUMzQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO2lCQUU1QzthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLGtDQUFrQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7S0FBQTs7Ozs7O0lBRU8sNEJBQTRCLENBQUMsTUFBVzs7WUFDMUMsa0JBQWtCLEdBQXVCLElBQUksa0JBQWtCLEVBQUU7UUFDckUsa0JBQWtCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUVhLDhCQUE4QixDQUFDLFFBQWdCLEVBQUUsT0FBZTs7WUFFNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztnQkFDakYsVUFBVSxHQUF1QixJQUFJLGtCQUFrQixFQUFFOztnQkFDekQsUUFBUSxHQUE4QixFQUFFO1lBRTVDLElBQUk7O29CQUNFLGdCQUFnQixHQUFxQixtQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFBO2dCQUNwRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O29CQUNqQyxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFFakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxjQUFjLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTs7d0JBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O3dCQUM5RCxjQUFjLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjOzt3QkFDM0Qsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNO29CQUMzRCxDQUFDLG1CQUFZLGtCQUFrQixFQUFBLENBQUMsQ0FBQyxPQUFPOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUM5QixDQUFDLEVBQUMsQ0FBQztvQkFFSCxRQUFRLEdBQUcsQ0FBQyxtQkFBWSxrQkFBa0IsRUFBQSxDQUFDLENBQUMsR0FBRzs7OztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO29CQUNqRyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO29CQUN6QyxVQUFVLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztpQkFDNUM7cUJBQU07b0JBQ0wsTUFBTSxzQ0FBc0MsR0FBRyxjQUFjLENBQUM7aUJBQy9EO2FBRUY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsc0NBQXNDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDL0c7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sVUFBVSxDQUFDO1FBRXBCLENBQUM7S0FBQTs7Ozs7SUFHTSx1QkFBdUIsQ0FBQyxRQUFnQjs7WUFFekMsc0JBQXNCLEdBQTJCLG1CQUF3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFBO1FBQzFILHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsSUFBSTtnQkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzs0QkFDWixVQUFVLEdBQTRCLEVBQUU7d0JBQzVDLG9FQUFvRTt3QkFDcEUsVUFBVSxHQUFHLENBQUMsbUJBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBLENBQUMsQ0FBQyxHQUFHOzs7O3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7d0JBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzFCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDckI7eUJBQ0k7d0JBQ0gsTUFBTSxxQ0FBcUMsR0FBRyxJQUFJLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsK0JBQStCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDeEc7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLDBCQUEwQixDQUFDLE1BQVc7O1lBQ3hDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUU7UUFFN0MsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDMUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDOUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDaEQsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN4RCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEYsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQztRQUMvRCxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELGdCQUFnQixDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWxELE9BQU8sZ0JBQWdCLENBQUM7SUFFMUIsQ0FBQzs7Ozs7SUFHWSxlQUFlLENBQUMsUUFBZ0I7OztnQkFFdkMsNEJBQW9EOztnQkFDcEQsd0JBQXdCLEdBQWdDLG1CQUE2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxFQUFBO1lBQzNJLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQzNDLHlCQUF5QixHQUE4QixtQkFBMkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBQTtZQUN0SSx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBSTs7b0JBQ0UsY0FBYzs7b0JBQ2QsZ0JBQWdCO2dCQUVwQixDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsU0FBUyxFQUFFO2lCQUNoRSxDQUFDLENBQUE7Z0JBRUYsSUFBSSxnQkFBZ0IsSUFBSSxjQUFjLEVBQUU7O3dCQUNsQyxnQkFBZ0IsR0FBZSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O3dCQUN2RCxrQkFBa0IsR0FBZSxjQUFjLENBQUMsTUFBTSxDQUFDO29CQUUzRCw0QkFBNEIsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0osNEJBQTRCLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDN0YsNEJBQTRCLENBQUMsY0FBYyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBRXRGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0wsTUFBTSx1Q0FBdUMsQ0FBQztpQkFDL0M7Z0JBRUQsT0FBTyw0QkFBNEIsQ0FBQzthQUVyQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNoRztRQUVILENBQUM7S0FBQTs7Ozs7O0lBRU8sZ0NBQWdDLENBQUMsTUFBVzs7WUFFOUMsWUFBWSxHQUEyQixJQUFJLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFdEYsWUFBWSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxZQUFZLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsWUFBWSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxZQUFZLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7O1lBQ25DLHNCQUFzQixHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoSCxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUM7UUFDdkQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxZQUFvQztRQUMvRCxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7O2dCQUM3RixPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxtQkFBMkIsRUFBRSxtQkFBMkI7O1lBRTFFLHlCQUF5QixHQUE4QixtQkFBMkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBQTtRQUN0SSx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RFLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEUsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDakc7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBTU0sV0FBVyxDQUFDLENBQVMsRUFBRSxLQUFhOztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDOztZQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUs7UUFDMUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRU0seUJBQXlCLENBQUMsSUFBUyxFQUFFLE1BQVc7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUNwRSxjQUFjLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNOztnQkFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWM7WUFDbEYsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFTSxvQkFBb0IsQ0FBQyxZQUFpQixFQUFFLE1BQVc7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUNwRixjQUFjLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7SUFLRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFXLGlCQUFpQixDQUFDLE9BQWdCO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVNLDBCQUEwQixDQUFDLElBQWdDLEVBQUUsV0FBbUI7UUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQzVHLENBQUM7Ozs7OztJQUVNLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJO1FBQ3BDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDbkMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkU7SUFDSCxDQUFDOzs7Ozs7SUFNWSxhQUFhOztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTs7OztJQUVZLGNBQWM7O1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxDQUFDO0tBQUE7Ozs7SUFFWSxjQUFjOztZQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQztLQUFBOzs7OztJQUdZLGVBQWUsQ0FBQyxXQUF3Qjs7WUFDbkQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUFBOzs7OztJQUVNLFlBQVksQ0FBQyxLQUFVO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RixDQUFDOzs7Ozs7O0lBR2EsZ0JBQWdCLENBQUMsV0FBd0I7OztnQkFDakQsVUFBVSxHQUFrQixJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUM7O2dCQUNwRCxlQUFlLEdBQUc7Z0JBQ3BCLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTztnQkFDOUIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRO2dCQUNoQyxXQUFXLEVBQUUsV0FBVyxDQUFDLFNBQVM7Z0JBQ2xDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTzthQUMvQjtZQUNELElBQUk7O29CQUNFLFFBQVEsR0FBRyxlQUFlOztvQkFDMUIsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUMvRCxDQUFDLG1CQUFvQixlQUFlLEVBQUEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUM7O29CQUM5QyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDTCxNQUFNLG9CQUFvQixDQUFDO2lCQUM1QjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMxRCxPQUFPLFVBQVUsQ0FBQztRQUVwQixDQUFDO0tBQUE7Ozs7OztJQUVhLGdCQUFnQixDQUFDLFdBQTJCOzs7Z0JBRXBELFVBQVUsR0FBa0IsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUk7Z0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxXQUFXLENBQUMsQ0FBQzs7b0JBQ3hELG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDO2dCQUN2RSxDQUFDLG1CQUF3QixtQkFBbUIsRUFBQSxDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQzs7b0JBQ2pFLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUU3RSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDTCxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNoRDthQUVGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO0tBQUE7Ozs7OztJQUVPLGlCQUFpQixDQUFDLFFBQTZCO1FBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTs7Z0JBQ3JDLFlBQVksR0FBdUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDM0UsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBQzVELE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDaEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sRUFBQyxDQUFDO2dCQUMvRCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4RjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBdHhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQW5DUSxXQUFXO1lBQUUsVUFBVTtZQVl2QixnQkFBZ0I7WUFkYyxZQUFZOzRDQXNEOUMsUUFBUSxZQUNSLE1BQU0sU0FBQyxvQkFBb0I7NENBRTNCLFFBQVEsWUFDUixNQUFNLFNBQUMsNEJBQTRCOzRDQUVuQyxRQUFRLFlBQ1IsTUFBTSxTQUFDLDZCQUE2QjtZQTNEK0csZUFBZTtZQUF1UyxrQkFBa0I7OztBQThGOWQ7SUFEQyxLQUFLLENBQUMscUJBQXFCLENBQUM7Ozs0Q0FDc0MsVUFBVTttRUFFNUU7QUFpTEQ7SUFEQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7OzZEQUM4QyxxQkFBcUI7NENBQThCLGdCQUFnQjsrREErQzFJO0FBSUQ7SUFEQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7OzZDQUNrQixxQkFBcUIsVUFBNEIsS0FBSzs0Q0FBVyxnQkFBZ0I7a0VBcUM1SDtBQTRDRDtJQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7OzZEQUN5RCxtQkFBbUI7NENBQUcsVUFBVTt1REFFL0c7QUF3QkQ7SUFEQyxLQUFLLENBQUMsZUFBZSxDQUFDOzs7NENBQ3dFLFVBQVU7NERBaUJ4RztBQUdEO0lBREMsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7OERBQzJELG1CQUFtQjs0Q0FBRyxVQUFVO29EQUVqSDtBQW1KRDtJQURDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7OzRDQUMwRSxVQUFVO3lEQU1oSDtBQWlORDtJQURDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7OzRDQUNzSixVQUFVOzREQU16TDtBQW1PRDtJQURDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7OzRDQUN3QixVQUFVO2lFQXVCM0Q7QUFnQ0Q7SUFEQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7Ozs7eURBb0MvQjtBQStIRDtJQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7OzZDQUNtQixXQUFXOzt5REFFcEQ7Ozs7OztJQTlzQ0QsaURBQXdEOzs7OztJQUN4RCxpREFBd0Q7Ozs7O0lBQ3hELGlEQUF3RDs7Ozs7SUFDeEQsZ0RBQW9FOzs7OztJQUVwRSw2Q0FBeUU7Ozs7O0lBQ3pFLG9EQUF3Rzs7SUFFeEcsa0NBQTRCOzs7OztJQWtwQzVCLHNDQUFrQzs7Ozs7SUEvb0NoQyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUE4Qjs7Ozs7SUFDOUIsdUNBQW1DOzs7OztJQUNuQywwQ0FBa0M7Ozs7O0lBQ2xDLDZDQUV3Qzs7Ozs7SUFDeEMsaURBRTZDOzs7OztJQUM3QyxrREFFOEM7Ozs7O0lBQzlDLDZDQUF3Qzs7Ozs7SUFDeEMsZ0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoLCBBUElGYWN0b3J5LCBwdXNoQXBwcm92ZUdvYWxBUEksIFN0cmluZ1V0aWxzLCBnZXRBZ2VuY3lQbGFuQVBJLCBnZXRHb2FsQVBJLCBnZXRBY3R1YWxBUEksIGdldFllYXJDb25maWdBUEksIEFQUEVycm9yLCBOdW1iZXJVdGlscywgRGF0YVN5bmNTZXJ2aWNlLCBTdWJtaXRHb2FsU2V0dGluZ1ZhbHVlLCBTdWJtaXRHb2FsSW5mbywgU3VibWl0R29hbFBsYW5JbmZvLCBHZXREZXZpY2VJbmZvQVBJLCBTdWNjZXNzU3RhdHVzLCBZRVNOTywgVElNRUJBU0UsIFNVQk1JVEdPQUxUWVBFLCBTdWJtaXRHb2FsUGxhbiwgUEVSRk9STUFOQ0VUWVBFLCBTdWJtaXRHb2FsRGF0YSwgRXh0ZW5zaW9uRGF0YSwgeWVhckNvbmZpZ0V4dGVuc2lvbkRhdGFUb2tlbiwgZ29hbFNldHRpbmdFeHRlbnNpb25EYXRhVG9rZW4sIEV4dGVuc2lvbkZhY3RvcnksIHB1c2hHb2FsU2V0dGluZ0RhdGFBUEksIFByb2ZpbGVDb2RlU2VydmljZSwgUHJvZmlsZUNvZGUsIFZhbGlkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IGdvYWxTZXR0aW5nU3RlcFRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgZ29hbFNldHRpbmdTdGVwIH0gZnJvbSAnLi4vaW50ZXJmYWNlL2dvYWxTZXR0aW5nU3RlcCc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuR2V0TWFpbkFQSSB9IGZyb20gJy4uL2FwaS9BZ2VuY3lQbGFuR2V0TWFpbkFQSSc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuR2V0RGV0YWlsQVBJIH0gZnJvbSAnLi4vYXBpL0FnZW5jeVBsYW5HZXREZXRhaWxBUEknO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSSB9IGZyb20gJy4uL2FwaS9Hb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dldFZhbHVlQVBJIH0gZnJvbSAnLi4vYXBpL0dvYWxTZXR0aW5nR2V0VmFsdWUnO1xuaW1wb3J0IHsgR29hbFNldHRpbmdHZXRBY3R1YWxBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRBY3R1YWxBUEknO1xuaW1wb3J0IHsgR29hbFNldHRpbmdHZXRQbGFuQVBJIH0gZnJvbSAnLi4vYXBpL0dvYWxTZXR0aW5nR2V0UGxhbkFQSSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dldFllYXJDb25maWdBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRZZWFyQ29uZmlnQVBJJ1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwNCB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdTdGVwNCc7XG5pbXBvcnQgeyBHb2FsU3RvcmVTZXJ2aWNlLCBTWU5DX1NUQVRVUyB9IGZyb20gJy4vZ29hbC1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFnZW5jeVBsYW5EZXRhaWwgfSBmcm9tICcuL21vZGVsL0FnZW5jeVBsYW5EZXRhaWwnO1xuaW1wb3J0IHsgQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCB9IGZyb20gJy4vbW9kZWwvQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuTWFpbkRhdGEgfSBmcm9tICcuL21vZGVsL0FnZW5jeVBsYW5NYWluRGF0YSc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3IH0gZnJvbSAnLi9tb2RlbC9BZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3JztcbmltcG9ydCB7IEdvYWxTZXR0aW5nWWVhckNvbmZpZyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdZZWFyQ29uZmlnJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDIgfSBmcm9tICcuL21vZGVsL0dvYWxTZXR0aW5nU3RlcDInO1xuaW1wb3J0IHsgTW9udGhseVBsYW5GWUZDRGF0YSB9IGZyb20gJy4vbW9kZWwvTW9udGhseVBsYW5GWUZDRGF0YSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXBEYXRhIH0gZnJvbSAnLi9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDUgfSBmcm9tICcuL21vZGVsL0dvYWxTZXR0aW5nU3RlcDUnO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwMyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdTdGVwMyc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXAxIH0gZnJvbSAnLi9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAxJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nR29hbFN0YXR1cyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdHb2FsU3RhdHVzJztcbmltcG9ydCB7IElzQXBwcm92ZUluZm8gfSBmcm9tICcuL21vZGVsL0lzQXBwcm92ZUluZm8nO1xuaW1wb3J0IHsgQWN0aXZpdHlWYWx1ZSB9IGZyb20gJy4vbW9kZWwvQWN0aXZpdHlWYWx1ZSc7XG5pbXBvcnQgeyBWYWxpZEVycm9yIH0gZnJvbSAnLi9tb2RlbC9WYWlsZEVycm9yJztcbmltcG9ydCB7IEFwcHJvdmVJbmZvIH0gZnJvbSAnLi9tb2RlbC9BcHByb3ZlSW5mbyc7XG5pbXBvcnQgeyBHZXRPdGhlclBhcmFtZXRlckFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuTWFpbkluZm8gfSBmcm9tIFwiLi9tb2RlbC9BZ2VuY3lQbGFuTWFpbkluZm9cIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU2VydmljZSB7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwMU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwMk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwNU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgU3RlcFRleHRDb252ZXJ0TWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cbiAgcHJpdmF0ZSBDb2xNYXBUb1Byb2ZpbGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIENvbE1hcFRvUHJvZmlsZUNvZGVNYXA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBEQVNIID0gJy0tJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGdvYWxTdG9yZTogR29hbFN0b3JlU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChnb2FsU2V0dGluZ1N0ZXBUb2tlbilcbiAgICBwcml2YXRlIGdvYWxTZXR0aW5nU3RlcDogZ29hbFNldHRpbmdTdGVwLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdCh5ZWFyQ29uZmlnRXh0ZW5zaW9uRGF0YVRva2VuKVxuICAgIHByaXZhdGUgeWVhckNvbmZpZ0V4dGVuc2lvbjogRXh0ZW5zaW9uRmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoZ29hbFNldHRpbmdFeHRlbnNpb25EYXRhVG9rZW4pXG4gICAgcHJpdmF0ZSBnb2FsU2V0dGluZ0V4dGVuc2lvbjogRXh0ZW5zaW9uRmFjdG9yeSxcbiAgICBwcml2YXRlIGRhdGFTeW5jU2VydmljZTogRGF0YVN5bmNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5UZXh0Q29udmVydFN0ZXAxTWFwLnNldChcIkZZRkNcIiwgXCJQRVJTT05fRllGQ1wiKTtcbiAgICAvLyB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiQU5QXCIsIFwiUEVSU09OX0FOUFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiQW5udWFsQ29udmVudGlvblwiLCBcIkFOTlVBTF9DT05WRU5USU9OXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJNRFJUXCIsIFwiTURSVFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiUHJvbW90aW9uUGxhblwiLCBcIlBST01PVElPTl9QTEFOXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJBY3Rpdml0eUZZRkNcIiwgXCJBQ1RJVklUWV9GWUZDXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJBY3Rpdml0eURheXNcIiwgXCJBQ1RJVklUWV9EQVlTXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMk1hcC5zZXQoXCJQZXJDYXNlXCIsIFwiUEVSX0NBU0VfRllGQ1wiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDVNYXAuc2V0KFwiVGVhbUZZRkNcIiwgXCJURUFNX0ZZRkNcIik7XG4gICAgdGhpcy5UZXh0Q29udmVydFN0ZXA1TWFwLnNldChcIlRlYW1BTlBcIiwgXCJURUFNX0FOUFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDVNYXAuc2V0KFwiTWFucG93ZXJcIiwgXCJURUFNX01BTlBPV0VSXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwNU1hcC5zZXQoXCJSZWNydWl0bWVudFwiLCBcIlRFQU1fUkVDUlVJVE1FTlRcIik7XG4gICAgdGhpcy5TdGVwVGV4dENvbnZlcnRNYXAuc2V0KFwiU3RlcDFcIiwgdGhpcy5UZXh0Q29udmVydFN0ZXAxTWFwKTtcbiAgICB0aGlzLlN0ZXBUZXh0Q29udmVydE1hcC5zZXQoXCJTdGVwMlwiLCB0aGlzLlRleHRDb252ZXJ0U3RlcDJNYXApO1xuICAgIHRoaXMuU3RlcFRleHRDb252ZXJ0TWFwLnNldChcIlN0ZXA1XCIsIHRoaXMuVGV4dENvbnZlcnRTdGVwNU1hcCk7XG5cbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJBbm51YWxDb252ZW50aW9uXCIsIFwiR29hbFNldHRpbmdfQW5udWFsQ29udmVudGlvblwiKTtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJNRFJUXCIsIFwiR29hbFNldHRpbmdfTURSVFwiKTtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJQcm9tb3Rpb25QbGFuXCIsIFwiUHJvbW90aW9uX1BsYW5cIik7XG4gICAgdGhpcy5Db2xNYXBUb1Byb2ZpbGUuZm9yRWFjaCgoY29kZSwgY29sKSA9PiB7XG4gICAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZUNvZGVNYXAuc2V0KGNvbCwgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KGNvZGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS1cblxuICAvLyNyZWdpb24gIGdvYWxTdGVwRGF0YXNcblxuICAvLyBHb2FsU2V0dGluZ1NlcnZpY2VcbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXBEYXRhJylcbiAgcHVibGljIGdldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhcjogbnVtYmVyLCBpc0FkanVzdDogYm9vbGVhbik6IE9ic2VydmFibGU8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhciwgaXNBZGp1c3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhcjogbnVtYmVyLCBpc0FkanVzdDogYm9vbGVhbik6IFByb21pc2U8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnRvIF9nZXRHb2FsU2V0dGluZ1N0ZXAxXzVEYXRhIHllYXI6JywgeWVhciwgJ2lzQWRqdXN0JywgaXNBZGp1c3QpO1xuXG4gICAgbGV0IHJldHVybkRhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEgPSBuZXcgR29hbFNldHRpbmdTdGVwRGF0YSh5ZWFyKTtcbiAgICB0cnkge1xuICAgICAgbGV0IHllYXJDb25maWdSZXNwOiBhbnk7XG4gICAgICBsZXQgZ29hbFNldHRpbmdSZXNwOiBhbnk7XG4gICAgICBsZXQgZ29hbFNldHRpbmdWYWx1ZVJlc3A6IGFueTtcbiAgICAgIGxldCBhY3R1YWxSZXNwOiBhbnk7XG5cbiAgICAgIGxldCB5ZWFyQ29uZmlnID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgICAgIGxldCBnb2FsU2V0dGluZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nXCIpO1xuICAgICAgbGV0IGdvYWxTZXR0aW5nVmFsdWUgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdWYWx1ZVwiKTtcbiAgICAgIGxldCBhY3R1YWwgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdBY3R1YWxWYWx1ZVwiKTtcblxuICAgICAgKDxHb2FsU2V0dGluZ0dldFZhbHVlQVBJPmdvYWxTZXR0aW5nVmFsdWUpLnNldERhdGFZZWFyKHllYXIpO1xuICAgICAgKDxHb2FsU2V0dGluZ0dldEFjdHVhbEFQST5hY3R1YWwpLnNldERhdGFZZWFyKHllYXIpO1xuXG4gICAgICBbeWVhckNvbmZpZ1Jlc3AsIGdvYWxTZXR0aW5nUmVzcCwgZ29hbFNldHRpbmdWYWx1ZVJlc3AsIGFjdHVhbFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goeWVhckNvbmZpZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZ1ZhbHVlKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGFjdHVhbCkudG9Qcm9taXNlKClcbiAgICAgIF0pO1xuICAgICAgY29uc29sZS5sb2coXCJ5ZWFyQ29uZmlnUmVzcFwiLCB5ZWFyQ29uZmlnUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxTZXR0aW5nUmVzcFwiLCBnb2FsU2V0dGluZ1Jlc3ApO1xuICAgICAgY29uc29sZS5sb2coXCJnb2FsU2V0dGluZ1ZhbHVlUmVzcFwiLCBnb2FsU2V0dGluZ1ZhbHVlUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdHVhbFJlc3BcIiwgYWN0dWFsUmVzcCk7XG4gICAgICAvL2NhbGwgR2V0WWVhckNvbmZpZ0FQSVxuXG5cbiAgICAgIGlmICh5ZWFyQ29uZmlnUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl1cbiAgICAgICAgJiYgZ29hbFNldHRpbmdSZXNwLkhlYWRlcltcInN0YXR1c1wiXVxuICAgICAgICAmJiBnb2FsU2V0dGluZ1ZhbHVlUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl1cbiAgICAgICAgJiYgYWN0dWFsUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcblxuICAgICAgICBsZXQgeWVhckNvbmZpZ01hcCA9IHRoaXMueWVhckpzb25Ub01hcCh5ZWFyQ29uZmlnUmVzcFtcIkJvZHlcIl0pO1xuICAgICAgICBsZXQgZ29hbFNldHRpbmdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoZ29hbFNldHRpbmdSZXNwW1wiQm9keVwiXSk7XG5cbiAgICAgICAgbGV0IHllYXJDb25maWdPYmogPSB5ZWFyQ29uZmlnTWFwLmdldCh5ZWFyKTtcbiAgICAgICAgbGV0IGdvYWxTZXR0aW5nT2JqID0gZ29hbFNldHRpbmdNYXAuZ2V0KHllYXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInllYXJDb25maWdPYmpcIiwgeWVhckNvbmZpZ09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ29hbFNldHRpbmdPYmpcIiwgZ29hbFNldHRpbmdPYmopO1xuXG4gICAgICAgIGlmICh5ZWFyQ29uZmlnT2JqICE9IHVuZGVmaW5lZCAmJiBnb2FsU2V0dGluZ09iaiAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIC8vIGNhbGwgR2V0R29hbFNldHRpbmdWYWx1ZVxuICAgICAgICAgIGxldCBnb2FsU2V0dGluZ1ZhbHVlT2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICBnb2FsU2V0dGluZ1ZhbHVlUmVzcFtcIkJvZHlcIl0uZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgIGdvYWxTZXR0aW5nVmFsdWVPYmpbZGF0YS5EYXRhVHlwZV0gPSBkYXRhLlZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29hbFNldHRpbmdWYWx1ZU9ialwiLCBnb2FsU2V0dGluZ1ZhbHVlT2JqKTtcblxuICAgICAgICAgIC8vIGNhbGwgR2V0QWN0dWFsVmFsdWVcbiAgICAgICAgICBsZXQgdGVhbUZZRkNBY3R1YWwgPSAtMTtcbiAgICAgICAgICBsZXQgdGVhbUFOUEFjdHVhbCA9IC0xO1xuICAgICAgICAgIGxldCBhbGxZZWFyQWN0dWFsID0gLTE7XG4gICAgICAgICAgbGV0IG1vbnRoT2ZZZWFyID0geWVhckNvbmZpZ09iai5Nb250aFF1YW50aXR5T2ZZZWFyO1xuICAgICAgICAgIGxldCBhY3R1YWxsaXN0OiBBcnJheTxzdHJpbmc+ID0gQXJyYXkobW9udGhPZlllYXIpLmZpbGwodGhpcy5EQVNILCAwKTtcblxuICAgICAgICAgIGxldCBhY3R1YWxCb2R5ID0gYWN0dWFsUmVzcFtcIkJvZHlcIl07XG4gICAgICAgICAgbGV0IEZZRkNBY3R1YWxzID0gYWN0dWFsQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXIgJiYgeC5QZXJmb3JtYW5jZVR5cGUgPT0gUEVSRk9STUFOQ0VUWVBFLlBFUlNPTkFMICYmIHguRGF0YVR5cGUgPT0gXCJGWUZDXCIpO1xuICAgICAgICAgIGlmIChGWUZDQWN0dWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxZZWFyQWN0dWFsID0gMDtcbiAgICAgICAgICAgIEZZRkNBY3R1YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgIGlmICh4Lk1vbnRoIDw9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxsaXN0W3guTW9udGggLSAxXSA9IHguVmFsdWU7XG4gICAgICAgICAgICAgICAgYWxsWWVhckFjdHVhbCArPSB4LlZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgVGVhbUZZRkNBY3R1YWxzID0gYWN0dWFsQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXIgJiYgeC5QZXJmb3JtYW5jZVR5cGUgPT0gUEVSRk9STUFOQ0VUWVBFLlRFQU0gJiYgeC5EYXRhVHlwZSA9PSBcIkZZRkNcIik7XG4gICAgICAgICAgaWYgKFRlYW1GWUZDQWN0dWFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRlYW1GWUZDQWN0dWFsID0gMDtcbiAgICAgICAgICAgIHRlYW1BTlBBY3R1YWwgPSAwO1xuICAgICAgICAgICAgVGVhbUZZRkNBY3R1YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgIHRlYW1GWUZDQWN0dWFsICs9ICh4Lk1vbnRoIDw9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpID8geC5WYWx1ZSA6IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRlYW1BTlBBY3R1YWwgPSB0aGlzLm51bWJlclRvRml4KHRlYW1GWUZDQWN0dWFsICogeWVhckNvbmZpZ09iai5GeWZjQ292ZXJ0QW5wUmF0ZSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0dWFsbGlzdFwiLCBhY3R1YWxsaXN0KTtcblxuICAgICAgICAgIGxldCBZZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWcgPSBuZXcgR29hbFNldHRpbmdZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgbGV0IEdvYWxTdGF0dXM6IEdvYWxTZXR0aW5nR29hbFN0YXR1cyA9IG5ldyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMoKTtcbiAgICAgICAgICBsZXQgU3RlcDE6IEdvYWxTZXR0aW5nU3RlcDEgPSBuZXcgR29hbFNldHRpbmdTdGVwMSgpO1xuICAgICAgICAgIGxldCBTdGVwMjogR29hbFNldHRpbmdTdGVwMiA9IG5ldyBHb2FsU2V0dGluZ1N0ZXAyKCk7XG4gICAgICAgICAgbGV0IFN0ZXAzOiBHb2FsU2V0dGluZ1N0ZXAzID0gbmV3IEdvYWxTZXR0aW5nU3RlcDMoKTtcbiAgICAgICAgICBsZXQgU3RlcDQ6IEdvYWxTZXR0aW5nU3RlcDQgPSBuZXcgR29hbFNldHRpbmdTdGVwNCgpO1xuICAgICAgICAgIGxldCBTdGVwNTogR29hbFNldHRpbmdTdGVwNSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA1KCk7XG5cbiAgICAgICAgICBZZWFyQ29uZmlnLkRhdGFZZWFyID0geWVhckNvbmZpZ09iai5EYXRhWWVhcjtcbiAgICAgICAgICBZZWFyQ29uZmlnLklzQ3VycmVudCA9IHllYXJDb25maWdPYmouSXNDdXJyZW50O1xuICAgICAgICAgIFllYXJDb25maWcuUXVhcnRlclN0YXJ0TW9udGggPSB5ZWFyQ29uZmlnT2JqLlF1YXJ0ZXJTdGFydE1vbnRoO1xuICAgICAgICAgIFllYXJDb25maWcuUXVhcnRlckVuZE1vbnRoID0geWVhckNvbmZpZ09iai5RdWFydGVyRW5kTW9udGg7XG4gICAgICAgICAgWWVhckNvbmZpZy5Hb2FsU2V0dGluZ0FjdGl2aXR5UHJvY01vZGUgPSB5ZWFyQ29uZmlnT2JqLkdvYWxTZXR0aW5nQWN0aXZpdHlQcm9jTW9kZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkdvYWxBbmRQbGFuRGlmZmVyZW5jZUxpbWl0ID0geWVhckNvbmZpZ09iai5Hb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdDtcbiAgICAgICAgICBZZWFyQ29uZmlnLkZ5ZmNDb3ZlcnRBbnBSYXRlID0geWVhckNvbmZpZ09iai5GeWZjQ292ZXJ0QW5wUmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRTdWJtaXRSYXRlO1xuICAgICAgICAgIFllYXJDb25maWcuSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlID0geWVhckNvbmZpZ09iai5JbmZvcmNlQ29udmVydFNjaGVkdWxlUmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0RmluZFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0RmluZFJhdGU7XG4gICAgICAgICAgWWVhckNvbmZpZy5Ob3dUb1llYXJFbmREYXlzID0geWVhckNvbmZpZ09iai5Ob3dUb1llYXJFbmREYXlzO1xuICAgICAgICAgIFllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPSB5ZWFyQ29uZmlnT2JqLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoO1xuICAgICAgICAgIFllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhciA9IHllYXJDb25maWdPYmouTW9udGhRdWFudGl0eU9mWWVhcjtcbiAgICAgICAgICBZZWFyQ29uZmlnLldvcmtpbmdNb250aCA9IHllYXJDb25maWdPYmouV29ya2luZ01vbnRoO1xuICAgICAgICAgIGlmICh0aGlzLnllYXJDb25maWdFeHRlbnNpb24pIHtcbiAgICAgICAgICAgIGxldCB5ZWFyQ29uZmlnRXh0RGF0YTogRXh0ZW5zaW9uRGF0YSA9IHRoaXMueWVhckNvbmZpZ0V4dGVuc2lvbi5nZXRFeHRlbnNpb25EYXRhKHllYXJDb25maWdPYmosIHsgc291cmNlOiBcIlNRTFwiIH0pO1xuICAgICAgICAgICAgWWVhckNvbmZpZy5zZXRFeHRlbnNpb24oeWVhckNvbmZpZ0V4dERhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEdvYWxTdGF0dXMuRGF0YVllYXIgPSB5ZWFyO1xuICAgICAgICAgIEdvYWxTdGF0dXMuUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSA9IGdvYWxTZXR0aW5nT2JqLlBlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU07XG4gICAgICAgICAgR29hbFN0YXR1cy5UZWFtR29hbEFwcGxpY2FibGVZTSA9IGdvYWxTZXR0aW5nT2JqLlRlYW1Hb2FsQXBwbGljYWJsZVlNO1xuICAgICAgICAgIEdvYWxTdGF0dXMuR29hbFNldE1vbnRoID0gZ29hbFNldHRpbmdPYmouR29hbFNldE1vbnRoO1xuICAgICAgICAgIEdvYWxTdGF0dXMuQXBwcm92ZVN0YXR1cyA9IGdvYWxTZXR0aW5nT2JqLkFwcHJvdmVTdGF0dXM7XG4gICAgICAgICAgR29hbFN0YXR1cy5Jc0ZpcnN0VGltZSA9IGdvYWxTZXR0aW5nT2JqLklzRmlyc3RUaW1lID09IFwiWVwiO1xuICAgICAgICAgIEdvYWxTdGF0dXMuSXNOZWVkU2V0dGluZyA9IGdvYWxTZXR0aW5nT2JqLklzTmVlZFNldHRpbmcgPT0gXCJZXCI7XG4gICAgICAgICAgR29hbFN0YXR1cy5TdXBlcnZpc29yQ29tbWVudCA9IGdvYWxTZXR0aW5nT2JqLlN1cGVydmlzb3JDb21tZW50O1xuICAgICAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBsZXQgZ29hbFNldHRpbmdFeHREYXRhOiBFeHRlbnNpb25EYXRhID0gdGhpcy5nb2FsU2V0dGluZ0V4dGVuc2lvbi5nZXRFeHRlbnNpb25EYXRhKGdvYWxTZXR0aW5nT2JqLCB7IHNvdXJjZTogXCJTUUxcIiB9KTtcbiAgICAgICAgICAgIEdvYWxTdGF0dXMuc2V0RXh0ZW5zaW9uKGdvYWxTZXR0aW5nRXh0RGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgU3RlcDEuRllGQyA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkM7XG4gICAgICAgICAgU3RlcDEuQW5udWFsQ29udmVudGlvbiA9IGdvYWxTZXR0aW5nVmFsdWVPYmouQU5OVUFMX0NPTlZFTlRJT047XG4gICAgICAgICAgU3RlcDEuTURSVCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouTURSVDtcbiAgICAgICAgICBTdGVwMS5Qcm9tb3Rpb25QbGFuID0gZ29hbFNldHRpbmdWYWx1ZU9iai5QUk9NT1RJT05fUExBTjtcbiAgICAgICAgICBTdGVwMS5BY3R1YWwgPSB0aGlzLmNoYW5nZVRvRGFzaChhbGxZZWFyQWN0dWFsKTtcbiAgICAgICAgICBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkMsIFN0ZXAxLkFjdHVhbCk7XG4gICAgICAgICAgU3RlcDEuQWN0aXZpdHlGWUZDID0gZ29hbFNldHRpbmdWYWx1ZU9iai5BQ1RJVklUWV9GWUZDO1xuICAgICAgICAgIFN0ZXAxLkFjdGl2aXR5RGF5cyA9IGdvYWxTZXR0aW5nVmFsdWVPYmouQUNUSVZJVFlfREFZUztcblxuICAgICAgICAgIFN0ZXAyLlBlckNhc2UgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUl9DQVNFX0ZZRkM7XG5cbiAgICAgICAgICBsZXQgQWN0aXZpdHlGWUZDID0gaXNBZGp1c3QgPyBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kIDogU3RlcDEuRllGQztcbiAgICAgICAgICBTdGVwMyA9IHRoaXMuY2FsY3VsYXRlQWN0aXZpdHlEYXRhKEFjdGl2aXR5RllGQywgU3RlcDIuUGVyQ2FzZSwgWWVhckNvbmZpZyk7XG5cbiAgICAgICAgICBpZiAoaXNBZGp1c3QpIHtcbiAgICAgICAgICAgIFN0ZXA0ID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwoUEVSRk9STUFOQ0VUWVBFLlBFUlNPTkFMLCB5ZWFyLCBZZWFyQ29uZmlnLk1vbnRoUXVhbnRpdHlPZlllYXIsIFllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpO1xuICAgICAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTdGVwNCA9IHRoaXMuY2FsY3VsYXRlTW9udGhBY3R1YWxQbGFuKFllYXJDb25maWcsIFN0ZXAxLkZZRkMsIGFjdHVhbGxpc3QpO1xuICAgICAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFN0ZXA1LlRlYW1GWUZDID0gZ29hbFNldHRpbmdWYWx1ZU9iai5URUFNX0ZZRkM7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9BTlA7XG4gICAgICAgICAgU3RlcDUuTWFucG93ZXIgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fTUFOUE9XRVI7XG4gICAgICAgICAgU3RlcDUuUmVjcnVpdG1lbnQgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fUkVDUlVJVE1FTlQ7XG4gICAgICAgICAgU3RlcDUuVGVhbUZZRkNBY3R1YWwgPSB0aGlzLmNoYW5nZVRvRGFzaCh0ZWFtRllGQ0FjdHVhbCk7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUEFjdHVhbCA9IHRoaXMuY2hhbmdlVG9EYXNoKHRlYW1BTlBBY3R1YWwpO1xuICAgICAgICAgIFN0ZXA1LlRlYW1GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9GWUZDLCBTdGVwNS5UZWFtRllGQ0FjdHVhbCk7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUE5vd1RvWWVhckVuZCA9IHRoaXMuY2FsY3VsYXRlQU5QRnJvbUZZRkMoU3RlcDUuVGVhbUZZRkNOb3dUb1llYXJFbmQsIFllYXJDb25maWcuRnlmY0NvdmVydEFucFJhdGUpO1xuXG4gICAgICAgICAgcmV0dXJuRGF0YS5ZZWFyQ29uZmlnID0gWWVhckNvbmZpZztcbiAgICAgICAgICByZXR1cm5EYXRhLkdvYWxTdGF0dXMgPSBHb2FsU3RhdHVzO1xuICAgICAgICAgIHJldHVybkRhdGEuU3RlcDEgPSBTdGVwMTtcbiAgICAgICAgICByZXR1cm5EYXRhLlN0ZXAyID0gU3RlcDI7XG4gICAgICAgICAgcmV0dXJuRGF0YS5TdGVwMyA9IFN0ZXAzO1xuICAgICAgICAgIHJldHVybkRhdGEuU3RlcDQgPSBTdGVwNDtcbiAgICAgICAgICByZXR1cm5EYXRhLlN0ZXA1ID0gU3RlcDU7XG4gICAgICAgICAgcmV0dXJuRGF0YS5BY3R1YWxMaXN0ID0gYWN0dWFsbGlzdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAwJywgJ2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0R29hbFNldHRpbmdTdGVwMV81RGF0YSByZXR1cm5EYXRhXCIsIHJldHVybkRhdGEpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG5cbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXAzJylcbiAgcHVibGljIGNhbGN1bGF0ZUFjdGl2aXR5RGF0YShnb2FsOiBzdHJpbmcsIHBlckNhc2U6IHN0cmluZywgeWVhckNvbmZpZzogR29hbFNldHRpbmdZZWFyQ29uZmlnLCBhY3Rpdml0eURheXM6IHN0cmluZyA9ICcnKTogR29hbFNldHRpbmdTdGVwMyB7XG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVBY3Rpdml0eURhdGE6XCIsIGdvYWwsIHBlckNhc2UsIHllYXJDb25maWcsIGFjdGl2aXR5RGF5cyk7XG5cbiAgICBsZXQgcmV0dXJuT2JqOiBHb2FsU2V0dGluZ1N0ZXAzID0gbmV3IEdvYWxTZXR0aW5nU3RlcDMoKTtcbiAgICBsZXQgYWN0aXZpdHlWYWx1ZXM6IEFycmF5PEFjdGl2aXR5VmFsdWU+ID0gW107XG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG51bUdvYWwgPSBOdW1iZXIoZ29hbCk7XG4gICAgICBsZXQgbnVtUGVyQ2FzZSA9IE51bWJlcihwZXJDYXNlKVxuICAgICAgaWYgKE51bWJlclV0aWxzLmlzTnVtYmVyKGdvYWwpICYmIE51bWJlclV0aWxzLmlzTnVtYmVyKHBlckNhc2UpICYmIG51bVBlckNhc2UgPiAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImNhbGN1bGF0ZUFjdGl2aXR5RGF0YSBvbiBzZXJ2aWNlOiBcIiwgZ29hbCwgcGVyQ2FzZSwgeWVhckNvbmZpZyk7XG4gICAgICAgIGxldCBkYXlzOiBudW1iZXIgPSAoU3RyaW5nVXRpbHMuaXNFbXB0eShhY3Rpdml0eURheXMpKSA/IE51bWJlcih5ZWFyQ29uZmlnLk5vd1RvWWVhckVuZERheXMpIDogTnVtYmVyKGFjdGl2aXR5RGF5cyk7XG5cbiAgICAgICAgbGV0IGRheXNJbndlZWs6IG51bWJlciA9IDc7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aDogbnVtYmVyID0gMzY1IC8gTnVtYmVyKHllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhcik7XG5cbiAgICAgICAgbGV0IGRheUluZm9yY2U6IG51bWJlciA9IG51bUdvYWwgLyBudW1QZXJDYXNlIC8gZGF5cztcbiAgICAgICAgbGV0IHdlZWtJbmZvcmNlOiBudW1iZXIgPSBkYXlJbmZvcmNlICogZGF5c0lud2VlaztcbiAgICAgICAgbGV0IG1vbnRoSW5mb3JjZTogbnVtYmVyID0gZGF5SW5mb3JjZSAqIGRheXNJbk1vbnRoO1xuICAgICAgICBkYXlJbmZvcmNlID0gZGF5SW5mb3JjZTtcblxuICAgICAgICBsZXQgdGFicyA9IFt7IG5hbWU6IFRJTUVCQVNFLkRBWSwgaW5mb3JjZTogZGF5SW5mb3JjZSB9LCB7IG5hbWU6IFRJTUVCQVNFLldFRUssIGluZm9yY2U6IHdlZWtJbmZvcmNlIH0sIHsgbmFtZTogVElNRUJBU0UuTU9OVEgsIGluZm9yY2U6IG1vbnRoSW5mb3JjZSB9XTtcblxuICAgICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgICBhY3Rpdml0eVZhbHVlcyA9IHRoaXMuZ29hbFNldHRpbmdTdGVwLmNhbGN1bGF0ZU90aGVyUnVsZUFjdGl2aXR5SW5mb3JjZSh0YWJzLCB5ZWFyQ29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3Rpdml0eTogVElNRUJBU0UgPSBhY3Rpdml0eVZhbHVlc1swXS5UaW1lQmFzZTtcblxuICAgICAgICByZXR1cm5PYmouQWN0aXZpdHkgPSBhY3Rpdml0eTtcbiAgICAgICAgcmV0dXJuT2JqLkFjdGl2aXR5VmFsdWVzID0gYWN0aXZpdHlWYWx1ZXM7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0YWJOdW0gPSBbVElNRUJBU0UuREFZLCBUSU1FQkFTRS5XRUVLLCBUSU1FQkFTRS5NT05USF07XG4gICAgICAgIHJldHVybk9iai5BY3Rpdml0eSA9IFRJTUVCQVNFLkRBWTtcbiAgICAgICAgdGFiTnVtLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgICAgbGV0IGFjdGl2aXR5OiBBY3Rpdml0eVZhbHVlID0gbmV3IEFjdGl2aXR5VmFsdWUodGltZSwgdGhpcy5EQVNILCB0aGlzLkRBU0gsIHRoaXMuREFTSCwgdGhpcy5EQVNILCB0aGlzLkRBU0gpO1xuICAgICAgICAgIGFjdGl2aXR5VmFsdWVzLnB1c2goYWN0aXZpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuT2JqLkFjdGl2aXR5VmFsdWVzID0gYWN0aXZpdHlWYWx1ZXM7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAxJywgJ2NhbGN1bGF0ZUFjdGl2aXR5RGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVBY3Rpdml0eURhdGEgcmV0dXJuIG9iajogXCIsIEpTT04uc3RyaW5naWZ5KHJldHVybk9iaikpO1xuICAgIHJldHVybiByZXR1cm5PYmo7XG4gIH1cblxuICAvLyBzdGVwIDQgZnVuY3Rpb25cbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXA0JylcbiAgcHVibGljIGNhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbih5ZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWcsIGdvYWw6IHN0cmluZywgYWN0dWFsTGlzdDogQXJyYXk8c3RyaW5nPik6IEdvYWxTZXR0aW5nU3RlcDQge1xuXG4gICAgLy9hY3R1YWxMaXN0IGV4YW1wbGUgOiBbMTAwLDEwMCwyMDAsMCwxMDAsMV1cbiAgICBjb25zb2xlLmxvZyhcImNhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbiBnb2FsOlwiLCBnb2FsKTtcbiAgICBsZXQgU3RlcDREYXRhczogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGlmIChOdW1iZXJVdGlscy5pc051bWJlcihnb2FsKSkge1xuICAgICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgICBNb250aEFjdHVhbFBsYW5MaXN0ID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuY2FsY3VsYXRlTW9udGhBY3R1YWxQbGFuKHllYXJDb25maWcsIE51bWJlcihnb2FsKSwgYWN0dWFsTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcmVjYXN0ID0gdGhpcy5jYWxjdWxhdGVGb3JlY2FzdCh5ZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KTtcbiAgICAgICAgbGV0IHNob3J0ZmFsbCA9IHRoaXMuY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWwsIGZvcmVjYXN0KTtcbiAgICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuY2FsdWxhdGVTdW1CeUFycmF5KGFjdHVhbExpc3QpO1xuICAgICAgICBTdGVwNERhdGFzLk1vbnRoTGlzdCA9IE1vbnRoQWN0dWFsUGxhbkxpc3Q7XG4gICAgICAgIFN0ZXA0RGF0YXMuRm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgICAgU3RlcDREYXRhcy5TaG9ydGZhbGwgPSBzaG9ydGZhbGw7XG4gICAgICAgIFN0ZXA0RGF0YXMuQWN0dWFsID0gYWN0dWFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/lhajpg6jpg71kYXNoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhckNvbmZpZy5Nb250aFF1YW50aXR5T2ZZZWFyOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGF0YTogTW9udGhseVBsYW5GWUZDRGF0YSA9IG5ldyBNb250aGx5UGxhbkZZRkNEYXRhKGksIHRoaXMuREFTSCwgdGhpcy5EQVNIKTtcbiAgICAgICAgICBNb250aEFjdHVhbFBsYW5MaXN0LnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgU3RlcDREYXRhcy5BY3R1YWwgPSB0aGlzLkRBU0g7XG4gICAgICAgIFN0ZXA0RGF0YXMuRm9yZWNhc3QgPSB0aGlzLkRBU0g7XG4gICAgICAgIFN0ZXA0RGF0YXMuU2hvcnRmYWxsID0gdGhpcy5EQVNIO1xuICAgICAgICBTdGVwNERhdGFzLk1vbnRoTGlzdCA9IE1vbnRoQWN0dWFsUGxhbkxpc3Q7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAyJywgJ2NhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbiBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVNb250aEFjdHVhbFBsYW46XCIsIE1vbnRoQWN0dWFsUGxhbkxpc3QpO1xuXG4gICAgcmV0dXJuIFN0ZXA0RGF0YXM7XG5cbiAgfVxuICBwdWJsaWMgY2FsY3VsYXRlQWN0dWFsKFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIsIE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+KTogc3RyaW5nIHtcbiAgICBpZiAoUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPiAwKSB7XG4gICAgICByZXR1cm4gTW9udGhBY3R1YWxQbGFuTGlzdC5tYXAoeCA9PiAoTnVtYmVyKHguQWN0dWFsKSA8IDAgfHwgeC5BY3R1YWwgPT0gdGhpcy5EQVNIIHx8IHguTW9udGggPiBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCkgPyAwIDogTnVtYmVyKHguQWN0dWFsKSkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgTnVtYmVyKGN1ciksIDApLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLkRBU0g7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBjYWxjdWxhdGVGb3JlY2FzdChQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aDogbnVtYmVyLCBNb250aEFjdHVhbFBsYW5MaXN0OiBBcnJheTxNb250aGx5UGxhbkZZRkNEYXRhPik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsdWxhdGVTdW1CeUFycmF5KHRoaXMuZ2V0QWN0dWFsUGxhbkZyb21Nb250aExpc3QoTW9udGhBY3R1YWxQbGFuTGlzdCwgUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWx1bGF0ZVN1bUJ5QXJyYXkobW9udGhMaXN0OiBBcnJheTxhbnk+KTogc3RyaW5nIHtcbiAgICBsZXQgaXNEYXNoID0gdHJ1ZTtcbiAgICBtb250aExpc3QuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhICE9IHRoaXMuREFTSCkge1xuICAgICAgICBpc0Rhc2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgcmV0dXJuTnVtID0gdGhpcy5EQVNIO1xuICAgIGlmICghaXNEYXNoKSB7XG4gICAgICByZXR1cm5OdW0gPSBtb250aExpc3QubWFwKHggPT4gKE51bWJlcih4KSA8IDAgfHwgeCA9PSB0aGlzLkRBU0ggfHwgU3RyaW5nVXRpbHMuaXNFbXB0eSh4KSkgPyAwIDogeCkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgTnVtYmVyKGN1ciksIDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5OdW07XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWwsIGZvcmVjYXN0KTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5EQVNIO1xuICAgIGlmIChOdW1iZXJVdGlscy5pc051bWJlcihnb2FsKSAmJiBOdW1iZXJVdGlscy5pc051bWJlcihmb3JlY2FzdCkpIHtcbiAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nU3RlcCkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmdvYWxTZXR0aW5nU3RlcC5nZXRTaG9ydGZhbGwoZ29hbCwgZm9yZWNhc3QpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcHJlc3VsdCA9IChOdW1iZXIoZ29hbCkgLSBOdW1iZXIoZm9yZWNhc3QpKTtcbiAgICAgICAgcmVzdWx0ID0gKHRlbXByZXN1bHQgPCAwKSA/IFwiMFwiIDogdGVtcHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uICBnb2FsU3RlcERhdGFzXG5cblxuICAvLyNyZWdpb24gU3VibWl0ICYgQXBwcm92ZSBmdW5jdGlvblxuICBAVmFsaWQoJ0lzQXBwcm92ZUluZm8nKVxuICBwdWJsaWMgaXNOZWVkQXBwcm92ZShTdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgRGF0YVllYXI6IG51bWJlciwgYWRqdXN0RGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBPYnNlcnZhYmxlPElzQXBwcm92ZUluZm8+IHtcbiAgICByZXR1cm4gZnJvbSh0aGlzLl9pc05lZWRBcHByb3ZlKFN1Ym1pdFR5cGUsIERhdGFZZWFyLCBhZGp1c3REYXRhcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaXNOZWVkQXBwcm92ZShTdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgRGF0YVllYXI6IG51bWJlciwgYWRqdXN0RGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBQcm9taXNlPElzQXBwcm92ZUluZm8+IHtcbiAgICBjb25zb2xlLmxvZyhcIl9pc05lZWRBcHByb3ZlIGFkanVzdERhdGFzXCIsIGFkanVzdERhdGFzLCBTdWJtaXRUeXBlLCBEYXRhWWVhcik7XG5cbiAgICBsZXQgaXNBcHByb3ZlSW5mbzogSXNBcHByb3ZlSW5mbztcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZ29hbFNldHRpbmdTdGVwKSB7XG4gICAgICAgIC8vdGFpd2FuXG4gICAgICAgIGxldCBvcmlnaW5EYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSA9IGF3YWl0IHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoRGF0YVllYXIsIHRydWUpO1xuICAgICAgICBpc0FwcHJvdmVJbmZvID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuaXNOZWVkQXBwcm92ZShhZGp1c3REYXRhcywgb3JpZ2luRGF0YXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNBcHByb3ZlSW5mbyA9IG5ldyBJc0FwcHJvdmVJbmZvKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQwMycsICdpc05lZWRBcHByb3ZlIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImlzTmVlZEFwcHJvdmVcIiwgaXNBcHByb3ZlSW5mbyk7XG4gICAgcmV0dXJuIGlzQXBwcm92ZUluZm87XG4gIH1cblxuICBAVmFsaWQoJ0lzQXBwcm92ZUluZm8nKVxuICBwdWJsaWMgaXNOZWVkQXBwcm92ZV9wbGFuKEZZRkM6IHN0cmluZywgRm9yZWNhc3Q6IHN0cmluZywgR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQ6IG51bWJlcik6IE9ic2VydmFibGU8SXNBcHByb3ZlSW5mbz4ge1xuICAgIGNvbnNvbGUubG9nKCdpc05lZWRBcHByb3ZlX3BsYW4gRllGQycsIEZZRkMsICdGb3JlY2FzdCcsIEZvcmVjYXN0LCAnR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQnLCBHb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdClcblxuICAgIGxldCBpc0FwcHJvdmVJbmZvOiBJc0FwcHJvdmVJbmZvO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nU3RlcCkge1xuICAgICAgICBpc0FwcHJvdmVJbmZvID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuaXNOZWVkQXBwcm92ZV9wbGFuKE51bWJlcihGWUZDKSwgTnVtYmVyKEZvcmVjYXN0KSwgR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNBcHByb3ZlSW5mbyA9IG5ldyBJc0FwcHJvdmVJbmZvKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MDQnLCAnaXNOZWVkQXBwcm92ZV9wbGFuIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImlzTmVlZEFwcHJvdmVfcGxhbiBpc0FwcHJvdmVJbmZvOlwiLCBpc0FwcHJvdmVJbmZvKTtcbiAgICByZXR1cm4gb2YoaXNBcHByb3ZlSW5mbyk7XG4gIH1cblxuICBAVmFsaWQoJ1N1Y2Nlc3NTdGF0dXMnKVxuICBwdWJsaWMgc3VibWl0R29hbChzdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgSXNOZWVkQXBwcm92ZTogYm9vbGVhbiwgc3VibWl0RGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSk6IE9ic2VydmFibGU8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX3N1Ym1pdEdvYWwoc3VibWl0VHlwZSwgSXNOZWVkQXBwcm92ZSwgc3VibWl0RGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3VibWl0R29hbChzdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgSXNOZWVkQXBwcm92ZTogYm9vbGVhbiwgc3VibWl0RGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIGNvbnNvbGUubG9nKFwiW19zdWJtaXRHb2FsXSBzdWJtaXREYXRhXCIsIHN1Ym1pdERhdGEpO1xuXG4gICAgbGV0IEFjdGl2aXR5OiBUSU1FQkFTRTtcbiAgICBsZXQgR29hbFNldHRpbmdWYWx1ZTogQXJyYXk8U3VibWl0R29hbFNldHRpbmdWYWx1ZT4gPSBbXTtcbiAgICBsZXQgR29hbFBsYW46IFN1Ym1pdEdvYWxQbGFuID0gbmV3IFN1Ym1pdEdvYWxQbGFuKCk7XG4gICAgbGV0IFN1Ym1pdEluZm86IFN1Ym1pdEdvYWxJbmZvID0gbmV3IFN1Ym1pdEdvYWxJbmZvKCk7XG4gICAgbGV0IFN1Ym1pdERhdGFzOiBTdWJtaXRHb2FsRGF0YTtcbiAgICBsZXQgcmV0dXJuUmVzcDogU3VjY2Vzc1N0YXR1cyA9IG5ldyBTdWNjZXNzU3RhdHVzKGZhbHNlKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHN1Ym1pdFR5cGUgPT0gU1VCTUlUR09BTFRZUEUuQUxMKSB7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ1R5cGUgPSBbXCJTdGVwMVwiLCBcIlN0ZXAyXCIsIFwiU3RlcDVcIl07XG5cbiAgICAgICAgR29hbFNldHRpbmdUeXBlLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgICAgbGV0IHN0ZXBNYXAgPSB0aGlzLlN0ZXBUZXh0Q29udmVydE1hcC5nZXQoc3RlcCk7XG4gICAgICAgICAgc3RlcE1hcC5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Ym1pdERhdGFbc3RlcF1ba2V5XSkge1xuICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnB1c2gobmV3IFN1Ym1pdEdvYWxTZXR0aW5nVmFsdWUodmFsLCBzdWJtaXREYXRhW3N0ZXBdW2tleV0sIFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBBY3Rpdml0eSA9IHN1Ym1pdERhdGEuU3RlcDMuQWN0aXZpdHk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR29hbFNldHRpbmdWYWx1ZVwiLCBHb2FsU2V0dGluZ1ZhbHVlKTtcbiAgICAgIEdvYWxQbGFuLlRpbWVCYXNlID0gVElNRUJBU0UuTU9OVEg7XG4gICAgICBHb2FsUGxhbi5WYWx1ZXMgPSBzdWJtaXREYXRhLlN0ZXA0Lk1vbnRoTGlzdC5maWx0ZXIoeCA9PiB4LlBsYW4gIT0gdGhpcy5EQVNIKS5tYXAoeCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgU3VibWl0R29hbFBsYW5JbmZvKFBFUkZPUk1BTkNFVFlQRS5QRVJTT05BTCwgeC5Nb250aCwgTnVtYmVyKHguUGxhbiksIFtdKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJHb2FsUGxhblwiLCBHb2FsUGxhbik7XG5cbiAgICAgIFN1Ym1pdEluZm8uRGF0YVllYXIgPSBzdWJtaXREYXRhLkRhdGFZZWFyO1xuICAgICAgU3VibWl0SW5mby5TdWJtaXRUeXBlID0gc3VibWl0VHlwZTtcbiAgICAgIFN1Ym1pdEluZm8uQWN0aXZpdHlHb2FsQmFzZSA9IEFjdGl2aXR5O1xuICAgICAgU3VibWl0SW5mby5Jc05lZWRBcHByb3ZlID0gSXNOZWVkQXBwcm92ZSA/IFlFU05PLllFUyA6IFlFU05PLk5PO1xuICAgICAgU3VibWl0SW5mby5FeHRlbnNpb25zID0gW107XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0SW5mb1wiLCBTdWJtaXRJbmZvKTtcblxuICAgICAgU3VibWl0RGF0YXMgPSBuZXcgU3VibWl0R29hbERhdGEoU3VibWl0SW5mbywgR29hbFNldHRpbmdWYWx1ZSwgR29hbFBsYW4pO1xuICAgICAgbGV0IFJlc3AgPSBhd2FpdCB0aGlzLl9wdXNoR29hbFNldHRpbmcoU3VibWl0RGF0YXMpO1xuICAgICAgaWYgKFJlc3AuaXNTdWNjZXNzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY0dvYWxEYXRhcygpO1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcInN1Ym1pdCBnb2FsIGZhaWwhIFwiO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDA1JywgJ3N1Ym1pdEdvYWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuUmVzcC5pc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIl9zdWJtaXRHb2FsIHJlc3AyXCIsIHJldHVyblJlc3ApO1xuXG4gICAgcmV0dXJuIHJldHVyblJlc3A7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gU3VibWl0ICYgQXBwcm92ZVxuXG4gIC8vI3JlZ2lvbiBMQU5ESU5HIHN0YXR1c1xuICBwdWJsaWMgZ2V0SXNGaXJzdFVzZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBnZXQgRGV2aWNlSW5mbyB0YWJsZVxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGxldCBEZXZpY2VJbmZvID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldERldmljZUluZm9cIik7XG4gICAgICAoPEdldERldmljZUluZm9BUEk+RGV2aWNlSW5mbykuc2V0RGF0YVR5cGUoXCJGaXJzdFVzZUFQUFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChEZXZpY2VJbmZvKS50b1Byb21pc2UoKS50aGVuKERhdGFzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImdldElzRmlyc3RVc2VcIiwgRGF0YXNbXCJCb2R5XCJdWzBdLkNhdGVnb3J5VmFsID09IFwiWVwiID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgICAgIG9ic2VydmVyLm5leHQoRGF0YXNbXCJCb2R5XCJdWzBdLkNhdGVnb3J5VmFsID09IFwiWVwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDA4JywgJ2dldElzRmlyc3RVc2UgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICAvLyBAVmFsaWQoJ0dvYWxTZXR0aW5nR29hbFN0YXR1cycpXG4gIHB1YmxpYyBnZXRTZXR0aW5nU3RhdHVzKCk6IE9ic2VydmFibGU8QXJyYXk8R29hbFNldHRpbmdHb2FsU3RhdHVzPj4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX2dldFNldHRpbmdTdGF0dXMoKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRTZXR0aW5nU3RhdHVzKCk6IFByb21pc2U8QXJyYXk8R29hbFNldHRpbmdHb2FsU3RhdHVzPj4ge1xuICAgIGxldCBHb2FsU2V0dGluZ1Jlc3A6IGFueTtcbiAgICBsZXQgeWVhckNvbmZpZ1Jlc3A6IGFueTtcbiAgICBsZXQgcmV0dXJuRGF0YXM6IEFycmF5PEdvYWxTZXR0aW5nR29hbFN0YXR1cz4gPSBbXTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBnb2FsU2V0dGluZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nXCIpO1xuICAgICAgbGV0IHllYXJDb25maWcgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdZZWFyQ29uZmlnXCIpO1xuXG4gICAgICBbR29hbFNldHRpbmdSZXNwLCB5ZWFyQ29uZmlnUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh5ZWFyQ29uZmlnKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG5cbiAgICAgIC8vZ2V0R29hbFNldHRpbmdcbiAgICAgIGxldCBnb2FsU2V0dGluZ01hcCA9IG5ldyBNYXA8bnVtYmVyLCBhbnk+KCk7XG4gICAgICBsZXQgeWVhckNvbmZpZ01hcCA9IG5ldyBNYXA8bnVtYmVyLCBhbnk+KCk7XG4gICAgICBpZiAoR29hbFNldHRpbmdSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiB5ZWFyQ29uZmlnUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgZ29hbFNldHRpbmdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoR29hbFNldHRpbmdSZXNwW1wiQm9keVwiXSk7XG4gICAgICAgIHllYXJDb25maWdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoeWVhckNvbmZpZ1Jlc3BbXCJCb2R5XCJdKTtcblxuICAgICAgICByZXR1cm5EYXRhcyA9IFtdO1xuICAgICAgICBnb2FsU2V0dGluZ01hcC5mb3JFYWNoKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICBsZXQgZ29hbFN0YXR1cyA9IG5ldyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMoKTtcbiAgICAgICAgICBnb2FsU3RhdHVzLkRhdGFZZWFyID0ga2V5O1xuICAgICAgICAgIGdvYWxTdGF0dXMuSXNDdXJyZW50ID0geWVhckNvbmZpZ01hcC5nZXQoa2V5KS5Jc0N1cnJlbnQ7XG4gICAgICAgICAgZ29hbFN0YXR1cy5Jc05lZWRTZXR0aW5nID0gZGF0YS5Jc05lZWRTZXR0aW5nID09IFlFU05PLllFUztcbiAgICAgICAgICBnb2FsU3RhdHVzLklzRmlyc3RUaW1lID0gZGF0YS5Jc0ZpcnN0VGltZSA9PSBZRVNOTy5ZRVM7XG4gICAgICAgICAgZ29hbFN0YXR1cy5BcHByb3ZlU3RhdHVzID0gZGF0YS5BcHByb3ZlU3RhdHVzO1xuICAgICAgICAgIGdvYWxTdGF0dXMuUmVtYWluaW5nRGF5cyA9IGRhdGEuUmVtYWluaW5nZGF5cztcbiAgICAgICAgICByZXR1cm5EYXRhcy5wdXNoKGdvYWxTdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MDknLCAnZ2V0U2V0dGluZ1N0YXR1cyBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXRTZXR0aW5nU3RhdHVzIHJldHVybkRhdGFzXCIsIHJldHVybkRhdGFzKTtcbiAgICByZXR1cm4gcmV0dXJuRGF0YXM7XG4gIH1cblxuICBwcml2YXRlIHllYXJKc29uVG9NYXAoeWVhckpzb24pOiBNYXA8bnVtYmVyLCBhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcInllYXJKc29uXCIsIHllYXJKc29uKTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxudW1iZXIsIGFueT4oKTtcbiAgICBpZiAoeWVhckpzb24gIT0gbnVsbCkge1xuICAgICAgeWVhckpzb24uZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuRGF0YVllYXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbWFwLnNldChkYXRhLkRhdGFZZWFyLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gTEFORElORyBzdGF0dXNcblxuXG4gIC8vI3JlZ2lvbiBHb2FsU2V0dGluZyBvdmVydmlld1xuICBAVmFsaWQoJ0dvYWxTZXR0aW5nU3RlcERhdGEnKVxuICBwdWJsaWMgZ2V0T3ZlcnZpZXdEYXRhKHBlcmZvcm1hbmNlVHlwZTogUEVSRk9STUFOQ0VUWVBFLCBEYXRhWWVhcjogbnVtYmVyID0gLTEsIEFnZW50SUQ6IHN0cmluZyA9IFwiXCIpOiBPYnNlcnZhYmxlPEdvYWxTZXR0aW5nU3RlcERhdGE+IHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShBZ2VudElEKSkge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0T3ZlcnZpZXdEYXRhQnlTUUwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLl9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhciwgQWdlbnRJRCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE92ZXJ2aWV3RGF0YUJ5U1FMKHBlcmZvcm1hbmNlVHlwZTogUEVSRk9STUFOQ0VUWVBFLCB5ZWFyOiBudW1iZXIgPSAtMSkge1xuXG4gICAgbGV0IGdvYWxTdGVwRGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEgPSBuZXcgR29hbFNldHRpbmdTdGVwRGF0YSh5ZWFyKTtcbiAgICB0cnkge1xuICAgICAgZ29hbFN0ZXBEYXRhcyA9IGF3YWl0IHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhciwgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIl9nZXRPdmVydmlld0RhdGFCeVNRTCBnb2FsU3RlcERhdGFzXCIsIEpTT04uc3RyaW5naWZ5KGdvYWxTdGVwRGF0YXMpKTtcbiAgICAgIGlmIChnb2FsU3RlcERhdGFzICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGFjdHVhbFBsYW5EYXRhID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwocGVyZm9ybWFuY2VUeXBlLCB5ZWFyLCBnb2FsU3RlcERhdGFzW1wiWWVhckNvbmZpZ1wiXVtcIk1vbnRoUXVhbnRpdHlPZlllYXJcIl0sIGdvYWxTdGVwRGF0YXNbXCJZZWFyQ29uZmlnXCJdW1wiUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGhcIl0pO1xuICAgICAgICBpZiAoYWN0dWFsUGxhbkRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIGdvYWxTdGVwRGF0YXMuU3RlcDQgPSBhY3R1YWxQbGFuRGF0YTtcbiAgICAgICAgICBnb2FsU3RlcERhdGFzLlN0ZXA0LlNob3J0ZmFsbCA9IHRoaXMuY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWxTdGVwRGF0YXMuU3RlcDEuRllGQywgZ29hbFN0ZXBEYXRhcy5TdGVwNC5Gb3JlY2FzdCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBcImdldCBNb250aEFjdHVhbFBsYW4gZGF0YSBmYWlsLlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuT2JqOiBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3ID0gbmV3IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcoKTtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlVHlwZSA9PSBQRVJGT1JNQU5DRVRZUEUuUEVSU09OQUwpIHtcbiAgICAgICAgICBsZXQgcGVyQ2FzZTogc3RyaW5nID0gZ29hbFN0ZXBEYXRhcy5TdGVwMi5QZXJDYXNlID8gZ29hbFN0ZXBEYXRhcy5TdGVwMi5QZXJDYXNlIDogJzEnO1xuICAgICAgICAgIGxldCBhY3Rpdml0eUdvYWw6IHN0cmluZyA9IGdvYWxTdGVwRGF0YXMuU3RlcDEuQWN0aXZpdHlGWUZDID8gZ29hbFN0ZXBEYXRhcy5TdGVwMS5BY3Rpdml0eUZZRkMgOiBnb2FsU3RlcERhdGFzLlN0ZXAxLkZZRkM7XG4gICAgICAgICAgbGV0IGFjdGl2aXR5RGF5czogc3RyaW5nID0gZ29hbFN0ZXBEYXRhcy5TdGVwMS5BY3Rpdml0eURheXMgPyBnb2FsU3RlcERhdGFzLlN0ZXAxLkFjdGl2aXR5RGF5cyA6IGdvYWxTdGVwRGF0YXMuWWVhckNvbmZpZy5Ob3dUb1llYXJFbmREYXlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZ29hbFN0ZXBEYXRhcy5TdGVwMyA9IHRoaXMuY2FsY3VsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5R29hbCwgcGVyQ2FzZSwgZ29hbFN0ZXBEYXRhcy5ZZWFyQ29uZmlnLCBhY3Rpdml0eURheXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHBlcmZvcm1hbmNlVHlwZSA9PSBQRVJGT1JNQU5DRVRZUEUuVEVBTSkge1xuICAgICAgICAgIGxldCBhZ2VuY3lQbGFuTWFpbkluZm86IEFnZW5jeVBsYW5NYWluSW5mbyA9IGF3YWl0IHRoaXMuZ2V0QWdlbmN5UGxhbk1haW5EYXRhKHllYXIpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgaWYgKGFnZW5jeVBsYW5NYWluSW5mbyAmJiBhZ2VuY3lQbGFuTWFpbkluZm8uQWdlbmN5TWFpbkRhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGFnZW5jeVBsYW5NYWluTGlzdCA9IGFnZW5jeVBsYW5NYWluSW5mby5BZ2VuY3lNYWluRGF0YUxpc3Q7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhZ2VuY3lQbGFuTWFpbkxpc3Q6IFwiLCBKU09OLnN0cmluZ2lmeShhZ2VuY3lQbGFuTWFpbkxpc3QpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiRllGQ1wiKVswXS5Gb3JlY2FzdCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWdlbmN5UGxhbk9ialwiLCBhZ2VuY3lQbGFuT2JqKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5PYmouRllGQ0ZvcmVjYXN0ID0gYWdlbmN5UGxhbk1haW5MaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJGWUZDXCIpWzBdLkZvcmVjYXN0O1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5BTlBGb3JlY2FzdCA9IGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiQU5QXCIpWzBdLkZvcmVjYXN0O1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5NYW5wb3dlclBsYW4gPSB0aGlzLmNoYW5nZVRvRGFzaChhZ2VuY3lQbGFuTWFpbkxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIk1hbnBvd2VyXCIpWzBdLk1vbnRoUGxhbik7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuT2JqLlJlY3J1aXRtZW50UGxhbiA9IGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiUmVjcnVpdG1lbnRcIilbMF0uTW9udGhQbGFuO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5Db21wbGV0aW9uUmF0ZSA9IGFnZW5jeVBsYW5NYWluSW5mby5Db21wbGV0aW9uUmF0ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJnZXQgYWdlbmN5UGxhbiBkYXRhIGZhaWwuXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdvYWxTdGVwRGF0YXMuQWdlbmN5UGxhbiA9IGFnZW5jeVBsYW5PYmo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IDFfNURhdGEgRmFpbC4gZ29hbFN0ZXBEYXRhczpcIiArIGdvYWxTdGVwRGF0YXNcbiAgICAgIH1cblxuICAgICAgZ29hbFN0ZXBEYXRhcyA9IHRoaXMuX2NvbnZlclNlbGVjdENvZGUoZ29hbFN0ZXBEYXRhcyk7XG4gICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgZ29hbFN0ZXBEYXRhcyA9IHRoaXMuZ29hbFNldHRpbmdTdGVwLmNoYW5nZUVtcHR5VG9EYXNoKGdvYWxTdGVwRGF0YXMpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNTA0JywgJ2dldE92ZXJ2aWV3RGF0YUJ5U1FMIGZhaWwhJyArIGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJfZ2V0T3ZlcnZpZXdEYXRhQnlTUUwgZ29hbFN0ZXBEYXRhc1wiLCBnb2FsU3RlcERhdGFzLCBKU09OLnN0cmluZ2lmeShnb2FsU3RlcERhdGFzKSk7XG4gICAgcmV0dXJuIGdvYWxTdGVwRGF0YXM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwocGVyZm9ybWFuY2VUeXBlOiBQRVJGT1JNQU5DRVRZUEUsIERhdGFZZWFyOiBudW1iZXIgPSAtMSwgQWdlbnRJRDogc3RyaW5nID0gXCJcIik6IFByb21pc2U8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuXG4gICAgY29uc29sZS53YXJuKFwicGVyZm9ybWFuY2VUeXBlOiBcIiwgcGVyZm9ybWFuY2VUeXBlLCBcIiBEYXRhWWVhcjogXCIsIERhdGFZZWFyLCBcIiBBZ2VudElEOiBcIiwgQWdlbnRJRCk7XG5cbiAgICBsZXQgR2V0R29hbFJlc3A6IGFueTtcbiAgICBsZXQgR2V0WWVhckNvbmZpZ1Jlc3A6IGFueTtcblxuICAgIGxldCBnb2FsU2V0dGluZ09iajogYW55O1xuICAgIGxldCBHb2FsVmFsdWVzOiBhbnk7XG4gICAgbGV0IGdvYWxTZXR0aW5nVmFsdWVPYmo6IGFueSA9IHt9O1xuXG4gICAgbGV0IFllYXJDb25maWc6IEdvYWxTZXR0aW5nWWVhckNvbmZpZyA9IG5ldyBHb2FsU2V0dGluZ1llYXJDb25maWcoKTtcbiAgICBsZXQgR29hbFN0YXR1czogR29hbFNldHRpbmdHb2FsU3RhdHVzID0gbmV3IEdvYWxTZXR0aW5nR29hbFN0YXR1cygpO1xuICAgIGxldCBTdGVwMTogR29hbFNldHRpbmdTdGVwMSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXAxKCk7XG4gICAgbGV0IFN0ZXAyOiBHb2FsU2V0dGluZ1N0ZXAyID0gbmV3IEdvYWxTZXR0aW5nU3RlcDIoKTtcbiAgICBsZXQgU3RlcDM6IEdvYWxTZXR0aW5nU3RlcDMgPSBuZXcgR29hbFNldHRpbmdTdGVwMygpO1xuICAgIGxldCBTdGVwNDogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IFN0ZXA1OiBHb2FsU2V0dGluZ1N0ZXA1ID0gbmV3IEdvYWxTZXR0aW5nU3RlcDUoKTtcbiAgICBsZXQgQWdlbmN5UGxhbjogQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldyA9IG5ldyBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3KCk7XG5cbiAgICBZZWFyQ29uZmlnLkRhdGFZZWFyID0gRGF0YVllYXI7XG4gICAgR29hbFN0YXR1cy5EYXRhWWVhciA9IERhdGFZZWFyO1xuICAgIGxldCByZXR1cm5EYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXBEYXRhKERhdGFZZWFyKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgZ2V0R29hbGFwaSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsXCIpO1xuICAgICAgKDxnZXRHb2FsQVBJPmdldEdvYWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG4gICAgICBsZXQgZ2V0WWVhckNvbmZpZ2FwaSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRZZWFyQ29uZmlnXCIpO1xuICAgICAgKDxnZXRZZWFyQ29uZmlnQVBJPmdldFllYXJDb25maWdhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG5cbiAgICAgIFtHZXRHb2FsUmVzcCwgR2V0WWVhckNvbmZpZ1Jlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0R29hbGFwaSkudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRZZWFyQ29uZmlnYXBpKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBHZXRHb2FsUmVzcFwiLCBHZXRHb2FsUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcIl9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwgR2V0WWVhckNvbmZpZ1Jlc3BcIiwgR2V0WWVhckNvbmZpZ1Jlc3ApO1xuXG4gICAgICBsZXQgR29hbE1hcCA9IHRoaXMueWVhckpzb25Ub01hcChHZXRHb2FsUmVzcC5Hb2Fscyk7XG4gICAgICBsZXQgWWVhckNvbmZpZ01hcCA9IHRoaXMueWVhckpzb25Ub01hcChHZXRZZWFyQ29uZmlnUmVzcC5Db25maWd1cmF0aW9ucyk7XG5cbiAgICAgIGxldCBHb2FsT2JqID0gR29hbE1hcC5nZXQoRGF0YVllYXIpO1xuICAgICAgbGV0IHllYXJDb25maWdPYmogPSBZZWFyQ29uZmlnTWFwLmdldChEYXRhWWVhcik7XG4gICAgICBpZiAoR29hbE9iaiAhPSB1bmRlZmluZWQgJiYgeWVhckNvbmZpZ09iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ29hbFNldHRpbmdPYmogPSBHb2FsTWFwLmdldChEYXRhWWVhcikuR29hbFNldHRpbmc7XG4gICAgICAgIEdvYWxWYWx1ZXMgPSBHb2FsTWFwLmdldChEYXRhWWVhcikuR29hbFZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBnb2FsU2V0dGluZ09ialwiLCBnb2FsU2V0dGluZ09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBHb2FsVmFsdWVzXCIsIEdvYWxWYWx1ZXMpO1xuXG4gICAgICAgIEdvYWxWYWx1ZXMuZm9yRWFjaChHb2FsVmFsdWUgPT4ge1xuICAgICAgICAgIGdvYWxTZXR0aW5nVmFsdWVPYmpbR29hbFZhbHVlLkRhdGFUeXBlXSA9IEdvYWxWYWx1ZS5WYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1vbnRoUXVhbnRpdHlPZlllYXIgPSB5ZWFyQ29uZmlnT2JqLk1vbnRoUXVhbnRpdHlPZlllYXI7XG4gICAgICAgIGxldCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCA9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG4gICAgICAgIFN0ZXA0ID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZSwgRGF0YVllYXIsIG1vbnRoUXVhbnRpdHlPZlllYXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBBZ2VudElEKTtcbiAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICBsZXQgYWxsWWVhckFjdHVhbDogc3RyaW5nID0gdGhpcy5jYWxjdWxhdGVBY3R1YWwoeWVhckNvbmZpZ09iai5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgU3RlcDQuTW9udGhMaXN0KTtcblxuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRTdWJtaXRSYXRlO1xuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0TWVldFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0TWVldFJhdGU7XG4gICAgICAgIFllYXJDb25maWcuSW5mb3JjZUNvbnZlcnRTY2hlZHVsZVJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlO1xuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0RmluZFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0RmluZFJhdGU7XG4gICAgICAgIFllYXJDb25maWcuTm93VG9ZZWFyRW5kRGF5cyA9IHllYXJDb25maWdPYmouTm93VG9ZZWFyRW5kRGF5cztcbiAgICAgICAgWWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCA9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG4gICAgICAgIFllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhciA9IHllYXJDb25maWdPYmouTW9udGhRdWFudGl0eU9mWWVhcjtcbiAgICAgICAgWWVhckNvbmZpZy5Xb3JraW5nTW9udGggPSB5ZWFyQ29uZmlnT2JqLldvcmtpbmdNb250aDtcbiAgICAgICAgWWVhckNvbmZpZy5Hb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdCA9IHllYXJDb25maWdPYmouR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQ7XG4gICAgICAgIGlmICh0aGlzLnllYXJDb25maWdFeHRlbnNpb24pIHtcbiAgICAgICAgICBsZXQgeWVhckNvbmZpZ0V4dERhdGE6IEV4dGVuc2lvbkRhdGEgPSB0aGlzLnllYXJDb25maWdFeHRlbnNpb24uZ2V0RXh0ZW5zaW9uRGF0YSh5ZWFyQ29uZmlnT2JqLCB7IHNvdXJjZTogXCJSZXN0ZnVsXCIgfSk7XG4gICAgICAgICAgWWVhckNvbmZpZy5zZXRFeHRlbnNpb24oeWVhckNvbmZpZ0V4dERhdGEpO1xuICAgICAgICB9XG5cblxuICAgICAgICBHb2FsU3RhdHVzLlBlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU0gPSBnb2FsU2V0dGluZ09iai5QZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNO1xuICAgICAgICBHb2FsU3RhdHVzLlRlYW1Hb2FsQXBwbGljYWJsZVlNID0gZ29hbFNldHRpbmdPYmouVGVhbUdvYWxBcHBsaWNhYmxlWU07XG4gICAgICAgIEdvYWxTdGF0dXMuR29hbFNldE1vbnRoID0gZ29hbFNldHRpbmdPYmouR29hbFNldE1vbnRoO1xuICAgICAgICBHb2FsU3RhdHVzLkFwcHJvdmVTdGF0dXMgPSBnb2FsU2V0dGluZ09iai5TdGF0dXM7XG4gICAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgbGV0IGdvYWxTZXR0aW5nRXh0RGF0YTogRXh0ZW5zaW9uRGF0YSA9IHRoaXMuZ29hbFNldHRpbmdFeHRlbnNpb24uZ2V0RXh0ZW5zaW9uRGF0YShnb2FsU2V0dGluZ09iaiwgeyBzb3VyY2U6IFwiUmVzdGZ1bFwiIH0pO1xuICAgICAgICAgIEdvYWxTdGF0dXMuc2V0RXh0ZW5zaW9uKGdvYWxTZXR0aW5nRXh0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGVyZm9ybWFuY2VUeXBlID09IFBFUkZPUk1BTkNFVFlQRS5QRVJTT05BTCkge1xuICAgICAgICAgIFN0ZXAxLkZZRkMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUlNPTl9GWUZDO1xuICAgICAgICAgIFN0ZXAxLkFubnVhbENvbnZlbnRpb24gPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFOTlVBTF9DT05WRU5USU9OO1xuICAgICAgICAgIFN0ZXAxLk1EUlQgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLk1EUlQ7XG4gICAgICAgICAgU3RlcDEuUHJvbW90aW9uUGxhbiA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUFJPTU9USU9OX1BMQU47XG4gICAgICAgICAgU3RlcDEuQWN0dWFsID0gYWxsWWVhckFjdHVhbDtcbiAgICAgICAgICBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkMsIGFsbFllYXJBY3R1YWwpO1xuXG4gICAgICAgICAgU3RlcDIuUGVyQ2FzZSA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSX0NBU0VfRllGQztcblxuICAgICAgICAgIGxldCBwZXJDYXNlID0gZ29hbFNldHRpbmdWYWx1ZU9iai5QRVJfQ0FTRV9GWUZDO1xuICAgICAgICAgIGxldCBhY3Rpdml0eUdvYWwgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0ZZRkMgPyBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0ZZRkMgOiBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUlNPTl9GWUZDO1xuICAgICAgICAgIGxldCBhY3Rpdml0eURheXMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0RBWVMgPyBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0RBWVMgOiB5ZWFyQ29uZmlnT2JqLk5vd1RvWWVhckVuZERheXM7XG4gICAgICAgICAgU3RlcDMgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2aXR5RGF0YShhY3Rpdml0eUdvYWwsIHBlckNhc2UsIFllYXJDb25maWcsIGFjdGl2aXR5RGF5cyk7XG5cbiAgICAgICAgICByZXR1cm5EYXRhcy5ZZWFyQ29uZmlnID0gWWVhckNvbmZpZztcbiAgICAgICAgICByZXR1cm5EYXRhcy5Hb2FsU3RhdHVzID0gR29hbFN0YXR1cztcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwMSA9IFN0ZXAxO1xuICAgICAgICAgIHJldHVybkRhdGFzLlN0ZXAyID0gU3RlcDI7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuU3RlcDMgPSBTdGVwMztcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwNCA9IFN0ZXA0O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3RlcDUuVGVhbUZZRkMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fRllGQztcbiAgICAgICAgICBTdGVwNS5UZWFtQU5QID0gZ29hbFNldHRpbmdWYWx1ZU9iai5URUFNX0FOUDtcbiAgICAgICAgICBTdGVwNS5NYW5wb3dlciA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9NQU5QT1dFUjtcbiAgICAgICAgICBTdGVwNS5SZWNydWl0bWVudCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9SRUNSVUlUTUVOVDtcblxuICAgICAgICAgIGxldCBhZ2VuY3lQbGFuT2JqID0gYXdhaXQgdGhpcy5nZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVJlc3RmdWwoRGF0YVllYXIsIEFnZW50SUQpO1xuXG4gICAgICAgICAgaWYgKGFnZW5jeVBsYW5PYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IG1haW5EYXRhTGlzdCA9IGFnZW5jeVBsYW5PYmouQWdlbmN5TWFpbkRhdGFMaXN0O1xuICAgICAgICAgICAgQWdlbmN5UGxhbi5GWUZDRm9yZWNhc3QgPSBtYWluRGF0YUxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIkZZRkNcIilbMF0uRm9yZWNhc3Q7XG4gICAgICAgICAgICBBZ2VuY3lQbGFuLkFOUEZvcmVjYXN0ID0gbWFpbkRhdGFMaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJBTlBcIilbMF0uRm9yZWNhc3RcbiAgICAgICAgICAgIEFnZW5jeVBsYW4uTWFucG93ZXJQbGFuID0gdGhpcy5jaGFuZ2VUb0Rhc2gobWFpbkRhdGFMaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJNYW5wb3dlclwiKVswXS5Nb250aFBsYW4pO1xuICAgICAgICAgICAgQWdlbmN5UGxhbi5SZWNydWl0bWVudFBsYW4gPSBtYWluRGF0YUxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIlJlY3J1aXRtZW50XCIpWzBdLk1vbnRoUGxhbjtcbiAgICAgICAgICAgIEFnZW5jeVBsYW4uQ29tcGxldGlvblJhdGUgPSBhZ2VuY3lQbGFuT2JqLkNvbXBsZXRpb25SYXRlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcImdldCBhZ2VuY3lQbGFuIGZhaWwuXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuRGF0YXMuWWVhckNvbmZpZyA9IFllYXJDb25maWc7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuR29hbFN0YXR1cyA9IEdvYWxTdGF0dXM7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuU3RlcDQgPSBTdGVwNDtcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwNSA9IFN0ZXA1O1xuXG4gICAgICAgICAgLy90b2RvIGdldCBjb21wbGV0aW9uUmF0ZSBcbiAgICAgICAgICAvLyBBZ2VuY3lQbGFuLkNvbXBsZXRpb25SYXRlID0gPyA7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuQWdlbmN5UGxhbiA9IEFnZW5jeVBsYW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybkRhdGFzID0gdGhpcy5fY29udmVyU2VsZWN0Q29kZShyZXR1cm5EYXRhcyk7XG4gICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgcmV0dXJuRGF0YXMgPSB0aGlzLmdvYWxTZXR0aW5nU3RlcC5jaGFuZ2VFbXB0eVRvRGFzaChyZXR1cm5EYXRhcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNTA1JywgJ2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJfZ2V0T3ZlcnZpZXdEYXRhQnlSZXN0ZnVsIHJldHVybkRhdGFzXCIsIHJldHVybkRhdGFzLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldHVybkRhdGFzKSkpO1xuICAgIHJldHVybiByZXR1cm5EYXRhcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBHb2FsU2V0dGluZyBvdmVydmlld1xuXG5cbiAgLy8jcmVnaW9uIGdldCBtb250aCBhY3R1YWwgJiBwbGFuXG4gIEBWYWxpZCgnR29hbFNldHRpbmdTdGVwNCcpXG4gIHB1YmxpYyBnZXRNb250aEFjdHVhbFBsYW4ocGVyZm9ybWFuY2VUeXBlOiBQRVJGT1JNQU5DRVRZUEUsIERhdGFZZWFyOiBudW1iZXIsIG1vbnRoUXVhbnRpdHlPZlllYXI6IG51bWJlciA9IDEyLCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aDogbnVtYmVyID0gOTksIEFnZW50SUQ6IHN0cmluZyA9IFwiXCIpOiBPYnNlcnZhYmxlPEdvYWxTZXR0aW5nU3RlcDQ+IHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShBZ2VudElEKSkge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhciwgbW9udGhRdWFudGl0eU9mWWVhciwgUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZSwgRGF0YVllYXIsIG1vbnRoUXVhbnRpdHlPZlllYXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBBZ2VudElEKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZTogc3RyaW5nLCBEYXRhWWVhcjogbnVtYmVyLCBtb250aFF1YW50aXR5T2ZZZWFyOiBudW1iZXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIsIEFnZW50SUQ6IHN0cmluZyk6IFByb21pc2U8R29hbFNldHRpbmdTdGVwND4ge1xuICAgIC8vIGNhbGwgR2V0R29hbEFQSSAoUmVzdGZ1bCBzZXQgQWdlbnRJRClcbiAgICBsZXQgR29hbFJlc3A6IGFueTtcbiAgICBsZXQgQWN0dWFsUmVzcDogYW55O1xuICAgIGxldCByZXR1cm5EYXRhczogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGdldEdvYWxhcGkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFwiKTtcbiAgICAgIGxldCBnZXRBY3R1YWxhcGkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0QWN0dWFsXCIpO1xuICAgICAgKDxnZXRHb2FsQVBJPmdldEdvYWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG4gICAgICAoPGdldEFjdHVhbEFQST5nZXRBY3R1YWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG5cbiAgICAgIFtHb2FsUmVzcCwgQWN0dWFsUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRHb2FsYXBpKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldEFjdHVhbGFwaSkudG9Qcm9taXNlKClcbiAgICAgIF0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdvYWxSZXNwXCIsIEdvYWxSZXNwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWN0dWFsUmVzcFwiLCBBY3R1YWxSZXNwKTtcblxuICAgICAgbGV0IEdvYWxQbGFuTWFwID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIGxldCBBY3R1YWxsTWFwID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIGxldCB0aGlzQWN0dWFsOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAgIGlmIChHb2FsUmVzcC5Hb2FscyAhPSBudWxsICYmIEFjdHVhbFJlc3AuQWN0dWFsICE9IG51bGwpIHtcbiAgICAgICAgR29hbFJlc3AuR29hbHMuZm9yRWFjaChHb2FsID0+IHtcbiAgICAgICAgICBpZiAoR29hbC5EYXRhWWVhciA9PSBEYXRhWWVhciAmJiBHb2FsLkdvYWxQbGFuLlZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBHb2FsLkdvYWxQbGFuLlZhbHVlcy5mb3JFYWNoKHBsYW4gPT4ge1xuICAgICAgICAgICAgICBpZiAocGxhbi5QZXJmb3JtYW5jZVR5cGUgPT0gcGVyZm9ybWFuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgR29hbFBsYW5NYXAuc2V0KHBsYW4uTW9udGgsIHBsYW4uVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpc0FjdHVhbCA9IEFjdHVhbFJlc3AuQWN0dWFsLmZpbHRlcihBY3R1YWwgPT4gQWN0dWFsLkRhdGFZZWFyID09IERhdGFZZWFyKS5tYXAoeCA9PiB4LlZhbHVlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpc0FjdHVhbFwiLCB0aGlzQWN0dWFsKTtcbiAgICAgICAgdGhpc0FjdHVhbC5mb3JFYWNoKEFjdHVhbCA9PiB7XG4gICAgICAgICAgQWN0dWFsLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLkRhdGFUeXBlID09IFwiRllGQ1wiICYmIHZhbHVlLlBlcmZvcm1hbmNlVHlwZSA9PSBwZXJmb3JtYW5jZVR5cGUpIHtcbiAgICAgICAgICAgICAgQWN0dWFsbE1hcC5zZXQodmFsdWUuTW9udGgsIHZhbHVlLlZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IEdvYWwgZmFpbC4gR29hbFJlc3A6XCIgKyBHb2FsUmVzcDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbW9udGhRdWFudGl0eU9mWWVhcjsgaSsrKSB7XG4gICAgICAgIE1vbnRoQWN0dWFsUGxhbkxpc3QucHVzaChuZXcgTW9udGhseVBsYW5GWUZDRGF0YShcbiAgICAgICAgICBpLFxuICAgICAgICAgIHRoaXMuY2hhbmdlVG9EYXNoKEdvYWxQbGFuTWFwLmdldChpKSksXG4gICAgICAgICAgQWN0dWFsbE1hcC5nZXQoaSkgPT0gbnVsbCB8fCBpID4gUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPyB0aGlzLkRBU0ggOiBBY3R1YWxsTWFwLmdldChpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuRGF0YXMuTW9udGhMaXN0ID0gTW9udGhBY3R1YWxQbGFuTGlzdDtcbiAgICAgIHJldHVybkRhdGFzLkFjdHVhbCA9IHRoaXMuY2FsY3VsYXRlQWN0dWFsKFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YXMuRm9yZWNhc3QgPSB0aGlzLmNhbGN1bGF0ZUZvcmVjYXN0KFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YXMuU2hvcnRmYWxsID0gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MTAnLCAnZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIl9nZXRNb250aEFjdHVhbFBsYW5CeVJlc3RmdWwgRGF0YXNcIiwgcmV0dXJuRGF0YXMpO1xuICAgIHJldHVybiByZXR1cm5EYXRhcztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE1vbnRoQWN0dWFsUGxhbkJ5U1FMKHBlcmZvcm1hbmNlVHlwZTogc3RyaW5nLCBEYXRhWWVhcjogbnVtYmVyLCBtb250aFF1YW50aXR5T2ZZZWFyOiBudW1iZXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIpOiBQcm9taXNlPEdvYWxTZXR0aW5nU3RlcDQ+IHtcblxuICAgIGNvbnNvbGUubG9nKCdfZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwgcGVyZm9ybWFuY2VUeXBlJywgcGVyZm9ybWFuY2VUeXBlLCAnRGF0YVllYXInLCBEYXRhWWVhciwgJ21vbnRoUXVhbnRpdHlPZlllYXInLCBtb250aFF1YW50aXR5T2ZZZWFyLCAnUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgnLCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aClcbiAgICBsZXQgcmV0dXJuRGF0YTogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhY3R1YWxSZXNwLCBnb2FsUGxhblJlc3A7XG4gICAgICAvLyBjYWxsIEdldEdvYWxTZXR0aW5nVmFsdWUgICAgICAgLy8gY2FsbCBHZXRBY3R1YWxWYWx1ZVxuICAgICAgbGV0IGdvYWxQbGFuTGlzdDogc3RyaW5nW10gPSBBcnJheShtb250aFF1YW50aXR5T2ZZZWFyKS5maWxsKHRoaXMuREFTSCwgMCk7XG4gICAgICBsZXQgYWN0dWFsTGlzdDogc3RyaW5nW10gPSBBcnJheShtb250aFF1YW50aXR5T2ZZZWFyKS5maWxsKHRoaXMuREFTSCwgMCk7XG4gICAgICBsZXQgZ29hbFBsYW4gPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdQbGFuXCIpO1xuICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0FjdHVhbFZhbHVlXCIpO1xuICAgICAgKDxHb2FsU2V0dGluZ0dldFBsYW5BUEk+Z29hbFBsYW4pLnNldERhdGFZZWFyKERhdGFZZWFyKTtcbiAgICAgICg8R29hbFNldHRpbmdHZXRBY3R1YWxBUEk+YWN0dWFsKS5zZXREYXRhWWVhcihEYXRhWWVhcik7XG5cbiAgICAgIFtnb2FsUGxhblJlc3AsIGFjdHVhbFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ29hbFBsYW4pLnRvUHJvbWlzZSgpLFxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0dWFsKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxQbGFuUmVzcFwiLCBnb2FsUGxhblJlc3ApO1xuICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxSZXNwXCIsIGFjdHVhbFJlc3ApO1xuXG4gICAgICBpZiAoZ29hbFBsYW5SZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBhY3R1YWxSZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICBnb2FsUGxhblJlc3BbXCJCb2R5XCJdLmZpbHRlcih4ID0+IHguUGVyZm9ybWFuY2VUeXBlID09IHBlcmZvcm1hbmNlVHlwZSkubWFwKHggPT4ge1xuICAgICAgICAgIGdvYWxQbGFuTGlzdFt4Lk1vbnRoIC0gMV0gPSB4LlZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY3R1YWxSZXNwW1wiQm9keVwiXS5maWx0ZXIoeCA9PiB4LlBlcmZvcm1hbmNlVHlwZSA9PSBwZXJmb3JtYW5jZVR5cGUgJiYgeC5EYXRhVHlwZSA9PSBcIkZZRkNcIiAmJiB4Lk1vbnRoIDw9IFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoKS5tYXAoeCA9PiB7XG4gICAgICAgICAgYWN0dWFsTGlzdFt4Lk1vbnRoIC0gMV0gPSB4LlZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJnZXQgR29hbFNldHRpbmcgZmFpbC4gZ29hbFBsYW5SZXNwXCIgKyBnb2FsUGxhblJlc3AuSGVhZGVyLm1zZyArICdhY3R1YWxSZXNwOicgKyBhY3R1YWxSZXNwLkhlYWRlci5tc2c7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxQbGFuTGlzdFwiLCBnb2FsUGxhbkxpc3QpO1xuICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxsaXN0XCIsIGFjdHVhbExpc3QpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtb250aFF1YW50aXR5T2ZZZWFyOyBpKyspIHtcbiAgICAgICAgTW9udGhBY3R1YWxQbGFuTGlzdC5wdXNoKG5ldyBNb250aGx5UGxhbkZZRkNEYXRhKFxuICAgICAgICAgIGksXG4gICAgICAgICAgZ29hbFBsYW5MaXN0W2kgLSAxXSxcbiAgICAgICAgICBhY3R1YWxMaXN0W2kgLSAxXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuRGF0YS5Nb250aExpc3QgPSBNb250aEFjdHVhbFBsYW5MaXN0O1xuICAgICAgcmV0dXJuRGF0YS5BY3R1YWwgPSB0aGlzLmNhbGN1bGF0ZUFjdHVhbChQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgTW9udGhBY3R1YWxQbGFuTGlzdCkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybkRhdGEuRm9yZWNhc3QgPSB0aGlzLmNhbGN1bGF0ZUZvcmVjYXN0KFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YS5TaG9ydGZhbGwgPSBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQxMScsICdnZXRNb250aEFjdHVhbFBsYW5CeVNRTCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiX2dldE1vbnRoQWN0dWFsUGxhbkJ5U1FMIHJldHVybkRhdGFcIiwgcmV0dXJuRGF0YSk7XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gZ2V0IG1vbnRoIGFjdHVhbCAmIHBsYW5cblxuXG4gIC8vI3JlZ2lvbiBBZ2VuY3lQbGFuIERhdGFzXG4gIHB1YmxpYyBnZXRBZ2VuY3lQbGFuTWFpbkRhdGEoZGF0YVllYXI6IG51bWJlciwgQWdlbnRJRDogc3RyaW5nID0gXCJcIik6IE9ic2VydmFibGU8QWdlbmN5UGxhbk1haW5JbmZvPiB7XG4gICAgaWYgKEFnZW50SUQgPT0gXCJcIikge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5nZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTChkYXRhWWVhcikpO1xuICAgIH0gZWxzZSBpZiAoQWdlbnRJRCAhPSBcIlwiKSB7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLmdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bChkYXRhWWVhciwgQWdlbnRJRCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlTUUwoZGF0YVllYXI6IG51bWJlcik6IFByb21pc2U8QWdlbmN5UGxhbk1haW5JbmZvPiB7XG4gICAgY29uc29sZS5sb2coJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5U1FMIERhdGFZZWFyJywgZGF0YVllYXIpO1xuXG4gICAgbGV0IHJldHVybkRhdGE6IEFnZW5jeVBsYW5NYWluSW5mbyA9IG5ldyBBZ2VuY3lQbGFuTWFpbkluZm8oKTtcblxuICAgIGxldCBvdGhlclBhcmFSZXNwO1xuICAgIGxldCBhZ2VuY3lQbGFuUmVzcDtcblxuICAgIHRyeSB7XG4gICAgICAvL2dldCBjb21wbGV0aW9uUmF0ZSBcbiAgICAgIGxldCBnZXRPdGhlclBhcmFtZXRlckFQSTogR2V0T3RoZXJQYXJhbWV0ZXJBUEkgPSA8R2V0T3RoZXJQYXJhbWV0ZXJBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0T3RoZXJQYXJhbWV0ZXInKTtcbiAgICAgIGxldCBhZ2VuY3lQbGFuR2V0TWFpbkFQSTogQWdlbmN5UGxhbkdldE1haW5BUEkgPSA8QWdlbmN5UGxhbkdldE1haW5BUEk+KHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRBZ2VuY3lQbGFuTWFpblwiKSk7XG4gICAgICBnZXRPdGhlclBhcmFtZXRlckFQSS5TZXRZZWFyKGRhdGFZZWFyKTtcbiAgICAgIGFnZW5jeVBsYW5HZXRNYWluQVBJLnNldERhdGFZZWFyKGRhdGFZZWFyKTtcblxuICAgICAgW290aGVyUGFyYVJlc3AsIGFnZW5jeVBsYW5SZXNwXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBbZ2V0T3RoZXJQYXJhbWV0ZXJBUEksIGFnZW5jeVBsYW5HZXRNYWluQVBJXS5tYXAoYXBpID0+IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChhcGkpLnRvUHJvbWlzZSgpKSk7XG4gICAgICBjb25zb2xlLmxvZygnb3RoZXJQYXJhUmVzcDogJywgb3RoZXJQYXJhUmVzcCwgXCJhZ2VuY3lQbGFuUmVzcFwiLCBhZ2VuY3lQbGFuUmVzcCk7XG5cbiAgICAgIGlmIChvdGhlclBhcmFSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBhZ2VuY3lQbGFuUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgbGV0IHJlc3BGaWx0ZXJDb21wbGV0aW9uUmF0ZSA9IG90aGVyUGFyYVJlc3BbJ0JvZHknXS5maWx0ZXIoeCA9PiB4Lk1hcHBpbmdJRCA9PT0gXCJDb21wbGV0aW9uUmF0ZVwiKTtcbiAgICAgICAgbGV0IGNvbXBsZXRpb25SYXRlOiBzdHJpbmcgPSByZXNwRmlsdGVyQ29tcGxldGlvblJhdGUubGVuZ3RoID4gMCA/IHJlc3BGaWx0ZXJDb21wbGV0aW9uUmF0ZVswXS5TZXRWYWx1ZSA6ICcnO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0OiBBcnJheTxBZ2VuY3lQbGFuTWFpbkRhdGE+ID0gW107XG4gICAgICAgIGxldCBBZ2VuY3lQbGFuTWFpbkxpc3QgPSBhZ2VuY3lQbGFuUmVzcFtcIkJvZHlcIl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlTUUwgQWdlbmN5UGxhbk1haW5MaXN0XCIsIEFnZW5jeVBsYW5NYWluTGlzdCk7XG4gICAgICAgIGlmIChBZ2VuY3lQbGFuTWFpbkxpc3QpIHtcbiAgICAgICAgICByZXR1cm5MaXN0ID0gKDxBcnJheTxhbnk+PkFnZW5jeVBsYW5NYWluTGlzdCkubWFwKG1haW4gPT4gdGhpcy5fYWdlbmN5UGxhbk1haW5EYXRhT2JqVG9CZWFuKG1haW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBcImdldCBBZ2VuY3lQbGFuTWFpbkxpc3QgZmFpbC5cIlxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTCByZXR1cm5MaXN0OicsIHJldHVybkxpc3QpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0aW9uUmF0ZTonLCBjb21wbGV0aW9uUmF0ZSk7XG4gICAgICAgIHJldHVybkRhdGEuQ29tcGxldGlvblJhdGUgPSBjb21wbGV0aW9uUmF0ZTtcbiAgICAgICAgcmV0dXJuRGF0YS5BZ2VuY3lNYWluRGF0YUxpc3QgPSByZXR1cm5MaXN0O1xuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMzAwJywgJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5U1FMIGZhaWwhJyArIGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTCByZXR1cm5EYXRhXCIsIHJldHVybkRhdGEpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbmN5UGxhbk1haW5EYXRhT2JqVG9CZWFuKG9iamVjdDogYW55KTogQWdlbmN5UGxhbk1haW5EYXRhIHtcbiAgICBsZXQgYWdlbmN5UGxhbk1haW5EYXRhOiBBZ2VuY3lQbGFuTWFpbkRhdGEgPSBuZXcgQWdlbmN5UGxhbk1haW5EYXRhKCk7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLkFjdHVhbCA9IG9iamVjdC5BY3R1YWw7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLkRhdGFUeXBlID0gb2JqZWN0LkRhdGFUeXBlO1xuICAgIGFnZW5jeVBsYW5NYWluRGF0YS5EYXRhWWVhciA9IG9iamVjdC5EYXRhWWVhcjtcbiAgICBhZ2VuY3lQbGFuTWFpbkRhdGEuRm9yZWNhc3QgPSBvYmplY3QuRm9yZWNhc3Q7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLk1vbnRoUGxhbiA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Nb250aFBsYW4pO1xuICAgIHJldHVybiBhZ2VuY3lQbGFuTWFpbkRhdGE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bChkYXRhWWVhcjogbnVtYmVyLCBBZ2VudElEOiBzdHJpbmcpOiBQcm9taXNlPEFnZW5jeVBsYW5NYWluSW5mbz4ge1xuXG4gICAgY29uc29sZS5sb2coJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCBkYXRhWWVhcicsIGRhdGFZZWFyLCAnQWdlbnRJRCcsIEFnZW50SUQpO1xuICAgIGxldCByZXR1cm5EYXRhOiBBZ2VuY3lQbGFuTWFpbkluZm8gPSBuZXcgQWdlbmN5UGxhbk1haW5JbmZvKCk7XG4gICAgbGV0IE1haW5MaXN0OiBBcnJheTxBZ2VuY3lQbGFuTWFpbkRhdGE+ID0gW107XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGdldEFnZW5jeVBsYW5BUEk6IGdldEFnZW5jeVBsYW5BUEkgPSA8Z2V0QWdlbmN5UGxhbkFQST4odGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEFnZW5jeVBsYW5cIikpO1xuICAgICAgZ2V0QWdlbmN5UGxhbkFQSS5zZXRBZ2VudElEKEFnZW50SUQpO1xuICAgICAgbGV0IGFnZW5jeVBsYW5SZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldEFnZW5jeVBsYW5BUEkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCBhZ2VuY3lQbGFuUmVzcCBcIiwgYWdlbmN5UGxhblJlc3ApO1xuICAgICAgaWYgKGFnZW5jeVBsYW5SZXNwLkFnZW5jeVBsYW5zICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGFnZW5jeVBsYW5NYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoYWdlbmN5UGxhblJlc3AuQWdlbmN5UGxhbnMpO1xuICAgICAgICBsZXQgY29tcGxldGlvblJhdGUgPSBhZ2VuY3lQbGFuTWFwLmdldChkYXRhWWVhcikuQ29tcGxldGlvblJhdGU7XG4gICAgICAgIGxldCB0ZW1wQWdlbmN5UGxhbkxpc3QgPSBhZ2VuY3lQbGFuTWFwLmdldChkYXRhWWVhcikuVmFsdWVzO1xuICAgICAgICAoPEFycmF5PGFueT4+dGVtcEFnZW5jeVBsYW5MaXN0KS5mb3JFYWNoKHBsYW4gPT4ge1xuICAgICAgICAgIHBsYW5bJ01vbnRoUGxhbiddID0gcGxhblsnUGxhbiddO1xuICAgICAgICAgIHBsYW5bJ0RhdGFZZWFyJ10gPSBkYXRhWWVhcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWFpbkxpc3QgPSAoPEFycmF5PGFueT4+dGVtcEFnZW5jeVBsYW5MaXN0KS5tYXAocGxhbiA9PiB0aGlzLl9hZ2VuY3lQbGFuTWFpbkRhdGFPYmpUb0JlYW4ocGxhbikpO1xuICAgICAgICByZXR1cm5EYXRhLkFnZW5jeU1haW5EYXRhTGlzdCA9IE1haW5MaXN0O1xuICAgICAgICByZXR1cm5EYXRhLkNvbXBsZXRpb25SYXRlID0gY29tcGxldGlvblJhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcImdldCBBZ2VuY3lQbGFuIGZhaWwuIGFnZW5jeVBsYW5SZXNwOlwiICsgYWdlbmN5UGxhblJlc3A7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAzMDEnLCAnZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCByZXR1cm5EYXRhIFwiLCByZXR1cm5EYXRhKTtcbiAgICByZXR1cm4gcmV0dXJuRGF0YTtcblxuICB9XG5cbiAgQFZhbGlkKCdBZ2VuY3lQbGFuRGV0YWlsJylcbiAgcHVibGljIGdldEFnZW5jeVBsYW5EZXRhaWxEYXRhKGRhdGFZZWFyOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+PiB7XG5cbiAgICBsZXQgYWdlbmN5UGxhbkdldERldGFpbEFQSTogQWdlbmN5UGxhbkdldERldGFpbEFQSSA9IDxBZ2VuY3lQbGFuR2V0RGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRBZ2VuY3lQbGFuRGV0YWlsXCIpO1xuICAgIGFnZW5jeVBsYW5HZXREZXRhaWxBUEkuc2V0RGF0YVllYXIoZGF0YVllYXIpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goYWdlbmN5UGxhbkdldERldGFpbEFQSSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgIGlmIChyZXNwW1wiQm9keVwiXSkge1xuICAgICAgICAgICAgbGV0IHJldHVybkxpc3Q6IEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+ID0gW107XG4gICAgICAgICAgICAvLyBsZXQgQWdlbmN5UGxhbkRldGFpbExpc3Q6IEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+ID0gcmVzcFtcIkJvZHlcIl07XG4gICAgICAgICAgICByZXR1cm5MaXN0ID0gKDxBcnJheTxhbnk+PnJlc3BbXCJCb2R5XCJdKS5tYXAoaXRlbSA9PiB0aGlzLl9hZ2VuY3lQbGFuRGV0YWlsT2JqVG9CZWFuKGl0ZW0pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuTGlzdCBpbiBzZXJ2aWNlOiBcIiwgcmV0dXJuTGlzdCk7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcImdldCBhZ2VuY3lQbGFuR2V0RGV0YWlsIGZhaWwuIHJlc3A6XCIgKyByZXNwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDMwMicsICdnZXRBZ2VuY3lQbGFuRGV0YWlsRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZ2VuY3lQbGFuRGV0YWlsT2JqVG9CZWFuKG9iamVjdDogYW55KTogQWdlbmN5UGxhbkRldGFpbCB7XG4gICAgbGV0IGFnZW5jeVBsYW5EZXRhaWwgPSBuZXcgQWdlbmN5UGxhbkRldGFpbCgpO1xuXG4gICAgYWdlbmN5UGxhbkRldGFpbC5BZ2VudElEID0gb2JqZWN0LkFnZW50SUQ7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5BZ2VudE5hbWUgPSBvYmplY3QuQWdlbnROYW1lO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRGF0YVllYXIgPSBvYmplY3QuRGF0YVllYXI7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5BcHBVc2VNb2RlID0gb2JqZWN0LkFwcFVzZU1vZGU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5Kb2JHcmFkZSA9IG9iamVjdC5Kb2JHcmFkZTtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLkFjdHVhbCA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5BY3R1YWwpO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuQ2FzZUNvdW50ID0gdGhpcy5jaGFuZ2VUb0Rhc2gob2JqZWN0LkNhc2VDb3VudCk7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5DbGllbnRJRCA9IG9iamVjdC5DbGllbnRJRDtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLkRhdGFUeXBlID0gb2JqZWN0LkRhdGFUeXBlO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRGlyZWN0VW5pdFR5cGUgPSBvYmplY3QuRGlyZWN0VW5pdFR5cGU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5EcmlsbGRvd24gPSBvYmplY3QuRHJpbGxkb3duO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuVGV4dENvbG9yID0gYWdlbmN5UGxhbkRldGFpbC5EcmlsbGRvd24gPT0gJ1knID8gJ2JsdWUnIDogJ2RlZmF1bHQnO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRm9yZWNhc3QgPSB0aGlzLmNoYW5nZVRvRGFzaChvYmplY3QuRm9yZWNhc3QpO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuR29hbCA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Hb2FsKTtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLklzQXBwcm92ZSA9IG9iamVjdC5Jc0FwcHJvdmU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5Jc0hhc0RvdCA9IGFnZW5jeVBsYW5EZXRhaWwuSXNBcHByb3ZlID09PSAnWSc7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5NYW5wb3dlciA9IG9iamVjdC5NYW5wb3dlcjtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLk1vbnRoUGxhbiA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Nb250aFBsYW4pO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuT3JkZXJzID0gb2JqZWN0Lk9yZGVycztcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLlBlckNhc2UgPSB0aGlzLmNoYW5nZVRvRGFzaChvYmplY3QuUGVyQ2FzZSk7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5SZWNydWl0bWVudCA9IG9iamVjdC5SZWNydWl0bWVudDtcblxuICAgIHJldHVybiBhZ2VuY3lQbGFuRGV0YWlsO1xuXG4gIH1cblxuICBAVmFsaWQoJ0FnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQnKVxuICBwdWJsaWMgYXN5bmMgZ2V0R29hbEV4cGVjdGVkKGRhdGFZZWFyOiBudW1iZXIpOiBQcm9taXNlPEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQ+IHtcblxuICAgIGxldCByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkOiBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkO1xuICAgIGxldCBnb2FsU2V0dGluZ1llYXJDb25maWdBUEk6IEdvYWxTZXR0aW5nR2V0WWVhckNvbmZpZ0FQSSA9IDxHb2FsU2V0dGluZ0dldFllYXJDb25maWdBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgICBnb2FsU2V0dGluZ1llYXJDb25maWdBUEkuc2V0RGF0YVllYXIoZGF0YVllYXIpO1xuICAgIGxldCBnb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJOiBHb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJID0gPEdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nRXhwZWN0ZWRcIik7XG4gICAgZ29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSS5zZXREYXRhWWVhcihkYXRhWWVhcik7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB5ZWFyQ29uZmlnUmVzcDtcbiAgICAgIGxldCBnb2FsRXhwZWN0ZWRSZXNwO1xuXG4gICAgICBbeWVhckNvbmZpZ1Jlc3AsIGdvYWxFeHBlY3RlZFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ29hbFNldHRpbmdZZWFyQ29uZmlnQVBJKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkpLnRvUHJvbWlzZSgpXG4gICAgICBdKVxuXG4gICAgICBpZiAoZ29hbEV4cGVjdGVkUmVzcCAmJiB5ZWFyQ29uZmlnUmVzcCkge1xuICAgICAgICBsZXQgZXhwZWN0ZWRSZXNwQm9keTogQXJyYXk8YW55PiA9IGdvYWxFeHBlY3RlZFJlc3BbXCJCb2R5XCJdO1xuICAgICAgICBsZXQgeWVhckNvbmZpZ1Jlc3BCb2R5OiBBcnJheTxhbnk+ID0geWVhckNvbmZpZ1Jlc3BbXCJCb2R5XCJdO1xuXG4gICAgICAgIHJldHVybkFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQgPSBleHBlY3RlZFJlc3BCb2R5Lmxlbmd0aCA+IDAgPyB0aGlzLl9hZ2VuY3lQbGFuR29hbEV4cGVjdGVkT2JqVG9CZWFuKGV4cGVjdGVkUmVzcEJvZHlbMF0pIDogbmV3IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQoZGF0YVllYXIpO1xuICAgICAgICByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkLkZZRkNDb252ZXJ0QU5QUmF0ZSA9IHllYXJDb25maWdSZXNwQm9keVswXVsnRnlmY0NvdmVydEFucFJhdGUnXTtcbiAgICAgICAgcmV0dXJuQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5Xb3JraW5nUXVhcnRlciA9IHllYXJDb25maWdSZXNwQm9keVswXVsnV29ya2luZ1F1YXJ0ZXInXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImdldEdvYWxFeHBlY3RlZCB0cmFuc1wiLCByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IGdvYWwgZXhwZWN0ZWQgYW5kIHllYXJDb25maWdmYWlsLlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuQWdlbmN5UGxhbkdvYWxFeHBlY3RlZDtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDMwMycsICdnZXRHb2FsRXhwZWN0ZWQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbmN5UGxhbkdvYWxFeHBlY3RlZE9ialRvQmVhbihvYmplY3Q6IGFueSk6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQge1xuXG4gICAgbGV0IGdvYWxFeHBlY3RlZDogQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCA9IG5ldyBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkKG9iamVjdC5EYXRhWWVhcik7XG5cbiAgICBnb2FsRXhwZWN0ZWQuQU5QID0gb2JqZWN0LkFOUC50b1N0cmluZygpO1xuICAgIGdvYWxFeHBlY3RlZC5GWUZDID0gb2JqZWN0LkZZRkMudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTEgPSBvYmplY3QuUTEudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTIgPSBvYmplY3QuUTIudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTMgPSBvYmplY3QuUTMudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTQgPSBvYmplY3QuUTQudG9TdHJpbmcoKTtcbiAgICBsZXQgbnVtYmVyUmVjcnVpdG1lbnRUb3RhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKG9iamVjdC5SZWNydWl0bWVudFRvdGFsKSA/IE51bWJlcihvYmplY3QuUmVjcnVpdG1lbnRUb3RhbCkgOiAwO1xuICAgIGdvYWxFeHBlY3RlZC5SZWNydWl0bWVudFRvdGFsID0gbnVtYmVyUmVjcnVpdG1lbnRUb3RhbDtcbiAgICByZXR1cm4gZ29hbEV4cGVjdGVkO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGFSZWNydWl0bWVudFN1bShnb2FsRXhwZWN0ZWQ6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQpOiBudW1iZXIge1xuICAgIHJldHVybiBbZ29hbEV4cGVjdGVkLlExLCBnb2FsRXhwZWN0ZWQuUTIsIGdvYWxFeHBlY3RlZC5RMywgZ29hbEV4cGVjdGVkLlE0XS5yZWR1Y2UoKHRvdGFsLCBlYWNoKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyUSA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGVhY2gpID8gTnVtYmVyKGVhY2gpIDogMDtcbiAgICAgIHJldHVybiB0b3RhbCArIG51bWJlclE7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUdvYWxFeHBlY3RlZChleHBlY3RlZFJlY3J1aXRtZW50OiBvYmplY3QsIGluZGlyZWN0UmVjcnVpdG1lbnQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgZ29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSTogR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSSA9IDxHb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJzZXRHb2FsU2V0dGluZ0V4cGVjdGVkXCIpO1xuICAgIGdvYWxTZXR0aW5nU2V0RXhwZWN0ZWRBUEkuc2V0RXhwZWN0ZWRSZWNydWl0bWVudChleHBlY3RlZFJlY3J1aXRtZW50KTtcbiAgICBnb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJLnNldEluZGlyZWN0UmVjcnVpdG1lbnQoaW5kaXJlY3RSZWNydWl0bWVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwW1wiSGVhZGVyXCJdKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMzA0JywgJ3NhdmVHb2FsRXhwZWN0ZWQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uIEFnZW5jeVBsYW4gRGF0YXNcblxuXG4gIC8vI3JlZ2lvbiBvdGhlciBmdW5jdGlvblxuICBwdWJsaWMgbnVtYmVyVG9GaXgobjogbnVtYmVyLCB0b0ZpeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZml4MTAgPSBNYXRoLnBvdygxMCwgdG9GaXgpO1xuICAgIGxldCByZXR1cm5EYXRhID0gTWF0aC5yb3VuZCh0aGlzLnN0cmlwKG4pICogZml4MTApIC8gZml4MTA7XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cblxuICBwdWJsaWMgc3RyaXAobnVtLCBwcmVjaXNpb24gPSAxMikge1xuICAgIHJldHVybiBOdW1iZXIobnVtLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwoRllGQzogYW55LCBhY3R1YWw6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsIEZZRkM6XCIsIEZZRkMsIFwiYWN0dWFsOlwiLCBhY3R1YWwpO1xuICAgIGxldCBjYWN1bGV0ZUFjdHVhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGFjdHVhbCkgPyBOdW1iZXIoYWN0dWFsKSA6IDA7XG4gICAgaWYgKCFOdW1iZXJVdGlscy5pc051bWJlcihGWUZDKSkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc3VsdCA9IE51bWJlcihGWUZDKSAtIGNhY3VsZXRlQWN0dWFsIDwgMCA/IDAgOiBOdW1iZXIoRllGQykgLSBjYWN1bGV0ZUFjdHVhbDtcbiAgICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQWxsWWVhckdvYWwoTm93VG9ZZWFyRW5kOiBhbnksIGFjdHVhbDogYW55KTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwgTm93VG9ZZWFyRW5kOlwiLCBOb3dUb1llYXJFbmQsIFwiYWN0dWFsOlwiLCBhY3R1YWwpO1xuICAgIGxldCBjYWN1bGV0ZUFjdHVhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGFjdHVhbCkgPyBOdW1iZXIoYWN0dWFsKSA6IDA7XG4gICAgaWYgKCFOdW1iZXJVdGlscy5pc051bWJlcihOb3dUb1llYXJFbmQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5EQVNIO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKE51bWJlcihOb3dUb1llYXJFbmQpICsgY2FjdWxldGVBY3R1YWwpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIF9pc1BvcHVwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBzYXZlRmVlZGJhY2tTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc2F2ZUZlZWRiYWNrU3RhdGUoaXNQb3B1cDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzUG9wdXAgPSBpc1BvcHVwO1xuICB9XG5cbiAgcHVibGljIGdldEFjdHVhbFBsYW5Gcm9tTW9udGhMaXN0KGxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+LCBhY3R1YWxNb250aDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRBY3R1YWxQbGFuRnJvbU1vbnRoTGlzdDpcIiwgbGlzdCwgYWN0dWFsTW9udGgpO1xuICAgIHJldHVybiBsaXN0Lm1hcCgoeCwgaW5kZXgpID0+IChpbmRleCArIDEgPCBhY3R1YWxNb250aCB8fCBpbmRleCArIDEgPT09IGFjdHVhbE1vbnRoID8geC5BY3R1YWwgOiB4LlBsYW4pKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVBTlBGcm9tRllGQyhGWUZDLCByYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShGWUZDKSB8fCBGWUZDID09IHRoaXMuREFTSCkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyVG9GaXgoTnVtYmVyKEZZRkMpICogTnVtYmVyKHJhdGUpLCAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVGWUZDRnJvbUFOUChBTlAsIHJhdGUpOiBzdHJpbmcge1xuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KEFOUCkgfHwgQU5QID09IHRoaXMuREFTSCkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyVG9GaXgoTnVtYmVyKEFOUCkgLyBOdW1iZXIocmF0ZSksIDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uIG90aGVyIGZ1bmN0aW9uXG5cblxuICAvLyNyZWdpb24gU3luYyBEYXRhcyBcbiAgcHVibGljIGFzeW5jIHN5bmNHb2FsRGF0YXMoKSB7XG4gICAgdGhpcy5nb2FsU3RvcmUuc2V0U3luY0dvYWxEYXRhcyhTWU5DX1NUQVRVUy5TWU5DKTtcbiAgICBhd2FpdCB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJHT0FMXCIsIFwiUFJPR1JFU1NcIl0sIHRydWUpO1xuICAgIHRoaXMuZ29hbFN0b3JlLnNldFN5bmNHb2FsRGF0YXMoU1lOQ19TVEFUVVMuRklOSVNIKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzeW5jQWdlbmN5UGxhbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmMoW1wiQUdFTkNZX1BMQU5cIl0sIHRydWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN5bmNZZWFyQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJZRUFSX0NPTkZJR1wiXSwgdHJ1ZSk7XG4gIH1cblxuICBAVmFsaWQoJ1N1Y2Nlc3NTdGF0dXMnKVxuICBwdWJsaWMgYXN5bmMgcHVzaEFwcHJvdmVHb2FsKGFwcHJvdmVJbmZvOiBBcHByb3ZlSW5mbyk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLl9wdXNoQXBwcm92ZUdvYWwoYXBwcm92ZUluZm8pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVRvRGFzaChwYXJhbTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHBhcmFtID09PSAtMSB8fCBwYXJhbSA9PT0gbnVsbCB8fCBwYXJhbSA9PT0gXCJcIikgPyB0aGlzLkRBU0ggOiBwYXJhbS50b1N0cmluZygpO1xuICB9XG4gIC8vI2VuZHJlZ2lvbiBTeW5jIERhdGFzIFxuXG4gIHByaXZhdGUgYXN5bmMgX3B1c2hBcHByb3ZlR29hbChhcHByb3ZlSW5mbzogQXBwcm92ZUluZm8pOiBQcm9taXNlPFN1Y2Nlc3NTdGF0dXM+IHtcbiAgICBsZXQgcmV0dXJuUmVzcDogU3VjY2Vzc1N0YXR1cyA9IG5ldyBTdWNjZXNzU3RhdHVzKGZhbHNlKTtcbiAgICBsZXQgYXBwcm92ZUluZm9EYXRhID0ge1xuICAgICAgXCJBZ2VudElEXCI6IGFwcHJvdmVJbmZvLkFnZW50SUQsXG4gICAgICBcIkRhdGFZZWFyXCI6IGFwcHJvdmVJbmZvLkRhdGFZZWFyLFxuICAgICAgXCJpc0FwcHJvdmVcIjogYXBwcm92ZUluZm8uSXNBcHByb3ZlLFxuICAgICAgXCJjb21tZW50XCI6IGFwcHJvdmVJbmZvLkNvbW1lbnRcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBtYWluRGF0YSA9IGFwcHJvdmVJbmZvRGF0YTtcbiAgICAgIGxldCBwdXNoQXBwcm92ZURhdGEgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwicHVzaEFwcHJvdmVHb2FsXCIpO1xuICAgICAgKDxwdXNoQXBwcm92ZUdvYWxBUEk+cHVzaEFwcHJvdmVEYXRhKS5tYWluRGF0YSA9IG1haW5EYXRhO1xuICAgICAgY29uc29sZS5sb2coJ3B1c2hBcHByb3ZlR29hbCBtYWluRGF0YScsIG1haW5EYXRhKTtcbiAgICAgIGxldCBnZXRSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHB1c2hBcHByb3ZlRGF0YSkudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0UmVzcCcsIGdldFJlc3ApO1xuICAgICAgaWYgKGdldFJlc3Auc3VjY2Vzcykge1xuICAgICAgICBhd2FpdCB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJEQVNIQk9BUkRcIiwgXCJHT0FMXCIsIFwiUFJPR1JFU1NcIl0pO1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIkFwcHJvdmUgR29hbCBmYWlsLlwiO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDEwMCcsICdwdXNoQXBwcm92ZUdvYWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIltfcHVzaEFwcHJvdmVHb2FsXSByZXR1cm5SZXNwOlwiLCByZXR1cm5SZXNwKTtcbiAgICByZXR1cm4gcmV0dXJuUmVzcDtcblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcHVzaEdvYWxTZXR0aW5nKHN1Ym1pdERhdGFzOiBTdWJtaXRHb2FsRGF0YSk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuXG4gICAgbGV0IHJldHVyblJlc3A6IFN1Y2Nlc3NTdGF0dXMgPSBuZXcgU3VjY2Vzc1N0YXR1cyhmYWxzZSk7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc29sZS5sb2coJ3B1c2hHb2FsU2V0dGluZ0RhdGFBUEkgbWFpbkRhdGEnLCBzdWJtaXREYXRhcyk7XG4gICAgICBsZXQgcHVzaEdvYWxTZXR0aW5nRGF0YSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJwdXNoR29hbFNldHRpbmdEYXRhXCIpO1xuICAgICAgKDxwdXNoR29hbFNldHRpbmdEYXRhQVBJPnB1c2hHb2FsU2V0dGluZ0RhdGEpLm1haW5EYXRhID0gc3VibWl0RGF0YXM7XG4gICAgICBsZXQgZ2V0UmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdXNoR29hbFNldHRpbmdEYXRhKS50b1Byb21pc2UoKTtcblxuICAgICAgaWYgKGdldFJlc3Auc3VjY2Vzcykge1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcInB1c2ggR29hbCBmYWlsZWQsXCIgKyBnZXRSZXNwLkhlYWRlci5tc2c7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAxMDEnLCBlcnJvcikpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuUmVzcDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlclNlbGVjdENvZGUoU3RlcERhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBHb2FsU2V0dGluZ1N0ZXBEYXRhIHtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5mb3JFYWNoKChjb2RlLCBjb2wpID0+IHtcbiAgICAgIGxldCBwcm9maWxlQ29kZXM6IEFycmF5PFByb2ZpbGVDb2RlPiA9IHRoaXMuQ29sTWFwVG9Qcm9maWxlQ29kZU1hcC5nZXQoY29sKTtcbiAgICAgIGlmIChwcm9maWxlQ29kZXMubGVuZ3RoICYmIFN0ZXBEYXRhLlN0ZXAxICYmIFN0ZXBEYXRhLlN0ZXAxW2NvbF0pIHtcbiAgICAgICAgbGV0IGNvbFZhbCA9IFN0ZXBEYXRhLlN0ZXAxW2NvbF07XG4gICAgICAgIHByb2ZpbGVDb2RlcyA9IHByb2ZpbGVDb2Rlcy5maWx0ZXIoeCA9PiB4LmdldENvZGUoKSA9PSBjb2xWYWwpO1xuICAgICAgICBTdGVwRGF0YS5TdGVwMVtjb2xdID0gcHJvZmlsZUNvZGVzLmxlbmd0aCA/IHByb2ZpbGVDb2Rlc1swXS5nZXRNYXBwaW5nSUQoKSA6IHRoaXMuREFTSDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gU3RlcERhdGE7XG4gIH1cblxufSJdfQ==