import { ActivityValue, GoalSettingYearConfig, MonthlyPlanFYFCData, GoalSettingStepData, IsApproveInfo } from "../service";
export interface goalSettingStep {
    validateGoal_Forecast(forecast: number): boolean;
    getShortfall(goal: number, forecast: number): number;
    calculateMonthActualPlan(yearconfig: GoalSettingYearConfig, goal: number, actualList: Array<string>): Array<MonthlyPlanFYFCData>;
    calculateOtherRuleActivityInforce(tabs: Array<any>, yearConfig: GoalSettingYearConfig): Array<ActivityValue>;
    isNeedApprove(adjustDatas: GoalSettingStepData, originDatas: GoalSettingStepData): IsApproveInfo;
    isNeedApprove_plan(FYFC: number, Forecast: number, GoalAndPlanDifferenceLimit: number): IsApproveInfo;
    changeEmptyToDash(orgData: GoalSettingStepData): GoalSettingStepData;
}
