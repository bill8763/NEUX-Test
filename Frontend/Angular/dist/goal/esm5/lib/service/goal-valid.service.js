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
var GoalValidService = /** @class */ (function () {
    function GoalValidService(errorHandler, goalSettingService, goalSettingStep, goalValid) {
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
    GoalValidService.prototype.onChangeValid = 
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
    function (step, colId, val, validDatas, isAdjust, errorResult, isPageValid) {
        if (isPageValid === void 0) { isPageValid = false; }
        console.log("onChangeValid colId", colId, "val", val, 'validDatas', validDatas, errorResult, 'isPageValid', isPageValid);
        try {
            /** @type {?} */
            var isDecimalResult = void 0;
            /** @type {?} */
            var PlanEmpty = colId.indexOf("Plan_") != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            var RequiredEmpty = this.requiredValid.indexOf(colId) != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            var numberPositive = this.numberValid.indexOf(colId) != -1 && !NumberUtils.isPositive(val);
            /** @type {?} */
            var vaildEmptyResult = RequiredEmpty || numberPositive || PlanEmpty;
            //負數的error msg 也是_required
            /** @type {?} */
            var requiredErrorMsg = (colId.indexOf("Plan_") != -1) ? "Plan_required" : colId + "_required";
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
                    var FYFCSmallValid = Number(validDatas.Step1.Actual) > Number(validDatas.Step1.FYFC);
                    /** @type {?} */
                    var FYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step1.FYFCNowToYearEnd);
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
                            var TeamFYFCSmallValid = Number(validDatas.Step5.TeamFYFCActual) > Number(validDatas.Step5.TeamFYFC);
                            /** @type {?} */
                            var TeamFYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step5.TeamFYFCNowToYearEnd);
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
    };
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @return {?}
     */
    GoalValidService.prototype.pageValid = /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @return {?}
     */
    function (step, validDatas, isAdjust) {
        var _this = this;
        console.log('pageValid step', step, 'validDatas', JSON.stringify(validDatas), isAdjust);
        /** @type {?} */
        var errorResult = [];
        /** @type {?} */
        var steplist = [5, 4, 2, 1];
        try {
            steplist.forEach((/**
             * @param {?} stepNum
             * @return {?}
             */
            function (stepNum) {
                //判斷傳進來的步驟大於或等於驗證步驟才驗證
                if (step >= stepNum && validDatas["Step" + stepNum] != null && validDatas["Step" + stepNum] != undefined) {
                    errorResult = _this.unitPageValid(stepNum, validDatas, isAdjust, errorResult);
                }
            }));
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00407', 'pageValid fail!' + error.message));
        }
        return errorResult;
    };
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @return {?}
     */
    GoalValidService.prototype.unitPageValid = /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @return {?}
     */
    function (step, validDatas, isAdjust, errorResult) {
        var _this = this;
        /** @type {?} */
        var stepColMap = new Map();
        /** @type {?} */
        var step1Cols = ["FYFC", "AnnualConvention", "MDRT", "PromotionPlan"];
        /** @type {?} */
        var step2Cols = ["PerCase"];
        /** @type {?} */
        var step5Cols = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment"];
        stepColMap.set(1, step1Cols);
        stepColMap.set(2, step2Cols);
        stepColMap.set(5, step5Cols);
        if (step == 4) {
            //驗證第4步
            /** @type {?} */
            var monthList = validDatas.Step4.MonthList;
            /** @type {?} */
            var performanceSettlementMonth_1 = validDatas.YearConfig.PerformanceSettlementMonth;
            monthList.filter((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return obj.Month > performanceSettlementMonth_1; })).forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                errorResult = _this.onChangeValid(4, "Plan_" + x.Month, x.Plan, validDatas, false, errorResult, true);
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
            var stepCols = stepColMap.get(step);
            stepCols.forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                errorResult = _this.onChangeValid(step, col, validDatas["Step" + step][col], validDatas, isAdjust, errorResult, true);
            }));
        }
        return errorResult;
    };
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
    GoalValidService.prototype._setError = /**
     * @private
     * @param {?} step
     * @param {?} colId
     * @param {?} errorType
     * @param {?} validresult
     * @param {?} errorResult
     * @param {?=} errorMsg
     * @return {?}
     */
    function (step, colId, errorType, validresult, errorResult, errorMsg) {
        if (errorMsg === void 0) { errorMsg = ''; }
        console.log('step', step, 'colId', colId, 'errorType', errorType, 'validresult', validresult, 'errorResult', errorResult);
        errorMsg = StringUtils.isEmpty(errorMsg) ? colId + errorType : errorMsg;
        errorResult = errorResult.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (x.ColId != colId || (x.ColId == colId && x.Msg.indexOf(errorMsg))); })); //等於colId && 等於errortype 的先拿掉
        if (validresult) {
            errorResult.push(new ValidError(step, colId, errorMsg));
        }
        console.log('errorResult', errorResult);
        return errorResult;
    };
    /**
     * @private
     * @param {?} setp4Obj
     * @param {?} errorResult
     * @return {?}
     */
    GoalValidService.prototype._validShortfall = /**
     * @private
     * @param {?} setp4Obj
     * @param {?} errorResult
     * @return {?}
     */
    function (setp4Obj, errorResult) {
        //驗證Shortfall
        if (this.goalSettingStep) {
            /** @type {?} */
            var validresult = this.goalSettingStep.validateGoal_Forecast(Number(setp4Obj.Shortfall));
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        else {
            /** @type {?} */
            var validresult = Number(setp4Obj.Shortfall) != 0;
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        return errorResult;
    };
    GoalValidService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    GoalValidService.ctorParameters = function () { return [
        { type: ErrorHandler },
        { type: GoalSettingService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalValidToken,] }] }
    ]; };
    /** @nocollapse */ GoalValidService.ngInjectableDef = i0.defineInjectable({ factory: function GoalValidService_Factory() { return new GoalValidService(i0.inject(i0.ErrorHandler), i0.inject(i1.GoalSettingService), i0.inject(i2.goalSettingStepToken, 8), i0.inject(i2.goalValidToken, 8)); }, token: GoalValidService, providedIn: "root" });
    return GoalValidService;
}());
export { GoalValidService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC12YWxpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2dvYWwtdmFsaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RSxPQUFPLEVBQXVCLFVBQVUsRUFBb0IsTUFBTSxTQUFTLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR3pFO0lBU0ksMEJBQ1ksWUFBMEIsRUFDMUIsa0JBQXNDLEVBR3RDLGVBQWdDLEVBR2hDLFNBQTZCO1FBUDdCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFHdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBR2hDLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBWGpDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFZdEMsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFEO2FBQUk7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzFILElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzNKO0lBQ0wsQ0FBQztJQUVGLHdCQUF3Qjs7Ozs7Ozs7Ozs7O0lBQ2pCLHdDQUFhOzs7Ozs7Ozs7Ozs7SUFBcEIsVUFBcUIsSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsVUFBK0IsRUFBRSxRQUFpQixFQUFFLFdBQThCLEVBQUUsV0FBNEI7UUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7UUFFOUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekgsSUFBSTs7Z0JBQ0UsZUFBZSxTQUFTOztnQkFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7O2dCQUNwRSxhQUFhLEdBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7O2dCQUM1RixjQUFjLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQy9GLGdCQUFnQixHQUFZLGFBQWEsSUFBSSxjQUFjLElBQUksU0FBUzs7O2dCQUV4RSxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsV0FBVztZQUM3RixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFFdEgsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCO2dCQUNwSCxlQUFlLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ25GO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xILElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVc7Z0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNoQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwSixVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUgsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDbkU7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVk7b0JBQzNCLFFBQVEsS0FBSyxFQUFFO3dCQUNiLEtBQUssVUFBVTs0QkFDYixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDdEgsTUFBTTt3QkFDUixLQUFLLHNCQUFzQjs0QkFDekIsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDbEksTUFBTTt3QkFDUixLQUFLLE1BQU07NEJBQ1QsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDdkgsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN2SCxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2hILFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUNwRSxNQUFNO3dCQUNSLEtBQUssU0FBUzs0QkFDWixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNwSCxNQUFNO3FCQUNUO2lCQUNGO3FCQUFNOzt3QkFDRCxjQUFjLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzt3QkFDaEYsMEJBQTBCLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO29CQUMxRixRQUFRLEtBQUssRUFBRTt3QkFDYixLQUFLLE1BQU07NEJBQ1QsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3BILFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDOUUsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLDBCQUEwQixFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUMzRyxJQUFJLENBQUMsY0FBYyxJQUFJLDBCQUEwQixFQUFFO2dDQUNqRCxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDckosVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDcEosVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUNoSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzZCQUNuRTs0QkFDRCxNQUFNO3dCQUNSLEtBQUssa0JBQWtCOzRCQUNyQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ25HLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDbEcsTUFBTTt3QkFDUixLQUFLLFNBQVM7NEJBQ1osSUFBSSxDQUFDLGNBQWMsSUFBSSwwQkFBMEIsRUFBRTtnQ0FDakQsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUNqSTs0QkFDRCxNQUFNO3dCQUNSLEtBQUssVUFBVTs0QkFDYixVQUFVLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Z0NBQzVILGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7Z0NBQ2hHLDhCQUE4QixHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs0QkFDbEcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDNUksVUFBVSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7NEJBQ3BLLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUN2RixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLENBQUMsOEJBQThCLEVBQUUsV0FBVyxDQUFDLENBQUM7NEJBQ25ILE1BQU07d0JBQ1IsS0FBSyxzQkFBc0I7NEJBQ3pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDL0csV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUMxRyxNQUFNO3FCQUNUO2lCQUNGO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRU0sb0NBQVM7Ozs7OztJQUFoQixVQUFpQixJQUFZLEVBQUUsVUFBK0IsRUFBRSxRQUFpQjtRQUFqRixpQkFrQkM7UUFoQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7O1lBRXBGLFdBQVcsR0FBRyxFQUFFOztZQUNoQixRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSTtZQUNGLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUN0QixzQkFBc0I7Z0JBQ3RCLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRTtvQkFDeEcsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQzlFO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FFSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFFTSx3Q0FBYTs7Ozs7OztJQUFwQixVQUFxQixJQUFZLEVBQUUsVUFBK0IsRUFBRSxRQUFpQixFQUFFLFdBQXlCO1FBQWhILGlCQWdDQzs7WUE5QkssVUFBVSxHQUFHLElBQUksR0FBRyxFQUF5Qjs7WUFFN0MsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUM7O1lBQ2pFLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7WUFDdkIsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ2xFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdCLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTs7O2dCQUVULFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVM7O2dCQUN0Qyw0QkFBMEIsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLDBCQUEwQjtZQUNqRixTQUFTLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEtBQUssR0FBRyw0QkFBMEIsRUFBdEMsQ0FBc0MsRUFBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQ3ZFLFdBQVcsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZHLENBQUMsRUFBQyxDQUFDO1lBQ0gsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsUUFBUTtZQUNSLElBQUksUUFBUSxFQUFFO2dCQUNaLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3BDOztnQkFDRyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDbkMsUUFBUSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ2xCLFdBQVcsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2SCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7Ozs7SUFFTyxvQ0FBUzs7Ozs7Ozs7OztJQUFqQixVQUFrQixJQUFZLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsV0FBb0IsRUFBRSxXQUE4QixFQUFFLFFBQXFCO1FBQXJCLHlCQUFBLEVBQUEsYUFBcUI7UUFDM0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxSCxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3hFLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBbkUsQ0FBbUUsRUFBQyxDQUFDLENBQUMsNkJBQTZCO1FBQ3pJLElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRU8sMENBQWU7Ozs7OztJQUF2QixVQUF3QixRQUEwQixFQUFFLFdBQThCO1FBRWhGLGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hGLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN0RzthQUNJOztnQkFDQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2pELFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN0RztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXhNRixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBVmtCLFlBQVk7Z0JBR3hCLGtCQUFrQjtnREFpQmxCLFFBQVEsWUFDUixNQUFNLFNBQUMsb0JBQW9CO2dEQUUzQixRQUFRLFlBQ1IsTUFBTSxTQUFDLGNBQWM7OzsyQkF4QjlCO0NBbU5HLEFBM01ILElBMk1HO1NBdk1ZLGdCQUFnQjs7Ozs7O0lBRTNCLHVDQUF3Qzs7Ozs7SUFDeEMseUNBQTBDOzs7OztJQUd0Qyx3Q0FBa0M7Ozs7O0lBQ2xDLDhDQUE4Qzs7Ozs7SUFDOUMsMkNBRXdDOzs7OztJQUN4QyxxQ0FFcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMsIE51bWJlclV0aWxzLCBBUFBFcnJvciB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXBEYXRhLCBWYWxpZEVycm9yLCBHb2FsU2V0dGluZ1N0ZXA0IH0gZnJvbSBcIi4vbW9kZWxcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nU2VydmljZSB9IGZyb20gXCIuL2dvYWwtc2V0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBnb2FsU2V0dGluZ1N0ZXAsIEdvYWxWYWxpZEV4dGVuc2lvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGdvYWxTZXR0aW5nU3RlcFRva2VuLCBnb2FsVmFsaWRUb2tlbiB9IGZyb20gXCIuLi9pbmplY3Rpb25Ub2tlblwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxuICB9KVxuICBcbiAgZXhwb3J0IGNsYXNzIEdvYWxWYWxpZFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBudW1iZXJWYWxpZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgcmVxdWlyZWRWYWxpZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgICAgIHByaXZhdGUgZ29hbFNldHRpbmdTZXJ2aWNlOiBHb2FsU2V0dGluZ1NlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpXG4gICAgICAgIEBJbmplY3QoZ29hbFNldHRpbmdTdGVwVG9rZW4pXG4gICAgICAgIHByaXZhdGUgZ29hbFNldHRpbmdTdGVwOiBnb2FsU2V0dGluZ1N0ZXAsXG4gICAgICAgIEBPcHRpb25hbCgpXG4gICAgICAgIEBJbmplY3QoZ29hbFZhbGlkVG9rZW4pXG4gICAgICAgIHByaXZhdGUgZ29hbFZhbGlkOiBHb2FsVmFsaWRFeHRlbnNpb24sXG4gICAgKXtcbiAgICAgICAgaWYodGhpcy5nb2FsVmFsaWQpe1xuICAgICAgICAgICAgdGhpcy5udW1iZXJWYWxpZCA9IHRoaXMuZ29hbFZhbGlkLmdldE51bWJlckFycmF5KCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkVmFsaWQgPSB0aGlzLmdvYWxWYWxpZC5nZXRSZXF1aXJlZEFycmF5KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5udW1iZXJWYWxpZCA9IFtcIkZZRkNcIiwgXCJGWUZDTm93VG9ZZWFyRW5kXCIsIFwiUGVyQ2FzZVwiLCBcIlRlYW1GWUZDXCIsIFwiVGVhbUZZRkNOb3dUb1llYXJFbmRcIiwgXCJSZWNydWl0bWVudFwiLCBcIk1hbnBvd2VyXCJdO1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZFZhbGlkID0gW1wiRllGQ1wiLCBcIkZZRkNOb3dUb1llYXJFbmRcIiwgXCJBbm51YWxDb252ZW50aW9uXCIsIFwiTURSVFwiLCBcIlBlckNhc2VcIiwgXCJUZWFtRllGQ1wiLCBcIlRlYW1GWUZDTm93VG9ZZWFyRW5kXCIsIFwiTWFucG93ZXJcIiwgXCJSZWNydWl0bWVudFwiXTsgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgIC8vI3JlZ2lvbiBWYWlsZCBmdW5jdGlvblxuICAgcHVibGljIG9uQ2hhbmdlVmFsaWQoc3RlcDogbnVtYmVyLCBjb2xJZDogc3RyaW5nLCB2YWw6IHN0cmluZywgdmFsaWREYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSwgaXNBZGp1c3Q6IGJvb2xlYW4sIGVycm9yUmVzdWx0OiBBcnJheTxWYWxpZEVycm9yPiwgaXNQYWdlVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PFZhbGlkRXJyb3I+IHtcblxuICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VWYWxpZCBjb2xJZFwiLCBjb2xJZCwgXCJ2YWxcIiwgdmFsLCAndmFsaWREYXRhcycsIHZhbGlkRGF0YXMsIGVycm9yUmVzdWx0LCAnaXNQYWdlVmFsaWQnLCBpc1BhZ2VWYWxpZCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpc0RlY2ltYWxSZXN1bHQ6IGJvb2xlYW47XG4gICAgICBsZXQgUGxhbkVtcHR5ID0gY29sSWQuaW5kZXhPZihcIlBsYW5fXCIpICE9IC0xICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodmFsKTtcbiAgICAgIGxldCBSZXF1aXJlZEVtcHR5OiBib29sZWFuID0gdGhpcy5yZXF1aXJlZFZhbGlkLmluZGV4T2YoY29sSWQpICE9IC0xICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodmFsKTtcbiAgICAgIGxldCBudW1iZXJQb3NpdGl2ZTogYm9vbGVhbiA9IHRoaXMubnVtYmVyVmFsaWQuaW5kZXhPZihjb2xJZCkgIT0gLTEgJiYgIU51bWJlclV0aWxzLmlzUG9zaXRpdmUodmFsKTtcbiAgICAgIGxldCB2YWlsZEVtcHR5UmVzdWx0OiBib29sZWFuID0gUmVxdWlyZWRFbXB0eSB8fCBudW1iZXJQb3NpdGl2ZSB8fCBQbGFuRW1wdHk7IC8v6LKg5pW455qEZXJyb3IgbXNnIOS5n+aYr19yZXF1aXJlZFxuXG4gICAgICBsZXQgcmVxdWlyZWRFcnJvck1zZyA9IChjb2xJZC5pbmRleE9mKFwiUGxhbl9cIikgIT0gLTEpID8gXCJQbGFuX3JlcXVpcmVkXCIgOiBjb2xJZCArIFwiX3JlcXVpcmVkXCI7XG4gICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKHN0ZXAsIGNvbElkLCBcIl9yZXF1aXJlZFwiLCB2YWlsZEVtcHR5UmVzdWx0LCBlcnJvclJlc3VsdCwgcmVxdWlyZWRFcnJvck1zZyk7IC8v5Yik5pa35piv5ZCm5piv6LKg5pW45oiW5piv56m65YC8XG5cbiAgICAgIGlmICghdmFpbGRFbXB0eVJlc3VsdCAmJiAodGhpcy5udW1iZXJWYWxpZC5pbmRleE9mKGNvbElkKSAhPSAtMSB8fCBjb2xJZC5pbmRleE9mKFwiUGxhbl9cIikgIT0gLTEpKSB7IC8v5Yik5pa35LiN5piv56m65YC85oiW6LKg5pW45omN57m857qM5b6A5LiL6amX6K2JXG4gICAgICAgIGlzRGVjaW1hbFJlc3VsdCA9IE51bWJlclV0aWxzLmlzRGVjaW1hbCh2YWwpO1xuICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKHN0ZXAsIGNvbElkLCBcIl9wb2ludFwiLCBpc0RlY2ltYWxSZXN1bHQsIGVycm9yUmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJpc0RlY2ltYWxSZXN1bHRcIiwgaXNEZWNpbWFsUmVzdWx0LCBcInZhaWxkRW1wdHlSZXN1bHRcIiwgdmFpbGRFbXB0eVJlc3VsdCwgXCJpc1BhZ2VWYWxpZFwiLCBpc1BhZ2VWYWxpZCk7XG4gICAgICBpZiAoIWlzRGVjaW1hbFJlc3VsdCAmJiAhdmFpbGRFbXB0eVJlc3VsdCAmJiAhaXNQYWdlVmFsaWQpIHsgLy/pqZforYnpg73mspLmnInpjK/miY3mlLnlgLxcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNoYW5nZVZhbGlkIG5vIGVycm9yXCIpO1xuICAgICAgICBpZiAoY29sSWQuaW5kZXhPZihcIlBsYW5fXCIpICE9IC0xKSB7XG4gICAgICAgICAgdmFsaWREYXRhcy5TdGVwNC5Gb3JlY2FzdCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUZvcmVjYXN0KHZhbGlkRGF0YXMuWWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCwgdmFsaWREYXRhcy5TdGVwNC5Nb250aExpc3QpO1xuICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDQuU2hvcnRmYWxsID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlU2hvcnRmYWxsKHZhbGlkRGF0YXMuU3RlcDEuRllGQywgdmFsaWREYXRhcy5TdGVwNC5Gb3JlY2FzdCk7XG4gICAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl92YWxpZFNob3J0ZmFsbCh2YWxpZERhdGFzLlN0ZXA0LCBlcnJvclJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQWRqdXN0KSB7IC8vIOesrOS4gOasoeioreWummdvYWxcbiAgICAgICAgICBzd2l0Y2ggKGNvbElkKSB7XG4gICAgICAgICAgICBjYXNlIFwiVGVhbUZZRkNcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtQU5QID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQU5QRnJvbUZZRkModmFsLCB2YWxpZERhdGFzLlllYXJDb25maWcuRnlmY0NvdmVydEFucFJhdGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUZWFtRllGQ05vd1RvWWVhckVuZFwiOlxuICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXA1LlRlYW1BTlBOb3dUb1llYXJFbmQgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVBTlBGcm9tRllGQyh2YWwsIHZhbGlkRGF0YXMuWWVhckNvbmZpZy5GeWZjQ292ZXJ0QW5wUmF0ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZZRkNcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwMyA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFjdGl2aXR5RGF0YSh2YWwsIHZhbGlkRGF0YXMuU3RlcDIuUGVyQ2FzZSwgdmFsaWREYXRhcy5ZZWFyQ29uZmlnKTtcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZU1vbnRoQWN0dWFsUGxhbih2YWxpZERhdGFzLlllYXJDb25maWcsIHZhbCwgdmFsaWREYXRhcy5BY3R1YWxMaXN0KTtcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNC5TaG9ydGZhbGwgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVTaG9ydGZhbGwoTnVtYmVyKHZhbCksIHZhbGlkRGF0YXMuU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMudW5pdFBhZ2VWYWxpZCg0LCB2YWxpZERhdGFzLCBmYWxzZSwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQZXJDYXNlXCI6XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDMgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVBY3Rpdml0eURhdGEodmFsaWREYXRhcy5TdGVwMS5GWUZDLCB2YWwsIHZhbGlkRGF0YXMuWWVhckNvbmZpZyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgRllGQ1NtYWxsVmFsaWQgPSBOdW1iZXIodmFsaWREYXRhcy5TdGVwMS5BY3R1YWwpID4gTnVtYmVyKHZhbGlkRGF0YXMuU3RlcDEuRllGQyk7XG4gICAgICAgICAgbGV0IEZZRkNOb3dUb1llYXJFbmRJc1Bvc2l0aXZlID0gTnVtYmVyVXRpbHMuaXNQb3NpdGl2ZSh2YWxpZERhdGFzLlN0ZXAxLkZZRkNOb3dUb1llYXJFbmQpO1xuICAgICAgICAgIHN3aXRjaCAoY29sSWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJGWUZDXCI6XG4gICAgICAgICAgICAgIHZhbGlkRGF0YXMuU3RlcDEuRllGQ05vd1RvWWVhckVuZCA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZU5vd1RvWWVhckVuZEdvYWwodmFsLCB2YWxpZERhdGFzLlN0ZXAxLkFjdHVhbCk7XG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fc2V0RXJyb3IoMSwgY29sSWQsIFwiX3NtYWxsXCIsIEZZRkNTbWFsbFZhbGlkLCBlcnJvclJlc3VsdCk7XG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fc2V0RXJyb3IoMSwgXCJGWUZDTm93VG9ZZWFyRW5kXCIsIFwiX3JlcXVpcmVkXCIsICFGWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBpZiAoIUZZRkNTbWFsbFZhbGlkICYmIEZZRkNOb3dUb1llYXJFbmRJc1Bvc2l0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwMyA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFjdGl2aXR5RGF0YSh2YWxpZERhdGFzLlN0ZXAxLkZZRkNOb3dUb1llYXJFbmQsIHZhbGlkRGF0YXMuU3RlcDIuUGVyQ2FzZSwgdmFsaWREYXRhcy5ZZWFyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXA0LkZvcmVjYXN0ID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlRm9yZWNhc3QodmFsaWREYXRhcy5ZZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoLCB2YWxpZERhdGFzLlN0ZXA0Lk1vbnRoTGlzdCk7XG4gICAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNC5TaG9ydGZhbGwgPSB0aGlzLmdvYWxTZXR0aW5nU2VydmljZS5jYWxjdWxhdGVTaG9ydGZhbGwoTnVtYmVyKHZhbCksIHZhbGlkRGF0YXMuU3RlcDQuRm9yZWNhc3QpO1xuICAgICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fdmFsaWRTaG9ydGZhbGwodmFsaWREYXRhcy5TdGVwNCwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZZRkNOb3dUb1llYXJFbmRcIjpcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwMS5GWUZDID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQWxsWWVhckdvYWwodmFsLCB2YWxpZERhdGFzLlN0ZXAxLkFjdHVhbCk7XG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5vbkNoYW5nZVZhbGlkKDEsIFwiRllGQ1wiLCB2YWxpZERhdGFzLlN0ZXAxLkZZRkMsIHZhbGlkRGF0YXMsIHRydWUsIGVycm9yUmVzdWx0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUGVyQ2FzZVwiOlxuICAgICAgICAgICAgICBpZiAoIUZZRkNTbWFsbFZhbGlkICYmIEZZRkNOb3dUb1llYXJFbmRJc1Bvc2l0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwMyA9IHRoaXMuZ29hbFNldHRpbmdTZXJ2aWNlLmNhbGN1bGF0ZUFjdGl2aXR5RGF0YSh2YWxpZERhdGFzLlN0ZXAxLkZZRkNOb3dUb1llYXJFbmQsIHZhbCwgdmFsaWREYXRhcy5ZZWFyQ29uZmlnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUZWFtRllGQ1wiOlxuICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDTm93VG9ZZWFyRW5kID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlTm93VG9ZZWFyRW5kR29hbCh2YWwsIHZhbGlkRGF0YXMuU3RlcDUuVGVhbUZZRkNBY3R1YWwpO1xuICAgICAgICAgICAgICBsZXQgVGVhbUZZRkNTbWFsbFZhbGlkID0gTnVtYmVyKHZhbGlkRGF0YXMuU3RlcDUuVGVhbUZZRkNBY3R1YWwpID4gTnVtYmVyKHZhbGlkRGF0YXMuU3RlcDUuVGVhbUZZRkMpO1xuICAgICAgICAgICAgICBsZXQgVGVhbUZZRkNOb3dUb1llYXJFbmRJc1Bvc2l0aXZlID0gTnVtYmVyVXRpbHMuaXNQb3NpdGl2ZSh2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDTm93VG9ZZWFyRW5kKTtcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtQU5QID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQU5QRnJvbUZZRkModmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQywgdmFsaWREYXRhcy5ZZWFyQ29uZmlnLkZ5ZmNDb3ZlcnRBbnBSYXRlKTtcbiAgICAgICAgICAgICAgdmFsaWREYXRhcy5TdGVwNS5UZWFtQU5QTm93VG9ZZWFyRW5kID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQU5QRnJvbUZZRkModmFsaWREYXRhcy5TdGVwNS5UZWFtRllGQ05vd1RvWWVhckVuZCwgdmFsaWREYXRhcy5ZZWFyQ29uZmlnLkZ5ZmNDb3ZlcnRBbnBSYXRlKTtcbiAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLl9zZXRFcnJvcig1LCBcIlRlYW1GWUZDXCIsIFwiX3NtYWxsXCIsIFRlYW1GWUZDU21hbGxWYWxpZCwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3NldEVycm9yKDUsIFwiVGVhbUZZRkNOb3dUb1llYXJFbmRcIiwgXCJfcmVxdWlyZWRcIiwgIVRlYW1GWUZDTm93VG9ZZWFyRW5kSXNQb3NpdGl2ZSwgZXJyb3JSZXN1bHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUZWFtRllGQ05vd1RvWWVhckVuZFwiOlxuICAgICAgICAgICAgICB2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDID0gdGhpcy5nb2FsU2V0dGluZ1NlcnZpY2UuY2FsY3VsYXRlQWxsWWVhckdvYWwodmFsLCB2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDQWN0dWFsKTtcbiAgICAgICAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLm9uQ2hhbmdlVmFsaWQoMSwgXCJUZWFtRllGQ1wiLCB2YWxpZERhdGFzLlN0ZXA1LlRlYW1GWUZDLCB2YWxpZERhdGFzLCB0cnVlLCBlcnJvclJlc3VsdCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDQwNicsICdvbkNoYW5nZVZhbGlkIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnb25DaGFuZ2VWYWxpZCBlcnJvclJlc3VsdCcsIGVycm9yUmVzdWx0KTtcbiAgICByZXR1cm4gZXJyb3JSZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgcGFnZVZhbGlkKHN0ZXA6IG51bWJlciwgdmFsaWREYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSwgaXNBZGp1c3Q6IGJvb2xlYW4pOiBBcnJheTxWYWxpZEVycm9yPiB7XG5cbiAgICBjb25zb2xlLmxvZygncGFnZVZhbGlkIHN0ZXAnLCBzdGVwLCAndmFsaWREYXRhcycsIEpTT04uc3RyaW5naWZ5KHZhbGlkRGF0YXMpLCBpc0FkanVzdCk7XG5cbiAgICBsZXQgZXJyb3JSZXN1bHQgPSBbXTtcbiAgICBsZXQgc3RlcGxpc3QgPSBbNSwgNCwgMiwgMV07XG4gICAgdHJ5IHtcbiAgICAgIHN0ZXBsaXN0LmZvckVhY2goc3RlcE51bSA9PiB7XG4gICAgICAgIC8v5Yik5pa35YKz6YCy5L6G55qE5q2l6amf5aSn5pa85oiW562J5pa86amX6K2J5q2l6amf5omN6amX6K2JXG4gICAgICAgIGlmIChzdGVwID49IHN0ZXBOdW0gJiYgdmFsaWREYXRhc1tcIlN0ZXBcIiArIHN0ZXBOdW1dICE9IG51bGwgJiYgdmFsaWREYXRhc1tcIlN0ZXBcIiArIHN0ZXBOdW1dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy51bml0UGFnZVZhbGlkKHN0ZXBOdW0sIHZhbGlkRGF0YXMsIGlzQWRqdXN0LCBlcnJvclJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNDA3JywgJ3BhZ2VWYWxpZCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvclJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyB1bml0UGFnZVZhbGlkKHN0ZXA6IG51bWJlciwgdmFsaWREYXRhczogR29hbFNldHRpbmdTdGVwRGF0YSwgaXNBZGp1c3Q6IGJvb2xlYW4sIGVycm9yUmVzdWx0OiBWYWxpZEVycm9yW10pOiBWYWxpZEVycm9yW10ge1xuXG4gICAgbGV0IHN0ZXBDb2xNYXAgPSBuZXcgTWFwPG51bWJlciwgQXJyYXk8c3RyaW5nPj4oKTtcblxuICAgIGxldCBzdGVwMUNvbHMgPSBbXCJGWUZDXCIsIFwiQW5udWFsQ29udmVudGlvblwiLCBcIk1EUlRcIiwgXCJQcm9tb3Rpb25QbGFuXCJdO1xuICAgIGxldCBzdGVwMkNvbHMgPSBbXCJQZXJDYXNlXCJdO1xuICAgIGxldCBzdGVwNUNvbHMgPSBbXCJUZWFtRllGQ1wiLCBcIlRlYW1BTlBcIiwgXCJNYW5wb3dlclwiLCBcIlJlY3J1aXRtZW50XCJdO1xuICAgIHN0ZXBDb2xNYXAuc2V0KDEsIHN0ZXAxQ29scyk7XG4gICAgc3RlcENvbE1hcC5zZXQoMiwgc3RlcDJDb2xzKTtcbiAgICBzdGVwQ29sTWFwLnNldCg1LCBzdGVwNUNvbHMpO1xuXG4gICAgaWYgKHN0ZXAgPT0gNCkge1xuICAgICAgLy/pqZforYnnrKw05q2lXG4gICAgICBsZXQgbW9udGhMaXN0ID0gdmFsaWREYXRhcy5TdGVwNC5Nb250aExpc3Q7XG4gICAgICBsZXQgcGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGggPSB2YWxpZERhdGFzLlllYXJDb25maWcuUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg7XG4gICAgICBtb250aExpc3QuZmlsdGVyKG9iaiA9PiBvYmouTW9udGggPiBwZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCkuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLm9uQ2hhbmdlVmFsaWQoNCwgXCJQbGFuX1wiICsgeC5Nb250aCwgeC5QbGFuLCB2YWxpZERhdGFzLCBmYWxzZSwgZXJyb3JSZXN1bHQsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICBlcnJvclJlc3VsdCA9IHRoaXMuX3ZhbGlkU2hvcnRmYWxsKHZhbGlkRGF0YXMuU3RlcDQsIGVycm9yUmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/lhbbku5bmraXpqZ/pqZforYlcbiAgICAgIGlmIChpc0FkanVzdCkge1xuICAgICAgICBzdGVwNUNvbHMucHVzaChcIlRlYW1GWUZDTm93VG9ZZWFyRW5kXCIpO1xuICAgICAgICBzdGVwMUNvbHMucHVzaChcIkZZRkNOb3dUb1llYXJFbmRcIik7XG4gICAgICB9XG4gICAgICBsZXQgc3RlcENvbHMgPSBzdGVwQ29sTWFwLmdldChzdGVwKTtcbiAgICAgIHN0ZXBDb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgZXJyb3JSZXN1bHQgPSB0aGlzLm9uQ2hhbmdlVmFsaWQoc3RlcCwgY29sLCB2YWxpZERhdGFzW1wiU3RlcFwiICsgc3RlcF1bY29sXSwgdmFsaWREYXRhcywgaXNBZGp1c3QsIGVycm9yUmVzdWx0LCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvclJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEVycm9yKHN0ZXA6IG51bWJlciwgY29sSWQ6IHN0cmluZywgZXJyb3JUeXBlOiBzdHJpbmcsIHZhbGlkcmVzdWx0OiBib29sZWFuLCBlcnJvclJlc3VsdDogQXJyYXk8VmFsaWRFcnJvcj4sIGVycm9yTXNnOiBzdHJpbmcgPSAnJyk6IEFycmF5PFZhbGlkRXJyb3I+IHtcbiAgICBjb25zb2xlLmxvZygnc3RlcCcsIHN0ZXAsICdjb2xJZCcsIGNvbElkLCAnZXJyb3JUeXBlJywgZXJyb3JUeXBlLCAndmFsaWRyZXN1bHQnLCB2YWxpZHJlc3VsdCwgJ2Vycm9yUmVzdWx0JywgZXJyb3JSZXN1bHQpO1xuICAgIGVycm9yTXNnID0gU3RyaW5nVXRpbHMuaXNFbXB0eShlcnJvck1zZykgPyBjb2xJZCArIGVycm9yVHlwZSA6IGVycm9yTXNnO1xuICAgIGVycm9yUmVzdWx0ID0gZXJyb3JSZXN1bHQuZmlsdGVyKHggPT4gKHguQ29sSWQgIT0gY29sSWQgfHwgKHguQ29sSWQgPT0gY29sSWQgJiYgeC5Nc2cuaW5kZXhPZihlcnJvck1zZykpKSk7IC8v562J5pa8Y29sSWQgJiYg562J5pa8ZXJyb3J0eXBlIOeahOWFiOaLv+aOiVxuICAgIGlmICh2YWxpZHJlc3VsdCkge1xuICAgICAgZXJyb3JSZXN1bHQucHVzaChuZXcgVmFsaWRFcnJvcihzdGVwLCBjb2xJZCwgZXJyb3JNc2cpKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2Vycm9yUmVzdWx0JywgZXJyb3JSZXN1bHQpO1xuICAgIHJldHVybiBlcnJvclJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkU2hvcnRmYWxsKHNldHA0T2JqOiBHb2FsU2V0dGluZ1N0ZXA0LCBlcnJvclJlc3VsdDogQXJyYXk8VmFsaWRFcnJvcj4pOiBBcnJheTxWYWxpZEVycm9yPiB7XG5cbiAgICAvL+mpl+itiVNob3J0ZmFsbFxuICAgIGlmICh0aGlzLmdvYWxTZXR0aW5nU3RlcCkge1xuICAgICAgbGV0IHZhbGlkcmVzdWx0ID0gdGhpcy5nb2FsU2V0dGluZ1N0ZXAudmFsaWRhdGVHb2FsX0ZvcmVjYXN0KE51bWJlcihzZXRwNE9iai5TaG9ydGZhbGwpKTtcbiAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fc2V0RXJyb3IoNCwgXCJTaG9ydGZhbGxcIiwgXCJ2YWx1ZVwiLCB2YWxpZHJlc3VsdCwgZXJyb3JSZXN1bHQsIFwiU2hvcnRmYWxsX25vblplcm9cIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHZhbGlkcmVzdWx0ID0gTnVtYmVyKHNldHA0T2JqLlNob3J0ZmFsbCkgIT0gMDtcbiAgICAgIGVycm9yUmVzdWx0ID0gdGhpcy5fc2V0RXJyb3IoNCwgXCJTaG9ydGZhbGxcIiwgXCJ2YWx1ZVwiLCB2YWxpZHJlc3VsdCwgZXJyb3JSZXN1bHQsIFwiU2hvcnRmYWxsX25vblplcm9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yUmVzdWx0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uIFZhaWxkXG4gIH1cbiJdfQ==