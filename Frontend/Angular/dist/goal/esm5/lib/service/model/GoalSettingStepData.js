/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GoalSettingYearConfig } from "./GoalSettingYearConfig";
import { GoalSettingGoalStatus } from "./GoalSettingGoalStatus";
import { GoalSettingStep4 } from "./GoalSettingStep4";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingStepData = /** @class */ (function () {
    function GoalSettingStepData(DataYear) {
        this._ActualList = [];
        this._DataYear = DataYear;
    }
    Object.defineProperty(GoalSettingStepData.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "YearConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._YearConfig;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._YearConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "GoalStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._GoalStatus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._GoalStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "Step1", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step1;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Step1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "Step2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step2;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Step2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "Step3", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step3;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Step3 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "Step4", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step4;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Step4 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "Step5", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step5;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Step5 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "AgencyPlan", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgencyPlan;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._AgencyPlan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepData.prototype, "ActualList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ActualList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ActualList = value;
        },
        enumerable: true,
        configurable: true
    });
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
    return GoalSettingStepData;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdEQsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUE2QjlDLDZCQUFZLFFBQVE7UUFGWixnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLHlDQUFROzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsMkNBQVU7Ozs7UUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFDRCxVQUFzQixLQUE0QjtZQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBc0IsS0FBNEI7WUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyxzQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQWlCLEtBQXVCO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsc0NBQUs7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUF1QjtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLHNDQUFLOzs7O1FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBQ0QsVUFBaUIsS0FBdUI7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyxzQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQWlCLEtBQXVCO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsc0NBQUs7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUF1QjtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBc0IsS0FBZ0M7WUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVywyQ0FBVTs7OztRQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7OztRQUNELFVBQXNCLEtBQW9CO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUhBO0lBaEZEO1FBREMsUUFBUTs7MERBQ2lCO0lBRzFCO1FBREMsUUFBUTswQ0FDWSxxQkFBcUI7NERBQUM7SUFHM0M7UUFEQyxRQUFROzBDQUNZLHFCQUFxQjs0REFBQztJQVMzQztRQURDLFFBQVE7MENBQ08sZ0JBQWdCO3VEQUFDO0lBbEJ4QixtQkFBbUI7UUFEL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDOztPQUNmLG1CQUFtQixDQTJGL0I7SUFBRCwwQkFBQztDQUFBLElBQUE7U0EzRlksbUJBQW1COzs7Ozs7SUFFNUIsd0NBQzBCOzs7OztJQUUxQiwwQ0FDMkM7Ozs7O0lBRTNDLDBDQUMyQzs7Ozs7SUFFM0MscUNBQWlDOzs7OztJQUVqQyxxQ0FBaUM7Ozs7O0lBRWpDLHFDQUFpQzs7Ozs7SUFFakMscUNBQ2lDOzs7OztJQUVqQyxxQ0FBaUM7Ozs7O0lBRWpDLDBDQUErQzs7Ozs7SUFFL0MsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hbFNldHRpbmdZZWFyQ29uZmlnIH0gZnJvbSBcIi4vR29hbFNldHRpbmdZZWFyQ29uZmlnXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ0dvYWxTdGF0dXNcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDEgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ1N0ZXAxXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXAyIH0gZnJvbSBcIi4vR29hbFNldHRpbmdTdGVwMlwiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwMyB9IGZyb20gXCIuL0dvYWxTZXR0aW5nU3RlcDNcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDQgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ1N0ZXA0XCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXA1IH0gZnJvbSBcIi4vR29hbFNldHRpbmdTdGVwNVwiO1xuaW1wb3J0IHsgQWdlbmN5UGxhbkRldGFpbCB9IGZyb20gXCIuL0FnZW5jeVBsYW5EZXRhaWxcIjtcbmltcG9ydCB7IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcgfSBmcm9tIFwiLi9BZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3XCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdHb2FsU2V0dGluZ1N0ZXBEYXRhJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1N0ZXBEYXRhe1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1llYXJDb25maWc6IEdvYWxTZXR0aW5nWWVhckNvbmZpZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0dvYWxTdGF0dXM6IEdvYWxTZXR0aW5nR29hbFN0YXR1cztcblxuICAgIHByaXZhdGUgX1N0ZXAxOiBHb2FsU2V0dGluZ1N0ZXAxO1xuXG4gICAgcHJpdmF0ZSBfU3RlcDI6IEdvYWxTZXR0aW5nU3RlcDI7XG5cbiAgICBwcml2YXRlIF9TdGVwMzogR29hbFNldHRpbmdTdGVwMztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1N0ZXA0OiBHb2FsU2V0dGluZ1N0ZXA0O1xuXG4gICAgcHJpdmF0ZSBfU3RlcDU6IEdvYWxTZXR0aW5nU3RlcDU7XG5cbiAgICBwcml2YXRlIF9BZ2VuY3lQbGFuOiBBZ2VuY3lQbGFuRGF0YUZvck92ZXJ2aWV3O1xuXG4gICAgcHJpdmF0ZSBfQWN0dWFsTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoRGF0YVllYXIpIHtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSBEYXRhWWVhcjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBEYXRhWWVhcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fRGF0YVllYXI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgWWVhckNvbmZpZygpOiBHb2FsU2V0dGluZ1llYXJDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fWWVhckNvbmZpZztcbiAgICB9XG4gICAgcHVibGljIHNldCBZZWFyQ29uZmlnKHZhbHVlOiBHb2FsU2V0dGluZ1llYXJDb25maWcpIHtcbiAgICAgICAgdGhpcy5fWWVhckNvbmZpZyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEdvYWxTdGF0dXMoKTogR29hbFNldHRpbmdHb2FsU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dvYWxTdGF0dXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgR29hbFN0YXR1cyh2YWx1ZTogR29hbFNldHRpbmdHb2FsU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX0dvYWxTdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBTdGVwMSgpOiBHb2FsU2V0dGluZ1N0ZXAxIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0ZXAxO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFN0ZXAxKHZhbHVlOiBHb2FsU2V0dGluZ1N0ZXAxKSB7XG4gICAgICAgIHRoaXMuX1N0ZXAxID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3RlcDIoKTogR29hbFNldHRpbmdTdGVwMiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdGVwMjtcbiAgICB9XG4gICAgcHVibGljIHNldCBTdGVwMih2YWx1ZTogR29hbFNldHRpbmdTdGVwMikge1xuICAgICAgICB0aGlzLl9TdGVwMiA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFN0ZXAzKCk6IEdvYWxTZXR0aW5nU3RlcDMge1xuICAgICAgICByZXR1cm4gdGhpcy5fU3RlcDM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgU3RlcDModmFsdWU6IEdvYWxTZXR0aW5nU3RlcDMpIHtcbiAgICAgICAgdGhpcy5fU3RlcDMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBTdGVwNCgpOiBHb2FsU2V0dGluZ1N0ZXA0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0ZXA0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFN0ZXA0KHZhbHVlOiBHb2FsU2V0dGluZ1N0ZXA0KSB7XG4gICAgICAgIHRoaXMuX1N0ZXA0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3RlcDUoKTogR29hbFNldHRpbmdTdGVwNSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdGVwNTtcbiAgICB9XG4gICAgcHVibGljIHNldCBTdGVwNSh2YWx1ZTogR29hbFNldHRpbmdTdGVwNSkge1xuICAgICAgICB0aGlzLl9TdGVwNSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEFnZW5jeVBsYW4oKTogQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BZ2VuY3lQbGFuO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFnZW5jeVBsYW4odmFsdWU6IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcpIHtcbiAgICAgICAgdGhpcy5fQWdlbmN5UGxhbiA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEFjdHVhbExpc3QoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BY3R1YWxMaXN0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFjdHVhbExpc3QodmFsdWU6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5fQWN0dWFsTGlzdCA9IHZhbHVlO1xuICAgIH1cblxuXG5cblxufSJdfQ==