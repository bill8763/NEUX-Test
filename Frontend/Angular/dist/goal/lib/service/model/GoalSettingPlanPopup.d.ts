import { MonthlyPlanFYFCData } from "./MonthlyPlanFYFCData";
export declare class GoalSettingPlanPopup {
    private _FYFCGoal;
    private _actual;
    private _performanceMonthStart;
    private _performanceMonthEnd;
    private _monthPlanList;
    private _approveThreshold;
    private _eachMonthPlan;
    constructor(FYFCgoal: any, actual: any, performanceMonthStart: any, performanceMonthEnd: any, monthPlanList: any);
    FYFCGoal: number;
    actual: number;
    performanceMonthStart: number;
    performanceMonthEnd: number;
    monthPlanList: Array<MonthlyPlanFYFCData>;
    approveThreshold: number;
    eachMonthPlan: Array<string>;
    clone(): GoalSettingPlanPopup;
}
