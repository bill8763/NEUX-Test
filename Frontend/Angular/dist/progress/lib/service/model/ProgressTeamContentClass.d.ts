import { TranslateService } from '@allianzSND/core';
export declare class ProgressTeamContentClass {
    private translateService;
    private _translateVariable;
    MonthText: string;
    QuarterText: string;
    YearText: string;
    ManpowerText: string;
    RecruitmentText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
