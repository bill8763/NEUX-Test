import { APPROVESTATUS } from "./GoalSettingCommon";
import { ExtensionData } from "@allianzSND/core";
export declare class GoalSettingGoalStatus {
    private _DataYear;
    private _IsCurrent;
    private _PersonnelGoalApplicableYM;
    private _TeamGoalApplicableYM;
    private _GoalSetMonth;
    private _ApproveStatus;
    private _IsFirstTime;
    private _IsNeedSetting;
    private _RemainingDays;
    private _SupervisorComment;
    private _Extension;
    constructor();
    getExtension(): ExtensionData;
    setExtension(extension: any): void;
    PersonnelGoalApplicableYM: number;
    TeamGoalApplicableYM: number;
    GoalSetMonth: number;
    ApproveStatus: APPROVESTATUS;
    IsFirstTime: boolean;
    IsNeedSetting: boolean;
    RemainingDays: number;
    DataYear: number;
    IsCurrent: string;
    SupervisorComment: string;
}
