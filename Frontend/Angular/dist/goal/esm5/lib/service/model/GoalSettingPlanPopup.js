/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingPlanPopup = /** @class */ (function () {
    function GoalSettingPlanPopup(FYFCgoal, actual, performanceMonthStart, performanceMonthEnd, monthPlanList) {
        this._eachMonthPlan = [];
        this._FYFCGoal = FYFCgoal;
        this._actual = actual;
        this._performanceMonthStart = performanceMonthStart;
        this._performanceMonthEnd = performanceMonthEnd;
        this._monthPlanList = monthPlanList;
    }
    GoalSettingPlanPopup_1 = GoalSettingPlanPopup;
    Object.defineProperty(GoalSettingPlanPopup.prototype, "FYFCGoal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._FYFCGoal;
        },
        set: /**
         * @param {?} FYFCgoal
         * @return {?}
         */
        function (FYFCgoal) {
            this._FYFCGoal = FYFCgoal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "actual", {
        get: /**
         * @return {?}
         */
        function () {
            return this._actual;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._actual = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "performanceMonthStart", {
        get: /**
         * @return {?}
         */
        function () {
            return this._performanceMonthStart;
        },
        set: /**
         * @param {?} performanceMonthStart
         * @return {?}
         */
        function (performanceMonthStart) {
            this._performanceMonthStart = performanceMonthStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "performanceMonthEnd", {
        get: /**
         * @return {?}
         */
        function () {
            return this._performanceMonthEnd;
        },
        set: /**
         * @param {?} performanceMonthEnd
         * @return {?}
         */
        function (performanceMonthEnd) {
            this._performanceMonthEnd = performanceMonthEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "monthPlanList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._monthPlanList;
        },
        set: /**
         * @param {?} monthPlanList
         * @return {?}
         */
        function (monthPlanList) {
            this._monthPlanList = monthPlanList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "approveThreshold", {
        get: /**
         * @return {?}
         */
        function () {
            return this._approveThreshold;
        },
        set: /**
         * @param {?} approveThreshold
         * @return {?}
         */
        function (approveThreshold) {
            this._approveThreshold = approveThreshold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingPlanPopup.prototype, "eachMonthPlan", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eachMonthPlan;
        },
        set: /**
         * @param {?} eachMonthPlan
         * @return {?}
         */
        function (eachMonthPlan) {
            this._eachMonthPlan = eachMonthPlan;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GoalSettingPlanPopup.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cloneGoalSettingStep4 = new GoalSettingPlanPopup_1(this._FYFCGoal, this._actual, this._performanceMonthStart, this._performanceMonthEnd, this.monthPlanList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.clone(); })));
        cloneGoalSettingStep4._eachMonthPlan = this.eachMonthPlan.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x; }));
        cloneGoalSettingStep4._approveThreshold = this._approveThreshold;
        return cloneGoalSettingStep4;
    };
    var GoalSettingPlanPopup_1;
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingPlanPopup.prototype, "_FYFCGoal", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingPlanPopup.prototype, "_actual", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingPlanPopup.prototype, "_performanceMonthStart", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingPlanPopup.prototype, "_performanceMonthEnd", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Array)
    ], GoalSettingPlanPopup.prototype, "_monthPlanList", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingPlanPopup.prototype, "_approveThreshold", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Array)
    ], GoalSettingPlanPopup.prototype, "_eachMonthPlan", void 0);
    GoalSettingPlanPopup = GoalSettingPlanPopup_1 = tslib_1.__decorate([
        Bean('GoalSettingPlanPopup'),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], GoalSettingPlanPopup);
    return GoalSettingPlanPopup;
}());
export { GoalSettingPlanPopup };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._FYFCGoal;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._actual;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._performanceMonthStart;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._performanceMonthEnd;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._monthPlanList;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._approveThreshold;
    /**
     * @type {?}
     * @private
     */
    GoalSettingPlanPopup.prototype._eachMonthPlan;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdQbGFuUG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdQbGFuUG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQTBCOUMsOEJBQVksUUFBUSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxhQUFhO1FBRi9FLG1CQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUd0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUM7UUFDcEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7NkJBN0JRLG9CQUFvQjtJQWdDN0Isc0JBQUksMENBQVE7Ozs7UUE0Qlo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUE5QkQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFNOzs7O1FBNEJWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBOUJELFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFxQjs7OztRQTRCekI7WUFDSSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUN2QyxDQUFDOzs7OztRQTlCRCxVQUEwQixxQkFBNkI7WUFDbkQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQW1COzs7O1FBNEJ2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLENBQUM7Ozs7O1FBOUJELFVBQXdCLG1CQUEyQjtZQUMvQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBYTs7OztRQTRCakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUE5QkQsVUFBa0IsYUFBeUM7WUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBZ0I7Ozs7UUE0QnBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FBQzs7Ozs7UUE5QkQsVUFBcUIsZ0JBQXdCO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhOzs7O1FBNEJqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7OztRQTlCRCxVQUFrQixhQUE0QjtZQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTs7OztJQThCTSxvQ0FBSzs7O0lBQVo7O1lBQ1UscUJBQXFCLEdBQUcsSUFBSSxzQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLEVBQUMsQ0FBQztRQUNwTCxxQkFBcUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7UUFDdEUscUJBQXFCLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRWpFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQzs7SUEzRkQ7UUFEQyxRQUFROzsyREFDaUI7SUFHMUI7UUFEQyxRQUFROzt5REFDZTtJQUd4QjtRQURDLFFBQVE7O3dFQUM4QjtJQUd2QztRQURDLFFBQVE7O3NFQUM0QjtJQUdyQztRQURDLFFBQVE7MENBQ2UsS0FBSztnRUFBc0I7SUFHbkQ7UUFEQyxRQUFROzttRUFDeUI7SUFHbEM7UUFEQyxRQUFROzBDQUNlLEtBQUs7Z0VBQWE7SUFyQmpDLG9CQUFvQjtRQURoQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7O09BQ2hCLG9CQUFvQixDQStGaEM7SUFBRCwyQkFBQztDQUFBLElBQUE7U0EvRlksb0JBQW9COzs7Ozs7SUFFN0IseUNBQzBCOzs7OztJQUUxQix1Q0FDd0I7Ozs7O0lBRXhCLHNEQUN1Qzs7Ozs7SUFFdkMsb0RBQ3FDOzs7OztJQUVyQyw4Q0FDbUQ7Ozs7O0lBRW5ELGlEQUNrQzs7Ozs7SUFFbEMsOENBQzBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9udGhseVBsYW5GWUZDRGF0YSB9IGZyb20gXCIuL01vbnRobHlQbGFuRllGQ0RhdGFcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nUGxhblBvcHVwJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1BsYW5Qb3B1cCB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GWUZDR29hbDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfYWN0dWFsOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9wZXJmb3JtYW5jZU1vbnRoU3RhcnQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3BlcmZvcm1hbmNlTW9udGhFbmQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX21vbnRoUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfYXBwcm92ZVRocmVzaG9sZDogbnVtYmVyO1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2VhY2hNb250aFBsYW46IEFycmF5PHN0cmluZz4gPVtdO1xuXG4gICAgY29uc3RydWN0b3IoRllGQ2dvYWwsIGFjdHVhbCwgcGVyZm9ybWFuY2VNb250aFN0YXJ0LCBwZXJmb3JtYW5jZU1vbnRoRW5kLCBtb250aFBsYW5MaXN0KSB7XG4gICAgICAgIHRoaXMuX0ZZRkNHb2FsID0gRllGQ2dvYWw7XG4gICAgICAgIHRoaXMuX2FjdHVhbCA9IGFjdHVhbDtcbiAgICAgICAgdGhpcy5fcGVyZm9ybWFuY2VNb250aFN0YXJ0ID0gcGVyZm9ybWFuY2VNb250aFN0YXJ0O1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoRW5kID0gcGVyZm9ybWFuY2VNb250aEVuZDtcbiAgICAgICAgdGhpcy5fbW9udGhQbGFuTGlzdCA9IG1vbnRoUGxhbkxpc3Q7XG4gICAgfVxuXG5cbiAgICBzZXQgRllGQ0dvYWwoRllGQ2dvYWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9GWUZDR29hbCA9IEZZRkNnb2FsO1xuICAgIH1cblxuICAgIHNldCBhY3R1YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hY3R1YWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcGVyZm9ybWFuY2VNb250aFN0YXJ0KHBlcmZvcm1hbmNlTW9udGhTdGFydDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BlcmZvcm1hbmNlTW9udGhTdGFydCA9IHBlcmZvcm1hbmNlTW9udGhTdGFydDtcbiAgICB9XG5cbiAgICBzZXQgcGVyZm9ybWFuY2VNb250aEVuZChwZXJmb3JtYW5jZU1vbnRoRW5kOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGVyZm9ybWFuY2VNb250aEVuZCA9IHBlcmZvcm1hbmNlTW9udGhFbmQ7XG4gICAgfVxuXG4gICAgc2V0IG1vbnRoUGxhbkxpc3QobW9udGhQbGFuTGlzdDogQXJyYXk8TW9udGhseVBsYW5GWUZDRGF0YT4pIHtcbiAgICAgICAgdGhpcy5fbW9udGhQbGFuTGlzdCA9IG1vbnRoUGxhbkxpc3Q7XG4gICAgfVxuXG4gICAgc2V0IGFwcHJvdmVUaHJlc2hvbGQoYXBwcm92ZVRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQgPSBhcHByb3ZlVGhyZXNob2xkO1xuICAgIH1cblxuICAgIHNldCBlYWNoTW9udGhQbGFuKGVhY2hNb250aFBsYW46IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5fZWFjaE1vbnRoUGxhbiA9IGVhY2hNb250aFBsYW47XG4gICAgfVxuXG4gICAgZ2V0IEZZRkNHb2FsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fRllGQ0dvYWw7XG4gICAgfVxuXG4gICAgZ2V0IGFjdHVhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsO1xuICAgIH1cblxuICAgIGdldCBwZXJmb3JtYW5jZU1vbnRoU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoU3RhcnQ7XG4gICAgfVxuXG4gICAgZ2V0IHBlcmZvcm1hbmNlTW9udGhFbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoRW5kO1xuICAgIH1cblxuICAgIGdldCBtb250aFBsYW5MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhQbGFuTGlzdDtcbiAgICB9XG5cbiAgICBnZXQgYXBwcm92ZVRocmVzaG9sZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgZ2V0IGVhY2hNb250aFBsYW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lYWNoTW9udGhQbGFuO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0ID0gbmV3IEdvYWxTZXR0aW5nUGxhblBvcHVwKHRoaXMuX0ZZRkNHb2FsLCB0aGlzLl9hY3R1YWwsIHRoaXMuX3BlcmZvcm1hbmNlTW9udGhTdGFydCwgdGhpcy5fcGVyZm9ybWFuY2VNb250aEVuZCwgdGhpcy5tb250aFBsYW5MaXN0Lm1hcCh4ID0+IHguY2xvbmUoKSkpO1xuICAgICAgICBjbG9uZUdvYWxTZXR0aW5nU3RlcDQuX2VhY2hNb250aFBsYW4gPSB0aGlzLmVhY2hNb250aFBsYW4ubWFwKHggPT4geCk7XG4gICAgICAgIGNsb25lR29hbFNldHRpbmdTdGVwNC5fYXBwcm92ZVRocmVzaG9sZCA9IHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQ7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lR29hbFNldHRpbmdTdGVwNDtcbiAgICB9XG59Il19