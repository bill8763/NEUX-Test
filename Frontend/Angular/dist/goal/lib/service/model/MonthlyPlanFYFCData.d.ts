export declare class MonthlyPlanFYFCData {
    private _Month;
    private _Plan;
    private _Actual;
    constructor(Month: number, Plan: string, Actual: string);
    readonly Month: number;
    readonly Actual: string;
    Plan: string;
    clone(): MonthlyPlanFYFCData;
}
