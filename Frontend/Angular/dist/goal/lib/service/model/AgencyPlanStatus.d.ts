export declare enum AGENCY_STATE {
    DISPLAY = "display",
    ACCEPT = "accept",
    REJECT = "reject",
    FIRST = "first"
}
export declare class AgencyPlanStatus {
    private _state;
    private _agentID;
    constructor(state: any, agentID: any);
    state: AGENCY_STATE;
    agentID: string;
}
