import { Observable } from 'rxjs';
import { PlanFYFCPopupInfo } from './model/GoalSettingCommon';
import { DefaultLoginMgr, NotificationType } from '@allianzSND/core';
export declare class GoalStoreService {
    private loginMgr;
    constructor(loginMgr: DefaultLoginMgr);
    private syncGoalDatas;
    private settingYear;
    private isPromo;
    private canSkip;
    private planFYFCPopupInfo;
    private landingStatus;
    private yearSubject;
    private statusSubject;
    private isPromoSubject;
    private canSkipSubject;
    private planFYFCPopupInfoSubject;
    private syncGoalDatasSubject;
    private goalPopupResponseSubject;
    getSyncGoalDatas(): Observable<SYNC_STATUS>;
    setSyncGoalDatas(status: SYNC_STATUS): void;
    getGoalLandingStatus(): Observable<GOAL_LANDING_STATUS>;
    setGoalLandingStatus(status: GOAL_LANDING_STATUS): void;
    getSettingYear(): Observable<number>;
    setSettingYear(year: number): void;
    getIsPromo(): Observable<boolean>;
    setIsPromo(val: boolean): void;
    getCanSkip(): Observable<boolean>;
    setCanSkip(val: boolean): void;
    setPopupResp(resp: GoalPopupResponse): void;
    getPopupResp(): Observable<GoalPopupResponse>;
    setPlanFYFCPopupInfo(info: PlanFYFCPopupInfo): void;
    getPlanFYFCPopupInfo(): Observable<PlanFYFCPopupInfo>;
}
export declare class GoalPopupResponse {
    response: boolean;
    type: NotificationType;
}
export declare enum GOAL_LANDING_STATUS {
    SETTING_SUBMITTED = 0,
    FIRST_INIT = 1,
    FIRST_SET = 2,
    ADJUST_GOAL = 3
}
export declare enum PLAN_FYFC_POPUP_STATE {
    DISPLAY = 0,
    NEEDAPPROVESUBMIT = 1,
    NOTNEEDAPPROVESUBMIT = 2,
    CLOSE = 3
}
export declare enum SYNC_STATUS {
    SYNC = 0,
    FINISH = 1
}
