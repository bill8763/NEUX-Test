import { TranslateService } from '@allianzSND/core';
export declare class ProgressActivityListContentClass {
    private translateService;
    private _translateVariable;
    ActivitiesText: string;
    AchieveText: string;
    FindText: string;
    FindContentText: string;
    ScheduleText: string;
    ScheduleContentText: string;
    MeetPresentText: string;
    MeetPresentContentText: string;
    SubmitText: string;
    SubmitContentText: string;
    InforceText: string;
    InforceContentText: string;
    ActualGoalText: string;
    ActualPlanText: string;
    constructor(translateService: TranslateService);
    private _setTranslateVariable;
    private _translateWithVariable;
}
