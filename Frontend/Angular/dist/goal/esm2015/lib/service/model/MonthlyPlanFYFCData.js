import * as tslib_1 from "tslib";
var MonthlyPlanFYFCData_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Bean, Required } from "@allianzSND/core";
let MonthlyPlanFYFCData = MonthlyPlanFYFCData_1 = class MonthlyPlanFYFCData {
    /**
     * @param {?} Month
     * @param {?} Plan
     * @param {?} Actual
     */
    constructor(Month, Plan, Actual) {
        this._Month = Month;
        this._Plan = Plan;
        this._Actual = Actual;
    }
    /**
     * @return {?}
     */
    get Month() {
        return this._Month;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @return {?}
     */
    get Plan() {
        return this._Plan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Plan(value) {
        this._Plan = value;
    }
    /**
     * @return {?}
     */
    clone() {
        return new MonthlyPlanFYFCData_1(this._Month, this._Plan, this._Actual);
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], MonthlyPlanFYFCData.prototype, "_Month", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], MonthlyPlanFYFCData.prototype, "_Plan", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], MonthlyPlanFYFCData.prototype, "_Actual", void 0);
MonthlyPlanFYFCData = MonthlyPlanFYFCData_1 = tslib_1.__decorate([
    Bean('MonthlyPlanFYFCData'),
    tslib_1.__metadata("design:paramtypes", [Number, String, String])
], MonthlyPlanFYFCData);
export { MonthlyPlanFYFCData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MonthlyPlanFYFCData.prototype._Month;
    /**
     * @type {?}
     * @private
     */
    MonthlyPlanFYFCData.prototype._Plan;
    /**
     * @type {?}
     * @private
     */
    MonthlyPlanFYFCData.prototype._Actual;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGhseVBsYW5GWUZDRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Nb250aGx5UGxhbkZZRkNEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsbUJBQW1COzs7Ozs7SUFXNUIsWUFBWSxLQUFZLEVBQUUsSUFBVyxFQUFFLE1BQWE7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLHFCQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNKLENBQUE7QUFqQ0c7SUFEQyxRQUFROzttREFDYztBQUd2QjtJQURDLFFBQVE7O2tEQUNhO0FBR3RCO0lBREMsUUFBUTs7b0RBQ2U7QUFUZixtQkFBbUI7SUFEL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDOztHQUNmLG1CQUFtQixDQW9DL0I7U0FwQ1ksbUJBQW1COzs7Ozs7SUFFNUIscUNBQ3VCOzs7OztJQUV2QixvQ0FDc0I7Ozs7O0lBRXRCLHNDQUN3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ01vbnRobHlQbGFuRllGQ0RhdGEnKVxuZXhwb3J0IGNsYXNzIE1vbnRobHlQbGFuRllGQ0RhdGEge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfTW9udGg6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1BsYW46IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FjdHVhbDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoTW9udGg6bnVtYmVyLCBQbGFuOnN0cmluZywgQWN0dWFsOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX01vbnRoID0gTW9udGg7XG4gICAgICAgIHRoaXMuX1BsYW4gPSBQbGFuO1xuICAgICAgICB0aGlzLl9BY3R1YWwgPSBBY3R1YWw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBNb250aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fTW9udGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBY3R1YWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdHVhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFBsYW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BsYW47XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXQgUGxhbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1BsYW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvbmUoKTogTW9udGhseVBsYW5GWUZDRGF0YXtcbiAgICAgICAgcmV0dXJuIG5ldyBNb250aGx5UGxhbkZZRkNEYXRhKHRoaXMuX01vbnRoLCB0aGlzLl9QbGFuLCB0aGlzLl9BY3R1YWwpO1xuICAgIH1cbn0iXX0=