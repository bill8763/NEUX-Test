/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingStepDataParams = /** @class */ (function () {
    function GoalSettingStepDataParams(DataYear, isAdjust) {
        this._DataYear = DataYear;
        this._isAdjust = isAdjust;
    }
    Object.defineProperty(GoalSettingStepDataParams.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._DataYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStepDataParams.prototype, "isAdjust", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAdjust;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAdjust = value;
        },
        enumerable: true,
        configurable: true
    });
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
    return GoalSettingStepDataParams;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwRGF0YVBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXBEYXRhUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFXOUMsbUNBQVksUUFBZ0IsRUFBRSxRQUFpQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsK0NBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsK0NBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBbEJEO1FBREMsUUFBUTs7Z0VBQ2lCO0lBRzFCO1FBREMsUUFBUTs7Z0VBQ2tCO0lBTmxCLHlCQUF5QjtRQURyQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7O09BQ3JCLHlCQUF5QixDQTJCckM7SUFBRCxnQ0FBQztDQUFBLElBQUE7U0EzQlkseUJBQXlCOzs7Ozs7SUFFbEMsOENBQzBCOzs7OztJQUUxQiw4Q0FDMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdHb2FsU2V0dGluZ1N0ZXBEYXRhUGFyYW1zJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1N0ZXBEYXRhUGFyYW1ze1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2lzQWRqdXN0OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoRGF0YVllYXI6IG51bWJlciwgaXNBZGp1c3Q6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9EYXRhWWVhciA9IERhdGFZZWFyO1xuICAgICAgICB0aGlzLl9pc0FkanVzdCA9IGlzQWRqdXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IERhdGFZZWFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0FkanVzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWRqdXN0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzQWRqdXN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQWRqdXN0ID0gdmFsdWU7XG4gICAgfVxuXG5cbn0iXX0=