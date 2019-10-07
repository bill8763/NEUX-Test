import { SubmitGoalInfo } from "./SubmitGoalInfo";
import { SubmitGoalSettingValue } from "./SubmitGoalSettingValue";
import { SubmitGoalPlan } from "./SubmitGoalPlan";
import { GoalExtension } from "./GoalExtension";
export declare class SubmitGoalData {
    SubmitInfo: SubmitGoalInfo;
    GoalValue: SubmitGoalSettingValue;
    GoalPlan: SubmitGoalPlan;
    Extensions: Array<GoalExtension>;
    constructor(SubmitInfo: any, GoalValue: any, GoalPlan: any);
}
