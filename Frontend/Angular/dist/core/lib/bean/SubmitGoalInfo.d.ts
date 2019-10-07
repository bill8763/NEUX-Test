import { GoalExtension } from "./GoalExtension";
import { SUBMITGOALTYPE, TIMEBASE, YESNO } from "./CommonEnum";
export declare class SubmitGoalInfo {
    DataYear: number;
    SubmitType: SUBMITGOALTYPE;
    ActivityGoalBase: TIMEBASE;
    IsNeedApprove: YESNO;
    Extensions: Array<GoalExtension>;
    constructor();
}
