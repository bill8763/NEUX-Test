/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PlanFYFCPopupInfo } from './model/GoalSettingCommon';
import { DefaultLoginMgr } from '@allianzSND/core';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class GoalStoreService {
    /**
     * @param {?} loginMgr
     */
    constructor(loginMgr) {
        this.loginMgr = loginMgr;
        this.syncGoalDatas = null;
        this.settingYear = null;
        this.isPromo = false;
        this.canSkip = true;
        this.planFYFCPopupInfo = new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null);
        this.landingStatus = GOAL_LANDING_STATUS.FIRST_INIT;
        this.yearSubject = new BehaviorSubject(this.settingYear);
        this.statusSubject = new BehaviorSubject(this.landingStatus);
        this.isPromoSubject = new BehaviorSubject(this.isPromo);
        this.canSkipSubject = new BehaviorSubject(this.canSkip);
        this.planFYFCPopupInfoSubject = new BehaviorSubject(this.planFYFCPopupInfo);
        this.syncGoalDatasSubject = new BehaviorSubject(this.syncGoalDatas);
        this.goalPopupResponseSubject = new Subject();
        this.loginMgr.subscribeLogout().subscribe((/**
         * @return {?}
         */
        () => {
            //reset to init
            this.setSyncGoalDatas(null);
            this.setGoalLandingStatus(GOAL_LANDING_STATUS.FIRST_INIT);
            this.setSettingYear(null);
            this.setIsPromo(false);
            this.setCanSkip(true);
            this.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null));
        }));
    }
    /**
     * @return {?}
     */
    getSyncGoalDatas() {
        return this.syncGoalDatasSubject.asObservable();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSyncGoalDatas(status) {
        this.syncGoalDatas = status;
        this.syncGoalDatasSubject.next(this.syncGoalDatas);
    }
    /**
     * @return {?}
     */
    getGoalLandingStatus() {
        return this.statusSubject.asObservable();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setGoalLandingStatus(status) {
        this.landingStatus = status;
        this.statusSubject.next(this.landingStatus);
    }
    /**
     * @return {?}
     */
    getSettingYear() {
        return this.yearSubject.asObservable();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setSettingYear(year) {
        this.settingYear = year;
        this.yearSubject.next(this.settingYear);
    }
    /**
     * @return {?}
     */
    getIsPromo() {
        return this.isPromoSubject.asObservable();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setIsPromo(val) {
        this.isPromo = val;
        this.isPromoSubject.next(this.isPromo);
    }
    /**
     * @return {?}
     */
    getCanSkip() {
        return this.canSkipSubject.asObservable();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setCanSkip(val) {
        this.canSkip = val;
        this.canSkipSubject.next(this.canSkip);
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    setPopupResp(resp) {
        this.goalPopupResponseSubject.next(resp);
    }
    /**
     * @return {?}
     */
    getPopupResp() {
        return this.goalPopupResponseSubject.asObservable();
    }
    // for edit personal popup
    /**
     * @param {?} info
     * @return {?}
     */
    setPlanFYFCPopupInfo(info) {
        console.log("Set info");
        this.planFYFCPopupInfo = info;
        if (info.data) {
            this.planFYFCPopupInfo.data.Step4 = this.planFYFCPopupInfo.data.Step4.clone();
        }
        this.planFYFCPopupInfoSubject.next(this.planFYFCPopupInfo);
    }
    /**
     * @return {?}
     */
    getPlanFYFCPopupInfo() {
        return this.planFYFCPopupInfoSubject.asObservable();
    }
}
GoalStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GoalStoreService.ctorParameters = () => [
    { type: DefaultLoginMgr }
];
/** @nocollapse */ GoalStoreService.ngInjectableDef = i0.defineInjectable({ factory: function GoalStoreService_Factory() { return new GoalStoreService(i0.inject(i1.DefaultLoginMgr)); }, token: GoalStoreService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.syncGoalDatas;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.settingYear;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.isPromo;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.canSkip;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.planFYFCPopupInfo;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.landingStatus;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.yearSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.statusSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.isPromoSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.canSkipSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.planFYFCPopupInfoSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.syncGoalDatasSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.goalPopupResponseSubject;
    /**
     * @type {?}
     * @private
     */
    GoalStoreService.prototype.loginMgr;
}
export class GoalPopupResponse {
}
if (false) {
    /** @type {?} */
    GoalPopupResponse.prototype.response;
    /** @type {?} */
    GoalPopupResponse.prototype.type;
}
/** @enum {number} */
const GOAL_LANDING_STATUS = {
    SETTING_SUBMITTED: 0,
    FIRST_INIT: 1,
    FIRST_SET: 2,
    ADJUST_GOAL: 3 // from overview and is adjust
    ,
};
export { GOAL_LANDING_STATUS };
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.SETTING_SUBMITTED] = 'SETTING_SUBMITTED';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.FIRST_INIT] = 'FIRST_INIT';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.FIRST_SET] = 'FIRST_SET';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.ADJUST_GOAL] = 'ADJUST_GOAL';
/** @enum {number} */
const PLAN_FYFC_POPUP_STATE = {
    DISPLAY: 0,
    NEEDAPPROVESUBMIT: 1,
    NOTNEEDAPPROVESUBMIT: 2,
    CLOSE: 3,
};
export { PLAN_FYFC_POPUP_STATE };
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.DISPLAY] = 'DISPLAY';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.NEEDAPPROVESUBMIT] = 'NEEDAPPROVESUBMIT';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.NOTNEEDAPPROVESUBMIT] = 'NOTNEEDAPPROVESUBMIT';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.CLOSE] = 'CLOSE';
/** @enum {number} */
const SYNC_STATUS = {
    SYNC: 0,
    FINISH: 1,
};
export { SYNC_STATUS };
SYNC_STATUS[SYNC_STATUS.SYNC] = 'SYNC';
SYNC_STATUS[SYNC_STATUS.FINISH] = 'FINISH';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2dvYWwtc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLGtCQUFrQixDQUFDOzs7QUFLckUsTUFBTTs7OztJQUVGLFlBQ1ksUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFhN0Isa0JBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHNCQUFpQixHQUFzQixJQUFJLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRyxrQkFBYSxHQUF3QixtQkFBbUIsQ0FBQyxVQUFVLENBQUM7UUFDcEUsZ0JBQVcsR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLGtCQUFhLEdBQXlDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RixtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLDZCQUF3QixHQUF1QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENB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QUFJLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakY7UUFDRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFTSxvQkFBb0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7O1lBcEdKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBSlEsZUFBZTs7Ozs7Ozs7SUFxQnBCLHlDQUEwQzs7Ozs7SUFDMUMsdUNBQW1DOzs7OztJQUNuQyxtQ0FBd0I7Ozs7O0lBQ3hCLG1DQUF1Qjs7Ozs7SUFDdkIsNkNBQXdHOzs7OztJQUN4Ryx5Q0FBNEU7Ozs7O0lBQzVFLHVDQUFxRjs7Ozs7SUFDckYseUNBQXNHOzs7OztJQUN0RywwQ0FBcUY7Ozs7O0lBQ3JGLDBDQUFxRjs7Ozs7SUFDckYsb0RBQW1IOzs7OztJQUNuSCxnREFBcUc7Ozs7O0lBQ3JHLG9EQUE2RTs7Ozs7SUF6QnpFLG9DQUFpQzs7QUFvR3pDLE1BQU07Q0FHTDs7O0lBRkcscUNBQXlCOztJQUN6QixpQ0FBOEI7Ozs7SUFJOUIsb0JBQWlCO0lBQ2pCLGFBQVU7SUFDVixZQUFTO0lBQ1QsY0FBVyxDQUFDLDhCQUE4Qjs7Ozs7Ozs7OztJQUkxQyxVQUFPO0lBQ1Asb0JBQWlCO0lBQ2pCLHVCQUFvQjtJQUNwQixRQUFLOzs7Ozs7Ozs7SUFJTCxPQUFJO0lBQ0osU0FBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGxhbkZZRkNQb3B1cEluZm8gfSBmcm9tICcuL21vZGVsL0dvYWxTZXR0aW5nQ29tbW9uJztcbmltcG9ydCB7IERlZmF1bHRMb2dpbk1nciwgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvYWxTdG9yZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1nclxuICAgICkge1xuICAgICAgICB0aGlzLmxvZ2luTWdyLnN1YnNjcmliZUxvZ291dCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAvL3Jlc2V0IHRvIGluaXRcbiAgICAgICAgICAgIHRoaXMuc2V0U3luY0dvYWxEYXRhcyhudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R29hbExhbmRpbmdTdGF0dXMoR09BTF9MQU5ESU5HX1NUQVRVUy5GSVJTVF9JTklUKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2V0dGluZ1llYXIobnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldElzUHJvbW8oZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRDYW5Ta2lwKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRQbGFuRllGQ1BvcHVwSW5mbyhuZXcgUGxhbkZZRkNQb3B1cEluZm8oUExBTl9GWUZDX1BPUFVQX1NUQVRFLkNMT1NFLCBudWxsKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzeW5jR29hbERhdGFzOiBTWU5DX1NUQVRVUyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZXR0aW5nWWVhcjogbnVtYmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGlzUHJvbW8gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhblNraXAgPSB0cnVlO1xuICAgIHByaXZhdGUgcGxhbkZZRkNQb3B1cEluZm86IFBsYW5GWUZDUG9wdXBJbmZvID0gbmV3IFBsYW5GWUZDUG9wdXBJbmZvKFBMQU5fRllGQ19QT1BVUF9TVEFURS5DTE9TRSwgbnVsbCk7XG4gICAgcHJpdmF0ZSBsYW5kaW5nU3RhdHVzOiBHT0FMX0xBTkRJTkdfU1RBVFVTID0gR09BTF9MQU5ESU5HX1NUQVRVUy5GSVJTVF9JTklUO1xuICAgIHByaXZhdGUgeWVhclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnNldHRpbmdZZWFyKTtcbiAgICBwcml2YXRlIHN0YXR1c1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxHT0FMX0xBTkRJTkdfU1RBVFVTPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5sYW5kaW5nU3RhdHVzKTtcbiAgICBwcml2YXRlIGlzUHJvbW9TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuaXNQcm9tbyk7XG4gICAgcHJpdmF0ZSBjYW5Ta2lwU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmNhblNraXApO1xuICAgIHByaXZhdGUgcGxhbkZZRkNQb3B1cEluZm9TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8UGxhbkZZRkNQb3B1cEluZm8+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnBsYW5GWUZDUG9wdXBJbmZvKTtcbiAgICBwcml2YXRlIHN5bmNHb2FsRGF0YXNTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8U1lOQ19TVEFUVVM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnN5bmNHb2FsRGF0YXMpO1xuICAgIHByaXZhdGUgZ29hbFBvcHVwUmVzcG9uc2VTdWJqZWN0OiBTdWJqZWN0PEdvYWxQb3B1cFJlc3BvbnNlPiA9IG5ldyBTdWJqZWN0KCk7XG5cblxuICAgIHB1YmxpYyBnZXRTeW5jR29hbERhdGFzKCk6IE9ic2VydmFibGU8U1lOQ19TVEFUVVM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3luY0dvYWxEYXRhc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN5bmNHb2FsRGF0YXMoc3RhdHVzOiBTWU5DX1NUQVRVUyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN5bmNHb2FsRGF0YXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc3luY0dvYWxEYXRhc1N1YmplY3QubmV4dCh0aGlzLnN5bmNHb2FsRGF0YXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHb2FsTGFuZGluZ1N0YXR1cygpOiBPYnNlcnZhYmxlPEdPQUxfTEFORElOR19TVEFUVVM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0R29hbExhbmRpbmdTdGF0dXMoc3RhdHVzOiBHT0FMX0xBTkRJTkdfU1RBVFVTKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFuZGluZ1N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5zdGF0dXNTdWJqZWN0Lm5leHQodGhpcy5sYW5kaW5nU3RhdHVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2V0dGluZ1llYXIoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNldHRpbmdZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdZZWFyID0geWVhcjtcbiAgICAgICAgdGhpcy55ZWFyU3ViamVjdC5uZXh0KHRoaXMuc2V0dGluZ1llYXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJc1Byb21vKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1Byb21vU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXNQcm9tbyh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1Byb21vID0gdmFsO1xuICAgICAgICB0aGlzLmlzUHJvbW9TdWJqZWN0Lm5leHQodGhpcy5pc1Byb21vKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2FuU2tpcCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuU2tpcFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENhblNraXAodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FuU2tpcCA9IHZhbDtcbiAgICAgICAgdGhpcy5jYW5Ta2lwU3ViamVjdC5uZXh0KHRoaXMuY2FuU2tpcCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvcHVwUmVzcChyZXNwOiBHb2FsUG9wdXBSZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvYWxQb3B1cFJlc3BvbnNlU3ViamVjdC5uZXh0KHJlc3ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3B1cFJlc3AoKTogT2JzZXJ2YWJsZTxHb2FsUG9wdXBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nb2FsUG9wdXBSZXNwb25zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGVkaXQgcGVyc29uYWwgcG9wdXBcblxuICAgIHB1YmxpYyBzZXRQbGFuRllGQ1BvcHVwSW5mbyhpbmZvOiBQbGFuRllGQ1BvcHVwSW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldCBpbmZvXCIpO1xuICAgICAgICB0aGlzLnBsYW5GWUZDUG9wdXBJbmZvID0gaW5mbztcbiAgICAgICAgaWYgKGluZm8uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wbGFuRllGQ1BvcHVwSW5mby5kYXRhLlN0ZXA0ID0gdGhpcy5wbGFuRllGQ1BvcHVwSW5mby5kYXRhLlN0ZXA0LmNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGFuRllGQ1BvcHVwSW5mb1N1YmplY3QubmV4dCh0aGlzLnBsYW5GWUZDUG9wdXBJbmZvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGxhbkZZRkNQb3B1cEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYW5GWUZDUG9wdXBJbmZvU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICAvLyBlbmQgb2YgZm9yIGVkaXQgcGVyc29uYWwgcG9wdXBcblxufVxuXG5leHBvcnQgY2xhc3MgR29hbFBvcHVwUmVzcG9uc2Uge1xuICAgIHB1YmxpYyByZXNwb25zZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgdHlwZTogTm90aWZpY2F0aW9uVHlwZTtcbn1cblxuZXhwb3J0IGVudW0gR09BTF9MQU5ESU5HX1NUQVRVUyB7XG4gICAgU0VUVElOR19TVUJNSVRURUQsXG4gICAgRklSU1RfSU5JVCwgLy8gZnJvbSBsYW5kaW5nXG4gICAgRklSU1RfU0VULCAvLyBmcm9tIG92ZXJ2aWV3IGFuZCBpc24ndCBhZGpzdXRcbiAgICBBREpVU1RfR09BTCAvLyBmcm9tIG92ZXJ2aWV3IGFuZCBpcyBhZGp1c3Rcbn1cblxuZXhwb3J0IGVudW0gUExBTl9GWUZDX1BPUFVQX1NUQVRFIHtcbiAgICBESVNQTEFZLFxuICAgIE5FRURBUFBST1ZFU1VCTUlULFxuICAgIE5PVE5FRURBUFBST1ZFU1VCTUlULFxuICAgIENMT1NFXG59XG5cbmV4cG9ydCBlbnVtIFNZTkNfU1RBVFVTIHtcbiAgICBTWU5DLFxuICAgIEZJTklTSFxufVxuXG5cblxuIl19