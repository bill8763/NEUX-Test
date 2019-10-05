/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TIMEBASE, Bean, Required } from "@allianzSND/core";
var GoalSettingStep3 = /** @class */ (function () {
    function GoalSettingStep3() {
        this._ActivityValues = [];
    }
    Object.defineProperty(GoalSettingStep3.prototype, "Activity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Activity;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Activity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStep3.prototype, "ActivityValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ActivityValues;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ActivityValues = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Array)
    ], GoalSettingStep3.prototype, "_ActivityValues", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingStep3.prototype, "_Activity", void 0);
    GoalSettingStep3 = tslib_1.__decorate([
        Bean('GoalSettingStep3'),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalSettingStep3);
    return GoalSettingStep3;
}());
export { GoalSettingStep3 };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3.prototype._ActivityValues;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3.prototype._Activity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwMy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBV3hEO1FBTFEsb0JBQWUsR0FBeUIsRUFBRSxDQUFDO0lBTW5ELENBQUM7SUFFRCxzQkFBVyxzQ0FBUTs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUNELFVBQW9CLEtBQWU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyw0Q0FBYzs7OztRQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUNELFVBQTBCLEtBQTJCO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBO0lBaEJEO1FBREMsUUFBUTswQ0FDZ0IsS0FBSzs2REFBcUI7SUFHbkQ7UUFEQyxRQUFROzt1REFDbUI7SUFObkIsZ0JBQWdCO1FBRDVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7T0FDWixnQkFBZ0IsQ0F5QjVCO0lBQUQsdUJBQUM7Q0FBQSxJQUFBO1NBekJZLGdCQUFnQjs7Ozs7O0lBRXpCLDJDQUNtRDs7Ozs7SUFFbkQscUNBQzRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZpdHlWYWx1ZSB9IGZyb20gXCIuL0FjdGl2aXR5VmFsdWVcIjtcbmltcG9ydCB7IFRJTUVCQVNFLCBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdHb2FsU2V0dGluZ1N0ZXAzJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1N0ZXAzIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FjdGl2aXR5VmFsdWVzOiBBcnJheTxBY3Rpdml0eVZhbHVlPiA9IFtdO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0aXZpdHk6IFRJTUVCQVNFO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBY3Rpdml0eSgpOiBUSU1FQkFTRSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BY3Rpdml0eTtcbiAgICB9XG4gICAgcHVibGljIHNldCBBY3Rpdml0eSh2YWx1ZTogVElNRUJBU0UpIHtcbiAgICAgICAgdGhpcy5fQWN0aXZpdHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBY3Rpdml0eVZhbHVlcygpOiBBcnJheTxBY3Rpdml0eVZhbHVlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BY3Rpdml0eVZhbHVlcztcbiAgICB9XG4gICAgcHVibGljIHNldCBBY3Rpdml0eVZhbHVlcyh2YWx1ZTogQXJyYXk8QWN0aXZpdHlWYWx1ZT4pIHtcbiAgICAgICAgdGhpcy5fQWN0aXZpdHlWYWx1ZXMgPSB2YWx1ZTtcbiAgICB9XG5cblxufVxuIl19