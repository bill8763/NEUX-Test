/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ErrorHandler, Optional, Inject } from "@angular/core";
import { StringUtils, NumberUtils, APPError } from "@allianzSND/core";
import { ValidError } from "./model";
import { GoalSettingService } from "./goal-setting.service";
import { goalSettingStepToken, goalValidToken } from "../injectionToken";
import * as i0 from "@angular/core";
import * as i1 from "./goal-setting.service";
import * as i2 from "../injectionToken/injection-token";
export class GoalValidService {
    /**
     * @param {?} errorHandler
     * @param {?} goalSettingService
     * @param {?} goalSettingStep
     * @param {?} goalValid
     */
    constructor(errorHandler, goalSettingService, goalSettingStep, goalValid) {
        this.errorHandler = errorHandler;
        this.goalSettingService = goalSettingService;
        this.goalSettingStep = goalSettingStep;
        this.goalValid = goalValid;
        this.numberValid = [];
        this.requiredValid = [];
        if (this.goalValid) {
            this.numberValid = this.goalValid.getNumberArray();
            this.requiredValid = this.goalValid.getRequiredArray();
        }
        else {
            this.numberValid = ["FYFC", "FYFCNowToYearEnd", "PerCase", "TeamFYFC", "TeamFYFCNowToYearEnd", "Recruitment", "Manpower"];
            this.requiredValid = ["FYFC", "FYFCNowToYearEnd", "AnnualConvention", "MDRT", "PerCase", "TeamFYFC", "TeamFYFCNowToYearEnd", "Manpower", "Recruitment"];
        }
    }
    //#region Vaild function
    /**
     * @param {?} step
     * @param {?} colId
     * @param {?} val
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @param {?=} isPageValid
     * @return {?}
     */
    onChangeValid(step, colId, val, validDatas, isAdjust, errorResult, isPageValid = false) {
        console.log("onChangeValid colId", colId, "val", val, 'validDatas', validDatas, errorResult, 'isPageValid', isPageValid);
        try {
            /** @type {?} */
            let isDecimalResult;
            /** @type {?} */
            let PlanEmpty = colId.indexOf("Plan_") != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            let RequiredEmpty = this.requiredValid.indexOf(colId) != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            let numberPositive = this.numberValid.indexOf(colId) != -1 && !NumberUtils.isPositive(val);
            /** @type {?} */
            let vaildEmptyResult = RequiredEmpty || numberPositive || PlanEmpty;
            //負數的error msg 也是_required
            /** @type {?} */
            let requiredErrorMsg = (colId.indexOf("Plan_") != -1) ? "Plan_required" : colId + "_required";
            errorResult = this._setError(step, colId, "_required", vaildEmptyResult, errorResult, requiredErrorMsg); //判斷是否是負數或是空值
            if (!vaildEmptyResult && (this.numberValid.indexOf(colId) != -1 || colId.indexOf("Plan_") != -1)) { //判斷不是空值或負數才繼續往下驗證
                isDecimalResult = NumberUtils.isDecimal(val);
                errorResult = this._setError(step, colId, "_point", isDecimalResult, errorResult);
            }
            console.log("isDecimalResult", isDecimalResult, "vaildEmptyResult", vaildEmptyResult, "isPageValid", isPageValid);
            if (!isDecimalResult && !vaildEmptyResult && !isPageValid) { //驗證都沒有錯才改值
                console.log("onChangeValid no error");
                if (colId.indexOf("Plan_") != -1) {
                    validDatas.Step4.Forecast = this.goalSettingService.calculateForecast(validDatas.YearConfig.PerformanceSettlementMonth, validDatas.Step4.MonthList);
                    validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(validDatas.Step1.FYFC, validDatas.Step4.Forecast);
                    errorResult = this._validShortfall(validDatas.Step4, errorResult);
                }
                if (!isAdjust) { // 第一次設定goal
                    switch (colId) {
                        case "TeamFYFC":
                            validDatas.Step5.TeamANP = this.goalSettingService.calculateANPFromFYFC(val, validDatas.YearConfig.FyfcCovertAnpRate);
                            break;
                        case "TeamFYFCNowToYearEnd":
                            validDatas.Step5.TeamANPNowToYearEnd = this.goalSettingService.calculateANPFromFYFC(val, validDatas.YearConfig.FyfcCovertAnpRate);
                            break;
                        case "FYFC":
                            validDatas.Step3 = this.goalSettingService.calculateActivityData(val, validDatas.Step2.PerCase, validDatas.YearConfig);
                            validDatas.Step4 = this.goalSettingService.calculateMonthActualPlan(validDatas.YearConfig, val, validDatas.ActualList);
                            validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(Number(val), validDatas.Step4.Forecast);
                            errorResult = this.unitPageValid(4, validDatas, false, errorResult);
                            break;
                        case "PerCase":
                            validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFC, val, validDatas.YearConfig);
                            break;
                    }
                }
                else {
                    /** @type {?} */
                    let FYFCSmallValid = Number(validDatas.Step1.Actual) > Number(validDatas.Step1.FYFC);
                    /** @type {?} */
                    let FYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step1.FYFCNowToYearEnd);
                    switch (colId) {
                        case "FYFC":
                            validDatas.Step1.FYFCNowToYearEnd = this.goalSettingService.calculateNowToYearEndGoal(val, validDatas.Step1.Actual);
                            errorResult = this._setError(1, colId, "_small", FYFCSmallValid, errorResult);
                            errorResult = this._setError(1, "FYFCNowToYearEnd", "_required", !FYFCNowToYearEndIsPositive, errorResult);
                            if (!FYFCSmallValid && FYFCNowToYearEndIsPositive) {
                                validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFCNowToYearEnd, validDatas.Step2.PerCase, validDatas.YearConfig);
                                validDatas.Step4.Forecast = this.goalSettingService.calculateForecast(validDatas.YearConfig.PerformanceSettlementMonth, validDatas.Step4.MonthList);
                                validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(Number(val), validDatas.Step4.Forecast);
                                errorResult = this._validShortfall(validDatas.Step4, errorResult);
                            }
                            break;
                        case "FYFCNowToYearEnd":
                            validDatas.Step1.FYFC = this.goalSettingService.calculateAllYearGoal(val, validDatas.Step1.Actual);
                            errorResult = this.onChangeValid(1, "FYFC", validDatas.Step1.FYFC, validDatas, true, errorResult);
                            break;
                        case "PerCase":
                            if (!FYFCSmallValid && FYFCNowToYearEndIsPositive) {
                                validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFCNowToYearEnd, val, validDatas.YearConfig);
                            }
                            break;
                        case "TeamFYFC":
                            validDatas.Step5.TeamFYFCNowToYearEnd = this.goalSettingService.calculateNowToYearEndGoal(val, validDatas.Step5.TeamFYFCActual);
                            /** @type {?} */
                            let TeamFYFCSmallValid = Number(validDatas.Step5.TeamFYFCActual) > Number(validDatas.Step5.TeamFYFC);
                            /** @type {?} */
                            let TeamFYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step5.TeamFYFCNowToYearEnd);
                            validDatas.Step5.TeamANP = this.goalSettingService.calculateANPFromFYFC(validDatas.Step5.TeamFYFC, validDatas.YearConfig.FyfcCovertAnpRate);
                            validDatas.Step5.TeamANPNowToYearEnd = this.goalSettingService.calculateANPFromFYFC(validDatas.Step5.TeamFYFCNowToYearEnd, validDatas.YearConfig.FyfcCovertAnpRate);
                            errorResult = this._setError(5, "TeamFYFC", "_small", TeamFYFCSmallValid, errorResult);
                            errorResult = this._setError(5, "TeamFYFCNowToYearEnd", "_required", !TeamFYFCNowToYearEndIsPositive, errorResult);
                            break;
                        case "TeamFYFCNowToYearEnd":
                            validDatas.Step5.TeamFYFC = this.goalSettingService.calculateAllYearGoal(val, validDatas.Step5.TeamFYFCActual);
                            errorResult = this.onChangeValid(1, "TeamFYFC", validDatas.Step5.TeamFYFC, validDatas, true, errorResult);
                            break;
                    }
                }
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00406', 'onChangeValid fail!' + error.message));
        }
        console.log('onChangeValid errorResult', errorResult);
        return errorResult;
    }
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @return {?}
     */
    pageValid(step, validDatas, isAdjust) {
        console.log('pageValid step', step, 'validDatas', JSON.stringify(validDatas), isAdjust);
        /** @type {?} */
        let errorResult = [];
        /** @type {?} */
        let steplist = [5, 4, 2, 1];
        try {
            steplist.forEach((/**
             * @param {?} stepNum
             * @return {?}
             */
            stepNum => {
                //判斷傳進來的步驟大於或等於驗證步驟才驗證
                if (step >= stepNum && validDatas["Step" + stepNum] != null && validDatas["Step" + stepNum] != undefined) {
                    errorResult = this.unitPageValid(stepNum, validDatas, isAdjust, errorResult);
                }
            }));
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00407', 'pageValid fail!' + error.message));
        }
        return errorResult;
    }
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @return {?}
     */
    unitPageValid(step, validDatas, isAdjust, errorResult) {
        /** @type {?} */
        let stepColMap = new Map();
        /** @type {?} */
        let step1Cols = ["FYFC", "AnnualConvention", "MDRT", "PromotionPlan"];
        /** @type {?} */
        let step2Cols = ["PerCase"];
        /** @type {?} */
        let step5Cols = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment"];
        stepColMap.set(1, step1Cols);
        stepColMap.set(2, step2Cols);
        stepColMap.set(5, step5Cols);
        if (step == 4) {
            //驗證第4步
            /** @type {?} */
            let monthList = validDatas.Step4.MonthList;
            /** @type {?} */
            let performanceSettlementMonth = validDatas.YearConfig.PerformanceSettlementMonth;
            monthList.filter((/**
             * @param {?} obj
             * @return {?}
             */
            obj => obj.Month > performanceSettlementMonth)).forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                errorResult = this.onChangeValid(4, "Plan_" + x.Month, x.Plan, validDatas, false, errorResult, true);
            }));
            errorResult = this._validShortfall(validDatas.Step4, errorResult);
        }
        else {
            //其他步驟驗證
            if (isAdjust) {
                step5Cols.push("TeamFYFCNowToYearEnd");
                step1Cols.push("FYFCNowToYearEnd");
            }
            /** @type {?} */
            let stepCols = stepColMap.get(step);
            stepCols.forEach((/**
             * @param {?} col
             * @return {?}
             */
            col => {
                errorResult = this.onChangeValid(step, col, validDatas["Step" + step][col], validDatas, isAdjust, errorResult, true);
            }));
        }
        return errorResult;
    }
    /**
     * @private
     * @param {?} step
     * @param {?} colId
     * @param {?} errorType
     * @param {?} validresult
     * @param {?} errorResult
     * @param {?=} errorMsg
     * @return {?}
     */
    _setError(step, colId, errorType, validresult, errorResult, errorMsg = '') {
        console.log('step', step, 'colId', colId, 'errorType', errorType, 'validresult', validresult, 'errorResult', errorResult);
        errorMsg = StringUtils.isEmpty(errorMsg) ? colId + errorType : errorMsg;
        errorResult = errorResult.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => (x.ColId != colId || (x.ColId == colId && x.Msg.indexOf(errorMsg))))); //等於colId && 等於errortype 的先拿掉
        if (validresult) {
            errorResult.push(new ValidError(step, colId, errorMsg));
        }
        console.log('errorResult', errorResult);
        return errorResult;
    }
    /**
     * @private
     * @param {?} setp4Obj
     * @param {?} errorResult
     * @return {?}
     */
    _validShortfall(setp4Obj, errorResult) {
        //驗證Shortfall
        if (this.goalSettingStep) {
            /** @type {?} */
            let validresult = this.goalSettingStep.validateGoal_Forecast(Number(setp4Obj.Shortfall));
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        else {
            /** @type {?} */
            let validresult = Number(setp4Obj.Shortfall) != 0;
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        return errorResult;
    }
}
GoalValidService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
GoalValidService.ctorParameters = () => [
    { type: ErrorHandler },
    { type: GoalSettingService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalValidToken,] }] }
];
/** @nocollapse */ GoalValidService.ngInjectableDef = i0.defineInjectable({ factory: function GoalValidService_Factory() { return new GoalValidService(i0.inject(i0.ErrorHandler), i0.inject(i1.GoalSettingService), i0.inject(i2.goalSettingStepToken, 8), i0.inject(i2.goalValidToken, 8)); }, token: GoalValidService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.numberValid;
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.requiredValid;
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.goalSettingService;
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.goalSettingStep;
    /**
     * @type {?}
     * @private
     */
    GoalValidService.prototype.goalValid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC12YWxpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2dvYWwtdmFsaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RSxPQUFPLEVBQXVCLFVBQVUsRUFBb0IsTUFBTSxTQUFTLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBT3ZFLE1BQU07Ozs7Ozs7SUFLSixZQUNZLFlBQTBCLEVBQzFCLGtCQUFzQyxFQUd0QyxlQUFnQyxFQUdoQyxTQUE2QjtRQVA3QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBR3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUdoQyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQVhqQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBWXRDLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMxRDthQUFJO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVB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QVcsQ0FBQztJQUNyQixDQUFDOzs7WUF4TUYsVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFWa0IsWUFBWTtZQUd4QixrQkFBa0I7NENBaUJsQixRQUFRLFlBQ1IsTUFBTSxTQUFDLG9CQUFvQjs0Q0FFM0IsUUFBUSxZQUNSLE1BQU0sU0FBQyxjQUFjOzs7Ozs7OztJQVYxQix1Q0FBd0M7Ozs7O0lBQ3hDLHlDQUEwQzs7Ozs7SUFHdEMsd0NBQWtDOzs7OztJQUNsQyw4Q0FBOEM7Ozs7O0lBQzlDLDJDQUV3Qzs7Ozs7SUFDeEMscUNBRXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzLCBOdW1iZXJVdGlscywgQVBQRXJyb3IgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwRGF0YSwgVmFsaWRFcnJvciwgR29hbFNldHRpbmdTdGVwNCB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1NlcnZpY2UgfSBmcm9tIFwiLi9nb2FsLXNldHRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgZ29hbFNldHRpbmdTdGVwLCBHb2FsVmFsaWRFeHRlbnNpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBnb2FsU2V0dGluZ1N0ZXBUb2tlbiwgZ29hbFZhbGlkVG9rZW4gfSBmcm9tIFwiLi4vaW5qZWN0aW9uVG9rZW5cIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbiAgfSlcbiAgXG4gIGV4cG9ydCBjbGFzcyBHb2FsVmFsaWRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbnVtYmVyVmFsaWQ6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHJlcXVpcmVkVmFsaWQ6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgICAgICBwcml2YXRlIGdvYWxTZXR0aW5nU2VydmljZTogR29hbFNldHRpbmdTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KGdvYWxTZXR0aW5nU3RlcFRva2VuKVxuICAgICAgICBwcml2YXRlIGdvYWxTZXR0aW5nU3RlcDogZ29hbFNldHRpbmdTdGVwLFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KGdvYWxWYWxpZFRva2VuKVxuICAgICAgICBwcml2YXRlIGdvYWxWYWxpZDogR29hbFZhbGlkRXh0ZW5zaW9uLFxuICAgICl7XG4gICAgICAgIGlmKHRoaXMuZ29hbFZhbGlkKXtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyVmFsaWQgPSB0aGlzLmdvYWxWYWxpZC5nZXROdW1iZXJBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZFZhbGlkID0gdGhpcy5nb2FsVmFsaWQuZ2V0UmVxdWlyZWRBcnJheSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyVmFsaWQgPSBbXCJGWUZDXCIsIFwiRllGQ05vd1RvWWVhckVuZFwiLCBcIlBlckNhc2VcIiwgXCJUZWFtRllGQ1wiLCBcIlRlYW1GWUZDTm93VG9ZZWFyRW5kXCIsIFwiUmVjcnVpdG1lbnRcIiwgXCJNYW5wb3dlclwiXTtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWRWYWxpZCA9IFtcIkZZRkNcIiwgXCJGWUZDTm93VG9ZZWFyRW5kXCIsIFwiQW5udWFsQ29udmVudGlvblwiLCBcIk1EUlRcIiwgXCJQZXJDYXNlXCIsIFwiVGVhbUZZRkNcIiwgXCJUZWFtRllGQ05vd1RvWWVhckVuZFwiLCBcIk1hbnBvd2VyXCIsIFwiUmVjcnVpdG1lbnRcIl07ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAvLyNyZWdpb24gVmFpbGQgZnVuY3Rpb25cbiAgIHB1YmxpYyBvbkNoYW5nZVZhbGlkKHN0ZXA6IG51bWJlciwgY29sSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcsIHZhbGlkRGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEsIGlzQWRqdXN0OiBib29sZWFuLCBlcnJvclJlc3VsdDogQXJyYXk8VmFsaWRFcnJvcj4sIGlzUGFnZVZhbGlkOiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxWYWxpZEVycm9yPiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlVmFsaWQgY29sSWRcIiwgY29sSWQsIFwidmFsXCIsIHZhbCwgJ3ZhbGlkRGF0YXMnLCB2YWxpZERhdGFzLCBlcnJvclJlc3VsdCwgJ2lzUGFnZVZhbGlkJywgaXNQYWdlVmFsaWQpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgaXNEZWNpbWFsUmVzdWx0OiBib29sZWFuO1xuICAgICAgbGV0IFBsYW5FbXB0eSA9IGNvbElkLmluZGV4T2YoXCJQbGFuX1wiKSAhPSAtMSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHZhbCk7XG4gICAgICBsZXQgUmVxdWlyZWRFbXB0eTogYm9vbGVhbiA9IHRoaXMucmVxdWlyZWRWYWxpZC5pbmRleE9mKGNvbElkKSAhPSAtMSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHZhbCk7XG4gICAgICBsZXQgbnVtYmVyUG9zaXRpdmU6IGJvb2xlYW4gPSB0aGlzLm51bWJlclZhbGlkLmluZGV4T2YoY29sSWQpICE9IC0xICYmICFOdW1iZXJVdGlscy5pc1Bvc2l0aXZlKHZhbCk7XG4gICAgICBsZXQgdmFpbGRFbXB0eVJlc3VsdDogYm9vbGVhbiA9IFJlcXVpcmVkRW1wdHkgfHwgbnVtYmVyUG9zaXRpdmUgfHwgUGxhbkVtcHR5OyAvL+iyoOaVuOeahGVycm9yIG1zZyDkuZ/mmK9fcmVxdWlyZWRcblxuICAgICAgbGV0IHJlcXVpcmVkRXJyb3JNc2cgPSAoY29sSWQuaW5kZXhPZihcIlBsYW5fXCIpICE9IC0xKSA/IFwiUGxhbl9yZXF1aXJlZFwiIDogY29sSWQgKyBcIl9yZXF1aXJlZFwiO1xuICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl9zZXRFcnJvcihzdGVwLCBjb2xJZCwgXCJfcmVxdWlyZWRcIiwgdmFpbGRFbXB0eVJlc3VsdCwgZXJyb3JSZXN1bHQsIHJlcXVpcmVkRXJyb3JNc2cpOyAvL+WIpOaWt+aYr+WQpuaYr+iyoOaVuOaIluaYr+epuuWAvFxuXG4gICAgICBpZiAoIXZhaWxkRW1wdHlSZXN1bHQgJiYgKHRoaXMubnVtYmVyVmFsaWQuaW5kZXhPZihjb2xJZCkgIT0gLTEgfHwgY29sSWQuaW5kZXhPZihcIlBsYW5fXCIpICE9IC0xKSkgeyAvL+WIpOaWt+S4jeaYr+epuuWAvOaIluiyoOaVuOaJjee5vOe6jOW+gOS4i+mpl+itiVxuICAgICAgICBpc0RlY2ltYWxSZXN1bHQgPSBOdW1iZXJVdGlscy5pc0RlY2ltYWwodmFsKTtcbiAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl9zZXRFcnJvcihzdGVwLCBjb2xJZCwgXCJfcG9pbnRcIiwgaXNEZWNpbWFsUmVzdWx0LCBlcnJvclJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaXNEZWNpbWFsUmVzdWx0XCIsIGlzRGVjaW1hbFJlc3VsdCwgXCJ2YWlsZEVtcHR5UmVzdWx0XCIsIHZhaWxkRW1wdHlSZXN1bHQsIFwiaXNQYWdlVmFsaWRcIiwgaXNQYWdlVmFsaWQpO1xuICAgICAgaWYgKCFpc0RlY2ltYWxSZXN1bHQgJiYgIXZhaWxkRW1wdHlSZXN1bHQgJiYgIWlzUGFnZVZhbGlkKSB7IC8v6amX6K2J6YO95rKS5pyJ6Yyv5omN5pS55YC8XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VWYWxpZCBubyBlcnJvclwiKTtcbiAgICAgICAgaWYgKGNvbElkLmluZGV4T2YoXCJQbGFuX1wiKSAhPSAtMSkge1xuICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDQuRm9yZWNhc3QgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVGb3JlY2FzdCh2YWxpZERhdGFzLlllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgsIHZhbGlkRGF0YXMuU3RlcDQuTW9udGhMaXN0KTtcbiAgICAgICAgICB2YWxpZERhdGFzLlN0ZXA0LlNob3J0ZmFsbCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZVNob3J0ZmFsbCh2YWxpZERhdGFzLlN0ZXAxLkZZRkMsIHZhbGlkRGF0YXMuU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fdmFsaWRTaG9ydGZhbGwodmFsaWREYXRhcy5TdGVwNCwgZXJyb3JSZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0FkanVzdCkgeyAvLyDnrKzkuIDmrKHoqK3lrppnb2FsXG4gICAgICAgICAgc3dpdGNoIChjb2xJZCkge1xuICAgICAgICAgICAgY2FzZSBcIlRlYW1GWUZDXCI6XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDUuVGVhbUFOUCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFOUEZyb21GWUZDKHZhbCwgdmFsaWREYXRhcy5ZZWFyQ29uZmlnLkZ5ZmNDb3ZlcnRBbnBSYXRlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGVhbUZZRkNOb3dUb1llYXJFbmRcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtQU5QTm93VG9ZZWFyRW5kID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQU5QRnJvbUZZRkModmFsLCB2YWxpZERhdGFzLlllYXJDb25maWcuRnlmY0NvdmVydEFucFJhdGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGWUZDXCI6XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDMgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVBY3Rpdml0eURhdGEodmFsLCB2YWxpZERhdGFzLlN0ZXAyLlBlckNhc2UsIHZhbGlkRGF0YXMuWWVhckNvbmZpZyk7XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDQgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVNb250aEFjdHVhbFBsYW4odmFsaWREYXRhcy5ZZWFyQ29uZmlnLCB2YWwsIHZhbGlkRGF0YXMuQWN0dWFsTGlzdCk7XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlU2hvcnRmYWxsKE51bWJlcih2YWwpLCB2YWxpZERhdGFzLlN0ZXA0LkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLnVuaXRQYWdlVmFsaWQoNCwgdmFsaWREYXRhcywgZmFsc2UsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUGVyQ2FzZVwiOlxuICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXAzID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQWN0aXZpdHlEYXRhKHZhbGlkRGF0YXMuU3RlcDEuRllGQywgdmFsLCB2YWxpZERhdGFzLlllYXJDb25maWcpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IEZZRkNTbWFsbFZhbGlkID0gTnVtYmVyKHZhbGlkRGF0YXMuU3RlcDEuQWN0dWFsKSA+IE51bWJlcih2YWxpZERhdGFzLlN0ZXAxLkZZRkMpO1xuICAgICAgICAgIGxldCBGWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSA9IE51bWJlclV0aWxzLmlzUG9zaXRpdmUodmFsaWREYXRhcy5TdGVwMS5GWUZDTm93VG9ZZWFyRW5kKTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbElkKSB7XG4gICAgICAgICAgICBjYXNlIFwiRllGQ1wiOlxuICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXAxLkZZRkNOb3dUb1llYXJFbmQgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVOb3dUb1llYXJFbmRHb2FsKHZhbCwgdmFsaWREYXRhcy5TdGVwMS5BY3R1YWwpO1xuICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKDEsIGNvbElkLCBcIl9zbWFsbFwiLCBGWUZDU21hbGxWYWxpZCwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKDEsIFwiRllGQ05vd1RvWWVhckVuZFwiLCBcIl9yZXF1aXJlZFwiLCAhRllGQ05vd1RvWWVhckVuZElzUG9zaXRpdmUsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKCFGWUZDU21hbGxWYWxpZCAmJiBGWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDMgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVBY3Rpdml0eURhdGEodmFsaWREYXRhcy5TdGVwMS5GWUZDTm93VG9ZZWFyRW5kLCB2YWxpZERhdGFzLlN0ZXAyLlBlckNhc2UsIHZhbGlkRGF0YXMuWWVhckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNC5Gb3JlY2FzdCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUZvcmVjYXN0KHZhbGlkRGF0YXMuWWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgdmFsaWREYXRhcy5TdGVwNC5Nb250aExpc3QpO1xuICAgICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlU2hvcnRmYWxsKE51bWJlcih2YWwpLCB2YWxpZERhdGFzLlN0ZXA0LkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3ZhbGlkU2hvcnRmYWxsKHZhbGlkRGF0YXMuU3RlcDQsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGWUZDTm93VG9ZZWFyRW5kXCI6XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDEuRllGQyA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFsbFllYXJHb2FsKHZhbCwgdmFsaWREYXRhcy5TdGVwMS5BY3R1YWwpO1xuICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMub25DaGFuZ2VWYWxpZCgxLCBcIkZZRkNcIiwgdmFsaWREYXRhcy5TdGVwMS5GWUZDLCB2YWxpZERhdGFzLCB0cnVlLCBlcnJvclJlc3VsdCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBlckNhc2VcIjpcbiAgICAgICAgICAgICAgaWYgKCFGWUZDU21hbGxWYWxpZCAmJiBGWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDMgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVBY3Rpdml0eURhdGEodmFsaWREYXRhcy5TdGVwMS5GWUZDTm93VG9ZZWFyRW5kLCB2YWwsIHZhbGlkRGF0YXMuWWVhckNvbmZpZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGVhbUZZRkNcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQ05vd1RvWWVhckVuZCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwodmFsLCB2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDQWN0dWFsKTtcbiAgICAgICAgICAgICAgbGV0IFRlYW1GWUZDU21hbGxWYWxpZCA9IE51bWJlcih2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDQWN0dWFsKSA+IE51bWJlcih2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDKTtcbiAgICAgICAgICAgICAgbGV0IFRlYW1GWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSA9IE51bWJlclV0aWxzLmlzUG9zaXRpdmUodmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQ05vd1RvWWVhckVuZCk7XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDUuVGVhbUFOUCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFOUEZyb21GWUZDKHZhbGlkRGF0YXMuU3RlcDUuVGVhbUZZRkMsIHZhbGlkRGF0YXMuWWVhckNvbmZpZy5GeWZjQ292ZXJ0QW5wUmF0ZSk7XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDUuVGVhbUFOUE5vd1RvWWVhckVuZCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFOUEZyb21GWUZDKHZhbGlkRGF0YXMuU3RlcDUuVGVhbUZZRkNOb3dUb1llYXJFbmQsIHZhbGlkRGF0YXMuWWVhckNvbmZpZy5GeWZjQ292ZXJ0QW5wUmF0ZSk7XG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fc2V0RXJyb3IoNSwgXCJUZWFtRllGQ1wiLCBcIl9zbWFsbFwiLCBUZWFtRllGQ1NtYWxsVmFsaWQsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl9zZXRFcnJvcig1LCBcIlRlYW1GWUZDTm93VG9ZZWFyRW5kXCIsIFwiX3JlcXVpcmVkXCIsICFUZWFtRllGQ05vd1RvWWVhckVuZElzUG9zaXRpdmUsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGVhbUZZRkNOb3dUb1llYXJFbmRcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQyA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFsbFllYXJHb2FsKHZhbCwgdmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQ0FjdHVhbCk7XG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5vbkNoYW5nZVZhbGlkKDEsIFwiVGVhbUZZRkNcIiwgdmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQywgdmFsaWREYXRhcywgdHJ1ZSwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA0MDYnLCAnb25DaGFuZ2VWYWxpZCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ29uQ2hhbmdlVmFsaWQgZXJyb3JSZXN1bHQnLCBlcnJvclJlc3VsdCk7XG4gICAgcmV0dXJuIGVycm9yUmVzdWx0O1xuICB9XG5cbiAgcHVibGljIHBhZ2VWYWxpZChzdGVwOiBudW1iZXIsIHZhbGlkRGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEsIGlzQWRqdXN0OiBib29sZWFuKTogQXJyYXk8VmFsaWRFcnJvcj4ge1xuXG4gICAgY29uc29sZS5sb2coJ3BhZ2VWYWxpZCBzdGVwJywgc3RlcCwgJ3ZhbGlkRGF0YXMnLCBKU09OLnN0cmluZ2lmeSh2YWxpZERhdGFzKSwgaXNBZGp1c3QpO1xuXG4gICAgbGV0IGVycm9yUmVzdWx0ID0gW107XG4gICAgbGV0IHN0ZXBsaXN0ID0gWzUsIDQsIDIsIDFdO1xuICAgIHRyeSB7XG4gICAgICBzdGVwbGlzdC5mb3JFYWNoKHN0ZXBOdW0gPT4ge1xuICAgICAgICAvL+WIpOaWt+WCs+mAsuS+hueahOatpempn+Wkp+aWvOaIluetieaWvOmpl+itieatpempn+aJjempl+itiVxuICAgICAgICBpZiAoc3RlcCA+PSBzdGVwTnVtICYmIHZhbGlkRGF0YXNbXCJTdGVwXCIgKyBzdGVwTnVtXSAhPSBudWxsICYmIHZhbGlkRGF0YXNbXCJTdGVwXCIgKyBzdGVwTnVtXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMudW5pdFBhZ2VWYWxpZChzdGVwTnVtLCB2YWxpZERhdGFzLCBpc0FkanVzdCwgZXJyb3JSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQwNycsICdwYWdlVmFsaWQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JSZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgdW5pdFBhZ2VWYWxpZChzdGVwOiBudW1iZXIsIHZhbGlkRGF0YXM6IEdvYWxTZXR0aW5nU3RlcERhdGEsIGlzQWRqdXN0OiBib29sZWFuLCBlcnJvclJlc3VsdDogVmFsaWRFcnJvcltdKTogVmFsaWRFcnJvcltdIHtcblxuICAgIGxldCBzdGVwQ29sTWFwID0gbmV3IE1hcDxudW1iZXIsIEFycmF5PHN0cmluZz4+KCk7XG5cbiAgICBsZXQgc3RlcDFDb2xzID0gW1wiRllGQ1wiLCBcIkFubnVhbENvbnZlbnRpb25cIiwgXCJNRFJUXCIsIFwiUHJvbW90aW9uUGxhblwiXTtcbiAgICBsZXQgc3RlcDJDb2xzID0gW1wiUGVyQ2FzZVwiXTtcbiAgICBsZXQgc3RlcDVDb2xzID0gW1wiVGVhbUZZRkNcIiwgXCJUZWFtQU5QXCIsIFwiTWFucG93ZXJcIiwgXCJSZWNydWl0bWVudFwiXTtcbiAgICBzdGVwQ29sTWFwLnNldCgxLCBzdGVwMUNvbHMpO1xuICAgIHN0ZXBDb2xNYXAuc2V0KDIsIHN0ZXAyQ29scyk7XG4gICAgc3RlcENvbE1hcC5zZXQoNSwgc3RlcDVDb2xzKTtcblxuICAgIGlmIChzdGVwID09IDQpIHtcbiAgICAgIC8v6amX6K2J56ysNOatpVxuICAgICAgbGV0IG1vbnRoTGlzdCA9IHZhbGlkRGF0YXMuU3RlcDQuTW9udGhMaXN0O1xuICAgICAgbGV0IHBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoID0gdmFsaWREYXRhcy5ZZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoO1xuICAgICAgbW9udGhMaXN0LmZpbHRlcihvYmogPT4gb2JqLk1vbnRoID4gcGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGgpLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5vbkNoYW5nZVZhbGlkKDQsIFwiUGxhbl9cIiArIHguTW9udGgsIHguUGxhbiwgdmFsaWREYXRhcywgZmFsc2UsIGVycm9yUmVzdWx0LCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl92YWxpZFNob3J0ZmFsbCh2YWxpZERhdGFzLlN0ZXA0LCBlcnJvclJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8v5YW25LuW5q2l6amf6amX6K2JXG4gICAgICBpZiAoaXNBZGp1c3QpIHtcbiAgICAgICAgc3RlcDVDb2xzLnB1c2goXCJUZWFtRllGQ05vd1RvWWVhckVuZFwiKTtcbiAgICAgICAgc3RlcDFDb2xzLnB1c2goXCJGWUZDTm93VG9ZZWFyRW5kXCIpO1xuICAgICAgfVxuICAgICAgbGV0IHN0ZXBDb2xzID0gc3RlcENvbE1hcC5nZXQoc3RlcCk7XG4gICAgICBzdGVwQ29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5vbkNoYW5nZVZhbGlkKHN0ZXAsIGNvbCwgdmFsaWREYXRhc1tcIlN0ZXBcIiArIHN0ZXBdW2NvbF0sIHZhbGlkRGF0YXMsIGlzQWRqdXN0LCBlcnJvclJlc3VsdCwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JSZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRFcnJvcihzdGVwOiBudW1iZXIsIGNvbElkOiBzdHJpbmcsIGVycm9yVHlwZTogc3RyaW5nLCB2YWxpZHJlc3VsdDogYm9vbGVhbiwgZXJyb3JSZXN1bHQ6IEFycmF5PFZhbGlkRXJyb3I+LCBlcnJvck1zZzogc3RyaW5nID0gJycpOiBBcnJheTxWYWxpZEVycm9yPiB7XG4gICAgY29uc29sZS5sb2coJ3N0ZXAnLCBzdGVwLCAnY29sSWQnLCBjb2xJZCwgJ2Vycm9yVHlwZScsIGVycm9yVHlwZSwgJ3ZhbGlkcmVzdWx0JywgdmFsaWRyZXN1bHQsICdlcnJvclJlc3VsdCcsIGVycm9yUmVzdWx0KTtcbiAgICBlcnJvck1zZyA9IFN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyb3JNc2cpID8gY29sSWQgKyBlcnJvclR5cGUgOiBlcnJvck1zZztcbiAgICBlcnJvclJlc3VsdCA9IGVycm9yUmVzdWx0LmZpbHRlcih4ID0+ICh4LkNvbElkICE9IGNvbElkIHx8ICh4LkNvbElkID09IGNvbElkICYmIHguTXNnLmluZGV4T2YoZXJyb3JNc2cpKSkpOyAvL+etieaWvGNvbElkICYmIOetieaWvGVycm9ydHlwZSDnmoTlhYjmi7/mjolcbiAgICBpZiAodmFsaWRyZXN1bHQpIHtcbiAgICAgIGVycm9yUmVzdWx0LnB1c2gobmV3IFZhbGlkRXJyb3Ioc3RlcCwgY29sSWQsIGVycm9yTXNnKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdlcnJvclJlc3VsdCcsIGVycm9yUmVzdWx0KTtcbiAgICByZXR1cm4gZXJyb3JSZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZFNob3J0ZmFsbChzZXRwNE9iajogR29hbFNldHRpbmdTdGVwNCwgZXJyb3JSZXN1bHQ6IEFycmF5PFZhbGlkRXJyb3I+KTogQXJyYXk8VmFsaWRFcnJvcj4ge1xuXG4gICAgLy/pqZforYlTaG9ydGZhbGxcbiAgICBpZiAodGhpcy5nb2FsU2V0dGluZ1N0ZXApIHtcbiAgICAgIGxldCB2YWxpZHJlc3VsdCA9IHRoaXMuZ29hbFNldHRpbmdTdGVwLnZhbGlkYXRlR29hbF9Gb3JlY2FzdChOdW1iZXIoc2V0cDRPYmouU2hvcnRmYWxsKSk7XG4gICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKDQsIFwiU2hvcnRmYWxsXCIsIFwidmFsdWVcIiwgdmFsaWRyZXN1bHQsIGVycm9yUmVzdWx0LCBcIlNob3J0ZmFsbF9ub25aZXJvXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCB2YWxpZHJlc3VsdCA9IE51bWJlcihzZXRwNE9iai5TaG9ydGZhbGwpICE9IDA7XG4gICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKDQsIFwiU2hvcnRmYWxsXCIsIFwidmFsdWVcIiwgdmFsaWRyZXN1bHQsIGVycm9yUmVzdWx0LCBcIlNob3J0ZmFsbF9ub25aZXJvXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvclJlc3VsdDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBWYWlsZFxuICB9XG4iXX0=