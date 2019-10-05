import { Injectable } from "@angular/core";
import { goalSettingStep, ActivityValue, GoalSettingYearConfig, MonthlyPlanFYFCData, IsApproveInfo, GoalSettingStepData } from '@allianzSND/goal';
import { TIMEBASE } from "@allianzSND/core";

@Injectable({
  providedIn: 'root',
})
export class GoalSettingStep implements goalSettingStep {

  private DASH = "--";
  private _stepColMap = new Map<string, Array<string>>();
  private _step1Cols: Array<string> = [];
  private _step2Cols: Array<string> = [];
  private _step5Cols: Array<string> = [];
  private _needCheckStep: Array<string> = [];
  constructor() {
    this._step1Cols = ["FYFC", "AnnualConvention", "MDRT", "PromotionPlan", "FYFCNowToYearEnd"];
    this._step2Cols = ["PerCase"];
    this._step5Cols = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment", "TeamFYFCNowToYearEnd"];
    this._needCheckStep = ["Step1", "Step2", "Step5"];
    this._stepColMap.set("Step1", this._step1Cols);
    this._stepColMap.set("Step2", this._step2Cols);
    this._stepColMap.set("Step5", this._step5Cols);
  }

  isNeedApprove(adjustDatas: GoalSettingStepData, originDatas: GoalSettingStepData): IsApproveInfo {

    let isApproveInfo: IsApproveInfo;
    let isNeedApprove: boolean = false;

    let FYFC = adjustDatas.Step1.FYFC;
    let Forecast = adjustDatas.Step4.Forecast;
    let GoalAndPlanDifferenceLimit = adjustDatas.YearConfig.GoalAndPlanDifferenceLimit;
    isApproveInfo = this.isNeedApprove_plan(Number(FYFC), Number(Forecast), GoalAndPlanDifferenceLimit);

    this._needCheckStep.forEach(step => {
      isNeedApprove = isNeedApprove || this._isNeedApprove_Obj(step, originDatas[step], adjustDatas[step]);
    });

    isApproveInfo.IsNeedApprove = isNeedApprove || isApproveInfo.IsNeedApprove;

    return isApproveInfo;
  }

  isNeedApprove_plan(FYFC: number, Forecast: number, GoalAndPlanDifferenceLimit: number): IsApproveInfo {
    let isApproveInfo: IsApproveInfo;
    let isNeedApprove: boolean = false;
    let isPopup: boolean = false;
    if (Forecast > FYFC * (1 + GoalAndPlanDifferenceLimit)) {
      isNeedApprove = true;
      isPopup = isNeedApprove;
    }
    isApproveInfo = new IsApproveInfo(isNeedApprove, isPopup);
    return isApproveInfo;
  }

  private _isNeedApprove_Obj(step, originObj, adjustObj) {

    console.log('originObj', originObj, 'adjustObj', adjustObj);
    let isNeedApprove = false;
    let stepCols = this._stepColMap.get(step);
    stepCols.forEach(key => {
      if (originObj[key] != adjustObj[key]) {
        console.log("_isNeedApprove_Obj key", key, "originObj[key]", originObj[key], "adjustObj[key]", adjustObj[key]);
        isNeedApprove = true;
      }
    });
    console.log("_isNeedApprove_Obj", isNeedApprove);
    return isNeedApprove;
  }

  validateGoal_Forecast(shortfall: number): boolean {
    return shortfall > 0;
  }

  getShortfall(goal: number, forecast: number): number {
    let result = goal - forecast;
    return result < 0 ? 0 : result;
  }

  calculateMonthActualPlan(yearConfig: GoalSettingYearConfig, goal: number, actualList: Array<string>): Array<MonthlyPlanFYFCData> {

    console.log("yearConfig", yearConfig, "goal", goal, "actualList", actualList)
    let MonthActualPlanList: Array<MonthlyPlanFYFCData> = [];
    let performanceSettlementMonth = yearConfig.PerformanceSettlementMonth;
    let monthQuantityOfYear = yearConfig.MonthQuantityOfYear;
    try {

      let restMonth = monthQuantityOfYear - performanceSettlementMonth;
      let actualSum = actualList.filter(x => x != '--').reduce((acc, cur) => Number(acc) + Number(cur), 0);

      let averagePlanInMonth = Math.floor((goal - actualSum) / restMonth);
      let restPlanInLastMonth = Math.floor((goal - actualSum) % restMonth);

      MonthActualPlanList = Array(monthQuantityOfYear).fill(null).map((value, index) => {
        // 開interface
        let planValue: string;

        if (index + 1 <= performanceSettlementMonth) {
          planValue = actualList[index];
        } else if (index + 1 < monthQuantityOfYear) {
          planValue = averagePlanInMonth < 0 ? "0" : averagePlanInMonth.toString();
        } else if (index + 1 == monthQuantityOfYear) {
          planValue = averagePlanInMonth < 0 ? "0" : (averagePlanInMonth + restPlanInLastMonth).toString();
        }
        return new MonthlyPlanFYFCData(index + 1, planValue, actualList[index]);
      });

      console.log("restMonth: ", restMonth);
      console.log("actualSum: ", actualSum);

      console.log("averagePlanInMonth: ", averagePlanInMonth);
      console.log("restPlanInLastMonth: ", restPlanInLastMonth);

    } catch (error) {
      throw error.msg;
    }

    return MonthActualPlanList;
  }



  calculateOtherRuleActivityInforce(tabs: Array<any>, yearConfig: GoalSettingYearConfig) {
    let activityValues: Array<ActivityValue> = [];

    let submitRate: number = yearConfig.InforceConvertSubmitRate;
    let meetRate: number = yearConfig.InforceConvertMeetRate;
    let scheduleRate: number = yearConfig.InforceConvertScheduleRate;
    let findRate: number = yearConfig.InforceConvertFindRate;

    tabs = tabs.map(x => {
      x.inforce = this._calculateActivityInforce(Number(x.inforce));
      return x;
    });

    tabs.forEach(tab => {
      let inforce = tab.inforce;
      if (inforce >= 0.5 || tab.name === TIMEBASE.MONTH) {
        inforce = inforce < 0.5 ? 0.5 : inforce; //是month但小於0.5要等於0.5
        activityValues.push(new ActivityValue(
          tab.name,
          this._numberToFix(inforce * findRate, 1).toFixed(1),
          this._numberToFix(inforce * scheduleRate, 1).toFixed(1),
          this._numberToFix(inforce * meetRate, 1).toFixed(1),
          this._numberToFix(inforce * submitRate, 1).toFixed(1),
          inforce.toFixed(1)))
      }
    });

    return activityValues;
  }

  changeEmptyToDash(orgData: GoalSettingStepData): GoalSettingStepData {
    let step1Array = ["FYFC", "MDRT", "PromotionPlan", "FYFCNowToYearEnd", "Actual", "AnnualConvention"];
    let step2Array = ["PerCase"];
    let step5Array = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment", "TeamFYFCActual", "TeamANPActual", "TeamFYFCNowToYearEnd", "TeamANPNowToYearEnd"];
    let step4Array = ["Forecast", "Actual"];
    let agencyPlanArray = ["FYFCForecast", "ANPForecast", "ManpowerPlan", "RecruitmentPlan"];
    let stepMap: Map<string, Array<string>> = new Map<string, Array<string>>();
    stepMap.set("Step1", step1Array);
    stepMap.set("Step2", step2Array);
    stepMap.set("Step4", step4Array);
    stepMap.set("Step5", step5Array);
    stepMap.set("AgencyPlan", agencyPlanArray);
    stepMap.forEach((array, key) => {
      array.forEach(str => {
        if (orgData[key] && orgData[key][str]) {
          orgData[key][str] = this._changeToDash(orgData[key][str]);
        }
      });
    });

    let monthActualPlanList: MonthlyPlanFYFCData[] = orgData.Step4.MonthList;
    for (let i = 0; i < monthActualPlanList.length; i++) {
      monthActualPlanList[i].Plan = this._changeToDash(monthActualPlanList[i].Plan);
    }
    return orgData;
  }

  private _calculateActivityInforce(inforce: number): number {
    let sum = 0;
    if (inforce >= 0.5) {
      let int = Math.floor(inforce / 1);
      let decimal = inforce % 1;
      let decimalResult = 0;
      if (decimal >= 0 && decimal < 0.25) {
        decimalResult = 0;
      } else if (decimal >= 0.25 && decimal < 0.75) {
        decimalResult = 0.5;
      } else if (decimal >= 0.75 && decimal < 1) {
        decimalResult = 1;
      }
      sum = int + decimalResult;
    }
    console.log('sum=', sum);
    return sum;
  }

  _numberToFix(n: number, toFix: number): number {
    let fix10 = Math.pow(10, toFix);
    return Math.round(this._strip(n) * fix10) / fix10;
  }
  _strip(num, precision = 12) {
    return Number(num.toPrecision(precision));
  }

  private _changeToDash(pram: any) {
    return (pram == null || pram == "") ? this.DASH : pram.toString();
  }

}