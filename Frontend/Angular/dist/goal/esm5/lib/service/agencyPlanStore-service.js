/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { AgencyPlanStatus, AGENCY_STATE } from "./model/AgencyPlanStatus";
import * as i0 from "@angular/core";
var AgencyPlanStoreService = /** @class */ (function () {
    function AgencyPlanStoreService() {
        this._agencyState = new AgencyPlanStatus(AGENCY_STATE.DISPLAY, null);
        this._stateBehaviorSubject = new BehaviorSubject(this._agencyState);
        this._detailBehaviorSubject = new BehaviorSubject(this._agencyDetail);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    AgencyPlanStoreService.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._agencyState = state;
        this._stateBehaviorSubject.next(this._agencyState);
    };
    ;
    /**
     * @return {?}
     */
    AgencyPlanStoreService.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this._stateBehaviorSubject;
    };
    ;
    // setCurrentAgencyDetail(detail: any): void {
    //   console.log("setCurrentAgencyDetail detail:",detail);
    //   this._agencyDetail = detail;
    //   this._detailBehaviorSubject.next(this._agencyDetail);
    // };
    // setCurrentAgencyDetail(detail: any): void {
    //   console.log("setCurrentAgencyDetail detail:",detail);
    //   this._agencyDetail = detail;
    //   this._detailBehaviorSubject.next(this._agencyDetail);
    // };
    /**
     * @param {?} agentInfo
     * @return {?}
     */
    AgencyPlanStoreService.prototype.setCurrentAgencyDetail = 
    // setCurrentAgencyDetail(detail: any): void {
    //   console.log("setCurrentAgencyDetail detail:",detail);
    //   this._agencyDetail = detail;
    //   this._detailBehaviorSubject.next(this._agencyDetail);
    // };
    /**
     * @param {?} agentInfo
     * @return {?}
     */
    function (agentInfo) {
        console.log("setCurrentAgencyDetail agentInfo:", agentInfo);
        this._agencyDetail = agentInfo;
        this._detailBehaviorSubject.next(this._agencyDetail);
    };
    ;
    /**
     * @return {?}
     */
    AgencyPlanStoreService.prototype.getCurrentAgencyDetail = /**
     * @return {?}
     */
    function () {
        return this._detailBehaviorSubject;
    };
    ;
    AgencyPlanStoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AgencyPlanStoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ AgencyPlanStoreService.ngInjectableDef = i0.defineInjectable({ factory: function AgencyPlanStoreService_Factory() { return new AgencyPlanStoreService(); }, token: AgencyPlanStoreService, providedIn: "root" });
    return AgencyPlanStoreService;
}());
export { AgencyPlanStoreService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmN5UGxhblN0b3JlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYWdlbmN5UGxhblN0b3JlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxlQUFlLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTFFO0lBV0U7UUFFRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFeEUsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFckQsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRix5Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBQUEsQ0FBQztJQUVGLDhDQUE4QztJQUM5QywwREFBMEQ7SUFDMUQsaUNBQWlDO0lBQ2pDLDBEQUEwRDtJQUMxRCxLQUFLOzs7Ozs7Ozs7O0lBRUwsdURBQXNCOzs7Ozs7Ozs7O0lBQXRCLFVBQXVCLFNBQThCO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRix1REFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDOztnQkEzQ0gsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztpQ0FQRDtDQWtEQyxBQTdDRCxJQTZDQztTQTFDWSxzQkFBc0I7Ozs7OztJQUVqQyx1REFBeUQ7Ozs7O0lBQ3pELHdEQUE2RDs7Ozs7SUFFN0QsOENBQXVDOzs7OztJQUN2QywrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuQWdlbnRJbmZvIH0gZnJvbSBcIi4vbW9kZWxcIjtcbmltcG9ydCB7IEFnZW5jeVBsYW5TdGF0dXMsIEFHRU5DWV9TVEFURSB9IGZyb20gXCIuL21vZGVsL0FnZW5jeVBsYW5TdGF0dXNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFnZW5jeVBsYW5TdG9yZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3N0YXRlQmVoYXZpb3JTdWJqZWN0OiBTdWJqZWN0PEFnZW5jeVBsYW5TdGF0dXM+O1xuICBwcml2YXRlIF9kZXRhaWxCZWhhdmlvclN1YmplY3Q6IFN1YmplY3Q8QWdlbmN5UGxhbkFnZW50SW5mbz47XG5cbiAgcHJpdmF0ZSBfYWdlbmN5U3RhdGU6IEFnZW5jeVBsYW5TdGF0dXM7XG4gIHByaXZhdGUgX2FnZW5jeURldGFpbDogQWdlbmN5UGxhbkFnZW50SW5mbztcblxuICBjb25zdHJ1Y3RvcihcbiAgKSB7XG4gICAgdGhpcy5fYWdlbmN5U3RhdGUgPSBuZXcgQWdlbmN5UGxhblN0YXR1cyhBR0VOQ1lfU1RBVEUuRElTUExBWSwgbnVsbCk7XG4gICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2FnZW5jeVN0YXRlKTtcbiAgICB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2FnZW5jeURldGFpbCk7XG5cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlOiBBZ2VuY3lQbGFuU3RhdHVzKTogdm9pZCB7XG4gICAgdGhpcy5fYWdlbmN5U3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdC5uZXh0KHRoaXMuX2FnZW5jeVN0YXRlKTtcblxuICB9O1xuXG4gIGdldFN0YXRlKCk6IE9ic2VydmFibGU8QWdlbmN5UGxhblN0YXR1cz4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdDtcbiAgfTtcblxuICAvLyBzZXRDdXJyZW50QWdlbmN5RGV0YWlsKGRldGFpbDogYW55KTogdm9pZCB7XG4gIC8vICAgY29uc29sZS5sb2coXCJzZXRDdXJyZW50QWdlbmN5RGV0YWlsIGRldGFpbDpcIixkZXRhaWwpO1xuICAvLyAgIHRoaXMuX2FnZW5jeURldGFpbCA9IGRldGFpbDtcbiAgLy8gICB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLl9hZ2VuY3lEZXRhaWwpO1xuICAvLyB9O1xuXG4gIHNldEN1cnJlbnRBZ2VuY3lEZXRhaWwoYWdlbnRJbmZvOiBBZ2VuY3lQbGFuQWdlbnRJbmZvKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJzZXRDdXJyZW50QWdlbmN5RGV0YWlsIGFnZW50SW5mbzpcIiwgYWdlbnRJbmZvKTtcbiAgICB0aGlzLl9hZ2VuY3lEZXRhaWwgPSBhZ2VudEluZm87XG4gICAgdGhpcy5fZGV0YWlsQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fYWdlbmN5RGV0YWlsKTtcbiAgfTtcblxuICBnZXRDdXJyZW50QWdlbmN5RGV0YWlsKCk6IE9ic2VydmFibGU8QWdlbmN5UGxhbkFnZW50SW5mbz4ge1xuICAgIHJldHVybiB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3Q7XG4gIH07XG5cbn1cbiJdfQ==