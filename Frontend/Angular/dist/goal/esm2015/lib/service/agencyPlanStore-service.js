/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { AgencyPlanStatus, AGENCY_STATE } from "./model/AgencyPlanStatus";
import * as i0 from "@angular/core";
export class AgencyPlanStoreService {
    constructor() {
        this._agencyState = new AgencyPlanStatus(AGENCY_STATE.DISPLAY, null);
        this._stateBehaviorSubject = new BehaviorSubject(this._agencyState);
        this._detailBehaviorSubject = new BehaviorSubject(this._agencyDetail);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this._agencyState = state;
        this._stateBehaviorSubject.next(this._agencyState);
    }
    ;
    /**
     * @return {?}
     */
    getState() {
        return this._stateBehaviorSubject;
    }
    ;
    // setCurrentAgencyDetail(detail: any): void {
    //   console.log("setCurrentAgencyDetail detail:",detail);
    //   this._agencyDetail = detail;
    //   this._detailBehaviorSubject.next(this._agencyDetail);
    // };
    /**
     * @param {?} agentInfo
     * @return {?}
     */
    setCurrentAgencyDetail(agentInfo) {
        console.log("setCurrentAgencyDetail agentInfo:", agentInfo);
        this._agencyDetail = agentInfo;
        this._detailBehaviorSubject.next(this._agencyDetail);
    }
    ;
    /**
     * @return {?}
     */
    getCurrentAgencyDetail() {
        return this._detailBehaviorSubject;
    }
    ;
}
AgencyPlanStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AgencyPlanStoreService.ctorParameters = () => [];
/** @nocollapse */ AgencyPlanStoreService.ngInjectableDef = i0.defineInjectable({ factory: function AgencyPlanStoreService_Factory() { return new AgencyPlanStoreService(); }, token: AgencyPlanStoreService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStoreService.prototype._stateBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStoreService.prototype._detailBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStoreService.prototype._agencyState;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStoreService.prototype._agencyDetail;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmN5UGxhblN0b3JlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYWdlbmN5UGxhblN0b3JlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxlQUFlLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBSzFFLE1BQU07SUFRSjtRQUVFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4RSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVyRCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7Ozs7OztJQVFGLHNCQUFzQixDQUFDLFNBQThCO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7OztZQTNDSCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztJQUdDLHVEQUF5RDs7Ozs7SUFDekQsd0RBQTZEOzs7OztJQUU3RCw4Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFnZW5jeVBsYW5BZ2VudEluZm8gfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHsgQWdlbmN5UGxhblN0YXR1cywgQUdFTkNZX1NUQVRFIH0gZnJvbSBcIi4vbW9kZWwvQWdlbmN5UGxhblN0YXR1c1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmN5UGxhblN0b3JlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGVCZWhhdmlvclN1YmplY3Q6IFN1YmplY3Q8QWdlbmN5UGxhblN0YXR1cz47XG4gIHByaXZhdGUgX2RldGFpbEJlaGF2aW9yU3ViamVjdDogU3ViamVjdDxBZ2VuY3lQbGFuQWdlbnRJbmZvPjtcblxuICBwcml2YXRlIF9hZ2VuY3lTdGF0ZTogQWdlbmN5UGxhblN0YXR1cztcbiAgcHJpdmF0ZSBfYWdlbmN5RGV0YWlsOiBBZ2VuY3lQbGFuQWdlbnRJbmZvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICApIHtcbiAgICB0aGlzLl9hZ2VuY3lTdGF0ZSA9IG5ldyBBZ2VuY3lQbGFuU3RhdHVzKEFHRU5DWV9TVEFURS5ESVNQTEFZLCBudWxsKTtcbiAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fYWdlbmN5U3RhdGUpO1xuICAgIHRoaXMuX2RldGFpbEJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fYWdlbmN5RGV0YWlsKTtcblxuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGU6IEFnZW5jeVBsYW5TdGF0dXMpOiB2b2lkIHtcbiAgICB0aGlzLl9hZ2VuY3lTdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fYWdlbmN5U3RhdGUpO1xuXG4gIH07XG5cbiAgZ2V0U3RhdGUoKTogT2JzZXJ2YWJsZTxBZ2VuY3lQbGFuU3RhdHVzPiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0O1xuICB9O1xuXG4gIC8vIHNldEN1cnJlbnRBZ2VuY3lEZXRhaWwoZGV0YWlsOiBhbnkpOiB2b2lkIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInNldEN1cnJlbnRBZ2VuY3lEZXRhaWwgZGV0YWlsOlwiLGRldGFpbCk7XG4gIC8vICAgdGhpcy5fYWdlbmN5RGV0YWlsID0gZGV0YWlsO1xuICAvLyAgIHRoaXMuX2RldGFpbEJlaGF2aW9yU3ViamVjdC5uZXh0KHRoaXMuX2FnZW5jeURldGFpbCk7XG4gIC8vIH07XG5cbiAgc2V0Q3VycmVudEFnZW5jeURldGFpbChhZ2VudEluZm86IEFnZW5jeVBsYW5BZ2VudEluZm8pOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcInNldEN1cnJlbnRBZ2VuY3lEZXRhaWwgYWdlbnRJbmZvOlwiLCBhZ2VudEluZm8pO1xuICAgIHRoaXMuX2FnZW5jeURldGFpbCA9IGFnZW50SW5mbztcbiAgICB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLl9hZ2VuY3lEZXRhaWwpO1xuICB9O1xuXG4gIGdldEN1cnJlbnRBZ2VuY3lEZXRhaWwoKTogT2JzZXJ2YWJsZTxBZ2VuY3lQbGFuQWdlbnRJbmZvPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGFpbEJlaGF2aW9yU3ViamVjdDtcbiAgfTtcblxufVxuIl19