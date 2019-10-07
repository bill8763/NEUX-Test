export declare class AgencyPlanGoalExpected {
    private _ANP;
    private _DataYear;
    private _WorkingQuarter;
    private _FYFC;
    private _Q1;
    private _Q2;
    private _Q3;
    private _Q4;
    private _RecruitmentTotal;
    private _FYFCConvertANPRate;
    constructor(dataYear: number);
    ANP: string;
    readonly DataYear: number;
    WorkingQuarter: number;
    FYFC: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    RecruitmentTotal: number;
    FYFCConvertANPRate: number;
    clone(): AgencyPlanGoalExpected;
}
