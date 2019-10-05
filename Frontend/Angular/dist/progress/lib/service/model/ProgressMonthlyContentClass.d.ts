import { TranslateService } from '@allianzSND/core';
export declare class ProgressMonthlyContentClass {
    private translateService;
    private _translateVariable;
    MonthlyPlanFYFCTitleText: string;
    MonthText: string;
    PlanText: string;
    ActualText: string;
    TotalForecastTitle: string;
    TotalYTDActualTitle: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
