import * as tslib_1 from "tslib";
var GoalSettingPlanPopup_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Bean, Required } from "@allianzSND/core";
let GoalSettingPlanPopup = GoalSettingPlanPopup_1 = class GoalSettingPlanPopup {
    /**
     * @param {?} FYFCgoal
     * @param {?} actual
     * @param {?} performanceMonthStart
     * @param {?} performanceMonthEnd
     * @param {?} monthPlanList
     */
    constructor(FYFCgoal, actual, performanceMonthStart, performanceMonthEnd, monthPlanList) {
        this._eachMonthPlan = [];
        this._FYFCGoal = FYFCgoal;
        this._actual = actual;
        this._performanceMonthStart = performanceMonthStart;
        this._performanceMonthEnd = performanceMonthEnd;
        this._monthPlanList = monthPlanList;
    }
    /**
     * @param {?} FYFCgoal
     * @return {?}
     */
    set FYFCGoal(FYFCgoal) {
        this._FYFCGoal = FYFCgoal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set actual(value) {
        this._actual = value;
    }
    /**
     * @param {?} performanceMonthStart
     * @return {?}
     */
    set performanceMonthStart(performanceMonthStart) {
        this._performanceMonthStart = performanceMonthStart;
    }
    /**
     * @param {?} performanceMonthEnd
     * @return {?}
     */
    set performanceMonthEnd(performanceMonthEnd) {
        this._performanceMonthEnd = performanceMonthEnd;
    }
    /**
     * @param {?} monthPlanList
     * @return {?}
     */
    set monthPlanList(monthPlanList) {
        this._monthPlanList = monthPlanList;
    }
    /**
     * @param {?} approveThreshold
     * @return {?}
     */
    set approveThreshold(approveThreshold) {
        this._approveThreshold = approveThreshold;
    }
    /**
     * @param {?} eachMonthPlan
     * @return {?}
     */
    set eachMonthPlan(eachMonthPlan) {
        this._eachMonthPlan = eachMonthPlan;
    }
    /**
     * @return {?}
     */
    get FYFCGoal() {
        return this._FYFCGoal;
    }
    /**
     * @return {?}
     */
    get actual() {
        return this._actual;
    }
    /**
     * @return {?}
     */
    get performanceMonthStart() {
        return this._performanceMonthStart;
    }
    /**
     * @return {?}
     */
    get performanceMonthEnd() {
        return this._performanceMonthEnd;
    }
    /**
     * @return {?}
     */
    get monthPlanList() {
        return this._monthPlanList;
    }
    /**
     * @return {?}
     */
    get approveThreshold() {
        return this._approveThreshold;
    }
    /**
     * @return {?}
     */
    get eachMonthPlan() {
        return this._eachMonthPlan;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const cloneGoalSettingStep4 = new GoalSettingPlanPopup_1(this._FYFCGoal, this._actual, this._performanceMonthStart, this._performanceMonthEnd, this.monthPlanList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clone())));
        cloneGoalSettingStep4._eachMonthPlan = this.eachMonthPlan.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x));
        cloneGoalSettingStep4._approveThreshold = this._approveThreshold;
        return cloneGoalSettingStep4;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdQbGFuUG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdQbGFuUG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxvQkFBb0I7Ozs7Ozs7O0lBdUI3QixZQUFZLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYTtRQUYvRSxtQkFBYyxHQUFpQixFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUdELElBQUksUUFBUSxDQUFDLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUkscUJBQXFCLENBQUMscUJBQTZCO1FBQ25ELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELElBQUksbUJBQW1CLENBQUMsbUJBQTJCO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELElBQUksYUFBYSxDQUFDLGFBQXlDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBd0I7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsSUFBSSxhQUFhLENBQUMsYUFBNEI7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLHFCQUFxQjtRQUNyQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sS0FBSzs7Y0FDRixxQkFBcUIsR0FBRyxJQUFJLHNCQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7UUFDcEwscUJBQXFCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEUscUJBQXFCLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRWpFLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztDQUNKLENBQUE7QUE1Rkc7SUFEQyxRQUFROzt1REFDaUI7QUFHMUI7SUFEQyxRQUFROztxREFDZTtBQUd4QjtJQURDLFFBQVE7O29FQUM4QjtBQUd2QztJQURDLFFBQVE7O2tFQUM0QjtBQUdyQztJQURDLFFBQVE7c0NBQ2UsS0FBSzs0REFBc0I7QUFHbkQ7SUFEQyxRQUFROzsrREFDeUI7QUFHbEM7SUFEQyxRQUFRO3NDQUNlLEtBQUs7NERBQWE7QUFyQmpDLG9CQUFvQjtJQURoQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7O0dBQ2hCLG9CQUFvQixDQStGaEM7U0EvRlksb0JBQW9COzs7Ozs7SUFFN0IseUNBQzBCOzs7OztJQUUxQix1Q0FDd0I7Ozs7O0lBRXhCLHNEQUN1Qzs7Ozs7SUFFdkMsb0RBQ3FDOzs7OztJQUVyQyw4Q0FDbUQ7Ozs7O0lBRW5ELGlEQUNrQzs7Ozs7SUFFbEMsOENBQzBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9udGhseVBsYW5GWUZDRGF0YSB9IGZyb20gXCIuL01vbnRobHlQbGFuRllGQ0RhdGFcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nUGxhblBvcHVwJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1BsYW5Qb3B1cCB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GWUZDR29hbDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfYWN0dWFsOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9wZXJmb3JtYW5jZU1vbnRoU3RhcnQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3BlcmZvcm1hbmNlTW9udGhFbmQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX21vbnRoUGxhbkxpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfYXBwcm92ZVRocmVzaG9sZDogbnVtYmVyO1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2VhY2hNb250aFBsYW46IEFycmF5PHN0cmluZz4gPVtdO1xuXG4gICAgY29uc3RydWN0b3IoRllGQ2dvYWwsIGFjdHVhbCwgcGVyZm9ybWFuY2VNb250aFN0YXJ0LCBwZXJmb3JtYW5jZU1vbnRoRW5kLCBtb250aFBsYW5MaXN0KSB7XG4gICAgICAgIHRoaXMuX0ZZRkNHb2FsID0gRllGQ2dvYWw7XG4gICAgICAgIHRoaXMuX2FjdHVhbCA9IGFjdHVhbDtcbiAgICAgICAgdGhpcy5fcGVyZm9ybWFuY2VNb250aFN0YXJ0ID0gcGVyZm9ybWFuY2VNb250aFN0YXJ0O1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoRW5kID0gcGVyZm9ybWFuY2VNb250aEVuZDtcbiAgICAgICAgdGhpcy5fbW9udGhQbGFuTGlzdCA9IG1vbnRoUGxhbkxpc3Q7XG4gICAgfVxuXG5cbiAgICBzZXQgRllGQ0dvYWwoRllGQ2dvYWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9GWUZDR29hbCA9IEZZRkNnb2FsO1xuICAgIH1cblxuICAgIHNldCBhY3R1YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hY3R1YWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcGVyZm9ybWFuY2VNb250aFN0YXJ0KHBlcmZvcm1hbmNlTW9udGhTdGFydDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BlcmZvcm1hbmNlTW9udGhTdGFydCA9IHBlcmZvcm1hbmNlTW9udGhTdGFydDtcbiAgICB9XG5cbiAgICBzZXQgcGVyZm9ybWFuY2VNb250aEVuZChwZXJmb3JtYW5jZU1vbnRoRW5kOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGVyZm9ybWFuY2VNb250aEVuZCA9IHBlcmZvcm1hbmNlTW9udGhFbmQ7XG4gICAgfVxuXG4gICAgc2V0IG1vbnRoUGxhbkxpc3QobW9udGhQbGFuTGlzdDogQXJyYXk8TW9udGhseVBsYW5GWUZDRGF0YT4pIHtcbiAgICAgICAgdGhpcy5fbW9udGhQbGFuTGlzdCA9IG1vbnRoUGxhbkxpc3Q7XG4gICAgfVxuXG4gICAgc2V0IGFwcHJvdmVUaHJlc2hvbGQoYXBwcm92ZVRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQgPSBhcHByb3ZlVGhyZXNob2xkO1xuICAgIH1cblxuICAgIHNldCBlYWNoTW9udGhQbGFuKGVhY2hNb250aFBsYW46IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5fZWFjaE1vbnRoUGxhbiA9IGVhY2hNb250aFBsYW47XG4gICAgfVxuXG4gICAgZ2V0IEZZRkNHb2FsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fRllGQ0dvYWw7XG4gICAgfVxuXG4gICAgZ2V0IGFjdHVhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsO1xuICAgIH1cblxuICAgIGdldCBwZXJmb3JtYW5jZU1vbnRoU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoU3RhcnQ7XG4gICAgfVxuXG4gICAgZ2V0IHBlcmZvcm1hbmNlTW9udGhFbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJmb3JtYW5jZU1vbnRoRW5kO1xuICAgIH1cblxuICAgIGdldCBtb250aFBsYW5MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhQbGFuTGlzdDtcbiAgICB9XG5cbiAgICBnZXQgYXBwcm92ZVRocmVzaG9sZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgZ2V0IGVhY2hNb250aFBsYW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lYWNoTW9udGhQbGFuO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0ID0gbmV3IEdvYWxTZXR0aW5nUGxhblBvcHVwKHRoaXMuX0ZZRkNHb2FsLCB0aGlzLl9hY3R1YWwsIHRoaXMuX3BlcmZvcm1hbmNlTW9udGhTdGFydCwgdGhpcy5fcGVyZm9ybWFuY2VNb250aEVuZCwgdGhpcy5tb250aFBsYW5MaXN0Lm1hcCh4ID0+IHguY2xvbmUoKSkpO1xuICAgICAgICBjbG9uZUdvYWxTZXR0aW5nU3RlcDQuX2VhY2hNb250aFBsYW4gPSB0aGlzLmVhY2hNb250aFBsYW4ubWFwKHggPT4geCk7XG4gICAgICAgIGNsb25lR29hbFNldHRpbmdTdGVwNC5fYXBwcm92ZVRocmVzaG9sZCA9IHRoaXMuX2FwcHJvdmVUaHJlc2hvbGQ7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lR29hbFNldHRpbmdTdGVwNDtcbiAgICB9XG59Il19