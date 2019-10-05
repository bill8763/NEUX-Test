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
var GoalSettingService = /** @class */ (function () {
    function GoalSettingService(dispatcher, APIFactory, goalStore, errorHandler, goalSettingStep, yearConfigExtension, goalSettingExtension, dataSyncService, profileCodeService) {
        var _this = this;
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
        function (code, col) {
            _this.ColMapToProfileCodeMap.set(col, _this.profileCodeService.getCodeArray(code));
        }));
    }
    //-----------
    //#region  goalStepDatas
    // GoalSettingService
    //-----------
    //#region  goalStepDatas
    // GoalSettingService
    /**
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    GoalSettingService.prototype.getGoalSettingStep1_5Data = 
    //-----------
    //#region  goalStepDatas
    // GoalSettingService
    /**
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    function (year, isAdjust) {
        return from(this._getGoalSettingStep1_5Data(year, isAdjust));
    };
    /**
     * @private
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    GoalSettingService.prototype._getGoalSettingStep1_5Data = /**
     * @private
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    function (year, isAdjust) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, returnData, yearConfigResp, goalSettingResp, goalSettingValueResp, actualResp, yearConfig, goalSetting, goalSettingValue, actual, yearConfigMap, goalSettingMap, yearConfigObj_1, goalSettingObj, goalSettingValueObj_1, teamFYFCActual_1, teamANPActual, allYearActual_1, monthOfYear, actuallist_1, actualBody, FYFCActuals, TeamFYFCActuals, YearConfig, GoalStatus, Step1, Step2, Step3, Step4, Step5, yearConfigExtData, goalSettingExtData, ActivityFYFC, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('into _getGoalSettingStep1_5Data year:', year, 'isAdjust', isAdjust);
                        returnData = new GoalSettingStepData(year);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        yearConfigResp = void 0;
                        goalSettingResp = void 0;
                        goalSettingValueResp = void 0;
                        actualResp = void 0;
                        yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                        goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                        goalSettingValue = this.APIFactory.getAPI("getGoalSettingValue");
                        actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                        ((/** @type {?} */ (goalSettingValue))).setDataYear(year);
                        ((/** @type {?} */ (actual))).setDataYear(year);
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(yearConfig).toPromise(),
                                this.dispatcher.dispatch(goalSetting).toPromise(),
                                this.dispatcher.dispatch(goalSettingValue).toPromise(),
                                this.dispatcher.dispatch(actual).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 4]), yearConfigResp = _a[0], goalSettingResp = _a[1], goalSettingValueResp = _a[2], actualResp = _a[3];
                        console.log("yearConfigResp", yearConfigResp);
                        console.log("goalSettingResp", goalSettingResp);
                        console.log("goalSettingValueResp", goalSettingValueResp);
                        console.log("actualResp", actualResp);
                        if (!(yearConfigResp.Header["status"]
                            && goalSettingResp.Header["status"]
                            && goalSettingValueResp.Header["status"]
                            && actualResp.Header["status"])) return [3 /*break*/, 6];
                        yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                        goalSettingMap = this.yearJsonToMap(goalSettingResp["Body"]);
                        yearConfigObj_1 = yearConfigMap.get(year);
                        goalSettingObj = goalSettingMap.get(year);
                        console.log("yearConfigObj", yearConfigObj_1);
                        console.log("goalSettingObj", goalSettingObj);
                        if (!(yearConfigObj_1 != undefined && goalSettingObj != undefined)) return [3 /*break*/, 6];
                        // call GetGoalSettingValue
                        goalSettingValueObj_1 = {};
                        goalSettingValueResp["Body"].forEach((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            goalSettingValueObj_1[data.DataType] = data.Value;
                        }));
                        console.log("goalSettingValueObj", goalSettingValueObj_1);
                        // call GetActualValue
                        teamFYFCActual_1 = -1;
                        teamANPActual = -1;
                        allYearActual_1 = -1;
                        monthOfYear = yearConfigObj_1.MonthQuantityOfYear;
                        actuallist_1 = Array(monthOfYear).fill(this.DASH, 0);
                        actualBody = actualResp["Body"];
                        FYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.PERSONAL && x.DataType == "FYFC"; }));
                        if (FYFCActuals.length > 0) {
                            allYearActual_1 = 0;
                            FYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) {
                                if (x.Month <= yearConfigObj_1.PerformanceSettlementMonth) {
                                    actuallist_1[x.Month - 1] = x.Value;
                                    allYearActual_1 += x.Value;
                                }
                            }));
                        }
                        TeamFYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.TEAM && x.DataType == "FYFC"; }));
                        if (TeamFYFCActuals.length) {
                            teamFYFCActual_1 = 0;
                            teamANPActual = 0;
                            TeamFYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) {
                                teamFYFCActual_1 += (x.Month <= yearConfigObj_1.PerformanceSettlementMonth) ? x.Value : 0;
                            }));
                            teamANPActual = this.numberToFix(teamFYFCActual_1 * yearConfigObj_1.FyfcCovertAnpRate, 0);
                        }
                        console.log("actuallist", actuallist_1);
                        YearConfig = new GoalSettingYearConfig();
                        GoalStatus = new GoalSettingGoalStatus();
                        Step1 = new GoalSettingStep1();
                        Step2 = new GoalSettingStep2();
                        Step3 = new GoalSettingStep3();
                        Step4 = new GoalSettingStep4();
                        Step5 = new GoalSettingStep5();
                        YearConfig.DataYear = yearConfigObj_1.DataYear;
                        YearConfig.IsCurrent = yearConfigObj_1.IsCurrent;
                        YearConfig.QuarterStartMonth = yearConfigObj_1.QuarterStartMonth;
                        YearConfig.QuarterEndMonth = yearConfigObj_1.QuarterEndMonth;
                        YearConfig.GoalSettingActivityProcMode = yearConfigObj_1.GoalSettingActivityProcMode;
                        YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj_1.GoalAndPlanDifferenceLimit;
                        YearConfig.FyfcCovertAnpRate = yearConfigObj_1.FyfcCovertAnpRate;
                        YearConfig.InforceConvertSubmitRate = yearConfigObj_1.InforceConvertSubmitRate;
                        YearConfig.InforceConvertMeetRate = yearConfigObj_1.InforceConvertMeetRate;
                        YearConfig.InforceConvertScheduleRate = yearConfigObj_1.InforceConvertScheduleRate;
                        YearConfig.InforceConvertFindRate = yearConfigObj_1.InforceConvertFindRate;
                        YearConfig.NowToYearEndDays = yearConfigObj_1.NowToYearEndDays;
                        YearConfig.PerformanceSettlementMonth = yearConfigObj_1.PerformanceSettlementMonth;
                        YearConfig.MonthQuantityOfYear = yearConfigObj_1.MonthQuantityOfYear;
                        YearConfig.WorkingMonth = yearConfigObj_1.WorkingMonth;
                        if (this.yearConfigExtension) {
                            yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj_1, { source: "SQL" });
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
                            goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "SQL" });
                            GoalStatus.setExtension(goalSettingExtData);
                        }
                        Step1.FYFC = goalSettingValueObj_1.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj_1.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj_1.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj_1.PROMOTION_PLAN;
                        Step1.Actual = this.changeToDash(allYearActual_1);
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj_1.PERSON_FYFC, Step1.Actual);
                        Step1.ActivityFYFC = goalSettingValueObj_1.ACTIVITY_FYFC;
                        Step1.ActivityDays = goalSettingValueObj_1.ACTIVITY_DAYS;
                        Step2.PerCase = goalSettingValueObj_1.PER_CASE_FYFC;
                        ActivityFYFC = isAdjust ? Step1.FYFCNowToYearEnd : Step1.FYFC;
                        Step3 = this.calculateActivityData(ActivityFYFC, Step2.PerCase, YearConfig);
                        if (!isAdjust) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._getMonthActualPlanBySQL(PERFORMANCETYPE.PERSONAL, year, YearConfig.MonthQuantityOfYear, YearConfig.PerformanceSettlementMonth)];
                    case 3:
                        Step4 = _b.sent();
                        Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        return [3 /*break*/, 5];
                    case 4:
                        Step4 = this.calculateMonthActualPlan(YearConfig, Step1.FYFC, actuallist_1);
                        Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        _b.label = 5;
                    case 5:
                        Step5.TeamFYFC = goalSettingValueObj_1.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj_1.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj_1.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj_1.TEAM_RECRUITMENT;
                        Step5.TeamFYFCActual = this.changeToDash(teamFYFCActual_1);
                        Step5.TeamANPActual = this.changeToDash(teamANPActual);
                        Step5.TeamFYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj_1.TEAM_FYFC, Step5.TeamFYFCActual);
                        Step5.TeamANPNowToYearEnd = this.calculateANPFromFYFC(Step5.TeamFYFCNowToYearEnd, YearConfig.FyfcCovertAnpRate);
                        returnData.YearConfig = YearConfig;
                        returnData.GoalStatus = GoalStatus;
                        returnData.Step1 = Step1;
                        returnData.Step2 = Step2;
                        returnData.Step3 = Step3;
                        returnData.Step4 = Step4;
                        returnData.Step5 = Step5;
                        returnData.ActualList = actuallist_1;
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00400', 'getGoalSettingStep1_5Data fail!' + error_1.message));
                        return [3 /*break*/, 8];
                    case 8:
                        console.log("getGoalSettingStep1_5Data returnData", returnData);
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    /**
     * @param {?} goal
     * @param {?} perCase
     * @param {?} yearConfig
     * @param {?=} activityDays
     * @return {?}
     */
    GoalSettingService.prototype.calculateActivityData = /**
     * @param {?} goal
     * @param {?} perCase
     * @param {?} yearConfig
     * @param {?=} activityDays
     * @return {?}
     */
    function (goal, perCase, yearConfig, activityDays) {
        var _this = this;
        if (activityDays === void 0) { activityDays = ''; }
        console.log("calculateActivityData:", goal, perCase, yearConfig, activityDays);
        /** @type {?} */
        var returnObj = new GoalSettingStep3();
        /** @type {?} */
        var activityValues = [];
        try {
            /** @type {?} */
            var numGoal = Number(goal);
            /** @type {?} */
            var numPerCase = Number(perCase);
            if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(perCase) && numPerCase > 0) {
                console.warn("calculateActivityData on service: ", goal, perCase, yearConfig);
                /** @type {?} */
                var days = (StringUtils.isEmpty(activityDays)) ? Number(yearConfig.NowToYearEndDays) : Number(activityDays);
                /** @type {?} */
                var daysInweek = 7;
                /** @type {?} */
                var daysInMonth = 365 / Number(yearConfig.MonthQuantityOfYear);
                /** @type {?} */
                var dayInforce = numGoal / numPerCase / days;
                /** @type {?} */
                var weekInforce = dayInforce * daysInweek;
                /** @type {?} */
                var monthInforce = dayInforce * daysInMonth;
                dayInforce = dayInforce;
                /** @type {?} */
                var tabs = [{ name: TIMEBASE.DAY, inforce: dayInforce }, { name: TIMEBASE.WEEK, inforce: weekInforce }, { name: TIMEBASE.MONTH, inforce: monthInforce }];
                if (this.goalSettingStep) {
                    activityValues = this.goalSettingStep.calculateOtherRuleActivityInforce(tabs, yearConfig);
                }
                /** @type {?} */
                var activity = activityValues[0].TimeBase;
                returnObj.Activity = activity;
                returnObj.ActivityValues = activityValues;
            }
            else {
                /** @type {?} */
                var tabNum = [TIMEBASE.DAY, TIMEBASE.WEEK, TIMEBASE.MONTH];
                returnObj.Activity = TIMEBASE.DAY;
                tabNum.forEach((/**
                 * @param {?} time
                 * @return {?}
                 */
                function (time) {
                    /** @type {?} */
                    var activity = new ActivityValue(time, _this.DASH, _this.DASH, _this.DASH, _this.DASH, _this.DASH);
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
    };
    // step 4 function
    // step 4 function
    /**
     * @param {?} yearConfig
     * @param {?} goal
     * @param {?} actualList
     * @return {?}
     */
    GoalSettingService.prototype.calculateMonthActualPlan = 
    // step 4 function
    /**
     * @param {?} yearConfig
     * @param {?} goal
     * @param {?} actualList
     * @return {?}
     */
    function (yearConfig, goal, actualList) {
        //actualList example : [100,100,200,0,100,1]
        console.log("calculateMonthActualPlan goal:", goal);
        /** @type {?} */
        var Step4Datas = new GoalSettingStep4();
        /** @type {?} */
        var MonthActualPlanList = [];
        try {
            if (NumberUtils.isNumber(goal)) {
                if (this.goalSettingStep) {
                    MonthActualPlanList = this.goalSettingStep.calculateMonthActualPlan(yearConfig, Number(goal), actualList);
                }
                /** @type {?} */
                var forecast = this.calculateForecast(yearConfig.PerformanceSettlementMonth, MonthActualPlanList);
                /** @type {?} */
                var shortfall = this.calculateShortfall(goal, forecast);
                /** @type {?} */
                var actual = this.calulateSumByArray(actualList);
                Step4Datas.MonthList = MonthActualPlanList;
                Step4Datas.Forecast = forecast;
                Step4Datas.Shortfall = shortfall;
                Step4Datas.Actual = actual;
            }
            else {
                //全部都dash
                for (var i = 0; i < yearConfig.MonthQuantityOfYear; i++) {
                    /** @type {?} */
                    var data = new MonthlyPlanFYFCData(i, this.DASH, this.DASH);
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
    };
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    GoalSettingService.prototype.calculateActual = /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    function (PerformanceSettlementMonth, MonthActualPlanList) {
        var _this = this;
        if (PerformanceSettlementMonth > 0) {
            return MonthActualPlanList.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return (Number(x.Actual) < 0 || x.Actual == _this.DASH || x.Month > PerformanceSettlementMonth) ? 0 : Number(x.Actual); })).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return pre + Number(cur); }), 0).toString();
        }
        else {
            return this.DASH;
        }
    };
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    GoalSettingService.prototype.calculateForecast = /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    function (PerformanceSettlementMonth, MonthActualPlanList) {
        return this.calulateSumByArray(this.getActualPlanFromMonthList(MonthActualPlanList, PerformanceSettlementMonth));
    };
    /**
     * @param {?} monthList
     * @return {?}
     */
    GoalSettingService.prototype.calulateSumByArray = /**
     * @param {?} monthList
     * @return {?}
     */
    function (monthList) {
        var _this = this;
        /** @type {?} */
        var isDash = true;
        monthList.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data != _this.DASH) {
                isDash = false;
            }
        }));
        /** @type {?} */
        var returnNum = this.DASH;
        if (!isDash) {
            returnNum = monthList.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return (Number(x) < 0 || x == _this.DASH || StringUtils.isEmpty(x)) ? 0 : x; })).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return pre + Number(cur); }), 0).toString();
        }
        return returnNum;
    };
    /**
     * @param {?} goal
     * @param {?} forecast
     * @return {?}
     */
    GoalSettingService.prototype.calculateShortfall = /**
     * @param {?} goal
     * @param {?} forecast
     * @return {?}
     */
    function (goal, forecast) {
        /** @type {?} */
        var result = this.DASH;
        if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(forecast)) {
            if (this.goalSettingStep) {
                result = this.goalSettingStep.getShortfall(goal, forecast).toString();
            }
            else {
                /** @type {?} */
                var tempresult = (Number(goal) - Number(forecast));
                result = (tempresult < 0) ? "0" : tempresult.toString();
            }
        }
        return result;
    };
    //#endregion  goalStepDatas
    //#region Submit & Approve function
    //#endregion  goalStepDatas
    //#region Submit & Approve function
    /**
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    GoalSettingService.prototype.isNeedApprove = 
    //#endregion  goalStepDatas
    //#region Submit & Approve function
    /**
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    function (SubmitType, DataYear, adjustDatas) {
        return from(this._isNeedApprove(SubmitType, DataYear, adjustDatas));
    };
    /**
     * @private
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    GoalSettingService.prototype._isNeedApprove = /**
     * @private
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    function (SubmitType, DataYear, adjustDatas) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isApproveInfo, originDatas, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("_isNeedApprove adjustDatas", adjustDatas, SubmitType, DataYear);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!this.goalSettingStep) return [3 /*break*/, 3];
                        //taiwan
                        return [4 /*yield*/, this._getGoalSettingStep1_5Data(DataYear, true)];
                    case 2:
                        originDatas = _a.sent();
                        isApproveInfo = this.goalSettingStep.isNeedApprove(adjustDatas, originDatas);
                        return [3 /*break*/, 4];
                    case 3:
                        isApproveInfo = new IsApproveInfo(true, false);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00403', 'isNeedApprove fail!' + error_2.message));
                        return [3 /*break*/, 6];
                    case 6:
                        console.log("isNeedApprove", isApproveInfo);
                        return [2 /*return*/, isApproveInfo];
                }
            });
        });
    };
    /**
     * @param {?} FYFC
     * @param {?} Forecast
     * @param {?} GoalAndPlanDifferenceLimit
     * @return {?}
     */
    GoalSettingService.prototype.isNeedApprove_plan = /**
     * @param {?} FYFC
     * @param {?} Forecast
     * @param {?} GoalAndPlanDifferenceLimit
     * @return {?}
     */
    function (FYFC, Forecast, GoalAndPlanDifferenceLimit) {
        console.log('isNeedApprove_plan FYFC', FYFC, 'Forecast', Forecast, 'GoalAndPlanDifferenceLimit', GoalAndPlanDifferenceLimit);
        /** @type {?} */
        var isApproveInfo;
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
    };
    /**
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    GoalSettingService.prototype.submitGoal = /**
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    function (submitType, IsNeedApprove, submitData) {
        return from(this._submitGoal(submitType, IsNeedApprove, submitData));
    };
    /**
     * @private
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    GoalSettingService.prototype._submitGoal = /**
     * @private
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    function (submitType, IsNeedApprove, submitData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var Activity, GoalSettingValue, GoalPlan, SubmitInfo, SubmitDatas, returnResp, GoalSettingType, Resp, error_3;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[_submitGoal] submitData", submitData);
                        GoalSettingValue = [];
                        GoalPlan = new SubmitGoalPlan();
                        SubmitInfo = new SubmitGoalInfo();
                        returnResp = new SuccessStatus(false);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (submitType == SUBMITGOALTYPE.ALL) {
                            GoalSettingType = ["Step1", "Step2", "Step5"];
                            GoalSettingType.forEach((/**
                             * @param {?} step
                             * @return {?}
                             */
                            function (step) {
                                /** @type {?} */
                                var stepMap = _this.StepTextConvertMap.get(step);
                                stepMap.forEach((/**
                                 * @param {?} val
                                 * @param {?} key
                                 * @return {?}
                                 */
                                function (val, key) {
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
                        function (x) { return x.Plan != _this.DASH; })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) {
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
                        return [4 /*yield*/, this._pushGoalSetting(SubmitDatas)];
                    case 2:
                        Resp = _a.sent();
                        if (!Resp.isSuccess) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.syncGoalDatas()];
                    case 3:
                        _a.sent();
                        returnResp.isSuccess = true;
                        return [3 /*break*/, 5];
                    case 4: throw "submit goal fail! ";
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00405', 'submitGoal fail!' + error_3.message));
                        returnResp.isSuccess = false;
                        return [3 /*break*/, 7];
                    case 7:
                        console.log("_submitGoal resp2", returnResp);
                        return [2 /*return*/, returnResp];
                }
            });
        });
    };
    //#endregion Submit & Approve
    //#region LANDING status
    //#endregion Submit & Approve
    //#region LANDING status
    /**
     * @return {?}
     */
    GoalSettingService.prototype.getIsFirstUse = 
    //#endregion Submit & Approve
    //#region LANDING status
    /**
     * @return {?}
     */
    function () {
        // get DeviceInfo table
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var DeviceInfo = _this.APIFactory.getAPI("getDeviceInfo");
            ((/** @type {?} */ (DeviceInfo))).setDataType("FirstUseAPP");
            try {
                _this.dispatcher.dispatch(DeviceInfo).toPromise().then((/**
                 * @param {?} Datas
                 * @return {?}
                 */
                function (Datas) {
                    console.log("getIsFirstUse", Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.next(Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.complete();
                }));
            }
            catch (error) {
                _this.errorHandler.handleError(new APPError('F00408', 'getIsFirstUse fail!' + error.message));
            }
        }));
    };
    // @Valid('GoalSettingGoalStatus')
    // @Valid('GoalSettingGoalStatus')
    /**
     * @return {?}
     */
    GoalSettingService.prototype.getSettingStatus = 
    // @Valid('GoalSettingGoalStatus')
    /**
     * @return {?}
     */
    function () {
        return from(this._getSettingStatus());
    };
    /**
     * @private
     * @return {?}
     */
    GoalSettingService.prototype._getSettingStatus = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, GoalSettingResp, yearConfigResp, returnDatas, goalSetting, yearConfig, goalSettingMap, yearConfigMap_1, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        returnDatas = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                        yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(goalSetting).toPromise(),
                                this.dispatcher.dispatch(yearConfig).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), GoalSettingResp = _a[0], yearConfigResp = _a[1];
                        //getGoalSetting
                        goalSettingMap = new Map();
                        yearConfigMap_1 = new Map();
                        if (GoalSettingResp.Header["status"] && yearConfigResp.Header["status"]) {
                            goalSettingMap = this.yearJsonToMap(GoalSettingResp["Body"]);
                            yearConfigMap_1 = this.yearJsonToMap(yearConfigResp["Body"]);
                            returnDatas = [];
                            goalSettingMap.forEach((/**
                             * @param {?} data
                             * @param {?} key
                             * @return {?}
                             */
                            function (data, key) {
                                /** @type {?} */
                                var goalStatus = new GoalSettingGoalStatus();
                                goalStatus.DataYear = key;
                                goalStatus.IsCurrent = yearConfigMap_1.get(key).IsCurrent;
                                goalStatus.IsNeedSetting = data.IsNeedSetting == YESNO.YES;
                                goalStatus.IsFirstTime = data.IsFirstTime == YESNO.YES;
                                goalStatus.ApproveStatus = data.ApproveStatus;
                                goalStatus.RemainingDays = data.Remainingdays;
                                returnDatas.push(goalStatus);
                            }));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00409', 'getSettingStatus fail!' + error_4.message));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("getSettingStatus returnDatas", returnDatas);
                        return [2 /*return*/, returnDatas];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} yearJson
     * @return {?}
     */
    GoalSettingService.prototype.yearJsonToMap = /**
     * @private
     * @param {?} yearJson
     * @return {?}
     */
    function (yearJson) {
        console.log("yearJson", yearJson);
        /** @type {?} */
        var map = new Map();
        if (yearJson != null) {
            yearJson.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.DataYear != undefined) {
                    map.set(data.DataYear, data);
                }
            }));
        }
        return map;
    };
    //#endregion LANDING status
    //#region GoalSetting overview
    //#endregion LANDING status
    //#region GoalSetting overview
    /**
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    GoalSettingService.prototype.getOverviewData = 
    //#endregion LANDING status
    //#region GoalSetting overview
    /**
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    function (performanceType, DataYear, AgentID) {
        if (DataYear === void 0) { DataYear = -1; }
        if (AgentID === void 0) { AgentID = ""; }
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getOverviewDataBySQL(performanceType, DataYear));
        }
        else {
            return from(this._getOverviewDataByRestful(performanceType, DataYear, AgentID));
        }
    };
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} year
     * @return {?}
     */
    GoalSettingService.prototype._getOverviewDataBySQL = /**
     * @private
     * @param {?} performanceType
     * @param {?=} year
     * @return {?}
     */
    function (performanceType, year) {
        if (year === void 0) { year = -1; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var goalStepDatas, actualPlanData, agencyPlanObj, perCase, activityGoal, activityDays, agencyPlanMainInfo, agencyPlanMainList, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        goalStepDatas = new GoalSettingStepData(year);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this._getGoalSettingStep1_5Data(year, true)];
                    case 2:
                        goalStepDatas = _a.sent();
                        console.log("_getOverviewDataBySQL goalStepDatas", JSON.stringify(goalStepDatas));
                        if (!(goalStepDatas != null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this._getMonthActualPlanBySQL(performanceType, year, goalStepDatas["YearConfig"]["MonthQuantityOfYear"], goalStepDatas["YearConfig"]["PerformanceSettlementMonth"])];
                    case 3:
                        actualPlanData = _a.sent();
                        if (actualPlanData != null) {
                            goalStepDatas.Step4 = actualPlanData;
                            goalStepDatas.Step4.Shortfall = this.calculateShortfall(goalStepDatas.Step1.FYFC, goalStepDatas.Step4.Forecast).toString();
                        }
                        else {
                            throw "get MonthActualPlan data fail.";
                        }
                        agencyPlanObj = new AgencyPlanDataForOverview();
                        if (!(performanceType == PERFORMANCETYPE.PERSONAL)) return [3 /*break*/, 4];
                        perCase = goalStepDatas.Step2.PerCase ? goalStepDatas.Step2.PerCase : '1';
                        activityGoal = goalStepDatas.Step1.ActivityFYFC ? goalStepDatas.Step1.ActivityFYFC : goalStepDatas.Step1.FYFC;
                        activityDays = goalStepDatas.Step1.ActivityDays ? goalStepDatas.Step1.ActivityDays : goalStepDatas.YearConfig.NowToYearEndDays.toString();
                        goalStepDatas.Step3 = this.calculateActivityData(activityGoal, perCase, goalStepDatas.YearConfig, activityDays);
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(performanceType == PERFORMANCETYPE.TEAM)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getAgencyPlanMainData(year).toPromise()];
                    case 5:
                        agencyPlanMainInfo = _a.sent();
                        if (agencyPlanMainInfo && agencyPlanMainInfo.AgencyMainDataList.length) {
                            agencyPlanMainList = agencyPlanMainInfo.AgencyMainDataList;
                            console.warn("agencyPlanMainList: ", JSON.stringify(agencyPlanMainList));
                            console.log(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "FYFC"; }))[0].Forecast);
                            console.log("agencyPlanObj", agencyPlanObj);
                            agencyPlanObj.FYFCForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "FYFC"; }))[0].Forecast;
                            agencyPlanObj.ANPForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "ANP"; }))[0].Forecast;
                            agencyPlanObj.ManpowerPlan = this.changeToDash(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "Manpower"; }))[0].MonthPlan);
                            agencyPlanObj.RecruitmentPlan = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "Recruitment"; }))[0].MonthPlan;
                            agencyPlanObj.CompletionRate = agencyPlanMainInfo.CompletionRate;
                        }
                        else {
                            throw "get agencyPlan data fail.";
                        }
                        goalStepDatas.AgencyPlan = agencyPlanObj;
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7: throw "get 1_5Data Fail. goalStepDatas:" + goalStepDatas;
                    case 8:
                        goalStepDatas = this._converSelectCode(goalStepDatas);
                        if (this.goalSettingStep) {
                            goalStepDatas = this.goalSettingStep.changeEmptyToDash(goalStepDatas);
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        error_5 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00504', 'getOverviewDataBySQL fail!' + error_5));
                        return [3 /*break*/, 10];
                    case 10:
                        console.log("_getOverviewDataBySQL goalStepDatas", goalStepDatas, JSON.stringify(goalStepDatas));
                        return [2 /*return*/, goalStepDatas];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    GoalSettingService.prototype._getOverviewDataByRestful = /**
     * @private
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    function (performanceType, DataYear, AgentID) {
        if (DataYear === void 0) { DataYear = -1; }
        if (AgentID === void 0) { AgentID = ""; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, GetGoalResp, GetYearConfigResp, goalSettingObj, GoalValues, goalSettingValueObj, YearConfig, GoalStatus, Step1, Step2, Step3, Step4, Step5, AgencyPlan, returnDatas, getGoalapi, getYearConfigapi, GoalMap, YearConfigMap, GoalObj, yearConfigObj, monthQuantityOfYear, PerformanceSettlementMonth, allYearActual, yearConfigExtData, goalSettingExtData, perCase, activityGoal, activityDays, agencyPlanObj, mainDataList, error_6;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.warn("performanceType: ", performanceType, " DataYear: ", DataYear, " AgentID: ", AgentID);
                        goalSettingValueObj = {};
                        YearConfig = new GoalSettingYearConfig();
                        GoalStatus = new GoalSettingGoalStatus();
                        Step1 = new GoalSettingStep1();
                        Step2 = new GoalSettingStep2();
                        Step3 = new GoalSettingStep3();
                        Step4 = new GoalSettingStep4();
                        Step5 = new GoalSettingStep5();
                        AgencyPlan = new AgencyPlanDataForOverview();
                        YearConfig.DataYear = DataYear;
                        GoalStatus.DataYear = DataYear;
                        returnDatas = new GoalSettingStepData(DataYear);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        getGoalapi = this.APIFactory.getAPI("getGoal");
                        ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                        getYearConfigapi = this.APIFactory.getAPI("getYearConfig");
                        ((/** @type {?} */ (getYearConfigapi))).setAgentID(AgentID);
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(getGoalapi).toPromise(),
                                this.dispatcher.dispatch(getYearConfigapi).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), GetGoalResp = _a[0], GetYearConfigResp = _a[1];
                        console.log("_getOverviewDataByRestful GetGoalResp", GetGoalResp);
                        console.log("_getOverviewDataByRestful GetYearConfigResp", GetYearConfigResp);
                        GoalMap = this.yearJsonToMap(GetGoalResp.Goals);
                        YearConfigMap = this.yearJsonToMap(GetYearConfigResp.Configurations);
                        GoalObj = GoalMap.get(DataYear);
                        yearConfigObj = YearConfigMap.get(DataYear);
                        if (!(GoalObj != undefined && yearConfigObj != undefined)) return [3 /*break*/, 6];
                        goalSettingObj = GoalMap.get(DataYear).GoalSetting;
                        GoalValues = GoalMap.get(DataYear).GoalValue;
                        console.log("_getOverviewDataByRestful goalSettingObj", goalSettingObj);
                        console.log("_getOverviewDataByRestful GoalValues", GoalValues);
                        GoalValues.forEach((/**
                         * @param {?} GoalValue
                         * @return {?}
                         */
                        function (GoalValue) {
                            goalSettingValueObj[GoalValue.DataType] = GoalValue.Value;
                        }));
                        monthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                        PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                        return [4 /*yield*/, this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID)];
                    case 3:
                        Step4 = _b.sent();
                        Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        allYearActual = this.calculateActual(yearConfigObj.PerformanceSettlementMonth, Step4.MonthList);
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
                            yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "Restful" });
                            YearConfig.setExtension(yearConfigExtData);
                        }
                        GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                        GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                        GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                        GoalStatus.ApproveStatus = goalSettingObj.Status;
                        if (this.goalSettingExtension) {
                            goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "Restful" });
                            GoalStatus.setExtension(goalSettingExtData);
                        }
                        if (!(performanceType == PERFORMANCETYPE.PERSONAL)) return [3 /*break*/, 4];
                        Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                        Step1.Actual = allYearActual;
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, allYearActual);
                        Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                        perCase = goalSettingValueObj.PER_CASE_FYFC;
                        activityGoal = goalSettingValueObj.ACTIVITY_FYFC ? goalSettingValueObj.ACTIVITY_FYFC : goalSettingValueObj.PERSON_FYFC;
                        activityDays = goalSettingValueObj.ACTIVITY_DAYS ? goalSettingValueObj.ACTIVITY_DAYS : yearConfigObj.NowToYearEndDays;
                        Step3 = this.calculateActivityData(activityGoal, perCase, YearConfig, activityDays);
                        returnDatas.YearConfig = YearConfig;
                        returnDatas.GoalStatus = GoalStatus;
                        returnDatas.Step1 = Step1;
                        returnDatas.Step2 = Step2;
                        returnDatas.Step3 = Step3;
                        returnDatas.Step4 = Step4;
                        return [3 /*break*/, 6];
                    case 4:
                        Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                        return [4 /*yield*/, this.getAgencyPlanMainDataByRestful(DataYear, AgentID)];
                    case 5:
                        agencyPlanObj = _b.sent();
                        if (agencyPlanObj != null) {
                            mainDataList = agencyPlanObj.AgencyMainDataList;
                            AgencyPlan.FYFCForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "FYFC"; }))[0].Forecast;
                            AgencyPlan.ANPForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "ANP"; }))[0].Forecast;
                            AgencyPlan.ManpowerPlan = this.changeToDash(mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "Manpower"; }))[0].MonthPlan);
                            AgencyPlan.RecruitmentPlan = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataType == "Recruitment"; }))[0].MonthPlan;
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
                        _b.label = 6;
                    case 6:
                        returnDatas = this._converSelectCode(returnDatas);
                        if (this.goalSettingStep) {
                            returnDatas = this.goalSettingStep.changeEmptyToDash(returnDatas);
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_6 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00505', 'getOverviewDataByRestful fail!' + error_6.message));
                        return [3 /*break*/, 8];
                    case 8:
                        console.log("_getOverviewDataByRestful returnDatas", returnDatas, JSON.parse(JSON.stringify(returnDatas)));
                        return [2 /*return*/, returnDatas];
                }
            });
        });
    };
    //#endregion GoalSetting overview
    //#region get month actual & plan
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
    GoalSettingService.prototype.getMonthActualPlan = 
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
    function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
        if (monthQuantityOfYear === void 0) { monthQuantityOfYear = 12; }
        if (PerformanceSettlementMonth === void 0) { PerformanceSettlementMonth = 99; }
        if (AgentID === void 0) { AgentID = ""; }
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth));
        }
        else {
            return from(this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID));
        }
    };
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @param {?} AgentID
     * @return {?}
     */
    GoalSettingService.prototype._getMonthActualPlanByRestful = /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @param {?} AgentID
     * @return {?}
     */
    function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, GoalResp, ActualResp, returnDatas, MonthActualPlanList, getGoalapi, getActualapi, GoalPlanMap_1, ActuallMap_1, thisActual, i, error_7;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // call GetGoalAPI (Restful set AgentID)
                        returnDatas = new GoalSettingStep4();
                        MonthActualPlanList = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        getGoalapi = this.APIFactory.getAPI("getGoal");
                        getActualapi = this.APIFactory.getAPI("getActual");
                        ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                        ((/** @type {?} */ (getActualapi))).setAgentID(AgentID);
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(getGoalapi).toPromise(),
                                this.dispatcher.dispatch(getActualapi).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), GoalResp = _a[0], ActualResp = _a[1];
                        console.log("GoalResp", GoalResp);
                        console.log("ActualResp", ActualResp);
                        GoalPlanMap_1 = new Map();
                        ActuallMap_1 = new Map();
                        thisActual = [];
                        if (GoalResp.Goals != null && ActualResp.Actual != null) {
                            GoalResp.Goals.forEach((/**
                             * @param {?} Goal
                             * @return {?}
                             */
                            function (Goal) {
                                if (Goal.DataYear == DataYear && Goal.GoalPlan.Values != null) {
                                    Goal.GoalPlan.Values.forEach((/**
                                     * @param {?} plan
                                     * @return {?}
                                     */
                                    function (plan) {
                                        if (plan.PerformanceType == performanceType) {
                                            GoalPlanMap_1.set(plan.Month, plan.Value.toString());
                                        }
                                    }));
                                }
                            }));
                            thisActual = ActualResp.Actual.filter((/**
                             * @param {?} Actual
                             * @return {?}
                             */
                            function (Actual) { return Actual.DataYear == DataYear; })).map((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.Values; }));
                            console.log("thisActual", thisActual);
                            thisActual.forEach((/**
                             * @param {?} Actual
                             * @return {?}
                             */
                            function (Actual) {
                                Actual.forEach((/**
                                 * @param {?} value
                                 * @return {?}
                                 */
                                function (value) {
                                    if (value.DataType == "FYFC" && value.PerformanceType == performanceType) {
                                        ActuallMap_1.set(value.Month, value.Value.toString());
                                    }
                                }));
                            }));
                        }
                        else {
                            throw "get Goal fail. GoalResp:" + GoalResp;
                        }
                        for (i = 1; i <= monthQuantityOfYear; i++) {
                            MonthActualPlanList.push(new MonthlyPlanFYFCData(i, this.changeToDash(GoalPlanMap_1.get(i)), ActuallMap_1.get(i) == null || i > PerformanceSettlementMonth ? this.DASH : ActuallMap_1.get(i)));
                        }
                        returnDatas.MonthList = MonthActualPlanList;
                        returnDatas.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                        returnDatas.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                        returnDatas.Shortfall = null;
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00410', 'getMonthActualPlanByRestful fail!' + error_7.message));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("_getMonthActualPlanByRestful Datas", returnDatas);
                        return [2 /*return*/, returnDatas];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @return {?}
     */
    GoalSettingService.prototype._getMonthActualPlanBySQL = /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @return {?}
     */
    function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, returnData, MonthActualPlanList, actualResp, goalPlanResp, goalPlanList_1, actualList_1, goalPlan, actual, i, error_8;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('_getMonthActualPlanBySQL performanceType', performanceType, 'DataYear', DataYear, 'monthQuantityOfYear', monthQuantityOfYear, 'PerformanceSettlementMonth', PerformanceSettlementMonth);
                        returnData = new GoalSettingStep4();
                        MonthActualPlanList = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        actualResp = void 0;
                        goalPlanResp = void 0;
                        // call GetGoalSettingValue       // call GetActualValue
                        goalPlanList_1 = Array(monthQuantityOfYear).fill(this.DASH, 0);
                        actualList_1 = Array(monthQuantityOfYear).fill(this.DASH, 0);
                        goalPlan = this.APIFactory.getAPI("getGoalSettingPlan");
                        actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                        ((/** @type {?} */ (goalPlan))).setDataYear(DataYear);
                        ((/** @type {?} */ (actual))).setDataYear(DataYear);
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(goalPlan).toPromise(),
                                this.dispatcher.dispatch(actual).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), goalPlanResp = _a[0], actualResp = _a[1];
                        console.log("goalPlanResp", goalPlanResp);
                        console.log("actualResp", actualResp);
                        if (goalPlanResp.Header["status"] && actualResp.Header["status"]) {
                            goalPlanResp["Body"].filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.PerformanceType == performanceType; })).map((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) {
                                goalPlanList_1[x.Month - 1] = x.Value.toString();
                            }));
                            actualResp["Body"].filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.PerformanceType == performanceType && x.DataType == "FYFC" && x.Month <= PerformanceSettlementMonth; })).map((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) {
                                actualList_1[x.Month - 1] = x.Value.toString();
                            }));
                        }
                        else {
                            throw "get GoalSetting fail. goalPlanResp" + goalPlanResp.Header.msg + 'actualResp:' + actualResp.Header.msg;
                        }
                        console.log("goalPlanList", goalPlanList_1);
                        console.log("actuallist", actualList_1);
                        for (i = 1; i <= monthQuantityOfYear; i++) {
                            MonthActualPlanList.push(new MonthlyPlanFYFCData(i, goalPlanList_1[i - 1], actualList_1[i - 1]));
                        }
                        returnData.MonthList = MonthActualPlanList;
                        returnData.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                        returnData.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                        returnData.Shortfall = null;
                        return [3 /*break*/, 4];
                    case 3:
                        error_8 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00411', 'getMonthActualPlanBySQL fail!' + error_8.message));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("_getMonthActualPlanBySQL returnData", returnData);
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    //#endregion get month actual & plan
    //#region AgencyPlan Datas
    //#endregion get month actual & plan
    //#region AgencyPlan Datas
    /**
     * @param {?} dataYear
     * @param {?=} AgentID
     * @return {?}
     */
    GoalSettingService.prototype.getAgencyPlanMainData = 
    //#endregion get month actual & plan
    //#region AgencyPlan Datas
    /**
     * @param {?} dataYear
     * @param {?=} AgentID
     * @return {?}
     */
    function (dataYear, AgentID) {
        if (AgentID === void 0) { AgentID = ""; }
        if (AgentID == "") {
            return from(this.getAgencyPlanMainDataBySQL(dataYear));
        }
        else if (AgentID != "") {
            return from(this.getAgencyPlanMainDataByRestful(dataYear, AgentID));
        }
    };
    /**
     * @private
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingService.prototype.getAgencyPlanMainDataBySQL = /**
     * @private
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, returnData, otherParaResp, agencyPlanResp, getOtherParameterAPI, agencyPlanGetMainAPI, respFilterCompletionRate, completionRate, returnList, AgencyPlanMainList, error_9;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('getAgencyPlanMainDataBySQL DataYear', dataYear);
                        returnData = new AgencyPlanMainInfo();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        //get completionRate 
                        getOtherParameterAPI = (/** @type {?} */ (this.APIFactory.getAPI('getOtherParameter')));
                        agencyPlanGetMainAPI = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlanMain"))));
                        getOtherParameterAPI.SetYear(dataYear);
                        agencyPlanGetMainAPI.setDataYear(dataYear);
                        return [4 /*yield*/, Promise.all([getOtherParameterAPI, agencyPlanGetMainAPI].map((/**
                             * @param {?} api
                             * @return {?}
                             */
                            function (api) { return _this.dispatcher.dispatch(api).toPromise(); })))];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), otherParaResp = _a[0], agencyPlanResp = _a[1];
                        console.log('otherParaResp: ', otherParaResp, "agencyPlanResp", agencyPlanResp);
                        if (otherParaResp.Header["status"] && agencyPlanResp.Header["status"]) {
                            respFilterCompletionRate = otherParaResp['Body'].filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.MappingID === "CompletionRate"; }));
                            completionRate = respFilterCompletionRate.length > 0 ? respFilterCompletionRate[0].SetValue : '';
                            returnList = [];
                            AgencyPlanMainList = agencyPlanResp["Body"];
                            console.log("getAgencyPlanMainDataBySQL AgencyPlanMainList", AgencyPlanMainList);
                            if (AgencyPlanMainList) {
                                returnList = ((/** @type {?} */ (AgencyPlanMainList))).map((/**
                                 * @param {?} main
                                 * @return {?}
                                 */
                                function (main) { return _this._agencyPlanMainDataObjToBean(main); }));
                            }
                            else {
                                throw "get AgencyPlanMainList fail.";
                            }
                            console.log('getAgencyPlanMainDataBySQL returnList:', returnList);
                            console.log('completionRate:', completionRate);
                            returnData.CompletionRate = completionRate;
                            returnData.AgencyMainDataList = returnList;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_9 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00300', 'getAgencyPlanMainDataBySQL fail!' + error_9));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("getAgencyPlanMainDataBySQL returnData", returnData);
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    GoalSettingService.prototype._agencyPlanMainDataObjToBean = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var agencyPlanMainData = new AgencyPlanMainData();
        agencyPlanMainData.Actual = object.Actual;
        agencyPlanMainData.DataType = object.DataType;
        agencyPlanMainData.DataYear = object.DataYear;
        agencyPlanMainData.Forecast = object.Forecast;
        agencyPlanMainData.MonthPlan = this.changeToDash(object.MonthPlan);
        return agencyPlanMainData;
    };
    /**
     * @private
     * @param {?} dataYear
     * @param {?} AgentID
     * @return {?}
     */
    GoalSettingService.prototype.getAgencyPlanMainDataByRestful = /**
     * @private
     * @param {?} dataYear
     * @param {?} AgentID
     * @return {?}
     */
    function (dataYear, AgentID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnData, MainList, getAgencyPlanAPI_1, agencyPlanResp, agencyPlanMap, completionRate, tempAgencyPlanList, error_10;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getAgencyPlanMainDataByRestful dataYear', dataYear, 'AgentID', AgentID);
                        returnData = new AgencyPlanMainInfo();
                        MainList = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        getAgencyPlanAPI_1 = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlan"))));
                        getAgencyPlanAPI_1.setAgentID(AgentID);
                        return [4 /*yield*/, this.dispatcher.dispatch(getAgencyPlanAPI_1).toPromise()];
                    case 2:
                        agencyPlanResp = _a.sent();
                        console.log("getAgencyPlanMainDataByRestful agencyPlanResp ", agencyPlanResp);
                        if (agencyPlanResp.AgencyPlans != null) {
                            agencyPlanMap = this.yearJsonToMap(agencyPlanResp.AgencyPlans);
                            completionRate = agencyPlanMap.get(dataYear).CompletionRate;
                            tempAgencyPlanList = agencyPlanMap.get(dataYear).Values;
                            ((/** @type {?} */ (tempAgencyPlanList))).forEach((/**
                             * @param {?} plan
                             * @return {?}
                             */
                            function (plan) {
                                plan['MonthPlan'] = plan['Plan'];
                                plan['DataYear'] = dataYear;
                            }));
                            MainList = ((/** @type {?} */ (tempAgencyPlanList))).map((/**
                             * @param {?} plan
                             * @return {?}
                             */
                            function (plan) { return _this._agencyPlanMainDataObjToBean(plan); }));
                            returnData.AgencyMainDataList = MainList;
                            returnData.CompletionRate = completionRate;
                        }
                        else {
                            throw "get AgencyPlan fail. agencyPlanResp:" + agencyPlanResp;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_10 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00301', 'getAgencyPlanMainDataByRestful fail!' + error_10.message));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("getAgencyPlanMainDataByRestful returnData ", returnData);
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingService.prototype.getAgencyPlanDetailData = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        var _this = this;
        /** @type {?} */
        var agencyPlanGetDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI("getAgencyPlanDetail")));
        agencyPlanGetDetailAPI.setDataYear(dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            try {
                _this.dispatcher.dispatch(agencyPlanGetDetailAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    if (resp["Body"]) {
                        /** @type {?} */
                        var returnList = [];
                        // let AgencyPlanDetailList: Array<AgencyPlanDetail> = resp["Body"];
                        returnList = ((/** @type {?} */ (resp["Body"]))).map((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return _this._agencyPlanDetailObjToBean(item); }));
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
                _this.errorHandler.handleError(new APPError('F00302', 'getAgencyPlanDetailData fail!' + error.message));
            }
        }));
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    GoalSettingService.prototype._agencyPlanDetailObjToBean = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var agencyPlanDetail = new AgencyPlanDetail();
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
    };
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingService.prototype.getGoalExpected = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, returnAgencyPlanGoalExpected, goalSettingYearConfigAPI, goalSettingGetExpectedAPI, yearConfigResp, goalExpectedResp, expectedRespBody, yearConfigRespBody, error_11;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        goalSettingYearConfigAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingYearConfig")));
                        goalSettingYearConfigAPI.setDataYear(dataYear);
                        goalSettingGetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingExpected")));
                        goalSettingGetExpectedAPI.setDataYear(dataYear);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        yearConfigResp = void 0;
                        goalExpectedResp = void 0;
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(goalSettingYearConfigAPI).toPromise(),
                                this.dispatcher.dispatch(goalSettingGetExpectedAPI).toPromise()
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], goalExpectedResp = _a[1];
                        if (goalExpectedResp && yearConfigResp) {
                            expectedRespBody = goalExpectedResp["Body"];
                            yearConfigRespBody = yearConfigResp["Body"];
                            returnAgencyPlanGoalExpected = expectedRespBody.length > 0 ? this._agencyPlanGoalExpectedObjToBean(expectedRespBody[0]) : new AgencyPlanGoalExpected(dataYear);
                            returnAgencyPlanGoalExpected.FYFCConvertANPRate = yearConfigRespBody[0]['FyfcCovertAnpRate'];
                            returnAgencyPlanGoalExpected.WorkingQuarter = yearConfigRespBody[0]['WorkingQuarter'];
                            console.log("getGoalExpected trans", returnAgencyPlanGoalExpected);
                        }
                        else {
                            throw "get goal expected and yearConfigfail.";
                        }
                        return [2 /*return*/, returnAgencyPlanGoalExpected];
                    case 3:
                        error_11 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00303', 'getGoalExpected fail!' + error_11.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    GoalSettingService.prototype._agencyPlanGoalExpectedObjToBean = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var goalExpected = new AgencyPlanGoalExpected(object.DataYear);
        goalExpected.ANP = object.ANP.toString();
        goalExpected.FYFC = object.FYFC.toString();
        goalExpected.Q1 = object.Q1.toString();
        goalExpected.Q2 = object.Q2.toString();
        goalExpected.Q3 = object.Q3.toString();
        goalExpected.Q4 = object.Q4.toString();
        /** @type {?} */
        var numberRecruitmentTotal = NumberUtils.isNumber(object.RecruitmentTotal) ? Number(object.RecruitmentTotal) : 0;
        goalExpected.RecruitmentTotal = numberRecruitmentTotal;
        return goalExpected;
    };
    /**
     * @param {?} goalExpected
     * @return {?}
     */
    GoalSettingService.prototype.calculaRecruitmentSum = /**
     * @param {?} goalExpected
     * @return {?}
     */
    function (goalExpected) {
        return [goalExpected.Q1, goalExpected.Q2, goalExpected.Q3, goalExpected.Q4].reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        function (total, each) {
            /** @type {?} */
            var numberQ = NumberUtils.isNumber(each) ? Number(each) : 0;
            return total + numberQ;
        }), 0);
    };
    /**
     * @param {?} expectedRecruitment
     * @param {?} indirectRecruitment
     * @return {?}
     */
    GoalSettingService.prototype.saveGoalExpected = /**
     * @param {?} expectedRecruitment
     * @param {?} indirectRecruitment
     * @return {?}
     */
    function (expectedRecruitment, indirectRecruitment) {
        var _this = this;
        /** @type {?} */
        var goalSettingSetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("setGoalSettingExpected")));
        goalSettingSetExpectedAPI.setExpectedRecruitment(expectedRecruitment);
        goalSettingSetExpectedAPI.setIndirectRecruitment(indirectRecruitment);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            try {
                _this.dispatcher.dispatch(goalSettingSetExpectedAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp["Header"]);
                    observer.complete();
                }));
            }
            catch (error) {
                _this.errorHandler.handleError(new APPError('F00304', 'saveGoalExpected fail!' + error.message));
            }
        }));
    };
    //#endregion AgencyPlan Datas
    //#region other function
    //#endregion AgencyPlan Datas
    //#region other function
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    GoalSettingService.prototype.numberToFix = 
    //#endregion AgencyPlan Datas
    //#region other function
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    function (n, toFix) {
        /** @type {?} */
        var fix10 = Math.pow(10, toFix);
        /** @type {?} */
        var returnData = Math.round(this.strip(n) * fix10) / fix10;
        return returnData;
    };
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    GoalSettingService.prototype.strip = /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    function (num, precision) {
        if (precision === void 0) { precision = 12; }
        return Number(num.toPrecision(precision));
    };
    /**
     * @param {?} FYFC
     * @param {?} actual
     * @return {?}
     */
    GoalSettingService.prototype.calculateNowToYearEndGoal = /**
     * @param {?} FYFC
     * @param {?} actual
     * @return {?}
     */
    function (FYFC, actual) {
        console.log("calculateNowToYearEndGoal FYFC:", FYFC, "actual:", actual);
        /** @type {?} */
        var caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(FYFC)) {
            return this.DASH;
        }
        else {
            /** @type {?} */
            var result = Number(FYFC) - caculeteActual < 0 ? 0 : Number(FYFC) - caculeteActual;
            return result.toString();
        }
    };
    /**
     * @param {?} NowToYearEnd
     * @param {?} actual
     * @return {?}
     */
    GoalSettingService.prototype.calculateAllYearGoal = /**
     * @param {?} NowToYearEnd
     * @param {?} actual
     * @return {?}
     */
    function (NowToYearEnd, actual) {
        console.log("calculateNowToYearEndGoal NowToYearEnd:", NowToYearEnd, "actual:", actual);
        /** @type {?} */
        var caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(NowToYearEnd)) {
            return this.DASH;
        }
        else {
            return (Number(NowToYearEnd) + caculeteActual).toString();
        }
    };
    Object.defineProperty(GoalSettingService.prototype, "saveFeedbackState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopup;
        },
        set: /**
         * @param {?} isPopup
         * @return {?}
         */
        function (isPopup) {
            this._isPopup = isPopup;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} list
     * @param {?} actualMonth
     * @return {?}
     */
    GoalSettingService.prototype.getActualPlanFromMonthList = /**
     * @param {?} list
     * @param {?} actualMonth
     * @return {?}
     */
    function (list, actualMonth) {
        console.log("getActualPlanFromMonthList:", list, actualMonth);
        return list.map((/**
         * @param {?} x
         * @param {?} index
         * @return {?}
         */
        function (x, index) { return (index + 1 < actualMonth || index + 1 === actualMonth ? x.Actual : x.Plan); }));
    };
    /**
     * @param {?} FYFC
     * @param {?} rate
     * @return {?}
     */
    GoalSettingService.prototype.calculateANPFromFYFC = /**
     * @param {?} FYFC
     * @param {?} rate
     * @return {?}
     */
    function (FYFC, rate) {
        if (StringUtils.isEmpty(FYFC) || FYFC == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(FYFC) * Number(rate), 0).toString();
        }
    };
    /**
     * @param {?} ANP
     * @param {?} rate
     * @return {?}
     */
    GoalSettingService.prototype.calculateFYFCFromANP = /**
     * @param {?} ANP
     * @param {?} rate
     * @return {?}
     */
    function (ANP, rate) {
        if (StringUtils.isEmpty(ANP) || ANP == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(ANP) / Number(rate), 0).toString();
        }
    };
    //#endregion other function
    //#region Sync Datas 
    //#endregion other function
    //#region Sync Datas 
    /**
     * @return {?}
     */
    GoalSettingService.prototype.syncGoalDatas = 
    //#endregion other function
    //#region Sync Datas 
    /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.goalStore.setSyncGoalDatas(SYNC_STATUS.SYNC);
                        return [4 /*yield*/, this.dataSyncService.syncFunc(["GOAL", "PROGRESS"], true)];
                    case 1:
                        _a.sent();
                        this.goalStore.setSyncGoalDatas(SYNC_STATUS.FINISH);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    GoalSettingService.prototype.syncAgencyPlan = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.dataSyncService.syncFunc(["AGENCY_PLAN"], true)];
            });
        });
    };
    /**
     * @return {?}
     */
    GoalSettingService.prototype.syncYearConfig = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.dataSyncService.syncFunc(["YEAR_CONFIG"], true)];
            });
        });
    };
    /**
     * @param {?} approveInfo
     * @return {?}
     */
    GoalSettingService.prototype.pushApproveGoal = /**
     * @param {?} approveInfo
     * @return {?}
     */
    function (approveInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._pushApproveGoal(approveInfo)];
            });
        });
    };
    /**
     * @param {?} param
     * @return {?}
     */
    GoalSettingService.prototype.changeToDash = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return (param === -1 || param === null || param === "") ? this.DASH : param.toString();
    };
    //#endregion Sync Datas 
    //#endregion Sync Datas 
    /**
     * @private
     * @param {?} approveInfo
     * @return {?}
     */
    GoalSettingService.prototype._pushApproveGoal = 
    //#endregion Sync Datas 
    /**
     * @private
     * @param {?} approveInfo
     * @return {?}
     */
    function (approveInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnResp, approveInfoData, mainData, pushApproveData, getResp, error_12;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnResp = new SuccessStatus(false);
                        approveInfoData = {
                            "AgentID": approveInfo.AgentID,
                            "DataYear": approveInfo.DataYear,
                            "isApprove": approveInfo.IsApprove,
                            "comment": approveInfo.Comment
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        mainData = approveInfoData;
                        pushApproveData = this.APIFactory.getAPI("pushApproveGoal");
                        ((/** @type {?} */ (pushApproveData))).mainData = mainData;
                        console.log('pushApproveGoal mainData', mainData);
                        return [4 /*yield*/, this.dispatcher.dispatch(pushApproveData).toPromise()];
                    case 2:
                        getResp = _a.sent();
                        console.log('getResp', getResp);
                        if (!getResp.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dataSyncService.syncFunc(["DASHBOARD", "GOAL", "PROGRESS"])];
                    case 3:
                        _a.sent();
                        returnResp.isSuccess = true;
                        return [3 /*break*/, 5];
                    case 4: throw "Approve Goal fail.";
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_12 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00100', 'pushApproveGoal fail!' + error_12.message));
                        return [3 /*break*/, 7];
                    case 7:
                        console.log("[_pushApproveGoal] returnResp:", returnResp);
                        return [2 /*return*/, returnResp];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} submitDatas
     * @return {?}
     */
    GoalSettingService.prototype._pushGoalSetting = /**
     * @private
     * @param {?} submitDatas
     * @return {?}
     */
    function (submitDatas) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnResp, pushGoalSettingData, getResp, error_13;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnResp = new SuccessStatus(false);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log('pushGoalSettingDataAPI mainData', submitDatas);
                        pushGoalSettingData = this.APIFactory.getAPI("pushGoalSettingData");
                        ((/** @type {?} */ (pushGoalSettingData))).mainData = submitDatas;
                        return [4 /*yield*/, this.dispatcher.dispatch(pushGoalSettingData).toPromise()];
                    case 2:
                        getResp = _a.sent();
                        if (getResp.success) {
                            returnResp.isSuccess = true;
                        }
                        else {
                            throw "push Goal failed," + getResp.Header.msg;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_13 = _a.sent();
                        this.errorHandler.handleError(new APPError('F00101', error_13));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, returnResp];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} StepData
     * @return {?}
     */
    GoalSettingService.prototype._converSelectCode = /**
     * @private
     * @param {?} StepData
     * @return {?}
     */
    function (StepData) {
        var _this = this;
        this.ColMapToProfile.forEach((/**
         * @param {?} code
         * @param {?} col
         * @return {?}
         */
        function (code, col) {
            /** @type {?} */
            var profileCodes = _this.ColMapToProfileCodeMap.get(col);
            if (profileCodes.length && StepData.Step1 && StepData.Step1[col]) {
                /** @type {?} */
                var colVal_1 = StepData.Step1[col];
                profileCodes = profileCodes.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.getCode() == colVal_1; }));
                StepData.Step1[col] = profileCodes.length ? profileCodes[0].getMappingID() : _this.DASH;
            }
        }));
        return StepData;
    };
    GoalSettingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    GoalSettingService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: APIFactory },
        { type: GoalStoreService },
        { type: ErrorHandler },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [yearConfigExtensionDataToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingExtensionDataToken,] }] },
        { type: DataSyncService },
        { type: ProfileCodeService }
    ]; };
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
    return GoalSettingService;
}());
export { GoalSettingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC1zZXR0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZ29hbC1zZXR0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBc0IsV0FBVyxFQUFnRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQW9CLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUIsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQTRDLGtCQUFrQixFQUFlLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9nQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0s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N0IsaURBQXdEOzs7OztJQUN4RCxpREFBd0Q7Ozs7O0lBQ3hELGlEQUF3RDs7Ozs7SUFDeEQsZ0RBQW9FOzs7OztJQUVwRSw2Q0FBeUU7Ozs7O0lBQ3pFLG9EQUF3Rzs7SUFFeEcsa0NBQTRCOzs7OztJQWtwQzVCLHNDQUFrQzs7Ozs7SUEvb0NoQyx3Q0FBK0I7Ozs7O0lBQy9CLHdDQUE4Qjs7Ozs7SUFDOUIsdUNBQW1DOzs7OztJQUNuQywwQ0FBa0M7Ozs7O0lBQ2xDLDZDQUV3Qzs7Ozs7SUFDeEMsaURBRTZDOzs7OztJQUM3QyxrREFFOEM7Ozs7O0lBQzlDLDZDQUF3Qzs7Ozs7SUFDeEMsZ0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoLCBBUElGYWN0b3J5LCBwdXNoQXBwcm92ZUdvYWxBUEksIFN0cmluZ1V0aWxzLCBnZXRBZ2VuY3lQbGFuQVBJLCBnZXRHb2FsQVBJLCBnZXRBY3R1YWxBUEksIGdldFllYXJDb25maWdBUEksIEFQUEVycm9yLCBOdW1iZXJVdGlscywgRGF0YVN5bmNTZXJ2aWNlLCBTdWJtaXRHb2FsU2V0dGluZ1ZhbHVlLCBTdWJtaXRHb2FsSW5mbywgU3VibWl0R29hbFBsYW5JbmZvLCBHZXREZXZpY2VJbmZvQVBJLCBTdWNjZXNzU3RhdHVzLCBZRVNOTywgVElNRUJBU0UsIFNVQk1JVEdPQUxUWVBFLCBTdWJtaXRHb2FsUGxhbiwgUEVSRk9STUFOQ0VUWVBFLCBTdWJtaXRHb2FsRGF0YSwgRXh0ZW5zaW9uRGF0YSwgeWVhckNvbmZpZ0V4dGVuc2lvbkRhdGFUb2tlbiwgZ29hbFNldHRpbmdFeHRlbnNpb25EYXRhVG9rZW4sIEV4dGVuc2lvbkZhY3RvcnksIHB1c2hHb2FsU2V0dGluZ0RhdGFBUEksIFByb2ZpbGVDb2RlU2VydmljZSwgUHJvZmlsZUNvZGUsIFZhbGlkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IGdvYWxTZXR0aW5nU3RlcFRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgZ29hbFNldHRpbmdTdGVwIH0gZnJvbSAnLi4vaW50ZXJmYWNlL2dvYWxTZXR0aW5nU3RlcCc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuR2V0TWFpbkFQSSB9IGZyb20gJy4uL2FwaS9BZ2VuY3lQbGFuR2V0TWFpbkFQSSc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuR2V0RGV0YWlsQVBJIH0gZnJvbSAnLi4vYXBpL0FnZW5jeVBsYW5HZXREZXRhaWxBUEknO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSSB9IGZyb20gJy4uL2FwaS9Hb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dldFZhbHVlQVBJIH0gZnJvbSAnLi4vYXBpL0dvYWxTZXR0aW5nR2V0VmFsdWUnO1xuaW1wb3J0IHsgR29hbFNldHRpbmdHZXRBY3R1YWxBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRBY3R1YWxBUEknO1xuaW1wb3J0IHsgR29hbFNldHRpbmdHZXRQbGFuQVBJIH0gZnJvbSAnLi4vYXBpL0dvYWxTZXR0aW5nR2V0UGxhbkFQSSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dldFllYXJDb25maWdBUEkgfSBmcm9tICcuLi9hcGkvR29hbFNldHRpbmdHZXRZZWFyQ29uZmlnQVBJJ1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwNCB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdTdGVwNCc7XG5pbXBvcnQgeyBHb2FsU3RvcmVTZXJ2aWNlLCBTWU5DX1NUQVRVUyB9IGZyb20gJy4vZ29hbC1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFnZW5jeVBsYW5EZXRhaWwgfSBmcm9tICcuL21vZGVsL0FnZW5jeVBsYW5EZXRhaWwnO1xuaW1wb3J0IHsgQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCB9IGZyb20gJy4vbW9kZWwvQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuTWFpbkRhdGEgfSBmcm9tICcuL21vZGVsL0FnZW5jeVBsYW5NYWluRGF0YSc7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3IH0gZnJvbSAnLi9tb2RlbC9BZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3JztcbmltcG9ydCB7IEdvYWxTZXR0aW5nWWVhckNvbmZpZyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdZZWFyQ29uZmlnJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDIgfSBmcm9tICcuL21vZGVsL0dvYWxTZXR0aW5nU3RlcDInO1xuaW1wb3J0IHsgTW9udGhseVBsYW5GWUZDRGF0YSB9IGZyb20gJy4vbW9kZWwvTW9udGhseVBsYW5GWUZDRGF0YSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXBEYXRhIH0gZnJvbSAnLi9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDUgfSBmcm9tICcuL21vZGVsL0dvYWxTZXR0aW5nU3RlcDUnO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwMyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdTdGVwMyc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXAxIH0gZnJvbSAnLi9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAxJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nR29hbFN0YXR1cyB9IGZyb20gJy4vbW9kZWwvR29hbFNldHRpbmdHb2FsU3RhdHVzJztcbmltcG9ydCB7IElzQXBwcm92ZUluZm8gfSBmcm9tICcuL21vZGVsL0lzQXBwcm92ZUluZm8nO1xuaW1wb3J0IHsgQWN0aXZpdHlWYWx1ZSB9IGZyb20gJy4vbW9kZWwvQWN0aXZpdHlWYWx1ZSc7XG5pbXBvcnQgeyBWYWxpZEVycm9yIH0gZnJvbSAnLi9tb2RlbC9WYWlsZEVycm9yJztcbmltcG9ydCB7IEFwcHJvdmVJbmZvIH0gZnJvbSAnLi9tb2RlbC9BcHByb3ZlSW5mbyc7XG5pbXBvcnQgeyBHZXRPdGhlclBhcmFtZXRlckFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuTWFpbkluZm8gfSBmcm9tIFwiLi9tb2RlbC9BZ2VuY3lQbGFuTWFpbkluZm9cIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU2VydmljZSB7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwMU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwMk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgVGV4dENvbnZlcnRTdGVwNU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgU3RlcFRleHRDb252ZXJ0TWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cbiAgcHJpdmF0ZSBDb2xNYXBUb1Byb2ZpbGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIENvbE1hcFRvUHJvZmlsZUNvZGVNYXA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBEQVNIID0gJy0tJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGdvYWxTdG9yZTogR29hbFN0b3JlU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChnb2FsU2V0dGluZ1N0ZXBUb2tlbilcbiAgICBwcml2YXRlIGdvYWxTZXR0aW5nU3RlcDogZ29hbFNldHRpbmdTdGVwLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdCh5ZWFyQ29uZmlnRXh0ZW5zaW9uRGF0YVRva2VuKVxuICAgIHByaXZhdGUgeWVhckNvbmZpZ0V4dGVuc2lvbjogRXh0ZW5zaW9uRmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoZ29hbFNldHRpbmdFeHRlbnNpb25EYXRhVG9rZW4pXG4gICAgcHJpdmF0ZSBnb2FsU2V0dGluZ0V4dGVuc2lvbjogRXh0ZW5zaW9uRmFjdG9yeSxcbiAgICBwcml2YXRlIGRhdGFTeW5jU2VydmljZTogRGF0YVN5bmNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5UZXh0Q29udmVydFN0ZXAxTWFwLnNldChcIkZZRkNcIiwgXCJQRVJTT05fRllGQ1wiKTtcbiAgICAvLyB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiQU5QXCIsIFwiUEVSU09OX0FOUFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiQW5udWFsQ29udmVudGlvblwiLCBcIkFOTlVBTF9DT05WRU5USU9OXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJNRFJUXCIsIFwiTURSVFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDFNYXAuc2V0KFwiUHJvbW90aW9uUGxhblwiLCBcIlBST01PVElPTl9QTEFOXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJBY3Rpdml0eUZZRkNcIiwgXCJBQ1RJVklUWV9GWUZDXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMU1hcC5zZXQoXCJBY3Rpdml0eURheXNcIiwgXCJBQ1RJVklUWV9EQVlTXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwMk1hcC5zZXQoXCJQZXJDYXNlXCIsIFwiUEVSX0NBU0VfRllGQ1wiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDVNYXAuc2V0KFwiVGVhbUZZRkNcIiwgXCJURUFNX0ZZRkNcIik7XG4gICAgdGhpcy5UZXh0Q29udmVydFN0ZXA1TWFwLnNldChcIlRlYW1BTlBcIiwgXCJURUFNX0FOUFwiKTtcbiAgICB0aGlzLlRleHRDb252ZXJ0U3RlcDVNYXAuc2V0KFwiTWFucG93ZXJcIiwgXCJURUFNX01BTlBPV0VSXCIpO1xuICAgIHRoaXMuVGV4dENvbnZlcnRTdGVwNU1hcC5zZXQoXCJSZWNydWl0bWVudFwiLCBcIlRFQU1fUkVDUlVJVE1FTlRcIik7XG4gICAgdGhpcy5TdGVwVGV4dENvbnZlcnRNYXAuc2V0KFwiU3RlcDFcIiwgdGhpcy5UZXh0Q29udmVydFN0ZXAxTWFwKTtcbiAgICB0aGlzLlN0ZXBUZXh0Q29udmVydE1hcC5zZXQoXCJTdGVwMlwiLCB0aGlzLlRleHRDb252ZXJ0U3RlcDJNYXApO1xuICAgIHRoaXMuU3RlcFRleHRDb252ZXJ0TWFwLnNldChcIlN0ZXA1XCIsIHRoaXMuVGV4dENvbnZlcnRTdGVwNU1hcCk7XG5cbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJBbm51YWxDb252ZW50aW9uXCIsIFwiR29hbFNldHRpbmdfQW5udWFsQ29udmVudGlvblwiKTtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJNRFJUXCIsIFwiR29hbFNldHRpbmdfTURSVFwiKTtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5zZXQoXCJQcm9tb3Rpb25QbGFuXCIsIFwiUHJvbW90aW9uX1BsYW5cIik7XG4gICAgdGhpcy5Db2xNYXBUb1Byb2ZpbGUuZm9yRWFjaCgoY29kZSwgY29sKSA9PiB7XG4gICAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZUNvZGVNYXAuc2V0KGNvbCwgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KGNvZGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS1cblxuICAvLyNyZWdpb24gIGdvYWxTdGVwRGF0YXNcblxuICAvLyBHb2FsU2V0dGluZ1NlcnZpY2VcbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXBEYXRhJylcbiAgcHVibGljIGdldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhcjogbnVtYmVyLCBpc0FkanVzdDogYm9vbGVhbik6IE9ic2VydmFibGU8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhciwgaXNBZGp1c3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhcjogbnVtYmVyLCBpc0FkanVzdDogYm9vbGVhbik6IFByb21pc2U8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnRvIF9nZXRHb2FsU2V0dGluZ1N0ZXAxXzVEYXRhIHllYXI6JywgeWVhciwgJ2lzQWRqdXN0JywgaXNBZGp1c3QpO1xuXG4gICAgbGV0IHJldHVybkRhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEgPSBuZXcgR29hbFNldHRpbmdTdGVwRGF0YSh5ZWFyKTtcbiAgICB0cnkge1xuICAgICAgbGV0IHllYXJDb25maWdSZXNwOiBhbnk7XG4gICAgICBsZXQgZ29hbFNldHRpbmdSZXNwOiBhbnk7XG4gICAgICBsZXQgZ29hbFNldHRpbmdWYWx1ZVJlc3A6IGFueTtcbiAgICAgIGxldCBhY3R1YWxSZXNwOiBhbnk7XG5cbiAgICAgIGxldCB5ZWFyQ29uZmlnID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgICAgIGxldCBnb2FsU2V0dGluZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nXCIpO1xuICAgICAgbGV0IGdvYWxTZXR0aW5nVmFsdWUgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdWYWx1ZVwiKTtcbiAgICAgIGxldCBhY3R1YWwgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdBY3R1YWxWYWx1ZVwiKTtcblxuICAgICAgKDxHb2FsU2V0dGluZ0dldFZhbHVlQVBJPmdvYWxTZXR0aW5nVmFsdWUpLnNldERhdGFZZWFyKHllYXIpO1xuICAgICAgKDxHb2FsU2V0dGluZ0dldEFjdHVhbEFQST5hY3R1YWwpLnNldERhdGFZZWFyKHllYXIpO1xuXG4gICAgICBbeWVhckNvbmZpZ1Jlc3AsIGdvYWxTZXR0aW5nUmVzcCwgZ29hbFNldHRpbmdWYWx1ZVJlc3AsIGFjdHVhbFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goeWVhckNvbmZpZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZ1ZhbHVlKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGFjdHVhbCkudG9Qcm9taXNlKClcbiAgICAgIF0pO1xuICAgICAgY29uc29sZS5sb2coXCJ5ZWFyQ29uZmlnUmVzcFwiLCB5ZWFyQ29uZmlnUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxTZXR0aW5nUmVzcFwiLCBnb2FsU2V0dGluZ1Jlc3ApO1xuICAgICAgY29uc29sZS5sb2coXCJnb2FsU2V0dGluZ1ZhbHVlUmVzcFwiLCBnb2FsU2V0dGluZ1ZhbHVlUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdHVhbFJlc3BcIiwgYWN0dWFsUmVzcCk7XG4gICAgICAvL2NhbGwgR2V0WWVhckNvbmZpZ0FQSVxuXG5cbiAgICAgIGlmICh5ZWFyQ29uZmlnUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl1cbiAgICAgICAgJiYgZ29hbFNldHRpbmdSZXNwLkhlYWRlcltcInN0YXR1c1wiXVxuICAgICAgICAmJiBnb2FsU2V0dGluZ1ZhbHVlUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl1cbiAgICAgICAgJiYgYWN0dWFsUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcblxuICAgICAgICBsZXQgeWVhckNvbmZpZ01hcCA9IHRoaXMueWVhckpzb25Ub01hcCh5ZWFyQ29uZmlnUmVzcFtcIkJvZHlcIl0pO1xuICAgICAgICBsZXQgZ29hbFNldHRpbmdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoZ29hbFNldHRpbmdSZXNwW1wiQm9keVwiXSk7XG5cbiAgICAgICAgbGV0IHllYXJDb25maWdPYmogPSB5ZWFyQ29uZmlnTWFwLmdldCh5ZWFyKTtcbiAgICAgICAgbGV0IGdvYWxTZXR0aW5nT2JqID0gZ29hbFNldHRpbmdNYXAuZ2V0KHllYXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInllYXJDb25maWdPYmpcIiwgeWVhckNvbmZpZ09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ29hbFNldHRpbmdPYmpcIiwgZ29hbFNldHRpbmdPYmopO1xuXG4gICAgICAgIGlmICh5ZWFyQ29uZmlnT2JqICE9IHVuZGVmaW5lZCAmJiBnb2FsU2V0dGluZ09iaiAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIC8vIGNhbGwgR2V0R29hbFNldHRpbmdWYWx1ZVxuICAgICAgICAgIGxldCBnb2FsU2V0dGluZ1ZhbHVlT2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICBnb2FsU2V0dGluZ1ZhbHVlUmVzcFtcIkJvZHlcIl0uZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgIGdvYWxTZXR0aW5nVmFsdWVPYmpbZGF0YS5EYXRhVHlwZV0gPSBkYXRhLlZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29hbFNldHRpbmdWYWx1ZU9ialwiLCBnb2FsU2V0dGluZ1ZhbHVlT2JqKTtcblxuICAgICAgICAgIC8vIGNhbGwgR2V0QWN0dWFsVmFsdWVcbiAgICAgICAgICBsZXQgdGVhbUZZRkNBY3R1YWwgPSAtMTtcbiAgICAgICAgICBsZXQgdGVhbUFOUEFjdHVhbCA9IC0xO1xuICAgICAgICAgIGxldCBhbGxZZWFyQWN0dWFsID0gLTE7XG4gICAgICAgICAgbGV0IG1vbnRoT2ZZZWFyID0geWVhckNvbmZpZ09iai5Nb250aFF1YW50aXR5T2ZZZWFyO1xuICAgICAgICAgIGxldCBhY3R1YWxsaXN0OiBBcnJheTxzdHJpbmc+ID0gQXJyYXkobW9udGhPZlllYXIpLmZpbGwodGhpcy5EQVNILCAwKTtcblxuICAgICAgICAgIGxldCBhY3R1YWxCb2R5ID0gYWN0dWFsUmVzcFtcIkJvZHlcIl07XG4gICAgICAgICAgbGV0IEZZRkNBY3R1YWxzID0gYWN0dWFsQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXIgJiYgeC5QZXJmb3JtYW5jZVR5cGUgPT0gUEVSRk9STUFOQ0VUWVBFLlBFUlNPTkFMICYmIHguRGF0YVR5cGUgPT0gXCJGWUZDXCIpO1xuICAgICAgICAgIGlmIChGWUZDQWN0dWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxZZWFyQWN0dWFsID0gMDtcbiAgICAgICAgICAgIEZZRkNBY3R1YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgIGlmICh4Lk1vbnRoIDw9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxsaXN0W3guTW9udGggLSAxXSA9IHguVmFsdWU7XG4gICAgICAgICAgICAgICAgYWxsWWVhckFjdHVhbCArPSB4LlZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgVGVhbUZZRkNBY3R1YWxzID0gYWN0dWFsQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IHllYXIgJiYgeC5QZXJmb3JtYW5jZVR5cGUgPT0gUEVSRk9STUFOQ0VUWVBFLlRFQU0gJiYgeC5EYXRhVHlwZSA9PSBcIkZZRkNcIik7XG4gICAgICAgICAgaWYgKFRlYW1GWUZDQWN0dWFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRlYW1GWUZDQWN0dWFsID0gMDtcbiAgICAgICAgICAgIHRlYW1BTlBBY3R1YWwgPSAwO1xuICAgICAgICAgICAgVGVhbUZZRkNBY3R1YWxzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAgIHRlYW1GWUZDQWN0dWFsICs9ICh4Lk1vbnRoIDw9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpID8geC5WYWx1ZSA6IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRlYW1BTlBBY3R1YWwgPSB0aGlzLm51bWJlclRvRml4KHRlYW1GWUZDQWN0dWFsICogeWVhckNvbmZpZ09iai5GeWZjQ292ZXJ0QW5wUmF0ZSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0dWFsbGlzdFwiLCBhY3R1YWxsaXN0KTtcblxuICAgICAgICAgIGxldCBZZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWcgPSBuZXcgR29hbFNldHRpbmdZZWFyQ29uZmlnKCk7XG4gICAgICAgICAgbGV0IEdvYWxTdGF0dXM6IEdvYWxTZXR0aW5nR29hbFN0YXR1cyA9IG5ldyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMoKTtcbiAgICAgICAgICBsZXQgU3RlcDE6IEdvYWxTZXR0aW5nU3RlcDEgPSBuZXcgR29hbFNldHRpbmdTdGVwMSgpO1xuICAgICAgICAgIGxldCBTdGVwMjogR29hbFNldHRpbmdTdGVwMiA9IG5ldyBHb2FsU2V0dGluZ1N0ZXAyKCk7XG4gICAgICAgICAgbGV0IFN0ZXAzOiBHb2FsU2V0dGluZ1N0ZXAzID0gbmV3IEdvYWxTZXR0aW5nU3RlcDMoKTtcbiAgICAgICAgICBsZXQgU3RlcDQ6IEdvYWxTZXR0aW5nU3RlcDQgPSBuZXcgR29hbFNldHRpbmdTdGVwNCgpO1xuICAgICAgICAgIGxldCBTdGVwNTogR29hbFNldHRpbmdTdGVwNSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA1KCk7XG5cbiAgICAgICAgICBZZWFyQ29uZmlnLkRhdGFZZWFyID0geWVhckNvbmZpZ09iai5EYXRhWWVhcjtcbiAgICAgICAgICBZZWFyQ29uZmlnLklzQ3VycmVudCA9IHllYXJDb25maWdPYmouSXNDdXJyZW50O1xuICAgICAgICAgIFllYXJDb25maWcuUXVhcnRlclN0YXJ0TW9udGggPSB5ZWFyQ29uZmlnT2JqLlF1YXJ0ZXJTdGFydE1vbnRoO1xuICAgICAgICAgIFllYXJDb25maWcuUXVhcnRlckVuZE1vbnRoID0geWVhckNvbmZpZ09iai5RdWFydGVyRW5kTW9udGg7XG4gICAgICAgICAgWWVhckNvbmZpZy5Hb2FsU2V0dGluZ0FjdGl2aXR5UHJvY01vZGUgPSB5ZWFyQ29uZmlnT2JqLkdvYWxTZXR0aW5nQWN0aXZpdHlQcm9jTW9kZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkdvYWxBbmRQbGFuRGlmZmVyZW5jZUxpbWl0ID0geWVhckNvbmZpZ09iai5Hb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdDtcbiAgICAgICAgICBZZWFyQ29uZmlnLkZ5ZmNDb3ZlcnRBbnBSYXRlID0geWVhckNvbmZpZ09iai5GeWZjQ292ZXJ0QW5wUmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRTdWJtaXRSYXRlO1xuICAgICAgICAgIFllYXJDb25maWcuSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRNZWV0UmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlID0geWVhckNvbmZpZ09iai5JbmZvcmNlQ29udmVydFNjaGVkdWxlUmF0ZTtcbiAgICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0RmluZFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0RmluZFJhdGU7XG4gICAgICAgICAgWWVhckNvbmZpZy5Ob3dUb1llYXJFbmREYXlzID0geWVhckNvbmZpZ09iai5Ob3dUb1llYXJFbmREYXlzO1xuICAgICAgICAgIFllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPSB5ZWFyQ29uZmlnT2JqLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoO1xuICAgICAgICAgIFllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhciA9IHllYXJDb25maWdPYmouTW9udGhRdWFudGl0eU9mWWVhcjtcbiAgICAgICAgICBZZWFyQ29uZmlnLldvcmtpbmdNb250aCA9IHllYXJDb25maWdPYmouV29ya2luZ01vbnRoO1xuICAgICAgICAgIGlmICh0aGlzLnllYXJDb25maWdFeHRlbnNpb24pIHtcbiAgICAgICAgICAgIGxldCB5ZWFyQ29uZmlnRXh0RGF0YTogRXh0ZW5zaW9uRGF0YSA9IHRoaXMueWVhckNvbmZpZ0V4dGVuc2lvbi5nZXRFeHRlbnNpb25EYXRhKHllYXJDb25maWdPYmosIHsgc291cmNlOiBcIlNRTFwiIH0pO1xuICAgICAgICAgICAgWWVhckNvbmZpZy5zZXRFeHRlbnNpb24oeWVhckNvbmZpZ0V4dERhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEdvYWxTdGF0dXMuRGF0YVllYXIgPSB5ZWFyO1xuICAgICAgICAgIEdvYWxTdGF0dXMuUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSA9IGdvYWxTZXR0aW5nT2JqLlBlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU07XG4gICAgICAgICAgR29hbFN0YXR1cy5UZWFtR29hbEFwcGxpY2FibGVZTSA9IGdvYWxTZXR0aW5nT2JqLlRlYW1Hb2FsQXBwbGljYWJsZVlNO1xuICAgICAgICAgIEdvYWxTdGF0dXMuR29hbFNldE1vbnRoID0gZ29hbFNldHRpbmdPYmouR29hbFNldE1vbnRoO1xuICAgICAgICAgIEdvYWxTdGF0dXMuQXBwcm92ZVN0YXR1cyA9IGdvYWxTZXR0aW5nT2JqLkFwcHJvdmVTdGF0dXM7XG4gICAgICAgICAgR29hbFN0YXR1cy5Jc0ZpcnN0VGltZSA9IGdvYWxTZXR0aW5nT2JqLklzRmlyc3RUaW1lID09IFwiWVwiO1xuICAgICAgICAgIEdvYWxTdGF0dXMuSXNOZWVkU2V0dGluZyA9IGdvYWxTZXR0aW5nT2JqLklzTmVlZFNldHRpbmcgPT0gXCJZXCI7XG4gICAgICAgICAgR29hbFN0YXR1cy5TdXBlcnZpc29yQ29tbWVudCA9IGdvYWxTZXR0aW5nT2JqLlN1cGVydmlzb3JDb21tZW50O1xuICAgICAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBsZXQgZ29hbFNldHRpbmdFeHREYXRhOiBFeHRlbnNpb25EYXRhID0gdGhpcy5nb2FsU2V0dGluZ0V4dGVuc2lvbi5nZXRFeHRlbnNpb25EYXRhKGdvYWxTZXR0aW5nT2JqLCB7IHNvdXJjZTogXCJTUUxcIiB9KTtcbiAgICAgICAgICAgIEdvYWxTdGF0dXMuc2V0RXh0ZW5zaW9uKGdvYWxTZXR0aW5nRXh0RGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgU3RlcDEuRllGQyA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkM7XG4gICAgICAgICAgU3RlcDEuQW5udWFsQ29udmVudGlvbiA9IGdvYWxTZXR0aW5nVmFsdWVPYmouQU5OVUFMX0NPTlZFTlRJT047XG4gICAgICAgICAgU3RlcDEuTURSVCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouTURSVDtcbiAgICAgICAgICBTdGVwMS5Qcm9tb3Rpb25QbGFuID0gZ29hbFNldHRpbmdWYWx1ZU9iai5QUk9NT1RJT05fUExBTjtcbiAgICAgICAgICBTdGVwMS5BY3R1YWwgPSB0aGlzLmNoYW5nZVRvRGFzaChhbGxZZWFyQWN0dWFsKTtcbiAgICAgICAgICBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkMsIFN0ZXAxLkFjdHVhbCk7XG4gICAgICAgICAgU3RlcDEuQWN0aXZpdHlGWUZDID0gZ29hbFNldHRpbmdWYWx1ZU9iai5BQ1RJVklUWV9GWUZDO1xuICAgICAgICAgIFN0ZXAxLkFjdGl2aXR5RGF5cyA9IGdvYWxTZXR0aW5nVmFsdWVPYmouQUNUSVZJVFlfREFZUztcblxuICAgICAgICAgIFN0ZXAyLlBlckNhc2UgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUl9DQVNFX0ZZRkM7XG5cbiAgICAgICAgICBsZXQgQWN0aXZpdHlGWUZDID0gaXNBZGp1c3QgPyBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kIDogU3RlcDEuRllGQztcbiAgICAgICAgICBTdGVwMyA9IHRoaXMuY2FsY3VsYXRlQWN0aXZpdHlEYXRhKEFjdGl2aXR5RllGQywgU3RlcDIuUGVyQ2FzZSwgWWVhckNvbmZpZyk7XG5cbiAgICAgICAgICBpZiAoaXNBZGp1c3QpIHtcbiAgICAgICAgICAgIFN0ZXA0ID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwoUEVSRk9STUFOQ0VUWVBFLlBFUlNPTkFMLCB5ZWFyLCBZZWFyQ29uZmlnLk1vbnRoUXVhbnRpdHlPZlllYXIsIFllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpO1xuICAgICAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTdGVwNCA9IHRoaXMuY2FsY3VsYXRlTW9udGhBY3R1YWxQbGFuKFllYXJDb25maWcsIFN0ZXAxLkZZRkMsIGFjdHVhbGxpc3QpO1xuICAgICAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFN0ZXA1LlRlYW1GWUZDID0gZ29hbFNldHRpbmdWYWx1ZU9iai5URUFNX0ZZRkM7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9BTlA7XG4gICAgICAgICAgU3RlcDUuTWFucG93ZXIgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fTUFOUE9XRVI7XG4gICAgICAgICAgU3RlcDUuUmVjcnVpdG1lbnQgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fUkVDUlVJVE1FTlQ7XG4gICAgICAgICAgU3RlcDUuVGVhbUZZRkNBY3R1YWwgPSB0aGlzLmNoYW5nZVRvRGFzaCh0ZWFtRllGQ0FjdHVhbCk7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUEFjdHVhbCA9IHRoaXMuY2hhbmdlVG9EYXNoKHRlYW1BTlBBY3R1YWwpO1xuICAgICAgICAgIFN0ZXA1LlRlYW1GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9GWUZDLCBTdGVwNS5UZWFtRllGQ0FjdHVhbCk7XG4gICAgICAgICAgU3RlcDUuVGVhbUFOUE5vd1RvWWVhckVuZCA9IHRoaXMuY2FsY3VsYXRlQU5QRnJvbUZZRkMoU3RlcDUuVGVhbUZZRkNOb3dUb1llYXJFbmQsIFllYXJDb25maWcuRnlmY0NvdmVydEFucFJhdGUpO1xuXG4gICAgICAgICAgcmV0dXJuRGF0YS5ZZWFyQ29uZmlnID0gWWVhckNvbmZpZztcbiAgICAgICAgICByZXR1cm5EYXRhLkdvYWxTdGF0dXMgPSBHb2FsU3RhdHVzO1xuICAgICAgICAgIHJldHVybkRhdGEuU3RlcDEgPSBTdGVwMTtcbiAgICAgICAgICByZXR1cm5EYXRhLlN0ZXAyID0gU3RlcDI7XG4gICAgICAgICAgcmV0dXJuRGF0YS5TdGVwMyA9IFN0ZXAzO1xuICAgICAgICAgIHJldHVybkRhdGEuU3RlcDQgPSBTdGVwNDtcbiAgICAgICAgICByZXR1cm5EYXRhLlN0ZXA1ID0gU3RlcDU7XG4gICAgICAgICAgcmV0dXJuRGF0YS5BY3R1YWxMaXN0ID0gYWN0dWFsbGlzdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAwJywgJ2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0R29hbFNldHRpbmdTdGVwMV81RGF0YSByZXR1cm5EYXRhXCIsIHJldHVybkRhdGEpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG5cbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXAzJylcbiAgcHVibGljIGNhbGN1bGF0ZUFjdGl2aXR5RGF0YShnb2FsOiBzdHJpbmcsIHBlckNhc2U6IHN0cmluZywgeWVhckNvbmZpZzogR29hbFNldHRpbmdZZWFyQ29uZmlnLCBhY3Rpdml0eURheXM6IHN0cmluZyA9ICcnKTogR29hbFNldHRpbmdTdGVwMyB7XG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVBY3Rpdml0eURhdGE6XCIsIGdvYWwsIHBlckNhc2UsIHllYXJDb25maWcsIGFjdGl2aXR5RGF5cyk7XG5cbiAgICBsZXQgcmV0dXJuT2JqOiBHb2FsU2V0dGluZ1N0ZXAzID0gbmV3IEdvYWxTZXR0aW5nU3RlcDMoKTtcbiAgICBsZXQgYWN0aXZpdHlWYWx1ZXM6IEFycmF5PEFjdGl2aXR5VmFsdWU+ID0gW107XG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG51bUdvYWwgPSBOdW1iZXIoZ29hbCk7XG4gICAgICBsZXQgbnVtUGVyQ2FzZSA9IE51bWJlcihwZXJDYXNlKVxuICAgICAgaWYgKE51bWJlclV0aWxzLmlzTnVtYmVyKGdvYWwpICYmIE51bWJlclV0aWxzLmlzTnVtYmVyKHBlckNhc2UpICYmIG51bVBlckNhc2UgPiAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImNhbGN1bGF0ZUFjdGl2aXR5RGF0YSBvbiBzZXJ2aWNlOiBcIiwgZ29hbCwgcGVyQ2FzZSwgeWVhckNvbmZpZyk7XG4gICAgICAgIGxldCBkYXlzOiBudW1iZXIgPSAoU3RyaW5nVXRpbHMuaXNFbXB0eShhY3Rpdml0eURheXMpKSA/IE51bWJlcih5ZWFyQ29uZmlnLk5vd1RvWWVhckVuZERheXMpIDogTnVtYmVyKGFjdGl2aXR5RGF5cyk7XG5cbiAgICAgICAgbGV0IGRheXNJbndlZWs6IG51bWJlciA9IDc7XG4gICAgICAgIGxldCBkYXlzSW5Nb250aDogbnVtYmVyID0gMzY1IC8gTnVtYmVyKHllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhcik7XG5cbiAgICAgICAgbGV0IGRheUluZm9yY2U6IG51bWJlciA9IG51bUdvYWwgLyBudW1QZXJDYXNlIC8gZGF5cztcbiAgICAgICAgbGV0IHdlZWtJbmZvcmNlOiBudW1iZXIgPSBkYXlJbmZvcmNlICogZGF5c0lud2VlaztcbiAgICAgICAgbGV0IG1vbnRoSW5mb3JjZTogbnVtYmVyID0gZGF5SW5mb3JjZSAqIGRheXNJbk1vbnRoO1xuICAgICAgICBkYXlJbmZvcmNlID0gZGF5SW5mb3JjZTtcblxuICAgICAgICBsZXQgdGFicyA9IFt7IG5hbWU6IFRJTUVCQVNFLkRBWSwgaW5mb3JjZTogZGF5SW5mb3JjZSB9LCB7IG5hbWU6IFRJTUVCQVNFLldFRUssIGluZm9yY2U6IHdlZWtJbmZvcmNlIH0sIHsgbmFtZTogVElNRUJBU0UuTU9OVEgsIGluZm9yY2U6IG1vbnRoSW5mb3JjZSB9XTtcblxuICAgICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgICBhY3Rpdml0eVZhbHVlcyA9IHRoaXMuZ29hbFNldHRpbmdTdGVwLmNhbGN1bGF0ZU90aGVyUnVsZUFjdGl2aXR5SW5mb3JjZSh0YWJzLCB5ZWFyQ29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3Rpdml0eTogVElNRUJBU0UgPSBhY3Rpdml0eVZhbHVlc1swXS5UaW1lQmFzZTtcblxuICAgICAgICByZXR1cm5PYmouQWN0aXZpdHkgPSBhY3Rpdml0eTtcbiAgICAgICAgcmV0dXJuT2JqLkFjdGl2aXR5VmFsdWVzID0gYWN0aXZpdHlWYWx1ZXM7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0YWJOdW0gPSBbVElNRUJBU0UuREFZLCBUSU1FQkFTRS5XRUVLLCBUSU1FQkFTRS5NT05USF07XG4gICAgICAgIHJldHVybk9iai5BY3Rpdml0eSA9IFRJTUVCQVNFLkRBWTtcbiAgICAgICAgdGFiTnVtLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgICAgbGV0IGFjdGl2aXR5OiBBY3Rpdml0eVZhbHVlID0gbmV3IEFjdGl2aXR5VmFsdWUodGltZSwgdGhpcy5EQVNILCB0aGlzLkRBU0gsIHRoaXMuREFTSCwgdGhpcy5EQVNILCB0aGlzLkRBU0gpO1xuICAgICAgICAgIGFjdGl2aXR5VmFsdWVzLnB1c2goYWN0aXZpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuT2JqLkFjdGl2aXR5VmFsdWVzID0gYWN0aXZpdHlWYWx1ZXM7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAxJywgJ2NhbGN1bGF0ZUFjdGl2aXR5RGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVBY3Rpdml0eURhdGEgcmV0dXJuIG9iajogXCIsIEpTT04uc3RyaW5naWZ5KHJldHVybk9iaikpO1xuICAgIHJldHVybiByZXR1cm5PYmo7XG4gIH1cblxuICAvLyBzdGVwIDQgZnVuY3Rpb25cbiAgQFZhbGlkKCdHb2FsU2V0dGluZ1N0ZXA0JylcbiAgcHVibGljIGNhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbih5ZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWcsIGdvYWw6IHN0cmluZywgYWN0dWFsTGlzdDogQXJyYXk8c3RyaW5nPik6IEdvYWxTZXR0aW5nU3RlcDQge1xuXG4gICAgLy9hY3R1YWxMaXN0IGV4YW1wbGUgOiBbMTAwLDEwMCwyMDAsMCwxMDAsMV1cbiAgICBjb25zb2xlLmxvZyhcImNhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbiBnb2FsOlwiLCBnb2FsKTtcbiAgICBsZXQgU3RlcDREYXRhczogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGlmIChOdW1iZXJVdGlscy5pc051bWJlcihnb2FsKSkge1xuICAgICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgICBNb250aEFjdHVhbFBsYW5MaXN0ID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuY2FsY3VsYXRlTW9udGhBY3R1YWxQbGFuKHllYXJDb25maWcsIE51bWJlcihnb2FsKSwgYWN0dWFsTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcmVjYXN0ID0gdGhpcy5jYWxjdWxhdGVGb3JlY2FzdCh5ZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KTtcbiAgICAgICAgbGV0IHNob3J0ZmFsbCA9IHRoaXMuY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWwsIGZvcmVjYXN0KTtcbiAgICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuY2FsdWxhdGVTdW1CeUFycmF5KGFjdHVhbExpc3QpO1xuICAgICAgICBTdGVwNERhdGFzLk1vbnRoTGlzdCA9IE1vbnRoQWN0dWFsUGxhbkxpc3Q7XG4gICAgICAgIFN0ZXA0RGF0YXMuRm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgICAgU3RlcDREYXRhcy5TaG9ydGZhbGwgPSBzaG9ydGZhbGw7XG4gICAgICAgIFN0ZXA0RGF0YXMuQWN0dWFsID0gYWN0dWFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/lhajpg6jpg71kYXNoXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeWVhckNvbmZpZy5Nb250aFF1YW50aXR5T2ZZZWFyOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGF0YTogTW9udGhseVBsYW5GWUZDRGF0YSA9IG5ldyBNb250aGx5UGxhbkZZRkNEYXRhKGksIHRoaXMuREFTSCwgdGhpcy5EQVNIKTtcbiAgICAgICAgICBNb250aEFjdHVhbFBsYW5MaXN0LnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgU3RlcDREYXRhcy5BY3R1YWwgPSB0aGlzLkRBU0g7XG4gICAgICAgIFN0ZXA0RGF0YXMuRm9yZWNhc3QgPSB0aGlzLkRBU0g7XG4gICAgICAgIFN0ZXA0RGF0YXMuU2hvcnRmYWxsID0gdGhpcy5EQVNIO1xuICAgICAgICBTdGVwNERhdGFzLk1vbnRoTGlzdCA9IE1vbnRoQWN0dWFsUGxhbkxpc3Q7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDAyJywgJ2NhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbiBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVNb250aEFjdHVhbFBsYW46XCIsIE1vbnRoQWN0dWFsUGxhbkxpc3QpO1xuXG4gICAgcmV0dXJuIFN0ZXA0RGF0YXM7XG5cbiAgfVxuICBwdWJsaWMgY2FsY3VsYXRlQWN0dWFsKFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIsIE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+KTogc3RyaW5nIHtcbiAgICBpZiAoUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPiAwKSB7XG4gICAgICByZXR1cm4gTW9udGhBY3R1YWxQbGFuTGlzdC5tYXAoeCA9PiAoTnVtYmVyKHguQWN0dWFsKSA8IDAgfHwgeC5BY3R1YWwgPT0gdGhpcy5EQVNIIHx8IHguTW9udGggPiBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCkgPyAwIDogTnVtYmVyKHguQWN0dWFsKSkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgTnVtYmVyKGN1ciksIDApLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLkRBU0g7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBjYWxjdWxhdGVGb3JlY2FzdChQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aDogbnVtYmVyLCBNb250aEFjdHVhbFBsYW5MaXN0OiBBcnJheTxNb250aGx5UGxhbkZZRkNEYXRhPik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsdWxhdGVTdW1CeUFycmF5KHRoaXMuZ2V0QWN0dWFsUGxhbkZyb21Nb250aExpc3QoTW9udGhBY3R1YWxQbGFuTGlzdCwgUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWx1bGF0ZVN1bUJ5QXJyYXkobW9udGhMaXN0OiBBcnJheTxhbnk+KTogc3RyaW5nIHtcbiAgICBsZXQgaXNEYXNoID0gdHJ1ZTtcbiAgICBtb250aExpc3QuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhICE9IHRoaXMuREFTSCkge1xuICAgICAgICBpc0Rhc2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgcmV0dXJuTnVtID0gdGhpcy5EQVNIO1xuICAgIGlmICghaXNEYXNoKSB7XG4gICAgICByZXR1cm5OdW0gPSBtb250aExpc3QubWFwKHggPT4gKE51bWJlcih4KSA8IDAgfHwgeCA9PSB0aGlzLkRBU0ggfHwgU3RyaW5nVXRpbHMuaXNFbXB0eSh4KSkgPyAwIDogeCkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgTnVtYmVyKGN1ciksIDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5OdW07XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWwsIGZvcmVjYXN0KTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5EQVNIO1xuICAgIGlmIChOdW1iZXJVdGlscy5pc051bWJlcihnb2FsKSAmJiBOdW1iZXJVdGlscy5pc051bWJlcihmb3JlY2FzdCkpIHtcbiAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nU3RlcCkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmdvYWxTZXR0aW5nU3RlcC5nZXRTaG9ydGZhbGwoZ29hbCwgZm9yZWNhc3QpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcHJlc3VsdCA9IChOdW1iZXIoZ29hbCkgLSBOdW1iZXIoZm9yZWNhc3QpKTtcbiAgICAgICAgcmVzdWx0ID0gKHRlbXByZXN1bHQgPCAwKSA/IFwiMFwiIDogdGVtcHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uICBnb2FsU3RlcERhdGFzXG5cblxuICAvLyNyZWdpb24gU3VibWl0ICYgQXBwcm92ZSBmdW5jdGlvblxuICBAVmFsaWQoJ0lzQXBwcm92ZUluZm8nKVxuICBwdWJsaWMgaXNOZWVkQXBwcm92ZShTdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgRGF0YVllYXI6IG51bWJlciwgYWRqdXN0RGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBPYnNlcnZhYmxlPElzQXBwcm92ZUluZm8+IHtcbiAgICByZXR1cm4gZnJvbSh0aGlzLl9pc05lZWRBcHByb3ZlKFN1Ym1pdFR5cGUsIERhdGFZZWFyLCBhZGp1c3REYXRhcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaXNOZWVkQXBwcm92ZShTdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgRGF0YVllYXI6IG51bWJlciwgYWRqdXN0RGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBQcm9taXNlPElzQXBwcm92ZUluZm8+IHtcbiAgICBjb25zb2xlLmxvZyhcIl9pc05lZWRBcHByb3ZlIGFkanVzdERhdGFzXCIsIGFkanVzdERhdGFzLCBTdWJtaXRUeXBlLCBEYXRhWWVhcik7XG5cbiAgICBsZXQgaXNBcHByb3ZlSW5mbzogSXNBcHByb3ZlSW5mbztcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZ29hbFNldHRpbmdTdGVwKSB7XG4gICAgICAgIC8vdGFpd2FuXG4gICAgICAgIGxldCBvcmlnaW5EYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSA9IGF3YWl0IHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoRGF0YVllYXIsIHRydWUpO1xuICAgICAgICBpc0FwcHJvdmVJbmZvID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuaXNOZWVkQXBwcm92ZShhZGp1c3REYXRhcywgb3JpZ2luRGF0YXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNBcHByb3ZlSW5mbyA9IG5ldyBJc0FwcHJvdmVJbmZvKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQwMycsICdpc05lZWRBcHByb3ZlIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImlzTmVlZEFwcHJvdmVcIiwgaXNBcHByb3ZlSW5mbyk7XG4gICAgcmV0dXJuIGlzQXBwcm92ZUluZm87XG4gIH1cblxuICBAVmFsaWQoJ0lzQXBwcm92ZUluZm8nKVxuICBwdWJsaWMgaXNOZWVkQXBwcm92ZV9wbGFuKEZZRkM6IHN0cmluZywgRm9yZWNhc3Q6IHN0cmluZywgR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQ6IG51bWJlcik6IE9ic2VydmFibGU8SXNBcHByb3ZlSW5mbz4ge1xuICAgIGNvbnNvbGUubG9nKCdpc05lZWRBcHByb3ZlX3BsYW4gRllGQycsIEZZRkMsICdGb3JlY2FzdCcsIEZvcmVjYXN0LCAnR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQnLCBHb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdClcblxuICAgIGxldCBpc0FwcHJvdmVJbmZvOiBJc0FwcHJvdmVJbmZvO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nU3RlcCkge1xuICAgICAgICBpc0FwcHJvdmVJbmZvID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAuaXNOZWVkQXBwcm92ZV9wbGFuKE51bWJlcihGWUZDKSwgTnVtYmVyKEZvcmVjYXN0KSwgR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNBcHByb3ZlSW5mbyA9IG5ldyBJc0FwcHJvdmVJbmZvKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MDQnLCAnaXNOZWVkQXBwcm92ZV9wbGFuIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImlzTmVlZEFwcHJvdmVfcGxhbiBpc0FwcHJvdmVJbmZvOlwiLCBpc0FwcHJvdmVJbmZvKTtcbiAgICByZXR1cm4gb2YoaXNBcHByb3ZlSW5mbyk7XG4gIH1cblxuICBAVmFsaWQoJ1N1Y2Nlc3NTdGF0dXMnKVxuICBwdWJsaWMgc3VibWl0R29hbChzdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgSXNOZWVkQXBwcm92ZTogYm9vbGVhbiwgc3VibWl0RGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSk6IE9ic2VydmFibGU8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX3N1Ym1pdEdvYWwoc3VibWl0VHlwZSwgSXNOZWVkQXBwcm92ZSwgc3VibWl0RGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3VibWl0R29hbChzdWJtaXRUeXBlOiBTVUJNSVRHT0FMVFlQRSwgSXNOZWVkQXBwcm92ZTogYm9vbGVhbiwgc3VibWl0RGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIGNvbnNvbGUubG9nKFwiW19zdWJtaXRHb2FsXSBzdWJtaXREYXRhXCIsIHN1Ym1pdERhdGEpO1xuXG4gICAgbGV0IEFjdGl2aXR5OiBUSU1FQkFTRTtcbiAgICBsZXQgR29hbFNldHRpbmdWYWx1ZTogQXJyYXk8U3VibWl0R29hbFNldHRpbmdWYWx1ZT4gPSBbXTtcbiAgICBsZXQgR29hbFBsYW46IFN1Ym1pdEdvYWxQbGFuID0gbmV3IFN1Ym1pdEdvYWxQbGFuKCk7XG4gICAgbGV0IFN1Ym1pdEluZm86IFN1Ym1pdEdvYWxJbmZvID0gbmV3IFN1Ym1pdEdvYWxJbmZvKCk7XG4gICAgbGV0IFN1Ym1pdERhdGFzOiBTdWJtaXRHb2FsRGF0YTtcbiAgICBsZXQgcmV0dXJuUmVzcDogU3VjY2Vzc1N0YXR1cyA9IG5ldyBTdWNjZXNzU3RhdHVzKGZhbHNlKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHN1Ym1pdFR5cGUgPT0gU1VCTUlUR09BTFRZUEUuQUxMKSB7XG4gICAgICAgIGxldCBHb2FsU2V0dGluZ1R5cGUgPSBbXCJTdGVwMVwiLCBcIlN0ZXAyXCIsIFwiU3RlcDVcIl07XG5cbiAgICAgICAgR29hbFNldHRpbmdUeXBlLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgICAgbGV0IHN0ZXBNYXAgPSB0aGlzLlN0ZXBUZXh0Q29udmVydE1hcC5nZXQoc3RlcCk7XG4gICAgICAgICAgc3RlcE1hcC5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Ym1pdERhdGFbc3RlcF1ba2V5XSkge1xuICAgICAgICAgICAgICBHb2FsU2V0dGluZ1ZhbHVlLnB1c2gobmV3IFN1Ym1pdEdvYWxTZXR0aW5nVmFsdWUodmFsLCBzdWJtaXREYXRhW3N0ZXBdW2tleV0sIFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBBY3Rpdml0eSA9IHN1Ym1pdERhdGEuU3RlcDMuQWN0aXZpdHk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR29hbFNldHRpbmdWYWx1ZVwiLCBHb2FsU2V0dGluZ1ZhbHVlKTtcbiAgICAgIEdvYWxQbGFuLlRpbWVCYXNlID0gVElNRUJBU0UuTU9OVEg7XG4gICAgICBHb2FsUGxhbi5WYWx1ZXMgPSBzdWJtaXREYXRhLlN0ZXA0Lk1vbnRoTGlzdC5maWx0ZXIoeCA9PiB4LlBsYW4gIT0gdGhpcy5EQVNIKS5tYXAoeCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgU3VibWl0R29hbFBsYW5JbmZvKFBFUkZPUk1BTkNFVFlQRS5QRVJTT05BTCwgeC5Nb250aCwgTnVtYmVyKHguUGxhbiksIFtdKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJHb2FsUGxhblwiLCBHb2FsUGxhbik7XG5cbiAgICAgIFN1Ym1pdEluZm8uRGF0YVllYXIgPSBzdWJtaXREYXRhLkRhdGFZZWFyO1xuICAgICAgU3VibWl0SW5mby5TdWJtaXRUeXBlID0gc3VibWl0VHlwZTtcbiAgICAgIFN1Ym1pdEluZm8uQWN0aXZpdHlHb2FsQmFzZSA9IEFjdGl2aXR5O1xuICAgICAgU3VibWl0SW5mby5Jc05lZWRBcHByb3ZlID0gSXNOZWVkQXBwcm92ZSA/IFlFU05PLllFUyA6IFlFU05PLk5PO1xuICAgICAgU3VibWl0SW5mby5FeHRlbnNpb25zID0gW107XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0SW5mb1wiLCBTdWJtaXRJbmZvKTtcblxuICAgICAgU3VibWl0RGF0YXMgPSBuZXcgU3VibWl0R29hbERhdGEoU3VibWl0SW5mbywgR29hbFNldHRpbmdWYWx1ZSwgR29hbFBsYW4pO1xuICAgICAgbGV0IFJlc3AgPSBhd2FpdCB0aGlzLl9wdXNoR29hbFNldHRpbmcoU3VibWl0RGF0YXMpO1xuICAgICAgaWYgKFJlc3AuaXNTdWNjZXNzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY0dvYWxEYXRhcygpO1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcInN1Ym1pdCBnb2FsIGZhaWwhIFwiO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDA1JywgJ3N1Ym1pdEdvYWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuUmVzcC5pc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIl9zdWJtaXRHb2FsIHJlc3AyXCIsIHJldHVyblJlc3ApO1xuXG4gICAgcmV0dXJuIHJldHVyblJlc3A7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gU3VibWl0ICYgQXBwcm92ZVxuXG4gIC8vI3JlZ2lvbiBMQU5ESU5HIHN0YXR1c1xuICBwdWJsaWMgZ2V0SXNGaXJzdFVzZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBnZXQgRGV2aWNlSW5mbyB0YWJsZVxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIGxldCBEZXZpY2VJbmZvID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldERldmljZUluZm9cIik7XG4gICAgICAoPEdldERldmljZUluZm9BUEk+RGV2aWNlSW5mbykuc2V0RGF0YVR5cGUoXCJGaXJzdFVzZUFQUFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChEZXZpY2VJbmZvKS50b1Byb21pc2UoKS50aGVuKERhdGFzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImdldElzRmlyc3RVc2VcIiwgRGF0YXNbXCJCb2R5XCJdWzBdLkNhdGVnb3J5VmFsID09IFwiWVwiID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgICAgIG9ic2VydmVyLm5leHQoRGF0YXNbXCJCb2R5XCJdWzBdLkNhdGVnb3J5VmFsID09IFwiWVwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDA4JywgJ2dldElzRmlyc3RVc2UgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICAvLyBAVmFsaWQoJ0dvYWxTZXR0aW5nR29hbFN0YXR1cycpXG4gIHB1YmxpYyBnZXRTZXR0aW5nU3RhdHVzKCk6IE9ic2VydmFibGU8QXJyYXk8R29hbFNldHRpbmdHb2FsU3RhdHVzPj4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMuX2dldFNldHRpbmdTdGF0dXMoKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRTZXR0aW5nU3RhdHVzKCk6IFByb21pc2U8QXJyYXk8R29hbFNldHRpbmdHb2FsU3RhdHVzPj4ge1xuICAgIGxldCBHb2FsU2V0dGluZ1Jlc3A6IGFueTtcbiAgICBsZXQgeWVhckNvbmZpZ1Jlc3A6IGFueTtcbiAgICBsZXQgcmV0dXJuRGF0YXM6IEFycmF5PEdvYWxTZXR0aW5nR29hbFN0YXR1cz4gPSBbXTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBnb2FsU2V0dGluZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nXCIpO1xuICAgICAgbGV0IHllYXJDb25maWcgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdZZWFyQ29uZmlnXCIpO1xuXG4gICAgICBbR29hbFNldHRpbmdSZXNwLCB5ZWFyQ29uZmlnUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZykudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh5ZWFyQ29uZmlnKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG5cbiAgICAgIC8vZ2V0R29hbFNldHRpbmdcbiAgICAgIGxldCBnb2FsU2V0dGluZ01hcCA9IG5ldyBNYXA8bnVtYmVyLCBhbnk+KCk7XG4gICAgICBsZXQgeWVhckNvbmZpZ01hcCA9IG5ldyBNYXA8bnVtYmVyLCBhbnk+KCk7XG4gICAgICBpZiAoR29hbFNldHRpbmdSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiB5ZWFyQ29uZmlnUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgZ29hbFNldHRpbmdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoR29hbFNldHRpbmdSZXNwW1wiQm9keVwiXSk7XG4gICAgICAgIHllYXJDb25maWdNYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoeWVhckNvbmZpZ1Jlc3BbXCJCb2R5XCJdKTtcblxuICAgICAgICByZXR1cm5EYXRhcyA9IFtdO1xuICAgICAgICBnb2FsU2V0dGluZ01hcC5mb3JFYWNoKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICBsZXQgZ29hbFN0YXR1cyA9IG5ldyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMoKTtcbiAgICAgICAgICBnb2FsU3RhdHVzLkRhdGFZZWFyID0ga2V5O1xuICAgICAgICAgIGdvYWxTdGF0dXMuSXNDdXJyZW50ID0geWVhckNvbmZpZ01hcC5nZXQoa2V5KS5Jc0N1cnJlbnQ7XG4gICAgICAgICAgZ29hbFN0YXR1cy5Jc05lZWRTZXR0aW5nID0gZGF0YS5Jc05lZWRTZXR0aW5nID09IFlFU05PLllFUztcbiAgICAgICAgICBnb2FsU3RhdHVzLklzRmlyc3RUaW1lID0gZGF0YS5Jc0ZpcnN0VGltZSA9PSBZRVNOTy5ZRVM7XG4gICAgICAgICAgZ29hbFN0YXR1cy5BcHByb3ZlU3RhdHVzID0gZGF0YS5BcHByb3ZlU3RhdHVzO1xuICAgICAgICAgIGdvYWxTdGF0dXMuUmVtYWluaW5nRGF5cyA9IGRhdGEuUmVtYWluaW5nZGF5cztcbiAgICAgICAgICByZXR1cm5EYXRhcy5wdXNoKGdvYWxTdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MDknLCAnZ2V0U2V0dGluZ1N0YXR1cyBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXRTZXR0aW5nU3RhdHVzIHJldHVybkRhdGFzXCIsIHJldHVybkRhdGFzKTtcbiAgICByZXR1cm4gcmV0dXJuRGF0YXM7XG4gIH1cblxuICBwcml2YXRlIHllYXJKc29uVG9NYXAoeWVhckpzb24pOiBNYXA8bnVtYmVyLCBhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcInllYXJKc29uXCIsIHllYXJKc29uKTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcDxudW1iZXIsIGFueT4oKTtcbiAgICBpZiAoeWVhckpzb24gIT0gbnVsbCkge1xuICAgICAgeWVhckpzb24uZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuRGF0YVllYXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbWFwLnNldChkYXRhLkRhdGFZZWFyLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gTEFORElORyBzdGF0dXNcblxuXG4gIC8vI3JlZ2lvbiBHb2FsU2V0dGluZyBvdmVydmlld1xuICBAVmFsaWQoJ0dvYWxTZXR0aW5nU3RlcERhdGEnKVxuICBwdWJsaWMgZ2V0T3ZlcnZpZXdEYXRhKHBlcmZvcm1hbmNlVHlwZTogUEVSRk9STUFOQ0VUWVBFLCBEYXRhWWVhcjogbnVtYmVyID0gLTEsIEFnZW50SUQ6IHN0cmluZyA9IFwiXCIpOiBPYnNlcnZhYmxlPEdvYWxTZXR0aW5nU3RlcERhdGE+IHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShBZ2VudElEKSkge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0T3ZlcnZpZXdEYXRhQnlTUUwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLl9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhciwgQWdlbnRJRCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE92ZXJ2aWV3RGF0YUJ5U1FMKHBlcmZvcm1hbmNlVHlwZTogUEVSRk9STUFOQ0VUWVBFLCB5ZWFyOiBudW1iZXIgPSAtMSkge1xuXG4gICAgbGV0IGdvYWxTdGVwRGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEgPSBuZXcgR29hbFNldHRpbmdTdGVwRGF0YSh5ZWFyKTtcbiAgICB0cnkge1xuICAgICAgZ29hbFN0ZXBEYXRhcyA9IGF3YWl0IHRoaXMuX2dldEdvYWxTZXR0aW5nU3RlcDFfNURhdGEoeWVhciwgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIl9nZXRPdmVydmlld0RhdGFCeVNRTCBnb2FsU3RlcERhdGFzXCIsIEpTT04uc3RyaW5naWZ5KGdvYWxTdGVwRGF0YXMpKTtcbiAgICAgIGlmIChnb2FsU3RlcERhdGFzICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGFjdHVhbFBsYW5EYXRhID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwocGVyZm9ybWFuY2VUeXBlLCB5ZWFyLCBnb2FsU3RlcERhdGFzW1wiWWVhckNvbmZpZ1wiXVtcIk1vbnRoUXVhbnRpdHlPZlllYXJcIl0sIGdvYWxTdGVwRGF0YXNbXCJZZWFyQ29uZmlnXCJdW1wiUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGhcIl0pO1xuICAgICAgICBpZiAoYWN0dWFsUGxhbkRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIGdvYWxTdGVwRGF0YXMuU3RlcDQgPSBhY3R1YWxQbGFuRGF0YTtcbiAgICAgICAgICBnb2FsU3RlcERhdGFzLlN0ZXA0LlNob3J0ZmFsbCA9IHRoaXMuY2FsY3VsYXRlU2hvcnRmYWxsKGdvYWxTdGVwRGF0YXMuU3RlcDEuRllGQywgZ29hbFN0ZXBEYXRhcy5TdGVwNC5Gb3JlY2FzdCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBcImdldCBNb250aEFjdHVhbFBsYW4gZGF0YSBmYWlsLlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZ2VuY3lQbGFuT2JqOiBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3ID0gbmV3IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcoKTtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlVHlwZSA9PSBQRVJGT1JNQU5DRVRZUEUuUEVSU09OQUwpIHtcbiAgICAgICAgICBsZXQgcGVyQ2FzZTogc3RyaW5nID0gZ29hbFN0ZXBEYXRhcy5TdGVwMi5QZXJDYXNlID8gZ29hbFN0ZXBEYXRhcy5TdGVwMi5QZXJDYXNlIDogJzEnO1xuICAgICAgICAgIGxldCBhY3Rpdml0eUdvYWw6IHN0cmluZyA9IGdvYWxTdGVwRGF0YXMuU3RlcDEuQWN0aXZpdHlGWUZDID8gZ29hbFN0ZXBEYXRhcy5TdGVwMS5BY3Rpdml0eUZZRkMgOiBnb2FsU3RlcERhdGFzLlN0ZXAxLkZZRkM7XG4gICAgICAgICAgbGV0IGFjdGl2aXR5RGF5czogc3RyaW5nID0gZ29hbFN0ZXBEYXRhcy5TdGVwMS5BY3Rpdml0eURheXMgPyBnb2FsU3RlcERhdGFzLlN0ZXAxLkFjdGl2aXR5RGF5cyA6IGdvYWxTdGVwRGF0YXMuWWVhckNvbmZpZy5Ob3dUb1llYXJFbmREYXlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZ29hbFN0ZXBEYXRhcy5TdGVwMyA9IHRoaXMuY2FsY3VsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5R29hbCwgcGVyQ2FzZSwgZ29hbFN0ZXBEYXRhcy5ZZWFyQ29uZmlnLCBhY3Rpdml0eURheXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHBlcmZvcm1hbmNlVHlwZSA9PSBQRVJGT1JNQU5DRVRZUEUuVEVBTSkge1xuICAgICAgICAgIGxldCBhZ2VuY3lQbGFuTWFpbkluZm86IEFnZW5jeVBsYW5NYWluSW5mbyA9IGF3YWl0IHRoaXMuZ2V0QWdlbmN5UGxhbk1haW5EYXRhKHllYXIpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgaWYgKGFnZW5jeVBsYW5NYWluSW5mbyAmJiBhZ2VuY3lQbGFuTWFpbkluZm8uQWdlbmN5TWFpbkRhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGFnZW5jeVBsYW5NYWluTGlzdCA9IGFnZW5jeVBsYW5NYWluSW5mby5BZ2VuY3lNYWluRGF0YUxpc3Q7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhZ2VuY3lQbGFuTWFpbkxpc3Q6IFwiLCBKU09OLnN0cmluZ2lmeShhZ2VuY3lQbGFuTWFpbkxpc3QpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiRllGQ1wiKVswXS5Gb3JlY2FzdCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWdlbmN5UGxhbk9ialwiLCBhZ2VuY3lQbGFuT2JqKTtcbiAgICAgICAgICAgIGFnZW5jeVBsYW5PYmouRllGQ0ZvcmVjYXN0ID0gYWdlbmN5UGxhbk1haW5MaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJGWUZDXCIpWzBdLkZvcmVjYXN0O1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5BTlBGb3JlY2FzdCA9IGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiQU5QXCIpWzBdLkZvcmVjYXN0O1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5NYW5wb3dlclBsYW4gPSB0aGlzLmNoYW5nZVRvRGFzaChhZ2VuY3lQbGFuTWFpbkxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIk1hbnBvd2VyXCIpWzBdLk1vbnRoUGxhbik7XG4gICAgICAgICAgICBhZ2VuY3lQbGFuT2JqLlJlY3J1aXRtZW50UGxhbiA9IGFnZW5jeVBsYW5NYWluTGlzdC5maWx0ZXIoeCA9PiB4LkRhdGFUeXBlID09IFwiUmVjcnVpdG1lbnRcIilbMF0uTW9udGhQbGFuO1xuICAgICAgICAgICAgYWdlbmN5UGxhbk9iai5Db21wbGV0aW9uUmF0ZSA9IGFnZW5jeVBsYW5NYWluSW5mby5Db21wbGV0aW9uUmF0ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJnZXQgYWdlbmN5UGxhbiBkYXRhIGZhaWwuXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdvYWxTdGVwRGF0YXMuQWdlbmN5UGxhbiA9IGFnZW5jeVBsYW5PYmo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IDFfNURhdGEgRmFpbC4gZ29hbFN0ZXBEYXRhczpcIiArIGdvYWxTdGVwRGF0YXNcbiAgICAgIH1cblxuICAgICAgZ29hbFN0ZXBEYXRhcyA9IHRoaXMuX2NvbnZlclNlbGVjdENvZGUoZ29hbFN0ZXBEYXRhcyk7XG4gICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgZ29hbFN0ZXBEYXRhcyA9IHRoaXMuZ29hbFNldHRpbmdTdGVwLmNoYW5nZUVtcHR5VG9EYXNoKGdvYWxTdGVwRGF0YXMpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNTA0JywgJ2dldE92ZXJ2aWV3RGF0YUJ5U1FMIGZhaWwhJyArIGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJfZ2V0T3ZlcnZpZXdEYXRhQnlTUUwgZ29hbFN0ZXBEYXRhc1wiLCBnb2FsU3RlcERhdGFzLCBKU09OLnN0cmluZ2lmeShnb2FsU3RlcERhdGFzKSk7XG4gICAgcmV0dXJuIGdvYWxTdGVwRGF0YXM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwocGVyZm9ybWFuY2VUeXBlOiBQRVJGT1JNQU5DRVRZUEUsIERhdGFZZWFyOiBudW1iZXIgPSAtMSwgQWdlbnRJRDogc3RyaW5nID0gXCJcIik6IFByb21pc2U8R29hbFNldHRpbmdTdGVwRGF0YT4ge1xuXG4gICAgY29uc29sZS53YXJuKFwicGVyZm9ybWFuY2VUeXBlOiBcIiwgcGVyZm9ybWFuY2VUeXBlLCBcIiBEYXRhWWVhcjogXCIsIERhdGFZZWFyLCBcIiBBZ2VudElEOiBcIiwgQWdlbnRJRCk7XG5cbiAgICBsZXQgR2V0R29hbFJlc3A6IGFueTtcbiAgICBsZXQgR2V0WWVhckNvbmZpZ1Jlc3A6IGFueTtcblxuICAgIGxldCBnb2FsU2V0dGluZ09iajogYW55O1xuICAgIGxldCBHb2FsVmFsdWVzOiBhbnk7XG4gICAgbGV0IGdvYWxTZXR0aW5nVmFsdWVPYmo6IGFueSA9IHt9O1xuXG4gICAgbGV0IFllYXJDb25maWc6IEdvYWxTZXR0aW5nWWVhckNvbmZpZyA9IG5ldyBHb2FsU2V0dGluZ1llYXJDb25maWcoKTtcbiAgICBsZXQgR29hbFN0YXR1czogR29hbFNldHRpbmdHb2FsU3RhdHVzID0gbmV3IEdvYWxTZXR0aW5nR29hbFN0YXR1cygpO1xuICAgIGxldCBTdGVwMTogR29hbFNldHRpbmdTdGVwMSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXAxKCk7XG4gICAgbGV0IFN0ZXAyOiBHb2FsU2V0dGluZ1N0ZXAyID0gbmV3IEdvYWxTZXR0aW5nU3RlcDIoKTtcbiAgICBsZXQgU3RlcDM6IEdvYWxTZXR0aW5nU3RlcDMgPSBuZXcgR29hbFNldHRpbmdTdGVwMygpO1xuICAgIGxldCBTdGVwNDogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IFN0ZXA1OiBHb2FsU2V0dGluZ1N0ZXA1ID0gbmV3IEdvYWxTZXR0aW5nU3RlcDUoKTtcbiAgICBsZXQgQWdlbmN5UGxhbjogQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldyA9IG5ldyBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3KCk7XG5cbiAgICBZZWFyQ29uZmlnLkRhdGFZZWFyID0gRGF0YVllYXI7XG4gICAgR29hbFN0YXR1cy5EYXRhWWVhciA9IERhdGFZZWFyO1xuICAgIGxldCByZXR1cm5EYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSA9IG5ldyBHb2FsU2V0dGluZ1N0ZXBEYXRhKERhdGFZZWFyKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgZ2V0R29hbGFwaSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsXCIpO1xuICAgICAgKDxnZXRHb2FsQVBJPmdldEdvYWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG4gICAgICBsZXQgZ2V0WWVhckNvbmZpZ2FwaSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRZZWFyQ29uZmlnXCIpO1xuICAgICAgKDxnZXRZZWFyQ29uZmlnQVBJPmdldFllYXJDb25maWdhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG5cbiAgICAgIFtHZXRHb2FsUmVzcCwgR2V0WWVhckNvbmZpZ1Jlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0R29hbGFwaSkudG9Qcm9taXNlKCksXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRZZWFyQ29uZmlnYXBpKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBHZXRHb2FsUmVzcFwiLCBHZXRHb2FsUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcIl9nZXRPdmVydmlld0RhdGFCeVJlc3RmdWwgR2V0WWVhckNvbmZpZ1Jlc3BcIiwgR2V0WWVhckNvbmZpZ1Jlc3ApO1xuXG4gICAgICBsZXQgR29hbE1hcCA9IHRoaXMueWVhckpzb25Ub01hcChHZXRHb2FsUmVzcC5Hb2Fscyk7XG4gICAgICBsZXQgWWVhckNvbmZpZ01hcCA9IHRoaXMueWVhckpzb25Ub01hcChHZXRZZWFyQ29uZmlnUmVzcC5Db25maWd1cmF0aW9ucyk7XG5cbiAgICAgIGxldCBHb2FsT2JqID0gR29hbE1hcC5nZXQoRGF0YVllYXIpO1xuICAgICAgbGV0IHllYXJDb25maWdPYmogPSBZZWFyQ29uZmlnTWFwLmdldChEYXRhWWVhcik7XG4gICAgICBpZiAoR29hbE9iaiAhPSB1bmRlZmluZWQgJiYgeWVhckNvbmZpZ09iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ29hbFNldHRpbmdPYmogPSBHb2FsTWFwLmdldChEYXRhWWVhcikuR29hbFNldHRpbmc7XG4gICAgICAgIEdvYWxWYWx1ZXMgPSBHb2FsTWFwLmdldChEYXRhWWVhcikuR29hbFZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBnb2FsU2V0dGluZ09ialwiLCBnb2FsU2V0dGluZ09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBHb2FsVmFsdWVzXCIsIEdvYWxWYWx1ZXMpO1xuXG4gICAgICAgIEdvYWxWYWx1ZXMuZm9yRWFjaChHb2FsVmFsdWUgPT4ge1xuICAgICAgICAgIGdvYWxTZXR0aW5nVmFsdWVPYmpbR29hbFZhbHVlLkRhdGFUeXBlXSA9IEdvYWxWYWx1ZS5WYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1vbnRoUXVhbnRpdHlPZlllYXIgPSB5ZWFyQ29uZmlnT2JqLk1vbnRoUXVhbnRpdHlPZlllYXI7XG4gICAgICAgIGxldCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCA9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG4gICAgICAgIFN0ZXA0ID0gYXdhaXQgdGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZSwgRGF0YVllYXIsIG1vbnRoUXVhbnRpdHlPZlllYXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBBZ2VudElEKTtcbiAgICAgICAgU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5jYWxjdWxhdGVTaG9ydGZhbGwoU3RlcDEuRllGQywgU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICBsZXQgYWxsWWVhckFjdHVhbDogc3RyaW5nID0gdGhpcy5jYWxjdWxhdGVBY3R1YWwoeWVhckNvbmZpZ09iai5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgU3RlcDQuTW9udGhMaXN0KTtcblxuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0U3VibWl0UmF0ZSA9IHllYXJDb25maWdPYmouSW5mb3JjZUNvbnZlcnRTdWJtaXRSYXRlO1xuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0TWVldFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0TWVldFJhdGU7XG4gICAgICAgIFllYXJDb25maWcuSW5mb3JjZUNvbnZlcnRTY2hlZHVsZVJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0U2NoZWR1bGVSYXRlO1xuICAgICAgICBZZWFyQ29uZmlnLkluZm9yY2VDb252ZXJ0RmluZFJhdGUgPSB5ZWFyQ29uZmlnT2JqLkluZm9yY2VDb252ZXJ0RmluZFJhdGU7XG4gICAgICAgIFllYXJDb25maWcuTm93VG9ZZWFyRW5kRGF5cyA9IHllYXJDb25maWdPYmouTm93VG9ZZWFyRW5kRGF5cztcbiAgICAgICAgWWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCA9IHllYXJDb25maWdPYmouUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG4gICAgICAgIFllYXJDb25maWcuTW9udGhRdWFudGl0eU9mWWVhciA9IHllYXJDb25maWdPYmouTW9udGhRdWFudGl0eU9mWWVhcjtcbiAgICAgICAgWWVhckNvbmZpZy5Xb3JraW5nTW9udGggPSB5ZWFyQ29uZmlnT2JqLldvcmtpbmdNb250aDtcbiAgICAgICAgWWVhckNvbmZpZy5Hb2FsQW5kUGxhbkRpZmZlcmVuY2VMaW1pdCA9IHllYXJDb25maWdPYmouR29hbEFuZFBsYW5EaWZmZXJlbmNlTGltaXQ7XG4gICAgICAgIGlmICh0aGlzLnllYXJDb25maWdFeHRlbnNpb24pIHtcbiAgICAgICAgICBsZXQgeWVhckNvbmZpZ0V4dERhdGE6IEV4dGVuc2lvbkRhdGEgPSB0aGlzLnllYXJDb25maWdFeHRlbnNpb24uZ2V0RXh0ZW5zaW9uRGF0YSh5ZWFyQ29uZmlnT2JqLCB7IHNvdXJjZTogXCJSZXN0ZnVsXCIgfSk7XG4gICAgICAgICAgWWVhckNvbmZpZy5zZXRFeHRlbnNpb24oeWVhckNvbmZpZ0V4dERhdGEpO1xuICAgICAgICB9XG5cblxuICAgICAgICBHb2FsU3RhdHVzLlBlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU0gPSBnb2FsU2V0dGluZ09iai5QZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNO1xuICAgICAgICBHb2FsU3RhdHVzLlRlYW1Hb2FsQXBwbGljYWJsZVlNID0gZ29hbFNldHRpbmdPYmouVGVhbUdvYWxBcHBsaWNhYmxlWU07XG4gICAgICAgIEdvYWxTdGF0dXMuR29hbFNldE1vbnRoID0gZ29hbFNldHRpbmdPYmouR29hbFNldE1vbnRoO1xuICAgICAgICBHb2FsU3RhdHVzLkFwcHJvdmVTdGF0dXMgPSBnb2FsU2V0dGluZ09iai5TdGF0dXM7XG4gICAgICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgbGV0IGdvYWxTZXR0aW5nRXh0RGF0YTogRXh0ZW5zaW9uRGF0YSA9IHRoaXMuZ29hbFNldHRpbmdFeHRlbnNpb24uZ2V0RXh0ZW5zaW9uRGF0YShnb2FsU2V0dGluZ09iaiwgeyBzb3VyY2U6IFwiUmVzdGZ1bFwiIH0pO1xuICAgICAgICAgIEdvYWxTdGF0dXMuc2V0RXh0ZW5zaW9uKGdvYWxTZXR0aW5nRXh0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGVyZm9ybWFuY2VUeXBlID09IFBFUkZPUk1BTkNFVFlQRS5QRVJTT05BTCkge1xuICAgICAgICAgIFN0ZXAxLkZZRkMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUlNPTl9GWUZDO1xuICAgICAgICAgIFN0ZXAxLkFubnVhbENvbnZlbnRpb24gPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFOTlVBTF9DT05WRU5USU9OO1xuICAgICAgICAgIFN0ZXAxLk1EUlQgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLk1EUlQ7XG4gICAgICAgICAgU3RlcDEuUHJvbW90aW9uUGxhbiA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUFJPTU9USU9OX1BMQU47XG4gICAgICAgICAgU3RlcDEuQWN0dWFsID0gYWxsWWVhckFjdHVhbDtcbiAgICAgICAgICBTdGVwMS5GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSU09OX0ZZRkMsIGFsbFllYXJBY3R1YWwpO1xuXG4gICAgICAgICAgU3RlcDIuUGVyQ2FzZSA9IGdvYWxTZXR0aW5nVmFsdWVPYmouUEVSX0NBU0VfRllGQztcblxuICAgICAgICAgIGxldCBwZXJDYXNlID0gZ29hbFNldHRpbmdWYWx1ZU9iai5QRVJfQ0FTRV9GWUZDO1xuICAgICAgICAgIGxldCBhY3Rpdml0eUdvYWwgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0ZZRkMgPyBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0ZZRkMgOiBnb2FsU2V0dGluZ1ZhbHVlT2JqLlBFUlNPTl9GWUZDO1xuICAgICAgICAgIGxldCBhY3Rpdml0eURheXMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0RBWVMgPyBnb2FsU2V0dGluZ1ZhbHVlT2JqLkFDVElWSVRZX0RBWVMgOiB5ZWFyQ29uZmlnT2JqLk5vd1RvWWVhckVuZERheXM7XG4gICAgICAgICAgU3RlcDMgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2aXR5RGF0YShhY3Rpdml0eUdvYWwsIHBlckNhc2UsIFllYXJDb25maWcsIGFjdGl2aXR5RGF5cyk7XG5cbiAgICAgICAgICByZXR1cm5EYXRhcy5ZZWFyQ29uZmlnID0gWWVhckNvbmZpZztcbiAgICAgICAgICByZXR1cm5EYXRhcy5Hb2FsU3RhdHVzID0gR29hbFN0YXR1cztcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwMSA9IFN0ZXAxO1xuICAgICAgICAgIHJldHVybkRhdGFzLlN0ZXAyID0gU3RlcDI7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuU3RlcDMgPSBTdGVwMztcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwNCA9IFN0ZXA0O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3RlcDUuVGVhbUZZRkMgPSBnb2FsU2V0dGluZ1ZhbHVlT2JqLlRFQU1fRllGQztcbiAgICAgICAgICBTdGVwNS5UZWFtQU5QID0gZ29hbFNldHRpbmdWYWx1ZU9iai5URUFNX0FOUDtcbiAgICAgICAgICBTdGVwNS5NYW5wb3dlciA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9NQU5QT1dFUjtcbiAgICAgICAgICBTdGVwNS5SZWNydWl0bWVudCA9IGdvYWxTZXR0aW5nVmFsdWVPYmouVEVBTV9SRUNSVUlUTUVOVDtcblxuICAgICAgICAgIGxldCBhZ2VuY3lQbGFuT2JqID0gYXdhaXQgdGhpcy5nZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVJlc3RmdWwoRGF0YVllYXIsIEFnZW50SUQpO1xuXG4gICAgICAgICAgaWYgKGFnZW5jeVBsYW5PYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IG1haW5EYXRhTGlzdCA9IGFnZW5jeVBsYW5PYmouQWdlbmN5TWFpbkRhdGFMaXN0O1xuICAgICAgICAgICAgQWdlbmN5UGxhbi5GWUZDRm9yZWNhc3QgPSBtYWluRGF0YUxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIkZZRkNcIilbMF0uRm9yZWNhc3Q7XG4gICAgICAgICAgICBBZ2VuY3lQbGFuLkFOUEZvcmVjYXN0ID0gbWFpbkRhdGFMaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJBTlBcIilbMF0uRm9yZWNhc3RcbiAgICAgICAgICAgIEFnZW5jeVBsYW4uTWFucG93ZXJQbGFuID0gdGhpcy5jaGFuZ2VUb0Rhc2gobWFpbkRhdGFMaXN0LmZpbHRlcih4ID0+IHguRGF0YVR5cGUgPT0gXCJNYW5wb3dlclwiKVswXS5Nb250aFBsYW4pO1xuICAgICAgICAgICAgQWdlbmN5UGxhbi5SZWNydWl0bWVudFBsYW4gPSBtYWluRGF0YUxpc3QuZmlsdGVyKHggPT4geC5EYXRhVHlwZSA9PSBcIlJlY3J1aXRtZW50XCIpWzBdLk1vbnRoUGxhbjtcbiAgICAgICAgICAgIEFnZW5jeVBsYW4uQ29tcGxldGlvblJhdGUgPSBhZ2VuY3lQbGFuT2JqLkNvbXBsZXRpb25SYXRlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcImdldCBhZ2VuY3lQbGFuIGZhaWwuXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuRGF0YXMuWWVhckNvbmZpZyA9IFllYXJDb25maWc7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuR29hbFN0YXR1cyA9IEdvYWxTdGF0dXM7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuU3RlcDQgPSBTdGVwNDtcbiAgICAgICAgICByZXR1cm5EYXRhcy5TdGVwNSA9IFN0ZXA1O1xuXG4gICAgICAgICAgLy90b2RvIGdldCBjb21wbGV0aW9uUmF0ZSBcbiAgICAgICAgICAvLyBBZ2VuY3lQbGFuLkNvbXBsZXRpb25SYXRlID0gPyA7XG4gICAgICAgICAgcmV0dXJuRGF0YXMuQWdlbmN5UGxhbiA9IEFnZW5jeVBsYW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybkRhdGFzID0gdGhpcy5fY29udmVyU2VsZWN0Q29kZShyZXR1cm5EYXRhcyk7XG4gICAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgICAgcmV0dXJuRGF0YXMgPSB0aGlzLmdvYWxTZXR0aW5nU3RlcC5jaGFuZ2VFbXB0eVRvRGFzaChyZXR1cm5EYXRhcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNTA1JywgJ2dldE92ZXJ2aWV3RGF0YUJ5UmVzdGZ1bCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJfZ2V0T3ZlcnZpZXdEYXRhQnlSZXN0ZnVsIHJldHVybkRhdGFzXCIsIHJldHVybkRhdGFzLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldHVybkRhdGFzKSkpO1xuICAgIHJldHVybiByZXR1cm5EYXRhcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBHb2FsU2V0dGluZyBvdmVydmlld1xuXG5cbiAgLy8jcmVnaW9uIGdldCBtb250aCBhY3R1YWwgJiBwbGFuXG4gIEBWYWxpZCgnR29hbFNldHRpbmdTdGVwNCcpXG4gIHB1YmxpYyBnZXRNb250aEFjdHVhbFBsYW4ocGVyZm9ybWFuY2VUeXBlOiBQRVJGT1JNQU5DRVRZUEUsIERhdGFZZWFyOiBudW1iZXIsIG1vbnRoUXVhbnRpdHlPZlllYXI6IG51bWJlciA9IDEyLCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aDogbnVtYmVyID0gOTksIEFnZW50SUQ6IHN0cmluZyA9IFwiXCIpOiBPYnNlcnZhYmxlPEdvYWxTZXR0aW5nU3RlcDQ+IHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShBZ2VudElEKSkge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwocGVyZm9ybWFuY2VUeXBlLCBEYXRhWWVhciwgbW9udGhRdWFudGl0eU9mWWVhciwgUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZSwgRGF0YVllYXIsIG1vbnRoUXVhbnRpdHlPZlllYXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBBZ2VudElEKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsKHBlcmZvcm1hbmNlVHlwZTogc3RyaW5nLCBEYXRhWWVhcjogbnVtYmVyLCBtb250aFF1YW50aXR5T2ZZZWFyOiBudW1iZXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIsIEFnZW50SUQ6IHN0cmluZyk6IFByb21pc2U8R29hbFNldHRpbmdTdGVwND4ge1xuICAgIC8vIGNhbGwgR2V0R29hbEFQSSAoUmVzdGZ1bCBzZXQgQWdlbnRJRClcbiAgICBsZXQgR29hbFJlc3A6IGFueTtcbiAgICBsZXQgQWN0dWFsUmVzcDogYW55O1xuICAgIGxldCByZXR1cm5EYXRhczogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGdldEdvYWxhcGkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFwiKTtcbiAgICAgIGxldCBnZXRBY3R1YWxhcGkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0QWN0dWFsXCIpO1xuICAgICAgKDxnZXRHb2FsQVBJPmdldEdvYWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG4gICAgICAoPGdldEFjdHVhbEFQST5nZXRBY3R1YWxhcGkpLnNldEFnZW50SUQoQWdlbnRJRCk7XG5cbiAgICAgIFtHb2FsUmVzcCwgQWN0dWFsUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRHb2FsYXBpKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldEFjdHVhbGFwaSkudG9Qcm9taXNlKClcbiAgICAgIF0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdvYWxSZXNwXCIsIEdvYWxSZXNwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWN0dWFsUmVzcFwiLCBBY3R1YWxSZXNwKTtcblxuICAgICAgbGV0IEdvYWxQbGFuTWFwID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIGxldCBBY3R1YWxsTWFwID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIGxldCB0aGlzQWN0dWFsOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAgIGlmIChHb2FsUmVzcC5Hb2FscyAhPSBudWxsICYmIEFjdHVhbFJlc3AuQWN0dWFsICE9IG51bGwpIHtcbiAgICAgICAgR29hbFJlc3AuR29hbHMuZm9yRWFjaChHb2FsID0+IHtcbiAgICAgICAgICBpZiAoR29hbC5EYXRhWWVhciA9PSBEYXRhWWVhciAmJiBHb2FsLkdvYWxQbGFuLlZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBHb2FsLkdvYWxQbGFuLlZhbHVlcy5mb3JFYWNoKHBsYW4gPT4ge1xuICAgICAgICAgICAgICBpZiAocGxhbi5QZXJmb3JtYW5jZVR5cGUgPT0gcGVyZm9ybWFuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgR29hbFBsYW5NYXAuc2V0KHBsYW4uTW9udGgsIHBsYW4uVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpc0FjdHVhbCA9IEFjdHVhbFJlc3AuQWN0dWFsLmZpbHRlcihBY3R1YWwgPT4gQWN0dWFsLkRhdGFZZWFyID09IERhdGFZZWFyKS5tYXAoeCA9PiB4LlZhbHVlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpc0FjdHVhbFwiLCB0aGlzQWN0dWFsKTtcbiAgICAgICAgdGhpc0FjdHVhbC5mb3JFYWNoKEFjdHVhbCA9PiB7XG4gICAgICAgICAgQWN0dWFsLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLkRhdGFUeXBlID09IFwiRllGQ1wiICYmIHZhbHVlLlBlcmZvcm1hbmNlVHlwZSA9PSBwZXJmb3JtYW5jZVR5cGUpIHtcbiAgICAgICAgICAgICAgQWN0dWFsbE1hcC5zZXQodmFsdWUuTW9udGgsIHZhbHVlLlZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IEdvYWwgZmFpbC4gR29hbFJlc3A6XCIgKyBHb2FsUmVzcDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbW9udGhRdWFudGl0eU9mWWVhcjsgaSsrKSB7XG4gICAgICAgIE1vbnRoQWN0dWFsUGxhbkxpc3QucHVzaChuZXcgTW9udGhseVBsYW5GWUZDRGF0YShcbiAgICAgICAgICBpLFxuICAgICAgICAgIHRoaXMuY2hhbmdlVG9EYXNoKEdvYWxQbGFuTWFwLmdldChpKSksXG4gICAgICAgICAgQWN0dWFsbE1hcC5nZXQoaSkgPT0gbnVsbCB8fCBpID4gUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPyB0aGlzLkRBU0ggOiBBY3R1YWxsTWFwLmdldChpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuRGF0YXMuTW9udGhMaXN0ID0gTW9udGhBY3R1YWxQbGFuTGlzdDtcbiAgICAgIHJldHVybkRhdGFzLkFjdHVhbCA9IHRoaXMuY2FsY3VsYXRlQWN0dWFsKFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YXMuRm9yZWNhc3QgPSB0aGlzLmNhbGN1bGF0ZUZvcmVjYXN0KFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YXMuU2hvcnRmYWxsID0gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MTAnLCAnZ2V0TW9udGhBY3R1YWxQbGFuQnlSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIl9nZXRNb250aEFjdHVhbFBsYW5CeVJlc3RmdWwgRGF0YXNcIiwgcmV0dXJuRGF0YXMpO1xuICAgIHJldHVybiByZXR1cm5EYXRhcztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE1vbnRoQWN0dWFsUGxhbkJ5U1FMKHBlcmZvcm1hbmNlVHlwZTogc3RyaW5nLCBEYXRhWWVhcjogbnVtYmVyLCBtb250aFF1YW50aXR5T2ZZZWFyOiBudW1iZXIsIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIpOiBQcm9taXNlPEdvYWxTZXR0aW5nU3RlcDQ+IHtcblxuICAgIGNvbnNvbGUubG9nKCdfZ2V0TW9udGhBY3R1YWxQbGFuQnlTUUwgcGVyZm9ybWFuY2VUeXBlJywgcGVyZm9ybWFuY2VUeXBlLCAnRGF0YVllYXInLCBEYXRhWWVhciwgJ21vbnRoUXVhbnRpdHlPZlllYXInLCBtb250aFF1YW50aXR5T2ZZZWFyLCAnUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgnLCBQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aClcbiAgICBsZXQgcmV0dXJuRGF0YTogR29hbFNldHRpbmdTdGVwNCA9IG5ldyBHb2FsU2V0dGluZ1N0ZXA0KCk7XG4gICAgbGV0IE1vbnRoQWN0dWFsUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhY3R1YWxSZXNwLCBnb2FsUGxhblJlc3A7XG4gICAgICAvLyBjYWxsIEdldEdvYWxTZXR0aW5nVmFsdWUgICAgICAgLy8gY2FsbCBHZXRBY3R1YWxWYWx1ZVxuICAgICAgbGV0IGdvYWxQbGFuTGlzdDogc3RyaW5nW10gPSBBcnJheShtb250aFF1YW50aXR5T2ZZZWFyKS5maWxsKHRoaXMuREFTSCwgMCk7XG4gICAgICBsZXQgYWN0dWFsTGlzdDogc3RyaW5nW10gPSBBcnJheShtb250aFF1YW50aXR5T2ZZZWFyKS5maWxsKHRoaXMuREFTSCwgMCk7XG4gICAgICBsZXQgZ29hbFBsYW4gPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0R29hbFNldHRpbmdQbGFuXCIpO1xuICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ0FjdHVhbFZhbHVlXCIpO1xuICAgICAgKDxHb2FsU2V0dGluZ0dldFBsYW5BUEk+Z29hbFBsYW4pLnNldERhdGFZZWFyKERhdGFZZWFyKTtcbiAgICAgICg8R29hbFNldHRpbmdHZXRBY3R1YWxBUEk+YWN0dWFsKS5zZXREYXRhWWVhcihEYXRhWWVhcik7XG5cbiAgICAgIFtnb2FsUGxhblJlc3AsIGFjdHVhbFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ29hbFBsYW4pLnRvUHJvbWlzZSgpLFxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0dWFsKS50b1Byb21pc2UoKVxuICAgICAgXSk7XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxQbGFuUmVzcFwiLCBnb2FsUGxhblJlc3ApO1xuICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxSZXNwXCIsIGFjdHVhbFJlc3ApO1xuXG4gICAgICBpZiAoZ29hbFBsYW5SZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBhY3R1YWxSZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICBnb2FsUGxhblJlc3BbXCJCb2R5XCJdLmZpbHRlcih4ID0+IHguUGVyZm9ybWFuY2VUeXBlID09IHBlcmZvcm1hbmNlVHlwZSkubWFwKHggPT4ge1xuICAgICAgICAgIGdvYWxQbGFuTGlzdFt4Lk1vbnRoIC0gMV0gPSB4LlZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY3R1YWxSZXNwW1wiQm9keVwiXS5maWx0ZXIoeCA9PiB4LlBlcmZvcm1hbmNlVHlwZSA9PSBwZXJmb3JtYW5jZVR5cGUgJiYgeC5EYXRhVHlwZSA9PSBcIkZZRkNcIiAmJiB4Lk1vbnRoIDw9IFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoKS5tYXAoeCA9PiB7XG4gICAgICAgICAgYWN0dWFsTGlzdFt4Lk1vbnRoIC0gMV0gPSB4LlZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJnZXQgR29hbFNldHRpbmcgZmFpbC4gZ29hbFBsYW5SZXNwXCIgKyBnb2FsUGxhblJlc3AuSGVhZGVyLm1zZyArICdhY3R1YWxSZXNwOicgKyBhY3R1YWxSZXNwLkhlYWRlci5tc2c7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcImdvYWxQbGFuTGlzdFwiLCBnb2FsUGxhbkxpc3QpO1xuICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxsaXN0XCIsIGFjdHVhbExpc3QpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtb250aFF1YW50aXR5T2ZZZWFyOyBpKyspIHtcbiAgICAgICAgTW9udGhBY3R1YWxQbGFuTGlzdC5wdXNoKG5ldyBNb250aGx5UGxhbkZZRkNEYXRhKFxuICAgICAgICAgIGksXG4gICAgICAgICAgZ29hbFBsYW5MaXN0W2kgLSAxXSxcbiAgICAgICAgICBhY3R1YWxMaXN0W2kgLSAxXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuRGF0YS5Nb250aExpc3QgPSBNb250aEFjdHVhbFBsYW5MaXN0O1xuICAgICAgcmV0dXJuRGF0YS5BY3R1YWwgPSB0aGlzLmNhbGN1bGF0ZUFjdHVhbChQZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgTW9udGhBY3R1YWxQbGFuTGlzdCkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybkRhdGEuRm9yZWNhc3QgPSB0aGlzLmNhbGN1bGF0ZUZvcmVjYXN0KFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCBNb250aEFjdHVhbFBsYW5MaXN0KS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuRGF0YS5TaG9ydGZhbGwgPSBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQxMScsICdnZXRNb250aEFjdHVhbFBsYW5CeVNRTCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiX2dldE1vbnRoQWN0dWFsUGxhbkJ5U1FMIHJldHVybkRhdGFcIiwgcmV0dXJuRGF0YSk7XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cblxuICAvLyNlbmRyZWdpb24gZ2V0IG1vbnRoIGFjdHVhbCAmIHBsYW5cblxuXG4gIC8vI3JlZ2lvbiBBZ2VuY3lQbGFuIERhdGFzXG4gIHB1YmxpYyBnZXRBZ2VuY3lQbGFuTWFpbkRhdGEoZGF0YVllYXI6IG51bWJlciwgQWdlbnRJRDogc3RyaW5nID0gXCJcIik6IE9ic2VydmFibGU8QWdlbmN5UGxhbk1haW5JbmZvPiB7XG4gICAgaWYgKEFnZW50SUQgPT0gXCJcIikge1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5nZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTChkYXRhWWVhcikpO1xuICAgIH0gZWxzZSBpZiAoQWdlbnRJRCAhPSBcIlwiKSB7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLmdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bChkYXRhWWVhciwgQWdlbnRJRCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlTUUwoZGF0YVllYXI6IG51bWJlcik6IFByb21pc2U8QWdlbmN5UGxhbk1haW5JbmZvPiB7XG4gICAgY29uc29sZS5sb2coJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5U1FMIERhdGFZZWFyJywgZGF0YVllYXIpO1xuXG4gICAgbGV0IHJldHVybkRhdGE6IEFnZW5jeVBsYW5NYWluSW5mbyA9IG5ldyBBZ2VuY3lQbGFuTWFpbkluZm8oKTtcblxuICAgIGxldCBvdGhlclBhcmFSZXNwO1xuICAgIGxldCBhZ2VuY3lQbGFuUmVzcDtcblxuICAgIHRyeSB7XG4gICAgICAvL2dldCBjb21wbGV0aW9uUmF0ZSBcbiAgICAgIGxldCBnZXRPdGhlclBhcmFtZXRlckFQSTogR2V0T3RoZXJQYXJhbWV0ZXJBUEkgPSA8R2V0T3RoZXJQYXJhbWV0ZXJBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0T3RoZXJQYXJhbWV0ZXInKTtcbiAgICAgIGxldCBhZ2VuY3lQbGFuR2V0TWFpbkFQSTogQWdlbmN5UGxhbkdldE1haW5BUEkgPSA8QWdlbmN5UGxhbkdldE1haW5BUEk+KHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRBZ2VuY3lQbGFuTWFpblwiKSk7XG4gICAgICBnZXRPdGhlclBhcmFtZXRlckFQSS5TZXRZZWFyKGRhdGFZZWFyKTtcbiAgICAgIGFnZW5jeVBsYW5HZXRNYWluQVBJLnNldERhdGFZZWFyKGRhdGFZZWFyKTtcblxuICAgICAgW290aGVyUGFyYVJlc3AsIGFnZW5jeVBsYW5SZXNwXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBbZ2V0T3RoZXJQYXJhbWV0ZXJBUEksIGFnZW5jeVBsYW5HZXRNYWluQVBJXS5tYXAoYXBpID0+IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChhcGkpLnRvUHJvbWlzZSgpKSk7XG4gICAgICBjb25zb2xlLmxvZygnb3RoZXJQYXJhUmVzcDogJywgb3RoZXJQYXJhUmVzcCwgXCJhZ2VuY3lQbGFuUmVzcFwiLCBhZ2VuY3lQbGFuUmVzcCk7XG5cbiAgICAgIGlmIChvdGhlclBhcmFSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBhZ2VuY3lQbGFuUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgbGV0IHJlc3BGaWx0ZXJDb21wbGV0aW9uUmF0ZSA9IG90aGVyUGFyYVJlc3BbJ0JvZHknXS5maWx0ZXIoeCA9PiB4Lk1hcHBpbmdJRCA9PT0gXCJDb21wbGV0aW9uUmF0ZVwiKTtcbiAgICAgICAgbGV0IGNvbXBsZXRpb25SYXRlOiBzdHJpbmcgPSByZXNwRmlsdGVyQ29tcGxldGlvblJhdGUubGVuZ3RoID4gMCA/IHJlc3BGaWx0ZXJDb21wbGV0aW9uUmF0ZVswXS5TZXRWYWx1ZSA6ICcnO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0OiBBcnJheTxBZ2VuY3lQbGFuTWFpbkRhdGE+ID0gW107XG4gICAgICAgIGxldCBBZ2VuY3lQbGFuTWFpbkxpc3QgPSBhZ2VuY3lQbGFuUmVzcFtcIkJvZHlcIl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlTUUwgQWdlbmN5UGxhbk1haW5MaXN0XCIsIEFnZW5jeVBsYW5NYWluTGlzdCk7XG4gICAgICAgIGlmIChBZ2VuY3lQbGFuTWFpbkxpc3QpIHtcbiAgICAgICAgICByZXR1cm5MaXN0ID0gKDxBcnJheTxhbnk+PkFnZW5jeVBsYW5NYWluTGlzdCkubWFwKG1haW4gPT4gdGhpcy5fYWdlbmN5UGxhbk1haW5EYXRhT2JqVG9CZWFuKG1haW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBcImdldCBBZ2VuY3lQbGFuTWFpbkxpc3QgZmFpbC5cIlxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTCByZXR1cm5MaXN0OicsIHJldHVybkxpc3QpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0aW9uUmF0ZTonLCBjb21wbGV0aW9uUmF0ZSk7XG4gICAgICAgIHJldHVybkRhdGEuQ29tcGxldGlvblJhdGUgPSBjb21wbGV0aW9uUmF0ZTtcbiAgICAgICAgcmV0dXJuRGF0YS5BZ2VuY3lNYWluRGF0YUxpc3QgPSByZXR1cm5MaXN0O1xuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMzAwJywgJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5U1FMIGZhaWwhJyArIGVycm9yKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJnZXRBZ2VuY3lQbGFuTWFpbkRhdGFCeVNRTCByZXR1cm5EYXRhXCIsIHJldHVybkRhdGEpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbmN5UGxhbk1haW5EYXRhT2JqVG9CZWFuKG9iamVjdDogYW55KTogQWdlbmN5UGxhbk1haW5EYXRhIHtcbiAgICBsZXQgYWdlbmN5UGxhbk1haW5EYXRhOiBBZ2VuY3lQbGFuTWFpbkRhdGEgPSBuZXcgQWdlbmN5UGxhbk1haW5EYXRhKCk7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLkFjdHVhbCA9IG9iamVjdC5BY3R1YWw7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLkRhdGFUeXBlID0gb2JqZWN0LkRhdGFUeXBlO1xuICAgIGFnZW5jeVBsYW5NYWluRGF0YS5EYXRhWWVhciA9IG9iamVjdC5EYXRhWWVhcjtcbiAgICBhZ2VuY3lQbGFuTWFpbkRhdGEuRm9yZWNhc3QgPSBvYmplY3QuRm9yZWNhc3Q7XG4gICAgYWdlbmN5UGxhbk1haW5EYXRhLk1vbnRoUGxhbiA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Nb250aFBsYW4pO1xuICAgIHJldHVybiBhZ2VuY3lQbGFuTWFpbkRhdGE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bChkYXRhWWVhcjogbnVtYmVyLCBBZ2VudElEOiBzdHJpbmcpOiBQcm9taXNlPEFnZW5jeVBsYW5NYWluSW5mbz4ge1xuXG4gICAgY29uc29sZS5sb2coJ2dldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCBkYXRhWWVhcicsIGRhdGFZZWFyLCAnQWdlbnRJRCcsIEFnZW50SUQpO1xuICAgIGxldCByZXR1cm5EYXRhOiBBZ2VuY3lQbGFuTWFpbkluZm8gPSBuZXcgQWdlbmN5UGxhbk1haW5JbmZvKCk7XG4gICAgbGV0IE1haW5MaXN0OiBBcnJheTxBZ2VuY3lQbGFuTWFpbkRhdGE+ID0gW107XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGdldEFnZW5jeVBsYW5BUEk6IGdldEFnZW5jeVBsYW5BUEkgPSA8Z2V0QWdlbmN5UGxhbkFQST4odGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEFnZW5jeVBsYW5cIikpO1xuICAgICAgZ2V0QWdlbmN5UGxhbkFQSS5zZXRBZ2VudElEKEFnZW50SUQpO1xuICAgICAgbGV0IGFnZW5jeVBsYW5SZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldEFnZW5jeVBsYW5BUEkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCBhZ2VuY3lQbGFuUmVzcCBcIiwgYWdlbmN5UGxhblJlc3ApO1xuICAgICAgaWYgKGFnZW5jeVBsYW5SZXNwLkFnZW5jeVBsYW5zICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGFnZW5jeVBsYW5NYXAgPSB0aGlzLnllYXJKc29uVG9NYXAoYWdlbmN5UGxhblJlc3AuQWdlbmN5UGxhbnMpO1xuICAgICAgICBsZXQgY29tcGxldGlvblJhdGUgPSBhZ2VuY3lQbGFuTWFwLmdldChkYXRhWWVhcikuQ29tcGxldGlvblJhdGU7XG4gICAgICAgIGxldCB0ZW1wQWdlbmN5UGxhbkxpc3QgPSBhZ2VuY3lQbGFuTWFwLmdldChkYXRhWWVhcikuVmFsdWVzO1xuICAgICAgICAoPEFycmF5PGFueT4+dGVtcEFnZW5jeVBsYW5MaXN0KS5mb3JFYWNoKHBsYW4gPT4ge1xuICAgICAgICAgIHBsYW5bJ01vbnRoUGxhbiddID0gcGxhblsnUGxhbiddO1xuICAgICAgICAgIHBsYW5bJ0RhdGFZZWFyJ10gPSBkYXRhWWVhcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWFpbkxpc3QgPSAoPEFycmF5PGFueT4+dGVtcEFnZW5jeVBsYW5MaXN0KS5tYXAocGxhbiA9PiB0aGlzLl9hZ2VuY3lQbGFuTWFpbkRhdGFPYmpUb0JlYW4ocGxhbikpO1xuICAgICAgICByZXR1cm5EYXRhLkFnZW5jeU1haW5EYXRhTGlzdCA9IE1haW5MaXN0O1xuICAgICAgICByZXR1cm5EYXRhLkNvbXBsZXRpb25SYXRlID0gY29tcGxldGlvblJhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcImdldCBBZ2VuY3lQbGFuIGZhaWwuIGFnZW5jeVBsYW5SZXNwOlwiICsgYWdlbmN5UGxhblJlc3A7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAzMDEnLCAnZ2V0QWdlbmN5UGxhbk1haW5EYXRhQnlSZXN0ZnVsIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImdldEFnZW5jeVBsYW5NYWluRGF0YUJ5UmVzdGZ1bCByZXR1cm5EYXRhIFwiLCByZXR1cm5EYXRhKTtcbiAgICByZXR1cm4gcmV0dXJuRGF0YTtcblxuICB9XG5cbiAgQFZhbGlkKCdBZ2VuY3lQbGFuRGV0YWlsJylcbiAgcHVibGljIGdldEFnZW5jeVBsYW5EZXRhaWxEYXRhKGRhdGFZZWFyOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+PiB7XG5cbiAgICBsZXQgYWdlbmN5UGxhbkdldERldGFpbEFQSTogQWdlbmN5UGxhbkdldERldGFpbEFQSSA9IDxBZ2VuY3lQbGFuR2V0RGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRBZ2VuY3lQbGFuRGV0YWlsXCIpO1xuICAgIGFnZW5jeVBsYW5HZXREZXRhaWxBUEkuc2V0RGF0YVllYXIoZGF0YVllYXIpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goYWdlbmN5UGxhbkdldERldGFpbEFQSSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgIGlmIChyZXNwW1wiQm9keVwiXSkge1xuICAgICAgICAgICAgbGV0IHJldHVybkxpc3Q6IEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+ID0gW107XG4gICAgICAgICAgICAvLyBsZXQgQWdlbmN5UGxhbkRldGFpbExpc3Q6IEFycmF5PEFnZW5jeVBsYW5EZXRhaWw+ID0gcmVzcFtcIkJvZHlcIl07XG4gICAgICAgICAgICByZXR1cm5MaXN0ID0gKDxBcnJheTxhbnk+PnJlc3BbXCJCb2R5XCJdKS5tYXAoaXRlbSA9PiB0aGlzLl9hZ2VuY3lQbGFuRGV0YWlsT2JqVG9CZWFuKGl0ZW0pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuTGlzdCBpbiBzZXJ2aWNlOiBcIiwgcmV0dXJuTGlzdCk7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcImdldCBhZ2VuY3lQbGFuR2V0RGV0YWlsIGZhaWwuIHJlc3A6XCIgKyByZXNwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDMwMicsICdnZXRBZ2VuY3lQbGFuRGV0YWlsRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZ2VuY3lQbGFuRGV0YWlsT2JqVG9CZWFuKG9iamVjdDogYW55KTogQWdlbmN5UGxhbkRldGFpbCB7XG4gICAgbGV0IGFnZW5jeVBsYW5EZXRhaWwgPSBuZXcgQWdlbmN5UGxhbkRldGFpbCgpO1xuXG4gICAgYWdlbmN5UGxhbkRldGFpbC5BZ2VudElEID0gb2JqZWN0LkFnZW50SUQ7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5BZ2VudE5hbWUgPSBvYmplY3QuQWdlbnROYW1lO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRGF0YVllYXIgPSBvYmplY3QuRGF0YVllYXI7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5BcHBVc2VNb2RlID0gb2JqZWN0LkFwcFVzZU1vZGU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5Kb2JHcmFkZSA9IG9iamVjdC5Kb2JHcmFkZTtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLkFjdHVhbCA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5BY3R1YWwpO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuQ2FzZUNvdW50ID0gdGhpcy5jaGFuZ2VUb0Rhc2gob2JqZWN0LkNhc2VDb3VudCk7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5DbGllbnRJRCA9IG9iamVjdC5DbGllbnRJRDtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLkRhdGFUeXBlID0gb2JqZWN0LkRhdGFUeXBlO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRGlyZWN0VW5pdFR5cGUgPSBvYmplY3QuRGlyZWN0VW5pdFR5cGU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5EcmlsbGRvd24gPSBvYmplY3QuRHJpbGxkb3duO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuVGV4dENvbG9yID0gYWdlbmN5UGxhbkRldGFpbC5EcmlsbGRvd24gPT0gJ1knID8gJ2JsdWUnIDogJ2RlZmF1bHQnO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuRm9yZWNhc3QgPSB0aGlzLmNoYW5nZVRvRGFzaChvYmplY3QuRm9yZWNhc3QpO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuR29hbCA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Hb2FsKTtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLklzQXBwcm92ZSA9IG9iamVjdC5Jc0FwcHJvdmU7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5Jc0hhc0RvdCA9IGFnZW5jeVBsYW5EZXRhaWwuSXNBcHByb3ZlID09PSAnWSc7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5NYW5wb3dlciA9IG9iamVjdC5NYW5wb3dlcjtcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLk1vbnRoUGxhbiA9IHRoaXMuY2hhbmdlVG9EYXNoKG9iamVjdC5Nb250aFBsYW4pO1xuICAgIGFnZW5jeVBsYW5EZXRhaWwuT3JkZXJzID0gb2JqZWN0Lk9yZGVycztcbiAgICBhZ2VuY3lQbGFuRGV0YWlsLlBlckNhc2UgPSB0aGlzLmNoYW5nZVRvRGFzaChvYmplY3QuUGVyQ2FzZSk7XG4gICAgYWdlbmN5UGxhbkRldGFpbC5SZWNydWl0bWVudCA9IG9iamVjdC5SZWNydWl0bWVudDtcblxuICAgIHJldHVybiBhZ2VuY3lQbGFuRGV0YWlsO1xuXG4gIH1cblxuICBAVmFsaWQoJ0FnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQnKVxuICBwdWJsaWMgYXN5bmMgZ2V0R29hbEV4cGVjdGVkKGRhdGFZZWFyOiBudW1iZXIpOiBQcm9taXNlPEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQ+IHtcblxuICAgIGxldCByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkOiBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkO1xuICAgIGxldCBnb2FsU2V0dGluZ1llYXJDb25maWdBUEk6IEdvYWxTZXR0aW5nR2V0WWVhckNvbmZpZ0FQSSA9IDxHb2FsU2V0dGluZ0dldFllYXJDb25maWdBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgICBnb2FsU2V0dGluZ1llYXJDb25maWdBUEkuc2V0RGF0YVllYXIoZGF0YVllYXIpO1xuICAgIGxldCBnb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJOiBHb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJID0gPEdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nRXhwZWN0ZWRcIik7XG4gICAgZ29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSS5zZXREYXRhWWVhcihkYXRhWWVhcik7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB5ZWFyQ29uZmlnUmVzcDtcbiAgICAgIGxldCBnb2FsRXhwZWN0ZWRSZXNwO1xuXG4gICAgICBbeWVhckNvbmZpZ1Jlc3AsIGdvYWxFeHBlY3RlZFJlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ29hbFNldHRpbmdZZWFyQ29uZmlnQVBJKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkpLnRvUHJvbWlzZSgpXG4gICAgICBdKVxuXG4gICAgICBpZiAoZ29hbEV4cGVjdGVkUmVzcCAmJiB5ZWFyQ29uZmlnUmVzcCkge1xuICAgICAgICBsZXQgZXhwZWN0ZWRSZXNwQm9keTogQXJyYXk8YW55PiA9IGdvYWxFeHBlY3RlZFJlc3BbXCJCb2R5XCJdO1xuICAgICAgICBsZXQgeWVhckNvbmZpZ1Jlc3BCb2R5OiBBcnJheTxhbnk+ID0geWVhckNvbmZpZ1Jlc3BbXCJCb2R5XCJdO1xuXG4gICAgICAgIHJldHVybkFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQgPSBleHBlY3RlZFJlc3BCb2R5Lmxlbmd0aCA+IDAgPyB0aGlzLl9hZ2VuY3lQbGFuR29hbEV4cGVjdGVkT2JqVG9CZWFuKGV4cGVjdGVkUmVzcEJvZHlbMF0pIDogbmV3IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQoZGF0YVllYXIpO1xuICAgICAgICByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkLkZZRkNDb252ZXJ0QU5QUmF0ZSA9IHllYXJDb25maWdSZXNwQm9keVswXVsnRnlmY0NvdmVydEFucFJhdGUnXTtcbiAgICAgICAgcmV0dXJuQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5Xb3JraW5nUXVhcnRlciA9IHllYXJDb25maWdSZXNwQm9keVswXVsnV29ya2luZ1F1YXJ0ZXInXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImdldEdvYWxFeHBlY3RlZCB0cmFuc1wiLCByZXR1cm5BZ2VuY3lQbGFuR29hbEV4cGVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFwiZ2V0IGdvYWwgZXhwZWN0ZWQgYW5kIHllYXJDb25maWdmYWlsLlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuQWdlbmN5UGxhbkdvYWxFeHBlY3RlZDtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDMwMycsICdnZXRHb2FsRXhwZWN0ZWQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbmN5UGxhbkdvYWxFeHBlY3RlZE9ialRvQmVhbihvYmplY3Q6IGFueSk6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQge1xuXG4gICAgbGV0IGdvYWxFeHBlY3RlZDogQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCA9IG5ldyBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkKG9iamVjdC5EYXRhWWVhcik7XG5cbiAgICBnb2FsRXhwZWN0ZWQuQU5QID0gb2JqZWN0LkFOUC50b1N0cmluZygpO1xuICAgIGdvYWxFeHBlY3RlZC5GWUZDID0gb2JqZWN0LkZZRkMudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTEgPSBvYmplY3QuUTEudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTIgPSBvYmplY3QuUTIudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTMgPSBvYmplY3QuUTMudG9TdHJpbmcoKTtcbiAgICBnb2FsRXhwZWN0ZWQuUTQgPSBvYmplY3QuUTQudG9TdHJpbmcoKTtcbiAgICBsZXQgbnVtYmVyUmVjcnVpdG1lbnRUb3RhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKG9iamVjdC5SZWNydWl0bWVudFRvdGFsKSA/IE51bWJlcihvYmplY3QuUmVjcnVpdG1lbnRUb3RhbCkgOiAwO1xuICAgIGdvYWxFeHBlY3RlZC5SZWNydWl0bWVudFRvdGFsID0gbnVtYmVyUmVjcnVpdG1lbnRUb3RhbDtcbiAgICByZXR1cm4gZ29hbEV4cGVjdGVkO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGFSZWNydWl0bWVudFN1bShnb2FsRXhwZWN0ZWQ6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQpOiBudW1iZXIge1xuICAgIHJldHVybiBbZ29hbEV4cGVjdGVkLlExLCBnb2FsRXhwZWN0ZWQuUTIsIGdvYWxFeHBlY3RlZC5RMywgZ29hbEV4cGVjdGVkLlE0XS5yZWR1Y2UoKHRvdGFsLCBlYWNoKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyUSA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGVhY2gpID8gTnVtYmVyKGVhY2gpIDogMDtcbiAgICAgIHJldHVybiB0b3RhbCArIG51bWJlclE7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUdvYWxFeHBlY3RlZChleHBlY3RlZFJlY3J1aXRtZW50OiBvYmplY3QsIGluZGlyZWN0UmVjcnVpdG1lbnQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBsZXQgZ29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSTogR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSSA9IDxHb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJzZXRHb2FsU2V0dGluZ0V4cGVjdGVkXCIpO1xuICAgIGdvYWxTZXR0aW5nU2V0RXhwZWN0ZWRBUEkuc2V0RXhwZWN0ZWRSZWNydWl0bWVudChleHBlY3RlZFJlY3J1aXRtZW50KTtcbiAgICBnb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJLnNldEluZGlyZWN0UmVjcnVpdG1lbnQoaW5kaXJlY3RSZWNydWl0bWVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwW1wiSGVhZGVyXCJdKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMzA0JywgJ3NhdmVHb2FsRXhwZWN0ZWQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uIEFnZW5jeVBsYW4gRGF0YXNcblxuXG4gIC8vI3JlZ2lvbiBvdGhlciBmdW5jdGlvblxuICBwdWJsaWMgbnVtYmVyVG9GaXgobjogbnVtYmVyLCB0b0ZpeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZml4MTAgPSBNYXRoLnBvdygxMCwgdG9GaXgpO1xuICAgIGxldCByZXR1cm5EYXRhID0gTWF0aC5yb3VuZCh0aGlzLnN0cmlwKG4pICogZml4MTApIC8gZml4MTA7XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cblxuICBwdWJsaWMgc3RyaXAobnVtLCBwcmVjaXNpb24gPSAxMikge1xuICAgIHJldHVybiBOdW1iZXIobnVtLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpO1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwoRllGQzogYW55LCBhY3R1YWw6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc29sZS5sb2coXCJjYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsIEZZRkM6XCIsIEZZRkMsIFwiYWN0dWFsOlwiLCBhY3R1YWwpO1xuICAgIGxldCBjYWN1bGV0ZUFjdHVhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGFjdHVhbCkgPyBOdW1iZXIoYWN0dWFsKSA6IDA7XG4gICAgaWYgKCFOdW1iZXJVdGlscy5pc051bWJlcihGWUZDKSkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc3VsdCA9IE51bWJlcihGWUZDKSAtIGNhY3VsZXRlQWN0dWFsIDwgMCA/IDAgOiBOdW1iZXIoRllGQykgLSBjYWN1bGV0ZUFjdHVhbDtcbiAgICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQWxsWWVhckdvYWwoTm93VG9ZZWFyRW5kOiBhbnksIGFjdHVhbDogYW55KTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwgTm93VG9ZZWFyRW5kOlwiLCBOb3dUb1llYXJFbmQsIFwiYWN0dWFsOlwiLCBhY3R1YWwpO1xuICAgIGxldCBjYWN1bGV0ZUFjdHVhbCA9IE51bWJlclV0aWxzLmlzTnVtYmVyKGFjdHVhbCkgPyBOdW1iZXIoYWN0dWFsKSA6IDA7XG4gICAgaWYgKCFOdW1iZXJVdGlscy5pc051bWJlcihOb3dUb1llYXJFbmQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5EQVNIO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKE51bWJlcihOb3dUb1llYXJFbmQpICsgY2FjdWxldGVBY3R1YWwpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIF9pc1BvcHVwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBzYXZlRmVlZGJhY2tTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQb3B1cDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc2F2ZUZlZWRiYWNrU3RhdGUoaXNQb3B1cDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzUG9wdXAgPSBpc1BvcHVwO1xuICB9XG5cbiAgcHVibGljIGdldEFjdHVhbFBsYW5Gcm9tTW9udGhMaXN0KGxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+LCBhY3R1YWxNb250aDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXRBY3R1YWxQbGFuRnJvbU1vbnRoTGlzdDpcIiwgbGlzdCwgYWN0dWFsTW9udGgpO1xuICAgIHJldHVybiBsaXN0Lm1hcCgoeCwgaW5kZXgpID0+IChpbmRleCArIDEgPCBhY3R1YWxNb250aCB8fCBpbmRleCArIDEgPT09IGFjdHVhbE1vbnRoID8geC5BY3R1YWwgOiB4LlBsYW4pKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVBTlBGcm9tRllGQyhGWUZDLCByYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShGWUZDKSB8fCBGWUZDID09IHRoaXMuREFTSCkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyVG9GaXgoTnVtYmVyKEZZRkMpICogTnVtYmVyKHJhdGUpLCAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVGWUZDRnJvbUFOUChBTlAsIHJhdGUpOiBzdHJpbmcge1xuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KEFOUCkgfHwgQU5QID09IHRoaXMuREFTSCkge1xuICAgICAgcmV0dXJuIHRoaXMuREFTSDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyVG9GaXgoTnVtYmVyKEFOUCkgLyBOdW1iZXIocmF0ZSksIDApLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uIG90aGVyIGZ1bmN0aW9uXG5cblxuICAvLyNyZWdpb24gU3luYyBEYXRhcyBcbiAgcHVibGljIGFzeW5jIHN5bmNHb2FsRGF0YXMoKSB7XG4gICAgdGhpcy5nb2FsU3RvcmUuc2V0U3luY0dvYWxEYXRhcyhTWU5DX1NUQVRVUy5TWU5DKTtcbiAgICBhd2FpdCB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJHT0FMXCIsIFwiUFJPR1JFU1NcIl0sIHRydWUpO1xuICAgIHRoaXMuZ29hbFN0b3JlLnNldFN5bmNHb2FsRGF0YXMoU1lOQ19TVEFUVVMuRklOSVNIKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzeW5jQWdlbmN5UGxhbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmMoW1wiQUdFTkNZX1BMQU5cIl0sIHRydWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN5bmNZZWFyQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJZRUFSX0NPTkZJR1wiXSwgdHJ1ZSk7XG4gIH1cblxuICBAVmFsaWQoJ1N1Y2Nlc3NTdGF0dXMnKVxuICBwdWJsaWMgYXN5bmMgcHVzaEFwcHJvdmVHb2FsKGFwcHJvdmVJbmZvOiBBcHByb3ZlSW5mbyk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLl9wdXNoQXBwcm92ZUdvYWwoYXBwcm92ZUluZm8pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVRvRGFzaChwYXJhbTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHBhcmFtID09PSAtMSB8fCBwYXJhbSA9PT0gbnVsbCB8fCBwYXJhbSA9PT0gXCJcIikgPyB0aGlzLkRBU0ggOiBwYXJhbS50b1N0cmluZygpO1xuICB9XG4gIC8vI2VuZHJlZ2lvbiBTeW5jIERhdGFzIFxuXG4gIHByaXZhdGUgYXN5bmMgX3B1c2hBcHByb3ZlR29hbChhcHByb3ZlSW5mbzogQXBwcm92ZUluZm8pOiBQcm9taXNlPFN1Y2Nlc3NTdGF0dXM+IHtcbiAgICBsZXQgcmV0dXJuUmVzcDogU3VjY2Vzc1N0YXR1cyA9IG5ldyBTdWNjZXNzU3RhdHVzKGZhbHNlKTtcbiAgICBsZXQgYXBwcm92ZUluZm9EYXRhID0ge1xuICAgICAgXCJBZ2VudElEXCI6IGFwcHJvdmVJbmZvLkFnZW50SUQsXG4gICAgICBcIkRhdGFZZWFyXCI6IGFwcHJvdmVJbmZvLkRhdGFZZWFyLFxuICAgICAgXCJpc0FwcHJvdmVcIjogYXBwcm92ZUluZm8uSXNBcHByb3ZlLFxuICAgICAgXCJjb21tZW50XCI6IGFwcHJvdmVJbmZvLkNvbW1lbnRcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCBtYWluRGF0YSA9IGFwcHJvdmVJbmZvRGF0YTtcbiAgICAgIGxldCBwdXNoQXBwcm92ZURhdGEgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwicHVzaEFwcHJvdmVHb2FsXCIpO1xuICAgICAgKDxwdXNoQXBwcm92ZUdvYWxBUEk+cHVzaEFwcHJvdmVEYXRhKS5tYWluRGF0YSA9IG1haW5EYXRhO1xuICAgICAgY29uc29sZS5sb2coJ3B1c2hBcHByb3ZlR29hbCBtYWluRGF0YScsIG1haW5EYXRhKTtcbiAgICAgIGxldCBnZXRSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHB1c2hBcHByb3ZlRGF0YSkudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0UmVzcCcsIGdldFJlc3ApO1xuICAgICAgaWYgKGdldFJlc3Auc3VjY2Vzcykge1xuICAgICAgICBhd2FpdCB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbXCJEQVNIQk9BUkRcIiwgXCJHT0FMXCIsIFwiUFJPR1JFU1NcIl0pO1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIkFwcHJvdmUgR29hbCBmYWlsLlwiO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDEwMCcsICdwdXNoQXBwcm92ZUdvYWwgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIltfcHVzaEFwcHJvdmVHb2FsXSByZXR1cm5SZXNwOlwiLCByZXR1cm5SZXNwKTtcbiAgICByZXR1cm4gcmV0dXJuUmVzcDtcblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcHVzaEdvYWxTZXR0aW5nKHN1Ym1pdERhdGFzOiBTdWJtaXRHb2FsRGF0YSk6IFByb21pc2U8U3VjY2Vzc1N0YXR1cz4ge1xuXG4gICAgbGV0IHJldHVyblJlc3A6IFN1Y2Nlc3NTdGF0dXMgPSBuZXcgU3VjY2Vzc1N0YXR1cyhmYWxzZSk7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc29sZS5sb2coJ3B1c2hHb2FsU2V0dGluZ0RhdGFBUEkgbWFpbkRhdGEnLCBzdWJtaXREYXRhcyk7XG4gICAgICBsZXQgcHVzaEdvYWxTZXR0aW5nRGF0YSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJwdXNoR29hbFNldHRpbmdEYXRhXCIpO1xuICAgICAgKDxwdXNoR29hbFNldHRpbmdEYXRhQVBJPnB1c2hHb2FsU2V0dGluZ0RhdGEpLm1haW5EYXRhID0gc3VibWl0RGF0YXM7XG4gICAgICBsZXQgZ2V0UmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdXNoR29hbFNldHRpbmdEYXRhKS50b1Byb21pc2UoKTtcblxuICAgICAgaWYgKGdldFJlc3Auc3VjY2Vzcykge1xuICAgICAgICByZXR1cm5SZXNwLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcInB1c2ggR29hbCBmYWlsZWQsXCIgKyBnZXRSZXNwLkhlYWRlci5tc2c7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAxMDEnLCBlcnJvcikpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuUmVzcDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlclNlbGVjdENvZGUoU3RlcERhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEpOiBHb2FsU2V0dGluZ1N0ZXBEYXRhIHtcbiAgICB0aGlzLkNvbE1hcFRvUHJvZmlsZS5mb3JFYWNoKChjb2RlLCBjb2wpID0+IHtcbiAgICAgIGxldCBwcm9maWxlQ29kZXM6IEFycmF5PFByb2ZpbGVDb2RlPiA9IHRoaXMuQ29sTWFwVG9Qcm9maWxlQ29kZU1hcC5nZXQoY29sKTtcbiAgICAgIGlmIChwcm9maWxlQ29kZXMubGVuZ3RoICYmIFN0ZXBEYXRhLlN0ZXAxICYmIFN0ZXBEYXRhLlN0ZXAxW2NvbF0pIHtcbiAgICAgICAgbGV0IGNvbFZhbCA9IFN0ZXBEYXRhLlN0ZXAxW2NvbF07XG4gICAgICAgIHByb2ZpbGVDb2RlcyA9IHByb2ZpbGVDb2Rlcy5maWx0ZXIoeCA9PiB4LmdldENvZGUoKSA9PSBjb2xWYWwpO1xuICAgICAgICBTdGVwRGF0YS5TdGVwMVtjb2xdID0gcHJvZmlsZUNvZGVzLmxlbmd0aCA/IHByb2ZpbGVDb2Rlc1swXS5nZXRNYXBwaW5nSUQoKSA6IHRoaXMuREFTSDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gU3RlcERhdGE7XG4gIH1cblxufSJdfQ==