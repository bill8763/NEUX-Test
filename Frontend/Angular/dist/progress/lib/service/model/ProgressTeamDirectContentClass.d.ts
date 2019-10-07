import { TranslateService } from '@allianzSND/core';
export declare class ProgressTeamDirectContentClass {
    private translateService;
    private _translateVariable;
    DirectUnitTitle: string;
    ActivitiesText: string;
    GoalText: string;
    ForecastText: string;
    ActualText: string;
    ShortfallText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
