import { GoalSettingStepData } from "./GoalSettingStepData";
export declare enum DWM_DATETYPE {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly"
}
export declare enum GOALSETTINGSTEP {
    STEP1 = 1,
    STEP2 = 2,
    STEP3 = 3,
    STEP4 = 4,
    STEP5 = 5
}
export declare enum GOALSETTINGSETMODE {
    SET_NEXT_YESR = 0,
    ADGUST_GOAL = 1
}
export declare enum ROLE {
    AGENT = "AG",
    AGENTLEADER = "AL",
    ZONEHEAD = "Manager",
    CAO = "Supervisor"
}
export declare enum APPROVESTATUS {
    PENDING = "P",
    WAINTING = "W",
    NONE = "N",
    APPROVE = "A"
}
export declare enum APITYPE {
    SQLITE = "SQLITE",
    RESTFUL = "RESTFUL",
    MOCK = "MOCK"
}
export declare class ValidationState {
    private _step;
    private _isDataLegal;
    constructor();
    step: number;
    isDataLegal: boolean;
}
export declare class PlanFYFCPopupInfo {
    private _state;
    private _data;
    constructor(state: number, data: GoalSettingStepData);
    state: number;
    data: GoalSettingStepData;
}
