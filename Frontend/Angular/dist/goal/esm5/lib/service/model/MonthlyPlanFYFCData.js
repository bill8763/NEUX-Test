/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var MonthlyPlanFYFCData = /** @class */ (function () {
    function MonthlyPlanFYFCData(Month, Plan, Actual) {
        this._Month = Month;
        this._Plan = Plan;
        this._Actual = Actual;
    }
    MonthlyPlanFYFCData_1 = MonthlyPlanFYFCData;
    Object.defineProperty(MonthlyPlanFYFCData.prototype, "Month", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthlyPlanFYFCData.prototype, "Actual", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Actual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthlyPlanFYFCData.prototype, "Plan", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Plan;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Plan = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MonthlyPlanFYFCData.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MonthlyPlanFYFCData_1(this._Month, this._Plan, this._Actual);
    };
    var MonthlyPlanFYFCData_1;
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
    return MonthlyPlanFYFCData;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGhseVBsYW5GWUZDRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Nb250aGx5UGxhbkZZRkNEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFjOUMsNkJBQVksS0FBWSxFQUFFLElBQVcsRUFBRSxNQUFhO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7NEJBZlEsbUJBQW1CO0lBaUI1QixzQkFBVyxzQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVDQUFNOzs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcscUNBQUk7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7Ozs7SUFNTSxtQ0FBSzs7O0lBQVo7UUFDSSxPQUFPLElBQUkscUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDOztJQWhDRDtRQURDLFFBQVE7O3VEQUNjO0lBR3ZCO1FBREMsUUFBUTs7c0RBQ2E7SUFHdEI7UUFEQyxRQUFROzt3REFDZTtJQVRmLG1CQUFtQjtRQUQvQixJQUFJLENBQUMscUJBQXFCLENBQUM7O09BQ2YsbUJBQW1CLENBb0MvQjtJQUFELDBCQUFDO0NBQUEsSUFBQTtTQXBDWSxtQkFBbUI7Ozs7OztJQUU1QixxQ0FDdUI7Ozs7O0lBRXZCLG9DQUNzQjs7Ozs7SUFFdEIsc0NBQ3dCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignTW9udGhseVBsYW5GWUZDRGF0YScpXG5leHBvcnQgY2xhc3MgTW9udGhseVBsYW5GWUZDRGF0YSB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Nb250aDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfUGxhbjogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0dWFsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihNb250aDpudW1iZXIsIFBsYW46c3RyaW5nLCBBY3R1YWw6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fTW9udGggPSBNb250aDtcbiAgICAgICAgdGhpcy5fUGxhbiA9IFBsYW47XG4gICAgICAgIHRoaXMuX0FjdHVhbCA9IEFjdHVhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IE1vbnRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Nb250aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEFjdHVhbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWN0dWFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgUGxhbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUGxhbjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCBQbGFuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fUGxhbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9uZSgpOiBNb250aGx5UGxhbkZZRkNEYXRhe1xuICAgICAgICByZXR1cm4gbmV3IE1vbnRobHlQbGFuRllGQ0RhdGEodGhpcy5fTW9udGgsIHRoaXMuX1BsYW4sIHRoaXMuX0FjdHVhbCk7XG4gICAgfVxufSJdfQ==