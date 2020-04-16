import { TranslateService } from '@allianzSND/core';
export declare class ProgressHeadContentClass {
    private translateService;
    private _translateVariable;
    MonthText: string;
    QuarterText: string;
    YearText: string;
    ManpowerText: string;
    RecruitmentText: string;
    GoalText: string;
    ForecastText: string;
    ActualText: string;
    ShortfallText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}