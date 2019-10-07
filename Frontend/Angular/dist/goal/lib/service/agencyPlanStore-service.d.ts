import { Observable } from "rxjs";
import { AgencyPlanAgentInfo } from "./model";
import { AgencyPlanStatus } from "./model/AgencyPlanStatus";
export declare class AgencyPlanStoreService {
    private _stateBehaviorSubject;
    private _detailBehaviorSubject;
    private _agencyState;
    private _agencyDetail;
    constructor();
    setState(state: AgencyPlanStatus): void;
    getState(): Observable<AgencyPlanStatus>;
    setCurrentAgencyDetail(agentInfo: AgencyPlanAgentInfo): void;
    getCurrentAgencyDetail(): Observable<AgencyPlanAgentInfo>;
}
