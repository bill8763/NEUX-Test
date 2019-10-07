import { TranslateService } from '@allianzSND/core';
export declare class ProgressTeamMainContentClass {
    private translateService;
    private _translateVariable;
    private _language;
    AgencyTitle: string;
    AllZoneTitle: string;
    GoalText: string;
    ForecastText: string;
    ActualText: string;
    ManpowerText: string;
    ShortfallText: string;
    RecruitmentText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
