import { PERFORMANCETYPE } from "./CommonEnum";
import { GoalExtension } from "./GoalExtension";
export declare class SubmitGoalPlanInfo {
    PerformanceType: PERFORMANCETYPE;
    Month: number;
    Value: number;
    Extensions: Array<GoalExtension>;
    constructor(PerformanceType: PERFORMANCETYPE, Month: number, Value: number, Extensions: Array<GoalExtension>);
}
