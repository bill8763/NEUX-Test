/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let GoalSettingStepDataParams = class GoalSettingStepDataParams {
    /**
     * @param {?} DataYear
     * @param {?} isAdjust
     */
    constructor(DataYear, isAdjust) {
        this._DataYear = DataYear;
        this._isAdjust = isAdjust;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @return {?}
     */
    get isAdjust() {
        return this._isAdjust;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAdjust(value) {
        this._isAdjust = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingStepDataParams.prototype, "_DataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Boolean)
], GoalSettingStepDataParams.prototype, "_isAdjust", void 0);
GoalSettingStepDataParams = tslib_1.__decorate([
    Bean('GoalSettingStepDataParams'),
    tslib_1.__metadata("design:paramtypes", [Number, Boolean])
], GoalSettingStepDataParams);
export { GoalSettingStepDataParams };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepDataParams.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStepDataParams.prototype._isAdjust;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwRGF0YVBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyx5QkFBeUI7Ozs7O0lBUWxDLFlBQVksUUFBZ0IsRUFBRSxRQUFpQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0NBR0osQ0FBQTtBQXhCRztJQURDLFFBQVE7OzREQUNpQjtBQUcxQjtJQURDLFFBQVE7OzREQUNrQjtBQU5sQix5QkFBeUI7SUFEckMsSUFBSSxDQUFDLDJCQUEyQixDQUFDOztHQUNyQix5QkFBeUIsQ0EyQnJDO1NBM0JZLHlCQUF5Qjs7Ozs7O0lBRWxDLDhDQUMwQjs7Ozs7SUFFMUIsOENBQzJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignR29hbFNldHRpbmdTdGVwRGF0YVBhcmFtcycpXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdTdGVwRGF0YVBhcmFtc3tcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9pc0FkanVzdDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKERhdGFZZWFyOiBudW1iZXIsIGlzQWRqdXN0OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSBEYXRhWWVhcjtcbiAgICAgICAgdGhpcy5faXNBZGp1c3QgPSBpc0FkanVzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IERhdGFZZWFyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9EYXRhWWVhcjtcbiAgICB9XG4gICAgcHVibGljIHNldCBEYXRhWWVhcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX0RhdGFZZWFyID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNBZGp1c3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FkanVzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpc0FkanVzdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0FkanVzdCA9IHZhbHVlO1xuICAgIH1cblxuXG59Il19