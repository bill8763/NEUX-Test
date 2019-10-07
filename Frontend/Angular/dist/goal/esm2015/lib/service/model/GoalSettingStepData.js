/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GoalSettingYearConfig } from "./GoalSettingYearConfig";
import { GoalSettingGoalStatus } from "./GoalSettingGoalStatus";
import { GoalSettingStep4 } from "./GoalSettingStep4";
import { Bean, Required } from "@allianzSND/core";
let GoalSettingStepData = class GoalSettingStepData {
    /**
     * @param {?} DataYear
     */
    constructor(DataYear) {
        this._ActualList = [];
        this._DataYear = DataYear;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get YearConfig() {
        return this._YearConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set YearConfig(value) {
        this._YearConfig = value;
    }
    /**
     * @return {?}
     */
    get GoalStatus() {
        return this._GoalStatus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalStatus(value) {
        this._GoalStatus = value;
    }
    /**
     * @return {?}
     */
    get Step1() {
        return this._Step1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step1(value) {
        this._Step1 = value;
    }
    /**
     * @return {?}
     */
    get Step2() {
        return this._Step2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step2(value) {
        this._Step2 = value;
    }
    /**
     * @return {?}
     */
    get Step3() {
        return this._Step3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step3(value) {
        this._Step3 = value;
    }
    /**
     * @return {?}
     */
    get Step4() {
        return this._Step4;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step4(value) {
        this._Step4 = value;
    }
    /**
     * @return {?}
     */
    get Step5() {
        return this._Step5;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step5(value) {
        this._Step5 = value;
    }
    /**
     * @return {?}
     */
    get AgencyPlan() {
        return this._AgencyPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgencyPlan(value) {
        this._AgencyPlan = value;
    }
    /**
     * @return {?}
     */
    get ActualList() {
        return this._ActualList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActualList(value) {
        this._ActualList = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingStepData.prototype, "_DataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", GoalSettingYearConfig)
], GoalSettingStepData.prototype, "_YearConfig", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", GoalSettingGoalStatus)
], GoalSettingStepData.prototype, "_GoalStatus", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", GoalSettingStep4)
], GoalSettingStepData.prototype, "_Step4", void 0);
GoalSettingStepData = tslib_1.__decorate([
    Bean('GoalSettingStepData'),
    tslib_1.__metadata("design:paramtypes", [Object])
], GoalSettingStepData);
export { GoalSettingStepData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._YearConfig;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._GoalStatus;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._Step1;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._Step2;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._Step3;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._Step4;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._Step5;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._AgencyPlan;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepData.prototype._ActualList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdEQsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxtQkFBbUI7Ozs7SUEwQjVCLFlBQVksUUFBUTtRQUZaLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBNEI7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUE0QjtRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBdUI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQXVCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUF1QjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBdUI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQXVCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBZ0M7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFvQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0NBS0osQ0FBQTtBQXhGRztJQURDLFFBQVE7O3NEQUNpQjtBQUcxQjtJQURDLFFBQVE7c0NBQ1kscUJBQXFCO3dEQUFDO0FBRzNDO0lBREMsUUFBUTtzQ0FDWSxxQkFBcUI7d0RBQUM7QUFTM0M7SUFEQyxRQUFRO3NDQUNPLGdCQUFnQjttREFBQztBQWxCeEIsbUJBQW1CO0lBRC9CLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzs7R0FDZixtQkFBbUIsQ0EyRi9CO1NBM0ZZLG1CQUFtQjs7Ozs7O0lBRTVCLHdDQUMwQjs7Ozs7SUFFMUIsMENBQzJDOzs7OztJQUUzQywwQ0FDMkM7Ozs7O0lBRTNDLHFDQUFpQzs7Ozs7SUFFakMscUNBQWlDOzs7OztJQUVqQyxxQ0FBaUM7Ozs7O0lBRWpDLHFDQUNpQzs7Ozs7SUFFakMscUNBQWlDOzs7OztJQUVqQywwQ0FBK0M7Ozs7O0lBRS9DLDBDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYWxTZXR0aW5nWWVhckNvbmZpZyB9IGZyb20gXCIuL0dvYWxTZXR0aW5nWWVhckNvbmZpZ1wiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdHb2FsU3RhdHVzIH0gZnJvbSBcIi4vR29hbFNldHRpbmdHb2FsU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXAxIH0gZnJvbSBcIi4vR29hbFNldHRpbmdTdGVwMVwiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwMiB9IGZyb20gXCIuL0dvYWxTZXR0aW5nU3RlcDJcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDMgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ1N0ZXAzXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXA0IH0gZnJvbSBcIi4vR29hbFNldHRpbmdTdGVwNFwiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwNSB9IGZyb20gXCIuL0dvYWxTZXR0aW5nU3RlcDVcIjtcbmltcG9ydCB7IEFnZW5jeVBsYW5EZXRhaWwgfSBmcm9tIFwiLi9BZ2VuY3lQbGFuRGV0YWlsXCI7XG5pbXBvcnQgeyBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3IH0gZnJvbSBcIi4vQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlld1wiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignR29hbFNldHRpbmdTdGVwRGF0YScpXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdTdGVwRGF0YXtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9ZZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Hb2FsU3RhdHVzOiBHb2FsU2V0dGluZ0dvYWxTdGF0dXM7XG5cbiAgICBwcml2YXRlIF9TdGVwMTogR29hbFNldHRpbmdTdGVwMTtcblxuICAgIHByaXZhdGUgX1N0ZXAyOiBHb2FsU2V0dGluZ1N0ZXAyO1xuXG4gICAgcHJpdmF0ZSBfU3RlcDM6IEdvYWxTZXR0aW5nU3RlcDM7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9TdGVwNDogR29hbFNldHRpbmdTdGVwNDtcblxuICAgIHByaXZhdGUgX1N0ZXA1OiBHb2FsU2V0dGluZ1N0ZXA1O1xuXG4gICAgcHJpdmF0ZSBfQWdlbmN5UGxhbjogQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldztcblxuICAgIHByaXZhdGUgX0FjdHVhbExpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKERhdGFZZWFyKSB7XG4gICAgICAgIHRoaXMuX0RhdGFZZWFyID0gRGF0YVllYXI7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFllYXJDb25maWcoKTogR29hbFNldHRpbmdZZWFyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1llYXJDb25maWc7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgWWVhckNvbmZpZyh2YWx1ZTogR29hbFNldHRpbmdZZWFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX1llYXJDb25maWcgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBHb2FsU3RhdHVzKCk6IEdvYWxTZXR0aW5nR29hbFN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Hb2FsU3RhdHVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEdvYWxTdGF0dXModmFsdWU6IEdvYWxTZXR0aW5nR29hbFN0YXR1cykge1xuICAgICAgICB0aGlzLl9Hb2FsU3RhdHVzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3RlcDEoKTogR29hbFNldHRpbmdTdGVwMSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdGVwMTtcbiAgICB9XG4gICAgcHVibGljIHNldCBTdGVwMSh2YWx1ZTogR29hbFNldHRpbmdTdGVwMSkge1xuICAgICAgICB0aGlzLl9TdGVwMSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFN0ZXAyKCk6IEdvYWxTZXR0aW5nU3RlcDIge1xuICAgICAgICByZXR1cm4gdGhpcy5fU3RlcDI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgU3RlcDIodmFsdWU6IEdvYWxTZXR0aW5nU3RlcDIpIHtcbiAgICAgICAgdGhpcy5fU3RlcDIgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBTdGVwMygpOiBHb2FsU2V0dGluZ1N0ZXAzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0ZXAzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFN0ZXAzKHZhbHVlOiBHb2FsU2V0dGluZ1N0ZXAzKSB7XG4gICAgICAgIHRoaXMuX1N0ZXAzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3RlcDQoKTogR29hbFNldHRpbmdTdGVwNCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdGVwNDtcbiAgICB9XG4gICAgcHVibGljIHNldCBTdGVwNCh2YWx1ZTogR29hbFNldHRpbmdTdGVwNCkge1xuICAgICAgICB0aGlzLl9TdGVwNCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFN0ZXA1KCk6IEdvYWxTZXR0aW5nU3RlcDUge1xuICAgICAgICByZXR1cm4gdGhpcy5fU3RlcDU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgU3RlcDUodmFsdWU6IEdvYWxTZXR0aW5nU3RlcDUpIHtcbiAgICAgICAgdGhpcy5fU3RlcDUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBZ2VuY3lQbGFuKCk6IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWdlbmN5UGxhbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBBZ2VuY3lQbGFuKHZhbHVlOiBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3KSB7XG4gICAgICAgIHRoaXMuX0FnZW5jeVBsYW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBY3R1YWxMaXN0KCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWN0dWFsTGlzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBBY3R1YWxMaXN0KHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuX0FjdHVhbExpc3QgPSB2YWx1ZTtcbiAgICB9XG5cblxuXG5cbn0iXX0=