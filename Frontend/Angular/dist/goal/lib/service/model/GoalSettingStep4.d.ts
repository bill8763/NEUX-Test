import { MonthlyPlanFYFCData } from "./MonthlyPlanFYFCData";
export declare class GoalSettingStep4 {
    private _Forecast;
    private _Shortfall;
    private _Actual;
    private _MonthList;
    constructor();
    Forecast: string;
    Shortfall: string;
    Actual: string;
    MonthList: Array<MonthlyPlanFYFCData>;
    clone(): GoalSettingStep4;
}
