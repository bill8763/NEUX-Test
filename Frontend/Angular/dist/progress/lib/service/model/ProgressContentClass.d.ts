import { TranslateService } from '@allianzSND/core';
export declare class ProgressContentClass {
    private translateService;
    private _translateVariable;
    PersonalText: string;
    TeamText: string;
    MonthText: string;
    QuarterText: string;
    YearText: string;
    BackToProgressBtnText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
